import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader, Noto_Sans_Arabic, Noto_Sans_Devanagari, Noto_Sans_Thai } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import { withBase } from "@/lib/paths";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "greek", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-devanagari",
  display: "swap",
  preload: false,
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-thai",
  display: "swap",
  preload: false,
});

const themeBoot = `(function(){try{var d=document.documentElement;var q=new URLSearchParams(location.search).get("theme");var dark=q?q==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;d.setAttribute("data-theme",dark?"dark":"light");var lang=navigator.language||"en";d.lang=lang;d.dir=/^(ar|he|fa|ur|yi|dv|ps|ckb)\\b/i.test(lang)?"rtl":"ltr";}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Vegam · Every customer, answered in seconds",
  description:
    "Vegam is the AI front desk for every business. It replies on WhatsApp, Instagram and your website, answers calls and books appointments, day and night.",
  icons: { icon: withBase("/icon.svg") },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFD" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C14" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable} ${notoArabic.variable} ${notoDevanagari.variable} ${notoThai.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
