import type { Metadata } from "next";
import Agent from "@/components/app/pages/Agent";

export const metadata: Metadata = { title: "Your agent · Vegham" };

export default function Page() {
  return <Agent />;
}
