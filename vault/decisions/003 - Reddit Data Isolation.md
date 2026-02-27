---
date: 2026-02-27
status: accepted
decided_by: Friday
---

# ADR-003: Reddit Agent Data Isolation

## Context
Reddit growth agents scrape public threads. Raw Reddit text could contain prompt injection attacks targeting our AI agents.

## Decision
Strict data isolation between Scout and Writer agents:
- Scout outputs only structured JSON (title, score, subreddit, URL, keyword matches)
- Raw Reddit body/selftext is NEVER passed to any downstream agent
- Writer works from metadata + brand-facts.json only
- All external content runs through prompt-guard skill

## Consequences
- ✅ Prompt injection attacks in Reddit posts can't reach our Writer agent
- ✅ Writer produces original content, not derivative of scraped text
- ⚠️ Writer has less context about the specific thread (trade-off)
- ⚠️ Scout script is more complex (must extract metadata cleanly)
