import { useState } from "react";
import { products as initalProducts } from "./mocks/products.json";
import { Products } from "./components/Products";

import { type Product } from "./types/product";
import { Header } from "./components/Headers";

function App() {
  const [products] = useState(initalProducts);
  const [filters, setFilters] = useState<{
    category: string;
    minPrice: number;
  }>({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} />
      ) : (
        <h1>No se encontraron resultados</h1>
      )}
      ;
    </>
  );
}

export default App;
