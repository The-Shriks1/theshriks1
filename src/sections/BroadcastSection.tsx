"use client";

import { MANIFEST_BODY } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "./SectionShell";
import dynamic from "next/dynamic";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { OrbitDiagram } from "@/components/OrbitDiagram";
import { OriginSeal } from "@/components/OriginSeal";
import { BezelPlayer } from "@/components/BezelPlayer";

const MaskRotor = dynamic(() => import("@/components/MaskRotor").then((m) => m.MaskRotor), { ssr: false });
const MethodGraph = dynamic(() => import("@/components/MethodGraph").then((m) => m.MethodGraph), { ssr: false });

export function BroadcastSection() {
  return (
    <SectionShell id="broadcast" minH="min-h-screen" className="bg-obsidian pt-32 md:pt-40 pb-48">
      <SectionGutter index="05" codename="BROADCAST" />
      <GridShell>
        {/* HEADER */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 pb-20 items-end">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-6">MANIFEST</div>
            <h2 className="caps text-[44px] md:text-[88px] leading-[0.95] tracking-tight font-medium">
              The Manifest.
            </h2>
            <p className="mt-8 max-w-[50ch] text-signal/65 leading-relaxed text-[17px]">
              A record of decisions and standards. Live is live. Plan is plan. Nothing aspirational.
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-5 h-[220px] md:h-[260px]">
            <MaskRotor />
          </div>
        </div>

        {/* ORIGIN — seal + statement, framed */}
        <Reveal>
          <div className="border border-rule p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <OriginSeal size={130} />
            <div className="flex-1 border-t pt-10 md:border-t-0 md:border-l border-rule md:pt-0 md:pl-14 w-full">
              <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">ORIGIN</div>
              <p className="text-signal/75 leading-relaxed text-[17px] max-w-[52ch]">{MANIFEST_BODY.origin.body}</p>
            </div>
          </div>
        </Reveal>

        {/* NARRATIVE UNIVERSE — framed panel */}
        <Reveal className="mt-16">
          <div className="border border-rule grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-14">
              <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">NARRATIVE UNIVERSE</div>
              <p className="text-signal/75 leading-relaxed text-[17px] max-w-[46ch]">{MANIFEST_BODY.universe.body}</p>
            </div>
            <div className="flex justify-center items-center p-10 md:p-14 border-t md:border-t-0 md:border-l border-rule">
              <OrbitDiagram size={260} />
            </div>
          </div>
        </Reveal>

        {/* METHOD — connected sequence */}
        <div className="mt-16 border-t border-rule pt-12">
          <div className="grid md:grid-cols-12 gap-x-10">
            <div className="col-span-12 md:col-span-4">
              <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">METHOD</div>
              <h3 className="caps text-[28px] md:text-[34px] text-signal tracking-tight font-medium leading-[0.95]">
                Working<br />Method
              </h3>
              <p className="mt-5 text-signal/55 text-[14px] leading-relaxed max-w-[34ch]">
                Six rules, run in order, on every engagement — client work and the fleet alike.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 mt-10 md:mt-0">
              <MethodGraph items={MANIFEST_BODY.method.items} />
            </div>
          </div>
        </div>

        {/* SIGNAL BROADCAST & CINEMATIC PLAYER */}
        <div className="mt-28 border-t border-rule pt-16">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-6">SIGNAL BROADCAST</div>
          <h3 className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium leading-[0.95] mb-12">
            Vessel Telemetry.
          </h3>
          <BezelPlayer />
        </div>

        {/* Close-out */}
        <Reveal className="mt-36 pt-10 border-t border-rule flex items-center justify-between">
          <span className="mono caps text-[10px] text-signal/30 tracking-[0.2em]">END BROADCAST · 05 / 07</span>
          <a href="#transmit" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">
            PROCEED TO TRANSMIT →
          </a>
        </Reveal>
      </GridShell>
    </SectionShell>
  );
}
