import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  TableMeta,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

interface Props<T> {
  data: T[];
  columns: ColumnDef<T>[];
  meta?: TableMeta<T>;
}

export const useTable = <T,>({ meta, data, columns }: Props<T>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    meta,
  });

  return table;
};
