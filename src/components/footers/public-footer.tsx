import { cn } from '@/lib/utils';

export default function PublicFooter() {
  return (
    <footer
      className={cn(
        'h-16',
        'flex justify-center',
        'px-4',
        'border-t border-border shadow-sm',
        'bg-background/70 backdrop-blur-lg backdrop-saturate-150',
        'inset-x-0 top-0 z-40',
      )}
    >
      <div
        className={cn(
          'container',
          'w-full',
          'flex items-center justify-center',
        )}
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Footer
        </span>
      </div>
    </footer>
  );
}
