"use client";

import { useState } from "react";
import { isOverdue } from "@/content/payments";
import { quoteTotal } from "@/content/quotes";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Card, SampleTag } from "./ui";
import { usePaymentLinks } from "./sections/payments/store";
import { useQuotes } from "./sections/payments/quoteStore";

// Everything waiting for the owner, in one list on Home: handovers, call-backs,
// overdue payments, unhappy feedback, reviews to answer, questions the AI
// couldn't answer, quotes to chase, bookings to confirm and rejected templates.
// Each opens the page where it gets done. Demo: sample items; "Done" hides one.

type Item = { id: string; icon: IconName; from: string; text: string; when?: string; action: string; view: string; urgent?: boolean };

export function NeedsYou({ onOpen }: { onOpen: (view: string) => void }) {
  const [done, setDone] = useState<string[]>([]);
  const overdue = usePaymentLinks().filter(isOverdue);
  const opened = useQuotes().filter((q) => q.status === "viewed");

  const items: Item[] = [
    { id: "handover", icon: "inbox", from: "Inbox", text: "K. Shah asked about a refund and was handed to you", when: "8 min ago", action: "Reply", view: "inbox", urgent: true },
    { id: "callback", icon: "phone", from: "Calls", text: "2 callers asked for a call back", when: "Since 11:05 AM", action: "Call back", view: "calls", urgent: true },
    ...(overdue.length
      ? [
          {
            id: "overdue",
            icon: "wallet" as IconName,
            from: "Payments",
            text: `${overdue.length} payment${overdue.length === 1 ? " is" : "s are"} overdue (₹${overdue.reduce((a, p) => a + p.amount, 0).toLocaleString("en-IN")})`,
            action: "See payments",
            view: "payments",
          },
        ]
      : []),
    { id: "feedback", icon: "star", from: "Reviews", text: "N. Gupta rated their visit 2 stars and told you why", when: "Yesterday", action: "Read", view: "reviews" },
    { id: "unanswered", icon: "sparkle", from: "AI agents", text: "4 questions the AI couldn’t answer", action: "Answer", view: "agent:chat/knowledge" },
    ...opened
      .slice(0, 1)
      .map((q) => ({
        id: `quote-${q.id}`,
        icon: "note" as IconName,
        from: "Quotes",
        text: `${q.who} opened your ₹${quoteTotal(q).toLocaleString("en-IN")} quote but hasn’t replied`,
        when: q.sent === 1 ? "Yesterday" : `${q.sent} days ago`,
        action: "Follow up",
        view: "payments/quotes",
      })),
    { id: "confirm", icon: "calendar", from: "Calendar", text: "2 of today’s bookings are waiting to be confirmed", action: "See calendar", view: "calendar" },
    { id: "reviews", icon: "star", from: "Reviews", text: "5 Google reviews are waiting for a reply", action: "Reply", view: "reviews" },
    { id: "template", icon: "message", from: "Templates", text: "Meta rejected your “weekend offer” message", action: "Fix it", view: "settings:templates" },
  ];
  const left = items.filter((i) => !done.includes(i.id));

  return (
    <Card
      title="Needs you"
      extra={
        <span className="flex items-center gap-2">
          <span className="text-[13px] text-subtle">{left.length ? `${left.length} to do` : "All done"}</span>
          <SampleTag />
        </span>
      }
    >
      {left.length === 0 ? (
        <p className="m-0 flex items-center gap-2 text-[15px] text-success">
          <Icon name="check" size={18} />
          Nothing waiting for you. The AI has it covered.
        </p>
      ) : (
        <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
          {left.map((n) => (
            <li key={n.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="relative flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border border-line bg-[#F6F6F8] text-ink">
                <Icon name={n.icon} size={16} />
                {n.urgent && <span aria-hidden="true" className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-orange" />}
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14.5px] leading-snug text-ink">{n.text}</span>
                <span className="text-[12.5px] text-subtle">
                  {n.from}
                  {n.when && ` · ${n.when}`}
                  {n.urgent && <span className="sr-only"> · urgent</span>}
                </span>
              </span>
              <button type="button" onClick={() => onOpen(n.view)} className="min-h-8 flex-none cursor-pointer rounded-[9px] border border-line-strong bg-white px-3 text-[13px] font-semibold text-ink hover:bg-panel">
                {n.action}
              </button>
              <button
                type="button"
                onClick={() => setDone((d) => [...d, n.id])}
                aria-label={`Mark done: ${n.text}`}
                title="Mark done"
                className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-ink"
              >
                <Icon name="check" size={15} strokeWidth={2.4} className="[&_circle]:hidden" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
