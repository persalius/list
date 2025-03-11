import { FC } from 'react';
import { useHistoryActions, useProducts } from '@/entities/product/model/hooks';
import { Button } from '@/shared/ui/button';
import { LoadingSpinner } from '@/shared/ui/loading-spinner';
import { useSaveProducts } from '../../../../entities/product/hooks/useSaveProducts';

interface Props {
  isDisabled: boolean;
}

export const SaveProducts: FC<Props> = ({ isDisabled }) => {
  const products = useProducts();
  const { clear } = useHistoryActions();

  const { mutate, isPending } = useSaveProducts();

  const handleSaveProducts = () => {
    mutate(products);
    clear();
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleSaveProducts}
      disabled={isDisabled}
      className="flex-1"
    >
      {isPending && <LoadingSpinner />}
      Save
    </Button>
  );
};
