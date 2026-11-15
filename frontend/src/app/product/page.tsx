import type { Metadata } from "next";
import ProductPage from "@/components/site/ProductPage";

export const metadata: Metadata = { title: "Product · Vegham" };

export default function Page() {
  return <ProductPage />;
}
