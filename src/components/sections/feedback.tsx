'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import AnimatedText from '@/components/ui/animated-text';
import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';

const feedbackSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.number().min(1).max(5),
  ambience: z.number().min(1).max(5),
  foodQuality: z.number().min(1).max(5),
  price: z.number().min(1).max(5),
  comments: z.string().optional(),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

const StarRating = ({ field }: { field: any }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name={field.name}
              value={ratingValue}
              onClick={() => field.onChange(ratingValue)}
              className="hidden"
            />
            <Star
              className={cn(
                'h-8 w-8 cursor-pointer transition-colors',
                ratingValue <= (hover || field.value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              )}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export function Feedback() {
  const { toast } = useToast();
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      service: 0,
      ambience: 0,
      foodQuality: 0,
      price: 0,
      comments: '',
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      const response = await fetch('https://avezattarcsmsss.app.n8n.cloud/webhook-test/1b35bd2e-9ee0-4d71-8b7b-46a41d016ef7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Feedback Submitted!',
          description: 'Thank you for sharing your thoughts with us.',
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: 'Could not submit your feedback. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section id="feedback" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimatedText
          el="h2"
          text="Share Your Feedback"
          className="text-4xl md:text-5xl font-headline text-center text-primary mb-4"
        />
        <AnimatedText
          el="p"
          text="Your opinion matters to us! Let us know how we did."
          className="text-lg text-center text-muted-foreground mb-12"
          delay={0.2}
        />
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Feedback Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="mb-2">Service</FormLabel>
                        <FormControl>
                          <StarRating field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ambience"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="mb-2">Ambience</FormLabel>
                        <FormControl>
                           <StarRating field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="foodQuality"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="mb-2">Food Quality</FormLabel>
                        <FormControl>
                           <StarRating field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="mb-2">Price</FormLabel>
                        <FormControl>
                           <StarRating field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Comments</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us anything else you'd like us to know."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <div className="text-center">
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
