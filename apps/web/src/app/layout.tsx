import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { Providers } from '@/app/providers';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AlphaRadar',
  description: 'Bursa IPO pipeline and 15–30 minute crypto volatility.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
