import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Digital Marketplace',
  description:
    'A digital marketplace built with Next.JS, Payload, using Supabase as a database and hosted on Vercel',
}

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  )
}

export default Layout
