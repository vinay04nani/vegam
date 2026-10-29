"use client";

import { useState } from "react";
import { sampleImport } from "@/content/onboarding";
import { currencyFor, type Faq, type OnboardingState, type Service } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { useToast } from "../../kit";
import { Group, Input, Row, RowButton, TextArea } from "../settings/parts";

// The knowledge every agent answers from, as flat rows in the style of the
// Settings dialog: services and prices, opening hours, and questions with
// their answers. Edits save as you type (the same answers onboarding set up).

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;

const iconButton = "flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger";

export function KnowledgeEditor({ state, update, onOpen }: { state: OnboardingState; update: Update; onOpen: (view: string) => void }) {
  const toast = useToast();
  const [reading, setReading] = useState(false);
  const a = state.assistant;
  const currency = currencyFor(state);
  const symbol = currency === "INR" ? "₹" : "$";
  const setA = (patch: Partial<OnboardingState["assistant"]>) => update((s) => ({ ...s, assistant: { ...s.assistant, ...patch } }));
  const setService = (i: number, patch: Partial<Service>) => setA({ services: a.services.map((x, j) => (j === i ? { ...x, ...patch } : x)) });
  const setFaq = (i: number, patch: Partial<Faq>) => setA({ faqs: a.faqs.map((x, j) => (j === i ? { ...x, ...patch } : x)) });

  // TODO(backend): read the website or file with the AI and fill in the real details.
  const importSample = () => {
    setReading(true);
    window.setTimeout(() => {
      update((s) => ({
        ...s,
        assistant: {
          ...s.assistant,
          services: s.assistant.services.length ? s.assistant.services : sampleImport.services.map((x) => ({ name: x.name, minutes: x.minutes, price: x.price[currency] })),
          faqs: s.assistant.faqs.length ? s.assistant.faqs : sampleImport.faqs,
        },
      }));
      setReading(false);
      toast("Read your website. Check the details below");
    }, 1200);
  };

  return (
    <div className="flex flex-col">
      <Group title="Import">
        <Row label="Read your website or a price list" description={a.link ? `Last read from ${a.link}` : "We fill in services, prices and common questions for you to check."}>
          <RowButton icon={reading ? undefined : "globe"} onClick={importSample}>
            {reading ? "Reading…" : "Read website"}
          </RowButton>
          <RowButton icon="upload" onClick={() => toast("Choose a PDF or photo of your price list (demo)", "info")}>
            Upload
          </RowButton>
        </Row>
      </Group>

      <div className="mt-9">
        <Group
          title="Services and prices"
          description="What customers can book, how long it takes and what it costs."
          action={
            <RowButton icon="plus" onClick={() => setA({ services: [...a.services, { name: "", minutes: 30, price: 0 }] })}>
              Add
            </RowButton>
          }
        >
          {a.services.length === 0 && <p className="m-0 py-4 text-[14px] text-subtle">No services yet. Read your website or add one.</p>}
          {a.services.length > 0 && (
            <div className="hidden grid-cols-[minmax(0,1fr)_96px_120px_36px] gap-2 pt-3 text-[12.5px] text-subtle sm:grid">
              <span>Service</span>
              <span>Minutes</span>
              <span>Price</span>
              <span />
            </div>
          )}
          {a.services.map((sv, i) => (
            <div key={i} className="grid grid-cols-[minmax(0,1fr)_36px] items-center gap-2 py-2.5 sm:grid-cols-[minmax(0,1fr)_96px_120px_36px]">
              <Input aria-label={`Service ${i + 1} name`} value={sv.name} onChange={(e) => setService(i, { name: e.target.value })} placeholder="e.g. First visit" />
              <button type="button" onClick={() => setA({ services: a.services.filter((_, j) => j !== i) })} aria-label={`Remove ${sv.name || `service ${i + 1}`}`} className={`${iconButton} sm:order-last`}>
                <Icon name="trash" size={15} />
              </button>
              <span className="col-span-2 grid grid-cols-2 gap-2 sm:col-span-1 sm:contents">
                <Input aria-label={`Service ${i + 1} minutes`} inputMode="numeric" value={sv.minutes || ""} onChange={(e) => setService(i, { minutes: Number(e.target.value.replace(/\D/g, "")) || 0 })} placeholder="30" />
                <span className="relative block">
                  <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[14px] text-subtle">{symbol}</span>
                  <Input aria-label={`Service ${i + 1} price`} inputMode="numeric" value={sv.price || ""} onChange={(e) => setService(i, { price: Number(e.target.value.replace(/\D/g, "")) || 0 })} placeholder="0" className="w-full pl-7" />
                </span>
              </span>
            </div>
          ))}
        </Group>
      </div>

      <div className="mt-9">
        <Group title="Opening hours" description="The AI only offers times inside these hours.">
          <Row label="Days">
            <Input aria-label="Open days" value={a.days} onChange={(e) => setA({ days: e.target.value })} placeholder="Monday to Saturday" className="w-56" />
          </Row>
          <Row label="Opens">
            <Input aria-label="Opens at" type="time" value={a.open} onChange={(e) => setA({ open: e.target.value })} className="w-36" />
          </Row>
          <Row label="Closes">
            <Input aria-label="Closes at" type="time" value={a.close} onChange={(e) => setA({ close: e.target.value })} className="w-36" />
          </Row>
          <Row label="Different hours on some days, closures and holidays">
            <RowButton onClick={() => onOpen("settings:hours")}>Open</RowButton>
          </Row>
        </Group>
      </div>

      <div className="mt-9">
        <Group
          title="Questions and answers"
          description="Short, true answers. Every agent uses these word for word."
          action={
            <RowButton icon="plus" onClick={() => setA({ faqs: [...a.faqs, { q: "", a: "" }] })}>
              Add
            </RowButton>
          }
        >
          {a.faqs.length === 0 && <p className="m-0 py-4 text-[14px] text-subtle">No questions yet. Answers you save from unanswered questions appear here.</p>}
          {a.faqs.map((f, i) => (
            <div key={i} className="flex flex-col gap-2 py-4">
              <span className="flex items-center gap-2">
                <Input aria-label={`Question ${i + 1}`} value={f.q} onChange={(e) => setFaq(i, { q: e.target.value })} placeholder="e.g. Is there parking?" className="w-full font-medium" />
                <button type="button" onClick={() => setA({ faqs: a.faqs.filter((_, j) => j !== i) })} aria-label={`Remove question ${i + 1}`} className={iconButton}>
                  <Icon name="trash" size={15} />
                </button>
              </span>
              <TextArea aria-label={`Answer ${i + 1}`} rows={2} value={f.a} onChange={(e) => setFaq(i, { a: e.target.value })} placeholder="The answer it should give" className="w-full sm:mr-11 sm:w-[calc(100%-44px)]" />
            </div>
          ))}
        </Group>
      </div>
      <p className="m-0 mt-6 text-[12.5px] text-subtle">Changes are saved as you type.</p>
    </div>
  );
}
