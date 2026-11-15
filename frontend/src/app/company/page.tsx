import type { Metadata } from "next";
import CompanyPage from "@/components/site/CompanyPage";

export const metadata: Metadata = { title: "Company · Vegham" };

export default function Page() {
  return <CompanyPage />;
}
