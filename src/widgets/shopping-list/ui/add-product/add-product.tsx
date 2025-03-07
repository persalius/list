import { memo, useState } from 'react';
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
import { Form } from './form';

export const AddProductButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

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

        <Form onClose={() => setIsOpen(false)} />

        <DialogFooter>
          <Button type="submit" form="createNewProduct">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
