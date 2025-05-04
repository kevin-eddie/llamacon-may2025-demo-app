import { User } from "../types/post";
import { addAdvertisement, Advertisement, ProductDetails } from "../data/advertisements";

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
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to generate image");
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;
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