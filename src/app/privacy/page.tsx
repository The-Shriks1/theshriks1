import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.privacy);

export default function PrivacyPage() {
  const lastUpdated = "27 July 2026";

  return (
    <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
      <div className="max-w-[900px] mx-auto px-6 md:px-14">

        <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
          <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
          <span>→</span>
          <span className="text-signal">PRIVACY</span>
        </nav>

        <div className="mb-16 border-b border-rule pb-12">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">LAST UPDATED: {lastUpdated}</div>
          <h1 className="caps text-[48px] md:text-[72px] leading-[0.9] tracking-tight font-medium">
            Privacy policy.
          </h1>
        </div>

        <div className="flex flex-col gap-12 text-signal/75 text-[15px] leading-relaxed">

          <section aria-labelledby="overview-privacy">
            <h2 id="overview-privacy" className="caps text-[20px] text-signal font-medium mb-4">Overview</h2>
            <p>This policy describes the privacy practices of THE SHRIKS for the website at <strong>theshriks.space</strong> and affiliated properties. THE SHRIKS is an independent systems studio based in India.</p>
            <p className="mt-4">Primary contact for privacy matters: <a href="mailto:transmission@theshriks.space" className="text-signal underline underline-offset-4 hover:text-signal/80 transition-colors">transmission@theshriks.space</a></p>
          </section>

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="caps text-[20px] text-signal font-medium mb-4">Information we collect</h2>
            <ul className="flex flex-col gap-3">
              <li><strong>Contact form submissions:</strong> When you submit the contact form, we collect your name, email address, subject, and message. This information is transmitted to our internal email address and is not stored in a public database.</li>
              <li><strong>Analytics:</strong> We may collect anonymised usage data (page views, general geographic region) via privacy-respecting analytics tools where deployed. We do not use persistent cross-site tracking.</li>
              <li><strong>Server logs:</strong> Our hosting provider may log standard server request metadata including IP addresses for security and error-diagnosis purposes.</li>
            </ul>
          </section>

          <section aria-labelledby="data-use">
            <h2 id="data-use" className="caps text-[20px] text-signal font-medium mb-4">How we use information</h2>
            <ul className="flex flex-col gap-3">
              <li>Contact form submissions are used solely to respond to your enquiry.</li>
              <li>We do not sell, share, or transfer your personal information to third parties for marketing purposes.</li>
              <li>We do not use your information to build advertising profiles.</li>
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="caps text-[20px] text-signal font-medium mb-4">Cookies</h2>
            <p>This site uses minimal cookies required for basic functionality (such as session state during form submission). We do not deploy advertising cookies or persistent cross-site tracking cookies.</p>
          </section>

          <section aria-labelledby="your-rights">
            <h2 id="your-rights" className="caps text-[20px] text-signal font-medium mb-4">Your rights</h2>
            <p>You may request access to, correction of, or deletion of any personal information you have provided to us by contacting <a href="mailto:transmission@theshriks.space" className="text-signal underline underline-offset-4 hover:text-signal/80 transition-colors">transmission@theshriks.space</a>.</p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="caps text-[20px] text-signal font-medium mb-4">Changes to this policy</h2>
            <p>We may update this policy as our practices change. Material changes will be reflected by updating the &quot;Last Updated&quot; date at the top of this page.</p>
          </section>

        </div>

        <div className="mt-24 pt-12 border-t border-rule flex items-center justify-between">
          <Link href="/terms" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">TERMS OF USE →</Link>
          <Link href="/" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">BACK TO HOME →</Link>
        </div>

      </div>
    </main>
  );
}
