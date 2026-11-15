import type { Metadata } from "next";
import AgentMemory from "@/components/app/pages/AgentMemory";

export const metadata: Metadata = { title: "Memory · Vegham" };

export default function Page() {
  return <AgentMemory />;
}
