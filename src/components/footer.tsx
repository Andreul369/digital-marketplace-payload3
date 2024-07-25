import dynamic from 'next/dynamic';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import { Button } from '@/components/ui';
import { cn } from '@/lib/cn';

const ThemeToggle = dynamic(() => import('@/components/theme/theme-toggle'), {
  ssr: false,
  loading: () => (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 px-2 text-lg font-semibold md:text-base"
    >
      <div className="size-6 animate-pulse rounded-full bg-muted-foreground/70" />
      <span className="w-14 animate-pulse rounded bg-muted-foreground/70 capitalize">
        &nbsp;
      </span>
    </Button>
  ),
});

export const SiteFooter = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('container border-t max-w-7xl mx-auto flex items-center justify-between', className)}>
      <div>
        <Link
          href="/"
          className="col-start-1 row-start-1 flex items-center gap-2 md:mr-2"
        >
          <Icons.Logo className="size-6" />
          <p className="text-lg font-medium md:hidden">Digital Savanna</p>
        </Link>

      </div>
        <div className="col-start-2 row-start-1 flex h-12 justify-end">
          <ThemeToggle />
        </div>
    </footer>
  );
};
