// Ported from design board LandingV2 (Memory) by design/tools/port.py. Sample data is inline.
import type { CSSProperties } from "react";

export default function Memory() {
  return (
      <section id="memory" className="vg-pinwrap vg-pin-mem" style={{ padding: "0 16px", viewTimelineName: "--vg-mem" } as CSSProperties}>
        <div className="vg-sticky">
          <div style={{ position: "relative", overflow: "hidden", width: "100%", maxWidth: "1408px", margin: "0 auto", borderRadius: "32px", background: "#12141F", color: "#FFFFFF" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit", opacity: "0.85" }}>
              <div className="vg-aur1" style={{ position: "absolute", left: "-15%", top: "-45%", width: "130%", height: "95%", filter: "blur(60px)", opacity: ".9", background: "radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,0.61), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,0.50), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,0.55), transparent 70%)" }}>
              </div>
              <div className="vg-aur2" style={{ position: "absolute", left: "-10%", top: "-30%", width: "120%", height: "80%", filter: "blur(70px)", opacity: ".8", background: "radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,0.44), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,0.39), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,0.24), transparent 70%)" }}>
              </div>
              <div className="vg-curtain" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "65%", opacity: ".35", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(18,20,31,0) 30%, rgba(18,20,31,.9) 100%)" }}>
              </div>
            </div>
            <div className="vg-pinpad" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "112px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 72px" }} data-s="s9 s11">
              <div style={{ flex: "1 1 440px", minWidth: "0" }}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A9AECB" }}>
                  {"Long memory"}
                </span>
                <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#FFFFFF" }} data-s="s4">
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block" }}>
                      {"It remembers every person."}
                    </span>
                  </span>
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block", color: "#8C90A8" }}>
                      {"Even six months later."}
                    </span>
                  </span>
                </h2>
                <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "500px", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
                  {"Most assistants start from zero on every call. Vegham keeps the thread: who someone is, what they asked, and where you left off."}
                </p>
                <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "18px", maxWidth: "480px" }}>
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 30% contain 42%" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Who they are"}
                      </b>
                      <span style={{ fontSize: "15px", color: "#B4B8CC" }}>
                        {"Name, language and how they like to be contacted."}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 44% contain 58%" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"What they wanted"}
                      </b>
                      <span style={{ fontSize: "15px", color: "#B4B8CC" }}>
                        {"Questions, preferences and anything left unfinished."}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 70% contain 82%" } as CSSProperties}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#3DD68C" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"One person, not five"}
                      </b>
                      <span style={{ fontSize: "15px", color: "#B4B8CC" }}>
                        {"A call and a WhatsApp from the same number are the same customer."}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 460px", minWidth: "0" }}>
                <div style={{ position: "relative", padding: "28px", borderRadius: "24px", background: "rgba(18,20,31,.72)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                    <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "50%", background: "rgba(255,255,255,.08)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-tight), sans-serif", fontSize: "18px" }} data-s="s16">
                      {"R"}
                    </span>
                    <span style={{ flex: "1", minWidth: "0" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "16px" }}>
                        {"Rohan Mehta"}
                      </b>
                      <span style={{ fontSize: "13px", color: "#8C90A8" }}>
                        {"Incoming call · +91 98•• ••21"}
                      </span>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <span style={{ display: "block", fontSize: "12px", color: "#8C90A8" }}>
                        {"Last spoke"}
                      </span>
                      <b style={{ fontWeight: "500", fontSize: "15px", color: "#3DD68C" }}>
                        <span className="vg-mdays" role="img" aria-label="184" style={{ "--to": "184", animationRange: "contain 4% contain 28%" } as CSSProperties}>
                        </span>
                        {" days ago"}
                      </b>
                    </span>
                  </div>
                  <span style={{ display: "block", marginTop: "20px", fontSize: "11.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "#8C90A8" }}>
                    {"What Vegham remembers"}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    <span className="vg-mchip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", fontSize: "13.5px", color: "#FFFFFF", animationRange: "contain 30% contain 36%" } as CSSProperties}>
                      <span style={{ color: "#3DD68C", display: "inline-flex" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8.5" r="3.5">
                          </circle>
                          <path d="M5 20a7 7 0 0 1 14 0">
                          </path>
                        </svg>
                      </span>
                      {"Rohan Mehta"}
                      <span style={{ fontSize: "12px", color: "#8C90A8" }}>
                        {"May · call"}
                      </span>
                    </span>
                    <span className="vg-mchip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", fontSize: "13.5px", color: "#FFFFFF", animationRange: "contain 36% contain 42%" } as CSSProperties}>
                      <span style={{ color: "#3DD68C", display: "inline-flex" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="8.5">
                          </circle>
                          <path d="M3.5 12h17">
                          </path>
                          <path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z">
                          </path>
                        </svg>
                      </span>
                      {"Hindi and English"}
                      <span style={{ fontSize: "12px", color: "#8C90A8" }}>
                        {"July · WhatsApp"}
                      </span>
                    </span>
                    <span className="vg-mchip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", fontSize: "13.5px", color: "#FFFFFF", animationRange: "contain 42% contain 48%" } as CSSProperties}>
                      <span style={{ color: "#3DD68C", display: "inline-flex" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="8.5">
                          </circle>
                          <path d="M12 7.5V12l3 2">
                          </path>
                        </svg>
                      </span>
                      {"Saturday mornings"}
                      <span style={{ fontSize: "12px", color: "#8C90A8" }}>
                        {"May · call"}
                      </span>
                    </span>
                    <span className="vg-mchip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", fontSize: "13.5px", color: "#FFFFFF", animationRange: "contain 48% contain 54%" } as CSSProperties}>
                      <span style={{ color: "#3DD68C", display: "inline-flex" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                          </path>
                        </svg>
                      </span>
                      {"Details on WhatsApp"}
                      <span style={{ fontSize: "12px", color: "#8C90A8" }}>
                        {"July · WhatsApp"}
                      </span>
                    </span>
                    <span className="vg-mchip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(16,185,129,.55)", fontSize: "13.5px", color: "#FFFFFF", animationRange: "contain 54% contain 60%" } as CSSProperties}>
                      <span style={{ color: "#3DD68C", display: "inline-flex" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                          </path>
                          <path d="M9.5 21h5">
                          </path>
                        </svg>
                      </span>
                      {"Weekend sessions, left unfinished"}
                      <span style={{ fontSize: "12px", color: "#8C90A8" }}>
                        {"July"}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mbubble" style={{ marginTop: "22px", animationRange: "contain 62% contain 68%" } as CSSProperties}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "#8C90A8" }}>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "16px" }}>
                        <span className="vg-wave" style={{ width: "3px", height: "3px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                        </span>
                      </span>
                      <span>
                        {"Vegham picks up"}
                      </span>
                    </span>
                    <span style={{ display: "block", marginTop: "10px", padding: "14px 16px", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", fontSize: "15px", lineHeight: "1.6", color: "#D6D8E6" }}>
                      {"“Hi "}
                      <span className="vg-mhl" style={{ color: "#FFFFFF", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", paddingBottom: "1px", animationRange: "contain 70% contain 75%" } as CSSProperties}>
                        {"Rohan"}
                      </span>
                      {", good to hear from you again. Still thinking about the "}
                      <span className="vg-mhl" style={{ color: "#FFFFFF", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", paddingBottom: "1px", animationRange: "contain 75% contain 80%" } as CSSProperties}>
                        {"weekend sessions"}
                      </span>
                      {"? "}
                      <span className="vg-mhl" style={{ color: "#FFFFFF", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", paddingBottom: "1px", animationRange: "contain 80% contain 85%" } as CSSProperties}>
                        {"Saturday morning"}
                      </span>
                      {" is open, and I can send the details "}
                      <span className="vg-mhl" style={{ color: "#FFFFFF", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", paddingBottom: "1px", animationRange: "contain 85% contain 90%" } as CSSProperties}>
                        {"on WhatsApp"}
                      </span>
                      {", like last time.”"}
                    </span>
                  </div>
                  <div style={{ marginTop: "18px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8C90A8" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
