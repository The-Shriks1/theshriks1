"use client";

import Link from "next/link";
import { FLEET, type FleetShip } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "./SectionShell";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";
import { useRef } from "react";

const ShipModel3D = dynamic(() => import("@/components/ShipModel3D").then((m) => m.ShipModel3D), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-graphite-2/40" />,
});

function ViewportShipModel3D({ slug, rotate = true, scale = 1 }: { slug: string; rotate?: boolean; scale?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.05 });

  return (
    <div ref={containerRef} className="w-full h-full">
      {inView && <ShipModel3D slug={slug} rotate={rotate} scale={scale} />}
    </div>
  );
}

export function FleetSection() {
  return (
    <SectionShell id="fleet" minH="min-h-screen" className="bg-obsidian pt-20 md:pt-40 pb-24 md:pb-48">
      <SectionGutter index="03" codename="FLEET" />
      <GridShell>
        {/* HEADER */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 pb-16 md:pb-32 items-end">
          <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50 tracking-[0.2em]">
            <div>SECTION · 03</div>
            <div className="mt-1 text-signal/35">FLEET · IN-HOUSE PRODUCTS</div>
          </div>
          <Reveal className="col-span-12 md:col-span-6">
            <h2 className="caps text-[36px] md:text-[96px] leading-[0.95] tracking-tight font-medium">
              <TextReveal text="The Fleet." />
            </h2>
            <p className="mt-8 md:mt-10 max-w-[48ch] text-signal/70 leading-relaxed text-[16px] md:text-[19px]">
              Three vessels committed. One arrived. Each ship is its own product — its own hull,
              its own arrival, its own dossier. Open a hangar to enter.
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-3 h-[200px] md:h-[240px] relative overflow-hidden md:overflow-visible my-6 md:my-0">
            <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:-right-8 top-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[400px] md:h-[400px]">
              <ViewportShipModel3D slug="classified-iii" rotate={false} />
            </div>
          </div>
        </div>

        {/* FLEET INDEX STRIP */}
        <div className="hidden md:grid grid-cols-12 gap-x-8 pt-10 pb-4 border-t border-rule mono caps text-[10px] text-signal/50 tracking-[0.22em]">
          <div className="col-span-2">SHIP</div>
          <div className="col-span-3">CODENAME</div>
          <div className="col-span-4">TAGLINE</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-1 text-right">→</div>
        </div>

        {/* SHIP DOSSIERS — large stacked rows */}
        <div className="border-t border-rule">
          {FLEET.map((ship, idx) => (
            <Reveal key={ship.id} delay={idx * 0.06}>
              <ShipDossier ship={ship} index={idx} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 mono caps text-[10px] text-signal/40 max-w-[58ch] tracking-[0.18em]">
          The arrival format repeats — unusual activity observed; ship descends; product live.
        </div>
      </GridShell>
    </SectionShell>
  );
}

function ShipDossier({ ship, index }: { ship: FleetShip; index: number }) {
  const live = ship.statusKind === "live";
  return (
    <Link href={ship.href} className="group block border-b border-rule">
      <div className="grid grid-cols-12 gap-x-8 py-8 md:py-14 items-center transition-colors hover:bg-graphite-2/30 relative">
        {/* index col */}
        <div className="col-span-12 md:col-span-2 mono caps text-[10px] tracking-[0.22em]">
          <div className="text-signal/45 text-[12px]">SHIP · {ship.id}</div>
          <div className="mt-2 text-signal/30">DOSSIER {String(index + 1).padStart(2, "0")}</div>
          <div className="mt-2 text-signal/30">ARRIVAL · {ship.arrival}</div>
        </div>

        {/* 3D model */}
        <div className="col-span-12 md:col-span-3 h-[160px] md:h-[200px] border border-rule bg-graphite-2/30 my-4 md:my-0">
          {ship.id === "I" && <ViewportShipModel3D slug={ship.slug} />}
        </div>

        {/* name + tagline */}
        <div className="col-span-12 md:col-span-4">
          <div className="caps leading-[0.92] tracking-tight" style={{ fontSize: "clamp(28px, 5.4vw, 84px)" }}>
            <span className={live ? "text-signal" : "text-signal/30"}>{ship.name}</span>
          </div>
          <div className="mono caps text-[10px] text-signal/40 mt-3 tracking-[0.28em]">{ship.codename}</div>
          <p className="mt-5 caps text-[15px] md:text-[17px] text-signal/85 leading-snug max-w-[28ch] tracking-wide">
            {ship.tagline}
          </p>
          <p className="mt-3 text-signal/55 text-[13px] leading-relaxed max-w-[40ch]">{ship.summary}</p>
        </div>

        {/* status */}
        <div className="col-span-10 md:col-span-2 mt-4 md:mt-0">
          <div className={`mono caps text-[10px] tracking-[0.22em] ${live ? "text-loki-glow" : "text-signal/35"}`}>
            ● {live ? "LIVE" : "PLANNED"}
          </div>
          <div className="mono caps text-[10px] text-signal/40 mt-2 leading-relaxed">{ship.status}</div>
        </div>

        {/* arrow */}
        <div className="col-span-2 md:col-span-1 flex items-center justify-end">
          <motion.span
            className={`mono caps text-[20px] md:text-[28px] ${live ? "text-signal" : "text-signal/30"}`}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            →
          </motion.span>
        </div>

        {/* hover hairline */}
        <span className="absolute left-0 right-0 -top-px h-px bg-signal/0 group-hover:bg-signal/40 transition-colors" />
      </div>
    </Link>
  );
}
