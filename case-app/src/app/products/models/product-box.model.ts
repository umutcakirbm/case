import { Product } from "./product";

export interface ProductBoxModel {
  id?: string;
  product: Product;
  count?: number;
}
