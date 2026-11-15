import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { withBase } from "@/lib/paths";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-tight" });

export const metadata: Metadata = {
  title: "Vegham · Never miss a customer again",
  description:
    "Vegham is an AI voice agent that answers your calls and messages, speaks your customers' language, and remembers every person it talks to.",
  icons: { icon: withBase("/icon.svg") },
};

export const viewport: Viewport = { themeColor: "#03050e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
