// Ported from design board LandingV2 by design/tools/port.py. Sample data is inline.
import type { CSSProperties } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Hero from "@/components/site/landing/Hero";
import Channels from "@/components/site/landing/Channels";
import Features from "@/components/site/landing/Features";
import Anywhere from "@/components/site/landing/Anywhere";
import HowItWorks from "@/components/site/landing/HowItWorks";
import Control from "@/components/site/landing/Control";
import Faq from "@/components/site/landing/Faq";
import Cta from "@/components/site/landing/Cta";

export default function LandingPage() {
  return (
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6", timelineScope: "--vg-sec-product, --vg-sec-how, --vg-sec-pricing" } as CSSProperties}>
      <SiteHeader />
      <Hero />
      <Channels />
      <Features />
      <Anywhere />
      <HowItWorks />
      <Control />
      <Faq />
      <Cta />
      <SiteFooter />
      </div>
  );
}
