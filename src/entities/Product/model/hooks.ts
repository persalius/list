import { useStore } from 'zustand';
import useProductsStore, { ProductsStore } from './store';
import { TemporalState } from 'zundo';

export const useProducts = () => {
  return useProductsStore((state) => state.products);
};

export const useProductsActions = () => {
  const addProduct = useProductsStore((state) => state.addProduct);
  const updateProduct = useProductsStore((state) => state.updateProduct);
  const removeProduct = useProductsStore((state) => state.removeProduct);

  return { addProduct, updateProduct, removeProduct };
};

export const useHistoryActions = () => {
  const { undo, clear } = useProductsStore.temporal.getState();
  return { undo, clear };
};

const useHistory = <T>(selector: (state: TemporalState<ProductsStore>) => T) =>
  useStore(useProductsStore.temporal, selector);

export const useHistoryPastStates = () => {
  const pastStates = useHistory((state) => state.pastStates);

  return pastStates;
};
