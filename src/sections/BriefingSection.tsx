"use client";

import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { SERVICES, CHANNELS } from "@/lib/content";
import { SectionShell } from "./SectionShell";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { VentureDiagram } from "@/components/VentureDiagram";
import { TextReveal } from "@/components/TextReveal";
import { BlueprintText } from "@/components/BlueprintText";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ═══ HERO ═══ */

function HeroBlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const ruleWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="pb-16 md:pb-40 relative">
      <Reveal className="w-full relative z-10">
        <div className="flex flex-col items-start gap-4 md:gap-6 w-full mt-10 relative">
          <div className="flex w-full justify-between items-end border-b border-signal/20 pb-4 mb-4 md:mb-10">
            <span className="mono text-[10px] md:text-[12px] text-signal/40 tracking-[0.3em] uppercase">[ BLUEPRINT _ OVERVIEW ]</span>
            <span className="mono text-[8px] md:text-[10px] text-signal/60 tracking-[0.2em]">VOL. 02</span>
          </div>
          
          <h2 className="w-full flex flex-col font-medium tracking-tighter uppercase text-[clamp(32px,8vw,140px)] leading-[0.85]">
            <div className="flex w-full justify-start overflow-hidden py-1">
              <BlueprintText text="WE ARE KNOWN" />
            </div>
            
            <div className="flex w-full md:justify-center mt-2 md:mt-4 overflow-hidden py-1">
              <BlueprintText delay={0.4} text="FOR OUR PERFECTION" fillClassName="text-signal/90" />
            </div>
            
            <div className="flex w-full items-center justify-between md:justify-end mt-8 md:mt-12 gap-4 md:gap-8 pr-2">
              <motion.span 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 md:w-48 h-[1px] bg-gradient-to-r from-transparent to-signal/40 origin-left" 
              />
              <BlueprintText 
                delay={0.8} 
                text="AND IN-HOUSE BUILDS" 
                className="text-[clamp(18px,4vw,60px)] md:text-[clamp(24px,4vw,60px)] italic font-light tracking-wide" 
                fillClassName="text-signal/50"
                outlineOpacity="0.15"
              />
            </div>
          </h2>
        </div>
      </Reveal>

      {/* Animated divider */}
      <div className="relative h-px mt-16 md:mt-20 bg-rule overflow-hidden">
        <motion.div className="absolute left-0 top-0 h-full bg-signal/60" style={{ width: ruleWidth }} />
      </div>

      {/* Redesigned Overview for better readability */}
      <Reveal className="mt-12 md:mt-28">
        <div className="flex flex-col gap-12 md:gap-24">
          <div className="max-w-4xl">
            <div className="mono caps text-[11px] text-signal/50 tracking-[0.25em] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-signal/30"></span>
              THE VENTURE
            </div>
            <p className="text-signal/80 leading-[1.9] text-[18px] md:text-[24px] font-light">
              THE SHRIKS is a deep technology venture based in India, structured as two
              interdependent divisions operating under a single production standard.
              One division delivers production-grade engineering for funded ventures
              worldwide. The other develops and ships a proprietary product line — the fleet.
            </p>
          </div>
          <div className="max-w-4xl md:self-end md:text-right">
            <div className="mono caps text-[11px] text-signal/50 tracking-[0.25em] mb-6 flex items-center md:justify-end gap-4">
              THE MODEL
              <span className="hidden md:block w-8 h-px bg-signal/30"></span>
            </div>
            <p className="text-signal/80 leading-[1.9] text-[18px] md:text-[24px] font-light">
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
          className={`py-10 md:py-14 px-6 md:px-8 border-rule ${
            idx % 2 !== 0 ? "border-l" : "border-l-0"
          } ${
            idx >= 2 ? "border-t" : "border-t-0"
          } md:border-t-0 md:border-l ${
            idx === 0 ? "md:border-l-0" : ""
          }`}
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
  const [activeIndex, setActiveIndex] = useState(0);

  const getVideoPath = (idx: number) => {
    switch (idx) {
      case 0: return "/videos/Custom Software engineering.mov";
      case 1: return "/videos/AIML Sytems.mov";
      case 2: return "/videos/Cloud and Platform engineering.mov";
      case 3: return "/videos/Blockchain Engineering.mov";
      case 4: return "/videos/Content and media production.mov";
      case 5: return "/videos/AI Cinematic Prodiction.mov";
      default: return "";
    }
  };

  return (
    <div className="pt-16 md:pt-24 pb-20 md:pb-32 relative max-w-[1400px] mx-auto px-6">
      <div className="mb-12 md:mb-20 pl-6 md:pl-12 border-l border-signal/20">
        <div className="mono caps text-[10px] text-signal/50 tracking-[0.3em] mb-6">
          06 SYSTEM VERTICALS
        </div>
        <h3 className="caps text-[32px] md:text-[56px] text-signal tracking-tight font-light leading-[1]">
          Engineering<br />Disciplines
        </h3>
        <p className="mt-8 text-signal/60 text-[16px] md:text-[18px] leading-[1.8] max-w-[42ch] font-light">
          Engagements are scoped exclusively to domains where sustained depth compounds
          into a measurable advantage. Delivered strictly to production standard.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="flex flex-col md:flex-row gap-3 h-[700px] md:h-[500px] relative z-50">
        {SERVICES.map((s, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              onPointerEnter={() => setActiveIndex(idx)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-2xl bg-obsidian border group ${
                isActive ? "border-signal/40 flex-[8] md:flex-[8]" : "border-signal/10 flex-1"
              }`}
            >
              {/* Background Video */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-60" : "opacity-0"}`}>
                {isActive && (
                  <video 
                    src={getVideoPath(idx)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Ambient Glow & Text Gradient Overlay (Top to Bottom for Top-Left Text) */}
              <div className={`absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/40 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-0 group-hover:opacity-30"}`} />
              
              {/* Inactive State Content (Vertical Text for Desktop) */}
              <div className={`absolute inset-0 p-6 flex-col items-center justify-between transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-0 hidden" : "opacity-100 md:flex hidden"}`}>
                <div className="mono text-[20px] text-signal/40 pt-4">{s.id}</div>
                <div className="caps text-[14px] tracking-[0.2em] text-signal/50 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {s.title}
                </div>
              </div>
              
              {/* Inactive State Content (Horizontal Text for Mobile) */}
              <div className={`absolute inset-0 p-6 items-center justify-between transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-0 hidden" : "opacity-100 flex md:hidden"}`}>
                <div className="mono text-[16px] text-signal/40">{s.id}</div>
                <div className="caps text-[12px] tracking-[0.2em] text-signal/50 truncate max-w-[200px] text-right">{s.title}</div>
              </div>

              {/* Active State Content */}
              <div className={`absolute inset-0 p-8 md:p-12 flex flex-col transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"}`}>
                <div className="mono text-[80px] leading-none text-signal/10 font-light absolute bottom-8 right-8 pointer-events-none">
                  {s.id}
                </div>
                
                <div className="relative z-10">
                  <p className="text-signal/90 leading-[1.8] text-[15px] md:text-[18px] max-w-[42ch] font-light drop-shadow-md">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ VENTURE ARCHITECTURE ═══ */

function ArchitectureBlock() {
  return (
    <div className="mt-20 md:mt-36 pt-12 md:pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            OPERATING MODEL
          </div>
          <h3 className="caps text-[28px] md:text-[36px] text-signal tracking-tight font-medium leading-[0.95] break-words">
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
        <Reveal className="col-span-12 md:col-span-7 lg:col-span-8">
          <VentureDiagram className="border border-rule" />
        </Reveal>
      </div>
    </div>
  );
}



/* ═══ CHANNELS ═══ */

function ChannelBlock() {
  return (
    <div className="mt-24 md:mt-40 border-t border-signal/10 pt-20 md:pt-40 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-6 mb-16 md:mb-24">
        <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-8 text-center md:text-left">
          04 STANDING SIGNALS
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <h3 className="caps text-[36px] md:text-[80px] text-signal tracking-tighter font-light leading-[0.9]">
            Broadcast<br />Channels
          </h3>
          <p className="text-signal/50 text-[18px] md:text-[22px] leading-[1.6] max-w-xl font-light md:text-right">
            Content production is an operational function. Four dedicated channels, each serving a distinct purpose in the communication architecture.
          </p>
        </div>
      </div>

      <div className="w-full border-t border-signal/20">
        {CHANNELS.map((c, idx) => (
          <div
            key={c.k}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start md:items-center px-6 py-12 md:px-12 md:py-16 border-b border-signal/20 hover:bg-signal transition-colors duration-150 cursor-pointer"
          >
            <div className="col-span-1 md:col-span-1">
              <span className="mono text-[14px] text-signal/50 tracking-[0.2em] group-hover:text-obsidian/60 transition-colors duration-150">
                0{idx + 1}
              </span>
            </div>
            
            <div className="col-span-1 md:col-span-5 pr-4 md:pr-8">
              <h4 className="caps text-[24px] md:text-[24px] lg:text-[30px] xl:text-[40px] text-signal tracking-tighter font-light leading-[1.1] group-hover:text-obsidian transition-colors duration-150 break-words">
                {c.label}
              </h4>
            </div>
            
            <div className="col-span-1 md:col-span-2 flex items-center md:justify-center">
              <span className="mono caps text-[10px] text-signal/60 tracking-[0.2em] border border-signal/20 px-4 py-2 rounded-full group-hover:border-obsidian/30 group-hover:text-obsidian transition-colors duration-150 whitespace-nowrap">
                {c.platform}
              </span>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <p className="text-signal/60 text-[15px] md:text-[16px] leading-[1.6] font-light max-w-[40ch] group-hover:text-obsidian/80 transition-colors duration-150">
                {c.body}
              </p>
            </div>

            <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end">
              <svg className="w-8 h-8 text-signal/20 group-hover:text-obsidian/40 group-hover:-rotate-45 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══ FAQ ═══ */

function FaqBlock() {
  return (
    <div className="mt-20 md:mt-36 pt-12 md:pt-20 border-t border-rule">
      <div className="grid grid-cols-12 gap-x-8 gap-y-6 md:gap-y-8 mb-10 md:mb-16">
        <div className="col-span-12 md:col-span-5">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">
            FREQUENTLY RECEIVED
          </div>
          <h3 className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium leading-[0.92]">
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
    <SectionShell id="overview" minH="min-h-screen" className="bg-obsidian pt-20 md:pt-40 pb-24 md:pb-48">
      <SectionGutter index="02" codename="BRIEFING" />
      <GridShell>
        <HeroBlock />
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
