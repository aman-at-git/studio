import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "JobPilot AI is a game-changer! I landed my dream job in weeks without spending hours on applications. Highly recommend!",
    name: 'Sarah L.',
    title: 'Software Engineer',
    avatar: 'https://picsum.photos/100/100?random=1',
    aiHint: 'woman smiling'
  },
  {
    quote: "I was skeptical at first, but JobPilot AI delivered. The auto-apply feature is incredibly efficient. It found jobs I wouldn't have!",
    name: 'Michael B.',
    title: 'Marketing Manager',
    avatar: 'https://picsum.photos/100/100?random=2',
    aiHint: 'man professional'
  },
  {
    quote: "As a recent graduate, job hunting was overwhelming. JobPilot AI streamlined the process and helped me get noticed. Thank you!",
    name: 'Jessica P.',
    title: 'UX Designer',
    avatar: 'https://picsum.photos/100/100?random=3',
    aiHint: 'person glasses'
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by <span className="text-primary">Job Seekers</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Hear what our early users are saying about JobPilot AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col shadow-xl hover:shadow-primary/25 transition-shadow transform hover:-translate-y-1 duration-300">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary/50 mb-2" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="mt-4">
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                    data-ai-hint={testimonial.aiHint}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
