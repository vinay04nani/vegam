"""Original SVG aurora landscape: sky, stars, flowing aurora curtains with rays, mountains, lake reflection."""
import random
CSS = '''
@keyframes vga-sway1{0%,100%{transform:translateX(-2%) skewX(-3deg)}50%{transform:translateX(3%) skewX(4deg)}}
@keyframes vga-sway2{0%,100%{transform:translateX(3%) skewX(3deg)}50%{transform:translateX(-3%) skewX(-4deg)}}
@keyframes vga-sway3{0%,100%{transform:translateX(0) skewX(0)}50%{transform:translateX(-4%) skewX(5deg)}}
@keyframes vga-flick{0%,100%{opacity:.95}30%{opacity:.7}55%{opacity:1}80%{opacity:.78}}
@keyframes vga-rays{from{transform:translateX(0)}to{transform:translateX(-120px)}}
@keyframes vga-tw{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes vga-ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}
.vga-s1{animation:vga-sway1 16s ease-in-out infinite,vga-flick 7s ease-in-out infinite}
.vga-s2{animation:vga-sway2 21s ease-in-out infinite,vga-flick 9s ease-in-out infinite}
.vga-s3{animation:vga-sway3 26s ease-in-out infinite,vga-flick 11s ease-in-out infinite}
.vga-rays{animation:vga-rays 9s linear infinite}
.vga-tw{animation:vga-tw 3s ease-in-out infinite}
.vga-rip{animation:vga-ripple 6s ease-in-out infinite}
.vga-s1,.vga-s2,.vga-s3{transform-box:view-box;transform-origin:50% 60%}
@media (prefers-reduced-motion: reduce){.vga-s1,.vga-s2,.vga-s3,.vga-rays,.vga-tw,.vga-rip{animation:none!important}}
'''

