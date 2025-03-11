import { FC, useMemo, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface Props {
  items: { [key: string]: string };
  onChange: (value: string) => void;
  placeholder?: string;
}

const all = 'all';

export const FilterTable: FC<Props> = ({
  items,
  onChange,
  placeholder = 'Select...',
}) => {
  const list = useMemo(
    () => ({
      [all]: '',
      ...items,
    }),
    [items],
  );

  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    const item = newValue === all ? '' : newValue;
    setValue(item);
    onChange(item);
  };

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger className="flex-1 min-w-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(list).map((key) => (
          <SelectItem key={key} value={key} className="capitalize">
            {items[key] || key}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
