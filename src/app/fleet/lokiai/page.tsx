import Link from "next/link";
import { LOKIAI } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionMarker } from "@/components/SectionMarker";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { PlayableHero } from "@/components/PlayableHero";
import { LokiWordmark } from "@/components/LokiWordmark";

export const metadata = { title: "LokiAI — THE SHRIKS · Ship I" };

export default function LokiAIPage() {
  return (
    <>
      <SectionMarker id="ship-lokiai" />

      <PlayableHero
        src="/videos/lokiai-arrival.mp4"
        poster="/videos/lokiai-poster.jpg"
      >
        <LokiWordmark size={360} animated />
        <div className="mono caps text-[10px] text-signal/65 max-w-[42ch] text-center leading-relaxed">
          SHIP I OF THE FLEET — A HARDWARE-PLUS-ML PLATFORM FOR EDGE AI ORCHESTRATION
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/reel/DZuxLsINqJl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 mono caps text-[11px] text-signal border border-signal/40 px-7 py-4 hover:bg-signal transition-colors"
          >
            <span className="inline-block w-3 h-3 relative">
              <span className="absolute inset-0 border-l-[7px] border-l-current border-y-[5px] border-y-transparent group-hover:border-l-obsidian" />
            </span>
            <span className="group-hover:text-obsidian">PLAY TRAILER</span>
          </a>
          <a
            href="https://lokiai.theshriks.space"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 mono caps text-[11px] text-signal border border-signal/40 px-7 py-4 hover:bg-signal transition-colors"
          >
            <span className="group-hover:text-obsidian">LOKIAI WEBSITE</span>
          </a>
        </div>
      </PlayableHero>

      <section className="relative bg-obsidian pt-32 md:pt-40 pb-48">
        <SectionGutter index="SHIP·I" codename="LOKIAI" />
        <GridShell>
          {/* breadcrumb */}
          <div className="mb-16 flex items-baseline justify-between mono caps text-[10px] text-signal/45">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← BACK · THE FLEET</Link>
            <span>SHIP I OF III</span>
          </div>

          {/* Tagline */}
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 pb-20 md:pb-28">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div>HANGAR 01</div>
              <div className="mt-1 text-signal/35">LOKIAI · POSITIONING</div>
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h1 className="caps text-[44px] md:text-[80px] leading-[0.95] tracking-tight font-medium max-w-[18ch]">
                Local AI.<br />
                <span className="text-loki-glow italic font-light">Any device.</span><br />
                No cloud.
              </h1>
              <p className="mt-12 max-w-[60ch] text-signal/65 leading-relaxed text-[17px] md:text-lg">
                LokiAI deploys AI models directly onto Android devices — no cloud, no latency, no ongoing API costs. The model runs on the device itself, works offline permanently, and gets set up in minutes.
              </p>
            </Reveal>
          </div>

          {/* THREE THINGS IT DOES */}
          <div className="grid grid-cols-12 gap-x-8 pt-16 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div className="text-signal/45">FEATURES</div>
              <div className="mt-1 text-signal">CAPABILITIES</div>
              <div className="mt-1 text-signal/35">03 CORE ACTIONS</div>
            </div>
            <ol className="col-span-12 md:col-span-9 grid sm:grid-cols-3 gap-10">
              {[
                "Connects to any Android phone and reads its hardware automatically",
                "Finds the right AI model from Hugging Face based on what you need",
                "Deploys it to the device — it runs locally forever after that",
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.06} as="li" className="border-t border-rule pt-5">
                  <div className="mono caps text-[10px] text-signal/40 mb-3">ACTION·{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-signal/80 leading-relaxed text-[15px]">{c}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* THREE USE CASES */}
          <div className="grid grid-cols-12 gap-x-8 pt-16 mt-24 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div className="text-signal/45">APPLIED</div>
              <div className="mt-1 text-signal">USE CASES</div>
              <div className="mt-1 text-signal/35">PRACTICAL DEPLOYMENT</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid sm:grid-cols-3 gap-px bg-rule border-y border-rule">
                {[
                  "Real-time camera detection",
                  "Offline AI chat",
                  "Voice and audio processing",
                ].map((s, i) => (
                  <div key={i} className="bg-obsidian p-6 md:p-8">
                    <div className="mono caps text-[10px] text-signal/40 tracking-[0.18em]">USE CASE {String(i + 1).padStart(2, "0")}</div>
                    <div className="caps text-[24px] md:text-[32px] mt-4 leading-tight text-signal/90">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>



          <div className="mt-20 flex items-baseline justify-between mono caps text-[10px] text-signal/45">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← RETURN TO FLEET</Link>
            <Link href="https://universe.theshriks.space/" target="_blank" rel="noopener noreferrer" className="hover:text-loki-glow text-signal transition-colors text-[12px]">REQUEST EARLY ACCESS →</Link>
          </div>
        </GridShell>
      </section>
    </>
  );
}
