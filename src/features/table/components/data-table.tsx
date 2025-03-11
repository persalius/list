import { LoadingSpinner } from '@/shared/ui/loading-spinner';
import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import { flexRender } from '@tanstack/react-table';
import { Table as TableData } from '@tanstack/react-table';

interface Props<T> {
  table: TableData<T>;
  columnsLength: number;
  isLoading: boolean;
}

export const DataTable = <T,>({
  table,
  columnsLength,
  isLoading,
}: Props<T>) => {
  return (
    <UiTable
      classNames={{ root: 'rounded-md border max-h-120 overflow-y-auto' }}
    >
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {!isLoading && table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columnsLength} className="h-24 text-center">
              {isLoading ? <LoadingSpinner /> : 'No results.'}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </UiTable>
  );
};
