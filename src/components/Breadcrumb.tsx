"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

interface BreadcrumbProps {
  fixed?: boolean;
}

const Breadcrumb = ({ fixed = false }: BreadcrumbProps) => {
  const pathname = usePathname();

  // Only show breadcrumb on blog-related pages
  if (!pathname.startsWith("/blog")) {
    return null;
  }

  const getBreadcrumbItems = () => {
    if (pathname === "/blog") {
      return [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog", current: true },
      ];
    }

    if (pathname.startsWith("/blog/")) {
      const slug = pathname.split("/")[2];
      return [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: slug, href: pathname, current: true },
      ];
    }

    return [];
  };

  const breadcrumbContent = (
    <nav className="flex relative z-50" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {getBreadcrumbItems().map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && (
              <Image
                src="/icons/chevron.svg"
                alt=""
                width={12}
                height={12}
                className="text-white/40 mx-1"
              />
            )}
            {item.current ? (
              <span className="ml-1 text-sm font-medium text-white md:ml-2">{item.label}</span>
            ) : (
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer relative z-50"
              >
                {index === 0 && (
                  <Image src="/icons/home.svg" alt="" width={12} height={12} className="mr-2.5" />
                )}
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );

  if (fixed) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-[var(--color-primary)]/90 backdrop-blur-sm z-50 min-h-[64px]">
        <div className="container mx-auto px-4 py-6">{breadcrumbContent}</div>
      </div>
    );
  }

  return breadcrumbContent;
};

export default Breadcrumb;
