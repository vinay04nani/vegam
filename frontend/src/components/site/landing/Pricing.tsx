// Ported from design board LandingV2 (Pricing) by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";

export default function Pricing() {
  return (
      <section id="pricing" style={{ background: "#F7F7F8", viewTimelineName: "--vg-sec-pricing" } as CSSProperties}>
        <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px" }} data-s="s9 s11">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            <div>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Pricing"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s4">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Simple pricing."}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"Start free."}
                  </span>
                </span>
              </h2>
            </div>
            <Link href="/pricing/" style={{ display: "inline-flex", alignItems: "center", padding: "0 24px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#1F1F1F", textDecoration: "none", fontWeight: "500", height: "44px", background: "#FFFFFF" }} data-s="s1">
              {"Compare all plans →"}
            </Link>
          </div>
          <div className="vg-g3" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
            <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414" }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", fontWeight: "500" }}>
                {"Starter"}
              </span>
              <span style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontSize: "40px", letterSpacing: "-0.04em", lineHeight: "1.1" }} data-s="s6">
                {"₹2,999"}
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#5C5C5C" }}>
                  {" / month"}
                </span>
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "14.5px", color: "#5C5C5C" }}>
                {"Chat on your channels, with memory"}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "22px", paddingTop: "22px", borderTop: "1px solid #F0F0F3" }}>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"WhatsApp, Instagram and the link"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Remembers every person"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Hand-over to your team"}
                </span>
              </span>
            </div>
            <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "#16182A", border: "1px solid transparent", color: "#FFFFFF" }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", fontWeight: "500" }}>
                {"Growth"}
                <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(255,255,255,.12)", fontSize: "12px" }} data-s="s1">
                  {"Most chosen"}
                </span>
              </span>
              <span style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontSize: "40px", letterSpacing: "-0.04em", lineHeight: "1.1" }} data-s="s6">
                {"₹7,999"}
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#C3C6DA" }}>
                  {" / month"}
                </span>
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "14.5px", color: "#C3C6DA" }}>
                {"Adds the voice agent on calls"}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "22px", paddingTop: "22px", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Everything in Starter"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Phone calls and voice on the link"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Follow-ups and insights"}
                </span>
              </span>
            </div>
            <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414" }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", fontWeight: "500" }}>
                {"Pro"}
              </span>
              <span style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontSize: "40px", letterSpacing: "-0.04em", lineHeight: "1.1" }} data-s="s6">
                {"from ₹19,999"}
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", letterSpacing: "0", color: "#5C5C5C" }}>
                  {" / month"}
                </span>
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "14.5px", color: "#5C5C5C" }}>
                {"For larger teams and more numbers"}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "22px", paddingTop: "22px", borderTop: "1px solid #F0F0F3" }}>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Everything in Growth"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"More numbers and team seats"}
                </span>
                <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
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
          <p style={{ margin: "20px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
            {"30 days free on any plan · Prices exclude taxes · WhatsApp and call charges at cost"}
          </p>
        </div>
      </section>
  );
}
