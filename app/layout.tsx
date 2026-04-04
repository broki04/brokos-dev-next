import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/sections/Navbar";
import FooterLazy from "@/components/lazy/FooterLazy";
import { NAV_LINKS } from "@/data/nav";
import RevealSection from "@/components/ui/RevealSection";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brokos Dev",
  description: "Front-end Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Navbar NAV_LINKS={NAV_LINKS} />

        {children}

        <RevealSection className="bg-brand-darker">
          <FooterLazy />
        </RevealSection>
      </body>
    </html>
  );
}
