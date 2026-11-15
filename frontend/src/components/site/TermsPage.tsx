// Ported from design board Terms by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function TermsPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 48px" }} data-s="s11">
            <span style={{ fontSize: "13px", color: "#6B6B6B" }}>
              {"Legal · Last updated [date]"}
            </span>
            <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "56px", lineHeight: "1.05", color: "#141414" }}>
              {"Terms and conditions"}
            </h1>
            <div role="tablist" aria-label="Policies" style={{ marginTop: "24px", display: "inline-flex", flexWrap: "wrap", gap: "4px", padding: "4px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E6E6EA", fontSize: "14px" }} data-s="s1">
              <span role="tab" style={{ padding: "7px 16px", color: "#5C5C5C" }}>
                {"Privacy"}
              </span>
              <span role="tab" aria-selected="true" style={{ padding: "7px 16px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF" }} data-s="s1">
                {"Terms"}
              </span>
              <span role="tab" style={{ padding: "7px 16px", color: "#5C5C5C" }}>
                {"Data protection (DPDP)"}
              </span>
              <span role="tab" style={{ padding: "7px 16px", color: "#5C5C5C" }}>
                {"Cookies"}
              </span>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 32px 112px", display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-start" }} data-s="s11">
            <nav aria-label="On this page" style={{ flex: "0 1 260px", position: "sticky", top: "96px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B", display: "block", margin: "0 12px 10px" }}>
                {"On this page"}
              </span>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#16182A", background: "#F1F1F4", fontWeight: "500", textDecoration: "none" }}>
                {"Accepting these terms"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"The service"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Your account"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Free pilot, plans and billing"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Fair use"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Your data and your customers"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"WhatsApp, Meta and phone rules"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"AI answers and your responsibility"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Cancelling and ending"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Liability"}
              </a>
              <a href="#" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Governing law"}
              </a>
              <Link href="/contact/" style={{ display: "block", padding: "8px 12px", borderRadius: "12px", fontSize: "14.5px", color: "#5C5C5C", textDecoration: "none" }}>
                {"Contact us"}
              </Link>
            </nav>
            <article style={{ flex: "1 1 560px", maxWidth: "760px" }}>
              <div style={{ padding: "18px 20px", borderRadius: "20px", background: "#F5F5F7", fontSize: "15px", color: "#3D3D3D" }}>
                <b style={{ fontWeight: "600" }}>
                  {"In short:"}
                </b>
                {" use Vegham fairly, keep your customers’ trust, and you can cancel any time on monthly plans. Your data stays yours. [Summary to be confirmed by your lawyer.]"}
              </div>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"1. Accepting these terms"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Accepting these terms” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"2. The service"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “The service” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"3. Your account"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Your account” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"4. Free pilot, plans and billing"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Free pilot, plans and billing” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"5. Fair use"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Fair use” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"6. Your data and your customers"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Your data and your customers” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"7. WhatsApp, Meta and phone rules"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “WhatsApp, Meta and phone rules” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"8. AI answers and your responsibility"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “AI answers and your responsibility” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"9. Cancelling and ending"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Cancelling and ending” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"10. Liability"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Liability” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"11. Governing law"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Governing law” to be provided by your lawyer.]"}
                </p>
              </section>
              <section style={{ padding: "28px 0", borderTop: "1px solid #EFEFEF" }}>
                <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "28px", letterSpacing: "-0.02em" }}>
                  {"12. Contact us"}
                </h2>
                <p style={{ margin: "12px 0 0", color: "#8A8A8A", fontSize: "16px", lineHeight: "1.75" }}>
                  {"[Terms text for “Contact us” to be provided by your lawyer.]"}
                </p>
              </section>
            </article>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
