"use client";

import { useState } from "react";
import { quoteTotal, type Quote, type QuoteStatus } from "@/content/quotes";
import { downloadPdf } from "@/lib/pdf";
import { useBranch } from "../../branch";
import { Avatar, Badge, EmptyState, Menu, Tabs, useToast, type BadgeTone } from "../../kit";
import { PaymentLinkModal, type PaymentDraft } from "./PaymentLinkModal";
import { quoteStore, useQuotes } from "./quoteStore";

// Quotes: estimates sent on WhatsApp, what's waiting for an answer, and what
// was accepted. An accepted quote becomes a booking or a payment link.

type Filter = "all" | "open" | "accepted" | "closed";

const rupees = (v: number) => `₹${v.toLocaleString("en-IN")}`;
const ago = (d: number) => (d === 0 ? "Today" : d === 1 ? "Yesterday" : `${d} days ago`);
const status: Record<QuoteStatus, { label: string; tone: BadgeTone }> = {
  draft: { label: "Draft", tone: "neutral" },
  sent: { label: "Sent", tone: "brand" },
  viewed: { label: "Opened", tone: "warning" },
  accepted: { label: "Accepted", tone: "success" },
  declined: { label: "Declined", tone: "neutral" },
  expired: { label: "Expired", tone: "neutral" },
};
const isOpen = (q: Quote) => q.status === "sent" || q.status === "viewed" || q.status === "draft";

