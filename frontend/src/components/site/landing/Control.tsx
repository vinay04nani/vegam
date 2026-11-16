// Ported from design board LandingV2 (Control) by design/tools/port.py. Sample data is inline.


export default function Control() {
  return (
      <section id="control" style={{ background: "#FFFFFF" }}>
        <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 32px 112px" }} data-s="s11">
          <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
            {"You stay in charge"}
          </span>
          <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s4">
            <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
              <span className="vg-line-in" style={{ display: "block" }}>
                {"It works for you."}
              </span>
            </span>
            <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
              <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                {"You set the rules."}
              </span>
            </span>
          </h2>
          <div className="vg-g3" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "40px" }}>
            <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
              <span style={{ color: "#10B981" }}>
                <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path pathLength="1" d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                  </path>
                  <path pathLength="1" d="M9.5 21h5">
                  </path>
                </svg>
              </span>
              <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                {"You decide what it keeps"}
              </b>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                {"Choose how long memory lasts, switch off personal details, and delete a person the moment they ask."}
              </span>
            </div>
            <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
              <span style={{ color: "#10B981" }}>
                <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path pathLength="1" d="M12 3.5l7 2.5v5.5c0 4.3-2.9 7.4-7 9-4.1-1.6-7-4.7-7-9V6z">
                  </path>
                  <path pathLength="1" d="M9 12l2.2 2.2L15.2 10">
                  </path>
                </svg>
              </span>
              <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                {"It only says what you taught it"}
              </b>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                {"Answers come from your own information. When it does not know, it says so and passes the conversation to you."}
              </span>
            </div>
            <div className="vg-rv" style={{ padding: "32px 0 0", borderTop: "1px solid #E2E2E6" }}>
              <span style={{ color: "#10B981" }}>
                <svg aria-hidden="true" className="vg-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path pathLength="1" d="M4 12h11">
                  </path>
                  <path pathLength="1" d="M11 7l5 5-5 5">
                  </path>
                  <path pathLength="1" d="M20 5v14">
                  </path>
                </svg>
              </span>
              <b style={{ display: "block", marginTop: "18px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-0.025em" }}>
                {"Step in whenever you want"}
              </b>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15.5px", color: "#5C5C5C" }}>
                {"Read or listen to any conversation, take over a chat, or set the moments it should always hand over."}
              </span>
            </div>
          </div>
        </div>
      </section>
  );
}
