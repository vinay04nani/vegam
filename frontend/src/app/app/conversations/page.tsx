import type { Metadata } from "next";
import Conversations from "@/components/app/pages/Conversations";

export const metadata: Metadata = { title: "Conversations · Vegham" };

export default function Page() {
  return <Conversations />;
}
