// Ported from design board LandingV2 (Faq) by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Faq() {
  return (
      <section id="faq" style={{ background: "#FFFFFF" }}>
        <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 32px", display: "flex", flexWrap: "wrap", gap: "40px 72px" }} data-s="s9 s11">
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s5">
              {"Frequently asked"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"questions"}
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
            <details open style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"How does Vegham remember people?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"After each call or chat it saves a short note about the person: their name, language, what they asked and anything left unfinished. The next time they get in touch, it reads those notes before it answers."}
              </p>
            </details>
            <details style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"Which channels can I connect?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"Phone calls, WhatsApp, Instagram, Messenger, Telegram and a link you can share or place on your website. Voice works on phone calls and the link. Instagram, Messenger and Telegram are chat."}
              </p>
            </details>
            <details style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"Does it work in my country?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"The link and the chat channels work anywhere. Phone numbers depend on the country, so tell us where you are and we will confirm before you start."}
              </p>
            </details>
            <details style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"What happens when it does not know the answer?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"It says so, takes a message and hands the conversation to you with a summary. It does not make things up."}
              </p>
            </details>
            <details style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"Can a customer ask to be forgotten?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"Yes. You can delete one person’s memory in a click, and you choose how long memory is kept for everyone."}
              </p>
            </details>
            <details style={{ borderTop: "1px solid #E8E8EC", padding: "22px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "20px", letterSpacing: "-0.02em" }}>
                {"Will customers know they are talking to an AI?"}
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #E2E2E6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5C5C5C" }}>
                  {"+"}
                </span>
              </summary>
              <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "16px", color: "#5C5C5C" }}>
                {"Yes. Vegham introduces itself as your assistant and never pretends to be a person."}
              </p>
            </details>
          </div>
        </div>
      </section>
  );
}
