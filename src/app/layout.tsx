import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";
import { loversQuarrel, openSans } from "./fonts";

export const metadata: Metadata = {
  title: "Melissa Albarella",
  description: "Melissa Albarella's personal website",
  openGraph: {
    title: "Melissa Albarella",
    description: "Melissa Albarella's personal website",
    url: "https://melissa-albarella.dev",
    siteName: "Melissa Albarella",
    images: [
      {
        url: "/preview.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Melissa Albarella's website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Albarella",
    description: "Melissa Albarella's personal website",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body
        className={`${loversQuarrel.className} ${openSans.className} m-0 p-0 h-full w-full overflow-x-hidden`}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
          <Image
            src="/bg.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1,
            }}
          />
          <div className="absolute inset-0 bg-(--color-dark-gray)/90" />
        </div>
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
