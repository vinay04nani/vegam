// Ported from design board AppSetup1 by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function SetupBusiness() {
  return (
      <div className="app" style={{ position: "relative", minHeight: "100dvh", display: "flex", overflow: "hidden", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "14px", lineHeight: "1.45" }}>
        <div style={{ position: "relative", flex: "1", minHeight: "100dvh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "64px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderBottom: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "22px", letterSpacing: "-0.045em", background: "linear-gradient(90deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
            </span>
            <span style={{ flex: "1" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Step 1/4"}
            </span>
            <span style={{ width: "1px", height: "18px", background: "var(--line)", margin: "0 14px" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Save and finish later"}
            </span>
          </div>
          <div className="stepbar">
            <span style={{ display: "block", width: "25%", height: "100%", background: "#10B981" }}>
            </span>
          </div>
          <div style={{ flex: "1", overflow: "hidden", display: "flex", justifyContent: "center", padding: "48px 32px" }} data-s="scroll">
            <div style={{ width: "100%", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h1 className="hero" style={{ margin: "0", fontSize: "38px", fontWeight: "400", lineHeight: "1.12" }}>
                  {"Let’s teach Vegham about your business"}
                </h1>
                <p style={{ margin: "10px 0 0", fontSize: "16px", color: "var(--mut)" }}>
                  {"Paste your website. Vegham reads it and learns your hours, prices and common questions."}
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="fld" style={{ flex: "1", height: "54px", borderRadius: "14px", fontSize: "16px", gap: "10px" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9">
                    </circle>
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18">
                    </path>
                  </svg>
                  {"nilaandco.in"}
                </span>
                <span className="pbtn">
                  {"Read my website"}
                </span>
              </div>
              <div>
                <div className="sec" style={{ marginTop: "0" }}>
                  <span>
                    {"What Vegham learned · 14 pages read"}
                  </span>
                  <span style={{ color: "#10B981", fontWeight: "500" }}>
                    {"Done"}
                  </span>
                </div>
                <div className="list">
                  <div className="li">
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span className="k">
                      {"Business name"}
                    </span>
                    <span className="v" style={{ color: "var(--text)" }}>
                      {"Nila & Co"}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Edit"}
                    </span>
                  </div>
                  <div className="li">
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span className="k">
                      {"Address"}
                    </span>
                    <span className="v" style={{ color: "var(--text)" }}>
                      {"12, 100 Feet Rd, Indiranagar"}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Edit"}
                    </span>
                  </div>
                  <div className="li">
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span className="k">
                      {"Hours"}
                    </span>
                    <span className="v" style={{ color: "var(--text)" }}>
                      {"Mon–Fri 9–8 · Sat 10–6 · Sun closed"}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Edit"}
                    </span>
                  </div>
                  <div className="li">
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span className="k">
                      {"Services and prices"}
                    </span>
                    <span className="v" style={{ color: "var(--text)" }}>
                      {"12 found · Consultation ₹800, Group session ₹350…"}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Edit"}
                    </span>
                  </div>
                  <div className="li">
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span className="k">
                      {"Common questions"}
                    </span>
                    <span className="v" style={{ color: "var(--text)" }}>
                      {"Parking, walk-ins, payment"}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"Edit"}
                    </span>
                  </div>
                </div>
              </div>
              <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                {"No website? "}
                <span style={{ color: "var(--text)", fontWeight: "500" }}>
                  {"Describe your business instead"}
                </span>
                {" or "}
                <span style={{ color: "var(--text)", fontWeight: "500" }}>
                  {"upload a price list"}
                </span>
                {"."}
              </span>
            </div>
          </div>
          <div style={{ height: "76px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderTop: "1px solid var(--line)" }}>
            <span style={{ flex: "1" }}>
            </span>
            <Link href="/setup/voice/" className="pbtn" style={{ cursor: "pointer" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6">
                </path>
              </svg>
              {"Looks right, continue"}
            </Link>
          </div>
        </div>
      </div>
  );
}
