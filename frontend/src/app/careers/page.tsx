import type { Metadata } from "next";
import CareersPage from "@/components/site/CareersPage";

export const metadata: Metadata = { title: "Careers · Vegham" };

export default function Page() {
  return <CareersPage />;
}
