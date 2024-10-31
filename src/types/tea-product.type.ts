export type TeaProduct = {
  id: number;
  name: string;
  description: string;
  imageUrl?: string[];
  price: string;
  stock: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};
