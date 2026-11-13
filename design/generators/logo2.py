"""Vegham logo concepts: six non-letter symbols, shown at real sizes and in context."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3
from kit3 import HF, AURTXT, P

STOPS = [(0, '#10B981'), (28, '#0EA5A4'), (58, '#3B6CF6'), (82, '#7C3AED'), (100, '#DB2777')]
def grad(uid, x1=0, y1=1, x2=1, y2=0):
    st = ''.join(f'<stop offset="{o}%" stop-color="{c}"></stop>' for o, c in STOPS)
    return f'<linearGradient id="{uid}" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}">{st}</linearGradient>'

def shapes(kind, F, glow):
    """F = fill reference (url(#id) or a colour). glow = colour for highlights."""
    if kind == 'swift':
        return f'''<g transform="rotate(-14 32 34)">
          <path d="M30 27 C21 22 9 26 2 41 C11 31.5 21 30.5 30 34 Z" fill="{F}"></path>
          <path d="M34 27 C43 22 55 26 62 41 C53 31.5 43 30.5 34 34 Z" fill="{F}"></path>
          <path d="M32 18.5 C35.2 18.5 36.6 21.5 36.4 25.5 L35.4 40 L38.5 51 L32 44.5 L25.5 51 L28.6 40 L27.6 25.5 C27.4 21.5 28.8 18.5 32 18.5 Z" fill="{F}"></path></g>'''
    if kind == 'dawn':
        return f'''<path d="M20 46 A12 12 0 0 1 44 46 Z" fill="{F}"></path>
          <path d="M11 46 A21 21 0 0 1 53 46" fill="none" stroke="{F}" stroke-width="5" stroke-linecap="round"></path>
          <path d="M3.5 46 A28.5 28.5 0 0 1 60.5 46" fill="none" stroke="{F}" stroke-width="4" stroke-linecap="round" opacity=".55"></path>
          <rect x="6" y="51" width="52" height="4.5" rx="2.25" fill="{F}"></rect>'''
    if kind == 'comet':
        return f'''<path d="M38.6 12.6 C28 24 16 40 5 59 C21 47 36 36 51.4 25.4 Z" fill="{F}"></path>
          <path d="M33 13 C24 19 15 26 9 33 C18 28 27 22 36 17 Z" fill="{F}" opacity=".5"></path>
          <path d="M51 31 C45 40 38 49 31 55 C37 47 43 40 48 33 Z" fill="{F}" opacity=".5"></path>
          <circle cx="45" cy="19" r="9" fill="{F}"></circle>
          <circle cx="46.5" cy="17.5" r="3.6" fill="{glow}" opacity=".95"></circle>'''
    if kind == 'door':
        return f'''<path d="M14 58 V28 A18 18 0 0 1 50 28 V58" fill="none" stroke="{F}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M23 58 V31 A9 9 0 0 1 32 22 L38 25 V58 Z" fill="{F}"></path>
'''
    if kind == 'orbit':
        return f'''<circle cx="32" cy="32" r="13" fill="{F}"></circle>
          <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="{F}" stroke-width="4" transform="rotate(-28 32 32)"></ellipse>
          <circle cx="56.5" cy="19" r="4.6" fill="{F}"></circle>'''
    if kind == 'spark':
        return f'''<path d="M18 6 H50 A12 12 0 0 1 62 18 V38 A12 12 0 0 1 50 50 H26 L24 50 A12 12 0 0 1 6 38 V18 A12 12 0 0 1 18 6 Z" fill="{F}"></path>
          <path d="M14 46 L16.6 54.4 L25 57 L16.6 59.6 L14 68 L11.4 59.6 L3 57 L11.4 54.4 Z" fill="{F}" transform="translate(0 -6)"></path>'''
    if kind == 'bell':
        return f'''<path d="M9 45 A23 23 0 0 1 55 45 Z" fill="{F}"></path>
          <rect x="5" y="48" width="54" height="7" rx="3.5" fill="{F}"></rect>
          <rect x="29.5" y="15" width="5" height="9" rx="2" fill="{F}"></rect>
          <ellipse cx="32" cy="14" rx="8" ry="3" fill="{F}"></ellipse>
          <path d="M18 38 A15 15 0 0 1 27 27" fill="none" stroke="{glow}" stroke-width="3.2" stroke-linecap="round" opacity=".85"></path>
          <path d="M48 9 l3 -5 M54 14 l5 -3 M53 21 h5" stroke="{F}" stroke-width="3" stroke-linecap="round"></path>'''
    if kind == 'lotus':
        return f'''<path d="M32 6 C41 18 41 36 32 50 C23 36 23 18 32 6 Z" fill="{F}"></path>
          <path d="M30 50 C19 47 9 37 6 22 C17 25 26 35 30 50 Z" fill="{F}" opacity=".8"></path>
          <path d="M34 50 C45 47 55 37 58 22 C47 25 38 35 34 50 Z" fill="{F}" opacity=".8"></path>
          <path d="M8 56 C20 52 44 52 56 56" fill="none" stroke="{F}" stroke-width="4" stroke-linecap="round"></path>'''
    if kind == 'disc':
        return f'''<circle cx="32" cy="32" r="27" fill="{F}"></circle>
          <path d="M5 27 C15 19 23 33 33 26 S50 17 59 22" fill="none" stroke="{glow}" stroke-width="3.4" stroke-linecap="round"></path>
          <path d="M6 39 C16 31 25 45 35 38 S51 30 58 35" fill="none" stroke="{glow}" stroke-width="3.4" stroke-linecap="round"></path>'''
    if kind == 'lighthouse':
        return f'''<path d="M37 18 L62 8 V30 Z" fill="{F}" opacity=".55"></path>
          <path d="M27 18 L10 13 V25 Z" fill="{F}" opacity=".35"></path>
          <path d="M25.5 17 L32 10 L38.5 17 Z" fill="{F}"></path>
          <rect x="27" y="18" width="10" height="7" rx="1.5" fill="{F}"></rect>
          <path d="M27.5 27 H36.5 L39.5 58 H24.5 Z" fill="{F}"></path>
          <path d="M26.8 37 H37.2 M26 47 H38" stroke="{glow}" stroke-width="2.6"></path>
          <path d="M12 60 H52" stroke="{F}" stroke-width="3.5" stroke-linecap="round"></path>'''
    if kind == 'daynight':
        return f'''<path d="M31 6 A26 26 0 1 0 31 58 A32 32 0 0 1 31 6 Z" fill="{F}"></path>
          <circle cx="45" cy="32" r="8.5" fill="{F}"></circle>
          <path d="M45 17 V20 M45 44 V47 M61 32 H58 M56.5 20.5 L54.5 22.5 M56.5 43.5 L54.5 41.5" stroke="{F}" stroke-width="3" stroke-linecap="round"></path>'''
    if kind == 'wheel':
        b = '<path d="M32 29 C30 17 38 7 53 6 C45 12 41 20 38.5 30.5 Z" fill="{F}"></path>'.replace('{F}', F)
        return f'''{b}<g transform="rotate(120 32 32)">{b}</g><g transform="rotate(240 32 32)">{b}</g>
          <circle cx="32" cy="32" r="5" fill="{F}"></circle>'''
    raise ValueError(kind)

def mark(kind, uid, size, mode='aurora', tile=None, r=None):
    """mode: aurora | white | ink. tile: background colour of an app-icon tile (None = bare mark)."""
    uid = re.sub(r'\W', '', uid)
    if mode == 'aurora':
        F, glow, defs = f'url(#{uid})', '#FFFFFF', grad(uid)
    elif mode == 'white':
        F, glow, defs = '#FFFFFF', '#12141F', ''
    else:
        F, glow, defs = '#16182A', '#FFFFFF', ''
    inner = shapes(kind, F, glow)
    if tile:
        rr = r if r is not None else 14
        return f'<svg role="img" aria-label="Vegham" width="{size}" height="{size}" viewBox="0 0 64 64"><defs>{defs}</defs><rect width="64" height="64" rx="{rr}" fill="{tile}"></rect><g transform="translate(9.6 9.6) scale(.7)">{inner}</g></svg>'
    return f'<svg role="img" aria-label="Vegham" width="{size}" height="{size}" viewBox="0 0 64 64" style="overflow: visible"><defs>{defs}</defs>{inner}</svg>'

CONCEPTS = [
    ('swift', 'A · Swift', 'The swift is the fastest bird in level flight and never seems to land. Two swept aurora wings: speed (vegam) and a messenger that is always on its way.', 'Speed · messenger · always moving'),
    ('dawn', 'B · Dawn signal', 'A sun rising over the horizon, sending out waves. Reads as voice and chat answers going out, and as the business opening at first light.', 'Opening time · voice · reach'),
    ('comet', 'C · Comet', 'An aurora streak arriving at a bright point: a reply landing the instant a customer asks. The most direct link to the aurora brand.', 'Instant reply · arrival · aurora'),
    ('door', 'D · Open door', 'An arch with its door ajar and light spilling out. The front desk that is always open to customers, day or night.', 'Welcome · always open · front desk'),
    ('orbit', 'E · Orbit', 'A core with a customer in orbit around it: the business at the centre, every customer kept in reach, nobody drifting away.', 'Attention · relationships · 24×7'),
    ('spark', 'F · Spark bubble', 'A message bubble whose tail has become a spark. Conversation plus intelligence, simple enough to read at 16 px.', 'Conversation · AI · instant'),
]
WM = lambda size, extra='': f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT}{extra}">vegham</span>'

def concept_card(kind, title, desc, tags):
    u = f'lc{kind}'
    big_dark = f'<div style="flex: 1; height: 240px; border-radius: 22px; background: #12141F; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden"><div aria-hidden="true" style="position: absolute; inset: 0; background: radial-gradient(60% 50% at 50% 30%, rgba(59,108,246,.18), transparent 70%)"></div><span style="position: relative">{mark(kind, u + "bd", 132)}</span></div>'
    big_light = f'<div style="flex: 1; height: 240px; border-radius: 22px; background: #F5F5F7; display: flex; align-items: center; justify-content: center">{mark(kind, u + "bl", 132)}</div>'
    mono = f'<div style="width: 120px; display: flex; flex-direction: column; gap: 8px"><div style="flex: 1; border-radius: 16px; background: #FFFFFF; border: 1px solid #ECECF0; display: flex; align-items: center; justify-content: center">{mark(kind, u + "m1", 54, "ink")}</div><div style="flex: 1; border-radius: 16px; background: #16182A; display: flex; align-items: center; justify-content: center">{mark(kind, u + "m2", 54, "white")}</div></div>'
    lab = lambda t: f'<span style="display: block; margin-top: 8px; font-size: 11.5px; color: #8A8A8A; text-align: center">{t}</span>'
    app_dark = f'<div>{mark(kind, u + "ad", 72, tile="#12141F", r=16)}{lab("App icon")}</div>'
    app_light = f'<div>{mark(kind, u + "al", 72, tile="#FFFFFF", r=16).replace("<rect ", "<rect stroke=\"#E6E6EA\" stroke-width=\"1\" ")}{lab("Light")}</div>'
    wa = f'<div><span style="display: inline-flex; width: 72px; height: 72px; border-radius: 50%; overflow: hidden">{mark(kind, u + "wa", 72, tile="#12141F", r=0)}</span>{lab("WhatsApp")}</div>'
    fav = f'''<div style="display: flex; flex-direction: column; align-items: center"><div style="height: 72px; display: flex; align-items: center; gap: 12px"><span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px 6px 8px; border-radius: 8px 8px 0 0; background: #EDEDF0; font-size: 11px; color: #3D3D3D">{mark(kind, u + "f16", 16)}Vegham</span>{mark(kind, u + "f32", 32)}</div>{lab("Favicon 16 · 32")}</div>'''
    lock = f'''<div style="flex: 1; display: flex; flex-direction: column; gap: 10px">
        <div style="display: flex; align-items: center; gap: 10px; padding: 14px 18px; border-radius: 16px; background: #FFFFFF; border: 1px solid #ECECF0">{mark(kind, u + "lk1", 30)}{WM(24)}</div>
        <div style="display: flex; align-items: center; gap: 10px; padding: 14px 18px; border-radius: 16px; background: #12141F">{mark(kind, u + "lk2", 30)}{WM(24)}</div></div>'''
    chips = ''.join(f'<span style="padding: 5px 11px; border-radius: 999px; background: #F3F3F5; font-size: 12.5px; color: #3D3D3D">{t}</span>' for t in tags.split(' · '))
    return f'''<article style="padding: 26px; border-radius: 28px; background: #FFFFFF; border: 1px solid #ECECF0; box-shadow: 0 30px 60px -45px rgba(22,24,42,.35); display: flex; flex-direction: column; gap: 18px">
      <div style="display: flex; gap: 10px">{big_dark}{big_light}{mono}</div>
      <div><h2 style="margin: 0; {HF}; font-size: 30px; letter-spacing: -0.03em">{title}</h2><p style="margin: 6px 0 0; font-size: 15px; line-height: 1.55; color: #5C5C5C">{desc}</p><div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px">{chips}</div></div>
      <div style="display: flex; align-items: flex-start; gap: 18px; padding-top: 16px; border-top: 1px solid #F0F0F3">{app_dark}{app_light}{wa}{fav}{lock}</div>
    </article>'''

CONCEPTS2 = [
    ('bell', 'G · Desk bell', 'The bell on every reception counter, ringing. Instantly says "front desk" anywhere in the world, made modern with the aurora and a light catching the dome.', 'Front desk · service · instantly understood'),
    ('lotus', 'H · Lotus of light', 'Three petals of aurora light opening above calm water. Growth, care and calm, with a quiet nod to India that still reads globally.', 'Growth · care · India to the world'),
    ('disc', 'I · Aurora disc', 'The aurora itself, held in a circle: two flowing bands of light. The simplest way to own the brand colours as a symbol.', 'Aurora · calm · ownable'),
    ('lighthouse', 'J · Lighthouse', 'Always lit, always watching, guiding people in. A front desk that never goes dark, with a beam reaching out to customers.', 'Always on · guidance · trust'),
    ('daynight', 'K · Day and night', 'A moon and a sun in one mark: Vegham answers at 3 PM and at 3 AM. The 24×7 promise as a single shape.', '24×7 · never closes · reliable'),
    ('wheel', 'L · Speed wheel', 'Three blades spinning around a centre: speed (vegam) and motion, like a wheel or a turbine that never stops.', 'Speed · energy · momentum'),
]

if __name__ == '__main__' and len(sys.argv) > 1 and sys.argv[1] == 'more':
    cards = ''.join(concept_card(*c) for c in CONCEPTS2)
    body = f'''<div style="padding: 56px; background: #F5F5F7; font-family: Inter, system-ui, sans-serif; color: #1F1F1F">
      <span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #6B6B6B">Brand · logo concepts, round 2</span>
      <h1 style="margin: 10px 0 0; {HF}; font-size: 52px; letter-spacing: -0.04em">Six more for {WM(52, "; display: inline")}.</h1>
      <p style="margin: 10px 0 0; max-width: 820px; font-size: 17px; line-height: 1.5; color: #5C5C5C">Different directions from round 1: the reception bell, light and growth, the aurora itself, always-on, 24×7 and pure speed. Same tests: app icon, WhatsApp, 16 px tab, one colour and next to the wordmark.</p>
      <div style="margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px">{cards}</div>
    </div>'''
    head = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Vegham logo concepts 2</title>')
    open(os.path.join(P, 'LogoConcepts2.dc.html'), 'w').write(head + body + kit3.END.replace('__H__', '__LH__'))
    print('ok2'); sys.exit()

if __name__ == '__main__':
    cards = ''.join(concept_card(*c) for c in CONCEPTS)
    body = f'''<div style="padding: 56px; background: #F5F5F7; font-family: Inter, system-ui, sans-serif; color: #1F1F1F">
      <span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #6B6B6B">Brand · logo concepts</span>
      <h1 style="margin: 10px 0 0; {HF}; font-size: 52px; letter-spacing: -0.04em">Six symbols for {WM(52, "; display: inline")}.</h1>
      <p style="margin: 10px 0 0; max-width: 820px; font-size: 17px; line-height: 1.5; color: #5C5C5C">No letters. Each one is drawn from what the product does, coloured with the aurora gradient, and tested where it has to work: app icon, WhatsApp profile, a 16 px browser tab, one colour, and next to the wordmark.</p>
      <div style="margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px">{cards}</div>
      <p style="margin: 28px 0 0; font-size: 13px; color: #8A8A8A">Pick one or two. The chosen symbol gets refined (proportions, optical balance at small sizes), then a full set: favicon, app icons, share image and a usage sheet.</p>
    </div>'''
    head = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Vegham logo concepts</title>')
    open(os.path.join(P, 'LogoConcepts.dc.html'), 'w').write(head + body + kit3.END.replace('__H__', '__LH__'))
    print('ok')
