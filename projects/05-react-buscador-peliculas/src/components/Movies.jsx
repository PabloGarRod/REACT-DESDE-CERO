import noResults from "../mocks/no-results.json";

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  function HasMovies() {
    return (
      <ul className="movies">
        {movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    );
  }

  function NoResults() {
    return <h1>{noResults.Error}</h1>;
  }

  return hasMovies ? <HasMovies /> : <NoResults />;
}
