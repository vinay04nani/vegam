import { countries, languageOptions, teamSizeOptions } from "@/content/onboarding";
import type { OnboardingState } from "@/lib/onboarding";
import { Choices, Field, Select, StepHeader, TextInput, inputClass } from "./fields";

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export const businessValid = (s: OnboardingState) => s.business.name.trim().length > 1;

export function StepBusiness({ state, update }: Props) {
  const b = state.business;
  const set = <K extends keyof OnboardingState["business"]>(key: K, value: OnboardingState["business"][K]) =>
    update((s) => ({ ...s, business: { ...s.business, [key]: value } }));

  return (
    <div className="flex flex-col gap-8">
      <StepHeader step={1} title="Tell us about your business" body="Your assistant uses this to introduce itself and to reply in the right language and currency." />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Business name">
          <TextInput value={b.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Nila & Co" autoComplete="organization" />
        </Field>
        <Field label="Country">
          <Select value={b.country} onChange={(e) => set("country", e.target.value as typeof b.country)}>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field label="What does your business do?" hint="A sentence or two in your own words. Only your assistant sees this.">
        <textarea
          value={b.about}
          onChange={(e) => set("about", e.target.value)}
          rows={3}
          placeholder="e.g. We take appointments for walk-in and booked visits, and sell a few products at the counter."
          className={`${inputClass} py-3 leading-relaxed`}
        />
      </Field>
      <Choices
        label="Which languages do your customers write in?"
        options={languageOptions.map((l) => ({ id: l, label: l }))}
        value={b.languages}
        onChange={(l) =>
          set("languages", b.languages.includes(l) ? (b.languages.length > 1 ? b.languages.filter((x) => x !== l) : b.languages) : [...b.languages, l])
        }
      />
      <div className="grid gap-8 sm:grid-cols-2">
        <Choices
          label="How many locations?"
          options={[
            { id: "one", label: "One" },
            { id: "more", label: "Two or more" },
          ]}
          value={[b.locations]}
          onChange={(v) => set("locations", v as "one" | "more")}
        />
        <Choices label="How many people on your team?" options={teamSizeOptions.map((t) => ({ id: t, label: t }))} value={[b.team]} onChange={(t) => set("team", t)} />
      </div>
    </div>
  );
}
