"use client";

import { useState } from "react";
import { daysAgo, isOverdue, linkUrl, reminderDays, remindersSent, type PaymentLink } from "@/content/payments";
import { Icon } from "@/components/ui/Icon";
import { downloadPdf } from "@/lib/pdf";
import { useBranch } from "../branch";
import { Avatar, Badge, Button, Drawer, EmptyState, Menu, Tabs, useToast, type BadgeTone } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { PaymentLinkModal } from "./payments/PaymentLinkModal";
import { paymentStore, usePaymentLinks } from "./payments/store";

// Payments (Pro): Stripe payment links for deposits, full payments, balances
// and invoices, what's been collected and what's still owed. Reminders go
// out on day 3, 7 and 14 until a link is paid. Demo: sample links; actions
// change this visit only.

type Filter = "all" | "unpaid" | "overdue" | "paid" | "refunded";

const rupees = (v: number) => `₹${v.toLocaleString("en-IN")}`;

function status(p: PaymentLink): { label: string; tone: BadgeTone } {
  if (isOverdue(p)) return { label: "Overdue", tone: "danger" };
  return {
    unpaid: { label: "Unpaid", tone: "warning" as BadgeTone },
    paid: { label: "Paid", tone: "success" as BadgeTone },
    refunded: { label: "Refunded", tone: "neutral" as BadgeTone },
    cancelled: { label: "Cancelled", tone: "neutral" as BadgeTone },
  }[p.status];
}

/** Three dots for the day 3 / 7 / 14 reminders: filled once sent. */
function ReminderDots({ p }: { p: PaymentLink }) {
  const sent = remindersSent(p);
  const live = p.status === "unpaid";
  return (
    <span className="flex items-center gap-1" aria-label={live ? `${sent} of ${reminderDays.length} reminders sent` : "No reminders needed"} title={live ? `Reminders on day ${reminderDays.join(", ")}` : undefined}>
      {reminderDays.map((d, i) => (
        <span key={d} className={`h-2 w-2 rounded-full ${!live && sent <= i ? "bg-line" : i < sent ? "bg-ink" : "border border-line-strong bg-white"}`} />
      ))}
    </span>
  );
}

