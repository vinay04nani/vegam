// Ported from design board AppWelcome by design/tools/port.py. Sample data is inline.


export default function Welcome() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "16px 28px 0" }}>
              <span style={{ flex: "1" }}>
              </span>
            </div>
            <div style={{ flex: "1", overflow: "hidden", padding: "40px 32px", display: "flex", justifyContent: "center" }} data-s="scroll">
              <div style={{ width: "100%", maxWidth: "760px", display: "flex", flexDirection: "column", gap: "22px" }}>
                <div>
                  <span className="mem">
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                      </path>
                      <path d="M3 3v5h5">
                      </path>
                      <path d="M12 7v5l3 2">
                      </path>
                    </svg>
                    {"Your agent is live"}
                  </span>
                  <h1 className="hero" style={{ margin: "14px 0 6px", fontSize: "40px", fontWeight: "400", lineHeight: "1.1" }} data-s="s6">
                    {"Welcome, Vinay. Let’s get your first call answered."}
                  </h1>
                  <p style={{ margin: "0", fontSize: "15.5px", color: "var(--mut)", lineHeight: "1.55" }}>
                    {"Four steps left. Most people finish in under 10 minutes."}
                  </p>
                </div>
                <div className="rc" style={{ padding: "6px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 0 6px" }}>
                    <span style={{ flex: "1", height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                      <span style={{ display: "block", width: "20%", height: "100%", borderRadius: "3px", background: "var(--good)" }}>
                      </span>
                    </span>
                    <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                      {"1 of 5"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", background: "var(--goodbg)", color: "var(--good)" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px", color: "var(--mut)" }}>
                        {"Your number is ready"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"080 4719 2200 · Vegham answers here"}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", background: "var(--soft)", color: "var(--mut)" }}>
                      {"2"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                        {"Forward your calls"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"On your phone, dial *21*08047192200# or forward only when busy: *67*…#"}
                      </span>
                    </span>
                    <span className="pbtn">
                      {"Show me how"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", background: "var(--soft)", color: "var(--mut)" }}>
                      {"3"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                        {"Connect WhatsApp"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Scan once with your business number. Takes 2 minutes."}
                      </span>
                    </span>
                    <span className="obtn">
                      {"Connect"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", background: "var(--soft)", color: "var(--mut)" }}>
                      {"4"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                        {"Teach it 5 common questions"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Prices, timings, location… we filled 3 from your website"}
                      </span>
                    </span>
                    <span className="obtn">
                      {"Review"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", background: "var(--soft)", color: "var(--mut)" }}>
                      {"5"}
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "500", fontSize: "14.5px" }}>
                        {"Call and hear it"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Call 080 4719 2200 from your phone. Then call again: it will remember you."}
                      </span>
                    </span>
                    <span className="obtn">
                      {"Call now"}
                    </span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div className="rc" style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--ink)", color: "var(--inkfg)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 5l12 7-12 7z">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "500" }}>
                        {"Hear your greeting"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"“Namaste, Nila & Co. How can I help?” · Warm voice"}
                      </span>
                    </span>
                  </div>
                  <div className="rc" style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "transparent", color: "#10B981", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8">
                        </path>
                        <path d="M3 3v5h5">
                        </path>
                        <path d="M12 7v5l3 2">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <b style={{ display: "block", fontWeight: "500" }}>
                        {"Memory is on"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"Vegham remembers each caller for 12 months. Change in Settings."}
                      </span>
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
