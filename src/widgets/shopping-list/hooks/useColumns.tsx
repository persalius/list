import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/shared/ui/checkbox';
import { Product } from '@/shared/types/product';
import { Button } from '@/shared/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

export const useColumns = () => {
  const columns: ColumnDef<Product>[] = [
    {
      id: 'select',
      accessorKey: 'isPurchased',
      header: '',
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      cell: ({ row }) => <div>{row.getValue('quantity')}</div>,
    },
    {
      accessorKey: 'category',
      header: () => <div className="text-right">Category</div>,
      cell: ({ row }) => (
        <div className="text-right font-medium">{row.getValue('category')}</div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: () => {
        // { row }
        // const payment = row.original;

        return (
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  return columns;
};
