"use client";

import { useMemo, useState } from "react";
import { integrationCategories, integrations, type Integration, type IntegrationCategory } from "@/content/integrations";
import { plans } from "@/content/pricing";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import type { ChannelStatus, OnboardingState } from "@/lib/onboarding";
import { Badge, useToast } from "../../kit";
import { Group, RowButton } from "./parts";

// Channels and apps, in the style of Claude's connectors: a searchable list
// (connected first, then everything else by category) and a detail view in
// place with what you need, the steps, approvals and connection details.
// Channel statuses are shared with onboarding.
// Demo: "Connect" changes the status only; nothing is really connected.

type Status = ChannelStatus | "soon";
type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

function StatusBadge({ s }: { s: Status }) {
  if (s === "connected") return <Badge tone="success" dot>Connected</Badge>;
  if (s === "pending") return <Badge tone="warning" dot>Waiting for approval</Badge>;
  if (s === "soon") return <Badge>Coming soon</Badge>;
  return null;
}

function Snippet({ text }: { text: string }) {
  const toast = useToast();
  return (
    <div className="flex items-center gap-2 rounded-[10px] bg-ink py-1.5 pr-1.5 pl-3.5">
      <code className="flex-1 overflow-x-auto font-mono text-[13px] whitespace-nowrap text-white/90">{text}</code>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(text).catch(() => undefined);
          toast("Copied");
        }}
        className="inline-flex h-8 flex-none cursor-pointer items-center gap-1.5 rounded-[8px] bg-white/10 px-2.5 text-[13px] font-medium text-white hover:bg-white/20"
      >
        <Icon name="copy" size={14} />
        Copy
      </button>
    </div>
  );
}

