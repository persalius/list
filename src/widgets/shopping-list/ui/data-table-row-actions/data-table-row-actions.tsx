import { FC, useState } from 'react';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Row } from '@tanstack/react-table';
import { MoreHorizontal, SquarePen, Trash2 } from 'lucide-react';
import { Product } from '@/shared/types/product';
import { RemoveProduct } from '../remove-product/remove-product';
import { EditProduct } from '../edit-product/edit-product';

interface Props {
  row: Row<Product>;
}

export const DataTableRowActions: FC<Props> = ({ row }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <EditProduct
        product={row.original}
        rowIndex={row.index}
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
      />
      <RemoveProduct
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        rowIndex={row.index}
      />

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

            <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
              <SquarePen className="h-4 w-4" /> Edit
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
              <Trash2 className="h-4 w-4" /> Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
