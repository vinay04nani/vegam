import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Technical support · Vegam" };

export default function SupportPage() {
  return (
    <ComingSoon
      icon="headset"
      label="Help center"
      body="Guides for the product live in the app help center. For anything else, write to us from the contact form."
      contactTopic="support"
    />
  );
}
