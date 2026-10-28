"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { sampleLocations, type Location } from "@/content/settings";

// Which location the dashboard is showing (Pro: multi-branch). "all" shows
// every location together. Inbox, Calendar and Reports read this, so one
// switch in the sidebar scopes them all. Demo: kept in memory only.

type Branch = { branch: string; setBranch: (id: string) => void; locations: Location[]; setLocations: (fn: (ls: Location[]) => Location[]) => void; current: Location | null; label: string };

const BranchContext = createContext<Branch>({ branch: "all", setBranch: () => undefined, locations: sampleLocations, setLocations: () => undefined, current: null, label: "All locations" });

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branch, setBranch] = useState("all");
  const [locations, setLocations] = useState<Location[]>(sampleLocations);
  const current = locations.find((l) => l.id === branch) ?? null;
  return <BranchContext.Provider value={{ branch, setBranch, locations, setLocations, current, label: current?.name ?? "All locations" }}>{children}</BranchContext.Provider>;
}

export const useBranch = () => useContext(BranchContext);
