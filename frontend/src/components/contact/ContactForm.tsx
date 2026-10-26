"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { contactTopics, countryCodes, forms, links, teamSizes } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  company: string;
  role: string;
  agree: boolean;
  topic: string;
  teamSize: string;
  message: string;
};

const EMPTY: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  country: countryCodes[0].label,
  phone: "",
  company: "",
  role: "",
  agree: false,
  topic: "",
  teamSize: "",
  message: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateStep1(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.firstName.trim()) e.firstName = "Enter your first name";
  if (!f.lastName.trim()) e.lastName = "Enter your last name";
  if (!EMAIL.test(f.email.trim())) e.email = "Enter a valid work email";
  if (f.phone.replace(/\D/g, "").length < 6) e.phone = "Enter a valid phone number";
  if (!f.company.trim()) e.company = "Enter your company";
  if (!f.role.trim()) e.role = "Enter your role";
  if (!f.agree) e.agree = "Please accept to continue";
  return e;
}

export function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  // "Book a demo" links arrive with ?topic=demo.
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    if (topic && contactTopics.some((t) => t.id === topic)) setF((prev) => ({ ...prev, topic }));
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setF((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const next = (e: FormEvent) => {
    e.preventDefault();
    const found = validateStep1(f);
    setErrors(found);
    if (Object.keys(found).length === 0) setStep(2);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!f.topic) {
      setErrors({ topic: "Choose what we can help with" });
      return;
    }
    setSendError(null);
    // TODO(contact): set forms.contactEndpoint once a backend exists. Until
    // then nothing is sent and the thank-you screen is shown directly.
    if (forms.contactEndpoint) {
      setSending(true);
      try {
        const res = await fetch(forms.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...f, dialCode: countryCodes.find((c) => c.label === f.country)?.code }),
        });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        setSending(false);
        setSendError("Something went wrong sending your message. Please try again.");
        return;
      }
      setSending(false);
    }
    setStep(3);
  };

  if (step === 3) {
    return (
      <div className="flex flex-1 flex-col items-start justify-center gap-5 py-10">
        <VegamMark size={56} strokeWidth={6} className="text-[#EE7A2E]" />
        <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-normal tracking-[-0.02em]">Thanks, {f.firstName.trim()}.</h2>
        <p className="m-0 max-w-[460px] text-lg text-subtle">
          Your message is with our team. We’ll reply to <strong className="font-semibold text-ink">{f.email.trim()}</strong>.
        </p>
        <a
          href={links.home}
          className="mt-3 inline-flex min-h-13 items-center gap-2 rounded-full border border-line-strong bg-white px-6 font-semibold text-ink transition hover:shadow-[0_12px_30px_rgb(30_31_43/0.1)]"
        >
          <Icon name="chevron-left" size={18} />
          Back to home
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-start justify-between gap-6">
        <h2 className="m-0 font-serif text-[clamp(32px,3.2vw,44px)] font-normal tracking-[-0.02em] text-ink-soft">
          {step === 1 ? "Let’s start with you" : "How can we help?"}
        </h2>
        <StepRing step={step} />
      </div>

      {step === 1 ? (
        <form onSubmit={next} noValidate className="mt-10 flex flex-1 flex-col">
          <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
            <Field label="First name" error={errors.firstName}>
              <input className={input(errors.firstName)} autoComplete="given-name" placeholder="Arjun" value={f.firstName} onChange={(e) => set("firstName", e.target.value)} />
            </Field>
            <Field label="Last name" error={errors.lastName}>
              <input className={input(errors.lastName)} autoComplete="family-name" placeholder="Sharma" value={f.lastName} onChange={(e) => set("lastName", e.target.value)} />
            </Field>
            <Field label="Work email" error={errors.email} className="sm:col-span-2">
              <input type="email" className={input(errors.email)} autoComplete="email" placeholder="arjun@company.com" value={f.email} onChange={(e) => set("email", e.target.value)} />
            </Field>
            <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3">
              <Field label="Country code" optional>
                <div className="relative">
                  <select className={`${input()} cursor-pointer appearance-none pr-10`} value={f.country} onChange={(e) => set("country", e.target.value)}>
                    {countryCodes.map((c) => (
                      <option key={c.label} value={c.label}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
                </div>
              </Field>
              <Field label="Phone number" error={errors.phone}>
                <input type="tel" className={input(errors.phone)} autoComplete="tel-national" placeholder="98765 43210" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
            </div>
            <Field label="Company" error={errors.company}>
              <input className={input(errors.company)} autoComplete="organization" placeholder="Your business name" value={f.company} onChange={(e) => set("company", e.target.value)} />
            </Field>
            <Field label="Role / title" error={errors.role} className="sm:col-span-2">
              <input className={input(errors.role)} autoComplete="organization-title" placeholder="Owner, Manager, Front desk lead…" value={f.role} onChange={(e) => set("role", e.target.value)} />
            </Field>
          </div>

          <label className="mt-8 flex cursor-pointer items-start gap-3 text-[15px] text-ink-soft">
            <input type="checkbox" checked={f.agree} onChange={(e) => set("agree", e.target.checked)} className="mt-0.5 h-5 w-5 flex-none cursor-pointer accent-[#23243A]" />
            <span>
              I agree to the{" "}
              <a href={links.terms} className="text-ink underline underline-offset-2">
                terms of service
              </a>{" "}
              and{" "}
              <a href={links.privacy} className="text-ink underline underline-offset-2">
                privacy policy
              </a>
              . <span className="text-danger">*</span>
            </span>
          </label>
          {errors.agree && <p className="m-0 mt-2 text-sm text-danger">{errors.agree}</p>}

          <div className="mt-auto flex justify-end pt-10">
            <PrimaryButton type="submit">
              Continue <Icon name="chevron-right" size={18} />
            </PrimaryButton>
          </div>
        </form>
      ) : (
        <form onSubmit={submit} noValidate className="mt-10 flex flex-1 flex-col gap-8">
          <ChipGroup label="What can we help with?" options={contactTopics.map((t) => ({ id: t.id, label: t.label }))} value={f.topic} onChange={(v) => set("topic", v)} error={errors.topic} />
          <ChipGroup label="How big is your team?" optional options={teamSizes.map((s) => ({ id: s, label: s }))} value={f.teamSize} onChange={(v) => set("teamSize", v)} />
          <Field label="Anything else we should know?" optional>
            <textarea
              rows={4}
              className={`${input()} min-h-32 resize-y rounded-[20px] py-4`}
              placeholder="Tell us about your business and how customers reach you today."
              value={f.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </Field>
          {sendError && <p className="m-0 text-sm text-danger">{sendError}</p>}
          <div className="mt-auto flex items-center justify-between gap-4 pt-4">
            <button type="button" onClick={() => setStep(1)} className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-muted hover:text-ink">
              <Icon name="chevron-left" size={18} /> Back
            </button>
            <PrimaryButton type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"} <Icon name="chevron-right" size={18} />
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
}

const input = (error?: string) =>
  `min-h-15 w-full rounded-[16px] border bg-white px-5 text-[17px] text-ink outline-none transition placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10 ${
    error ? "border-danger/60" : "border-line-strong"
  }`;

function Field({
  label,
  optional,
  error,
  className = "",
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2.5 ${className}`}>
      <span className="text-[16px] font-medium text-ink">
        {label}
        {!optional && <span className="text-danger"> *</span>}
      </span>
      {children}
      {error && <span className="text-sm text-danger">{error}</span>}
    </label>
  );
}

function ChipGroup({
  label,
  optional,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  optional?: boolean;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
      <legend className="mb-3 p-0 text-[16px] font-medium text-ink">
        {label}
        {!optional && <span className="text-danger"> *</span>}
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((o) => {
          const active = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.id)}
              className={`min-h-12 cursor-pointer rounded-full border px-5 text-[15px] font-medium transition ${
                active ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-subtle"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {error && <span className="text-sm text-danger">{error}</span>}
    </fieldset>
  );
}

function PrimaryButton({ children, ...rest }: React.ComponentProps<"button">) {
  return (
    <button
      {...rest}
      className="inline-flex min-h-15 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(180deg,#3A3C58_0%,#22233A_55%,#1C1D2E_100%)] px-7 text-[18px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.16),0_1px_2px_rgb(15_16_30/0.3)] transition hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_12px_30px_rgb(30_31_43/0.28)] disabled:cursor-wait disabled:opacity-70"
    >
      {children}
    </button>
  );
}

/** Progress ring: half full on step 1, full on step 2. */
function StepRing({ step }: { step: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-3 text-sm text-subtle">
      <span className="hidden whitespace-nowrap sm:inline">Step {step} of 2</span>
      <svg width="40" height="40" viewBox="0 0 40 40" role="img" aria-label={`Step ${step} of 2`} className="flex-none -rotate-90">
        <circle cx="20" cy="20" r={r} fill="none" stroke="#ECEDF2" strokeWidth="3" />
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          stroke="#1E1F2B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - step / 2)}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
    </div>
  );
}
