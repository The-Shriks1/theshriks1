import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA, SITE_URL } from "@/lib/metadata";
import { ServiceStructuredData } from "@/components/StructuredData";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["services/ai-ml-systems"]);

export default function AiMlSystemsPage() {
  return (
    <>
      <ServiceStructuredData
        name="AI & ML Systems Engineering — THE SHRIKS"
        description="Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale."
        url={`${SITE_URL}/services/ai-ml-systems`}
        breadcrumbs={[
          { name: "THE SHRIKS", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
          { name: "AI & ML Systems", item: `${SITE_URL}/services/ai-ml-systems` },
        ]}
      />
      <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <Link href="/services" className="hover:text-signal transition-colors">SERVICES</Link>
            <span>→</span>
            <span className="text-signal">AI & ML SYSTEMS</span>
          </nav>

          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">SERVICE · II</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              AI and ML systems engineering.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">What we engineer</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Multi-agent orchestration systems with deterministic execution paths",
                  "Model pipeline architecture: ingestion, preprocessing, inference, and post-processing",
                  "Edge-inference deployment on resource-constrained hardware (including Android)",
                  "Hardware-aware model selection and runtime path validation",
                  "AI assistant integration with grounded, hallucination-resistant behaviour",
                  "Production FastAPI backends for ML workloads",
                  "NVIDIA NIM integration and AI inference acceleration",
                  "Autonomous agent systems with failure recovery and restart logic",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-signal/70 text-[15px] leading-relaxed">
                    <span className="mono text-signal/30 text-[10px] mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">Relevant product: LokiAI</h2>
              <div className="flex flex-col gap-6 text-signal/70 text-[15px] leading-relaxed">
                <p>
                  LokiAI is THE SHRIKS&apos; own AI infrastructure product. It is an Android-first, hardware-aware deployment layer for local AI — the product of the same engineering discipline applied to client AI/ML work.
                </p>
                <p>
                  Product goals are not the same as shipped capabilities. We make this distinction clear in our own products and apply the same standard to client work.
                </p>
                <p>
                  Benchmarks require retained proof. We do not publish performance claims without evidence, and we apply the same standard to client deliverables.
                </p>
              </div>
              <Link
                href="/fleet/lokiai"
                className="inline-block mt-6 mono caps text-[11px] text-signal/60 tracking-[0.2em] border border-rule px-5 py-3 hover:border-signal/50 hover:text-signal transition-all"
              >
                VIEW LOKIAI →
              </Link>
            </div>
          </div>

          <div className="border-t border-rule pt-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-6 flex-wrap">
              <Link href="/services/custom-software-engineering" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← CUSTOM SOFTWARE</Link>
              <Link href="/services/cloud-platform-engineering" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">CLOUD PLATFORM →</Link>
            </div>
            <Link href="/contact" className="mono caps text-[11px] text-signal border border-signal/40 px-8 py-4 hover:bg-signal hover:text-obsidian transition-colors">
              START AN ENGAGEMENT →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
