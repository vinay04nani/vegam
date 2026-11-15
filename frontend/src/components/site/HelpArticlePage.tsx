// Ported from design board HelpArticle by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function HelpArticlePage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 32px 112px", display: "flex", flexWrap: "wrap", gap: "32px 56px", alignItems: "flex-start" }} data-s="s11">
            <nav aria-label="Help articles" style={{ flex: "0 1 260px", position: "sticky", top: "96px" }}>
              <Link href="/help/" style={{ display: "inline-block", margin: "0 12px 8px", color: "#5C5C5C", textDecoration: "none", fontSize: "14px" }}>
                {"← Help centre"}
              </Link>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B", display: "block", margin: "18px 12px 8px" }}>
                {"Getting started"}
              </span>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", color: "#5C5C5C" }}>
                {"Set up Vegham in minutes"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", color: "#5C5C5C" }}>
                {"Test your assistant"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", color: "#5C5C5C" }}>
                {"Go live"}
              </a>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B", display: "block", margin: "18px 12px 8px" }}>
                {"WhatsApp"}
              </span>
              <Link href="/help/connect-whatsapp/" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", background: "#F1F1F4", color: "#16182A", fontWeight: "500" }}>
                {"How to connect your WhatsApp Business number"}
              </Link>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", color: "#5C5C5C" }}>
                {"Keep using the WhatsApp Business app"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", textDecoration: "none", color: "#5C5C5C" }}>
                {"Message templates and fees"}
              </a>
            </nav>
            <article style={{ flex: "1 1 560px", maxWidth: "760px" }}>
              <span style={{ fontSize: "13.5px", color: "#6B6B6B" }}>
                <Link href="/help/" style={{ color: "#6B6B6B" }}>
                  {"Help centre"}
                </Link>
                {" / "}
                <Link href="/product/#channels" style={{ color: "#6B6B6B" }}>
                  {"WhatsApp"}
                </Link>
              </span>
              <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08", color: "#141414" }} data-s="s3">
                {"How to connect your WhatsApp Business number"}
              </h1>
              <span style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", marginTop: "14px", fontSize: "14px", color: "#6B6B6B" }}>
                <span>
                  {"5 min read"}
                </span>
                <span>
                  {"Updated [date]"}
                </span>
                <span>
                  {"Works on every plan"}
                </span>
              </span>
              <div style={{ marginTop: "26px", padding: "18px 20px", borderRadius: "20px", background: "#F5F5F7", fontSize: "15.5px", color: "#3D3D3D" }}>
                <b style={{ fontWeight: "600" }}>
                  {"Before you start:"}
                </b>
                {" keep your phone with the WhatsApp number nearby, and access to the Facebook page for your business."}
              </div>
              <div style={{ marginTop: "22px" }}>
                <div style={{ display: "flex", gap: "18px", padding: "22px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#16182A", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                    {"1"}
                  </span>
                  <div style={{ flex: "1" }}>
                    <h3 style={{ margin: "4px 0 6px", fontSize: "19px", fontWeight: "500" }} data-s="s15">
                      {"Open Settings in Vegham"}
                    </h3>
                    <p style={{ margin: "0", color: "#3D3D3D", fontSize: "16px", lineHeight: "1.7" }}>
                      {"Go to "}
                      <b style={{ fontWeight: "600" }}>
                        {"Settings → Phone and WhatsApp"}
                      </b>
                      {" and choose "}
                      <b style={{ fontWeight: "600" }}>
                        {"WhatsApp"}
                      </b>
                      {"."}
                    </p>
                    <div role="img" aria-label="the Channels page with WhatsApp highlighted" style={{ marginTop: "16px", height: "220px", borderRadius: "20px", border: "1px dashed #C9C9D1", background: "#F7F7F8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#8A8A8A" }}>
                      {"[Screenshot: Settings with WhatsApp highlighted]"}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "18px", padding: "22px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#16182A", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                    {"2"}
                  </span>
                  <div style={{ flex: "1" }}>
                    <h3 style={{ margin: "4px 0 6px", fontSize: "19px", fontWeight: "500" }} data-s="s15">
                      {"Log in with Facebook"}
                    </h3>
                    <p style={{ margin: "0", color: "#3D3D3D", fontSize: "16px", lineHeight: "1.7" }}>
                      {"A Meta window opens. Log in with the account that manages your business page, then pick your business."}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "18px", padding: "22px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#16182A", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                    {"3"}
                  </span>
                  <div style={{ flex: "1" }}>
                    <h3 style={{ margin: "4px 0 6px", fontSize: "19px", fontWeight: "500" }} data-s="s15">
                      {"Add your number"}
                    </h3>
                    <p style={{ margin: "0", color: "#3D3D3D", fontSize: "16px", lineHeight: "1.7" }}>
                      {"Enter your WhatsApp Business number and confirm it with the code Meta sends you."}
                    </p>
                    <div role="img" aria-label="the Meta number confirmation step" style={{ marginTop: "16px", height: "220px", borderRadius: "20px", border: "1px dashed #C9C9D1", background: "#F7F7F8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#8A8A8A" }}>
                      {"[Screenshot: the Meta number confirmation step]"}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "18px", padding: "22px 0", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#16182A", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                    {"4"}
                  </span>
                  <div style={{ flex: "1" }}>
                    <h3 style={{ margin: "4px 0 6px", fontSize: "19px", fontWeight: "500" }} data-s="s15">
                      {"Check it’s connected"}
                    </h3>
                    <p style={{ margin: "0", color: "#3D3D3D", fontSize: "16px", lineHeight: "1.7" }}>
                      {"Back in Vegham you’ll see "}
                      <b style={{ fontWeight: "600" }}>
                        {"WhatsApp · Connected"}
                      </b>
                      {". Send a test message from another phone and watch it reply."}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "8px", padding: "18px 20px", borderRadius: "20px", border: "1px solid #ECECF0", display: "flex", gap: "12px", fontSize: "15px", color: "#3D3D3D" }}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9">
                  </circle>
                  <path d="M12 8h.01M11 12h1v5h1">
                  </path>
                </svg>
                <span>
                  <b style={{ fontWeight: "600" }}>
                    {"Good to know:"}
                  </b>
                  {" many numbers can keep using the WhatsApp Business app alongside Vegham. We check this during setup."}
                </span>
              </div>
              <div style={{ marginTop: "36px", padding: "22px 24px", borderRadius: "20px", background: "#F7F7F8", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  {"Was this helpful?"}
                </span>
                <span style={{ display: "flex", gap: "8px" }}>
                  <button type="button" style={{ height: "40px", padding: "0 18px", border: "1px solid #E2E2E6", borderRadius: "999px", background: "#FFFFFF", font: "inherit", cursor: "pointer" }} data-s="s1 s2">
                    {"Yes"}
                  </button>
                  <button type="button" style={{ height: "40px", padding: "0 18px", border: "1px solid #E2E2E6", borderRadius: "999px", background: "#FFFFFF", font: "inherit", cursor: "pointer" }} data-s="s1 s2">
                    {"No"}
                  </button>
                </span>
              </div>
              <h2 style={{ margin: "40px 0 6px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "26px", letterSpacing: "-0.02em" }}>
                {"Related"}
              </h2>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", padding: "14px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none" }}>
                {"Message templates and fees"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", padding: "14px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none" }}>
                {"Keep using the WhatsApp Business app"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <a href="#" style={{ display: "flex", justifyContent: "space-between", padding: "14px 4px", borderTop: "1px solid #EFEFEF", color: "#1F1F1F", textDecoration: "none" }}>
                {"Test your assistant before going live"}
                <span aria-hidden="true" style={{ color: "#8A8A8A" }}>
                  {"→"}
                </span>
              </a>
              <div style={{ marginTop: "32px", padding: "24px", borderRadius: "20px", background: "#16182A", color: "#FFFFFF", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span>
                  <b style={{ display: "block", fontWeight: "500", fontSize: "17px" }}>
                    {"Still stuck?"}
                  </b>
                  <span style={{ color: "#C3C6DA" }}>
                    {"We’ll connect it with you on a call."}
                  </span>
                </span>
                <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                  {"Book a setup call"}
                </Link>
              </div>
            </article>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
