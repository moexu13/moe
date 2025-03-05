import type { Metadata } from "next";
import { loversQuarrel, openSans } from "./fonts";
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
      <body
        // className={`${loversQuarrel.className} ${openSans.className} antialiased bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat`}
        className={`${loversQuarrel.className} ${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
