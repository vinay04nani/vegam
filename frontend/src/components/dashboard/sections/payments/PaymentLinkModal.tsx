"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { linkUrl, reminderDays, type PaymentPurpose } from "@/content/payments";
import { useBranch } from "../../branch";
import { Button, Modal, SegmentedControl, useToast } from "../../kit";
import { Dropdown, Input, Switch } from "../settings/parts";
import { paymentStore } from "./store";

// "Request payment": a Stripe payment link sent on WhatsApp, with reminders
// on day 3, 7 and 14 until it's paid. Opened from Payments, the inbox, the
// calendar and a contact. Demo: nothing is sent; the link is added to the
// Payments list for this visit.

export type PaymentDraft = { who?: string; phone?: string; item?: string; amount?: number; purpose?: PaymentPurpose };

const items = ["First visit", "Standard appointment", "Follow-up", "Extended session", "Consultation", "Package of 5"];

export function PaymentLinkModal({ open, onClose, initial, business = "Nila & Co" }: { open: boolean; onClose: () => void; initial?: PaymentDraft; business?: string }) {
  const toast = useToast();
  const { branch, locations } = useBranch();
  const blank = { who: "", phone: "", item: items[1], amount: "", purpose: "Deposit" as PaymentPurpose, dueIn: "3", remind: true };
  const [d, setD] = useState(blank);

  // Start from what the opener knows (customer, service, price) each time it opens.
  useEffect(() => {
    if (open) setD({ ...blank, who: initial?.who ?? "", phone: initial?.phone ?? "", item: initial?.item ?? blank.item, amount: initial?.amount ? String(initial.amount) : "", purpose: initial?.purpose ?? "Deposit" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const amount = Number(d.amount);
  const ok = d.who.trim().length > 1 && amount > 0;
  const id = "p" + String(Date.now()).slice(-5);

  const send = () => {
    paymentStore.add({
      id,
      who: d.who.trim(),
      phone: d.phone || "+91 •• ••• •••",
      purpose: d.purpose,
      item: d.item,
      amount,
      sent: 0,
      dueIn: Number(d.dueIn),
      status: "unpaid",
      viewed: false,
      location: branch === "all" ? locations[0].id : branch,
    });
    toast(`Payment link for ₹${amount.toLocaleString("en-IN")} sent to ${d.who.trim()}`);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Request a payment"
      width={680}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" icon="send" disabled={!ok} onClick={send}>
            Send on WhatsApp
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_240px]">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Customer</span>
              <Input value={d.who} onChange={(e) => setD({ ...d, who: e.target.value })} placeholder="Name" autoFocus={!initial?.who} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">WhatsApp number</span>
              <Input type="tel" value={d.phone} onChange={(e) => setD({ ...d, phone: e.target.value })} placeholder="+91" />
            </label>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">What it’s for</span>
            <SegmentedControl label="What it’s for" size="sm" value={d.purpose} onChange={(v) => setD({ ...d, purpose: v })} options={(["Deposit", "Full payment", "Balance", "Invoice"] as const).map((p) => ({ id: p, label: p }))} />
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_140px] gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Service</span>
              <Input list="payment-items" value={d.item} onChange={(e) => setD({ ...d, item: e.target.value })} />
              <datalist id="payment-items">
                {items.map((i) => (
                  <option key={i} value={i} />
                ))}
              </datalist>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Amount (₹)</span>
              <Input inputMode="numeric" value={d.amount} onChange={(e) => setD({ ...d, amount: e.target.value.replace(/[^\d]/g, "") })} placeholder="0" autoFocus={!!initial?.who} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Due</span>
            <Dropdown value={d.dueIn} onChange={(e) => setD({ ...d, dueIn: e.target.value })} className="w-48">
              <option value="1">In 1 day</option>
              <option value="3">In 3 days</option>
              <option value="7">In 7 days</option>
              <option value="14">In 14 days</option>
            </Dropdown>
          </label>
          <div className="flex items-start justify-between gap-4 rounded-[12px] bg-panel px-3.5 py-3">
            <span className="flex flex-col">
              <span className="text-[14px] font-medium text-ink">Remind until paid</span>
              <span className="text-[13px] text-subtle">A polite WhatsApp on day {reminderDays.join(", ").replace(/, (\d+)$/, " and $1")}. Stops as soon as they pay.</span>
            </span>
            <Switch checked={d.remind} onChange={(v) => setD({ ...d, remind: v })} label="Remind until paid" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-subtle">What they’ll get</span>
          <div className="rounded-[14px] bg-[#E9E1D8] p-3">
            <div className="rounded-[10px] rounded-tl-none bg-white p-3 text-[13.5px] leading-[1.45] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">
              Hi{" "}
              {d.who
                .trim()
                .split(/\s+/)
                .find((w) => w.length > 2 && !w.endsWith(".")) || "there"}
              , here’s your payment link from {business}.
              <span className="mt-2 block font-semibold">
                {d.purpose} · {d.item || "Your visit"}
              </span>
              <span className="block text-[17px] font-bold">₹{(amount || 0).toLocaleString("en-IN")}</span>
              <span className="mt-2 flex items-center gap-1.5 rounded-[8px] bg-[#F0F2F5] px-2.5 py-2 text-[12.5px] text-[#027EB5]">
                <Icon name="link" size={13} />
                {linkUrl(id)}
              </span>
              <span className="mt-2 block text-[12.5px] text-[#667781]">Pay by UPI or card. Secured by Stripe.</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
