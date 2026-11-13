"""Onboarding v3 (direction A, reviewed): one living card, 6 steps + review + live.
States: 0 welcome · 1 business · 2 teach · 3 assistant · 4 channels · 5 test drive · 6 review · 7 live.
Pure CSS state machine (radio/checkbox + :has), clickable on the canvas."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps, landscape
from kit3 import HF, AURTXT, FIELD, LABEL, P
src = open(os.path.join(D, 'marks.py')).read(); ns = {'__file__': os.path.join(D, 'marks.py'), '__name__': 'm'}
exec(src.split("opts = [")[0], ns)
mark = ns['mark']

TICK = lambda c='#1F9D6B', s=16: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
WM = lambda size=22: f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT}">vegham</span>'
PLAY = '<svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z" fill="currentColor"></path></svg>'
UP = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M6 10l6-6 6 6M4 20h16"></path></svg>'
N = 8
EASE = 'cubic-bezier(.2,.7,.2,1)'
NAMES = ['Welcome', 'Your business', 'Teach Vegham', 'Your assistant', 'Channels', 'Test drive', 'Review', 'Live']
CHANNELS = {
    'wa': (lambda s: comps.logo('whatsapp', s), 'WhatsApp'),
    'web': (lambda s: comps.GLOBE.format(s=s, c='#16182A'), 'Website chat'),
    'ig': (lambda s: comps.logo('instagram', s), 'Instagram'),
    'ph': (lambda s: comps.PHONE.format(s=s, c='#16182A'), 'Phone calls'),
    'g': (lambda s: comps.logo('google', s), 'Google Business'),
}
QR = lambda px=7, ink='#16182A': ''.join(f'<span style="width: {px}px; height: {px}px; background: {ink if (i * 7 + i // 9 * 3) % 5 < 2 or i in (0,1,2,9,11,18,19,20,6,7,8,15,17,24,25,26,54,55,56,63,65,72,73,74) else "transparent"}"></span>' for i in range(81))


def build(start, name, title, sheet=False):
    X = 'v'
    R = lambda s: f'#{X}{s}:checked'
    on = lambda steps: ','.join(R(s) for s in steps)
    css = [f'''
@property --c-bg{{syntax:'<color>';inherits:true;initial-value:#FFFFFF}}
@property --c-ink{{syntax:'<color>';inherits:true;initial-value:#16182A}}
@property --c-mut{{syntax:'<color>';inherits:true;initial-value:#6B6B6B}}
@property --c-tile{{syntax:'<color>';inherits:true;initial-value:#F5F5F7}}
@property --c-line{{syntax:'<color>';inherits:true;initial-value:#F0F0F3}}
@property --f-ink{{syntax:'<color>';inherits:true;initial-value:#16182A}}
@property --f-mut{{syntax:'<color>';inherits:true;initial-value:#6B6B6B}}
.ob{{--f-ink:#16182A;--f-mut:#6B6B6B;transition:--f-ink .9s ease,--f-mut .9s ease}}
.ob .vh{{position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;margin:0}}
.ob label{{cursor:pointer}}
.ob-p{{position:absolute;left:0;top:0;width:100%;opacity:0;transform:translateX(56px);visibility:hidden;transition:opacity .34s ease,transform .46s {EASE},visibility 0s linear .46s}}
.ob-n{{display:none}}
.ob-fill{{transition:width .7s {EASE}}}
.ob-sec{{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .6s {EASE},opacity .45s ease}}
.ob-sec>div{{overflow:hidden;min-height:0}}
.ob-card{{--c-bg:#FFFFFF;--c-ink:#16182A;--c-mut:#6B6B6B;--c-tile:#F5F5F7;--c-line:#F0F0F3;transition:--c-bg .9s ease,--c-ink .9s ease,--c-mut .9s ease,--c-tile .9s ease,--c-line .9s ease}}
.ob-flip{{transform-style:preserve-3d;transition:transform .9s {EASE}}}
.ob-face{{backface-visibility:hidden;-webkit-backface-visibility:hidden}}
.ob-front{{visibility:visible;transition:visibility 0s linear .45s}}
.ob-back{{visibility:hidden;transition:visibility 0s linear .45s,opacity .3s}}
.ob-mover{{transition:transform 1s {EASE}}}
.ob-ghost,.ob-real{{transition:opacity .45s ease}}
.ob-real{{opacity:0}}
.ob-aur{{opacity:0;transition:opacity 1.2s ease .3s}}
.ob-live{{opacity:0;transform:scale(.8);transition:opacity .4s ease .6s,transform .4s {EASE} .6s}}
.ob-chip{{display:inline-flex;align-items:center;gap:6px;padding:7px 13px;border-radius:999px;font-size:13.5px;border:1px solid #E2E2E6;background:#FFFFFF;color:#1F1F1F;transition:background .2s,color .2s,border-color .2s}}
.ob-hv,.ob-tv,.ob-ov,.ob-vv,.ob-mv,.ob-custom{{display:none}}
.ob-badge{{display:none}}
@keyframes ob-pop{{0%{{opacity:0;transform:scale(.6)}}70%{{transform:scale(1.08)}}100%{{opacity:1;transform:none}}}}
@keyframes ob-up{{from{{opacity:0;transform:translateY(10px)}}to{{opacity:1;transform:none}}}}
@keyframes ob-bar{{from{{width:4%}}to{{width:100%}}}}
@keyframes ob-shine{{0%{{transform:translateX(-120%) skewX(-18deg)}}100%{{transform:translateX(260%) skewX(-18deg)}}}}
@keyframes ob-breathe{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-6px)}}}}
@keyframes ob-shimmer{{0%{{background-position:-200px 0}}100%{{background-position:200px 0}}}}
@keyframes ob-sheet{{from{{opacity:0;transform:translateY(24px) scale(.98)}}to{{opacity:1;transform:none}}}}
.ob-skel{{background:linear-gradient(90deg,#EFEFF2 0,#F7F7F9 50%,#EFEFF2 100%);background-size:400px 100%;animation:ob-shimmer 1.6s linear infinite}}
.ob-sw{{width:40px;height:24px;border-radius:999px;background:#E2E2E6;position:relative;flex:none;transition:background .2s}}
.ob-sw::after{{content:"";position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform .25s {EASE}}}
.ob-tb{{opacity:0}}
.ob-found{{opacity:0}}
.ob-scrim{{display:none}}
.ob-csy,.ob-wa-on{{display:none}}
.ob-wa-off{{display:flex}}
.ob label:focus-visible,.ob button:focus-visible,.ob a:focus-visible{{outline:2px solid #3B6CF6;outline-offset:2px}}
''']
    for s in range(N):
        for p in range(s):
            css.append(f'.ob:has({R(s)}) .ob-p{p}{{opacity:0;transform:translateX(-56px)}}')
        css.append(f'.ob:has({R(s)}) .ob-p{s}{{opacity:1;transform:none;visibility:visible;transition:opacity .42s ease .14s,transform .5s {EASE} .1s,visibility 0s}}')
        css.append(f'.ob:has({R(s)}) .ob-n{s}{{display:flex}}')
        css.append(f'.ob:has({R(s)}) .ob-fill{{width:{min(s, 6) / 6 * 100:.3f}%}}')
    css.append(f'.ob:has({on(range(1, 8))}) .ob-real{{opacity:1}}.ob:has({on(range(1, 8))}) .ob-ghost{{opacity:0}}')
    css.append(f'.ob:has({on(range(2, 8))}) .ob-svc{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({R(2)}) .ob-svc{{transition-delay:1.6s}}')
    css.append(f'.ob:has({on(range(3, 8))}) .ob-ast{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({on(range(4, 8))}) .ob-chn{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({on(range(1, 8))}) .ob-foot{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({R(5)}) .ob-flip{{transform:rotateY(180deg)}}.ob:has({R(5)}) .ob-front{{visibility:hidden}}.ob:has({R(5)}) .ob-back{{visibility:visible}}')
    for i, d in enumerate([.7, 1.4, 2.4, 3.1, 3.9]):
        css.append(f'.ob:has({R(5)}) .ob-tb{i}{{animation:ob-up .45s {EASE} {d}s both}}')
    css.append(f'.ob:has({R(2)}) .ob-bar{{animation:ob-bar 1.4s {EASE} .3s both}}')
    css.append(f'.ob:has({R(2)}) .ob-found{{animation:ob-up .45s {EASE} 1.7s both}}')
    css.append(f'.ob:has({on(range(3, 8))}) .ob-found{{opacity:1}}')
    # radio groups: h hours, t tone, v voice, m teach method, a alert time
    for g, n_, disp in (('h', 3, 'grid'), ('t', 3, 'block'), ('v', 3, 'inline'), ('m', 3, 'block'), ('a', 3, 'inline'), ('l', 2, 'block')):
        for i in range(1, n_ + 1):
            css.append(f'.ob:has(#{X}{g}{i}:checked) label[for={X}{g}{i}]{{background:#16182A;color:#FFFFFF;border-color:#16182A}}')
            css.append(f'.ob:has(#{X}{g}{i}:checked) .ob-{g}v{i}{{display:{disp}}}')
            css.append(f'.ob:has(#{X}{g}{i}:checked) .ob-ov{g}{i}{{display:inline}}')
    css.append(f'.ob:has(#{X}h3:checked) .ob-custom{{display:flex}}')
    css.append(f'.ob-lv,.ob-team-on,.ob-team-row{{display:none}}.ob:has(#{X}team:checked) .ob-team-on{{display:inline}}.ob:has(#{X}team:checked) .ob-team-off{{display:none}}.ob:has(#{X}team:checked) .ob-team-row{{display:flex}}.ob:has(#{X}team:checked) label[for={X}team]{{display:none}}')
    css.append(f'.ob:has(#{X}m1:checked) .ob-read{{display:block}}.ob-read{{display:none}}')
    for k in CHANNELS:
        css.append(f'.ob:has(#{X}c{k}:checked) .ob-b{k}{{display:inline-flex;animation:ob-pop .45s {EASE} both}}')
        css.append(f'.ob:has(#{X}c{k}:checked) label[for={X}c{k}] .ob-sw{{background:#16182A}}.ob:has(#{X}c{k}:checked) label[for={X}c{k}] .ob-sw::after{{transform:translateX(16px)}}')
        css.append(f'.ob:has(#{X}c{k}:checked) label[for={X}c{k}]{{border-color:#16182A}}')
        css.append(f'.ob:has(#{X}c{k}:checked) .ob-csy{k}{{display:inline}}.ob:has(#{X}c{k}:checked) .ob-csn{k}{{display:none}}')
    # WhatsApp: connect sheet opens while not connected; connecting closes it
    css.append(f'.ob:has(#{X}cwa:checked) .ob-wa-off{{display:none}}.ob:has(#{X}cwa:checked) .ob-wa-on{{display:flex}}')
    css.append(f'.ob:has(#{X}sheet:checked):not(:has(#{X}cwa:checked)) .ob-scrim{{display:flex}}.ob:has(#{X}sheet:checked):not(:has(#{X}cwa:checked)) .ob-sheetc{{animation:ob-sheet .4s {EASE} both}}')
    # live (state 7)
    css.append(f'''.ob-sky{{opacity:0;transition:opacity 1.6s ease}}
.ob:has({R(7)}){{--f-ink:#FFFFFF;--f-mut:rgba(255,255,255,.72)}}
.ob:has({R(7)}) .ob-sky{{opacity:1}}
.ob:has({R(7)}) .ob-card{{--c-bg:#12141F;--c-ink:#FFFFFF;--c-mut:#A9AECB;--c-tile:rgba(255,255,255,.08);--c-line:rgba(255,255,255,.1)}}
.ob:has({R(7)}) .ob-aur,.ob:has({R(7)}) .ob-live{{opacity:1;transform:none}}
.ob:has({R(7)}) .ob-mover{{transform:translateY(-22px)}}
.ob:has({R(7)}) .ob-flip{{transform:rotateX(6deg) rotateY(-12deg)}}
.ob:has({R(7)}) .ob-back{{opacity:0}}
.ob:has({R(7)}) .ob-glint{{animation:ob-shine 1.6s ease 1.2s both}}
.ob:has({R(7)}) .ob-float{{animation:ob-breathe 6s ease-in-out 2s infinite}}
.ob:has({R(7)}) .ob-label,.ob:has({R(7)}) .ob-pill{{opacity:0;pointer-events:none}}
.ob:has({R(7)}) .ob-shadow{{opacity:0}}
.ob:has({R(7)}) .ob-track{{background:rgba(255,255,255,.18)}}''')
    css.append('''@media (prefers-reduced-motion: reduce){.ob *,.ob{transition-duration:.01s!important;transition-delay:0s!important;animation:none!important}.ob .ob-tb,.ob .ob-found{opacity:1}.ob .ob-p{transform:none!important}}''')
    head = kit3.HEAD.replace('</style>', '\n'.join(css) + '\n' + landscape.CSS + '\n</style>', 1)
    head = head.replace(re.search(r'<title>[^<]*</title>', head).group(0), f'<title>{title}</title>')

    # ---------------- inputs
    radios = ''.join(f'<input class="vh" type="radio" name="{X}step" id="{X}{s}" aria-label="{NAMES[s]}"{" checked" if s == start else ""} />' for s in range(N))
    for g in 'htvmal':
        radios += ''.join(f'<input class="vh" type="radio" name="{X}{g}" id="{X}{g}{i}"{" checked" if i == (2 if g == "a" else 1) else ""} />' for i in (1, 2, 3))
    radios += ''.join(f'<input class="vh" type="checkbox" id="{X}c{k}"{" checked" if (k == "web" or (k == "wa" and start >= 5)) else ""} />' for k in CHANNELS)
    radios += f'<input class="vh" type="checkbox" id="{X}team" />'
    radios += f'<input class="vh" type="checkbox" id="{X}sheet"{" checked" if sheet else ""} />'

    header = f'''<header class="ob-head" style="position: absolute; left: 0; right: 0; top: 0; z-index: 5; height: 72px; display: flex; align-items: center; gap: 24px; padding: 0 40px; box-sizing: border-box">
      <span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', X + 'hd', 28)}{WM(21)}</span><span style="flex: 1"></span>
      <a href="#" class="ob-pill" style="display: inline-flex; align-items: center; height: 36px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; color: #3D3D3D; text-decoration: none; font-size: 13.5px; transition: opacity .4s">Save and finish later</a>
      <div class="ob-track" aria-hidden="true" style="position: absolute; left: 40px; right: 40px; bottom: 0; height: 2px; border-radius: 2px; background: #E6E6EA; transition: background .6s"><span class="ob-fill" style="position: absolute; left: 0; top: 0; bottom: 0; width: 0; border-radius: 2px; background: linear-gradient(90deg, #10B981, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777)"></span></div>
    </header>'''

    H1 = f"margin: 0; {HF}; font-size: 42px; line-height: 1.06; letter-spacing: -0.04em; color: var(--f-ink)"
    SUB = 'margin: 10px 0 0; font-size: 16px; line-height: 1.5; color: var(--f-mut); max-width: 500px'
    EYE = 'display: block; margin-bottom: 12px; font-size: 13px; color: var(--f-mut)'
    F = FIELD.replace('height: 48px', 'height: 44px').replace('font-size: 15px', 'font-size: 14.5px')
    L = LABEL.replace('margin-bottom: 8px', 'margin-bottom: 6px').replace('font-size: 14px', 'font-size: 13.5px')
    HINT = 'color: #8A8A8A; font-weight: 400'
    def panel(i, eyebrow, h, sub, body='', gap=16):
        return f'''<section class="ob-p ob-p{i}" aria-label="{NAMES[i]}"><span style="{EYE}">{eyebrow}</span><h1 style="{H1}">{h}</h1><p style="{SUB}">{sub}</p><div style="margin-top: 22px; display: flex; flex-direction: column; gap: {gap}px; max-width: 520px">{body}</div></section>'''
    chips = lambda g, opts: ''.join(f'<label for="{X}{g}{i}" class="ob-chip">{t}</label>' for i, t in enumerate(opts, 1))

    # 0 welcome
    road = ''.join(f'<div style="display: flex; align-items: center; gap: 14px; padding: 10px 0; border-top: 1px solid #ECECF0; font-size: 15px"><span style="width: 26px; height: 26px; border-radius: 50%; background: #FFFFFF; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; font-size: 12.5px; color: #6B6B6B">{i}</span><span style="flex: 1; color: #1F1F1F">{n}</span><span style="font-size: 13px; color: #8A8A8A">{t}</span></div>' for i, (n, t) in enumerate([('Your business', '1 min'), ('Teach Vegham', '1 min'), ('Your assistant', '1 min'), ('Channels', '3 min'), ('Test drive', '1 min'), ('Review and go live', '30 sec')], 1))
    p0 = panel(0, 'Welcome, Vinay · your free 30-day pilot has started', 'Let’s build your<br>front desk.', 'Six short steps, about 7 minutes. Watch the card on the right come to life as you answer. Everything is saved as you go.', f'<div>{road}</div>')

    # 1 business
    cust = ''.join(f'<span style="flex: 1; padding: 6px 0; border-radius: 10px; background: #FFFFFF; border: 1px solid #ECECF0; text-align: center; font-size: 11.5px; color: #3D3D3D">{d}<br><b style="font-weight: 500">{h}</b></span>' for d, h in [('Mon', '10–7'), ('Tue', '10–7'), ('Wed', '12–8'), ('Thu', '10–7'), ('Fri', '10–7'), ('Sat', '9–2'), ('Sun', 'Off')])
    p1 = panel(1, 'Step 1/6 · about a minute', 'Tell us about your business.', 'Vegham uses this to answer customers correctly.', f'''
        <div style="display: grid; grid-template-columns: 44px 1.3fr 1fr; gap: 12px; align-items: end"><span title="Add logo" style="width: 44px; height: 44px; border-radius: 12px; border: 1.5px dashed #C9C9D1; display: inline-flex; align-items: center; justify-content: center; color: #6B6B6B; background: #FFFFFF">{UP}</span><div><label for="{X}nm" style="{L}">Business name</label><input id="{X}nm" value="Nila &amp; Co" style="{F}" /></div><div><span style="{L}">Country · time zone</span><span style="{F}; display: flex; align-items: center; justify-content: space-between"><span>🇮🇳 India · IST</span><span style="color: #8A8A8A">▾</span></span></div></div>
        <div><label for="{X}of" style="{L}">What do you offer? <span style="{HINT}">In your own words</span></label><input id="{X}of" value="Consultations, follow-up visits and group sessions" style="{F}" /></div>
        <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 12px"><div><label for="{X}ad" style="{L}">Address <span style="{HINT}">· for directions</span></label><input id="{X}ad" value="12 CMH Road, Indiranagar, Bengaluru" style="{F}" /></div><div><label for="{X}bp" style="{L}">Business phone</label><input id="{X}bp" value="+91 80 4123 5678" style="{F}" /></div></div>
        <div><span style="{L}">Opening hours <span style="{HINT}">· watch the card</span></span><div style="display: flex; flex-wrap: wrap; gap: 8px">{chips('h', ['Mon–Sat · 10 AM–8 PM', 'Every day · 9 AM–9 PM', 'Custom'])}</div>
          <div class="ob-custom" style="margin-top: 10px; gap: 4px">{cust}</div></div>
        <div><span style="{L}">Locations</span><div style="display: flex; gap: 6px">{chips('l', ['Just this one', 'Two or more'])}</div>
          <div class="ob-lv ob-lv2" style="margin-top: 8px"><div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span class="ob-chip" style="background: #F3F3F5">Indiranagar · this one</span><span class="ob-chip">HSR Layout, 27th Main</span><span class="ob-chip" style="border-style: dashed">+ Add location</span></div><span style="display: block; margin-top: 6px; font-size: 12.5px; color: #8A8A8A">Each location gets its own address and hours. Vegham asks customers which one they mean.</span></div></div>''', gap=12)

    # 2 teach
    rows = ['Home', 'Services', 'Prices', 'About us', 'FAQ', 'Contact']
    found = [('First visit', '30 min · ₹500'), ('Standard appointment', '60 min · ₹1,200'), ('Group session (up to 8)', '90 min · ₹1,200 each'), ('“Is there parking?”', 'Yes, free parking next to the entrance')]
    frow = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid #F0F0F3; font-size: 13.5px">{TICK("#1F9D6B", 14)}<span style="flex: 1"><span style="color: #1F1F1F">{n}</span> <span style="color: #8A8A8A">· {d}</span></span><span style="font-size: 12.5px; color: #3D3D3D">Edit</span><span style="font-size: 12.5px; color: #8A8A8A">Remove</span></div>' for n, d in found)
    p2 = panel(2, 'Step 2/6 · about a minute', 'Teach Vegham your business.', 'Give Vegham your services and prices. Check what it found before it answers anyone.', f'''
        <div style="display: flex; gap: 8px">{chips('m', ['Website link', 'Upload price list', 'Type it in'])}</div>
        <div class="ob-mv ob-mv1"><div style="display: flex; gap: 8px"><input aria-label="Website or Google Business link" value="nilaandco.in" style="{F}" /><span style="flex: none; display: inline-flex; align-items: center; height: 44px; padding: 0 18px; border-radius: 12px; background: #16182A; color: #FFFFFF; font-weight: 500; font-size: 14.5px">Read it</span></div></div>
        <div class="ob-mv ob-mv2"><div style="display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 14px; border: 1.5px dashed #C9C9D1; background: #FFFFFF; font-size: 14px; color: #3D3D3D">{UP}<span style="flex: 1">Drop a PDF, photo of your menu or price board<span style="display: block; font-size: 12.5px; color: #8A8A8A">PDF, JPG or PNG · up to 10 MB</span></span><span style="padding: 7px 14px; border-radius: 999px; border: 1px solid #E2E2E6">Choose file</span></div></div>
        <div class="ob-mv ob-mv3"><div style="display: grid; grid-template-columns: 1.6fr .8fr .8fr; gap: 8px"><input aria-label="Service" value="First visit" style="{F}" /><input aria-label="Duration" value="30 min" style="{F}" /><input aria-label="Price" value="₹500" style="{F}" /></div><span style="display: block; margin-top: 6px; font-size: 13px; color: #16182A">+ Add another service</span></div>
        <div style="padding: 12px 16px; border-radius: 18px; background: #FFFFFF; border: 1px solid #ECECF0"><div style="display: flex; justify-content: space-between; font-size: 13.5px"><b style="font-weight: 600">Read 24 pages · found 12 services, 8 prices, 6 answers</b></div><div style="position: relative; margin: 8px 0 4px; height: 3px; border-radius: 2px; background: #EEEEF1; overflow: hidden"><span class="ob-bar" style="position: absolute; left: 0; top: 0; bottom: 0; width: 100%; background: #16182A"></span></div>
          <div class="ob-found"><span style="display: block; margin: 8px 0 2px; font-size: 12.5px; color: #6B6B6B">Check what Vegham found</span>{frow}<span style="display: block; padding-top: 8px; font-size: 13px; color: #16182A">Review all 26 →</span></div></div>''', gap=12)

    # 3 assistant
    voices = ''.join(f'<label for="{X}v{i}" class="ob-chip"><span style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid currentColor; display: inline-flex; align-items: center; justify-content: center; opacity: .8">{PLAY}</span>{t}</label>' for i, t in enumerate(['Warm', 'Bright', 'Calm'], 1))
    hand = ''.join(f'<span class="ob-chip" style="background: #16182A; color: #FFFFFF; border-color: #16182A">{TICK("#FFFFFF", 12)}{t}</span>' for t in ['Asks for a person', 'Complaint or refund', 'Vegham isn’t sure']) + '<span class="ob-chip">+ Add rule</span>'
    langs = ''.join(f'<span class="ob-chip" style="{"background: #16182A; color: #FFFFFF; border-color: #16182A" if o else ""}">{TICK("#FFFFFF", 12) if o else ""}{t}</span>' for t, o in [('English', 1), ('हिन्दी', 1), ('తెలుగు', 0), ('ಕನ್ನಡ', 0), ('+ more', 0)])
    p3 = panel(3, 'Step 3/6 · about a minute', 'Meet your assistant.', 'Choose how it sounds and when it should pass a customer to you.', f'''
        <div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 12px; align-items: end"><div><label for="{X}an" style="{L}">Name</label><input id="{X}an" value="Vegham" style="{F}" /></div><div><span style="{L}">Tone <span style="{HINT}">· watch the greeting</span></span><div style="display: flex; gap: 6px">{chips('t', ['Warm', 'Crisp', 'Formal'])}</div></div></div>
        <div><span style="{L}">Languages</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{langs}</div></div>
        <div><span style="{L}">Voice for phone calls <span style="{HINT}">· tap to hear a sample</span></span><div style="display: flex; gap: 6px">{voices}</div></div>
        <div><span style="{L}">Pass the customer to a person when they…</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{hand}</div></div>
        <div><span style="{L}">Who gets handovers?</span><div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span class="ob-chip" style="background: #16182A; color: #FFFFFF; border-color: #16182A">{TICK("#FFFFFF", 12)}Me · Vinay</span><span class="ob-team-row ob-chip" style="background: #16182A; color: #FFFFFF; border-color: #16182A; align-items: center">{TICK("#FFFFFF", 12)}Priya · Staff</span><label for="{X}team" class="ob-chip" style="border-style: dashed">+ Invite a teammate</label></div><span class="ob-team-row" style="margin-top: 6px; font-size: 12.5px; color: #6B6B6B">Priya gets a WhatsApp invite. She can answer handovers but can’t change billing.</span></div>
        <div style="display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: #5C5C5C">{TICK("#16182A", 14)}<span>Vegham tells customers it’s an AI assistant at the start of calls and whenever asked.</span></div>''', gap=10)

    # 4 channels
    def chrow(k, on_txt, off_txt):
        ic, t = CHANNELS[k]
        return f'''<label for="{X}c{k}" style="display: flex; align-items: center; gap: 14px; padding: 10px 14px; border-radius: 16px; border: 1px solid #ECECF0; background: #FFFFFF; transition: border-color .2s"><span style="width: 36px; height: 36px; flex: none; border-radius: 11px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{ic(19)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14.5px; color: #1F1F1F">{t}</b><span style="font-size: 12.5px; color: #6B6B6B"><span class="ob-csy ob-csy{k}">{on_txt}</span><span class="ob-csn{k}">{off_txt}</span></span></span><span class="ob-sw"></span></label>'''
    wa = f'''<div style="border-radius: 16px; border: 1.5px solid #16182A; background: #FFFFFF; padding: 12px 14px">
          <div class="ob-wa-off" style="align-items: center; gap: 14px"><span style="width: 36px; height: 36px; flex: none; border-radius: 11px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{comps.logo('whatsapp', 20)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14.5px">WhatsApp <span style="margin-left: 4px; padding: 2px 8px; border-radius: 999px; background: #F3F3F5; font-size: 11.5px; font-weight: 500; color: #3D3D3D">Most important</span></b><span style="font-size: 12.5px; color: #6B6B6B">Official Meta sign-up · keep your number · about 3 minutes</span></span><label for="{X}sheet" style="display: inline-flex; align-items: center; height: 36px; padding: 0 16px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 13.5px; font-weight: 500">Connect</label></div>
          <div class="ob-wa-on" style="align-items: center; gap: 14px"><span style="width: 36px; height: 36px; flex: none; border-radius: 11px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{comps.logo('whatsapp', 20)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14.5px">WhatsApp</b><span style="font-size: 12.5px; color: #6B6B6B">+91 98765 43210 · name “Nila &amp; Co” in Meta review, replies already work</span></span><span style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 12.5px; font-weight: 500">{TICK("#1E6B47", 12)}Connected</span></div></div>'''
    p4 = panel(4, 'Step 4/6 · about 3 minutes', 'Where should Vegham answer?', 'Start with WhatsApp. Switch on the rest now or later. Each one attaches to your card.', wa + ''.join([
        chrow('web', 'On · we’ll email you one line to paste on your site', 'A chat bubble on your website'),
        chrow('ig', 'Waiting for Meta approval · usually 1–2 days', 'Replies to DMs on @nilaandco'),
        chrow('ph', 'Dial **21*080 4719 2200# from your business phone', 'Answers calls you miss, day and night'),
        chrow('g', 'Book button on your Google profile', 'Chat and Book on Google Maps')]), gap=8)

    # 5 test drive
    sugg = ''.join(f'<span style="padding: 7px 13px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13.5px; background: #FFFFFF">{t}</span>' for t in ['Anything free tomorrow?', 'How much is a first visit?', 'Do you have parking?', 'Can I bring a friend?'])
    p5 = panel(5, 'Step 5/6 · a quick test', 'Take Vegham for a test drive.', 'Your card turns over into a private test chat. Nothing is sent to real customers.', f'''
        <div><span style="{L}">Try one</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{sugg}</div></div>
        <div style="display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: #3D3D3D">{TICK()}<span>Spotted a wrong answer? Tap <b style="font-weight: 600">Fix</b> on it. Vegham learns at once, on every channel.</span></div>
        <div style="display: flex; align-items: center; gap: 16px; padding: 14px; border-radius: 18px; background: #FFFFFF; border: 1px solid #ECECF0"><span role="img" aria-label="QR code to message the test number" style="flex: none; display: grid; grid-template-columns: repeat(9, 6px); padding: 7px; border-radius: 10px; border: 1px solid #ECECF0">{QR(6)}</span><span style="flex: 1; font-size: 14px"><b style="display: block; font-weight: 600">Try it on your own phone</b><span style="color: #6B6B6B">Scan to message Vegham on WhatsApp, or call <span style="white-space: nowrap">080 4719 2200</span> to hear the voice. Only your number can reach it until you go live.</span></span></div>''')

    # 6 review
    def rv(t, d, ok=True, extra='', go=1):
        mark_ = f'<span style="width: 22px; height: 22px; flex: none; border-radius: 50%; background: #1F9D6B; display: inline-flex; align-items: center; justify-content: center">{TICK("#FFFFFF", 12)}</span>' if ok else '<span style="width: 22px; height: 22px; flex: none; border-radius: 50%; border: 1.5px dashed #B4B4BC"></span>'
        return f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid #ECECF0">{mark_}<span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14.5px">{t}</b><span style="font-size: 13px; color: #6B6B6B">{d}</span>{extra}</span><label for="{X}{go}" style="font-size: 13px; color: #16182A; text-decoration: underline">Edit</label></div>'
    hours_txt = ''.join(f'<span class="ob-ov ob-ovh{i}">{t}</span>' for i, t in enumerate(['Mon–Sat 10–8', 'Every day 9–9', 'Custom hours'], 1))
    tone_txt = ''.join(f'<span class="ob-ov ob-ovt{i}">{t}</span>' for i, t in enumerate(['Warm', 'Crisp', 'Formal'], 1))
    chlist = ''.join(f'<span class="ob-badge ob-b{k}" style="align-items: center; gap: 5px; margin: 6px 6px 0 0; padding: 4px 10px; border-radius: 999px; background: #FFFFFF; border: 1px solid #ECECF0; font-size: 12.5px">{CHANNELS[k][1]}</span>' for k in CHANNELS)
    p6 = panel(6, 'Step 6/6 · last check', 'Ready to go live?', 'Here’s everything Vegham will use. You can change any of it later.', f'''
        <div>{rv('Nila &amp; Co', hours_txt.replace('<span class="ob-ov', '<span class="ob-ov') + ' · Indiranagar' + '<span class="ob-ov ob-ovl2"> + HSR Layout</span>')}{rv('What Vegham knows', '12 services · 8 prices · 6 answers', go=2)}{rv('Vegham', tone_txt + ' · English, हिन्दी · hands over to <span class="ob-team-on">you or Priya</span><span class="ob-team-off">you</span> on WhatsApp', go=3)}{rv('Answering on', '', True, f'<span style="display: flex; flex-wrap: wrap">{chlist}</span>', go=4)}</div>
        <div style="padding: 14px 16px; border-radius: 18px; background: #FFFFFF; border: 1px solid #ECECF0"><span style="{L}">Where should Vegham reach you?</span><div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap"><span style="{F}; width: auto; flex: 1 1 200px; display: flex; align-items: center; gap: 8px">{comps.logo('whatsapp', 16)}+91 98765 43210</span></div><div style="margin-top: 10px; display: flex; align-items: center; gap: 6px"><span style="font-size: 13px; color: #6B6B6B; margin-right: 4px">Morning report at</span>{chips('a', ['7 AM', '8 AM', '9 AM'])}</div><span style="display: block; margin-top: 8px; font-size: 12.5px; color: #8A8A8A">Handovers arrive instantly. Add more teammates any time in Settings.</span></div>
        <span style="font-size: 13px; color: #6B6B6B">Your 30-day pilot is free. No card needed until it ends.</span>''', gap=12)

    # 7 live
    p7 = f'''<section class="ob-p ob-p7" aria-label="Live"><span style="{EYE}">You’re live</span><h1 style="{H1}; font-size: 60px; text-shadow: 0 2px 40px rgba(0,0,0,.35)">Your front desk<br>is open.</h1><p style="{SUB}">Vegham is answering customers, day and night. Your first morning report arrives tomorrow at <span class="ob-ov ob-ova1">7 AM</span><span class="ob-ov ob-ova2">8 AM</span><span class="ob-ov ob-ova3">9 AM</span>.</p>
          <div style="margin-top: 26px; display: flex; align-items: center; gap: 16px; max-width: 480px; padding: 16px; border-radius: 20px; background: rgba(255,255,255,.96); color: #1F1F1F; box-shadow: 0 30px 60px -30px rgba(0,0,0,.5)">
            <span role="img" aria-label="QR code for your booking link" style="flex: none; display: grid; grid-template-columns: repeat(9, 7px); padding: 8px; border-radius: 12px; border: 1px solid #ECECF0">{QR()}</span>
            <span style="flex: 1"><b style="display: block; font-weight: 600">Tell customers where to find you</b><span style="display: block; margin-top: 2px; font-size: 13.5px; color: #6B6B6B">Booking link for your Instagram bio, Google and counter.</span><span style="margin-top: 8px; display: flex; gap: 8px; align-items: center"><span style="flex: 1; padding: 8px 12px; border-radius: 10px; background: #F5F5F7; font-size: 14px">vegham.ai/nila</span><span style="padding: 8px 14px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13.5px">Copy</span></span></span>
          </div></section>'''
    left = f'<div class="ob-left" style="position: absolute; left: 96px; top: 136px; width: 560px; height: 620px; z-index: 3">{p0}{p1}{p2}{p3}{p4}{p5}{p6}{p7}</div>'

    BTNP = 'display: inline-flex; align-items: center; height: 50px; padding: 0 26px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 15.5px; font-weight: 500'
    BTNB = 'display: inline-flex; align-items: center; height: 50px; padding: 0 18px; border-radius: 999px; color: var(--f-mut); font-size: 15px'
    cont = ['Let’s begin', 'Continue', 'Looks right', 'Continue', 'Continue', 'Looks good', 'Go live']
    navs = ''
    for s in range(7):
        back = f'<label for="{X}{s - 1}" style="{BTNB}">← Back</label>' if s else ''
        skip = f'<label for="{X}{s + 1}" style="margin-left: 6px; color: #6B6B6B; font-size: 14.5px; text-decoration: underline">Do this later</label>' if s in (2, 4) else ''
        navs += f'<div class="ob-n ob-n{s}" style="align-items: center; gap: 8px">{back}<label for="{X}{s + 1}" style="{BTNP}">{cont[s]} →</label>{skip}</div>'
    navs += f'<div class="ob-n ob-n7" style="align-items: center; gap: 8px"><a href="#" style="{BTNP}; background: #FFFFFF; color: #12141F; text-decoration: none; box-shadow: 0 20px 50px -20px rgba(0,0,0,.5)">Go to my dashboard →</a></div>'
    navbar = f'<div class="ob-navbar" style="position: absolute; left: 96px; top: 782px; z-index: 4">{navs}</div>'

    # ---------------- living card
    VAR = lambda v: f'var(--c-{v})'
    ghost = f'''<div class="ob-ghost" style="grid-area: 1 / 1; display: flex; flex-direction: column; gap: 14px">
        <div style="display: flex; align-items: center; gap: 14px"><span class="ob-skel" style="width: 56px; height: 56px; border-radius: 18px"></span><span style="flex: 1; display: flex; flex-direction: column; gap: 8px"><span class="ob-skel" style="height: 14px; width: 60%; border-radius: 7px"></span><span class="ob-skel" style="height: 10px; width: 40%; border-radius: 5px"></span></span></div>
        <span class="ob-skel" style="height: 10px; width: 90%; border-radius: 5px"></span><span class="ob-skel" style="height: 10px; width: 70%; border-radius: 5px"></span>
        <span style="margin-top: 6px; font-size: 13px; color: #8A8A8A">Your front desk card. It fills in as you answer.</span></div>'''
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    def hv(i, spec):
        return f'<div class="ob-hv ob-hv{i}" style="grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; font-size: 11px; color: {VAR("mut")}">' + ''.join(f'<span style="padding: 6px 0; border-radius: 10px; background: {"#16182A; color: #FFFFFF" if d == "Thu" else VAR("tile")}">{d}<br><b style="font-weight: 500">{spec(d)}</b></span>' for d in days) + '</div>'
    hvs = hv(1, lambda d: 'Closed' if d == 'Sun' else '10–8') + hv(2, lambda d: '9–9') + hv(3, lambda d: {'Sun': 'Off', 'Sat': '9–2', 'Wed': '12–8'}.get(d, '10–7'))
    status = lambda t: f'<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #1F9D6B"><span style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>{t}</span>'
    real = f'''<div class="ob-real" style="grid-area: 1 / 1; display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; align-items: center; gap: 14px"><span style="width: 54px; height: 54px; flex: none; border-radius: 18px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: 'Inter Tight', sans-serif; font-size: 26px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.12)">N</span><span style="flex: 1"><b style="display: block; font-size: 20px; font-weight: 600; color: {VAR("ink")}">Nila &amp; Co</b><span class="ob-ov ob-ovh1">{status("Open now · until 8 PM")}</span><span class="ob-ov ob-ovh2">{status("Open now · until 9 PM")}</span><span class="ob-ov ob-ovh3">{status("Open now · until 7 PM")}</span></span>
          <span class="ob-live" style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 999px; background: rgba(61,214,140,.16); color: #5EEAD4; font-size: 12px; font-weight: 600; letter-spacing: .06em"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #3DD68C"></span>LIVE</span></div>
        <p style="margin: 0; color: {VAR("mut")}; font-size: 14px">Consultations, follow-up visits and group sessions<span style="display: block; margin-top: 2px; font-size: 12.5px">Indiranagar, Bengaluru · +91 80 4123 5678<span class="ob-lv ob-lv2" style="margin-top: 2px">+ HSR Layout · 2 locations</span></span></p>
        {hvs}</div>'''
    svc = [('First visit', '30 min', '₹500'), ('Standard appointment', '60 min', '₹1,200'), ('Group session', '90 min', '₹1,200 each')]
    svcrows = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 7px 0; border-top: 1px solid {VAR("line")}; font-size: 13.5px; color: {VAR("ink")}"><span style="flex: 1">{n} <span style="color: {VAR("mut")}">· {m}</span></span><b style="font-weight: 600">{p}</b></div>' for n, m, p in svc)
    sec = lambda cls, inner: f'<div class="ob-sec {cls}"><div>{inner}</div></div>'
    s_svc = sec('ob-svc', f'''<div style="padding-top: 14px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 13px; font-weight: 600; color: {VAR("ink")}">What Vegham knows</b><span style="font-size: 12px; color: {VAR("mut")}">12 services · 8 prices · 6 answers</span></div><div style="margin-top: 6px">{svcrows}</div></div>''')
    greet = {1: 'Hi! Welcome to Nila &amp; Co 😊 How can I help you today?', 2: 'Hi, Nila &amp; Co here. Booking, prices or hours?', 3: 'Good evening. You have reached Nila &amp; Co. How may I assist you?'}
    tone_l = {1: 'Warm', 2: 'Crisp', 3: 'Formal'}
    voice_l = {1: 'Warm', 2: 'Bright', 3: 'Calm'}
    s_ast = sec('ob-ast', f'''<div style="padding-top: 14px; border-top: 1px solid {VAR("line")}; margin-top: 10px"><div style="display: flex; align-items: center; gap: 10px">{mark('ribbon', X + 'ast', 32)}<span style="flex: 1"><b style="display: block; font-size: 14.5px; font-weight: 600; color: {VAR("ink")}">Vegham <span style="font-weight: 400; font-size: 11.5px; color: {VAR("mut")}">· AI assistant</span></b><span style="font-size: 12px; color: {VAR("mut")}">{''.join(f'<span class="ob-ov ob-ovt{i}">{tone_l[i]}</span>' for i in (1, 2, 3))} · English, हिन्दी · voice {''.join(f'<span class="ob-vv ob-vv{i}">{voice_l[i]}</span>' for i in (1, 2, 3))}</span></span></div>
        <div style="margin-top: 10px; max-width: 88%; padding: 10px 13px; border-radius: 16px 16px 16px 4px; background: #16182A; color: #FFFFFF; font-size: 13.5px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.08)">{''.join(f'<span class="ob-tv ob-tv{i}">{greet[i]}</span>' for i in (1, 2, 3))}</div>
        <span style="display: block; margin-top: 8px; font-size: 12px; color: {VAR("mut")}">Hands over to <span class="ob-team-on">you or Priya</span><span class="ob-team-off">you</span> on WhatsApp when needed</span></div>''')
    badges = ''.join(f'<span class="ob-badge ob-b{k}" title="{CHANNELS[k][1]}" style="width: 32px; height: 32px; border-radius: 10px; background: #FFFFFF; align-items: center; justify-content: center; box-shadow: 0 0 0 1px #ECECF0">{CHANNELS[k][0](17)}</span>' for k in CHANNELS)
    s_chn = sec('ob-chn', f'''<div style="padding-top: 12px; margin-top: 12px; border-top: 1px solid {VAR("line")}; display: flex; align-items: center; gap: 10px"><span style="font-size: 12.5px; color: {VAR("mut")}; flex: 1">Answering on</span><span style="display: flex; gap: 6px">{badges}</span></div>''')
    s_foot = sec('ob-foot', f'''<div style="margin-top: 12px; display: flex; justify-content: space-between; font-size: 12px; color: {VAR("mut")}"><span>vegham.ai/nila</span><span>Front desk · since Nov 2026</span></div>''')
    front = f'''<div class="ob-face ob-front" style="position: relative; overflow: hidden; border-radius: 28px; background: {VAR("bg")}; padding: 24px; box-shadow: 0 40px 80px -40px rgba(22,24,42,.35), 0 0 0 1px rgba(22,24,42,.05)">
        <div class="ob-aur" style="position: absolute; inset: 0; border-radius: inherit">{comps.aurora(1.5)}</div>
        <span class="ob-glint" aria-hidden="true" style="position: absolute; top: 0; bottom: 0; left: 0; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent); transform: translateX(-120%) skewX(-18deg); pointer-events: none"></span>
        <div style="position: relative; display: grid">{ghost}{real}</div>
        <div style="position: relative">{s_svc}{s_ast}{s_chn}{s_foot}</div>
      </div>'''
    tb = lambda i, t, me, extra='': (f'<span class="ob-tb ob-tb{i}" style="align-self: flex-end; max-width: 78%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px">{t}</span>' if me else f'<div class="ob-tb ob-tb{i}" style="align-self: flex-start; max-width: 86%"><span style="display: block; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">{t}</span>{extra}</div>')
    fix = '<span style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 12px; color: #6B6B6B"><span style="padding: 2px 10px; border-radius: 999px; border: 1px solid #E2E2E6">✎ Fix</span>From your price list</span>'
    fixed = '<div style="margin-top: 6px; padding: 10px 12px; border-radius: 12px; border: 1.5px solid #16182A; background: #FFFFFF; font-size: 12.5px"><span style="display: block; font-size: 11.5px; color: #6B6B6B">You fixed this answer · saved for every channel</span>Yes! Bring a friend. Group sessions are ₹1,200 each, up to 8 people.</div>'
    back = f'''<div class="ob-face ob-back" style="position: absolute; inset: 0; transform: rotateY(180deg); border-radius: 28px; background: #FFFFFF; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 9px; font-size: 13.5px; box-shadow: 0 40px 80px -40px rgba(22,24,42,.35), 0 0 0 1px rgba(22,24,42,.05); transition: opacity .3s">
        <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid #F0F0F3"><span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', X + 'tb', 30)}<b style="font-weight: 600">Test chat</b></span><span style="font-size: 12px; color: #8A8A8A">Only you see this</span></div>
        {tb(0, 'Anything free tomorrow evening?', 1)}{tb(1, 'Yes! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', 0, fix)}{tb(2, 'Can I bring a friend?', 1)}{tb(3, 'Of course, you can bring a friend.', 0, fixed)}
        <span class="ob-tb ob-tb4" style="align-self: center; margin-top: auto; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 12.5px">{TICK("#1E6B47", 12)} Test booking added (not real)</span>
        <div style="display: flex; gap: 8px; padding-top: 10px; border-top: 1px solid #F0F0F3"><span style="flex: 1; height: 40px; border-radius: 999px; background: #F5F5F7; display: flex; align-items: center; padding: 0 14px; color: #8A8A8A">Ask anything…</span><span style="width: 40px; height: 40px; border-radius: 50%; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">↑</span></div>
      </div>'''
    label = f'<span class="ob-label" style="position: absolute; left: 50%; top: -40px; transform: translateX(-50%); white-space: nowrap; display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; border-radius: 999px; background: #FFFFFF; border: 1px solid #ECECF0; font-size: 12.5px; color: #5C5C5C; transition: opacity .4s"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>Live preview · updates as you answer</span>'
    shadow = '<span class="ob-shadow" aria-hidden="true" style="position: absolute; left: 10%; right: 10%; bottom: -46px; height: 40px; border-radius: 50%; background: radial-gradient(ellipse at center, rgba(22,24,42,.14), transparent 70%); transition: opacity .6s"></span>'
    card = f'''<div class="ob-mover" style="position: absolute; left: 820px; top: 150px; width: 420px; z-index: 4">
      <div class="ob-float">{label}{shadow}<div class="ob-card" style="perspective: 1600px"><div class="ob-flip" style="position: relative">{front}{back}</div></div></div></div>'''
    stage = '<div aria-hidden="true" style="position: absolute; left: 700px; right: 40px; top: 96px; bottom: 40px; border-radius: 36px; background: radial-gradient(circle at 1px 1px, rgba(22,24,42,.07) 1px, transparent 1.4px) 0 0 / 22px 22px; -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 45%, #000 30%, transparent 75%); mask-image: radial-gradient(ellipse 70% 70% at 50% 45%, #000 30%, transparent 75%)"></div>'
    sky = f'<div class="ob-sky" aria-hidden="true" style="position: absolute; inset: 0; z-index: 0">{landscape.landscape(X + "sky", seed=7)}<div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(3,5,14,.6) 0%, rgba(3,5,14,.2) 45%, rgba(3,5,14,0) 70%)"></div></div>'

    # ---------------- WhatsApp connect sheet (Meta Embedded Signup)
    wsteps = [('Log in with Facebook', 'Links your Meta Business account. No account? You can create one in the same window.'),
              ('Choose your number', 'Use your current WhatsApp Business number and keep using the app on your phone, or add a new number.'),
              ('Verify with a code', 'Meta sends a 6-digit code to the number by SMS or a call.'),
              ('Check your display name', '“Nila &amp; Co” · Meta reviews it, usually within a day. Vegham can reply meanwhile.')]
    wl = ''.join(f'<div style="display: flex; gap: 12px; padding: 10px 0; border-top: 1px solid #F0F0F3"><span style="width: 24px; height: 24px; flex: none; border-radius: 50%; background: #F3F3F5; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600">{i}</span><span><b style="display: block; font-weight: 500; font-size: 14.5px">{t}</b><span style="font-size: 13px; color: #6B6B6B">{d}</span></span></div>' for i, (t, d) in enumerate(wsteps, 1))
    sheet_html = f'''<div class="ob-scrim" role="dialog" aria-modal="true" aria-label="Connect WhatsApp" style="position: absolute; inset: 0; z-index: 10; background: rgba(18,20,31,.42); align-items: center; justify-content: center">
      <div class="ob-sheetc" style="width: 560px; border-radius: 28px; background: #FFFFFF; padding: 28px; box-shadow: 0 40px 100px -30px rgba(0,0,0,.5)">
        <div style="display: flex; align-items: center; gap: 12px"><span style="width: 44px; height: 44px; border-radius: 14px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{comps.logo('whatsapp', 24)}</span><span style="flex: 1"><b style="display: block; font-size: 20px; font-weight: 600">Connect WhatsApp</b><span style="font-size: 13.5px; color: #6B6B6B">Meta’s official sign-up · about 3 minutes</span></span><label for="{X}sheet" aria-label="Close" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; color: #6B6B6B">✕</label></div>
        <div style="margin-top: 16px">{wl}</div>
        <div style="margin-top: 6px; padding: 12px 14px; border-radius: 14px; background: #F7F7F8; font-size: 13px; color: #3D3D3D">Customers message the same number they already know. Meta charges small fees for some messages; Vegham passes them on at cost and shows them in Billing.</div>
        <div style="margin-top: 18px; display: flex; align-items: center; gap: 10px"><label for="{X}sheet" style="color: #5C5C5C; font-size: 14.5px; padding: 0 8px">Cancel</label><span style="flex: 1"></span><label for="{X}cwa" style="display: inline-flex; align-items: center; gap: 10px; height: 48px; padding: 0 22px; border-radius: 999px; background: #1877F2; color: #FFFFFF; font-size: 15px; font-weight: 500">{comps.logo('facebook', 18, '#FFFFFF')}Continue with Facebook</label></div>
        <span style="display: block; margin-top: 10px; text-align: right; font-size: 11.5px; color: #8A8A8A">Prototype: this connects straight away</span>
      </div></div>'''

    body = f'''<div class="ob" style="position: relative; overflow: hidden; height: 900px; background: #F5F5F7; font-family: Inter, system-ui, sans-serif; color: #1F1F1F; font-size: 15px; line-height: 1.45">
    {radios}{sky}{stage}{header}{left}{navbar}{card}{sheet_html}
  </div>'''
    open(os.path.join(P, name), 'w').write(head + body + kit3.END.replace('__H__', '900'))


if __name__ == '__main__':
    build(0, 'ObA.dc.html', 'Onboarding · prototype')
    for s in range(1, 8):
        build(s, f'ObA{s}.dc.html', f'Onboarding · {NAMES[s]}')
    build(4, 'ObAwa.dc.html', 'Onboarding · Connect WhatsApp', sheet=True)
    print('ok')
