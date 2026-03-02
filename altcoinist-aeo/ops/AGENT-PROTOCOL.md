# AEO Agent Protocol — v1

Every AEO agent MUST follow this protocol. Read this BEFORE your skill file.

## Step 0a: Load ROADMAP + Knowledge Bases + Your Identity
```
Read: projects/altcoinist-aeo/altcoinist-aeo/ROADMAP.md              ← PRIORITIES (what to work on)
Read: projects/altcoinist-aeo/altcoinist-aeo/knowledge/altcoinist-kb.md   ← product truth
Read: projects/altcoinist-aeo/altcoinist-aeo/knowledge/competitors-kb.md  ← competitor truth
Read: projects/altcoinist-aeo/altcoinist-aeo/AEO-DEPARTMENT.md           ← org chart
Read: projects/altcoinist-aeo/altcoinist-aeo/agents/context/{your_name}.md ← your learnings
```
**ROADMAP.md is the single authority on priorities.** Your work must align with the current NOW section. If your planned task isn't in NOW or NEXT, check if it still matters before doing it.
The knowledge bases are the SINGLE SOURCE OF TRUTH for product facts and competitor data. Never hardcode product stats, chain counts, or competitor features — always reference the KBs.
Agent names map to files: research, tracker, ops, cso, builder, strategy, data-refresh, dept-review, weekly-report.

**After your run:** If you learned something new (a gotcha, a better approach, a path that moved), append it to your learnings section. This is how you get smarter over time.

