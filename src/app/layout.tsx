import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Collers",
  description: "Collectible Sneakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-linear-gradient`}>{children}</body>
    </html>
  );
}
