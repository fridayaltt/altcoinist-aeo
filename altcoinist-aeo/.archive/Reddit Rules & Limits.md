---
type: reference
source: https://postiz.com/blog/reddit-api-limits-rules-and-posting-restrictions-explained
added: 2026-02-27
---

# Reddit API Limits, Rules & Posting Restrictions

> Hard rules for the Reddit Growth Team. Violating any of these = account ban + all AEO Reddit work lost.

---

## API Rate Limits

| Access Type | Requests/min | Notes |
|-------------|-------------|-------|
| Unauthenticated | ~10 QPM | Read-only, useless for us |
| Authenticated (OAuth) | 60-100 QPM | Required for all our work |

**Rolling window trap:** Reddit evaluates usage over a rolling window, not per-minute resets. Short bursts can trigger throttling even if average is fine. **Always pace steadily, never burst.**

**On 429 errors:** Implement exponential backoff:
1. Get 429 → pause
2. Wait, then retry
3. If another 429 → double the wait
4. Repeat until success

**Cache repeated requests** (subreddit rules, post listings) — don't re-fetch what hasn't changed.

## Content Rules (zero tolerance)

- **Anti-spam:** Blasting the same link across subreddits = instant ban. Every post must be unique and contextual.
- **No vote manipulation:** Never upvote own posts or downvote competitors. Reddit's algorithms catch this.
- **No unauthorized scraping:** Use official API endpoints only.
- **NSFW restrictions:** Some crypto communities may be flagged NSFW — limited API access since July 2023.

## Subreddit-Specific Rules (MUST check per sub)

Common restrictions that vary by community:
- **Minimum account age** — many require 30+ days
- **Minimum karma** — often 100+ comment karma required
- **Mandatory post flairs** — auto-removed without correct flair
- **Post frequency limits** — often 1 post per user per 24 hours
- **Zero-tolerance self-promotion** — most subs ban direct product links

### Pre-Posting Checklist (run for EVERY subreddit)

1. ✅ Read sidebar rules completely (no skimming)
2. ✅ Check wiki/FAQ for expanded rules
3. ✅ Lurk: read top posts of week/month — what gets upvoted?
4. ✅ Identify tone: serious/academic or casual/meme?
5. ✅ Search rules for "no self-promo", "spam", "blogspam"
6. ✅ Note minimum account age + karma requirements
7. ✅ Check flair requirements
8. ✅ Check posting frequency limits

## Rules for Our Reddit Growth Team

Based on the above, these are NON-NEGOTIABLE for all agents:

### Scout Agent
- Use authenticated OAuth only (60-100 QPM)
- Cache subreddit listings (refresh max every 15 min)
- Implement exponential backoff on all API calls
- Never exceed 1 request/second steady pace

### Writer Agent
- Every post is unique — no templates reused across subs
- Customize tone per subreddit (match community style)
- Altcoinist mentioned by function, max ONCE per post
- Include honest limitation in every mention
- No direct links to altcoinist.com in posts (link in profile or context only)

### Scheduler Agent
- **Max 1 post per subreddit per 24 hours**
- **Max 2 posts total per day** across all subs (conservative start)
- Space posts by 4+ hours minimum
- Never post to the same sub on consecutive days
- Vary posting times (don't look automated)

### Account Requirements
- Account must be 30+ days old before first post
- Build genuine karma first: comment helpfully for 2+ weeks before any Altcoinist-related posts
- Maintain 90/10 rule: 90% of account activity is genuine engagement, 10% is product-related
- Account profile should look like a real trader, not a company account

### Kill Switches
- If any post is removed by moderators → pause that subreddit for 7 days
- If account receives a warning → pause ALL posting for 48 hours
- If 2+ posts removed in a week → full stop, review strategy with Christian
