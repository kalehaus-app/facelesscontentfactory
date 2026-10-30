# Phase 5: Scalable Production System

Target: **3–5 polished episodes per working hour**, once the asset library exists. The bottleneck is writing, not generation.

## The pipeline

```
IDEA BANK ─► SCRIPT ─► (vote result) ─► BUILD in Claude + Higgsfield MCP ─► QC ─► PUBLISH ─► TRACK ─► ITERATE
```

### 1. Idea generation (weekly, 30 min)
- Keep `canon/rule-bank.md` stocked with **30+ notices**. Each one gets a 1-line rule, the dilemma it forces, the binary choice, and a production tag (L/M/H).
- **Rule quality filter:** reject any rule that fails one of these tests:
  1. It's understood in under 2s, with no context.
  2. It collides with ordinary life (a door, a phone, family, sleep, a voice).
  3. It produces a choice where **both options are defensible**.
  4. It can be drawn with existing sets, or with one new set.
- Mine comments for ideas. Viewers will suggest rules, and using one (with credit, "Rule suggested by @user") is a strong community loop.

### 2. Script (10 min per episode)
- Use the template: **recap (1s) → rule (3s) → test → escalate ×2 → twist → choice**.
- ~80 words for 30–35s at 2.7 words/s. ~120 words for 45s.
- First on-screen frame: the notice banner with the rule. Never a logo, a title or "Part X".
- Update `canon/canon-log.md`: the notice #, the rule, the choice offered, the vote result, and any consequence still owed.

### 3. Visual reference management
- **The project code IS the style guide.** `production/notice-01/edit/` holds the reusable `Mia`, `Door`, `Bedroom`, `Peephole`, `Phone`, `Hud`, `Captions` and `Choice` components and the palette in `lib.jsx`.
- For each new episode, tell Claude: _"Use production/notice-01 as the base project; reuse its components and palette; new scenes: …"_. Paste the relevant files, or keep them in the Higgsfield sandbox under `/home/user/what-if/`.
- Use the pilot MP4 as the Content Factory reference if you work from the web UI.
- Add new sets as new components (`Stairwell`, `Elevator`, `Rooftop`), and keep each file under 300 lines.

### 4. Generation (Claude + Higgsfield MCP, ~15–25 min hands-off)
1. `generate_audio` with elevenlabs_v4, **always Desmond, stability 0.45**. One voice for the brand.
2. Transcribe with faster-whisper, check the take, and get word timings.
3. Build the scenes, preview 4 frames, fix, then do the full render (XL sandbox, about 2–4 min for 35s).
4. Normalize loudness to −14 LUFS, upload, confirm, and register in Higgsfield history.

**Cost per episode:** ~2.5 credits per 30s and ~5 credits per 60s (voiceover only). The current balance of 1,170 credits covers **400+ episodes**. Credits are not the constraint.

### 5. Quality control (5 min, a checklist)
- [ ] Is the rule readable in frame 1 (pause at 0.5s)?
- [ ] Do the captions match the voice, with no overlaps and nothing in the bottom 15% or right 10% (platform UI)?
- [ ] Does something change on screen at least every 3s?
- [ ] Is Mia on-model (bob, yellow hoodie, phone)?
- [ ] Is the HUD notice # and clock correct and continuous with the previous episode?
- [ ] Are both choices defensible? Read the ending to someone and ask which they'd pick.
- [ ] Loudness is about −14 LUFS and the voice is clear over the SFX.
- [ ] No real brands, no real people, no real emergency-alert branding (the Notice is fictional, so never mimic official government alerts).

### 6. Publishing
- **Cadence for the test:** 1 episode per day for 10 days, same time (evening, local audience peak).
- Post natively on **TikTok, IG Reels and YT Shorts** at the same time. TikTok can be posted directly from the Higgsfield MCP (`tiktok_connect` → `tiktok_prepare_publish`).
- Pin the vote comment. Reply to the first 20–30 comments within the first hour.
- Post the "results" story on IG Stories (a poll sticker with the same two options). Native polls give a second, clean vote count.
- Caption rules: ask a genuine question and avoid "comment X to vote" bait phrasing, which IG can demote.

### 7. Analytics tracking
Track every video in `analytics/tracker.csv` (template in this repo):

| Metric | Why |
|---|---|
| 3s hold % | Hook strength (rule + banner) |
| Avg % watched / completion | Retention structure |
| Rewatch rate (avg watch > 100%) | Clue density, the final knock |
| Comments per 1K views | Decision-mechanic strength |
| Shares per 1K views | "Send to a friend" potential |
| Follows per 1K views | **The north-star metric**: audience building |
| Profile visits per 1K views | Binge intent |
| Vote split % | Close splits = good dilemmas |

### 8. Iteration rules (after 10 videos)
- **Double down:** pick the format (core / control / YOU-POV) with the highest **follows per 1K views**, not raw views.
- **Hook iteration:** re-post a top concept with a different first frame after 14+ days (a hook A/B test).
- **Length:** if completion is over 80% at 35s, test 45s and 60s, which have more watch time and are monetization-friendly. If it's under 60%, cut to 25s.
- **Control result:** if a B-style what-if beats the core on reach by 3× or more but loses on follows, keep it as a weekly top-of-funnel post that ends with "Want to see what Mia would do? Notice #1 is pinned."
- **Kill criteria:** if the core format's comments are under 3 per 1K and follows are under 1 per 1K after 10 posts, the decision mechanic isn't landing. Pivot the hook style before abandoning the world.

## Monetization path (later)
1. Creator funds and Shorts revenue share (60s+ episodes once retention holds).
2. "Season" bundles: a long-form YouTube compilation of all episodes with the vote results.
3. Patreon or Discord: the next notice early, plus a vote on the season finale.
4. Format licensing or brand-integrated notices (e.g. a horror game launch).
