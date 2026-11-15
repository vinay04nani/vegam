import type { Metadata } from "next";
import TermsPage from "@/components/site/TermsPage";

export const metadata: Metadata = { title: "Terms and conditions · Vegham" };

export default function Page() {
  return <TermsPage />;
}
