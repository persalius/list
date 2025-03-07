import { FC, useCallback } from 'react';
import { FilterTable, SearchInput } from '@/features/table';
import { Button } from '@/shared/ui/button';
import { Table as TableData } from '@tanstack/react-table';
import { CreateProduct } from '../create-product/create-product';
import { CATEGORIES } from '@/shared/config/product';
import { purchasedItems, purchasedVariants } from '../../model/constants';
import { Product } from '@/shared/types/product';

interface Props {
  table: TableData<Product>;
}

export const Actions: FC<Props> = ({ table }) => {
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
        <SearchInput
          table={table}
          placeholder="Search by name..."
          filterField="name"
        />
        <div className="flex gap-4">
          <Button type="button" onClick={() => {}}>
            Undo
          </Button>
          <CreateProduct />
        </div>
      </div>

      <div className="flex items-center gap-4 pb-4">
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
    </>
  );
};
