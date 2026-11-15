import type { Metadata } from "next";
import BookDemoPage from "@/components/site/BookDemoPage";

export const metadata: Metadata = { title: "Book a demo · Vegham" };

export default function Page() {
  return <BookDemoPage />;
}
