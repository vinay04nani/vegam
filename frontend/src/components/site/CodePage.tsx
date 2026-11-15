// Ported from design board Otp by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function CodePage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: "960px", background: "#FFFFFF" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0", padding: "16px", boxSizing: "border-box" }}>
            <div style={{ position: "relative", height: "100%", minHeight: "680px", borderRadius: "28px", overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "40px 32px", boxSizing: "border-box" }} data-s="s23">
              <svg aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
                <defs>
                  <linearGradient id="vga-sky-login" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#03050E">
                    </stop>
                    <stop offset=".45" stopColor="#081028">
                    </stop>
                    <stop offset=".72" stopColor="#0E2140">
                    </stop>
                    <stop offset="1" stopColor="#0B1830">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-g1-login" x1="0" y1="1" x2="0" y2="0">
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
                  <linearGradient id="vga-g2-login" x1="0" y1="1" x2="0" y2="0">
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
                  <linearGradient id="vga-g3-login" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#A7F3D0" stopOpacity="0">
                    </stop>
                    <stop offset=".1" stopColor="#6EE7B7" stopOpacity=".7">
                    </stop>
                    <stop offset=".5" stopColor="#10B981" stopOpacity=".3">
                    </stop>
                    <stop offset="1" stopColor="#10B981" stopOpacity="0">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-mf-login" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1B2C52">
                    </stop>
                    <stop offset="1" stopColor="#0D1730">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-refl-login" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2DE3A0" stopOpacity=".22">
                    </stop>
                    <stop offset=".35" stopColor="#14B8A6" stopOpacity=".08">
                    </stop>
                    <stop offset="1" stopColor="#14B8A6" stopOpacity="0">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-lake-login" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0B1A33">
                    </stop>
                    <stop offset="1" stopColor="#040812">
                    </stop>
                  </linearGradient>
                  <filter id="vga-blur-login" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="7">
                    </feGaussianBlur>
                  </filter>
                  <filter id="vga-blur2-login" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="14">
                    </feGaussianBlur>
                  </filter>
                  <pattern id="vga-rp-login" width="120" height="10" patternUnits="userSpaceOnUse">
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
                  <mask id="vga-mask-login" maskUnits="userSpaceOnUse" x="-300" y="0" width="2200" height="1000">
                    <g className="vga-rays">
                      <rect x="-300" y="0" width="2300" height="1000" fill="url(#vga-rp-login)">
                      </rect>
                    </g>
                  </mask>
                </defs>
                <rect width="1600" height="1000" fill="url(#vga-sky-login)">
                </rect>
                <g>
                  <circle cx="518.1" cy="89.8" r="1.3" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="150.6" cy="346.8" r="1.0" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                  </circle>
                  <circle cx="385.1" cy="327.9" r="0.5" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                  </circle>
                  <circle cx="1003.9" cy="563.9" r="1.0" fill="#FFFFFF" opacity="0.70" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                  </circle>
                  <circle cx="890.7" cy="79.2" r="0.8" fill="#FFFFFF" opacity="0.44" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                  </circle>
                  <circle cx="1305.8" cy="107.5" r="1.0" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="155.9" cy="423.7" r="1.0" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="1088.6" cy="254.4" r="0.7" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="578.5" cy="147.8" r="0.6" fill="#FFFFFF" opacity="0.77">
                  </circle>
                  <circle cx="919.1" cy="312.5" r="0.7" fill="#FFFFFF" opacity="0.79">
                  </circle>
                  <circle cx="1568.3" cy="70.2" r="0.8" fill="#FFFFFF" opacity="0.45">
                  </circle>
                  <circle cx="1493.2" cy="250.9" r="1.3" fill="#FFFFFF" opacity="0.40">
                  </circle>
                  <circle cx="1262.6" cy="486.9" r="0.7" fill="#FFFFFF" opacity="0.77">
                  </circle>
                  <circle cx="927.8" cy="271.4" r="0.5" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="1062.6" cy="36.1" r="1.3" fill="#FFFFFF" opacity="0.54">
                  </circle>
                  <circle cx="1090.0" cy="265.2" r="1.3" fill="#FFFFFF" opacity="0.58">
                  </circle>
                  <circle cx="36.1" cy="274.7" r="0.6" fill="#FFFFFF" opacity="0.72">
                  </circle>
                  <circle cx="349.1" cy="171.0" r="1.3" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="1394.3" cy="47.9" r="0.8" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="219.1" cy="256.2" r="1.0" fill="#FFFFFF" opacity="0.52">
                  </circle>
                  <circle cx="574.0" cy="526.1" r="0.6" fill="#FFFFFF" opacity="0.44" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
                  </circle>
                  <circle cx="373.3" cy="288.6" r="1.0" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="233.1" cy="318.1" r="1.0" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="1104.8" cy="306.7" r="1.0" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="730.6" cy="518.2" r="1.3" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="638.4" cy="61.6" r="1.3" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="1575.5" cy="262.2" r="0.5" fill="#FFFFFF" opacity="0.55" className="vga-tw" style={{ animationDelay: "-0.0s" }}>
                  </circle>
                  <circle cx="242.0" cy="60.4" r="0.7" fill="#FFFFFF" opacity="0.72" className="vga-tw" style={{ animationDelay: "-0.6s" }}>
                  </circle>
                  <circle cx="602.0" cy="377.5" r="0.7" fill="#FFFFFF" opacity="0.71">
                  </circle>
                  <circle cx="184.6" cy="290.4" r="0.8" fill="#FFFFFF" opacity="0.64">
                  </circle>
                  <circle cx="230.6" cy="446.1" r="1.3" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="258.3" cy="13.7" r="1.0" fill="#FFFFFF" opacity="0.57">
                  </circle>
                  <circle cx="1462.6" cy="451.1" r="0.7" fill="#FFFFFF" opacity="0.94">
                  </circle>
                  <circle cx="1113.9" cy="155.4" r="0.7" fill="#FFFFFF" opacity="0.89">
                  </circle>
                  <circle cx="356.5" cy="322.2" r="1.0" fill="#FFFFFF" opacity="0.55">
                  </circle>
                  <circle cx="1298.4" cy="586.0" r="0.6" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="1183.8" cy="134.9" r="1.0" fill="#FFFFFF" opacity="0.65">
                  </circle>
                  <circle cx="1583.4" cy="470.1" r="0.8" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="1530.4" cy="266.1" r="1.3" fill="#FFFFFF" opacity="0.94">
                  </circle>
                  <circle cx="583.4" cy="131.2" r="0.6" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="772.2" cy="586.2" r="1.0" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="1044.8" cy="475.8" r="0.5" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-1.2s" }}>
                  </circle>
                  <circle cx="1138.4" cy="118.6" r="0.6" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="138.8" cy="563.0" r="1.3" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="1514.9" cy="431.3" r="0.6" fill="#FFFFFF" opacity="0.95" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
                  </circle>
                  <circle cx="744.6" cy="390.2" r="1.0" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="1051.6" cy="208.5" r="1.0" fill="#FFFFFF" opacity="0.68" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
                  </circle>
                  <circle cx="1162.2" cy="61.1" r="1.3" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="1394.8" cy="491.6" r="0.6" fill="#FFFFFF" opacity="0.37">
                  </circle>
                  <circle cx="801.9" cy="454.4" r="0.7" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="209.7" cy="541.5" r="0.7" fill="#FFFFFF" opacity="0.89">
                  </circle>
                  <circle cx="1304.1" cy="307.5" r="1.0" fill="#FFFFFF" opacity="0.43" className="vga-tw" style={{ animationDelay: "-1.5s" }}>
                  </circle>
                  <circle cx="1396.5" cy="462.0" r="1.0" fill="#FFFFFF" opacity="0.35">
                  </circle>
                  <circle cx="275.8" cy="281.7" r="1.3" fill="#FFFFFF" opacity="0.42" className="vga-tw" style={{ animationDelay: "-2.0s" }}>
                  </circle>
                  <circle cx="849.2" cy="287.1" r="0.5" fill="#FFFFFF" opacity="0.88" className="vga-tw" style={{ animationDelay: "-0.6s" }}>
                  </circle>
                  <circle cx="67.5" cy="58.2" r="0.8" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="1460.0" cy="263.7" r="1.0" fill="#FFFFFF" opacity="0.93">
                  </circle>
                  <circle cx="319.0" cy="164.9" r="1.0" fill="#FFFFFF" opacity="0.67">
                  </circle>
                  <circle cx="1506.4" cy="416.0" r="0.7" fill="#FFFFFF" opacity="0.90">
                  </circle>
                  <circle cx="324.1" cy="266.3" r="0.8" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="116.1" cy="143.2" r="0.5" fill="#FFFFFF" opacity="0.48">
                  </circle>
                  <circle cx="195.8" cy="462.3" r="1.3" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="405.0" cy="81.7" r="0.8" fill="#FFFFFF" opacity="0.48">
                  </circle>
                  <circle cx="637.2" cy="289.9" r="1.3" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                  </circle>
                  <circle cx="825.0" cy="201.8" r="0.6" fill="#FFFFFF" opacity="0.56" className="vga-tw" style={{ animationDelay: "-1.1s" }}>
                  </circle>
                  <circle cx="540.8" cy="272.9" r="1.3" fill="#FFFFFF" opacity="0.36">
                  </circle>
                  <circle cx="998.3" cy="304.8" r="0.5" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="365.7" cy="521.5" r="0.5" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
                  </circle>
                  <circle cx="432.7" cy="77.1" r="0.8" fill="#FFFFFF" opacity="0.86">
                  </circle>
                  <circle cx="1513.6" cy="241.5" r="1.0" fill="#FFFFFF" opacity="0.90">
                  </circle>
                  <circle cx="1120.7" cy="53.2" r="0.5" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="1432.5" cy="160.0" r="0.5" fill="#FFFFFF" opacity="0.73">
                  </circle>
                  <circle cx="134.0" cy="509.5" r="0.5" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-0.0s" }}>
                  </circle>
                  <circle cx="1590.9" cy="248.6" r="0.7" fill="#FFFFFF" opacity="0.72" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
                  </circle>
                  <circle cx="1501.0" cy="576.7" r="0.7" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="499.2" cy="181.5" r="0.6" fill="#FFFFFF" opacity="0.52">
                  </circle>
                  <circle cx="284.6" cy="206.5" r="0.5" fill="#FFFFFF" opacity="0.95" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                  </circle>
                  <circle cx="809.0" cy="581.9" r="1.0" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="170.1" cy="487.3" r="0.8" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="1422.0" cy="577.3" r="0.7" fill="#FFFFFF" opacity="0.76">
                  </circle>
                  <circle cx="548.3" cy="495.2" r="1.3" fill="#FFFFFF" opacity="0.79" className="vga-tw" style={{ animationDelay: "-3.0s" }}>
                  </circle>
                  <circle cx="1571.0" cy="498.0" r="0.5" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="409.0" cy="97.1" r="0.5" fill="#FFFFFF" opacity="0.75">
                  </circle>
                  <circle cx="809.5" cy="577.7" r="1.0" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="735.1" cy="93.7" r="0.8" fill="#FFFFFF" opacity="0.35">
                  </circle>
                  <circle cx="526.3" cy="586.0" r="0.7" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="495.3" cy="212.2" r="0.5" fill="#FFFFFF" opacity="0.55" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
                  </circle>
                  <circle cx="1049.6" cy="147.7" r="0.5" fill="#FFFFFF" opacity="0.40">
                  </circle>
                  <circle cx="230.2" cy="349.1" r="0.8" fill="#FFFFFF" opacity="0.36">
                  </circle>
                  <circle cx="372.5" cy="348.4" r="1.0" fill="#FFFFFF" opacity="0.86" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                  </circle>
                  <circle cx="1254.5" cy="355.0" r="0.7" fill="#FFFFFF" opacity="0.78">
                  </circle>
                  <circle cx="454.7" cy="368.1" r="0.6" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="1427.1" cy="373.3" r="1.3" fill="#FFFFFF" opacity="0.77">
                  </circle>
                  <circle cx="1455.8" cy="448.0" r="1.0" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="1322.3" cy="347.5" r="1.3" fill="#FFFFFF" opacity="0.76">
                  </circle>
                  <circle cx="367.9" cy="18.5" r="0.6" fill="#FFFFFF" opacity="0.73">
                  </circle>
                  <circle cx="602.6" cy="268.6" r="0.5" fill="#FFFFFF" opacity="0.73">
                  </circle>
                  <circle cx="1089.1" cy="291.1" r="0.5" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-2.8s" }}>
                  </circle>
                  <circle cx="1436.6" cy="54.7" r="1.0" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="403.5" cy="44.3" r="0.7" fill="#FFFFFF" opacity="0.49">
                  </circle>
                  <circle cx="369.2" cy="386.7" r="0.8" fill="#FFFFFF" opacity="0.65">
                  </circle>
                  <circle cx="766.4" cy="406.8" r="0.5" fill="#FFFFFF" opacity="0.72">
                  </circle>
                  <circle cx="124.0" cy="87.7" r="0.7" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="993.8" cy="79.4" r="0.8" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="1075.2" cy="411.9" r="1.3" fill="#FFFFFF" opacity="0.64">
                  </circle>
                  <circle cx="456.9" cy="277.2" r="0.5" fill="#FFFFFF" opacity="0.95">
                  </circle>
                  <circle cx="498.7" cy="51.1" r="0.8" fill="#FFFFFF" opacity="0.36">
                  </circle>
                  <circle cx="1311.8" cy="576.0" r="0.8" fill="#FFFFFF" opacity="0.95">
                  </circle>
                  <circle cx="1466.5" cy="553.7" r="0.5" fill="#FFFFFF" opacity="0.70" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="1524.4" cy="78.9" r="1.3" fill="#FFFFFF" opacity="0.66">
                  </circle>
                  <circle cx="1125.3" cy="137.7" r="0.8" fill="#FFFFFF" opacity="0.59" className="vga-tw" style={{ animationDelay: "-2.8s" }}>
                  </circle>
                  <circle cx="1090.5" cy="241.2" r="1.3" fill="#FFFFFF" opacity="0.43">
                  </circle>
                  <circle cx="505.7" cy="499.9" r="0.5" fill="#FFFFFF" opacity="0.54">
                  </circle>
                  <circle cx="637.2" cy="559.2" r="0.6" fill="#FFFFFF" opacity="0.78">
                  </circle>
                  <circle cx="463.7" cy="221.5" r="0.8" fill="#FFFFFF" opacity="0.58">
                  </circle>
                  <circle cx="122.2" cy="550.6" r="0.7" fill="#FFFFFF" opacity="0.86">
                  </circle>
                  <circle cx="82.6" cy="393.9" r="1.3" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="425.2" cy="304.0" r="0.6" fill="#FFFFFF" opacity="0.81">
                  </circle>
                  <circle cx="684.4" cy="17.3" r="1.3" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="886.6" cy="121.0" r="0.5" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="721.4" cy="447.8" r="1.3" fill="#FFFFFF" opacity="0.87">
                  </circle>
                  <circle cx="1459.0" cy="327.3" r="0.6" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="476.4" cy="439.7" r="1.3" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="481.3" cy="331.6" r="0.8" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="120.3" cy="297.9" r="0.8" fill="#FFFFFF" opacity="0.68">
                  </circle>
                  <circle cx="532.5" cy="451.8" r="0.8" fill="#FFFFFF" opacity="0.43">
                  </circle>
                  <circle cx="145.1" cy="203.5" r="0.5" fill="#FFFFFF" opacity="0.54">
                  </circle>
                  <circle cx="1295.0" cy="120.3" r="0.5" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="662.2" cy="311.9" r="0.8" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="797.0" cy="341.7" r="0.7" fill="#FFFFFF" opacity="0.43">
                  </circle>
                  <circle cx="1007.4" cy="513.4" r="0.6" fill="#FFFFFF" opacity="0.41">
                  </circle>
                  <circle cx="615.3" cy="384.2" r="0.8" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="1396.6" cy="13.0" r="0.5" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="1286.8" cy="576.1" r="0.8" fill="#FFFFFF" opacity="0.35">
                  </circle>
                  <circle cx="1482.9" cy="491.2" r="0.8" fill="#FFFFFF" opacity="0.93">
                  </circle>
                  <circle cx="174.5" cy="91.9" r="1.0" fill="#FFFFFF" opacity="0.93" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                  </circle>
                  <circle cx="1121.6" cy="503.7" r="0.8" fill="#FFFFFF" opacity="0.40">
                  </circle>
                  <circle cx="2.2" cy="74.8" r="1.0" fill="#FFFFFF" opacity="0.90">
                  </circle>
                  <circle cx="486.1" cy="76.1" r="0.7" fill="#FFFFFF" opacity="0.67">
                  </circle>
                  <circle cx="1222.2" cy="59.2" r="0.7" fill="#FFFFFF" opacity="0.66">
                  </circle>
                  <circle cx="620.9" cy="133.0" r="1.0" fill="#FFFFFF" opacity="0.35">
                  </circle>
                  <circle cx="1594.2" cy="165.8" r="0.7" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="760.5" cy="139.7" r="0.6" fill="#FFFFFF" opacity="0.37">
                  </circle>
                  <circle cx="1039.4" cy="32.9" r="0.6" fill="#FFFFFF" opacity="0.65">
                  </circle>
                  <circle cx="672.0" cy="153.1" r="1.3" fill="#FFFFFF" opacity="0.60">
                  </circle>
                  <circle cx="788.7" cy="414.0" r="1.3" fill="#FFFFFF" opacity="0.60">
                  </circle>
                  <circle cx="316.9" cy="474.3" r="1.3" fill="#FFFFFF" opacity="0.86" className="vga-tw" style={{ animationDelay: "-1.5s" }}>
                  </circle>
                  <circle cx="320.7" cy="455.7" r="0.6" fill="#FFFFFF" opacity="0.49">
                  </circle>
                  <circle cx="1216.8" cy="175.5" r="1.0" fill="#FFFFFF" opacity="0.65">
                  </circle>
                  <circle cx="357.3" cy="248.1" r="1.3" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="1475.1" cy="32.3" r="0.5" fill="#FFFFFF" opacity="0.93" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
                  </circle>
                  <circle cx="96.2" cy="234.0" r="1.3" fill="#FFFFFF" opacity="0.88">
                  </circle>
                  <circle cx="1596.0" cy="554.3" r="0.7" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="839.7" cy="278.2" r="0.7" fill="#FFFFFF" opacity="0.75">
                  </circle>
                  <circle cx="598.2" cy="197.4" r="0.6" fill="#FFFFFF" opacity="0.42" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
                  </circle>
                  <circle cx="672.3" cy="526.7" r="1.0" fill="#FFFFFF" opacity="0.93">
                  </circle>
                  <circle cx="570.6" cy="488.8" r="0.8" fill="#FFFFFF" opacity="0.40">
                  </circle>
                  <circle cx="313.1" cy="322.2" r="0.8" fill="#FFFFFF" opacity="0.47">
                  </circle>
                  <circle cx="1435.2" cy="18.0" r="0.8" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="647.6" cy="223.5" r="0.8" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="411.2" cy="444.6" r="1.0" fill="#FFFFFF" opacity="0.55">
                  </circle>
                  <circle cx="1532.3" cy="367.1" r="0.7" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="1478.8" cy="177.0" r="1.3" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="1014.4" cy="561.2" r="0.5" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
                  </circle>
                  <circle cx="745.2" cy="461.9" r="0.7" fill="#FFFFFF" opacity="0.90">
                  </circle>
                  <circle cx="212.3" cy="295.4" r="0.5" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="1316.4" cy="459.8" r="1.0" fill="#FFFFFF" opacity="0.49">
                  </circle>
                  <circle cx="737.2" cy="466.4" r="1.0" fill="#FFFFFF" opacity="0.40">
                  </circle>
                  <circle cx="1204.6" cy="147.1" r="0.5" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="871.4" cy="95.6" r="0.8" fill="#FFFFFF" opacity="0.88">
                  </circle>
                </g>
                <g mask="url(#vga-mask-login)" opacity=".9">
                  <g className="vga-s2" filter="url(#vga-blur-login)">
                    <path d="M -200 18 L -175 15 L -150 11 L -125 6 L -100 1 L -75 -5 L -50 -12 L -25 -19 L 0 -26 L 25 -32 L 50 -39 L 75 -44 L 100 -49 L 125 -53 L 150 -56 L 175 -58 L 200 -59 L 225 -58 L 250 -57 L 275 -54 L 300 -50 L 325 -44 L 350 -38 L 375 -31 L 400 -23 L 425 -15 L 450 -6 L 475 3 L 500 12 L 525 20 L 550 28 L 575 36 L 600 43 L 625 48 L 650 53 L 675 57 L 700 59 L 725 60 L 750 60 L 775 59 L 800 57 L 825 53 L 850 49 L 875 43 L 900 37 L 925 31 L 950 24 L 975 17 L 1000 10 L 1025 4 L 1050 -2 L 1075 -7 L 1100 -12 L 1125 -15 L 1150 -18 L 1175 -19 L 1200 -19 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -8 L 1325 -2 L 1350 5 L 1375 12 L 1400 20 L 1425 29 L 1450 38 L 1475 47 L 1500 55 L 1525 64 L 1550 72 L 1575 79 L 1600 85 L 1625 90 L 1650 95 L 1675 98 L 1700 99 L 1725 100 L 1750 99 L 1775 98 L 1800 95 L 1800 278 L 1775 282 L 1750 288 L 1725 296 L 1700 306 L 1675 317 L 1650 329 L 1625 340 L 1600 352 L 1575 362 L 1550 372 L 1525 379 L 1500 385 L 1475 389 L 1450 390 L 1425 389 L 1400 386 L 1375 380 L 1350 373 L 1325 364 L 1300 354 L 1275 343 L 1250 332 L 1225 321 L 1200 311 L 1175 302 L 1150 294 L 1125 289 L 1100 285 L 1075 283 L 1050 283 L 1025 286 L 1000 291 L 975 297 L 950 305 L 925 314 L 900 323 L 875 332 L 850 342 L 825 350 L 800 357 L 775 363 L 750 366 L 725 368 L 700 367 L 675 363 L 650 357 L 625 349 L 600 340 L 575 328 L 550 315 L 525 301 L 500 287 L 475 274 L 450 261 L 425 248 L 400 238 L 375 229 L 350 223 L 325 219 L 300 217 L 275 218 L 250 221 L 225 226 L 200 234 L 175 242 L 150 252 L 125 262 L 100 273 L 75 283 L 50 292 L 25 300 L 0 307 L -25 311 L -50 314 L -75 314 L -100 312 L -125 308 L -150 302 L -175 294 L -200 285 Z" fill="url(#vga-g2-login)">
                    </path>
                  </g>
                  <g className="vga-s1" filter="url(#vga-blur-login)">
                    <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-login)">
                    </path>
                  </g>
                  <g className="vga-s3" filter="url(#vga-blur-login)">
                    <path d="M -200 270 L -175 261 L -150 252 L -125 245 L -100 239 L -75 235 L -50 233 L -25 233 L 0 236 L 25 241 L 50 247 L 75 255 L 100 263 L 125 272 L 150 280 L 175 287 L 200 293 L 225 297 L 250 299 L 275 298 L 300 296 L 325 291 L 350 284 L 375 276 L 400 267 L 425 258 L 450 248 L 475 239 L 500 232 L 525 226 L 550 222 L 575 221 L 600 221 L 625 224 L 650 229 L 675 235 L 700 243 L 725 251 L 750 260 L 775 268 L 800 275 L 825 281 L 850 284 L 875 286 L 900 286 L 925 283 L 950 278 L 975 271 L 1000 263 L 1025 254 L 1050 245 L 1075 235 L 1100 227 L 1125 219 L 1150 213 L 1175 210 L 1200 208 L 1225 209 L 1250 212 L 1275 216 L 1300 223 L 1325 231 L 1350 239 L 1375 247 L 1400 256 L 1425 263 L 1450 268 L 1475 272 L 1500 274 L 1525 273 L 1550 270 L 1575 265 L 1600 259 L 1625 250 L 1650 241 L 1675 232 L 1700 222 L 1725 214 L 1750 206 L 1775 201 L 1800 197 L 1800 487 L 1775 494 L 1750 498 L 1725 498 L 1700 495 L 1675 487 L 1650 477 L 1625 465 L 1600 453 L 1575 442 L 1550 433 L 1525 428 L 1500 427 L 1475 430 L 1450 437 L 1425 449 L 1400 462 L 1375 478 L 1350 493 L 1325 507 L 1300 518 L 1275 526 L 1250 530 L 1225 529 L 1200 524 L 1175 515 L 1150 504 L 1125 492 L 1100 481 L 1075 470 L 1050 463 L 1025 459 L 1000 459 L 975 463 L 950 470 L 925 480 L 900 492 L 875 503 L 850 514 L 825 522 L 800 527 L 775 528 L 750 524 L 725 517 L 700 506 L 675 493 L 650 480 L 625 466 L 600 455 L 575 446 L 550 442 L 525 442 L 500 446 L 475 455 L 450 467 L 425 480 L 400 495 L 375 509 L 350 522 L 325 531 L 300 536 L 275 537 L 250 535 L 225 528 L 200 519 L 175 509 L 150 498 L 125 489 L 100 482 L 75 478 L 50 478 L 25 482 L 0 490 L -25 500 L -50 513 L -75 526 L -100 538 L -125 548 L -150 555 L -175 558 L -200 557 Z" fill="url(#vga-g3-login)">
                    </path>
                  </g>
                </g>
                <g filter="url(#vga-blur2-login)" opacity=".45">
                  <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-login)">
                  </path>
                </g>
                <path d="M -40 1000 L -40 668 L -11 629 L 39 629 L 91 585 L 123 574 L 162 607 L 193 645 L 235 617 L 295 586 L 335 618 L 371 610 L 406 575 L 439 550 L 475 550 L 524 550 L 563 551 L 601 571 L 631 592 L 657 550 L 711 602 L 749 648 L 796 586 L 838 550 L 865 550 L 901 608 L 948 610 L 983 603 L 1023 640 L 1047 587 L 1093 550 L 1140 550 L 1166 550 L 1206 550 L 1243 592 L 1287 580 L 1334 550 L 1377 550 L 1403 590 L 1462 588 L 1512 550 L 1561 572 L 1594 591 L 1623 612 L 1660 1000 Z" fill="url(#vga-mf-login)">
                </path>
                <path d="M -40 1000 L -40 677 L 8 689 L 64 706 L 113 706 L 165 700 L 196 706 L 249 706 L 304 706 L 347 706 L 404 706 L 461 678 L 496 671 L 549 669 L 589 642 L 622 646 L 693 668 L 748 638 L 817 669 L 894 669 L 933 658 L 973 660 L 1007 632 L 1068 650 L 1148 684 L 1190 669 L 1222 703 L 1282 690 L 1350 706 L 1404 676 L 1479 685 L 1519 695 L 1563 704 L 1632 706 L 1660 1000 Z" fill="#0A1328">
                </path>
                <rect x="0" y="714" width="1600" height="300" fill="url(#vga-lake-login)">
                </rect>
                <rect x="0" y="714" width="1600" height="180" fill="url(#vga-refl-login)">
                </rect>
                <g className="vga-rip">
                  <rect x="1472" y="720" width="162" height="1" fill="#9EF5D2" opacity="0.14">
                  </rect>
                  <rect x="82" y="733" width="276" height="1" fill="#9EF5D2" opacity="0.17">
                  </rect>
                  <rect x="1027" y="745" width="284" height="1" fill="#9EF5D2" opacity="0.05">
                  </rect>
                  <rect x="60" y="758" width="240" height="1" fill="#9EF5D2" opacity="0.14">
                  </rect>
                  <rect x="131" y="771" width="114" height="1" fill="#9EF5D2" opacity="0.17">
                  </rect>
                  <rect x="425" y="784" width="291" height="1" fill="#9EF5D2" opacity="0.15">
                  </rect>
                  <rect x="1082" y="796" width="267" height="1" fill="#9EF5D2" opacity="0.08">
                  </rect>
                  <rect x="1325" y="809" width="239" height="1" fill="#9EF5D2" opacity="0.08">
                  </rect>
                  <rect x="484" y="822" width="240" height="1" fill="#9EF5D2" opacity="0.17">
                  </rect>
                  <rect x="703" y="835" width="146" height="1" fill="#9EF5D2" opacity="0.18">
                  </rect>
                  <rect x="742" y="847" width="234" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="342" y="860" width="177" height="1" fill="#9EF5D2" opacity="0.08">
                  </rect>
                  <rect x="616" y="873" width="246" height="1" fill="#9EF5D2" opacity="0.09">
                  </rect>
                  <rect x="491" y="885" width="178" height="1" fill="#9EF5D2" opacity="0.15">
                  </rect>
                  <rect x="386" y="898" width="280" height="1" fill="#9EF5D2" opacity="0.06">
                  </rect>
                  <rect x="1366" y="911" width="331" height="1" fill="#9EF5D2" opacity="0.11">
                  </rect>
                  <rect x="810" y="924" width="259" height="1" fill="#9EF5D2" opacity="0.17">
                  </rect>
                  <rect x="366" y="936" width="219" height="1" fill="#9EF5D2" opacity="0.16">
                  </rect>
                  <rect x="1168" y="949" width="177" height="1" fill="#9EF5D2" opacity="0.10">
                  </rect>
                  <rect x="559" y="962" width="118" height="1" fill="#9EF5D2" opacity="0.09">
                  </rect>
                  <rect x="84" y="975" width="140" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="1531" y="987" width="157" height="1" fill="#9EF5D2" opacity="0.12">
                  </rect>
                </g>
              </svg>
              <div style={{ position: "relative", width: "100%", maxWidth: "460px", borderRadius: "28px", padding: "30px 30px 26px", boxSizing: "border-box", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 30px 80px -30px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08)", backdropFilter: "blur(18px) saturate(1.3)", WebkitBackdropFilter: "blur(18px) saturate(1.3)", color: "#FFFFFF" }} data-s="s24">
                <span style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#9EA3BD" }}>
                  {"Welcome back"}
                </span>
                <h2 style={{ margin: "10px 0 14px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                  {"Your agent kept answering."}
                </h2>
                <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                    <span style={{ marginTop: "2px" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#FFFFFF" }}>
                        {"Voice agent"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Answers every call in a natural voice"}
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                    <span style={{ marginTop: "2px" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#FFFFFF" }}>
                        {"Long memory"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Remembers every person for months"}
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                    <span style={{ marginTop: "2px" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#FFFFFF" }}>
                        {"Every channel"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"WhatsApp, Instagram, Telegram and a link"}
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                    <span style={{ marginTop: "2px" }}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7">
                        </path>
                      </svg>
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#FFFFFF" }}>
                        {"Insights"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"What happened, and who needs you"}
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ marginTop: "18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", color: "#9EA3BD" }}>
                    {"Works with"}
                  </span>
                  <span style={{ display: "flex", gap: "6px" }}>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#FF0069">
                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#0866FF">
                        <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#4285F4">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#0467DF">
                        <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ display: "inline-flex", width: "36px", height: "36px", borderRadius: "12px", background: "rgba(255,255,255,.92)", alignItems: "center", justifyContent: "center" }}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#635BFF">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z">
                        </path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
            <div style={{ width: "100%", maxWidth: "380px", textAlign: "center" }}>
              <span style={{ display: "inline-block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.045em", color: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text", backgroundImage: "linear-gradient(100deg, #10B981 0%, #7C3AED 80%, #DB2777 100%)", WebkitTextFillColor: "transparent" }}>
                {"vegham"}
              </span>
              <h1 style={{ margin: "22px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.04em", fontSize: "30px", color: "#141414" }}>
                {"Enter your code"}
              </h1>
              <p style={{ margin: "10px 0 0", fontSize: "15px", color: "#6B6B6B" }}>
                {"We sent a 6-digit code on WhatsApp to "}
                <b style={{ fontWeight: "600", color: "#1F1F1F" }}>
                  {"+91 98765 43210"}
                </b>
              </p>
              <div style={{ marginTop: "28px" }}>
                <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                  <input aria-label="Digit 1" inputMode="numeric" maxLength={1} defaultValue="4" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #E2E2E6", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414" }} />
                  <input aria-label="Digit 2" inputMode="numeric" maxLength={1} defaultValue="8" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #E2E2E6", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414" }} />
                  <input aria-label="Digit 3" inputMode="numeric" maxLength={1} defaultValue="1" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #E2E2E6", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414" }} />
                  <input aria-label="Digit 4" inputMode="numeric" maxLength={1} defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #16182A", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414", boxShadow: "0 0 0 4px rgba(59,108,246,.14)" }} />
                  <input aria-label="Digit 5" inputMode="numeric" maxLength={1} defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #E2E2E6", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414" }} />
                  <input aria-label="Digit 6" inputMode="numeric" maxLength={1} defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #E2E2E6", borderRadius: "12px", font: "inherit", fontFamily: "var(--font-tight), sans-serif", fontSize: "26px", color: "#141414" }} />
                </div>
              </div>
              <p style={{ margin: "16px 0 0", fontSize: "14px", color: "#6B6B6B" }}>
                {"Didn’t get it? "}
                <span style={{ color: "#8A8A8A" }}>
                  {"Resend in 0:24"}
                </span>
              </p>
              <Link href="/app/" style={{ marginTop: "22px", width: "100%", height: "50px", gap: "10px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontSize: "15.5px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxSizing: "border-box" }} data-s="s1">
                {"Verify and continue"}
              </Link>
              <p style={{ margin: "24px 0 0", fontSize: "14.5px", color: "#5C5C5C" }}>
                <a href="#" style={{ color: "#16182A" }}>
                  {"← Use a different number"}
                </a>
              </p>
              <p style={{ margin: "28px 0 0", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#8A8A8A" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="11" width="14" height="10" rx="2">
                  </rect>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4">
                  </path>
                </svg>
                {"Codes expire after 10 minutes and work only once."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
