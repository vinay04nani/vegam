import type { Metadata } from "next";
import { contactCards, links } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlyphField } from "@/components/contact/GlyphField";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact us · Vegam",
  description: "Book a demo, ask about pricing or partnerships, or get help from the Vegam team.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-[#FAFAFB] lg:flex-row">
      <aside className="relative isolate flex min-h-[340px] flex-col overflow-hidden bg-[radial-gradient(70%_60%_at_50%_45%,#24162a_0%,#120e18_70%,#0c0a10_100%)] p-[clamp(24px,3.5vw,64px)] lg:sticky lg:top-0 lg:h-svh lg:w-[40%]">
        <GlyphField className="absolute inset-0 -z-10" />
        <a href={links.home} className="text-[26px] leading-none font-extrabold tracking-[-0.045em] text-white/90">
          vegam
        </a>
        <h1 className="m-0 mt-10 font-serif text-[clamp(44px,4.6vw,72px)] leading-none font-normal tracking-[-0.03em] text-white">Contact us</h1>
        <p className="m-0 mt-4 max-w-[380px] text-[17px] text-white/70">
          Book a demo, ask about pricing or partnerships. Tell us a little about you and we’ll get back to you.
        </p>
        <div className="mt-auto grid grid-cols-3 gap-3 pt-10">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex min-h-[120px] flex-col justify-between rounded-[18px] bg-white/95 p-4 text-ink shadow-[0_20px_50px_rgb(0_0_0/0.35)] transition hover:-translate-y-1 hover:bg-white sm:min-h-[150px] sm:p-5"
            >
              <Icon name={c.icon} size={24} className="text-[#B4500A]" />
              <span className="flex items-end justify-between gap-2 text-[15px] leading-snug font-medium sm:text-[17px]">
                {c.label}
                <Icon name="arrow" size={16} className="mb-0.5 flex-none text-subtle transition group-hover:text-ink" />
              </span>
            </a>
          ))}
        </div>
      </aside>

      <main className="flex flex-1 flex-col px-5 py-10 sm:px-[clamp(24px,5vw,80px)] lg:py-16">
        <div className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
