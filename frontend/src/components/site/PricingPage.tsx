// Ported from design board Pricing by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function PricingPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <div className="vg-heroout">
              <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
                {"Pricing"}
              </span>
              <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "940px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
                {"Simple pricing."}
                <br />
                <span style={{ color: "#8A8A8A" }}>
                  {"Start free."}
                </span>
              </h1>
              <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
                {"Every plan includes long memory. Pick the channels and voice you need now, and change plan whenever you like."}
              </p>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 40px" }} data-s="s11">
            <div className="vg-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", alignItems: "start" }}>
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414", textAlign: "left", animationRange: "entry 4% cover 30%" } as CSSProperties}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "17px", fontWeight: "500" }}>
                  {"Starter"}
                </span>
                <span style={{ display: "block", marginTop: "20px", fontFamily: "var(--font-tight), sans-serif", fontSize: "46px", letterSpacing: "-0.04em", lineHeight: "1.1" }}>
                  {"₹2,999"}
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#5C5C5C" }}>
                    {" / month"}
                  </span>
                </span>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "#5C5C5C" }}>
                  {"Chat on your channels, with memory"}
                </span>
                <Link href="/signup/" style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", height: "48px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Start free"}
                </Link>
                <span style={{ display: "flex", flexDirection: "column", gap: "11px", marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #F0F0F3" }}>
                  <span className="vg-slide" style={{ animationRange: "entry 16% cover 36%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"WhatsApp, Instagram, Messenger and Telegram"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 20% cover 40%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"A link for your website"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 24% cover 44%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Remembers every person"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 28% cover 48%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Hand-over to your team"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 32% cover 52%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"1 team seat"}
                  </span>
                </span>
              </div>
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#16182A", border: "1px solid transparent", color: "#FFFFFF", textAlign: "left", animationRange: "entry 16% cover 42%" } as CSSProperties}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "17px", fontWeight: "500" }}>
                  {"Growth"}
                  <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(255,255,255,.12)", fontSize: "12px" }} data-s="s1">
                    {"Most chosen"}
                  </span>
                </span>
                <span style={{ display: "block", marginTop: "20px", fontFamily: "var(--font-tight), sans-serif", fontSize: "46px", letterSpacing: "-0.04em", lineHeight: "1.1" }}>
                  {"₹7,999"}
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#C3C6DA" }}>
                    {" / month"}
                  </span>
                </span>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "#C3C6DA" }}>
                  {"Adds the voice agent on calls"}
                </span>
                <Link href="/signup/" style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", height: "48px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Start free"}
                </Link>
                <span style={{ display: "flex", flexDirection: "column", gap: "11px", marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                  <span className="vg-slide" style={{ animationRange: "entry 16% cover 36%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Everything in Starter"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 20% cover 40%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Phone calls and voice on the link"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 24% cover 44%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Choice of voices, all languages"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 28% cover 48%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Follow-ups and full insights"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 32% cover 52%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"3 team seats"}
                  </span>
                </span>
              </div>
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414", textAlign: "left", animationRange: "entry 10% cover 36%" } as CSSProperties}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "17px", fontWeight: "500" }}>
                  {"Pro"}
                </span>
                <span style={{ display: "block", marginTop: "20px", fontFamily: "var(--font-tight), sans-serif", fontSize: "46px", letterSpacing: "-0.04em", lineHeight: "1.1" }}>
                  {"from ₹19,999"}
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#5C5C5C" }}>
                    {" / month"}
                  </span>
                </span>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "#5C5C5C" }}>
                  {"For larger teams and more numbers"}
                </span>
                <Link href="/book-demo/" style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", height: "48px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Talk to us"}
                </Link>
                <span style={{ display: "flex", flexDirection: "column", gap: "11px", marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #F0F0F3" }}>
                  <span className="vg-slide" style={{ animationRange: "entry 16% cover 36%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Everything in Growth"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 20% cover 40%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"More phone numbers"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 24% cover 44%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"10 or more team seats"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 28% cover 48%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Memory kept up to 2 years"}
                  </span>
                  <span className="vg-slide" style={{ animationRange: "entry 32% cover 52%", display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Priority support"}
                  </span>
                </span>
              </div>
            </div>
            <p style={{ margin: "22px 0 0", textAlign: "center", fontSize: "14px", color: "#6B6B6B" }}>
              {"30 days free on any plan · Prices exclude taxes · Cancel any time"}
            </p>
          </div>
        </section>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
              {"Compare"}
            </span>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"Everything,"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                  {"side by side."}
                </span>
              </span>
            </h2>
            <div style={{ marginTop: "48px", overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <th style={{ padding: "0 16px 18px 0", textAlign: "left", fontWeight: "400", fontSize: "14px", color: "#6B6B6B" }}>
                      {"Compare plans"}
                    </th>
                    <th style={{ padding: "0 16px 18px", width: "18%", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "18px", letterSpacing: "-0.02em" }} data-s="s16">
                      {"Starter"}
                    </th>
                    <th style={{ padding: "0 16px 18px", width: "18%", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "18px", letterSpacing: "-0.02em" }} data-s="s16">
                      {"Growth"}
                    </th>
                    <th style={{ padding: "0 16px 18px", width: "18%", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "18px", letterSpacing: "-0.02em" }} data-s="s16">
                      {"Pro"}
                    </th>
                  </tr>
                  <tr className="vg-rv">
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Channels"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"WhatsApp"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Instagram and Messenger"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Telegram"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Link and website chat"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Voice"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Phone calls"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Voice on your link"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Voice notes on WhatsApp and Telegram"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Choice of voices"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Memory and languages"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Remembers every person"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"One person across channels"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Keep memory for"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"6 months"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"12 months"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Up to 2 years"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Languages"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"2"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"All"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"All"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Working with you"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Hand-over with summary"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Follow-ups"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span className="vg-pop" style={{ display: "inline-flex", color: "#10B981", animationRange: "entry 30% cover 50%" } as CSSProperties}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Insights"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Basics"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Full"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Full"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Team seats"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"1"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"3"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"10 or more"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Phone numbers"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"1"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"3 or more"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Support"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Email"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Email and chat"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      {"Priority"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
              {"How billing works"}
            </span>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"No surprises"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                  {"on your bill."}
                </span>
              </span>
            </h2>
            <div className="vg-g3" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "40px" }}>
              <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
                <span style={{ color: "#10B981" }}>
                  <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle pathLength="1" cx="12" cy="12" r="8.5">
                    </circle>
                    <path pathLength="1" d="M12 7.5V12l3 2">
                    </path>
                  </svg>
                </span>
                <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                  {"Free for 30 days"}
                </b>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                  {"Try any plan in full. No charge until the 30 days are over, and you can cancel before then."}
                </span>
              </div>
              <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
                <span style={{ color: "#10B981" }}>
                  <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path pathLength="1" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                    </path>
                  </svg>
                </span>
                <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                  {"Call and WhatsApp charges at cost"}
                </b>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                  {"Phone minutes and WhatsApp’s own message fees are passed on with no mark-up, and shown separately on your bill."}
                </span>
              </div>
              <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
                <span style={{ color: "#10B981" }}>
                  <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path pathLength="1" d="M12 3.5l7 2.5v5.5c0 4.3-2.9 7.4-7 9-4.1-1.6-7-4.7-7-9V6z">
                    </path>
                    <path pathLength="1" d="M9 12l2.2 2.2L15.2 10">
                    </path>
                  </svg>
                </span>
                <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                  {"Pay by card"}
                </b>
                <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                  {"Payments are handled by Stripe. We never see or store your card number."}
                </span>
              </div>
            </div>
          </div>
        </section>
        <div style={{ padding: "112px 0 0", background: "#FFFFFF" }}>
        </div>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 112px", display: "flex", flexWrap: "wrap", gap: "40px 72px" }} data-s="s11 s12">
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Pricing"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"questions"}
                  </span>
                </span>
              </h2>
              <p style={{ margin: "20px 0 0", fontSize: "15.5px", color: "#5C5C5C" }}>
                {"Something else? "}
                <Link href="/contact/" style={{ color: "#141414" }}>
                  {"Talk to us"}
                </Link>
                {"."}
              </p>
            </div>
            <div style={{ flex: "2 1 560px", minWidth: "0", borderBottom: "1px solid #E8E8EC" }}>
              <details open className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"What happens after the 30 free days?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"You choose a plan and add a card. If you do nothing, your agent pauses and nothing is charged."}
                </p>
              </details>
              <details className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Can I change plan later?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"Yes, at any time. Moving up takes effect straight away; moving down takes effect from your next bill."}
                </p>
              </details>
              <details className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"What are the extra charges?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"Only what the phone company and WhatsApp charge for calls and messages. We pass those on at cost and show them separately."}
                </p>
              </details>
              <details className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Is memory included in every plan?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"Yes. Remembering people is the heart of Vegham, so it is in every plan. Plans differ in how long memory is kept."}
                </p>
              </details>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px", background: "#FFFFFF" }} data-s="s12">
          <div className="vg-zoomc" style={{ position: "relative", overflow: "hidden", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "96px 40px", textAlign: "center" }} data-s="s14">
            <div aria-hidden="true" className="vg-brighten" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit", opacity: "1" }}>
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
              {"Never miss a customer"}
              <br />
              {"again."}
            </h2>
            <p style={{ position: "relative", margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"Set up your agent in minutes and make your first test call today."}
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
