import { FC, ReactNode, useId } from 'react';
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
import { Product } from '@/shared/types/product';

interface Props {
  onSubmitForm: (values: FormValues) => void;
  defaultValues?: Product;
  children: ({
    isDisabled,
    formId,
  }: {
    isDisabled: boolean;
    formId: string;
  }) => ReactNode;
}

export const ProductForm: FC<Props> = ({
  defaultValues,
  onSubmitForm,
  children,
}: Props) => {
  const formId = useId();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultValues?.name || '',
      quantity: defaultValues?.quantity || 1,
      category: defaultValues?.category || undefined,
    },
  });

  const onSubmit = (values: FormValues) => {
    onSubmitForm(values);
  };

  const isDisabled = !form.formState.isDirty;

  return (
    <FormProvider {...form}>
      <form
        id={formId}
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
                <Input {...field} placeholder="Name" autoComplete="off" />
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
      </form>
      {children({ isDisabled, formId })}
    </FormProvider>
  );
};
