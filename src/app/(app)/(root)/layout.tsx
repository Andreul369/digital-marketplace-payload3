import React from 'react';

import { SiteFooter } from '@/components/footer';
import { MobileNav } from '@/components/nav/mobile-nav';
import Navbar from '@/components/nav/nav-bar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <MobileNav />
      <Navbar />
      <main className="flex min-h-screen max-w-7xl mx-auto flex-col items-center justify-center">
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
