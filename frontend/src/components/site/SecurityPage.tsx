// Ported from design board Security by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function SecurityPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 80px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Security and privacy"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "960px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"Your customers trust you."}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"We protect that trust."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "620px", fontSize: "18.5px", lineHeight: "1.65", color: "#3D3D3D" }}>
              {"How Vegham handles your business’s and your customers’ data, in plain language."}
            </p>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px" }} data-s="s9 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Our principles"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Six promises,"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"kept by design."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Encrypted"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Conversations and customer details are encrypted in transit and at rest."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Separated per business"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Each business’s data is kept apart. Your team sees only yours."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Never sold"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"We never sell your data or use it to train general AI models."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Yours to take or delete"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Export your contacts and conversations at any time, or delete them."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Opt-in only"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Marketing messages go only to customers who agreed. STOP always works, instantly."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 300px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "40px", height: "40px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z">
                    </path>
                    <path d="M9 12l2 2 4-4">
                    </path>
                  </svg>
                </span>
                <h3 style={{ margin: "16px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Honest about AI"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Vegham says it’s an AI assistant when asked and at the start of every call."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#F7F7F8" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px" }} data-s="s9 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"What we collect and why"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Only what’s needed"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"to run your agent."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div className="vg-cmp" style={{ marginTop: "40px", overflowX: "auto", background: "#FFFFFF", border: "1px solid #ECECF0", borderRadius: "20px" }}>
              <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", fontSize: "15px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "16px", fontSize: "13px", color: "#6B6B6B", fontWeight: "500" }}>
                      {"Data"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px", fontSize: "13px", color: "#6B6B6B", fontWeight: "500" }}>
                      {"What it includes"}
                    </th>
                    <th scope="col" style={{ textAlign: "left", padding: "16px", fontSize: "13px", color: "#6B6B6B", fontWeight: "500" }}>
                      {"Why"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid #EFEFEF" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "16px", fontWeight: "500" }}>
                      {"Your business details"}
                    </th>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"Name, address, hours, services and prices"}
                    </td>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"So the AI answers correctly"}
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #EFEFEF" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "16px", fontWeight: "500" }}>
                      {"Customer conversations"}
                    </th>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"Messages, call recordings and summaries"}
                    </td>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"So your team can see and step in"}
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #EFEFEF" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "16px", fontWeight: "500" }}>
                      {"Customer contact details"}
                    </th>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"Name, phone number, consent record"}
                    </td>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"To reply, remind and respect opt-outs"}
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #EFEFEF" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "16px", fontWeight: "500" }}>
                      {"Memory"}
                    </th>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"Preferences, language and unfinished conversations"}
                    </td>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"So it can pick up where you left off"}
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #EFEFEF" }}>
                    <th scope="row" style={{ textAlign: "left", padding: "16px", fontWeight: "500" }}>
                      {"Your team"}
                    </th>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"Names, emails, roles"}
                    </td>
                    <td style={{ padding: "16px", color: "#5C5C5C" }}>
                      {"To control who can see what"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ padding: "112px 32px 0" }} data-s="s9">
          <div className="vg-aur-host" style={{ position: "relative", overflow: "hidden", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "64px 56px", display: "flex", flexWrap: "wrap", gap: "32px 64px" }}>
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
            <div style={{ flex: "1 1 340px" }}>
              <span style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#8C90A8" }}>
                {"Your controls"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "42px", lineHeight: "1.1" }}>
                {"You decide."}
                <br />
                <span style={{ color: "#8C90A8" }}>
                  {"Always."}
                </span>
              </h2>
              <p style={{ margin: "14px 0 0", color: "#A3A7BD" }}>
                {"Every setting below is in your Vegham account, under Settings → Privacy."}
              </p>
            </div>
            <ul style={{ flex: "1 1 420px", margin: "0", padding: "0", listStyle: "none" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"Who on your team can see conversations (roles)"}
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"How long conversations are kept"}
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"Call-recording notice wording"}
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"AI disclosure wording"}
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"Opt-out list and consent log"}
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #2A2D40", color: "#DDE0EE" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7">
                  </path>
                </svg>
                {"Download or delete all data"}
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px", display: "flex", flexWrap: "wrap", gap: "16px" }} data-s="s9 s11">
            <div style={{ flex: "1 1 340px", padding: "32px", border: "1px solid #ECECF0", borderRadius: "28px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Questions about data"}
              </span>
              <h3 style={{ margin: "10px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "28px" }}>
                {"Talk to us"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"[privacy email]"}
              </p>
            </div>
            <div style={{ flex: "1 1 340px", padding: "32px", border: "1px solid #ECECF0", borderRadius: "28px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Found a security issue?"}
              </span>
              <h3 style={{ margin: "10px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "28px" }}>
                {"Report it responsibly"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"[security email]. We reply within [X] working days."}
              </p>
            </div>
            <div style={{ flex: "1 1 340px", padding: "32px", border: "1px solid #ECECF0", borderRadius: "28px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"The fine print"}
              </span>
              <h3 style={{ margin: "10px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "28px" }}>
                {"Policies"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                <Link href="/privacy/" style={{ color: "#16182A" }}>
                  {"Privacy policy"}
                </Link>
                {" · "}
                <Link href="/terms/" style={{ color: "#16182A" }}>
                  {"Terms"}
                </Link>
                {" · "}
                <a href="#" style={{ color: "#16182A" }}>
                  {"Data protection (DPDP)"}
                </a>
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px" }} data-s="s12">
          <div className="vg-aur-host" style={{ position: "relative", overflow: "hidden", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "88px 40px", textAlign: "center" }} data-s="s13">
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
              {"Never miss a customer"}
              <br />
              {"again."}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"Set up your agent in minutes and make your first test call today."}
            </p>
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Start free"}
              </Link>
              <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
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
