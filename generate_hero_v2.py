# RemarkaPave hero v2 — "sell Hawaii": the finished lot is the star.
# High-angle fresh-sealcoat lot; stall lines paint in sequentially with the
# striper at the paint front; ADA stall fills blue + wheelchair symbol stencils
# in; camera pushes toward the finished ADA stall. 180 frames, 1600x900.
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "public", "frames", "hero")
os.makedirs(OUT, exist_ok=True)

W, H, N = 1600, 900, 180
TW, TH = 2400, 1350
Q = 84

def fract(v): return v - np.floor(v)
def hashn(x, z): return fract(np.sin(x * 12.9898 + z * 78.233 + 3.1) * 43758.5453)
def vnoise(x, y):
    x0, y0 = np.floor(x), np.floor(y)
    fx, fy = x - x0, y - y0
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy)
    return (hashn(x0, y0) * (1 - fx) * (1 - fy) + hashn(x0 + 1, y0) * fx * (1 - fy)
            + hashn(x0, y0 + 1) * (1 - fx) * fy + hashn(x0 + 1, y0 + 1) * fx * fy)

GX, GY = np.meshgrid(np.arange(TW, dtype=np.float64), np.arange(TH, dtype=np.float64))

# ---------- base asphalt (fresh sealcoat) ----------
spk = hashn(GX, GY)
low = vnoise(GX / 260, GY / 260)
sheen = np.clip((vnoise(GX / 380 + 9, GY / 380 + 4) - 0.52) * 2.4, 0, 1)
base = np.zeros((TH, TW, 3))
base[:, :, 0] = 26 + spk * 7 + low * 7 + sheen * 16
base[:, :, 1] = 28 + spk * 7 + low * 7 + sheen * 14
base[:, :, 2] = 36 + spk * 8 + low * 8 + sheen * 13

# ---------- lot geometry ----------
# One rank of stalls across the top: stall lines are vertical strokes.
LINE_TOP, LINE_BOT = 170, 600          # stall line extent (y)
STALL_W = 215                          # stall width
N_LINES = 11                           # lines 0..10 -> 10 stalls
LINE_X = [90 + i * STALL_W for i in range(N_LINES)]
LINE_W = 17
# ADA: stall between lines 6 and 7 = blue stall; access aisle between 7 and 8.
ADA_L, ADA_R = LINE_X[6] + LINE_W, LINE_X[7]
AISLE_L, AISLE_R = LINE_X[7] + LINE_W, LINE_X[8]
ADA_CX, ADA_CY = (ADA_L + ADA_R) / 2, (LINE_TOP + LINE_BOT) / 2

def soft_rect(x0, x1, y0, y1, aa=2.0):
    mx = np.clip((GX - x0) / aa, 0, 1) * np.clip((x1 - GX) / aa, 0, 1)
    my = np.clip((GY - y0) / aa, 0, 1) * np.clip((y1 - GY) / aa, 0, 1)
    return mx * my

# paint edge raggedness so lines read as sprayed, not vector
rag = (vnoise(GX / 7.0, GY / 7.0) - 0.5) * 3.0

# static masks (full strength; per-frame progress cuts them)
line_masks = [soft_rect(x, x + LINE_W, LINE_TOP, LINE_BOT) *
              np.clip(1 - np.abs(vnoise(GX / 9 + i * 7, GY / 9) - 0.5) * 0.18, 0, 1)
              for i, x in enumerate(LINE_X)]
ada_fill = soft_rect(ADA_L + 6, ADA_R - 6, LINE_TOP + 6, LINE_BOT - 6, aa=4)
# access-aisle hatch: diagonal stripes
hatch = (np.mod(GX + GY, 90) < 12).astype(np.float64) * soft_rect(AISLE_L + 4, AISLE_R - 4, LINE_TOP + 6, LINE_BOT - 6, aa=3)

# wheelchair symbol stencil, rendered once via font glyph (fallback: simple draw)
sym_img = Image.new("L", (TW, TH), 0)
sd = ImageDraw.Draw(sym_img)
sym_size = int((ADA_R - ADA_L) * 0.62)
font = None
for fp in [r"C:\Windows\Fonts\seguisym.ttf", r"C:\Windows\Fonts\segoeui.ttf"]:
    try:
        f = ImageFont.truetype(fp, sym_size)
        bb = sd.textbbox((0, 0), "♿", font=f)
        if bb[2] - bb[0] > 10:
            font = f
            break
    except Exception:
        pass
