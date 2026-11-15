import type { Metadata } from "next";
import SetupBusiness from "@/components/setup/SetupBusiness";

export const metadata: Metadata = { title: "Set up your agent · Vegham" };

export default function Page() {
  return <SetupBusiness />;
}
