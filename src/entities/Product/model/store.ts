import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Product } from '@/shared/types/product';

type HistoryEntry = {
  type: 'add' | 'remove' | 'update';
  product: Product;
};

type State = {
  products: Product[];
  history: HistoryEntry[];
};

type Action = {
  addProduct: (product: Product) => void;
  updateProduct: (rowIndex: number, productData: Partial<Product>) => void;
};

const useProductsStore = create<State & Action>()(
  immer((set, get) => ({
    products: [],
    history: [],

    addProduct: (product: Product) => {
      const newProducts = [...get().products, product];
      set({
        products: newProducts,
        history: [...get().history, { type: 'add', product }],
      });
    },

    updateProduct: (rowIndex: number, productData: Partial<Product>) => {
      return set((state) => {
        const updatedProduct = {
          ...state.products[rowIndex],
          ...productData,
        };

        state.products[rowIndex] = updatedProduct;
        state.history.push({
          type: 'update',
          product: updatedProduct,
        });
      });
    },

    //   removeProduct: (id: number) => {
    //     const removedProduct = get().products.find((p) => p.id === id);
    //     if (removedProduct) {
    //       const newProducts = get().products.filter((p) => p.id !== id);
    //       set({
    //         products: newProducts,
    //         history: [
    //           ...get().history,
    //           { type: 'remove', product: removedProduct },
    //         ],
    //       });
    //     }
    //   },

    //   undo: () => {
    //     const history = get().history;
    //     if (history.length > 0) {
    //       const lastAction = history[history.length - 1];
    //       let newProducts = [...get().products];

    //       if (lastAction.type === 'add') {
    //         newProducts = newProducts.filter((p) => p.id !== lastAction.product.id);
    //       } else if (lastAction.type === 'remove') {
    //         newProducts = [...newProducts, lastAction.product];
    //       } else if (lastAction.type === 'update') {
    //         newProducts = newProducts.map((p) =>
    //           p.id === lastAction.product.id ? lastAction.product : p,
    //         );
    //       }

    //       set({
    //         products: newProducts,
    //         history: history.slice(0, -1),
    //       });
    //     }
    //   },
  })),
);

export default useProductsStore;