def landscape(uid='a', seed=11, lake=True, height=1000, ground=True):
    R = random.Random(seed)
    W, H = 1600, height
    hz = int(H * 0.70)  # horizon (mountain base / lake top)
    stars = []
    for i in range(170):
        x, y = R.uniform(0, W), R.uniform(0, hz * 0.85)
        r = R.choice([0.5, 0.6, 0.7, 0.8, 1.0, 1.3])
        op = R.uniform(0.35, 0.95)
        cls = ' class="vga-tw"' if R.random() < 0.18 else ''
        dl = f' style="animation-delay: -{R.uniform(0, 3):.1f}s"' if cls else ''
        stars.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="#FFFFFF" opacity="{op:.2f}"{cls}{dl}></circle>')
    stars = ''.join(stars)

    import math
    def curtain(base, amp, top, phase, period=520, tilt=0.0):
        low, up = [], []
        for x in range(-200, W + 201, 25):
            yl = base + amp * math.sin(x / period * 2 * math.pi + phase) + amp * 0.35 * math.sin(x / (period * 0.37) + phase * 2) + tilt * (x - W / 2)
            yu = top + amp * 0.9 * math.sin(x / (period * 1.3) * 2 * math.pi + phase + 1.2) + tilt * (x - W / 2)
            low.append((x, yl)); up.append((x, min(yu, yl - 60)))
        d = 'M ' + ' L '.join(f'{x} {y:.0f}' for x, y in up)
        d += ' L ' + ' L '.join(f'{x} {y:.0f}' for x, y in reversed(low)) + ' Z'
        return d
    c1 = curtain(hz * 0.58, 70, hz * 0.10, 0.4, 620, -0.06)
    c2 = curtain(hz * 0.44, 55, hz * 0.02, 2.1, 760, 0.04)
    c3 = curtain(hz * 0.70, 40, hz * 0.36, 4.0, 480, -0.02)

    def mountains(base, peaks, color, jitter, step=(30, 70)):
        pts = []
        x = -40; y = base - R.randint(*peaks) * 0.5
        while x < W + 60:
            pts.append((x, y))
            x += R.randint(*step)
            y = max(base - peaks[1], min(base - 2, y + R.uniform(-peaks[1] * 0.45, peaks[1] * 0.45)))
        d = f'M -40 {H} L ' + ' L '.join(f'{px} {py:.0f}' for px, py in pts) + f' L {W + 60} {H} Z'
        return f'<path d="{d}" fill="{color}"></path>'
    m_far = mountains(hz, (30, 150), 'url(#vga-mf-' + uid + ')', 30, (24, 60))
    m_mid = mountains(hz + 8, (10, 80), '#0A1328', 20, (30, 80))
    m_near = mountains(hz + 14, (4, 30), '#060A18', 10, (40, 90))

    lake_svg = ''
    if lake:
        ripples = ''.join(f'<rect x="{R.uniform(-50, W):.0f}" y="{hz + 20 + i * ((H - hz - 20) / 22):.0f}" width="{R.uniform(80, 340):.0f}" height="1" fill="#9EF5D2" opacity="{R.uniform(.05, .18):.2f}"></rect>' for i in range(22))
        lake_svg = f'''<rect x="0" y="{hz + 14}" width="{W}" height="{H - hz}" fill="url(#vga-lake-{uid})"></rect>
        <rect x="0" y="{hz + 14}" width="{W}" height="{(H - hz) * 0.6:.0f}" fill="url(#vga-refl-{uid})"></rect>
        <g class="vga-rip">{ripples}</g>'''

    return f'''<svg aria-hidden="true" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; display: block">
      <defs>
        <linearGradient id="vga-sky-{uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03050E"></stop><stop offset=".45" stop-color="#081028"></stop><stop offset=".72" stop-color="#0E2140"></stop><stop offset="1" stop-color="#0B1830"></stop></linearGradient>
        <linearGradient id="vga-g1-{uid}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#5BFFC8" stop-opacity="0"></stop><stop offset=".08" stop-color="#7DFFD3" stop-opacity=".95"></stop><stop offset=".3" stop-color="#2DE3A0" stop-opacity=".75"></stop><stop offset=".62" stop-color="#14B8A6" stop-opacity=".35"></stop><stop offset=".85" stop-color="#7C3AED" stop-opacity=".22"></stop><stop offset="1" stop-color="#7C3AED" stop-opacity="0"></stop></linearGradient>
        <linearGradient id="vga-g2-{uid}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#22D3EE" stop-opacity="0"></stop><stop offset=".1" stop-color="#5EEAD4" stop-opacity=".8"></stop><stop offset=".4" stop-color="#3B6CF6" stop-opacity=".45"></stop><stop offset=".75" stop-color="#8B5CF6" stop-opacity=".3"></stop><stop offset="1" stop-color="#DB2777" stop-opacity="0"></stop></linearGradient>
        <linearGradient id="vga-g3-{uid}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#A7F3D0" stop-opacity="0"></stop><stop offset=".1" stop-color="#6EE7B7" stop-opacity=".7"></stop><stop offset=".5" stop-color="#10B981" stop-opacity=".3"></stop><stop offset="1" stop-color="#10B981" stop-opacity="0"></stop></linearGradient>
        <linearGradient id="vga-mf-{uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2C52"></stop><stop offset="1" stop-color="#0D1730"></stop></linearGradient>
        <linearGradient id="vga-refl-{uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2DE3A0" stop-opacity=".22"></stop><stop offset=".35" stop-color="#14B8A6" stop-opacity=".08"></stop><stop offset="1" stop-color="#14B8A6" stop-opacity="0"></stop></linearGradient>
        <linearGradient id="vga-lake-{uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1A33"></stop><stop offset="1" stop-color="#040812"></stop></linearGradient>
        <filter id="vga-blur-{uid}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"></feGaussianBlur></filter>
        <filter id="vga-blur2-{uid}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"></feGaussianBlur></filter>
        <pattern id="vga-rp-{uid}" width="120" height="10" patternUnits="userSpaceOnUse"><rect width="120" height="10" fill="#FFFFFF" fill-opacity=".72"></rect><rect x="6" width="3" height="10" fill="#FFFFFF"></rect><rect x="23" width="2" height="10" fill="#FFFFFF" fill-opacity=".9"></rect><rect x="41" width="5" height="10" fill="#FFFFFF"></rect><rect x="63" width="2" height="10" fill="#FFFFFF" fill-opacity=".85"></rect><rect x="78" width="4" height="10" fill="#FFFFFF"></rect><rect x="99" width="2" height="10" fill="#FFFFFF" fill-opacity=".9"></rect><rect x="111" width="3" height="10" fill="#FFFFFF"></rect></pattern>
        <mask id="vga-mask-{uid}" maskUnits="userSpaceOnUse" x="-300" y="0" width="{W + 600}" height="{H}"><g class="vga-rays"><rect x="-300" y="0" width="{W + 700}" height="{H}" fill="url(#vga-rp-{uid})"></rect></g></mask>
      </defs>
      <rect width="{W}" height="{H}" fill="url(#vga-sky-{uid})"></rect>
      <g>{stars}</g>
      <g mask="url(#vga-mask-{uid})" opacity=".9">
        <g class="vga-s2" filter="url(#vga-blur-{uid})"><path d="{c2}" fill="url(#vga-g2-{uid})"></path></g>
        <g class="vga-s1" filter="url(#vga-blur-{uid})"><path d="{c1}" fill="url(#vga-g1-{uid})"></path></g>
        <g class="vga-s3" filter="url(#vga-blur-{uid})"><path d="{c3}" fill="url(#vga-g3-{uid})"></path></g>
      </g>
      <g filter="url(#vga-blur2-{uid})" opacity=".45"><path d="{c1}" fill="url(#vga-g1-{uid})"></path></g>
      {m_far if ground else ''}
      {m_mid if ground else ''}
      {lake_svg if ground else ''}
      {m_near if (ground and not lake) else ''}
    </svg>'''
