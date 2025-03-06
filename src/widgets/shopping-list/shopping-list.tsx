import {
  DataTable,
  FilterTable,
  SearchInput,
  useTable,
} from '@/features/table';
import { useColumns } from './hooks/useColumns';
import { Product } from '@/shared/types/product';
import { Button } from '@/shared/ui/button';
import { AddProductButton } from './ui/add-product-button';
import { CATEGORIES } from '@/shared/config/product';
import { useCallback } from 'react';

const data: Product[] = [
  {
    id: '1',
    name: 'Apples',
    quantity: 10,
    category: 'Fruits',
    isPurchased: true,
  },
  {
    id: '2',
    name: 'Bananas',
    quantity: 5,
    category: 'Fruits',
    isPurchased: false,
  },
  {
    id: '3',
    name: 'Milk',
    quantity: 2,
    category: 'Dairy',
    isPurchased: false,
  },
  {
    id: '4',
    name: 'Bread',
    quantity: 1,
    category: 'Bakery',
    isPurchased: false,
  },
  {
    id: '5',
    name: 'Eggs',
    quantity: 12,
    category: 'Dairy',
    isPurchased: false,
  },
  {
    id: '6',
    name: 'Chicken',
    quantity: 3,
    category: 'Meat',
    isPurchased: false,
  },
  {
    id: '7',
    name: 'Rice',
    quantity: 2,
    category: 'Grains',
    isPurchased: false,
  },
  {
    id: '8',
    name: 'Pasta',
    quantity: 1,
    category: 'Grains',
    isPurchased: false,
  },
  {
    id: '9',
    name: 'Tomatoes',
    quantity: 4,
    category: 'Vegetables',
    isPurchased: false,
  },
  {
    id: '10',
    name: 'Potatoes',
    quantity: 5,
    category: 'Vegetables',
    isPurchased: false,
  },
];

const purchasedItems = {
  purchased: 'Purchased',
  notPurchased: 'Not Purchased',
};

export default function ShoppingList() {
  const columns = useColumns();
  const table = useTable({ columns, data });

  const handleChangeStatus = useCallback(
    (value: string) => {
      const isValidValue = Object.keys(purchasedItems).find(
        (item) => item === value,
      );
      const isPurchased = value === 'purchased';
      table
        .getColumn('isPurchased')
        ?.setFilterValue(isValidValue ? isPurchased : '');
    },
    [table],
  );

  return (
    <section className="max-w-4xl mx-auto">
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
          <AddProductButton />
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
      <DataTable table={table} columnsLength={columns.length} />
    </section>
  );
}
