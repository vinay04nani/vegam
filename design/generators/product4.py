"""Product page with the landing page's scroll story, and no blur in the reveal animations.

- Hero text drifts up and fades on scroll
- Channels: the hub and the wave of cards (from land4)
- Long memory: pinned, but different from the landing page: a call's key phrases light up and become
  fields in the person's memory
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

# ---------------------------------------------------------------- MEMORY on the product page
# The landing page shows memory being recalled on a call. Here it shows memory being written:
# the phrases that matter in a call light up and turn into fields in the person's memory.
def crng(a, b):
    return 'animation-range: contain %d%% contain %d%%' % (a, b)


PAIRS = [(8, 'Group size', '3 people'), (26, 'Prefers', 'Saturday mornings'), (44, 'Contact', 'Details on WhatsApp'), (62, 'Open loop', 'Will think about it · follow up')]


def product_memory():
    ic, G, GT, TIGHT = L.ic, L.G, L.GT, L.TIGHT

    def hl(k, text):
        a = PAIRS[k][0]
        return ('<span class="vg-phl" style="background-image: linear-gradient(rgba(16,185,129,.2), rgba(16,185,129,.2)); background-repeat: no-repeat; background-size: 100%% 100%%; border-radius: 4px; padding: 0 2px; color: #141414; %s">%s</span>') % (crng(a, a + 8), text)

    def line(who, text, me=False):
        return ('<div style="display: flex; gap: 12px; padding: 8px 0"><span style="width: 64px; flex: none; font-size: 12.5px; color: %s; font-weight: 500">%s</span><span style="flex: 1; font-size: 14.5px; line-height: 1.55; color: %s">%s</span></div>') % (GT if me else '#6B6B6B', who, '#5C5C5C' if me else '#2B2B2B', text)

    def field(k):
        a, label, value = PAIRS[k]
        loop = k == 3
        return ('<div class="vg-pfield" style="display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top: 1px solid #F0F0F3; %s"><span style="width: 96px; flex: none; font-size: 12.5px; color: #8A8A8A">%s</span>'
                '<span style="flex: 1; font-size: 14.5px; font-weight: 500; color: %s">%s</span><span style="color: %s; display: inline-flex">%s</span></div>') % (
            crng(a + 4, a + 12), label, GT if loop else '#141414', value, G, ic(L.I_CHECK, 15, 'currentColor', 2.2))

    head = ('<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #F0F0F3">'
            '<span style="display: inline-flex; align-items: center; gap: 10px"><span style="width: 34px; height: 34px; border-radius: 50%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px">R</span>'
            '<span><b style="display: block; font-weight: 600; font-size: 14.5px">Rohan Mehta</b><span style="font-size: 12.5px; color: #8A8A8A">Phone call · 14 May · 1:52</span></span></span>'
            '<span style="font-size: 12px; color: #8A8A8A">Transcript</span></div>')
    talk = ('<div style="padding: 6px 0 10px">'
            + line('Rohan', 'Hi, do you do group sessions on weekends? We would be %s.' % hl(0, 'three of us'))
            + line('Vegham', 'Yes, on Saturdays from 9 to 2. It is ₹350 each.', True)
            + line('Rohan', '%s would be best. Can you %s? %s and call back.' % (hl(1, 'Saturday mornings'), hl(2, 'send the details on WhatsApp'), hl(3, 'I’ll think about it')))
            + '</div>')
    mem = ('<div style="margin-top: 4px; padding: 14px 16px 4px; border-radius: 16px; background: #F7F7F8">'
           '<span style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 500; color: #141414"><span style="color: ' + G + '; display: inline-flex">' + ic(L.I_MEM, 15) + '</span>Written to Rohan’s memory</span>'
           '<div style="margin-top: 8px">' + ''.join(field(k) for k in range(4)) + '</div></div>')
    foot = ('<div class="vg-pfoot" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; margin-top: 14px; font-size: 13px; color: #6B6B6B; %s">'
            '<span>Kept for 12 months · change it in Settings</span><span style="display: inline-flex; align-items: center; height: 30px; padding: 0 12px; border-radius: 999px; border: 1px solid #E2E2E6; color: #141414">Forget Rohan</span></div>') % crng(84, 94)
    card = ('<div style="flex: 1 1 480px; min-width: 0"><div style="border-radius: 28px; background: #FFFFFF; border: 1px solid #ECECEF; padding: 22px 24px; box-shadow: 0 24px 60px -36px rgba(22,24,42,.35)">%s%s%s%s</div>'
            '<div style="padding: 10px 6px 0; text-align: right">%s</div></div>') % (head, talk, mem, foot, L.sample())

    def step(a, b, n, t, d):
        return ('<div class="vg-pstep" style="display: flex; gap: 16px; %s"><span style="width: 32px; height: 32px; flex: none; border-radius: 50%%; border: 1px solid rgba(16,185,129,.45); color: %s; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600">%s</span>'
                '<span><b style="display: block; font-weight: 500; font-size: 16px">%s</b><span style="font-size: 15px; color: #5C5C5C">%s</span></span></div>') % (crng(a, b), GT, n, t, d)
    left = ('<div style="flex: 1 1 400px; min-width: 0; max-width: 500px">%s%s%s<div style="margin-top: 32px; display: flex; flex-direction: column; gap: 20px">%s%s%s</div></div>') % (
        L.eyebrow('Long memory'), L.h2('It writes a note after every call.', 'And reads it before the next.', size=44),
        L.lead('Vegham does not keep a pile of recordings to search later. It keeps the few things that matter about each person, and you can see and change every one of them.', mw=480),
        step(2, 10, '1', 'It listens', 'The whole call or chat, in whatever language it happens.'),
        step(14, 72, '2', 'It writes down what matters', 'Names, preferences, plans and anything left unfinished.'),
        step(76, 86, '3', 'It uses it next time', 'On any channel, so nobody has to repeat themselves.'))
    return ('<section class="vg-pinwrap vg-pin-pmem" style="padding: 0 16px; background: #FFFFFF; view-timeline-name: --vg-pmem"><div class="vg-sticky">'
            '<div style="position: relative; width: 100%%; max-width: 1408px; margin: 0 auto; border-radius: 32px; background: linear-gradient(180deg, #F7F7F8 0%%, #F1F2F4 100%%)">'
            '<div class="vg-pinpad" style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 48px 64px">%s%s</div></div></div></section>') % (left, card)


L.RESPONSIVE += """
@keyframes vg-phl{from{background-size:0% 100%}to{background-size:100% 100%}}
@supports (animation-timeline: view()){
@media (prefers-reduced-motion: no-preference) and (min-width: 761px) and (min-height: 680px){
  .vg-pin-pmem{height:240vh}
  .vg-pin-pmem .vg-pstep{animation:vg-mstep linear both;animation-timeline:--vg-pmem}
  .vg-pin-pmem .vg-phl{animation:vg-phl linear both;animation-timeline:--vg-pmem}
  .vg-pin-pmem .vg-pfield{animation:vg-slidein linear both;animation-timeline:--vg-pmem}
  .vg-pin-pmem .vg-pfoot{animation:vg-mbubble linear both;animation-timeline:--vg-pmem}
}
}
"""
L.memory = product_memory


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
