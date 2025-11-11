import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedText from '@/components/ui/animated-text';
import { cn } from '@/lib/utils';

export function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find(img => img.id === 'gallery-food-display'),
    PlaceHolderImages.find(img => img.id === 'gallery-storefront'),
    PlaceHolderImages.find(img => img.id === 'gallery-kitchen'),
    PlaceHolderImages.find(img => img.id === 'gallery-dining-area'),
  ].filter(Boolean);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <AnimatedText
          el="h2"
          text="A Glimpse of Azure Bites"
          className="text-4xl md:text-5xl font-headline text-center text-primary mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            image && (
              <div
                key={image.id}
                className={cn(
                  'group relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg',
                  index === 0 && 'col-span-2 row-span-2 md:h-auto',
                  index === 3 && 'md:col-start-4'
                )}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
                    {image.description}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
