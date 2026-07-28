import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA, SITE_URL } from "@/lib/metadata";
import { ORG_ID } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.commanders);

function CommandersStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/commanders`,
    name: "Commanders — THE SHRIKS",
    description: "Public team representation for THE SHRIKS.",
    publisher: { "@id": ORG_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CommandersPage() {
  return (
    <>
      <CommandersStructuredData />
      <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <span className="text-signal">COMMANDERS</span>
          </nav>

          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">COMMANDERS&apos; BRIDGE · 04</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              The commanders.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              THE SHRIKS operates as a systems studio with a small, focused team. Public team representation is listed below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">

            {/* Laukik */}
            <article className="bg-obsidian p-8 md:p-12 flex flex-col gap-7">
              <div className="flex items-baseline justify-between mono caps text-[10px] tracking-[0.22em]">
                <span className="text-signal/40">COMMANDER · 01</span>
                <span className="text-signal/60">FOUNDER</span>
              </div>
              <div className="relative flex items-end gap-6">
                <h2 className="caps text-[48px] md:text-[72px] leading-none tracking-tight">Laukik</h2>
              </div>
              <div className="mono caps text-[11px] text-signal/55 tracking-[0.22em]">
                Systems Architecture · AI Infrastructure
              </div>
              <p className="text-signal/70 leading-relaxed text-[15px] max-w-[42ch]">
                Leads full-stack engineering and systems architecture. AI/ML pipelines, blockchain infrastructure, cloud platforms, and production delivery. Primary architect of LokiAI — from multi-agent orchestration to the autonomous ML agent system that powers it.
              </p>
            </article>

            {/* Shrusti */}
            <article className="bg-obsidian p-8 md:p-12 flex flex-col gap-7">
              <div className="flex items-baseline justify-between mono caps text-[10px] tracking-[0.22em]">
                <span className="text-signal/40">COMMANDER · 02</span>
                <span className="text-signal/60">PRODUCT DESIGNER</span>
              </div>
              <div className="relative flex items-end gap-6">
                <h2 className="caps text-[48px] md:text-[72px] leading-none tracking-tight">Shrusti</h2>
              </div>
              <div className="mono caps text-[11px] text-signal/55 tracking-[0.22em]">
                UI/UX · Illustration · Creative Systems
              </div>
              <p className="text-signal/70 leading-relaxed text-[15px] max-w-[42ch]">
                Contributes to product interfaces, UI/UX, illustration, visual systems, and creative direction across THE SHRIKS. Personal details are intentionally kept private.
              </p>
            </article>

          </div>

          <div className="mt-24 pt-12 border-t border-rule flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <Link href="/" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← HOME</Link>
            <Link href="/contact" className="mono caps text-[11px] text-signal border border-signal/40 px-8 py-4 hover:bg-signal hover:text-obsidian transition-colors">
              GET IN TOUCH →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
