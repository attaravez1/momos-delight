import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { aboutContent } from '@/lib/data';
import AnimatedText from '@/components/ui/animated-text';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
          <AnimatedText
            el="h2"
            text="Our Culinary Story"
            className="text-4xl md:text-5xl font-headline text-primary mb-6"
          />
          <AnimatedText
            el="p"
            text={aboutContent.story}
            className="text-lg text-muted-foreground mb-4 text-balance"
            delay={0.2}
          />
          <AnimatedText
            el="p"
            text={aboutContent.specialties}
            className="text-lg text-muted-foreground text-balance"
            delay={0.4}
          />
        </div>
        <div className="md:order-1 flex justify-center">
          {aboutImage && (
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[460px] rounded-lg shadow-2xl overflow-hidden group">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
