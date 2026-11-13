import random, re, os
D = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(D, '..', 'vegam-ui', 'project')
apple_path = re.search(r'd="([^"]+)"', open(os.path.join(D, '..', 'si', 'package', 'icons', 'apple.svg')).read()).group(1)
brands_src = open('/home/user/vegam/frontend/src/content/brands.ts').read()
def logo(k, size=18):
    m = re.search(r'\n\s+' + k + r':\s*\{\s*title:\s*"([^"]*)",\s*hex:\s*"([^"]*)",\s*path:\s*"([^"]*)"', brands_src)
    return f'<svg aria-hidden="true" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{m.group(2)}"><path d="{m.group(3)}"></path></svg>'

W, H = 72, 72  # pixel grid

def scene(night=False, seed=7):
    R = random.Random(seed)
    g = [[None] * W for _ in range(H)]
    layers = {}
    def put(x, y, c, layer=None):
        if not (0 <= x < W and 0 <= y < H): return
        if layer: layers.setdefault(layer, {})[(x, y)] = c
        else: g[y][x] = c
    def rect(x0, y0, x1, y1, c):
        for y in range(y0, y1):
            for x in range(x0, x1): put(x, y, c)
    # sky bands with dither
    if night:
        bands = ['#141A3C', '#18204A', '#1D2858', '#243168', '#2C3B78', '#3A4886']
    else:
        bands = ['#4FA8F0', '#62B4F2', '#7BC2F4', '#98D0F5', '#B9DDF4', '#FBD9C4']
    horizon = 44
    bh = horizon / len(bands)
    for y in range(horizon):
        i = min(int(y / bh), len(bands) - 1)
        for x in range(W):
            c = bands[i]
            f = (y - i * bh) / bh
            if i + 1 < len(bands) and f > 0.6 and R.random() < (f - 0.6) * 2.2:
                c = bands[i + 1]
            elif R.random() < 0.06:
                c = bands[max(i - 1, 0)]
            put(x, y, c)
    # sun / moon
    cx, cy, r = (54, 14, 6) if night else (52, 30, 7)
    for y in range(cy - r - 1, cy + r + 2):
        for x in range(cx - r - 1, cx + r + 2):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            if d <= r:
                if night:
                    put(x, y, '#F4F1E6' if d < r - 1 or R.random() < 0.6 else '#D9D6CB', 'sun')
                else:
                    put(x, y, '#FFD34D' if d < r - 1.5 else ('#FFE27A' if R.random() < 0.5 else '#FFC233'), 'sun')
            elif not night and d <= r + 1 and R.random() < 0.35:
                put(x, y, '#FFE9A8', 'sun')
    if night:
        for _ in range(70):
            x, y = R.randrange(W), R.randrange(0, 34)
            if g[y][x] in bands: put(x, y, '#FFFFFF' if R.random() < 0.6 else '#C9D3FF', f'star{R.randrange(6)}')
    # clouds
    clouds = []
    def cloud(x0, y0, w, under):
        name = f'cloud{len(clouds)}'; clouds.append((name, x0, w))
        x_real = x0; x0 = 0
        for y in range(4):
            inset = [3, 1, 0, 1][y]
            for x in range(x0 + inset, x0 + w - inset):
                if R.random() < 0.92:
                    put(x, y0 + y, under if y == 3 else ('#FFFFFF' if R.random() < 0.85 else '#EEF2FA'), name)
        for k in range(2):
            bx = x0 + R.randint(2, max(3, w - 8))
            for y in range(2):
                for x in range(bx + (1 - y), bx + 6 - (1 - y)):
                    put(x, y0 - 2 + y, '#FFFFFF', name)
    if night:
        cloud(6, 10, 18, '#6E78B0'); cloud(30, 24, 14, '#6E78B0')
    else:
        cloud(5, 7, 22, '#F7B8CF'); cloud(34, 18, 16, '#F7C9B8'); cloud(58, 6, 12, '#F7B8CF')
    # far hills
    hill = '#6F7FD8' if not night else '#2A3570'
    hill2 = '#8592E0' if not night else '#323F80'
    for x in range(W):
        h = int(4 + 3 * abs(((x * 0.13) % 2) - 1) + (2 if 20 < x < 40 else 0))
        for y in range(horizon - h, horizon):
            put(x, y, hill if R.random() < 0.85 else hill2)
    # street of shops
    ground_y = 58
    rect(0, horizon, W, ground_y, '#9AD07A' if not night else '#2F5A3A')
    walls = ['#E8775A', '#F2C14E', '#5FB3A9', '#F1E4CF', '#C77DD8', '#7FB2E5', '#F29E7A']
    if night:
        walls = ['#8C4A3C', '#9C7B33', '#3C7069', '#8F8778', '#7A4D86', '#4E6E91', '#94614D']
    x = 1
    i = 0
    while x < W - 4:
        w = R.choice([9, 10, 11, 12])
        h = R.choice([14, 16, 18, 20, 22])
        top = ground_y - h
        wall = walls[i % len(walls)]
        rect(x, top, min(x + w, W), ground_y, wall)
        # roof line
        rect(x - 1, top - 1, min(x + w + 1, W), top, '#3A2E2A' if not night else '#1A1414')
        # awning stripes
        ay = ground_y - 9
        for ax in range(x, min(x + w, W)):
            put(ax, ay, '#FFFFFF' if (ax // 2) % 2 == 0 else ('#E5484D' if i % 2 == 0 else '#2F6FDB'))
            put(ax, ay + 1, '#FFFFFF' if (ax // 2) % 2 == 0 else ('#C33A3E' if i % 2 == 0 else '#2459B5'))
        # door + window at street
        dx = x + 2
        rect(dx, ground_y - 6, dx + 3, ground_y, '#5A3B2E' if not night else '#2A1C16')
        wx = x + 6
        lit = '#FFE27A' if night else '#BFE6FF'
        rect(wx, ground_y - 6, min(wx + 4, x + w - 1), ground_y - 2, lit)
        # upper windows
        for wy in range(top + 3, ay - 3, 5):
            for wx2 in range(x + 2, x + w - 2, 4):
                on = night and R.random() < 0.55
                if on:
                    lay = f'win{R.randrange(5)}'
                    rect(wx2, wy, wx2 + 2, wy + 3, '#1E2342')
                    for yy in range(wy, wy + 3):
                        for xx in range(wx2, wx2 + 2): put(xx, yy, '#FFD34D', lay)
                else:
                    rect(wx2, wy, wx2 + 2, wy + 3, '#1E2342' if night else '#BFE6FF')
        # sign
        if i % 3 == 1:
            rect(x + 2, top + 1, x + w - 2, top + 3, '#16182A' if not night else '#FF7A1A')
        x += w + R.choice([1, 2])
        i += 1
    # pavement and road
    rect(0, ground_y, W, ground_y + 2, '#D8D2C4' if not night else '#5A5650')
    rect(0, ground_y + 2, W, H, '#7C7F86' if not night else '#34363C')
    for x in range(2, W, 8):
        rect(x, ground_y + 7, x + 4, ground_y + 8, '#F2F2F2' if not night else '#B9B9B9')
    # grass texture strip at bottom
    rect(0, H - 4, W, H, '#B9DC5A' if not night else '#3E6B2E')
    for x in range(W):
        if R.random() < 0.5: put(x, H - 4, '#A6CF45' if not night else '#355E27')
    # light texture noise
    for y in range(H):
        for x in range(W):
            if g[y][x] and R.random() < 0.05:
                c = g[y][x].lstrip('#'); rgb = [int(c[k:k + 2], 16) for k in (0, 2, 4)]
                d = R.choice([-10, 10]); rgb = [max(0, min(255, v + d)) for v in rgb]
                g[y][x] = '#%02X%02X%02X' % tuple(rgb)
    # emit run-length rects
    out = []
    for y in range(H):
        x = 0
        while x < W:
            c = g[y][x]; x2 = x
            while x2 < W and g[y][x2] == c: x2 += 1
            if c: out.append(f'<rect x="{x}" y="{y}" width="{x2 - x}" height="1" fill="{c}"></rect>')
            x = x2
    def emit(px):
        rows = {}
        for (x, y), c in px.items(): rows.setdefault(y, []).append((x, c))
        o = []
        for y, cells in rows.items():
            cells.sort(); i = 0
            while i < len(cells):
                x, c = cells[i]; j = i
                while j + 1 < len(cells) and cells[j + 1][0] == cells[j][0] + 1 and cells[j + 1][1] == c: j += 1
                o.append(f'<rect x="{x}" y="{y}" width="{cells[j][0] - x + 1}" height="1" fill="{c}"></rect>'); i = j + 1
        return ''.join(o)
    extra = ''
    if 'sun' in layers: extra += f'<g class="vg-sun">{emit(layers["sun"])}</g>'
    for k in range(6):
        if f'star{k}' in layers: extra += f'<g class="vg-tw" style="animation-delay: -{k * 0.4:.1f}s; animation-duration: {2 + k * 0.5:.1f}s">{emit(layers[f"star{k}"])}</g>'
    for name, x0, w in clouds:
        dur = 70 + R.randint(0, 40)
        phase = dur * (x0 + w) / (W + w)
        extra += f'<g class="vg-cloud" style="--f: -{w}px; --t: {W}px; animation-name: vg-cloud; animation-duration: {dur}s; animation-delay: -{phase:.1f}s">{emit(layers[name])}</g>'
    for k in range(5):
        if f'win{k}' in layers: extra += f'<g class="vg-bl" style="animation-delay: -{k * 1.3:.1f}s; animation-duration: {6 + k}s">{emit(layers[f"win{k}"])}</g>'
    # buildings/foreground must cover clouds? clouds are in the sky only, fine.
    return f'<svg aria-hidden="true" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" style="position: absolute; inset: 0; width: 100%; height: 100%">' + ''.join(out) + extra + '</svg>'

top = open(f'{D}/top.html').read()
import comps
top = top.replace('</style>', comps.CSS + '@keyframes vg-cloud{from{transform:translateX(var(--f))}to{transform:translateX(var(--t))}}\n.vg-cloud{animation-timing-function:linear;animation-iteration-count:infinite}\n</style>', 1)
top = re.sub(r'<title>[^<]*</title>', '<title>__T__</title>', top)
end = open(f'{D}/end.html').read()
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.03em"

def ic(svg_inner, bg, fg):
    return f'<span style="flex: none; width: 36px; height: 36px; border-radius: 10px; background: {bg}; display: inline-flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="{fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{svg_inner}</svg></span>'
features = [
    (ic('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>', '#F3F3F5', '#16182A'), 'Chat receptionist', 'Replies on WhatsApp, Instagram and your website in seconds'),
    (ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>', '#F3F3F5', '#16182A'), 'Voice receptionist', 'Answers calls, books visits and transfers to your team'),
    (ic('<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>', '#F3F3F5', '#16182A'), 'Bookings and reminders', 'Fills your calendar and reminds customers the day before'),
    (ic('<path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6"></path>', '#F3F3F5', '#16182A'), 'Morning report', 'A WhatsApp each morning with what came in overnight'),
]
works = ''.join(f'<span style="display: inline-flex; align-items: center; justify-content: center; height: 40px; border-radius: 10px">{logo(k, 24)}</span>' for k in ['whatsapp', 'instagram', 'messenger', 'google', 'meta', 'stripe'])

def left(night):
    feats = ''.join(f'<div style="display: flex; gap: 14px; align-items: flex-start">{i}<span><span style="display: block; font-size: 15px; font-weight: 500; color: #1F1F1F">{t}</span><span style="display: block; margin-top: 2px; font-size: 14px; line-height: 1.5; color: #5C5C5C">{d}</span></span></div>' for i, t, d in features)
    return f'''<div style="flex: 1 1 560px; min-width: 0; padding: 16px; box-sizing: border-box">
      <div style="position: relative; height: 100%; min-height: 680px; border-radius: 8px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 48px 24px; box-sizing: border-box">
        {scene(night)}
        <div style="position: relative; width: 100%; max-width: 470px; background: #FFFFFF; border-radius: 20px; padding: 32px 32px 28px; box-sizing: border-box; box-shadow: 0 20px 50px -24px rgba(0,0,0,0.35)">
          <h2 style="margin: 0; {HF}; font-size: 22px; color: #1F1F1F">The AI front desk for every business</h2>
          <div style="margin-top: 28px; display: flex; flex-direction: column; gap: 22px">{feats}</div>
          <span style="display: block; margin-top: 30px; font-size: 13.5px; color: #6B6B6B">Works with</span>
          <div style="margin-top: 10px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px">{works}</div>
        </div>
      </div>
    </div>'''

BTN = 'display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; box-sizing: border-box; height: 46px; border: 0; border-radius: 999px; background: #F1F1F3; color: #1F1F1F; text-decoration: none; font: inherit; font-size: 15px; font-weight: 500; cursor: pointer'
ms = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24"><rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"></rect><rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"></rect><rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"></rect><rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"></rect></svg>'
ap = f'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="#000000"><path d="{apple_path}"></path></svg>'
ph = '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>'
mark = '<span style="display: inline-block; font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: 34px; line-height: 1.1; letter-spacing: -0.045em; color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text">vegham</span>'

def right(title, sub, extra_fields, cta, switch):
    return f'''<div style="flex: 1 1 560px; min-width: 0; display: flex; align-items: center; justify-content: center; padding: 48px 24px; box-sizing: border-box">
      <div style="width: 100%; max-width: 330px; text-align: center">
        {mark}
        <h1 style="margin: 22px 0 0; {HF}; font-size: 30px; color: #141414">{title}</h1>
        {f'<p style="margin: 8px 0 0; font-size: 15px; color: #6B6B6B">{sub}</p>' if sub else ''}
        <div style="margin-top: 32px; display: flex; flex-direction: column; gap: 10px">
          <a href="#" style="{BTN}">{logo('google', 17)}Continue with Google</a>
          <a href="#" style="{BTN}">{ms}Continue with Microsoft</a>
          <a href="#" style="{BTN}">{ap}Continue with Apple</a>
          <a href="#" style="{BTN}">{ph}Continue with phone</a>
        </div>
        <div style="margin: 24px 0; display: flex; align-items: center; gap: 14px; font-size: 12.5px; color: #6B6B6B"><span style="flex: 1; height: 1px; background: #ECECEF"></span>OR<span style="flex: 1; height: 1px; background: #ECECEF"></span></div>
        <div style="display: flex; flex-direction: column; gap: 10px; text-align: left">
          {extra_fields}
          <label for="em" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Email</label>
          <input id="em" type="email" placeholder="e.g., name@business.com" style="display: block; width: 100%; box-sizing: border-box; height: 46px; padding: 0 18px; border: 1px solid #E2E2E6; border-radius: 999px; font: inherit; font-size: 15px" />
        </div>
        <label style="margin-top: 16px; display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: #3D3D3D; text-align: left"><input type="checkbox" style="width: 18px; height: 18px; margin: 0; accent-color: #16182A" />I accept the <a href="#" style="color: #16182A">terms of service</a> &amp; <a href="#" style="color: #16182A">privacy policy</a></label>
        <button type="button" disabled style="margin-top: 18px; width: 100%; height: 48px; border: 0; border-radius: 999px; background: #8F9099; color: #FFFFFF; font: inherit; font-size: 15px; font-weight: 500">{cta}</button>
        <p style="margin: 24px 0 0; font-size: 14.5px; color: #3D3D3D">{switch}</p>
      </div>
    </div>'''

def build(name, title, night, r):
    body = f'''<div style="display: flex; flex-wrap: wrap; min-height: 960px; background: #FFFFFF">
    {left(night)}
    {r}
  </div>'''
    t = top.replace('__T__', title)
    e = end.replace('"height":6200', '"height":960')
    open(f'{OUT}/{name}', 'w').write(t + '\n' + body + '\n' + e)

FIELD = 'display: block; width: 100%; box-sizing: border-box; height: 46px; padding: 0 18px; border: 1px solid #E2E2E6; border-radius: 999px; font: inherit; font-size: 15px'
build('Login.dc.html', 'Log in to Vegham', False, right('Log into your account', '', '', 'Continue', 'Don’t have an account? <a href="#" style="color: #5C5C5C">Create one</a>'))
signup_fields = f'''<label for="nm" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Business name</label>
          <input id="nm" type="text" placeholder="Business name" style="{FIELD}" />'''
build('Signup.dc.html', 'Sign up for Vegham', True, right('Create your account', 'Start your free 30-day pilot', signup_fields, 'Create account', 'Already have an account? <a href="#" style="color: #5C5C5C">Log in</a>'))
print('ok', os.path.getsize(f'{OUT}/Login.dc.html'), os.path.getsize(f'{OUT}/Signup.dc.html'))
