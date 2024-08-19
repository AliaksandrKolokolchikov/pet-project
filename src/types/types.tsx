export interface Product {
  category: string;
  title: string;
  image?: string;
  id?: number;
  price?: string;
  isLarge?: boolean;
  rating?: number;
}

export interface ProductCart extends Product {
  subtotal: string;
  quantity: number;
}

export interface Commentary {
  category: string;
  title: string;
  avatar?: string;
  name: string;
  role: string;
}
