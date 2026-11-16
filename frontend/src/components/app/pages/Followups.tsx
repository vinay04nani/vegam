// Ported from design board AppFollowups by design/tools/port.py. Sample data is inline.


export default function Followups() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", height: "100%", position: "relative" }}>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "16px 28px 0" }}>
                <span style={{ flex: "1" }}>
                </span>
              </div>
              <div className="st">
                <div>
                  <span className="l">
                    {"Open follow-ups"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"23"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"people said “I’ll think about it”"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="l">
                    {"Followed up this month"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"41"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                      {"by Vegham"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="l">
                    {"Came back and booked"}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "2px" }}>
                    <span className="v">
                      {"14"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--good)" }}>
                      {"34% of follow-ups"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderBottom: "1px solid var(--line)" }}>
                <span className="chip2 on">
                  {"Due now "}
                  <span style={{ opacity: ".6" }}>
                    {"4"}
                  </span>
                </span>
                <span className="chip2">
                  {"This week "}
                  <span style={{ opacity: ".6" }}>
                    {"9"}
                  </span>
                </span>
                <span className="chip2">
                  {"Later "}
                  <span style={{ opacity: ".6" }}>
                    {"10"}
                  </span>
                </span>
                <span className="chip2">
                  {"Done "}
                  <span style={{ opacity: ".6" }}>
                    {"41"}
                  </span>
                </span>
              </div>
              <div style={{ flex: "1", overflow: "hidden", padding: "20px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", alignContent: "start" }} data-s="scroll">
                <div className="rc" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ position: "relative", flex: "none" }}>
                      <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                        {"Ananya Rao"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {" Asked about prices on Saturday · said she’d decide by Monday"}
                      </span>
                    </span>
                    <span className="bd warn">
                      {"Due today"}
                    </span>
                  </div>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--soft2)", fontSize: "13.5px", lineHeight: "1.55" }}>
                    {"“Hi Ananya! Just checking in on the prices I shared on Saturday. Would you like me to book a first visit this week?”"}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", flex: "1" }}>
                      {"Vegham sends today, 11 AM"}
                    </span>
                    <span className="obtn">
                      {"Edit"}
                    </span>
                    <span className="obtn">
                      {"Skip"}
                    </span>
                    <span className="pbtn">
                      {"Send now"}
                    </span>
                  </div>
                </div>
                <div className="rc" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                        {"P. Iyer"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {" Unhappy last visit · Vegham promised a call back today"}
                      </span>
                    </span>
                    <span className="bd warn">
                      {"Due today"}
                    </span>
                  </div>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--soft2)", fontSize: "13.5px", lineHeight: "1.55" }}>
                    <b style={{ fontWeight: "600" }}>
                      {"This one needs you. Vegham promised a person would call."}
                    </b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", flex: "1" }}>
                      {"You call"}
                    </span>
                    <span className="pbtn">
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                        </path>
                      </svg>
                      {"Call now"}
                    </span>
                  </div>
                </div>
                <div className="rc" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ position: "relative", flex: "none" }}>
                      <span className="av" style={{ width: "36px", height: "36px", fontSize: "14px", background: "var(--soft)", color: "var(--text)" }}>
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
                    <span style={{ flex: "1", minWidth: "0" }}>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                        {"Vikram Singh"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {" Asked for evening slots in August · didn’t book"}
                      </span>
                    </span>
                    <span className="bd ">
                      {"3 months"}
                    </span>
                  </div>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--soft2)", fontSize: "13.5px", lineHeight: "1.55" }}>
                    {"“Hi Vikram, we now have evening slots till 8 PM on weekdays. Want me to hold one for you?”"}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", flex: "1" }}>
                      {"Vegham sends Tue, 6 PM"}
                    </span>
                    <span className="obtn">
                      {"Edit"}
                    </span>
                    <span className="obtn">
                      {"Skip"}
                    </span>
                    <span className="pbtn">
                      {"Send now"}
                    </span>
                  </div>
                </div>
                <div className="rc" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                      <b style={{ display: "block", fontWeight: "600", fontSize: "14.5px" }}>
                        {"Kavya Nair"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        <span style={{ color: "#10B981" }}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                            </path>
                            <path d="M3 3v5h5">
                            </path>
                            <path d="M12 7v5l3 2">
                            </path>
                          </svg>
                        </span>
                        {" Said her group of 8 might come back in November"}
                      </span>
                    </span>
                    <span className="bd ">
                      {"This month"}
                    </span>
                  </div>
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "var(--soft2)", fontSize: "13.5px", lineHeight: "1.55" }}>
                    {"“Hi Kavya! You mentioned your group might come back in November. Saturday mornings have room. Shall I check a date?”"}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)", flex: "1" }}>
                      {"Vegham sends Wed, 10 AM"}
                    </span>
                    <span className="obtn">
                      {"Edit"}
                    </span>
                    <span className="obtn">
                      {"Skip"}
                    </span>
                    <span className="pbtn">
                      {"Send now"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pn" style={{ width: "330px", padding: "20px", gap: "4px" }}>
              <b style={{ fontSize: "14px", fontWeight: "600" }}>
                {"Automatic follow-ups"}
              </b>
              <span style={{ fontSize: "12.5px", color: "var(--mut)", marginBottom: "8px" }}>
                {"Vegham follows up on its own, once, in a friendly way"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                <span style={{ flex: "1", minWidth: "0" }}>
                  <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                    {"Follow up on its own"}
                  </b>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"Only people who opted in to messages"}
                  </span>
                </span>
                <span className="sw on">
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ flex: "1", minWidth: "0" }}>
                  <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                    {"When"}
                  </b>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"If they said they’d think about it"}
                  </span>
                </span>
                <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                  {"After 2 days"}
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6">
                    </path>
                  </svg>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ flex: "1", minWidth: "0" }}>
                  <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                    {"How many times"}
                  </b>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                  </span>
                </span>
                <span className="sel" style={{ height: "32px", fontSize: "13px" }}>
                  {"Once"}
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6">
                    </path>
                  </svg>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ flex: "1", minWidth: "0" }}>
                  <b style={{ display: "block", fontWeight: "500", fontSize: "13.5px" }}>
                    {"Unhappy customers"}
                  </b>
                  <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                    {"Always hand to you, never automatic"}
                  </span>
                </span>
                <span className="sw on">
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
