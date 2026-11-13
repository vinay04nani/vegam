"""Round 3: AI-lab style marks (monochrome-first, geometric/organic, calm). Original designs."""
import os, re, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3
from kit3 import HF, AURTXT, P
import importlib.util
spec = importlib.util.spec_from_file_location('l2', os.path.join(D, 'logo2.py')); l2 = importlib.util.module_from_spec(spec); spec.loader.exec_module(l2)
STOPS = l2.STOPS
def grad(uid):
    st = ''.join(f'<stop offset="{o}%" stop-color="{c}"></stop>' for o, c in STOPS)
    return f'<linearGradient id="{uid}" gradientUnits="userSpaceOnUse" x1="4" y1="60" x2="60" y2="4">{st}</linearGradient>'

def shapes(kind, F, bg):
    if kind == 'weave':
        e = f'<ellipse cx="32" cy="21.5" rx="9.5" ry="16" fill="none" stroke="{F}" stroke-width="5"></ellipse>'
        return f'{e}<g transform="rotate(120 32 32)">{e}</g><g transform="rotate(240 32 32)">{e}</g>'
    if kind == 'bloom':
        L = [24, 28, 20, 26, 29, 19, 25, 22, 27, 18, 24, 28, 21, 26, 23, 20]
        out = ''
        for i, l in enumerate(L):
            a = math.radians(i * 360 / len(L) - 90)
            x1, y1 = 32 + 9 * math.cos(a), 32 + 9 * math.sin(a)
            x2, y2 = 32 + (l + 2) * math.cos(a), 32 + (l + 2) * math.sin(a)
            out += f'<path d="M{x1:.2f} {y1:.2f} L{x2:.2f} {y2:.2f}" stroke="{F}" stroke-width="3.6" stroke-linecap="round"></path>'
        return out
    if kind == 'kolam':
        pet = 'M32 31 C25 24 24 13 32 5 C40 13 39 24 32 31 Z'
        p = ''.join(f'<path d="{pet}" fill="none" stroke="{F}" stroke-width="4.2" stroke-linejoin="round" transform="rotate({r} 32 32)"></path>' for r in (0, 90, 180, 270))
        p += ''.join(f'<circle cx="{x}" cy="{y}" r="3.6" fill="{F}"></circle>' for x, y in ((19, 19), (45, 19), (19, 45), (45, 45)))
        return p
    if kind == 'seed':
        out = ''
        for i in range(1, 74):
            r = 3.25 * math.sqrt(i)
            a = i * math.radians(137.508)
            s = 0.9 + i * 0.029
            if r + s > 30: break
            out += f'<circle cx="{32 + r * math.cos(a):.2f}" cy="{32 + r * math.sin(a):.2f}" r="{s:.2f}" fill="{F}"></circle>'
        return out
    if kind == 'petals':
        pt = 'M32 32 C30 21 35 9 45 6 C47 16 41 27 32 32 Z'
        return ''.join(f'<path d="{pt}" fill="{F}" opacity=".88" transform="rotate({r} 32 32)"></path>' for r in range(0, 360, 60))
    if kind == 'ringwave':
        return f'''<circle cx="32" cy="32" r="26" fill="none" stroke="{F}" stroke-width="4.5"></circle>
          <path d="M6 32 C12 32 14 20 20 20 C27 20 26 44 33 44 C40 44 39 24 45 24 C50 24 52 32 58 32" fill="none" stroke="{F}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"></path>'''
    raise ValueError(kind)

def mark(kind, uid, size, mode='aurora', tile=None, r=14):
    uid = re.sub(r'\W', '', uid)
    if mode == 'aurora':
        F, defs = f'url(#{uid})', grad(uid)
    elif mode == 'white':
        F, defs = '#FFFFFF', ''
    else:
        F, defs = '#111214', ''
    inner = shapes(kind, F, tile or '#FFFFFF')
    if tile:
        return f'<svg role="img" aria-label="Vegham" width="{size}" height="{size}" viewBox="0 0 64 64"><defs>{defs}</defs><rect width="64" height="64" rx="{r}" fill="{tile}"></rect><g transform="translate(11.2 11.2) scale(.65)">{inner}</g></svg>'
    return f'<svg role="img" aria-label="Vegham" width="{size}" height="{size}" viewBox="0 0 64 64" style="overflow: visible"><defs>{defs}</defs>{inner}</svg>'

