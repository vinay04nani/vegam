"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch } from "./parts";

// The chat button on the business's website: colour, greeting, label and
// position, with a live preview and the one-line code to paste. Demo: the
// code points at a placeholder script.

const colors = ["#23243A", "#4A47E0", "#0F766E", "#B4531A", "#BE185D", "#25D366"];

export function WebsiteWidget({ name }: { name: string }) {
  const toast = useToast();
  const [color, setColor] = useState(colors[1]);
  const [greeting, setGreeting] = useState(`Hi! Ask us anything or book a visit.`);
  const [label, setLabel] = useState("Chat with us");
  const [side, setSide] = useState<"right" | "left">("right");
  const [form, setForm] = useState(true);
  const [wa, setWa] = useState(true);
  const [open, setOpen] = useState(true);
  const code = `<script src="https://vegam.example/chat.js" data-business="your-id" data-color="${color}" data-position="${side}" async></script>`;

  return (
    <>
      <Group title="Chat button" description="How the chat looks on your website. The preview updates as you change it.">
        <div className="py-4">
          <div className="relative h-[340px] overflow-hidden rounded-[14px] border border-line bg-[linear-gradient(#F7F7FA,#F7F7FA)]">
            <div className="flex items-center gap-1.5 border-b border-line bg-white px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F1B9B9]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F3D9A4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#BFE3C5]" />
              <span className="ml-2 rounded-[6px] bg-panel px-2 py-0.5 text-[11px] text-subtle">yourbusiness.com</span>
            </div>
            <div className="flex flex-col gap-2 p-5" aria-hidden="true">
              <span className="h-4 w-40 rounded bg-[#E6E7EE]" />
              <span className="h-3 w-64 max-w-full rounded bg-[#ECEDF2]" />
              <span className="h-3 w-56 max-w-full rounded bg-[#ECEDF2]" />
              <span className="mt-3 h-20 w-full max-w-[260px] rounded-[10px] bg-[#ECEDF2]" />
            </div>
            {open && (
              <div className={`absolute bottom-[70px] w-[250px] overflow-hidden rounded-[14px] bg-white shadow-[0_14px_36px_rgb(30_31_43/0.2)] ${side === "right" ? "right-4" : "left-4"}`}>
                <div className="px-3.5 py-2.5 text-white" style={{ background: color }}>
                  <p className="m-0 text-[13.5px] font-semibold">{name || "Nila & Co"}</p>
                  <p className="m-0 text-[11.5px] opacity-80">Usually replies in seconds · AI assistant</p>
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <span className="max-w-[90%] rounded-[10px] rounded-tl-none bg-panel px-2.5 py-1.5 text-[12.5px] text-ink">{greeting || "Hi! How can we help?"}</span>
                  {form && (
                    <span className="flex flex-wrap gap-1.5">
                      {["Book a visit", "Prices", "Timings"].map((x) => (
                        <span key={x} className="rounded-full border px-2 py-0.5 text-[11.5px]" style={{ borderColor: color, color }}>
                          {x}
                        </span>
                      ))}
                    </span>
                  )}
                  <span className="mt-1 rounded-[9px] border border-line px-2.5 py-1.5 text-[12px] text-faint">Type a message…</span>
                  {wa && <span className="text-center text-[11px] text-subtle">or continue on WhatsApp</span>}
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close the preview chat" : "Open the preview chat"}
              className={`absolute bottom-4 inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgb(30_31_43/0.25)] ${side === "right" ? "right-4" : "left-4"}`}
              style={{ background: color }}
            >
              <Icon name={open ? "close" : "message"} size={16} />
              {label || "Chat"}
            </button>
          </div>
        </div>
        <Row label="Colour">
          <span className="flex gap-1.5">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Colour ${c}`}
                aria-pressed={color === c}
                onClick={() => setColor(c)}
                className={`h-7 w-7 cursor-pointer rounded-full ring-offset-2 ${color === c ? "ring-2 ring-ink" : ""}`}
                style={{ background: c }}
              />
            ))}
          </span>
        </Row>
        <Row label="Button label">
          <Input aria-label="Button label" value={label} onChange={(e) => setLabel(e.target.value)} className="w-56" />
        </Row>
        <Row label="Greeting" description="The first message visitors see.">
          <Input aria-label="Greeting" value={greeting} onChange={(e) => setGreeting(e.target.value)} className="w-72" />
        </Row>
        <Row label="Position">
          <Dropdown aria-label="Position" value={side} onChange={(e) => setSide(e.target.value as "right" | "left")} className="w-44">
            <option value="right">Bottom right</option>
            <option value="left">Bottom left</option>
          </Dropdown>
        </Row>
        <Row label="Quick buttons" description="Book a visit, Prices, Timings.">
          <Switch checked={form} onChange={setForm} label="Quick buttons" />
        </Row>
        <Row label="Offer to continue on WhatsApp" description="Visitors can move the chat to WhatsApp, so they get reminders.">
          <Switch checked={wa} onChange={setWa} label="Offer to continue on WhatsApp" />
        </Row>
      </Group>
      <div className="mt-9">
        <Group title="Add it to your website">
          <Row label="Your code" description="Paste it before the closing </body> tag, or send it to whoever runs your website." stacked>
            <code className="block rounded-[10px] bg-panel px-3 py-2.5 font-mono text-[12.5px] break-all text-ink-soft">{code}</code>
          </Row>
          <Row label="Copy or send">
            <RowButton
              icon="copy"
              onClick={() => {
                navigator.clipboard?.writeText(code).catch(() => undefined);
                toast("Code copied");
              }}
            >
              Copy code
            </RowButton>
            <RowButton icon="mail" onClick={() => toast("Instructions emailed to your web person (demo)", "info")}>
              Email instructions
            </RowButton>
          </Row>
        </Group>
      </div>
    </>
  );
}
