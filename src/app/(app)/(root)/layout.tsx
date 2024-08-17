import React from 'react';
import Link from 'next/link';

import { SiteFooter } from '@/components/footer';
import * as Icons from '@/components/icons';
import { MobileNav } from '@/components/nav/mobile-nav';
import Navbar from '@/components/nav/nav-bar';
import { Search } from '@/components/nav/search';
import UserNav from '@/components/nav/user-nav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* //TODO: Is this the best way to do this??? */}
      <MobileNav>
        <Link href="/">
          <Icons.Logo className="size-6" />
        </Link>
        <Search />
        <UserNav />
      </MobileNav>
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center">
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
