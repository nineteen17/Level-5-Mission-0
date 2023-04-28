import { createContext, useState } from "react";
import { useInfiniteImages }from "../hooks/useImagesHook";

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [searchImage, setSearchImage] = useState("");
 
  const { data, status, hasNextPage ,fetchNextPage } = useInfiniteImages(searchImage || "New Zealand");
  const value = {
    data,
    status,
    hasNextPage,
    fetchNextPage,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export default ImageContextProvider;
