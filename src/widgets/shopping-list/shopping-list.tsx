import { DataTable, useTable } from '@/features/table';
import { useColumns } from './hooks/useColumns';
import { Actions } from './ui/actions/actions';
import { RowData } from '@tanstack/react-table';
import { Product } from '@/shared/types/product';
import {
  useProducts,
  useProductsActions,
} from '@/entities/Product/model/hooks';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateProduct: (rowIndex: number, product: Partial<Product>) => void;
  }
}

export default function ShoppingList() {
  const products = useProducts();
  const { updateProduct } = useProductsActions();

  const columns = useColumns();
  const table = useTable({
    meta: {
      updateProduct,
    },
    columns,
    data: products,
  });

  return (
    <section className="max-w-4xl mx-auto">
      <button>Update</button>
      <Actions table={table} />
      <DataTable table={table} columnsLength={columns.length} />
    </section>
  );
}
