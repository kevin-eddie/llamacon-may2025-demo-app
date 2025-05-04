import { User } from "../types/post";
import { addAdvertisement, Advertisement, ProductDetails } from "../data/advertisements";
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  dangerouslyAllowBrowser: true // Required for client-side usage
});

export async function generateAdvertisementImage(
  advertiser?: User,
  productDetails?: ProductDetails
): Promise<string> {
  if (!advertiser || !productDetails) {
    throw new Error("Advertiser and product details are required");
  }

  // Create a personalized prompt based on the advertiser's business information and product details
  const prompt = `Create a professional advertisement image for ${advertiser.business_type} business "${advertiser.display_name}".
    
    Product Information:
    - Name: ${productDetails.name}
    - Description: ${productDetails.description}
    - Key Features: ${productDetails.features}
    - Specific Target Audience: ${productDetails.targetAudience}
    
    Business Context:
    - Type: ${advertiser.business_type}
    - Description: ${advertiser.business_description}
    - General Target Audience: ${advertiser.target_audience?.age_range} years old, interested in ${advertiser.target_audience?.interests?.join(", ")}, 
    targeting ${advertiser.target_audience?.demographics?.join(", ")}
    
    The image should be modern, professional, and appeal to the target audience's interests and demographics.
    Focus on showcasing the product's key features while maintaining the brand's identity.`;

  try {
    // Use OpenAI SDK to generate image
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    // Extract image URL from response
    const imageUrl = response.data[0].url;
    console.log('Generated image URL:', imageUrl);

    // Create the advertisement object
    const advertisement: Advertisement = {
      id: `ad-${Date.now()}`,
      advertiser,
      image_url: imageUrl,
      date_created: new Date().toISOString(),
      target_audience: {
        age_range: advertiser.target_audience?.age_range || "",
        interests: advertiser.target_audience?.interests || [],
        demographics: advertiser.target_audience?.demographics || []
      },
      business_type: advertiser.business_type || "",
      business_description: advertiser.business_description || "",
      product_details: productDetails
    };

    console.log('Advertisement data:', advertisement);

    // Add to in-memory storage
    addAdvertisement(advertisement);

    // Save to file
    try {
      const saveResponse = await fetch('/api/advertisements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advertisement),
      });

      if (!saveResponse.ok) {
        console.error('Failed to save advertisement to file');
      }
    } catch (error) {
      console.error('Error saving advertisement to file:', error);
    }

    return imageUrl;
  } catch (error) {
    console.error("Error generating advertisement image:", error);
    throw error;
  }
}

/**
 * Customizes an advertisement image for a specific user by generating a new image
 * based on the original advertisement and user characteristics.
 * 
 * @param imageUrl The URL of the original advertisement image
 * @param ad The advertisement object
 * @param user The user viewing the advertisement
 * @returns Promise<string> URL of the customized image
 */
export async function customizeAdImageForUser(
  imageUrl: string,
  ad: Advertisement,
  user: User
): Promise<string> {
  if (!imageUrl || !ad || !user) {
    throw new Error("Image URL, advertisement, and user are required");
  }

  // Extract relevant user characteristics for customization
  const userInterests = user.interests || [];
  const userAge = user.age_group || "25-34"; // Default if not available
  const userPreferences = user.preferences || [];
  const userDemographics = user.demographics || [];

  // Match target audience with user characteristics
  const matchingInterests = ad.target_audience.interests.filter(interest => 
    userInterests.includes(interest)
  );

  // Since we can't directly edit an image from a URL using OpenAI's API,
  // we'll describe the original image and request a new customized version
  const originalImageDescription = `An advertisement for ${ad.business_type} business "${ad.advertiser.display_name}"` +
    (ad.product_details?.name ? ` featuring their product "${ad.product_details.name}"` : "") +
    `.`;

  // Create a customization prompt based on user characteristics
  const customizationPrompt = `Create a personalized version of this advertisement:
    
    Original Advertisement Description: ${originalImageDescription}
    ${ad.product_details?.description ? `Product Description: ${ad.product_details.description}` : ""}
    ${ad.product_details?.features ? `Key Features: ${ad.product_details.features}` : ""}
    
    Personalize this for a user with these characteristics:
    - Age Group: ${userAge}
    - Interests: ${userInterests.join(', ')}
    - Demographics: ${userDemographics.join(', ')}
    - Preferences: ${userPreferences.join(', ')}
    
    Make the advertisement more appealing to this specific user by:
    - Adjusting colors and style to match the user's demographic and age group
    - Emphasizing aspects that align with the user's specific interests: ${matchingInterests.join(', ')}
    - Maintaining the original product and brand identity
    - Creating a visually similar but personalized version of the original advertisement
    
    Important: The image should clearly be an advertisement for the same product as the original, but subtly customized for this specific user.`;

  try {
    // Generate a new customized image with the prompt
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: customizationPrompt,
      n: 1,
      size: "1024x1024",
    });

    const customizedImageUrl = response.data[0].url;
    console.log('Generated customized image URL:', customizedImageUrl);
    return customizedImageUrl;
  } catch (error) {
    console.error("Error customizing advertisement image:", error);
    // Return original image if there's an error
    return imageUrl;
  }
} 