if font:
    bb = sd.textbbox((0, 0), "♿", font=font)
    sd.text((ADA_CX - (bb[2] - bb[0]) / 2 - bb[0], ADA_CY - (bb[3] - bb[1]) / 2 - bb[1]),
            "♿", font=font, fill=255)
else:
    # fallback: simplified wheelchair glyph
    r = sym_size // 2
    sd.ellipse([ADA_CX - r, ADA_CY - r * 0.2, ADA_CX + r * 0.5, ADA_CY + r * 1.1], outline=255, width=18)
    sd.ellipse([ADA_CX - r * 0.35, ADA_CY - r * 1.1, ADA_CX + r * 0.05, ADA_CY - r * 0.7], fill=255)
    sd.line([ADA_CX - r * 0.15, ADA_CY - r * 0.65, ADA_CX - r * 0.15, ADA_CY + r * 0.15,
             ADA_CX + r * 0.55, ADA_CY + r * 0.15], fill=255, width=20, joint="curve")
symbol = np.asarray(sym_img, dtype=np.float64) / 255.0
stencil_noise = vnoise(GX / 5.5 + 31, GY / 5.5 + 17)

WHITE = np.array([243, 246, 250.0])
BLUE = np.array([21, 86, 214.0])
YELLOW = np.array([245, 205, 40.0])

# stop bar + arrow in the lane below (painted late, small garnish)
stopbar = soft_rect(120, 700, 980, 1030, aa=3)
arrow_img = Image.new("L", (TW, TH), 0)
ad = ImageDraw.Draw(arrow_img)
ad.polygon([(1450, 1130), (1450, 980), (1408, 980), (1490, 880), (1572, 980), (1530, 980), (1530, 1130)], fill=255)
arrow = np.asarray(arrow_img, dtype=np.float64) / 255.0

def striper_sprite(draw, x, y, ang_down=True):
    """Top-down walk-behind striper at the paint tip (simple, reads at distance)."""
    bw, bh = 64, 96
    draw.rounded_rectangle([x - bw/2, y - bh, x + bw/2, y], radius=14, fill=(228, 230, 234), outline=(70, 74, 80), width=4)
    draw.rectangle([x - bw/2 + 8, y - bh + 10, x + bw/2 - 8, y - bh + 38], fill=(244, 196, 24))  # Titan yellow deck
    draw.ellipse([x - 14, y - 60, x + 14, y - 32], fill=(58, 62, 68))  # paint pail
    draw.line([x - bw/2 + 6, y - 6, x - bw/2 - 26, y + 64], fill=(80, 84, 90), width=9)   # handlebars trail behind
    draw.line([x + bw/2 - 6, y - 6, x + bw/2 + 26, y + 64], fill=(80, 84, 90), width=9)
    draw.rectangle([x - bw/2 - 8, y - bh + 16, x - bw/2 + 2, y - bh + 52], fill=(40, 42, 46))  # wheels
    draw.rectangle([x + bw/2 - 2, y - bh + 16, x + bw/2 + 8, y - bh + 52], fill=(40, 42, 46))

def smooth(a):  # smoothstep clip
    a = np.clip(a, 0, 1); return a * a * (3 - 2 * a)

