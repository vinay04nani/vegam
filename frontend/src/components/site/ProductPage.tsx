// Ported from design board Product by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";
import { withBase } from "@/lib/paths";

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
                {"Everything your agent does,"}
                <br />
                <span style={{ color: "#8A8A8A" }}>
                  {"in one place."}
                </span>
              </h1>
              <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
                {"A tour of the Vegham app: the voice it speaks in, the people it remembers, the channels it answers on and what it tells you afterwards."}
              </p>
              <div className="vg-hero" style={{ animationDelay: ".42s", marginTop: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Start free"}
                </Link>
                <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Book a demo"}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 104px" }} data-s="s11">
            <div className="vg-mockin" style={{ marginTop: "-24px" }}>
              <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                  </span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                  </span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                  </span>
                  <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                    {"app.vegham.ai"}
                  </span>
                </div>
                <img src={withBase("/shots/home.webp")} alt="The Vegham app Home screen with calls answered, people who need you and who was recognised today" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            </div>
            <div style={{ padding: "10px 4px 0", textAlign: "right" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                {"Sample data"}
              </span>
            </div>
          </div>
        </section>
        <section id="memory" className="vg-pinwrap vg-pin-pmem" style={{ padding: "0 16px", background: "#FFFFFF", viewTimelineName: "--vg-pmem" } as CSSProperties}>
          <div className="vg-sticky">
            <div style={{ position: "relative", width: "100%", maxWidth: "1408px", margin: "0 auto", borderRadius: "32px", background: "linear-gradient(180deg, #F7F7F8 0%, #F1F2F4 100%)" }}>
              <div className="vg-pinpad" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "48px 64px" }} data-s="s10 s11">
                <div style={{ flex: "1 1 400px", minWidth: "0", maxWidth: "500px" }}>
                  <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                    {"Long memory"}
                  </span>
                  <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                    <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                      <span className="vg-line-in" style={{ display: "block" }}>
                        {"It writes a note after every call."}
                      </span>
                    </span>
                    <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                      <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                        {"And reads it before the next."}
                      </span>
                    </span>
                  </h2>
                  <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                    {"Vegham does not keep a pile of recordings to search later. It keeps the few things that matter about each person, and you can see and change every one of them."}
                  </p>
                  <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="vg-pstep" style={{ display: "flex", gap: "16px", animationRange: "contain 2% contain 10%" } as CSSProperties}>
                      <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                        {"1"}
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "16px" }}>
                          {"It listens"}
                        </b>
                        <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                          {"The whole call or chat, in whatever language it happens."}
                        </span>
                      </span>
                    </div>
                    <div className="vg-pstep" style={{ display: "flex", gap: "16px", animationRange: "contain 14% contain 72%" } as CSSProperties}>
                      <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                        {"2"}
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "16px" }}>
                          {"It writes down what matters"}
                        </b>
                        <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                          {"Names, preferences, plans and anything left unfinished."}
                        </span>
                      </span>
                    </div>
                    <div className="vg-pstep" style={{ display: "flex", gap: "16px", animationRange: "contain 76% contain 86%" } as CSSProperties}>
                      <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "50%", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                        {"3"}
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "16px" }}>
                          {"It uses it next time"}
                        </b>
                        <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                          {"On any channel, so nobody has to repeat themselves."}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1 1 480px", minWidth: "0" }}>
                  <div style={{ borderRadius: "28px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "22px 24px", boxShadow: "0 24px 60px -36px rgba(22,24,42,.35)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid #F0F0F3" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "13px" }}>
                          {"R"}
                        </span>
                        <span>
                          <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                            {"Rohan Mehta"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Phone call · 14 May · 1:52"}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "#8A8A8A" }}>
                        {"Transcript"}
                      </span>
                    </div>
                    <div style={{ padding: "6px 0 10px" }}>
                      <div style={{ display: "flex", gap: "12px", padding: "8px 0" }}>
                        <span style={{ width: "64px", flex: "none", fontSize: "12.5px", color: "#6B6B6B", fontWeight: "500" }}>
                          {"Rohan"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14.5px", lineHeight: "1.55", color: "#2B2B2B" }}>
                          {"Hi, do you do group sessions on weekends? We would be "}
                          <span className="vg-phl" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,.2), rgba(16,185,129,.2))", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", borderRadius: "4px", padding: "0 2px", color: "#141414", animationRange: "contain 8% contain 16%" } as CSSProperties}>
                            {"three of us"}
                          </span>
                          {"."}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", padding: "8px 0" }}>
                        <span style={{ width: "64px", flex: "none", fontSize: "12.5px", color: "#0B8F63", fontWeight: "500" }}>
                          {"Vegham"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14.5px", lineHeight: "1.55", color: "#5C5C5C" }}>
                          {"Yes, on Saturdays from 9 to 2. It is ₹350 each."}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", padding: "8px 0" }}>
                        <span style={{ width: "64px", flex: "none", fontSize: "12.5px", color: "#6B6B6B", fontWeight: "500" }}>
                          {"Rohan"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14.5px", lineHeight: "1.55", color: "#2B2B2B" }}>
                          <span className="vg-phl" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,.2), rgba(16,185,129,.2))", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", borderRadius: "4px", padding: "0 2px", color: "#141414", animationRange: "contain 26% contain 34%" } as CSSProperties}>
                            {"Saturday mornings"}
                          </span>
                          {" would be best. Can you "}
                          <span className="vg-phl" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,.2), rgba(16,185,129,.2))", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", borderRadius: "4px", padding: "0 2px", color: "#141414", animationRange: "contain 44% contain 52%" } as CSSProperties}>
                            {"send the details on WhatsApp"}
                          </span>
                          {"? "}
                          <span className="vg-phl" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,.2), rgba(16,185,129,.2))", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", borderRadius: "4px", padding: "0 2px", color: "#141414", animationRange: "contain 62% contain 70%" } as CSSProperties}>
                            {"I’ll think about it"}
                          </span>
                          {" and call back."}
                        </span>
                      </div>
                    </div>
                    <div style={{ marginTop: "4px", padding: "14px 16px 4px", borderRadius: "16px", background: "#F7F7F8" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "500", color: "#141414" }}>
                        <span style={{ color: "#10B981", display: "inline-flex" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                            </path>
                            <path d="M9.5 21h5">
                            </path>
                          </svg>
                        </span>
                        {"Written to Rohan’s memory"}
                      </span>
                      <div style={{ marginTop: "8px" }}>
                        <div className="vg-pfield" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", animationRange: "contain 12% contain 20%" } as CSSProperties}>
                          <span style={{ width: "96px", flex: "none", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Group size"}
                          </span>
                          <span style={{ flex: "1", fontSize: "14.5px", fontWeight: "500", color: "#141414" }}>
                            {"3 people"}
                          </span>
                          <span style={{ color: "#10B981", display: "inline-flex" }}>
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12.5l4.5 4.5L19 7.5">
                              </path>
                            </svg>
                          </span>
                        </div>
                        <div className="vg-pfield" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", animationRange: "contain 30% contain 38%" } as CSSProperties}>
                          <span style={{ width: "96px", flex: "none", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Prefers"}
                          </span>
                          <span style={{ flex: "1", fontSize: "14.5px", fontWeight: "500", color: "#141414" }}>
                            {"Saturday mornings"}
                          </span>
                          <span style={{ color: "#10B981", display: "inline-flex" }}>
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12.5l4.5 4.5L19 7.5">
                              </path>
                            </svg>
                          </span>
                        </div>
                        <div className="vg-pfield" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", animationRange: "contain 48% contain 56%" } as CSSProperties}>
                          <span style={{ width: "96px", flex: "none", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Contact"}
                          </span>
                          <span style={{ flex: "1", fontSize: "14.5px", fontWeight: "500", color: "#141414" }}>
                            {"Details on WhatsApp"}
                          </span>
                          <span style={{ color: "#10B981", display: "inline-flex" }}>
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12.5l4.5 4.5L19 7.5">
                              </path>
                            </svg>
                          </span>
                        </div>
                        <div className="vg-pfield" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3", animationRange: "contain 66% contain 74%" } as CSSProperties}>
                          <span style={{ width: "96px", flex: "none", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Open loop"}
                          </span>
                          <span style={{ flex: "1", fontSize: "14.5px", fontWeight: "500", color: "#0B8F63" }}>
                            {"Will think about it · follow up"}
                          </span>
                          <span style={{ color: "#10B981", display: "inline-flex" }}>
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12.5l4.5 4.5L19 7.5">
                              </path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="vg-pfoot" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px", marginTop: "14px", fontSize: "13px", color: "#6B6B6B", animationRange: "contain 84% contain 94%" } as CSSProperties}>
                      <span>
                        {"Kept for 12 months · change it in Settings"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#141414" }} data-s="s1">
                        {"Forget Rohan"}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "10px 6px 0", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample data"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFFFF", timelineScope: "--vg-t0, --vg-t1, --vg-t2, --vg-t3, --vg-t4, --vg-t5, --vg-t6, --vg-t7" } as CSSProperties}>
          <div className="vg-pad vg-tour" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 88px", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "56px" }} data-s="s11">
            <div className="vg-tside" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"The tour"}
              </span>
              <nav aria-label="Product tour" style={{ marginTop: "24px", display: "flex", flexDirection: "column" }}>
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
                  {"Pick how it sounds"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Choose a voice, hear it say your own greeting, and set how it opens a call. It answers in under a second and can be interrupted."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Four voices to choose from"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Your greeting for new and returning callers"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Changes go live straight away"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/voice.webp")} alt="The voice screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="languages" className="vg-tpanel" style={{ viewTimelineName: "--vg-t1", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"02 · Languages"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Choose the languages it speaks"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Pick the languages your customers use. It answers in the one they start in, switches when they do, and remembers each person’s language."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Answers in the caller’s language"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Switches mid-call when asked"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"See what languages callers spoke"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/languages.webp")} alt="The languages screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="people" className="vg-tpanel" style={{ viewTimelineName: "--vg-t2", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"03 · People"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"One page for every person"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Everything Vegham knows about someone, in one place: what it remembers, where things stand and every conversation, across calls and chats."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Edit or remove any memory"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"See every call and chat together"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Forget a person in one click"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/person.webp")} alt="The people screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="channels" className="vg-tpanel" style={{ viewTimelineName: "--vg-t3", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"04 · Channels"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Connect where customers are"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Your phone number, WhatsApp, Instagram, Messenger, Telegram and a link for your website. Same agent, same memory, on all of them."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Connect each one in about two minutes"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Share a link or QR code that works anywhere"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Calls and WhatsApp join up by number"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/channels.webp")} alt="The channels screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="hand-over" className="vg-tpanel" style={{ viewTimelineName: "--vg-t4", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"05 · Hand-over"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Step in when it matters"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"When a conversation needs a person, Vegham hands it to you with a summary and a suggested reply, and pauses while you write."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"You set the moments it must hand over"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"A summary and transcript every time"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Reply, or let Vegham continue"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/handover.webp")} alt="The hand-over screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="follow-ups" className="vg-tpanel" style={{ viewTimelineName: "--vg-t5", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"06 · Follow-ups"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Nobody falls through the cracks"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Everyone who said “I’ll think about it” is on one list, with the message Vegham will send and when."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Edit, skip or send now"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Only people who agreed to hear from you"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Unhappy customers always come to you"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/followups.webp")} alt="The follow-ups screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="knowledge" className="vg-tpanel" style={{ viewTimelineName: "--vg-t6", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"07 · Knowledge"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"Teach it once"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Paste your website, upload a price list or type an answer. See what it can answer, and fill the gaps from real questions callers asked."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Learns from your site, files and notes"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Rules it always follows, and never breaks"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Shows what it could not answer"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/knowledge.webp")} alt="The knowledge screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div id="insights" className="vg-tpanel" style={{ viewTimelineName: "--vg-t7", padding: "56px 0", scrollMarginTop: "96px" } as CSSProperties}>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B8F63" }}>
                  {"08 · Insights"}
                </span>
                <h3 className="vg-rv" style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.035em" }} data-s="s7">
                  {"See what happened"}
                </h3>
                <p className="vg-rv" style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#5C5C5C" }}>
                  {"Calls and chats answered, missed calls saved, when people reach you, why they called and which calls are worth a listen."}
                </p>
                <div className="vg-rv" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Daily trends and busiest hours"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Hand-over reasons and memory at work"}
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#3D3D3D" }}>
                    <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    {"Calls worth a listen"}
                  </span>
                </div>
                <div className="vg-zoomc" style={{ marginTop: "32px" }}>
                  <div className="vg-shot" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E6E6EA", boxShadow: "0 30px 70px -40px rgba(22,24,42,.45)", overflow: "hidden" }}>
                    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderBottom: "1px solid #EFEFF2", background: "#FAFAFB" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E2E2E6" }}>
                      </span>
                      <span style={{ marginLeft: "12px", fontSize: "11.5px", color: "#8A8A8A" }}>
                        {"app.vegham.ai"}
                      </span>
                    </div>
                    <img src={withBase("/shots/insights.webp")} alt="The insights screen in the Vegham app" width="1728" height="1080" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "8px", textAlign: "right" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                  {"Sample data"}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="every-channel" style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
              {"Channels"}
            </span>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"Every channel,"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                  {"at a glance."}
                </span>
              </span>
            </h2>
            <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "520px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
              {"What each channel can do, and what you need to connect it."}
            </p>
            <div style={{ marginTop: "40px", overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "0 16px 16px 0", textAlign: "left", fontWeight: "400", fontSize: "13px", color: "#6B6B6B", width: "28%" }}>
                      {"Channel"}
                    </th>
                    <th style={{ padding: "0 16px 16px 0", textAlign: "left", fontWeight: "400", fontSize: "13px", color: "#6B6B6B", width: "12%" }}>
                      {"Chat"}
                    </th>
                    <th style={{ padding: "0 16px 16px 0", textAlign: "left", fontWeight: "400", fontSize: "13px", color: "#6B6B6B", width: "14%" }}>
                      {"Voice"}
                    </th>
                    <th style={{ padding: "0 16px 16px 0", textAlign: "left", fontWeight: "400", fontSize: "13px", color: "#6B6B6B" }}>
                      {"How you connect"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"Phone number"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      {"Yes"}
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Forward your existing number, or get a new one"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"WhatsApp"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      {"Voice notes"}
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Log in with Facebook and pick your number"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FF0069">
                            <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"Instagram"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Log in with your business profile"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0866FF">
                            <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"Messenger"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#C9C9D1" }}>
                        {"–"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Log in with your Facebook page"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#29A9EB">
                            </circle>
                            <path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"Telegram"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      {"Voice notes"}
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Create a Telegram assistant and paste its token"}
                    </td>
                  </tr>
                  <tr className="vg-rv">
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                            </path>
                            <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "500" }}>
                          {"Link or website"}
                        </b>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", color: "#2B2B2B", verticalAlign: "middle" }}>
                      {"Yes"}
                    </td>
                    <td style={{ padding: "14px 16px 14px 0", borderTop: "1px solid #ECECEF", fontSize: "15px", verticalAlign: "middle", color: "#5C5C5C" }}>
                      {"Copy the link, print the QR code or add a button to your site"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ margin: "18px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
              {"Phone numbers depend on the country. The link and the chat channels work anywhere."}
            </p>
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
