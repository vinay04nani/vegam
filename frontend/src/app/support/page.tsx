import type { Metadata } from "next";
import { ComingSoon } from "@/components/pixel/ComingSoon";

export const metadata: Metadata = { title: "Technical support · Vegam" };

export default function SupportPage() {
  return (
    <ComingSoon
      scene="lighthouse"
      icon="headset"
      label="Technical support"
      body="A help centre with guides and answers is on its way. Until then, tell us what you need through the contact form."
      contactTopic="support"
    />
  );
}
