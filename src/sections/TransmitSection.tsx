"use client";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "./SectionShell";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import dynamic from "next/dynamic";

const ConvergenceFlow = dynamic(() => import("@/components/ConvergenceFlow").then((m) => m.ConvergenceFlow), { ssr: false });

export function TransmitSection() {
  return (
    <SectionShell id="transmit" minH="min-h-screen" className="bg-obsidian pt-32 md:pt-40 pb-48">
      <SectionGutter index="06" codename="TRANSMIT" />
      <GridShell>
        {/* HEADER + CONVERGENCE DIAGRAM */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 pb-20 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-6">TRANSMIT</div>
            <h2 className="caps text-[44px] md:text-[88px] leading-[0.95] tracking-tight font-medium max-w-[16ch]">
              Open a channel.
            </h2>
            <p className="mt-8 max-w-[52ch] text-signal/65 leading-relaxed text-[17px]">
              One inbox. One reading. Engagement, investment, press, or collaboration —
              say which it is, and it reaches the same desk.
            </p>
            <div className="mt-8 flex items-baseline gap-3 mono caps text-[10px] text-signal/45 tracking-[0.2em]">
              <span className="text-loki-glow">●</span>
              <span>CHANNEL OPEN</span>
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-5 h-[280px] md:h-[320px]">
            <ConvergenceFlow />
          </div>
        </div>

        {/* FORM */}
        <div className="border-t border-rule pt-12">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-2">TRANSMISSION · 05 FIELDS</div>
          <p className="text-signal/50 text-[13px] mb-6 max-w-[52ch]">
            Fill what applies. The intent line is what gets read first.
          </p>
          <ContactForm />
        </div>
      </GridShell>
    </SectionShell>
  );
}
