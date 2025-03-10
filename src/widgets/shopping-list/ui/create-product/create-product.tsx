import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { ProductForm } from '../product-form/product-form';
import { FormValues } from '../product-form/schema';
import { useProductsActions } from '@/entities/Product/model/hooks';

export const CreateProduct = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { addProduct } = useProductsActions();

  const handleSubmitForm = (values: FormValues) => {
    addProduct({
      id: uuidv4(),
      name: values.name,
      quantity: values.quantity,
      category: values.category,
      isPurchased: false,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a New Product</DialogTitle>
          <DialogDescription>
            Enter the product details to add it to your shopping list.
          </DialogDescription>
        </DialogHeader>

        <ProductForm onSubmitForm={handleSubmitForm}>
          {({ isDisabled, formId }) => (
            <DialogFooter>
              <Button type="submit" form={formId} disabled={isDisabled}>
                Submit
              </Button>
            </DialogFooter>
          )}
        </ProductForm>
      </DialogContent>
    </Dialog>
  );
});
