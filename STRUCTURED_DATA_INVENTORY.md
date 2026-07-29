# Structured Data Inventory

## Confirmed Repository Evidence
- `src/components/StructuredData.tsx` exists and defines schemas for `Organization`, `WebSite`, `BreadcrumbList`, `SoftwareApplication` (for LokiAI), and `Service`.
- `src/app/page.tsx` includes `<HomepageStructuredData />`.
- `src/app/services/custom-software-engineering/page.tsx` includes `<ServiceStructuredData />`.
- `src/app/fleet/lokiai/page.tsx` includes `<LokiAIStructuredData />`.

## Inferred Issues
- We should ensure `Person` schema is on `/commanders`.

## Proposed Changes
- Add `PersonStructuredData` to `/commanders` if missing.
