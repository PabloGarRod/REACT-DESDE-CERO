import { useState, ChangeEvent } from "react";
import "./Filters.css";
import { ProductFilters } from "../types/product";

type FilterProps = {
  onChange: React.Dispatch<React.SetStateAction<ProductFilters>>;
};

export function Filters({ onChange }: FilterProps) {
  const [minPrice, setMinPrice] = useState<string | undefined>();

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    // DOS FUENTES DE LA VERDAD
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    //ESTO HUELE MAL
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio mínimo</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          defaultValue="0"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Hogar</option>
          <option value="groceries">Alimentación</option>
        </select>
      </div>
    </section>
  );
}
