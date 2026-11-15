// Ported from design board Company by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";

export default function CompanyPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "40", padding: "0 16px", marginBottom: "-78px" }}>
          <div className="vg-hdr-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", border: "1px solid transparent", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }} data-s="s11">
            <span style={{ flex: "1 1 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "#FFFFFF" }}>
              {"vegham"}
            </span>
            <nav aria-label="Site" style={{ display: "flex", flexWrap: "wrap", gap: "32px", fontSize: "15px", color: "#D4D7E6" }}>
              <Link href="/product/" style={{ textDecoration: "none" }}>
                {"Product"}
              </Link>
              <Link href="/how-it-works/" style={{ textDecoration: "none" }}>
                {"How it works"}
              </Link>
              <Link href="/pricing/" style={{ textDecoration: "none" }}>
                {"Pricing"}
              </Link>
              <Link href="/company/" aria-current="page" style={{ textDecoration: "none", color: "#FFFFFF", fontWeight: "500", borderBottom: "1.5px solid #FFFFFF", paddingBottom: "4px" }}>
                {"Company"}
              </Link>
            </nav>
            <div style={{ flex: "1 1 0", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <Link href="/login/" style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 20px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontSize: "15px", fontWeight: "500" }} data-s="s1 s2">
                {"Log in"}
              </Link>
              <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 20px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500" }} data-s="s1 s2">
                {"Book a demo"}
              </Link>
            </div>
            <label htmlFor="vg-menu" className="vg-mbtn" aria-label="Open menu" style={{ width: "40px", height: "40px", borderRadius: "12px", border: "1px solid rgba(255,255,255,.22)", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }} data-s="s2">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16">
                </path>
              </svg>
            </label>
          </div>
        </header>
        <input type="checkbox" id="vg-menu" aria-label="Open menu" style={{ position: "absolute", opacity: "0", pointerEvents: "none" }} />
        <div className="vg-mpanel" role="dialog" aria-label="Menu" style={{ position: "fixed", inset: "0", zIndex: "60", flexDirection: "column", padding: "18px 20px 28px", background: "#0B0D18", color: "#FFFFFF", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {"vegham"}
            </span>
            <label htmlFor="vg-menu" aria-label="Close menu" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18">
                </path>
              </svg>
            </label>
          </div>
          <nav aria-label="Mobile" style={{ marginTop: "28px" }}>
            <Link href="/product/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Product"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/how-it-works/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"How it works"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/pricing/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Pricing"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/company/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Company"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
            <Link href="/help/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.1)", color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-tight), sans-serif", fontSize: "28px", letterSpacing: "-0.03em" }}>
              {"Help centre"}
              <span aria-hidden="true" style={{ fontSize: "18px", color: "#8C90A8" }} data-s="s16">
                {"→"}
              </span>
            </Link>
          </nav>
          <div style={{ marginTop: "auto", paddingTop: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/signup/" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
              {"Start free"}
            </Link>
            <Link href="/login/" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.22)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
              {"Log in"}
            </Link>
          </div>
        </div>
        <section style={{ position: "relative", overflow: "hidden", backgroundColor: "#03050E", borderBottom: "0" }} data-s="s28">
          <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "0", bottom: "0" }}>
            <svg aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
              <defs>
                <linearGradient id="vga-sky-company" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#03050E">
                  </stop>
                  <stop offset=".45" stopColor="#081028">
                  </stop>
                  <stop offset=".72" stopColor="#0E2140">
                  </stop>
                  <stop offset="1" stopColor="#0B1830">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-g1-company" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#5BFFC8" stopOpacity="0">
                  </stop>
                  <stop offset=".08" stopColor="#7DFFD3" stopOpacity=".95">
                  </stop>
                  <stop offset=".3" stopColor="#2DE3A0" stopOpacity=".75">
                  </stop>
                  <stop offset=".62" stopColor="#14B8A6" stopOpacity=".35">
                  </stop>
                  <stop offset=".85" stopColor="#7C3AED" stopOpacity=".22">
                  </stop>
                  <stop offset="1" stopColor="#7C3AED" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-g2-company" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#22D3EE" stopOpacity="0">
                  </stop>
                  <stop offset=".1" stopColor="#5EEAD4" stopOpacity=".8">
                  </stop>
                  <stop offset=".4" stopColor="#3B6CF6" stopOpacity=".45">
                  </stop>
                  <stop offset=".75" stopColor="#8B5CF6" stopOpacity=".3">
                  </stop>
                  <stop offset="1" stopColor="#DB2777" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-g3-company" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#A7F3D0" stopOpacity="0">
                  </stop>
                  <stop offset=".1" stopColor="#6EE7B7" stopOpacity=".7">
                  </stop>
                  <stop offset=".5" stopColor="#10B981" stopOpacity=".3">
                  </stop>
                  <stop offset="1" stopColor="#10B981" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-mf-company" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1B2C52">
                  </stop>
                  <stop offset="1" stopColor="#0D1730">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-refl-company" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2DE3A0" stopOpacity=".22">
                  </stop>
                  <stop offset=".35" stopColor="#14B8A6" stopOpacity=".08">
                  </stop>
                  <stop offset="1" stopColor="#14B8A6" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-lake-company" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0B1A33">
                  </stop>
                  <stop offset="1" stopColor="#040812">
                  </stop>
                </linearGradient>
                <filter id="vga-blur-company" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7">
                  </feGaussianBlur>
                </filter>
                <filter id="vga-blur2-company" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="14">
                  </feGaussianBlur>
                </filter>
                <pattern id="vga-rp-company" width="120" height="10" patternUnits="userSpaceOnUse">
                  <rect width="120" height="10" fill="#FFFFFF" fillOpacity=".72">
                  </rect>
                  <rect x="6" width="3" height="10" fill="#FFFFFF">
                  </rect>
                  <rect x="23" width="2" height="10" fill="#FFFFFF" fillOpacity=".9">
                  </rect>
                  <rect x="41" width="5" height="10" fill="#FFFFFF">
                  </rect>
                  <rect x="63" width="2" height="10" fill="#FFFFFF" fillOpacity=".85">
                  </rect>
                  <rect x="78" width="4" height="10" fill="#FFFFFF">
                  </rect>
                  <rect x="99" width="2" height="10" fill="#FFFFFF" fillOpacity=".9">
                  </rect>
                  <rect x="111" width="3" height="10" fill="#FFFFFF">
                  </rect>
                </pattern>
                <mask id="vga-mask-company" maskUnits="userSpaceOnUse" x="-300" y="0" width="2200" height="1000">
                  <g className="vga-rays">
                    <rect x="-300" y="0" width="2300" height="1000" fill="url(#vga-rp-company)">
                    </rect>
                  </g>
                </mask>
              </defs>
              <rect width="1600" height="1000" fill="url(#vga-sky-company)">
              </rect>
              <g>
                <circle cx="61.7" cy="414.3" r="0.6" fill="#FFFFFF" opacity="0.93">
                </circle>
                <circle cx="1117.5" cy="57.3" r="1.0" fill="#FFFFFF" opacity="0.65" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                </circle>
                <circle cx="595.8" cy="507.1" r="1.0" fill="#FFFFFF" opacity="0.88">
                </circle>
                <circle cx="630.3" cy="34.3" r="0.5" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="153.2" cy="304.9" r="0.8" fill="#FFFFFF" opacity="0.43">
                </circle>
                <circle cx="1565.1" cy="161.8" r="0.6" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
                </circle>
                <circle cx="1507.0" cy="499.3" r="0.7" fill="#FFFFFF" opacity="0.52" className="vga-tw" style={{ animationDelay: "-1.9s" }}>
                </circle>
                <circle cx="1581.2" cy="484.1" r="1.3" fill="#FFFFFF" opacity="0.91">
                </circle>
                <circle cx="150.6" cy="370.5" r="1.3" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="846.2" cy="417.2" r="0.6" fill="#FFFFFF" opacity="0.43" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
                </circle>
                <circle cx="1402.2" cy="159.5" r="1.3" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="1550.7" cy="328.4" r="0.5" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="1165.7" cy="215.1" r="0.8" fill="#FFFFFF" opacity="0.37">
                </circle>
                <circle cx="963.0" cy="49.8" r="0.6" fill="#FFFFFF" opacity="0.74">
                </circle>
                <circle cx="1169.8" cy="341.6" r="0.7" fill="#FFFFFF" opacity="0.42">
                </circle>
                <circle cx="708.9" cy="22.6" r="0.5" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="1324.9" cy="75.0" r="0.5" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="1416.1" cy="200.9" r="1.3" fill="#FFFFFF" opacity="0.67">
                </circle>
                <circle cx="1206.8" cy="271.5" r="0.7" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="1139.8" cy="55.3" r="0.6" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="310.4" cy="556.4" r="0.8" fill="#FFFFFF" opacity="0.51">
                </circle>
                <circle cx="1459.9" cy="194.8" r="0.7" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="1253.2" cy="111.7" r="1.3" fill="#FFFFFF" opacity="0.93">
                </circle>
                <circle cx="1534.1" cy="132.1" r="0.6" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="1316.4" cy="231.5" r="0.5" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                </circle>
                <circle cx="873.3" cy="364.9" r="1.0" fill="#FFFFFF" opacity="0.88">
                </circle>
                <circle cx="808.8" cy="66.4" r="0.7" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
                </circle>
                <circle cx="247.4" cy="3.6" r="1.3" fill="#FFFFFF" opacity="0.48">
                </circle>
                <circle cx="664.8" cy="224.2" r="0.5" fill="#FFFFFF" opacity="0.36">
                </circle>
                <circle cx="525.4" cy="155.4" r="0.6" fill="#FFFFFF" opacity="0.67" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                </circle>
                <circle cx="378.4" cy="54.0" r="0.8" fill="#FFFFFF" opacity="0.77">
                </circle>
                <circle cx="1036.0" cy="43.8" r="1.3" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="16.0" cy="123.5" r="1.3" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="710.9" cy="430.0" r="0.8" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="1194.6" cy="289.7" r="1.0" fill="#FFFFFF" opacity="0.72">
                </circle>
                <circle cx="828.9" cy="342.2" r="0.6" fill="#FFFFFF" opacity="0.72">
                </circle>
                <circle cx="1162.0" cy="91.7" r="1.3" fill="#FFFFFF" opacity="0.36" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                </circle>
                <circle cx="1119.4" cy="538.1" r="1.3" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="977.1" cy="434.4" r="1.0" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-3.0s" }}>
                </circle>
                <circle cx="670.6" cy="38.2" r="0.8" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="223.0" cy="478.6" r="0.7" fill="#FFFFFF" opacity="0.55" className="vga-tw" style={{ animationDelay: "-1.2s" }}>
                </circle>
                <circle cx="1584.9" cy="194.3" r="0.6" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="599.1" cy="591.9" r="0.6" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="1019.9" cy="564.3" r="0.7" fill="#FFFFFF" opacity="0.88">
                </circle>
                <circle cx="341.7" cy="106.2" r="1.3" fill="#FFFFFF" opacity="0.70">
                </circle>
                <circle cx="1451.4" cy="155.3" r="0.8" fill="#FFFFFF" opacity="0.58">
                </circle>
                <circle cx="1588.7" cy="495.7" r="0.5" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="214.0" cy="495.8" r="0.7" fill="#FFFFFF" opacity="0.65">
                </circle>
                <circle cx="153.1" cy="339.6" r="1.0" fill="#FFFFFF" opacity="0.59">
                </circle>
                <circle cx="702.8" cy="273.2" r="0.8" fill="#FFFFFF" opacity="0.68">
                </circle>
                <circle cx="14.3" cy="427.0" r="0.8" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="1067.0" cy="122.3" r="1.3" fill="#FFFFFF" opacity="0.40">
                </circle>
                <circle cx="682.0" cy="87.7" r="0.6" fill="#FFFFFF" opacity="0.57" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
                </circle>
                <circle cx="68.7" cy="530.3" r="0.7" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="328.1" cy="508.8" r="0.8" fill="#FFFFFF" opacity="0.63" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
                </circle>
                <circle cx="350.5" cy="62.1" r="0.6" fill="#FFFFFF" opacity="0.72">
                </circle>
                <circle cx="1239.4" cy="23.4" r="0.5" fill="#FFFFFF" opacity="0.41" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
                </circle>
                <circle cx="802.9" cy="507.1" r="1.3" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="636.5" cy="110.8" r="0.6" fill="#FFFFFF" opacity="0.73">
                </circle>
                <circle cx="1279.6" cy="244.2" r="1.3" fill="#FFFFFF" opacity="0.77">
                </circle>
                <circle cx="526.2" cy="221.8" r="1.3" fill="#FFFFFF" opacity="0.47">
                </circle>
                <circle cx="1332.5" cy="288.5" r="0.5" fill="#FFFFFF" opacity="0.66">
                </circle>
                <circle cx="704.6" cy="537.6" r="0.6" fill="#FFFFFF" opacity="0.81" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                </circle>
                <circle cx="738.4" cy="73.1" r="1.3" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="1048.5" cy="484.0" r="0.8" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="17.7" cy="186.3" r="0.5" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                </circle>
                <circle cx="958.7" cy="390.1" r="0.8" fill="#FFFFFF" opacity="0.37" className="vga-tw" style={{ animationDelay: "-2.2s" }}>
                </circle>
                <circle cx="164.6" cy="330.4" r="0.8" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="571.6" cy="526.8" r="0.7" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="868.8" cy="260.8" r="1.3" fill="#FFFFFF" opacity="0.40">
                </circle>
                <circle cx="94.2" cy="254.2" r="0.7" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="41.0" cy="268.1" r="0.5" fill="#FFFFFF" opacity="0.42">
                </circle>
                <circle cx="484.3" cy="161.3" r="0.7" fill="#FFFFFF" opacity="0.40" className="vga-tw" style={{ animationDelay: "-2.2s" }}>
                </circle>
                <circle cx="867.7" cy="247.7" r="0.7" fill="#FFFFFF" opacity="0.69">
                </circle>
                <circle cx="175.4" cy="212.6" r="0.6" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="692.7" cy="103.2" r="1.3" fill="#FFFFFF" opacity="0.71">
                </circle>
                <circle cx="791.0" cy="242.2" r="0.7" fill="#FFFFFF" opacity="0.54" className="vga-tw" style={{ animationDelay: "-2.9s" }}>
                </circle>
                <circle cx="813.7" cy="420.2" r="1.0" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="1243.3" cy="393.3" r="0.8" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="56.5" cy="375.6" r="0.5" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="559.7" cy="371.2" r="0.7" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="704.2" cy="245.9" r="0.5" fill="#FFFFFF" opacity="0.51">
                </circle>
                <circle cx="889.9" cy="180.4" r="1.3" fill="#FFFFFF" opacity="0.78">
                </circle>
                <circle cx="802.6" cy="102.3" r="0.7" fill="#FFFFFF" opacity="0.78" className="vga-tw" style={{ animationDelay: "-3.0s" }}>
                </circle>
                <circle cx="723.9" cy="443.7" r="0.7" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="1090.1" cy="54.4" r="0.7" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="802.8" cy="27.4" r="0.6" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="1145.7" cy="355.3" r="1.0" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="1585.5" cy="220.9" r="0.8" fill="#FFFFFF" opacity="0.75">
                </circle>
                <circle cx="1071.5" cy="286.2" r="0.5" fill="#FFFFFF" opacity="0.80" className="vga-tw" style={{ animationDelay: "-1.5s" }}>
                </circle>
                <circle cx="456.2" cy="161.7" r="0.8" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="950.8" cy="411.1" r="1.0" fill="#FFFFFF" opacity="0.90">
                </circle>
                <circle cx="905.9" cy="554.6" r="0.7" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="31.0" cy="487.7" r="0.6" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="1161.7" cy="492.5" r="0.8" fill="#FFFFFF" opacity="0.77" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
                </circle>
                <circle cx="474.3" cy="95.7" r="0.6" fill="#FFFFFF" opacity="0.61">
                </circle>
                <circle cx="602.0" cy="195.4" r="1.3" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="1421.2" cy="171.0" r="0.5" fill="#FFFFFF" opacity="0.88">
                </circle>
                <circle cx="198.5" cy="24.2" r="0.7" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="16.2" cy="347.7" r="0.5" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="1366.4" cy="19.1" r="0.8" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="210.8" cy="34.5" r="1.3" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="1294.3" cy="48.8" r="1.0" fill="#FFFFFF" opacity="0.50">
                </circle>
                <circle cx="1292.7" cy="269.5" r="0.6" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="1193.4" cy="371.0" r="1.0" fill="#FFFFFF" opacity="0.75">
                </circle>
                <circle cx="564.5" cy="223.1" r="0.5" fill="#FFFFFF" opacity="0.61">
                </circle>
                <circle cx="1292.3" cy="209.5" r="0.8" fill="#FFFFFF" opacity="0.63">
                </circle>
                <circle cx="1210.6" cy="385.0" r="0.5" fill="#FFFFFF" opacity="0.47">
                </circle>
                <circle cx="315.2" cy="271.2" r="0.6" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="819.4" cy="52.0" r="0.7" fill="#FFFFFF" opacity="0.91" className="vga-tw" style={{ animationDelay: "-1.4s" }}>
                </circle>
                <circle cx="1044.1" cy="329.9" r="0.8" fill="#FFFFFF" opacity="0.54">
                </circle>
                <circle cx="282.5" cy="325.0" r="0.5" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="73.2" cy="4.3" r="1.3" fill="#FFFFFF" opacity="0.75">
                </circle>
                <circle cx="1018.9" cy="264.6" r="0.6" fill="#FFFFFF" opacity="0.83">
                </circle>
                <circle cx="408.4" cy="538.5" r="1.3" fill="#FFFFFF" opacity="0.68">
                </circle>
                <circle cx="577.0" cy="589.8" r="1.0" fill="#FFFFFF" opacity="0.58">
                </circle>
                <circle cx="1419.5" cy="559.2" r="0.7" fill="#FFFFFF" opacity="0.73">
                </circle>
                <circle cx="1222.0" cy="566.3" r="1.0" fill="#FFFFFF" opacity="0.71" className="vga-tw" style={{ animationDelay: "-1.7s" }}>
                </circle>
                <circle cx="1090.2" cy="328.2" r="0.5" fill="#FFFFFF" opacity="0.36">
                </circle>
                <circle cx="175.9" cy="97.0" r="0.5" fill="#FFFFFF" opacity="0.58">
                </circle>
                <circle cx="729.2" cy="570.4" r="0.6" fill="#FFFFFF" opacity="0.90">
                </circle>
                <circle cx="347.5" cy="104.7" r="1.0" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-0.3s" }}>
                </circle>
                <circle cx="1324.4" cy="184.0" r="1.3" fill="#FFFFFF" opacity="0.91">
                </circle>
                <circle cx="20.0" cy="220.3" r="0.7" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
                </circle>
                <circle cx="1119.2" cy="571.7" r="1.3" fill="#FFFFFF" opacity="0.70">
                </circle>
                <circle cx="26.2" cy="519.2" r="1.3" fill="#FFFFFF" opacity="0.60">
                </circle>
                <circle cx="330.7" cy="18.1" r="0.6" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="1555.9" cy="116.4" r="0.7" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
                </circle>
                <circle cx="1123.9" cy="148.0" r="0.7" fill="#FFFFFF" opacity="0.95">
                </circle>
                <circle cx="634.5" cy="223.2" r="1.3" fill="#FFFFFF" opacity="0.71" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                </circle>
                <circle cx="721.7" cy="255.1" r="1.3" fill="#FFFFFF" opacity="0.71" className="vga-tw" style={{ animationDelay: "-1.2s" }}>
                </circle>
                <circle cx="313.0" cy="491.8" r="0.8" fill="#FFFFFF" opacity="0.61" className="vga-tw" style={{ animationDelay: "-0.4s" }}>
                </circle>
                <circle cx="1235.2" cy="397.7" r="1.0" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="623.1" cy="104.2" r="0.6" fill="#FFFFFF" opacity="0.40">
                </circle>
                <circle cx="605.4" cy="440.5" r="1.0" fill="#FFFFFF" opacity="0.36">
                </circle>
                <circle cx="1164.5" cy="467.7" r="0.7" fill="#FFFFFF" opacity="0.89" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
                </circle>
                <circle cx="497.0" cy="224.6" r="0.5" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="363.1" cy="496.4" r="1.3" fill="#FFFFFF" opacity="0.43">
                </circle>
                <circle cx="1039.9" cy="139.5" r="0.8" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="184.6" cy="197.5" r="1.0" fill="#FFFFFF" opacity="0.75">
                </circle>
                <circle cx="724.3" cy="326.7" r="0.6" fill="#FFFFFF" opacity="0.65" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
                </circle>
                <circle cx="804.6" cy="302.5" r="1.3" fill="#FFFFFF" opacity="0.64">
                </circle>
                <circle cx="113.6" cy="446.2" r="0.6" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="579.9" cy="470.5" r="0.5" fill="#FFFFFF" opacity="0.71">
                </circle>
                <circle cx="16.7" cy="77.0" r="0.8" fill="#FFFFFF" opacity="0.51">
                </circle>
                <circle cx="562.9" cy="505.1" r="0.8" fill="#FFFFFF" opacity="0.73">
                </circle>
                <circle cx="816.4" cy="499.2" r="1.3" fill="#FFFFFF" opacity="0.78">
                </circle>
                <circle cx="669.8" cy="484.7" r="1.0" fill="#FFFFFF" opacity="0.38" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                </circle>
                <circle cx="1564.9" cy="205.5" r="1.0" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                </circle>
                <circle cx="557.7" cy="522.9" r="1.3" fill="#FFFFFF" opacity="0.71" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                </circle>
                <circle cx="250.3" cy="206.5" r="0.6" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="272.2" cy="430.2" r="0.7" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-0.3s" }}>
                </circle>
                <circle cx="1125.1" cy="337.1" r="0.5" fill="#FFFFFF" opacity="0.80">
                </circle>
                <circle cx="1341.7" cy="358.0" r="1.3" fill="#FFFFFF" opacity="0.66">
                </circle>
                <circle cx="297.9" cy="497.7" r="0.5" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="855.2" cy="338.8" r="0.7" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="436.8" cy="41.3" r="0.8" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-1.7s" }}>
                </circle>
                <circle cx="1276.0" cy="261.3" r="0.5" fill="#FFFFFF" opacity="0.70">
                </circle>
                <circle cx="733.7" cy="53.7" r="0.6" fill="#FFFFFF" opacity="0.83">
                </circle>
                <circle cx="43.3" cy="325.6" r="0.6" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="485.0" cy="325.4" r="0.6" fill="#FFFFFF" opacity="0.40">
                </circle>
                <circle cx="1351.6" cy="325.5" r="1.0" fill="#FFFFFF" opacity="0.73">
                </circle>
                <circle cx="1064.3" cy="141.1" r="0.8" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="441.7" cy="580.4" r="0.6" fill="#FFFFFF" opacity="0.59">
                </circle>
                <circle cx="643.1" cy="237.4" r="0.7" fill="#FFFFFF" opacity="0.53" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                </circle>
                <circle cx="565.0" cy="65.2" r="0.7" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="727.0" cy="348.8" r="0.5" fill="#FFFFFF" opacity="0.69">
                </circle>
                <circle cx="54.6" cy="323.9" r="0.7" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="834.4" cy="337.6" r="1.3" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="523.4" cy="408.6" r="1.0" fill="#FFFFFF" opacity="0.37">
                </circle>
              </g>
              <g mask="url(#vga-mask-company)" opacity=".9">
                <g className="vga-s2" filter="url(#vga-blur-company)">
                  <path d="M -200 18 L -175 15 L -150 11 L -125 6 L -100 1 L -75 -5 L -50 -12 L -25 -19 L 0 -26 L 25 -32 L 50 -39 L 75 -44 L 100 -49 L 125 -53 L 150 -56 L 175 -58 L 200 -59 L 225 -58 L 250 -57 L 275 -54 L 300 -50 L 325 -44 L 350 -38 L 375 -31 L 400 -23 L 425 -15 L 450 -6 L 475 3 L 500 12 L 525 20 L 550 28 L 575 36 L 600 43 L 625 48 L 650 53 L 675 57 L 700 59 L 725 60 L 750 60 L 775 59 L 800 57 L 825 53 L 850 49 L 875 43 L 900 37 L 925 31 L 950 24 L 975 17 L 1000 10 L 1025 4 L 1050 -2 L 1075 -7 L 1100 -12 L 1125 -15 L 1150 -18 L 1175 -19 L 1200 -19 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -8 L 1325 -2 L 1350 5 L 1375 12 L 1400 20 L 1425 29 L 1450 38 L 1475 47 L 1500 55 L 1525 64 L 1550 72 L 1575 79 L 1600 85 L 1625 90 L 1650 95 L 1675 98 L 1700 99 L 1725 100 L 1750 99 L 1775 98 L 1800 95 L 1800 278 L 1775 282 L 1750 288 L 1725 296 L 1700 306 L 1675 317 L 1650 329 L 1625 340 L 1600 352 L 1575 362 L 1550 372 L 1525 379 L 1500 385 L 1475 389 L 1450 390 L 1425 389 L 1400 386 L 1375 380 L 1350 373 L 1325 364 L 1300 354 L 1275 343 L 1250 332 L 1225 321 L 1200 311 L 1175 302 L 1150 294 L 1125 289 L 1100 285 L 1075 283 L 1050 283 L 1025 286 L 1000 291 L 975 297 L 950 305 L 925 314 L 900 323 L 875 332 L 850 342 L 825 350 L 800 357 L 775 363 L 750 366 L 725 368 L 700 367 L 675 363 L 650 357 L 625 349 L 600 340 L 575 328 L 550 315 L 525 301 L 500 287 L 475 274 L 450 261 L 425 248 L 400 238 L 375 229 L 350 223 L 325 219 L 300 217 L 275 218 L 250 221 L 225 226 L 200 234 L 175 242 L 150 252 L 125 262 L 100 273 L 75 283 L 50 292 L 25 300 L 0 307 L -25 311 L -50 314 L -75 314 L -100 312 L -125 308 L -150 302 L -175 294 L -200 285 Z" fill="url(#vga-g2-company)">
                  </path>
                </g>
                <g className="vga-s1" filter="url(#vga-blur-company)">
                  <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-company)">
                  </path>
                </g>
                <g className="vga-s3" filter="url(#vga-blur-company)">
                  <path d="M -200 270 L -175 261 L -150 252 L -125 245 L -100 239 L -75 235 L -50 233 L -25 233 L 0 236 L 25 241 L 50 247 L 75 255 L 100 263 L 125 272 L 150 280 L 175 287 L 200 293 L 225 297 L 250 299 L 275 298 L 300 296 L 325 291 L 350 284 L 375 276 L 400 267 L 425 258 L 450 248 L 475 239 L 500 232 L 525 226 L 550 222 L 575 221 L 600 221 L 625 224 L 650 229 L 675 235 L 700 243 L 725 251 L 750 260 L 775 268 L 800 275 L 825 281 L 850 284 L 875 286 L 900 286 L 925 283 L 950 278 L 975 271 L 1000 263 L 1025 254 L 1050 245 L 1075 235 L 1100 227 L 1125 219 L 1150 213 L 1175 210 L 1200 208 L 1225 209 L 1250 212 L 1275 216 L 1300 223 L 1325 231 L 1350 239 L 1375 247 L 1400 256 L 1425 263 L 1450 268 L 1475 272 L 1500 274 L 1525 273 L 1550 270 L 1575 265 L 1600 259 L 1625 250 L 1650 241 L 1675 232 L 1700 222 L 1725 214 L 1750 206 L 1775 201 L 1800 197 L 1800 487 L 1775 494 L 1750 498 L 1725 498 L 1700 495 L 1675 487 L 1650 477 L 1625 465 L 1600 453 L 1575 442 L 1550 433 L 1525 428 L 1500 427 L 1475 430 L 1450 437 L 1425 449 L 1400 462 L 1375 478 L 1350 493 L 1325 507 L 1300 518 L 1275 526 L 1250 530 L 1225 529 L 1200 524 L 1175 515 L 1150 504 L 1125 492 L 1100 481 L 1075 470 L 1050 463 L 1025 459 L 1000 459 L 975 463 L 950 470 L 925 480 L 900 492 L 875 503 L 850 514 L 825 522 L 800 527 L 775 528 L 750 524 L 725 517 L 700 506 L 675 493 L 650 480 L 625 466 L 600 455 L 575 446 L 550 442 L 525 442 L 500 446 L 475 455 L 450 467 L 425 480 L 400 495 L 375 509 L 350 522 L 325 531 L 300 536 L 275 537 L 250 535 L 225 528 L 200 519 L 175 509 L 150 498 L 125 489 L 100 482 L 75 478 L 50 478 L 25 482 L 0 490 L -25 500 L -50 513 L -75 526 L -100 538 L -125 548 L -150 555 L -175 558 L -200 557 Z" fill="url(#vga-g3-company)">
                  </path>
                </g>
              </g>
              <g filter="url(#vga-blur2-company)" opacity=".45">
                <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-company)">
                </path>
              </g>
            </svg>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.1) 45%, rgba(3,5,14,.35) 100%)" }}>
            </div>
          </div>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "160px 32px 72px", display: "flex", flexWrap: "wrap", gap: "40px 72px", alignItems: "flex-end" }} data-s="s11">
            <div style={{ flex: "2 1 560px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9EA3BD" }}>
                {"Company"}
              </span>
              <h1 style={{ margin: "18px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "72px", lineHeight: "1.04", letterSpacing: "-0.045em", color: "#FFFFFF" }}>
                {"We’re building the voice agent"}
                <br />
                <span style={{ color: "#A9AECB" }}>
                  {"every business deserves."}
                </span>
              </h1>
            </div>
            <div style={{ flex: "1 1 320px" }}>
              <span style={{ fontFamily: "var(--font-tight), sans-serif", fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                {"वेग"}
              </span>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#C9CCDD" }}>
                <b style={{ fontWeight: "600", color: "#FFFFFF" }}>
                  {"Vegham"}
                </b>
                {" comes from "}
                <i>
                  {"vegam"}
                </i>
                {", the Sanskrit word for speed. It’s our promise: every customer answered in seconds."}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", gap: "40px 72px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 320px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Why we exist"}
              </span>
            </div>
            <div style={{ flex: "2 1 560px", fontSize: "21px", lineHeight: "1.6", color: "#2B2B2B" }}>
              <p style={{ margin: "0" }}>
                {"Most businesses don’t lose customers because of their service. They lose them in the first few minutes: a WhatsApp that sits unread, a call nobody could pick up, a follow-up nobody had time to send."}
              </p>
              <p style={{ margin: "22px 0 0", color: "#5C5C5C" }}>
                {"Big companies solve this with call centres and large teams. Vegham gives every business the same: an AI voice agent that answers in seconds, remembers every customer and follows up, in the language the customer speaks."}
              </p>
            </div>
          </div>
        </section>
        <section style={{ borderTop: "1px solid #EFEFEF", borderBottom: "1px solid #EFEFEF", padding: "28px 0", overflow: "hidden" }}>
          <div className="vg-rowL" style={{ display: "flex", width: "max-content", fontFamily: "var(--font-tight), sans-serif", fontSize: "40px", lineHeight: "1", letterSpacing: "-0.04em", color: "#16182A", whiteSpace: "nowrap" }} data-s="s6">
            <span style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              <span>
                {"वेग"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"speed"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"వేగం"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"வேகம்"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"ವೇಗ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"বেগ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
            </span>
            <span aria-hidden="true" style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              <span>
                {"वेग"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"speed"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"వేగం"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"வேகம்"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"ವೇಗ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
              <span>
                {"বেগ"}
              </span>
              <span style={{ color: "#C4C4CC" }}>
                {"·"}
              </span>
            </span>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px" }} data-s="s10 s11">
            <div>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"What we believe"}
              </span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.08" }} data-s="s3">
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    {"Four things"}
                  </span>
                </span>
                <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                  <span className="vg-line-in" style={{ display: "block" }}>
                    <span style={{ color: "#8A8A8A" }}>
                      {"we won’t compromise on."}
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Every customer deserves an answer"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"A message left unanswered is a person left waiting. We build so nobody has to wait."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Built in India, for everyone"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"Made for how people really talk: in many languages, on WhatsApp, on the phone."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Owners stay in charge"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"The AI handles the routine. You decide what it says and when it hands over."}
                </p>
              </div>
              <div className="vg-lift" style={{ flex: "1 1 260px", background: "#F6F6F8", borderRadius: "28px", padding: "28px", minHeight: "220px" }}>
                <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#16182A" }}>
                  {"04"}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "24px", lineHeight: "1.2" }}>
                  {"Respect by default"}
                </h3>
                <p style={{ margin: "0", color: "#6B6B6B" }}>
                  {"Opt-in only, STOP always works, and your customers’ data stays yours."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px", display: "flex", flexWrap: "wrap", gap: "16px" }} data-s="s10 s11">
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Talk to us"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Questions, partnerships, press"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"We reply within one working day."}
              </p>
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {"[contact email]"}
              </span>
              <Link href="/contact/" style={{ marginTop: "14px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 22px", borderRadius: "999px", background: "#EDEDEF", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Contact us"}
              </Link>
            </div>
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Careers"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Build Vegham with us"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"We’re a small team that cares about craft, speed and the businesses we serve."}
              </p>
              <Link href="/careers/" style={{ marginTop: "14px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 22px", borderRadius: "999px", background: "#EDEDEF", color: "#1F1F1F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"See open roles"}
              </Link>
            </div>
            <div style={{ flex: "1 1 360px", border: "1px solid #ECECF0", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Registered office"}
              </span>
              <h3 style={{ margin: "4px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px" }}>
                {"Vegham"}
              </h3>
              <p style={{ margin: "0", color: "#6B6B6B" }}>
                {"[Registered address]"}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 112px", display: "flex", flexWrap: "wrap", gap: "16px" }} data-s="s10 s11">
            <a href="#" className="vg-lift" style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "10px", padding: "32px", borderRadius: "28px", background: "#16182A", color: "#FFFFFF", textDecoration: "none" }}>
              <span style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#A5ABDB" }}>
                {"How we handle your data"}
              </span>
              <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px", lineHeight: "1.15" }}>
                {"Encrypted, never sold,"}
                <br />
                {"always yours."}
              </span>
              <span style={{ color: "#C3C6DA" }}>
                {"Read our security and privacy promises →"}
              </span>
            </a>
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "14px", padding: "32px", borderRadius: "28px", border: "1px solid #ECECF0" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B6B" }}>
                {"Press kit"}
              </span>
              <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px", lineHeight: "1.15" }}>
                {"Wordmark and colours"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <span style={{ fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "34px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                  {"vegham"}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#FFFFFF", border: "1px solid #ECECF0" }}>
                  </span>
                  {"White"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#F5F5F7", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Mist"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "#16182A", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Ink"}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#6B6B6B" }}>
                  <span style={{ width: "64px", height: "44px", borderRadius: "12px", background: "linear-gradient(100deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777)", border: "1px solid #ECECF0" }}>
                  </span>
                  {"Aurora"}
                </span>
              </div>
              <a href="#" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "42px", padding: "0 18px", borderRadius: "999px", border: "1px solid #D4D4DA", color: "#1F1F1F", textDecoration: "none", fontSize: "14.5px" }} data-s="s1">
                {"Download press kit (ZIP)"}
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 32px 112px" }} data-s="s12">
          <div className="vg-aur-host" style={{ position: "relative", maxWidth: "1136px", margin: "0 auto", borderRadius: "28px", background: "#12141F", color: "#FFFFFF", padding: "88px 40px", textAlign: "center", overflow: "hidden" }} data-s="s13">
            <div aria-hidden="true" className="vg-aur-layer" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none", borderRadius: "inherit" }}>
              <div className="vg-aur1" style={{ position: "absolute", left: "-15%", top: "-45%", width: "130%", height: "95%", filter: "blur(60px)", opacity: ".9", background: "radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,0.55), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,0.45), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,0.50), transparent 70%)" }}>
              </div>
              <div className="vg-aur2" style={{ position: "absolute", left: "-10%", top: "-30%", width: "120%", height: "80%", filter: "blur(70px)", opacity: ".8", background: "radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,0.40), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,0.35), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,0.22), transparent 70%)" }}>
              </div>
              <div className="vg-curtain" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "65%", opacity: ".35", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", opacity: ".55", backgroundImage: "radial-gradient(1px 1px at 12% 18%, #FFFFFF, transparent), radial-gradient(1px 1px at 28% 8%, #FFFFFF, transparent), radial-gradient(1px 1px at 44% 26%, #FFFFFF, transparent), radial-gradient(1px 1px at 63% 12%, #FFFFFF, transparent), radial-gradient(1px 1px at 81% 22%, #FFFFFF, transparent), radial-gradient(1px 1px at 92% 6%, #FFFFFF, transparent), radial-gradient(1px 1px at 6% 40%, #FFFFFF, transparent), radial-gradient(1px 1px at 55% 4%, #FFFFFF, transparent)" }}>
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(18,20,31,0) 35%, rgba(18,20,31,.85) 100%)" }}>
              </div>
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.045em" }} data-s="s4">
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"Let’s answer every"}
                </span>
              </span>
              <span className="vg-line" style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <span className="vg-line-in" style={{ display: "block" }}>
                  {"customer together."}
                </span>
              </span>
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "18px", color: "#C3C6DA" }} data-s="s16">
              {"Start free for 30 days, or talk to us first."}
            </p>
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Start free"}
              </Link>
              <Link href="/book-demo/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Book a demo"}
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
