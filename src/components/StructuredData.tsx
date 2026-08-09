import { SITE_URL, ORG_ID, WEBSITE_ID } from "@/lib/metadata";

/**
 * Organization JSON-LD — canonical definition of THE SHRIKS.
 * Used on homepage and referenced by other schemas.
 */
export function HomepageStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "THE SHRIKS",
        url: SITE_URL,
        logo: `${SITE_URL}/brand/shriks-logo.png`,
        description:
          "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI systems, cloud platforms, blockchain infrastructure, technical media, and proprietary products including LokiAI.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "transmission@theshriks.space",
          contactType: "general enquiries",
        },
        foundingDate: "2026-02-22",
        founder: {
          "@type": "Person",
          name: "Laukik",
          jobTitle: "Founder · Systems Architecture · AI Infrastructure",
        },
        member: [
          {
            "@type": "Person",
            name: "Shrusti",
            jobTitle: "Product Designer · UI/UX · Illustration · Creative Systems",
            description:
              "Contributes to product interfaces, UI/UX, illustration, visual systems, and creative direction across THE SHRIKS. Personal details are intentionally kept private.",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/in/the-shriks-041a15417/",
          "https://x.com/TheShriks",
          "https://www.instagram.com/the.shriks/",
          "https://github.com/The-Shriks",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "THE SHRIKS",
        description:
          "THE SHRIKS is an independent systems studio and product venture.",
        publisher: { "@id": ORG_ID },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

/**
 * LokiAI SoftwareApplication JSON-LD.
 */
export function LokiAIStructuredData() {
  const lokiAISchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/fleet/lokiai#product`,
        name: "LokiAI",
        url: "https://lokiai.theshriks.space",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Android",
        description:
          "LokiAI is an Android-first, hardware-aware deployment layer for local AI. It combines workload requirements with a device profile to identify, package, deploy, and validate a compatible model and runtime path.",
        creator: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "THE SHRIKS",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "LokiAI",
            item: `${SITE_URL}/fleet/lokiai`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(lokiAISchema) }}
    />
  );
}

/**
 * Service page JSON-LD.
 */
export function ServiceStructuredData({
  name,
  description,
  url,
  breadcrumbs,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumbs: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        description,
        url,
        provider: { "@id": ORG_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: bc.name,
          item: bc.item,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
