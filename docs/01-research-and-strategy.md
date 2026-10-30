# Phase 1 — Research & Strategic Recommendation

_Last updated: 2026-10-30_

## TL;DR

**Recommendation: a re-engineered Direction C. Build standalone-first decision episodes inside one rule-based world.**

Working title: **THE NOTICE**. Every video opens on a phone notification announcing a strange new rule. One recurring protagonist hits a dilemma that gets worse. The video ends on a binary choice the audience makes. The next episode opens with "MOST OF YOU SAID ___."

Each episode has to work cold (a stranger understands it in 2 seconds). It must also reward bingeing (a numbered notice counter, a recurring cast, consequences that carry forward).

Do **not** launch pure Direction A (a lore-heavy serial). Do **not** make pure Direction B (generic what-ifs) the main format. Run a small amount of B as a **control group** inside the first 10 videos, so the data tells us whether the decision mechanic actually beats plain what-if content.

---

## 1. What Higgsfield Content Factory actually is (verified)

Verified from the live Higgsfield MCP on 2026-10-30, using the `/content-factory` recipe and its reference docs. This is the product's own production spec, not marketing copy.

| Question | Verified answer |
|---|---|
| **How are videos made?** | **Not** with AI video models. Claude writes code (Higgsedit, a JSX motion-graphics engine) that draws every frame: characters, sets, HUDs and captions. It renders in a Higgsfield sandbox. The recipe states: _"Never generate images or video for this format."_ |
| **What costs credits?** | **Only the voiceover**: one ElevenLabs v4 take per video. Drawing and rendering are free. A 30–60s video costs roughly one TTS generation, not a Kling/Seedance render. |
| **What does "Use as reference" preserve?** | **Style and pacing, not content.** Claude samples 12–16 frames and writes a style sheet covering palette hex codes, type, caption behavior, HUD/UI, character construction, shot sizes, cut rhythm and end card. The rule is _"write the story in the reference's format and pacing, never copying its wording, premise or characters."_ |
| **Can the look stay consistent across episodes?** | **Yes, and better than AI video.** Characters are code components (e.g. `<Mia/>`) reused byte-for-byte, so faces, hoodie color and HUD never drift. This is the biggest finding: it removes Direction A's main risk. |
| **How does the episode selector work?** | Claude plans the whole arc first (one line per episode plus the cliffhanger into the next). It designs the look once and reuses the same characters, palette, fonts and narrator voice. It then produces each episode as a complete video, in order. **Earlier episodes in the chat are canon.** Continuity comes from Claude plus shared code. Nothing is automatic. |
| **Length** | About 60s by default; any length can be requested. A third-party blog claims 15s–5min and up to 4 episodes per run (not independently verified). |
| **Built-in styles** | 56 "What If" styles (e.g. _Noir Panels, Night Flat, Bold Flat, Sitcom Mini, Offline Grid, Mannequin Commute, Toon Mission_), each backed by a reference video. Any IG/TikTok/YouTube link or upload can also be used as a reference. |
| **"Generate in Claude"** | Opens the same recipe in Claude through the Higgsfield MCP. Claude can browse styles, run the voiceover, build and render, upload, register the result in your Higgsfield history (`register_what_if_result`), and revise. A one-line script change re-voices only that line and splices it in. |
| **Can Claude start generations directly?** | Yes. This session is connected (plan: **Ultra**, balance **1,169.99 credits** at time of writing). |
| **Publishing** | The MCP has `tiktok_connect` / `tiktok_prepare_publish`, so direct TikTok posting is possible. Instagram posting is not exposed in Higgsfield. |
| **Language/voices** | 15 preset narrator voices (Kevin, Desmond, Grady, Zoe…). One narrator per video, with no multi-voice dialogue in this format. |

### What this means for strategy

1. **Marginal cost per video is near zero.** The constraint is _creative quality per hour_, not credits. We can afford to test many hooks. The pilot will measure the exact credit cost per take.
2. **Code-drawn, flat/stylized looks are the native strength.** The stickman reference is itself motion graphics (timestamp HUD, kinetic captions, glow lights, flat characters), which is exactly what Higgsedit draws. Photoreal or "cinematic AI" looks are not what this tool does.
3. **Serialization is cheap here.** In most AI-video tools a recurring cast is expensive and fragile. Here it is the _easiest_ thing to keep consistent. That tilts the decision toward A/C, which differs from a typical AI-video account.
4. **Limitation:** a single narrator, and no lip-synced dialogue. Characters "speak" through narration and on-screen text, which is the same style the stickman account uses.
5. **The Mia/Kling assets don't transfer.** Content Factory can't ingest a Kling clip as footage. Mia can be redrawn as a code character (black bob, yellow hoodie is an easy, distinctive silhouette), but the generated image/video won't be used.

---

## 2. Reference analysis — @stickmanstorys22

**Observed** (your screenshot plus the 81s reel you uploaded, which I sampled frame by frame): 463K followers on only **46 posts**, which is roughly 10K followers per post. That is unusually high conversion. Profile grid: "MOST OF YOU SAID" banners on most tiles, PART numbering, recurring characters, and a Patreon course upsell. **Not verified:** growth rate, per-post views, or whether a few posts carry the whole account. Web search found no third-party coverage of the account.

**Mechanics in the uploaded reel (14 FLOORS UP — DAY 8):**

