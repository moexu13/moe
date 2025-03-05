import Link from "next/link";

const NavBar = ({ className }: { className?: string }) => {
  return (
    <nav className={`flex justify-between items-center p-4 bg-[var(--color-primary)]/90 rounded-lg ${className}`}>
      <Link href="/" className="text-white">Home</Link>
      <Link href="/about" className="text-white">About</Link>
      <Link href="/blog" className="text-white">Blog</Link>
      <Link href="/portfolio" className="text-white">Portfolio</Link>
      <Link href="/contact" className="text-white">Contact</Link>
    </nav>
  );
};

export default NavBar;