import { useContext, useState } from "react";
import { ImageContext } from "../../../context/ImageContext";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchImage, setSearchImage } = useContext(ImageContext);

  // setSearchImage is a function that sets the searchImage state to the search term entered by the user in the search field and then it is passed to the useImagesHook.jsx file to fetch images based on the search term entered by the user in the search field

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    //dynamically updates url: https://api.unsplash.com/search/photos?page=1&per_page=12&query=${searchQuery}&client_id=${
  };

  const handleSearch = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setSearchImage(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="SearchContainer__SearchField">
      <input
        className="SearchField__Input"
        type="search"
        placeholder="Search Images"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        disabled={!searchTerm}
        className="SearchField__Button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
