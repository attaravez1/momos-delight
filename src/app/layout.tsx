import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Azure Bites | Delicious Food in Thane',
  description: 'Azure Bites offers a variety of delicious wraps, sandwiches, and rolls. Visit us at Godhbunder Road, Owale, Thane West.',
  keywords: 'Azure Bites, food shop, Thane, wraps, sandwiches, rolls, restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <FloatingActionButton />
      </body>
    </html>
  );
}
