import { cn } from '@/lib/utils';
import { Logo } from '../logo';

export default function PublicHeader() {
  return (
    <header
      className={cn(
        'sticky',
        'h-16',
        'flex justify-center',
        'px-4',
        'border-b border-border shadow-sm',
        'bg-background/70 backdrop-blur-lg backdrop-saturate-150',
        'inset-x-0 top-0 z-40',
      )}
    >
      <div
        className={cn(
          'container',
          'w-full',
          'flex items-center justify-between',
        )}
      >
        <Logo />
      </div>
    </header>
  );
}
