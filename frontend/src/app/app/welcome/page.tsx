import type { Metadata } from "next";
import Welcome from "@/components/app/pages/Welcome";

export const metadata: Metadata = { title: "Welcome · Vegham" };

export default function Page() {
  return <Welcome />;
}
