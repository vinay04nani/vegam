import { useSyncExternalStore } from "react";
import { agents, type AgentId } from "@/content/agents";
import { agentSetup, businessRules, defaultsOf, type Config, type FieldValue } from "@/content/agentSetup";

// AI agents' state, shared by the AI agents home and each agent's page: on/off,
// "Pause all AI", the live settings, unsaved changes (the draft) and the change
// history. Publishing moves the draft live; Undo restores an earlier version.
// Demo: kept in memory for this visit only.

export type Change = { id: string; when: string; who: string; changes: string[]; before: Config };
export type AgentState = { on: boolean; live: Config; draft: Config; history: Change[] };
type State = { paused: boolean; rules: Config; agents: Record<AgentId, AgentState> };

const seedHistory = (id: AgentId, live: Config): Change[] =>
  id === "chat"
    ? [
        { id: "h2", when: "Yesterday, 6:40 PM", who: "You", changes: ["Discounts it may offer: None"], before: live },
        { id: "h1", when: "12 Oct", who: "Vegam setup team", changes: ["Set up and went live"], before: live },
      ]
    : [{ id: "h1", when: "12 Oct", who: "Vegam setup team", changes: ["Set up and went live"], before: live }];

const initial = (): State => ({
  paused: false,
  rules: defaultsOf(businessRules),
  agents: Object.fromEntries(
    agents.map((a) => {
      const live = defaultsOf(agentSetup[a.id]);
      return [a.id, { on: a.defaultOn, live, draft: live, history: seedHistory(a.id, live) }];
    }),
  ) as Record<AgentId, AgentState>,
});

let state = initial();
const server = state;
const listeners = new Set<() => void>();
const set = (fn: (s: State) => State) => {
  state = fn(state);
  listeners.forEach((l) => l());
};
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const useAgents = () =>
  useSyncExternalStore(
    subscribe,
    () => state,
    () => server,
  );

const same = (a: FieldValue, b: FieldValue) => JSON.stringify(a) === JSON.stringify(b);

/** Field keys whose draft differs from what's live. */
export function changedKeys(s: AgentState) {
  return Object.keys(s.draft).filter((k) => !same(s.draft[k], s.live[k]));
}

const labelOf = (id: AgentId, key: string) => agentSetup[id].flatMap((s) => s.fields).find((f) => f.key === key)?.label ?? key;
const describe = (id: AgentId, key: string, v: FieldValue) => {
  const f = agentSetup[id].flatMap((s) => s.fields).find((x) => x.key === key);
  if (!f) return key;
  if (typeof v === "boolean") return `${f.label}: ${v ? "on" : "off"}`;
  if (f.type === "select") return `${f.label}: ${f.options.find((x) => x.v === v)?.l ?? v}`;
  if (Array.isArray(v) && (v.length === 0 || typeof v[0] === "string")) return `${f.label}: ${(v as string[]).join(", ") || "none"}`;
  if (f.type === "text" || f.type === "time") return `${f.label}: “${v}”`;
  return `${f.label} edited`;
};

const stamp = () => {
  const d = new Date();
  return `Today, ${d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
};

export const agentStore = {
  setOn: (id: AgentId, on: boolean) => set((s) => ({ ...s, agents: { ...s.agents, [id]: { ...s.agents[id], on } } })),
  setPaused: (paused: boolean) => set((s) => ({ ...s, paused })),
  setRule: (key: string, v: FieldValue) => set((s) => ({ ...s, rules: { ...s.rules, [key]: v } })),
  edit: (id: AgentId, key: string, v: FieldValue) => set((s) => ({ ...s, agents: { ...s.agents, [id]: { ...s.agents[id], draft: { ...s.agents[id].draft, [key]: v } } } })),
  discard: (id: AgentId) => set((s) => ({ ...s, agents: { ...s.agents, [id]: { ...s.agents[id], draft: s.agents[id].live } } })),
  publish: (id: AgentId) =>
    set((s) => {
      const a = s.agents[id];
      const keys = changedKeys(a);
      if (!keys.length) return s;
      const change: Change = { id: String(Date.now()), when: stamp(), who: "You", changes: keys.map((k) => describe(id, k, a.draft[k])), before: a.live };
      return { ...s, agents: { ...s.agents, [id]: { ...a, live: a.draft, history: [change, ...a.history] } } };
    }),
  undo: (id: AgentId, changeId: string) =>
    set((s) => {
      const a = s.agents[id];
      const c = a.history.find((h) => h.id === changeId);
      if (!c) return s;
      const back: Change = { id: String(Date.now()), when: stamp(), who: "You", changes: [`Undid: ${c.changes.join("; ")}`], before: a.live };
      return { ...s, agents: { ...s.agents, [id]: { ...a, live: c.before, draft: c.before, history: [back, ...a.history] } } };
    }),
  labelOf,
};

export type AgentStatus = { label: string; tone: "success" | "warning" | "neutral" | "danger" | "brand" };
