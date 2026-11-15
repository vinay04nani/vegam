import type { Metadata } from "next";
import ContactPage from "@/components/site/ContactPage";

export const metadata: Metadata = { title: "Contact · Vegham" };

export default function Page() {
  return <ContactPage />;
}
