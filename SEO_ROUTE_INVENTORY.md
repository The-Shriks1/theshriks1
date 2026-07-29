# SEO Route Inventory

## Confirmed Repository Evidence
The application uses Next.js App Router. The following routes are verified in `src/app`:

### Canonical Public Pages (Indexable, 200 OK)
- `/` - Homepage (canonical index)
- `/services` - Engineering Disciplines
- `/services/custom-software-engineering` - Service page
- `/services/ai-ml-systems` - Service page
- `/services/cloud-platform-engineering` - Service page
- `/services/blockchain-engineering` - Service page
- `/fleet/lokiai` - Product page
- `/commanders` - Team page
- `/facts` - Canonical facts page
- `/contact` - Contact page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Use

### Redirects (Single-Page App smooth scrolling aliases)
These return redirects (usually 307/308 via Next.js) to homepage hash fragments.
- `/broadcast` -> `/#broadcast`
- `/fleet` -> `/#fleet`
- `/overview` -> `/#overview`
- `/the-shriks` -> `/#the-shriks`
- `/transmit` -> `/#transmit`

### Unindexed / Classified Pages
- `/fleet/[slug]` - Classified ships (Ship II, Ship III). Set to `noindex` via `metadata.ts` or page metadata.

## Inferred Issues
- The redirects (`/broadcast`, etc.) exist as physical `page.tsx` routes containing `redirect()` calls. This is clean Next.js behavior.
- Sitemap correctly excludes redirects and unindexed routes.

## Proposed Changes
- No route deletions needed. The current architecture perfectly aligns with the required canonical route families.
