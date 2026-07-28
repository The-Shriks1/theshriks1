import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

// Static modification dates — do not regenerate dynamically on every request.
// Update these when page content materially changes.
const DATES = {
  home: new Date("2026-07-27"),
  fleetLokiai: new Date("2026-07-27"),
  commanders: new Date("2026-07-27"),
  services: new Date("2026-07-27"),
  servicesCustomSoftware: new Date("2026-07-27"),
  servicesAiMl: new Date("2026-07-27"),
  servicesCloud: new Date("2026-07-27"),
  servicesBlockchain: new Date("2026-07-27"),
  contact: new Date("2026-07-27"),
  facts: new Date("2026-07-27"),
  privacy: new Date("2026-07-27"),
  terms: new Date("2026-07-27"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    {
      url: SITE_URL,
      lastModified: DATES.home,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/fleet/lokiai`,
      lastModified: DATES.fleetLokiai,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/commanders`,
      lastModified: DATES.commanders,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Services
    {
      url: `${SITE_URL}/services`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/custom-software-engineering`,
      lastModified: DATES.servicesCustomSoftware,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/ai-ml-systems`,
      lastModified: DATES.servicesAiMl,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/cloud-platform-engineering`,
      lastModified: DATES.servicesCloud,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/blockchain-engineering`,
      lastModified: DATES.servicesBlockchain,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Utility pages
    {
      url: `${SITE_URL}/contact`,
      lastModified: DATES.contact,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/facts`,
      lastModified: DATES.facts,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: DATES.privacy,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: DATES.terms,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Excluded from sitemap:
    // /fleet/classified-ii, /fleet/classified-iii — noindex, thin
    // /api/* — not indexable
    // /transmit — redirected to /contact
  ];
}
