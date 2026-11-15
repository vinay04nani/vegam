// Ported from design board AppSetup2 by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function SetupVoice() {
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
              {"Step 2/4"}
            </span>
            <span style={{ width: "1px", height: "18px", background: "var(--line)", margin: "0 14px" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Save and finish later"}
            </span>
          </div>
          <div className="stepbar">
            <span style={{ display: "block", width: "50%", height: "100%", background: "#10B981" }}>
            </span>
          </div>
          <div style={{ flex: "1", overflow: "hidden", display: "flex", justifyContent: "center", padding: "48px 32px" }} data-s="scroll">
            <div style={{ width: "100%", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h1 className="hero" style={{ margin: "0", fontSize: "38px", fontWeight: "400", lineHeight: "1.12" }}>
                  {"Pick a voice"}
                </h1>
                <p style={{ margin: "10px 0 0", fontSize: "16px", color: "var(--mut)" }}>
                  {"Press play to hear each one say your greeting."}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div className="pick on" style={{ flexDirection: "row", alignItems: "center", gap: "16px", padding: "18px" }}>
                  <span className="tick">
                    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7">
                      </path>
                    </svg>
                  </span>
                  <span className="playb on" style={{ width: "44px", height: "44px" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="5" width="4" height="14" rx="1">
                      </rect>
                      <rect x="14" y="5" width="4" height="14" rx="1">
                      </rect>
                    </svg>
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "16px" }}>
                      {"Warm"}
                    </b>
                    <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                      {"Female · calm, friendly"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "18px" }}>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
                <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "16px", padding: "18px" }}>
                  <span className="playb" style={{ width: "44px", height: "44px" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5l12 7-12 7z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "16px" }}>
                      {"Easy"}
                    </b>
                    <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                      {"Male · relaxed"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "18px" }}>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
                <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "16px", padding: "18px" }}>
                  <span className="playb" style={{ width: "44px", height: "44px" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5l12 7-12 7z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "16px" }}>
                      {"Bright"}
                    </b>
                    <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                      {"Female · upbeat"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "18px" }}>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
                <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "16px", padding: "18px" }}>
                  <span className="playb" style={{ width: "44px", height: "44px" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5l12 7-12 7z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "16px" }}>
                      {"Steady"}
                    </b>
                    <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                      {"Male · clear, formal"}
                    </span>
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "18px" }}>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <div>
                <div className="sec" style={{ marginTop: "0" }}>
                  <span>
                    {"Languages your customers speak"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span className="chip2 on" style={{ height: "38px", padding: "0 16px" }}>
                    {"English"}
                  </span>
                  <span className="chip2 on" style={{ height: "38px", padding: "0 16px" }}>
                    {"Hindi"}
                  </span>
                  <span className="chip2" style={{ height: "38px", padding: "0 16px" }}>
                    {"Kannada"}
                  </span>
                  <span className="chip2" style={{ height: "38px", padding: "0 16px" }}>
                    {"Tamil"}
                  </span>
                  <span className="chip2" style={{ height: "38px", padding: "0 16px" }}>
                    {"Telugu"}
                  </span>
                  <span className="chip2" style={{ height: "38px", padding: "0 16px" }}>
                    {"Marathi"}
                  </span>
                </div>
                <span style={{ display: "block", marginTop: "10px", fontSize: "13px", color: "var(--mut)" }}>
                  {"It switches automatically when a caller speaks another language, or asks to."}
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: "76px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderTop: "1px solid var(--line)" }}>
            <Link href="/setup/" className="obtn" style={{ cursor: "pointer" }}>
              {"Back"}
            </Link>
            <span style={{ flex: "1" }}>
            </span>
            <Link href="/setup/test-call/" className="pbtn" style={{ cursor: "pointer" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6">
                </path>
              </svg>
              {"Continue"}
            </Link>
          </div>
        </div>
      </div>
  );
}
