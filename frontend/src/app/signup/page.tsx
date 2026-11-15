import type { Metadata } from "next";
import SignupPage from "@/components/site/SignupPage";

export const metadata: Metadata = { title: "Create your account · Vegham" };

export default function Page() {
  return <SignupPage />;
}
