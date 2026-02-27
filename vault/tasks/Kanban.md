---

kanban-plugin: board

---

## 🔴 Blocked

- [ ] **Reddit account + API key** #p0 #blocker
	  Need a Reddit account Friday can post from + API credentials. Go to https://www.reddit.com/prefs/apps → create app → "script" type → copy client_id + client_secret. Also need the account username + password. Save creds to `~/.openclaw/credentials/reddit.json`. This unblocks the ENTIRE third-party citation strategy.
- [ ] **Google Search Console access** #p0 #blocker
	  Add `friday.altcoinist.020926@gmail.com` as user on the altcoinist.com Search Console property. Go to https://search.google.com/search-console → Settings → Users and permissions → Add user → enter the email → Full permission. This unblocks sitemap submission + indexing monitoring.
- [ ] **Perplexity API key** #p1 #blocker
	  Sign up at https://www.perplexity.ai/settings/api → generate API key → save to `~/.openclaw/credentials/perplexity-api-key.txt`. Needed to measure Perplexity citations (one of our 4 target AI engines).
- [ ] **Gemini API key** #p1 #blocker
	  Go to https://aistudio.google.com/apikey → create key → save to `~/.openclaw/credentials/gemini-api-key.txt`. Unblocks: Gemini citation measurement + image generation for site polish.
- [ ] **PostHog AI referral tracking** #p1 #blocker
	  Just need a yes/no from Christian. I'll set up UTM-based cohort in PostHog to track users arriving from AI engine links (ChatGPT, Perplexity, Grok referrers). Zero risk, read-only analytics.

## 🟡 To Do

- [ ] **Build Ops Agent** #p0 #agent
	  Daily task management + status posts to #aeo.
- [ ] **Build Strategy Agent** #p0 #agent
	  Weekly synthesis: research + tracker → priorities.
- [ ] **Build Copywriter Agent** #p1 #agent
	  Monthly content refresh cycle.
- [ ] **Submit sitemap** #p1
	  UNBLOCKED — ready to submit once Search Console access granted.
- [ ] **Reddit posting cron** #p1
	  Wed+Sat. Blocked on Reddit credentials above.
- [ ] **Create Wikidata entity** #p2 @{2026-03-07}
	  Structured claims for Perplexity/Google.
- [ ] **Pitch review sites** #p2 @{2026-03-10}
	  CoinGecko, CryptoSlate, BeInCrypto.
- [ ] **Site brand polish + images** #p2
	  Blocked on Gemini API key above.

## 🟢 In Progress


## ✅ Done

- [x] CF Worker deployed @{2026-02-27} #p0
- [x] Grok 50-query audit baseline #p0
- [x] Next.js AEO site built + deployed #p0
- [x] AEO Strategy + Master Plan #p0
- [x] AEO Department architecture #p0
- [x] Research Agent + daily cron #p0
- [x] brand-facts.json live on CF #p0
- [x] Answer Hub page (3000 words) #p0
- [x] 4 Comparison pages #p1
- [x] Brand Facts page + JSON #p1
- [x] JSON-LD schema blocks #p1
- [x] 3 AEO skills built #p1
- [x] Weekly tracker cron #p1
- [x] Reddit scout + growth team #p1
- [x] 5 Reddit content drafts #p1
- [x] ChatGPT audit via OAT #p1
- [x] Obsidian vault #p0


%% kanban:settings
```
{"kanban-plugin":"board","lane-width":300,"show-checkboxes":true}
```
%%
