import { useStoreWithEqualityFn } from 'zustand/traditional';
import useProductsStore from './store';

export const useProducts = () => {
  return useProductsStore((state) => state.products);
};

export const useProductsActions = () => {
  const addProduct = useProductsStore((state) => state.addProduct);
  const updateProduct = useProductsStore((state) => state.updateProduct);
  const removeProduct = useProductsStore((state) => state.removeProduct);
  const setProducts = useProductsStore((state) => state.setProducts);

  return { addProduct, updateProduct, removeProduct, setProducts };
};

export const useHistoryActions = () => {
  const { undo, clear, pause, resume } = useProductsStore.temporal.getState();
  return { undo, clear, pause, resume };
};

export function useTemporalStore() {
  return useStoreWithEqualityFn(useProductsStore.temporal, (state) => state);
}
