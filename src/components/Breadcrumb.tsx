"use client";

import { usePathname } from "next/navigation";

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
              <svg
                className="w-3 h-3 text-white/40 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            {item.current ? (
              <span className="ml-1 text-sm font-medium text-white md:ml-2">{item.label}</span>
            ) : (
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer relative z-50"
              >
                {index === 0 && (
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
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
      <div className="fixed top-0 left-0 right-0 bg-[var(--color-primary)]/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">{breadcrumbContent}</div>
      </div>
    );
  }

  return breadcrumbContent;
};

export default Breadcrumb;
