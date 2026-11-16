// Ported from design board LandingV2 (header and mobile menu) by design/tools/port.py. Sample data is inline.
import Link from "next/link";
import type { CSSProperties } from "react";

export default function SiteHeader() {
  return (
    <>
      <div aria-hidden="true" className="vg-bar" style={{ position: "fixed", left: "0", top: "0", zIndex: "50", width: "100%", height: "3px", background: "linear-gradient(90deg, #10B981 0%, #0EA5A4 35%, #3B6CF6 70%, #7C3AED 100%)", transform: "scaleX(0)", transformOrigin: "left" }}>
      </div>
      <header style={{ position: "sticky", top: "0", zIndex: "40", padding: "0 16px", marginBottom: "-78px" }}>
        <div className="vg-hdr-in vg-hdr-dark" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", border: "1px solid transparent", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }} data-s="s11">
          <span style={{ flex: "1 1 0", fontFamily: "var(--font-tight), sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.045em", color: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text", backgroundImage: "linear-gradient(100deg, #FFFFFF 80%, #DB2777 100%)", WebkitTextFillColor: "transparent" }}>
            <Link href="/" aria-label="Vegham home page" style={{ color: "inherit", textDecoration: "none" }}>
              {"vegham"}
            </Link>
          </span>
          <nav aria-label="Site" style={{ display: "flex", flexWrap: "wrap", gap: "32px", fontSize: "15px", color: "#D4D7E6" }}>
            <Link href="/product/" style={{ position: "relative", textDecoration: "none" }}>
              {"Product"}
              <span aria-hidden="true" className="vg-navline" style={{ position: "absolute", left: "0", right: "0", bottom: "-6px", height: "1.5px", background: "#FFFFFF", opacity: "0", "--tl": "--vg-sec-product" } as CSSProperties}>
              </span>
            </Link>
            <Link href="/how-it-works/" style={{ position: "relative", textDecoration: "none" }}>
              {"How it works"}
              <span aria-hidden="true" className="vg-navline" style={{ position: "absolute", left: "0", right: "0", bottom: "-6px", height: "1.5px", background: "#FFFFFF", opacity: "0", "--tl": "--vg-sec-how" } as CSSProperties}>
              </span>
            </Link>
            <Link href="/pricing/" style={{ position: "relative", textDecoration: "none" }}>
              {"Pricing"}
              <span aria-hidden="true" className="vg-navline" style={{ position: "absolute", left: "0", right: "0", bottom: "-6px", height: "1.5px", background: "#FFFFFF", opacity: "0", "--tl": "--vg-sec-pricing" } as CSSProperties}>
              </span>
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
            <svg className="vg-sky" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
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
    </>
  );
}
