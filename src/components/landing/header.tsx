import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from './logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav>
          <Button asChild>
            <Link href="#join-waitlist-form">Join the Beta</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
