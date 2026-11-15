import type { Metadata } from "next";
import PrivacyPage from "@/components/site/PrivacyPage";

export const metadata: Metadata = { title: "Privacy policy · Vegham" };

export default function Page() {
  return <PrivacyPage />;
}
