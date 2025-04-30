import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-20 left-0 right-0 flex items-center justify-center z-50">
      <div className="px-30 py-4 rounded-xl shadow-[0_0_5px_rgba(220,220,220,0.20)] backdrop-blur-sm bg-(--color-dark-gray)/10 inline-flex items-center mx-auto">
        <div className="flex-shrink-0 mr-6">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="h-10 w-auto" />
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="#portfolio"
                className="text-white hover:text-(--color-tertiary) text-lg transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-white hover:text-(--color-tertiary) text-lg transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white hover:text-(--color-tertiary) text-lg transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
