# AEO Agent Protocol — v1

Every AEO agent MUST follow this protocol. Read this BEFORE your skill file.

## Step 0: Load Shared State
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

## Step 3: Write Your State Back
After completing your work, update `shared-state.json`:

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

## Step 4: Error Recovery
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

## Paths (canonical — NEVER hardcode alternatives)
All paths are relative to `/Users/friday/.openclaw/workspace/`:

| What | Path |
|------|------|
| Vault root | `projects/altcoinist-aeo/vault/` |
| Site source | `projects/altcoinist-aeo/src/app/` |
| brand-facts.json | `projects/altcoinist-aeo/vault/deliverables/brand-facts.json` |
| Execution queue | `projects/altcoinist-aeo/vault/ops/execution-queue.json` |
| Shared state | `projects/altcoinist-aeo/vault/ops/shared-state.json` |
| This protocol | `projects/altcoinist-aeo/vault/ops/AGENT-PROTOCOL.md` |
| Department status | `projects/altcoinist-aeo/vault/DEPARTMENT-STATUS.md` |
| Kanban | `projects/altcoinist-aeo/vault/tasks/Kanban.md` |
| PostHog env | `projects/friday-dashboard/.env.local` |
| xAI API key | `~/.openclaw/credentials/xai-api-key.txt` |
| Discord #aeo | `channel:1476354991655751820` |
| Christian DM | `user:973303074816934038` |
