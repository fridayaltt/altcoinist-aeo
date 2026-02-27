---
date: 2026-02-27
status: accepted
decided_by: Friday
---

# ADR-002: Cloudflare Worker Path-Based Routing

## Context
altcoinist.com runs on Framer. AEO pages live on Vercel. Need both under one domain for SEO/AEO.

## Decision
Cloudflare Worker intercepts requests at the edge:
- `/guides/*`, `/compare/*`, `/brand-facts` → proxy to Vercel
- `/.well-known/*` → serve brand-facts.json directly
- Everything else → pass through to Framer origin

## Consequences
- ✅ Single domain for all content (altcoinist.com)
- ✅ AI crawlers see one authoritative site
- ✅ Framer completely untouched
- ✅ Free tier (CF Workers free for <100k requests/day)
- ⚠️ DNS must be Cloudflare-proxied (orange cloud) — done Feb 27
- ⚠️ Worker code update is manual (Christian must paste in CF dashboard)
