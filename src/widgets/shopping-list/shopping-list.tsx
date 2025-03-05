import {
  DataTable,
  FilterButton,
  SearchInput,
  useTable,
} from '@/features/table';
import { useColumns } from './hooks/useColumns';
import { Product } from '@/shared/types/product';

const data: Product[] = [
  {
    id: '1',
    name: 'Apples',
    quantity: 10,
    category: 'Fruits',
    isPurchased: false,
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

export default function ShoppingList() {
  const columns = useColumns();
  const table = useTable({ columns, data });

  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <SearchInput table={table} placeholder="Search by name..." />
        <FilterButton table={table} />
      </div>
      <DataTable table={table} columnsLength={columns.length} />
    </section>
  );
}
