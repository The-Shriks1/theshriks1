"use client";

import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { SERVICES, CHANNELS } from "@/lib/content";
import { SectionShell } from "./SectionShell";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { VentureDiagram } from "@/components/VentureDiagram";
import { TextReveal } from "@/components/TextReveal";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ═══ HERO ═══ */

function HeroBlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const ruleWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="pb-32 md:pb-40">
      {/* Massive statement */}
      <Reveal>
        <h2
          className="caps leading-[0.86] tracking-tight font-medium"
          style={{ fontSize: "clamp(52px, 10vw, 160px)" }}
        >
          <TextReveal as="span" text="We engineer" />
          <br />
          <TextReveal as="span" delay={0.15} text="what others" />{" "}
          <TextReveal as="span" delay={0.3} className="text-signal/40 italic font-light" text="will not." />
        </h2>
      </Reveal>

      {/* Animated divider */}
      <div className="relative h-px mt-16 md:mt-20 bg-rule overflow-hidden">
        <motion.div className="absolute left-0 top-0 h-full bg-signal/60" style={{ width: ruleWidth }} />
      </div>

      {/* Two-column overview */}
      <Reveal className="mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-5">THE VENTURE</div>
            <p className="text-signal/70 leading-[1.75] text-[16px] md:text-[17px]">
              THE SHRIKS is a deep technology venture based in India, structured as two
              interdependent divisions operating under a single production standard.
              One division delivers production-grade engineering for funded ventures
              worldwide. The other develops and ships a proprietary product line — the fleet.
            </p>
          </div>
          <div>
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-5">THE MODEL</div>
            <p className="text-signal/70 leading-[1.75] text-[16px] md:text-[17px]">
              Revenue from client engagements funds product R&D. Product work raises
              the engineering ceiling on client delivery. Both halves feed each other.
              No prototypes. No simulations. Production or nothing. Based in India,
              delivering remotely to clients worldwide.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ═══ DUAL DIVISION VISUAL ═══ */

function DualDivision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="border-t border-rule pt-20 pb-8">
      <Reveal>
        <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-12">
          TWO DIVISIONS · ONE STANDARD
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Sector A */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="border border-rule p-8 md:p-12"
        >
          <div className="mono caps text-[10px] text-signal/35 tracking-[0.22em]">SECTOR A</div>
          <div className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium mt-4 leading-[0.95]">
            Client<br />Engineering
          </div>
          <div className="h-px bg-rule my-6" />
          <p className="text-signal/55 text-[14px] leading-[1.7] max-w-[38ch]">
            Production-grade full-stack systems for funded ventures. Architecture-first
            delivery to companies operating at scale — across software, AI/ML, cloud
            infrastructure, blockchain, and cinematic production.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 mono caps text-[9px] text-signal/30 tracking-[0.2em]">
            <span>REMOTE</span>
            <span>FUNDED VENTURES</span>
            <span>PRODUCTION-GRADE</span>
          </div>
        </motion.div>

        {/* Sector B */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="border border-rule border-t-0 md:border-t md:border-l-0 p-8 md:p-12"
        >
          <div className="mono caps text-[10px] text-signal/35 tracking-[0.22em]">SECTOR B</div>
          <div className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium mt-4 leading-[0.95]">
            In-House<br />Products
          </div>
          <div className="h-px bg-rule my-6" />
          <p className="text-signal/55 text-[14px] leading-[1.7] max-w-[38ch]">
            The fleet — a proprietary product line shipped under the venture&apos;s own name.
            Each product arrives as a distinct vessel. LokiAI is Ship I. Two more are in
            the manifest. Distinct architecture, distinct arrival, same command signature.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 mono caps text-[9px] text-signal/30 tracking-[0.2em]">
            <span>THE FLEET</span>
            <span>PROPRIETARY</span>
            <span>3 VESSELS</span>
          </div>
        </motion.div>
      </div>

      {/* Connecting statement */}
      <Reveal className="mt-12 text-center">
        <p className="mono caps text-[11px] text-signal/45 tracking-[0.18em] leading-relaxed max-w-[56ch] mx-auto">
          Client revenue funds product R&D · Product work raises the engineering ceiling · Both halves feed each other
        </p>
      </Reveal>
    </div>
  );
}

/* ═══ STATS ═══ */

function StatRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const stats = [
    { n: "06", lbl: "Engineering Disciplines" },
    { n: "04", lbl: "Broadcast Channels" },
    { n: "03", lbl: "Fleet Vessels" },
    { n: "01", lbl: "Production Standard" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule mt-20">
      {stats.map((s, idx) => (
        <motion.div
          key={s.lbl}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.65, 0, 0.35, 1] }}
          className={`py-10 md:py-14 px-6 md:px-8 ${idx > 0 ? "border-l border-rule" : ""}`}
        >
          <span
            className="block caps text-signal font-medium leading-none tabular-nums"
            style={{ fontSize: "clamp(48px, 6vw, 88px)", letterSpacing: "-0.04em" }}
          >
            {s.n}
          </span>
          <span className="block mono caps text-[10px] text-signal/45 tracking-[0.2em] mt-4">{s.lbl}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ═══ DISCIPLINES ═══ */

function DisciplineBlock() {
  return (
    <div className="mt-36 pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-16">
        <div className="col-span-12 md:col-span-5">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            06 ACTIVE VERTICALS
          </div>
          <h3 className="caps text-[36px] md:text-[48px] text-signal tracking-tight font-medium leading-[0.92]">
            Engineering<br />Disciplines
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
          <p className="text-signal/55 text-[15px] leading-[1.7] max-w-[42ch]">
            Engagements are scoped exclusively to domains where sustained depth compounds
            into a measurable advantage. The venture accepts fewer briefs — those it accepts
            are delivered to production standard.
          </p>
        </div>
      </div>

      {/* Discipline entries — staggered two-column */}
      <div className="grid md:grid-cols-2 gap-x-16">
        {SERVICES.map((s, idx) => (
          <DisciplineEntry key={s.id} s={s} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function DisciplineEntry({ s, idx }: { s: typeof SERVICES[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group py-8 border-t border-rule relative ${idx % 2 === 1 ? "md:mt-16" : ""}`}
    >
      <span className="absolute inset-x-0 top-0 h-px bg-signal/0 group-hover:bg-signal/40 transition-colors duration-500" />
      <div className="flex items-baseline gap-4 mb-4">
        <span className="mono caps text-[11px] text-signal/30 tabular-nums">{s.id}</span>
        <span className="caps text-[22px] md:text-[26px] text-signal tracking-tight font-medium leading-tight">
          {s.title}
        </span>
      </div>
      <p className="text-signal/50 leading-[1.7] text-[14px] max-w-[44ch] pl-9">
        {s.body}
      </p>
    </motion.div>
  );
}

/* ═══ VENTURE ARCHITECTURE ═══ */

function ArchitectureBlock() {
  return (
    <div className="mt-36 pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="col-span-12 md:col-span-3">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            OPERATING MODEL
          </div>
          <h3 className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium leading-[0.95]">
            Venture<br />Architecture
          </h3>
          <p className="mt-6 text-signal/55 text-[14px] leading-[1.7] max-w-[36ch]">
            The schematic below is not decorative. It is the operating model of the
            venture — two sectors feeding a single command node, with four broadcast
            channels sustaining visibility across all outputs.
          </p>
          <div className="mt-8 space-y-3 mono text-[10px] text-signal/40 tracking-[0.12em]">
            <div className="flex gap-3 items-center">
              <span className="w-3 h-3 border border-signal/40" />
              <span>DISCIPLINE NODE</span>
            </div>
            <div className="flex gap-3 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <polygon points="6,0 12,3 12,9 6,12 0,9 0,3" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
              </svg>
              <span>FLEET VESSEL</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="w-3 h-px bg-signal/40" />
              <span className="w-1 h-1 rounded-full bg-signal/60" />
              <span>DATA FLOW</span>
            </div>
          </div>
        </div>
        <Reveal className="col-span-12 md:col-span-9">
          <VentureDiagram className="border border-rule" />
        </Reveal>
      </div>
    </div>
  );
}



/* ═══ CHANNELS ═══ */

function ChannelBlock() {
  return (
    <div className="mt-36 pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-16">
        <div className="col-span-12 md:col-span-5">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            04 STANDING SIGNALS
          </div>
          <h3 className="caps text-[36px] md:text-[48px] text-signal tracking-tight font-medium leading-[0.92]">
            Broadcast<br />Channels
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
          <p className="text-signal/55 text-[15px] leading-[1.7] max-w-[42ch]">
            Content production is an operational function of the venture — not a peripheral
            activity. Four dedicated channels, each serving a distinct purpose in the
            communication architecture.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
        {CHANNELS.map((c, idx) => (
          <ChannelCard key={c.k} c={c} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function ChannelCard({ c, idx }: { c: typeof CHANNELS[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.65, 0, 0.35, 1] }}
      className="bg-obsidian p-7 md:p-9"
    >
      <div className="mono caps text-[10px] text-signal/35 tracking-[0.22em]">CH · {c.k}</div>
      <div className="caps text-[22px] md:text-[24px] text-signal tracking-tight font-medium mt-4 leading-none">{c.label}</div>
      <div className="mono caps text-[9px] text-signal/25 tracking-[0.16em] mt-2">{c.platform}</div>
      <p className="mt-5 text-signal/45 text-[13px] leading-[1.7] max-w-[34ch]">{c.body}</p>
    </motion.div>
  );
}

/* ═══ FAQ ═══ */

function FaqBlock() {
  return (
    <div className="mt-36 pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-16">
        <div className="col-span-12 md:col-span-5">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            FREQUENTLY RECEIVED
          </div>
          <h3 className="caps text-[36px] md:text-[48px] text-signal tracking-tight font-medium leading-[0.92]">
            Enquiries
          </h3>
        </div>
      </div>
      <Faq />
    </div>
  );
}

/* ═══ MAIN EXPORT ═══ */

export function BriefingSection() {
  return (
    <SectionShell id="overview" minH="min-h-screen" className="bg-obsidian pt-32 md:pt-40 pb-48">
      <SectionGutter index="02" codename="BRIEFING" />
      <GridShell>
        <HeroBlock />
        <DualDivision />
        <StatRow />
        <DisciplineBlock />
        <ArchitectureBlock />

        <ChannelBlock />
        <FaqBlock />

        {/* Close-out */}
        <Reveal className="mt-36 pt-10 border-t border-rule flex items-center justify-between">
          <span className="mono caps text-[10px] text-signal/30 tracking-[0.2em]">END BRIEFING · 02 / 07</span>
          <a href="#fleet" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">
            PROCEED TO THE FLEET →
          </a>
        </Reveal>
      </GridShell>
    </SectionShell>
  );
}
