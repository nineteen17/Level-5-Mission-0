import { useContext } from "react";
import { ImageContext } from "../../../context/ImageContext";
import Image from "./Image";
import ImageLoading from "./ImageLoading";

const Images = () => {
  const { data, status, searchImage, fetchNextPage } = useContext(ImageContext);
  console.log(data);
  return (
    <div className="Home__Images">
      <h1 className="Images__h1">
        Matches for "{searchImage || "New Zealand"}"
      </h1>

      <div className="Images__Layout "
>
        {status !== "success" ? (
          <ImageLoading item={8} />
        ) : (
          data.pages.map((page) =>
            page.results.map((data, key) => <Image key={key} data={data} />)
          )
        )}
      </div>
    </div>
  );
};

export default Images;