# ---------- per-frame ----------
for i in range(N):
    t = i / (N - 1)
    comp = base.copy()

    # --- stall lines paint in over t in [0, 0.55], one after another ---
    seg = 0.55 / N_LINES
    tip = None
    for k, (x, m) in enumerate(zip(LINE_X, line_masks)):
        f = smooth((t - k * seg) / seg)           # this line's paint fraction
        if f <= 0: continue
        edge_y = LINE_TOP + f * (LINE_BOT - LINE_TOP)
        cut = np.clip((edge_y - GY) / 6.0, 0, 1)  # painted above the moving tip
        mm = (m * cut)[:, :, None]
        comp = comp * (1 - mm) + WHITE * mm
        if 0 < f < 1:
            tip = (x + LINE_W / 2, edge_y)

    # --- ADA blue fill wipes in t [0.55, 0.70]; hatch t [0.62, 0.74] ---
    fb = smooth((t - 0.55) / 0.15)
    if fb > 0:
        wipe = np.clip((ADA_L + 6 + fb * (ADA_R - ADA_L - 12) - GX) / 14.0, 0, 1)
        mm = (ada_fill * wipe * 0.92)[:, :, None]
        comp = comp * (1 - mm) + BLUE * mm
        if 0 < fb < 1:
            tip = (ADA_L + 6 + fb * (ADA_R - ADA_L - 12), ADA_CY)
    fh = smooth((t - 0.62) / 0.12)
    if fh > 0:
        cut = np.clip((AISLE_L + 4 + fh * (AISLE_R - AISLE_L - 8) - GX) / 12.0, 0, 1)
        mm = (hatch * cut * 0.9)[:, :, None]
        comp = comp * (1 - mm) + WHITE * mm

    # --- wheelchair symbol stencils in t [0.70, 0.86] ---
    fs = smooth((t - 0.70) / 0.16)
    if fs > 0:
        reveal = np.clip((fs * 1.25 - stencil_noise) * 6.0, 0, 1)
        mm = (symbol * reveal * 0.96)[:, :, None]
        comp = comp * (1 - mm) + WHITE * mm

    # --- stop bar + arrow garnish t [0.30, 0.50] ---
    fg = smooth((t - 0.30) / 0.20)
    if fg > 0:
        cutg = np.clip((120 + fg * 580 - GX) / 12.0, 0, 1)
        mm = (stopbar * cutg * 0.9)[:, :, None]
        comp = comp * (1 - mm) + WHITE * mm
        mm = (arrow * smooth((fg - 0.5) * 2) * 0.9)[:, :, None]
        comp = comp * (1 - mm) + WHITE * mm

    # --- dusk grade: golden key light vs cool blue shadow, ramping up ---
    warm = 0.45 + 0.55 * smooth((t - 0.45) / 0.4)
    lightk = np.clip((GX / TW * 0.6 + (1 - GY / TH) * 0.4), 0, 1) ** 1.5
    comp += (lightk[:, :, None] * np.array([88, 56, 16.0])) * warm
    comp += ((1 - lightk)[:, :, None] * np.array([-6, 2, 26.0])) * 0.7
    # amber lamp pools for depth
    for (lx, ly, lr) in [(420, 850, 560), (1950, 380, 620)]:
        pool = np.exp(-(((GX - lx) ** 2 + (GY - ly) ** 2) / (2 * lr ** 2)))
        comp += pool[:, :, None] * np.array([34, 22, 4.0]) * warm

    img = Image.fromarray(np.clip(comp, 0, 255).astype(np.uint8))

    # --- striper sprite + spray mist at the paint tip ---
    if tip is not None and t < 0.74:
        d = ImageDraw.Draw(img, "RGBA")
        sx, sy = tip
        d.ellipse([sx - 34, sy - 14, sx + 34, sy + 30], fill=(255, 255, 255, 56))  # mist
        d.ellipse([sx - 16, sy - 6, sx + 16, sy + 14], fill=(255, 255, 255, 86))
        striper_sprite(d, sx, sy - 8)

    # --- bloom on fresh paint ---
    arr = np.asarray(img, dtype=np.float64)
    lum = arr.mean(axis=2)
    bm = Image.fromarray((np.clip((lum - 150) / 105, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(7))
    arr = arr + (np.asarray(bm, dtype=np.float64) / 255.0)[:, :, None] * np.array([26, 24, 18.0])
    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))

    # --- camera: slow push from full lot to the ADA stall ---
    z = 1.0 + 0.42 * smooth(t * 1.05)
    ww = TW / z
    wh = ww * 9 / 16
    cx = TW / 2 + (ADA_CX - TW / 2) * smooth((t - 0.15) / 0.7)
    cy = TH * 0.42 + (ADA_CY - TH * 0.42) * smooth((t - 0.15) / 0.7) * 0.7
    x0 = int(np.clip(cx - ww / 2, 0, TW - ww))
    y0 = int(np.clip(cy - wh / 2, 0, TH - wh))
    img = img.crop((x0, y0, x0 + int(ww), y0 + int(wh))).resize((W, H), Image.LANCZOS)
    img = img.filter(ImageFilter.GaussianBlur(0.4))
    img.save(os.path.join(OUT, f"frame_{i + 1:04d}.jpg"), quality=Q, optimize=True)
    if (i + 1) % 30 == 0:
        print(f"hero {i + 1}/{N}", flush=True)

print("done", flush=True)
