import { CATEGORIES } from '../config/product';

export type Product = {
  id: string;
  name: string;
  quantity: number;
  category: CategoriesType;
  isPurchased: boolean;
};

export type CategoriesType = keyof typeof CATEGORIES;
