import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_PEXELS_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error(
    "API_URL or API_KEY is not defined in environment variables."
  );
}

export const getAllImage = async (page: number) => {
  const response = await axios.get(
    `${API_URL}/curated?page=${page}&per_page=30`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  console.log(page);

  return response.data;
};
