import React from 'react';
import Link from 'next/link';
import { Route } from 'next/types';

import { cn } from '@/lib/utils';
import * as Icons from '../icons';
import { Search } from './search';
import { UserNav } from './user-nav';

export const navItems = [
  {
    href: '/dashboard',
    title: 'Overview',
  },
  {
    href: '/pricing',
    title: 'Pricing',
  },
  {
    href: '/dashboard',
    title: 'Products',
  },
  {
    href: '/dashboard',
    title: 'Settings',
  },
] satisfies { href: Route; title: string }[];

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link href="/">
          <Icons.Logo />
        </Link>
        <span className="mx-2 text-lg font-bold text-muted-foreground">/</span>
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              href={item.href}
              key={`${item.href}-${idx}`}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                idx !== 0 && 'text-muted-foreground',
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* <WorkspaceSwitcher />
        <Suspense>
          <ProjectSwitcher
            projectsPromise={api.project.listByActiveWorkspace.query()}
          />
        </Suspense> */}
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
