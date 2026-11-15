// Ported from design board LandingV2 (Anywhere) by design/tools/port.py. Sample data is inline.


export default function Anywhere() {
  return (
      <section id="anywhere" style={{ background: "#FFFFFF" }}>
        <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }} data-s="s11">
          <div style={{ flex: "1 1 440px", minWidth: "0" }}>
            <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
              {"Works anywhere"}
            </span>
            <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s4">
              {"Wherever your"}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"customers are."}
              </span>
            </h2>
            <p style={{ margin: "20px 0 0", maxWidth: "500px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
              {"Your customers do not need an app, and you do not need a call centre. Share one link and anyone, in any country, can talk to your agent."}
            </p>
            <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "22px", maxWidth: "480px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }} data-s="s2">
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                    </path>
                    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                    </path>
                  </svg>
                </span>
                <span>
                  <b style={{ display: "block", fontWeight: "500" }}>
                    {"One link to talk or type"}
                  </b>
                  <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                    {"Put it on your site, your profile or a QR code. It opens in any browser."}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }} data-s="s2">
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                    </path>
                  </svg>
                </span>
                <span>
                  <b style={{ display: "block", fontWeight: "500" }}>
                    {"Your own number"}
                  </b>
                  <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                    {"Keep the number customers already know and let Vegham pick up."}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#F5F5F7", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#16182A" }} data-s="s2">
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5">
                    </circle>
                    <path d="M12 7.5V12l3 2">
                    </path>
                  </svg>
                </span>
                <span>
                  <b style={{ display: "block", fontWeight: "500" }}>
                    {"Every time zone"}
                  </b>
                  <span style={{ fontSize: "15px", color: "#5C5C5C" }}>
                    {"It answers at 3 AM the same way it answers at 3 PM."}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "460px", borderRadius: "28px", background: "#F7F7F8", border: "1px solid #ECECEF", padding: "14px" }} data-s="s24">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #ECECEF", fontSize: "13.5px", color: "#5C5C5C" }} data-s="s1 s2">
                <span style={{ color: "#8A8A8A" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                    </path>
                    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                    </path>
                  </svg>
                </span>
                {"vegham.ai/talk/your-business"}
              </div>
              <div style={{ marginTop: "12px", borderRadius: "20px", background: "#FFFFFF", border: "1px solid #ECECEF", padding: "36px 28px 28px", textAlign: "center" }}>
                <span style={{ display: "inline-flex", width: "64px", height: "64px", borderRadius: "50%", background: "#16182A", color: "#FFFFFF", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-tight), sans-serif", fontSize: "24px" }}>
                  {"N"}
                </span>
                <b style={{ display: "block", marginTop: "16px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "24px", letterSpacing: "-0.03em" }}>
                  {"Nila & Co"}
                </b>
                <span style={{ fontSize: "14.5px", color: "#6B6B6B" }}>
                  {"Ask anything. We answer right away."}
                </span>
                <div style={{ margin: "22px auto 0", display: "flex", justifyContent: "center" }}>
                  <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "34px" }}>
                    <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "22px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "28px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "24px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "32px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "20px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "27px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "30px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "19px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "25px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "21px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "29px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "17px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "26px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "22px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "31px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                    </span>
                    <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                    </span>
                  </span>
                </div>
                <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
                  <span style={{ flex: "1", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "48px", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", fontWeight: "500" }} data-s="s1">
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3.5" width="6" height="11" rx="3">
                      </rect>
                      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0">
                      </path>
                      <path d="M12 18v3">
                      </path>
                    </svg>
                    {"Talk"}
                  </span>
                  <span style={{ flex: "1", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "48px", borderRadius: "999px", border: "1px solid #E2E2E6", fontWeight: "500" }} data-s="s1">
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                      </path>
                    </svg>
                    {"Type"}
                  </span>
                </div>
                <div style={{ marginTop: "22px", paddingTop: "20px", borderTop: "1px solid #F0F0F3", display: "flex", alignItems: "center", gap: "16px", textAlign: "left" }}>
                  <span aria-hidden="true" style={{ width: "76px", height: "76px", flex: "none", borderRadius: "12px", border: "1px solid #ECECEF", backgroundColor: "#FFFFFF", backgroundImage: "linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%), linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%)", backgroundSize: "12px 12px", backgroundPosition: "6px 6px, 12px 12px", backgroundOrigin: "content-box", backgroundClip: "content-box", padding: "8px", boxSizing: "border-box" }}>
                  </span>
                  <span style={{ fontSize: "13.5px", color: "#5C5C5C" }}>
                    {"Scan to talk."}
                    <br />
                    {"Works on any phone, in any country."}
                  </span>
                </div>
              </div>
              <div style={{ padding: "12px 6px 2px", textAlign: "right" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                  {"Sample data"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
