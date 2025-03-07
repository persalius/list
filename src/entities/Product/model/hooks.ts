import useProductsStore from './store';

export const useProducts = () => {
  return useProductsStore((state) => state.products);
};

export const useProductsActions = () => {
  const addProduct = useProductsStore((state) => state.addProduct);
  const updateProduct = useProductsStore((state) => state.updateProduct);

  return { addProduct, updateProduct };
};

export const useProductsHistory = () => {
  return useProductsStore((state) => state.history);
};
