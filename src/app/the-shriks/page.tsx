import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["the-shriks"]);

// /the-shriks is a film, branded editorial page, or launch surface — preserve it.
// It redirects to the homepage the-shriks section where the brand film lives.
export default function TheShriksPage() {
  redirect("/#the-shriks");
}
