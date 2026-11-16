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
            <div className="vg-pinpad" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "96px 32px", boxSizing: "border-box" }} data-s="s11">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "32px" }}>
                <div style={{ flex: "1 1 420px", minWidth: "0" }}>
                  <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A9AECB" }}>
                    {"Long memory"}
                  </span>
                  <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "48px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#FFFFFF" }} data-s="s3">
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
                  <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
                    {"Most assistants start from zero on every call. Vegham keeps the thread, so the conversation picks up where it stopped."}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "30px", padding: "0 12px", borderRadius: "999px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", fontSize: "13px", color: "#D6D8E6" }} data-s="s1">
                    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "14px" }}>
                      <span className="vg-wave" style={{ width: "3px", height: "3px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                    </span>
                    {" Rohan is calling"}
                  </span>
                  <span style={{ display: "block", marginTop: "10px", fontFamily: "var(--font-tight), sans-serif", fontSize: "96px", lineHeight: "1", letterSpacing: "-0.04em", color: "#3DD68C" }}>
                    <span className="vg-mdays" role="img" aria-label="184" style={{ "--to": "184", animationRange: "contain 3% contain 22%" } as CSSProperties}>
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "14px", color: "#B4B8CC" }}>
                    {"days since you last spoke"}
                  </span>
                </div>
              </div>
              <div style={{ marginTop: "44px", paddingTop: "36px", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                <span style={{ display: "block", fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#8C90A8" }}>
                  {"Vegham picks up"}
                </span>
                <div style={{ marginTop: "14px" }}>
                  <p style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.32", letterSpacing: "-0.02em", color: "#FFFFFF" }} data-s="s7">
                    <span className="vg-mword" style={{ animationRange: "contain 26% contain 29%" } as CSSProperties}>
                      {"“Hi"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 27% contain 30%" } as CSSProperties}>
                      <span className="vg-mgreen" style={{ color: "#3DD68C", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", animationRange: "contain 29% contain 33%" } as CSSProperties}>
                        {"Rohan"}
                        <sup style={{ fontSize: ".42em", marginLeft: "2px", verticalAlign: "super" }}>
                          {"1"}
                        </sup>
                      </span>
                      {","}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 29% contain 32%" } as CSSProperties}>
                      {"good"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 31% contain 34%" } as CSSProperties}>
                      {"to"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 33% contain 36%" } as CSSProperties}>
                      {"hear"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 35% contain 38%" } as CSSProperties}>
                      {"from"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 37% contain 40%" } as CSSProperties}>
                      {"you"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 39% contain 42%" } as CSSProperties}>
                      {"again."}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 41% contain 44%" } as CSSProperties}>
                      {"Still"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 43% contain 46%" } as CSSProperties}>
                      {"thinking"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 45% contain 48%" } as CSSProperties}>
                      {"about"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 47% contain 50%" } as CSSProperties}>
                      {"the"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 49% contain 52%" } as CSSProperties}>
                      <span className="vg-mgreen" style={{ color: "#3DD68C", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", animationRange: "contain 51% contain 55%" } as CSSProperties}>
                        {"weekend sessions"}
                        <sup style={{ fontSize: ".42em", marginLeft: "2px", verticalAlign: "super" }}>
                          {"2"}
                        </sup>
                      </span>
                      {"?"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 51% contain 54%" } as CSSProperties}>
                      <span className="vg-mgreen" style={{ color: "#3DD68C", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", animationRange: "contain 53% contain 57%" } as CSSProperties}>
                        {"Saturday morning"}
                        <sup style={{ fontSize: ".42em", marginLeft: "2px", verticalAlign: "super" }}>
                          {"3"}
                        </sup>
                      </span>
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 52% contain 55%" } as CSSProperties}>
                      {"is"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 54% contain 57%" } as CSSProperties}>
                      {"open,"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 56% contain 59%" } as CSSProperties}>
                      {"and"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 58% contain 61%" } as CSSProperties}>
                      {"I"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 60% contain 63%" } as CSSProperties}>
                      {"can"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 62% contain 65%" } as CSSProperties}>
                      {"send"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 64% contain 67%" } as CSSProperties}>
                      {"the"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 66% contain 69%" } as CSSProperties}>
                      {"details"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 68% contain 71%" } as CSSProperties}>
                      <span className="vg-mgreen" style={{ color: "#3DD68C", backgroundImage: "linear-gradient(#10B981, #10B981)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 2px", animationRange: "contain 70% contain 74%" } as CSSProperties}>
                        {"on WhatsApp"}
                        <sup style={{ fontSize: ".42em", marginLeft: "2px", verticalAlign: "super" }}>
                          {"4"}
                        </sup>
                      </span>
                      {","}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 70% contain 73%" } as CSSProperties}>
                      {"like"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 72% contain 75%" } as CSSProperties}>
                      {"last"}
                    </span>
                    {" "}
                    <span className="vg-mword" style={{ animationRange: "contain 74% contain 77%" } as CSSProperties}>
                      {"time.”"}
                    </span>
                  </p>
                </div>
                <div className="vg-g4" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "20px" }}>
                  <div className="vg-mnote" style={{ display: "flex", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.12)", animationRange: "contain 29% contain 34%" } as CSSProperties}>
                    <span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.6)", color: "#3DD68C", fontSize: "11.5px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {"1"}
                    </span>
                    <span style={{ fontSize: "13.5px", lineHeight: "1.45" }}>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Rohan Mehta"}
                      </b>
                      <span style={{ color: "#8C90A8" }}>
                        {"from his first call, in May"}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mnote" style={{ display: "flex", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.12)", animationRange: "contain 51% contain 56%" } as CSSProperties}>
                    <span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.6)", color: "#3DD68C", fontSize: "11.5px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {"2"}
                    </span>
                    <span style={{ fontSize: "13.5px", lineHeight: "1.45" }}>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Weekend sessions"}
                      </b>
                      <span style={{ color: "#8C90A8" }}>
                        {"asked in May, left unfinished"}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mnote" style={{ display: "flex", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.12)", animationRange: "contain 53% contain 58%" } as CSSProperties}>
                    <span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.6)", color: "#3DD68C", fontSize: "11.5px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {"3"}
                    </span>
                    <span style={{ fontSize: "13.5px", lineHeight: "1.45" }}>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Saturday mornings"}
                      </b>
                      <span style={{ color: "#8C90A8" }}>
                        {"said so twice"}
                      </span>
                    </span>
                  </div>
                  <div className="vg-mnote" style={{ display: "flex", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.12)", animationRange: "contain 70% contain 75%" } as CSSProperties}>
                    <span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.6)", color: "#3DD68C", fontSize: "11.5px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {"4"}
                    </span>
                    <span style={{ fontSize: "13.5px", lineHeight: "1.45" }}>
                      <b style={{ display: "block", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Details on WhatsApp"}
                      </b>
                      <span style={{ color: "#8C90A8" }}>
                        {"how he liked it in July"}
                      </span>
                    </span>
                  </div>
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
      </section>
  );
}
