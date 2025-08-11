export type Product = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  category: string;
  images: string[];
  price: number;
};

export type ProductFilters = {
  category: string;
  minPrice: number;
};
