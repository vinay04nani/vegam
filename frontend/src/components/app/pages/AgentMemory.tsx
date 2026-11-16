// Ported from design board AppAgentMemory by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function AgentMemory() {
  return (
      <main style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <div style={{ flex: "1", minHeight: "0", overflow: "hidden", position: "relative" }} data-s="scroll">
          <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "16px 28px 0" }}>
              <span className="fld" style={{ width: "220px", height: "36px", gap: "8px", color: "var(--mut2)", marginRight: "8px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7">
                  </circle>
                  <path d="M20 20l-3.5-3.5">
                  </path>
                </svg>
                {"Search memory"}
              </span>
              <span className="sw on">
              </span>
            </div>
            <div style={{ flex: "1", display: "flex", minHeight: "0" }}>
              <div style={{ flex: "1", overflow: "hidden", padding: "24px 32px", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "28px", alignContent: "start" }} data-s="scroll">
                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
                    <div style={{ padding: "18px 20px", borderRadius: "16px", background: "var(--soft2)" }}>
                      <div className="hero" style={{ fontSize: "30px" }}>
                        {"1,284"}
                      </div>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"people it knows"}
                      </span>
                    </div>
                    <div style={{ padding: "18px 20px", borderRadius: "16px", background: "var(--soft2)" }}>
                      <div className="hero" style={{ fontSize: "30px" }}>
                        {"412"}
                      </div>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"recognised when they called back this month"}
                      </span>
                    </div>
                    <div style={{ padding: "18px 20px", borderRadius: "16px", background: "var(--soft2)" }}>
                      <div className="hero" style={{ fontSize: "30px" }}>
                        {"23"}
                      </div>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"unfinished conversations it will bring up"}
                      </span>
                    </div>
                  </div>
                  <div className="rc" style={{ padding: "18px 22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "15px", fontWeight: "600" }}>
                        {"What it remembers"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"across everyone"}
                      </span>
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"Names"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"1,284"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"Language they prefer"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "86%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"1,102"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"Preferences (times, staff, channel)"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "50%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"640"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"What they asked about"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "40%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"512"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"How they felt last time"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "22%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"288"}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 52px", gap: "14px", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                        <span style={{ fontSize: "14px" }}>
                          {"Unfinished conversations"}
                        </span>
                        <span style={{ height: "6px", borderRadius: "3px", background: "var(--soft)" }}>
                          <span style={{ display: "block", width: "2%", height: "100%", borderRadius: "3px", background: "#10B981" }}>
                          </span>
                        </span>
                        <span style={{ textAlign: "right", fontSize: "13px", color: "var(--mut)" }}>
                          {"23"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rc" style={{ padding: "18px 22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "15px", fontWeight: "600" }}>
                        {"Recently learned"}
                      </b>
                      <Link href="/app/people/" style={{ cursor: "pointer", fontSize: "12.5px", fontWeight: "500" }}>
                        {"All people →"}
                      </Link>
                    </div>
                    <div style={{ marginTop: "6px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0" }}>
                        <span className="av" style={{ width: "30px", height: "30px", fontSize: "12px", background: "var(--soft)", color: "var(--text)" }}>
                          {"S"}
                        </span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                            {"Sunita Das"}
                          </b>
                          <span style={{ display: "block", fontSize: "13px", color: "var(--mut)" }}>
                            {"Prefers early morning slots"}
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--mut2)", whiteSpace: "nowrap" }}>
                          {"12 min ago"}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                        <span className="av" style={{ width: "30px", height: "30px", fontSize: "12px", background: "var(--soft)", color: "var(--text)" }}>
                          {"A"}
                        </span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                            {"Ananya Rao"}
                          </b>
                          <span style={{ display: "block", fontSize: "13px", color: "var(--mut)" }}>
                            {"Wants to bring a friend next time"}
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--mut2)", whiteSpace: "nowrap" }}>
                          {"1 h ago"}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                        <span className="av" style={{ width: "30px", height: "30px", fontSize: "12px", background: "var(--soft)", color: "var(--text)" }}>
                          {"K"}
                        </span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                            {"Kabir Rao"}
                          </b>
                          <span style={{ display: "block", fontSize: "13px", color: "var(--mut)" }}>
                            {"Asked about parking for a van"}
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--mut2)", whiteSpace: "nowrap" }}>
                          {"2 h ago"}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                        <span className="av" style={{ width: "30px", height: "30px", fontSize: "12px", background: "var(--soft)", color: "var(--text)" }}>
                          {"N"}
                        </span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                            {"Neha Kapoor"}
                          </b>
                          <span style={{ display: "block", fontSize: "13px", color: "var(--mut)" }}>
                            {"Prefers to talk in Tamil"}
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--mut2)", whiteSpace: "nowrap" }}>
                          {"Yesterday"}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderTop: "1px solid var(--line)" }}>
                        <span className="av" style={{ width: "30px", height: "30px", fontSize: "12px", background: "#ECECF0", color: "#55565F" }}>
                          {"D"}
                        </span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <b style={{ fontWeight: "500", fontSize: "13.5px" }}>
                            {"Divya Menon"}
                          </b>
                          <span style={{ display: "block", fontSize: "13px", color: "var(--mut)" }}>
                            {"Needs the ground-floor room"}
                          </span>
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--mut2)", whiteSpace: "nowrap" }}>
                          {"Yesterday"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div className="rc" style={{ padding: "16px 20px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <b style={{ fontSize: "14px", fontWeight: "600" }}>
                        {"Not sure · please check"}
                      </b>
                      <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                        {"2"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0" }}>
                      <span className="av" style={{ width: "26px", height: "26px", fontSize: "10px", background: "var(--soft)", color: "var(--text)" }}>
                        {"K"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13px" }}>
                          {"Kavya Nair · Group size: 8 or 10?"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Heard two numbers on the last call"}
                        </span>
                      </span>
                      <span className="obtn" style={{ height: "30px", padding: "0 10px", fontSize: "12.5px" }}>
                        {"Confirm"}
                      </span>
                      <span className="obtn" style={{ height: "30px", padding: "0 10px", fontSize: "12.5px" }}>
                        {"Fix"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                      <span className="av" style={{ width: "26px", height: "26px", fontSize: "10px", background: "var(--soft)", color: "var(--text)" }}>
                        {"+"}
                      </span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <b style={{ display: "block", fontWeight: "500", fontSize: "13px" }}>
                          {"+91 70•• ••88 · Same person as Ananya Rao?"}
                        </b>
                        <span style={{ fontSize: "12px", color: "var(--mut)" }}>
                          {"Same number, different name"}
                        </span>
                      </span>
                      <span className="obtn" style={{ height: "30px", padding: "0 10px", fontSize: "12.5px" }}>
                        {"Confirm"}
                      </span>
                      <span className="obtn" style={{ height: "30px", padding: "0 10px", fontSize: "12.5px" }}>
                        {"Fix"}
                      </span>
                    </div>
                  </div>
                  <div className="sec" style={{ marginTop: "14px" }}>
                    <span>
                      {"When someone calls back"}
                    </span>
                  </div>
                  <div className="list">
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span className="radio on" style={{ marginTop: "2px" }}>
                      </span>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Naturally"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Picks up where you left off"}
                        </span>
                      </span>
                    </div>
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span className="radio" style={{ marginTop: "2px" }}>
                      </span>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Quietly"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Uses it to help faster, never mentions the past"}
                        </span>
                      </span>
                    </div>
                    <div className="li" style={{ alignItems: "flex-start" }}>
                      <span className="radio" style={{ marginTop: "2px" }}>
                      </span>
                      <span style={{ flex: "1" }}>
                        <b style={{ display: "block", fontWeight: "500" }}>
                          {"Off"}
                        </b>
                        <span style={{ fontSize: "12.5px", color: "var(--mut)" }}>
                          {"Everyone is a new caller"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="sec">
                    <span>
                      {"Keep memory for"}
                    </span>
                  </div>
                  <span className="perm">
                    <span className="">
                      {"6 months"}
                    </span>
                    <span className="on">
                      {"12 months"}
                    </span>
                    <span className="">
                      {"2 years"}
                    </span>
                  </span>
                  <div className="sec">
                    <span>
                      {"Privacy"}
                    </span>
                  </div>
                  <div className="list">
                    <div className="li">
                      <span className="k" style={{ flex: "1", width: "auto" }}>
                        {"Personal details (family, health, money)"}
                      </span>
                      <span className="sw">
                      </span>
                    </div>
                    <div className="li">
                      <span className="k" style={{ flex: "1", width: "auto" }}>
                        {"Ask before using details older than 3 months"}
                      </span>
                      <span className="sw on">
                      </span>
                    </div>
                    <div className="li">
                      <span className="k" style={{ flex: "1", width: "auto" }}>
                        {"Forget someone when they ask"}
                      </span>
                      <span className="sw on">
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
