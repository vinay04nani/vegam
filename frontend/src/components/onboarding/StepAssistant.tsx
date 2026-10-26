"use client";

import { useState } from "react";
import { sampleImport, toneOptions } from "@/content/onboarding";
import { Icon, type IconName } from "@/components/ui/Icon";
import { currencyFor, type OnboardingState, type Service } from "@/lib/onboarding";
import { Choices, Field, SecondaryButton, StepHeader, TextInput, inputClass } from "./fields";

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export const assistantValid = (s: OnboardingState) => s.assistant.services.some((x) => x.name.trim()) && !!s.assistant.open && !!s.assistant.close;

const sources: { id: "website" | "upload" | "manual"; icon: IconName; title: string; body: string }[] = [
  { id: "website", icon: "globe", title: "From a link", body: "Your website, Google profile or Instagram" },
  { id: "upload", icon: "upload", title: "Upload a file", body: "A price list, menu or brochure (PDF or photo)" },
  { id: "manual", icon: "pencil", title: "Type it in", body: "Add your services and hours yourself" },
];

export function StepAssistant({ state, update }: Props) {
  const a = state.assistant;
  const currency = currencyFor(state);
  const [reading, setReading] = useState(false);
  const [filled, setFilled] = useState(false);

  const setA = (patch: Partial<OnboardingState["assistant"]>) => update((s) => ({ ...s, assistant: { ...s.assistant, ...patch } }));
  const setService = (i: number, patch: Partial<Service>) => setA({ services: a.services.map((x, j) => (j === i ? { ...x, ...patch } : x)) });

  // TODO(backend): read the link or file with the AI and fill in real details.
  const importSample = () => {
    setReading(true);
    window.setTimeout(() => {
      update((s) => ({
        ...s,
        assistant: {
          ...s.assistant,
          services: sampleImport.services.map((x) => ({ name: x.name, minutes: x.minutes, price: x.price[currency] })),
          faqs: s.assistant.faqs.length ? s.assistant.faqs : sampleImport.faqs,
        },
      }));
      setReading(false);
      setFilled(true);
    }, 1400);
  };

  return (
    <div className="flex flex-col gap-9">
      <StepHeader step={3} title="Teach your assistant" body="It only answers from what you give it. When it doesn’t know something, it asks your team instead of guessing." />

      <section className="flex flex-col gap-4">
        <h2 className="m-0 text-[17px] font-semibold text-ink">Where can it learn about you?</h2>
        <div role="radiogroup" aria-label="Where to learn from" className="grid gap-3 sm:grid-cols-3">
          {sources.map((src) => {
            const on = a.source === src.id;
            return (
              <button
                key={src.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => {
                  setA({ source: src.id, services: src.id === "manual" && !a.services.length ? [{ name: "", minutes: 30, price: 0 }] : a.services });
                }}
                className={`flex cursor-pointer flex-col gap-2 rounded-[18px] border-2 bg-white p-4 text-left transition ${on ? "border-ink" : "border-line hover:border-line-strong"}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-periwinkle-soft text-indigo">
                  <Icon name={src.icon} size={20} />
                </span>
                <span className="text-[15.5px] font-semibold text-ink">{src.title}</span>
                <span className="text-[13.5px] leading-snug text-subtle">{src.body}</span>
              </button>
            );
          })}
        </div>

        {a.source === "website" && (
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="flex-1">
              <span className="sr-only">Link to your website or profile</span>
              <TextInput type="url" value={a.link} onChange={(e) => setA({ link: e.target.value })} placeholder="https://yourbusiness.com" />
            </label>
            <SecondaryButton onClick={importSample} disabled={reading || a.link.trim().length < 4} className="min-h-13">
              <Icon name="sparkle" size={17} />
              {reading ? "Reading…" : "Read it"}
            </SecondaryButton>
          </div>
        )}
        {a.source === "upload" && (
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border-2 border-dashed border-line-strong bg-white px-4 py-7 text-center hover:border-subtle">
            <Icon name="upload" size={24} className="text-indigo" />
            <span className="text-[15px] font-semibold text-ink">{reading ? "Reading your file…" : "Choose a PDF or photo"}</span>
            <span className="text-[13.5px] text-subtle">Price lists, menus, brochures. Up to 10 MB.</span>
            <input type="file" accept=".pdf,image/*" className="sr-only" onChange={(e) => e.target.files?.length && importSample()} />
          </label>
        )}
        {filled && (
          <p role="status" className="m-0 flex items-start gap-2.5 rounded-[14px] bg-periwinkle-soft px-4 py-3 text-[14.5px] text-brand">
            <Icon name="sparkle" size={18} className="mt-0.5 flex-none" />
            Demo: we filled in sample details. In the product, the AI reads your link or file. Check everything below and change what’s wrong.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="m-0 text-[17px] font-semibold text-ink">Services and prices</h2>
        {a.services.length === 0 && <p className="m-0 text-[15px] text-subtle">Pick an option above, or add a service.</p>}
        <div className="flex flex-col gap-2.5">
          {a.services.map((svc, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 rounded-[16px] border border-line bg-white p-2.5 sm:grid-cols-[1fr_110px_130px_auto]">
              <label className="col-span-3 sm:col-span-1">
                <span className="sr-only">Service name</span>
                <TextInput value={svc.name} onChange={(e) => setService(i, { name: e.target.value })} placeholder="Service name" />
              </label>
              <label className="relative">
                <span className="sr-only">Minutes</span>
                <TextInput type="number" min={5} step={5} value={svc.minutes} onChange={(e) => setService(i, { minutes: Number(e.target.value) || 0 })} className="pr-12" />
                <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm text-subtle">min</span>
              </label>
              <label className="relative">
                <span className="sr-only">Price</span>
                <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-subtle">{currency === "INR" ? "₹" : "$"}</span>
                <TextInput type="number" min={0} value={svc.price} onChange={(e) => setService(i, { price: Number(e.target.value) || 0 })} className="pl-8" />
              </label>
              <button
                type="button"
                aria-label={`Remove ${svc.name || "service"}`}
                onClick={() => setA({ services: a.services.filter((_, j) => j !== i) })}
                className="flex h-13 w-11 cursor-pointer items-center justify-center rounded-[12px] text-subtle hover:bg-panel hover:text-danger"
              >
                <Icon name="trash" size={18} />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setA({ services: [...a.services, { name: "", minutes: 30, price: 0 }] })}
          className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-[15px] font-semibold text-indigo hover:underline"
        >
          <Icon name="plus" size={17} />
          Add a service
        </button>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="m-0 text-[17px] font-semibold text-ink">Opening hours</h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_140px_140px]">
          <Field label="Days">
            <TextInput value={a.days} onChange={(e) => setA({ days: e.target.value })} placeholder="Monday to Saturday" />
          </Field>
          <Field label="Opens">
            <TextInput type="time" value={a.open} onChange={(e) => setA({ open: e.target.value })} />
          </Field>
          <Field label="Closes">
            <TextInput type="time" value={a.close} onChange={(e) => setA({ close: e.target.value })} />
          </Field>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="m-0 text-[17px] font-semibold text-ink">Common questions</h2>
        {a.faqs.map((f, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-[16px] border border-line bg-white p-3">
            <label>
              <span className="sr-only">Question</span>
              <TextInput value={f.q} onChange={(e) => setA({ faqs: a.faqs.map((x, j) => (j === i ? { ...x, q: e.target.value } : x)) })} placeholder="Question" className="font-semibold" />
            </label>
            <label>
              <span className="sr-only">Answer</span>
              <textarea
                rows={2}
                value={f.a}
                onChange={(e) => setA({ faqs: a.faqs.map((x, j) => (j === i ? { ...x, a: e.target.value } : x)) })}
                placeholder="Answer"
                className={`${inputClass} py-3`}
              />
            </label>
            <button
              type="button"
              onClick={() => setA({ faqs: a.faqs.filter((_, j) => j !== i) })}
              className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-[14px] font-medium text-subtle hover:text-danger"
            >
              <Icon name="trash" size={15} />
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setA({ faqs: [...a.faqs, { q: "", a: "" }] })}
          className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-[15px] font-semibold text-indigo hover:underline"
        >
          <Icon name="plus" size={17} />
          Add a question
        </button>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <Field label="Assistant’s name (optional)" hint="Customers will see this name. Leave empty to use your business name.">
          <TextInput value={a.name} onChange={(e) => setA({ name: e.target.value })} placeholder="e.g. Asha" />
        </Field>
        <Choices label="Tone" options={toneOptions.map((t) => ({ id: t.id, label: `${t.label}: “${t.sample}”` }))} value={[a.tone]} onChange={(tone) => setA({ tone })} />
      </section>
    </div>
  );
}
