import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true // Note: In production, you should use a backend API
});

export async function generateAdvertisementImage(): Promise<string> {
  const userProfile = `
Sarah is a 25 year old woman who consistently buys cat supplies, and is a fan of environmental products.
`;

  const llamaGeneratedPrompt = `
Design an ad featuring a playful, eco-friendly cat product in a bright, modern setting. Use natural colors and include subtle environmental motifs like leaves or recycled materials. The overall mood should be cheerful and inviting, appealing to young, environmentally conscious pet owners.
`;

  const description = `
Create a visually compelling advertisement image tailored for the following user:

User Profile:
${userProfile}

Personalized Image Edit Instructions:
${llamaGeneratedPrompt}

Guidelines:
- The image should be eye-catching and suitable for a digital ad campaign.
- Incorporate elements that reflect the user's interests, values, and demographic.
- Ensure the style and mood align with the user's preferences.
- Avoid text in the image unless specified in the instructions.
- Focus on authenticity and emotional appeal.

Generate the image at 1024x1024 resolution.
`;

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: description,
      n: 1,
      size: "1024x1024"
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
} 