export function Connectors({ state, update }: Props) {
  const toast = useToast();
  const [local, setLocal] = useState<Record<string, ChannelStatus>>({ gcal: "connected" });
  const [category, setCategory] = useState<"All" | IntegrationCategory>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [working, setWorking] = useState(false);

  const statusOf = (i: Integration): Status => (i.comingSoon ? "soon" : i.channel ? state.channels[i.channel] : (local[i.id] ?? "off"));
  const setStatus = (i: Integration, s: ChannelStatus) => {
    if (i.channel) update((st) => ({ ...st, channels: { ...st.channels, [i.channel!]: s } }));
    else setLocal((l) => ({ ...l, [i.id]: s }));
  };
  const connect = (i: Integration) => {
    setWorking(true);
    window.setTimeout(() => {
      setStatus(i, i.needsApproval ? "pending" : "connected");
      setWorking(false);
      toast(i.needsApproval ? `${i.name} connected, waiting for approval` : `${i.name} connected`);
    }, 900);
  };

  const q = query.trim().toLowerCase();
  const matches = useMemo(() => integrations.filter((i) => (category === "All" || i.category === category) && (!q || `${i.name} ${i.value} ${i.category}`.toLowerCase().includes(q))), [category, q]);
  const isOn = (i: Integration) => ["connected", "pending"].includes(statusOf(i));
  const connected = matches.filter(isOn);
  const available = matches.filter((i) => !isOn(i));
  const groups = integrationCategories.map((c) => ({ c, list: available.filter((i) => i.category === c) })).filter((g) => g.list.length);
  const open = integrations.find((i) => i.id === openId) ?? null;

  if (open) {
    const s = statusOf(open);
    const plan = plans.find((p) => p.id === open.minPlan)?.name;
    return (
      <>
        <button type="button" onClick={() => setOpenId(null)} className="-mt-3 mb-5 inline-flex cursor-pointer items-center gap-1 text-[13.5px] font-medium text-subtle hover:text-ink">
          <Icon name="chevron-left" size={15} />
          All channels and apps
        </button>
        <div className="flex flex-wrap items-center gap-4 border-b border-line pb-6">
          <BrandLogo brand={open.brand} size={56} />
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <h3 className="m-0 text-[19px] font-semibold text-ink">{open.name}</h3>
            <span className="flex flex-wrap items-center gap-1.5">
              <StatusBadge s={s} />
              <span className="text-[13px] text-subtle">
                {open.category} · {plan} plan and up
              </span>
            </span>
          </div>
          {s === "off" && (
            <RowButton tone="primary" onClick={() => connect(open)}>
              {working ? "Connecting…" : "Connect"}
            </RowButton>
          )}
          {s === "pending" && (
            <RowButton
              onClick={() => {
                setStatus(open, "connected");
                toast(`${open.name} approved`);
              }}
            >
              Mark approved (demo)
            </RowButton>
          )}
          {(s === "connected" || s === "pending") && (
            <RowButton
              tone="danger"
              onClick={() => {
                setStatus(open, "off");
                toast(`${open.name} disconnected`, "info");
              }}
            >
              Disconnect
            </RowButton>
          )}
        </div>
        <p className="m-0 pt-5 pb-9 text-[15px] leading-relaxed text-ink-soft">{open.value}</p>

        {s === "connected" && open.connected && (
          <Group title="Connection">
            {open.connected.map((d) => (
              <div key={d.label} className="flex items-center justify-between gap-4 py-3 text-[14px]">
                <span className="text-subtle">{d.label}</span>
                <span className="text-ink">{d.value}</span>
              </div>
            ))}
          </Group>
        )}

        {open.approvals && s !== "off" && (
          <div className="mt-8">
            <Group title="Approvals">
              {open.approvals.map((a) => (
                <div key={a.label} className="flex items-center gap-3 py-3">
                  <span className={`flex h-6 w-6 flex-none items-center justify-center rounded-full ${s === "connected" ? "bg-[#E8F3EA] text-success" : "bg-[#FFF3E6] text-warning"}`}>
                    <Icon name={s === "connected" ? "check" : "clock"} size={13} />
                  </span>
                  <span className="flex-1 text-[14px] text-ink">{a.label}</span>
                  <span className="text-[13px] text-subtle">{s === "connected" ? "Approved" : `Usually ${a.time.toLowerCase()}`}</span>
                </div>
              ))}
            </Group>
          </div>
        )}

        {s !== "connected" && (
          <div className={s === "pending" ? "mt-8" : ""}>
            <Group title="What you’ll need">
              {open.needs.map((n) => (
                <div key={n} className="flex items-start gap-2.5 py-3 text-[14px] text-ink">
                  <Icon name="check" size={15} className="mt-0.5 flex-none text-muted" />
                  {n}
                </div>
              ))}
            </Group>
            <div className="mt-8">
              <Group title="How to connect">
                {open.steps.map((st, idx) => (
                  <div key={st} className="flex items-start gap-3 py-3 text-[14px] text-ink">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-panel text-[11.5px] font-semibold text-ink">{idx + 1}</span>
                    {st}
                  </div>
                ))}
                {open.id === "website" && (
                  <div className="py-3">
                    <Snippet text={`<script src="https://vegam.example/chat.js" data-business="your-id" async></script>`} />
                  </div>
                )}
                {open.id === "missed" && (
                  <div className="py-3">
                    <Snippet text="**004*+918000000000#" />
                  </div>
                )}
              </Group>
            </div>
          </div>
        )}
        <p className="mt-8 mb-0 text-[12.5px] text-subtle">Demo: connecting here doesn’t contact {open.name}.</p>
      </>
    );
  }

  const row = (i: Integration) => {
    const s = statusOf(i);
    return (
      <button key={i.id} type="button" onClick={() => setOpenId(i.id)} aria-label={`${i.name}${s === "off" ? "" : `, ${s === "pending" ? "waiting for approval" : s === "soon" ? "coming soon" : "connected"}`}`} className="-mx-2 flex w-[calc(100%+16px)] cursor-pointer items-center gap-3.5 rounded-[10px] px-2 py-3 text-left transition hover:bg-[#F7F7FA]">
        <BrandLogo brand={i.brand} size={36} />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="flex items-center gap-2 text-[14.5px] text-ink">
            {i.name}
            {i.popular && s === "off" && <span className="text-[12px] text-subtle">Popular</span>}
          </span>
          <span className="truncate text-[13px] text-subtle">{i.value}</span>
        </span>
        {s === "off" ? (
          <span className="inline-flex h-8 flex-none items-center rounded-[8px] border border-line-strong bg-white px-3 text-[13.5px] font-medium text-ink">Connect</span>
        ) : (
          <StatusBadge s={s} />
        )}
        <Icon name="chevron-right" size={16} className="flex-none text-faint" />
      </button>
    );
  };

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search channels and apps</span>
        <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search WhatsApp, Google Calendar, Stripe…"
          className="h-10 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-10 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-3 focus:ring-indigo/10"
        />
      </label>
      <div role="tablist" aria-label="Category" className="mt-3 mb-8 flex flex-wrap gap-1.5">
        {(["All", ...integrationCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`h-8 cursor-pointer rounded-full px-3 text-[13px] font-medium transition ${category === c ? "bg-ink text-white" : "bg-panel text-ink-soft hover:text-ink"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {matches.length === 0 && <p className="m-0 py-6 text-center text-[14px] text-subtle">Nothing matches “{query}”.</p>}

      {connected.length > 0 && (
        <div className="mb-9">
          <Group title="Connected" description={`${connected.length} of ${integrations.length}`}>
            {connected.map(row)}
          </Group>
        </div>
      )}
      {groups.map(({ c, list }) => (
        <div key={c} className="mb-9 last:mb-0">
          <Group title={c}>{list.map(row)}</Group>
        </div>
      ))}
    </>
  );
}
