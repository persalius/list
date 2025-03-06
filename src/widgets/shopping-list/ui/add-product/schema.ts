import { z } from 'zod';
import { CATEGORIES } from '@/shared/config/product';

const categoriesKeys = Object.keys(CATEGORIES) as [
  keyof typeof CATEGORIES,
  ...(keyof typeof CATEGORIES)[],
];

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  quantity: z.preprocess(
    (value) => parseInt(value as string, 10),
    z
      .number({ invalid_type_error: 'Quantity is required' })
      .min(1, 'Quantity is required'),
  ),
  category: z.enum(categoriesKeys, {
    required_error: 'Category is required',
  }),
});

export type FormValues = z.infer<typeof formSchema>;
