// Ported from design board Help by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function HelpPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 80px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Help centre"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "960px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"How can we help?"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"Answers in minutes."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", lineHeight: "1.65", color: "#3D3D3D" }}>
              {"Guides for every part of Vegham, written for busy owners."}
            </p>
            <form className="vg-hero" role="search" style={{ animationDelay: ".4s", margin: "32px auto 0", maxWidth: "620px", display: "flex", alignItems: "center", gap: "10px", padding: "8px 8px 8px 20px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2E2E6", boxShadow: "0 20px 40px -24px rgba(22,24,42,.25)" }} data-s="s1">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7">
                </circle>
                <path d="M20 20l-3.5-3.5">
                </path>
              </svg>
              <label htmlFor="hc-q" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                {"Search help"}
              </label>
              <input id="hc-q" type="search" placeholder="Search: connect WhatsApp, change hours, invoices…" style={{ flex: "1", minWidth: "0", height: "44px", border: "0", background: "transparent", font: "inherit", fontSize: "15.5px", outline: "none" }} />
              <button type="submit" style={{ height: "44px", padding: "0 20px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                {"Search"}
              </button>
            </form>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 0" }} data-s="s10 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Browse by topic"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Find your"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"answer."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Getting started"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"Set up, test and go live"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"12 articles →"}
                </span>
              </a>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"WhatsApp"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"Connect your number, templates, fees"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"9 articles →"}
                </span>
              </a>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Calls"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"Phone line, forwarding, voice"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"8 articles →"}
                </span>
              </a>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Memory"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"What it remembers, and your controls"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"10 articles →"}
                </span>
              </a>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Billing"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"Plans, invoices, taxes"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"7 articles →"}
                </span>
              </a>
              <a href="#" className="vg-lift" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "6px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF", textDecoration: "none", color: "#1F1F1F" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Account and security"}
                </span>
                <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                  {"Team, roles, privacy"}
                </span>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#8A8A8A" }}>
                  {"6 articles →"}
                </span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", gap: "40px 64px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "40px", lineHeight: "1.1" }} data-s="s6">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Popular"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"right now"}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ flex: "2 1 560px" }}>
              <Link href="/help/connect-whatsapp/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"How to connect your WhatsApp Business number"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </Link>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"Forward missed calls to Vegham"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"Teach Vegham your services and prices"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"Change your opening hours or add a holiday"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"Step into a chat the AI is handling"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none", fontSize: "16px" }}>
                {"Download an invoice"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px" }} data-s="s12">
          <div style={{ maxWidth: "1136px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <div style={{ flex: "1 1 300px", padding: "30px", borderRadius: "28px", background: "#F5F5F7" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "500" }} data-s="s16">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
                {"WhatsApp us"}
              </span>
              <p style={{ margin: "8px 0 0", color: "#6B6B6B" }}>
                {"Fastest way to reach the team. [WhatsApp number]"}
              </p>
            </div>
            <div style={{ flex: "1 1 300px", padding: "30px", borderRadius: "28px", background: "#F5F5F7" }}>
              <span style={{ fontSize: "18px", fontWeight: "500" }} data-s="s16">
                {"Email"}
              </span>
              <p style={{ margin: "8px 0 0", color: "#6B6B6B" }}>
                {"[support email] · We reply within one working day."}
              </p>
            </div>
            <div style={{ flex: "1 1 300px", padding: "30px", borderRadius: "28px", background: "#16182A", color: "#FFFFFF" }}>
              <span style={{ fontSize: "18px", fontWeight: "500" }} data-s="s16">
                {"Book a setup call"}
              </span>
              <p style={{ margin: "8px 0 14px", color: "#C3C6DA" }}>
                {"We’ll set it up with you, screen to screen."}
              </p>
              <Link href="/book-demo/" style={{ display: "inline-flex", height: "42px", alignItems: "center", padding: "0 18px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Pick a time"}
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
