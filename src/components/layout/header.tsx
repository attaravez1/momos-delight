'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems, shopInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <UtensilsCrossed className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline text-primary">
            {shopInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="#home" className="mb-8 flex items-center gap-2">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold font-headline text-primary">
                    {shopInfo.name}
                  </span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-xl font-medium text-foreground/70 transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
