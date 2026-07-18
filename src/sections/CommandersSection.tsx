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


        {/* PROFILES */}
        <div className="grid md:grid-cols-2 gap-px bg-rule border-y border-rule">
          {COMMANDERS.map((c, idx) => (
            <article key={c.name} className="bg-obsidian p-8 md:p-12 flex flex-col gap-7">
              <div className="flex items-baseline justify-between mono caps text-[10px] tracking-[0.22em]">
                <span className="text-signal/40">COMMANDER · {String(idx + 1).padStart(2, "0")}</span>
                <span className="text-signal/60">{c.rank}</span>
              </div>
              <div className="relative flex items-end gap-6">
                <h3 className="caps text-[48px] md:text-[72px] leading-none tracking-tight">{c.name}</h3>
              </div>
              <div className="mono caps text-[11px] text-signal/55 tracking-[0.22em]">{c.role}</div>
              <p className="text-signal/70 leading-relaxed text-[15px] max-w-[42ch]">{c.body}</p>
              {(c as any).note && (
                <div className="mt-auto pt-7 border-t border-rule mono caps text-[10px] text-signal/45 tracking-[0.18em]">
                  {(c as any).note}
                </div>
              )}
            </article>
          ))}
        </div>

      </GridShell>
    </SectionShell>
  );
}
