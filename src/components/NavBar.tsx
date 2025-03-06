import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/" className="text-white">Home</Link>
      <Link href="/about" className="text-white">About</Link>
      <Link href="/portfolio" className="text-white">Portfolio</Link>
      <Link href="/blog" className="text-white">Blog</Link>
      <Link href="/contact" className="text-white">Contact</Link>
    </nav> 
  );
};

export default NavBar;