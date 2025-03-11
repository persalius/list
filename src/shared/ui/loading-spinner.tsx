import { Loader } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <Loader className="h-6 w-6 animate-spin" />
    </div>
  );
}
