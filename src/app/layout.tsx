import Image from "next/image";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Melissa Albarella",
  description: "Melissa Albarella's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Image
          src="/bg.jpeg"
          alt=""
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        {children}
      </body>
    </html>
  );
}
