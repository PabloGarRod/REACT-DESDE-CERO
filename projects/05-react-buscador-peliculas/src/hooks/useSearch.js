import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.length < 3) {
      setError("La búsqueda debe tener minimo 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
