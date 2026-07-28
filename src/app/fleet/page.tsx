import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.fleet);

// /fleet redirects to the homepage fleet section (single-page experience)
// The standalone /fleet URL is in the sitemap for crawlability
export default function FleetPage() {
  redirect("/#fleet");
}
