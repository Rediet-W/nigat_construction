import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { MagicCursor } from "@/components/effects/MagicCursor";
import { ScrollAnimations } from "@/components/effects/ScrollAnimations";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { BackToTop } from "@/components/ui/BackToTop";
import { SITE } from "@/constants/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: SITE.defaultTitle, template: `%s - ${SITE.name}` },
  description: SITE.description,
  authors: [{ name: "AwaikenThemes" }],
  icons: { icon: "/images/favicon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Flags JS availability before first paint so scroll-reveal content can start hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <MagicCursor />
        <SmoothScroll />
        <ScrollAnimations />
      </body>
    </html>
  );
}
