// Ported from design board AppAgent by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Agent() {
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
              <div style={{ flex: "1", minWidth: "0", overflow: "hidden", padding: "18px 32px" }} data-s="scroll">
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderRadius: "14px", border: "1px solid var(--line)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}>
                    </span>
                    <b style={{ fontWeight: "600" }}>
                      {"Answering"}
                    </b>
                  </span>
                  <span style={{ width: "1px", height: "14px", background: "var(--line)" }}>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mut)" }}>
                    {"18 calls today"}
                  </span>
                  <span style={{ width: "1px", height: "14px", background: "var(--line)" }}>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mut)" }}>
                    {"96% of callers understood"}
                  </span>
                  <span style={{ width: "1px", height: "14px", background: "var(--line)" }}>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--mut)" }}>
                    {"Tested 2 days ago · "}
                    <Link href="/app/agent/test-call/" style={{ cursor: "pointer", color: "var(--text)", fontWeight: "500" }}>
                      {"Test again"}
                    </Link>
                  </span>
                </div>
                <div className="sec">
                  <span>
                    {"Voice"}
                  </span>
                  <span style={{ color: "var(--text)", fontWeight: "500" }}>
                    {"All 9 voices →"}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                  <div className="pick on">
                    <span className="tick">
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span className="playb on">
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="5" width="4" height="14" rx="1">
                          </rect>
                          <rect x="14" y="5" width="4" height="14" rx="1">
                          </rect>
                        </svg>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "16px" }}>
                        <span style={{ width: "2px", height: "4px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "14px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "9px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "7px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "5px", borderRadius: "2px", background: "#10B981" }}>
                        </span>
                        <span style={{ width: "2px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>
                        {"Warm"}
                      </b>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Female · calm"}
                      </span>
                    </span>
                  </div>
                  <div className="pick">
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span className="playb">
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "16px" }}>
                        <span style={{ width: "2px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>
                        {"Easy"}
                      </b>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Male · relaxed"}
                      </span>
                    </span>
                  </div>
                  <div className="pick">
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span className="playb">
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "16px" }}>
                        <span style={{ width: "2px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>
                        {"Bright"}
                      </b>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Female · upbeat"}
                      </span>
                    </span>
                  </div>
                  <div className="pick">
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span className="playb">
                        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "16px" }}>
                        <span style={{ width: "2px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "9px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "13px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                        <span style={{ width: "2px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                        </span>
                      </span>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>
                        {"Steady"}
                      </b>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Male · formal"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="sec">
                  <span>
                    {"Personality"}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
                  <div className="pick on" style={{ gap: "6px" }}>
                    <span className="tick">
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <b style={{ fontWeight: "600", fontSize: "14px" }}>
                      {"Warm and chatty"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", lineHeight: "1.5" }}>
                      {"“Hi there! Lovely to hear from you. How can I help today?”"}
                    </span>
                  </div>
                  <div className="pick" style={{ gap: "6px" }}>
                    <b style={{ fontWeight: "600", fontSize: "14px" }}>
                      {"Calm and professional"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", lineHeight: "1.5" }}>
                      {"“Good evening, Nila & Co. How may I help you?”"}
                    </span>
                  </div>
                  <div className="pick" style={{ gap: "6px" }}>
                    <b style={{ fontWeight: "600", fontSize: "14px" }}>
                      {"Quick and to the point"}
                    </b>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", lineHeight: "1.5" }}>
                      {"“Nila & Co, hi. What do you need?”"}
                    </span>
                  </div>
                </div>
                <div className="sec">
                  <span>
                    {"Greeting"}
                  </span>
                  <span style={{ color: "var(--text)", fontWeight: "500" }}>
                    {"Edit"}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", border: "1px solid var(--line)", borderRadius: "14px" }}>
                    <span className="playb">
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 5l12 7-12 7z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", fontSize: "14px" }}>
                      {"Namaste, Nila & Co. How can I help?"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"New callers"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", border: "1px solid var(--line)", borderRadius: "14px" }}>
                    <span className="playb">
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 5l12 7-12 7z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", fontSize: "14px" }}>
                      {"Hi "}
                      <span className="memtxt">
                        {"Rohan"}
                      </span>
                      {", good to hear from you again!"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"People it knows"}
                    </span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div>
                    <div className="sec">
                      <span>
                        {"Languages"}
                      </span>
                      <Link href="/app/agent/languages/" style={{ cursor: "pointer", color: "var(--text)", fontWeight: "500" }}>
                        {"Change →"}
                      </Link>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span className="chip2 on">
                        {"English"}
                      </span>
                      <span className="chip2 on">
                        {"Hindi"}
                      </span>
                      <span className="chip2">
                        {"Kannada"}
                      </span>
                      <span className="chip2">
                        {"Tamil"}
                      </span>
                      <span className="chip2">
                        {"+ 4 more"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="sec">
                      <span>
                        {"Picks up"}
                      </span>
                    </div>
                    <span className="perm">
                      <span className="">
                        {"Every call"}
                      </span>
                      <span className="on">
                        {"When I miss it"}
                      </span>
                      <span className="">
                        {"After hours"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="sec">
                  <span>
                    {"Hand over to you when"}
                  </span>
                  <span>
                    {"Transfers to Vinay"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Caller asks for a person"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Complaint or refund"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"It doesn’t understand twice"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Price not in your list"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    {"+ Add"}
                  </span>
                </div>
                <div className="sec">
                  <span>
                    {"After each call"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Send the caller a WhatsApp summary"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Send you a note if it needs you"}
                  </span>
                  <span className="chip2" style={{ height: "32px" }}>
                    <span style={{ color: "#10B981" }}>
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    {"Save to memory"}
                  </span>
                </div>
              </div>
              <div style={{ width: "400px", flex: "none", borderLeft: "1px solid var(--line)", background: "var(--side)", display: "flex", flexDirection: "column", alignItems: "center", padding: "26px 28px", gap: "16px" }}>
                <span style={{ alignSelf: "stretch", display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "var(--mut)" }}>
                  <span>
                    {"Live preview"}
                  </span>
                  <span>
                    {"Uses your changes"}
                  </span>
                </span>
                <div style={{ padding: "18px 0 6px" }}>
                  <span className="orbl" style={{ width: "132px", height: "132px", borderRadius: "50%", background: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <span className="eq" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "6px", height: "29px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "6px", height: "53px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "6px", height: "82px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "6px", height: "48px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "6px", height: "71px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                      <span style={{ width: "6px", height: "40px", borderRadius: "3px", background: "#10B981" }} data-s="s2">
                      </span>
                      <span style={{ width: "6px", height: "24px", borderRadius: "3px", background: "#10B981" }}>
                      </span>
                    </span>
                  </span>
                </div>
                <b style={{ fontSize: "17px", fontWeight: "600" }}>
                  {"This is how you’ll sound"}
                </b>
                <span style={{ fontSize: "13px", color: "var(--mut)", marginTop: "-10px" }}>
                  {"Warm voice · warm and chatty · English"}
                </span>
                <div style={{ alignSelf: "stretch", display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "14px", background: "var(--card)", border: "1px solid var(--line)" }}>
                  <span className="playb on">
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="5" width="4" height="14" rx="1">
                      </rect>
                      <rect x="14" y="5" width="4" height="14" rx="1">
                      </rect>
                    </svg>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", height: "22px" }}>
                    <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "21px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "#10B981" }}>
                    </span>
                    <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "21px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "18px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "4px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                    <span style={{ width: "3px", height: "21px", borderRadius: "2px", background: "var(--mut2)" }}>
                    </span>
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                    {"0:02"}
                  </span>
                </div>
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                  <div style={{ alignSelf: "flex-end", maxWidth: "88%", padding: "9px 12px", borderRadius: "14px", fontSize: "13px", lineHeight: "1.5", background: "var(--soft2)" }}>
                    {"Hi, are you open on Sunday?"}
                  </div>
                  <div style={{ alignSelf: "flex-start", maxWidth: "88%", padding: "9px 12px", borderRadius: "14px", fontSize: "13px", lineHeight: "1.5", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                    {"Hi there! Lovely to hear from you. We’re closed on Sundays, but Saturday 10 to 6 is open. Shall I find you a time?"}
                  </div>
                </div>
                <div style={{ marginTop: "auto", alignSelf: "stretch", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <span className="pbtn">
                    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="11" rx="3">
                      </rect>
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3">
                      </path>
                    </svg>
                    {"Talk in browser"}
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
            </div>
            <span className="smp" style={{ position: "absolute", right: "18px", bottom: "10px" }}>
              {"Sample data"}
            </span>
          </div>
        </div>
      </main>
  );
}
