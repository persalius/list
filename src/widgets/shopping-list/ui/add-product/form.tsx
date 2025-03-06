import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormValues } from './schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormErrorMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { CATEGORIES } from '@/shared/config/product';

export const Form = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      quantity: 1,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <form
        id="createNewProduct"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormErrorMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>

              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {(Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[]).map(
                    (key) => (
                      <SelectItem key={key} value={key}>
                        {CATEGORIES[key]}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              <FormErrorMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Quantity"
                  type="number"
                  min={1}
                />
              </FormControl>
              <FormErrorMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </FormProvider>
  );
};
