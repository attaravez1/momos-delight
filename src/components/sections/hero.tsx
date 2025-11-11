'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimatedText from '@/components/ui/animated-text';
import { cn } from '@/lib/utils';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover -z-10"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white px-4">
        <AnimatedText
          el="h1"
          text="Welcome to Momos Delight & More"
          className="font-headline text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
        />
        <AnimatedText
          el="p"
          text="Where every bite tells a story of flavor."
          className="text-xl md:text-2xl text-balance max-w-2xl mx-auto mb-8 drop-shadow-md"
          delay={0.2}
        />
        <div style={{ animation: 'fade-in-up 0.8s 0.4s ease-out forwards', opacity: 0 }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#menu">View Our Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
