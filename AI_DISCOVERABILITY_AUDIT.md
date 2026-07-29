# AI Discoverability Audit

## Confirmed Repository Evidence
- A `/facts` page exists that explicitly outlines business facts for AI ingestion.
- `public/llms.txt` exists and contains factual information.
- `robots.ts` allows some AI agents (`GPTBot`, `Claude-Web`, `PerplexityBot`), but lacks `OAI-SearchBot` and `ChatGPT-User`.

## Inferred Issues
- `robots.ts` needs a deliberate policy regarding `GPTBot` (training vs search retrieval).

## Proposed Changes
- Add `OAI-SearchBot` and `ChatGPT-User` to `robots.ts` under allowed.
- Disallow `GPTBot`, `CCBot`, and `anthropic-ai` to explicitly opt-out of model training. Allow `ClaudeBot` and `PerplexityBot` for search capabilities.
