# Phase 4 — Pilot: NOTICE #1 "The Name Rule"

**Status:** produced through the Higgsfield MCP (Content Factory pipeline) on 2026-10-30.
**Length:** 35.5s, 9:16, 1080×1920, 30fps.
**Narrator:** Desmond (ElevenLabs v4, stability 0.45). Job `d42c7218-a930-4a2a-b59c-e564fbdccc05`.
**Credit cost:** **2.53 credits** for the voiceover. Drawing and rendering cost nothing.
**Source code:** `production/notice-01/` (Higgsedit JSX: reusable Mia, Door, HUD and Captions components).

## Script (the voiceover take, exactly as spoken)

```
[tense, hushed storyteller, brisk pace] At three a.m., every phone on Earth got the same message.
Notice number one. Do not open your door for anyone who knows your name. ... Mia read it twice.
Then, someone knocked. [whispering] Mia? It's Leo. Open up. [building tension] Her brother.
His voice. His green jacket in the peephole. Then her phone buzzed. A text... from Leo.
Still at the hospital. Night shift. Why? [pause] The knocking stopped. [whispering] Mia...
I know you're AWAKE. [leaning in] Would you open the door... or stay silent?
```

79 words. Bracketed tags are delivery directions only; the narrator doesn't say them.

## Scene-by-scene

| Time | Scene | Visual | On-screen text | Sound |
|---|---|---|---|---|
| 0.0–4.1 | **Cold open** | Night city. The apartment windows light up one by one with phone glow. A **NOTICE banner drops in at 0.15s**, so the rule is readable before the voice even starts. | Banner: "Do not open your door for anyone who knows your name." Captions: AT **3 A.M.** / EVERY PHONE ON **EARTH** | Low drone |
| 4.1–9.0 | **The rule** | Red-glow notice card. Each word lights up as it's spoken. | NOTICE #1 · DO NOT OPEN YOUR DOOR FOR ANYONE WHO **KNOWS YOUR NAME.** · SENDER: UNKNOWN | |
| 9.0–12.7 | **Mia** | Mia sits up in bed, her face lit by her phone, moonlit window behind her. The screen shakes on each knock. | KNOCK. ×3 · THEN SOMEONE **KNOCKED** | 3 door knocks |
| 12.7–15.4 | **The door** | Front door from inside, warm light under it, chain on. Slow push in. | "MIA? IT'S **LEO**. OPEN UP." | 2 softer knocks |
| 15.4–19.6 | **Peephole** | Fisheye hallway view. A figure in a green jacket; his face is in shadow. | HER **BROTHER**. HIS VOICE. / HIS **GREEN JACKET**… | |
| 19.6–25.7 | **The text** | Mia's chat with "Leo (brother)". She has sent "are you outside my door??". A typing indicator appears, then: | "Still at the hospital. Night shift. Why?" | |
| 25.7–30.3 | **Silence** | The door again. **Two foot shadows block the light under it.** The light flickers. Slow push toward the gap. | THE KNOCKING **STOPPED** / "MIA… I KNOW YOU'RE **AWAKE**." (red) | |
| 30.3–35.5 | **The choice** | Close-up of Mia, eyes wide. | WOULD YOU OPEN THE DOOR… / …OR STAY SILENT? · [OPEN] [STAY SILENT] · WHAT WOULD YOU DO? · YOUR ANSWER DECIDES NOTICE #2 | **One last knock at 34.1s** |

Persistent HUD (from 4.1s): `● NOTICE #1`, a clock that ticks from 3:00 → 3:01 → 3:02 AM, and `RULES ACTIVE: 1`.

## Equivalent Content Factory prompt (for the higgsfield.ai UI)

If you'd rather run the next episodes from the web UI than from Claude:

> **Prompt:** What if one night every phone on Earth received a notice from an unknown sender: "Do not open your door for anyone who knows your name." Mia (black bob, yellow hoodie) hears a knock at 3 AM. It's her brother Leo's voice, and his green jacket is visible through the peephole. Then the real Leo texts her: "Still at the hospital. Night shift. Why?" The knocking stops: "Mia… I know you're awake." End on a choice card: OPEN or STAY SILENT. Second-person suspense narration, about 80 words, persistent HUD "NOTICE #1" with a ticking 3:00 AM clock, word-by-word captions.
> **Style:** `night-flat` (Night Flat), or use this pilot's MP4 as the reference so later episodes match.
> **Duration:** 35 sec · **Episodes:** 1. Make one episode per vote. Don't pre-generate a multi-episode arc, because the audience decides the next one.

## Editing instructions

None needed. The render is final: captions, HUD, sound effects and the end card are burned in. Optional, per platform:
- **TikTok:** add a trending _low-volume_ ambient or suspense sound at 5–10% under the voice, if it fits.
- **Instagram:** use a cover frame at ~5s (the red rule card) so the grid shows the rule.
- Keep the last 2s (the final knock). That's the rewatch trigger.

## Captions

**Instagram / TikTok:**
> 3:00 AM. Every phone on Earth gets the same notice.
> Do not open your door for anyone who knows your name.
> Would you open it? 🚪
>
> Notice #2 depends on what you choose.
> #thenotice #whatwouldyoudo #scarystory #animation #survival

**Pinned first comment:**
> 🔴 NOTICE #2 is decided by these comments. OPEN or STAY SILENT? Results in 24h.

**YouTube Shorts title:** `Would you open the door? (Notice #1)`

## Success metrics for this pilot

Measure at 48h and 7d. See `05-production-system.md` for the full tracker.
- **Hold rate at 3s** (are the banner and rule hook working?) → target ≥ 70%.
- **Average % watched** → target ≥ 85% (a 35s video with a payoff at the end).
- **Comments per 1K views** → target ≥ 8 (the decision mechanic is working).
- **Follows per 1K views** → target ≥ 5 (people want Notice #2).
- **Shares per 1K views.**
