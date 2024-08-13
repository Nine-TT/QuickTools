import axios from "axios";

// Kiểm tra và đảm bảo rằng các biến môi trường đã được định nghĩa
const API_URL = process.env.NEXT_PUBLIC_REMOVEBG_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_REMOVEBG_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error(
    "API_URL or API_KEY is not defined in environment variables."
  );
}

export const removeBg = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("image_file", imageFile);
    formData.append("size", "auto");

    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-Api-Key": API_KEY,
      },
      responseType: "blob",
    });

    console.log(response.data);

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error("Error removing background:", error);
    throw error;
  }
};
