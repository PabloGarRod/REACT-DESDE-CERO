import { useState, useEffect } from "react";
import { CAT_PREFIX_IMAGE_URL } from "../constants/api";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ")[0];
    const url = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontSize=50&fontColor=white`;
    setImageUrl(url);
  }, [fact]);

  return { imageUrl };
}