C3 = [
    ('weave', 'M · Woven triad', 'Three loops woven through each other: you, your customers and Vegham, held together. Geometric and calm, in the spirit of research-lab marks.', 'Geometric · connected · calm'),
    ('bloom', 'N · Voice bloom', 'A circle of strokes at different lengths, like a voice waveform wrapped into a flower. Warm and human, the way an assistant should feel.', 'Voice · warm · human'),
    ('kolam', 'O · Kolam loop', 'Four petals drawn around four dots, the way a kolam is drawn at the doorstep each morning to welcome guests. Indian at heart, a welcome sign in form.', 'Welcome · doorstep · India'),
    ('seed', 'P · Sunflower seeds', 'Dots arranged by the golden angle, growing outwards: intelligence and growth from a simple rule. Reads as "AI" without saying it.', 'Growth · intelligence · natural'),
    ('petals', 'Q · Six petals', 'Six petals turning around a centre: an aperture, a flower and motion at once. Balanced and confident at every size.', 'Balance · motion · openness'),
    ('ringwave', 'R · Voice in a ring', 'A single line of voice travelling inside a circle: a conversation that is always held and always answered.', 'Conversation · always on · simple'),
]
WM = lambda size, col=None: (f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; color: {col}">vegham</span>' if col else l2.WM(size))

def card(kind, title, desc, tags):
    u = f'r3{kind}'
    lab = lambda t: f'<span style="display: block; margin-top: 8px; font-size: 11.5px; color: #8A8A8A; text-align: center">{t}</span>'
    top = f'''<div style="display: flex; gap: 10px">
      <div style="flex: 1; height: 240px; border-radius: 22px; background: #0B0B0C; display: flex; align-items: center; justify-content: center">{mark(kind, u + "bw", 128, "white")}</div>
      <div style="flex: 1; height: 240px; border-radius: 22px; background: #F4F3EF; display: flex; align-items: center; justify-content: center">{mark(kind, u + "bi", 128, "ink")}</div>
      <div style="width: 120px; display: flex; flex-direction: column; gap: 8px"><div style="flex: 1; border-radius: 16px; background: #12141F; display: flex; align-items: center; justify-content: center">{mark(kind, u + "a1", 62)}</div><div style="flex: 1; border-radius: 16px; background: #FFFFFF; border: 1px solid #ECECF0; display: flex; align-items: center; justify-content: center">{mark(kind, u + "a2", 62)}</div></div></div>'''
    chips = ''.join(f'<span style="padding: 5px 11px; border-radius: 999px; background: #F3F3F5; font-size: 12.5px; color: #3D3D3D">{t}</span>' for t in tags.split(' · '))
    row = f'''<div style="display: flex; align-items: flex-start; gap: 16px; padding-top: 16px; border-top: 1px solid #F0F0F3">
      <div>{mark(kind, u + "ad", 68, "white", "#0B0B0C", 16)}{lab("App icon")}</div>
      <div>{mark(kind, u + "aa", 68, "aurora", "#12141F", 16)}{lab("Aurora")}</div>
      <div><span style="display: inline-flex; width: 68px; height: 68px; border-radius: 50%; overflow: hidden">{mark(kind, u + "wa", 68, "white", "#0B0B0C", 0)}</span>{lab("WhatsApp")}</div>
      <div style="display: flex; flex-direction: column; align-items: center"><div style="height: 68px; display: flex; align-items: center; gap: 10px"><span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px 6px 8px; border-radius: 8px 8px 0 0; background: #EDEDF0; font-size: 11px; color: #3D3D3D">{mark(kind, u + "f16", 16, "ink")}Vegham</span>{mark(kind, u + "f32", 32, "ink")}</div>{lab("Favicon 16 · 32")}</div>
      <div style="flex: 1; display: flex; flex-direction: column; gap: 8px">
        <div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 14px; background: #FFFFFF; border: 1px solid #ECECF0">{mark(kind, u + "l1", 28, "ink")}{WM(23, "#111214")}</div>
        <div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 14px; background: #0B0B0C">{mark(kind, u + "l2", 28, "white")}{WM(23, "#FFFFFF")}</div>
        <div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 14px; background: #12141F">{mark(kind, u + "l3", 28)}{WM(23)}</div></div></div>'''
    return f'''<article style="padding: 26px; border-radius: 28px; background: #FFFFFF; border: 1px solid #ECECF0; box-shadow: 0 30px 60px -45px rgba(22,24,42,.35); display: flex; flex-direction: column; gap: 18px">{top}
      <div><h2 style="margin: 0; {HF}; font-size: 30px; letter-spacing: -0.03em">{title}</h2><p style="margin: 6px 0 0; font-size: 15px; line-height: 1.55; color: #5C5C5C">{desc}</p><div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px">{chips}</div></div>{row}</article>'''

body = f'''<div style="padding: 56px; background: #F4F3EF; font-family: Inter, system-ui, sans-serif; color: #111214">
  <span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #6B6B6B">Brand · logo concepts, round 3 · AI-lab style</span>
  <h1 style="margin: 10px 0 0; {HF}; font-size: 52px; letter-spacing: -0.04em">Quiet, confident, one colour first.</h1>
  <p style="margin: 10px 0 0; max-width: 860px; font-size: 17px; line-height: 1.5; color: #55555C">The style of the best AI companies: a symbol that works in plain black or white before any colour is added, geometric or organic, never busy. All six are original designs. Shown in black and white first, the aurora version second, and in the same real-size tests.</p>
  <div style="margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px">{''.join(card(*c) for c in C3)}</div>
</div>'''
head = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Vegham logo concepts 3</title>')
open(os.path.join(P, 'LogoConcepts3.dc.html'), 'w').write(head + body + kit3.END.replace('__H__', '__LH__'))
print('ok3')
