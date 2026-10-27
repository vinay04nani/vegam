"use client";

import { useMemo, useState } from "react";
import { integrationCategories, integrations, type Integration, type IntegrationCategory } from "@/content/integrations";
import { plans } from "@/content/pricing";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import type { ChannelStatus, OnboardingState } from "@/lib/onboarding";
import { Badge, Button, Drawer, EmptyState, useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";

// Every service Vegam connects to, grouped by category, with what each needs
// and the steps to connect. Channel statuses are shared with onboarding.
// Demo: "Connect" changes the status only; nothing is really connected.

type Status = ChannelStatus | "soon";

const statusBadge = (s: Status) =>
  s === "connected" ? (
    <Badge tone="success" dot>
      Connected
    </Badge>
  ) : s === "pending" ? (
    <Badge tone="warning" dot>
      Waiting for approval
    </Badge>
  ) : s === "soon" ? (
    <Badge>Coming soon</Badge>
  ) : null;

function Snippet({ text }: { text: string }) {
  const toast = useToast();
  return (
    <div className="flex items-center gap-2 rounded-[12px] bg-ink py-1.5 pr-1.5 pl-3.5">
      <code className="flex-1 overflow-x-auto font-mono text-[13px] whitespace-nowrap text-white/90">{text}</code>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(text).catch(() => undefined);
          toast("Copied");
        }}
        className="inline-flex min-h-8 flex-none cursor-pointer items-center gap-1.5 rounded-[8px] bg-white/10 px-2.5 text-[13px] font-semibold text-white hover:bg-white/20"
      >
        <Icon name="copy" size={14} />
        Copy
      </button>
    </div>
  );
}

