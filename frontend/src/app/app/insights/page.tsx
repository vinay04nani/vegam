import type { Metadata } from "next";
import Insights from "@/components/app/pages/Insights";

export const metadata: Metadata = { title: "Insights · Vegham" };

export default function Page() {
  return <Insights />;
}
