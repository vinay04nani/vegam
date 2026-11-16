// Ported from design board LandingV2 (Memory) by design/tools/port.py. Sample data is inline.
import type { CSSProperties } from "react";

export default function Memory() {
  return (
      <section id="memory" className="vg-pinwrap vg-pin-mom" style={{ background: "#F7F7F8", viewTimelineName: "--vg-mom" } as CSSProperties}>
        <div className="vg-sticky">
          <div className="vg-pinpad" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", boxSizing: "border-box" }} data-s="s10 s11">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
              <div>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                  {"Moments it handles"}
                </span>
                <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "48px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s3">
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block" }}>
                      {"Every kind of call."}
                    </span>
                  </span>
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                      {"Handled the way you would."}
                    </span>
                  </span>
                </h2>
              </div>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "420px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"New callers, regulars, unhappy customers, other languages and late-night messages. Here is what Vegham does with each."}
              </p>
            </div>
            <div className="vg-molabels" style={{ marginTop: "36px", display: "flex", gap: "28px", overflow: "hidden" }}>
              <span className="vg-molabel" style={{ padding: "8px 0", borderBottom: "2px solid #E6E6EA", fontSize: "14px", color: "#141414", whiteSpace: "nowrap", animationRange: "contain 0% contain 14%" } as CSSProperties}>
                {"New caller"}
              </span>
              <span className="vg-molabel" style={{ padding: "8px 0", borderBottom: "2px solid #E6E6EA", fontSize: "14px", color: "#141414", whiteSpace: "nowrap", animationRange: "contain 14% contain 35%" } as CSSProperties}>
                {"Returning caller"}
              </span>
              <span className="vg-molabel" style={{ padding: "8px 0", borderBottom: "2px solid #E6E6EA", fontSize: "14px", color: "#141414", whiteSpace: "nowrap", animationRange: "contain 35% contain 56%" } as CSSProperties}>
                {"Upset customer"}
              </span>
              <span className="vg-molabel" style={{ padding: "8px 0", borderBottom: "2px solid #E6E6EA", fontSize: "14px", color: "#141414", whiteSpace: "nowrap", animationRange: "contain 56% contain 77%" } as CSSProperties}>
                {"Another language"}
              </span>
              <span className="vg-molabel" style={{ padding: "8px 0", borderBottom: "2px solid #E6E6EA", fontSize: "14px", color: "#141414", whiteSpace: "nowrap", animationRange: "contain 77% contain 98%" } as CSSProperties}>
                {"After hours"}
              </span>
            </div>
            <div aria-hidden="true" style={{ height: "2px", borderRadius: "2px", background: "#E6E6EA", overflow: "hidden" }}>
              <span className="vg-mofill" style={{ display: "block", height: "100%", background: "linear-gradient(90deg, #10B981 0%, #0EA5A4 35%, #3B6CF6 70%, #7C3AED 100%)", transformOrigin: "left", animationRange: "contain 4% contain 92%" } as CSSProperties}>
              </span>
            </div>
            <div className="vg-moview" style={{ marginTop: "28px" }}>
              <div className="vg-motrack" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", animationRange: "contain 4% contain 92%" } as CSSProperties}>
                <div className="vg-mocard" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", boxSizing: "border-box", animationRange: "contain 0% contain 4%" } as CSSProperties}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                          </path>
                        </svg>
                      </span>
                      <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.02em" }} data-s="s15">
                        {"New caller"}
                      </b>
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", whiteSpace: "nowrap" }}>
                      {"Phone call · 8:10 AM"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.45", minHeight: "150px" }}>
                    <span className="vg-mobub" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#F1F1F4", color: "#1F1F1F", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", animationRange: "contain 0% contain 1%" } as CSSProperties}>
                      {"How much is a first visit?"}
                    </span>
                    <span className="vg-mobub" style={{ alignSelf: "flex-start", maxWidth: "88%", background: "#16182A", color: "#FFFFFF", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", animationRange: "contain 0% contain 3%" } as CSSProperties}>
                      {"It’s ₹800. Saturday 10 AM is free, shall I hold it and send the details on WhatsApp?"}
                    </span>
                  </span>
                  <span className="vg-moout" style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "13px", fontWeight: "500", animationRange: "contain 3% contain 7%" } as CSSProperties} data-s="s1">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                    {"Answered from your price list"}
                  </span>
                </div>
                <div className="vg-mocard" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", boxSizing: "border-box", animationRange: "contain 13% contain 25%" } as CSSProperties}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                          </path>
                          <path d="M9.5 21h5">
                          </path>
                        </svg>
                      </span>
                      <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.02em" }} data-s="s15">
                        {"Returning caller"}
                      </b>
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", whiteSpace: "nowrap" }}>
                      {"Phone call · 2:15 PM"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.45", minHeight: "150px" }}>
                    <span className="vg-mobub" style={{ alignSelf: "flex-start", maxWidth: "88%", background: "#16182A", color: "#FFFFFF", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", animationRange: "contain 16% contain 20%" } as CSSProperties}>
                      {"Hi Rohan, good to hear from you again. Still thinking about the weekend sessions?"}
                    </span>
                    <span className="vg-mobub" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#F1F1F4", color: "#1F1F1F", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", animationRange: "contain 20% contain 24%" } as CSSProperties}>
                      {"Yes! Is Saturday morning open?"}
                    </span>
                  </span>
                  <span className="vg-moout" style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "13px", fontWeight: "500", animationRange: "contain 24% contain 28%" } as CSSProperties} data-s="s1">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                    {"Remembered him after six months"}
                  </span>
                </div>
                <div className="vg-mocard" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", boxSizing: "border-box", animationRange: "contain 34% contain 46%" } as CSSProperties}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12h11">
                          </path>
                          <path d="M11 7l5 5-5 5">
                          </path>
                          <path d="M20 5v14">
                          </path>
                        </svg>
                      </span>
                      <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.02em" }} data-s="s15">
                        {"Upset customer"}
                      </b>
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", whiteSpace: "nowrap" }}>
                      {"WhatsApp · 4:30 PM"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.45", minHeight: "150px" }}>
                    <span className="vg-mobub" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#F1F1F4", color: "#1F1F1F", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", animationRange: "contain 37% contain 41%" } as CSSProperties}>
                      {"This is the second time my booking was wrong."}
                    </span>
                    <span className="vg-mobub" style={{ alignSelf: "flex-start", maxWidth: "88%", background: "#16182A", color: "#FFFFFF", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", animationRange: "contain 41% contain 45%" } as CSSProperties}>
                      {"I’m really sorry. I’m getting the owner for you right now."}
                    </span>
                  </span>
                  <span className="vg-moout" style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "13px", fontWeight: "500", animationRange: "contain 45% contain 49%" } as CSSProperties} data-s="s1">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                    {"Handed to you with a summary"}
                  </span>
                </div>
                <div className="vg-mocard" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", boxSizing: "border-box", animationRange: "contain 55% contain 67%" } as CSSProperties}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="8.5">
                          </circle>
                          <path d="M3.5 12h17">
                          </path>
                          <path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z">
                          </path>
                        </svg>
                      </span>
                      <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.02em" }} data-s="s15">
                        {"Another language"}
                      </b>
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", whiteSpace: "nowrap" }}>
                      {"Phone call · 6:30 PM"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.45", minHeight: "150px" }}>
                    <span className="vg-mobub" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#F1F1F4", color: "#1F1F1F", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", animationRange: "contain 58% contain 62%" } as CSSProperties}>
                      {"Hindi mein baat kar sakte hain?"}
                    </span>
                    <span className="vg-mobub" style={{ alignSelf: "flex-start", maxWidth: "88%", background: "#16182A", color: "#FFFFFF", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", animationRange: "contain 62% contain 66%" } as CSSProperties}>
                      {"Bilkul! Bataiye, main kaise madad karoon?"}
                    </span>
                  </span>
                  <span className="vg-moout" style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "13px", fontWeight: "500", animationRange: "contain 66% contain 70%" } as CSSProperties} data-s="s1">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                    {"Switched to Hindi"}
                  </span>
                </div>
                <div className="vg-mocard" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", boxSizing: "border-box", animationRange: "contain 76% contain 88%" } as CSSProperties}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "11px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="8.5">
                          </circle>
                          <path d="M12 7.5V12l3 2">
                          </path>
                        </svg>
                      </span>
                      <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.02em" }} data-s="s15">
                        {"After hours"}
                      </b>
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A8A8A", whiteSpace: "nowrap" }}>
                      {"Instagram · 11:42 PM"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", lineHeight: "1.45", minHeight: "150px" }}>
                    <span className="vg-mobub" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#F1F1F4", color: "#1F1F1F", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", animationRange: "contain 79% contain 83%" } as CSSProperties}>
                      {"Are you open tomorrow?"}
                    </span>
                    <span className="vg-mobub" style={{ alignSelf: "flex-start", maxWidth: "88%", background: "#16182A", color: "#FFFFFF", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", animationRange: "contain 83% contain 87%" } as CSSProperties}>
                      {"Yes, from 9 AM. Want me to save you a spot?"}
                    </span>
                  </span>
                  <span className="vg-moout" style={{ display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "13px", fontWeight: "500", animationRange: "contain 87% contain 91%" } as CSSProperties} data-s="s1">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                    {"Replied at 11:42 PM and added a follow-up"}
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
      </section>
  );
}
