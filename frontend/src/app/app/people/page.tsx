import type { Metadata } from "next";
import People from "@/components/app/pages/People";

export const metadata: Metadata = { title: "People · Vegham" };

export default function Page() {
  return <People />;
}
