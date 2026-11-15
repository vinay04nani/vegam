import type { Metadata } from "next";
import SetupGoLive from "@/components/setup/SetupGoLive";

export const metadata: Metadata = { title: "Set up your agent · Vegham" };

export default function Page() {
  return <SetupGoLive />;
}
