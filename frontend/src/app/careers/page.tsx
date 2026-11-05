import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Careers · Vegam" };

export default function CareersPage() {
  return (
    <ComingSoon
      icon="briefcase"
      label="Careers"
      body="We’re a small team building the AI front desk for every business. Open roles will be listed here soon. Want to work with us? Say hello."
      contactTopic="careers"
    />
  );
}
