import type { Metadata } from "next";
import ConversationChat from "@/components/app/pages/ConversationChat";

export const metadata: Metadata = { title: "Conversations · Vegham" };

export default function Page() {
  return <ConversationChat />;
}
