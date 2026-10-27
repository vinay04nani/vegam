import type { Metadata } from "next";
import { Onboarding } from "@/components/onboarding/Onboarding";

export const metadata: Metadata = { title: "Get started · Vegam", robots: { index: false } };

export default function OnboardingPage() {
  return <Onboarding />;
}
