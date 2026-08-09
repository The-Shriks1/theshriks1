"use client";

import { SOCIALS, SITE } from "@/lib/content";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaDiscord, FaGithub, FaReddit } from "react-icons/fa6";
import { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
  github: FaGithub,
  reddit: FaReddit,
  discord: FaDiscord,
};



export function SiteFooter() {

  return (
    <footer 
      className="relative w-full h-[85vh] md:h-screen min-h-[550px] md:min-h-[800px] bg-black overflow-hidden flex flex-col justify-between border-t border-[#1a1a1a]"
    >
      {/* 1. Background Void */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none" />

      {/* 2. Structured Top UI */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 pt-16 md:pt-32 flex flex-col md:flex-row justify-between items-start pointer-events-none">
        
        {/* Left Column: Mission Statement */}
        <div className="max-w-md pointer-events-auto">
          <h3 className="caps text-[16px] md:text-[22px] tracking-tight font-medium text-white/50 leading-[1.3]">
            We are known for our perfection <br />
            <span className="text-white">and in-house builds.</span>
          </h3>
          
          <a 
            href={`mailto:${SITE.email}`} 
            className="mt-8 md:mt-12 inline-block mono text-[12px] tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            INITIATE: {SITE.email}
          </a>
        </div>

        {/* Right Column: Clean Social List */}
        <div className="mt-16 md:mt-0 pointer-events-auto">
          <ul className="flex flex-col gap-4 text-right">
            {SOCIALS.map((s, i) => {
              const platform = (s as { platform?: string }).platform;
              const Icon = platform ? ICON_MAP[platform] : FaInstagram;
              return (
                <li key={s.href + i} className="flex justify-start md:justify-end">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 hover:opacity-100 opacity-60 transition-opacity"
                  >
                    <span className="mono text-[11px] tracking-[0.2em] uppercase text-white">
                      {s.label}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 3. Massive Bottom Anchor Typography */}
      <div className="relative z-10 w-full flex flex-col items-center mt-auto pointer-events-none">
        
        {/* Minimal Meta Line */}
        <div className="flex flex-wrap justify-between items-center w-full mono text-[9px] md:text-[10px] tracking-[0.2em] text-white/40 px-8 mb-4 gap-2">
          <span>© 2026 THE SHRIKS</span>
          <span className="hidden md:inline-block">OUT OF HUMAN CAPABILITIES</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">TERMS</Link>
          </span>
        </div>

        {/* Site Navigation — crawlable links for all important pages */}
        <nav aria-label="Site navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-2 w-full px-8 mb-6 mono text-[9px] md:text-[10px] tracking-[0.2em] text-white/30">
          <Link href="/services" className="hover:text-white/60 transition-colors">SERVICES</Link>
          <Link href="/fleet/lokiai" className="hover:text-white/60 transition-colors">LOKIAI</Link>
          <Link href="/commanders" className="hover:text-white/60 transition-colors">COMMANDERS</Link>
          <Link href="/facts" className="hover:text-white/60 transition-colors">FACTS</Link>
          <Link href="/contact" className="hover:text-white/60 transition-colors">CONTACT</Link>
        </nav>

        {/* Massive Solid Text Anchor — decorative, not a heading */}
        <div className="w-full flex justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/70 to-black select-none whitespace-nowrap leading-[0.8] drop-shadow-2xl"
            style={{ fontSize: "clamp(80px, 18vw, 400px)" }}
          >
            THE SHRIKS
          </div>
        </div>
      </div>

    </footer>
  );
}
