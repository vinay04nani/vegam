// Ported from design board AppSetup3 by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function SetupTestCall() {
  return (
      <div className="app" style={{ position: "relative", minHeight: "100dvh", display: "flex", overflow: "hidden", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "14px", lineHeight: "1.45" }}>
        <div style={{ position: "relative", flex: "1", minHeight: "100dvh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "64px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderBottom: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "22px", letterSpacing: "-0.045em", color: "#10B981" }}>
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
            </span>
            <span style={{ flex: "1" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Step 3/4"}
            </span>
            <span style={{ width: "1px", height: "18px", background: "var(--line)", margin: "0 14px" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Save and finish later"}
            </span>
          </div>
          <div className="stepbar">
            <span style={{ display: "block", width: "75%", height: "100%", background: "#10B981" }}>
            </span>
          </div>
          <div style={{ flex: "1", overflow: "hidden", display: "flex", justifyContent: "center", padding: "48px 32px" }} data-s="scroll">
            <div style={{ width: "100%", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h1 className="hero" style={{ margin: "0", fontSize: "38px", fontWeight: "400", lineHeight: "1.12" }}>
                  {"Talk to your receptionist"}
                </h1>
                <p style={{ margin: "10px 0 0", fontSize: "16px", color: "var(--mut)" }}>
                  {"Make one test call before customers do. Most people are surprised."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "28px", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "28px", borderRadius: "22px", background: "var(--side)", border: "1px solid var(--line)" }}>
                  <span className="orbl" style={{ width: "150px", height: "150px", borderRadius: "50%", background: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <span className="eq" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "7px", height: "33px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "60px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "93px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "54px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "81px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "45px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "7px", height: "27px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                    </span>
                  </span>
                  <b style={{ fontSize: "17px", fontWeight: "600" }}>
                    {"You’re talking to Vegham"}
                  </b>
                  <span style={{ fontSize: "13px", color: "var(--mut)", marginTop: "-10px" }}>
                    {"0:31 · in your browser"}
                  </span>
                  <span className="obtn">
                    {"End call"}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"Try these"}
                  </span>
                  <div className="list">
                    <div className="li">
                      <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      <span className="k">
                        {"Ask a price"}
                      </span>
                      <span className="v">
                        {"“How much is a consultation?”"}
                      </span>
                    </div>
                    <div className="li">
                      <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      <span className="k">
                        {"Switch language"}
                      </span>
                      <span className="v">
                        {"“Hindi mein baat karein?”"}
                      </span>
                    </div>
                    <div className="li">
                      <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", boxShadow: "inset 0 0 0 1.5px var(--mut2)" }}>
                      </span>
                      <span className="k">
                        {"Book a visit"}
                      </span>
                      <span className="v">
                        {"“Can I come Saturday at 11?”"}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"Or call "}
                    <b style={{ color: "var(--text)", fontWeight: "600" }}>
                      {"080 4719 2200"}
                    </b>
                    {" from your phone. Call twice and it will remember you."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "76px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderTop: "1px solid var(--line)" }}>
            <Link href="/setup/voice/" className="obtn" style={{ cursor: "pointer" }}>
              {"Back"}
            </Link>
            <span style={{ flex: "1" }}>
            </span>
            <Link href="/setup/go-live/" className="pbtn" style={{ cursor: "pointer" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6">
                </path>
              </svg>
              {"Sounds good, continue"}
            </Link>
          </div>
        </div>
      </div>
  );
}
