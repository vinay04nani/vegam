// Ported from design board Product by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import InnerHeader from "@/components/site/InnerHeader";

export default function ProductPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Product"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "940px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"One agent that answers,"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"understands and remembers."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
              {"Vegham picks up your calls and replies to your messages in a natural voice, in your customers’ language, and keeps a memory of every person it talks to."}
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
        </section>
        <section id="voice" style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Voice"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Sounds like a person,"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"not a phone menu."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"A natural voice that listens, pauses and lets people interrupt. It answers from what you taught it and never puts anyone on hold."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Picks up every call, day and night"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Answers in under a second"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Handles interruptions and changes of mind"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #F0F0F3" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "13px" }}>
                        {"A"}
                      </span>
                      <span>
                        <b style={{ fontWeight: "600" }}>
                          {"Ananya Rao"}
                        </b>
                        <span style={{ display: "block", fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Phone call · 0:24"}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }}>
                      </span>
                      {"Live"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px 0" }}>
                    <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                      {"Hi, thanks for calling Nila & Co. How can I help?"}
                    </span>
                    <span style={{ alignSelf: "flex-end", maxWidth: "72%", background: "#F3F3F5", padding: "9px 13px", borderRadius: "16px 16px 4px 16px" }}>
                      {"Hi, are you open this Sunday? And do I need to book?"}
                    </span>
                    <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                      {"We are closed on Sundays, but Saturday 10 to 6 is open. Walk-ins are fine till 5. Want me to hold a time?"}
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "14px", borderTop: "1px solid #F0F0F3", fontSize: "12.5px", color: "#8A8A8A" }}>
                    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "24px" }}>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "19px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "22px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "19px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "21px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "17px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "20px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                    </span>
                    <span>
                      {"Answered in under a second"}
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="languages" style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap-reverse", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Languages"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Speaks their language."}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"Switches when they do."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Vegham answers in the language the customer starts in. If they switch half-way, or ask it to, it follows."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Choose the languages your customers speak"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Mixed languages in one sentence are fine"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Remembers each person’s language for next time"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #F0F0F3" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "13px" }}>
                        {"C"}
                      </span>
                      <span>
                        <b style={{ fontWeight: "600" }}>
                          {"Caller"}
                        </b>
                        <span style={{ display: "block", fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Phone call · started in English"}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px 0" }}>
                    <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                      {"Saturday 10 AM is free. Shall I book it?"}
                    </span>
                    <span style={{ alignSelf: "flex-end", maxWidth: "72%", background: "#F3F3F5", padding: "9px 13px", borderRadius: "16px 16px 4px 16px" }}>
                      {"Hindi mein baat karein?"}
                    </span>
                    <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                      {"Bilkul! Saturday 10 baje khaali hai. Book kar doon?"}
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
                      {"Switched to Hindi"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "14px", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"English"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"हिन्दी"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"தமிழ்"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"తెలుగు"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"Español"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"العربية"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"Français"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", fontSize: "13.5px" }} data-s="s1">
                      {"Português"}
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ padding: "112px 0 0", background: "#FFFFFF" }}>
        </div>
        <section id="memory" style={{ padding: "0 16px" }}>
          <div className="vg-zoomc" style={{ position: "relative", overflow: "hidden", maxWidth: "1408px", margin: "0 auto", borderRadius: "32px", background: "#12141F", color: "#FFFFFF" }}>
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
            <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "112px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }} data-s="s9 s11">
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
                <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "20px", maxWidth: "480px" }}>
                  <div style={{ display: "flex", gap: "14px" }}>
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
                  <div style={{ display: "flex", gap: "14px" }}>
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
                  <div style={{ display: "flex", gap: "14px" }}>
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
              <div className="vg-par" style={{ flex: "1 1 460px", minWidth: "0" }}>
                <div style={{ position: "relative", padding: "32px", borderRadius: "24px", background: "rgba(18,20,31,.72)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
                  <div style={{ position: "relative" }}>
                    <span aria-hidden="true" style={{ position: "absolute", left: "17.5px", top: "18px", bottom: "60px", width: "1px", background: "linear-gradient(180deg, rgba(255,255,255,.16), #10B981)" }}>
                    </span>
                    <div style={{ display: "flex", gap: "18px" }}>
                      <span style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#1B1E2D", border: "1px solid rgba(255,255,255,.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
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
                    <div style={{ display: "flex", gap: "18px" }}>
                      <span style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#1B1E2D", border: "1px solid rgba(255,255,255,.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
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
                    <div style={{ display: "flex", gap: "18px" }}>
                      <span style={{ position: "relative", zIndex: "1", width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
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
                          <span style={{ display: "block", padding: "14px 16px", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}>
                            {"“Hi Rohan, good to hear from you again. Still looking at Saturday mornings? I can send the details on WhatsApp, like last time.”"}
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
        </section>
        <section id="channels" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 112px" }} data-s="s10 s11">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
              <div>
                <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                  {"One agent, every channel"}
                </span>
                <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s4">
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block" }}>
                      {"Wherever customers reach you,"}
                    </span>
                  </span>
                  <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                    <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                      {"Vegham answers."}
                    </span>
                  </span>
                </h2>
              </div>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "420px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Calls, chats and a simple link. Customers pick the way they like to talk, and Vegham is already there."}
              </p>
            </div>
            <div className="vg-g3" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                      {"Voice"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"Phone calls"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"Picks up on your business number, in a natural voice."}
                  </span>
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Chat"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Voice notes"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"WhatsApp"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"Replies to messages and voice notes on your WhatsApp number."}
                  </span>
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FF0069">
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Chat"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"Instagram"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"Answers direct messages on your business profile."}
                  </span>
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0866FF">
                      <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Chat"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"Messenger"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"Answers messages sent to your Facebook page."}
                  </span>
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="#29A9EB">
                      </circle>
                      <path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Chat"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Voice notes"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"Telegram"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"A Telegram assistant your customers can message any time."}
                  </span>
                </span>
              </div>
              <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                      </path>
                      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                      </path>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                      {"Voice"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                      {"Chat"}
                    </span>
                  </span>
                </span>
                <span>
                  <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                    {"A link or your website"}
                  </b>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                    {"One link to talk or type from any browser. No app, no phone number."}
                  </span>
                </span>
              </div>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
              {"Connect one channel or all of them. It is the same agent with the same memory everywhere."}
            </p>
          </div>
        </section>
        <section id="hand-over" style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Hand-over"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Knows when to"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"bring you in."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"When a conversation needs a person, Vegham says so, takes a message and passes it to you with a short summary. You set the rules."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"You choose the moments it must hand over"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Summary and transcript attached every time"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Take over a chat or call back in one click"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "block", padding: "16px 18px", borderRadius: "16px", background: "#F7F7F8" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                      <b style={{ fontWeight: "600" }}>
                        {"Needs you"}
                      </b>
                      <span style={{ color: "#8A8A8A" }}>
                        {"2 min ago"}
                      </span>
                    </span>
                    <span style={{ display: "block", marginTop: "6px", color: "#5C5C5C" }}>
                      {"Kabir wants a custom price for a group of 12. Vegham told him someone will call back today. Summary and transcript attached."}
                    </span>
                    <span style={{ display: "inline-flex", marginTop: "14px", gap: "8px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 16px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", fontWeight: "500" }} data-s="s1">
                        {"Take over"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 16px", borderRadius: "999px", border: "1px solid #E2E2E6", background: "#FFFFFF" }} data-s="s1">
                        {"Call back"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "18px", fontSize: "12.5px", color: "#8A8A8A" }}>
                    {"Hands over when"}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", marginTop: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      {"Caller asks for a person"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      {"A complaint or a refund"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      {"A price that is not in your list"}
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="follow-ups" style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap-reverse", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Follow-ups"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Remembers what"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"it promised."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"“I’ll think about it” is not the end of a conversation. Vegham keeps track of who to get back to and when, and writes the message for you."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Follows up once, in a friendly way"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Only people who agreed to hear from you"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Unhappy customers always come to you"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "12px" }}>
                    <b style={{ fontWeight: "600", fontSize: "15px" }}>
                      {"Follow-ups"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                      {"23 open"}
                    </span>
                  </span>
                  <span style={{ display: "block", padding: "16px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "12px" }}>
                          {"A"}
                        </span>
                        <span>
                          <b style={{ fontWeight: "600" }}>
                            {"Ananya Rao"}
                          </b>
                          <span style={{ display: "block", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Said she would decide by Monday"}
                          </span>
                        </span>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                        {"Due today"}
                      </span>
                    </span>
                    <span style={{ display: "block", marginTop: "10px", padding: "10px 14px", borderRadius: "12px", background: "#F7F7F8", color: "#3D3D3D" }}>
                      {"“Hi Ananya! I shared the prices on Saturday. Would you like me to book a first visit this week?”"}
                    </span>
                  </span>
                  <span style={{ display: "block", padding: "16px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "12px" }}>
                          {"V"}
                        </span>
                        <span>
                          <b style={{ fontWeight: "600" }}>
                            {"Vikram Singh"}
                          </b>
                          <span style={{ display: "block", fontSize: "12.5px", color: "#8A8A8A" }}>
                            {"Asked for evening slots in August"}
                          </span>
                        </span>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                        {"This week"}
                      </span>
                    </span>
                    <span style={{ display: "block", marginTop: "10px", padding: "10px 14px", borderRadius: "12px", background: "#F7F7F8", color: "#3D3D3D" }}>
                      {"“Hi Vikram, we now have evening slots till 8 PM on weekdays. Want me to hold one for you?”"}
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="knowledge" style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Knowledge"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Knows your business."}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"Says only what is true."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Paste your website or upload a price list. Vegham learns from it, shows you what it knows, and asks you about anything it could not answer."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Learns from your website, files and notes"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Rules it always follows, and things it never says"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Shows the questions it could not answer"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "block", fontSize: "12.5px", color: "#8A8A8A", paddingBottom: "10px" }}>
                    {"Where it learns from"}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", borderRadius: "12px", background: "#F7F7F8" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", borderRadius: "12px", background: "#F7F7F8" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"Price list.pdf"}
                      </span>
                      <span style={{ color: "#8A8A8A" }}>
                        {"Uploaded 4 Nov"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", borderRadius: "12px", background: "#F7F7F8" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"Opening hours"}
                      </span>
                      <span style={{ color: "#8A8A8A" }}>
                        {"Updated today"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "20px", fontSize: "12.5px", color: "#8A8A8A" }}>
                    {"Always and never"}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", marginTop: "6px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <b style={{ width: "52px", fontWeight: "600", fontSize: "12.5px", color: "#0B8F63" }}>
                        {"Always"}
                      </b>
                      {"Say prices include tax"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <b style={{ width: "52px", fontWeight: "600", fontSize: "12.5px", color: "#0B8F63" }}>
                        {"Always"}
                      </b>
                      {"Offer the next free slot if one is full"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <b style={{ width: "52px", fontWeight: "600", fontSize: "12.5px", color: "#141414" }}>
                        {"Never"}
                      </b>
                      {"Promise a discount over 10%"}
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="insights" style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap-reverse", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Insights"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"See what happened"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"while you were busy."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Every call and chat is summarised. See how many it answered, who it recognised, what people asked and where it needed you."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Calls, chats and missed calls saved"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"What people ask most"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Calls worth a listen"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <b style={{ fontWeight: "600", fontSize: "15px" }}>
                      {"This month"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                      {"Calls and chats per day"}
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "130px", marginTop: "18px" }}>
                    <span style={{ flex: "1", height: "38%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "52%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "44%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "66%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "58%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "80%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "72%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "90%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "64%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "84%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                    <span style={{ flex: "1", height: "96%", borderRadius: "6px 6px 2px 2px", background: "#10B981" }}>
                    </span>
                    <span style={{ flex: "1", height: "76%", borderRadius: "6px 6px 2px 2px", background: "#E9E9EE" }}>
                    </span>
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "20px 36px", marginTop: "22px", paddingTop: "18px", borderTop: "1px solid #F0F0F3" }}>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "32px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        {"486"}
                      </span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>
                        {"calls answered"}
                      </span>
                    </span>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "32px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        {"412"}
                      </span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>
                        {"callers recognised"}
                      </span>
                    </span>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontSize: "32px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                        {"86%"}
                      </span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>
                        {"handled without you"}
                      </span>
                    </span>
                  </span>
                </div>
                <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                    {"Sample data"}
                  </span>
                </div>
              </div>
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
