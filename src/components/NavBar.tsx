import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-radial from-[var(--color-primary)] to-[var(--color-primary)]/60 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
        <Link href="/blog" className="text-white">Blog</Link>
        <Link href="/portfolio" className="text-white">Portfolio</Link>
        <Link href="/contact" className="text-white">Contact</Link>
      </div>
    </nav> 
  );
};

export default NavBar;