// Ported from design board BookDemo by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";

export default function BookDemoPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "40", padding: "0 16px" }}>
          <div className="vg-hdr-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", border: "1px solid transparent", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }} data-s="s11">
            <span style={{ flex: "1 1 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {"vegham"}
            </span>
            <nav aria-label="Site" style={{ display: "flex", flexWrap: "wrap", gap: "32px", fontSize: "15px", color: "#2B2B2B" }}>
              <Link href="/product/" style={{ textDecoration: "none" }}>
                {"Product"}
              </Link>
              <Link href="/how-it-works/" style={{ textDecoration: "none" }}>
                {"How it works"}
              </Link>
              <Link href="/pricing/" style={{ textDecoration: "none" }}>
                {"Pricing"}
              </Link>
              <Link href="/company/" style={{ textDecoration: "none" }}>
                {"Company"}
              </Link>
            </nav>
            <div style={{ flex: "1 1 0", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <Link href="/login/" style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 20px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500" }} data-s="s1 s2">
                {"Log in"}
              </Link>
              <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 20px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", color: "#1F1F1F", textDecoration: "none", fontSize: "15px", fontWeight: "500" }} data-s="s1 s2">
                {"Book a demo"}
              </Link>
            </div>
            <label htmlFor="vg-menu" className="vg-mbtn" aria-label="Open menu" style={{ width: "40px", height: "40px", borderRadius: "12px", border: "1px solid #E2E2E6", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }} data-s="s2">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16">
                </path>
              </svg>
            </label>
          </div>
        </header>
        <input type="checkbox" id="vg-menu" aria-label="Open menu" style={{ position: "absolute", opacity: "0", pointerEvents: "none" }} />
        <div className="vg-mpanel" role="dialog" aria-label="Menu" style={{ position: "fixed", inset: "0", zIndex: "60", flexDirection: "column", padding: "18px 20px 28px", background: "#0B0D18", color: "#FFFFFF", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {"vegham"}
            </span>
            <label htmlFor="vg-menu" aria-label="Close menu" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18">
                </path>
              </svg>
            </label>
          </div>
          <nav aria-label="Mobile" style={{ marginTop: "28px" }}>
            <Link href="/product/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Product"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/how-it-works/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"How it works"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/pricing/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Pricing"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/company/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Company"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/help/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Help centre"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
          </nav>
          <div style={{ marginTop: "auto", paddingTop: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/signup/" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
              {"Start free"}
            </Link>
            <Link href="/login/" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.22)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
              {"Log in"}
            </Link>
          </div>
        </div>
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 80px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Book a demo"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "960px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"See Vegham answer"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"your customers."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", lineHeight: "1.65", color: "#3D3D3D" }}>
              {"A 30-minute call with our team, on Google Meet or the phone, in your language."}
            </p>
          </div>
        </section>
        <section style={{ position: "relative", marginTop: "48px" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "0 32px 112px", display: "flex", flexWrap: "wrap", gap: "32px 56px", alignItems: "flex-start" }} data-s="s11 s12">
            <div style={{ flex: "1.3 1 520px", background: "#FFFFFF", border: "1px solid #ECECF0", borderRadius: "28px", padding: "36px", boxShadow: "0 40px 80px -40px rgba(22,24,42,.35)" }}>
              <h2 style={{ margin: "0 0 24px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "30px", letterSpacing: "-0.03em" }}>
                {"Tell us a little about you"}
              </h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label htmlFor="bd-n" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Your name"}
                    </label>
                    <input id="bd-n" type="text" placeholder="Vinay Kumar" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                  </div>
                  <div>
                    <label htmlFor="bd-b" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Business name"}
                    </label>
                    <input id="bd-b" type="text" placeholder="Nila & Co" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label htmlFor="bd-p" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Mobile (WhatsApp)"}
                    </label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ flex: "none", display: "inline-flex", alignItems: "center", height: "48px", padding: "0 12px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "15px" }}>
                        {"+91"}
                      </span>
                      <input id="bd-p" type="tel" placeholder="98765 43210" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bd-e" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Work email "}
                      <span style={{ color: "#8A8A8A", fontWeight: "400" }}>
                        {"(optional)"}
                      </span>
                    </label>
                    <input id="bd-e" type="email" placeholder="you@business.com" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                  </div>
                </div>
                <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
                  <legend style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B", padding: "0" }}>
                    {"What would you like help with?"}
                  </legend>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"Replying to every message"}
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"Answering calls"}
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"Remembering customers"}
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"Follow-ups"}
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"More than one location"}
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", border: "1px solid #E2E2E6", borderRadius: "12px", fontSize: "14.5px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "17px", height: "17px", margin: "0", accentColor: "#16182A" }} />
                      {"Something else"}
                    </label>
                  </div>
                </fieldset>
                <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
                  <legend style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B", padding: "0" }}>
                    {"Pick a time "}
                    <span style={{ color: "#8A8A8A", fontWeight: "400" }}>
                      {"(30 minutes, IST)"}
                    </span>
                  </legend>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                    <input type="radio" name="vg-slot" id="vg-slot0" style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot0" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Today · 4:00 PM"}
                    </label>
                    <input type="radio" name="vg-slot" id="vg-slot1" style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot1" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Today · 6:30 PM"}
                    </label>
                    <input type="radio" name="vg-slot" id="vg-slot2" defaultChecked style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot2" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Tomorrow · 11:00 AM"}
                    </label>
                    <input type="radio" name="vg-slot" id="vg-slot3" style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot3" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Tomorrow · 3:00 PM"}
                    </label>
                    <input type="radio" name="vg-slot" id="vg-slot4" style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot4" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Mon · 10:30 AM"}
                    </label>
                    <input type="radio" name="vg-slot" id="vg-slot5" style={{ position: "absolute", opacity: "0" }} />
                    <label htmlFor="vg-slot5" className="vg-qpill" style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", textAlign: "center", cursor: "pointer" }}>
                      {"Mon · 5:00 PM"}
                    </label>
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="bd-l" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                    {"Language for the call"}
                  </label>
                  <select id="bd-l" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }}>
                    <option>
                      {"English"}
                    </option>
                    <option>
                      {"हिन्दी"}
                    </option>
                    <option>
                      {"తెలుగు"}
                    </option>
                    <option>
                      {"தமிழ்"}
                    </option>
                  </select>
                </div>
                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "50px", padding: "0 24px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", border: "0", font: "inherit", fontSize: "15.5px", cursor: "pointer", marginTop: "4px" }} data-s="s1">
                  {"Book my demo"}
                </button>
                <p style={{ margin: "0", fontSize: "13px", color: "#8A8A8A", textAlign: "center" }}>
                  {"We’ll confirm on WhatsApp. No spam, ever."}
                </p>
              </form>
            </div>
            <div style={{ flex: "1 1 360px", paddingTop: "24px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"On the call"}
              </span>
              <ul style={{ margin: "16px 0 0", padding: "0", listStyle: "none" }}>
                <li style={{ display: "flex", gap: "16px", padding: "18px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                    {"1"}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "17px", fontWeight: "500" }}>
                      {"A quick look at your business"}
                    </span>
                    <span style={{ display: "block", marginTop: "2px", fontSize: "15px", color: "#6B6B6B" }}>
                      {"How customers reach you today and where enquiries slip through."}
                    </span>
                  </span>
                </li>
                <li style={{ display: "flex", gap: "16px", padding: "18px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                    {"2"}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "17px", fontWeight: "500" }}>
                      {"A live demo on your channels"}
                    </span>
                    <span style={{ display: "block", marginTop: "2px", fontSize: "15px", color: "#6B6B6B" }}>
                      {"Watch Vegham answer a WhatsApp, take a call and remember the caller."}
                    </span>
                  </span>
                </li>
                <li style={{ display: "flex", gap: "16px", padding: "18px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                    {"3"}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "17px", fontWeight: "500" }}>
                      {"A clear next step"}
                    </span>
                    <span style={{ display: "block", marginTop: "2px", fontSize: "15px", color: "#6B6B6B" }}>
                      {"If it fits, we set up your free 30-day pilot. If not, no follow-up pressure."}
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ marginTop: "28px", padding: "22px", borderRadius: "20px", background: "#F5F5F7", fontSize: "15px", color: "#3D3D3D" }}>
                <b style={{ fontWeight: "600", color: "#1F1F1F" }}>
                  {"Rather just try it?"}
                </b>
                <br />
                {"Start free and set up in minutes. "}
                <Link href="/signup/" style={{ color: "#16182A" }}>
                  {"Start free →"}
                </Link>
              </div>
              <div style={{ marginTop: "14px", padding: "22px", borderRadius: "20px", border: "1px solid #ECECF0", fontSize: "15px", color: "#3D3D3D", display: "flex", gap: "12px", alignItems: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
                <span>
                  {"Prefer WhatsApp? Message us at "}
                  <b style={{ fontWeight: "600" }}>
                    {"[WhatsApp number]"}
                  </b>
                </span>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
