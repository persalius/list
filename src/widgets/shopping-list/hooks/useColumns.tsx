import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/shared/ui/checkbox';
import { CategoriesType, Product } from '@/shared/types/product';
import { CATEGORIES } from '@/shared/config/product';
import { cn } from '@/shared/lib/utils';
import { DataTableRowActions } from '../ui/data-table-row-actions/data-table-row-actions';

export const useColumns = () => {
  const columns: ColumnDef<Product>[] = [
    {
      id: 'isPurchased',
      accessorKey: 'isPurchased',
      meta: {
        filterVariant: 'select',
      },
      header: '',
      cell: (props) => {
        const { row, table } = props;
        const rowIndex = row.index;
        const onUpdate = (value: boolean) =>
          table.options.meta?.updateProduct(rowIndex, { isPurchased: value });

        return (
          <Checkbox
            checked={row.getValue('isPurchased')}
            onCheckedChange={onUpdate}
            aria-label="Select row"
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        const { isPurchased } = row.original;

        return (
          <div className={cn('capitalize', isPurchased && 'line-through')}>
            {row.getValue('name')}
          </div>
        );
      },
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      cell: ({ row }) => <div>{row.getValue('quantity')}</div>,
    },
    {
      accessorKey: 'category',
      filterFn: 'equalsString',
      header: () => <div className="text-right">Category</div>,
      cell: ({ row }) => (
        <div className="text-right font-medium">
          {CATEGORIES[row.getValue('category') as CategoriesType]}
        </div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  return columns;
};
