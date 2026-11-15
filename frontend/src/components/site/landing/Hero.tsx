// Ported from design board LandingV2 (Hero) by design/tools/port.py. Sample data is inline.
import Link from "next/link";

export default function Hero() {
  return (
      <section style={{ position: "relative", overflow: "hidden", minHeight: "1080px" }} data-s="s26">
        <svg aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
          <defs>
            <linearGradient id="vga-sky-hero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#03050E">
              </stop>
              <stop offset=".45" stopColor="#081028">
              </stop>
              <stop offset=".72" stopColor="#0E2140">
              </stop>
              <stop offset="1" stopColor="#0B1830">
              </stop>
            </linearGradient>
            <linearGradient id="vga-g1-hero" x1="0" y1="1" x2="0" y2="0">
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
            <linearGradient id="vga-g2-hero" x1="0" y1="1" x2="0" y2="0">
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
            <linearGradient id="vga-g3-hero" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#A7F3D0" stopOpacity="0">
              </stop>
              <stop offset=".1" stopColor="#6EE7B7" stopOpacity=".7">
              </stop>
              <stop offset=".5" stopColor="#10B981" stopOpacity=".3">
              </stop>
              <stop offset="1" stopColor="#10B981" stopOpacity="0">
              </stop>
            </linearGradient>
            <linearGradient id="vga-mf-hero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1B2C52">
              </stop>
              <stop offset="1" stopColor="#0D1730">
              </stop>
            </linearGradient>
            <linearGradient id="vga-refl-hero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2DE3A0" stopOpacity=".22">
              </stop>
              <stop offset=".35" stopColor="#14B8A6" stopOpacity=".08">
              </stop>
              <stop offset="1" stopColor="#14B8A6" stopOpacity="0">
              </stop>
            </linearGradient>
            <linearGradient id="vga-lake-hero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0B1A33">
              </stop>
              <stop offset="1" stopColor="#040812">
              </stop>
            </linearGradient>
            <filter id="vga-blur-hero" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7">
              </feGaussianBlur>
            </filter>
            <filter id="vga-blur2-hero" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14">
              </feGaussianBlur>
            </filter>
            <pattern id="vga-rp-hero" width="120" height="10" patternUnits="userSpaceOnUse">
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
            <mask id="vga-mask-hero" maskUnits="userSpaceOnUse" x="-300" y="0" width="2200" height="1000">
              <g className="vga-rays">
                <rect x="-300" y="0" width="2300" height="1000" fill="url(#vga-rp-hero)">
                </rect>
              </g>
            </mask>
          </defs>
          <rect width="1600" height="1000" fill="url(#vga-sky-hero)">
          </rect>
          <g>
            <circle cx="1479.8" cy="564.4" r="0.5" fill="#FFFFFF" opacity="0.36">
            </circle>
            <circle cx="606.7" cy="213.1" r="1.3" fill="#FFFFFF" opacity="0.47">
            </circle>
            <circle cx="353.7" cy="270.7" r="0.5" fill="#FFFFFF" opacity="0.41">
            </circle>
            <circle cx="797.2" cy="11.6" r="1.3" fill="#FFFFFF" opacity="0.79">
            </circle>
            <circle cx="92.1" cy="465.9" r="1.0" fill="#FFFFFF" opacity="0.57" className="vga-tw" style={{ animationDelay: "-0.6s" }}>
            </circle>
            <circle cx="1176.3" cy="336.5" r="0.7" fill="#FFFFFF" opacity="0.93">
            </circle>
            <circle cx="1559.4" cy="340.9" r="0.8" fill="#FFFFFF" opacity="0.46">
            </circle>
            <circle cx="1266.4" cy="402.1" r="0.6" fill="#FFFFFF" opacity="0.46" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
            </circle>
            <circle cx="1305.4" cy="116.4" r="0.5" fill="#FFFFFF" opacity="0.40">
            </circle>
            <circle cx="908.8" cy="559.4" r="0.7" fill="#FFFFFF" opacity="0.84">
            </circle>
            <circle cx="591.4" cy="171.6" r="0.7" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="349.3" cy="89.0" r="1.0" fill="#FFFFFF" opacity="0.82">
            </circle>
            <circle cx="1325.7" cy="141.6" r="1.0" fill="#FFFFFF" opacity="0.44">
            </circle>
            <circle cx="160.6" cy="227.9" r="0.8" fill="#FFFFFF" opacity="0.94" className="vga-tw" style={{ animationDelay: "-1.2s" }}>
            </circle>
            <circle cx="37.4" cy="481.7" r="1.3" fill="#FFFFFF" opacity="0.36">
            </circle>
            <circle cx="1184.9" cy="33.8" r="0.8" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="1559.0" cy="224.3" r="0.6" fill="#FFFFFF" opacity="0.37">
            </circle>
            <circle cx="877.2" cy="449.2" r="0.8" fill="#FFFFFF" opacity="0.92">
            </circle>
            <circle cx="165.6" cy="314.7" r="0.6" fill="#FFFFFF" opacity="0.76">
            </circle>
            <circle cx="381.8" cy="59.5" r="0.6" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="548.4" cy="530.9" r="0.6" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="660.2" cy="412.3" r="1.3" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="680.2" cy="177.8" r="1.0" fill="#FFFFFF" opacity="0.72" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
            </circle>
            <circle cx="40.5" cy="82.8" r="1.0" fill="#FFFFFF" opacity="0.79">
            </circle>
            <circle cx="264.5" cy="393.1" r="0.7" fill="#FFFFFF" opacity="0.69">
            </circle>
            <circle cx="376.1" cy="333.7" r="0.8" fill="#FFFFFF" opacity="0.83">
            </circle>
            <circle cx="435.4" cy="201.2" r="0.5" fill="#FFFFFF" opacity="0.82" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
            </circle>
            <circle cx="325.7" cy="405.3" r="0.6" fill="#FFFFFF" opacity="0.74">
            </circle>
            <circle cx="1527.5" cy="249.9" r="0.7" fill="#FFFFFF" opacity="0.64">
            </circle>
            <circle cx="862.6" cy="330.7" r="1.0" fill="#FFFFFF" opacity="0.67">
            </circle>
            <circle cx="1590.2" cy="134.8" r="0.5" fill="#FFFFFF" opacity="0.87">
            </circle>
            <circle cx="1243.1" cy="400.7" r="1.0" fill="#FFFFFF" opacity="0.60">
            </circle>
            <circle cx="651.8" cy="478.8" r="0.7" fill="#FFFFFF" opacity="0.93">
            </circle>
            <circle cx="620.1" cy="249.6" r="1.3" fill="#FFFFFF" opacity="0.64">
            </circle>
            <circle cx="408.8" cy="165.5" r="0.5" fill="#FFFFFF" opacity="0.58">
            </circle>
            <circle cx="1580.9" cy="87.0" r="0.7" fill="#FFFFFF" opacity="0.42">
            </circle>
            <circle cx="193.5" cy="336.8" r="0.8" fill="#FFFFFF" opacity="0.35" className="vga-tw" style={{ animationDelay: "-2.3s" }}>
            </circle>
            <circle cx="178.1" cy="453.6" r="1.0" fill="#FFFFFF" opacity="0.73" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
            </circle>
            <circle cx="441.0" cy="215.5" r="0.6" fill="#FFFFFF" opacity="0.72">
            </circle>
            <circle cx="288.6" cy="302.9" r="1.0" fill="#FFFFFF" opacity="0.76">
            </circle>
            <circle cx="125.2" cy="544.5" r="1.3" fill="#FFFFFF" opacity="0.71" className="vga-tw" style={{ animationDelay: "-0.4s" }}>
            </circle>
            <circle cx="1193.1" cy="586.6" r="0.6" fill="#FFFFFF" opacity="0.72" className="vga-tw" style={{ animationDelay: "-2.2s" }}>
            </circle>
            <circle cx="750.2" cy="421.9" r="1.0" fill="#FFFFFF" opacity="0.83" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
            </circle>
            <circle cx="1215.7" cy="60.9" r="0.5" fill="#FFFFFF" opacity="0.43" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
            </circle>
            <circle cx="329.7" cy="253.8" r="0.7" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="939.2" cy="558.6" r="1.3" fill="#FFFFFF" opacity="0.57">
            </circle>
            <circle cx="1191.7" cy="550.7" r="0.7" fill="#FFFFFF" opacity="0.62">
            </circle>
            <circle cx="1529.0" cy="379.7" r="0.7" fill="#FFFFFF" opacity="0.58">
            </circle>
            <circle cx="1329.6" cy="23.5" r="0.8" fill="#FFFFFF" opacity="0.56">
            </circle>
            <circle cx="1041.3" cy="96.3" r="0.7" fill="#FFFFFF" opacity="0.59" className="vga-tw" style={{ animationDelay: "-0.9s" }}>
            </circle>
            <circle cx="683.8" cy="489.6" r="1.0" fill="#FFFFFF" opacity="0.91">
            </circle>
            <circle cx="1528.2" cy="20.9" r="0.7" fill="#FFFFFF" opacity="0.62" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
            </circle>
            <circle cx="921.0" cy="575.7" r="1.0" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="1302.1" cy="108.1" r="0.8" fill="#FFFFFF" opacity="0.94">
            </circle>
            <circle cx="688.4" cy="37.3" r="0.5" fill="#FFFFFF" opacity="0.58">
            </circle>
            <circle cx="91.4" cy="20.3" r="0.8" fill="#FFFFFF" opacity="0.56">
            </circle>
            <circle cx="1074.7" cy="583.4" r="0.7" fill="#FFFFFF" opacity="0.78" className="vga-tw" style={{ animationDelay: "-3.0s" }}>
            </circle>
            <circle cx="1201.9" cy="482.9" r="0.8" fill="#FFFFFF" opacity="0.68" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
            </circle>
            <circle cx="757.2" cy="86.6" r="1.3" fill="#FFFFFF" opacity="0.83" className="vga-tw" style={{ animationDelay: "-0.1s" }}>
            </circle>
            <circle cx="832.2" cy="124.1" r="1.3" fill="#FFFFFF" opacity="0.47">
            </circle>
            <circle cx="1564.7" cy="159.8" r="0.7" fill="#FFFFFF" opacity="0.61">
            </circle>
            <circle cx="1500.2" cy="322.4" r="0.7" fill="#FFFFFF" opacity="0.93" className="vga-tw" style={{ animationDelay: "-2.4s" }}>
            </circle>
            <circle cx="911.6" cy="536.2" r="0.6" fill="#FFFFFF" opacity="0.39">
            </circle>
            <circle cx="223.5" cy="551.3" r="1.3" fill="#FFFFFF" opacity="0.90">
            </circle>
            <circle cx="177.3" cy="492.2" r="0.5" fill="#FFFFFF" opacity="0.85">
            </circle>
            <circle cx="54.1" cy="283.7" r="1.3" fill="#FFFFFF" opacity="0.37">
            </circle>
            <circle cx="871.4" cy="251.0" r="1.3" fill="#FFFFFF" opacity="0.74">
            </circle>
            <circle cx="315.9" cy="437.3" r="1.3" fill="#FFFFFF" opacity="0.76">
            </circle>
            <circle cx="210.7" cy="497.1" r="0.8" fill="#FFFFFF" opacity="0.39">
            </circle>
            <circle cx="227.7" cy="580.5" r="0.5" fill="#FFFFFF" opacity="0.71">
            </circle>
            <circle cx="72.9" cy="451.2" r="0.8" fill="#FFFFFF" opacity="0.83">
            </circle>
            <circle cx="223.0" cy="474.1" r="0.7" fill="#FFFFFF" opacity="0.74">
            </circle>
            <circle cx="892.4" cy="580.5" r="0.5" fill="#FFFFFF" opacity="0.86" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
            </circle>
            <circle cx="1072.9" cy="364.1" r="0.6" fill="#FFFFFF" opacity="0.47">
            </circle>
            <circle cx="1273.0" cy="85.0" r="0.6" fill="#FFFFFF" opacity="0.84">
            </circle>
            <circle cx="177.5" cy="498.9" r="1.0" fill="#FFFFFF" opacity="0.47" className="vga-tw" style={{ animationDelay: "-2.0s" }}>
            </circle>
            <circle cx="1035.5" cy="357.4" r="0.6" fill="#FFFFFF" opacity="0.85">
            </circle>
            <circle cx="960.2" cy="489.7" r="1.3" fill="#FFFFFF" opacity="0.83">
            </circle>
            <circle cx="1204.7" cy="68.5" r="0.8" fill="#FFFFFF" opacity="0.56">
            </circle>
            <circle cx="801.3" cy="585.2" r="0.5" fill="#FFFFFF" opacity="0.78" className="vga-tw" style={{ animationDelay: "-1.9s" }}>
            </circle>
            <circle cx="680.2" cy="129.2" r="1.0" fill="#FFFFFF" opacity="0.68">
            </circle>
            <circle cx="61.3" cy="352.6" r="0.5" fill="#FFFFFF" opacity="0.82">
            </circle>
            <circle cx="244.2" cy="334.2" r="1.3" fill="#FFFFFF" opacity="0.37" className="vga-tw" style={{ animationDelay: "-2.5s" }}>
            </circle>
            <circle cx="260.9" cy="529.5" r="0.7" fill="#FFFFFF" opacity="0.79">
            </circle>
            <circle cx="1246.7" cy="200.9" r="0.5" fill="#FFFFFF" opacity="0.83">
            </circle>
            <circle cx="1263.5" cy="62.1" r="1.0" fill="#FFFFFF" opacity="0.75">
            </circle>
            <circle cx="1172.3" cy="103.7" r="1.3" fill="#FFFFFF" opacity="0.92" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
            </circle>
            <circle cx="1244.9" cy="412.3" r="0.5" fill="#FFFFFF" opacity="0.86">
            </circle>
            <circle cx="1046.8" cy="505.4" r="0.7" fill="#FFFFFF" opacity="0.92">
            </circle>
            <circle cx="1480.0" cy="85.6" r="0.7" fill="#FFFFFF" opacity="0.43">
            </circle>
            <circle cx="869.2" cy="355.4" r="1.0" fill="#FFFFFF" opacity="0.69">
            </circle>
            <circle cx="819.1" cy="401.7" r="0.6" fill="#FFFFFF" opacity="0.71">
            </circle>
            <circle cx="542.4" cy="91.4" r="0.5" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="877.8" cy="523.2" r="0.8" fill="#FFFFFF" opacity="0.56">
            </circle>
            <circle cx="1248.8" cy="395.7" r="0.5" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-1.8s" }}>
            </circle>
            <circle cx="364.0" cy="586.1" r="0.8" fill="#FFFFFF" opacity="0.89">
            </circle>
            <circle cx="963.9" cy="484.4" r="1.0" fill="#FFFFFF" opacity="0.77">
            </circle>
            <circle cx="1482.9" cy="579.0" r="1.3" fill="#FFFFFF" opacity="0.45">
            </circle>
            <circle cx="1573.1" cy="292.6" r="0.7" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="543.3" cy="323.3" r="1.0" fill="#FFFFFF" opacity="0.61">
            </circle>
            <circle cx="1195.3" cy="534.5" r="1.0" fill="#FFFFFF" opacity="0.82" className="vga-tw" style={{ animationDelay: "-0.2s" }}>
            </circle>
            <circle cx="184.7" cy="69.0" r="0.8" fill="#FFFFFF" opacity="0.52" className="vga-tw" style={{ animationDelay: "-0.5s" }}>
            </circle>
            <circle cx="1449.7" cy="216.2" r="0.7" fill="#FFFFFF" opacity="0.69">
            </circle>
            <circle cx="729.4" cy="436.3" r="1.0" fill="#FFFFFF" opacity="0.47">
            </circle>
            <circle cx="634.8" cy="356.3" r="1.0" fill="#FFFFFF" opacity="0.52">
            </circle>
            <circle cx="1235.6" cy="466.9" r="1.3" fill="#FFFFFF" opacity="0.73" className="vga-tw" style={{ animationDelay: "-1.4s" }}>
            </circle>
            <circle cx="633.9" cy="388.1" r="0.6" fill="#FFFFFF" opacity="0.64">
            </circle>
            <circle cx="1461.6" cy="504.8" r="0.8" fill="#FFFFFF" opacity="0.82">
            </circle>
            <circle cx="225.3" cy="425.2" r="1.3" fill="#FFFFFF" opacity="0.37">
            </circle>
            <circle cx="922.7" cy="65.1" r="0.8" fill="#FFFFFF" opacity="0.70">
            </circle>
            <circle cx="1290.3" cy="152.3" r="1.0" fill="#FFFFFF" opacity="0.64">
            </circle>
            <circle cx="1586.4" cy="250.6" r="0.6" fill="#FFFFFF" opacity="0.42">
            </circle>
            <circle cx="619.3" cy="0.9" r="0.8" fill="#FFFFFF" opacity="0.42">
            </circle>
            <circle cx="434.2" cy="158.4" r="0.6" fill="#FFFFFF" opacity="0.48" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
            </circle>
            <circle cx="822.7" cy="246.7" r="0.6" fill="#FFFFFF" opacity="0.60">
            </circle>
            <circle cx="1550.6" cy="478.9" r="0.6" fill="#FFFFFF" opacity="0.39" className="vga-tw" style={{ animationDelay: "-0.5s" }}>
            </circle>
            <circle cx="62.2" cy="341.4" r="1.0" fill="#FFFFFF" opacity="0.60">
            </circle>
            <circle cx="774.7" cy="374.1" r="0.5" fill="#FFFFFF" opacity="0.88">
            </circle>
            <circle cx="97.0" cy="538.9" r="0.5" fill="#FFFFFF" opacity="0.41">
            </circle>
            <circle cx="134.2" cy="147.5" r="0.6" fill="#FFFFFF" opacity="0.86">
            </circle>
            <circle cx="704.4" cy="158.7" r="0.8" fill="#FFFFFF" opacity="0.65">
            </circle>
            <circle cx="73.5" cy="27.0" r="1.3" fill="#FFFFFF" opacity="0.45">
            </circle>
            <circle cx="1316.5" cy="282.9" r="0.5" fill="#FFFFFF" opacity="0.69">
            </circle>
            <circle cx="973.3" cy="394.2" r="0.7" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="877.9" cy="396.4" r="1.0" fill="#FFFFFF" opacity="0.86">
            </circle>
            <circle cx="779.6" cy="52.1" r="0.7" fill="#FFFFFF" opacity="0.86">
            </circle>
            <circle cx="503.4" cy="580.1" r="1.0" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="1206.7" cy="250.3" r="1.3" fill="#FFFFFF" opacity="0.89" className="vga-tw" style={{ animationDelay: "-2.6s" }}>
            </circle>
            <circle cx="634.8" cy="340.4" r="1.3" fill="#FFFFFF" opacity="0.59">
            </circle>
            <circle cx="927.9" cy="534.4" r="0.6" fill="#FFFFFF" opacity="0.48">
            </circle>
            <circle cx="176.4" cy="53.6" r="1.0" fill="#FFFFFF" opacity="0.75">
            </circle>
            <circle cx="121.4" cy="489.5" r="1.0" fill="#FFFFFF" opacity="0.83">
            </circle>
            <circle cx="51.4" cy="480.1" r="0.6" fill="#FFFFFF" opacity="0.67">
            </circle>
            <circle cx="1129.5" cy="582.6" r="1.0" fill="#FFFFFF" opacity="0.51" className="vga-tw" style={{ animationDelay: "-1.0s" }}>
            </circle>
            <circle cx="1375.7" cy="464.2" r="0.6" fill="#FFFFFF" opacity="0.84">
            </circle>
            <circle cx="1146.3" cy="560.9" r="0.8" fill="#FFFFFF" opacity="0.45">
            </circle>
            <circle cx="39.2" cy="114.1" r="1.0" fill="#FFFFFF" opacity="0.61">
            </circle>
            <circle cx="1457.9" cy="87.5" r="0.5" fill="#FFFFFF" opacity="0.70">
            </circle>
            <circle cx="1150.8" cy="112.1" r="1.0" fill="#FFFFFF" opacity="0.84">
            </circle>
            <circle cx="866.9" cy="44.5" r="0.8" fill="#FFFFFF" opacity="0.56">
            </circle>
            <circle cx="892.4" cy="248.9" r="0.5" fill="#FFFFFF" opacity="0.80">
            </circle>
            <circle cx="1538.1" cy="404.9" r="0.7" fill="#FFFFFF" opacity="0.87">
            </circle>
            <circle cx="566.0" cy="399.1" r="0.7" fill="#FFFFFF" opacity="0.88">
            </circle>
            <circle cx="321.0" cy="98.5" r="0.5" fill="#FFFFFF" opacity="0.93" className="vga-tw" style={{ animationDelay: "-2.9s" }}>
            </circle>
            <circle cx="126.2" cy="42.7" r="0.5" fill="#FFFFFF" opacity="0.47">
            </circle>
            <circle cx="549.8" cy="189.9" r="1.3" fill="#FFFFFF" opacity="0.42">
            </circle>
            <circle cx="206.1" cy="147.0" r="0.8" fill="#FFFFFF" opacity="0.44">
            </circle>
            <circle cx="436.2" cy="187.4" r="0.8" fill="#FFFFFF" opacity="0.90">
            </circle>
            <circle cx="946.7" cy="428.6" r="1.0" fill="#FFFFFF" opacity="0.69">
            </circle>
            <circle cx="964.7" cy="106.8" r="1.0" fill="#FFFFFF" opacity="0.78">
            </circle>
            <circle cx="630.9" cy="446.7" r="0.7" fill="#FFFFFF" opacity="0.94" className="vga-tw" style={{ animationDelay: "-0.0s" }}>
            </circle>
            <circle cx="197.1" cy="410.4" r="0.5" fill="#FFFFFF" opacity="0.71">
            </circle>
            <circle cx="3.9" cy="511.7" r="0.6" fill="#FFFFFF" opacity="0.36">
            </circle>
            <circle cx="1598.9" cy="433.1" r="0.8" fill="#FFFFFF" opacity="0.54">
            </circle>
            <circle cx="1202.7" cy="380.1" r="0.8" fill="#FFFFFF" opacity="0.50">
            </circle>
            <circle cx="335.9" cy="233.8" r="1.3" fill="#FFFFFF" opacity="0.60">
            </circle>
            <circle cx="370.3" cy="69.2" r="1.3" fill="#FFFFFF" opacity="0.60">
            </circle>
            <circle cx="1468.5" cy="228.8" r="0.8" fill="#FFFFFF" opacity="0.73" className="vga-tw" style={{ animationDelay: "-2.9s" }}>
            </circle>
            <circle cx="1592.0" cy="446.3" r="0.6" fill="#FFFFFF" opacity="0.77" className="vga-tw" style={{ animationDelay: "-0.8s" }}>
            </circle>
            <circle cx="378.9" cy="12.9" r="1.3" fill="#FFFFFF" opacity="0.71">
            </circle>
            <circle cx="182.5" cy="339.4" r="0.8" fill="#FFFFFF" opacity="0.52" className="vga-tw" style={{ animationDelay: "-0.7s" }}>
            </circle>
            <circle cx="1361.3" cy="291.6" r="1.3" fill="#FFFFFF" opacity="0.35">
            </circle>
            <circle cx="741.6" cy="297.2" r="0.5" fill="#FFFFFF" opacity="0.40">
            </circle>
            <circle cx="1416.1" cy="405.9" r="0.7" fill="#FFFFFF" opacity="0.68" className="vga-tw" style={{ animationDelay: "-2.1s" }}>
            </circle>
            <circle cx="182.3" cy="565.5" r="1.3" fill="#FFFFFF" opacity="0.74">
            </circle>
            <circle cx="820.7" cy="552.9" r="1.3" fill="#FFFFFF" opacity="0.90">
            </circle>
            <circle cx="565.5" cy="279.1" r="1.0" fill="#FFFFFF" opacity="0.55">
            </circle>
            <circle cx="547.6" cy="469.9" r="1.3" fill="#FFFFFF" opacity="0.57">
            </circle>
            <circle cx="372.4" cy="223.3" r="0.8" fill="#FFFFFF" opacity="0.93">
            </circle>
            <circle cx="356.4" cy="9.4" r="0.5" fill="#FFFFFF" opacity="0.66">
            </circle>
          </g>
          <g mask="url(#vga-mask-hero)" opacity=".9">
            <g className="vga-s2" filter="url(#vga-blur-hero)">
              <path d="M -200 18 L -175 15 L -150 11 L -125 6 L -100 1 L -75 -5 L -50 -12 L -25 -19 L 0 -26 L 25 -32 L 50 -39 L 75 -44 L 100 -49 L 125 -53 L 150 -56 L 175 -58 L 200 -59 L 225 -58 L 250 -57 L 275 -54 L 300 -50 L 325 -44 L 350 -38 L 375 -31 L 400 -23 L 425 -15 L 450 -6 L 475 3 L 500 12 L 525 20 L 550 28 L 575 36 L 600 43 L 625 48 L 650 53 L 675 57 L 700 59 L 725 60 L 750 60 L 775 59 L 800 57 L 825 53 L 850 49 L 875 43 L 900 37 L 925 31 L 950 24 L 975 17 L 1000 10 L 1025 4 L 1050 -2 L 1075 -7 L 1100 -12 L 1125 -15 L 1150 -18 L 1175 -19 L 1200 -19 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -8 L 1325 -2 L 1350 5 L 1375 12 L 1400 20 L 1425 29 L 1450 38 L 1475 47 L 1500 55 L 1525 64 L 1550 72 L 1575 79 L 1600 85 L 1625 90 L 1650 95 L 1675 98 L 1700 99 L 1725 100 L 1750 99 L 1775 98 L 1800 95 L 1800 278 L 1775 282 L 1750 288 L 1725 296 L 1700 306 L 1675 317 L 1650 329 L 1625 340 L 1600 352 L 1575 362 L 1550 372 L 1525 379 L 1500 385 L 1475 389 L 1450 390 L 1425 389 L 1400 386 L 1375 380 L 1350 373 L 1325 364 L 1300 354 L 1275 343 L 1250 332 L 1225 321 L 1200 311 L 1175 302 L 1150 294 L 1125 289 L 1100 285 L 1075 283 L 1050 283 L 1025 286 L 1000 291 L 975 297 L 950 305 L 925 314 L 900 323 L 875 332 L 850 342 L 825 350 L 800 357 L 775 363 L 750 366 L 725 368 L 700 367 L 675 363 L 650 357 L 625 349 L 600 340 L 575 328 L 550 315 L 525 301 L 500 287 L 475 274 L 450 261 L 425 248 L 400 238 L 375 229 L 350 223 L 325 219 L 300 217 L 275 218 L 250 221 L 225 226 L 200 234 L 175 242 L 150 252 L 125 262 L 100 273 L 75 283 L 50 292 L 25 300 L 0 307 L -25 311 L -50 314 L -75 314 L -100 312 L -125 308 L -150 302 L -175 294 L -200 285 Z" fill="url(#vga-g2-hero)">
              </path>
            </g>
            <g className="vga-s1" filter="url(#vga-blur-hero)">
              <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-hero)">
              </path>
            </g>
            <g className="vga-s3" filter="url(#vga-blur-hero)">
              <path d="M -200 270 L -175 261 L -150 252 L -125 245 L -100 239 L -75 235 L -50 233 L -25 233 L 0 236 L 25 241 L 50 247 L 75 255 L 100 263 L 125 272 L 150 280 L 175 287 L 200 293 L 225 297 L 250 299 L 275 298 L 300 296 L 325 291 L 350 284 L 375 276 L 400 267 L 425 258 L 450 248 L 475 239 L 500 232 L 525 226 L 550 222 L 575 221 L 600 221 L 625 224 L 650 229 L 675 235 L 700 243 L 725 251 L 750 260 L 775 268 L 800 275 L 825 281 L 850 284 L 875 286 L 900 286 L 925 283 L 950 278 L 975 271 L 1000 263 L 1025 254 L 1050 245 L 1075 235 L 1100 227 L 1125 219 L 1150 213 L 1175 210 L 1200 208 L 1225 209 L 1250 212 L 1275 216 L 1300 223 L 1325 231 L 1350 239 L 1375 247 L 1400 256 L 1425 263 L 1450 268 L 1475 272 L 1500 274 L 1525 273 L 1550 270 L 1575 265 L 1600 259 L 1625 250 L 1650 241 L 1675 232 L 1700 222 L 1725 214 L 1750 206 L 1775 201 L 1800 197 L 1800 487 L 1775 494 L 1750 498 L 1725 498 L 1700 495 L 1675 487 L 1650 477 L 1625 465 L 1600 453 L 1575 442 L 1550 433 L 1525 428 L 1500 427 L 1475 430 L 1450 437 L 1425 449 L 1400 462 L 1375 478 L 1350 493 L 1325 507 L 1300 518 L 1275 526 L 1250 530 L 1225 529 L 1200 524 L 1175 515 L 1150 504 L 1125 492 L 1100 481 L 1075 470 L 1050 463 L 1025 459 L 1000 459 L 975 463 L 950 470 L 925 480 L 900 492 L 875 503 L 850 514 L 825 522 L 800 527 L 775 528 L 750 524 L 725 517 L 700 506 L 675 493 L 650 480 L 625 466 L 600 455 L 575 446 L 550 442 L 525 442 L 500 446 L 475 455 L 450 467 L 425 480 L 400 495 L 375 509 L 350 522 L 325 531 L 300 536 L 275 537 L 250 535 L 225 528 L 200 519 L 175 509 L 150 498 L 125 489 L 100 482 L 75 478 L 50 478 L 25 482 L 0 490 L -25 500 L -50 513 L -75 526 L -100 538 L -125 548 L -150 555 L -175 558 L -200 557 Z" fill="url(#vga-g3-hero)">
              </path>
            </g>
          </g>
          <g filter="url(#vga-blur2-hero)" opacity=".45">
            <path d="M -200 133 L -175 143 L -150 153 L -125 162 L -100 170 L -75 176 L -50 180 L -25 182 L 0 181 L 25 178 L 50 173 L 75 165 L 100 155 L 125 144 L 150 132 L 175 119 L 200 105 L 225 91 L 250 78 L 275 66 L 300 55 L 325 46 L 350 39 L 375 34 L 400 31 L 425 31 L 450 33 L 475 37 L 500 43 L 525 51 L 550 61 L 575 71 L 600 82 L 625 92 L 650 103 L 675 112 L 700 120 L 725 126 L 750 131 L 775 133 L 800 133 L 825 131 L 850 126 L 875 119 L 900 110 L 925 99 L 950 87 L 975 74 L 1000 60 L 1025 46 L 1050 33 L 1075 20 L 1100 9 L 1125 -1 L 1150 -8 L 1175 -14 L 1200 -17 L 1225 -18 L 1250 -16 L 1275 -12 L 1300 -7 L 1325 1 L 1350 10 L 1375 20 L 1400 31 L 1425 41 L 1450 52 L 1475 61 L 1500 70 L 1525 77 L 1550 82 L 1575 84 L 1600 85 L 1625 83 L 1650 79 L 1675 72 L 1700 64 L 1725 53 L 1750 41 L 1775 28 L 1800 15 L 1800 349 L 1775 335 L 1750 324 L 1725 315 L 1700 309 L 1675 308 L 1650 310 L 1625 317 L 1600 327 L 1575 341 L 1550 357 L 1525 375 L 1500 393 L 1475 410 L 1450 426 L 1425 438 L 1400 447 L 1375 452 L 1350 452 L 1325 448 L 1300 440 L 1275 427 L 1250 412 L 1225 394 L 1200 376 L 1175 357 L 1150 340 L 1125 325 L 1100 313 L 1075 305 L 1050 302 L 1025 303 L 1000 309 L 975 320 L 950 333 L 925 350 L 900 369 L 875 388 L 850 407 L 825 424 L 800 439 L 775 451 L 750 459 L 725 462 L 700 462 L 675 457 L 650 449 L 625 438 L 600 425 L 575 412 L 550 398 L 525 386 L 500 377 L 475 371 L 450 368 L 425 370 L 400 376 L 375 386 L 350 400 L 325 417 L 300 436 L 275 457 L 250 477 L 225 496 L 200 512 L 175 526 L 150 535 L 125 540 L 100 540 L 75 536 L 50 527 L 25 514 L 0 499 L -25 481 L -50 463 L -75 445 L -100 428 L -125 414 L -150 404 L -175 397 L -200 394 Z" fill="url(#vga-g1-hero)">
            </path>
          </g>
          <path d="M -40 1000 L -40 656 L 18 677 L 50 678 L 99 698 L 141 698 L 193 698 L 238 660 L 265 681 L 323 662 L 371 663 L 408 623 L 446 580 L 476 551 L 516 550 L 543 550 L 595 550 L 650 568 L 697 551 L 735 595 L 761 619 L 820 605 L 848 550 L 899 550 L 928 555 L 981 550 L 1041 588 L 1074 617 L 1128 561 L 1153 550 L 1179 550 L 1225 550 L 1250 582 L 1274 553 L 1312 606 L 1357 550 L 1385 614 L 1424 638 L 1463 661 L 1503 647 L 1556 642 L 1583 605 L 1613 642 L 1658 656 L 1660 1000 Z" fill="url(#vga-mf-hero)">
          </path>
          <path d="M -40 1000 L -40 698 L 10 685 L 68 652 L 106 679 L 174 668 L 254 673 L 299 647 L 355 629 L 389 650 L 445 628 L 494 628 L 556 657 L 627 665 L 659 653 L 709 655 L 760 636 L 791 628 L 824 656 L 868 655 L 908 628 L 970 635 L 1050 632 L 1089 646 L 1129 628 L 1177 651 L 1233 677 L 1286 678 L 1352 676 L 1419 694 L 1480 706 L 1529 695 L 1584 664 L 1617 647 L 1654 636 L 1660 1000 Z" fill="#0A1328">
          </path>
          <rect x="0" y="714" width="1600" height="300" fill="url(#vga-lake-hero)">
          </rect>
          <rect x="0" y="714" width="1600" height="180" fill="url(#vga-refl-hero)">
          </rect>
          <g className="vga-rip">
            <rect x="130" y="720" width="84" height="1" fill="#9EF5D2" opacity="0.15">
            </rect>
            <rect x="920" y="733" width="214" height="1" fill="#9EF5D2" opacity="0.13">
            </rect>
            <rect x="1236" y="745" width="149" height="1" fill="#9EF5D2" opacity="0.16">
            </rect>
            <rect x="390" y="758" width="325" height="1" fill="#9EF5D2" opacity="0.11">
            </rect>
            <rect x="1004" y="771" width="102" height="1" fill="#9EF5D2" opacity="0.14">
            </rect>
            <rect x="903" y="784" width="304" height="1" fill="#9EF5D2" opacity="0.06">
            </rect>
            <rect x="413" y="796" width="280" height="1" fill="#9EF5D2" opacity="0.07">
            </rect>
            <rect x="476" y="809" width="321" height="1" fill="#9EF5D2" opacity="0.13">
            </rect>
            <rect x="1070" y="822" width="101" height="1" fill="#9EF5D2" opacity="0.05">
            </rect>
            <rect x="1174" y="835" width="239" height="1" fill="#9EF5D2" opacity="0.08">
            </rect>
            <rect x="733" y="847" width="204" height="1" fill="#9EF5D2" opacity="0.06">
            </rect>
            <rect x="507" y="860" width="110" height="1" fill="#9EF5D2" opacity="0.11">
            </rect>
            <rect x="1444" y="873" width="179" height="1" fill="#9EF5D2" opacity="0.10">
            </rect>
            <rect x="1047" y="885" width="155" height="1" fill="#9EF5D2" opacity="0.16">
            </rect>
            <rect x="550" y="898" width="266" height="1" fill="#9EF5D2" opacity="0.07">
            </rect>
            <rect x="299" y="911" width="283" height="1" fill="#9EF5D2" opacity="0.09">
            </rect>
            <rect x="669" y="924" width="133" height="1" fill="#9EF5D2" opacity="0.06">
            </rect>
            <rect x="690" y="936" width="234" height="1" fill="#9EF5D2" opacity="0.08">
            </rect>
            <rect x="1370" y="949" width="231" height="1" fill="#9EF5D2" opacity="0.10">
            </rect>
            <rect x="131" y="962" width="270" height="1" fill="#9EF5D2" opacity="0.14">
            </rect>
            <rect x="467" y="975" width="304" height="1" fill="#9EF5D2" opacity="0.06">
            </rect>
            <rect x="477" y="987" width="80" height="1" fill="#9EF5D2" opacity="0.10">
            </rect>
          </g>
        </svg>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.15) 35%, rgba(3,5,14,0) 55%, rgba(3,5,14,.75) 100%)" }}>
        </div>
        <div style={{ position: "relative", zIndex: "1", maxWidth: "1200px", margin: "0 auto", padding: "166px 32px 0", textAlign: "center" }} data-s="s11">
          <div className="vg-heroout">
            <a href="#" className="vg-hero" style={{ animationDelay: ".05s", display: "inline-flex", alignItems: "center", gap: "10px", padding: "5px 14px 5px 5px", border: "1px solid rgba(255,255,255,.16)", borderRadius: "999px", background: "rgba(255,255,255,.06)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", textDecoration: "none", fontSize: "14px", color: "#DDE0EE" }} data-s="s1">
              <span style={{ padding: "3px 10px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", fontSize: "12px", fontWeight: "500" }} data-s="s1">
                {"New"}
              </span>
              {"An AI voice agent with a long memory →"}
            </a>
            <h1 className="vg-hero" style={{ animationDelay: ".15s", margin: "28px auto 0", maxWidth: "1000px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "400", letterSpacing: "-0.045em", fontSize: "76px", lineHeight: "1.04", color: "#FFFFFF", textShadow: "0 2px 30px rgba(3,5,14,.5)" }}>
              {"Never miss a customer."}
              <br />
              <span style={{ color: "#A9AECB" }}>
                {"Never forget one either."}
              </span>
            </h1>
            <p className="vg-hero" style={{ animationDelay: ".3s", margin: "24px auto 0", maxWidth: "640px", fontSize: "19px", color: "#C9CCDD" }} data-s="s15">
              {"Vegham is an AI voice agent that answers your calls and messages, speaks your customers’ language, and remembers every person it talks to, even months later."}
            </p>
            <div className="vg-hero" style={{ animationDelay: ".42s", marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/signup/" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FFFFFF", color: "#12141F", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                {"Start free"}
              </Link>
              <a href="#" aria-label="Play a 42-second sample call" style={{ display: "inline-flex", alignItems: "center", gap: "12px", height: "52px", padding: "0 20px 0 6px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.25)", background: "rgba(255,255,255,.06)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", color: "#FFFFFF", textDecoration: "none", fontWeight: "500" }} data-s="s1">
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#FFFFFF", color: "#12141F", display: "inline-flex", alignItems: "center", justifyContent: "center" }} data-s="s2">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none">
                    </path>
                  </svg>
                </span>
                {"Hear a sample call"}
                <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "22px" }}>
                  <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.00s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.12s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.24s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.36s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.48s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.60s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.72s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.00s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "20px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.12s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.24s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.36s" }}>
                  </span>
                  <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#FFFFFF", animationDelay: "0.48s" }}>
                  </span>
                </span>
                <span style={{ fontSize: "13px", color: "#C9CCDD", fontVariantNumeric: "tabular-nums" }}>
                  {"0:42"}
                </span>
              </a>
            </div>
            <div className="vg-hero" style={{ animationDelay: ".54s", marginTop: "22px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 24px", fontSize: "14px", color: "#A9AECB" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3DD68C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5">
                  </path>
                </svg>
                {"Calls and chat, day and night"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3DD68C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5">
                  </path>
                </svg>
                {"Remembers people for months"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3DD68C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5">
                  </path>
                </svg>
                {"Live in minutes"}
              </span>
            </div>
          </div>
          <div className="vg-mockin">
            <div className="vg-hero vg-mockframe" style={{ animationDelay: ".7s", position: "relative", margin: "64px auto 0", maxWidth: "1100px", height: "372px", borderRadius: "20px 20px 0 0", overflow: "hidden", background: "#FFFFFF", border: "1px solid rgba(255,255,255,.2)", borderBottom: "0", boxShadow: "0 -30px 90px -30px rgba(45,227,160,.35), 0 -10px 40px -20px rgba(0,0,0,.6)" }}>
              <div className="vg-mock" style={{ display: "flex", textAlign: "left", color: "#1F1F1F", fontSize: "14px", lineHeight: "1.45", height: "100%" }}>
                <div className="vg-mock-side" style={{ width: "190px", flex: "none", background: "#FAFAFB", borderRight: "1px solid #EDEDF0", padding: "18px 12px", display: "flex", flexDirection: "column", gap: "4px", color: "#5C5C5C" }}>
                  <span style={{ padding: "0 10px 14px", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "20px", letterSpacing: "-0.045em", color: "transparent", background: "linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                    {"vegham"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px" }}>
                    {"Home"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px", background: "#F1F1F4", color: "#16182A", fontWeight: "500" }}>
                    {"Conversations"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px" }}>
                    {"People"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px" }}>
                    {"Follow-ups"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px" }}>
                    {"Insights"}
                  </span>
                  <span style={{ padding: "7px 10px", borderRadius: "12px" }}>
                    {"Your agent"}
                  </span>
                </div>
                <div style={{ flex: "1", minWidth: "0", padding: "18px 22px", display: "flex", flexDirection: "column", gap: "10px", background: "#FFFFFF" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid #F0F0F3" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F1F4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "13px" }}>
                        {"R"}
                      </span>
                      <span>
                        <b style={{ fontWeight: "600" }}>
                          {"Rohan Mehta"}
                        </b>
                        <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                          {"Phone call · 0:38"}
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", border: "1px solid rgba(16,185,129,.45)", color: "#0B8F63", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }} data-s="s1">
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }}>
                      </span>
                      {"Returning caller"}
                    </span>
                  </span>
                  <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                    {"Hi Rohan, good to hear from you again. Still looking at weekend sessions?"}
                  </span>
                  <span style={{ alignSelf: "flex-end", maxWidth: "72%", background: "#F3F3F5", padding: "9px 13px", borderRadius: "16px 16px 4px 16px" }}>
                    {"Yes! You remembered. Is Saturday morning open?"}
                  </span>
                  <span style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#16182A", color: "#FFFFFF", padding: "9px 13px", borderRadius: "16px 16px 16px 4px" }}>
                    {"Saturday 10 AM is free. Shall I hold it and send the details on WhatsApp, like last time?"}
                  </span>
                  <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: "1px solid #F0F0F3", fontSize: "12.5px", color: "#8A8A8A" }}>
                    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "22px" }}>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "14px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "11px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "15px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "20px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "17px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "8px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "19px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "12px", borderRadius: "2px", background: "#10B981", animationDelay: "0.12s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#10B981", animationDelay: "0.24s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#10B981", animationDelay: "0.36s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#10B981", animationDelay: "0.48s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "5px", borderRadius: "2px", background: "#10B981", animationDelay: "0.60s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#10B981", animationDelay: "0.72s" }}>
                      </span>
                      <span className="vg-wave" style={{ width: "3px", height: "18px", borderRadius: "2px", background: "#10B981", animationDelay: "0.00s" }}>
                      </span>
                    </span>
                    <span>
                      {"Vegham is on the call"}
                    </span>
                  </span>
                </div>
                <div className="vg-mock-mem" style={{ width: "300px", flex: "none", borderLeft: "1px solid #EDEDF0", padding: "18px 20px", background: "#FCFCFD" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
                    <b style={{ fontWeight: "600", fontSize: "13.5px" }}>
                      {"What Vegham remembers"}
                    </b>
                    <span style={{ fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A3A3A3" }}>
                      {"Sample"}
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ flex: "none", marginTop: "1px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.5">
                        </circle>
                        <path d="M12 7.5V12l3 2">
                        </path>
                      </svg>
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#1F1F1F" }}>
                        {"First called in May"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                        {"6 months ago · phone"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ flex: "none", marginTop: "1px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8.5" r="3.5">
                        </circle>
                        <path d="M5 20a7 7 0 0 1 14 0">
                        </path>
                      </svg>
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#1F1F1F" }}>
                        {"Prefers Saturday mornings"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                        {"Said so twice"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ flex: "none", marginTop: "1px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.5">
                        </circle>
                        <path d="M3.5 12h17">
                        </path>
                        <path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#1F1F1F" }}>
                        {"Speaks Hindi and English"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                        {"Switches between both"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ flex: "none", marginTop: "1px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z">
                        </path>
                      </svg>
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#1F1F1F" }}>
                        {"Likes details on WhatsApp"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                        {"Same number as his calls"}
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #F0F0F3" }}>
                    <span style={{ flex: "none", marginTop: "1px", color: "#10B981" }}>
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z">
                        </path>
                        <path d="M9.5 21h5">
                        </path>
                      </svg>
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "13.5px", color: "#1F1F1F" }}>
                        {"Asked about weekend sessions"}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#8A8A8A" }}>
                        {"Left unfinished in July"}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
