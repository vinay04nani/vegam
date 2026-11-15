// Ported from design board AppPeople by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function People() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", height: "100%", position: "relative" }}>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <div className="hd" style={{ paddingLeft: "28px" }}>
                <h1>
                  {"People"}
                </h1>
                <span style={{ fontSize: "14px", color: "var(--mut2)" }}>
                  {"Everyone Vegham has talked to"}
                </span>
                <span style={{ flex: "1" }}>
                </span>
                <label htmlFor="ov-pal" className="ibtn">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7">
                    </circle>
                    <path d="M20 20l-3.5-3.5">
                    </path>
                  </svg>
                </label>
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
              <div className="st">
                <div>
                  <span className="l">
                    {"People Vegham knows"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"1,284"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--good)" }}>
                      {"+86 this month"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="l">
                    {"Came back"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"412"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"and were recognised"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="l">
                    {"Open loops"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"23"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--warn)" }}>
                      {"people who said “I’ll think about it”"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="l">
                    {"Memory kept for"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"12 months"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"change in Settings"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderBottom: "1px solid var(--line)" }}>
                <span className="chip2 on">
                  {"Everyone "}
                  <span style={{ opacity: ".6" }}>
                    {"1,284"}
                  </span>
                </span>
                <span className="chip2">
                  {"Open loops "}
                  <span style={{ opacity: ".6" }}>
                    {"23"}
                  </span>
                </span>
                <span className="chip2">
                  {"Regulars "}
                  <span style={{ opacity: ".6" }}>
                    {"312"}
                  </span>
                </span>
                <span className="chip2">
                  {"New this month "}
                  <span style={{ opacity: ".6" }}>
                    {"86"}
                  </span>
                </span>
                <span className="chip2">
                  {"Haven’t talked in 60+ days "}
                  <span style={{ opacity: ".6" }}>
                    {"58"}
                  </span>
                </span>
                <span style={{ flex: "1" }}>
                </span>
                <span className="obtn">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12M6 11l6 6 6-6M4 20h16">
                    </path>
                  </svg>
                  {"Export"}
                </span>
              </div>
              <div style={{ flex: "1", overflow: "hidden" }} data-s="scroll">
                <table className="tbl2">
                  <tbody>
                    <tr>
                      <th>
                        {"Person"}
                      </th>
                      <th>
                        {"Vegham remembers"}
                      </th>
                      <th>
                        {"Where things stand"}
                      </th>
                      <th className="r">
                        {"Conversations"}
                      </th>
                      <th>
                        {"Last talked"}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                          <Link href="/app/people/rohan-mehra/" style={{ cursor: "pointer", fontWeight: "500" }}>
                            {"Rohan Mehra"}
                          </Link>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Group of 5 now · prefers WhatsApp for details"}
                      </td>
                      <td>
                        <span className="bd good">
                          {"Booked Sat"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"4"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"Today"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
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
                          <b style={{ fontWeight: "500" }}>
                            {"Meera Iyer"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Every Saturday with Priya · 10-visit pack"}
                      </td>
                      <td>
                        <span className="bd warn">
                          {"Waiting on you"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"41"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"12 min ago"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                          <b style={{ fontWeight: "500" }}>
                            {"Sunita Das"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Likes early slots · pays by UPI"}
                      </td>
                      <td>
                        <span className="bd mut">
                          {"Regular"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"18"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"5:40 PM"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                          <b style={{ fontWeight: "500" }}>
                            {"Ananya Rao"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"First contact · asked about prices"}
                      </td>
                      <td>
                        <span className="bd acc">
                          {"Thinking it over"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"1"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"1:22 PM"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
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
                          <b style={{ fontWeight: "500" }}>
                            {"P. Iyer"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Unhappy last visit · wants refund"}
                      </td>
                      <td>
                        <span className="bd bad">
                          {"Call back today"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"3"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"25 min ago"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "#ECECF0", color: "#55565F" }}>
                              {"D"}
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
                          <b style={{ fontWeight: "500" }}>
                            {"Divya Menon"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Brings her mother · needs ground floor"}
                      </td>
                      <td>
                        <span className="bd mut">
                          {"Regular"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"12"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"Yesterday"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                              {"V"}
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
                          <b style={{ fontWeight: "500" }}>
                            {"Vikram Singh"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Asked for evening slots in August"}
                      </td>
                      <td>
                        <span className="bd acc">
                          {"Didn’t book"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"1"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"3 months ago"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
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
                          <b style={{ fontWeight: "500" }}>
                            {"Kavya Nair"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Group organiser · 8 friends"}
                      </td>
                      <td>
                        <span className="bd mut">
                          {"Regular"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"6"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"3 weeks ago"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ position: "relative", flex: "none" }}>
                            <span className="av" style={{ width: "32px", height: "32px", fontSize: "13px", background: "var(--soft)", color: "var(--text)" }}>
                              {"N"}
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
                          <b style={{ fontWeight: "500" }}>
                            {"Neha Kapoor"}
                          </b>
                        </span>
                      </td>
                      <td style={{ color: "var(--mut)", maxWidth: "340px", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ color: "#10B981", marginRight: "6px" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {"Speaks Tamil and English"}
                      </td>
                      <td>
                        <span className="bd mut">
                          {"Regular"}
                        </span>
                      </td>
                      <td className="r" style={{ color: "var(--mut)" }}>
                        {"9"}
                      </td>
                      <td style={{ color: "var(--mut)" }}>
                        {"5 days ago"}
                      </td>
                    </tr>
                  </tbody>
                </table>
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
