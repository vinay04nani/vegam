// Ported from design board Product by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function ProductPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <div className="vg-heroout">
              <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
                {"Product"}
              </span>
              <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "940px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
                {"Built to answer, remember"}
                <br />
                <span style={{ color: "#8A8A8A" }}>
                  {"and follow through."}
                </span>
              </h1>
              <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
                {"One AI agent for your calls and messages. Here is everything it does, and everything you can control."}
              </p>
              <div className="vg-hero" style={{ animationDelay: ".42s", marginTop: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Start free"}
                </Link>
                <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Book a demo"}
                </Link>
              </div>
              <div style={{ margin: "40px auto 0", maxWidth: "820px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                <a href="#voice" className="vg-hero" style={{ animationDelay: "0.45s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Voice"}
                </a>
                <a href="#languages" className="vg-hero" style={{ animationDelay: "0.49s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Languages"}
                </a>
                <a href="#people" className="vg-hero" style={{ animationDelay: "0.53s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"People"}
                </a>
                <a href="#channels" className="vg-hero" style={{ animationDelay: "0.57s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Channels"}
                </a>
                <a href="#hand-over" className="vg-hero" style={{ animationDelay: "0.61s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Hand-over"}
                </a>
                <a href="#follow-ups" className="vg-hero" style={{ animationDelay: "0.65s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Follow-ups"}
                </a>
                <a href="#knowledge" className="vg-hero" style={{ animationDelay: "0.69s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Knowledge"}
                </a>
                <a href="#insights" className="vg-hero" style={{ animationDelay: "0.73s", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                  {"Insights"}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="one-call" style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
              <div>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                  {"Every call"}
                </span>
                <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "48px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s3">
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block" }}>
                      {"Six things happen"}
                    </span>
                  </span>
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                      {"every time your phone rings."}
                    </span>
                  </span>
                </h2>
              </div>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "380px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Whether it is a new customer or someone you have known for years."}
              </p>
            </div>
            <div className="vg-g3" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 4% cover 30%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"01"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Picks up"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"In under a second, in a natural voice, day or night."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"“Hi, thanks for calling Nila & Co.”"}
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 9% cover 35%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8.5" r="3.5">
                      </circle>
                      <path d="M5 20a7 7 0 0 1 14 0">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"02"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Knows who it is"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"Recognises the number and recalls the person."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"Rohan Mehta · last called 6 months ago"}
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 14% cover 40%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z">
                      </path>
                      <path d="M5 17a3 3 0 0 1 3-3h10">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"03"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Answers"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"From your prices, hours and notes. Nothing made up."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"“Saturday 10 AM is free. Shall I hold it?”"}
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 11% cover 37%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h11">
                      </path>
                      <path d="M11 7l5 5-5 5">
                      </path>
                      <path d="M20 5v14">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"04"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Hands over if needed"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"Brings you in when a person should decide."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"Not needed this time"}
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 16% cover 42%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"05"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Writes a summary"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"What was asked, said and agreed, ready for you."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"Booked Sat 10 AM for 5"}
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", animationRange: "entry 21% cover 47%" } as CSSProperties}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: "42px", height: "42px", borderRadius: "13px", background: "#F5F5F7", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8.5">
                      </circle>
                      <path d="M12 7.5V12l3 2">
                      </path>
                    </svg>
                  </span>
                  <span style={{ fontSize: "13px", color: "#A3A3A3", fontVariantNumeric: "tabular-nums" }}>
                    {"06"}
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "21px", letterSpacing: "-0.02em" }}>
                    {"Plans the follow-up"}
                  </b>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "15px", color: "#5C5C5C" }}>
                    {"Anything it promised goes on your list."}
                  </span>
                </span>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", padding: "8px 12px", borderRadius: "12px", background: "#F7F7F8", fontSize: "13px", color: "#0B8F63" }}>
                  {"Reminder on Friday evening"}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "14px", textAlign: "right" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                {"Sample data"}
              </span>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFFFF", timelineScope: "--vg-t0, --vg-t1, --vg-t2, --vg-t3, --vg-t4, --vg-t5, --vg-t6, --vg-t7" } as CSSProperties}>
          <div className="vg-pad vg-tour" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 88px", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "56px" }} data-s="s11">
            <div className="vg-tside" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"What it does"}
              </span>
              <nav aria-label="What it does" style={{ marginTop: "24px", display: "flex", flexDirection: "column" }}>
                <a href="#voice" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t0" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"01"}
                  </span>
                  {"Voice"}
                </a>
                <a href="#languages" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t1" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"02"}
                  </span>
                  {"Languages"}
                </a>
                <a href="#people" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t2" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"03"}
                  </span>
                  {"People"}
                </a>
                <a href="#channels" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t3" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"04"}
                  </span>
                  {"Channels"}
                </a>
                <a href="#hand-over" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t4" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"05"}
                  </span>
                  {"Hand-over"}
                </a>
                <a href="#follow-ups" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t5" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"06"}
                  </span>
                  {"Follow-ups"}
                </a>
                <a href="#knowledge" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t6" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"07"}
                  </span>
                  {"Knowledge"}
                </a>
                <a href="#insights" className="vg-tnav" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0 10px 16px", borderLeft: "2px solid #E6E6EA", color: "#141414", textDecoration: "none", fontSize: "15px", animationTimeline: "--vg-t7" } as CSSProperties}>
                  <span style={{ fontSize: "12px", color: "#8A8A8A", fontVariantNumeric: "tabular-nums" }}>
                    {"08"}
                  </span>
                  {"Insights"}
                </a>
              </nav>
            </div>
            <div style={{ minWidth: "0" }}>
              <div id="voice" className="vg-tpanel" style={{ viewTimelineName: "--vg-t0", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"01 · Voice"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"A voice that sounds like a person"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Pick from four voices and hear each one say your own greeting. It answers in under a second, pauses naturally and lets people interrupt."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div className="vg-g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", boxShadow: "0 0 0 2px rgba(16,185,129,.55)", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                            </path>
                          </svg>
                        </span>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7.5">
                            </path>
                          </svg>
                        </span>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                          {"Warm"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Calm, friendly"}
                        </span>
                      </span>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "18px" }}>
                        <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                            </path>
                          </svg>
                        </span>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                          {"Easy"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Relaxed"}
                        </span>
                      </span>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "18px" }}>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                            </path>
                          </svg>
                        </span>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                          {"Bright"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Upbeat"}
                        </span>
                      </span>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "18px" }}>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                            </path>
                          </svg>
                        </span>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                          {"Steady"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Clear, formal"}
                        </span>
                      </span>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "18px" }}>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.24s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.36s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.48s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.60s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.72s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.00s" }}>
                        </span>
                        <span className="" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#C9C9D1", animationDelay: "0.12s" }}>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="vg-slide" style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", width: "64px" }}>
                      {"Greeting"}
                    </span>
                    <span style={{ flex: "1", fontSize: "14.5px" }}>
                      {"“Namaste, Nila & Co. How can I help?”"}
                    </span>
                    <span style={{ fontSize: "12px", color: "#0B8F63", fontWeight: "500" }}>
                      {"Heard in your voice"}
                    </span>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="languages" className="vg-tpanel" style={{ viewTimelineName: "--vg-t1", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"02 · Languages"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Speaks the way your customers do"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"It answers in the language the caller starts in, switches the moment they ask, and remembers each person’s language for next time."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div className="vg-g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"Hello"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"English"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", boxShadow: "0 0 0 2px rgba(16,185,129,.55)", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"नमस्ते"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Hindi"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"வணக்கம்"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Tamil"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"నమస్కారం"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Telugu"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"Hola"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Spanish"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 37% cover 59%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"مرحبا"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Arabic"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 42% cover 64%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"Bonjour"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"French"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 47% cover 69%" } as CSSProperties}>
                      <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"Olá"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Portuguese"}
                      </span>
                    </div>
                  </div>
                  <div className="vg-slide" style={{ marginTop: "14px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", animationRange: "entry 52% cover 74%" } as CSSProperties}>
                    <span style={{ alignSelf: "flex-end", background: "#F1F1F4", padding: "8px 12px", borderRadius: "14px 14px 4px 14px" }}>
                      {"Hindi mein baat karein?"}
                    </span>
                    <span style={{ alignSelf: "flex-start", background: "#16182A", color: "#FFFFFF", padding: "8px 12px", borderRadius: "14px 14px 14px 4px" }}>
                      {"Bilkul! Bataiye, kaise madad karoon?"}
                    </span>
                    <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#0B8F63" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.5">
                        </circle>
                        <path d="M3.5 12h17">
                        </path>
                        <path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z">
                        </path>
                      </svg>
                      {"Switched to Hindi, and saved for next time"}
                    </span>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="people" className="vg-tpanel" style={{ viewTimelineName: "--vg-t2", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"03 · People"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Everyone it has talked to, in one place"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"What it remembers about each person, where things stand, and every call and chat, whatever the channel."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ flex: "1 1 300px", minWidth: "0", padding: "18px 20px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "12px" }}>
                        <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-tight), sans-serif", fontSize: "17px" }}>
                          {"R"}
                        </span>
                        <span>
                          <b style={{ display: "block", fontWeight: "600" }}>
                            {"Rohan Mehta"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Known since May · 4 conversations"}
                          </span>
                        </span>
                      </span>
                      <div className="vg-slide" style={{ display: "flex", gap: "14px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                        <span style={{ width: "96px", flex: "none", color: "#8A8A8A", fontSize: "12.5px" }}>
                          {"Language"}
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Hindi and English"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", gap: "14px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                        <span style={{ width: "96px", flex: "none", color: "#8A8A8A", fontSize: "12.5px" }}>
                          {"Prefers"}
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Saturday mornings, details on WhatsApp"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", gap: "14px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                        <span style={{ width: "96px", flex: "none", color: "#8A8A8A", fontSize: "12.5px" }}>
                          {"Group size"}
                        </span>
                        <span style={{ flex: "1" }}>
                          {"5 people · was 3 in May"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", gap: "14px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                        <span style={{ width: "96px", flex: "none", color: "#8A8A8A", fontSize: "12.5px" }}>
                          {"Open loop"}
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Closed today · booked Sat 10 AM"}
                        </span>
                      </div>
                    </div>
                    <div style={{ flex: "1 1 260px", minWidth: "0", padding: "14px 18px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                      <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                        {"Every conversation, any channel"}
                      </span>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                            </path>
                          </svg>
                        </span>
                        <span style={{ minWidth: "0" }}>
                          <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                            {"Today · call 0:41"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                            {"Booked Saturday 10 AM for 5"}
                          </span>
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                            </path>
                          </svg>
                        </span>
                        <span style={{ minWidth: "0" }}>
                          <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                            {"Today · WhatsApp"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                            {"Sent the details and location"}
                          </span>
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", animationRange: "entry 37% cover 59%" } as CSSProperties}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                            </path>
                          </svg>
                        </span>
                        <span style={{ minWidth: "0" }}>
                          <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                            {"14 May · WhatsApp"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                            {"Sent timings and prices"}
                          </span>
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", animationRange: "entry 42% cover 64%" } as CSSProperties}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                            </path>
                          </svg>
                        </span>
                        <span style={{ minWidth: "0" }}>
                          <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                            {"14 May · call 1:52"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                            {"Asked about weekend sessions"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="channels" className="vg-tpanel" style={{ viewTimelineName: "--vg-t3", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"04 · Channels"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Switch on the channels you use"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Phone, WhatsApp and a link for your website to start with; Instagram, Messenger and Telegram when you want them. Each takes about two minutes."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div className="vg-g3" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"Phone number"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Voice"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", width: "92px", textAlign: "right" }}>
                        {"Connected"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", right: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"WhatsApp"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Chat · voice notes"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", width: "92px", textAlign: "right" }}>
                        {"Connected"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", right: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                          </path>
                          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"Your link"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Voice · chat"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", width: "92px", textAlign: "right" }}>
                        {"Connected"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", right: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FF0069">
                          <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"Instagram"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Chat"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#8A8A8A", width: "92px", textAlign: "right" }}>
                        {"Connect"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#D9D9DE", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", left: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0866FF">
                          <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"Messenger"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Chat"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#8A8A8A", width: "92px", textAlign: "right" }}>
                        {"Connect"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#D9D9DE", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", left: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                    <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 37% cover 59%" } as CSSProperties}>
                      <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="#29A9EB">
                          </circle>
                          <path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                          {"Telegram"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Chat · voice notes"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#8A8A8A", width: "92px", textAlign: "right" }}>
                        {"Connect"}
                      </span>
                      <span style={{ width: "38px", height: "22px", flex: "none", borderRadius: "999px", background: "#D9D9DE", position: "relative" }} data-s="s1">
                        <span style={{ position: "absolute", top: "3px", left: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }}>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="hand-over" className="vg-tpanel" style={{ viewTimelineName: "--vg-t4", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"05 · Hand-over"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Knows when you should take over"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"You choose the moments it must hand over. It tells the customer what is happening, then passes you a summary and a suggested reply."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <div style={{ flex: "1 1 280px", minWidth: "0", padding: "16px 18px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                      <b style={{ fontWeight: "600", fontSize: "14.5px" }}>
                        {"Hand over when"}
                      </b>
                      <div style={{ marginTop: "6px" }}>
                        <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                          <span style={{ flex: "1" }}>
                            {"Caller asks for a person"}
                          </span>
                          <span style={{ width: "34px", height: "20px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                            <span style={{ position: "absolute", top: "3px", right: "3px", width: "14px", height: "14px", borderRadius: "50%", background: "#FFFFFF" }}>
                            </span>
                          </span>
                        </div>
                        <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                          <span style={{ flex: "1" }}>
                            {"A complaint or a refund"}
                          </span>
                          <span style={{ width: "34px", height: "20px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                            <span style={{ position: "absolute", top: "3px", right: "3px", width: "14px", height: "14px", borderRadius: "50%", background: "#FFFFFF" }}>
                            </span>
                          </span>
                        </div>
                        <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                          <span style={{ flex: "1" }}>
                            {"A price not in your list"}
                          </span>
                          <span style={{ width: "34px", height: "20px", flex: "none", borderRadius: "999px", background: "#10B981", position: "relative" }} data-s="s1">
                            <span style={{ position: "absolute", top: "3px", right: "3px", width: "14px", height: "14px", borderRadius: "50%", background: "#FFFFFF" }}>
                            </span>
                          </span>
                        </div>
                        <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", fontSize: "14px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                          <span style={{ flex: "1" }}>
                            {"It does not understand twice"}
                          </span>
                          <span style={{ width: "34px", height: "20px", flex: "none", borderRadius: "999px", background: "#D9D9DE", position: "relative" }} data-s="s1">
                            <span style={{ position: "absolute", top: "3px", left: "3px", width: "14px", height: "14px", borderRadius: "50%", background: "#FFFFFF" }}>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="vg-pop" style={{ flex: "1 1 280px", minWidth: "0", alignSelf: "center", display: "block", padding: "18px", borderRadius: "18px", background: "#16182A", color: "#FFFFFF", animationRange: "entry 37% cover 59%" } as CSSProperties}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#A9AECB" }}>
                        <span>
                          {"Needs you · WhatsApp"}
                        </span>
                        <span>
                          {"just now"}
                        </span>
                      </span>
                      <b style={{ display: "block", marginTop: "8px", fontWeight: "500", fontSize: "16px" }}>
                        {"Meera wants a price for 2 people"}
                      </b>
                      <span style={{ display: "block", marginTop: "6px", fontSize: "13.5px", color: "#C3C6DA" }}>
                        {"Not in your list. Vegham told her someone will reply in a few minutes."}
                      </span>
                      <span style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", background: "#FFFFFF", color: "#16182A", fontSize: "13px", fontWeight: "500" }} data-s="s1">
                          {"Reply"}
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.3)", fontSize: "13px" }} data-s="s1">
                          {"Let Vegham continue"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="follow-ups" className="vg-tpanel" style={{ viewTimelineName: "--vg-t5", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"06 · Follow-ups"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Gets back to people, so you don’t have to"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Everyone who said “I’ll think about it” goes on a list, with the message it will send and when. You can edit, skip or send now."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div className="vg-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "500" }}>
                        {"Due today"}
                        <span style={{ color: "#8A8A8A", fontWeight: "400" }}>
                          {"4"}
                        </span>
                      </span>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Ananya Rao"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Decide on prices by Monday"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"P. Iyer"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Promised a call back"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "500" }}>
                        {"This week"}
                        <span style={{ color: "#8A8A8A", fontWeight: "400" }}>
                          {"9"}
                        </span>
                      </span>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Vikram Singh"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Evening slots now open"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Kavya Nair"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Group of 8, maybe November"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "500" }}>
                        {"Done"}
                        <span style={{ color: "#8A8A8A", fontWeight: "400" }}>
                          {"41"}
                        </span>
                      </span>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 32% cover 54%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Sunita Das"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Came back and booked"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ padding: "12px 14px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", fontSize: "13.5px", animationRange: "entry 37% cover 59%" } as CSSProperties}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Divya Menon"}
                        </b>
                        <span style={{ color: "#6B6B6B" }}>
                          {"Replied, not now"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="knowledge" className="vg-tpanel" style={{ viewTimelineName: "--vg-t6", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"07 · Knowledge"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Only says what is true about your business"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"It learns from your website, files and notes, shows how much it can answer, and lists the questions it could not, so you can fill the gaps."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ flex: "0 0 220px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "20px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                      <span style={{ position: "relative", display: "inline-flex" }}>
                        <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                          <circle cx="60" cy="60" r="48" fill="none" stroke="#E6E6EA" strokeWidth="10">
                          </circle>
                          <circle className="vg-ring" cx="60" cy="60" r="48" fill="none" stroke="#10B981" strokeWidth="10" strokeLinecap="round" pathLength="1" strokeDasharray="0.92 1" transform="rotate(-90 60 60)" style={{ animationRange: "entry 14% cover 36%" } as CSSProperties}>
                          </circle>
                        </svg>
                        <span style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
                          <span className="vg-num" role="img" aria-label="92" style={{ "--to": "92" } as CSSProperties}>
                          </span>
                          {"%"}
                        </span>
                      </span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B", textAlign: "center" }}>
                        {"of what callers ask, it can answer"}
                      </span>
                    </div>
                    <div style={{ flex: "1 1 300px", minWidth: "0", padding: "14px 18px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                      <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                        {"Where it learns from"}
                      </span>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px solid #F0F0F3", fontSize: "13.5px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7.5">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Your website"}
                        </span>
                        <span style={{ color: "#8A8A8A" }}>
                          {"24 pages read"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px solid #F0F0F3", fontSize: "13.5px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7.5">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Price list.pdf"}
                        </span>
                        <span style={{ color: "#8A8A8A" }}>
                          {"uploaded 4 Nov"}
                        </span>
                      </div>
                      <div className="vg-slide" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px solid #F0F0F3", fontSize: "13.5px", animationRange: "entry 27% cover 49%" } as CSSProperties}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7.5">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          {"Opening hours"}
                        </span>
                        <span style={{ color: "#8A8A8A" }}>
                          {"updated today"}
                        </span>
                      </div>
                      <span style={{ display: "block", marginTop: "14px", fontSize: "12.5px", color: "#8A8A8A" }}>
                        {"Asked, but it could not answer"}
                      </span>
                      <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="vg-pop" style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px dashed #C9C9D1", fontSize: "13px", color: "#3D3D3D", animationRange: "entry 32% cover 54%" } as CSSProperties} data-s="s1">
                          {"+ Parking for vans"}
                        </span>
                        <span className="vg-pop" style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px dashed #C9C9D1", fontSize: "13px", color: "#3D3D3D", animationRange: "entry 37% cover 59%" } as CSSProperties} data-s="s1">
                          {"+ Lift access"}
                        </span>
                        <span className="vg-pop" style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px dashed #C9C9D1", fontSize: "13px", color: "#3D3D3D", animationRange: "entry 42% cover 64%" } as CSSProperties} data-s="s1">
                          {"+ Student discount"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
              <div id="insights" className="vg-tpanel" style={{ viewTimelineName: "--vg-t7", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"08 · Insights"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"See what happened while you were busy"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Calls and chats answered, missed calls saved, your busiest hours and how often it needed you."}
                </p>
                <div className="vg-zoomc" style={{ marginTop: "32px", borderRadius: "24px", background: "linear-gradient(180deg, #F7F7F8 0%, #F0F1F3 100%)", padding: "28px", overflow: "hidden" }}>
                  <div className="vg-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                    <div className="vg-pop" style={{ display: "block", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 12% cover 34%" } as CSSProperties}>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "30px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        <span className="vg-num" role="img" aria-label="486" style={{ "--to": "486" } as CSSProperties}>
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                        {"calls answered"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "block", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 17% cover 39%" } as CSSProperties}>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "30px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        <span className="vg-num" role="img" aria-label="112" style={{ "--to": "112" } as CSSProperties}>
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                        {"missed calls saved"}
                      </span>
                    </div>
                    <div className="vg-pop" style={{ display: "block", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px", animationRange: "entry 22% cover 44%" } as CSSProperties}>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "30px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        <span className="vg-num vg-pct" role="img" aria-label="86" style={{ "--to": "86" } as CSSProperties}>
                        </span>
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#6B6B6B" }}>
                        {"handled without you"}
                      </span>
                    </div>
                  </div>
                  <div style={{ marginTop: "12px", padding: "16px 18px", background: "#FFFFFF", border: "1px solid #E8E8EC", borderRadius: "16px" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#8A8A8A" }}>
                      <span>
                        {"Calls and chats per day"}
                      </span>
                      <span>
                        {"Busiest: Saturday, 10 AM"}
                      </span>
                    </span>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "120px", marginTop: "14px" }}>
                      <span className="vg-growbar" style={{ flex: "1", height: "32%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 10% cover 34%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "44%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 12% cover 36%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "38%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 14% cover 38%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "52%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 16% cover 40%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "47%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 18% cover 42%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "60%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 20% cover 44%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "72%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 22% cover 46%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "58%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 24% cover 48%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "66%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 26% cover 50%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "80%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 28% cover 52%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "94%", borderRadius: "5px 5px 2px 2px", background: "#10B981", transformOrigin: "bottom", animationRange: "entry 30% cover 54%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "70%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 32% cover 56%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "62%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 34% cover 58%" } as CSSProperties}>
                      </span>
                      <span className="vg-growbar" style={{ flex: "1", height: "76%", borderRadius: "5px 5px 2px 2px", background: "#DCDDE3", transformOrigin: "bottom", animationRange: "entry 36% cover 60%" } as CSSProperties}>
                      </span>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
              {"How it compares"}
            </span>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"More than an answering"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                  {"machine."}
                </span>
              </span>
            </h2>
            <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "520px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
              {"What you usually get when you cannot pick up, and what Vegham does instead."}
            </p>
            <div style={{ marginTop: "40px", overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "0 12px 16px 0", textAlign: "left", fontWeight: "400", fontSize: "13.5px", color: "#6B6B6B" }}>
                    </th>
                    <th style={{ padding: "0 12px 16px", textAlign: "center", fontWeight: "400", fontSize: "13.5px", color: "#6B6B6B", width: "16%" }}>
                      {"Voicemail"}
                    </th>
                    <th style={{ padding: "0 12px 16px", textAlign: "center", fontWeight: "400", fontSize: "13.5px", color: "#6B6B6B", width: "16%" }}>
                      {"Phone menu"}
                    </th>
                    <th style={{ padding: "0 12px 16px", textAlign: "center", fontWeight: "400", fontSize: "13.5px", color: "#6B6B6B", width: "16%" }}>
                      {"Simple chatbot"}
                    </th>
                    <th style={{ padding: "0 12px 16px", textAlign: "center", fontWeight: "600", fontSize: "15px", color: "#141414", width: "16%" }}>
                      {"Vegham"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Picks up every call"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Takes a message"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Press 1, press 2"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Chat only"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Talks like a person"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Partly"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Speaks the caller’s language"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"A few, by menu"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Partly"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Remembers past conversations"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Calls and chats in one place"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Hands over with a summary"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Transfers the call"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                        {"Sometimes"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 12px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px" }}>
                      {"Follows up later"}
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px", textAlign: "center", borderTop: "1px solid #ECECEF", background: "rgba(16,185,129,.06)" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px", background: "#FFFFFF" }} data-s="s12">
          <div className="vg-zoomc" style={{ position: "relative", overflow: "hidden", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "96px 40px", textAlign: "center" }} data-s="s14">
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit", opacity: "1" }}>
              <div className="vg-aur1" style={{ position: "absolute", left: "-15%", top: "-45%", width: "130%", height: "95%", filter: "blur(60px)", opacity: ".9", background: "radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,0.61), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,0.50), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,0.55), transparent 70%)" }}>
              </div>
              <div className="vg-aur2" style={{ position: "absolute", left: "-10%", top: "-30%", width: "120%", height: "80%", filter: "blur(70px)", opacity: ".8", background: "radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,0.44), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,0.39), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,0.24), transparent 70%)" }}>
              </div>
              <div className="vg-curtain" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "65%", opacity: ".35", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(18,20,31,0) 30%, rgba(18,20,31,.9) 100%)" }}>
              </div>
            </div>
            <h2 style={{ position: "relative", margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.045em" }} data-s="s4">
              {"Hear it for yourself."}
            </h2>
            <p style={{ position: "relative", margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"Set it up in minutes, then call it from your own phone."}
            </p>
            <div style={{ position: "relative", marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Start free"}
              </Link>
              <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Book a demo"}
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
