import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import FooterLazy from "@/components/lazy/FooterLazy";
import { NAV_LINKS } from "@/data/nav";
import RevealSection from "@/components/ui/RevealSection";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "brokosDev | Full-stack Developer";
const SITE_DESCRIPTION =
  "Portfolio Mateusza Brokosa — full-stack developera budującego nowoczesne strony i aplikacje webowe w Next.js, TypeScript i React.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | brokosDev",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Mateusz Brokos",
    "brokosDev",
    "full-stack developer",
    "next.js developer",
    "react developer",
    "programista stron internetowych",
    "tworzenie stron www",
  ],
  authors: [{ name: "Mateusz Brokos" }],
  creator: "Mateusz Brokos",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "brokosDev",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      { url: "/me.webp", width: 1200, height: 1200, alt: "Mateusz Brokos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/me.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
