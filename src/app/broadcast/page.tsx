import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.broadcast);

export default function BroadcastPage() {
  redirect("/#broadcast");
}
