import { Table as TableData } from '@tanstack/react-table';
import { Input } from '@/shared/ui/input';

interface Props<T> {
  table: TableData<T>;
  placeholder?: string;
}

export const SearchInput = <T,>({
  table,
  placeholder = 'Search...',
}: Props<T>) => {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
      onChange={(event) =>
        table.getColumn('email')?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
