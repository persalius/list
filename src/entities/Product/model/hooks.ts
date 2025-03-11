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
  const setProducts = useProductsStore((state) => state.setProducts);

  return { addProduct, updateProduct, removeProduct, setProducts };
};

export const useHistoryActions = () => {
  const { undo, clear, pause, resume } = useProductsStore.temporal.getState();
  return { undo, clear, pause, resume };
};

const useHistory = <T>(selector: (state: TemporalState<ProductsStore>) => T) =>
  useStore(useProductsStore.temporal, selector);

export const useHistoryPastStates = () => {
  const pastStates = useHistory((state) => state.pastStates);

  return pastStates;
};
