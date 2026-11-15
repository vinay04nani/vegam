import type { Metadata } from "next";
import SetupTestCall from "@/components/setup/SetupTestCall";

export const metadata: Metadata = { title: "Set up your agent · Vegham" };

export default function Page() {
  return <SetupTestCall />;
}
