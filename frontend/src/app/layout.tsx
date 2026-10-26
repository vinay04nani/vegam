import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Newsreader } from "next/font/google";
import { withBase } from "@/lib/paths";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-newsreader",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vegam · Every customer, answered in seconds",
  description:
    "Vegam is the AI front desk for every business. It replies on WhatsApp, Instagram and your website, answers calls and books appointments, day and night.",
  icons: { icon: withBase("/icon.svg") },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${newsreader.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
