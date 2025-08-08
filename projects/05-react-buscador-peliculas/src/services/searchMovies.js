const API_KEY = "33cf8abc";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    const json = await response.json();

    const movies = json.Search;

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));

    return mappedMovies;
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
