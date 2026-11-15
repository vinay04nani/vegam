import type { Metadata } from "next";
import LoginPage from "@/components/site/LoginPage";

export const metadata: Metadata = { title: "Log in · Vegham" };

export default function Page() {
  return <LoginPage />;
}
