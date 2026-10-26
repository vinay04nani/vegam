import { channelList, countries, planRank } from "@/content/onboarding";
import { plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { StatusPill, StepHeader } from "./fields";

type Props = { state: OnboardingState; onEdit: (step: number) => void };

const inDays = (days: number) => new Date(Date.now() + days * 86_400_000).toLocaleDateString("en-GB", { day: "numeric", month: "long" });

function Row({ label, value, step, onEdit }: { label: string; value: React.ReactNode; step: number; onEdit: (s: number) => void }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 border-t border-line py-4 first:border-t-0">
      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">{label}</span>
        <span className="text-[16px] text-ink">{value}</span>
      </div>
      <button type="button" onClick={() => onEdit(step)} className="cursor-pointer text-[14.5px] font-semibold text-indigo hover:underline">
        Edit
      </button>
    </div>
  );
}

export function StepGoLive({ state, onEdit }: Props) {
  const plan = plans.find((p) => p.id === state.plan) ?? plans[0];
  const currency = currencyFor(state);
  const price = plan.price?.[currency][state.billing];
  const services = state.assistant.services.filter((s) => s.name.trim());
  const available = channelList.filter((c) => planRank[plan.id] >= planRank[c.minPlan]);

  return (
    <div className="flex flex-col gap-8">
      <StepHeader step={6} title="Ready to go live" body="Check the summary. You can change any of it later from your dashboard." />

      <div className="rounded-[22px] border border-line bg-white px-5 py-1">
        <Row label="Business" value={`${state.business.name} · ${state.business.languages.join(", ")}`} step={0} onEdit={onEdit} />
        <Row
          label="Plan"
          value={
            <>
              {plan.name}, free until {inDays(30)}
              {price !== undefined && (
                <span className="text-subtle">
                  {" "}
                  · then {plan.from ? "from " : ""}
                  {formatMoney(price, currency)}/month{state.billing === "annual" ? ", billed yearly" : ""}
                </span>
              )}
            </>
          }
          step={1}
          onEdit={onEdit}
        />
        <Row
          label="Assistant"
          value={`${services.length} service${services.length === 1 ? "" : "s"} · ${state.assistant.faqs.filter((f) => f.q.trim()).length} questions · ${state.assistant.days}, ${state.assistant.open}–${state.assistant.close}`}
          step={2}
          onEdit={onEdit}
        />
        <Row
          label="Channels"
          value={
            <span className="mt-1 flex flex-wrap gap-2">
              {available.map((c) => {
                const st = state.channels[c.id];
                return (
                  <StatusPill key={c.id} tone={st === "connected" ? "done" : st === "pending" ? "wait" : "off"}>
                    {c.title}
                    {st === "pending" ? ": waiting for Meta" : st === "off" ? ": later" : ""}
                  </StatusPill>
                );
              })}
            </span>
          }
          step={3}
          onEdit={onEdit}
        />
        <Row label="Morning report to" value={state.ownerPhone ? `${countries.find((c) => c.id === state.business.country)?.dial ?? ""} ${state.ownerPhone}` : "Not set"} step={4} onEdit={onEdit} />
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        {[
          { icon: "chart" as const, title: "Week 1", body: "We measure today’s numbers: replies, missed calls and bookings." },
          { icon: "sparkle" as const, title: "Weeks 2–4", body: "Vegam runs your front desk. Your morning report shows the difference." },
          { icon: "calendar" as const, title: "Day 30", body: "Keep your plan, change it or stop. Your data is yours to export." },
        ].map((x) => (
          <div key={x.title} className="flex flex-col gap-2 rounded-[18px] bg-panel p-4">
            <Icon name={x.icon} size={20} className="text-indigo" />
            <span className="text-[15.5px] font-semibold text-ink">{x.title}</span>
            <span className="text-[14px] leading-snug text-subtle">{x.body}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
