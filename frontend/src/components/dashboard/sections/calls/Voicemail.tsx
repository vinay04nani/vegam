"use client";

import { useEffect, useState } from "react";
import { sampleVoicemails, type Voicemail as VM } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Avatar, Badge, Button, EmptyState, SegmentedControl, useToast } from "../../kit";

// Voicemail: messages left when the AI is off or paused, after hours if you
// chose voicemail, or when a caller asks to leave one. Each is transcribed;
// call back, reply on WhatsApp, or mark it done.

/** A play button with a progress bar that moves while "playing" (demo, no audio). */
function Play({ duration }: { duration: string }) {
  const total = duration.split(":").reduce((a, x) => a * 60 + Number(x), 0);
  const [on, setOn] = useState(false);
  const [at, setAt] = useState(0);
  useEffect(() => {
    if (!on) return;
    const t = window.setInterval(() => setAt((a) => (a + 1 >= total ? (setOn(false), 0) : a + 1)), 1000);
    return () => window.clearInterval(t);
  }, [on, total]);
  const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  return (
    <span className="flex min-w-0 flex-1 items-center gap-2.5">
      <button type="button" onClick={() => setOn(!on)} aria-label={on ? "Pause voicemail" : "Play voicemail"} className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
        <Icon name={on ? "close" : "play"} size={13} />
      </button>
      <span className="block h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-panel">
        <span className="block h-full rounded-full bg-ink transition-[width]" style={{ width: `${(at / Math.max(1, total)) * 100}%` }} />
      </span>
      <span className="flex-none text-[12.5px] text-subtle tabular-nums">
        {clock(at)} / {duration}
      </span>
    </span>
  );
}

export function Voicemail({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [list, setList] = useState<VM[]>(sampleVoicemails);
  const [show, setShow] = useState<"new" | "done">("new");
  const shown = list.filter((v) => (show === "new" ? !v.done : v.done));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl
          label="Show voicemail"
          size="sm"
          value={show}
          onChange={setShow}
          options={[
            { id: "new", label: `New ${list.filter((v) => !v.done).length}` },
            { id: "done", label: `Done ${list.filter((v) => v.done).length}` },
          ]}
        />
        <button type="button" onClick={() => onOpen("agent:voice/setup")} className="cursor-pointer text-[13.5px] font-semibold text-ink-soft hover:text-ink">
          When calls go to voicemail
        </button>
      </div>
      {shown.length === 0 ? (
        <div className="rounded-[18px] border border-line bg-white p-8">
          <EmptyState icon="phone" title={show === "new" ? "No new voicemail" : "Nothing here yet"} body="Most calls are answered by the AI. Voicemail is for when it’s off or paused." />
        </div>
      ) : (
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {shown.map((v) => (
            <li key={v.id} className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-4 sm:p-5">
              <span className="flex items-start gap-3">
                <Avatar name={v.name ?? v.from} size={36} />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[15px] font-semibold text-ink">{v.name ?? v.from}</span>
                  <span className="text-[12.5px] text-subtle">
                    {v.name && `${v.from} · `}
                    {v.when}
                  </span>
                </span>
                {!v.done && <Badge tone="warning">New</Badge>}
              </span>
              <Play duration={v.duration} />
              <p className="m-0 rounded-[12px] bg-panel px-3.5 py-2.5 text-[14px] leading-snug text-ink">
                <span className="mb-0.5 flex items-center gap-1.5 text-[12px] font-semibold text-subtle">
                  <Icon name="sparkle" size={12} />
                  Transcript
                </span>
                {v.transcript}
              </p>
              <span className="flex flex-wrap gap-2">
                <Button icon="phone" onClick={() => toast(`Calling ${v.name ?? v.from} from your phone (demo)`, "info")}>
                  Call back
                </Button>
                <Button icon="message" onClick={() => onOpen("inbox")}>
                  WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  icon="check"
                  onClick={() => {
                    setList((all) => all.map((x) => (x.id === v.id ? { ...x, done: !x.done } : x)));
                    toast(v.done ? "Moved back to new" : "Marked as done");
                  }}
                >
                  {v.done ? "Mark as new" : "Done"}
                </Button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