## Step 0b: Load Shared State
```
Read: projects/altcoinist-aeo/vault/ops/shared-state.json
```
This file contains:
- **paths** — canonical locations for every file you might need (don't hardcode paths in your head)
- **product_stats** — current verified product numbers (use these, don't grep for them)
- **agents** — what every other agent did recently
- **event_log** — recent cross-agent events (read the last 10)

## Step 1: Check Event Log
Before doing your work, scan the last 10 events in `event_log[]` for anything relevant to you:
- Builder: look for `gap_found` events from CSO
- CSO: look for `score_drop` events from Tracker, `build_shipped` events from Builder
- Strategy: look for everything from the past week
- Tracker: look for `build_shipped` events to correlate content changes → score changes

## Step 2: Do Your Work
Follow your skill file (SKILL.md).

## Step 3: Write Your State Back (with validation)
After completing your work, update `shared-state.json`:

### 3a. Validate before writing
Before updating shared state, sanity-check your output:
- **Scores/metrics:** If a score changed by >5 points from previous value, flag it as anomalous in the event. Don't silently write a jump from 0 to 15.
- **Queue items:** If adding to execution queue, verify the gap actually exists by checking the source data (Tracker scores, Research findings). Don't queue items based on assumptions.
- **Product stats:** If updating stats, verify the new number is within 20% of the previous value. A jump from 17,000 to 50,000 traders is a data error, not growth.
- **Event descriptions:** Must be specific and falsifiable. "Found 3 opportunities" is good. "Improved things" is not.

If something looks wrong, log it as an anomaly event and DO NOT update the field. Let Dept Review investigate.

### 3b. Update your entry
1. Update your entry in `agents.{your_name}`:
   - `last_run`: ISO timestamp
   - `status`: "ok" or "error"
   - Agent-specific fields (findings count, items shipped, etc.)

2. Append to `event_log[]`:
```json
{
  "timestamp": "ISO-8601",
  "agent": "your_name",
  "event": "event_type",
  "data": { "brief": "what happened" }
}
```

Event types:
- `finding_high_priority` — Research found something P1-P2
- `gap_found` — CSO identified a gap, added to queue
- `build_shipped` — Builder deployed something (include page URL + queue item ID)
- `score_change` — Tracker detected citation score movement
- `data_refreshed` — Data Refresh updated product stats
- `issue_fixed` — Dept Review fixed a broken dependency
- `blocker_escalated` — Any agent escalated something to Christian

3. Trim event_log to last 50 entries (delete oldest).

4. Commit shared-state.json:
```bash
cd /Users/friday/.openclaw/workspace/projects/altcoinist-aeo
git add vault/ops/shared-state.json
git commit -m "state: {agent_name} update $(date +%Y-%m-%d)" --no-verify
git push origin main
```

## Step 4: Pipeline Boundary Validation (Builder + Copywriter only)
Before executing any queue item or Strategy directive, verify:
1. **Source check:** Does the queue item reference a real data source? (e.g., "Tracker query #7 scores 0" → check Tracker's actual output, not just the CSO's claim)
2. **Duplicate check:** Has this exact content already been built? Search existing pages for the topic.
3. **Relevance check:** Does this gap still exist, or was it already addressed by a previous build?

If any check fails → mark the item "invalid" with reason, skip it, pick the next one.

This prevents contagion: if the CSO hallucinates a gap, the Builder catches it before shipping useless content.

## Step 5: Error Recovery
If you find a queue item stuck in "in_progress" for >24 hours:
- Reset it to "queued" with a note: `"retry_reason": "previous run timed out"`
- Increment `"retry_count"` (create if missing)
- If retry_count >= 3 → mark as "blocked" with reason

## Feedback Tagging (Builder only)
When Builder ships a content change, tag it:
```json
{
  "event": "build_shipped",
  "data": {
    "queue_item_id": "gap-001",
    "page": "/guides/best-crypto-trading-bots-2026/",
    "change": "added 2 FAQs targeting Solana minimum investment",
    "date": "2026-02-28"
  }
}
```

When Tracker runs, it should check: "Did any `build_shipped` events happen since last run? For those pages, did the citation score change?" This creates the feedback loop.

## Step 6: Vault Hygiene (Ops Agent — daily check)
Ops Agent runs this daily as part of its status check:
1. `find altcoinist-aeo/ -name "*.md" -mtime +7 -not -path "*/.archive/*" -not -path "*/.obsidian/*" -not -path "*/decisions/*"` — any file untouched for 7+ days
2. For each stale file: is it still referenced by ROADMAP.md or another active file? If not → flag for archival
3. Check `knowledge/altcoinist-kb.md` and `knowledge/competitors-kb.md` — are the "As of" dates in metrics tables older than 14 days? If yes → flag for Data Refresh
4. Log findings to shared-state event_log as `vault_hygiene` event
5. If any critical doc is stale (ROADMAP.md, knowledge bases, AGENT-PROTOCOL.md) → escalate to #aeo

## Paths (canonical — NEVER hardcode alternatives)
All paths are relative to `/Users/friday/.openclaw/workspace/`:

| What | Path |
|------|------|
| Vault root | `projects/altcoinist-aeo/altcoinist-aeo/` |
| ROADMAP | `projects/altcoinist-aeo/altcoinist-aeo/ROADMAP.md` |
| Altcoinist KB | `projects/altcoinist-aeo/altcoinist-aeo/knowledge/altcoinist-kb.md` |
| Competitors KB | `projects/altcoinist-aeo/altcoinist-aeo/knowledge/competitors-kb.md` |
| Site source | `projects/altcoinist-aeo/src/app/` |
| brand-facts.json | `projects/altcoinist-aeo/altcoinist-aeo/deliverables/brand-facts.json` |
| Execution queue | `projects/altcoinist-aeo/altcoinist-aeo/ops/execution-queue.json` |
| Shared state | `projects/altcoinist-aeo/altcoinist-aeo/ops/shared-state.json` |
| This protocol | `projects/altcoinist-aeo/altcoinist-aeo/ops/AGENT-PROTOCOL.md` |
| Department org | `projects/altcoinist-aeo/altcoinist-aeo/AEO-DEPARTMENT.md` |
| PostHog env | `projects/friday-dashboard/.env.local` |
| xAI API key | `~/.openclaw/credentials/xai-api-key.txt` |
| Discord #aeo | `channel:1476354991655751820` |
| Christian DM | `user:973303074816934038` |
