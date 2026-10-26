import { wizardSteps } from "@/content/onboarding";
import { Icon } from "@/components/ui/Icon";

// The wizard's progress drawn as a kolam: one dot per step, and a looping line
// joins each finished step to the next, the way Vegam joins up customers.

const ROW = 64;

function Loop({ i }: { i: number }) {
  const y = i * ROW + 14;
  // A small S-shaped loop from one dot to the next.
  const d = `M14 ${y} C 34 ${y + ROW * 0.3}, -6 ${y + ROW * 0.7}, 14 ${y + ROW}`;
  return <path d={d} fill="none" stroke="#EE7A2E" strokeWidth={2.4} strokeLinecap="round" />;
}

export function StepRail({ current, completed, onJump }: { current: number; completed: number[]; onJump: (i: number) => void }) {
  const height = (wizardSteps.length - 1) * ROW + 28;
  return (
    <nav aria-label="Setup steps" className="relative">
      <svg aria-hidden="true" width="28" height={height} className="absolute top-0 left-0 overflow-visible">
        <line x1="14" y1="14" x2="14" y2={height - 14} stroke="#E4E6F0" strokeWidth={2} strokeDasharray="2 6" strokeLinecap="round" />
        {wizardSteps.slice(0, -1).map((_, i) => (completed.includes(i) && (completed.includes(i + 1) || current === i + 1) ? <Loop key={i} i={i} /> : null))}
      </svg>
      <ol className="relative m-0 flex list-none flex-col p-0">
        {wizardSteps.map((s, i) => {
          const done = completed.includes(i);
          const active = current === i;
          const reachable = done || i <= Math.max(-1, ...completed) + 1;
          return (
            <li key={s.id} style={{ height: ROW }}>
              <button
                type="button"
                disabled={!reachable}
                onClick={() => onJump(i)}
                aria-current={active ? "step" : undefined}
                className="group flex w-full cursor-pointer items-start gap-4 text-left disabled:cursor-default"
              >
                <span
                  className={`relative z-10 mt-0 flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 transition ${
                    done ? "border-orange bg-orange text-white" : active ? "border-ink bg-white" : "border-line-strong bg-white"
                  }`}
                >
                  {done ? <Icon name="check" size={14} strokeWidth={2.8} className="[&_circle]:hidden" /> : <span className={`h-2 w-2 rounded-full ${active ? "bg-ink" : "bg-line-strong"}`} />}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className={`text-[15.5px] font-semibold ${active ? "text-ink" : reachable ? "text-ink-soft group-hover:text-ink" : "text-muted"}`}>{s.title}</span>
                  <span className="mt-1 text-[13px] text-subtle">{s.hint}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
