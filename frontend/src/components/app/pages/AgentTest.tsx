// Ported from design board AppAgentTest by design/tools/port.py. Sample data is inline.


export default function AgentTest() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div style={{ flex: "1", display: "flex", minHeight: "0" }}>
              <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", padding: "22px 40px", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"Call as"}
                  </span>
                  <span className="perm">
                    <span className="">
                      {"A new caller"}
                    </span>
                    <span className="on">
                      {"Rohan (returning)"}
                    </span>
                    <span className="">
                      {"An unhappy customer"}
                    </span>
                  </span>
                </div>
                <span className="orbl" style={{ width: "104px", height: "104px", borderRadius: "50%", background: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <span className="eq" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "5px", height: "23px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "42px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "64px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "37px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "56px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "31px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "5px", height: "19px", borderRadius: "3px", background: "#10B981" }}>
                    </span>
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}>
                  </span>
                  {"Call ended · 0:48"}
                </span>
                <div style={{ width: "100%", maxWidth: "620px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "12px" }}>
                  <div style={{ alignSelf: "flex-start", maxWidth: "76%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
                    <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                      {"Vegham"}
                    </span>
                    <div style={{ padding: "10px 14px", borderRadius: "16px", fontSize: "14.5px", lineHeight: "1.5", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                      {"Hi Rohan, good to hear from you again! All set for Saturday at 10 with your group of 5?"}
                    </div>
                    <span style={{ display: "flex", gap: "6px" }}>
                      <span className="src">
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                          </path>
                          <path d="M3 3v5h5">
                          </path>
                          <path d="M12 7v5l3 2">
                          </path>
                        </svg>
                        {"from memory"}
                      </span>
                    </span>
                  </div>
                  <div style={{ alignSelf: "flex-end", maxWidth: "76%", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
                    <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                      {"You"}
                    </span>
                    <div style={{ padding: "10px 14px", borderRadius: "16px", fontSize: "14.5px", lineHeight: "1.5", background: "var(--soft2)" }}>
                      {"Haan… Hindi mein baat karein? Aur parking hai wahan?"}
                    </div>
                  </div>
                  <div style={{ alignSelf: "flex-start", maxWidth: "76%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
                    <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                      {"Vegham"}
                    </span>
                    <div style={{ padding: "10px 14px", borderRadius: "16px", fontSize: "14.5px", lineHeight: "1.5", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                      {"Bilkul Rohan ji. Haan, building ke peeche free parking hai, 7th Cross se entry."}
                    </div>
                    <span style={{ display: "flex", gap: "6px" }}>
                      <span className="src">
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8">
                          </path>
                          <path d="M13 21l4-9 4 9M14.5 18h5">
                          </path>
                        </svg>
                        {"switched to Hindi"}
                      </span>
                      <span className="src">
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z">
                          </path>
                          <path d="M19 19v2H6">
                          </path>
                        </svg>
                        {"from Knowledge"}
                      </span>
                    </span>
                  </div>
                  <div style={{ alignSelf: "flex-end", maxWidth: "76%", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
                    <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>
                      {"You"}
                    </span>
                    <div style={{ padding: "10px 14px", borderRadius: "16px", fontSize: "14.5px", lineHeight: "1.5", background: "var(--soft2)" }}>
                      {"Perfect, thank you!"}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span className="pbtn">
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="11" rx="3">
                      </rect>
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3">
                      </path>
                    </svg>
                    {"Call again"}
                  </span>
                  <span className="obtn">
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                      </path>
                    </svg>
                    {"Call my phone"}
                  </span>
                </div>
              </div>
              <div style={{ width: "360px", flex: "none", borderLeft: "1px solid var(--line)", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                  {"How it went"}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span className="hero" style={{ fontSize: "40px" }} data-s="s6">
                    {"4 of 5"}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"things done well"}
                  </span>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {"Greeted Rohan by name"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {"Remembered his Saturday booking"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {"Switched to Hindi when asked"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", background: "#10B981", color: "#FFF" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {"Answered parking from Knowledge"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", boxShadow: "inset 0 0 0 1.5px var(--mut2)", color: "var(--mut)" }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 6l12 12M18 6L6 18">
                        </path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--mut)" }}>
                      {"Said goodbye and confirmed the booking"}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "14px 16px", borderRadius: "14px", background: "var(--soft2)", fontSize: "13px", lineHeight: "1.5" }}>
                  <b style={{ fontWeight: "600" }}>
                    {"Suggestion"}
                  </b>
                  <br />
                  {"End calls by repeating the booking: “See you Saturday at 10, Rohan.”"}
                </div>
                <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <span className="obtn">
                    {"Apply suggestion"}
                  </span>
                  <span className="pbtn">
                    {"Looks good"}
                  </span>
                </div>
              </div>
            </div>
            <span className="smp" style={{ position: "absolute", right: "18px", bottom: "10px" }}>
              {"Sample data"}
            </span>
          </div>
        </div>
      </main>
  );
}
