// Ported from design board NotFound by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "40", padding: "0 16px", marginBottom: "-78px" }}>
          <div className="vg-hdr-in vg-hdr-dark" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", border: "1px solid transparent", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }} data-s="s11">
            <span style={{ flex: "1 1 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "#FFFFFF" }}>
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
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
              <Link href="/company/" style={{ textDecoration: "none" }}>
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
              <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                {"vegham"}
              </Link>
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
        <section style={{ position: "relative", overflow: "hidden", backgroundColor: "#03050E", minHeight: "900px", display: "flex", alignItems: "center" }} data-s="s28">
          <div aria-hidden="true" style={{ position: "absolute", inset: "0" }}>
            <svg aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
              <defs>
                <linearGradient id="vga-sky-nf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#03050E">
                  </stop>
                  <stop offset=".45" stopColor="#081028">
                  </stop>
                  <stop offset=".72" stopColor="#0E2140">
                  </stop>
                  <stop offset="1" stopColor="#0B1830">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-g1-nf" x1="0" y1="1" x2="0" y2="0">
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
                <linearGradient id="vga-g2-nf" x1="0" y1="1" x2="0" y2="0">
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
                <linearGradient id="vga-g3-nf" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#A7F3D0" stopOpacity="0">
                  </stop>
                  <stop offset=".1" stopColor="#6EE7B7" stopOpacity=".7">
                  </stop>
                  <stop offset=".5" stopColor="#10B981" stopOpacity=".3">
                  </stop>
                  <stop offset="1" stopColor="#10B981" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-mf-nf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1B2C52">
                  </stop>
                  <stop offset="1" stopColor="#0D1730">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-refl-nf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2DE3A0" stopOpacity=".22">
                  </stop>
                  <stop offset=".35" stopColor="#14B8A6" stopOpacity=".08">
                  </stop>
                  <stop offset="1" stopColor="#14B8A6" stopOpacity="0">
                  </stop>
                </linearGradient>
                <linearGradient id="vga-lake-nf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0B1A33">
                  </stop>
                  <stop offset="1" stopColor="#040812">
                  </stop>
                </linearGradient>
                <filter id="vga-blur-nf" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7">
                  </feGaussianBlur>
                </filter>
                <filter id="vga-blur2-nf" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="14">
                  </feGaussianBlur>
                </filter>
                <pattern id="vga-rp-nf" width="120" height="10" patternUnits="userSpaceOnUse">
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
                <mask id="vga-mask-nf" maskUnits="userSpaceOnUse" x="-300" y="0" width="2200" height="1000">
                  <g className="vga-rays">
                    <rect x="-300" y="0" width="2300" height="1000" fill="url(#vga-rp-nf)">
                    </rect>
                  </g>
                </mask>
              </defs>
              <rect width="1600" height="1000" fill="url(#vga-sky-nf)">
              </rect>
              <g>
                <circle cx="518.0" cy="368.9" r="0.5" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
                </circle>
                <circle cx="318.8" cy="51.6" r="1.0" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="38.7" cy="411.6" r="0.7" fill="#FFFFFF" opacity="0.91">
                </circle>
                <circle cx="208.1" cy="384.7" r="0.5" fill="#FFFFFF" opacity="0.56" className="vga-tw" style={{ animationDelay: "-1.9s" }}>
                </circle>
                <circle cx="303.7" cy="88.5" r="0.8" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                </circle>
                <circle cx="33.5" cy="359.4" r="0.6" fill="#FFFFFF" opacity="0.50">
                </circle>
                <circle cx="818.9" cy="177.3" r="0.5" fill="#FFFFFF" opacity="0.50">
                </circle>
                <circle cx="46.8" cy="58.1" r="0.5" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="790.2" cy="336.6" r="0.7" fill="#FFFFFF" opacity="0.53" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                </circle>
                <circle cx="345.6" cy="342.5" r="0.8" fill="#FFFFFF" opacity="0.68">
                </circle>
                <circle cx="1076.2" cy="446.0" r="1.0" fill="#FFFFFF" opacity="0.50">
                </circle>
                <circle cx="39.4" cy="503.1" r="0.6" fill="#FFFFFF" opacity="0.63">
                </circle>
                <circle cx="806.7" cy="300.5" r="0.7" fill="#FFFFFF" opacity="0.92">
                </circle>
                <circle cx="227.5" cy="31.9" r="1.0" fill="#FFFFFF" opacity="0.63" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
                </circle>
                <circle cx="338.8" cy="372.2" r="0.7" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="414.0" cy="223.7" r="1.3" fill="#FFFFFF" opacity="0.54">
                </circle>
                <circle cx="1387.7" cy="293.0" r="0.8" fill="#FFFFFF" opacity="0.48">
                </circle>
                <circle cx="908.2" cy="590.9" r="0.7" fill="#FFFFFF" opacity="0.76" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                </circle>
                <circle cx="516.9" cy="203.2" r="1.3" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="918.8" cy="494.4" r="1.0" fill="#FFFFFF" opacity="0.64">
                </circle>
                <circle cx="164.0" cy="318.2" r="1.3" fill="#FFFFFF" opacity="0.52">
                </circle>
                <circle cx="880.0" cy="456.3" r="1.3" fill="#FFFFFF" opacity="0.86" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
                </circle>
                <circle cx="513.6" cy="400.3" r="0.7" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="904.6" cy="360.7" r="0.5" fill="#FFFFFF" opacity="0.80">
                </circle>
                <circle cx="259.6" cy="442.8" r="1.3" fill="#FFFFFF" opacity="0.70">
                </circle>
                <circle cx="631.9" cy="267.3" r="0.8" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="205.4" cy="337.9" r="1.0" fill="#FFFFFF" opacity="0.90">
                </circle>
                <circle cx="233.6" cy="528.2" r="0.6" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="578.6" cy="6.5" r="1.3" fill="#FFFFFF" opacity="0.43">
                </circle>
                <circle cx="247.1" cy="446.9" r="0.5" fill="#FFFFFF" opacity="0.93">
                </circle>
                <circle cx="7.7" cy="33.4" r="0.8" fill="#FFFFFF" opacity="0.42">
                </circle>
                <circle cx="1044.9" cy="438.6" r="0.7" fill="#FFFFFF" opacity="0.69">
                </circle>
                <circle cx="1442.3" cy="11.0" r="0.7" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="1420.5" cy="460.3" r="1.3" fill="#FFFFFF" opacity="0.87">
                </circle>
                <circle cx="466.4" cy="38.1" r="0.7" fill="#FFFFFF" opacity="0.58">
                </circle>
                <circle cx="1032.4" cy="403.9" r="1.0" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="912.1" cy="484.6" r="0.6" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="490.6" cy="198.1" r="1.0" fill="#FFFFFF" opacity="0.64" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                </circle>
                <circle cx="837.2" cy="489.8" r="1.3" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="177.7" cy="173.5" r="0.8" fill="#FFFFFF" opacity="0.83">
                </circle>
                <circle cx="915.3" cy="324.2" r="0.7" fill="#FFFFFF" opacity="0.64">
                </circle>
                <circle cx="1513.2" cy="440.2" r="0.8" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="1035.1" cy="39.4" r="0.7" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                </circle>
                <circle cx="307.0" cy="54.4" r="0.5" fill="#FFFFFF" opacity="0.60">
                </circle>
                <circle cx="146.2" cy="542.3" r="1.3" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="291.8" cy="358.7" r="1.0" fill="#FFFFFF" opacity="0.39">
                </circle>
                <circle cx="560.2" cy="458.6" r="0.8" fill="#FFFFFF" opacity="0.38">
                </circle>
                <circle cx="1266.5" cy="36.1" r="0.8" fill="#FFFFFF" opacity="0.58">
                </circle>
                <circle cx="440.1" cy="541.6" r="0.8" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="479.8" cy="118.7" r="1.3" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="392.2" cy="98.4" r="1.3" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="282.9" cy="326.5" r="0.8" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="1403.0" cy="302.9" r="0.8" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-0.5s" }}>
                </circle>
                <circle cx="1296.5" cy="512.3" r="1.3" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="476.6" cy="478.4" r="0.7" fill="#FFFFFF" opacity="0.93">
                </circle>
                <circle cx="56.6" cy="151.7" r="0.7" fill="#FFFFFF" opacity="0.77">
                </circle>
                <circle cx="926.0" cy="47.8" r="1.0" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="1510.9" cy="502.9" r="0.5" fill="#FFFFFF" opacity="0.88">
                </circle>
                <circle cx="860.6" cy="33.2" r="1.0" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="951.3" cy="1.1" r="0.6" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="371.9" cy="266.2" r="0.7" fill="#FFFFFF" opacity="0.79" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                </circle>
                <circle cx="115.6" cy="54.3" r="0.5" fill="#FFFFFF" opacity="0.40" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                </circle>
                <circle cx="608.4" cy="514.3" r="0.6" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="388.8" cy="13.9" r="1.0" fill="#FFFFFF" opacity="0.93">
                </circle>
                <circle cx="680.5" cy="329.3" r="0.5" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="1571.7" cy="50.9" r="0.7" fill="#FFFFFF" opacity="0.94">
                </circle>
                <circle cx="1005.6" cy="313.6" r="0.5" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="980.4" cy="310.9" r="0.6" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="809.8" cy="267.6" r="0.7" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="145.5" cy="303.6" r="0.5" fill="#FFFFFF" opacity="0.48">
                </circle>
                <circle cx="976.3" cy="89.8" r="1.0" fill="#FFFFFF" opacity="0.37">
                </circle>
                <circle cx="1068.8" cy="590.9" r="1.3" fill="#FFFFFF" opacity="0.95">
                </circle>
                <circle cx="550.5" cy="524.9" r="0.8" fill="#FFFFFF" opacity="0.43">
                </circle>
                <circle cx="1159.3" cy="115.5" r="0.8" fill="#FFFFFF" opacity="0.61">
                </circle>
                <circle cx="1116.1" cy="245.0" r="1.0" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="512.6" cy="299.1" r="0.8" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="107.2" cy="241.2" r="0.7" fill="#FFFFFF" opacity="0.80">
                </circle>
                <circle cx="1571.6" cy="161.2" r="0.5" fill="#FFFFFF" opacity="0.85">
                </circle>
                <circle cx="1035.5" cy="18.9" r="0.6" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                </circle>
                <circle cx="828.6" cy="569.4" r="0.8" fill="#FFFFFF" opacity="0.91">
                </circle>
                <circle cx="941.9" cy="594.0" r="0.6" fill="#FFFFFF" opacity="0.67">
                </circle>
                <circle cx="1485.6" cy="40.5" r="1.3" fill="#FFFFFF" opacity="0.71">
                </circle>
                <circle cx="700.1" cy="74.7" r="0.6" fill="#FFFFFF" opacity="0.81" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
                </circle>
                <circle cx="1155.8" cy="431.3" r="0.8" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="1156.4" cy="165.8" r="0.6" fill="#FFFFFF" opacity="0.55">
                </circle>
                <circle cx="732.5" cy="526.3" r="0.6" fill="#FFFFFF" opacity="0.52">
                </circle>
                <circle cx="1322.1" cy="37.8" r="0.5" fill="#FFFFFF" opacity="0.67">
                </circle>
                <circle cx="483.2" cy="240.9" r="1.0" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                </circle>
                <circle cx="467.6" cy="288.9" r="1.3" fill="#FFFFFF" opacity="0.90" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                </circle>
                <circle cx="576.2" cy="472.8" r="1.0" fill="#FFFFFF" opacity="0.42">
                </circle>
                <circle cx="1493.9" cy="146.7" r="0.8" fill="#FFFFFF" opacity="0.74">
                </circle>
                <circle cx="1488.0" cy="198.5" r="1.0" fill="#FFFFFF" opacity="0.63" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                </circle>
                <circle cx="309.1" cy="143.9" r="0.6" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
                </circle>
                <circle cx="697.8" cy="72.8" r="1.3" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="1093.3" cy="348.8" r="0.7" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="655.0" cy="207.1" r="1.3" fill="#FFFFFF" opacity="0.44">
                </circle>
                <circle cx="1385.4" cy="228.0" r="0.6" fill="#FFFFFF" opacity="0.61">
                </circle>
                <circle cx="599.6" cy="330.3" r="1.3" fill="#FFFFFF" opacity="0.54">
                </circle>
                <circle cx="253.0" cy="523.0" r="0.8" fill="#FFFFFF" opacity="0.42">
                </circle>
                <circle cx="228.8" cy="3.0" r="1.0" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="1310.8" cy="122.2" r="1.0" fill="#FFFFFF" opacity="0.37">
                </circle>
                <circle cx="1209.1" cy="413.1" r="0.6" fill="#FFFFFF" opacity="0.94" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
                </circle>
                <circle cx="676.0" cy="160.0" r="1.0" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="629.0" cy="134.8" r="1.3" fill="#FFFFFF" opacity="0.68">
                </circle>
                <circle cx="847.8" cy="259.2" r="1.3" fill="#FFFFFF" opacity="0.93" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                </circle>
                <circle cx="591.4" cy="348.4" r="0.6" fill="#FFFFFF" opacity="0.64">
                </circle>
                <circle cx="1114.8" cy="354.3" r="0.8" fill="#FFFFFF" opacity="0.49">
                </circle>
                <circle cx="1187.1" cy="368.0" r="0.7" fill="#FFFFFF" opacity="0.65">
                </circle>
                <circle cx="522.1" cy="402.2" r="0.7" fill="#FFFFFF" opacity="0.74">
                </circle>
                <circle cx="976.8" cy="28.9" r="0.6" fill="#FFFFFF" opacity="0.69" className="vga-tw" style={{ animationDelay: "-2.0s" }}>
                </circle>
                <circle cx="1434.7" cy="469.0" r="0.6" fill="#FFFFFF" opacity="0.89" className="vga-tw" style={{ animationDelay: "-1.7s" }}>
                </circle>
                <circle cx="976.2" cy="275.1" r="0.8" fill="#FFFFFF" opacity="0.51">
                </circle>
                <circle cx="1471.6" cy="57.3" r="1.0" fill="#FFFFFF" opacity="0.49" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
                </circle>
                <circle cx="1466.3" cy="98.9" r="0.5" fill="#FFFFFF" opacity="0.43">
                </circle>
                <circle cx="915.7" cy="86.4" r="0.6" fill="#FFFFFF" opacity="0.35">
                </circle>
                <circle cx="566.0" cy="59.7" r="0.5" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="761.1" cy="453.1" r="0.8" fill="#FFFFFF" opacity="0.89">
                </circle>
                <circle cx="1383.0" cy="103.3" r="0.8" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="810.7" cy="324.0" r="1.0" fill="#FFFFFF" opacity="0.59">
                </circle>
                <circle cx="417.7" cy="47.7" r="0.8" fill="#FFFFFF" opacity="0.69">
                </circle>
                <circle cx="210.9" cy="204.8" r="0.5" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="62.2" cy="570.7" r="0.8" fill="#FFFFFF" opacity="0.57">
                </circle>
                <circle cx="26.7" cy="110.0" r="0.7" fill="#FFFFFF" opacity="0.66">
                </circle>
                <circle cx="839.3" cy="352.2" r="1.0" fill="#FFFFFF" opacity="0.71">
                </circle>
                <circle cx="1185.9" cy="480.8" r="1.3" fill="#FFFFFF" opacity="0.92">
                </circle>
                <circle cx="118.9" cy="328.7" r="0.7" fill="#FFFFFF" opacity="0.79">
                </circle>
                <circle cx="1274.4" cy="552.4" r="0.7" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="963.5" cy="315.8" r="1.0" fill="#FFFFFF" opacity="0.84">
                </circle>
                <circle cx="936.9" cy="203.8" r="0.5" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="1265.7" cy="495.3" r="1.0" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="1141.9" cy="391.7" r="1.3" fill="#FFFFFF" opacity="0.60" className="vga-tw" style={{ animationDelay: "-0.4s" }}>
                </circle>
                <circle cx="250.9" cy="156.3" r="0.6" fill="#FFFFFF" opacity="0.73">
                </circle>
                <circle cx="825.5" cy="171.8" r="0.6" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="802.6" cy="193.7" r="0.8" fill="#FFFFFF" opacity="0.80" className="vga-tw" style={{ animationDelay: "-2.8s" }}>
                </circle>
                <circle cx="125.7" cy="527.1" r="1.3" fill="#FFFFFF" opacity="0.65">
                </circle>
                <circle cx="149.9" cy="20.8" r="0.7" fill="#FFFFFF" opacity="0.50">
                </circle>
                <circle cx="385.5" cy="227.3" r="1.0" fill="#FFFFFF" opacity="0.74">
                </circle>
                <circle cx="27.9" cy="333.3" r="0.8" fill="#FFFFFF" opacity="0.71">
                </circle>
                <circle cx="118.4" cy="461.4" r="0.7" fill="#FFFFFF" opacity="0.68" className="vga-tw" style={{ animationDelay: "-0.3s" }}>
                </circle>
                <circle cx="1194.1" cy="207.0" r="1.3" fill="#FFFFFF" opacity="0.54">
                </circle>
                <circle cx="1122.2" cy="210.5" r="1.0" fill="#FFFFFF" opacity="0.68" className="vga-tw" style={{ animationDelay: "-1.7s" }}>
                </circle>
                <circle cx="689.7" cy="344.8" r="0.7" fill="#FFFFFF" opacity="0.53">
                </circle>
                <circle cx="738.5" cy="392.5" r="0.6" fill="#FFFFFF" opacity="0.75">
                </circle>
                <circle cx="1062.7" cy="187.6" r="1.3" fill="#FFFFFF" opacity="0.63">
                </circle>
                <circle cx="1240.9" cy="402.8" r="0.6" fill="#FFFFFF" opacity="0.39">
                </circle>
                <circle cx="699.6" cy="318.3" r="1.3" fill="#FFFFFF" opacity="0.74" className="vga-tw" style={{ animationDelay: "-0.4s" }}>
                </circle>
                <circle cx="1183.3" cy="461.8" r="1.0" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="1057.5" cy="411.8" r="0.5" fill="#FFFFFF" opacity="0.60">
                </circle>
                <circle cx="1094.2" cy="119.3" r="1.0" fill="#FFFFFF" opacity="0.82">
                </circle>
                <circle cx="675.9" cy="303.0" r="1.0" fill="#FFFFFF" opacity="0.87">
                </circle>
                <circle cx="217.6" cy="371.1" r="0.5" fill="#FFFFFF" opacity="0.68">
                </circle>
                <circle cx="1385.7" cy="74.8" r="0.5" fill="#FFFFFF" opacity="0.62">
                </circle>
                <circle cx="1599.1" cy="132.7" r="0.8" fill="#FFFFFF" opacity="0.66">
                </circle>
                <circle cx="313.5" cy="41.1" r="1.0" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="1495.1" cy="539.8" r="1.3" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="1103.9" cy="552.4" r="0.8" fill="#FFFFFF" opacity="0.86">
                </circle>
                <circle cx="227.6" cy="87.9" r="1.0" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="1532.9" cy="337.0" r="0.6" fill="#FFFFFF" opacity="0.65">
                </circle>
                <circle cx="503.2" cy="452.2" r="0.8" fill="#FFFFFF" opacity="0.67">
                </circle>
                <circle cx="330.7" cy="550.6" r="0.7" fill="#FFFFFF" opacity="0.61">
                </circle>
                <circle cx="1585.6" cy="549.6" r="0.6" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="318.9" cy="503.1" r="0.6" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="616.2" cy="130.4" r="0.7" fill="#FFFFFF" opacity="0.41">
                </circle>
                <circle cx="921.4" cy="378.0" r="0.7" fill="#FFFFFF" opacity="0.45">
                </circle>
                <circle cx="692.3" cy="241.8" r="0.8" fill="#FFFFFF" opacity="0.36">
                </circle>
                <circle cx="1478.7" cy="385.7" r="1.0" fill="#FFFFFF" opacity="0.64" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                </circle>
                <circle cx="1344.7" cy="388.7" r="1.3" fill="#FFFFFF" opacity="0.46">
                </circle>
                <circle cx="970.0" cy="343.2" r="0.6" fill="#FFFFFF" opacity="0.76">
                </circle>
                <circle cx="1073.8" cy="120.2" r="1.0" fill="#FFFFFF" opacity="0.77">
                </circle>
                <circle cx="202.0" cy="37.7" r="0.6" fill="#FFFFFF" opacity="0.55">
                </circle>
              </g>
              <g mask="url(#vga-mask-nf)" opacity=".9">
                <g className="vga-s2" filter="url(#vga-blur-nf)">
                  <path d="M -200 18 L -175 15 L -150 11 L -125 6 L -100 1 L -75 -5 L -50 -12 L -25 -19 L 0 -26 L 25 -32 L 50 -39 L 75 -44 L 100 -49 L 125 -53 L 150 -56 L 175 -58 L 200 -59 L 225 -58 L 250 -57 L 275 -54 L 300 -50 L 325 -44 L 350 -38 L 375 -31 L 400 -23 L 425 -15 L 450 -6 L 475 3 L 500 12 L 525 20 L 550 28 L 575 36 L 600 43 L 625 48 L 650 53 L 675 57 L 700 59 L 725 60 L 750 60 L 775 59 L 800 57 L 825 53 L 850 49 L 875 43 L 900 37 L 925 31 L 950 24 L 975 17 L 1000 10 L 1025 4 L 1050 -2 L 1075 -7 L 1100 -12 L 1125 -15 L 1150 -18 L 1175 -19 L 1200 -19 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -8 L 1325 -2 L 1350 5 L 1375 12 L 1400 20 L 1425 29 L 1450 38 L 1475 47 L 1500 55 L 1525 64 L 1550 72 L 1575 79 L 1600 85 L 1625 90 L 1650 95 L 1675 98 L 1700 99 L 1725 100 L 1750 99 L 1775 98 L 1800 95 L 1800 278 L 1775 282 L 1750 288 L 1725 296 L 1700 306 L 1675 317 L 1650 329 L 1625 340 L 1600 352 L 1575 362 L 1550 372 L 1525 379 L 1500 385 L 1475 389 L 1450 390 L 1425 389 L 1400 386 L 1375 380 L 1350 373 L 1325 364 L 1300 354 L 1275 343 L 1250 332 L 1225 321 L 1200 311 L 1175 302 L 1150 294 L 1125 289 L 1100 285 L 1075 283 L 1050 283 L 1025 286 L 1000 291 L 975 297 L 950 305 L 925 314 L 900 323 L 875 332 L 850 342 L 825 350 L 800 357 L 775 363 L 750 366 L 725 368 L 700 367 L 675 363 L 650 357 L 625 349 L 600 340 L 575 328 L 550 315 L 525 301 L 500 287 L 475 274 L 450 261 L 425 248 L 400 238 L 375 229 L 350 223 L 325 219 L 300 217 L 275 218 L 250 221 L 225 226 L 200 234 L 175 242 L 150 252 L 125 262 L 100 273 L 75 283 L 50 292 L 25 300 L 0 307 L -25 311 L -50 314 L -75 314 L -100 312 L -125 308 L -150 302 L -175 294 L -200 285 Z" fill="url(#vga-g2-nf)">
                  </path>
                </g>
                <g className="vga-s1" filter="url(#vga-blur-nf)">
                  <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-nf)">
                  </path>
                </g>
                <g className="vga-s3" filter="url(#vga-blur-nf)">
                  <path d="M -200 270 L -175 261 L -150 252 L -125 245 L -100 239 L -75 235 L -50 233 L -25 233 L 0 236 L 25 241 L 50 247 L 75 255 L 100 263 L 125 272 L 150 280 L 175 287 L 200 293 L 225 297 L 250 299 L 275 298 L 300 296 L 325 291 L 350 284 L 375 276 L 400 267 L 425 258 L 450 248 L 475 239 L 500 232 L 525 226 L 550 222 L 575 221 L 600 221 L 625 224 L 650 229 L 675 235 L 700 243 L 725 251 L 750 260 L 775 268 L 800 275 L 825 281 L 850 284 L 875 286 L 900 286 L 925 283 L 950 278 L 975 271 L 1000 263 L 1025 254 L 1050 245 L 1075 235 L 1100 227 L 1125 219 L 1150 213 L 1175 210 L 1200 208 L 1225 209 L 1250 212 L 1275 216 L 1300 223 L 1325 231 L 1350 239 L 1375 247 L 1400 256 L 1425 263 L 1450 268 L 1475 272 L 1500 274 L 1525 273 L 1550 270 L 1575 265 L 1600 259 L 1625 250 L 1650 241 L 1675 232 L 1700 222 L 1725 214 L 1750 206 L 1775 201 L 1800 197 L 1800 487 L 1775 494 L 1750 498 L 1725 498 L 1700 495 L 1675 487 L 1650 477 L 1625 465 L 1600 453 L 1575 442 L 1550 433 L 1525 428 L 1500 427 L 1475 430 L 1450 437 L 1425 449 L 1400 462 L 1375 478 L 1350 493 L 1325 507 L 1300 518 L 1275 526 L 1250 530 L 1225 529 L 1200 524 L 1175 515 L 1150 504 L 1125 492 L 1100 481 L 1075 470 L 1050 463 L 1025 459 L 1000 459 L 975 463 L 950 470 L 925 480 L 900 492 L 875 503 L 850 514 L 825 522 L 800 527 L 775 528 L 750 524 L 725 517 L 700 506 L 675 493 L 650 480 L 625 466 L 600 455 L 575 446 L 550 442 L 525 442 L 500 446 L 475 455 L 450 467 L 425 480 L 400 495 L 375 509 L 350 522 L 325 531 L 300 536 L 275 537 L 250 535 L 225 528 L 200 519 L 175 509 L 150 498 L 125 489 L 100 482 L 75 478 L 50 478 L 25 482 L 0 490 L -25 500 L -50 513 L -75 526 L -100 538 L -125 548 L -150 555 L -175 558 L -200 557 Z" fill="url(#vga-g3-nf)">
                  </path>
                </g>
              </g>
              <g filter="url(#vga-blur2-nf)" opacity=".45">
                <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-nf)">
                </path>
              </g>
              <path d="M -40 1000 L -40 628 L 16 655 L 49 609 L 91 587 L 116 614 L 167 559 L 195 550 L 234 550 L 279 597 L 333 550 L 382 565 L 417 550 L 466 550 L 518 616 L 551 655 L 607 611 L 632 551 L 676 550 L 720 550 L 767 550 L 826 550 L 861 550 L 907 555 L 963 550 L 997 550 L 1042 598 L 1079 555 L 1117 550 L 1171 557 L 1199 550 L 1231 590 L 1268 572 L 1325 611 L 1353 611 L 1392 629 L 1447 612 L 1486 581 L 1519 611 L 1553 550 L 1579 617 L 1630 553 L 1660 1000 Z" fill="url(#vga-mf-nf)">
              </path>
              <path d="M -40 1000 L -40 683 L 16 706 L 88 706 L 132 693 L 189 659 L 235 684 L 267 703 L 314 695 L 351 706 L 411 704 L 489 706 L 567 706 L 605 673 L 659 688 L 694 673 L 727 673 L 791 674 L 853 678 L 929 700 L 995 706 L 1049 706 L 1117 706 L 1178 677 L 1256 667 L 1330 637 L 1387 634 L 1448 643 L 1495 628 L 1525 628 L 1589 631 L 1648 660 L 1660 1000 Z" fill="#0A1328">
              </path>
              <rect x="0" y="714" width="1600" height="300" fill="url(#vga-lake-nf)">
              </rect>
              <rect x="0" y="714" width="1600" height="180" fill="url(#vga-refl-nf)">
              </rect>
              <g className="vga-rip">
                <rect x="671" y="720" width="201" height="1" fill="#9EF5D2" opacity="0.06">
                </rect>
                <rect x="47" y="733" width="269" height="1" fill="#9EF5D2" opacity="0.16">
                </rect>
                <rect x="-15" y="745" width="313" height="1" fill="#9EF5D2" opacity="0.05">
                </rect>
                <rect x="1134" y="758" width="249" height="1" fill="#9EF5D2" opacity="0.08">
                </rect>
                <rect x="1176" y="771" width="120" height="1" fill="#9EF5D2" opacity="0.15">
                </rect>
                <rect x="576" y="784" width="243" height="1" fill="#9EF5D2" opacity="0.07">
                </rect>
                <rect x="119" y="796" width="313" height="1" fill="#9EF5D2" opacity="0.11">
                </rect>
                <rect x="405" y="809" width="106" height="1" fill="#9EF5D2" opacity="0.06">
                </rect>
                <rect x="604" y="822" width="100" height="1" fill="#9EF5D2" opacity="0.06">
                </rect>
                <rect x="756" y="835" width="261" height="1" fill="#9EF5D2" opacity="0.10">
                </rect>
                <rect x="1482" y="847" width="199" height="1" fill="#9EF5D2" opacity="0.12">
                </rect>
                <rect x="1008" y="860" width="216" height="1" fill="#9EF5D2" opacity="0.16">
                </rect>
                <rect x="320" y="873" width="156" height="1" fill="#9EF5D2" opacity="0.11">
                </rect>
                <rect x="1300" y="885" width="326" height="1" fill="#9EF5D2" opacity="0.09">
                </rect>
                <rect x="1200" y="898" width="175" height="1" fill="#9EF5D2" opacity="0.08">
                </rect>
                <rect x="1385" y="911" width="294" height="1" fill="#9EF5D2" opacity="0.11">
                </rect>
                <rect x="160" y="924" width="190" height="1" fill="#9EF5D2" opacity="0.07">
                </rect>
                <rect x="665" y="936" width="309" height="1" fill="#9EF5D2" opacity="0.06">
                </rect>
                <rect x="1436" y="949" width="171" height="1" fill="#9EF5D2" opacity="0.16">
                </rect>
                <rect x="389" y="962" width="189" height="1" fill="#9EF5D2" opacity="0.07">
                </rect>
                <rect x="1423" y="975" width="161" height="1" fill="#9EF5D2" opacity="0.17">
                </rect>
                <rect x="1561" y="987" width="316" height="1" fill="#9EF5D2" opacity="0.07">
                </rect>
              </g>
            </svg>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(3,5,14,.35) 0%, rgba(3,5,14,.1) 50%, rgba(3,5,14,.7) 100%)" }}>
            </div>
          </div>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "120px 32px", textAlign: "center" }} data-s="s11">
            <span className="vg-hero" style={{ animationDelay: ".05s", display: "block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "48px", lineHeight: ".9", letterSpacing: "-0.06em", color: "#ffffff" }} data-s="s3">
              {"404"}
            </span>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "18px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "48px", lineHeight: "1.1", color: "#FFFFFF" }} data-s="s3">
              {"Lost under the northern lights."}
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "16px auto 0", maxWidth: "520px", fontSize: "18px", color: "#C9CCDD" }} data-s="s16">
              {"This page doesn’t exist, or it moved. Your agent, though, is still answering."}
            </p>
            <div className="vg-hero" style={{ animationDelay: ".42s", marginTop: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Back to home"}
              </Link>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Visit the help centre"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
