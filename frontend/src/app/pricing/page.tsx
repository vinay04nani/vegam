import type { Metadata } from "next";
import PricingPage from "@/components/site/PricingPage";

export const metadata: Metadata = { title: "Pricing · Vegham" };

export default function Page() {
  return <PricingPage />;
}
