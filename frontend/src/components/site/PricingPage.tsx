// Ported from design board Pricing by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import InnerHeader from "@/components/site/InnerHeader";

export default function PricingPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
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
        </section>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 40px" }} data-s="s11">
            <div className="vg-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", alignItems: "start" }}>
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414", textAlign: "left" }}>
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
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"WhatsApp, Instagram, Messenger and Telegram"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"A link for your website"}
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
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
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
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#16182A", border: "1px solid transparent", color: "#FFFFFF", textAlign: "left" }}>
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
                    {"Choice of voices, all languages"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" }}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Follow-ups and full insights"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#C3C6DA" }}>
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
              <div className="vg-rv" style={{ padding: "32px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", color: "#141414", textAlign: "left" }}>
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
                    {"More phone numbers"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"10 or more team seats"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    <span style={{ flex: "none", marginTop: "2px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Memory kept up to 2 years"}
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
                  <tr>
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Channels"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"WhatsApp"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Instagram and Messenger"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Telegram"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Link and website chat"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Voice"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Phone calls"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Voice on your link"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Voice notes on WhatsApp and Telegram"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Choice of voices"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Memory and languages"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Remembers every person"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"One person across channels"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
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
                  <tr>
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
                  <tr>
                    <td colSpan={4} style={{ padding: "28px 0 10px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B" }}>
                      {"Working with you"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Hand-over with summary"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 16px 14px 0", fontSize: "15px", borderTop: "1px solid #F0F0F3" }}>
                      {"Follow-ups"}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: "14.5px", color: "#3D3D3D", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
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
                  <tr>
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
                  <tr>
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
                  <tr>
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
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5">
                    </circle>
                    <path d="M12 7.5V12l3 2">
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
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
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
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3.5l7 2.5v5.5c0 4.3-2.9 7.4-7 9-4.1-1.6-7-4.7-7-9V6z">
                    </path>
                    <path d="M9 12l2.2 2.2L15.2 10">
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
        <footer style={{ borderTop: "1px solid #EDEDF0", background: "#FFFFFF", overflow: "hidden" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 0" }} data-s="s11">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px 64px", paddingBottom: "56px", borderBottom: "1px solid #EDEDF0" }}>
              <div style={{ flex: "1 1 320px", maxWidth: "380px" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "26px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                  <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                    {"vegham"}
                  </Link>
                </span>
                <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#5C5C5C" }}>
                  {"The AI voice agent that answers your calls and messages, and remembers every person it talks to."}
                </p>
              </div>
              <div style={{ flex: "1 1 380px", maxWidth: "460px" }} data-s="s24">
                <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "500", color: "#141414" }}>
                  {"Notes on never missing a customer"}
                </h3>
                <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
                  {"One short email a month. No spam, unsubscribe anytime."}
                </p>
                <form style={{ margin: "16px 0 0", display: "flex", gap: "8px" }}>
                  <label htmlFor="ft-em" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                    {"Email address"}
                  </label>
                  <input id="ft-em" type="email" placeholder="you@business.com" style={{ flex: "1", minWidth: "0", height: "44px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "999px", font: "inherit", fontSize: "14.5px" }} data-s="s1" />
                  <button type="submit" style={{ flex: "none", height: "44px", padding: "0 20px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontSize: "14.5px", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                    {"Subscribe"}
                  </button>
                </form>
              </div>
            </div>
            <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "40px 32px", padding: "56px 0" }}>
              <div style={{ flex: "1 1 140px", minWidth: "130px" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: "13px", fontWeight: "500", color: "#141414" }}>
                  {"Product"}
                </h3>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <li>
                    <Link href="/product/#voice" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Voice agent"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#memory" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Long memory"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#languages" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Languages"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#follow-ups" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Follow-ups"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#hand-over" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Hand-over"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#insights" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Insights"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 140px", minWidth: "130px" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: "13px", fontWeight: "500", color: "#141414" }}>
                  {"Channels"}
                </h3>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Phone calls"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"WhatsApp"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Instagram"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Messenger"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Telegram"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/#channels" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Link and website"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 140px", minWidth: "130px" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: "13px", fontWeight: "500", color: "#141414" }}>
                  {"Resources"}
                </h3>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <li>
                    <Link href="/how-it-works/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"How it works"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Pricing"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Help centre"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/security/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Security and privacy"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 140px", minWidth: "130px" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: "13px", fontWeight: "500", color: "#141414" }}>
                  {"Company"}
                </h3>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <li>
                    <Link href="/company/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"About"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Careers"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Contact"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 140px", minWidth: "130px" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: "13px", fontWeight: "500", color: "#141414" }}>
                  {"Legal"}
                </h3>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  <li>
                    <Link href="/privacy/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Privacy policy"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms/" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
                      {"Terms of service"}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "24px 0", borderTop: "1px solid #EDEDF0", fontSize: "13.5px", color: "#6B6B6B" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 20px" }}>
                <span>
                  {"© 2026 Vegham. All rights reserved."}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  {"Made in India 🇮🇳 for businesses everywhere"}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 14px", border: "1px solid #E8E8EC", borderRadius: "12px", color: "#3D3D3D" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9">
                    </circle>
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18">
                    </path>
                  </svg>
                  {"English · ₹ INR"}
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="2">
                    <path d="M6 9l6 6 6-6">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "8px" }}>
                  <a href="#" aria-label="Vegham on LinkedIn" className="vg-soc" style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", border: "1px solid #E8E8EC", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#5C5C5C">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                      </path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Vegham on X" className="vg-soc" style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", border: "1px solid #E8E8EC", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#5C5C5C">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z">
                      </path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Vegham on Instagram" className="vg-soc" style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", border: "1px solid #E8E8EC", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#5C5C5C">
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                      </path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Vegham on YouTube" className="vg-soc" style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", border: "1px solid #E8E8EC", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#5C5C5C">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z">
                      </path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Vegham on WhatsApp" className="vg-soc" style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", border: "1px solid #E8E8EC", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#5C5C5C">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                      </path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div aria-hidden="true" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "clamp(120px, 21vw, 300px)", lineHeight: ".95", letterSpacing: "-0.07em", paddingBottom: "8px", textAlign: "center", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 20%, #3B6CF6 45%, #7C3AED 68%, #DB2777 88%, #10B981 100%)", backgroundSize: "220% 100%", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitMaskImage: "linear-gradient(180deg, #000 25%, rgba(0,0,0,.35) 70%, transparent 100%)", maskImage: "linear-gradient(180deg, #000 25%, rgba(0,0,0,.35) 70%, transparent 100%)", userSelect: "none" }} className="vg-aurtext">
            {"vegham"}
          </div>
        </footer>
      </div>
    </>
  );
}