export function Payments({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const all = usePaymentLinks();
  const { branch, label } = useBranch();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [creating, setCreating] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const links = all.filter((p) => branch === "all" || p.location === branch);
  const matches = (p: PaymentLink) => filter === "all" || (filter === "overdue" ? isOverdue(p) : filter === "unpaid" ? p.status === "unpaid" : p.status === filter);
  const q = query.trim().toLowerCase();
  const shown = links.filter((p) => matches(p) && (!q || `${p.who} ${p.item} ${p.purpose}`.toLowerCase().includes(q)));
  const open = all.find((p) => p.id === openId) ?? null;

  const collected = links.filter((p) => p.status === "paid").reduce((a, p) => a + p.amount, 0);
  const unpaid = links.filter((p) => p.status === "unpaid");
  const overdue = unpaid.filter(isOverdue);
  const paidLinks = links.filter((p) => p.status === "paid" && p.paid !== undefined);
  const avgDays = paidLinks.length ? paidLinks.reduce((a, p) => a + (p.sent - (p.paid ?? 0)), 0) / paidLinks.length : 0;
  const count = (f: Filter) => links.filter((p) => f === "all" || (f === "overdue" ? isOverdue(p) : f === "unpaid" ? p.status === "unpaid" : p.status === f)).length;

  const remind = (p: PaymentLink) => toast(`Reminder sent to ${p.who} on WhatsApp`);
  const copy = (p: PaymentLink) => {
    navigator.clipboard?.writeText(`https://${linkUrl(p.id)}`).catch(() => undefined);
    toast("Payment link copied");
  };
  const markPaid = (p: PaymentLink) => {
    paymentStore.update(p.id, { status: "paid", paid: 0, method: "Cash" });
    toast(`Marked as paid: ${rupees(p.amount)} from ${p.who}`);
  };
  const receipt = (p: PaymentLink) =>
    downloadPdf(`receipt-${p.id}.pdf`, [
      { text: "Payment receipt", size: 20, bold: true, gap: 0 },
      { text: `Receipt ${p.id.toUpperCase()} · ${daysAgo(p.paid ?? 0)}`, gap: 24 },
      { text: `Received from: ${p.who} (${p.phone})`, gap: 30 },
      { text: `For: ${p.purpose} · ${p.item}` },
      { text: `Amount: ${rupees(p.amount)}`, bold: true },
      { text: `Paid by: ${p.method ?? "UPI"} through Stripe` },
      { text: "Sample receipt from the Vegam demo.", size: 9, gap: 40 },
    ]);

  const actions = (p: PaymentLink) => [
    ...(p.status === "unpaid"
      ? [
          { label: "Send a reminder now", icon: "send" as const, onSelect: () => remind(p) },
          { label: "Copy link", icon: "copy" as const, onSelect: () => copy(p) },
          { label: "Mark as paid (cash)", icon: "check" as const, onSelect: () => markPaid(p) },
          { label: "", divider: true },
          {
            label: "Cancel link",
            icon: "close" as const,
            danger: true,
            onSelect: () => {
              paymentStore.update(p.id, { status: "cancelled" });
              toast("Payment link cancelled");
            },
          },
        ]
      : []),
    ...(p.status === "paid"
      ? [
          { label: "Download receipt", icon: "download" as const, onSelect: () => receipt(p) },
          { label: "", divider: true },
          {
            label: "Refund",
            icon: "refresh" as const,
            danger: true,
            onSelect: () => {
              paymentStore.update(p.id, { status: "refunded" });
              toast(`${rupees(p.amount)} refunded to ${p.who}`);
            },
          },
        ]
      : []),
    ...(p.status === "refunded" || p.status === "cancelled" ? [{ label: "Send a new link", icon: "link" as const, onSelect: () => setCreating(true) }] : []),
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Payments" body="Payment links for deposits and bills, what’s been paid and what’s still owed. Customers pay by UPI or card through Stripe." />
        <div className="flex flex-wrap items-center gap-2">
          <SampleTag />
          <Button icon="settings" onClick={() => onOpen("settings:payments")}>
            Settings
          </Button>
          <Button variant="primary" icon="plus" onClick={() => setCreating(true)}>
            Request payment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[
          { label: "Collected", value: rupees(collected), note: `${links.filter((p) => p.status === "paid").length} payments · last 30 days` },
          { label: "Waiting to be paid", value: rupees(unpaid.reduce((a, p) => a + p.amount, 0)), note: `${unpaid.length} open links` },
          { label: "Overdue", value: rupees(overdue.reduce((a, p) => a + p.amount, 0)), note: overdue.length ? `${overdue.length} past the due date` : "Nothing overdue", danger: overdue.length > 0 },
          { label: "Average time to pay", value: `${avgDays.toFixed(1)} days`, note: "From link to payment" },
        ].map((s) => (
          <div key={s.label} className="flex min-w-0 flex-col gap-1.5 rounded-[16px] border border-line bg-white p-4">
            <span className="text-[13px] font-medium text-subtle">{s.label}</span>
            <span className={`text-[24px] leading-none font-semibold tracking-[-0.02em] ${s.danger ? "text-danger" : "text-ink"}`}>{s.value}</span>
            <span className="truncate text-[12.5px] text-subtle">{s.note}</span>
          </div>
        ))}
      </div>

      <section aria-label="Payment links" className="flex min-w-0 flex-col rounded-[18px] border border-line bg-white">
        <div className="flex flex-wrap items-end justify-between gap-3 px-5 pt-3">
          <Tabs
            label="Show"
            value={filter}
            onChange={setFilter}
            tabs={[
              { id: "all", label: "All", count: count("all") },
              { id: "unpaid", label: "Unpaid", count: count("unpaid") },
              { id: "overdue", label: "Overdue", count: count("overdue") },
              { id: "paid", label: "Paid", count: count("paid") },
              { id: "refunded", label: "Refunded", count: count("refunded") },
            ]}
          />
          <label className="relative mb-2 w-full sm:w-60">
            <span className="sr-only">Search payments</span>
            <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search customer or service"
              className="h-9 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-9 text-[14px] text-ink outline-none placeholder:text-subtle focus:border-ink"
            />
          </label>
        </div>

        {shown.length === 0 ? (
          <div className="border-t border-line p-8">
            <EmptyState icon="wallet" title="No payments here" body={branch === "all" ? "Try another tab or search." : `Nothing for ${label} in this view.`} />
          </div>
        ) : (
          <div className="relative overflow-x-auto border-t border-line">
            <table className="w-full min-w-[760px] border-collapse text-[14px]">
              <thead>
                <tr className="bg-[#FAFAFC] text-left text-[13px] text-subtle">
                  <th scope="col" className="h-10 pl-5 font-medium">
                    Customer
                  </th>
                  <th scope="col" className="font-medium">
                    For
                  </th>
                  <th scope="col" className="pr-6 text-right font-medium">
                    Amount
                  </th>
                  <th scope="col" className="font-medium">
                    Status
                  </th>
                  <th scope="col" className="font-medium">
                    Sent
                  </th>
                  <th scope="col" className="font-medium">
                    Reminders
                  </th>
                  <th scope="col" className="pr-5">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown.map((p) => {
                  const s = status(p);
                  return (
                    <tr key={p.id} onClick={() => setOpenId(p.id)} className="cursor-pointer border-t border-line hover:bg-[#FAFAFC]">
                      <td className="h-14 pl-5">
                        <span className="flex items-center gap-2.5">
                          <Avatar name={p.who} size={30} />
                          <span className="flex min-w-0 flex-col leading-tight">
                            <button type="button" onClick={() => setOpenId(p.id)} className="cursor-pointer text-left font-medium text-ink hover:underline">
                              {p.who}
                            </button>
                            <span className="text-[12.5px] text-subtle">{p.phone}</span>
                          </span>
                        </span>
                      </td>
                      <td className="text-ink-soft">
                        <span className="block leading-tight text-ink">{p.purpose}</span>
                        <span className="text-[12.5px] text-subtle">{p.item}</span>
                      </td>
                      <td className="pr-6 text-right font-semibold text-ink tabular-nums">{rupees(p.amount)}</td>
                      <td>
                        <Badge tone={s.tone} dot>
                          {s.label}
                        </Badge>
                      </td>
                      <td className="whitespace-nowrap text-ink-soft">
                        {daysAgo(p.sent)}
                        {p.status === "paid" && <span className="block text-[12.5px] text-subtle">Paid {daysAgo(p.paid ?? 0).toLowerCase()}</span>}
                        {p.status === "unpaid" && <span className="block text-[12.5px] text-subtle">{p.viewed ? "Opened" : "Not opened yet"}</span>}
                      </td>
                      <td>
                        <ReminderDots p={p} />
                      </td>
                      <td className="pr-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <Menu label={`Actions for ${p.who}`} items={actions(p)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Drawer
        open={!!open}
        onClose={() => setOpenId(null)}
        title={open ? `${open.purpose} · ${open.who}` : ""}
        footer={
          open && (
            <>
              {open.status === "unpaid" && (
                <>
                  <Button variant="ghost" onClick={() => markPaid(open)}>
                    Mark as paid
                  </Button>
                  <Button variant="primary" icon="send" onClick={() => remind(open)}>
                    Send reminder
                  </Button>
                </>
              )}
              {open.status === "paid" && (
                <Button variant="primary" icon="download" onClick={() => receipt(open)}>
                  Download receipt
                </Button>
              )}
            </>
          )
        }
      >
        {open && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Badge tone={status(open).tone} dot>
                {status(open).label}
              </Badge>
              <span className="text-[34px] leading-none font-semibold tracking-[-0.02em] text-ink">{rupees(open.amount)}</span>
              <span className="text-[14px] text-subtle">
                {open.purpose} for {open.item}
              </span>
            </div>
            <dl className="m-0 grid grid-cols-[120px_minmax(0,1fr)] gap-y-2.5 text-[14px]">
              <dt className="text-subtle">Customer</dt>
              <dd className="m-0 text-ink">
                {open.who} · {open.phone}
              </dd>
              <dt className="text-subtle">Link</dt>
              <dd className="m-0 flex items-center gap-2 text-ink">
                <span className="truncate">{linkUrl(open.id)}</span>
                <button type="button" onClick={() => copy(open)} aria-label="Copy payment link" className="cursor-pointer text-muted hover:text-ink">
                  <Icon name="copy" size={15} />
                </button>
              </dd>
              <dt className="text-subtle">Due</dt>
              <dd className="m-0 text-ink">{open.status === "unpaid" ? (open.sent > open.dueIn ? `${open.sent - open.dueIn} days ago` : open.dueIn - open.sent === 0 ? "Today" : `In ${open.dueIn - open.sent} days`) : "—"}</dd>
              {open.method && (
                <>
                  <dt className="text-subtle">Paid by</dt>
                  <dd className="m-0 text-ink">{open.method}</dd>
                </>
              )}
            </dl>
            <div>
              <h3 className="m-0 mb-3 text-[14px] font-semibold text-ink">Timeline</h3>
              <ol className="m-0 flex list-none flex-col p-0">
                {[
                  { text: "Link sent on WhatsApp", when: daysAgo(open.sent), done: true },
                  { text: open.viewed ? "Customer opened the link" : "Not opened yet", when: "", done: !!open.viewed },
                  ...reminderDays.map((d) => ({
                    text: `Reminder ${reminderDays.indexOf(d) + 1} (day ${d})`,
                    when: d <= open.sent ? daysAgo(open.sent - d) : open.status === "unpaid" ? `In ${d - open.sent} days` : "Not needed",
                    done: open.status === "unpaid" ? d <= open.sent : open.paid !== undefined && d <= open.sent - open.paid,
                  })),
                  ...(open.status === "paid" || open.status === "refunded" ? [{ text: `Paid by ${open.method}`, when: daysAgo(open.paid ?? 0), done: true }] : []),
                  ...(open.status === "refunded" ? [{ text: "Refunded", when: "", done: true }] : []),
                  ...(open.status === "cancelled" ? [{ text: "Link cancelled", when: "", done: true }] : []),
                ].map((e, i, arr) => (
                  <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
                    {i < arr.length - 1 && <span aria-hidden="true" className="absolute top-4 left-[5px] h-full w-px bg-line" />}
                    <span className={`relative mt-1 h-[11px] w-[11px] flex-none rounded-full ${e.done ? "bg-ink" : "border-2 border-line-strong bg-white"}`} />
                    <span className="flex flex-1 items-baseline justify-between gap-3 text-[14px]">
                      <span className={e.done ? "text-ink" : "text-subtle"}>{e.text}</span>
                      <span className="text-[12.5px] whitespace-nowrap text-subtle">{e.when}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </Drawer>

      <PaymentLinkModal open={creating} onClose={() => setCreating(false)} />
    </div>
  );
}
