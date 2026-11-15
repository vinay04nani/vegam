import type { Metadata } from "next";
import Home from "@/components/app/pages/Home";

export const metadata: Metadata = { title: "Home · Vegham" };

export default function Page() {
  return <Home />;
}
