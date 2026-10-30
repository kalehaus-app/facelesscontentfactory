# Original score + sound design for NOTICE #1 (no licensed music).
# Run in the Higgsfield sandbox: python3 score.py -> music.wav, sfx.wav
import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile
SR = 48000; DUR = 35.5; N = int(SR * DUR)
rng = np.random.default_rng(3)
music = np.zeros(N); sfx = np.zeros(N)
BEAT = 0.6  # 100 bpm

def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def add(buf, t, sig, g=1.0):
    i = int(t * SR); j = min(N, i + len(sig))
    if i < N: buf[i:j] += g * sig[: j - i]
def tt(d): return np.arange(int(d * SR)) / SR
def saw(f, d, det=0.0):
    t = tt(d); return sum(2 * ((t * f * (1 + k * det)) % 1) - 1 for k in (-1, 0, 1)) / 3
def note(n): return 440 * 2 ** ((n - 69) / 12)

# --- pad: Am F Dm E cycling every 2 bars (2.4s), dark lowpassed detuned saws
CH = [[45, 48, 52, 57], [41, 45, 48, 53], [38, 45, 50, 53], [40, 44, 47, 52]]
def pad_section(t0, t1, base_cut, top_cut, gain):
    d = t1 - t0; seg = np.zeros(int(d * SR)); L = int(2.4 * SR)
    for k, s in enumerate(range(0, len(seg), L)):
        ch = CH[k % 4]; n = min(L + int(0.3 * SR), len(seg) - s)
        x = sum(saw(note(m), n / SR, 0.004) for m in ch) / len(ch)
        e = np.minimum(1, np.arange(n) / (0.25 * SR)) * np.minimum(1, (n - np.arange(n)) / (0.3 * SR))
        seg[s:s + n] += x * e
    # filter opens over the section (process in chunks)
    out = np.zeros_like(seg); C = int(0.2 * SR)
    for s in range(0, len(seg), C):
        f = base_cut + (top_cut - base_cut) * s / len(seg)
        out[s:s + C] = lp(seg[max(0, s - 2000):s + C], f)[-len(seg[s:s + C]):]
    add(music, t0, out, gain)
pad_section(0.0, 25.7, 350, 1400, 0.55)

# --- heartbeat sub from the rule card to the silence
def thump(g=1.0):
    t = tt(0.35); f = 38 + 30 * np.exp(-t * 18)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 11) * g
for b in np.arange(4.1, 25.6, BEAT * 2):
    g = 0.7 + 0.5 * (b - 4.1) / 21.5
    add(music, b, thump(g)); add(music, b + 0.2, thump(g * 0.7))

# --- clock tick on every beat (tick-tock), louder over time
def click(pitch):
    t = tt(0.04); return hp(rng.standard_normal(len(t)), pitch) * np.exp(-t * 160)
for k, b in enumerate(np.arange(0.0, 25.6, BEAT)):
    add(music, b, click(5000 if k % 2 == 0 else 3500), 0.10 + 0.12 * b / 25.7)
for k, b in enumerate(np.arange(30.25, 33.9, BEAT)):
    add(music, b, click(5000 if k % 2 == 0 else 3500), 0.18)

# --- bass ostinato (8ths) from Mia scene, 16ths from the peephole
for b in np.arange(9.0, 25.6, BEAT / 2):
    root = CH[int(b / 2.4) % 4][0] - 12
    step = BEAT / 2 if b < 15.4 else BEAT / 4
    for s in np.arange(0, BEAT / 2 - 1e-6, step):
        x = lp(saw(note(root), 0.18, 0.003), 600) * np.exp(-tt(0.18) * 14)
        add(music, b + s, x, 0.55 if b < 15.4 else 0.5)

# --- impacts (braams)
def braam(d=2.2):
    t = tt(d)
    x = lp(saw(55, d, 0.006) + 0.7 * saw(41.2, d, 0.006) + 0.5 * saw(82.4, d, 0.006), 700, 4)
    x += 1.2 * np.sin(2 * np.pi * np.cumsum(30 + 40 * np.exp(-t * 6)) / SR)
    x += 0.4 * lp(rng.standard_normal(len(t)), 2500) * np.exp(-t * 9)
    return x * np.exp(-t * 1.6) * np.minimum(1, t / 0.01)
add(music, 4.1, braam(), 0.9)       # rule card
add(music, 15.4, braam(), 0.8)      # peephole
add(music, 23.1, braam(), 0.9)      # "Still at the hospital"
add(music, 29.4, braam(2.6), 1.1)   # "...AWAKE."

# --- riser into the reply text
t = tt(1.9); f = 200 + 1400 * (t / 1.9) ** 2
r = 0.35 * np.sin(2 * np.pi * np.cumsum(f) / SR) + 0.6 * hp(rng.standard_normal(len(t)), 1500)
add(music, 21.2, r * (t / 1.9) ** 2.5, 0.6)
# silence: faint ringing tone after "the knocking stopped"
t = tt(3.6); add(music, 25.75, np.sin(2 * np.pi * 2900 * t) * np.minimum(1, t / 1.5) * 0.012)

# --- choice section: sparse pad + dissonant high cluster, cut before the last knock
d = 34.0 - 30.25; t = tt(d)
cl = lp(sum(saw(note(m), d, 0.003) for m in [45, 57, 60, 64]) / 4, 900)
cl += 0.25 * (np.sin(2 * np.pi * note(83) * t) + np.sin(2 * np.pi * note(84) * t))
env = np.minimum(1, t / 0.4) * np.minimum(1, (d - t) / 0.08)
add(music, 30.25, cl * env, 0.45)
for b in np.arange(30.25, 33.9, BEAT * 2):
    add(music, b, thump(1.1)); add(music, b + 0.2, thump(0.8))

# --- sound design
def tone(f, d, dec): t = tt(d); return np.sin(2 * np.pi * f * t) * np.exp(-t * dec)
add(sfx, 0.15, tone(1318.5, 0.25, 18), 0.35); add(sfx, 0.27, tone(1760, 0.35, 12), 0.35)   # notice chime
t = tt(0.12); add(sfx, 19.72, np.sin(2 * np.pi * np.cumsum(500 + 900 * t / 0.12) / SR) * np.exp(-t * 20), 0.25)  # sent swoosh
for b0 in (20.0, 20.45):  # phone buzz
    t = tt(0.32); add(sfx, b0, np.sign(np.sin(2 * np.pi * 150 * t)) * (0.5 + 0.5 * np.sin(2 * np.pi * 30 * t)) * np.minimum(1, (0.32 - t) / 0.03), 0.10)
add(sfx, 23.1, tone(880, 0.15, 25), 0.3); add(sfx, 23.17, tone(1320, 0.25, 18), 0.3)  # message received

def norm(x, peak): return x / (np.max(np.abs(x)) + 1e-9) * peak
wavfile.write("music.wav", SR, (norm(music, 0.9) * 32767).astype(np.int16))
wavfile.write("sfx.wav", SR, (np.clip(sfx, -1, 1) * 32767).astype(np.int16))
print("ok")
