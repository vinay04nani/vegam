// Ported from design board Careers by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function CareersPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 88px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", border: "1px solid #E2E2E6", background: "#FFFFFF", fontSize: "14px", color: "#3D3D3D" }} data-s="s1">
              <span className="vg-pulse" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3DD68C" }}>
              </span>
              {"Careers · Coming soon"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "900px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "72px", lineHeight: "1.04", letterSpacing: "-0.045em", color: "#141414" }}>
              {"We’re not hiring yet."}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"But we will be."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "22px auto 0", maxWidth: "600px", fontSize: "19px", lineHeight: "1.65", color: "#3D3D3D" }} data-s="s15">
              {"We’re building the voice agent every business deserves. Leave your email and you’ll be the first to know when we open roles."}
            </p>
            <form className="vg-hero" style={{ animationDelay: ".42s", margin: "30px auto 0", maxWidth: "480px", display: "flex", gap: "8px", padding: "6px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2E2E6", boxShadow: "0 16px 36px -24px rgba(22,24,42,.3)" }} data-s="s1">
              <label htmlFor="cr-em" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                {"Email address"}
              </label>
              <input id="cr-em" type="email" placeholder="you@email.com" style={{ flex: "1", minWidth: "0", height: "44px", padding: "0 16px", border: "0", borderRadius: "999px", background: "transparent", font: "inherit", fontSize: "15px", color: "#1F1F1F", outline: "none" }} data-s="s1" />
              <button type="submit" style={{ flex: "none", height: "44px", padding: "0 20px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                {"Notify me"}
              </button>
            </form>
            <p className="vg-hero" style={{ animationDelay: ".5s", margin: "12px 0 0", fontSize: "13px", color: "#6B6B6B" }}>
              {"One email when roles open. Nothing else."}
            </p>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px 0" }} data-s="s9 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"How we work"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"What working at Vegham"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"will feel like."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <div className="vg-lift" style={{ flex: "1 1 250px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "14px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Small team, real ownership"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Every person shapes the product, not just a ticket queue."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 250px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "14px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Craft matters"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"We sweat the details customers feel: speed, tone, trust."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 250px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "14px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Customers first"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"We talk to business owners every week, and build for them."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 250px", padding: "28px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600" }}>
                  {"04"}
                </span>
                <h3 style={{ margin: "14px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "22px", letterSpacing: "-0.02em" }}>
                  {"Built in India, for everyone"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B", fontSize: "15px" }}>
                  {"Many languages, every channel, businesses everywhere."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px", display: "flex", flexWrap: "wrap", gap: "40px 64px" }} data-s="s9 s11">
            <div style={{ flex: "1 1 320px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "40px", lineHeight: "1.1" }} data-s="s6">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Teams we’ll"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"hire for first"}
                    </span>
                  </span>
                </span>
              </h2>
              <p style={{ margin: "14px 0 0", color: "#6B6B6B", maxWidth: "360px" }}>
                {"Don’t see your role? Write to us anyway at [careers email]. We read everything."}
              </p>
            </div>
            <div style={{ flex: "2 1 560px" }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", fontSize: "17px" }}>
                {"Engineering"}
                <span style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#6B6B6B" }} data-s="s1">
                  {"Opening soon"}
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", fontSize: "17px" }}>
                {"Design"}
                <span style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#6B6B6B" }} data-s="s1">
                  {"Opening soon"}
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", fontSize: "17px" }}>
                {"AI and voice"}
                <span style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#6B6B6B" }} data-s="s1">
                  {"Opening soon"}
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", fontSize: "17px" }}>
                {"Customer success"}
                <span style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#6B6B6B" }} data-s="s1">
                  {"Opening soon"}
                </span>
              </span>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 4px", borderTop: "1px solid #EFEFEF", fontSize: "17px" }}>
                {"Sales"}
                <span style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E2E2E6", color: "#6B6B6B" }} data-s="s1">
                  {"Opening soon"}
                </span>
              </span>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px" }} data-s="s12">
          <div className="vg-aur-host" style={{ position: "relative", overflow: "hidden", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "88px 40px", textAlign: "center" }} data-s="s13">
            <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.045em" }} data-s="s4">
              {"Until then, meet"}
              <br />
              {"the product."}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"See what we’re building, or try it free for 30 days."}
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