| Time | Mechanic |
|---|---|
| 0–2s | **"MOST OF YOU SAID: LIE"**. Opens on the audience's previous vote. The viewer immediately feels the audience steers the story. |
| 2–5s | **Series title card** ("14 FLOORS UP / DAY 8") plus a persistent **HUD clock** (6:51 PM, EMERGENCY) that ticks forward. Gives urgency, continuity and orientation for new viewers. |
| Throughout | **Kinetic word-by-word captions**, white with one accent word in yellow/green. Name tags on speakers ("GUARD · GAS MASK"). |
| ~15–35s | **Evidence inserts** (a quarantine log, "IMMUNE?" circled, a polaroid "ZOE · 8 MONTHS"). New visual information every 2–3s, and clues that reward attention. |
| ~40s | **"RULE #15"**, a world-rule overlay. |
| ~65s | **Binary choice card**: "TRUST HIM? [TRUST HIM] [RUN ALONE] — COMMENT BELOW". |
| ~70s | **"FOLLOW FOR DAY 9"**. The follow CTA is tied to wanting the next episode, which explains the follow conversion. |
| ~75–81s | Course upsell (monetization through Patreon). |

**Takeaways to keep:** a vote-recap open, a ticking HUD, a numbered series, the binary choice card, follow-for-next, a very simple flat art style, and moral dilemmas with an innocent at stake (an infant).
**Not to copy:** stickmen, the quarantine/gas-mask premise, the "14 floors" building, the characters, red-on-black lighting as a whole look, or the exact card layouts.

## 3. Content Factory Explore feed (your screenshot)

Visible counters: **26.6M views / 2M likes** (low-poly city crosswalk), **7M / 337.9K** (mannequin escalator), 675K, 457K, 397K. **Caveats:** this is a curated showcase, survivorship-biased, and we don't know the follower conversion or how repeatable these accounts are. It shows that _what-if simulations can reach huge view counts_. It does **not** show that they build loyal audiences.

---

## 4. Evaluation of the three directions

Scores are judgment calls (1–5), stated as hypotheses to test:

| Criterion | A: Serial universe | B: Standalone what-if | C: Hybrid (as proposed) | **C′: Standalone-first decision episodes (recommended)** |
|---|---|---|---|---|
| Organic reach (cold viewers) | 2. Episode 8 confuses strangers | **5**. Clear hooks | 4 | **4**. Every hook is a self-contained rule |
| Retention | 4. Suspense | 4. Escalation | 4 | **5**. Escalation plus an unresolved choice keeps people to the end |
| Comments | 5 | 2. "Cool" / "wrong fact" | 4 | **5**. Binary choices are easy to answer |
| Follower conversion | **5**. "Follow for Part 2" | 2. No reason to return | 4 | **5**. Return to see what the vote caused |
| Repeatability (100+) | 3. Plot debt grows | 4. But it gets generic fast | 4 | **5**. One new rule per video is a bottomless template |
| Production (Content Factory) | 4. Characters reused in code | 4 | 4 | **4**. 2–4 reusable sets plus one cast |
| Differentiation | 4 | **1**. Every Higgsfield user gets the same 56 what-if styles and the same "what if" prompt box | 3 | **4**. A branded world, recurring cast and vote history aren't cloneable with one prompt |

### Why not just B (the obvious Content Factory play)?

- **Saturation by design.** Content Factory launched in October 2026 with a "What if…" prompt box and 56 shared styles. Thousands of accounts will post near-identical what-if shorts. Competing on that axis is a race to the bottom.
- **Weak follower conversion.** A one-off curiosity video gives no reason to follow. Views without follows don't become a monetizable asset (your stated success criterion).
- **Factual liability.** Science what-ifs need fact-checking (Higgsfield itself warns about this). Fiction doesn't.

### Why not pure A?

- **The cold-start problem.** Voting needs comment volume. With 0 followers, "MOST OF YOU SAID" over 9 comments feels hollow, and Episode 5 is unwatchable for a stranger. The stickman account almost certainly broke out on episodes that worked on their own.
- **Plot debt.** Every vote doubles the continuity you must track.

### Where I disagree with the C you proposed

1. **"You're the last person alive" removes the best fuel: other people.** Dilemmas need someone to trust, save or betray. "The Last 100" keeps people, but a near-empty world limits settings and stakes. A rule-based world with everyone still around gives unlimited moral dilemmas.
2. **Don't promise that every vote creates a branch.** Promise that votes _change what happens next_. Early on, pick the winning option that creates the better episode, and say honestly when it was close ("51% said OPEN"). That keeps production linear.
3. **The episode number must never be the hook.** The rule is the hook. "Notice #7" is small HUD text, not the headline.

---

## 5. Pillar prioritization

| Pillar | Verdict |
|---|---|
| **Strange World Rules** | **Primary engine (hook).** One-line rules are perfect for the first 1.5s and endlessly generatable. |
| **Survival Decisions** | **Primary engine (ending).** Every rule forces a binary choice. |
| Interactive Story Series | **The wrapper**, not a separate pillar. Rules + decisions + recurring cast = the series. |
| Impossible Situations (escalating what-ifs) | **Control group only** (2–3 of the first 10), to test whether non-interactive escalation reaches further. If it wins on reach, use it as a top-of-funnel format that funnels viewers into the series. |

## 6. Research gaps (honest)

- I could not reach higgsfield.ai, TikTok or Instagram analytics from this environment, and web search returned nothing on @stickmanstorys22. All competitor numbers are **from your screenshots**.
- The Higgsfield credit price per voiceover will be **measured** during the pilot, not assumed.
- Instagram's engagement-bait policy can demote explicit "comment X to vote" captions. On-screen choice cards plus a natural "what would you do?" are safer. See the production system doc.
