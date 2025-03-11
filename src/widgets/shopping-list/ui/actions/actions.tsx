import { FC, memo, useCallback } from 'react';
import { FilterTable, SearchInput } from '@/features/table';
import { Button } from '@/shared/ui/button';
import { Table as TableData } from '@tanstack/react-table';
import { CreateProduct } from '../create-product/create-product';
import { CATEGORIES } from '@/shared/config/product';
import { purchasedItems, purchasedVariants } from '../../model/constants';
import { Product } from '@/shared/types/product';
import {
  useHistoryActions,
  useHistoryPastStates,
} from '@/entities/product/model/hooks';
import { SaveProducts } from '../save-products/save-products';

interface Props {
  table: TableData<Product>;
}

export const Actions: FC<Props> = memo(({ table }) => {
  const { undo } = useHistoryActions();
  const pastStates = useHistoryPastStates();

  const handleChangeSearch = useCallback(
    (value: string) => {
      table.getColumn('name')?.setFilterValue(value);
    },
    [table],
  );

  const handleChangeStatus = useCallback(
    (value: string) => {
      const isValidValue = Object.keys(purchasedItems).find(
        (item) => item === value,
      );
      const isPurchased = value === purchasedVariants.purchased;
      table
        .getColumn('isPurchased')
        ?.setFilterValue(isValidValue ? isPurchased : '');
    },
    [table],
  );

  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <SearchInput onChangeSearch={handleChangeSearch} />
        <div className="flex gap-4">
          <SaveProducts isDisabled={!pastStates.length} />
          <CreateProduct />
        </div>
      </div>

      <div className="flex justify-between gap-4 pb-4">
        <div className="flex items-center gap-4">
          <FilterTable
            items={CATEGORIES}
            placeholder="Filter by category..."
            onChange={(value) =>
              table.getColumn('category')?.setFilterValue(value)
            }
          />
          <FilterTable
            items={purchasedItems}
            placeholder="Filter by status..."
            onChange={handleChangeStatus}
          />
        </div>
        <Button
          type="button"
          onClick={() => undo()}
          disabled={!pastStates.length}
        >
          Undo
        </Button>
      </div>
    </>
  );
});
