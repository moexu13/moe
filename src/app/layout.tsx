import type { Metadata } from "next";
import { Lovers_Quarrel, Open_Sans } from "next/font/google";
import "./globals.css";

const loversQuarrel = Lovers_Quarrel({
  variable: "--font-lovers-quarrel",
  subsets: ["latin"],
  weight: ["400"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

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
        className={`${loversQuarrel.variable} ${openSans.variable} antialiased bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
