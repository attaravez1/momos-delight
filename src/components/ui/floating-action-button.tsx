'use client';

import { Phone } from 'lucide-react';
import { Button } from './button';
import { shopInfo } from '@/lib/data';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={shopInfo.telLink}
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      )}
      aria-label="Call Now"
    >
      <Button
        size="lg"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <Phone className="mr-2 h-5 w-5" />
        Call Now
      </Button>
    </a>
  );
}
