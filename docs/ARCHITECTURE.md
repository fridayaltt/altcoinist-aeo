# System Architecture — Altcoinist AEO

## Overview

```
                      altcoinist.com (Cloudflare)
                              │
                    Cloudflare Worker (routing)
                     /                    \
              /guides/*                everything else
              /compare/*
              /brand-facts
                   │                        │
            Vercel (this repo)         Framer site
            Next.js static             (unchanged)
            export (SSG)
                   │
           6 AEO-optimized pages
           with JSON-LD schemas
```

## Components

### 1. Cloudflare Worker
**Location:** Cloudflare Dashboard → Workers  
**Source:** `deliverables/aeo/updated-cloudflare-worker.js`  
**Managed by:** Christian (Cloudflare login required)

Handles routing for all `altcoinist.com` traffic:
- `/guides/*` → proxies to Vercel
- `/compare/*` → proxies to Vercel
- `/brand-facts[/]` → proxies to Vercel
- `/.well-known/brand-facts.json` → serves JSON inline (no Vercel needed)
- Everything else → passes through to Framer

**No new Cloudflare routes needed** — existing wildcard routes catch everything.

### 2. Next.js AEO Site (This Repo)
**Repo:** `github.com/fridayaltt/altcoinist-aeo`  
**Hosting:** Vercel  
**URL:** `altcoinist-aeo.vercel.app`  
**Build:** `next build` → static export to `out/`  
**Deploy:** Auto-deploys on push to main

Stack:
- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind v4
- No database, no server functions — pure static HTML

### 3. Main Framer Site
**URL:** `altcoinist.com` (root)  
**Managed by:** Christian via Framer  
**Not affected by this system** — Cloudflare Worker passes all unmatched paths through

### 4. Brand Facts JSON
**URL:** `altcoinist.com/.well-known/brand-facts.json`  
**Source:** `deliverables/aeo/brand-facts.json`  
**Served by:** Cloudflare Worker (inline, not from Vercel)  
**Purpose:** Machine-readable entity definition for AI crawlers

### 5. Skill System (Monitoring + Reddit)
**AEO Tracker:** `skills/aeo-tracker/SKILL.md`  
- Weekly citation audit across AI models
- Tracks baseline → improvement over time

**AEO Reddit:** `skills/aeo-reddit/SKILL.md`  
- Value-first Reddit post templates
- Citation-optimized content patterns
- Phase 5 (not yet deployed)

## Data Flow

### When a user visits `altcoinist.com/guides/best-crypto-trading-bots-2026/`:
1. DNS resolves to Cloudflare
2. Cloudflare Worker receives request
3. Worker detects path starts with `/guides/`
4. Worker fetches `altcoinist-aeo.vercel.app/guides/best-crypto-trading-bots-2026/`
5. Response returned to user — looks like it's served from altcoinist.com

### When an AI crawler visits:
Same flow. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) see the content at `altcoinist.com/guides/*` — the Cloudflare routing is transparent.

### When Vercel deploys:
1. Push to `fridayaltt/altcoinist-aeo` main branch
2. Vercel auto-builds (`next build`)
3. Static output deployed to Vercel CDN
4. Live at `altcoinist-aeo.vercel.app`
5. Cloudflare Worker automatically serves new content (no Worker redeploy needed)

## Dependency Map

```
deliverables/aeo/answer-hub-*.md ──────────────────────────────┐
deliverables/aeo/brand-facts.md ────────────────────────────── │
deliverables/aeo/compare-*.md ─────────────────────────────── │
                                                               ▼
                                              src/app/**/*.tsx (page files)
                                                               │
                                                         npm run build
                                                               │
                                                     git push → Vercel
                                                               │
                                        altcoinist-aeo.vercel.app (live)
                                                               │
                                              Cloudflare Worker (routing)
                                                               │
                                         altcoinist.com/guides/* (public)
```

## Environments

| Env | URL | When |
|-----|-----|------|
| Local dev | localhost:3000 | `npm run dev` |
| Vercel preview | `altcoinist-aeo-{hash}.vercel.app` | PRs (not configured) |
| Vercel production | `altcoinist-aeo.vercel.app` | Push to main |
| Public (via CF) | `altcoinist.com/guides/*` etc. | After CF Worker update |

## Known Limitations

- **No GitHub org access:** Repo is under `fridayaltt`, not `christianaltt`. Transfer via GitHub → Settings → Transfer Ownership when ready.
- **Vercel auto-deploy from fridayaltt/altcoinist-aeo:** Works. If transferred to `christianaltt`, reconnect Vercel project.
- **No Next.js API routes:** Static export limitation. If dynamic functionality needed later, switch to non-export mode.
- **Cloudflare Worker body for non-GET:** Worker passes request body, should work for all methods. Not tested beyond GET.
