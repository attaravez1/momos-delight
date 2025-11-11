import { Star, StarHalf } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { reviews } from '@/lib/data';
import AnimatedText from '@/components/ui/animated-text';

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400" />);
    }
  }
  return stars;
};

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimatedText
          el="h2"
          text="What Our Customers Say"
          className="text-4xl md:text-5xl font-headline text-center text-primary mb-12"
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4 border-4 border-accent">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-headline text-xl font-semibold text-primary">{review.name}</h3>
                      <div className="flex my-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-muted-foreground text-balance">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
