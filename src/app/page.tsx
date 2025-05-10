import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import WhyJobPilotAISection from '@/components/landing/why-jobpilot-ai-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import JoinWaitlistSection from '@/components/landing/join-waitlist-section';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <WhyJobPilotAISection />
        <TestimonialsSection />
        <JoinWaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
