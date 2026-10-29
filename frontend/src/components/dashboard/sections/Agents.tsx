"use client";

import type { AgentId } from "@/content/agents";
import { agents } from "@/content/agents";
import type { PlanId } from "@/content/pricing";
import type { OnboardingState } from "@/lib/onboarding";
import { AgentPage } from "./agents/AgentPage";
import { AgentsHome } from "./agents/AgentsHome";

// AI agents. Routes: "agents" and "agents/<tab>" (knowledge, rules, activity)
// for the home; "agent:<id>" and "agent:<id>/<tab>" for one agent's page.

type Props = { route: string; state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void; plan: PlanId };

export function Agents({ route, state, update, onOpen, plan }: Props) {
  if (route.startsWith("agent:")) {
    const [id, tab = "overview"] = route.slice(6).split("/");
    if (agents.some((a) => a.id === id)) return <AgentPage key={id} id={id as AgentId} tab={tab} state={state} update={update} onOpen={onOpen} plan={plan} />;
  }
  return <AgentsHome tab={route.split("/")[1] ?? "agents"} state={state} update={update} onOpen={onOpen} plan={plan} />;
}
