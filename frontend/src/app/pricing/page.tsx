import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Pricing · Vegam",
  description: "Simple plans for every front desk: AI replies, missed-call recovery, AI phone answering, bookings and more. Compare Starter, Growth and Pro.",
};

export default function Pricing() {
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="text-lg leading-[1.55]">
        <PricingPage />
      </main>
      <Footer />
    </>
  );
}
