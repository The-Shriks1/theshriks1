"use client";

import { SOCIALS, SITE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
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
    <Reveal>
      <div style={{ backgroundColor: "#000000" }}>
        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-12 md:py-16 min-h-[60vh] md:min-h-[65vh]">
          <div>
            <h3 className="caps text-[16px] md:text-[20px] leading-[1.2] tracking-tight font-medium max-w-[25ch]">
              We are known for our perfection
              <span className="block text-signal/55">and in-house builds.</span>
            </h3>
          </div>
          <div className="flex md:justify-end">
            <ul className="mono caps text-[11px] md:text-[12px] tracking-[0.18em] text-signal/70 space-y-3 text-right flex flex-col justify-end">
              {SOCIALS.map((s, i) => {
                const Icon = (s as any).platform ? ICON_MAP[(s as any).platform] : FaInstagram;
                return (
                  <li key={s.href + i}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 hover:text-signal transition-colors group"
                    >
                      <span>{s.label}</span>
                      {Icon && <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4 mt-2 border-t border-rule/50">
                <a href={`mailto:${SITE.email}`} className="hover:text-signal transition-colors break-all inline-block">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden py-4 md:py-6">
          <div className="caps font-medium leading-[0.78] tracking-tight text-signal text-center whitespace-nowrap" style={{ fontSize: "clamp(36px, 13vw, 220px)" }}>
            THE SHRIKS
          </div>
        </div>

      </div>
    </Reveal>
  );
}
