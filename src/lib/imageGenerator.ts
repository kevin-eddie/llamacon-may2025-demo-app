import { User } from "../types/post";
import { addAdvertisement } from "../data/advertisements";

export async function generateAdvertisementImage(advertiser?: User): Promise<string> {
  // Create a personalized prompt based on the advertiser's business information
  let prompt = "Create a professional advertisement image that is visually appealing and engaging.";
  
  if (advertiser) {
    prompt = `Create a professional advertisement image for ${advertiser.business_type} business "${advertiser.display_name}". 
    Business Description: ${advertiser.business_description}
    Target Audience: ${advertiser.target_audience?.age_range} years old, interested in ${advertiser.target_audience?.interests?.join(", ")}, 
    targeting ${advertiser.target_audience?.demographics?.join(", ")}.
    The image should be modern, professional, and appeal to the target audience's interests and demographics.`;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;

    // Store the advertisement if it's from an advertiser
    if (advertiser) {
      addAdvertisement({
        id: `ad-${Date.now()}`,
        advertiser,
        image_url: imageUrl,
        date_created: new Date().toISOString(),
        target_audience: advertiser.target_audience || {
          age_range: "",
          interests: [],
          demographics: []
        },
        business_type: advertiser.business_type || "",
        business_description: advertiser.business_description || ""
      });
    }

    return imageUrl;
  } catch (error) {
    console.error("Error generating advertisement image:", error);
    throw error;
  }
} 