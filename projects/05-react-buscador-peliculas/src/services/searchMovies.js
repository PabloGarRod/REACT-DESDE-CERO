export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`);

    const json = await response.json();

    const movies = json.Search;

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));

    return mappedMovies;
  } catch {
    throw new Error("Error searching movies");
  }
};