export function Quotes({ onOpen, onNew }: { onOpen: (view: string) => void; onNew: () => void }) {
  const toast = useToast();
  const all = useQuotes();
  const { branch } = useBranch();
  const [filter, setFilter] = useState<Filter>("all");
  const [paying, setPaying] = useState<PaymentDraft | null>(null);
  const quotes = all.filter((q) => branch === "all" || q.location === branch);
  const match = (q: Quote) => filter === "all" || (filter === "open" ? isOpen(q) : filter === "accepted" ? q.status === "accepted" : q.status === "expired" || q.status === "declined");
  const shown = quotes.filter(match);
  const count = (f: Filter) => quotes.filter((q) => f === "all" || (f === "open" ? isOpen(q) : f === "accepted" ? q.status === "accepted" : q.status === "expired" || q.status === "declined")).length;
  const decided = quotes.filter((q) => q.status === "accepted" || q.status === "declined" || q.status === "expired");
  const summary = (q: Quote) => q.items.map((i) => (i.qty > 1 ? `${i.qty} × ${i.name}` : i.name)).join(", ");

  const pdf = (q: Quote) =>
    downloadPdf(`quote-${q.id}.pdf`, [
      { text: "Quote", size: 20, bold: true, gap: 0 },
      { text: `${q.id.toUpperCase()} · ${ago(q.sent)} · valid for ${q.validDays} days`, gap: 24 },
      { text: `For: ${q.who} (${q.phone})`, gap: 30 },
      ...q.items.map((i) => ({ text: `${i.qty} x ${i.name}   ${rupees(i.qty * i.price)}` })),
      { text: `Total: ${rupees(quoteTotal(q))}`, bold: true, size: 13, gap: 26 },
      ...(q.note ? [{ text: q.note, size: 10, gap: 22 }] : []),
      { text: "Sample quote from the Vegam demo.", size: 9, gap: 40 },
    ]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[
          {
            label: "Waiting for an answer",
            value: rupees(quotes.filter((q) => q.status === "sent" || q.status === "viewed").reduce((a, q) => a + quoteTotal(q), 0)),
            note: `${quotes.filter((q) => q.status === "sent" || q.status === "viewed").length} quotes`,
          },
          { label: "Accepted", value: rupees(quotes.filter((q) => q.status === "accepted").reduce((a, q) => a + quoteTotal(q), 0)), note: `${count("accepted")} this month` },
          { label: "Accepted rate", value: `${Math.round((quotes.filter((q) => q.status === "accepted").length / Math.max(1, decided.length)) * 100)}%`, note: "Of quotes with an answer" },
          { label: "Drafts", value: String(quotes.filter((q) => q.status === "draft").length), note: "Not sent yet" },
        ].map((s) => (
          <div key={s.label} className="flex min-w-0 flex-col gap-1.5 rounded-[16px] border border-line bg-white p-4">
            <span className="truncate text-[13px] font-medium text-subtle">{s.label}</span>
            <span className="text-[24px] leading-none font-semibold tracking-[-0.02em] text-ink">{s.value}</span>
            <span className="truncate text-[12.5px] text-subtle">{s.note}</span>
          </div>
        ))}
      </div>

      <section aria-label="Quotes" className="flex min-w-0 flex-col rounded-[18px] border border-line bg-white">
        <div className="px-5 pt-3">
          <Tabs
            label="Show quotes"
            value={filter}
            onChange={setFilter}
            tabs={[
              { id: "all", label: "All", count: count("all") },
              { id: "open", label: "Open", count: count("open") },
              { id: "accepted", label: "Accepted", count: count("accepted") },
              { id: "closed", label: "Expired or declined", count: count("closed") },
            ]}
          />
        </div>
        {shown.length === 0 ? (
          <div className="border-t border-line p-8">
            <EmptyState icon="note" title="No quotes here" body="Send a quote from here, a chat or a contact." />
          </div>
        ) : (
          <div className="relative overflow-x-auto border-t border-line">
            <table className="w-full min-w-[720px] border-collapse text-[14px]">
              <thead>
                <tr className="bg-[#FAFAFC] text-left text-[13px] text-subtle">
                  <th scope="col" className="h-10 pl-5 font-medium">
                    Customer
                  </th>
                  <th scope="col" className="font-medium">
                    For
                  </th>
                  <th scope="col" className="pr-6 text-right font-medium">
                    Total
                  </th>
                  <th scope="col" className="font-medium">
                    Status
                  </th>
                  <th scope="col" className="font-medium">
                    Sent
                  </th>
                  <th scope="col" className="pr-5">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown.map((q) => {
                  const st = status[q.status];
                  const left = q.validDays - q.sent;
                  return (
                    <tr key={q.id} className="border-t border-line hover:bg-[#FAFAFC]">
                      <td className="h-14 pl-5">
                        <span className="flex items-center gap-2.5">
                          <Avatar name={q.who} size={30} />
                          <span className="flex min-w-0 flex-col leading-tight">
                            <span className="font-medium text-ink">{q.who}</span>
                            <span className="text-[12.5px] text-subtle">{q.phone}</span>
                          </span>
                        </span>
                      </td>
                      <td className="max-w-[260px] pr-3">
                        <span className="block truncate text-ink">{summary(q)}</span>
                        {q.note && <span className="block truncate text-[12.5px] text-subtle">{q.note}</span>}
                      </td>
                      <td className="pr-6 text-right font-semibold text-ink tabular-nums">{rupees(quoteTotal(q))}</td>
                      <td>
                        <Badge tone={st.tone} dot>
                          {st.label}
                        </Badge>
                      </td>
                      <td className="whitespace-nowrap text-ink-soft">
                        {q.status === "draft" ? "—" : ago(q.sent)}
                        {isOpen(q) && q.status !== "draft" && <span className="block text-[12.5px] text-subtle">{left > 0 ? `Valid ${left} more day${left === 1 ? "" : "s"}` : "Expires today"}</span>}
                      </td>
                      <td className="pr-5 text-right">
                        <Menu
                          label={`Actions for ${q.who}’s quote`}
                          items={[
                            ...(q.status === "draft" ? [{ label: "Send on WhatsApp", icon: "send" as const, onSelect: () => (quoteStore.update(q.id, { status: "sent", sent: 0 }), toast(`Quote sent to ${q.who}`)) }] : []),
                            ...(q.status === "sent" || q.status === "viewed"
                              ? [
                                  { label: "Send a reminder", icon: "send" as const, onSelect: () => toast(`Reminder sent to ${q.who}`) },
                                  { label: "Mark as accepted", icon: "check" as const, onSelect: () => (quoteStore.update(q.id, { status: "accepted" }), toast("Marked as accepted")) },
                                ]
                              : []),
                            { label: "Request a payment for it", icon: "wallet" as const, onSelect: () => setPaying({ who: q.who, phone: q.phone, item: summary(q), amount: quoteTotal(q), purpose: "Invoice" }) },
                            { label: "Book a visit", icon: "calendar" as const, onSelect: () => onOpen("calendar") },
                            { label: "Download PDF", icon: "download" as const, onSelect: () => pdf(q) },
                            ...(isOpen(q)
                              ? [
                                  { label: "", divider: true },
                                  { label: "Withdraw", icon: "close" as const, danger: true, onSelect: () => (quoteStore.update(q.id, { status: "declined" }), toast("Quote withdrawn")) },
                                ]
                              : []),
                          ]}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <p className="m-0 text-[13px] text-subtle">
        Customers reply YES to accept. The AI then books the visit and, if you ask for one, sends a deposit link.{" "}
        <button type="button" onClick={onNew} className="cursor-pointer font-semibold text-ink-soft underline underline-offset-2 hover:text-ink">
          Send a quote
        </button>
      </p>
      <PaymentLinkModal open={!!paying} onClose={() => setPaying(null)} initial={paying ?? undefined} />
    </>
  );
}
