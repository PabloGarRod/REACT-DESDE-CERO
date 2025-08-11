import "./Products.css";
import { AddToCartIcon } from "./Icons";
import type { Product } from "../types/product";

type ProductProps = {
  products: Product[];
};

export function Products({ products }: ProductProps) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt="" />
            <div>
              <strong>{product.title}</strong> - {product.price}€
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
