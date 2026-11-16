// Ported from design board AppInsights by design/tools/port.py. Sample data is inline.


export default function Insights() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "16px 28px 0" }}>
              <span className="perm">
                <span className="">
                  {"7 days"}
                </span>
                <span className="on">
                  {"30 days"}
                </span>
                <span className="">
                  {"90 days"}
                </span>
              </span>
              <span className="obtn">
                {"Compare"}
              </span>
              <span className="obtn">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v12M6 11l6 6 6-6M4 20h16">
                  </path>
                </svg>
                {"Export"}
              </span>
            </div>
            <div style={{ flex: "1", overflow: "hidden", padding: "22px 28px 40px", display: "flex", flexDirection: "column", gap: "14px" }} data-s="scroll">
              <div className="ch" style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "24px", alignItems: "start" }}>
                <div>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"This month in one line"}
                  </span>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.5" }}>
                    {"Vegham answered "}
                    <b style={{ fontWeight: "600" }}>
                      {"486 calls"}
                    </b>
                    {" and "}
                    <b style={{ fontWeight: "600" }}>
                      {"742 chats"}
                    </b>
                    {", saved "}
                    <b style={{ fontWeight: "600" }}>
                      {"112 missed calls"}
                    </b>
                    {" and handled "}
                    <b style={{ fontWeight: "600" }}>
                      {"86%"}
                    </b>
                    {" without you."}
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
                  <div style={{ padding: "14px 16px", borderRadius: "14px", background: "var(--soft2)", fontSize: "13px", lineHeight: "1.5" }}>
                    <b style={{ display: "block", fontWeight: "600" }}>
                      {"After-hours calls are 31% of all calls"}
                    </b>
                    <span style={{ color: "var(--mut)" }}>
                      {"Vegham answered all 151. Keep “after hours” on."}
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontWeight: "500" }}>
                      {"See hours →"}
                    </span>
                  </div>
                  <div style={{ padding: "14px 16px", borderRadius: "14px", background: "var(--soft2)", fontSize: "13px", lineHeight: "1.5" }}>
                    <b style={{ display: "block", fontWeight: "600" }}>
                      {"3 questions keep coming up"}
                    </b>
                    <span style={{ color: "var(--mut)" }}>
                      {"Parking for vans, a lift, student discount."}
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontWeight: "500" }}>
                      {"Answer them →"}
                    </span>
                  </div>
                  <div style={{ padding: "14px 16px", borderRadius: "14px", background: "var(--soft2)", fontSize: "13px", lineHeight: "1.5" }}>
                    <b style={{ display: "block", fontWeight: "600" }}>
                      {"24 callers tried Kannada"}
                    </b>
                    <span style={{ color: "var(--mut)" }}>
                      {"Turn it on so they get answers in Kannada."}
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontWeight: "500" }}>
                      {"Turn on →"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "10px" }}>
                <div className="kc">
                  <span className="l">
                    {"Calls answered"}
                  </span>
                  <div className="v">
                    {"486"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 12%"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 16.0 L18.3 17.0 L27.4 12.0 L36.6 9.0 L45.7 10.0 L54.9 5.0 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="kc">
                  <span className="l">
                    {"Missed calls saved"}
                  </span>
                  <div className="v">
                    {"112"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 18%"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 17.8 L18.3 13.2 L27.4 15.5 L36.6 11.0 L45.7 6.5 L54.9 8.8 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="kc">
                  <span className="l">
                    {"WhatsApp chats"}
                  </span>
                  <div className="v">
                    {"742"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 9%"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 16.4 L18.3 18.2 L27.4 11.0 L36.6 9.2 L45.7 6.5 L54.9 3.8 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="kc">
                  <span className="l">
                    {"Handled without you"}
                  </span>
                  <div className="v">
                    {"86%"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 3 pts"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 17.0 L18.3 14.0 L27.4 11.0 L36.6 11.0 L45.7 8.0 L54.9 5.0 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="kc">
                  <span className="l">
                    {"Bookings and requests"}
                  </span>
                  <div className="v">
                    {"214"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 14%"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 17.0 L18.3 15.5 L27.4 11.0 L36.6 9.5 L45.7 6.5 L54.9 5.0 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="kc">
                  <span className="l">
                    {"Est. revenue from them"}
                  </span>
                  <div className="v">
                    {"₹2,56,800"}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#10B981" }}>
                      {"↑ 11%"}
                    </span>
                    <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
                      <path d="M0.0 20.0 L9.1 17.0 L18.3 14.0 L27.4 15.5 L36.6 9.5 L45.7 8.0 L54.9 5.0 L64.0 2.0" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: "14px" }}>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Calls and chats per day"}
                      </h3>
                      <span className="s">
                        {"Last 30 days"}
                      </span>
                    </span>
                    <span style={{ display: "flex", gap: "14px" }}>
                      <span className="lgd">
                        <i style={{ background: "var(--text)" }}>
                        </i>
                        {"Calls"}
                      </span>
                      <span className="lgd">
                        <i style={{ background: "#10B981" }}>
                        </i>
                        {"WhatsApp chats"}
                      </span>
                    </span>
                  </div>
                  <svg viewBox="-30 -6 796 226" width="100%" height="226" role="img" aria-label="Calls and chats per day">
                    <line x1="0" x2="760" y1="200.0" y2="200.0" stroke="var(--line)">
                    </line>
                    <text x="-8" y="204.0" textAnchor="end" fontSize="11" fill="var(--mut2)">
                      {"0"}
                    </text>
                    <line x1="0" x2="760" y1="150.0" y2="150.0" stroke="var(--line)">
                    </line>
                    <text x="-8" y="154.0" textAnchor="end" fontSize="11" fill="var(--mut2)">
                      {"10"}
                    </text>
                    <line x1="0" x2="760" y1="100.0" y2="100.0" stroke="var(--line)">
                    </line>
                    <text x="-8" y="104.0" textAnchor="end" fontSize="11" fill="var(--mut2)">
                      {"20"}
                    </text>
                    <line x1="0" x2="760" y1="50.0" y2="50.0" stroke="var(--line)">
                    </line>
                    <text x="-8" y="54.0" textAnchor="end" fontSize="11" fill="var(--mut2)">
                      {"30"}
                    </text>
                    <line x1="0" x2="760" y1="0.0" y2="0.0" stroke="var(--line)">
                    </line>
                    <text x="-8" y="4.0" textAnchor="end" fontSize="11" fill="var(--mut2)">
                      {"40"}
                    </text>
                    <path d="M0.0 100.0 L26.2 90.0 L52.4 95.0 L78.6 70.0 L104.8 60.0 L131.0 35.0 L157.2 115.0 L183.4 95.0 L209.7 80.0 L235.9 85.0 L262.1 65.0 L288.3 50.0 L314.5 25.0 L340.7 105.0 L366.9 90.0 L393.1 75.0 L419.3 80.0 L445.5 55.0 L471.7 45.0 L497.9 20.0 L524.1 100.0 L550.3 85.0 L576.6 70.0 L602.8 75.0 L629.0 50.0 L655.2 40.0 L681.4 10.0 L707.6 95.0 L733.8 80.0 L760.0 65.0" fill="none" stroke="#10B981" strokeWidth="2">
                    </path>
                    <path d="M0.0 140.0 L26.2 130.0 L52.4 135.0 L78.6 110.0 L104.8 90.0 L131.0 75.0 L157.2 155.0 L183.4 135.0 L209.7 125.0 L235.9 130.0 L262.1 105.0 L288.3 95.0 L314.5 65.0 L340.7 150.0 L366.9 130.0 L393.1 120.0 L419.3 125.0 L445.5 100.0 L471.7 85.0 L497.9 60.0 L524.1 145.0 L550.3 125.0 L576.6 115.0 L602.8 120.0 L629.0 95.0 L655.2 80.0 L681.4 55.0 L707.6 140.0 L733.8 120.0 L760.0 110.0" fill="none" stroke="var(--text)" strokeWidth="2">
                    </path>
                    <text x="0" y="218" textAnchor="middle" fontSize="11" fill="var(--mut2)">
                      {"9 Oct"}
                    </text>
                    <text x="183" y="218" textAnchor="middle" fontSize="11" fill="var(--mut2)">
                      {"16 Oct"}
                    </text>
                    <text x="367" y="218" textAnchor="middle" fontSize="11" fill="var(--mut2)">
                      {"23 Oct"}
                    </text>
                    <text x="550" y="218" textAnchor="middle" fontSize="11" fill="var(--mut2)">
                      {"30 Oct"}
                    </text>
                    <text x="734" y="218" textAnchor="middle" fontSize="11" fill="var(--mut2)">
                      {"6 Nov"}
                    </text>
                  </svg>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"When people reach you"}
                      </h3>
                      <span className="s">
                        {"Day and hour"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "34px repeat(8, 1fr)", gap: "3px", fontSize: "11px", color: "var(--mut2)" }}>
                    <span>
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"8a"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"10a"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"12p"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"2p"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"4p"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"6p"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"8p"}
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {"10p"}
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Mon"}
                    </span>
                    <span title="Mon 8:00 · 3 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.12" }}>
                    </span>
                    <span title="Mon 10:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.28" }}>
                    </span>
                    <span title="Mon 12:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.29" }}>
                    </span>
                    <span title="Mon 14:00 · 8 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.21" }}>
                    </span>
                    <span title="Mon 16:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Mon 18:00 · 25 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.49" }}>
                    </span>
                    <span title="Mon 20:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Mon 22:00 · 5 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.15" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Tue"}
                    </span>
                    <span title="Tue 8:00 · 3 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.12" }}>
                    </span>
                    <span title="Tue 10:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.28" }}>
                    </span>
                    <span title="Tue 12:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.29" }}>
                    </span>
                    <span title="Tue 14:00 · 8 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.21" }}>
                    </span>
                    <span title="Tue 16:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Tue 18:00 · 25 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.49" }}>
                    </span>
                    <span title="Tue 20:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Tue 22:00 · 5 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.15" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Wed"}
                    </span>
                    <span title="Wed 8:00 · 3 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.12" }}>
                    </span>
                    <span title="Wed 10:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.28" }}>
                    </span>
                    <span title="Wed 12:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.29" }}>
                    </span>
                    <span title="Wed 14:00 · 8 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.21" }}>
                    </span>
                    <span title="Wed 16:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Wed 18:00 · 25 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.49" }}>
                    </span>
                    <span title="Wed 20:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Wed 22:00 · 5 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.15" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Thu"}
                    </span>
                    <span title="Thu 8:00 · 3 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.12" }}>
                    </span>
                    <span title="Thu 10:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.28" }}>
                    </span>
                    <span title="Thu 12:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.29" }}>
                    </span>
                    <span title="Thu 14:00 · 8 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.21" }}>
                    </span>
                    <span title="Thu 16:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Thu 18:00 · 25 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.49" }}>
                    </span>
                    <span title="Thu 20:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.35" }}>
                    </span>
                    <span title="Thu 22:00 · 5 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.15" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Fri"}
                    </span>
                    <span title="Fri 8:00 · 5 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.14" }}>
                    </span>
                    <span title="Fri 10:00 · 17 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.36" }}>
                    </span>
                    <span title="Fri 12:00 · 18 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.38" }}>
                    </span>
                    <span title="Fri 14:00 · 11 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.26" }}>
                    </span>
                    <span title="Fri 16:00 · 23 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.46" }}>
                    </span>
                    <span title="Fri 18:00 · 34 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.66" }}>
                    </span>
                    <span title="Fri 20:00 · 23 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.46" }}>
                    </span>
                    <span title="Fri 22:00 · 7 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.18" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Sat"}
                    </span>
                    <span title="Sat 8:00 · 19 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.40" }}>
                    </span>
                    <span title="Sat 10:00 · 34 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.66" }}>
                    </span>
                    <span title="Sat 12:00 · 35 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.68" }}>
                    </span>
                    <span title="Sat 14:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.30" }}>
                    </span>
                    <span title="Sat 16:00 · 27 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.54" }}>
                    </span>
                    <span title="Sat 18:00 · 40 calls" style={{ height: "24px", borderRadius: "4px", background: "#10B981", opacity: "1.00" }}>
                    </span>
                    <span title="Sat 20:00 · 27 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.53" }}>
                    </span>
                    <span title="Sat 22:00 · 8 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.20" }}>
                    </span>
                    <span style={{ lineHeight: "24px" }}>
                      {"Sun"}
                    </span>
                    <span title="Sun 8:00 · 3 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.11" }}>
                    </span>
                    <span title="Sun 10:00 · 10 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.24" }}>
                    </span>
                    <span title="Sun 12:00 · 11 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.25" }}>
                    </span>
                    <span title="Sun 14:00 · 7 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.18" }}>
                    </span>
                    <span title="Sun 16:00 · 14 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.30" }}>
                    </span>
                    <span title="Sun 18:00 · 20 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.41" }}>
                    </span>
                    <span title="Sun 20:00 · 13 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.29" }}>
                    </span>
                    <span title="Sun 22:00 · 4 calls" style={{ height: "24px", borderRadius: "4px", background: "var(--text)", opacity: "0.13" }}>
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", fontSize: "12px", color: "var(--mut)" }}>
                    <span>
                      {"Darker = more calls"}
                    </span>
                    <span>
                      <span style={{ color: "#10B981" }}>
                        {"■"}
                      </span>
                      {" busiest: Sat 10 AM, weekdays 6 PM"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sh2">
                <b>
                  {"From call to booking"}
                </b>
                <span>
                  {"Where people drop off"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: "14px", marginTop: "10px" }}>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Conversation to visit"}
                      </h3>
                      <span className="s">
                        {"17% of conversations became a booking or request"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "10px", alignItems: "end" }}>
                    <div>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "22px" }}>
                        {"1,228"}
                      </div>
                      <span style={{ display: "block", fontSize: "12.5px" }}>
                        {"Calls and chats"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"Start"}
                      </span>
                      <div style={{ marginTop: "10px", height: "110px", display: "flex", alignItems: "flex-end", background: "var(--soft2)", borderRadius: "8px" }}>
                        <span title="1,228" style={{ display: "block", width: "100%", height: "100.0%", borderRadius: "6px", background: "var(--text)" }}>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "22px" }}>
                        {"1,179"}
                      </div>
                      <span style={{ display: "block", fontSize: "12.5px" }}>
                        {"Understood"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"96% of previous"}
                      </span>
                      <div style={{ marginTop: "10px", height: "110px", display: "flex", alignItems: "flex-end", background: "var(--soft2)", borderRadius: "8px" }}>
                        <span title="1,179" style={{ display: "block", width: "100%", height: "96.0%", borderRadius: "6px", background: "var(--text)" }}>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "22px" }}>
                        {"1,056"}
                      </div>
                      <span style={{ display: "block", fontSize: "12.5px" }}>
                        {"Answered by Vegham"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"90% of previous"}
                      </span>
                      <div style={{ marginTop: "10px", height: "110px", display: "flex", alignItems: "flex-end", background: "var(--soft2)", borderRadius: "8px" }}>
                        <span title="1,056" style={{ display: "block", width: "100%", height: "86.0%", borderRadius: "6px", background: "var(--text)" }}>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "22px" }}>
                        {"214"}
                      </div>
                      <span style={{ display: "block", fontSize: "12.5px" }}>
                        {"Booked or requested"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"20% of previous"}
                      </span>
                      <div style={{ marginTop: "10px", height: "110px", display: "flex", alignItems: "flex-end", background: "var(--soft2)", borderRadius: "8px" }}>
                        <span title="214" style={{ display: "block", width: "100%", height: "17.4%", borderRadius: "6px", background: "#10B981" }}>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "22px" }}>
                        {"188"}
                      </div>
                      <span style={{ display: "block", fontSize: "12.5px" }}>
                        {"Showed up"}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"88% of previous"}
                      </span>
                      <div style={{ marginTop: "10px", height: "110px", display: "flex", alignItems: "flex-end", background: "var(--soft2)", borderRadius: "8px" }}>
                        <span title="188" style={{ display: "block", width: "100%", height: "15.3%", borderRadius: "6px", background: "#10B981" }}>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Missed calls recovered"}
                      </h3>
                      <span className="s">
                        {"₹45,600 from calls you couldn’t take"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0" }}>
                    <span style={{ flex: "1", fontSize: "13.5px" }}>
                      {"Rang while you were busy"}
                    </span>
                    <span className="bar" style={{ width: "150px" }}>
                      <span style={{ width: "100%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <b style={{ width: "40px", textAlign: "right", fontWeight: "500" }}>
                      {"112"}
                    </b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ flex: "1", fontSize: "13.5px" }}>
                      {"Texted back on WhatsApp"}
                    </span>
                    <span className="bar" style={{ width: "150px" }}>
                      <span style={{ width: "100%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <b style={{ width: "40px", textAlign: "right", fontWeight: "500" }}>
                      {"112"}
                    </b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ flex: "1", fontSize: "13.5px" }}>
                      {"Replied"}
                    </span>
                    <span className="bar" style={{ width: "150px" }}>
                      <span style={{ width: "63%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <b style={{ width: "40px", textAlign: "right", fontWeight: "500" }}>
                      {"71"}
                    </b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ flex: "1", fontSize: "13.5px" }}>
                      {"Booked"}
                    </span>
                    <span className="bar" style={{ width: "150px" }}>
                      <span style={{ width: "34%", background: "#10B981" }}>
                      </span>
                    </span>
                    <b style={{ width: "40px", textAlign: "right", fontWeight: "500" }}>
                      {"38"}
                    </b>
                  </div>
                </div>
              </div>
              <div className="sh2">
                <b>
                  {"Speed and hand-overs"}
                </b>
                <span>
                  {"How fast it answers, and when it needs you"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: "14px", marginTop: "10px" }}>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Speed"}
                      </h3>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ padding: "14px", borderRadius: "14px", background: "var(--soft2)" }}>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "24px" }}>
                        {"1 ring"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"to pick up"}
                      </span>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "14px", background: "var(--soft2)" }}>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "24px" }}>
                        {"2.1 sec"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"first reply on WhatsApp"}
                      </span>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "14px", background: "var(--soft2)" }}>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "24px" }}>
                        {"1:48"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"average call"}
                      </span>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "14px", background: "var(--soft2)" }}>
                      <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "24px" }}>
                        {"0"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"calls left unanswered"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"How long calls last"}
                      </h3>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", height: "140px" }}>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", height: "100%" }}>
                      <span style={{ fontSize: "12px" }}>
                        {"18%"}
                      </span>
                      <span title="Under 30 sec: 18%" style={{ width: "70%", height: "53px", borderRadius: "4px 4px 0 0", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", height: "100%" }}>
                      <span style={{ fontSize: "12px" }}>
                        {"34%"}
                      </span>
                      <span title="30 sec – 1 min: 34%" style={{ width: "70%", height: "100px", borderRadius: "4px 4px 0 0", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", height: "100%" }}>
                      <span style={{ fontSize: "12px" }}>
                        {"29%"}
                      </span>
                      <span title="1 – 2 min: 29%" style={{ width: "70%", height: "85px", borderRadius: "4px 4px 0 0", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", height: "100%" }}>
                      <span style={{ fontSize: "12px" }}>
                        {"15%"}
                      </span>
                      <span title="2 – 5 min: 15%" style={{ width: "70%", height: "44px", borderRadius: "4px 4px 0 0", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", height: "100%" }}>
                      <span style={{ fontSize: "12px" }}>
                        {"4%"}
                      </span>
                      <span title="Over 5 min: 4%" style={{ width: "70%", height: "12px", borderRadius: "4px 4px 0 0", background: "var(--text)" }}>
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginTop: "6px", borderTop: "1px solid var(--line)", paddingTop: "6px" }}>
                    <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                      {"Under 30 sec"}
                    </span>
                    <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                      {"30 sec – 1 min"}
                    </span>
                    <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                      {"1 – 2 min"}
                    </span>
                    <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                      {"2 – 5 min"}
                    </span>
                    <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                      {"Over 5 min"}
                    </span>
                  </div>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Why it handed over"}
                      </h3>
                      <span className="s">
                        {"34 conversations"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Complaint or refund"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "100%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"14"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Price not in your list"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "64%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"9"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Asked for a person"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "43%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"6"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Didn’t understand twice"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "36%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"5"}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--line)", fontSize: "13px" }}>
                    <span style={{ color: "var(--mut)" }}>
                      {"Hand-over rate"}
                    </span>
                    <span>
                      {"14% "}
                      <span style={{ color: "#10B981" }}>
                        {"↓ 3 pts"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="sh2">
                <b>
                  {"Memory at work"}
                </b>
                <span>
                  {"What remembering people is worth"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "14px", marginTop: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                    <div className="kc">
                      <span className="l">
                        {"Returning callers"}
                      </span>
                      <div className="v">
                        {"38%"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"412 recognised"}
                      </span>
                    </div>
                    <div className="kc">
                      <span className="l">
                        {"Booked faster"}
                      </span>
                      <div className="v">
                        {"52 sec"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"vs 1:48 for new callers"}
                      </span>
                    </div>
                    <div className="kc">
                      <span className="l">
                        {"Picked up an old conversation"}
                      </span>
                      <div className="v">
                        {"61"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"calls continued"}
                      </span>
                    </div>
                    <div className="kc">
                      <span className="l">
                        {"Follow-ups that came back"}
                      </span>
                      <div className="v">
                        {"34%"}
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                        {"14 of 41 booked"}
                      </span>
                    </div>
                  </div>
                  <div className="ch">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                      <span>
                        <h3>
                          {"Returning vs new callers"}
                        </h3>
                        <span className="s">
                          {"Share of calls each week"}
                        </span>
                      </span>
                      <span style={{ display: "flex", gap: "14px" }}>
                        <span className="lgd">
                          <i style={{ background: "#10B981" }}>
                          </i>
                          {"Returning"}
                        </span>
                        <span className="lgd">
                          <i style={{ background: "var(--text)" }}>
                          </i>
                          {"New"}
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-end", height: "150px" }}>
                      <span title="W1: returning 62%, new 38%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "38%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "62%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W2: returning 60%, new 40%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "40%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "60%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W3: returning 64%, new 36%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "36%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "64%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W4: returning 66%, new 34%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "34%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "66%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W5: returning 65%, new 35%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "35%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "65%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W6: returning 68%, new 32%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "32%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "68%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W7: returning 70%, new 30%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "30%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "70%", background: "#10B981" }}>
                        </span>
                      </span>
                      <span title="W8: returning 72%, new 28%" style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px", height: "100%", justifyContent: "flex-end" }}>
                        <span style={{ height: "28%", background: "var(--text)", borderRadius: "4px 4px 0 0", opacity: ".85" }}>
                        </span>
                        <span style={{ height: "72%", background: "#10B981" }}>
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W1"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W2"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W3"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W4"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W5"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W6"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W7"}
                      </span>
                      <span style={{ flex: "1", textAlign: "center", fontSize: "11px", color: "var(--mut)" }}>
                        {"W8"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"What memory helped with"}
                      </h3>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Skipped asking their name"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "100%", background: "#10B981" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"412"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Started in their language"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "70%", background: "#10B981" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"288"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Suggested their usual time"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "43%", background: "#10B981" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"176"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Brought up an open question"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "15%", background: "#10B981" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"61"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Avoided a past problem"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "5%", background: "#10B981" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"19"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sh2">
                <b>
                  {"Callers"}
                </b>
                <span>
                  {"What they ask, the language they use, how they felt"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "14px", marginTop: "10px" }}>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Why people called"}
                      </h3>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Prices"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "100%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"31%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Booking or moving a visit"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "87%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"27%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Timings and location"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "58%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"18%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Follow-up on a past chat"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "39%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"12%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Complaint or refund"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "19%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"6%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Other"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "19%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"6%"}
                    </span>
                  </div>
                </div>
                <div className="ch">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span>
                      <h3>
                        {"Languages"}
                      </h3>
                      <span className="s">
                        {"Share of calls"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"English"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "100%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"62%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Hindi"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "50%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"31%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Kannada · off"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "8%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"5%"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 52px", gap: "12px", alignItems: "center", padding: "6px 0", fontSize: "13.5px" }}>
                    <span>
                      {"Tamil · off"}
                    </span>
                    <span className="bar">
                      <span style={{ width: "3%", background: "var(--text)" }}>
                      </span>
                    </span>
                    <span style={{ textAlign: "right", color: "var(--mut)" }}>
                      {"2%"}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div className="ch">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                      <span>
                        <h3>
                          {"How callers felt"}
                        </h3>
                        <span className="s">
                          {"From tone and words"}
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "2px", height: "16px" }}>
                      <span title="Happy 71%" style={{ width: "71%", background: "#10B981", borderRadius: "4px 0 0 4px" }}>
                      </span>
                      <span title="Neutral 24%" style={{ width: "24%", background: "var(--mut2)", borderRadius: "0" }}>
                      </span>
                      <span title="Unhappy 5%" style={{ width: "5%", background: "var(--text)", borderRadius: "0 4px 4px 0" }}>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                      <span className="lgd">
                        <i style={{ background: "#10B981" }}>
                        </i>
                        {"Happy 71%"}
                      </span>
                      <span className="lgd">
                        <i style={{ background: "var(--mut2)" }}>
                        </i>
                        {"Neutral 24%"}
                      </span>
                      <span className="lgd">
                        <i style={{ background: "var(--text)" }}>
                        </i>
                        {"Unhappy 5%"}
                      </span>
                    </div>
                  </div>
                  <div className="ch">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                      <span>
                        <h3>
                          {"Calls worth a listen"}
                        </h3>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0" }}>
                      <span className="av" style={{ width: "28px", height: "28px", fontSize: "11px", background: "var(--soft)", color: "var(--text)" }}>
                        {"P"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13px" }}>
                          {"P. Iyer"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Unhappy · refund"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)" }}>
                        {"0:41"}
                      </span>
                      <span className="playb" style={{ width: "28px", height: "28px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--line)" }}>
                      <span className="av" style={{ width: "28px", height: "28px", fontSize: "11px", background: "var(--soft)", color: "var(--text)" }}>
                        {"+"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13px" }}>
                          {"+91 80•• ••14"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Hung up after 2 tries"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)" }}>
                        {"0:22"}
                      </span>
                      <span className="playb" style={{ width: "28px", height: "28px" }}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 5l12 7-12 7z">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px solid var(--line)" }}>
                      <span className="av" style={{ width: "28px", height: "28px", fontSize: "11px", background: "var(--soft)", color: "var(--text)" }}>
                        {"K"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13px" }}>
                          {"Kabir Rao"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Couldn’t answer: van parking"}
                        </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--mut2)" }}>
                        {"0:37"}
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
            <span className="smp" style={{ position: "absolute", right: "24px", top: "80px" }}>
              {"Sample data"}
            </span>
          </div>
        </div>
      </main>
  );
}
