---
status: active
cron_id: accc997b
schedule: Mon 09:00 UTC
model: openai-codex/gpt-5.2
skill: skills/aeo-tracker/SKILL.md
script: skills/aeo-tracker/scripts/run-audit.py
---

# Tracker Agent

Weekly citation audit — queries Grok (and eventually ChatGPT, Perplexity, Gemini) to measure how often Altcoinist is recommended.

## What It Does
- Runs 15 priority queries against Grok API
- Scores each response: mentioned? recommended? top-3?
- Compares to previous week → delta tracking
- Posts results to #seo Discord channel

## Scoring
- 0 = not mentioned
- 1 = mentioned by name only
- 2 = mentioned with description
- 3 = recommended / top-3 position

## Baseline (Feb 26)
- Altcoinist: 0/50 organic, 6/50 named-only
- 3Commas: 14/50 | Pionex: 4/50 | Cryptohopper: 4/50
