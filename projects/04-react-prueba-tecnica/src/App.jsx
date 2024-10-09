import { useEffect, useState } from "react";
import {
  CAT_ENDPOINT_RANDOM_FACT,
  CAT_PREFIX_IMAGE_URL,
} from "./constants/api";
import "./App.css";

export function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [factError, setFactError] = useState("");

  useEffect(() => {
    async function getRandomFact() {
      try {
        const resFact = await fetch(CAT_ENDPOINT_RANDOM_FACT);
        const jsonFact = await resFact.json();
        const { fact } = jsonFact;
        setFact(fact);
      } catch (error) {
        console.error("Error fetching the cat fact:", error);
        setFactError(error.message);
      }
    }

    getRandomFact();
  }, []);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ")[0];
    const url = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontSize=50&fontColor=white`;
    setImageUrl(url);
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {factError ? (
          <>
            <h1>Error al cargar la imagen</h1>
            <p>{factError}</p>
          </>
        ) : (
          <>
            {fact && <p>{fact}</p>}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={`Image extracted using the first three words for ${fact}`}
              />
            )}
          </>
        )}
      </section>
    </main>
  );
}
