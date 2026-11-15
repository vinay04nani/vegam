import type { Metadata } from "next";
import AgentTest from "@/components/app/pages/AgentTest";

export const metadata: Metadata = { title: "Test call · Vegham" };

export default function Page() {
  return <AgentTest />;
}
