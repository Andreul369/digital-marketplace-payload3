import React from 'react';

import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SiteFooter } from '@/components/footer';
import { MobileNav } from '@/components/nav/mobile-nav';
import Navbar from '@/components/nav/nav-bar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Digital Marketplace',
  description:
    'A digital marketplace built with Next.JS, Payload, using Supabase as a database and hosted on Vercel',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={inter.className}>
      <body className="relative flex min-h-screen flex-col items-center justify-center antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MobileNav />
          <Navbar />
          <main className="flex min-h-screen max-w-7xl flex-col items-center justify-center">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default Layout;
