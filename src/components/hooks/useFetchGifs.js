import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((gifs) => setimages(gifs), setIsLoading(false));
  }, []);
  return { images: images, isLoading: isLoading };
};
