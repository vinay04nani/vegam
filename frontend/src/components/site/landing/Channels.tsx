// Ported from design board LandingV2 (Channels) by design/tools/port.py. Sample data is inline.
import type { CSSProperties } from "react";

export default function Channels() {
  return (
      <section id="channels" style={{ background: "#FFFFFF" }}>
        <div className="vg-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 112px" }} data-s="s10 s11">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            <div>
              <span className="vg-rv" style={{ display: "inline-block", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"One agent, every channel"}
              </span>
              <h2 style={{ margin: "16px 0 0", maxWidth: "760px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-0.045em", color: "#141414" }} data-s="s4">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Wherever customers reach you,"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                  <span className="vg-line-in" style={{ display: "block", color: "#8A8A8A" }}>
                    {"Vegham answers."}
                  </span>
                </span>
              </h2>
            </div>
            <p className="vg-rv" style={{ margin: "20px 0 0", maxWidth: "420px", fontSize: "18px", color: "#5C5C5C" }} data-s="s16">
              {"Calls, chats and a simple link. Customers pick the way they like to talk, and Vegham is already there."}
            </p>
          </div>
          <div aria-hidden="true" className="vg-hub" style={{ position: "relative", height: "92px", marginTop: "40px" }}>
            <svg viewBox="0 0 1136 92" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
              <path className="vg-hubline" d="M568 22 C568 60, 189 46, 189 92" fill="none" stroke="#10B981" strokeOpacity=".55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength="1">
              </path>
              <path className="vg-hubline" d="M568 22 C568 60, 568 46, 568 92" fill="none" stroke="#10B981" strokeOpacity=".55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength="1">
              </path>
              <path className="vg-hubline" d="M568 22 C568 60, 947 46, 947 92" fill="none" stroke="#10B981" strokeOpacity=".55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength="1">
              </path>
            </svg>
            <span className="vg-hubdot" style={{ position: "absolute", left: "50%", top: "0", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: "8px", height: "30px", padding: "0 12px 0 8px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid rgba(16,185,129,.45)", fontSize: "13px", fontWeight: "500", color: "#0B8F63", whiteSpace: "nowrap" }} data-s="s1">
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 0 4px rgba(16,185,129,.15)" }}>
              </span>
              {"One agent"}
            </span>
          </div>
          <div className="vg-g3" style={{ marginTop: "0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 4% cover 30%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                    {"Voice"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Phone calls"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"Picks up on your business number, in a natural voice."}
                </span>
              </span>
            </div>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 9% cover 35%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Chat"}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Voice notes"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"WhatsApp"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"Replies to messages and voice notes on your WhatsApp number."}
                </span>
              </span>
            </div>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 14% cover 40%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FF0069">
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Chat"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Instagram"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"Answers direct messages on your business profile."}
                </span>
              </span>
            </div>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 12% cover 38%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0866FF">
                    <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Chat"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Messenger"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"Answers messages sent to your Facebook page."}
                </span>
              </span>
            </div>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 17% cover 43%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#29A9EB">
                    </circle>
                    <path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Chat"}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Voice notes"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"Telegram"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"A Telegram assistant your customers can message any time."}
                </span>
              </span>
            </div>
            <div className="vg-lift vg-rv" style={{ background: "#FFFFFF", border: "1px solid #ECECEF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px", animationRange: "entry 22% cover 48%" } as CSSProperties}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECEF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1">
                    </path>
                    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1">
                    </path>
                  </svg>
                </span>
                <span style={{ display: "inline-flex", gap: "6px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                    {"Voice"}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E6E6EA", color: "#5C5C5C", fontSize: "12.5px", whiteSpace: "nowrap" }} data-s="s1">
                    {"Chat"}
                  </span>
                </span>
              </span>
              <span>
                <b style={{ display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "500", fontSize: "20px", letterSpacing: "-0.02em" }}>
                  {"A link or your website"}
                </b>
                <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", color: "#5C5C5C" }}>
                  {"One link to talk or type from any browser. No app, no phone number."}
                </span>
              </span>
            </div>
          </div>
          <p style={{ margin: "20px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
            {"Connect one channel or all of them. It is the same agent with the same memory everywhere."}
          </p>
        </div>
      </section>
  );
}
