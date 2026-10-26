import type { Metadata } from "next";
import { ComingSoon } from "@/components/pixel/ComingSoon";

export const metadata: Metadata = { title: "Press / Media · Vegam" };

export default function PressPage() {
  return (
    <ComingSoon
      scene="kites"
      icon="news"
      label="Press / Media"
      body="Our press kit, logos and news will live here soon. For media enquiries, reach us through the contact form."
      contactTopic="press"
    />
  );
}
