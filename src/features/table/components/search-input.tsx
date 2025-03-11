import { FC, useEffect, useState } from 'react';
import { Input } from '@/shared/ui/input';
import { useDebounce } from '@/shared/hooks/useDebounce';

interface Props {
  onChangeSearch: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ onChangeSearch }) => {
  const [value, setValue] = useState('');
  const debounceValue = useDebounce(value);

  useEffect(() => {
    onChangeSearch(debounceValue);
  }, [debounceValue, onChangeSearch]);

  return (
    <Input
      placeholder="Search by name..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className="sm:max-w-sm"
    />
  );
};
