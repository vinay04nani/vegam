import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const metadata: Metadata = { title: "Home · Vegam", robots: { index: false } };

export default function AppPage() {
  return <Dashboard />;
}
