import axios from "axios";

export const getImages = async (page, searchImage) => {
  try {
    const response = await axios(`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${searchImage}&client_id=${
      import.meta.env.VITE_REACT_APP_ACCESS_KEY}`);
    const { results, total, total_pages } = response.data;
    return { results, total, total_pages, error: null };
  } catch (error) {
    console.error("Error fetching images:", error);
    return { results: null, total: null, total_pages: null, error: error };
  }
};
