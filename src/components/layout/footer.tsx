import Link from 'next/link';
import Image from 'next/image';
import { UtensilsCrossed } from 'lucide-react';
import { shopInfo, socialLinks, openingHours } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedText from '@/components/ui/animated-text';
import IconWrapper from '@/components/ui/icon-wrapper';
import { Instagram } from 'lucide-react';

export function Footer() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'footer-map');
  const instagramHandle = 'avez_attar_official';

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline text-primary">
              {shopInfo.name}
            </span>
          </Link>
          <p className="max-w-xs text-balance">{shopInfo.address}</p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <IconWrapper>
                  <social.icon className="h-6 w-6" />
                </IconWrapper>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-headline font-semibold mb-4 text-primary">Opening Hours</h3>
          <ul className="space-y-2">
            {openingHours.map((item) => (
              <li key={item.day} className="flex justify-center md:justify-start gap-4">
                <span className="font-semibold">{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          {mapImage && (
            <Link href={shopInfo.gmapLink} target="_blank" rel="noopener noreferrer">
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                data-ai-hint={mapImage.imageHint}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border/50 text-center">
        <p>&copy; {new Date().getFullYear()} {shopInfo.name}. All Rights Reserved.</p>
         <p className="text-sm mt-2">
            Contact developer via Instagram:{' '}
            <a
              href={`https://www.instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @{instagramHandle}
            </a>
          </p>
      </div>
    </footer>
  );
}
