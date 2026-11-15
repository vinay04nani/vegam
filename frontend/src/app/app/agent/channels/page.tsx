import type { Metadata } from "next";
import Channels from "@/components/app/pages/Channels";

export const metadata: Metadata = { title: "Channels · Vegham" };

export default function Page() {
  return <Channels />;
}
