// Ported from design board AppConversationChat by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function ConversationChat() {
  return (
      <main data-wide="true" style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", height: "100%", position: "relative" }}>
            <div style={{ width: "330px", flex: "none", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column" }}>
              <div className="hd" style={{ padding: "0 12px 0 20px" }}>
                <h1>
                  {"Conversations"}
                </h1>
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
              </div>
              <div style={{ display: "flex", gap: "6px", padding: "12px 16px 6px" }}>
                <span className="chip2 on">
                  {"All"}
                </span>
                <span className="chip2">
                  {"Calls"}
                </span>
                <span className="chip2">
                  {"WhatsApp"}
                </span>
                <span className="chip2">
                  {"Needs you "}
                  <span style={{ opacity: ".6" }}>
                    {"2"}
                  </span>
                </span>
              </div>
              <div style={{ flex: "1", overflow: "hidden" }} data-s="scroll">
                <span className="grp">
                  {"Needs you · 2"}
                </span>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px", background: "var(--soft)" }}>
                  <span style={{ position: "absolute", left: "0", top: "14px", bottom: "14px", width: "3px", borderRadius: "0 3px 3px 0", background: "var(--warn)" }}>
                  </span>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "600", fontSize: "13.5px" }}>
                        {"Meera Iyer"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--warn)" }}>
                        {"12m"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Asked for a price not in your list"}
                    </span>
                    <span className="mem" style={{ height: "20px", fontSize: "11px", padding: "0 7px", marginTop: "6px" }}>
                      <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                        </path>
                        <path d="M3 3v5h5">
                        </path>
                        <path d="M12 7v5l3 2">
                        </path>
                      </svg>
                      {"Regular · 2 yrs"}
                    </span>
                  </span>
                </div>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "absolute", left: "0", top: "14px", bottom: "14px", width: "3px", borderRadius: "0 3px 3px 0", background: "var(--warn)" }}>
                  </span>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "600", fontSize: "13.5px" }}>
                        {"P. Iyer"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--warn)" }}>
                        {"25m"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Wants a call back about a refund"}
                    </span>
                  </span>
                </div>
                <span className="grp">
                  {"Today"}
                </span>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <Link href="/app/conversations/" style={{ cursor: "pointer", fontWeight: "500", fontSize: "13.5px" }}>
                        {"Rohan Mehra"}
                      </Link>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"6:12 PM"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Booked Sat 10 AM group session"}
                    </span>
                    <span className="mem" style={{ height: "20px", fontSize: "11px", padding: "0 7px", marginTop: "6px" }}>
                      <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                        </path>
                        <path d="M3 3v5h5">
                        </path>
                        <path d="M12 7v5l3 2">
                        </path>
                      </svg>
                      {"Returning · 6 mo"}
                    </span>
                  </span>
                </div>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"Sunita Das"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"5:40 PM"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Moved her visit to Friday"}
                    </span>
                    <span className="mem" style={{ height: "20px", fontSize: "11px", padding: "0 7px", marginTop: "6px" }}>
                      <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                        </path>
                        <path d="M3 3v5h5">
                        </path>
                        <path d="M12 7v5l3 2">
                        </path>
                      </svg>
                      {"Regular"}
                    </span>
                  </span>
                </div>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"+91 70•• ••88"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"3:10 PM"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Missed · texted back in 6 sec"}
                    </span>
                  </span>
                </div>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"Ananya Rao"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"1:22 PM"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Asked about prices · sent the list"}
                    </span>
                  </span>
                </div>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"Kabir Rao"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"12:05 PM"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Parking for vans? · couldn’t answer"}
                    </span>
                  </span>
                </div>
                <span className="grp">
                  {"Earlier"}
                </span>
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "34px", height: "34px", fontSize: "14px", background: "#ECECF0", color: "#55565F" }}>
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
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "8px" }}>
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"Divya Menon"}
                      </b>
                      <span style={{ fontSize: "11.5px", color: "var(--mut2)" }}>
                        {"Yesterday"}
                      </span>
                    </span>
                    <span style={{ display: "block", width: "100%", marginTop: "2px", fontSize: "12.5px", color: "var(--mut)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {"Confirmed tomorrow’s visit"}
                    </span>
                    <span className="mem" style={{ height: "20px", fontSize: "11px", padding: "0 7px", marginTop: "6px" }}>
                      <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                        </path>
                        <path d="M3 3v5h5">
                        </path>
                        <path d="M12 7v5l3 2">
                        </path>
                      </svg>
                      {"Regular"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <div className="hd">
                <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1" }}>
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
                  <span>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "15px" }}>
                      {"Meera Iyer "}
                      <span className="mem" style={{ marginLeft: "6px" }}>
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                          </path>
                          <path d="M3 3v5h5">
                          </path>
                          <path d="M12 7v5l3 2">
                          </path>
                        </svg>
                        {"Regular · 2 years"}
                      </span>
                    </b>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"WhatsApp · +91 98450 33221"}
                    </span>
                  </span>
                </span>
                <span className="obtn">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7">
                    </path>
                  </svg>
                  {"Done"}
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
              <div style={{ margin: "14px 28px 0", padding: "12px 16px", borderRadius: "14px", background: "var(--warnbg)", fontSize: "13.5px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ flex: "1" }}>
                  <b style={{ fontWeight: "600" }}>
                    {"Handed to you"}
                  </b>
                  {" · a price for 2 people × 4 sessions isn’t in your list. Vegham told Meera someone will reply."}
                </span>
                <span style={{ fontWeight: "500", whiteSpace: "nowrap" }}>
                  {"Let Vegham continue"}
                </span>
              </div>
              <div style={{ flex: "1", overflow: "hidden", padding: "18px 28px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "14px" }} data-s="scroll">
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", maxWidth: "76%" }}>
                  <span className="av" style={{ width: "28px", height: "28px", fontSize: "11px", background: "var(--soft)", color: "var(--text)" }}>
                    {"M"}
                  </span>
                  <div>
                    <div style={{ background: "var(--soft2)", padding: "10px 14px", borderRadius: "18px 18px 18px 6px", fontSize: "14.5px", lineHeight: "1.5" }}>
                      {"Hi! Can I come Friday evening instead of Saturday this week?"}
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "11.5px", color: "var(--mut2)" }}>
                      {"5:51 PM"}
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", maxWidth: "72%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{ marginBottom: "4px", fontSize: "11.5px", color: "var(--mut)" }}>
                    {"Vegham"}
                  </div>
                  <div style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)", padding: "10px 14px", borderRadius: "18px 18px 6px 18px", fontSize: "14.5px", lineHeight: "1.5" }}>
                    {"Hi Meera! "}
                    <span className="memtxt">
                      {"Sure, Friday 6 PM with Priya like usual?"}
                    </span>
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "11.5px", color: "var(--mut2)" }}>
                    {"5:51 PM · Read"}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", maxWidth: "76%" }}>
                  <span className="av" style={{ width: "28px", height: "28px", fontSize: "11px", background: "var(--soft)", color: "var(--text)" }}>
                    {"M"}
                  </span>
                  <div>
                    <div style={{ background: "var(--soft2)", padding: "10px 14px", borderRadius: "18px 18px 18px 6px", fontSize: "14.5px", lineHeight: "1.5" }}>
                      {"Yes. Also my sister wants to join. How much for two of us, 4 sessions each?"}
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "11.5px", color: "var(--mut2)" }}>
                      {"5:53 PM"}
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", maxWidth: "72%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{ marginBottom: "4px", fontSize: "11.5px", color: "var(--mut)" }}>
                    {"Vegham"}
                  </div>
                  <div style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)", padding: "10px 14px", borderRadius: "18px 18px 6px 18px", fontSize: "14.5px", lineHeight: "1.5" }}>
                    {"Let me check that price with the team. Someone will reply in a few minutes."}
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "11.5px", color: "var(--mut2)" }}>
                    {"5:53 PM · Read"}
                  </div>
                </div>
              </div>
              <div style={{ margin: "0 28px 10px", padding: "12px 14px", borderRadius: "14px", border: "1px dashed var(--line)" }}>
                <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                  <b style={{ color: "var(--text)", fontWeight: "600" }}>
                    {"Suggested reply"}
                  </b>
                  {" · from your prices and Meera’s history"}
                </span>
                <p style={{ margin: "6px 0 10px", fontSize: "14px", lineHeight: "1.5" }}>
                  {"For two people, 4 sessions each, it’s ₹8,000. As you’ve been coming for 2 years, we can do ₹7,200. Shall I book Friday 6 PM for both?"}
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span className="pbtn">
                    {"Send"}
                  </span>
                  <span className="obtn">
                    {"Edit"}
                  </span>
                  <span style={{ flex: "1" }}>
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--mut)", alignSelf: "center" }}>
                    {"Teach Vegham this price"}
                  </span>
                </div>
              </div>
              <div style={{ margin: "0 28px 18px", border: "1px solid var(--line)", borderRadius: "16px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px", color: "var(--mut2)", fontSize: "14px" }}>
                <span style={{ flex: "1" }}>
                  {"Reply to Meera… Vegham pauses while you write"}
                </span>
                <span style={{ fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--mut)" }}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                    </path>
                  </svg>
                  {"WhatsApp · 23 h left to reply free"}
                </span>
                <span className="pbtn">
                  {"Send"}
                </span>
              </div>
            </div>
            <div className="pn" style={{ width: "340px" }}>
              <div style={{ padding: "18px 20px 6px" }}>
                <span className="mem">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                    </path>
                    <path d="M3 3v5h5">
                    </path>
                    <path d="M12 7v5l3 2">
                    </path>
                  </svg>
                  {"Memory"}
                </span>
              </div>
              <div className="ps" style={{ borderTop: "0" }}>
                <span className="pt">
                  {"WHAT VEGHAM KNEW BEFORE ANSWERING"}
                </span>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "#10B981", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Comes every Saturday 11 AM, with Priya"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "#10B981", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Has a 10-visit pack · 4 left"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "#10B981", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Prefers WhatsApp, never calls"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "#10B981", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Customer since Nov 2024 · 38 visits"}
                  </span>
                </div>
              </div>
              <div className="ps">
                <span className="pt">
                  {"WHAT IT LEARNED THIS TIME"}
                </span>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "var(--good)", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Wants Friday 6 PM this week only"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "var(--good)", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Her sister may join (new person)"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "7px 0", fontSize: "13px", lineHeight: "1.45" }}>
                  <span style={{ color: "var(--good)", flex: "none", marginTop: "2px" }}>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {"Asked for a 2-person price"}
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
