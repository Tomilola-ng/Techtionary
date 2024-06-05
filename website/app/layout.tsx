import "./globals.css";

import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import Header from "@/components/Header";

const myFont = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techtionary",
  description: "A curated list of tech terms and their definitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
