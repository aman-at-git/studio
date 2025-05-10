import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Network, FileScan, Zap, UserCheck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Automated Applications',
    description: 'Our AI intelligently fills out and submits applications for roles that match your profile.',
  },
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: 'Continuous LinkedIn Monitoring',
    description: 'Never miss an opportunity. We scan LinkedIn 24/7 for new, relevant job postings.',
  },
  {
    icon: <FileScan className="h-8 w-8 text-primary" />,
    title: 'Advanced Resume Matching',
    description: 'Our AI deeply analyzes your resume to find the best job fits, beyond just keywords.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Accelerate Your Search',
    description: 'Save countless hours and focus on what matters: preparing for interviews.',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: 'Personalized Approach',
    description: 'Tailor your job search criteria for a truly personalized experience.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure & Confidential',
    description: 'Your data is protected with industry-standard security measures. We respect your privacy.',
  },
];

const WhyJobPilotAISection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why <span className="text-primary">JobPilot AI?</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Discover the advantages of automating your job search.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-primary/20 transition-shadow transform hover:-translate-y-1 duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJobPilotAISection;
