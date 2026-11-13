import os, sys, re
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from kit3 import HEAD, END, P, HF, AURTXT
STOPS = '<stop offset="0" stop-color="#10B981"></stop><stop offset=".3" stop-color="#0EA5A4"></stop><stop offset=".6" stop-color="#3B6CF6"></stop><stop offset=".85" stop-color="#7C3AED"></stop><stop offset="1" stop-color="#DB2777"></stop>'
def mark(kind, uid, size, tile='#12141F', pad=True):
    g = f'<defs><linearGradient id="mg-{uid}" x1="0" y1="0" x2="1" y2="1">{STOPS}</linearGradient><linearGradient id="mv-{uid}" x1="0" y1="1" x2="0" y2="0">{STOPS}</linearGradient></defs>'
    bg = f'<rect width="100" height="100" rx="24" fill="{tile}"></rect>' if tile else ''
    if kind == 'rays':
        bars = ''
        for i in range(9):
            x = 14 + i * 9
            yc = 82 - abs(i - 4) * 14
            top, bot = max(16, yc - 16), min(84, yc + 6)
            op = 0.55 + 0.45 * (1 - abs(i - 4) / 4)
            bars += f'<rect x="{x - 2.6:.1f}" y="{top}" width="5.2" height="{bot - top}" rx="2.6" fill="url(#mv-{uid})" opacity="{op:.2f}"></rect>'
        body = bars
    elif kind == 'ribbon':
        body = f'<path d="M18 30 C 32 30, 38 74, 50 74 C 62 74, 68 30, 82 30" fill="none" stroke="url(#mg-{uid})" stroke-width="10" stroke-linecap="round"></path><path d="M24 44 C 36 44, 40 66, 50 66 C 60 66, 64 44, 76 44" fill="none" stroke="url(#mg-{uid})" stroke-width="4" stroke-linecap="round" opacity=".55"></path>'
    else:  # bubble
        body = f'<path d="M22 26 h56 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 H46 l-14 12 v-12 h-10 a10 10 0 0 1 -10 -10 V36 a10 10 0 0 1 10 -10 z" fill="none" stroke="url(#mg-{uid})" stroke-width="5" stroke-linejoin="round"></path>' + ''.join(f'<rect x="{34 + i * 8}" y="{49 - h / 2}" width="4.5" height="{h}" rx="2.2" fill="url(#mg-{uid})"></rect>' for i, h in enumerate([8, 16, 22, 14, 8]))
    return f'<svg role="img" aria-label="Vegham mark" width="{size}" height="{size}" viewBox="0 0 100 100">{g}{bg}{body}</svg>'
opts = [('rays', 'A · Light-ray V', 'A “V” made of aurora light rays, which also reads as a voice waveform. Ties together speed, voice and the aurora.'),
        ('ribbon', 'B · Aurora ribbon', 'Two flowing aurora ribbons forming a soft “V”. Calm and elegant; less literal.'),
        ('bubble', 'C · Speaking bubble', 'A chat bubble with a voice wave inside: “answers messages and calls”. Most literal.')]
WM = lambda size, col=None: f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT if not col else "color: " + col}">vegham</span>'
cards = ''
for k, (kind, title, desc) in enumerate(opts):
    u = f'{kind}{k}'
    cards += f'''<div style="flex: 1 1 420px; border: 1px solid #ECECF0; border-radius: 28px; overflow: hidden; background: #FFFFFF">
      <div style="display: flex; align-items: center; justify-content: center; gap: 40px; padding: 48px 24px; background: #07080F">{mark(kind, u + 'a', 140)}<div style="display: flex; align-items: center; gap: 14px">{mark(kind, u + 'b', 52)}{WM(40)}</div></div>
      <div style="padding: 24px 28px">
        <h2 style="margin: 0; {HF}; font-size: 26px; letter-spacing: -0.02em">{title}{" <span style='font-size: 13px; vertical-align: middle; padding: 3px 10px; border-radius: 999px; background: #16182A; color: #FFFFFF; letter-spacing: 0'>Recommended</span>" if k == 1 else ""}</h2>
        <p style="margin: 8px 0 0; color: #6B6B6B; font-size: 15px">{desc}</p>
        <div style="margin-top: 20px; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 22px">
          <span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #8A8A8A">{mark(kind, u + 'c', 88)}App icon</span>
          <span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #8A8A8A"><span style="display: inline-flex; width: 72px; height: 72px; border-radius: 50%; overflow: hidden">{mark(kind, u + 'd', 72)}</span>WhatsApp</span>
          <span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #8A8A8A"><span style="display: flex; gap: 8px; align-items: center">{mark(kind, u + 'e', 32)}{mark(kind, u + 'f', 16)}</span>Favicon</span>
          <span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #8A8A8A"><span style="display: flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #ECECF0; border-radius: 12px">{mark(kind, u + 'g', 28, tile=None)}{WM(22)}</span>On white</span>
        </div>
      </div>
    </div>'''
body = f'''<div style="padding: 56px 48px 64px; background: #F5F5F7; min-height: 1000px; box-sizing: border-box">
    <h1 style="margin: 0; {HF}; font-size: 44px">Logo mark: three options</h1>
    <p style="margin: 8px 0 32px; max-width: 760px; color: #6B6B6B; font-size: 17px">A small symbol to sit next to the “vegham” wordmark: favicon, app icon, WhatsApp profile picture and link previews. All use the same aurora colours.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 20px">{cards}</div>
  </div>'''
h = HEAD.replace(re.search(r'<title>[^<]*</title>', HEAD).group(0), '<title>Logo mark options · Vegham</title>')
open(os.path.join(P, 'LogoMark.dc.html'), 'w').write(h + body + END.replace('__H__', '1000'))
print('marks ok')
