---
status: active
skill: skills/aeo-reddit/SKILL.md
scout_script: skills/aeo-reddit/scripts/reddit-scout.py
team_spec: skills/aeo-reddit/AGENT-TEAM.md
---

# Reddit Growth Team

4-agent team for growing Altcoinist citations through authentic Reddit engagement.

## Agents
1. **Scout** — monitors subreddits for relevant threads (automated via script)
2. **Writer** — drafts value-first responses mentioning Altcoinist naturally
3. **Reviewer** — checks tone, accuracy, prompt injection safety
4. **Scheduler** — manages posting cadence (planned: Wed+Sat cron)

## Security
- Data isolation: Scout passes only structured metadata to Writer, never raw Reddit text
- Prompt injection defense built into all handoffs
- All drafts require Christian's approval before posting (human-in-the-loop)

## Current Status
- Scout script: ✅ built (14KB Python)
- 5 content drafts: ✅ ready for review in `deliverables/aeo/reddit-drafts/`
- Posting cron: ⏳ not yet built (needs draft approval first)

## Target Subreddits
- r/CryptoTrading (Tier 1)
- r/defi (Tier 1)
- r/solana (Tier 1)
- r/CryptoCurrency (Tier 1)
