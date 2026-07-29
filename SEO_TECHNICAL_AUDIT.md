# SEO Technical Audit

## Confirmed Repository Evidence
- **Framework**: Next.js (App Router)
- **Metadata**: Implemented natively via `src/lib/metadata.ts` and `generateMetadata`.
- **Canonical URLs**: Implemented properly via `metadataBase` and `alternates: { canonical: ... }` in `metadata.ts`.
- **Robots.txt**: Exists natively (`src/app/robots.ts`). Currently allows some AI bots, but misses specific ones required by the prompt (e.g. `OAI-SearchBot`, `ChatGPT-User`, `Googlebot`, `Bingbot`).
- **Sitemap.xml**: Exists natively (`src/app/sitemap.ts`). Includes all required canonical routes with manual `lastModified` dates. Excludes `noindex` routes.

## Confirmed Production Evidence
- Curl validation confirms that `https://theshriks.space` returns a 308 permanent redirect to `https://www.theshriks.space/`.
- `SITE_URL` in `src/lib/metadata.ts` was initially set to the bare domain. We have updated it to `https://www.theshriks.space` to match production behavior.

## Inferred Issues
- `robots.ts` must be updated to explicitly address `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, and `ClaudeBot`.

## Proposed Changes
- Update `robots.ts` to include `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`.
