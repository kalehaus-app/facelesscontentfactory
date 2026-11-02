from PIL import Image, ImageDraw, ImageFilter, ImageFont
import sys
S = 2160; C = S // 2
F = "/usr/share/fonts/opentype/inter/Inter-Black.otf"
NAVY, RED, YEL, SKIN, HAIR = (11, 16, 32), (255, 59, 71), (255, 200, 61), (233, 190, 156), (14, 16, 22)

def bg():
    im = Image.new("RGB", (S, S), NAVY)
    g = Image.new("L", (S, S), 0); d = ImageDraw.Draw(g)
    for r in range(C, 0, -8): d.ellipse([C - r, C - r, C + r, C + r], fill=int(70 * (1 - r / C) ** 1.5))
    return Image.composite(Image.new("RGB", (S, S), (40, 52, 96)), im, g)

def glow(im, box, color, blur, radius, strength=1.0):
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).rounded_rectangle(box, radius, fill=int(255 * strength))
    m = m.filter(ImageFilter.GaussianBlur(blur))
    return Image.composite(Image.new("RGB", (S, S), color), im, m)

def save(im, name):
    im.resize((1080, 1080), Image.LANCZOS).save(name)
    # preview with circular crop as platforms show it
    p = im.resize((540, 540), Image.LANCZOS); m = Image.new("L", (540, 540), 0)
    ImageDraw.Draw(m).ellipse([0, 0, 539, 539], fill=255)
    out = Image.new("RGB", (540, 540), (255, 255, 255)); out.paste(p, (0, 0), m); return out

# A: alert icon
a = bg(); box = [C - 560, C - 560, C + 560, C + 560]
a = glow(a, box, RED, 160, 260, 0.9)
d = ImageDraw.Draw(a); d.rounded_rectangle(box, 260, fill=RED)
f = ImageFont.truetype(F, 1150); d.text((C, C + 30), "!", font=f, fill="white", anchor="mm")
pa = save(a, "pfp-alert.png")

# B: Mia
b = bg(); b = glow(b, [C - 700, C - 900, C + 700, C + 300], RED, 260, 700, 0.55)
d = ImageDraw.Draw(b); k = 4.2; ox, oy = C - 200 * k, C - 175 * k
E = lambda cx, cy, rx, ry, fill: d.ellipse([ox + (cx - rx) * k, oy + (cy - ry) * k, ox + (cx + rx) * k, oy + (cy + ry) * k], fill=fill)
P = lambda pts, fill: d.polygon([(ox + x * k, oy + y * k) for x, y in pts], fill=fill)
d.rounded_rectangle([ox + 80 * k, oy + 40 * k, ox + 320 * k, oy + 280 * k], 110 * k, fill=HAIR)  # hair back
d.ellipse([ox + 50 * k, oy + 330 * k, ox + 350 * k, oy + 700 * k], fill=YEL)                     # hoodie
P([(182, 280), (218, 280), (222, 340), (178, 340)], (201, 154, 124))                               # neck
d.ellipse([ox + 118 * k, oy + 312 * k, ox + 282 * k, oy + 368 * k], fill=(217, 162, 42))          # collar
E(200, 172, 92, 106, SKIN)
d.chord([ox + 104 * k, oy + 50 * k, ox + 296 * k, oy + 250 * k], 180, 360, fill=HAIR)             # bangs
E(162, 192, 14, 21, (21, 22, 28)); E(238, 192, 14, 21, (21, 22, 28))
E(167, 184, 5, 5, "white"); E(243, 184, 5, 5, "white")
E(200, 242, 9, 7, (90, 46, 42))
# small red notice badge
bx, by, r = ox + 300 * k, oy + 70 * k, 70 * k
d.ellipse([bx - r, by - r, bx + r, by + r], fill=RED, outline=NAVY, width=int(10 * k))
d.text((bx, by + 8), "!", font=ImageFont.truetype(F, int(105 * k)), fill="white", anchor="mm")
pb = save(b, "pfp-mia.png")

sheet = Image.new("RGB", (1140, 600), (255, 255, 255)); sheet.paste(pa, (20, 30)); sheet.paste(pb, (580, 30))
sheet.save(sys.argv[1] if len(sys.argv) > 1 else "pfp-preview.png")
