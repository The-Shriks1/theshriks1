"use client";

import { LOKIAI } from "@/lib/content";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { LokiHero } from "@/components/LokiHero";
import { SectionShell } from "./SectionShell";

export function LokiHangarSection() {
  return (
    <SectionShell id="lokiai" minH="min-h-screen" className="bg-obsidian">
      <LokiHero />

      <div className="px-6 md:px-14 pt-32 pb-32 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 pb-16">
          <div className="md:col-span-2 mono caps text-[10px] text-signal/50 pt-3">04 / HANGAR</div>
          <div className="md:col-span-10">
            <Reveal>
              <h2 className="caps text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-[22ch]">
                Kubernetes <em className="not-italic text-loki-glow">for</em> edge AI.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-[60ch] text-signal/70 leading-relaxed text-lg">
                {LOKIAI.description}
              </p>
            </Reveal>
          </div>
        </div>

        <SectionHead index="04·I" title="System Specification" kicker="06 PARAMETERS" />
        <div className="mt-10 border-t border-rule">
          {LOKIAI.stack.map((row) => (
            <div key={row.k} className="grid grid-cols-12 gap-4 py-5 border-b border-rule">
              <div className="col-span-4 md:col-span-3 mono caps text-[10px] text-signal/50">{row.k}</div>
              <div className="col-span-8 md:col-span-9 caps text-base md:text-lg text-signal/90">{row.v}</div>
            </div>
          ))}
        </div>

        <SectionHead index="04·II" title={LOKIAI.mobius.title} kicker={LOKIAI.mobius.role} />
        <div className="grid md:grid-cols-12 gap-8 pt-10">
          <Reveal className="md:col-span-7">
            <p className="text-signal/75 leading-relaxed text-lg max-w-[55ch]">{LOKIAI.mobius.body}</p>
          </Reveal>
          <div className="md:col-span-5 grid grid-cols-3 gap-px bg-rule">
            {LOKIAI.mobius.stats.map((s) => (
              <div key={s.k} className="bg-obsidian p-6">
                <div className="mono caps text-[10px] text-signal/40">{s.k}</div>
                <div className="caps text-2xl md:text-3xl mt-3">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-rule pt-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <div className="mono caps text-[11px] text-loki-glow">● LIVE · TRAILER RELEASED · PLATFORM IN ACTIVE BUILD</div>
          <div className="mono caps text-[10px] text-signal/40">ATLAS MACHINAE — MARKETING SITE IN ITERATIVE DESIGN</div>
        </div>
      </div>
    </SectionShell>
  );
}
