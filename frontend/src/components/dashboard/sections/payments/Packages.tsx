"use client";

import { useState } from "react";
import { packageOffers, packageStatus, sampleVouchers, samplePackages, voucherStatus, type CustomerPackage, type GiftVoucher } from "@/content/packages";
import { Icon } from "@/components/ui/Icon";
import { useBranch } from "../../branch";
import { Avatar, Badge, Button, EmptyState, Menu, Modal, useToast, type BadgeTone } from "../../kit";
import { Dropdown, Input } from "../settings/parts";

// Packages and memberships (prepaid visits that count down as visits are
// completed, memberships that renew), and gift vouchers with their balance.
// The AI can tell customers what they have left. Demo: kept in this page.

const rupees = (v: number) => `₹${v.toLocaleString("en-IN")}`;
const tone: Record<string, BadgeTone> = { Active: "success", "Ending soon": "warning", "Renews soon": "brand", "Used up": "neutral", Expired: "neutral", "Not used yet": "success", "Part used": "brand", Used: "neutral" };
const inDays = (d: number) => (d < 0 ? `${-d} days ago` : d === 0 ? "Today" : d === 1 ? "Tomorrow" : `In ${d} days`);

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 rounded-[16px] border border-line bg-white p-4">
      <span className="truncate text-[13px] font-medium text-subtle">{label}</span>
      <span className="text-[24px] leading-none font-semibold tracking-[-0.02em] text-ink">{value}</span>
      <span className="truncate text-[12.5px] text-subtle">{note}</span>
    </div>
  );
}

