import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateImageFromText = async (text: string) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: text,
      n: 1,
      size: "1024x1024",
    });

    console.log(response.data);

    let image_url = response.data[0].url;

    return image_url;
  } catch (error) {
    console.log(error);
  }
};
