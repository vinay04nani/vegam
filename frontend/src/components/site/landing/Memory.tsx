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
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 4% contain 16%" } as CSSProperties}>
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
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 28% contain 40%" } as CSSProperties}>
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
                  <div className="vg-mstep" style={{ display: "flex", gap: "14px", animationRange: "contain 52% contain 64%" } as CSSProperties}>
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
                <div style={{ position: "relative", padding: "32px", borderRadius: "24px", background: "rgba(18,20,31,.72)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
                  <div style={{ position: "relative" }}>
                    <span aria-hidden="true" style={{ position: "absolute", left: "17.5px", top: "18px", bottom: "60px", width: "1px", background: "rgba(255,255,255,.16)" }}>
                    </span>
                    <span aria-hidden="true" className="vg-mthread" style={{ position: "absolute", left: "17.5px", top: "18px", bottom: "60px", width: "1px", background: "linear-gradient(180deg, rgba(16,185,129,.5), #10B981)", transformOrigin: "top", animationRange: "contain 4% contain 60%" } as CSSProperties}>
                    </span>
                    <div className="vg-mstep" style={{ display: "flex", gap: "18px", animationRange: "contain 4% contain 16%" } as CSSProperties}>
                      <span className="vg-mdot" style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", animationRange: "contain 4% contain 16%" } as CSSProperties}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                          </path>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", paddingBottom: "30px" }}>
                        <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                          <b style={{ fontWeight: "500", fontSize: "15px", color: "#FFFFFF" }}>
                            {"May"}
                          </b>
                          <span style={{ fontSize: "13px", color: "#8C90A8" }}>
                            {"First phone call"}
                          </span>
                        </span>
                        <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", lineHeight: "1.5", color: "#B4B8CC" }}>
                          {"Rohan asks about weekend sessions and says Saturday mornings suit him best."}
                        </span>
                      </div>
                    </div>
                    <div className="vg-mstep" style={{ display: "flex", gap: "18px", animationRange: "contain 28% contain 40%" } as CSSProperties}>
                      <span className="vg-mdot" style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", animationRange: "contain 28% contain 40%" } as CSSProperties}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                          </path>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", paddingBottom: "30px" }}>
                        <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                          <b style={{ fontWeight: "500", fontSize: "15px", color: "#FFFFFF" }}>
                            {"July"}
                          </b>
                          <span style={{ fontSize: "13px", color: "#8C90A8" }}>
                            {"WhatsApp message"}
                          </span>
                        </span>
                        <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", lineHeight: "1.5", color: "#B4B8CC" }}>
                          {"He asks for the details again, in Hindi. The conversation is left unfinished."}
                        </span>
                      </div>
                    </div>
                    <div className="vg-mstep" style={{ display: "flex", gap: "18px", animationRange: "contain 52% contain 64%" } as CSSProperties}>
                      <span className="vg-mdot" style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", animationRange: "contain 52% contain 64%" } as CSSProperties}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                          </path>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", paddingBottom: "0" }}>
                        <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                          <b style={{ fontWeight: "500", fontSize: "15px", color: "#FFFFFF" }}>
                            {"November"}
                          </b>
                          <span style={{ fontSize: "13px", color: "#8C90A8" }}>
                            {"Calls again, today"}
                          </span>
                        </span>
                        <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", lineHeight: "1.5", color: "#FFFFFF" }}>
                          <span className="vg-mbubble" style={{ display: "block", padding: "14px 16px", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", animationRange: "contain 60% contain 66%" } as CSSProperties}>
                            <span className="vg-mword" style={{ animationRange: "contain 66% contain 68%" } as CSSProperties}>
                              {"“Hi"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 66% contain 68%" } as CSSProperties}>
                              {"Rohan,"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 67% contain 69%" } as CSSProperties}>
                              {"good"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 68% contain 70%" } as CSSProperties}>
                              {"to"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 69% contain 71%" } as CSSProperties}>
                              {"hear"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 70% contain 72%" } as CSSProperties}>
                              {"from"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 71% contain 73%" } as CSSProperties}>
                              {"you"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 72% contain 74%" } as CSSProperties}>
                              {"again."}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 73% contain 75%" } as CSSProperties}>
                              {"Still"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 74% contain 76%" } as CSSProperties}>
                              {"looking"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 75% contain 77%" } as CSSProperties}>
                              {"at"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 76% contain 78%" } as CSSProperties}>
                              {"Saturday"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 77% contain 79%" } as CSSProperties}>
                              {"mornings?"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 78% contain 80%" } as CSSProperties}>
                              {"I"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 79% contain 81%" } as CSSProperties}>
                              {"can"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 80% contain 82%" } as CSSProperties}>
                              {"send"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 81% contain 83%" } as CSSProperties}>
                              {"the"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 82% contain 84%" } as CSSProperties}>
                              {"details"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 83% contain 85%" } as CSSProperties}>
                              {"on"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 84% contain 86%" } as CSSProperties}>
                              {"WhatsApp,"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 85% contain 87%" } as CSSProperties}>
                              {"like"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 86% contain 88%" } as CSSProperties}>
                              {"last"}
                            </span>
                            {" "}
                            <span className="vg-mword" style={{ animationRange: "contain 87% contain 89%" } as CSSProperties}>
                              {"time.”"}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "22px", textAlign: "right" }}>
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
