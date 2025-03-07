import { FC, memo, PointerEvent, useState } from 'react';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { ProductForm } from '../product-form/product-form';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { Product } from '@/shared/types/product';
import { useProductsActions } from '@/entities/Product/model/hooks';
import { FormValues } from '../product-form/schema';

const formId = 'editProduct';

interface Props {
  product: Product;
  rowIndex: number;
}

export const EditProduct: FC<Props> = memo(({ product, rowIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateProduct } = useProductsActions();

  const handleOpen = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleSubmitForm = (values: FormValues) => {
    updateProduct(rowIndex, values);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuItem onPointerDown={handleOpen}>Edit</DropdownMenuItem>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Update the product details.</DialogDescription>
        </DialogHeader>

        <ProductForm
          onSubmitForm={handleSubmitForm}
          formId={formId}
          defaultValues={product}
        />

        <DialogFooter>
          <Button type="submit" form={formId}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
