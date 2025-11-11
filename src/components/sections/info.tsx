import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { shopInfo, openingHours } from '@/lib/data';
import AnimatedText from '@/components/ui/animated-text';
import IconWrapper from '@/components/ui/icon-wrapper';

export function Info() {
  const infoItems = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: shopInfo.address,
      buttonText: 'Get Directions',
      href: shopInfo.gmapLink,
    },
    {
      icon: Phone,
      title: 'Contact Us',
      content: shopInfo.phone,
      buttonText: 'Call Now',
      href: shopInfo.telLink,
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: (
        <ul className="space-y-1">
          {openingHours.slice(0, 1).map((item) => ( // Show only first day for brevity
            <li key={item.day}>
              <span className="font-semibold">{item.day}: </span>
              <span>{item.hours}</span>
            </li>
          ))}
          <li>Everyday</li>
        </ul>
      ),
      buttonText: 'View All Hours',
      href: '#footer',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
              <CardHeader className="items-center">
                <IconWrapper>
                  <item.icon className="h-8 w-8" />
                </IconWrapper>
                <CardTitle className="font-headline text-2xl pt-4 text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground mb-6 min-h-[6rem] text-balance">
                  {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                </div>
                <Button asChild variant="outline">
                  <a href={item.href} target={item.title !== 'Opening Hours' ? '_blank' : ''} rel="noopener noreferrer">
                    {item.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