export function Packages({ selling, onSellDone }: { selling: boolean; onSellDone: () => void }) {
  const toast = useToast();
  const { branch, locations } = useBranch();
  const [list, setList] = useState<CustomerPackage[]>(samplePackages);
  const [draft, setDraft] = useState({ who: "", offer: packageOffers[0].name });
  const shown = list.filter((p) => branch === "all" || p.location === branch);
  const active = shown.filter((p) => packageStatus(p) !== "Expired" && packageStatus(p) !== "Used up");
  const prepaid = active.filter((p) => p.kind === "package").reduce((a, p) => a + (p.total - p.used), 0);

  const useVisit = (p: CustomerPackage) => {
    setList((all) => all.map((x) => (x.id === p.id ? { ...x, used: x.used + 1 } : x)));
    toast(p.kind === "package" ? `Visit used. ${p.who} has ${p.total - p.used - 1} left` : `Visit counted for ${p.who}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <Stat label="Active packages" value={String(active.filter((p) => p.kind === "package").length)} note={`${prepaid} prepaid visits left`} />
        <Stat label="Members" value={String(active.filter((p) => p.kind === "membership").length)} note={`${rupees(active.filter((p) => p.kind === "membership").reduce((a, p) => a + p.price, 0))} a month`} />
        <Stat label="Ending soon" value={String(shown.filter((p) => ["Ending soon", "Renews soon"].includes(packageStatus(p))).length)} note="The AI offers a renewal" />
        <Stat label="Sold this month" value={rupees(shown.reduce((a, p) => a + p.price, 0))} note="Packages and memberships" />
      </div>

      <section aria-label="Packages and memberships" className="min-w-0 rounded-[18px] border border-line bg-white">
        {shown.length === 0 ? (
          <div className="p-8">
            <EmptyState icon="tag" title="No packages yet" body="Sell a package or membership to see it here." />
          </div>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-[14px]">
              <thead>
                <tr className="bg-[#FAFAFC] text-left text-[13px] text-subtle">
                  <th scope="col" className="h-10 rounded-tl-[18px] pl-5 font-medium">
                    Customer
                  </th>
                  <th scope="col" className="font-medium">
                    Package
                  </th>
                  <th scope="col" className="font-medium">
                    Visits
                  </th>
                  <th scope="col" className="font-medium">
                    Status
                  </th>
                  <th scope="col" className="font-medium">
                    Expires or renews
                  </th>
                  <th scope="col" className="rounded-tr-[18px] pr-5">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown.map((p) => {
                  const st = packageStatus(p);
                  const unlimited = p.kind === "membership" && p.total === 0;
                  return (
                    <tr key={p.id} className="border-t border-line hover:bg-[#FAFAFC]">
                      <td className="h-14 pl-5">
                        <span className="flex items-center gap-2.5">
                          <Avatar name={p.who} size={30} />
                          <span className="flex min-w-0 flex-col leading-tight">
                            <span className="font-medium text-ink">{p.who}</span>
                            <span className="text-[12.5px] text-subtle">{p.phone}</span>
                          </span>
                        </span>
                      </td>
                      <td>
                        <span className="block leading-tight text-ink">{p.name}</span>
                        <span className="text-[12.5px] text-subtle">
                          {rupees(p.price)}
                          {p.kind === "membership" && " a month"}
                        </span>
                      </td>
                      <td className="w-[180px] pr-4">
                        {unlimited ? (
                          <span className="text-ink-soft">Unlimited · {p.used} this month</span>
                        ) : (
                          <span className="flex flex-col gap-1">
                            <span className="text-[13px] text-ink-soft">{p.kind === "package" ? `${Math.max(0, p.total - p.used)} of ${p.total} left` : `${p.used} of ${p.total} this month`}</span>
                            <span className="block h-1.5 overflow-hidden rounded-full bg-panel">
                              <span className="block h-full rounded-full bg-ink" style={{ width: `${Math.min(100, (p.used / p.total) * 100)}%` }} />
                            </span>
                          </span>
                        )}
                      </td>
                      <td>
                        <Badge tone={tone[st]} dot>
                          {st}
                        </Badge>
                      </td>
                      <td className="text-ink-soft">
                        {p.kind === "membership" ? (p.autoRenew ? `Renews ${inDays(p.days).toLowerCase()}` : `Ends ${inDays(p.days).toLowerCase()}`) : p.days < 0 ? `Expired ${inDays(p.days)}` : inDays(p.days)}
                      </td>
                      <td className="pr-5 text-right">
                        <Menu
                          label={`Actions for ${p.who}’s ${p.name}`}
                          items={[
                            ...(st !== "Expired" && st !== "Used up" ? [{ label: "Use a visit", icon: "check" as const, onSelect: () => useVisit(p) }] : []),
                            { label: "Send what’s left on WhatsApp", icon: "send" as const, onSelect: () => toast(`Sent ${p.who} their balance`) },
                            { label: "Extend by 30 days", icon: "calendar" as const, onSelect: () => (setList((all) => all.map((x) => (x.id === p.id ? { ...x, days: Math.max(0, x.days) + 30 } : x))), toast("Extended by 30 days")) },
                            ...(p.kind === "membership"
                              ? [{ label: p.autoRenew ? "Turn off auto-renew" : "Turn on auto-renew", icon: "refresh" as const, onSelect: () => setList((all) => all.map((x) => (x.id === p.id ? { ...x, autoRenew: !x.autoRenew } : x))) }]
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
      <p className="m-0 text-[13px] text-subtle">A visit is used when you mark it completed in the Calendar. Customers can ask the AI “how many visits do I have left?” at any time.</p>

      <Modal
        open={selling}
        onClose={onSellDone}
        title="Sell a package or membership"
        footer={
          <>
            <Button variant="ghost" onClick={onSellDone}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={draft.who.trim().length < 2}
              onClick={() => {
                const o = packageOffers.find((x) => x.name === draft.offer)!;
                setList((all) => [
                  {
                    id: `pk${Date.now()}`,
                    who: draft.who.trim(),
                    phone: "+91 •• ••• •••",
                    kind: o.kind,
                    name: o.name,
                    price: o.price,
                    total: o.total,
                    used: 0,
                    days: o.valid,
                    autoRenew: o.kind === "membership",
                    location: branch === "all" ? locations[0].id : branch,
                  },
                  ...all,
                ]);
                toast(`${o.name} added for ${draft.who.trim()}. A payment link is on its way`);
                setDraft({ who: "", offer: packageOffers[0].name });
                onSellDone();
              }}
            >
              Sell and send payment link
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Customer</span>
            <Input value={draft.who} onChange={(e) => setDraft({ ...draft, who: e.target.value })} placeholder="Name" autoFocus />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Package</span>
            <Dropdown value={draft.offer} onChange={(e) => setDraft({ ...draft, offer: e.target.value })}>
              {packageOffers.map((o) => (
                <option key={o.name}>
                  {o.name} · {rupees(o.price)}
                  {o.kind === "membership" ? " a month" : ` · valid ${o.valid} days`}
                </option>
              ))}
            </Dropdown>
          </label>
          <p className="m-0 flex items-start gap-2 text-[13px] text-subtle">
            <Icon name="sparkle" size={14} className="mt-0.5 flex-none" />
            The customer gets a Stripe payment link. The package starts once it’s paid.
          </p>
        </div>
      </Modal>
    </>
  );
}

export function Vouchers({ selling, onSellDone }: { selling: boolean; onSellDone: () => void }) {
  const toast = useToast();
  const { branch, locations } = useBranch();
  const [list, setList] = useState<GiftVoucher[]>(sampleVouchers);
  const [draft, setDraft] = useState({ amount: "2000", buyer: "", recipient: "" });
  const [redeem, setRedeem] = useState<{ v: GiftVoucher; amount: string } | null>(null);
  const shown = list.filter((v) => branch === "all" || v.location === branch);
  const open = shown.filter((v) => voucherStatus(v) !== "Expired" && voucherStatus(v) !== "Used");

  return (
    <>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <Stat label="Sold this year" value={rupees(shown.reduce((a, v) => a + v.amount, 0))} note={`${shown.length} vouchers`} />
        <Stat label="Still to spend" value={rupees(open.reduce((a, v) => a + v.balance, 0))} note={`${open.length} open vouchers`} />
        <Stat label="Redeemed" value={rupees(shown.reduce((a, v) => a + (v.amount - v.balance), 0))} note="Spent on visits" />
        <Stat label="Expired unused" value={rupees(shown.filter((v) => voucherStatus(v) === "Expired").reduce((a, v) => a + v.balance, 0))} note="Valid for 12 months" />
      </div>

      <section aria-label="Gift vouchers" className="min-w-0 rounded-[18px] border border-line bg-white">
        <div className="relative overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-[14px]">
            <thead>
              <tr className="bg-[#FAFAFC] text-left text-[13px] text-subtle">
                <th scope="col" className="h-10 rounded-tl-[18px] pl-5 font-medium">
                  Code
                </th>
                <th scope="col" className="font-medium">
                  From → for
                </th>
                <th scope="col" className="pr-6 text-right font-medium">
                  Balance
                </th>
                <th scope="col" className="font-medium">
                  Status
                </th>
                <th scope="col" className="font-medium">
                  Expires
                </th>
                <th scope="col" className="rounded-tr-[18px] pr-5">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.map((v) => {
                const st = voucherStatus(v);
                return (
                  <tr key={v.id} className="border-t border-line hover:bg-[#FAFAFC]">
                    <td className="h-14 pl-5 font-mono text-[13.5px] font-semibold text-ink">{v.code}</td>
                    <td className="text-ink-soft">
                      <span className="block leading-tight text-ink">{v.buyer}</span>
                      <span className="text-[12.5px] text-subtle">for {v.recipient}</span>
                    </td>
                    <td className="pr-6 text-right tabular-nums">
                      <span className="font-semibold text-ink">{rupees(v.balance)}</span>
                      <span className="block text-[12.5px] text-subtle">of {rupees(v.amount)}</span>
                    </td>
                    <td>
                      <Badge tone={tone[st]} dot>
                        {st}
                      </Badge>
                    </td>
                    <td className="text-ink-soft">{v.expires < 0 ? `Expired ${inDays(v.expires)}` : inDays(v.expires)}</td>
                    <td className="pr-5 text-right">
                      <Menu
                        label={`Actions for ${v.code}`}
                        items={[
                          ...(st !== "Expired" && st !== "Used" ? [{ label: "Use towards a visit", icon: "check" as const, onSelect: () => setRedeem({ v, amount: String(Math.min(v.balance, 1200)) }) }] : []),
                          { label: "Send the voucher on WhatsApp", icon: "send" as const, onSelect: () => toast(`Voucher ${v.code} sent`) },
                          { label: "Copy code", icon: "copy" as const, onSelect: () => (navigator.clipboard?.writeText(v.code).catch(() => undefined), toast("Code copied")) },
                          ...(st === "Expired"
                            ? [{ label: "Extend by 3 months", icon: "calendar" as const, onSelect: () => (setList((all) => all.map((x) => (x.id === v.id ? { ...x, expires: 90 } : x))), toast("Extended by 3 months")) }]
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
      </section>
      <p className="m-0 text-[13px] text-subtle">Customers can buy vouchers from your booking page or by asking the AI. It checks balances when someone pays with a code.</p>

      <Modal
        open={selling}
        onClose={onSellDone}
        title="Sell a gift voucher"
        footer={
          <>
            <Button variant="ghost" onClick={onSellDone}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={draft.buyer.trim().length < 2 || Number(draft.amount) <= 0}
              onClick={() => {
                const code = `NILA-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
                setList((all) => [
                  {
                    id: `gv${Date.now()}`,
                    code,
                    amount: Number(draft.amount),
                    balance: Number(draft.amount),
                    buyer: draft.buyer.trim(),
                    recipient: draft.recipient.trim() || draft.buyer.trim(),
                    sold: 0,
                    expires: 365,
                    location: branch === "all" ? locations[0].id : branch,
                  },
                  ...all,
                ]);
                toast(`Voucher ${code} created. A payment link is on its way`);
                setDraft({ amount: "2000", buyer: "", recipient: "" });
                onSellDone();
              }}
            >
              Create and send payment link
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Amount (₹)</span>
            <span className="flex flex-wrap gap-2">
              {["1000", "2000", "5000"].map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={draft.amount === a}
                  onClick={() => setDraft({ ...draft, amount: a })}
                  className={`min-h-9 cursor-pointer rounded-full border px-3.5 text-[13.5px] font-medium ${draft.amount === a ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink"}`}
                >
                  {rupees(Number(a))}
                </button>
              ))}
              <Input aria-label="Other amount" inputMode="numeric" value={draft.amount} onChange={(e) => setDraft({ ...draft, amount: e.target.value.replace(/\D/g, "") })} className="w-28" />
            </span>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Bought by</span>
            <Input value={draft.buyer} onChange={(e) => setDraft({ ...draft, buyer: e.target.value })} placeholder="Name" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">For (optional)</span>
            <Input value={draft.recipient} onChange={(e) => setDraft({ ...draft, recipient: e.target.value })} placeholder="Who it’s a gift for" />
          </label>
          <p className="m-0 text-[13px] text-subtle">Valid for 12 months. The buyer gets the voucher on WhatsApp to forward.</p>
        </div>
      </Modal>

      <Modal
        open={!!redeem}
        onClose={() => setRedeem(null)}
        title={redeem ? `Use ${redeem.v.code}` : ""}
        footer={
          <>
            <Button variant="ghost" onClick={() => setRedeem(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!redeem || Number(redeem.amount) <= 0 || Number(redeem.amount) > redeem.v.balance}
              onClick={() => {
                if (!redeem) return;
                const amt = Number(redeem.amount);
                setList((all) => all.map((x) => (x.id === redeem.v.id ? { ...x, balance: x.balance - amt } : x)));
                toast(`${rupees(amt)} used. ${rupees(redeem.v.balance - amt)} left on ${redeem.v.code}`);
                setRedeem(null);
              }}
            >
              Use it
            </Button>
          </>
        }
      >
        {redeem && (
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Amount to use (₹)</span>
            <Input inputMode="numeric" value={redeem.amount} onChange={(e) => setRedeem({ ...redeem, amount: e.target.value.replace(/\D/g, "") })} autoFocus />
            <span className="text-[12.5px] text-subtle">Balance {rupees(redeem.v.balance)}</span>
          </label>
        )}
      </Modal>
    </>
  );
}
