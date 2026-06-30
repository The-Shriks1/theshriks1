"use client";

import { COMMANDERS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { CommandersBridge } from "@/components/CommandersBridge";
import { SectionShell } from "./SectionShell";
import { SectionGutter, GridShell } from "@/components/Blueprint";

export function CommandersSection() {
  return (
    <SectionShell id="commanders" minH="min-h-screen" className="bg-obsidian pb-48">
      <SectionGutter index="04" codename="BRIDGE" />
      <CommandersBridge />

      <GridShell>
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 pt-28 md:pt-40 pb-20">
          <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50 tracking-[0.2em]">
            <div>SECTION · 04</div>
            <div className="mt-1 text-signal/35">BRIDGE</div>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="caps text-[44px] md:text-[96px] leading-[0.95] tracking-tight font-medium max-w-[16ch]">
              Two Commanders. <span className="text-signal/55 italic font-light">Equal rank.</span>
            </h2>
            <p className="mt-10 max-w-[52ch] text-signal/65 leading-relaxed text-[17px]">
              Identical masks. Identical posture. A partnership of two disciplines that meet in the middle —
              not a hierarchy of founder and co-founder.
            </p>
          </Reveal>
        </div>

        {/* PROFILES */}
        <div className="grid md:grid-cols-2 gap-px bg-rule border-y border-rule">
          {COMMANDERS.map((c, idx) => (
            <article key={c.name} className="bg-obsidian p-8 md:p-12 flex flex-col gap-7">
              <div className="flex items-baseline justify-between mono caps text-[10px] tracking-[0.22em]">
                <span className="text-signal/40">OFFICER · {String(idx + 1).padStart(2, "0")}</span>
                <span className="text-signal/60">{c.rank}</span>
              </div>
              <div className="relative flex items-end gap-6">
                <h3 className="caps text-[48px] md:text-[72px] leading-none tracking-tight">{c.name}</h3>
              </div>
              <div className="mono caps text-[11px] text-signal/55 tracking-[0.22em]">{c.role}</div>
              <p className="text-signal/70 leading-relaxed text-[15px] max-w-[42ch]">{c.body}</p>
              <div className="mt-auto pt-7 border-t border-rule mono caps text-[10px] text-signal/45 tracking-[0.18em]">
                {c.note}
              </div>
            </article>
          ))}
        </div>

      </GridShell>
    </SectionShell>
  );
}