export function Channels({ state, update }: { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void }) {
  const toast = useToast();
  const [local, setLocal] = useState<Record<string, ChannelStatus>>({ gcal: "connected" });
  const [category, setCategory] = useState<"All" | IntegrationCategory>("All");
  const [query, setQuery] = useState("");
  const [connectedOnly, setConnectedOnly] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [working, setWorking] = useState(false);

  const statusOf = (i: Integration): Status => (i.comingSoon ? "soon" : i.channel ? state.channels[i.channel] : (local[i.id] ?? "off"));
  const setStatus = (i: Integration, s: ChannelStatus) => {
    if (i.channel) update((st) => ({ ...st, channels: { ...st.channels, [i.channel!]: s } }));
    else setLocal((l) => ({ ...l, [i.id]: s }));
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return integrations.filter(
      (i) =>
        (category === "All" || i.category === category) &&
        (!q || `${i.name} ${i.value} ${i.category}`.toLowerCase().includes(q)) &&
        (!connectedOnly || ["connected", "pending"].includes(statusOf(i))),
    );
  }, [query, category, connectedOnly, state.channels, local]);

  const counts = integrations.reduce(
    (c, i) => {
      const s = statusOf(i);
      if (s === "connected") c.connected++;
      if (s === "pending") c.pending++;
      return c;
    },
    { connected: 0, pending: 0 },
  );

  const open = integrations.find((i) => i.id === openId) ?? null;
  const openStatus = open ? statusOf(open) : "off";

  const connect = (i: Integration) => {
    setWorking(true);
    window.setTimeout(() => {
      setStatus(i, i.needsApproval ? "pending" : "connected");
      setWorking(false);
      toast(i.needsApproval ? `${i.name} connected, waiting for approval` : `${i.name} connected`);
    }, 900);
  };

  const groups = (category === "All" ? integrationCategories : [category]).map((c) => ({ c, list: visible.filter((i) => i.category === c) })).filter((g) => g.list.length);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Channels" body="Connect the places your customers reach you and the tools you already use. Everything lands in one inbox and one calendar." />
        <SampleTag />
      </div>

      <div className="flex flex-wrap items-center gap-2 text-[14px]">
        <Badge tone="success" dot>
          {counts.connected} connected
        </Badge>
        {counts.pending > 0 && (
          <Badge tone="warning" dot>
            {counts.pending} waiting for approval
          </Badge>
        )}
        <span className="text-subtle">{integrations.length} integrations available</span>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search integrations</span>
            <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search WhatsApp, Google Calendar, Stripe…"
              className="min-h-10 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-10 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
            />
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-ink-soft">
            <input type="checkbox" checked={connectedOnly} onChange={(e) => setConnectedOnly(e.target.checked)} className="h-4 w-4 accent-[#23243A]" />
            Connected only
          </label>
        </div>
        <div role="tablist" aria-label="Category" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 [scrollbar-width:none]">
          {(["All", ...integrationCategories] as const).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`min-h-9 flex-none cursor-pointer rounded-full px-3.5 text-[13.5px] font-semibold transition ${category === c ? "bg-ink text-white" : "bg-panel text-ink-soft hover:text-ink"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {groups.length === 0 && (
        <div className="rounded-[18px] border border-line bg-white">
          <EmptyState icon="search" title="No integrations match" body="Try another search or category." />
        </div>
      )}

      {groups.map(({ c, list }) => (
        <section key={c} aria-label={c} className="flex flex-col gap-3">
          <h2 className="m-0 text-[16px] font-semibold text-ink">{c}</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((i) => {
              const s = statusOf(i);
              const planName = plans.find((p) => p.id === i.minPlan)?.name;
              return (
                <article key={i.id} className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-4 transition hover:border-line-strong hover:shadow-[0_8px_24px_rgb(30_31_43/0.06)]">
                  <div className="flex items-start gap-3">
                    <BrandLogo brand={i.brand} size={44} />
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <h3 className="m-0 text-[15.5px] font-semibold text-ink">{i.name}</h3>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {statusBadge(s)}
                        {i.minPlan !== "starter" && <Badge tone="brand">{planName}</Badge>}
                        {i.popular && s === "off" && <Badge tone="warm">Popular</Badge>}
                      </div>
                    </div>
                  </div>
                  <p className="m-0 flex-1 text-[14px] leading-snug text-ink-soft">{i.value}</p>
                  <Button
                    variant={s === "connected" ? "ghost" : "secondary"}
                    disabled={s === "soon"}
                    onClick={() => setOpenId(i.id)}
                    ariaLabel={`${s === "connected" ? "Manage" : s === "pending" ? "View status of" : s === "soon" ? "Coming soon:" : "Connect"} ${i.name}`}
                    className="w-full"
                  >
                    {s === "connected" ? "Manage" : s === "pending" ? "View status" : s === "soon" ? "Coming soon" : "Connect"}
                  </Button>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <Drawer
        open={!!open}
        onClose={() => setOpenId(null)}
        title={open?.name ?? ""}
        footer={
          open &&
          (openStatus === "off" ? (
            <Button variant="primary" onClick={() => connect(open)} disabled={working} className="w-full">
              {working ? "Connecting…" : `Connect ${open.name}`}
            </Button>
          ) : (
            <div className="flex gap-2">
              {openStatus === "pending" && (
                <Button
                  onClick={() => {
                    setStatus(open, "connected");
                    toast(`${open.name} approved`);
                  }}
                  className="flex-1"
                >
                  Mark approved (demo)
                </Button>
              )}
              <Button
                variant="danger"
                onClick={() => {
                  setStatus(open, "off");
                  toast(`${open.name} disconnected`, "info");
                }}
                className="ml-auto"
              >
                Disconnect
              </Button>
            </div>
          ))
        }
      >
        {open && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <BrandLogo brand={open.brand} size={52} />
              <div className="flex flex-col gap-1">
                <p className="m-0 text-[17px] font-semibold text-ink">{open.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {statusBadge(openStatus) ?? <Badge>Not connected</Badge>}
                  <Badge tone="brand">{plans.find((p) => p.id === open.minPlan)?.name} plan</Badge>
                </div>
              </div>
            </div>
            <p className="m-0 text-[15px] text-ink-soft">{open.value}</p>

            {openStatus === "connected" && open.connected && (
              <dl className="m-0 grid grid-cols-2 gap-3 rounded-[14px] bg-panel p-4 text-[14px]">
                {open.connected.map((d) => (
                  <div key={d.label}>
                    <dt className="text-subtle">{d.label}</dt>
                    <dd className="m-0 mt-0.5 font-semibold text-ink">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {open.approvals && openStatus !== "off" && (
              <section className="flex flex-col gap-3">
                <h3 className="m-0 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">Approvals</h3>
                <ol className="m-0 flex list-none flex-col gap-3 p-0">
                  {open.approvals.map((a) => {
                    const done = openStatus === "connected";
                    return (
                      <li key={a.label} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${done ? "bg-success text-white" : "bg-[#FFF3E6] text-warning"}`}>
                          <Icon name={done ? "check" : "clock"} size={13} strokeWidth={2.4} className="[&_circle]:hidden" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[14.5px] font-medium text-ink">{a.label}</span>
                          <span className="text-[13px] text-subtle">{done ? "Approved" : `Usually ${a.time.toLowerCase()}`}</span>
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}

            {openStatus === "off" && (
              <>
                <section className="flex flex-col gap-3">
                  <h3 className="m-0 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">What you’ll need</h3>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {open.needs.map((n) => (
                      <li key={n} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                        <Icon name="check" size={17} className="mt-0.5 flex-none text-success" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="flex flex-col gap-3">
                  <h3 className="m-0 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">Steps</h3>
                  <ol className="m-0 flex list-none flex-col gap-3 p-0">
                    {open.steps.map((st, idx) => (
                      <li key={st} className="flex items-start gap-3 text-[14.5px] text-ink">
                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">{idx + 1}</span>
                        <span className="pt-0.5">{st}</span>
                      </li>
                    ))}
                  </ol>
                  {open.id === "website" && <Snippet text={`<script src="https://vegam.example/chat.js" data-business="your-id" async></script>`} />}
                  {open.id === "missed" && <Snippet text="**004*+918000000000#" />}
                </section>
                {open.approvals && (
                  <p className="m-0 flex items-start gap-2 rounded-[12px] bg-[#FFF8F0] px-3.5 py-3 text-[13.5px] text-ink-soft">
                    <Icon name="clock" size={16} className="mt-0.5 flex-none text-warning" />
                    After connecting, {open.approvals.map((a) => a.label.toLowerCase()).join(" and ")} can take a while. You can keep setting up meanwhile.
                  </p>
                )}
              </>
            )}
            <p className="m-0 text-[12.5px] text-subtle">Demo: connecting here doesn’t contact {open.name}.</p>
          </div>
        )}
      </Drawer>
    </div>
  );
}
