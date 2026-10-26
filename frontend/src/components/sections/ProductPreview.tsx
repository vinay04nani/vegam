import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Bubble, Chip, Phone } from "@/components/phone/Phone";
import { VegamMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";

// Two phone screens that show the product at a glance: what a customer sees
// on WhatsApp, and the report the owner gets each morning. Built in code (not
// screenshots) so the text stays sharp, translatable and easy to edit. The
// business, times and numbers are a labelled sample.

const business = "Nila & Co";

function CustomerChat() {
  return (
    <Phone
      time="9:41"
      title={business}
      status="AI assistant · replies instantly"
      avatar={<span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo text-[15px] font-bold text-white">N</span>}
    >
      <Chip>Today</Chip>
      <Bubble from="me" time="9:41 PM">
        Hi, are you open tomorrow? I’d like to come in around 6.
      </Bubble>
      <Bubble from="them" time="9:41 PM">
        Hi! I’m {business}’s AI assistant. 6:00 PM is taken, but <strong className="font-semibold">6:30 PM</strong> is free. Shall I book it for you?
      </Bubble>
      <Bubble from="me" time="9:42 PM">
        Yes, 6:30 works
      </Bubble>
      <Bubble from="them" time="9:42 PM">
        <span className="mb-1.5 flex items-center gap-2 rounded-[10px] bg-[#F1F7F2] px-2.5 py-2">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-success text-white">
            <Icon name="check" size={16} strokeWidth={2.6} className="[&_circle]:hidden" />
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-[14px] font-semibold">Booked</strong>
            <span className="text-[12.5px] text-subtle">Tomorrow · 6:30 PM</span>
          </span>
        </span>
        You’re all set. I’ll send a reminder tomorrow morning. Reply here any time to change it.
      </Bubble>
      <span className="mt-auto flex items-center gap-2 self-center rounded-full bg-white/90 px-3 py-1 text-[11.5px] text-subtle">
        <Icon name="sun" size={12} />
        Booked after hours, no staff needed
      </span>
    </Phone>
  );
}

function Stat({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="flex items-baseline gap-2.5 border-t border-line py-1.5 first:border-t-0">
      <span className="w-6 text-right text-[17px] font-bold text-ink">{value}</span>
      <span className="flex flex-col leading-tight">
        <span className="font-semibold text-ink">{label}</span>
        <span className="text-[12.5px] text-subtle">{note}</span>
      </span>
    </div>
  );
}

function MorningReport() {
  return (
    <Phone
      time="8:00"
      title="Vegam"
      status={`Your assistant at ${business}`}
      avatar={
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-accent">
          <VegamMark size={22} strokeWidth={9} />
        </span>
      }
    >
      <Bubble from="them" time="8:00 AM">
        <strong className="font-semibold">Good morning. Here’s yesterday:</strong>
        <span className="mt-1.5 block rounded-[10px] bg-panel px-2.5 py-1">
          <Stat value="14" label="Enquiries" note="All replied within seconds" />
          <Stat value="6" label="New bookings" note="2 made after closing time" />
          <Stat value="2" label="Missed calls" note="Both sent a WhatsApp" />
        </span>
        <span className="mt-2 block">
          <strong className="font-semibold text-warning">Needs you:</strong> 1 customer asked about a refund.
        </span>
      </Bubble>
      <Bubble from="me" time="8:03 AM">
        Block Friday afternoon
      </Bubble>
      <Bubble from="them" time="8:03 AM">
        Done. Friday 2–6 PM is blocked.
      </Bubble>
    </Phone>
  );
}

function Label({ step, children }: { step: string; children: ReactNode }) {
  return (
    <p className="m-0 flex items-center gap-2.5 text-[15px] font-semibold text-ink">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[12px] text-white">{step}</span>
      {children}
    </p>
  );
}

export function ProductPreview() {
  return (
    <section id="product" aria-label="Sample conversations" className="w-full scroll-mt-24">
      <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pt-2 pb-16 md:mx-0 md:justify-center md:gap-12 md:overflow-visible md:px-0 md:pb-8 [&::-webkit-scrollbar]:hidden">
        <Reveal className="flex snap-center flex-col items-center gap-4">
          <Label step="1">Your customer, at 9:41 PM</Label>
          <CustomerChat />
        </Reveal>
        <Reveal delay={150} className="flex snap-center flex-col items-center gap-4 md:mt-16">
          <Label step="2">You, the next morning</Label>
          <MorningReport />
        </Reveal>
      </div>
      <p className="m-0 -mt-8 px-4 text-center text-[14px] text-subtle md:mt-0">
        Sample conversation. Your assistant uses your own name, hours and services.
      </p>
    </section>
  );
}
