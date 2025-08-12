export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  unit?: string;
  description?: string;
  tags?: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};