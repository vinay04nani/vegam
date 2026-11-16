// Ported from design board LandingV2 (HowItWorks) by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";

export default function HowItWorks() {
  return (
      <section id="how" className="vg-pinwrap vg-pin-how" style={{ padding: "0 16px", viewTimelineName: "--vg-how" } as CSSProperties}>
        <div className="vg-sticky">
          <div style={{ position: "relative", overflow: "hidden", width: "100%", maxWidth: "1408px", margin: "0 auto", borderRadius: "32px", background: "#12141F", color: "#FFFFFF" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit", opacity: "0.7" }}>
              <div className="vg-aur1" style={{ position: "absolute", left: "-15%", top: "-45%", width: "130%", height: "95%", filter: "blur(60px)", opacity: ".9", background: "radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,0.61), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,0.50), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,0.55), transparent 70%)" }}>
              </div>
              <div className="vg-aur2" style={{ position: "absolute", left: "-10%", top: "-30%", width: "120%", height: "80%", filter: "blur(70px)", opacity: ".8", background: "radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,0.44), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,0.39), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,0.24), transparent 70%)" }}>
              </div>
              <div className="vg-curtain" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "65%", opacity: ".35", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(18,20,31,0) 30%, rgba(18,20,31,.9) 100%)" }}>
              </div>
            </div>
            <div className="vg-pinpad" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", boxSizing: "border-box" }} data-s="s10 s11">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
                <div>
                  <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A9AECB" }}>
                    {"How it works"}
                  </span>
                  <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#FFFFFF" }} data-s="s4">
                    <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                      <span className="vg-line-in" style={{ display: "block" }}>
                        {"Live in minutes,"}
                      </span>
                    </span>
                    <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                      <span className="vg-line-in" style={{ display: "block", color: "#8C90A8" }}>
                        {"not weeks."}
                      </span>
                    </span>
                  </h2>
                </div>
                <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Start free"}
                </Link>
              </div>
              <div className="vg-hbar" aria-hidden="true" style={{ marginTop: "40px", height: "2px", borderRadius: "2px", background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
                <span className="vg-hfill" style={{ display: "block", height: "100%", background: "linear-gradient(90deg, #10B981 0%, #0EA5A4 35%, #3B6CF6 70%, #7C3AED 100%)", transformOrigin: "left", animationRange: "contain 4% contain 90%" } as CSSProperties}>
                </span>
              </div>
              <div className="vg-hview" style={{ marginTop: "28px" }}>
                <div className="vg-g4 vg-htrack" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px", animationRange: "contain 6% contain 90%" } as CSSProperties}>
                  <div className="vg-hstep" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animationRange: "contain 0% contain 6%" } as CSSProperties}>
                    <span style={{ fontSize: "13px", color: "#3DD68C", fontVariantNumeric: "tabular-nums" }}>
                      {"01"}
                    </span>
                    <b style={{ display: "block", marginTop: "40px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                      {"Tell it about your business"}
                    </b>
                    <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                      {"Paste your website or type a few lines. Vegham reads it and learns what you offer."}
                    </span>
                  </div>
                  <div className="vg-hstep" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animationRange: "contain 18% contain 30%" } as CSSProperties}>
                    <span style={{ fontSize: "13px", color: "#3DD68C", fontVariantNumeric: "tabular-nums" }}>
                      {"02"}
                    </span>
                    <b style={{ display: "block", marginTop: "40px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                      {"Pick a voice"}
                    </b>
                    <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                      {"Choose how it sounds and which languages it speaks. Change it any time."}
                    </span>
                  </div>
                  <div className="vg-hstep" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animationRange: "contain 42% contain 54%" } as CSSProperties}>
                    <span style={{ fontSize: "13px", color: "#3DD68C", fontVariantNumeric: "tabular-nums" }}>
                      {"03"}
                    </span>
                    <b style={{ display: "block", marginTop: "40px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                      {"Make a test call"}
                    </b>
                    <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                      {"Call it yourself and hear exactly what your customers will hear."}
                    </span>
                  </div>
                  <div className="vg-hstep" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animationRange: "contain 66% contain 78%" } as CSSProperties}>
                    <span style={{ fontSize: "13px", color: "#3DD68C", fontVariantNumeric: "tabular-nums" }}>
                      {"04"}
                    </span>
                    <b style={{ display: "block", marginTop: "40px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                      {"Connect and go live"}
                    </b>
                    <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                      {"Add your phone number, WhatsApp or the link. It starts answering straight away."}
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
