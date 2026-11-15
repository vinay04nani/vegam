// Ported from design board Company by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function CompanyPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Company"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "940px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"We’re building the voice agent"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"every business deserves."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", color: "#3D3D3D" }}>
              {"One that picks up every call and message, speaks the customer’s language, and remembers each person it talks to."}
            </p>
            <div className="vg-hero" style={{ animationDelay: ".42s", margin: "40px auto 0", maxWidth: "640px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px", padding: "22px 32px", borderRadius: "24px", background: "#FFFFFF", border: "1px solid #ECECEF", textAlign: "left" }}>
              <span style={{ flex: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "52px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }} data-s="s4">
                {"वेग"}
              </span>
              <p style={{ flex: "1 1 320px", margin: "0", fontSize: "16px", color: "#5C5C5C" }}>
                <b style={{ fontWeight: "600", color: "#141414" }}>
                  {"Vegham"}
                </b>
                {" comes from "}
                <i>
                  {"vegam"}
                </i>
                {", the Sanskrit word for speed. It’s our promise: every customer answered in seconds."}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", gap: "40px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 320px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Why we exist"}
              </span>
            </div>
            <div style={{ flex: "2 1 560px", fontSize: "21px", lineHeight: "1.6", color: "#2B2B2B" }}>
              <p style={{ margin: "0" }}>
                {"Most businesses don’t lose customers because of their service. They lose them in the first few minutes: a WhatsApp that sits unread, a call nobody could pick up, a follow-up nobody had time to send."}
              </p>
              <p style={{ margin: "22px 0 0", color: "#5C5C5C" }}>
                {"Big companies solve this with call centres and large teams. Vegham gives every business the same: an AI voice agent that answers in seconds, remembers every customer and follows up, in the language the customer speaks."}
              </p>
            </div>
          </div>
        </section>
        <section style={{ borderTop: "1px solid #EFEFEF", borderBottom: "1px solid #EFEFEF", padding: "28px 0", overflow: "hidden" }}>
          <div className="vg-rowL" style={{ display: "flex", width: "max-content", fontFamily: "var(--font-tight), sans-serif", fontSize: "40px", lineHeight: "1", letterSpacing: "-0.04em", color: "#16182A", whiteSpace: "nowrap" }} data-s="s6">
            <span style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              <span>
                {"वेग"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"speed"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"వేగం"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"வேகம்"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"ವೇಗ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"বেগ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
            </span>
            <span aria-hidden="true" style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              <span>
                {"वेग"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"speed"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"వేగం"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"வேகம்"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"ವೇಗ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"বেগ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
            </span>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"What we believe"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Four things"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"we won’t compromise on."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Every customer deserves an answer"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"A message left unanswered is a person left waiting. We build so nobody has to wait."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Built in India, for everyone"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"Made for how people really talk: in many languages, on WhatsApp, on the phone."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Owners stay in charge"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"The AI handles the routine. You decide what it says and when it hands over."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"04"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Respect by default"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"Opt-in only, STOP always works, and your customers’ data stays yours."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", gap: "16px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Talk to us"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Questions, partnerships, press"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"We reply within one working day."}
              </p>
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {"[contact email]"}
              </span>
              <Link href="/contact/" style={{ marginTop: "14px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 22px", borderRadius: "999px", background: "#EDEDEF", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Contact us"}
              </Link>
            </div>
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Careers"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Build Vegham with us"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"We’re a small team that cares about craft, speed and the businesses we serve."}
              </p>
              <Link href="/careers/" style={{ marginTop: "14px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 22px", borderRadius: "999px", background: "#EDEDEF", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"See open roles"}
              </Link>
            </div>
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Registered office"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Vegham"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"[Registered address]"}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 112px", display: "flex", flexWrap: "wrap", gap: "16px" }} data-s="s10 s11">
            <a href="#" className="vg-lift" style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "10px", padding: "32px", borderRadius: "28px", background: "#16182A", color: "#FFFFFF", textDecoration: "none" }}>
              <span style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#A5ABDB" }}>
                {"How we handle your data"}
              </span>
              <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px", lineHeight: "1.15" }}>
                {"Encrypted, never sold,"}
                <br />
                {"always yours."}
              </span>
              <span style={{ color: "#C3C6DA" }}>
                {"Read our security and privacy promises →"}
              </span>
            </a>
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "14px", padding: "32px", borderRadius: "28px", border: "1px solid #ECECF0" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Press kit"}
              </span>
              <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px", lineHeight: "1.15" }}>
                {"Wordmark and colours"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "34px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                  {"vegham"}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECF0" }}>
                  </span>
                  {"White"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#F5F5F7", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Mist"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#16182A", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Ink"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "linear-gradient(100deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777)", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Aurora"}
                </span>
              </div>
              <a href="#" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "42px", padding: "0 18px", borderRadius: "999px", border: "1px solid #D4D4DA", color: "#1F1F1F", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                {"Download press kit (ZIP)"}
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px" }} data-s="s12">
          <div className="vg-aur-host" style={{ position: "relative", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "88px 40px", textAlign: "center", overflow: "hidden" }} data-s="s13">
            <div aria-hidden="true" className="vg-aur-layer" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit" }}>
              <div className="vg-aur1" style={{ position: "absolute", left: "-15%", top: "-45%", width: "130%", height: "95%", filter: "blur(60px)", opacity: ".9", background: "radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,0.55), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,0.45), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,0.50), transparent 70%)" }}>
              </div>
              <div className="vg-aur2" style={{ position: "absolute", left: "-10%", top: "-30%", width: "120%", height: "80%", filter: "blur(70px)", opacity: ".8", background: "radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,0.40), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,0.35), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,0.22), transparent 70%)" }}>
              </div>
              <div className="vg-curtain" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "65%", opacity: ".35", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", opacity: ".55", backgroundImage: "radial-gradient(1px 1px at 12% 18%, #FFFFFF, transparent), radial-gradient(1px 1px at 28% 8%, #FFFFFF, transparent), radial-gradient(1px 1px at 44% 26%, #FFFFFF, transparent), radial-gradient(1px 1px at 63% 12%, #FFFFFF, transparent), radial-gradient(1px 1px at 81% 22%, #FFFFFF, transparent), radial-gradient(1px 1px at 92% 6%, #FFFFFF, transparent), radial-gradient(1px 1px at 6% 40%, #FFFFFF, transparent), radial-gradient(1px 1px at 55% 4%, #FFFFFF, transparent)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(18,20,31,0) 35%, rgba(18,20,31,.85) 100%)" }}>
              </div>
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.045em" }} data-s="s4">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"Let’s answer every"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"customer together."}
                </span>
              </span>
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"Start free for 30 days, or talk to us first."}
            </p>
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
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
