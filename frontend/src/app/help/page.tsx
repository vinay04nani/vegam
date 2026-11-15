import type { Metadata } from "next";
import HelpPage from "@/components/site/HelpPage";

export const metadata: Metadata = { title: "Help centre · Vegham" };

export default function Page() {
  return <HelpPage />;
}
