---

kanban-plugin: board

---

## 🔴 Blocked

- [ ] **Reddit API app creation** #p0 #blocker
	  Account `trading_lord_97` exists. `reddit.com/prefs/apps` returning 500 — retry from browser when Reddit is back. Need `client_id` + `client_secret` for automated posting. Mac Mini IP is blocked by Reddit network security — must create from Christian's browser.
- [ ] **Perplexity API key** #p1 #blocker
	  Sign up at https://www.perplexity.ai/settings/api → generate API key → save to `~/.openclaw/credentials/perplexity-api-key.txt`. Needed to measure Perplexity citations.

## 🟡 To Do

- [ ] **Submit sitemap to GSC** #p1
	  UNBLOCKED — access granted. Paste `https://www.altcoinist.com/sitemap.xml` in GSC Sitemaps UI. 30 seconds.
- [ ] **Build Copywriter Agent** #p1 #agent
	  Deferred 2 weeks — needs Strategy Agent output to know what to write/refresh.
- [ ] **Site brand polish + images** #p2
	  UNBLOCKED — Gemini API key saved. Add OG images, improve visual design.
- [ ] **Create Wikidata entity** #p2 @{2026-03-07}
	  Structured claims for Perplexity/Google Knowledge Graph.
- [ ] **Pitch review sites** #p2 @{2026-03-10}
	  CoinGecko, CryptoSlate, BeInCrypto — after pages indexed.
- [ ] **Reddit karma building** #p2
	  Start genuine helpful comments once API app exists. 2-week Phase 1.
- [ ] **YouTube content strategy** #p3
	  Screen-recorded Altcoinist setup tutorial. Gets cited by LLMs for "how to" queries. Flag to Konstantin.

## 🟢 In Progress

- [ ] **Build Ops Agent + cron** #p0 #agent
	  Daily status posts to #aeo, blocker tracking, agent health checks.
- [ ] **Build Strategy Agent + cron** #p0 #agent
	  Weekly synthesis: research + tracker → priorities + experiments.
- [ ] **AEO weekly report cron** #p1
	  Friday automated department report to Christian.

## ✅ Done

- [x] CF Worker v3 deployed @{2026-02-27} #p0
- [x] Grok 50-query audit baseline #p0
- [x] Next.js AEO site built + deployed (7 pages) #p0
- [x] AEO Strategy + Master Plan #p0
- [x] AEO Department architecture #p0
- [x] Research Agent + daily cron (`f873f97d`) #p0
- [x] Tracker Agent + weekly cron (`accc997b`) #p0
- [x] brand-facts.json live on CF #p0
- [x] Answer Hub page (3000 words, 16 FAQs) #p0
- [x] 4 Comparison pages (30 FAQs total) #p1
- [x] FAQPage JSON-LD on all pages @{2026-02-27} #p1
- [x] FAQ long-tail expansion (+19 items) @{2026-02-27} #p1
- [x] Brand Facts page + JSON #p1
- [x] 4 AEO skills built #p1
- [x] Reddit Growth Team + 5 drafts #p1
- [x] Reddit two-phase strategy (transparency) @{2026-02-27} #p1
- [x] ChatGPT audit via OAT #p1
- [x] Obsidian vault + restructure @{2026-02-27} #p0
- [x] Gemini API key saved #p1
- [x] PostHog AEO dashboard (1316393) #p1
- [x] GSC access granted #p1
- [x] Reddit account created (`trading_lord_97`) #p1
- [x] Sitemap live at `/sitemap.xml` #p1
- [x] Vault restructure @{2026-02-27} #p0


%% kanban:settings
```
{"kanban-plugin":"board","lane-width":300,"show-checkboxes":true}
```
%%
