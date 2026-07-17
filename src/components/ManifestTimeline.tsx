"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

type TimelineEvent = {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  description: string;
};

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "origin",
    day: "22",
    month: "FEB",
    year: "2026",
    title: "FOUNDED THE SHRIKS",
    description: "Official incorporation and founding of The Shriks. Established as an independent full-stack engineering, systems architecture, and creative production venture."
  },
  {
    id: "trailer",
    day: "18",
    month: "JUN",
    year: "2026",
    title: "LOKIAI TRAILER LAUNCH",
    description: "Released the official cinematic trailer for LokiAI, presenting the core AI-driven autonomous features and interface design of our upcoming platform."
  },
  {
    id: "show",
    day: "27",
    month: "JUN",
    year: "2026",
    title: "SHOWCASE ANNOUNCEMENT",
    description: "Announced our capability showcase 'I didn't know The Shriks can do that' — a focused series demonstrating our built products, engineering pipeline, and technical capabilities."
  }
];

export function ManifestTimeline() {
  return (
    <div className="w-full py-20 relative mt-12 mb-12">
      {/* Central Axis Glow Line */}
      <div className="absolute left-[32px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-rule to-transparent -translate-x-1/2 z-0" />
      
      {/* Background Grid Rulers for illustrative tech feel */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
           style={{
             backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)",
             backgroundSize: "40px 100%"
           }} 
      />

      <div className="flex flex-col gap-24 relative z-10 w-full max-w-5xl mx-auto">
        {TIMELINE_EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col md:flex-row items-center group"
            >
              
              {/* DESKTOP LEFT CONTENT */}
              <div className={`hidden md:flex w-1/2 justify-end pr-16 ${isEven ? 'order-1' : 'order-3 text-left justify-start pl-16 pr-0'}`}>
                {isEven ? (
                  <div className="flex flex-col items-end text-right">
                    <span className="mono text-[10px] text-signal/40 tracking-[0.2em] mb-2">[ {event.id.toUpperCase()} ]</span>
                    <h3 className="caps text-[20px] text-signal font-medium tracking-wide mb-3">{event.title}</h3>
                    <p className="text-signal/50 text-[13px] leading-relaxed max-w-[40ch] border-r border-signal/20 pr-4">
                      {event.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-start text-left">
                    <span className="mono text-[10px] text-signal/40 tracking-[0.2em] mb-2">[ {event.id.toUpperCase()} ]</span>
                    <h3 className="caps text-[20px] text-signal font-medium tracking-wide mb-3">{event.title}</h3>
                    <p className="text-signal/50 text-[13px] leading-relaxed max-w-[40ch] border-l border-signal/20 pl-4">
                      {event.description}
                    </p>
                  </div>
                )}
              </div>

              {/* CENTER NODE */}
              <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 order-2">
                {/* Outer spin ring */}
                <motion.div 
                  className="absolute w-8 h-8 rounded-full border border-signal/30 border-t-signal/80"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner glowing core */}
                <div className="w-2.5 h-2.5 bg-signal rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </div>

              {/* DESKTOP RIGHT DATE */}
              <div className={`hidden md:flex w-1/2 ${isEven ? 'order-3 justify-start pl-16' : 'order-1 justify-end pr-16'}`}>
                <div className="flex flex-col">
                  <span className="mono text-[48px] font-light text-signal leading-[0.8] tracking-tighter group-hover:scale-110 transition-transform origin-left duration-700">
                    {event.day}
                  </span>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-px w-8 bg-signal/30" />
                    <span className="mono text-[12px] text-signal/70 tracking-[0.3em]">
                      {event.month} {event.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* MOBILE LAYOUT (Stacking) */}
              <div className="md:hidden flex w-full pl-20 pr-6 pb-4">
                <div className="flex flex-col">
                  <div className="flex items-end gap-3 mb-4">
                    <span className="mono text-[36px] font-light text-signal leading-none">
                      {event.day}
                    </span>
                    <span className="mono text-[10px] text-signal/60 tracking-[0.2em] mb-1">
                      {event.month} {event.year}
                    </span>
                  </div>
                  <h3 className="caps text-[16px] text-signal font-medium tracking-wide mb-2">{event.title}</h3>
                  <p className="text-signal/50 text-[13px] leading-relaxed border-l border-signal/20 pl-3">
                    {event.description}
                  </p>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
