import type { Metadata } from "next";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";

export const metadata: Metadata = { title: "Set up your front desk · Vegam", robots: { index: false } };

export default function OnboardingPage() {
  return <OnboardingWizard />;
}
