// Ported from design board Signup by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#1F1F1F", background: "#FFFFFF", fontSize: "16px", lineHeight: "1.6" }}>
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: "960px", background: "#FFFFFF" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0", padding: "16px", boxSizing: "border-box" }}>
            <div style={{ position: "relative", height: "100%", minHeight: "680px", borderRadius: "28px", overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "40px 32px", boxSizing: "border-box" }} data-s="s23">
              <svg aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
                <defs>
                  <linearGradient id="vga-sky-signup" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#03050E">
                    </stop>
                    <stop offset=".45" stopColor="#081028">
                    </stop>
                    <stop offset=".72" stopColor="#0E2140">
                    </stop>
                    <stop offset="1" stopColor="#0B1830">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-g1-signup" x1="0" y1="1" x2="0" y2="0">
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
                  <linearGradient id="vga-g2-signup" x1="0" y1="1" x2="0" y2="0">
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
                  <linearGradient id="vga-g3-signup" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#A7F3D0" stopOpacity="0">
                    </stop>
                    <stop offset=".1" stopColor="#6EE7B7" stopOpacity=".7">
                    </stop>
                    <stop offset=".5" stopColor="#10B981" stopOpacity=".3">
                    </stop>
                    <stop offset="1" stopColor="#10B981" stopOpacity="0">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-mf-signup" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1B2C52">
                    </stop>
                    <stop offset="1" stopColor="#0D1730">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-refl-signup" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2DE3A0" stopOpacity=".22">
                    </stop>
                    <stop offset=".35" stopColor="#14B8A6" stopOpacity=".08">
                    </stop>
                    <stop offset="1" stopColor="#14B8A6" stopOpacity="0">
                    </stop>
                  </linearGradient>
                  <linearGradient id="vga-lake-signup" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0B1A33">
                    </stop>
                    <stop offset="1" stopColor="#040812">
                    </stop>
                  </linearGradient>
                  <filter id="vga-blur-signup" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="7">
                    </feGaussianBlur>
                  </filter>
                  <filter id="vga-blur2-signup" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="14">
                    </feGaussianBlur>
                  </filter>
                  <pattern id="vga-rp-signup" width="120" height="10" patternUnits="userSpaceOnUse">
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
                  <mask id="vga-mask-signup" maskUnits="userSpaceOnUse" x="-300" y="0" width="2200" height="1000">
                    <g className="vga-rays">
                      <rect x="-300" y="0" width="2300" height="1000" fill="url(#vga-rp-signup)">
                      </rect>
                    </g>
                  </mask>
                </defs>
                <rect width="1600" height="1000" fill="url(#vga-sky-signup)">
                </rect>
                <g>
                  <circle cx="1083.4" cy="467.0" r="1.0" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="555.5" cy="314.9" r="1.0" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="416.7" cy="194.8" r="0.7" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="1435.5" cy="13.6" r="1.0" fill="#FFFFFF" opacity="0.47" className="vga-tw" style={{ animationDelay: "-0.6s" }}>
                  </circle>
                  <circle cx="867.9" cy="231.2" r="1.3" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                  </circle>
                  <circle cx="926.6" cy="251.8" r="0.8" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="913.2" cy="298.9" r="0.6" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="372.5" cy="324.4" r="1.3" fill="#FFFFFF" opacity="0.41">
                  </circle>
                  <circle cx="306.4" cy="80.1" r="0.8" fill="#FFFFFF" opacity="0.41">
                  </circle>
                  <circle cx="11.1" cy="270.4" r="0.8" fill="#FFFFFF" opacity="0.71">
                  </circle>
                  <circle cx="1319.3" cy="293.9" r="0.8" fill="#FFFFFF" opacity="0.89">
                  </circle>
                  <circle cx="1424.9" cy="145.7" r="0.5" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="1081.3" cy="388.2" r="0.6" fill="#FFFFFF" opacity="0.64">
                  </circle>
                  <circle cx="469.0" cy="101.8" r="0.8" fill="#FFFFFF" opacity="0.53">
                  </circle>
                  <circle cx="72.5" cy="124.5" r="1.3" fill="#FFFFFF" opacity="0.93">
                  </circle>
                  <circle cx="740.8" cy="278.9" r="0.8" fill="#FFFFFF" opacity="0.74" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                  </circle>
                  <circle cx="439.7" cy="50.6" r="0.6" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="1330.6" cy="120.7" r="0.8" fill="#FFFFFF" opacity="0.88">
                  </circle>
                  <circle cx="108.8" cy="385.9" r="1.3" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="993.2" cy="172.4" r="1.3" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="942.2" cy="570.3" r="0.6" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="39.3" cy="167.1" r="0.6" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="745.6" cy="299.2" r="0.7" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="899.4" cy="426.4" r="1.3" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="1090.0" cy="169.9" r="1.0" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="1497.1" cy="518.7" r="0.6" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="1488.1" cy="305.2" r="0.5" fill="#FFFFFF" opacity="0.51">
                  </circle>
                  <circle cx="606.8" cy="193.0" r="0.7" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="530.7" cy="428.5" r="1.3" fill="#FFFFFF" opacity="0.75">
                  </circle>
                  <circle cx="661.1" cy="24.3" r="0.7" fill="#FFFFFF" opacity="0.41">
                  </circle>
                  <circle cx="732.7" cy="434.9" r="0.5" fill="#FFFFFF" opacity="0.53">
                  </circle>
                  <circle cx="1563.6" cy="233.2" r="0.6" fill="#FFFFFF" opacity="0.45">
                  </circle>
                  <circle cx="887.2" cy="422.4" r="1.0" fill="#FFFFFF" opacity="0.40" className="vga-tw" style={{ animationDelay: "-1.3s" }}>
                  </circle>
                  <circle cx="1145.4" cy="83.3" r="0.7" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="1337.2" cy="164.9" r="0.6" fill="#FFFFFF" opacity="0.50" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                  </circle>
                  <circle cx="205.3" cy="413.4" r="0.7" fill="#FFFFFF" opacity="0.68">
                  </circle>
                  <circle cx="566.1" cy="467.2" r="1.3" fill="#FFFFFF" opacity="0.49" className="vga-tw" style={{ animationDelay: "-1.4s" }}>
                  </circle>
                  <circle cx="894.4" cy="330.3" r="0.7" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="701.1" cy="577.1" r="1.0" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="782.2" cy="562.6" r="0.8" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="922.0" cy="393.5" r="1.0" fill="#FFFFFF" opacity="0.50">
                  </circle>
                  <circle cx="667.2" cy="81.1" r="1.0" fill="#FFFFFF" opacity="0.49">
                  </circle>
                  <circle cx="1144.5" cy="284.1" r="0.7" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="103.0" cy="401.1" r="0.5" fill="#FFFFFF" opacity="0.79">
                  </circle>
                  <circle cx="1502.7" cy="161.5" r="0.8" fill="#FFFFFF" opacity="0.45">
                  </circle>
                  <circle cx="420.5" cy="276.6" r="0.5" fill="#FFFFFF" opacity="0.43" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
                  </circle>
                  <circle cx="430.2" cy="466.7" r="0.8" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="398.4" cy="107.3" r="0.5" fill="#FFFFFF" opacity="0.68">
                  </circle>
                  <circle cx="194.4" cy="29.0" r="0.5" fill="#FFFFFF" opacity="0.67" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                  </circle>
                  <circle cx="1311.2" cy="409.6" r="0.7" fill="#FFFFFF" opacity="0.57">
                  </circle>
                  <circle cx="1512.1" cy="71.1" r="1.0" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="287.8" cy="380.7" r="0.8" fill="#FFFFFF" opacity="0.56">
                  </circle>
                  <circle cx="746.9" cy="321.1" r="1.3" fill="#FFFFFF" opacity="0.82">
                  </circle>
                  <circle cx="953.5" cy="161.6" r="1.0" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="1298.6" cy="14.9" r="1.3" fill="#FFFFFF" opacity="0.82">
                  </circle>
                  <circle cx="958.0" cy="105.2" r="0.6" fill="#FFFFFF" opacity="0.73" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="1262.7" cy="111.6" r="0.5" fill="#FFFFFF" opacity="0.45">
                  </circle>
                  <circle cx="1448.2" cy="247.3" r="1.0" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="699.6" cy="362.4" r="0.7" fill="#FFFFFF" opacity="0.66">
                  </circle>
                  <circle cx="947.5" cy="115.2" r="0.5" fill="#FFFFFF" opacity="0.85" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
                  </circle>
                  <circle cx="491.9" cy="415.9" r="0.8" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="1434.3" cy="39.2" r="1.3" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="1378.9" cy="368.9" r="1.3" fill="#FFFFFF" opacity="0.62">
                  </circle>
                  <circle cx="1418.2" cy="399.6" r="0.7" fill="#FFFFFF" opacity="0.89">
                  </circle>
                  <circle cx="1304.7" cy="448.8" r="0.7" fill="#FFFFFF" opacity="0.41" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                  </circle>
                  <circle cx="1527.8" cy="554.2" r="0.6" fill="#FFFFFF" opacity="0.38">
                  </circle>
                  <circle cx="952.3" cy="141.0" r="0.5" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="1070.1" cy="285.1" r="0.7" fill="#FFFFFF" opacity="0.73">
                  </circle>
                  <circle cx="1473.8" cy="287.3" r="0.6" fill="#FFFFFF" opacity="0.94">
                  </circle>
                  <circle cx="1498.5" cy="287.0" r="0.7" fill="#FFFFFF" opacity="0.64">
                  </circle>
                  <circle cx="1487.8" cy="76.0" r="0.7" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="780.3" cy="173.2" r="1.0" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="1071.3" cy="473.5" r="1.0" fill="#FFFFFF" opacity="0.80">
                  </circle>
                  <circle cx="1589.0" cy="7.8" r="0.6" fill="#FFFFFF" opacity="0.75" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                  </circle>
                  <circle cx="118.8" cy="312.0" r="0.7" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="851.2" cy="241.8" r="0.8" fill="#FFFFFF" opacity="0.82" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
                  </circle>
                  <circle cx="936.3" cy="471.0" r="0.6" fill="#FFFFFF" opacity="0.47" className="vga-tw" style={{ animationDelay: "-1.1s" }}>
                  </circle>
                  <circle cx="1546.7" cy="307.3" r="0.8" fill="#FFFFFF" opacity="0.55">
                  </circle>
                  <circle cx="1516.8" cy="298.5" r="0.8" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="819.8" cy="464.9" r="0.5" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-1.5s" }}>
                  </circle>
                  <circle cx="834.6" cy="367.5" r="0.6" fill="#FFFFFF" opacity="0.57">
                  </circle>
                  <circle cx="1318.9" cy="565.0" r="0.7" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="1533.9" cy="105.1" r="1.3" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="781.5" cy="394.8" r="0.6" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="741.0" cy="125.2" r="0.7" fill="#FFFFFF" opacity="0.88">
                  </circle>
                  <circle cx="1204.9" cy="184.7" r="0.7" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="1324.3" cy="578.8" r="0.6" fill="#FFFFFF" opacity="0.88" className="vga-tw" style={{ animationDelay: "-1.7s" }}>
                  </circle>
                  <circle cx="1590.6" cy="438.4" r="0.7" fill="#FFFFFF" opacity="0.56">
                  </circle>
                  <circle cx="1133.9" cy="163.1" r="1.3" fill="#FFFFFF" opacity="0.43" className="vga-tw" style={{ animationDelay: "-1.9s" }}>
                  </circle>
                  <circle cx="586.4" cy="5.1" r="1.3" fill="#FFFFFF" opacity="0.60">
                  </circle>
                  <circle cx="703.3" cy="281.4" r="0.6" fill="#FFFFFF" opacity="0.55">
                  </circle>
                  <circle cx="825.3" cy="141.9" r="0.5" fill="#FFFFFF" opacity="0.57">
                  </circle>
                  <circle cx="1097.3" cy="270.7" r="1.3" fill="#FFFFFF" opacity="0.71">
                  </circle>
                  <circle cx="420.7" cy="467.0" r="0.8" fill="#FFFFFF" opacity="0.59">
                  </circle>
                  <circle cx="1558.1" cy="351.7" r="0.5" fill="#FFFFFF" opacity="0.42" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                  </circle>
                  <circle cx="1231.8" cy="91.8" r="1.3" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="1488.0" cy="316.3" r="0.7" fill="#FFFFFF" opacity="0.55">
                  </circle>
                  <circle cx="1085.0" cy="273.1" r="0.8" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="23.5" cy="478.1" r="1.0" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="1356.7" cy="592.7" r="0.8" fill="#FFFFFF" opacity="0.66" className="vga-tw" style={{ animationDelay: "-2.0s" }}>
                  </circle>
                  <circle cx="146.8" cy="304.5" r="1.0" fill="#FFFFFF" opacity="0.47">
                  </circle>
                  <circle cx="854.2" cy="424.3" r="1.0" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="1470.9" cy="540.7" r="0.6" fill="#FFFFFF" opacity="0.47" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="285.7" cy="473.1" r="0.8" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="748.9" cy="588.2" r="1.0" fill="#FFFFFF" opacity="0.49">
                  </circle>
                  <circle cx="173.5" cy="15.8" r="0.6" fill="#FFFFFF" opacity="0.74">
                  </circle>
                  <circle cx="241.4" cy="532.6" r="0.7" fill="#FFFFFF" opacity="0.57">
                  </circle>
                  <circle cx="299.8" cy="353.7" r="0.7" fill="#FFFFFF" opacity="0.86">
                  </circle>
                  <circle cx="1135.8" cy="541.6" r="0.7" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="714.2" cy="495.2" r="1.0" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="501.3" cy="83.4" r="1.3" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="770.3" cy="499.7" r="0.6" fill="#FFFFFF" opacity="0.69">
                  </circle>
                  <circle cx="1267.4" cy="235.9" r="0.5" fill="#FFFFFF" opacity="0.57" className="vga-tw" style={{ animationDelay: "-2.8s" }}>
                  </circle>
                  <circle cx="85.6" cy="406.1" r="0.6" fill="#FFFFFF" opacity="0.70">
                  </circle>
                  <circle cx="582.6" cy="502.9" r="0.7" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
                  </circle>
                  <circle cx="37.5" cy="400.2" r="0.7" fill="#FFFFFF" opacity="0.57" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
                  </circle>
                  <circle cx="483.5" cy="52.3" r="1.3" fill="#FFFFFF" opacity="0.47">
                  </circle>
                  <circle cx="179.4" cy="68.3" r="0.8" fill="#FFFFFF" opacity="0.53">
                  </circle>
                  <circle cx="1401.9" cy="53.2" r="0.8" fill="#FFFFFF" opacity="0.35" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
                  </circle>
                  <circle cx="177.1" cy="480.1" r="1.3" fill="#FFFFFF" opacity="0.71">
                  </circle>
                  <circle cx="1554.2" cy="409.3" r="0.8" fill="#FFFFFF" opacity="0.77" className="vga-tw" style={{ animationDelay: "-0.6s" }}>
                  </circle>
                  <circle cx="1319.5" cy="122.3" r="1.0" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="453.8" cy="566.1" r="1.3" fill="#FFFFFF" opacity="0.68">
                  </circle>
                  <circle cx="334.4" cy="566.2" r="0.8" fill="#FFFFFF" opacity="0.63">
                  </circle>
                  <circle cx="1142.5" cy="49.9" r="1.0" fill="#FFFFFF" opacity="0.60">
                  </circle>
                  <circle cx="701.0" cy="67.6" r="0.7" fill="#FFFFFF" opacity="0.35">
                  </circle>
                  <circle cx="1163.4" cy="352.9" r="0.6" fill="#FFFFFF" opacity="0.42">
                  </circle>
                  <circle cx="800.9" cy="471.4" r="0.6" fill="#FFFFFF" opacity="0.81">
                  </circle>
                  <circle cx="312.8" cy="550.0" r="0.8" fill="#FFFFFF" opacity="0.94">
                  </circle>
                  <circle cx="1452.1" cy="184.8" r="0.7" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="1122.1" cy="553.6" r="1.3" fill="#FFFFFF" opacity="0.82">
                  </circle>
                  <circle cx="1033.3" cy="198.5" r="0.7" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="625.3" cy="242.3" r="1.0" fill="#FFFFFF" opacity="0.90" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
                  </circle>
                  <circle cx="214.6" cy="461.1" r="0.7" fill="#FFFFFF" opacity="0.45">
                  </circle>
                  <circle cx="1446.9" cy="491.3" r="0.6" fill="#FFFFFF" opacity="0.67">
                  </circle>
                  <circle cx="693.8" cy="122.9" r="1.0" fill="#FFFFFF" opacity="0.78" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
                  </circle>
                  <circle cx="1043.4" cy="515.8" r="1.0" fill="#FFFFFF" opacity="0.84">
                  </circle>
                  <circle cx="455.4" cy="296.9" r="0.6" fill="#FFFFFF" opacity="0.79">
                  </circle>
                  <circle cx="1112.0" cy="271.0" r="1.3" fill="#FFFFFF" opacity="0.82">
                  </circle>
                  <circle cx="202.0" cy="392.9" r="1.3" fill="#FFFFFF" opacity="0.58">
                  </circle>
                  <circle cx="1086.0" cy="79.9" r="0.8" fill="#FFFFFF" opacity="0.60" className="vga-tw" style={{ animationDelay: "-1.6s" }}>
                  </circle>
                  <circle cx="1340.5" cy="356.4" r="0.7" fill="#FFFFFF" opacity="0.67" className="vga-tw" style={{ animationDelay: "-2.7s" }}>
                  </circle>
                  <circle cx="312.9" cy="323.0" r="0.8" fill="#FFFFFF" opacity="0.67">
                  </circle>
                  <circle cx="1000.7" cy="127.2" r="0.6" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="1001.9" cy="63.3" r="1.0" fill="#FFFFFF" opacity="0.39">
                  </circle>
                  <circle cx="105.8" cy="287.7" r="0.8" fill="#FFFFFF" opacity="0.72">
                  </circle>
                  <circle cx="1481.4" cy="105.2" r="0.6" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
                  </circle>
                  <circle cx="1121.0" cy="211.1" r="0.6" fill="#FFFFFF" opacity="0.83">
                  </circle>
                  <circle cx="296.8" cy="460.3" r="0.6" fill="#FFFFFF" opacity="0.43">
                  </circle>
                  <circle cx="432.6" cy="412.7" r="0.8" fill="#FFFFFF" opacity="0.52">
                  </circle>
                  <circle cx="467.5" cy="257.6" r="1.0" fill="#FFFFFF" opacity="0.56">
                  </circle>
                  <circle cx="368.1" cy="232.9" r="1.0" fill="#FFFFFF" opacity="0.85">
                  </circle>
                  <circle cx="354.8" cy="315.0" r="1.0" fill="#FFFFFF" opacity="0.91">
                  </circle>
                  <circle cx="398.8" cy="418.0" r="0.6" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="1091.7" cy="76.4" r="0.7" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="126.1" cy="197.9" r="0.8" fill="#FFFFFF" opacity="0.46">
                  </circle>
                  <circle cx="817.6" cy="456.6" r="0.5" fill="#FFFFFF" opacity="0.86">
                  </circle>
                  <circle cx="325.3" cy="117.4" r="0.6" fill="#FFFFFF" opacity="0.93">
                  </circle>
                  <circle cx="846.9" cy="237.5" r="0.5" fill="#FFFFFF" opacity="0.36">
                  </circle>
                  <circle cx="458.2" cy="236.6" r="0.5" fill="#FFFFFF" opacity="0.43">
                  </circle>
                  <circle cx="174.4" cy="88.0" r="0.8" fill="#FFFFFF" opacity="0.92">
                  </circle>
                  <circle cx="1047.4" cy="222.6" r="0.5" fill="#FFFFFF" opacity="0.36">
                  </circle>
                  <circle cx="246.6" cy="145.7" r="0.7" fill="#FFFFFF" opacity="0.61">
                  </circle>
                  <circle cx="150.6" cy="553.4" r="1.3" fill="#FFFFFF" opacity="0.45" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                  </circle>
                  <circle cx="845.0" cy="127.8" r="0.8" fill="#FFFFFF" opacity="0.41">
                  </circle>
                  <circle cx="1368.4" cy="385.1" r="0.8" fill="#FFFFFF" opacity="0.58" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
                  </circle>
                  <circle cx="253.9" cy="271.0" r="0.8" fill="#FFFFFF" opacity="0.89" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
                  </circle>
                  <circle cx="1164.0" cy="442.4" r="0.7" fill="#FFFFFF" opacity="0.44">
                  </circle>
                  <circle cx="325.1" cy="112.4" r="0.5" fill="#FFFFFF" opacity="0.90">
                  </circle>
                  <circle cx="1045.9" cy="422.4" r="0.6" fill="#FFFFFF" opacity="0.49">
                  </circle>
                </g>
                <g mask="url(#vga-mask-signup)" opacity=".9">
                  <g className="vga-s2" filter="url(#vga-blur-signup)">
                    <path d="M -200 18 L -175 15 L -150 11 L -125 6 L -100 1 L -75 -5 L -50 -12 L -25 -19 L 0 -26 L 25 -32 L 50 -39 L 75 -44 L 100 -49 L 125 -53 L 150 -56 L 175 -58 L 200 -59 L 225 -58 L 250 -57 L 275 -54 L 300 -50 L 325 -44 L 350 -38 L 375 -31 L 400 -23 L 425 -15 L 450 -6 L 475 3 L 500 12 L 525 20 L 550 28 L 575 36 L 600 43 L 625 48 L 650 53 L 675 57 L 700 59 L 725 60 L 750 60 L 775 59 L 800 57 L 825 53 L 850 49 L 875 43 L 900 37 L 925 31 L 950 24 L 975 17 L 1000 10 L 1025 4 L 1050 -2 L 1075 -7 L 1100 -12 L 1125 -15 L 1150 -18 L 1175 -19 L 1200 -19 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -8 L 1325 -2 L 1350 5 L 1375 12 L 1400 20 L 1425 29 L 1450 38 L 1475 47 L 1500 55 L 1525 64 L 1550 72 L 1575 79 L 1600 85 L 1625 90 L 1650 95 L 1675 98 L 1700 99 L 1725 100 L 1750 99 L 1775 98 L 1800 95 L 1800 278 L 1775 282 L 1750 288 L 1725 296 L 1700 306 L 1675 317 L 1650 329 L 1625 340 L 1600 352 L 1575 362 L 1550 372 L 1525 379 L 1500 385 L 1475 389 L 1450 390 L 1425 389 L 1400 386 L 1375 380 L 1350 373 L 1325 364 L 1300 354 L 1275 343 L 1250 332 L 1225 321 L 1200 311 L 1175 302 L 1150 294 L 1125 289 L 1100 285 L 1075 283 L 1050 283 L 1025 286 L 1000 291 L 975 297 L 950 305 L 925 314 L 900 323 L 875 332 L 850 342 L 825 350 L 800 357 L 775 363 L 750 366 L 725 368 L 700 367 L 675 363 L 650 357 L 625 349 L 600 340 L 575 328 L 550 315 L 525 301 L 500 287 L 475 274 L 450 261 L 425 248 L 400 238 L 375 229 L 350 223 L 325 219 L 300 217 L 275 218 L 250 221 L 225 226 L 200 234 L 175 242 L 150 252 L 125 262 L 100 273 L 75 283 L 50 292 L 25 300 L 0 307 L -25 311 L -50 314 L -75 314 L -100 312 L -125 308 L -150 302 L -175 294 L -200 285 Z" fill="url(#vga-g2-signup)">
                    </path>
                  </g>
                  <g className="vga-s1" filter="url(#vga-blur-signup)">
                    <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-signup)">
                    </path>
                  </g>
                  <g className="vga-s3" filter="url(#vga-blur-signup)">
                    <path d="M -200 270 L -175 261 L -150 252 L -125 245 L -100 239 L -75 235 L -50 233 L -25 233 L 0 236 L 25 241 L 50 247 L 75 255 L 100 263 L 125 272 L 150 280 L 175 287 L 200 293 L 225 297 L 250 299 L 275 298 L 300 296 L 325 291 L 350 284 L 375 276 L 400 267 L 425 258 L 450 248 L 475 239 L 500 232 L 525 226 L 550 222 L 575 221 L 600 221 L 625 224 L 650 229 L 675 235 L 700 243 L 725 251 L 750 260 L 775 268 L 800 275 L 825 281 L 850 284 L 875 286 L 900 286 L 925 283 L 950 278 L 975 271 L 1000 263 L 1025 254 L 1050 245 L 1075 235 L 1100 227 L 1125 219 L 1150 213 L 1175 210 L 1200 208 L 1225 209 L 1250 212 L 1275 216 L 1300 223 L 1325 231 L 1350 239 L 1375 247 L 1400 256 L 1425 263 L 1450 268 L 1475 272 L 1500 274 L 1525 273 L 1550 270 L 1575 265 L 1600 259 L 1625 250 L 1650 241 L 1675 232 L 1700 222 L 1725 214 L 1750 206 L 1775 201 L 1800 197 L 1800 487 L 1775 494 L 1750 498 L 1725 498 L 1700 495 L 1675 487 L 1650 477 L 1625 465 L 1600 453 L 1575 442 L 1550 433 L 1525 428 L 1500 427 L 1475 430 L 1450 437 L 1425 449 L 1400 462 L 1375 478 L 1350 493 L 1325 507 L 1300 518 L 1275 526 L 1250 530 L 1225 529 L 1200 524 L 1175 515 L 1150 504 L 1125 492 L 1100 481 L 1075 470 L 1050 463 L 1025 459 L 1000 459 L 975 463 L 950 470 L 925 480 L 900 492 L 875 503 L 850 514 L 825 522 L 800 527 L 775 528 L 750 524 L 725 517 L 700 506 L 675 493 L 650 480 L 625 466 L 600 455 L 575 446 L 550 442 L 525 442 L 500 446 L 475 455 L 450 467 L 425 480 L 400 495 L 375 509 L 350 522 L 325 531 L 300 536 L 275 537 L 250 535 L 225 528 L 200 519 L 175 509 L 150 498 L 125 489 L 100 482 L 75 478 L 50 478 L 25 482 L 0 490 L -25 500 L -50 513 L -75 526 L -100 538 L -125 548 L -150 555 L -175 558 L -200 557 Z" fill="url(#vga-g3-signup)">
                    </path>
                  </g>
                </g>
                <g filter="url(#vga-blur2-signup)" opacity=".45">
                  <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-signup)">
                  </path>
                </g>
                <path d="M -40 1000 L -40 634 L 12 670 L 72 644 L 123 653 L 160 698 L 212 698 L 260 698 L 304 698 L 361 687 L 421 666 L 466 658 L 519 609 L 574 550 L 624 550 L 650 595 L 691 550 L 747 556 L 789 550 L 830 550 L 884 550 L 916 550 L 969 575 L 1014 597 L 1053 572 L 1085 599 L 1139 550 L 1195 550 L 1233 610 L 1280 612 L 1305 601 L 1360 550 L 1402 550 L 1455 601 L 1489 551 L 1548 550 L 1592 588 L 1624 550 L 1648 550 L 1660 1000 Z" fill="url(#vga-mf-signup)">
                </path>
                <path d="M -40 1000 L -40 698 L 38 665 L 113 677 L 165 706 L 219 706 L 263 706 L 300 706 L 365 706 L 436 706 L 477 690 L 552 668 L 620 690 L 658 671 L 694 654 L 739 630 L 809 632 L 883 654 L 943 653 L 1002 668 L 1042 694 L 1088 681 L 1128 657 L 1185 684 L 1263 706 L 1338 679 L 1400 657 L 1479 680 L 1529 682 L 1577 674 L 1656 663 L 1660 1000 Z" fill="#0A1328">
                </path>
                <rect x="0" y="714" width="1600" height="300" fill="url(#vga-lake-signup)">
                </rect>
                <rect x="0" y="714" width="1600" height="180" fill="url(#vga-refl-signup)">
                </rect>
                <g className="vga-rip">
                  <rect x="127" y="720" width="320" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="332" y="733" width="161" height="1" fill="#9EF5D2" opacity="0.18">
                  </rect>
                  <rect x="373" y="745" width="158" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="622" y="758" width="127" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="152" y="771" width="80" height="1" fill="#9EF5D2" opacity="0.13">
                  </rect>
                  <rect x="1184" y="784" width="311" height="1" fill="#9EF5D2" opacity="0.06">
                  </rect>
                  <rect x="146" y="796" width="137" height="1" fill="#9EF5D2" opacity="0.07">
                  </rect>
                  <rect x="53" y="809" width="172" height="1" fill="#9EF5D2" opacity="0.09">
                  </rect>
                  <rect x="1146" y="822" width="114" height="1" fill="#9EF5D2" opacity="0.12">
                  </rect>
                  <rect x="1596" y="835" width="112" height="1" fill="#9EF5D2" opacity="0.06">
                  </rect>
                  <rect x="777" y="847" width="290" height="1" fill="#9EF5D2" opacity="0.09">
                  </rect>
                  <rect x="357" y="860" width="277" height="1" fill="#9EF5D2" opacity="0.09">
                  </rect>
                  <rect x="604" y="873" width="218" height="1" fill="#9EF5D2" opacity="0.10">
                  </rect>
                  <rect x="638" y="885" width="227" height="1" fill="#9EF5D2" opacity="0.17">
                  </rect>
                  <rect x="1579" y="898" width="182" height="1" fill="#9EF5D2" opacity="0.06">
                  </rect>
                  <rect x="1033" y="911" width="209" height="1" fill="#9EF5D2" opacity="0.11">
                  </rect>
                  <rect x="1453" y="924" width="110" height="1" fill="#9EF5D2" opacity="0.15">
                  </rect>
                  <rect x="1277" y="936" width="304" height="1" fill="#9EF5D2" opacity="0.16">
                  </rect>
                  <rect x="913" y="949" width="183" height="1" fill="#9EF5D2" opacity="0.11">
                  </rect>
                  <rect x="304" y="962" width="97" height="1" fill="#9EF5D2" opacity="0.10">
                  </rect>
                  <rect x="1187" y="975" width="288" height="1" fill="#9EF5D2" opacity="0.12">
                  </rect>
                  <rect x="218" y="987" width="92" height="1" fill="#9EF5D2" opacity="0.11">
                  </rect>
                </g>
              </svg>
              <div style={{ position: "relative", width: "100%", maxWidth: "460px", borderRadius: "28px", padding: "30px 30px 26px", boxSizing: "border-box", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 30px 80px -30px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08)", backdropFilter: "blur(18px) saturate(1.3)", WebkitBackdropFilter: "blur(18px) saturate(1.3)", color: "#FFFFFF" }} data-s="s24">
                <span style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#9EA3BD" }}>
                  {"Your free pilot"}
                </span>
                <h2 style={{ margin: "10px 0 14px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                  {"Live in minutes. Free for 30 days."}
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
                        {"Create your account"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Takes a minute"}
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
                        {"Connect WhatsApp and your phone"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Guided, about 10 minutes"}
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
                        {"Teach it your business"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Paste your website or add services"}
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
                        {"Go live"}
                      </span>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#9EA3BD" }}>
                        {"Your first customer, answered"}
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
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", boxSizing: "border-box" }}>
            <div style={{ width: "100%", maxWidth: "330px", textAlign: "center" }}>
              <span style={{ display: "inline-block", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
                  {"vegham"}
                </Link>
              </span>
              <h1 style={{ margin: "22px 0 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.03em", fontSize: "30px", color: "#141414" }}>
                {"Create your account"}
              </h1>
              <p style={{ margin: "8px 0 0", fontSize: "15px", color: "#6B6B6B" }}>
                {"Start your free 30-day pilot"}
              </p>
              <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", boxSizing: "border-box", height: "46px", border: "0", borderRadius: "999px", background: "#F1F1F3", color: "#1F1F1F", textDecoration: "none", font: "inherit", fontSize: "15px", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z">
                    </path>
                  </svg>
                  {"Continue with Google"}
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", boxSizing: "border-box", height: "46px", border: "0", borderRadius: "999px", background: "#F1F1F3", color: "#1F1F1F", textDecoration: "none", font: "inherit", fontSize: "15px", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
                    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022">
                    </rect>
                    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00">
                    </rect>
                    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF">
                    </rect>
                    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900">
                    </rect>
                  </svg>
                  {"Continue with Microsoft"}
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", boxSizing: "border-box", height: "46px", border: "0", borderRadius: "999px", background: "#F1F1F3", color: "#1F1F1F", textDecoration: "none", font: "inherit", fontSize: "15px", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="#000000">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701">
                    </path>
                  </svg>
                  {"Continue with Apple"}
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", boxSizing: "border-box", height: "46px", border: "0", borderRadius: "999px", background: "#F1F1F3", color: "#1F1F1F", textDecoration: "none", font: "inherit", fontSize: "15px", fontWeight: "500", cursor: "pointer" }} data-s="s1">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2">
                    </path>
                  </svg>
                  {"Continue with phone"}
                </a>
              </div>
              <div style={{ margin: "24px 0", display: "flex", alignItems: "center", gap: "14px", fontSize: "12.5px", color: "#6B6B6B" }}>
                <span style={{ flex: "1", height: "1px", background: "#ECECEF" }}>
                </span>
                {"OR"}
                <span style={{ flex: "1", height: "1px", background: "#ECECEF" }}>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", textAlign: "left" }}>
                <label htmlFor="nm" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                  {"Business name"}
                </label>
                <input id="nm" type="text" placeholder="Business name" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "46px", padding: "0 18px", border: "1px solid #E2E2E6", borderRadius: "999px", font: "inherit", fontSize: "15px" }} data-s="s1" />
                <label htmlFor="em" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                  {"Email"}
                </label>
                <input id="em" type="email" placeholder="e.g., name@business.com" style={{ display: "block", width: "100%", boxSizing: "border-box", height: "46px", padding: "0 18px", border: "1px solid #E2E2E6", borderRadius: "999px", font: "inherit", fontSize: "15px" }} data-s="s1" />
              </div>
              <label style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#3D3D3D", textAlign: "left" }}>
                <input type="checkbox" style={{ width: "18px", height: "18px", margin: "0", accentColor: "#16182A" }} />
                <span>
                  {"I accept the "}
                  <Link href="/terms/" style={{ color: "#16182A" }}>
                    {"terms of service"}
                  </Link>
                  {" & "}
                  <Link href="/privacy/" style={{ color: "#16182A" }}>
                    {"privacy policy"}
                  </Link>
                </span>
              </label>
              <Link href="/setup/" style={{ marginTop: "18px", width: "100%", height: "48px", border: "0", borderRadius: "999px", background: "#16182A", color: "#FFFFFF", font: "inherit", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxSizing: "border-box" }} data-s="s1">
                {"Create account"}
              </Link>
              <p style={{ margin: "24px 0 0", fontSize: "14.5px", color: "#3D3D3D" }}>
                {"Already have an account? "}
                <Link href="/login/" style={{ color: "#5C5C5C" }}>
                  {"Log in"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
