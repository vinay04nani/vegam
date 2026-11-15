// Ported from design board Contact by design/tools/port.py. Sample data is inline.
import SiteFooter from "@/components/site/SiteFooter";
import InnerHeader from "@/components/site/InnerHeader";

export default function ContactPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <InnerHeader />
        <section style={{ background: "linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%)", borderBottom: "1px solid #EFEFEF" }}>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "inline-block", padding: "10px 28px", borderTop: "1px solid #E2E2E6", borderBottom: "1px solid #E2E2E6", fontSize: "15px", color: "#3D3D3D" }}>
              {"Contact"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "26px auto 0", maxWidth: "900px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.045em", color: "#141414" }}>
              {"Talk to a person."}
              <br />
              <span style={{ color: "#8A8A8A" }}>
                {"We’re quick to reply."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "20px auto 0", maxWidth: "600px", fontSize: "18.5px", color: "#3D3D3D" }}>
              {"Questions about Vegham, your account or working together. Pick whatever is easiest."}
            </p>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 0", display: "flex", flexWrap: "wrap", gap: "14px" }} data-s="s11">
            <div className="vg-lift" style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "8px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
              <span style={{ display: "inline-flex", width: "44px", height: "44px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                  </path>
                </svg>
              </span>
              <b style={{ marginTop: "6px", fontSize: "18px", fontWeight: "500" }} data-s="s16">
                {"WhatsApp"}
              </b>
              <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                {"Fastest. Usually within the hour, 9 AM–9 PM IST."}
              </span>
              <span style={{ marginTop: "4px", fontWeight: "500", color: "#16182A" }}>
                {"[WhatsApp number]"}
              </span>
            </div>
            <div className="vg-lift" style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "8px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
              <span style={{ display: "inline-flex", width: "44px", height: "44px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2">
                  </rect>
                  <path d="M3 7l9 6 9-6">
                  </path>
                </svg>
              </span>
              <b style={{ marginTop: "6px", fontSize: "18px", fontWeight: "500" }} data-s="s16">
                {"Email"}
              </b>
              <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                {"For anything detailed. We reply within one working day."}
              </span>
              <span style={{ marginTop: "4px", fontWeight: "500", color: "#16182A" }}>
                {"[support email]"}
              </span>
            </div>
            <div className="vg-lift" style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "8px", padding: "26px", border: "1px solid #ECECF0", borderRadius: "20px", background: "#FFFFFF" }}>
              <span style={{ display: "inline-flex", width: "44px", height: "44px", borderRadius: "12px", background: "#F5F5F7", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2">
                  </rect>
                  <path d="M3 10h18M8 3v4M16 3v4">
                  </path>
                </svg>
              </span>
              <b style={{ marginTop: "6px", fontSize: "18px", fontWeight: "500" }} data-s="s16">
                {"Book a demo"}
              </b>
              <span style={{ color: "#6B6B6B", fontSize: "15px" }}>
                {"See Vegham live in 30 minutes, in your language."}
              </span>
              <span style={{ marginTop: "4px", fontWeight: "500", color: "#16182A" }}>
                {"Pick a time →"}
              </span>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 112px", display: "flex", flexWrap: "wrap", gap: "40px 64px", alignItems: "flex-start" }} data-s="s11">
            <div style={{ flex: "1.3 1 520px", padding: "36px", border: "1px solid #ECECF0", borderRadius: "28px" }}>
              <h2 style={{ margin: "0 0 22px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "30px", letterSpacing: "-0.03em" }}>
                {"Send us a message"}
              </h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label htmlFor="ct-n" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Your name"}
                    </label>
                    <input id="ct-n" type="text" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                  </div>
                  <div>
                    <label htmlFor="ct-c" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                      {"Email or WhatsApp number"}
                    </label>
                    <input id="ct-c" type="text" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ct-t" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                    {"Topic"}
                  </label>
                  <select id="ct-t" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "48px", padding: "0 16px", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F" }}>
                    <option>
                      {"Sales and pricing"}
                    </option>
                    <option>
                      {"Help with my account"}
                    </option>
                    <option>
                      {"Partnerships"}
                    </option>
                    <option>
                      {"Press"}
                    </option>
                    <option>
                      {"Something else"}
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ct-m" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#2B2B2B" }}>
                    {"Message"}
                  </label>
                  <textarea id="ct-m" rows={5} style={{ display: "block", width: "100%", boxSizing: "border-box", border: "1px solid #E2E2E6", borderRadius: "12px", background: "#FFFFFF", font: "inherit", fontSize: "15px", color: "#1F1F1F", height: "auto", padding: "12px 16px", resize: "vertical" }}>
                  </textarea>
                </div>
                <button type="submit" style={{ alignSelf: "flex-start", height: "50px", padding: "0 26px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                  {"Send message"}
                </button>
              </form>
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ padding: "28px", borderRadius: "28px", background: "#F5F5F7" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                  {"Office"}
                </span>
                <b style={{ display: "block", marginTop: "10px", fontSize: "17px", fontWeight: "500" }}>
                  {"Vegham"}
                </b>
                <span style={{ display: "block", marginTop: "4px", color: "#6B6B6B" }}>
                  {"[Registered address]"}
                </span>
              </div>
              <div style={{ padding: "28px", borderRadius: "28px", border: "1px solid #ECECF0" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                  {"Already a customer?"}
                </span>
                <span style={{ display: "block", marginTop: "10px", color: "#3D3D3D" }}>
                  {"The fastest help is inside the app: "}
                  <b style={{ fontWeight: "600" }}>
                    {"Help → Chat with us"}
                  </b>
                  {"."}
                </span>
                <a href="#" style={{ display: "inline-block", marginTop: "10px", color: "#16182A" }}>
                  {"Visit the help centre →"}
                </a>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
