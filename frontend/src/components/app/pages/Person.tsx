// Ported from design board AppPerson by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Person() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div className="hd" style={{ paddingLeft: "28px" }}>
              <Link href="/app/people/" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--mut)", flex: "1" }}>
                {"People "}
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6">
                  </path>
                </svg>
                <span style={{ color: "var(--text)", fontWeight: "500" }}>
                  {"Rohan Mehra"}
                </span>
              </Link>
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
              <div style={{ flex: "1", minWidth: "0", overflow: "hidden", padding: "22px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", alignContent: "start" }} data-s="scroll">
                <div className="rc">
                  <div className="rh">
                    <span>
                      <b className="rt2">
                        {"What Vegham remembers"}
                      </b>
                      <span className="rs">
                        {"Used to recognise Rohan and talk naturally"}
                      </span>
                    </span>
                    <span className="obtn">
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14">
                        </path>
                      </svg>
                      {"Add"}
                    </span>
                  </div>
                  <div className="fact">
                    <span style={{ width: "110px", flex: "none", fontSize: "12.5px", color: "var(--mut)", paddingTop: "1px" }}>
                      {"Name"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <span style={{ fontSize: "14px" }}>
                        {"Rohan Mehra"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "var(--mut2)", marginTop: "2px" }}>
                        {"Said on a call · 14 May"}
                      </span>
                    </span>
                    <span className="ibtn" style={{ width: "28px", height: "28px" }} title="Edit">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                        </path>
                      </svg>
                    </span>
                  </div>
                  <div className="fact">
                    <span style={{ width: "110px", flex: "none", fontSize: "12.5px", color: "var(--mut)", paddingTop: "1px" }}>
                      {"Language"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <span style={{ fontSize: "14px" }}>
                        {"Hindi and English, switches mid-sentence"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "var(--mut2)", marginTop: "2px" }}>
                        {"Every call"}
                      </span>
                    </span>
                    <span className="ibtn" style={{ width: "28px", height: "28px" }} title="Edit">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                        </path>
                      </svg>
                    </span>
                  </div>
                  <div className="fact">
                    <span style={{ width: "110px", flex: "none", fontSize: "12.5px", color: "var(--mut)", paddingTop: "1px" }}>
                      {"Group size"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <span style={{ fontSize: "14px" }}>
                        {"5 people "}
                        <span style={{ color: "var(--mut2)", textDecoration: "line-through", marginLeft: "6px" }}>
                          {"3"}
                        </span>
                      </span>
                      {" "}
                      <span className="bd good">
                        {"Updated"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "var(--mut2)", marginTop: "2px" }}>
                        {"Updated today · was 3 in May"}
                      </span>
                    </span>
                    <span className="ibtn" style={{ width: "28px", height: "28px" }} title="Edit">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                        </path>
                      </svg>
                    </span>
                  </div>
                  <div className="fact">
                    <span style={{ width: "110px", flex: "none", fontSize: "12.5px", color: "var(--mut)", paddingTop: "1px" }}>
                      {"Prefers"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <span style={{ fontSize: "14px" }}>
                        {"Details on WhatsApp, calls in the evening"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "var(--mut2)", marginTop: "2px" }}>
                        {"14 May"}
                      </span>
                    </span>
                    <span className="ibtn" style={{ width: "28px", height: "28px" }} title="Edit">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                        </path>
                      </svg>
                    </span>
                  </div>
                  <div className="fact">
                    <span style={{ width: "110px", flex: "none", fontSize: "12.5px", color: "var(--mut)", paddingTop: "1px" }}>
                      {"Interested in"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <span style={{ fontSize: "14px" }}>
                        {"Weekend group sessions"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "var(--mut2)", marginTop: "2px" }}>
                        {"14 May · booked today"}
                      </span>
                    </span>
                    <span className="ibtn" style={{ width: "28px", height: "28px" }} title="Edit">
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="rc">
                    <b className="rt2">
                      {"Where things stand"}
                    </b>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginTop: "12px", padding: "12px 14px", borderRadius: "12px", background: "var(--goodbg)" }}>
                      <span style={{ color: "var(--good)" }}>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7">
                          </path>
                        </svg>
                      </span>
                      <span style={{ fontSize: "13.5px", lineHeight: "1.5" }}>
                        <b style={{ fontWeight: "600" }}>
                          {"Open loop closed today."}
                        </b>
                        {" He was “thinking about” group sessions since May, and booked."}
                      </span>
                    </div>
                    <div style={{ marginTop: "12px", fontSize: "13px", color: "var(--mut)" }}>
                      {"Next: "}
                      <b style={{ color: "var(--text)", fontWeight: "500" }}>
                        {"Sat 15 Nov, 10 AM · group of 5"}
                      </b>
                      {" · reminder Friday evening"}
                    </div>
                  </div>
                  <div className="rc">
                    <b className="rt2">
                      {"Conversations"}
                    </b>
                    <span className="rs">
                      {"4 over 6 months"}
                    </span>
                    <div style={{ marginTop: "12px" }}>
                      <div className="tlx">
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", position: "relative", zIndex: "1" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                            <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                              {"Today, 6:12 PM · call 0:41"}
                            </b>
                            <span className="bd good">
                              {"Booked"}
                            </span>
                          </span>
                          <span style={{ display: "block", marginTop: "2px", fontSize: "13px", color: "var(--mut)", lineHeight: "1.5" }}>
                            {"Came back about group sessions. Group is now 5. Booked Sat 15 Nov, 10 AM."}
                          </span>
                        </span>
                      </div>
                      <div className="tlx">
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", position: "relative", zIndex: "1" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                            <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                              {"Today, 6:13 PM · WhatsApp"}
                            </b>
                          </span>
                          <span style={{ display: "block", marginTop: "2px", fontSize: "13px", color: "var(--mut)", lineHeight: "1.5" }}>
                            {"Vegham sent booking details and the location pin."}
                          </span>
                        </span>
                      </div>
                      <div className="tlx">
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", position: "relative", zIndex: "1" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                            <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                              {"14 May · WhatsApp"}
                            </b>
                          </span>
                          <span style={{ display: "block", marginTop: "2px", fontSize: "13px", color: "var(--mut)", lineHeight: "1.5" }}>
                            {"Sent group session timings and prices as he asked."}
                          </span>
                        </span>
                      </div>
                      <div className="tlx">
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--soft2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", position: "relative", zIndex: "1" }}>
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                            </path>
                          </svg>
                        </span>
                        <span style={{ flex: "1" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                            <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                              {"14 May · call 1:52"}
                            </b>
                            <span className="bd acc">
                              {"Open loop"}
                            </span>
                          </span>
                          <span style={{ display: "block", marginTop: "2px", fontSize: "13px", color: "var(--mut)", lineHeight: "1.5" }}>
                            {"Asked about weekend group sessions for 3 friends. Said he’d think about it and call back."}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pn" style={{ width: "330px" }}>
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span className="av" style={{ width: "52px", height: "52px", fontSize: "21px", background: "var(--soft)", color: "var(--text)" }}>
                      {"R"}
                    </span>
                    <span>
                      <b style={{ display: "block", fontSize: "18px", fontWeight: "600" }} data-s="s16">
                        {"Rohan Mehra"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"+91 98•• ••21 · since May"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "14px" }}>
                    <span className="obtn">
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                        </path>
                      </svg>
                      {"Call"}
                    </span>
                    <span className="obtn">
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                        </path>
                      </svg>
                      {"WhatsApp"}
                    </span>
                  </div>
                </div>
                <div className="ps">
                  <span className="pt">
                    {"IF ROHAN CALLS TOMORROW, VEGHAM SAYS"}
                  </span>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--line)", fontSize: "13.5px", lineHeight: "1.55" }}>
                    {"“Hi Rohan! All set for Saturday at 10 with your group of 5?”"}
                  </div>
                </div>
                <div className="ps">
                  <span className="pt">
                    {"PRIVACY"}
                  </span>
                  <div className="kv2">
                    <span>
                      {"Heard the notice"}
                    </span>
                    <span>
                      {"Yes · both calls"}
                    </span>
                  </div>
                  <div className="kv2">
                    <span>
                      {"Kept until"}
                    </span>
                    <span>
                      {"Nov 2027"}
                    </span>
                  </div>
                  <div className="kv2">
                    <span>
                      {"Offers on WhatsApp"}
                    </span>
                    <span style={{ color: "var(--good)" }}>
                      {"Opted in"}
                    </span>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <span className="obtn" style={{ color: "var(--text)" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3">
                        </path>
                      </svg>
                      {"Forget Rohan"}
                    </span>
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
