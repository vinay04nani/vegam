"""Product page with the landing page's scroll story, and no blur in the reveal animations.

- Hero text drifts up and fades on scroll
- Channels: the hub and the wave of cards (from land4)
- Long memory: the pinned timeline (from land4)
- Each feature row: the sample screen's rows and bubbles slide in one by one;
  the insights bars grow and the numbers count up
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import land4  # noqa: F401  (patches land3's channels and memory with the scroll versions)
import land3 as L
import site3 as S

NO_BLUR = [(';filter:blur(8px)}to{opacity:1;transform:none;filter:none}}', '}to{opacity:1;transform:none}}'),
           (';filter:blur(6px)}to{opacity:1;transform:none;filter:none}}', '}to{opacity:1;transform:none}}')]

L.RESPONSIVE += '\n.vg-num.vg-pct::after{content:counter(vgn) "%"}\n'

FRAME = '<div style="border-radius: 28px; background: #F7F7F8; border: 1px solid #ECECEF; padding: 14px">'
ITEM = re.compile(r'<span (style="(?:align-self: flex-(?:start|end); max-width: \d+%; background|display: flex; align-items: (?:center|flex-start); gap: 1[02]px; padding: 1[01]px|display: block; padding: 16px 0; border-top)[^"]*")')
BAR = re.compile(r'<span style="flex: 1; (height: \d+%); border-radius: 6px 6px 2px 2px; background: ([^"]+)"></span>')


def rng(a, b):
    return 'animation-range: entry %d%% cover %d%%' % (a, b)


def animate_frame(chunk):
    k = [0]

    def item(m):
        j = k[0]; k[0] += 1
        return '<span class="vg-slide" %s' % m.group(1)[:-1] + '; ' + rng(18 + j * 5, 38 + j * 5) + '"'
    chunk = ITEM.sub(item, chunk)
    b = [0]

    def bar(m):
        j = b[0]; b[0] += 1
        return '<span class="vg-growbar" style="flex: 1; %s; border-radius: 6px 6px 2px 2px; background: %s; transform-origin: bottom; %s"></span>' % (m.group(1), m.group(2), rng(10 + j * 2, 34 + j * 2))
    chunk = BAR.sub(bar, chunk)
    for v in ('486', '412'):
        chunk = chunk.replace('; font-size: 32px; letter-spacing: -0.03em; line-height: 1.1">%s</span>' % v,
                              '; font-size: 32px; letter-spacing: -0.03em; line-height: 1.1"><span class="vg-num" role="img" aria-label="%s" style="--to: %s"></span></span>' % (v, v), 1)
    chunk = chunk.replace('; font-size: 32px; letter-spacing: -0.03em; line-height: 1.1">86%</span>',
                          '; font-size: 32px; letter-spacing: -0.03em; line-height: 1.1"><span class="vg-num vg-pct" role="img" aria-label="86%" style="--to: 86"></span></span>', 1)
    return chunk


def product():
    html = S.product()
    hero = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    assert html.startswith('<section') and hero in html
    html = html.replace(hero, hero + '<div class="vg-heroout">', 1)
    html = html.replace('</div></section>', '</div></div></section>', 1)
    parts = html.split(FRAME)
    return parts[0] + ''.join(FRAME + animate_frame(p) for p in parts[1:])


def unblur(path):
    s = open(path).read()
    for a, b in NO_BLUR:
        s = s.replace(a, b)
    open(path, 'w').write(s)


if __name__ == '__main__':
    S.build('Product', 'Vegham product', product(), 10200)
    for name in ('Product', 'LandingV2'):
        unblur(os.path.join(L.P, name + '.dc.html'))
    print('product ok')
