import type { Metadata } from "next";
import Followups from "@/components/app/pages/Followups";

export const metadata: Metadata = { title: "Follow-ups · Vegham" };

export default function Page() {
  return <Followups />;
}
