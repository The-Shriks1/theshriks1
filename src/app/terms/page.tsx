import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.terms);

export default function TermsPage() {
  const lastUpdated = "27 July 2026";

  return (
    <main className="bg-obsidian min-h-[100svh] pt-32 md:pt-40 pb-48">
      <div className="max-w-[900px] mx-auto px-6 md:px-14">

        <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
          <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
          <span>→</span>
          <span className="text-signal">TERMS</span>
        </nav>

        <div className="mb-16 border-b border-rule pb-12">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">LAST UPDATED: {lastUpdated}</div>
          <h1 className="caps text-[48px] md:text-[72px] leading-[0.9] tracking-tight font-medium">
            Terms of use.
          </h1>
        </div>

        <div className="flex flex-col gap-12 text-signal/75 text-[15px] leading-relaxed">

          <section aria-labelledby="acceptance">
            <h2 id="acceptance" className="caps text-[20px] text-signal font-medium mb-4">Acceptance</h2>
            <p>By accessing or using theshriks.space and affiliated THE SHRIKS properties, you agree to these terms. If you do not agree, do not use the site.</p>
          </section>

          <section aria-labelledby="content">
            <h2 id="content" className="caps text-[20px] text-signal font-medium mb-4">Content</h2>
            <p>All content on this site — including text, visuals, videos, 3D models, and code — is the property of THE SHRIKS unless otherwise attributed. You may not reproduce, distribute, or create derivative works from this content without written permission.</p>
          </section>

          <section aria-labelledby="accuracy">
            <h2 id="accuracy" className="caps text-[20px] text-signal font-medium mb-4">Accuracy of information</h2>
            <p>We make reasonable efforts to ensure the accuracy of information published on this site. Product goals described are not the same as shipped capabilities. Benchmarks require retained proof — we do not publish performance claims without evidence. We do not warrant that any information on this site is complete, accurate, or current.</p>
          </section>

          <section aria-labelledby="links">
            <h2 id="links" className="caps text-[20px] text-signal font-medium mb-4">External links</h2>
            <p>This site links to external platforms and services not operated by THE SHRIKS. We are not responsible for the content, privacy practices, or reliability of external sites.</p>
          </section>

          <section aria-labelledby="limitation">
            <h2 id="limitation" className="caps text-[20px] text-signal font-medium mb-4">Limitation of liability</h2>
            <p>THE SHRIKS is not liable for any damages arising from the use of, or inability to use, this site or its content. The site is provided as-is without warranty of any kind.</p>
          </section>

          <section aria-labelledby="changes-terms">
            <h2 id="changes-terms" className="caps text-[20px] text-signal font-medium mb-4">Changes</h2>
            <p>We may update these terms as required. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section aria-labelledby="contact-terms">
            <h2 id="contact-terms" className="caps text-[20px] text-signal font-medium mb-4">Contact</h2>
            <p>For legal enquiries: <a href="mailto:transmission@theshriks.space" className="text-signal underline underline-offset-4 hover:text-signal/80 transition-colors">transmission@theshriks.space</a></p>
          </section>

        </div>

        <div className="mt-24 pt-12 border-t border-rule flex items-center justify-between">
          <Link href="/privacy" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← PRIVACY POLICY</Link>
          <Link href="/" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">BACK TO HOME →</Link>
        </div>

      </div>
    </main>
  );
}
