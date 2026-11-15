// Ported from design board AppConversations by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Conversations() {
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
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px" }}>
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
                      <Link href="/app/conversations/chat/" style={{ cursor: "pointer", fontWeight: "600", fontSize: "13.5px" }}>
                        {"Meera Iyer"}
                      </Link>
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
                <div className="row" style={{ display: "flex", gap: "12px", padding: "11px 14px 11px 18px", margin: "1px 8px", borderRadius: "12px", background: "var(--soft)" }}>
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
                      <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                        {"Rohan Mehra"}
                      </b>
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
                <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1", minWidth: "0" }}>
                  <span style={{ position: "relative", flex: "none" }}>
                    <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                  <span>
                    <b style={{ display: "block", fontWeight: "600", fontSize: "15px" }}>
                      {"Rohan Mehra "}
                      <span className="mem" style={{ marginLeft: "6px" }}>
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                          </path>
                          <path d="M3 3v5h5">
                          </path>
                          <path d="M12 7v5l3 2">
                          </path>
                        </svg>
                        {"Returning · last talked 6 months ago"}
                      </span>
                    </b>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Call · today 6:12 PM · 0:41 · answered by Vegham · Hindi and English"}
                    </span>
                  </span>
                </span>
                <span className="obtn">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                    </path>
                  </svg>
                  {"Call back"}
                </span>
                <span className="ibtn" title="Message on WhatsApp">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                    </path>
                  </svg>
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
              <div style={{ flex: "1", overflow: "hidden", padding: "22px 32px", display: "flex", flexDirection: "column", gap: "16px" }} data-s="scroll">
                <div className="rc">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"Summary"}
                    </span>
                    <span className="bd good">
                      {"Booked"}
                    </span>
                  </div>
                  <p style={{ margin: "8px 0 0", fontSize: "15.5px", lineHeight: "1.6" }}>
                    {"Rohan came back about the weekend group sessions he asked about in May. Group is now 5 people. Vegham booked "}
                    <b style={{ fontWeight: "600" }}>
                      {"Saturday 10 AM for 5 (₹1,750)"}
                    </b>
                    {" and sent details on WhatsApp."}
                  </p>
                </div>
                <div className="rc" style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5l12 7-12 7z">
                      </path>
                    </svg>
                  </span>
                  <span style={{ flex: "1", minWidth: "0", overflow: "hidden", display: "flex", alignItems: "center", gap: "2px", height: "30px" }} data-s="scroll">
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "22px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "21px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "22px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "23px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--ink)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "22px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "18px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "21px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "23px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "23px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "20px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "23px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "24px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "23px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "5px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "24px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                    <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "var(--line)" }}>
                    </span>
                  </span>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"0:12 / 0:41"}
                  </span>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <b style={{ fontSize: "14px", fontWeight: "600" }}>
                      {"Transcript"}
                    </b>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--mut)" }}>
                      <span className="memtxt">
                        {"highlighted"}
                      </span>
                      {" = from memory"}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "14px", padding: "6px 0" }}>
                    <span style={{ width: "34px", flex: "none", fontSize: "12px", color: "var(--mut2)", paddingTop: "20px" }}>
                      {"0:01"}
                    </span>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "700" }}>
                            {"V"}
                          </span>
                          {"Vegham"}
                        </span>
                      </span>
                      <div style={{ marginTop: "4px", padding: "9px 13px", borderRadius: "14px", fontSize: "14px", lineHeight: "1.55", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                        <span className="memtxt">
                          {"Hi Rohan, good to hear from you again!"}
                        </span>
                        {" "}
                        <span className="memtxt">
                          {"Last time, back in May, you were asking about our weekend group sessions."}
                        </span>
                        {" Still thinking about those?"}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", padding: "6px 0" }}>
                    <span style={{ width: "34px", flex: "none", fontSize: "12px", color: "var(--mut2)", paddingTop: "20px" }}>
                      {"0:07"}
                    </span>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Rohan"}
                      </span>
                      <div style={{ marginTop: "4px", padding: "9px 13px", borderRadius: "14px", fontSize: "14px", lineHeight: "1.55", background: "var(--soft2)" }}>
                        {"Haan, actually yes. Now we are 5 people. Is Saturday morning possible?"}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", padding: "6px 0" }}>
                    <span style={{ width: "34px", flex: "none", fontSize: "12px", color: "var(--mut2)", paddingTop: "20px" }}>
                      {"0:12"}
                    </span>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "700" }}>
                            {"V"}
                          </span>
                          {"Vegham"}
                        </span>
                      </span>
                      <div style={{ marginTop: "4px", padding: "9px 13px", borderRadius: "14px", fontSize: "14px", lineHeight: "1.55", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                        {"Yes, Saturday 10 AM has room for 5. It’s ₹350 per person, so ₹1,750. "}
                        <span className="memtxt">
                          {"Should I send the details on WhatsApp like last time?"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", padding: "6px 0" }}>
                    <span style={{ width: "34px", flex: "none", fontSize: "12px", color: "var(--mut2)", paddingTop: "20px" }}>
                      {"0:21"}
                    </span>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Rohan"}
                      </span>
                      <div style={{ marginTop: "4px", padding: "9px 13px", borderRadius: "14px", fontSize: "14px", lineHeight: "1.55", background: "var(--soft2)" }}>
                        {"Yes please. Book it."}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", padding: "6px 0" }}>
                    <span style={{ width: "34px", flex: "none", fontSize: "12px", color: "var(--mut2)", paddingTop: "20px" }}>
                      {"0:24"}
                    </span>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "700" }}>
                            {"V"}
                          </span>
                          {"Vegham"}
                        </span>
                      </span>
                      <div style={{ marginTop: "4px", padding: "9px 13px", borderRadius: "14px", fontSize: "14px", lineHeight: "1.55", background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                        {"Done. Saturday 10 AM for 5, under Rohan. Details are on WhatsApp now. See you then!"}
                      </div>
                    </div>
                  </div>
                </div>
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
                    {"Name: Rohan Mehra"}
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
                    {"Speaks Hindi and English"}
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
                    {"Asked about weekend group sessions · “will think about it” "}
                    <span style={{ color: "var(--mut2)" }}>
                      {"· 14 May"}
                    </span>
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
                    {"Prefers details on WhatsApp "}
                    <span style={{ color: "var(--mut2)" }}>
                      {"· 14 May"}
                    </span>
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
                    {"Group of 3 then "}
                    <span style={{ color: "var(--mut2)" }}>
                      {"· 14 May"}
                    </span>
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
                    {"Group is now 5 people (was 3)"}
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
                    {"Booked Sat 15 Nov, 10 AM group session"}
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
                    {"Open loop closed: group sessions"}
                  </span>
                </div>
              </div>
              <div className="ps" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                <Link href="/app/people/rohan-mehra/" className="obtn" style={{ cursor: "pointer" }}>
                  {"Open Rohan’s memory"}
                </Link>
                <span className="obtn">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z">
                    </path>
                  </svg>
                  {"Fix a memory"}
                </span>
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
