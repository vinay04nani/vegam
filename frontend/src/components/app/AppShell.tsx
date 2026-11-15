// Ported from design board AppHome (sidebar, profile menu, settings) by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { ReactNode } from "react";
import NavLink from "@/components/app/NavLink";
import ShellEffects from "@/components/app/ShellEffects";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
      <div className="app" style={{ position: "relative", height: "100dvh", minHeight: "720px", display: "flex", overflow: "hidden", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "14px", lineHeight: "1.45" }}>
        <input className="vh" type="radio" name="ov" id="ov-none" defaultChecked aria-label="none" />
        <input className="vh" type="radio" name="ov" id="ov-menu" aria-label="menu" />
        <input className="vh" type="radio" name="ov" id="ov-set" aria-label="set" />
        <input className="vh" type="radio" name="ov" id="ov-pal" aria-label="pal" />
        <input className="vh" type="radio" name="ov" id="ov-notif" aria-label="notif" />
        <input className="vh" type="radio" name="ov" id="ov-biz" aria-label="biz" />
        <input className="vh" type="radio" name="th" id="th-light" defaultChecked aria-label="light theme" />
        <input className="vh" type="radio" name="th" id="th-dark" aria-label="dark theme" />
        <input className="vh" type="checkbox" id="a-col" aria-label="Collapse sidebar" />
        <aside className="side" aria-label="App" style={{ flex: "none", height: "100%", display: "flex", flexDirection: "column", padding: "12px 10px", gap: "6px", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 4px 6px 8px", minHeight: "40px" }} data-s="s2">
            <span className="lbl" style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "22px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #10B981 55%, #10B981 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {"vegham"}
            </span>
            <label htmlFor="a-col" className="ibtn" title="Collapse sidebar" aria-label="Collapse sidebar">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="3">
                </rect>
                <path d="M9 4v16">
                </path>
              </svg>
            </label>
          </div>
          <button type="button" className="nv hide-col" style={{ border: "1px solid var(--line)", background: "var(--bg)", height: "44px", marginBottom: "4px", width: "100%", textAlign: "left", cursor: "pointer" }}>
            <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", flex: "none" }}>
              {"N"}
            </span>
            <span className="lbl" style={{ display: "flex", flexDirection: "column", lineHeight: "1.2", color: "var(--text)" }}>
              <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                {"Nila & Co"}
              </b>
              <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                {"Indiranagar · 2 locations"}
              </span>
            </span>
            <span className="lbl" style={{ marginLeft: "auto", color: "var(--mut2)" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 9l4-4 4 4M8 15l4 4 4-4">
                </path>
              </svg>
            </span>
          </button>
          <nav aria-label="Main" style={{ display: "flex", flexDirection: "column", gap: "1px", marginTop: "6px" }}>
            <NavLink href="/app/" className="nv on" aria-current="page" title="Home">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z">
                </path>
              </svg>
              <span className="lbl">
                {"Home"}
              </span>
            </NavLink>
            <NavLink href="/app/conversations/" className="nv" title="Conversations">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                </path>
                <path d="M8 11h8M8 14h5">
                </path>
              </svg>
              <span className="lbl">
                {"Conversations"}
              </span>
              <span className="lbl" style={{ marginLeft: "auto", minWidth: "20px", height: "20px", padding: "0 6px", borderRadius: "999px", background: "var(--ink)", color: "var(--inkfg)", fontSize: "11.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center" }} data-s="s1">
                {"2"}
              </span>
            </NavLink>
            <NavLink href="/app/people/" className="nv" title="People">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4">
                </circle>
                <path d="M4 21a8 8 0 0 1 16 0">
                </path>
              </svg>
              <span className="lbl">
                {"People"}
              </span>
            </NavLink>
            <NavLink href="/app/follow-ups/" className="nv" title="Follow-ups">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 2l4 4-4 4">
                </path>
                <path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4">
                </path>
                <path d="M21 13v2a3 3 0 0 1-3 3H3">
                </path>
              </svg>
              <span className="lbl">
                {"Follow-ups"}
              </span>
              <span className="lbl" style={{ marginLeft: "auto", fontSize: "11px", color: "var(--mut2)" }}>
                {"23"}
              </span>
            </NavLink>
            <NavLink href="/app/insights/" className="nv" title="Insights">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V5M4 20h16M8 16l4-4 3 3 5-6">
                </path>
              </svg>
              <span className="lbl">
                {"Insights"}
              </span>
            </NavLink>
            <span className="lbl hide-col" style={{ display: "block", padding: "12px 10px 4px", fontSize: "11.5px", fontWeight: "500", color: "var(--mut2)" }}>
              {"Your agent"}
            </span>
            <NavLink href="/app/agent/" className="nv" title="Agent">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14v-2a8 8 0 0 1 16 0v2">
                </path>
                <rect x="3" y="14" width="4" height="6" rx="1.5">
                </rect>
                <rect x="17" y="14" width="4" height="6" rx="1.5">
                </rect>
                <path d="M20 20a3 3 0 0 1-3 2h-3">
                </path>
              </svg>
              <span className="lbl">
                {"Agent"}
              </span>
            </NavLink>
            <NavLink href="/app/agent/languages/" className="nv" title="Languages">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8">
                </path>
                <path d="M13 21l4-9 4 9M14.5 18h5">
                </path>
              </svg>
              <span className="lbl">
                {"Languages"}
              </span>
            </NavLink>
            <NavLink href="/app/agent/memory/" className="nv" title="Memory">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                </path>
                <path d="M3 3v5h5">
                </path>
                <path d="M12 7v5l3 2">
                </path>
              </svg>
              <span className="lbl">
                {"Memory"}
              </span>
            </NavLink>
            <NavLink href="/app/agent/knowledge/" className="nv" title="Knowledge">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z">
                </path>
                <path d="M19 19v2H6">
                </path>
              </svg>
              <span className="lbl">
                {"Knowledge"}
              </span>
            </NavLink>
            <NavLink href="/app/agent/channels/" className="nv" title="Channels">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3v4M15 3v4">
                </path>
                <path d="M7 7h10v4a5 5 0 0 1-10 0z">
                </path>
                <path d="M12 16v5">
                </path>
              </svg>
              <span className="lbl">
                {"Channels"}
              </span>
            </NavLink>
            <NavLink href="/app/agent/test-call/" className="nv" title="Test call">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3">
                </path>
                <path d="M7 15h10">
                </path>
              </svg>
              <span className="lbl">
                {"Test call"}
              </span>
            </NavLink>
          </nav>
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div className="hide-col lbl" style={{ padding: "12px", borderRadius: "14px", border: "1px solid var(--line)", background: "var(--bg)", fontSize: "12.5px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <b style={{ fontWeight: "500", fontSize: "13px" }}>
                  {"Growth · free pilot"}
                </b>
                <span style={{ color: "var(--mut)" }}>
                  {"23 days left"}
                </span>
              </div>
              <div style={{ marginTop: "8px", height: "4px", borderRadius: "2px", background: "var(--soft)" }}>
                <span style={{ display: "block", width: "23%", height: "100%", borderRadius: "2px", background: "#10B981" }}>
                </span>
              </div>
              <a href="#" style={{ display: "inline-block", marginTop: "8px", color: "var(--text)", fontWeight: "500" }}>
                {"Choose a plan →"}
              </a>
            </div>
            <label htmlFor="ov-menu" className="nv" style={{ height: "48px", padding: "0 8px", color: "var(--text)" }} title="Account">
              <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", flex: "none" }}>
                {"V"}
              </span>
              <span className="lbl" style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                  {"Vinay"}
                </b>
                <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                  {"Owner · Nila & Co"}
                </span>
              </span>
              <span className="lbl" style={{ marginLeft: "auto", color: "var(--mut2)" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 9l4-4 4 4M8 15l4 4 4-4">
                  </path>
                </svg>
              </span>
            </label>
          </div>
        </aside>
        {children}
        <ShellEffects />
        <div className="ov ov-menu" style={{ position: "absolute", inset: "0", zIndex: "30" }}>
          <label htmlFor="ov-none" aria-label="Close menu" style={{ position: "absolute", inset: "0" }}>
          </label>
          <div className="popin" role="menu" style={{ position: "absolute", left: "12px", bottom: "66px", width: "300px", padding: "8px", borderRadius: "16px", background: "var(--pop)", boxShadow: "var(--shadow)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 10px 12px" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#10B981", color: "#FFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>
                {"V"}
              </span>
              <span style={{ lineHeight: "1.3" }}>
                <b style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>
                  {"Vinay"}
                </b>
                <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                  {"vinay@nilaandco.in"}
                </span>
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--line)", margin: "0 6px 4px" }}>
            </div>
            <label htmlFor="ov-set" className="mi">
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3">
                </circle>
                <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1">
                </path>
              </svg>
              {"Settings"}
              <span className="kb">
                {"⌘ ,"}
              </span>
            </label>
            <label htmlFor="ov-set" className="mi">
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="14" rx="2">
                </rect>
                <path d="M3 10h18M16 15h2">
                </path>
              </svg>
              {"Plan and usage"}
              <span className="kb">
                {"23 days left"}
              </span>
            </label>
            <div className="mi" style={{ cursor: "default" }}>
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4">
                </circle>
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4">
                </path>
              </svg>
              {"Theme"}
              <span style={{ marginLeft: "auto" }} className="seg">
                <label htmlFor="th-light" className="t-light">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4">
                    </circle>
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4">
                    </path>
                  </svg>
                </label>
                <label htmlFor="th-dark" className="t-dark">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z">
                    </path>
                  </svg>
                </label>
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--line)", margin: "4px 6px" }}>
            </div>
            <div className="mi">
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9">
                </circle>
                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01">
                </path>
              </svg>
              {"Help and support"}
            </div>
            <div className="mi">
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-2-3-6-3-6 0M12 7c2-3 6-3 6 0">
                </path>
              </svg>
              {"What’s new"}
              <span className="kb">
                {"2"}
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--line)", margin: "4px 6px" }}>
            </div>
            <div className="mi">
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5M15 12H3">
                </path>
              </svg>
              {"Log out"}
            </div>
          </div>
        </div>
        <input className="vh" type="radio" name="s2" id="s2-business" defaultChecked aria-label="Business" />
        <input className="vh" type="radio" name="s2" id="s2-phone" aria-label="Phone and WhatsApp" />
        <input className="vh" type="radio" name="s2" id="s2-team" aria-label="Team" />
        <input className="vh" type="radio" name="s2" id="s2-notifs" aria-label="Notifications" />
        <input className="vh" type="radio" name="s2" id="s2-plan" aria-label="Plan and usage" />
        <input className="vh" type="radio" name="s2" id="s2-privacy" aria-label="Privacy" />
        <input className="vh" type="radio" name="s2" id="s2-profile" aria-label="Your profile" />
        <div className="ov ov-set" style={{ position: "absolute", inset: "0", zIndex: "40", alignItems: "center", justifyContent: "center" }}>
          <label htmlFor="ov-none" aria-label="Close settings" style={{ position: "absolute", inset: "0", background: "var(--scrim)" }}>
          </label>
          <div className="popin" role="dialog" aria-modal="true" aria-label="Settings" style={{ position: "relative", width: "920px", height: "640px", borderRadius: "22px", background: "var(--pop)", boxShadow: "var(--shadow)", display: "flex", overflow: "hidden" }}>
            <div style={{ width: "240px", flex: "none", padding: "14px 10px", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 4px 12px 10px" }}>
                <b style={{ fontSize: "15px", fontWeight: "600" }}>
                  {"Settings"}
                </b>
                <label htmlFor="ov-none" className="ibtn" aria-label="Close">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18">
                    </path>
                  </svg>
                </label>
              </div>
              <label htmlFor="s2-business" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3">
                  </path>
                </svg>
                {"Business"}
              </label>
              <label htmlFor="s2-phone" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                  </path>
                </svg>
                {"Phone and WhatsApp"}
              </label>
              <label htmlFor="s2-team" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5">
                  </circle>
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6">
                  </path>
                </svg>
                {"Team"}
              </label>
              <label htmlFor="s2-notifs" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0">
                  </path>
                </svg>
                {"Notifications"}
              </label>
              <label htmlFor="s2-plan" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="14" rx="2">
                  </rect>
                  <path d="M3 10h18M16 15h2">
                  </path>
                </svg>
                {"Plan and usage"}
              </label>
              <label htmlFor="s2-privacy" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z">
                  </path>
                </svg>
                {"Privacy"}
              </label>
              <label htmlFor="s2-profile" className="stab">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4">
                  </circle>
                  <path d="M4 21a8 8 0 0 1 16 0">
                  </path>
                </svg>
                {"Your profile"}
              </label>
            </div>
            <div style={{ flex: "1", padding: "26px 32px", overflow: "hidden" }}>
              <div className="s2p s2p-business">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Business"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"What Vegham says about you"}
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <span className="lab">
                      {"Business name"}
                    </span>
                    <span className="fld">
                      {"Nila & Co"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Phone people know"}
                    </span>
                    <span className="fld">
                      {"+91 80 4123 5678"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Address"}
                    </span>
                    <span className="fld">
                      {"12, 100 Feet Rd, Indiranagar"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Website"}
                    </span>
                    <span className="fld">
                      {"nilaandco.in"}
                    </span>
                  </div>
                </div>
                <b style={{ display: "block", fontSize: "13px", fontWeight: "600", margin: "20px 0 8px" }}>
                  {"Opening hours"}
                </b>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                  <span>
                    {"Monday – Friday"}
                  </span>
                  <span style={{ color: "var(--mut)" }}>
                    {"9:00 AM – 8:00 PM"}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                  <span>
                    {"Saturday"}
                  </span>
                  <span style={{ color: "var(--mut)" }}>
                    {"10:00 AM – 6:00 PM"}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                  <span>
                    {"Sunday"}
                  </span>
                  <span style={{ color: "var(--mut)" }}>
                    {"Closed"}
                  </span>
                </div>
                <span style={{ display: "block", marginTop: "8px", fontSize: "12.5px", color: "var(--mut)" }}>
                  {"Vegham still answers when you’re closed."}
                </span>
              </div>
              <div className="s2p s2p-phone">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Phone and WhatsApp"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"Where Vegham answers"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Vegham number"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"080 4719 2200"}
                    </span>
                  </span>
                  <span className="bd good">
                    {"Working"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Forwarding"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"From +91 80 4123 5678 when you’re busy or don’t pick up"}
                    </span>
                  </span>
                  <span className="obtn">
                    {"Change"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"WhatsApp"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"+91 98765 43210 · Nila & Co"}
                    </span>
                  </span>
                  <span className="bd good">
                    {"Connected"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Text back missed calls"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"On WhatsApp within seconds"}
                    </span>
                  </span>
                  <span className="sw on">
                  </span>
                </div>
              </div>
              <div className="s2p s2p-team">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Team"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"People who can use Vegham and get hand-overs"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                    {"V"}
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Vinay"}
                    </b>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Owner · vinay@nilaandco.in"}
                    </span>
                  </span>
                  <span className="bd mut">
                    {"Owner"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                    {"P"}
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Priya Nair"}
                    </b>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Gets hand-overs on WhatsApp"}
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"Member"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                    {"R"}
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Rahul Menon"}
                    </b>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Invite sent"}
                    </span>
                  </span>
                  <span className="obtn">
                    {"Resend"}
                  </span>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="obtn">
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14">
                      </path>
                    </svg>
                    {"Invite someone"}
                  </span>
                </div>
              </div>
              <div className="s2p s2p-notifs">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Notifications"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"How Vegham reaches you"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Hand-overs"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"When Vegham needs a person"}
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"WhatsApp"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Call-back requests"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"WhatsApp and app"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Daily summary"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"What Vegham did today"}
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"8 PM on WhatsApp"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Weekly insights"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"Email, Monday"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="s2p s2p-plan">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Plan and usage"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"Growth · free pilot · 23 days left"}
                </span>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span>
                      {"Call minutes"}
                    </span>
                    <span style={{ color: "var(--mut)" }}>
                      {"212 of 500"}
                    </span>
                  </div>
                  <div style={{ marginTop: "8px", height: "6px", borderRadius: "3px", background: "var(--soft2)" }}>
                    <span style={{ display: "block", width: "42%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                  </div>
                </div>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span>
                      {"WhatsApp conversations"}
                    </span>
                    <span style={{ color: "var(--mut)" }}>
                      {"742 of 1,500"}
                    </span>
                  </div>
                  <div style={{ marginTop: "8px", height: "6px", borderRadius: "3px", background: "var(--soft2)" }}>
                    <span style={{ display: "block", width: "49%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                  </div>
                </div>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span>
                      {"People remembered"}
                    </span>
                    <span style={{ color: "var(--mut)" }}>
                      {"1,284 of unlimited"}
                    </span>
                  </div>
                  <div style={{ marginTop: "8px", height: "6px", borderRadius: "3px", background: "var(--soft2)" }}>
                    <span style={{ display: "block", width: "12%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "14px" }}>
                  <span className="pbtn">
                    {"Choose a plan"}
                  </span>
                </div>
              </div>
              <div className="s2p s2p-privacy">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Privacy"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                  {"India’s DPDP Act: tell people, keep only what you need, forget on request"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Notice at the start of calls"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"“This call may be recorded and remembered to help you next time.”"}
                    </span>
                  </span>
                  <span className="sw on">
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Keep memory for"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Then it’s deleted"}
                    </span>
                  </span>
                  <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                    {"12 months"}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6">
                      </path>
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"“Forget me” requests"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"2 this month · handled automatically"}
                    </span>
                  </span>
                  <span className="obtn">
                    {"View"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Download all data"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"People, conversations and recordings as a ZIP"}
                    </span>
                  </span>
                  <span className="obtn">
                    {"Download"}
                  </span>
                </div>
              </div>
              <div className="s2p s2p-profile">
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Your profile"}
                </b>
                <span style={{ display: "block", fontSize: "13px", color: "var(--mut)", margin: "2px 0 18px" }}>
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <span className="lab">
                      {"Name"}
                    </span>
                    <span className="fld">
                      {"Vinay"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Email"}
                    </span>
                    <span className="fld">
                      {"vinay@nilaandco.in"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Phone"}
                    </span>
                    <span className="fld">
                      {"+91 98450 11220"}
                    </span>
                  </div>
                  <div>
                    <span className="lab">
                      {"Language"}
                    </span>
                    <span className="fld">
                      {"English"}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flex: "1", minWidth: "0" }}>
                    <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                      {"Two-step sign-in"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Code on WhatsApp when you log in on a new device"}
                    </span>
                  </span>
                  <span className="sw on">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ov ov-notif" style={{ position: "absolute", inset: "0", zIndex: "30" }}>
          <label htmlFor="ov-none" aria-label="Close notifications" style={{ position: "absolute", inset: "0" }}>
          </label>
          <div className="popin" role="dialog" aria-label="Notifications" style={{ position: "absolute", right: "16px", top: "54px", width: "400px", borderRadius: "18px", background: "var(--pop)", boxShadow: "var(--shadow)", overflow: "hidden", paddingBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px 6px" }}>
              <b style={{ fontSize: "15px", fontWeight: "600" }}>
                {"Notifications"}
              </b>
              <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                {"Mark all read"}
              </span>
            </div>
            <span style={{ display: "block", padding: "14px 18px 6px", fontSize: "11.5px", color: "var(--mut2)" }}>
              {"Needs you"}
            </span>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px", background: "var(--soft2)" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#FF0069">
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"Arjun is waiting for a person"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"Group price for 8 · 9 min ago"}
                </span>
              </span>
              <span style={{ width: "8px", height: "8px", marginTop: "6px", borderRadius: "50%", background: "var(--acc)" }}>
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px", background: "var(--soft2)" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"P. Iyer asked for a call back"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"25 min ago"}
                </span>
              </span>
              <span style={{ width: "8px", height: "8px", marginTop: "6px", borderRadius: "50%", background: "var(--acc)" }}>
              </span>
            </div>
            <span style={{ display: "block", padding: "14px 18px 6px", fontSize: "11.5px", color: "var(--mut2)" }}>
              {"Bookings"}
            </span>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"Riya booked Standard · tomorrow 6:30 PM"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"Booked by Vegham · just now"}
                </span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"Meera moved her visit to Saturday"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"1 hour ago"}
                </span>
              </span>
            </div>
            <span style={{ display: "block", padding: "14px 18px 6px", fontSize: "11.5px", color: "var(--mut2)" }}>
              {"System"}
            </span>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"Instagram is connected"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"Meta approved your account · today"}
                </span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", padding: "10px 18px" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "var(--mut)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z">
                  </path>
                  <path d="M9 8h6M9 12h6">
                  </path>
                </svg>
              </span>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                  {"Your pilot ends in 23 days"}
                </b>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  {"Choose a plan any time"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
