import { Button } from '@/components/ui/button';
import { shopInfo, contactDetails } from '@/lib/data';
import AnimatedText from '@/components/ui/animated-text';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import IconWrapper from '../ui/icon-wrapper';

export function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Us',
      href: shopInfo.whatsappLink,
      label: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      href: shopInfo.telLink,
      label: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Find Our Shop',
      href: shopInfo.gmapLink,
      label: 'Get Directions'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container text-center">
        <AnimatedText
          el="h2"
          text={contactDetails.title}
          className="text-4xl md:text-5xl font-headline text-primary mb-4"
        />
        <AnimatedText
          el="p"
          text={contactDetails.description}
          className="text-lg max-w-2xl mx-auto text-muted-foreground mb-12 text-balance"
          delay={0.2}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <Card key={method.title} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center justify-center">
                <IconWrapper>
                  <method.icon className="h-10 w-10 mb-4" />
                </IconWrapper>
                <h3 className="font-headline text-2xl font-semibold text-primary mb-4">{method.title}</h3>
                <Button asChild>
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.label}
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
