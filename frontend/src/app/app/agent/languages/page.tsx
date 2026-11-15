import type { Metadata } from "next";
import AgentLanguages from "@/components/app/pages/AgentLanguages";

export const metadata: Metadata = { title: "Languages · Vegham" };

export default function Page() {
  return <AgentLanguages />;
}
