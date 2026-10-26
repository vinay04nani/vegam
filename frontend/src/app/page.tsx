import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Languages } from "@/components/sections/Languages";
import { Navbar } from "@/components/sections/Navbar";
import { Plans } from "@/components/sections/Plans";
import { Trust } from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="text-lg leading-[1.55]">
        <Hero />
        <Features />
        <Languages />
        <Trust />
        <Plans />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
