import { saveProducts } from '@/entities/product/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSaveProducts = () => {
  return useMutation({
    mutationFn: saveProducts,
    onSuccess: () => {
      toast.success('Products saved successfully');
    },
    onError: (error) => {
      toast.error('Uh oh! Something went wrong.', {
        description: error.message,
      });
    },
  });
};
