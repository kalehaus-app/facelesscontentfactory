# NOTICE #1 — production files

- `edit/` — Higgsedit project (JSX). Rebuild inside a Higgsfield sandbox (`sandbox_exec`):
  1. Put this folder at `/home/user/what-if/notice-01/edit/`.
  2. Re-download the voice from `voice.json` → `../voice.mp3`, rebuild `../mix.wav`
     (voice + drone + knocks at 11.95, 12.22, 12.49, 14.95, 15.2, 34.1s — see `docs/04-pilot-notice-01.md`).
  3. `higgsedit build edit.jsx` → `higgsedit fonts add . "JetBrains Mono:500" "JetBrains Mono:700" "Inter:400" "Inter:600" "Montserrat:600" "Montserrat:700" "Montserrat:800"` → `higgsedit render . --bitrate 8M --out renders/final.mp4`.
- Reusable components: `lib.jsx` (palette, Mia, HUD, Glow, Vignette), `sets.jsx` (City, RuleCard, Bedroom, Door, Peephole), `scenes2.jsx` (Phone chat, Choice card), `captions.jsx` (word-timed captions).
- Final video: Higgsfield media `ce3ae400-9d20-439b-9795-d29ab54b5d06` (see `voice.json` for URLs).
