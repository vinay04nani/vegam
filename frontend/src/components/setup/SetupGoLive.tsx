// Ported from design board AppSetup4 by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function SetupGoLive() {
  return (
      <div className="app" style={{ position: "relative", minHeight: "100dvh", display: "flex", overflow: "hidden", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "14px", lineHeight: "1.45" }}>
        <div style={{ position: "relative", flex: "1", minHeight: "100dvh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "64px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderBottom: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "22px", letterSpacing: "-0.045em", background: "linear-gradient(90deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              {"vegham"}
            </span>
            <span style={{ flex: "1" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Step 4/4"}
            </span>
            <span style={{ width: "1px", height: "18px", background: "var(--line)", margin: "0 14px" }}>
            </span>
            <span style={{ fontSize: "13px", color: "var(--mut)" }}>
              {"Save and finish later"}
            </span>
          </div>
          <div className="stepbar">
            <span style={{ display: "block", width: "100%", height: "100%", background: "#10B981" }}>
            </span>
          </div>
          <div style={{ flex: "1", overflow: "hidden", display: "flex", justifyContent: "center", padding: "48px 32px" }} data-s="scroll">
            <div style={{ width: "100%", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <Link href="/app/welcome/" style={{ cursor: "pointer", display: "block" }}>
                <h1 className="hero" style={{ margin: "0", fontSize: "38px", fontWeight: "400", lineHeight: "1.12" }}>
                  {"Go live"}
                </h1>
                <p style={{ margin: "10px 0 0", fontSize: "16px", color: "var(--mut)" }}>
                  {"Send calls to Vegham and you’re done."}
                </p>
              </Link>
              <div>
                <div className="sec" style={{ marginTop: "0" }}>
                  <span>
                    {"When should Vegham pick up?"}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div className="pick on" style={{ flexDirection: "row", alignItems: "flex-start", gap: "14px", padding: "16px 18px" }}>
                    <span className="radio on" style={{ marginTop: "2px" }}>
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "15px" }}>
                        {"When I miss a call"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Recommended. Rings you first, Vegham picks up after 4 rings."}
                      </span>
                    </span>
                    <span className="chip2" style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
                      {"*61*08047192200*11*20# "}
                      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="8" width="12" height="12" rx="2">
                        </rect>
                        <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3">
                        </path>
                      </svg>
                    </span>
                  </div>
                  <div className="pick" style={{ flexDirection: "row", alignItems: "flex-start", gap: "14px", padding: "16px 18px" }}>
                    <span className="radio" style={{ marginTop: "2px" }}>
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "15px" }}>
                        {"Every call"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Vegham answers straight away."}
                      </span>
                    </span>
                  </div>
                  <div className="pick" style={{ flexDirection: "row", alignItems: "flex-start", gap: "14px", padding: "16px 18px" }}>
                    <span className="radio" style={{ marginTop: "2px" }}>
                    </span>
                    <span style={{ flex: "1" }}>
                      <b style={{ display: "block", fontWeight: "600", fontSize: "15px" }}>
                        {"Only when I’m closed"}
                      </b>
                      <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                        {"Outside your opening hours."}
                      </span>
                    </span>
                  </div>
                </div>
                <span style={{ display: "block", marginTop: "10px", fontSize: "13px", color: "var(--mut)" }}>
                  {"Dial the code from your business phone once. You can change this any time."}
                </span>
              </div>
              <div className="li" style={{ border: "1px solid var(--line)", borderRadius: "16px" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
                <span style={{ flex: "1" }}>
                  <b style={{ display: "block", fontWeight: "600" }}>
                    {"Also answer WhatsApp"}
                  </b>
                  <span style={{ fontSize: "13px", color: "var(--mut)" }}>
                    {"Same receptionist, same memory. Takes 2 minutes."}
                  </span>
                </span>
                <span className="obtn">
                  {"Connect"}
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: "76px", flex: "none", display: "flex", alignItems: "center", padding: "0 32px", borderTop: "1px solid var(--line)" }}>
            <Link href="/setup/test-call/" className="obtn" style={{ cursor: "pointer" }}>
              {"Back"}
            </Link>
            <span style={{ flex: "1" }}>
            </span>
            <span className="pbtn">
              {"Go live"}
            </span>
          </div>
        </div>
      </div>
  );
}
