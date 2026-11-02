# NOTICE #2: both branches (pre-written)

The Notice #1 vote picks one. Each is about 85 words, or roughly 33–36s. Both open with the vote recap, introduce a new global rule, and end on a binary choice.

---

## Branch A: MOST OF YOU SAID **OPEN**

**On-screen open (0–1s):** `MOST OF YOU SAID: OPEN` (+ split %, e.g. `62%`)
**Notice #2 (rule):** `IF YOU BROKE NOTICE #1, DO NOT TURN AROUND.`

**Take:**
```
[tense, hushed storyteller, brisk pace] Most of you said open. So Mia slid the chain off... and opened
the door. The hallway was empty. Just Leo's green jacket on the floor. Still warm. Then every phone
on Earth buzzed again. Notice number two. If you broke Notice number one... do not turn around.
[building tension] Behind her, the bathroom tap turned on. Then someone started humming. Leo's song.
The one he hummed when they were kids. [leaning in] Do you turn around... or run for the stairs?
```

**Scenes (reuse in bold):**
1. Vote recap card, red, with the split %.
2. **Door**, now opening. The chain slides, then reveal an empty, dim **hallway**.
3. NEW prop: a green jacket crumpled on the floor, with a faint warm steam shimmer.
4. **Notice banner, then the rule card** with the new rule. **HUD:** `NOTICE #2 · 3:14 AM · RULES ACTIVE: 2`.
5. Mia's back to camera, frozen. Behind her, a bathroom-door light strip turns on (reuse of the light-strip technique).
6. Sound design: a running tap, then a hummed melody (do it in the score as a soft music-box line, not a voice).
7. **Choice card:** `[TURN AROUND]` `[RUN FOR THE STAIRS]`.

**Consequence owed:** whatever is humming knows their childhood. That pays off in Notice #3.

---

## Branch B: MOST OF YOU SAID **STAY SILENT**

**On-screen open (0–1s):** `MOST OF YOU SAID: STAY SILENT` (+ split %)
**Notice #2 (rule):** `WHOEVER KNOCKED TONIGHT IS NOW INSIDE YOUR BUILDING.`

**Take:**
```
[tense, hushed storyteller, brisk pace] Most of you said stay silent. So Mia didn't move. Didn't
breathe. For eleven minutes... nothing. Then every phone on Earth buzzed again. Notice number two.
Whoever knocked tonight is now inside your building. [building tension] A note slid under her door.
Leo's handwriting. The real me is on the roof. Don't trust the one in the hall. [pause] Then the
knocking started again. From the ceiling. [leaning in] Do you go up to the roof... or stay locked in?
```

**Scenes (reuse in bold):**
1. Vote recap card.
2. **Bedroom**, with Mia frozen. The **HUD** clock jumps `3:02 → 3:13 AM` (a fast-forward tick).
3. **Notice banner, then the rule card** with the new rule. **HUD:** `NOTICE #2 · RULES ACTIVE: 2`.
4. **Door**: a folded paper slides under the gap (reuse the foot-shadow light strip).
5. NEW prop: a handwritten note close-up (Caveat font), with the second line underlined.
6. The ceiling: knocks rippling from above, plus a camera tilt-up and screen shake.
7. **Choice card:** `[GO TO THE ROOF]` `[STAY LOCKED IN]`.

**Consequence owed:** there are now two "Leos". Which is real gets resolved in Notice #3 or #4.

---

## Production notes
- Same voice (Desmond, stability 0.45), same palette and components (`production/notice-01/edit`).
- The score is the same palette as Notice #1 (`audio/score.py`), re-timed. Keep the silence drop before the last line.
- New components needed: `RecapCard` (shared by both branches), plus `Jacket`/`TapLight` for Branch A or `Note`/`Ceiling` for Branch B.
- Caption: `Notice #2. You chose ___. Now what?` · Pinned comment: `🔴 NOTICE #3 is decided here.`
