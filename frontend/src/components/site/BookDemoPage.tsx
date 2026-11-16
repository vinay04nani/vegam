// Ported from design board BookDemo by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function BookDemoPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "40", padding: "0 16px" }}>
          <div className="vg-hdr-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", border: "1px solid transparent", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }} data-s="s11">
            <span style={{ flex: "1 1 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
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
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
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
                    <Link href="/product/#people" className="vg-flink" style={{ fontSize: "14px", color: "#6B6B6B", textDecoration: "none" }}>
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
