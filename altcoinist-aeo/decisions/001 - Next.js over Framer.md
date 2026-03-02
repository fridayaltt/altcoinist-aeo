---
date: 2026-02-27
status: accepted
decided_by: Christian + Friday
---

# ADR-001: Next.js Static Export over Framer

## Context
Needed AEO pages on altcoinist.com. Framer is the existing website builder but:
- Direct Framer access risky (breakage potential)
- Framer MCP requires browser plugin + WebSocket bridge
- No code control for autonomous agent updates

## Decision
Build AEO pages as a separate Next.js static site on Vercel. Use Cloudflare Worker for path-based routing — specific paths go to Vercel, everything else stays on Framer.

## Consequences
- ✅ Full code control — agents can update autonomously
- ✅ Static export = CDN-edge cached, no server needed
- ✅ Framer untouched — zero breakage risk
- ✅ Cost: $0 (Vercel free tier)
- ⚠️ Requires CF Worker update (Christian must paste code)
- ⚠️ Two systems to maintain (Framer + Vercel)
