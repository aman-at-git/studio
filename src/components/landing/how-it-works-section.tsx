import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, ListChecks, Send, Brain } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    title: 'Upload Your Resume',
    description: 'Securely upload your latest resume. Our AI will parse and understand your experience and qualifications.',
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: 'Define Your Skills & Preferences',
    description: 'Tell us about your key skills, desired roles, and job preferences to fine-tune the AI search.',
  },
  {
    icon: <Send className="h-10 w-10 text-primary" />,
    title: 'AI Applies For You',
    description: 'JobPilot AI continuously monitors LinkedIn and automatically applies to the most relevant jobs on your behalf. We do the hard part, freeing you to prepare for interviews and stay ahead.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Getting started with JobPilot AI is simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow transform hover:-translate-y-1 duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
