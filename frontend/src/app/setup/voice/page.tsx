import type { Metadata } from "next";
import SetupVoice from "@/components/setup/SetupVoice";

export const metadata: Metadata = { title: "Set up your agent · Vegham" };

export default function Page() {
  return <SetupVoice />;
}
