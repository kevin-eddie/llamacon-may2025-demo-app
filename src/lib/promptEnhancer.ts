import { User } from "../types/post";
import { ProductDetails } from "../data/advertisements";
import Groq from 'groq-sdk';

// Initialize Groq client for Llama 4
const groq = new Groq({
  dangerouslyAllowBrowser: true // Required for client-side usage
});

export async function enhancePromptWithLlama4(
  advertiser?: User,
  productDetails?: ProductDetails
): Promise<string> {
  if (!advertiser || !productDetails) {
    throw new Error("Advertiser and product details are required");
  }

  // Create the base prompt that we'll enhance
  const basePrompt = `Create a professional advertisement image for ${advertiser.business_type} business "${advertiser.display_name}".
    
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
    // Use Llama 4 to enhance the prompt
    const response = await groq.chat.completions.create({
      model: "llama4-8b-16e-instruct", // Using Llama 4 model by Groq
      messages: [
        {
          role: "system",
          content: `You are an expert advertising prompt engineer. Your task is to enhance advertising image generation prompts to create more compelling, detailed, and effective images. 
          
          Follow these steps:
          1. Analyze the provided base prompt which contains information about a business and product
          2. Identify key visual elements that should be highlighted
          3. Add specific details about composition, style, color palette, lighting, mood, and visual metaphors
          4. Enhance the prompt with additional descriptive language that will help generate a more professional and appealing advertisement
          5. Make the prompt more specific and detailed, while maintaining the original intent and information
          6. Return ONLY the enhanced prompt, without explanations or additional text`
        },
        {
          role: "user",
          content: `Please enhance this advertisement image prompt to create a more compelling and effective advertisement:
          
          ${basePrompt}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    // Extract the enhanced prompt
    const enhancedPrompt = response.choices[0].message.content;
    console.log('Enhanced prompt generated with Llama 4');
    
    return enhancedPrompt || basePrompt; // Return the enhanced prompt, or fall back to the base prompt if empty
  } catch (error) {
    console.error("Error enhancing prompt with Llama 4:", error);
    // If there's an error, return the original prompt
    return basePrompt;
  }
} 