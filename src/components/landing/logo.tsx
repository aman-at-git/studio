import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
      JobPilot AI
    </Link>
  );
};

export default Logo;
