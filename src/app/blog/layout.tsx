import type { Metadata } from "next";

import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Blog | Melissa Albarella",
  description: "Melissa Albarella's blog about web development, design, and more",
  openGraph: {
    title: "Blog | Melissa Albarella",
    description: "Melissa Albarella's blog about web development, design, and more",
    url: "https://melissa-albarella.dev/blog",
    siteName: "Melissa Albarella",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Melissa Albarella's blog preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
