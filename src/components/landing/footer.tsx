import Link from 'next/link';
import Logo from './logo'; // Re-use the Logo component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Automating your path to the perfect job.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} JobPilot AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
