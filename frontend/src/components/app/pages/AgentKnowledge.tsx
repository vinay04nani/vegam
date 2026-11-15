// Ported from design board AppAgentKnowledge by design/tools/port.py. Sample data is inline.


export default function AgentKnowledge() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div className="hd" style={{ paddingLeft: "28px", height: "68px" }}>
              <span style={{ flex: "1" }}>
                <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                  {"Knowledge"}
                </b>
                <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                  {"What your receptionist knows about your business"}
                </span>
              </span>
              <span style={{ width: "1px", height: "22px", background: "var(--line)", margin: "0 4px" }}>
              </span>
              <label htmlFor="ov-notif" className="ibtn" aria-label="Notifications" style={{ position: "relative" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0">
                  </path>
                </svg>
                <span style={{ position: "absolute", top: "7px", right: "8px", width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 0 2px var(--bg)" }}>
                </span>
              </label>
            </div>
            <div style={{ flex: "1", display: "flex", minHeight: "0" }}>
              <div style={{ flex: "1", overflow: "hidden", padding: "24px 32px", display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "24px", alignContent: "start" }} data-s="scroll">
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div className="rc" style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <svg width="88" height="88" viewBox="0 0 96 96" role="img" aria-label="92 percent answerable">
                      <circle cx="48" cy="48" r="34" fill="none" stroke="var(--soft)" strokeWidth="10">
                      </circle>
                      <circle cx="48" cy="48" r="34" fill="none" stroke="#10B981" strokeWidth="10" strokeLinecap="round" strokeDasharray="196.5 213.6" transform="rotate(-90 48 48)">
                      </circle>
                      <text x="48" y="54" textAnchor="middle" fontSize="20" fontFamily="Inter Tight, sans-serif" fill="var(--text)">
                        {"92%"}
                      </text>
                    </svg>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontSize: "17px", fontWeight: "600" }}>
                        {"Vegham can answer 92% of what callers ask"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"From 486 calls and chats this month."}
                      </span>
                    </span>
                    <span className="pbtn">
                      {"Fill the gaps (3)"}
                    </span>
                  </div>
                  <div className="sec">
                    <span>
                      {"What callers ask most · this month"}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      {"Prices"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"212"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      {"Free times"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"188"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      {"Parking"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"96"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      {"Rescheduling"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"74"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px" }}>
                      <span style={{ color: "#10B981" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      {"Group sessions"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"51"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px", borderStyle: "dashed" }}>
                      <span style={{ color: "var(--mut2)" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14">
                          </path>
                        </svg>
                      </span>
                      {"Parking for vans"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"6"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px", borderStyle: "dashed" }}>
                      <span style={{ color: "var(--mut2)" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14">
                          </path>
                        </svg>
                      </span>
                      {"Lift"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"4"}
                      </span>
                    </span>
                    <span className="chip2" style={{ height: "34px", padding: "0 13px", borderStyle: "dashed" }}>
                      <span style={{ color: "var(--mut2)" }}>
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14">
                          </path>
                        </svg>
                      </span>
                      {"Student discount"}
                      <span style={{ color: "var(--mut2)" }}>
                        {"3"}
                      </span>
                    </span>
                  </div>
                  <div className="sec">
                    <span>
                      {"Teach it something"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px" }}>
                    <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "12px", padding: "12px" }}>
                      <span style={{ width: "38px", height: "38px", borderRadius: "11px", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                          </path>
                          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                          </path>
                        </svg>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "13.5px" }}>
                          {"Paste a link"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Website, Google listing"}
                        </span>
                      </span>
                    </div>
                    <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "12px", padding: "12px" }}>
                      <span style={{ width: "38px", height: "38px", borderRadius: "11px", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 16V4M6 9l6-6 6 6M4 20h16">
                          </path>
                        </svg>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "13.5px" }}>
                          {"Upload a file"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Price list, PDF, photo"}
                        </span>
                      </span>
                    </div>
                    <div className="pick" style={{ flexDirection: "row", alignItems: "center", gap: "12px", padding: "12px" }}>
                      <span style={{ width: "38px", height: "38px", borderRadius: "11px", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 7V5h16v2M9 19h6M12 5v14">
                          </path>
                        </svg>
                      </span>
                      <span>
                        <b style={{ display: "block", fontWeight: "600", fontSize: "13.5px" }}>
                          {"Type an answer"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"One at a time"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="sec">
                    <span>
                      {"What it knows · 26 answers"}
                    </span>
                    <span className="fld" style={{ height: "30px", width: "200px", gap: "8px", color: "var(--mut2)" }}>
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7">
                        </circle>
                        <path d="M20 20l-3.5-3.5">
                        </path>
                      </svg>
                      {"Search"}
                    </span>
                  </div>
                  <div className="list">
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Is there parking?"}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                          {"Free parking behind the building, enter from 7th Cross."}
                        </span>
                      </span>
                      <span className="src">
                        {"Website"}
                      </span>
                    </div>
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Do you take walk-ins?"}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                          {"Yes till 6 PM if a slot is free."}
                        </span>
                      </span>
                      <span className="src">
                        {"You"}
                      </span>
                    </div>
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Group sessions?"}
                        </b>
                        <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                          {"Saturdays 9 AM – 2 PM, up to 8 people, ₹350 each."}
                        </span>
                      </span>
                      <span className="src">
                        {"Price list"}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div className="rc" style={{ padding: "16px 20px" }}>
                    <b style={{ fontSize: "14px", fontWeight: "600" }}>
                      {"Where it learns from"}
                    </b>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0" }}>
                      <span style={{ color: "var(--mut)" }}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9">
                          </circle>
                          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"nilaandco.in"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Read 2 days ago · 14 pages"}
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--mut)" }}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z">
                          </path>
                          <path d="M19 19v2H6">
                          </path>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"Price list.pdf"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Uploaded 4 Nov"}
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--mut)" }}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z">
                          </path>
                          <circle cx="12" cy="9" r="2.5">
                          </circle>
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"Google listing"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--text)" }}>
                          {"Hours changed yesterday"}
                        </span>
                      </span>
                      <span className="obtn">
                        <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4">
                          </path>
                        </svg>
                        {"Read again"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid var(--line)", fontSize: "13px" }}>
                      <span>
                        {"Re-read every week"}
                      </span>
                      <span className="sw on">
                      </span>
                    </div>
                  </div>
                  <div className="rc" style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "14px", fontWeight: "600" }}>
                        {"Always and never"}
                      </b>
                      <span style={{ fontSize: "12.5px", fontWeight: "500" }}>
                        {"+ Add rule"}
                      </span>
                    </div>
                    <span style={{ display: "block", fontSize: "12.5px", color: "var(--mut)", margin: "2px 0 6px" }}>
                      {"Rules it follows on every call"}
                    </span>
                    <div style={{ display: "flex", gap: "10px", padding: "8px 0", fontSize: "13.5px" }}>
                      <span style={{ width: "52px", flex: "none", fontSize: "12px", fontWeight: "600", color: "#10B981" }}>
                        {"Always"}
                      </span>
                      <span>
                        {"Say prices include GST"}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", padding: "8px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ width: "52px", flex: "none", fontSize: "12px", fontWeight: "600", color: "#10B981" }}>
                        {"Always"}
                      </span>
                      <span>
                        {"Offer the next free slot if one is full"}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", padding: "8px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ width: "52px", flex: "none", fontSize: "12px", fontWeight: "600", color: "var(--text)" }}>
                        {"Never"}
                      </span>
                      <span>
                        {"Promise a discount over 10%"}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", padding: "8px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ width: "52px", flex: "none", fontSize: "12px", fontWeight: "600", color: "var(--text)" }}>
                        {"Never"}
                      </span>
                      <span>
                        {"Give medical, legal or money advice"}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", padding: "8px 0", fontSize: "13.5px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ width: "52px", flex: "none", fontSize: "12px", fontWeight: "600", color: "var(--text)" }}>
                        {"Never"}
                      </span>
                      <span>
                        {"Share a team member’s phone number"}
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
