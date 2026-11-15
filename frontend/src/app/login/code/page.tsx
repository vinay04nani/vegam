import type { Metadata } from "next";
import CodePage from "@/components/site/CodePage";

export const metadata: Metadata = { title: "Enter your code · Vegham" };

export default function Page() {
  return <CodePage />;
}
