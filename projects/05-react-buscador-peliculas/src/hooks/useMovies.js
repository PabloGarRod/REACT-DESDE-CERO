import { useState } from "react";
import results from "../mocks/results.json";
import noResults from "../mocks/no-results.json";
import { searchMovies } from "../services/searchMovies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    if (search.length < 3) return;
    try {
      setError(null);
      setLoading(true);
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    movies,
    getMovies,
    error,
    loading,
  };
}
