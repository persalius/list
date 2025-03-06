'use client';

import {
  ComponentPropsWithRef,
  createContext,
  FC,
  HTMLAttributes,
  Ref,
  useContext,
  useId,
} from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from 'react-hook-form';

import { cn } from '../lib/utils';
import { Label } from './label';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

type FormItemProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

const FormItem: FC<FormItemProps> = ({ className, ref, ...props }) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('flex flex-col', className)} {...props} />
    </FormItemContext.Provider>
  );
};

type FormLabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root>;

const FormLabel: FC<FormLabelProps> = (props) => {
  const { formItemId } = useFormField();

  return <Label htmlFor={formItemId} {...props} className="mb-2" />;
};

type FormControl = ComponentPropsWithRef<typeof Slot>;

const FormControl: FC<FormControl> = (props) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      className={cn(error && 'border-red-600 focus-visible:ring-red-300')}
      {...props}
    />
  );
};

type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  ref?: Ref<HTMLParagraphElement>;
};

const FormDescription: FC<FormDescriptionProps> = ({
  className,
  ref,
  ...props
}) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
};

type FormMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  ref?: Ref<HTMLParagraphElement>;
};

const FormErrorMessage: FC<FormMessageProps> = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  useFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormErrorMessage,
  FormField,
};
