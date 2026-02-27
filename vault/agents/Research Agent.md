---
status: active
cron_id: f873f97d
schedule: Daily 04:30 UTC
model: openai-codex/gpt-5.2
skill: skills/aeo-research/SKILL.md
script: skills/aeo-research/scripts/daily-scan.py
---

# Research Agent

Scans Reddit, SEO blogs, and competitor content daily for AEO opportunities and threats.

## What It Does
- Monitors 4 subreddits (r/CryptoTrading, r/defi, r/solana, r/CryptoCurrency) for crypto bot discussions
- Scans SEO/AEO blog RSS feeds for new techniques
- Outputs structured findings to [[research/Daily Findings]]
- Flags high-priority opportunities for Strategy Agent

## Outputs
- `memory/tmp/groups/aeo-research-YYYY-MM-DD.json` — raw scan data
- Appends to [[research/Daily Findings]] — human-readable summary

## First Run
- Feb 27, 2026: 10 findings from Reddit + SEO blogs
