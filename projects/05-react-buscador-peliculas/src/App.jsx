import { useState, useEffect, useRef } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error: searchError } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = async (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleQuery = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            onChange={handleQuery}
            value={search}
            placeholder="Escribe la película"
          />
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
