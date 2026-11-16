// Ported from design board HowItWorks by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import InnerHeader from "@/components/site/InnerHeader";

export default function HowItWorksPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"How it works"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "940px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"Live in minutes,"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"not weeks."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
              {"Four short steps: teach it your business, pick a voice, make a test call and connect your channels."}
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
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Step 1 of 4"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Tell it about"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"your business."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Paste your website or type a few lines. Vegham reads it and learns your hours, prices and the questions people ask."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"No website? Describe your business instead"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Review everything it learned before it goes live"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Fix anything in one click"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", height: "46px", padding: "0 16px", borderRadius: "14px", border: "1px solid #E2E2E6", color: "#3D3D3D" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.5">
                        </circle>
                        <path d="M3.5 12h17">
                        </path>
                        <path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z">
                        </path>
                      </svg>
                    </span>
                    {"nilaandco.in"}
                    <span style={{ marginLeft: "auto", fontSize: "12.5px", color: "#0B8F63", fontWeight: "500" }}>
                      {"14 pages read"}
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", marginTop: "14px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ width: "150px", color: "#6B6B6B" }}>
                        {"Business name"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        {"Nila & Co"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ width: "150px", color: "#6B6B6B" }}>
                        {"Hours"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        {"Mon–Fri 9–8 · Sat 10–6"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ width: "150px", color: "#6B6B6B" }}>
                        {"Services and prices"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        {"12 found"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5">
                          </path>
                        </svg>
                      </span>
                      <span style={{ width: "150px", color: "#6B6B6B" }}>
                        {"Common questions"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        {"Parking, walk-ins, payment"}
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
        <section style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap-reverse", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Step 2 of 4"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Pick a voice"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"and languages."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Press play to hear each voice say your own greeting, then choose the languages your customers speak."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Four voices to choose from"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Switches language when a caller does"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Change it whenever you like"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#F7F7F8" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                          </path>
                        </svg>
                      </span>
                      <span style={{ minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Warm"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Calm, friendly"}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#FFFFFF" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                          </path>
                        </svg>
                      </span>
                      <span style={{ minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Easy"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Relaxed"}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#FFFFFF" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                          </path>
                        </svg>
                      </span>
                      <span style={{ minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Bright"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Upbeat"}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#FFFFFF" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "50%", background: "#F1F1F4", color: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                          </path>
                        </svg>
                      </span>
                      <span style={{ minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Steady"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Clear, formal"}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "18px", fontSize: "12.5px", color: "#8A8A8A" }}>
                    {"Languages your customers speak"}
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", fontSize: "13.5px" }} data-s="s1">
                      {"English"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", fontSize: "13.5px" }} data-s="s1">
                      {"हिन्दी"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", color: "#2B2B2B", fontSize: "13.5px" }} data-s="s1">
                      {"ಕನ್ನಡ"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", color: "#2B2B2B", fontSize: "13.5px" }} data-s="s1">
                      {"தமிழ்"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#F5F5F7", color: "#2B2B2B", fontSize: "13.5px" }} data-s="s1">
                      {"తెలుగు"}
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
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Step 3 of 4"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Make a"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"test call."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Talk to it yourself before any customer does. Ask a price, switch language, try to book. Call twice and it will remember you."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Test in your browser or from your phone"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"See what it got right"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Teach it anything it missed"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "12px 0 20px" }}>
                    <span style={{ width: "96px", height: "96px", borderRadius: "50%", background: "#16182A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "34px" }}>
                        <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "22px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "28px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "24px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                        </span>
                        <span className="vg-wave" style={{ width: "3px", height: "32px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                        </span>
                      </span>
                    </span>
                    <b style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                      {"You’re talking to Vegham"}
                    </b>
                    <span style={{ fontSize: "13px", color: "#8A8A8A" }}>
                      {"0:31 · in your browser"}
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ width: "20px", height: "20px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    <b style={{ width: "120px", fontWeight: "500" }}>
                      {"Ask a price"}
                    </b>
                    <span style={{ color: "#6B6B6B" }}>
                      {"“How much is a first visit?”"}
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ width: "20px", height: "20px", flex: "none", borderRadius: "50%", background: "#10B981", border: "1px solid #10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5">
                        </path>
                      </svg>
                    </span>
                    <b style={{ width: "120px", fontWeight: "500" }}>
                      {"Switch language"}
                    </b>
                    <span style={{ color: "#6B6B6B" }}>
                      {"“Hindi mein baat karein?”"}
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ width: "20px", height: "20px", flex: "none", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #D5D5DB", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    </span>
                    <b style={{ width: "120px", fontWeight: "500" }}>
                      {"Book a time"}
                    </b>
                    <span style={{ color: "#6B6B6B" }}>
                      {"“Can I come Saturday at 11?”"}
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
        <section style={{ background: "#F7F7F8" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap-reverse", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", gap: "48px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "520px" }}>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Step 4 of 4"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Connect and"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"go live."}
                  </span>
                </span>
              </h2>
              <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
                {"Choose when Vegham should pick up, then connect the channels you use. You can start with one and add more later."}
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Forward your existing number"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Add WhatsApp, Instagram, Messenger or Telegram"}
                </span>
                <span className="vg-rv" style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#3D3D3D" }}>
                  <span style={{ flex: "none", marginTop: "3px", color: "#10B981" }}>
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5">
                      </path>
                    </svg>
                  </span>
                  {"Share one link for voice and chat anywhere"}
                </span>
              </div>
            </div>
            <div className="vg-rv" style={{ flex: "1 1 480px", minWidth: "0" }}>
              <div style={{ borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }}>
                <div style={{ borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "24px", fontSize: "14px", lineHeight: "1.45" }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#F7F7F8" }}>
                      <span style={{ width: "16px", height: "16px", flex: "none", marginTop: "2px", borderRadius: "50%", border: "5px solid #10B981", boxSizing: "border-box" }}>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"When I miss a call"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Rings you first. Vegham picks up after 4 rings."}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#FFFFFF" }}>
                      <span style={{ width: "16px", height: "16px", flex: "none", marginTop: "2px", borderRadius: "50%", border: "1px solid #C9C9D1", boxSizing: "border-box" }}>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Every call"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Vegham answers straight away."}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "16px", border: "1px solid #ECECEF", background: "#FFFFFF" }}>
                      <span style={{ width: "16px", height: "16px", flex: "none", marginTop: "2px", borderRadius: "50%", border: "1px solid #C9C9D1", boxSizing: "border-box" }}>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600" }}>
                          {"Only when I’m closed"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "#8A8A8A" }}>
                          {"Outside your opening hours."}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"Phone number"}
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", fontWeight: "500" }}>
                        {"Connected"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"WhatsApp"}
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", fontWeight: "500" }}>
                        {"Connected"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                          </path>
                          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"Your link"}
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#0B8F63", fontWeight: "500" }}>
                        {"Ready to share"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FF0069">
                          <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1" }}>
                        {"Instagram"}
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#6B6B6B", fontWeight: "400" }}>
                        {"Connect"}
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
        <div style={{ padding: "112px 0 0", background: "#FFFFFF" }}>
        </div>
        <section style={{ padding: "0 16px 112px", background: "#FFFFFF" }}>
          <div className="vg-zoomc" style={{ position: "relative", overflow: "hidden", maxWidth: "1408px", margin: "0 auto", borderRadius: "32px", background: "#12141F", color: "#FFFFFF" }}>
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
            <div className="vg-pad" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", boxSizing: "border-box" }} data-s="s10 s11">
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A9AECB" }}>
                {"Once you are live"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#FFFFFF" }} data-s="s4">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"From then on,"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8C90A8" }}>
                    {"it runs itself."}
                  </span>
                </span>
              </h2>
              <div className="vg-g3" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
                <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <span style={{ color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3.5" width="6" height="11" rx="3">
                      </rect>
                      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0">
                      </path>
                      <path d="M12 18v3">
                      </path>
                    </svg>
                  </span>
                  <b style={{ display: "block", marginTop: "28px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", letterSpacing: "-0.03em" }}>
                    {"It answers"}
                  </b>
                  <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                    {"Every call and message gets a reply in seconds, in the customer’s language."}
                  </span>
                </div>
                <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <span style={{ color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                      </path>
                      <path d="M9.5 21h5">
                      </path>
                    </svg>
                  </span>
                  <b style={{ display: "block", marginTop: "28px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", letterSpacing: "-0.03em" }}>
                    {"It remembers"}
                  </b>
                  <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                    {"Each conversation adds to what it knows about that person, for next time."}
                  </span>
                </div>
                <div className="vg-rv" style={{ padding: "28px", borderRadius: "24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <span style={{ color: "#3DD68C" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 19V10">
                      </path>
                      <path d="M12 19V5">
                      </path>
                      <path d="M19 19v-6">
                      </path>
                    </svg>
                  </span>
                  <b style={{ display: "block", marginTop: "28px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "24px", letterSpacing: "-0.03em" }}>
                    {"You see everything"}
                  </b>
                  <span style={{ display: "block", marginTop: "10px", fontSize: "15px", color: "#B4B8CC" }}>
                    {"Summaries, hand-overs and follow-ups are waiting for you in one place."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFFFF" }}>
          <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 112px", display: "flex", flexWrap: "wrap", gap: "40px 72px" }} data-s="s11 s12">
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Good to"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"know"}
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
                  {"How long does set-up take?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"Most people finish in about ten minutes. Connecting WhatsApp or a phone number can take a little longer, depending on your provider."}
                </p>
              </details>
              <details className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Do I need a new phone number?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"No. You can forward calls from the number customers already know, or share the link and use no number at all."}
                </p>
              </details>
              <details className="vg-rv" style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Can I change things after going live?"}
                  <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                    {"+"}
                  </span>
                </summary>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                  {"Yes. The voice, languages, what it knows and when it hands over can all be changed at any time."}
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
