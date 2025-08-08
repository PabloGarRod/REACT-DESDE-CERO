import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error: searchError } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            onChange={handleChange}
            value={search}
            placeholder="Escribe la película"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {searchError && <p style={{ color: "red" }}>{searchError}</p>}
      </header>
      <main>
        {loading ? <h1>CARGANDO ...</h1> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
