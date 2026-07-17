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
        {/* DESIGN: STARK MINIMALIST EDITORIAL */}
        <Reveal className="w-full pt-16 pb-16 border-b border-rule flex flex-col items-start gap-6">
          <h2 className="caps text-[52px] md:text-[80px] leading-none tracking-tighter font-bold uppercase text-white">
            OPEN <span className="font-light text-signal/30">INBOX.</span>
          </h2>
          <p className="text-signal/75 text-[18px] md:text-[24px] leading-[1.4] font-light max-w-[42ch]">
            Got something for Engagement, Investment, Press, Collaboration or chaos? We got you and our ships do get shipped.
          </p>
        </Reveal>

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
