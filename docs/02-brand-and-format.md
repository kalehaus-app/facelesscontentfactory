# Phase 2: Brand & Format: THE NOTICE

## Positioning

> One night, every phone on Earth gets a message from an unknown sender.
> It's called **THE NOTICE**. Every notice is a new rule. Break it and something happens.
> **You decide what Mia does next.**

A faceless, animated, audience-steered survival series. Every episode stands on its own because the rule explains itself, and the series is bingeable because notices are numbered and consequences carry forward.

The account sits between "what-if" curiosity (broad reach) and choose-your-path fiction (loyalty). It doesn't depend on facts, so there's no fact-check liability. It doesn't need a lore dump either, since one sentence of setup is enough.

## Account name options

| Name | Handle idea | Notes |
|---|---|---|
| **THE NOTICE** (recommended) | `@thenotice.files` / `@the.notice.daily` | The format's own name. "Notice #12" is a built-in series counter. |
| 3AM NOTICE | `@3amnotice` | Adds a horror-at-night time stamp. Slightly narrower. |
| Rule Received | `@rulereceived` | Clear, but less ownable. |
| Don't Answer | `@dontanswer.story` | Strong curiosity, but it locks us into door and phone themes. |
| Choose For Mia | `@chooseformia` | Puts the interactivity up front. Too tied to one character if we pivot. |

Check handle availability on IG, TikTok and YouTube before you commit.

## Visual identity (built for Content Factory's code-drawn engine)

- **Style:** flat 2D vector, simple shapes, near-black navy night palette with **one warm accent** (Mia's yellow hoodie) and **one alert accent** (notice red). The closest built-in style references are `night-flat` ("Flat 2D vector · navy night · bold red data callouts") and `noir-panels`. We draw our own look and use them only as pacing references, so we aren't cloned.
- **Palette (draft):** night `#0B1020`, wall `#18203A`, shadow `#070A14`, Mia yellow `#FFC83D`, notice red `#FF3B47`, UI white `#F2F4F8`, muted text `#8A93AD`.
- **Signature open:** a black screen and a phone lock-screen **NOTICE banner** sliding down with a soft haptic thud. The rule is readable within 1.5s. It's a recognizable, ownable intro, like a show's cold open.
- **Persistent HUD:** top-left shows `NOTICE #N` with a small red dot, plus a clock (`3:07 AM`) that ticks forward through the episode.
- **Captions:** bold white sans, one phrase at a time, with the key word highlighted yellow. Lower third, out of the UI safe zones.
- **End card:** a binary choice card (two pill buttons, e.g. `[ OPEN ]  [ STAY SILENT ]`) plus `WHAT WOULD YOU DO?` Then `NOTICE #N+1 TOMORROW`.

## Recurring cast (drawn once as code components, reused forever)

| Character | Design anchor | Role |
|---|---|---|
| **Mia** | black bob, yellow hoodie, phone always in hand | The protagonist the audience controls. Kept from the earlier concept: the design is strong and easy to draw in code. |
| **Leo** | Mia's older brother, green work jacket, night-shift nurse | Someone to protect or doubt. |
| **Mr. Okafor (4B)** | elderly neighbor, cardigan, cat | A moral weight: help him or not? |
| **The Notice** | never shown, only text | The antagonist and mystery engine. Never explain who sends it, at least not in Season 1. |

## Content formula (every episode)

| Beat | Time (30–45s cut) | Job |
|---|---|---|
| 1. **Recap or cold open** | 0–2s | Episode 1 opens on the NOTICE banner (the rule). From Episode 2 on: `MOST OF YOU SAID: ___` (1s), then the new NOTICE. |
| 2. **The rule** | 1–4s | One sentence, read aloud, on screen. It must be understandable with zero context. |
| 3. **The test** | 4–12s | The rule immediately collides with Mia's life. |
| 4. **Escalation ×2** | 12–28s | New information every 2–4s: a text, a sound, a clue, a second rule. Each beat raises the stakes or flips the meaning. |
| 5. **The twist** | 28–33s | One detail that makes both choices costly. |
| 6. **The choice** | last 3–5s | Two buttons. "What would you do?" Freeze on Mia's face. |

## Audience participation mechanics

1. **Binary choice card.** It's low effort to answer and splits opinion, which drives replies-to-replies. That's the comment multiplier.
2. **"MOST OF YOU SAID"** opens the next episode. It shows viewers the story responds to them.
3. **Show the split honestly** ("62% OPEN"). Close votes feed debate.
4. **Pinned comment:** "Notice #2 is decided by these comments. Voting closes in 24h." This is a time-boxed reason to comment now.
5. **Consequence callbacks:** every few episodes, something happens _because_ of an earlier vote ("Notice #3: you let him in. He remembers."). This rewards long-time followers and sends new viewers back to binge.
6. **Avoid engagement-bait wording in captions** ("Comment OPEN to vote!"). Ask a genuine question and let the on-screen card carry the options.

## Universe rules (to stay coherent)

1. **One rule per notice.** Rules never contradict earlier ones, and they accumulate (the HUD can list "RULES ACTIVE: 4").
2. **The notices are never wrong.** Breaking a rule always has a consequence. That's what makes the choices tense.
3. **Every episode must work cold.** No unexplained names: always "her brother Leo", never just "Leo".
4. **Bounded canon.** Each season covers one building and one night (or a few days). This avoids lore sprawl. Season 2 can move.
5. **The vote changes the next episode, not the whole series.** Keep a linear spine and let votes color the path.
6. **A canon log** lives in `canon/` in this repo: every notice, every vote result, and every consequence still owed.

## Format variants for the first experiment

- **Core (C′):** the rule → escalation → choice structure, with Mia.
- **Control (B-style):** non-interactive escalating what-if in the same visual brand ("Every time you lie, the Notice adds one hour to your age"). This tests whether the decision mechanic matters.
- **Spinoff test:** a "YOU" POV where the narrator speaks directly to the viewer and Mia doesn't appear. This tests whether self-insertion beats a character.
