"use client";

import { MANIFEST_BODY } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "./SectionShell";
import dynamic from "next/dynamic";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { OrbitDiagram } from "@/components/OrbitDiagram";
import { OriginSeal } from "@/components/OriginSeal";
import { BezelPlayer } from "@/components/BezelPlayer";
import { ManifestTimeline } from "@/components/ManifestTimeline";

const MethodGraph = dynamic(() => import("@/components/MethodGraph").then((m) => m.MethodGraph), { ssr: false });
const MaskedDuoModel = dynamic(() => import("@/components/MaskedDuoModel").then((m) => m.MaskedDuoModel), { ssr: false });

export function BroadcastSection() {
  return (
    <SectionShell id="broadcast" minH="min-h-screen" className="bg-obsidian pt-20 md:pt-40 pb-24 md:pb-48">
      <SectionGutter index="05" codename="BROADCAST" />
      <GridShell>
        {/* HEADER */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 pb-20 mb-20 items-end relative">
          <Reveal className="col-span-12 md:col-span-7 relative z-10">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-6">MANIFEST</div>
            <h2 className="caps text-[36px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              THE<br />MANIFEST.
            </h2>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.4] max-w-[50ch] font-light">
              A record of decisions and standards. Live is live. Plan is plan. Nothing aspirational.
            </p>
          </Reveal>

          {/* Minimalist 3D CSS Shelf Edge replacing the 1px line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#111] border-t border-white/10 shadow-[0_5px_15px_rgba(0,0,0,1)] z-0"></div>

          {/* Masked Duo 3D Model sitting on the partition line */}
          <div className="hidden md:block absolute right-0 bottom-[-250px] w-[500px] h-[800px] translate-x-[20px] z-20 pointer-events-none">
            <MaskedDuoModel className="w-full h-full" />
          </div>
        </div>

        <ManifestTimeline />

        {/* ECOSYSTEM PLATFORMS */}
        <div className="mt-28 border-t border-rule pt-16">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">05.1 / ECOSYSTEM</div>
          <div className="grid md:grid-cols-12 gap-x-10 mb-12 items-end">
            <div className="col-span-12 md:col-span-6">
              <h3 className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium leading-[0.95]">
                Ecosystem Ports.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
              <p className="text-signal/55 text-[14px] leading-relaxed max-w-[42ch]">
                Three portals engineered to deliver documentation, developer resources, and early access channels for our upcoming SaaS.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule mt-10">
            {/* PLATFORM 1 */}
            <div className="bg-obsidian p-8 md:p-10 flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:bg-white/[0.01]">
              <div className="flex flex-col gap-6">
                <span className="mono text-[8px] text-signal/30 tracking-[0.2em]">PORTAL_01 // PUBLIC FEED</span>
                <h4 className="caps text-[20px] text-signal font-semibold tracking-wider">DOCS WEBSITE</h4>
                <p className="text-signal/60 text-[14px] leading-relaxed max-w-[32ch]">
                  A custom design system documenting setup specs, API coordinates, libraries, and integration files for modern frameworks.
                </p>
              </div>
              <a 
                href="https://truth.theshriks.space" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mono text-[10px] text-signal/50 tracking-[0.15em] border border-rule px-4 py-2 text-center group-hover:border-signal/50 group-hover:text-signal transition-all self-start mt-6"
              >
                ACCESS DOCS →
              </a>
            </div>

            {/* PLATFORM 2 */}
            <div className="bg-obsidian p-8 md:p-10 flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:bg-white/[0.01]">
              <div className="flex flex-col gap-6">
                <span className="mono text-[8px] text-signal/30 tracking-[0.2em]">PORTAL_02 // SYSTEM TOOLING</span>
                <h4 className="caps text-[20px] text-signal font-semibold tracking-wider">OPENDECK</h4>
                <p className="text-signal/60 text-[14px] leading-relaxed max-w-[32ch]">
                  Open-source developer utilities, system configurations, boilerplates, and guidance files created to optimize builder workflows.
                </p>
              </div>
              <a 
                href="https://opendeck.theshriks.space" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mono text-[10px] text-signal/50 tracking-[0.15em] border border-rule px-4 py-2 text-center group-hover:border-signal/50 group-hover:text-signal transition-all self-start mt-6"
              >
                EXPLORE TOOLS →
              </a>
            </div>

            {/* PLATFORM 3 */}
            <div className="bg-obsidian p-8 md:p-10 flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:bg-white/[0.01]">
              <div className="flex flex-col gap-6">
                <span className="mono text-[8px] text-signal/30 tracking-[0.2em]">PORTAL_03 // TELEMETRY ACCESS</span>
                <h4 className="caps text-[20px] text-signal font-semibold tracking-wider">EARLY ACCESS</h4>
                <p className="text-signal/60 text-[14px] leading-relaxed max-w-[32ch]">
                  Request portal credentials for our upcoming SaaS deployments, submit feedback, or transmit system telemetry back to the commanders.
                </p>
              </div>
              <a 
                href="https://universe.theshriks.space" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mono text-[10px] text-signal/50 tracking-[0.15em] border border-rule px-4 py-2 text-center group-hover:border-signal/50 group-hover:text-signal transition-all self-start mt-6"
              >
                REQUEST ACCESS →
              </a>
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
