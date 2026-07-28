import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.facts);

export default function FactsPage() {
  return (
    <main className="bg-obsidian min-h-[100svh] pt-32 md:pt-40 pb-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
          <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
          <span>→</span>
          <span className="text-signal">FACTS</span>
        </nav>

        <div className="mb-20 border-b border-rule pb-16">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">CANONICAL RECORD</div>
          <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
            Facts about THE SHRIKS.
          </h1>
          <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
            A canonical reference for what THE SHRIKS is, what it builds, and how it operates. No marketing. No aspirational claims. Only what is accurate.
          </p>
        </div>

        <div className="flex flex-col gap-24">

          {/* Identity */}
          <section aria-labelledby="identity-heading">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-4">01 · IDENTITY</div>
            <h2 id="identity-heading" className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium mb-8">What THE SHRIKS is</h2>
            <div className="grid md:grid-cols-2 gap-8 text-signal/70 text-[16px] leading-relaxed">
              <p>THE SHRIKS is an independent systems studio and product venture building production-grade software, AI systems, cloud platforms, blockchain infrastructure, technical media, and proprietary products including LokiAI.</p>
              <p>It is not an agency, a freelance team, a generic development company, a marketing company, or a media company. It operates two interdependent divisions under a single production standard: client engineering and proprietary product development.</p>
            </div>
          </section>

          {/* Structure */}
          <section aria-labelledby="structure-heading" className="border-t border-rule pt-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-4">02 · OPERATING MODEL</div>
            <h2 id="structure-heading" className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium mb-8">Two-engine structure</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mono caps text-[11px] text-signal/60 tracking-[0.2em] mb-4">ENGINE 01 · CLIENT ENGINEERING</div>
                <p className="text-signal/70 text-[15px] leading-relaxed">Production-grade engineering for funded ventures worldwide. Custom software, AI/ML systems, cloud platforms, and blockchain systems. Delivered remotely. Based in India.</p>
              </div>
              <div>
                <div className="mono caps text-[11px] text-signal/60 tracking-[0.2em] mb-4">ENGINE 02 · PROPRIETARY PRODUCT</div>
                <p className="text-signal/70 text-[15px] leading-relaxed">An internally developed product line — the fleet. Revenue from client engineering funds product R&D. Product work raises the engineering ceiling on client delivery. Both halves feed each other.</p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section aria-labelledby="team-heading" className="border-t border-rule pt-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-4">03 · PUBLIC TEAM</div>
            <h2 id="team-heading" className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium mb-8">Public team representation</h2>
            <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
              <div className="bg-obsidian p-8 md:p-12">
                <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">FOUNDER</div>
                <div className="caps text-[32px] text-signal font-medium mb-2">Laukik</div>
                <div className="mono caps text-[11px] text-signal/60 tracking-[0.15em] mb-4">Systems Architecture · AI Infrastructure</div>
                <p className="text-signal/65 text-[14px] leading-relaxed">Leads full-stack engineering and systems architecture. AI/ML pipelines, blockchain infrastructure, cloud platforms, and production delivery. Primary architect of LokiAI.</p>
              </div>
              <div className="bg-obsidian p-8 md:p-12">
                <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-4">PRODUCT DESIGNER</div>
                <div className="caps text-[32px] text-signal font-medium mb-2">Shrusti</div>
                <div className="mono caps text-[11px] text-signal/60 tracking-[0.15em] mb-4">UI/UX · Illustration · Creative Systems</div>
                <p className="text-signal/65 text-[14px] leading-relaxed">Contributes to product interfaces, UI/UX, illustration, visual systems, and creative direction across THE SHRIKS. Personal details are intentionally kept private.</p>
              </div>
            </div>
          </section>

          {/* Products */}
          <section aria-labelledby="products-heading" className="border-t border-rule pt-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-4">04 · PRODUCTS</div>
            <h2 id="products-heading" className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium mb-8">The fleet</h2>
            <div className="flex flex-col gap-px bg-rule border border-rule">
              <div className="bg-obsidian p-8 md:p-10">
                <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-3">SHIP I · LIVE — TRAILER RELEASED · PLATFORM IN BUILD</div>
                <h3 className="caps text-[24px] text-signal font-medium mb-3">
                  <Link href="/fleet/lokiai" className="hover:text-signal/80 transition-colors">LokiAI</Link>
                </h3>
                <p className="text-signal/70 text-[15px] leading-relaxed max-w-[60ch]">
                  LokiAI is an Android-first, hardware-aware deployment layer for local AI. It combines workload requirements with a device profile to identify, package, deploy, and validate a compatible model and runtime path. Android is the first proving ground — compatibility expands through measured evidence.
                </p>
              </div>
              <div className="bg-obsidian p-8 md:p-10">
                <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-3">SHIP II · PLANNED</div>
                <div className="caps text-[24px] text-signal/40 font-medium">Classified</div>
                <p className="text-signal/40 text-[14px] mt-2">Not yet arrived.</p>
              </div>
              <div className="bg-obsidian p-8 md:p-10">
                <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-3">SHIP III · PLANNED</div>
                <div className="caps text-[24px] text-signal/40 font-medium">Classified</div>
                <p className="text-signal/40 text-[14px] mt-2">Not yet arrived.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact-heading" className="border-t border-rule pt-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-4">05 · CONTACT</div>
            <h2 id="contact-heading" className="caps text-[32px] md:text-[48px] text-signal tracking-tight font-medium mb-8">Official contact</h2>
            <div className="text-signal/70 text-[16px] leading-relaxed">
              <p>Primary contact: <a href="mailto:transmission@theshriks.space" className="text-signal hover:text-signal/80 underline underline-offset-4 transition-colors">transmission@theshriks.space</a></p>
              <p className="mt-4">Official domain: <a href="https://theshriks.space" className="text-signal hover:text-signal/80 underline underline-offset-4 transition-colors">theshriks.space</a></p>
            </div>
          </section>

        </div>

        <div className="mt-24 pt-12 border-t border-rule flex items-center justify-between">
          <span className="mono caps text-[10px] text-signal/30 tracking-[0.2em]">FACTS · CANONICAL RECORD</span>
          <Link href="/" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">BACK TO HOME →</Link>
        </div>

      </div>
    </main>
  );
}
