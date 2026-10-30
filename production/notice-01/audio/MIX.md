# Mix recipe (v2)

Inputs: `voice.mp3` (narration), `music.wav` + `sfx.wav` (from `score.py`), `knock.wav` at 11.95, 12.22, 12.49, 14.95 (x0.6), 15.2 (x0.6), 34.1 (x1.1) s.

- Music at x0.55, side-chain ducked by the voice: `sidechaincompress=threshold=0.02:ratio=5:attack=15:release=350`.
  The ducked music sits about 6–8 LU under the voice.
- Mix everything with `amix normalize=0`, then apply plain gain to -14 LUFS with `alimiter=limit=0.85`.
- Mux onto the silent-render video with `-c:v copy`. Changing the music never needs a video re-render.
