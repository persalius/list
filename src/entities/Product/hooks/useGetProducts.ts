import { useCallback, useEffect } from 'react';
import {
  useHistoryActions,
  useProductsActions,
} from '@/entities/product/model/hooks';
import { Product } from '@/shared/types/product';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/entities/product/api';
import { toast } from 'sonner';

export const useGetProducts = () => {
  const { setProducts } = useProductsActions();
  const { pause, resume } = useHistoryActions();

  const handleSetProducts = useCallback(
    (data: Product[]) => {
      if (!data.length) {
        return;
      }
      pause();
      setProducts(data);
      resume();
    },
    [pause, resume, setProducts],
  );

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    retry: 1,
    select: handleSetProducts,
  });

  useEffect(() => {
    if (error) {
      toast.error('Uh oh! Something went wrong.', {
        description: error.message,
        action: {
          label: 'Try again',
          onClick: () => refetch(),
        },
      });
    }
  }, [error, refetch]);

  return { isLoading };
};
