import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Land Your Dream Job <span className="text-primary">While You Sleep</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Stop endlessly scrolling. Upload your resume, define your skills, and let JobPilot AI monitor LinkedIn and apply to the best roles for you—automatically.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="#join-waitlist-form">
              Join the Beta <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        {/* Optional: Add a subtle visual element here */}
        {/* <div className="mt-16">
          <Image src="https://picsum.photos/1200/600?grayscale" alt="JobPilot AI dashboard preview" width={1200} height={600} className="rounded-lg shadow-2xl mx-auto" data-ai-hint="dashboard preview" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
