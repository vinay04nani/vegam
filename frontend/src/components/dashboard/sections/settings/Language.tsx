"use client";

import { languageNames } from "@/content/onboarding";
import type { OnboardingState } from "@/lib/onboarding";
import { Dropdown, Group, Row } from "./parts";

// Languages the assistant replies in, and how dates, times and numbers look.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export function Language({ state, update }: Props) {
  const langs = state.business.languages;
  const toggle = (l: string) => update((s) => ({ ...s, business: { ...s.business, languages: langs.includes(l) ? langs.filter((x) => x !== l) : [...langs, l] } }));
  return (
    <>
      <Group title="Assistant languages" description="The AI replies in the customer’s language when it’s one of these.">
        <div role="group" aria-label="Assistant languages" className="flex flex-wrap gap-1.5 py-4">
          {languageNames.map((l) => (
            <button key={l} type="button" aria-pressed={langs.includes(l)} onClick={() => toggle(l)} className={`h-8 cursor-pointer rounded-full px-3 text-[13px] font-medium transition ${langs.includes(l) ? "bg-ink text-white" : "bg-panel text-ink-soft hover:text-ink"}`}>
              {l}
            </button>
          ))}
        </div>
        <Row label="When unsure, reply in">
          <Dropdown aria-label="Default language" defaultValue={langs[0] ?? "English"} className="w-44">
            {langs.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </Dropdown>
        </Row>
      </Group>
      <Group title="Formats">
        <Row label="Time">
          <Dropdown aria-label="Time format" defaultValue="12" className="w-44">
            <option value="12">2:30 PM</option>
            <option value="24">14:30</option>
          </Dropdown>
        </Row>
        <Row label="Date">
          <Dropdown aria-label="Date format" defaultValue="dmy" className="w-44">
            <option value="dmy">27 Oct 2026</option>
            <option value="mdy">Oct 27, 2026</option>
            <option value="iso">2026-10-27</option>
          </Dropdown>
        </Row>
        <Row label="Week starts on">
          <Dropdown aria-label="Week starts on" defaultValue="mon" className="w-44">
            <option value="mon">Monday</option>
            <option value="sun">Sunday</option>
            <option value="sat">Saturday</option>
          </Dropdown>
        </Row>
      </Group>
    </>
  );
}
