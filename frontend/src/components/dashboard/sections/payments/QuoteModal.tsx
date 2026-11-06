"use client";

import { useEffect, useState } from "react";
import { quoteTotal, type QuoteItem } from "@/content/quotes";
import { Icon } from "@/components/ui/Icon";
import { useBranch } from "../../branch";
import { Button, Modal, useToast } from "../../kit";
import { Dropdown, Input, TextArea } from "../settings/parts";
import { quoteStore } from "./quoteStore";

// "Send a quote": line items, a note and how long it's valid, with a preview
// of the WhatsApp message. Opened from Payments → Quotes, the inbox and a
// contact. Demo: nothing is sent; the quote is added to the Quotes list.

const items = ["First visit", "Standard appointment", "Follow-up", "Extended session", "Consultation", "Package of 5"];
const rupees = (v: number) => `₹${v.toLocaleString("en-IN")}`;

export function QuoteModal({ open, onClose, initial, business = "Nila & Co" }: { open: boolean; onClose: () => void; initial?: { who?: string; phone?: string }; business?: string }) {
  const toast = useToast();
  const { branch, locations } = useBranch();
  const [who, setWho] = useState("");
  const [phone, setPhone] = useState("");
  const [lines, setLines] = useState<QuoteItem[]>([]);
  const [note, setNote] = useState("");
  const [valid, setValid] = useState("7");

  useEffect(() => {
    if (!open) return;
    setWho(initial?.who ?? "");
    setPhone(initial?.phone ?? "");
    setLines([{ name: "Standard appointment", qty: 1, price: 1200 }]);
    setNote("");
    setValid("7");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const total = quoteTotal({ items: lines });
  const ok = who.trim().length > 1 && lines.some((l) => l.name.trim() && l.qty > 0 && l.price > 0);
  const setLine = (i: number, patch: Partial<QuoteItem>) => setLines((all) => all.map((l, j) => (j === i ? { ...l, ...patch } : l)));

  const save = (status: "draft" | "sent") => {
    quoteStore.add({
      id: `q${String(Date.now()).slice(-5)}`,
      who: who.trim(),
      phone: phone || "+91 •• ••• •••",
      items: lines.filter((l) => l.name.trim()),
      note: note.trim(),
      validDays: Number(valid),
      sent: 0,
      status,
      location: branch === "all" ? locations[0].id : branch,
    });
    toast(status === "sent" ? `Quote for ${rupees(total)} sent to ${who.trim()}` : "Quote saved as a draft");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Send a quote"
      width={720}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!ok} onClick={() => save("draft")}>
            Save draft
          </Button>
          <Button variant="primary" icon="send" disabled={!ok} onClick={() => save("sent")}>
            Send on WhatsApp
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_230px]">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Customer</span>
              <Input value={who} onChange={(e) => setWho(e.target.value)} placeholder="Name" autoFocus={!initial?.who} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">WhatsApp number</span>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <span className="grid grid-cols-[minmax(0,1fr)_60px_96px_32px] gap-2 text-[12.5px] text-subtle">
              <span>Item</span>
              <span>Qty</span>
              <span>Price (₹)</span>
              <span />
            </span>
            {lines.map((l, i) => (
              <span key={i} className="grid grid-cols-[minmax(0,1fr)_60px_96px_32px] items-center gap-2">
                <Input aria-label={`Item ${i + 1}`} list="quote-items" value={l.name} onChange={(e) => setLine(i, { name: e.target.value })} placeholder="What it’s for" />
                <Input aria-label={`Item ${i + 1} quantity`} inputMode="numeric" value={l.qty || ""} onChange={(e) => setLine(i, { qty: Number(e.target.value.replace(/\D/g, "")) || 0 })} />
                <Input aria-label={`Item ${i + 1} price`} inputMode="numeric" value={l.price || ""} onChange={(e) => setLine(i, { price: Number(e.target.value.replace(/\D/g, "")) || 0 })} />
                <button
                  type="button"
                  onClick={() => setLines((all) => all.filter((_, j) => j !== i))}
                  disabled={lines.length === 1}
                  aria-label={`Remove item ${i + 1}`}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger disabled:cursor-default disabled:opacity-30"
                >
                  <Icon name="trash" size={15} />
                </button>
              </span>
            ))}
            <datalist id="quote-items">
              {items.map((x) => (
                <option key={x} value={x} />
              ))}
            </datalist>
            <span className="flex items-center justify-between gap-3">
              <button type="button" onClick={() => setLines((all) => [...all, { name: "", qty: 1, price: 0 }])} className="inline-flex cursor-pointer items-center gap-1 text-[13.5px] font-semibold text-ink-soft hover:text-ink">
                <Icon name="plus" size={14} />
                Add an item
              </button>
              <span className="text-[14px] text-ink">
                Total <span className="font-semibold tabular-nums">{rupees(total)}</span>
              </span>
            </span>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Note (optional)</span>
            <TextArea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Includes a 30-minute consultation." />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Valid for</span>
            <Dropdown value={valid} onChange={(e) => setValid(e.target.value)} className="w-44">
              <option value="3">3 days</option>
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </Dropdown>
          </label>
          <p className="m-0 text-[13px] text-subtle">If they don’t reply, the Follow-up agent checks in after 3 days.</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-subtle">What they’ll get</span>
          <div className="rounded-[14px] bg-[#E9E1D8] p-3">
            <div className="rounded-[10px] rounded-tl-none bg-white p-3 text-[13px] leading-[1.45] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">
              Hi{" "}
              {who
                .trim()
                .split(/\s+/)
                .find((w) => w.length > 2 && !w.endsWith(".")) || "there"}
              , here’s your quote from {business}:
              <span className="mt-2 flex flex-col gap-0.5">
                {lines
                  .filter((l) => l.name.trim())
                  .map((l, i) => (
                    <span key={i} className="flex justify-between gap-2">
                      <span className="truncate">
                        {l.qty > 1 ? `${l.qty} × ` : ""}
                        {l.name}
                      </span>
                      <span className="tabular-nums">{rupees(l.qty * l.price)}</span>
                    </span>
                  ))}
              </span>
              <span className="mt-1.5 flex justify-between border-t border-[#E9EDEF] pt-1.5 font-bold">
                Total <span className="tabular-nums">{rupees(total)}</span>
              </span>
              {note.trim() && <span className="mt-1.5 block text-[12.5px] text-[#54656F]">{note.trim()}</span>}
              <span className="mt-2 block text-[12px] text-[#54656F]">Valid for {valid} days. Reply YES to book, or ask us anything.</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
