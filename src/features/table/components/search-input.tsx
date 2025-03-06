import { Table as TableData } from '@tanstack/react-table';
import { Input } from '@/shared/ui/input';

interface Props<T> {
  table: TableData<T>;
  placeholder?: string;
  filterField: keyof T;
}

export const SearchInput = <T,>({
  table,
  placeholder = 'Search...',
  filterField,
}: Props<T>) => {
  return (
    <Input
      placeholder={placeholder}
      value={
        (table.getColumn(String(filterField))?.getFilterValue() as string) ?? ''
      }
      onChange={(event) =>
        table.getColumn(String(filterField))?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
