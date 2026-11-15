import type { Metadata } from "next";
import AgentKnowledge from "@/components/app/pages/AgentKnowledge";

export const metadata: Metadata = { title: "Knowledge · Vegham" };

export default function Page() {
  return <AgentKnowledge />;
}
