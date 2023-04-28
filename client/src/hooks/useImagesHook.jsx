
import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { getImages } from "../api/imagesApi";


// useInfiniteQuery is a react-query hook that fetches data from the api and caches it for future use. It also provides a lot of other features like pagination, refetching, etc.
export const useInfiniteImages = (searchImage) => {
  const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["images", searchImage],
    ({ pageParam = 1 }) => getImages(pageParam, searchImage),
    {
      getNextPageParam: (lastPageData, allPages) => {
        const maxPages = lastPageData.total_pages;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const scrollHandler = async (event) => {
      const { scrollTop, clientHeight, scrollHeight } =
        event.target.scrollingElement;
      if (!fetching && scrollTop + clientHeight >= scrollHeight - 200) {
        setFetching(true);
        if (hasNextPage) await fetchNextPage();
        setFetching(false);
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [hasNextPage, fetchNextPage, fetching]);

  return { data, status, hasNextPage, fetchNextPage };
};