"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { countryCodes, links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";
import { AppleLogo, GoogleLogo, MicrosoftLogo } from "./BrandIcons";

type Mode = "login" | "signup";
type Method = "email" | "phone";
type Provider = "Google" | "Microsoft" | "Apple";

const copy = {
  login: {
    title: "Log in to your account",
    verb: "Continue",
    switchText: "Don’t have an account?",
    switchLabel: "Create one",
    switchHref: links.signup,
  },
  signup: {
    title: "Create your account",
    verb: "Sign up",
    switchText: "Already have an account?",
    switchLabel: "Log in",
    switchHref: links.login,
  },
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// TODO(auth): connect to Supabase Auth (magic link, OAuth, phone OTP).
// Until then the form validates input and shows the next screen locally.

export function AuthForm({ mode }: { mode: Mode }) {
  const t = copy[mode];
  const [method, setMethod] = useState<Method>("email");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(countryCodes[0].label);
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const dial = countryCodes.find((c) => c.label === country)?.code ?? "+91";
  const phoneDigits = phone.replace(/\D/g, "");
  const valid = agree && (method === "email" ? EMAIL.test(email.trim()) : phoneDigits.length >= 6);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSentTo(method === "email" ? email.trim() : `${dial} ${phone.trim()}`);
  };

  const provider = (name: Provider) => setNotice(`${name} sign-in is coming soon. Use your email or phone for now.`);

  if (sentTo) {
    return (
      <div className="flex w-full max-w-[440px] flex-col items-center gap-5 text-center">
        <VegamMark size={52} strokeWidth={6} className="text-ink" />
        <h1 className="m-0 font-serif text-[clamp(30px,3vw,38px)] font-normal tracking-[-0.02em]">
          {method === "email" ? "Check your email" : "Check your phone"}
        </h1>
        <p className="m-0 text-[17px] text-subtle">
          {method === "email" ? "We sent a sign-in link to" : "We sent a 6-digit code to"}{" "}
          <strong className="font-semibold text-ink">{sentTo}</strong>.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="mt-2 inline-flex cursor-pointer items-center gap-1.5 text-[15px] font-medium text-indigo hover:underline"
        >
          <Icon name="chevron-left" size={16} />
          Use a different {method === "email" ? "email" : "number"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[440px] flex-col items-center">
      <VegamMark size={52} strokeWidth={6} className="text-ink" />
      <h1 className="m-0 mt-6 text-center font-serif text-[clamp(30px,3vw,40px)] font-normal tracking-[-0.02em]">{t.title}</h1>

      <div className="mt-9 flex w-full flex-col gap-3">
        <SocialButton onClick={() => provider("Google")} icon={<GoogleLogo />}>
          {t.verb} with Google
        </SocialButton>
        <SocialButton onClick={() => provider("Microsoft")} icon={<MicrosoftLogo />}>
          {t.verb} with Microsoft
        </SocialButton>
        <SocialButton onClick={() => provider("Apple")} icon={<AppleLogo />}>
          {t.verb} with Apple
        </SocialButton>
        <SocialButton
          onClick={() => {
            setNotice(null);
            setMethod(method === "email" ? "phone" : "email");
          }}
          icon={<Icon name={method === "email" ? "phone" : "mail"} size={19} />}
        >
          {t.verb} with {method === "email" ? "phone" : "email"}
        </SocialButton>
      </div>
      {notice && (
        <p role="status" className="m-0 mt-3 w-full rounded-xl bg-periwinkle-soft px-4 py-2.5 text-center text-sm text-brand">
          {notice}
        </p>
      )}

      <div className="my-7 flex w-full items-center gap-4 text-sm text-faint">
        <span className="h-px flex-1 bg-line" />
        OR
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={submit} className="flex w-full flex-col gap-4" noValidate>
        {method === "email" ? (
          <label className="flex flex-col gap-2">
            <span className="sr-only">Work email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="e.g. name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-14 w-full rounded-full border border-line-strong bg-white px-6 text-base text-ink transition outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
            />
          </label>
        ) : (
          <div className="flex gap-2">
            <label className="relative">
              <span className="sr-only">Country code</span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="min-h-14 w-[118px] cursor-pointer appearance-none rounded-full border border-line-strong bg-white pr-8 pl-5 text-base text-ink outline-none focus:border-indigo focus:ring-4 focus:ring-indigo/10"
              >
                {countryCodes.map((c) => (
                  <option key={c.label} value={c.label}>
                    {c.code} {c.label.replace(/ \(.+\)/, "")}
                  </option>
                ))}
              </select>
              <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
            </label>
            <label className="flex-1">
              <span className="sr-only">Phone number</span>
              <input
                type="tel"
                autoComplete="tel-national"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="min-h-14 w-full rounded-full border border-line-strong bg-white px-6 text-base text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
              />
            </label>
          </div>
        )}

        <label className="flex cursor-pointer items-start gap-3 text-[15px] text-ink-soft">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-none cursor-pointer rounded-md accent-[#23243A]"
          />
          <span>
            I accept the{" "}
            <a href={links.terms} className="text-ink underline underline-offset-2">
              terms of service
            </a>{" "}
            &amp;{" "}
            <a href={links.privacy} className="text-ink underline underline-offset-2">
              privacy policy
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!valid}
          className="mt-2 min-h-14 w-full cursor-pointer rounded-full border border-white/10 bg-[linear-gradient(180deg,#3A3C58_0%,#22233A_55%,#1C1D2E_100%)] text-[17px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.16)] transition hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_12px_30px_rgb(30_31_43/0.25)] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-none disabled:bg-[#B9BAC4] disabled:shadow-none"
        >
          Continue
        </button>
      </form>

      <p className="m-0 mt-8 text-[15px] text-ink-soft">
        {t.switchText}{" "}
        <a href={t.switchHref} className="font-semibold text-indigo hover:underline">
          {t.switchLabel}
        </a>
      </p>
    </div>
  );
}

function SocialButton({ icon, onClick, children }: { icon: ReactNode; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F2F2F5] text-[16px] font-medium text-ink transition hover:bg-[#E9E9EE]"
    >
      {icon}
      {children}
    </button>
  );
}
