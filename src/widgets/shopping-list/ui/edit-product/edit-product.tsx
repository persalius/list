import { Dispatch, FC, memo, SetStateAction } from 'react';
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
import { Product } from '@/shared/types/product';
import { useProductsActions } from '@/entities/Product/model/hooks';
import { FormValues } from '../product-form/schema';

const formId = 'editProduct';

interface Props {
  product: Product;
  rowIndex: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditProduct: FC<Props> = memo(
  ({ product, rowIndex, isOpen, setIsOpen }) => {
    const { updateProduct } = useProductsActions();

    const handleSubmitForm = (values: FormValues) => {
      updateProduct(rowIndex, values);
      setIsOpen(false);
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
  },
);
