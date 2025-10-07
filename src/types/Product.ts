export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: string;
  reviews: number;
  sold: number;
  discount: number;
  image: string;
  mall: boolean;
  freeShipping: boolean;
  flashSale: boolean;
  choice: boolean;
  location: string;
}