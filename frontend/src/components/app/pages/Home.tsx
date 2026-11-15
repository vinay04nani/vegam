// Ported from design board AppHome by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Home() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div className="hd" style={{ paddingLeft: "28px" }}>
              <h1>
                {"Home"}
              </h1>
              <span style={{ fontSize: "14px", color: "var(--mut2)" }}>
              </span>
              <span style={{ flex: "1" }}>
              </span>
              <span className="obtn">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                  </path>
                </svg>
                {"Test a call"}
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
            <div style={{ flex: "1", overflow: "hidden", padding: "28px 32px", display: "flex", flexDirection: "column", gap: "18px" }} data-s="s21 scroll">
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"Saturday, 8 November"}
                  </span>
                  <h1 className="hero" style={{ margin: "2px 0 0", fontSize: "34px", fontWeight: "400" }}>
                    {"Good evening, Vinay"}
                  </h1>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "30px", padding: "0 12px", borderRadius: "999px", background: "var(--goodbg)", color: "var(--good)", fontSize: "12.5px", fontWeight: "500" }} data-s="s1">
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--good)" }}>
                  </span>
                  {"Answering calls and WhatsApp"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                <div className="rc" style={{ padding: "16px 18px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"Calls answered"}
                  </span>
                  <div className="hero" style={{ fontSize: "30px", marginTop: "2px" }}>
                    {"18"}
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                    {"average 1:48"}
                  </span>
                </div>
                <div className="rc" style={{ padding: "16px 18px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"Missed calls saved"}
                  </span>
                  <div className="hero" style={{ fontSize: "30px", marginTop: "2px" }}>
                    {"6"}
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--good)" }}>
                    {"you were busy or closed"}
                  </span>
                </div>
                <div className="rc" style={{ padding: "16px 18px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"WhatsApp replies"}
                  </span>
                  <div className="hero" style={{ fontSize: "30px", marginTop: "2px" }}>
                    {"41"}
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                    {"average 4 sec"}
                  </span>
                </div>
                <div className="rc" style={{ padding: "16px 18px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"Bookings and requests"}
                  </span>
                  <div className="hero" style={{ fontSize: "30px", marginTop: "2px" }}>
                    {"7"}
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                    {"₹8,400 if all come in"}
                  </span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="rc">
                    <div className="rh" style={{ marginBottom: "12px" }}>
                      <span>
                        <b className="rt2">
                          {"Needs you"}
                        </b>
                        <span className="rs">
                          {"Vegham handled everything else"}
                        </span>
                      </span>
                      <span className="bd warn">
                        {"3"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
                          {"P"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14px" }}>
                          {"P. Iyer "}
                          <span style={{ fontWeight: "400", color: "var(--mut)" }}>
                            {"· Wants a call back about a refund"}
                          </span>
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--text)" }}>
                          {"Vegham promised a call today"}
                        </span>
                      </span>
                      <span className="obtn">
                        {"Call back"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
                          {"M"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14px" }}>
                          {"Meera Iyer "}
                          <span style={{ fontWeight: "400", color: "var(--mut)" }}>
                            {"· Asked for a price that isn’t in your list"}
                          </span>
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--warn)" }}>
                          {"Handed to you 12 min ago"}
                        </span>
                      </span>
                      <Link href="/app/conversations/chat/" className="obtn" style={{ cursor: "pointer" }}>
                        {"Reply"}
                      </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
                          {"K"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "14px" }}>
                          {"Kabir Rao "}
                          <span style={{ fontWeight: "400", color: "var(--mut)" }}>
                            {"· Asked if you have parking for vans"}
                          </span>
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Vegham didn’t know · teach it once"}
                        </span>
                      </span>
                      <span className="obtn">
                        {"Answer"}
                      </span>
                    </div>
                  </div>
                  <div className="rc">
                    <div className="rh" style={{ marginBottom: "12px" }}>
                      <span>
                        <b className="rt2">
                          {"Recent"}
                        </b>
                      </span>
                      <Link href="/app/conversations/" style={{ cursor: "pointer", fontSize: "12.5px", fontWeight: "500" }}>
                        {"All conversations →"}
                      </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                          {"R"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <Link href="/app/conversations/" style={{ cursor: "pointer", display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"Rohan Mehra"}
                        </Link>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Booked Sat 10 AM group session"}
                        </span>
                      </span>
                      <span className="mem">
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                          </path>
                          <path d="M3 3v5h5">
                          </path>
                          <path d="M12 7v5l3 2">
                          </path>
                        </svg>
                        {"Returning · 6 mo"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)", width: "56px", textAlign: "right" }}>
                        {"6:12 PM"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                          {"S"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"Sunita Das"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Moved her visit to Friday"}
                        </span>
                      </span>
                      <span className="bd mut">
                        {"Regular"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)", width: "56px", textAlign: "right" }}>
                        {"5:40 PM"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                          {"+"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"+91 70•• ••88"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Missed while busy · texted back in 6 sec"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)", width: "56px", textAlign: "right" }}>
                        {"3:10 PM"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                      <span style={{ position: "relative", flex: "none" }}>
                        <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                          {"A"}
                        </span>
                        <span style={{ position: "absolute", right: "-4px", bottom: "-4px" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--bg)", boxShadow: "0 0 0 1px var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", flex: "none" }}>
                            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                          {"Ananya Rao"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Asked about prices · sent the list"}
                        </span>
                      </span>
                      <span className="bd mut">
                        {"New"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)", width: "56px", textAlign: "right" }}>
                        {"1:22 PM"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rc" style={{ background: "var(--card)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span className="mem" style={{ alignSelf: "flex-start" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                      </path>
                      <path d="M3 3v5h5">
                      </path>
                      <path d="M12 7v5l3 2">
                      </path>
                    </svg>
                    {"Remembered today"}
                  </span>
                  <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.55" }}>
                    <b style={{ fontWeight: "600" }}>
                      {"Rohan Mehra"}
                    </b>
                    {" called after "}
                    <b style={{ fontWeight: "600" }}>
                      {"6 months"}
                    </b>
                    {". Vegham remembered he’d asked about weekend group sessions in May, picked up from there, and booked him for Saturday."}
                  </p>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--card)", fontSize: "13.5px", lineHeight: "1.5", border: "1px solid var(--line)" }}>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Vegham said"}
                    </span>
                    <br />
                    {"“Hi Rohan, good to hear from you again! Last time, back in May, you were asking about our weekend group sessions. Still thinking about those?”"}
                  </div>
                  <Link href="/app/conversations/" style={{ cursor: "pointer", fontSize: "13px", fontWeight: "500" }}>
                    {"Listen to the call →"}
                  </Link>
                  <div style={{ marginTop: "6px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Also recognised today · 11 people"}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "13px" }}>
                      <span className="av" style={{ width: "26px", height: "26px", fontSize: "10px", background: "var(--soft)", color: "var(--text)" }}>
                        {"S"}
                      </span>
                      <b style={{ fontWeight: "500" }}>
                        {"Sunita Das"}
                      </b>
                      <span style={{ color: "var(--mut)" }}>
                        {"· knew she likes early slots"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "13px" }}>
                      <span className="av" style={{ width: "26px", height: "26px", fontSize: "10px", background: "#ECECF0", color: "#55565F" }}>
                        {"D"}
                      </span>
                      <b style={{ fontWeight: "500" }}>
                        {"Divya Menon"}
                      </b>
                      <span style={{ color: "var(--mut)" }}>
                        {"· booked the ground-floor room again"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "13px" }}>
                      <span className="av" style={{ width: "26px", height: "26px", fontSize: "10px", background: "var(--soft)", color: "var(--text)" }}>
                        {"N"}
                      </span>
                      <b style={{ fontWeight: "500" }}>
                        {"Neha Kapoor"}
                      </b>
                      <span style={{ color: "var(--mut)" }}>
                        {"· replied in Tamil, as she prefers"}
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
