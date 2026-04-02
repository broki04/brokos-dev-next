import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/navLinks";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbraisMono = JetBrains_Mono({
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
      lang="en"
      className={`${jetbraisMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar NAV_LINKS={NAV_LINKS} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
