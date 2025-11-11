'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { menuItems } from '@/lib/data';
import AnimatedText from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { BrainCircuit } from 'lucide-react';
import { updateMenuForSeason } from '@/app/actions/menu';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

export function Menu() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [aiResponse, setAiResponse] = React.useState<{ shouldUpdate: boolean, reason: string } | null>(null);
  const { toast } = useToast();

  const handleSeasonalUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await updateMenuForSeason();
      if (response) {
        setAiResponse(response);
      }
    } catch (error) {
      console.error('Error checking for seasonal updates:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not get seasonal menu suggestions.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimatedText
          el="h2"
          text="Our Signature Menu"
          className="text-4xl md:text-5xl font-headline text-center text-primary mb-4"
        />
        <AnimatedText
          el="p"
          text="Crafted with passion, served with love."
          className="text-lg text-center text-muted-foreground mb-12"
          delay={0.2}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => {
            const itemImage = PlaceHolderImages.find(img => img.id === item.image);
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  {itemImage && (
                    <div className="aspect-square relative">
                      <Image
                        src={itemImage.imageUrl}
                        alt={item.name}
                        data-ai-hint={itemImage.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="font-headline text-xl mb-2 text-primary">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <p className="text-lg font-bold text-primary">{item.price}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" onClick={handleSeasonalUpdate} disabled={isLoading}>
                <BrainCircuit className="mr-2 h-5 w-5" />
                {isLoading ? 'Thinking...' : 'Check for Seasonal Updates'}
            </Button>
        </div>
      </div>
      <AlertDialog open={!!aiResponse} onOpenChange={() => setAiResponse(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-primary">Seasonal Menu Suggestion</AlertDialogTitle>
            <AlertDialogDescription className="pt-4">
              <strong className={aiResponse?.shouldUpdate ? 'text-green-600' : 'text-orange-600'}>
                Recommendation: {aiResponse?.shouldUpdate ? 'Update Recommended' : 'No Update Needed'}
              </strong>
              <p className="mt-2 text-foreground">{aiResponse?.reason}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAiResponse(null)}>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
