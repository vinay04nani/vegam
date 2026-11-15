import type { Metadata } from "next";
import Person from "@/components/app/pages/Person";

export const metadata: Metadata = { title: "Rohan Mehra · Vegham" };

export default function Page() {
  return <Person />;
}
