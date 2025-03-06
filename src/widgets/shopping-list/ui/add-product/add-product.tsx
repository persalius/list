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

export function AddProductButton() {
  return (
    <Dialog>
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

        <Form />

        <DialogFooter>
          <Button type="submit" form="createNewProduct">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
