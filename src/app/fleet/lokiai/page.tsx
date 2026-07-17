"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionMarker } from "@/components/SectionMarker";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import { PlayableHero } from "@/components/PlayableHero";
import { LokiWordmark } from "@/components/LokiWordmark";

export default function LokiAIPage() {
  
  // Fix for the automatic scroll to bottom issue
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => window.scrollTo(0, 0), 10);
    return () => clearTimeout(timeout);
  }, []);

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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-8 w-full px-6 sm:px-0">
          <a
            href="https://www.instagram.com/reel/DZuxLsINqJl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center sm:justify-start gap-4 mono caps text-[11px] text-signal border border-signal/40 px-7 py-4 hover:bg-signal transition-colors w-full sm:w-auto"
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
            className="group flex items-center justify-center gap-4 mono caps text-[11px] text-signal border border-signal/40 px-7 py-4 hover:bg-signal transition-colors w-full sm:w-auto"
          >
            <span className="group-hover:text-obsidian">LOKIAI WEBSITE</span>
          </a>
        </div>
      </PlayableHero>

      <section className="relative bg-obsidian pt-20 md:pt-40 pb-24 md:pb-48">
        <SectionGutter index="SHIP·I" codename="LOKIAI" />
        <GridShell>
          {/* breadcrumb */}
          <div className="mb-16 flex items-baseline justify-between mono caps text-[10px] text-signal/45">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← BACK · THE FLEET</Link>
            <span>SHIP I OF III</span>
          </div>

          {/* WHAT IT IS / POSITIONING */}
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 pb-16 md:pb-28">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div>HANGAR 01</div>
              <div className="mt-1 text-signal/35">LOKIAI · WHAT IT IS</div>
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h1 className="caps text-[36px] md:text-[80px] leading-[0.95] tracking-tight font-medium max-w-[18ch]">
                Local AI.<br />
                <span className="text-loki-glow italic font-light">Any device.</span><br />
                No cloud.
              </h1>
              <p className="mt-8 md:mt-12 max-w-[60ch] text-signal/90 leading-relaxed text-[16px] md:text-lg">
                An on-device AI orchestration platform. You pair an Android phone wirelessly (just a QR code scan, no cables, no ADB, no developer options), tell an AI assistant in plain English what you want the phone to do, and it finds a real AI model that actually fits your phone's hardware, deploys it straight from the model hub to the device, and from then on the phone runs that AI completely offline — forever, with zero ongoing cloud dependency.
              </p>
            </Reveal>
          </div>

          {/* THE CORE IDEA */}
          <div className="grid grid-cols-12 gap-x-8 pt-12 md:pt-16 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div className="text-signal/45">PHILOSOPHY</div>
              <div className="mt-1 text-signal">THE CORE IDEA</div>
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <p className="max-w-[60ch] text-signal/80 leading-relaxed text-[17px] md:text-lg">
                Cloud AI is expensive and privacy-invasive for a lot of everyday tasks a phone's own chip can already handle. LokiAI is the plumbing that gets a real, working model onto a real phone without the user ever touching a model file, a config, or a line of code.
              </p>
            </Reveal>
          </div>

          {/* WHAT IT CAN DO */}
          <div className="grid grid-cols-12 gap-x-8 pt-12 md:pt-16 mt-16 md:mt-24 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50 mb-8 md:mb-0">
              <div className="text-signal/45">CAPABILITIES</div>
              <div className="mt-1 text-signal">WHAT IT CAN DO</div>
              <div className="mt-1 text-signal/35">07 CORE FEATURES</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
                {[
                  { title: "Wireless pairing", desc: "Scan a QR code, the phone downloads and installs the app via browser, opens it, scans a second pairing QR, and the phone reports its own real hardware specs (RAM, CPU arch, storage, Android version) to register itself. No USB, no ADB at any point." },
                  { title: "Natural-language model selection", desc: "An AI assistant (\"Loki\") takes a request like \"I want real-time object detection\" or \"give me an offline chatbot\", searches HuggingFace for real candidate models, filters them down to what actually fits the paired phone's RAM budget, and explains the top picks in plain English — it will honestly say \"nothing fits\" rather than hallucinate a model that doesn't exist." },
                  { title: "One-click wireless deployment", desc: "Pick a model, hit Deploy, and the backend pushes a download instruction over WebSocket; the phone pulls the model file directly from the HuggingFace CDN itself. The backend never stores or touches the model file — only URLs." },
                  { title: "Three on-device inference modes", desc: "Camera (TFLite — live object detection/classification with on-screen labels), Chat (GGUF via llama.cpp — real token-by-token generation), Voice (TFLite audio — mic-based sound/speech classification)." },
                  { title: "Truly offline after deployment", desc: "Once a model is on the phone, it runs with zero internet, verified in airplane mode." },
                  { title: "Fleet dashboard", desc: "See all your paired devices, their live specs and connection status, deployment history, and a chat panel for the assistant, all backed by real data (no mock/demo content anywhere)." },
                  { title: "Production-grade accounts", desc: "Email/password signup with OTP verification, forgot/reset password, and (as of this week) hardened JWT auth with short-lived access tokens, httpOnly refresh cookies, rate limiting, and locked-down CORS." }
                ].map((f, i) => (
                  <Reveal key={i} delay={i * 0.05} as="li">
                    <div className="caps text-[15px] md:text-base text-signal/90 font-medium mb-3">{f.title}</div>
                    <p className="text-signal/70 leading-relaxed text-[15px]">{f.desc}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="grid grid-cols-12 gap-x-8 pt-12 md:pt-16 mt-16 md:mt-24 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50 mb-8 md:mb-0">
              <div className="text-signal/45">INFRASTRUCTURE</div>
              <div className="mt-1 text-signal">TECH STACK</div>
              <div className="mt-1 text-signal/35">ARCHITECTURE LAYERS</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-col gap-5 pt-2">
                {[
                  { layer: "Backend", tech: "FastAPI (Python), asyncpg, python-jose (JWT), bcrypt, slowapi (rate limiting)" },
                  { layer: "Database", tech: "PostgreSQL (Railway-hosted)" },
                  { layer: "AI assistant", tech: "NVIDIA NIM API (Llama 3.1 8B/70B — a fast intent-classifier + a grounded JSON selector)" },
                  { layer: "Model discovery", tech: "HuggingFace Hub API (search + metadata) — unauthenticated public API" },
                  { layer: "Model delivery", tech: "HuggingFace CDN — phone downloads directly, backend never stores model files" },
                  { layer: "Dashboard", tech: "Vite + React + TanStack Start/Router + TanStack Query + shadcn/ui + Tailwind" },
                  { layer: "Mobile app", tech: "Flutter (Dart) — tflite_flutter for vision/audio inference, fllama (llama.cpp FFI) for chat, mobile_scanner for QR" },
                  { layer: "Real-time", tech: "Native WebSocket (deployment push, download progress, heartbeats)" },
                  { layer: "Email", tech: "Direct SMTP (OTP codes, password reset links)" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-6 group">
                    <div className="col-span-12 md:col-span-4 mono caps text-[10px] text-signal/50 flex items-center pr-4 transition-colors group-hover:text-signal/80">{row.layer}</div>
                    <div className="col-span-12 md:col-span-8 text-signal/85 text-[15px]">{row.tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHO IT'S FOR */}
          <div className="grid grid-cols-12 gap-x-8 pt-12 md:pt-16 mt-16 md:mt-24 border-t border-rule">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50 mb-8 md:mb-0">
              <div className="text-signal/45">TARGET AUDIENCE</div>
              <div className="mt-1 text-signal">WHO IT'S FOR</div>
              <div className="mt-1 text-signal/35">06 KEY PERSONAS</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
                {[
                  "A maker/hobbyist who wants to turn a spare Android phone into a dedicated camera that labels objects, with zero ML or app-dev experience.",
                  "Someone who wants a private, offline chatbot — no data leaving the device, useful when traveling or in low-connectivity areas.",
                  "Field/inspection use cases — e.g. detecting hazards or objects on-site where connectivity can't be relied on, and the phone needs to just keep working once the model's on it.",
                  "A developer or researcher who wants to quickly try a HuggingFace model on real mobile hardware without writing a mobile app around it.",
                  "Anyone managing multiple phones each running a different on-device task, watched from one dashboard instead of juggling several devices by hand.",
                  "Accessibility use cases — offline sound/speech classification running entirely on-device."
                ].map((persona, i) => (
                  <div key={i} className="bg-obsidian p-6 md:p-8 flex flex-col justify-center">
                    <div className="mono caps text-[10px] text-signal/40 tracking-[0.18em] mb-4">PERSONA {String(i + 1).padStart(2, "0")}</div>
                    <p className="text-[15px] leading-relaxed text-signal/80">{persona}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-32 flex flex-col md:flex-row gap-4 items-center md:items-baseline justify-between mono caps text-[10px] text-signal/45 border-t border-rule pt-8 text-center md:text-left">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← RETURN TO FLEET</Link>
            <Link href="https://universe.theshriks.space/" target="_blank" rel="noopener noreferrer" className="hover:text-loki-glow text-signal transition-colors text-[12px]">REQUEST EARLY ACCESS →</Link>
          </div>
        </GridShell>
      </section>
    </>
  );
}
