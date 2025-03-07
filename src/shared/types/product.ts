import { CATEGORIES } from '../config/product';

export type Product = {
  id: string;
  name: string;
  quantity: number;
  category: string;
  isPurchased: boolean;
};

export type CategoriesType = keyof typeof CATEGORIES;
