// Ported from design board AppAgentLanguages by design/tools/port.py. Sample data is inline.


export default function AgentLanguages() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "16px 28px 0" }}>
              <span className="obtn">
                {"Discard"}
              </span>
              <span className="pbtn">
                {"Save"}
              </span>
            </div>
            <div style={{ flex: "1", display: "flex", minHeight: "0" }}>
              <div style={{ flex: "1", overflow: "hidden", padding: "24px 32px", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "20px", alignContent: "start" }} data-s="scroll">
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div className="rc" style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontSize: "16px", fontWeight: "600" }}>
                          {"It talks the way your caller talks"}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                          {"Hear a caller switch from English to Hindi mid-call"}
                        </span>
                      </span>
                      <span className="pbtn">
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                        {"Hear it"}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "56px", flex: "none", fontSize: "12px", color: "var(--text)", fontWeight: "600", paddingTop: "2px" }}>
                          {"Vegham"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14px", lineHeight: "1.5" }}>
                          {"Hello, Nila & Co. How can I help?"}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "56px", flex: "none", fontSize: "12px", color: "var(--mut)", fontWeight: "400", paddingTop: "2px" }}>
                          {"Caller"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14px", lineHeight: "1.5" }}>
                          {"Sorry… Hindi mein baat kar sakte hain?"}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "56px", flex: "none", fontSize: "12px", color: "var(--text)", fontWeight: "600", paddingTop: "2px" }}>
                          {"Vegham"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14px", lineHeight: "1.5" }}>
                          {"Bilkul! Bataiye, main aapki kaise madad kar sakti hoon? "}
                          <span className="src">
                            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8">
                              </path>
                              <path d="M13 21l4-9 4 9M14.5 18h5">
                              </path>
                            </svg>
                            {"Switched to Hindi"}
                          </span>
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "56px", flex: "none", fontSize: "12px", color: "var(--mut)", fontWeight: "400", paddingTop: "2px" }}>
                          {"Caller"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14px", lineHeight: "1.5" }}>
                          {"Saturday ko slot hai?"}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "56px", flex: "none", fontSize: "12px", color: "var(--text)", fontWeight: "600", paddingTop: "2px" }}>
                          {"Vegham"}
                        </span>
                        <span style={{ flex: "1", fontSize: "14px", lineHeight: "1.5" }}>
                          {"Haan, Saturday 11 baje khali hai. Book kar doon?"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sec" style={{ marginTop: "0" }}>
                      <span>
                        {"When to switch"}
                      </span>
                    </div>
                    <div className="list">
                      <div className="li" style={{ alignItems: "flex-start" }}>
                        <span style={{ flex: "1" }}>
                          <b style={{ display: "block", fontWeight: "500" }}>
                            {"Answer in the caller’s language"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                            {"From their first few words"}
                          </span>
                        </span>
                        <span className="sw on">
                        </span>
                      </div>
                      <div className="li" style={{ alignItems: "flex-start" }}>
                        <span style={{ flex: "1" }}>
                          <b style={{ display: "block", fontWeight: "500" }}>
                            {"Switch when asked"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                            {"“Can you speak English?” · “Tamil-la pesalama?”"}
                          </span>
                        </span>
                        <span className="sw on">
                        </span>
                      </div>
                      <div className="li" style={{ alignItems: "flex-start" }}>
                        <span style={{ flex: "1" }}>
                          <b style={{ display: "block", fontWeight: "500" }}>
                            {"Offer another language if they seem lost"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                            {"After a repeat or a long pause"}
                          </span>
                        </span>
                        <span className="sw on">
                        </span>
                      </div>
                      <div className="li" style={{ alignItems: "flex-start" }}>
                        <span style={{ flex: "1" }}>
                          <b style={{ display: "block", fontWeight: "500" }}>
                            {"Remember each person’s language"}
                          </b>
                          <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                            {"Starts in it next time"}
                          </span>
                        </span>
                        <span className="sw on">
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rc" style={{ padding: "14px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "14px", fontWeight: "600" }}>
                        {"What callers spoke this month"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"486 calls"}
                      </span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 44px", gap: "12px", alignItems: "center", padding: "3px 0", fontSize: "13px" }}>
                        <span>
                          {"English"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "62%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", color: "var(--mut)" }}>
                          {"62%"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 44px", gap: "12px", alignItems: "center", padding: "3px 0", fontSize: "13px" }}>
                        <span>
                          {"Hindi"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "31%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", color: "var(--mut)" }}>
                          {"31%"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 44px", gap: "12px", alignItems: "center", padding: "3px 0", fontSize: "13px" }}>
                        <span>
                          {"Kannada"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "5%", height: "100%", borderRadius: "3px", background: "var(--mut2)" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", color: "var(--mut)" }}>
                          {"5%"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 44px", gap: "12px", alignItems: "center", padding: "3px 0", fontSize: "13px" }}>
                        <span>
                          {"Tamil"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "2%", height: "100%", borderRadius: "3px", background: "var(--mut2)" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", color: "var(--mut)" }}>
                          {"2%"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid var(--line)", fontSize: "12.5px" }}>
                      <span style={{ flex: "1", color: "var(--mut)" }}>
                        {"24 callers tried Kannada. Vegham answered them in English."}
                      </span>
                      <span className="obtn">
                        {"Turn on Kannada"}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <div className="sec" style={{ marginTop: "0" }}>
                      <span>
                        {"Speaks"}
                      </span>
                      <span>
                        {"2 of 8"}
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      <div className="pick on" style={{ padding: "12px 14px", gap: "2px" }}>
                        <span className="tick">
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"English"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Main"}
                        </span>
                      </div>
                      <div className="pick on" style={{ padding: "12px 14px", gap: "2px" }}>
                        <span className="tick">
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7">
                            </path>
                          </svg>
                        </span>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Hindi"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Mixed Hindi-English too"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Kannada"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Tamil"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Telugu"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Marathi"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Bengali"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                      <div className="pick" style={{ padding: "12px 14px", gap: "2px" }}>
                        <b style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Malayalam"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Tap to add"}
                        </span>
                      </div>
                    </div>
                    <span style={{ display: "block", marginTop: "8px", fontSize: "12px", color: "var(--mut2)" }}>
                      {"Fewer languages means it understands callers better."}
                    </span>
                  </div>
                  <div className="rc" style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <b style={{ fontSize: "14px", fontWeight: "600" }}>
                      {"Try it"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", marginTop: "-8px" }}>
                      {"Say or type anything, in any language"}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "12px", border: "1px solid var(--line)" }}>
                      <span style={{ flex: "1", fontSize: "14px" }}>
                        {"Nimma hattira parking ide-ya?"}
                      </span>
                      <span className="playb">
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="3" width="6" height="11" rx="3">
                          </rect>
                          <path d="M5 11a7 7 0 0 0 14 0M12 18v3">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--soft2)", fontSize: "14px", lineHeight: "1.5" }}>
                      <span className="src" style={{ marginBottom: "6px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8">
                          </path>
                          <path d="M13 21l4-9 4 9M14.5 18h5">
                          </path>
                        </svg>
                        {"Kannada · not turned on"}
                      </span>
                      <br />
                      {"Vegham would reply in English: “Sorry, I don’t speak Kannada yet. Yes, there’s free parking behind the building.”"}
                    </div>
                  </div>
                  <div className="rc" style={{ padding: "18px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "14px", fontWeight: "600" }}>
                        {"How it says your words"}
                      </b>
                      <span style={{ fontSize: "12.5px", fontWeight: "500" }}>
                        {"+ Add word"}
                      </span>
                    </div>
                    <span style={{ display: "block", fontSize: "12.5px", color: "var(--mut)", margin: "2px 0 6px" }}>
                      {"Names, prices and numbers, said the way you say them"}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 0" }}>
                      <b style={{ width: "110px", fontWeight: "500", fontSize: "13.5px" }}>
                        {"Nila & Co"}
                      </b>
                      <span style={{ flex: "1", fontSize: "13px", color: "var(--mut)" }}>
                        {"says “NEE-la and co”"}
                      </span>
                      <span className="playb" style={{ width: "28px", height: "28px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 0", borderTop: "1px solid var(--line)" }}>
                      <b style={{ width: "110px", fontWeight: "500", fontSize: "13.5px" }}>
                        {"Priya"}
                      </b>
                      <span style={{ flex: "1", fontSize: "13px", color: "var(--mut)" }}>
                        {"says “PREE-ya”"}
                      </span>
                      <span className="playb" style={{ width: "28px", height: "28px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 0", borderTop: "1px solid var(--line)" }}>
                      <b style={{ width: "110px", fontWeight: "500", fontSize: "13.5px" }}>
                        {"₹1,200"}
                      </b>
                      <span style={{ flex: "1", fontSize: "13px", color: "var(--mut)" }}>
                        {"says “twelve hundred rupees”"}
                      </span>
                      <span className="playb" style={{ width: "28px", height: "28px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                    </div>
                  </div>
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
