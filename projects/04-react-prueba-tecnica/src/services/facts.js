import { CAT_ENDPOINT_RANDOM_FACT } from "../constants/api";

export const getRandomFact = async () => {
  try {
    const resFact = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const jsonFact = await resFact.json();
    const { fact } = jsonFact;
    return fact;
  } catch (error) {
    console.error("Error fetching the cat fact:", error);
  }
};
