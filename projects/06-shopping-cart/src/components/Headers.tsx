import { ProductFilters } from "../types/product";
import { Filters } from "./Filters";

type HeaderProps = {
  changeFilters: React.Dispatch<React.SetStateAction<ProductFilters>>;
};

export function Header({ changeFilters }: HeaderProps) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
}
