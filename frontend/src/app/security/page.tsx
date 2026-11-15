import type { Metadata } from "next";
import SecurityPage from "@/components/site/SecurityPage";

export const metadata: Metadata = { title: "Security and privacy · Vegham" };

export default function Page() {
  return <SecurityPage />;
}
