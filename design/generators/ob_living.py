"""Onboarding v2: Direction A (one living card) and A+C (card lands in the assembling dashboard).
One persistent frame, pure-CSS state machine (radio + :has), clickable on the canvas."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps, dawn, landscape
from kit3 import HF, AURTXT, FIELD, LABEL, P
src = open(os.path.join(D, 'marks.py')).read(); ns = {'__file__': os.path.join(D, 'marks.py'), '__name__': 'm'}
exec(src.split("opts = [")[0], ns)
mark = ns['mark']
asrc = open(os.path.join(D, 'app.py')).read(); ans = {'__file__': os.path.join(D, 'app.py'), '__name__': 'a'}
exec(asrc.split("NAV = [")[0], ans)
I, IC = ans['I'], ans['IC']

TICK = lambda c='#1F9D6B', s=16: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
WM = lambda size=22: f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT}">vegham</span>'
STEPS = ['Business', 'Teach', 'Assistant', 'Channels', 'Test drive', 'Go live']
N = 7
EASE = 'cubic-bezier(.2,.7,.2,1)'


def build(X, variant, start, name, title):
    """X: id prefix, variant: 'A' or 'AC', start: initially checked step."""
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
.ob-p.on{{}}
.ob-n{{display:none}}
.ob-fill{{transition:width .7s {EASE}}}
.ob-step{{transition:color .3s ease}}
.ob-sec{{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .6s {EASE},opacity .45s ease}}
.ob-sec>div{{overflow:hidden;min-height:0}}
.ob-card{{--c-bg:#FFFFFF;--c-ink:#16182A;--c-mut:#6B6B6B;--c-tile:#F5F5F7;--c-line:#F0F0F3;transition:--c-bg .9s ease,--c-ink .9s ease,--c-mut .9s ease,--c-tile .9s ease,--c-line .9s ease}}
.ob-flip{{transform-style:preserve-3d;transition:transform .9s {EASE}}}
.ob-face{{backface-visibility:hidden;-webkit-backface-visibility:hidden}}
.ob-mover{{transition:transform 1s {EASE}}}
.ob-ghost,.ob-real{{transition:opacity .45s ease}}
.ob-real{{opacity:0}}
.ob-aur{{opacity:0;transition:opacity 1.2s ease .3s}}
.ob-live{{opacity:0;transform:scale(.8);transition:opacity .4s ease .6s,transform .4s {EASE} .6s}}
.ob-chip{{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;font-size:14px;border:1px solid #E2E2E6;background:#FFFFFF;color:#1F1F1F;transition:background .2s,color .2s,border-color .2s}}
.ob-hv,.ob-tv,.ob-ov{{display:none}}
.ob-badge{{display:none}}
@keyframes ob-pop{{0%{{opacity:0;transform:scale(.6)}}70%{{transform:scale(1.08)}}100%{{opacity:1;transform:none}}}}
@keyframes ob-up{{from{{opacity:0;transform:translateY(10px)}}to{{opacity:1;transform:none}}}}
@keyframes ob-bar{{from{{width:4%}}to{{width:100%}}}}
@keyframes ob-shine{{0%{{transform:translateX(-120%) skewX(-18deg)}}100%{{transform:translateX(260%) skewX(-18deg)}}}}
@keyframes ob-breathe{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-6px)}}}}
@keyframes ob-shimmer{{0%{{background-position:-200px 0}}100%{{background-position:200px 0}}}}
.ob-skel{{background:linear-gradient(90deg,#EFEFF2 0,#F7F7F9 50%,#EFEFF2 100%);background-size:400px 100%;animation:ob-shimmer 1.6s linear infinite}}
.ob-sw{{width:40px;height:24px;border-radius:999px;background:#E2E2E6;position:relative;flex:none;transition:background .2s}}
.ob-sw::after{{content:"";position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform .25s {EASE}}}
.ob-tb{{opacity:0}}
.ob-read .ob-rt{{opacity:.35}}
.ob label:focus-visible,.ob button:focus-visible,.ob a:focus-visible{{outline:2px solid #3B6CF6;outline-offset:2px}}
''']
    # --- step panels: left / active
    for s in range(N):
        for p in range(s):
            css.append(f'.ob:has({R(s)}) .ob-p{p}{{opacity:0;transform:translateX(-56px)}}')
        css.append(f'.ob:has({R(s)}) .ob-p{s}{{opacity:1;transform:none;visibility:visible;transition:opacity .42s ease .14s,transform .5s {EASE} .1s,visibility 0s}}')
        css.append(f'.ob:has({R(s)}) .ob-n{s}{{display:flex}}')
        css.append(f'.ob:has({R(s)}) .ob-fill{{width:{s / 6 * 100:.3f}%}}')
        for i in range(1, 7):
            if s == i:
                css.append(f'.ob:has({R(s)}) .ob-st{i}{{color:var(--f-ink);font-weight:500}}.ob:has({R(s)}) .ob-st{i} .ob-dot{{background:var(--f-ink);box-shadow:0 0 0 4px rgba(59,108,246,.18)}}')
            elif s > i:
                css.append(f'.ob:has({R(s)}) .ob-st{i} .ob-dot{{background:#1F9D6B}}')
    # card sections
    css.append(f'.ob:has({on(range(1, 7))}) .ob-real{{opacity:1}}.ob:has({on(range(1, 7))}) .ob-ghost{{opacity:0}}')
    css.append(f'.ob:has({on(range(2, 7))}) .ob-svc{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({R(2)}) .ob-svc{{transition-delay:1.5s}}')
    css.append(f'.ob:has({on(range(3, 7))}) .ob-ast{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({on(range(4, 7))}) .ob-chn{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({on(range(1, 7))}) .ob-foot{{grid-template-rows:1fr;opacity:1}}')
    css.append(f'.ob:has({R(5)}) .ob-flip{{transform:rotateY(180deg)}}')
    # chat bubbles in test drive play when the step opens
    for i, d in enumerate([.7, 1.4, 2.4, 3.1, 3.9]):
        css.append(f'.ob:has({R(5)}) .ob-tb{i}{{animation:ob-up .45s {EASE} {d}s both}}')
    # teach: reading animation runs when step opens
    css.append(f'.ob:has({R(2)}) .ob-bar{{animation:ob-bar 1.6s {EASE} .3s both}}')
    for i in range(6):
        css.append(f'.ob:has({R(2)}) .ob-rt{i}{{animation:ob-up .35s ease {0.4 + i * .22:.2f}s both}}')
    css.append(f'.ob:has({on(range(3, 7))}) .ob-bar{{width:100%}}')
    # chips: hours, tone
    for g, n_ in (('h', 3), ('t', 3)):
        for i in range(1, n_ + 1):
            css.append(f'.ob:has(#{X}{g}{i}:checked) label[for={X}{g}{i}]{{background:#16182A;color:#FFFFFF;border-color:#16182A}}')
            css.append(f'.ob:has(#{X}{g}{i}:checked) .ob-{g}v{i}{{display:{"grid" if g == "h" else "block"}}}')
            css.append(f'.ob:has(#{X}{g}{i}:checked) .ob-ov{g}{i}{{display:inline}}')
    for k in CHANNELS:
        css.append(f'.ob:has(#{X}c{k}:checked) .ob-b{k}{{display:inline-flex;animation:ob-pop .45s {EASE} both}}')
        css.append(f'.ob:has(#{X}c{k}:checked) label[for={X}c{k}] .ob-sw{{background:#16182A}}.ob:has(#{X}c{k}:checked) label[for={X}c{k}] .ob-sw::after{{transform:translateX(16px)}}')
        css.append(f'.ob:has(#{X}c{k}:checked) label[for={X}c{k}]{{border-color:#16182A}}')
        css.append(f'.ob:has(#{X}c{k}:checked) .ob-cs{k}{{display:inline}}.ob:has(#{X}c{k}:checked) .ob-cn{k}{{display:none}}')
        css.append(f'.ob-cs{k}{{display:none}}')
    if variant == 'A':
        css.append(f'''.ob-sky{{opacity:0;transition:opacity 1.6s ease}}
.ob:has({R(6)}){{--f-ink:#FFFFFF;--f-mut:rgba(255,255,255,.72)}}
.ob:has({R(6)}) .ob-sky{{opacity:1}}
.ob:has({R(6)}) .ob-card{{--c-bg:#12141F;--c-ink:#FFFFFF;--c-mut:#A9AECB;--c-tile:rgba(255,255,255,.08);--c-line:rgba(255,255,255,.1)}}
.ob:has({R(6)}) .ob-aur,.ob:has({R(6)}) .ob-live{{opacity:1;transform:none}}
.ob:has({R(6)}) .ob-mover{{transform:translateY(-22px)}}
.ob:has({R(6)}) .ob-flip{{transform:rotateX(6deg) rotateY(-12deg)}}
.ob:has({R(6)}) .ob-back{{opacity:0}}
.ob:has({R(6)}) .ob-glint{{animation:ob-shine 1.6s ease 1.2s both}}
.ob:has({R(6)}) .ob-float{{animation:ob-breathe 6s ease-in-out 2s infinite}}
.ob:has({R(6)}) .ob-pill{{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.25);color:#FFFFFF}}
.ob:has({R(6)}) .ob-shadow{{opacity:0}}
.ob:has({R(6)}) .ob-track{{background:rgba(255,255,255,.18)}}
.ob:has({R(6)}) .ob-label,.ob:has({R(6)}) .ob-pill{{opacity:0;pointer-events:none}}
.ob:has({R(6)}) .ob-dot{{background:#3DD68C!important;box-shadow:none!important}}''')
    else:
        css.append(f'''.ob-app{{opacity:0;pointer-events:none;transition:opacity .5s ease}}
.ob-side{{transform:translateX(-100%);transition:transform .7s {EASE} .15s}}
.ob-tile{{opacity:0;transform:translateY(18px) scale(.97);transition:opacity .5s ease,transform .6s {EASE}}}
.ob-navi{{opacity:0;transform:translateX(-10px);transition:opacity .35s ease,transform .35s ease}}
.ob-toast{{opacity:0;transform:translate(-50%,20px);transition:opacity .4s ease 2.6s,transform .5s {EASE} 2.6s}}
.ob-head,.ob-left,.ob-navbar,.ob-label{{transition:opacity .4s ease,transform .5s {EASE}}}
.ob:has({R(6)}) .ob-head,.ob:has({R(6)}) .ob-left,.ob:has({R(6)}) .ob-navbar,.ob:has({R(6)}) .ob-label{{opacity:0;transform:translateX(-40px);pointer-events:none}}
.ob:has({R(6)}) .ob-head{{transform:translateY(-20px)}}
.ob:has({R(6)}) .ob-app{{opacity:1;pointer-events:auto}}
.ob:has({R(6)}) .ob-side{{transform:none}}
.ob:has({R(6)}) .ob-tile,.ob:has({R(6)}) .ob-navi{{opacity:1;transform:none}}
.ob:has({R(6)}) .ob-toast{{opacity:1;transform:translate(-50%,0)}}
.ob:has({R(6)}) .ob-mover{{transform:translate(206px,-62px) scale(.86)}}
.ob:has({R(6)}) .ob-card{{--c-bg:#12141F;--c-ink:#FFFFFF;--c-mut:#A9AECB;--c-tile:rgba(255,255,255,.08);--c-line:rgba(255,255,255,.1)}}
.ob:has({R(6)}) .ob-aur,.ob:has({R(6)}) .ob-live{{opacity:1;transform:none}}
.ob:has({R(6)}) .ob-back{{opacity:0}}
.ob:has({R(6)}) .ob-glint{{animation:ob-shine 1.4s ease 1.4s both}}
.ob:has({R(6)}) .ob-shadow{{opacity:0}}''')
        for i in range(12):
            css.append(f'.ob:has({R(6)}) .ob-d{i}{{transition-delay:{.35 + i * .09:.2f}s}}')
    css.append('''@media (prefers-reduced-motion: reduce){.ob *,.ob{transition-duration:.01s!important;transition-delay:0s!important;animation:none!important}.ob .ob-tb{opacity:1}.ob .ob-p{transform:none!important}}''')
    CSS = '\n'.join(css)
    head = kit3.HEAD.replace('</style>', CSS + ('\n' + landscape.CSS if variant == 'A' else '') + '\n</style>', 1)
    head = head.replace(re.search(r'<title>[^<]*</title>', head).group(0), f'<title>{title}</title>')

    # ---------------- inputs
    radios = ''.join(f'<input class="vh" type="radio" name="{X}step" id="{X}{s}" aria-label="{(["Welcome"] + STEPS)[s]}"{" checked" if s == start else ""} />' for s in range(N))
    radios += ''.join(f'<input class="vh" type="radio" name="{X}h" id="{X}h{i}"{" checked" if i == 1 else ""} />' for i in (1, 2, 3))
    radios += ''.join(f'<input class="vh" type="radio" name="{X}t" id="{X}t{i}"{" checked" if i == 1 else ""} />' for i in (1, 2, 3))
    radios += ''.join(f'<input class="vh" type="checkbox" id="{X}c{k}"{" checked" if k in ("wa", "web") else ""} />' for k in CHANNELS)

    # ---------------- header
    steps = ''.join(f'<label for="{X}{i}" class="ob-step ob-st{i}" style="display: inline-flex; align-items: center; gap: 7px; font-size: 13.5px; color: var(--f-mut)"><span class="ob-dot" style="width: 7px; height: 7px; border-radius: 50%; background: currentColor; opacity: .9; transition: background .3s, box-shadow .3s"></span>{n}</label>' for i, n in enumerate(STEPS, 1))
    header = f'''<header class="ob-head" style="position: absolute; left: 0; right: 0; top: 0; z-index: 5; height: 72px; display: flex; align-items: center; gap: 24px; padding: 0 40px; box-sizing: border-box">
      <span style="display: flex; align-items: center; gap: 10px; width: 220px">{mark('ribbon', X + 'hd', 28)}{WM(21)}</span>
      <span style="flex: 1"></span>
      <span style="width: 220px; display: flex; justify-content: flex-end"><a href="#" class="ob-pill" style="display: inline-flex; align-items: center; height: 36px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; color: #3D3D3D; text-decoration: none; font-size: 13.5px; transition: background .6s, color .6s, border-color .6s">Save and finish later</a></span>
      <div class="ob-track" aria-hidden="true" style="position: absolute; left: 40px; right: 40px; bottom: 0; height: 2px; border-radius: 2px; background: #E6E6EA; transition: background .6s"><span class="ob-fill" style="position: absolute; left: 0; top: 0; bottom: 0; width: 0; border-radius: 2px; background: linear-gradient(90deg, #10B981, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777)"></span></div>
    </header>'''

    # ---------------- left panels
    H1 = f"margin: 0; {HF}; font-size: 46px; line-height: 1.06; letter-spacing: -0.04em; color: var(--f-ink)"
    SUB = 'margin: 14px 0 0; font-size: 16.5px; line-height: 1.5; color: var(--f-mut); max-width: 470px'
    EYE = 'display: block; margin-bottom: 14px; font-size: 13px; color: var(--f-mut)'
    def panel(i, eyebrow, h, sub, body=''):
        return f'''<section class="ob-p ob-p{i}" aria-label="{(["Welcome"] + STEPS)[i]}"><span style="{EYE}">{eyebrow}</span><h1 style="{H1}">{h}</h1><p style="{SUB}">{sub}</p><div style="margin-top: 28px; display: flex; flex-direction: column; gap: 18px">{body}</div></section>'''
    road = ''.join(f'<div style="display: flex; align-items: center; gap: 14px; padding: 12px 0; border-top: 1px solid #ECECF0; font-size: 15px"><span style="width: 26px; height: 26px; border-radius: 50%; background: #FFFFFF; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; font-size: 12.5px; color: #6B6B6B">{i}</span><span style="flex: 1; color: #1F1F1F">{n}</span><span style="font-size: 13px; color: #8A8A8A">{t}</span></div>' for i, (n, t) in enumerate([('Your business', '1 min'), ('Teach Vegham', '1 min'), ('Your assistant', '1 min'), ('Channels', '2 min'), ('Test drive', '1 min')], 1))
    p0 = panel(0, 'Welcome, Vinay · your 30-day pilot has started', 'Let’s build your<br>front desk.', 'Five short steps, about 6 minutes. Watch the card on the right come to life as you answer. You can change anything later.', f'<div style="max-width: 470px">{road}</div>')
    hours = ''.join(f'<label for="{X}h{i}" class="ob-chip">{t}</label>' for i, t in enumerate(['Mon–Sat · 10 AM–8 PM', 'Every day · 9 AM–9 PM', 'Custom'], 1))
    p1 = panel(1, 'Step 1/6 · about a minute', 'Tell us about<br>your business.', 'Just the basics. Vegham uses this to answer customers correctly.', f'''
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 14px; max-width: 500px"><div><label for="{X}nm" style="{LABEL}">Business name</label><input id="{X}nm" value="Nila &amp; Co" style="{FIELD}" /></div><div><span style="{LABEL}">Country</span><span style="{FIELD}; display: flex; align-items: center; justify-content: space-between"><span>🇮🇳 India · ₹</span><span style="color: #8A8A8A">▾</span></span></div></div>
        <div style="max-width: 500px"><label for="{X}of" style="{LABEL}">What do you offer? <span style="color: #8A8A8A; font-weight: 400">In your own words</span></label><input id="{X}of" value="Consultations, follow-up visits and group sessions" style="{FIELD}" /></div>
        <div><span style="{LABEL}">Opening hours <span style="color: #8A8A8A; font-weight: 400">· watch the card</span></span><div style="display: flex; flex-wrap: wrap; gap: 8px">{hours}</div></div>''')
    rows = ['Home', 'Services', 'Prices', 'About us', 'FAQ', 'Contact']
    rt = ''.join(f'<span class="ob-rt ob-rt{i}" style="display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: #3D3D3D">{TICK("#1F9D6B", 14)}{n}</span>' for i, n in enumerate(rows))
    p2 = panel(2, 'Step 2/6 · about a minute', 'Teach Vegham<br>your business.', 'Paste a link and Vegham reads it for you. What it learns appears on your card.', f'''
        <div style="max-width: 500px"><label for="{X}ws" style="{LABEL}">Website or Google Business link</label><div style="display: flex; gap: 8px"><input id="{X}ws" value="nilaandco.in" style="{FIELD}" /><span style="flex: none; display: inline-flex; align-items: center; height: 48px; padding: 0 18px; border-radius: 12px; background: #16182A; color: #FFFFFF; font-weight: 500">Read it</span></div></div>
        <div class="ob-read" style="max-width: 500px; padding: 16px 18px; border-radius: 20px; background: #FFFFFF; border: 1px solid #ECECF0"><div style="display: flex; justify-content: space-between; font-size: 13.5px"><b style="font-weight: 600">Read 24 pages</b><span style="color: #6B6B6B">nilaandco.in</span></div><div style="position: relative; margin: 10px 0 12px; height: 4px; border-radius: 2px; background: #EEEEF1; overflow: hidden"><span class="ob-bar" style="position: absolute; left: 0; top: 0; bottom: 0; width: 100%; border-radius: 2px; background: #16182A"></span></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px 12px">{rt}</div></div>
        <span style="font-size: 14px; color: #5C5C5C">No website? <a href="#" style="color: #16182A">Add services by hand</a></span>''')
    tones = ''.join(f'<label for="{X}t{i}" class="ob-chip">{t}</label>' for i, t in enumerate(['Warm', 'Crisp', 'Formal'], 1))
    langs = ''.join(f'<span class="ob-chip" style="{"background: #16182A; color: #FFFFFF; border-color: #16182A" if on_ else ""}">{TICK("#FFFFFF", 12) if on_ else ""}{t}</span>' for t, on_ in [('English', 1), ('हिन्दी', 1), ('తెలుగు', 0), ('+ more', 0)])
    p3 = panel(3, 'Step 3/6 · about a minute', 'Meet your<br>assistant.', 'Give it a name and a voice. The card shows exactly how it will greet customers.', f'''
        <div style="max-width: 500px"><label for="{X}an" style="{LABEL}">Name</label><input id="{X}an" value="Vegham" style="{FIELD}" /></div>
        <div><span style="{LABEL}">Tone <span style="color: #8A8A8A; font-weight: 400">· watch the greeting change</span></span><div style="display: flex; gap: 8px">{tones}</div></div>
        <div><span style="{LABEL}">Languages</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{langs}</div></div>''')
    def chrow(k):
        ic, t, d = CHANNELS[k]
        return f'''<label for="{X}c{k}" style="display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 18px; border: 1px solid #ECECF0; background: #FFFFFF; transition: border-color .2s"><span style="width: 38px; height: 38px; flex: none; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{ic(20)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 15px; color: #1F1F1F">{t}</b><span style="font-size: 13px; color: #6B6B6B"><span class="ob-cs{k}">{d[0]}</span><span class="ob-cn{k}">{d[1]}</span></span></span><span class="ob-sw"></span></label>'''
    p4 = panel(4, 'Step 4/6 · about 2 minutes', 'Where should<br>Vegham answer?', 'Switch on the places your customers already message you. Each one attaches to your card.', f'<div style="display: flex; flex-direction: column; gap: 8px; max-width: 500px">{"".join(chrow(k) for k in CHANNELS)}</div>')
    sugg = ''.join(f'<span style="padding: 8px 14px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 14px; background: #FFFFFF">{t}</span>' for t in ['Anything free tomorrow?', 'How much is a first visit?', 'Do you have parking?', 'Can I bring a friend?'])
    p5 = panel(5, 'Step 5/6 · a quick test', 'Take Vegham for<br>a test drive.', 'Your card turns over into a private test chat. Ask what your customers ask.', f'''
        <div><span style="{LABEL}">Try one</span><div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 500px">{sugg}</div></div>
        <div style="display: flex; gap: 10px; align-items: flex-start; font-size: 14.5px; color: #3D3D3D; max-width: 470px">{TICK()}<span>Spotted a wrong answer? Tap <b style="font-weight: 600">Fix</b> on it. Vegham learns at once, on every channel.</span></div>''')
    if variant == 'A':
        qr = ''.join(f'<span style="width: 7px; height: 7px; background: {"#16182A" if (i * 7 + i // 9 * 3) % 5 < 2 or i in (0,1,2,9,11,18,19,20,6,7,8,15,17,24,25,26,54,55,56,63,65,72,73,74) else "transparent"}"></span>' for i in range(81))
        p6 = f'''<section class="ob-p ob-p6" aria-label="Go live"><span style="{EYE}">Step 6/6 · you did it</span><h1 style="{H1}; font-size: 60px; text-shadow: 0 2px 40px rgba(0,0,0,.35)">Your front desk<br>is open.</h1><p style="{SUB}">Vegham is answering on WhatsApp and your website, day and night. Your first morning report arrives tomorrow at 8 AM.</p>
          <div style="margin-top: 28px; display: flex; align-items: center; gap: 16px; max-width: 480px; padding: 16px; border-radius: 20px; background: rgba(255,255,255,.96); color: #1F1F1F; box-shadow: 0 30px 60px -30px rgba(0,0,0,.5)">
            <span role="img" aria-label="QR code for your booking link" style="flex: none; display: grid; grid-template-columns: repeat(9, 7px); padding: 8px; border-radius: 12px; border: 1px solid #ECECF0">{qr}</span>
            <span style="flex: 1"><b style="display: block; font-weight: 600">Share your booking link</b><span style="display: block; margin-top: 2px; font-size: 13.5px; color: #6B6B6B">Instagram bio, Google, your counter.</span><span style="margin-top: 8px; display: flex; gap: 8px; align-items: center"><span style="flex: 1; padding: 8px 12px; border-radius: 10px; background: #F5F5F7; font-size: 14px">vegham.ai/nila</span><span style="padding: 8px 14px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13.5px">Copy</span></span></span>
          </div></section>'''
    else:
        p6 = '<section class="ob-p ob-p6" aria-label="Go live"></section>'
    left = f'<div class="ob-left" style="position: absolute; left: 96px; top: 150px; width: 540px; height: 600px; z-index: 3">{p0}{p1}{p2}{p3}{p4}{p5}{p6}</div>'

    # ---------------- nav (persistent spot)
    BTNP = 'display: inline-flex; align-items: center; height: 50px; padding: 0 26px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 15.5px; font-weight: 500'
    BTNB = 'display: inline-flex; align-items: center; height: 50px; padding: 0 18px; border-radius: 999px; color: var(--f-mut); font-size: 15px'
    cont = ['Let’s begin', 'Continue', 'Looks right', 'Continue', 'Continue', 'Go live']
    navs = ''
    for s in range(N):
        if s < 6:
            back = f'<label for="{X}{s - 1}" style="{BTNB}">← Back</label>' if s else ''
            skip = '<a href="#" style="margin-left: 6px; color: #6B6B6B; font-size: 14.5px">Skip for now</a>' if s in (2, 4) else ''
            navs += f'<div class="ob-n ob-n{s}" style="align-items: center; gap: 8px">{back}<label for="{X}{s + 1}" tabindex="0" role="button" style="{BTNP}">{cont[s]} →</label>{skip}</div>'
        elif variant == 'A':
            navs += f'<div class="ob-n ob-n6" style="align-items: center; gap: 8px"><label for="{X}5" style="{BTNB}">← Back</label><a href="#" style="{BTNP}; background: #FFFFFF; color: #12141F; text-decoration: none; box-shadow: 0 20px 50px -20px rgba(0,0,0,.5)">Go to my dashboard →</a></div>'
    navbar = f'<div class="ob-navbar" style="position: absolute; left: 96px; top: 772px; z-index: 4">{navs}</div>'

    # ---------------- the living card
    VAR = lambda v: f'var(--c-{v})'
    ghost = f'''<div class="ob-ghost" style="grid-area: 1 / 1; display: flex; flex-direction: column; gap: 14px">
        <div style="display: flex; align-items: center; gap: 14px"><span class="ob-skel" style="width: 56px; height: 56px; border-radius: 18px"></span><span style="flex: 1; display: flex; flex-direction: column; gap: 8px"><span class="ob-skel" style="height: 14px; width: 60%; border-radius: 7px"></span><span class="ob-skel" style="height: 10px; width: 40%; border-radius: 5px"></span></span></div>
        <span class="ob-skel" style="height: 10px; width: 90%; border-radius: 5px"></span><span class="ob-skel" style="height: 10px; width: 70%; border-radius: 5px"></span>
        <span style="margin-top: 6px; font-size: 13px; color: #8A8A8A">Your front desk card. It fills in as you answer.</span></div>'''
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    def hv(i, spec):
        return f'<div class="ob-hv ob-hv{i}" style="grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; font-size: 11px; color: {VAR("mut")}">' + ''.join(f'<span style="padding: 7px 0; border-radius: 10px; background: {"#16182A; color: #FFFFFF" if d == "Fri" else VAR("tile")}">{d}<br><b style="font-weight: 500">{spec(d)}</b></span>' for d in days) + '</div>'
    hvs = hv(1, lambda d: 'Closed' if d == 'Sun' else '10–8') + hv(2, lambda d: '9–9') + hv(3, lambda d: {'Sun': 'Closed', 'Sat': '9–2', 'Wed': '12–8'}.get(d, '10–7'))
    status = lambda t: f'<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #1F9D6B"><span style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>{t}</span>'
    real = f'''<div class="ob-real" style="grid-area: 1 / 1; display: flex; flex-direction: column; gap: 14px">
        <div style="display: flex; align-items: center; gap: 14px"><span style="width: 56px; height: 56px; flex: none; border-radius: 18px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: 'Inter Tight', sans-serif; font-size: 26px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.12)">N</span><span style="flex: 1"><b style="display: block; font-size: 20px; font-weight: 600; color: {VAR("ink")}">Nila &amp; Co</b><span class="ob-ov ob-ovh1">{status("Open now · until 8 PM")}</span><span class="ob-ov ob-ovh2">{status("Open now · until 9 PM")}</span><span class="ob-ov ob-ovh3">{status("Open now · until 7 PM")}</span></span>
          <span class="ob-live" style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 999px; background: rgba(61,214,140,.16); color: #5EEAD4; font-size: 12px; font-weight: 600; letter-spacing: .06em"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #3DD68C"></span>LIVE</span></div>
        <p style="margin: 0; color: {VAR("mut")}; font-size: 14.5px">Consultations, follow-up visits and group sessions</p>
        {hvs}</div>'''
    svc = [('First visit', '30 min', '₹500'), ('Standard appointment', '60 min', '₹1,200'), ('Group session', '90 min', '₹1,200 each')]
    svcrows = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid {VAR("line")}; font-size: 13.5px; color: {VAR("ink")}"><span style="flex: 1">{n} <span style="color: {VAR("mut")}">· {m}</span></span><b style="font-weight: 600">{p}</b></div>' for n, m, p in svc)
    sec = lambda cls, inner: f'<div class="ob-sec {cls}"><div>{inner}</div></div>'
    s_svc = sec('ob-svc', f'''<div style="padding-top: 16px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 13px; font-weight: 600; color: {VAR("ink")}">Learned from nilaandco.in</b><span style="font-size: 12px; color: {VAR("mut")}">12 services · 8 prices · 6 answers</span></div><div style="margin-top: 6px">{svcrows}</div></div>''')
    greet = {1: 'Hi! Welcome to Nila &amp; Co 😊 How can I help you today?', 2: 'Hi, Nila &amp; Co here. Booking, prices or hours?', 3: 'Good evening. You have reached Nila &amp; Co. How may I assist you?'}
    tone_l = {1: 'Warm', 2: 'Crisp', 3: 'Formal'}
    s_ast = sec('ob-ast', f'''<div style="padding-top: 16px; border-top: 1px solid {VAR("line")}; margin-top: 12px"><div style="display: flex; align-items: center; gap: 10px">{mark('ribbon', X + 'ast', 32)}<span style="flex: 1"><b style="display: block; font-size: 14.5px; font-weight: 600; color: {VAR("ink")}">Vegham</b><span style="font-size: 12px; color: {VAR("mut")}">{''.join(f'<span class="ob-ov ob-ovt{i}">{tone_l[i]}</span>' for i in (1, 2, 3))} · English, हिन्दी · voice: Warm</span></span></div>
        <div style="margin-top: 10px; max-width: 88%; padding: 10px 13px; border-radius: 16px 16px 16px 4px; background: #16182A; color: #FFFFFF; font-size: 13.5px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.08)">{''.join(f'<span class="ob-tv ob-tv{i}">{greet[i]}</span>' for i in (1, 2, 3))}</div></div>''')
    badges = ''.join(f'<span class="ob-badge ob-b{k}" title="{CHANNELS[k][1]}" style="width: 34px; height: 34px; border-radius: 11px; background: #FFFFFF; align-items: center; justify-content: center; box-shadow: 0 0 0 1px #ECECF0">{CHANNELS[k][0](18)}</span>' for k in CHANNELS)
    s_chn = sec('ob-chn', f'''<div style="padding-top: 14px; margin-top: 14px; border-top: 1px solid {VAR("line")}; display: flex; align-items: center; gap: 10px"><span style="font-size: 12.5px; color: {VAR("mut")}; flex: 1">Answering on</span><span style="display: flex; gap: 6px">{badges}</span></div>''')
    s_foot = sec('ob-foot', f'''<div style="margin-top: 14px; display: flex; justify-content: space-between; font-size: 12px; color: {VAR("mut")}"><span>vegham.ai/nila</span><span>Front desk · since Nov 2026</span></div>''')
    front = f'''<div class="ob-face ob-front" style="position: relative; overflow: hidden; border-radius: 28px; background: {VAR("bg")}; padding: 26px; box-shadow: 0 40px 80px -40px rgba(22,24,42,.35), 0 0 0 1px rgba(22,24,42,.05)">
        <div class="ob-aur" style="position: absolute; inset: 0; border-radius: inherit">{comps.aurora(1.5)}</div>
        <span class="ob-glint" aria-hidden="true" style="position: absolute; top: 0; bottom: 0; left: 0; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent); transform: translateX(-120%) skewX(-18deg); pointer-events: none"></span>
        <div style="position: relative; display: grid">{ghost}{real}</div>
        <div style="position: relative">{s_svc}{s_ast}{s_chn}{s_foot}</div>
      </div>'''
    tb = lambda i, t, me, extra='': (f'<span class="ob-tb ob-tb{i}" style="align-self: flex-end; max-width: 78%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px">{t}</span>' if me else f'<div class="ob-tb ob-tb{i}" style="align-self: flex-start; max-width: 86%"><span style="display: block; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">{t}</span>{extra}</div>')
    fix = '<span style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 12px; color: #6B6B6B"><span style="padding: 2px 10px; border-radius: 999px; border: 1px solid #E2E2E6">✎ Fix</span>From your price list</span>'
    back = f'''<div class="ob-face ob-back" style="position: absolute; inset: 0; transform: rotateY(180deg); border-radius: 28px; background: #FFFFFF; padding: 22px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px; font-size: 14px; box-shadow: 0 40px 80px -40px rgba(22,24,42,.35), 0 0 0 1px rgba(22,24,42,.05); transition: opacity .3s">
        <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid #F0F0F3"><span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', X + 'tb', 30)}<b style="font-weight: 600">Test chat</b></span><span style="font-size: 12px; color: #8A8A8A">Only you see this</span></div>
        {tb(0, 'Anything free tomorrow evening?', 1)}{tb(1, 'Yes! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', 0, fix)}{tb(2, 'Can I bring a friend?', 1)}{tb(3, 'Of course! Group sessions are ₹1,200 each for up to 8 people.', 0)}
        <span class="ob-tb ob-tb4" style="align-self: center; margin-top: auto; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 12.5px">{TICK("#1E6B47", 12)} Test booking added (not real)</span>
        <div style="display: flex; gap: 8px; padding-top: 10px; border-top: 1px solid #F0F0F3"><span style="flex: 1; height: 40px; border-radius: 999px; background: #F5F5F7; display: flex; align-items: center; padding: 0 14px; color: #8A8A8A">Ask anything…</span><span style="width: 40px; height: 40px; border-radius: 50%; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">↑</span></div>
      </div>'''
    label = f'<span class="ob-label" style="position: absolute; left: 50%; top: -40px; transform: translateX(-50%); white-space: nowrap; display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; border-radius: 999px; background: #FFFFFF; border: 1px solid #ECECF0; font-size: 12.5px; color: #5C5C5C; transition: opacity .4s"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>Live preview · updates as you answer</span>'
    shadow = '<span class="ob-shadow" aria-hidden="true" style="position: absolute; left: 10%; right: 10%; bottom: -46px; height: 40px; border-radius: 50%; background: radial-gradient(ellipse at center, rgba(22,24,42,.14), transparent 70%); transition: opacity .6s"></span>'
    card = f'''<div class="ob-mover" style="position: absolute; left: 820px; top: 168px; width: 420px; z-index: 4; transform-origin: top left">
      <div class="ob-float">{label}{shadow}<div class="ob-card" style="perspective: 1600px"><div class="ob-flip" style="position: relative">{front}{back}</div></div></div></div>'''
    # stage backdrop: a faint dotted plane so the card sits somewhere
    stage = '<div aria-hidden="true" style="position: absolute; left: 700px; right: 40px; top: 96px; bottom: 40px; border-radius: 36px; background: radial-gradient(circle at 1px 1px, rgba(22,24,42,.07) 1px, transparent 1.4px) 0 0 / 22px 22px; -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 45%, #000 30%, transparent 75%); mask-image: radial-gradient(ellipse 70% 70% at 50% 45%, #000 30%, transparent 75%)"></div>'

    extra = ''
    if variant == 'A':
        extra = f'<div class="ob-sky" aria-hidden="true" style="position: absolute; inset: 0; z-index: 0">{landscape.landscape(X + 'sky', seed=7)}<div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(3,5,14,.6) 0%, rgba(3,5,14,.2) 45%, rgba(3,5,14,0) 70%)"></div></div>'
    else:
        nav_items = ['Home', 'Inbox', 'Calendar', 'Calls', 'Contacts', 'Payments', 'Campaigns', 'Reports', 'AI agents', 'Settings']
        keys = ['home', 'inbox', 'cal', 'phone', 'users', 'card', 'mega', 'chart', 'spark', 'gear']
        navh = ''.join(f'<span class="ob-navi ob-d{min(i, 11)}" style="display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 12px; font-size: 14px; {"background: #FFFFFF; color: #141414; font-weight: 500; box-shadow: 0 1px 2px rgba(22,24,42,.08)" if i == 0 else "color: #5C5C5C"}">{I(IC[k], 17)}{n}</span>' for i, (k, n) in enumerate(zip(keys, nav_items)))
        side = f'''<aside class="ob-side" style="position: absolute; left: 0; top: 0; bottom: 0; width: 240px; box-sizing: border-box; background: #F7F7F8; border-right: 1px solid #ECECF0; padding: 18px 12px; display: flex; flex-direction: column; gap: 14px">
          <div style="display: flex; align-items: center; gap: 10px; padding: 0 8px">{mark('ribbon', X + 'sd', 28)}{WM(21)}</div>
          <span style="display: flex; align-items: center; gap: 10px; padding: 9px 10px; border: 1px solid #E6E6EA; border-radius: 12px; background: #FFFFFF; font-size: 13.5px"><span style="width: 26px; height: 26px; border-radius: 8px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 13px">N</span>Nila &amp; Co</span>
          <nav aria-label="App" style="display: flex; flex-direction: column; gap: 2px">{navh}</nav></aside>'''
        T = 'position: absolute; border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF; padding: 18px 20px; box-sizing: border-box'
        stat = lambda n, l: f'<span style="flex: 1; padding: 12px 14px; border-radius: 14px; background: #F7F7F8"><span style="display: block; font-size: 12px; color: #8A8A8A">{l}</span><span style="display: block; margin-top: 2px; font-family: \'Inter Tight\', sans-serif; font-size: 26px; letter-spacing: -0.03em">{n}</span></span>'
        nxt = [('Message your WhatsApp number', 'From another phone, to see Vegham reply', 0), ('Instagram', 'Waiting for Meta approval · we’ll tell you', 2), ('Add your team', 'So the right person gets handovers', 0), ('Forward your phone line', 'Vegham picks up calls you miss', 0), ('Morning report', 'On · tomorrow at 8 AM', 1)]
        nrows = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span style="width: 22px; height: 22px; flex: none; border-radius: 50%; {"background: #1F9D6B" if st == 1 else "border: 1.5px dashed #B4B4BC" if st == 2 else "border: 1.5px solid #D4D4DA"}; display: inline-flex; align-items: center; justify-content: center">{TICK("#FFFFFF", 12) if st == 1 else ""}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14px">{t}</b><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></span>{"" if st else "<span style=\'font-size: 13px; color: #16182A\'>Start →</span>"}</div>' for t, d, st in nxt)
        top = f'''<div class="ob-tile ob-d0" style="position: absolute; left: 240px; right: 0; top: 0; height: 76px; display: flex; align-items: center; gap: 16px; padding: 0 32px; border-bottom: 1px solid #F0F0F3; box-sizing: border-box"><div style="flex: 1"><span style="display: block; font-size: 13px; color: #8A8A8A">Thursday, 6 November · sample data</span><b style="{HF}; font-size: 26px; font-weight: 400">Good evening, Vinay</b></div><span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 13px"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>Vegham is live</span></div>'''
        tiles = f'''{top}
          <div class="ob-tile ob-d2" style="{T}; left: 272px; top: 100px; width: 640px; height: 132px"><b style="font-weight: 600; font-size: 14.5px">Today</b><div style="margin-top: 10px; display: flex; gap: 8px">{stat('0', 'Chats')}{stat('0', 'Bookings')}{stat('0', 'Calls')}{stat('—', 'Avg reply')}</div></div>
          <div class="ob-tile ob-d4" style="{T}; left: 272px; top: 252px; width: 640px; height: 372px"><div style="display: flex; justify-content: space-between"><b style="font-weight: 600; font-size: 14.5px">Your next steps</b><span style="font-size: 12.5px; color: #8A8A8A">1 of 5 done</span></div><div style="margin-top: 8px">{nrows}</div></div>
          <div class="ob-tile ob-d6" style="{T}; left: 272px; top: 644px; width: 640px; height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center"><span style="width: 40px; height: 40px; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{I(IC['inbox'], 20, '#5C5C5C')}</span><b style="margin-top: 10px; font-weight: 600">Your inbox is ready</b><span style="margin-top: 2px; font-size: 13.5px; color: #6B6B6B">New chats and calls appear here. Vegham answers first; you step in when you want.</span></div>
          <div class="ob-tile ob-d8" style="{T}; left: 1026px; top: 632px; width: 362px; height: 162px"><b style="font-weight: 600; font-size: 14.5px">Share your booking link</b><span style="display: block; margin-top: 2px; font-size: 13px; color: #6B6B6B">Instagram bio, Google, your counter.</span><span style="margin-top: 14px; display: flex; gap: 8px; align-items: center"><span style="flex: 1; padding: 10px 12px; border-radius: 10px; background: #F5F5F7; font-size: 14px">vegham.ai/nila</span><span style="padding: 9px 14px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 13.5px">Copy</span></span><span style="display: block; margin-top: 10px; font-size: 12.5px; color: #8A8A8A">QR code · Edit card</span></div>
          <div class="ob-toast" style="position: absolute; left: 50%; bottom: 28px; z-index: 6; display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; border-radius: 14px; background: #16182A; color: #FFFFFF; font-size: 14px; box-shadow: 0 20px 40px -20px rgba(0,0,0,.5)">{TICK("#3DD68C", 15)}You’re live. Vegham is answering on WhatsApp and your website.</div>'''
        extra = f'<div class="ob-app" style="position: absolute; inset: 0; z-index: 1; background: #FFFFFF">{side}{tiles}</div>'

    body = f'''<div class="ob" style="position: relative; overflow: hidden; height: 900px; background: #F5F5F7; font-family: Inter, system-ui, sans-serif; color: #1F1F1F; font-size: 15px; line-height: 1.45">
    {radios}{extra}{stage}{header}{left}{navbar}{card}
  </div>'''
    open(os.path.join(P, name), 'w').write(head + body + kit3.END.replace('__H__', '900'))


CHANNELS = {
    'wa': (lambda s: comps.logo('whatsapp', s), 'WhatsApp', ('Connected · +91 98765 43210', 'Your business number, about 2 minutes')),
    'web': (lambda s: comps.GLOBE.format(s=s, c='#16182A'), 'Website chat', ('On · paste one line on your site', 'A chat bubble on your website')),
    'ig': (lambda s: comps.logo('instagram', s), 'Instagram', ('Connected · waiting for Meta', 'Replies to DMs on @nilaandco')),
    'ph': (lambda s: comps.PHONE.format(s=s, c='#16182A'), 'Phone calls', ('On · forward to Vegham', 'Answers calls and missed calls')),
    'g': (lambda s: comps.logo('google', s), 'Google Business', ('Connected · Book button live', 'Chat and Book on Google Maps')),
}

if __name__ == '__main__':
    build('a', 'A', 0, 'ObA.dc.html', 'Onboarding A · prototype')
    for s in range(1, 7):
        build('a', 'A', s, f'ObA{s}.dc.html', f'Onboarding A · step {s}')
    build('c', 'AC', 0, 'ObAC.dc.html', 'Onboarding A+C · prototype')
    build('c', 'AC', 6, 'ObAC6.dc.html', 'Onboarding A+C · finale')
    print('ok')
