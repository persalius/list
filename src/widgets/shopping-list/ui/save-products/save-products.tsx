import { FC } from 'react';
import { useHistoryActions, useProducts } from '@/entities/product/model/hooks';
import { Button } from '@/shared/ui/button';
import { useSaveProducts } from '../../../../entities/product/hooks/useSaveProducts';

interface Props {
  isDisabled: boolean;
}

export const SaveProducts: FC<Props> = ({ isDisabled }) => {
  const products = useProducts();
  const { clear } = useHistoryActions();

  const { mutate } = useSaveProducts();

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
    >
      Save
    </Button>
  );
};
