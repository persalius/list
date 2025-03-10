import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { temporal } from 'zundo';
import { Product } from '@/shared/types/product';

type State = {
  products: Product[];
};

type Actions = {
  addProduct: (product: Product) => void;
  updateProduct: (rowIndex: number, productData: Partial<Product>) => void;
  removeProduct: (rowIndex: number) => void;
};

export type ProductsStore = State & Actions;

const useProductsStore = create<ProductsStore>()(
  temporal(
    immer<State & Actions>((set, get) => ({
      products: [],

      addProduct: (product: Product) => {
        const newProducts = [...get().products, product];
        set({
          products: newProducts,
        });
      },

      updateProduct: (rowIndex: number, productData: Partial<Product>) => {
        return set((state) => {
          const updatedProduct = {
            ...state.products[rowIndex],
            ...productData,
          };

          state.products[rowIndex] = updatedProduct;
        });
      },

      removeProduct: (rowIndex: number) => {
        return set((state) => {
          state.products.splice(rowIndex, 1);
        });
      },
    })),
  ),
);

export default useProductsStore;
