"""Landing v4: scroll story below the hero (hero unchanged).

- Channels: a hub draws lines to the cards, which arrive in a wave
- Moments it handles (replaces the memory section): pinned; five scenarios slide across, the centred one
  brightens, its messages appear and then its outcome
- What it does: cards arrive in a wave; bars grow, numbers count, chips pop, rows slide
- How it works: pinned; the four steps slide across with a progress bar
- Light touches: icons draw, QR pops, pricing lands with Growth last, banner aurora brightens, footer wordmark rises
Pinning only happens where scroll-driven animations are supported, on screens at least 761px wide and
680px tall, and when the visitor has not asked for reduced motion. Otherwise everything shows in its final state.
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import land3 as L
from land3 import ic, eyebrow, h2, lead, sample, aurora, tile, wave, CARD, TIGHT, G, GT, BTN_W

AUR = 'linear-gradient(90deg, #10B981 0%, #0EA5A4 35%, #3B6CF6 70%, #7C3AED 100%)'


def rng(a, b, kind='entry', kind2='cover'):
    return 'animation-range: %s %d%% %s %d%%' % (kind, a, kind2, b)


def crng(a, b):
    return 'animation-range: contain %d%% contain %d%%' % (a, b)


# ---------------------------------------------------------------- CHANNELS
_channels = L.channels


def channels():
    html = _channels()
    hub = ('<div aria-hidden="true" class="vg-hub" style="position: relative; height: 92px; margin-top: 40px">'
           '<svg viewBox="0 0 1136 92" preserveAspectRatio="none" style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible">'
           + ''.join('<path class="vg-hubline" d="M568 22 C568 60, %d 46, %d 92" fill="none" stroke="#10B981" stroke-opacity=".55" stroke-width="1.5" vector-effect="non-scaling-stroke" pathLength="1"></path>' % (x, x) for x in (189, 568, 947))
           + '</svg><span class="vg-hubdot" style="position: absolute; left: 50%; top: 0; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 8px; height: 30px; padding: 0 12px 0 8px; border-radius: 999px; background: #FFFFFF; border: 1px solid rgba(16,185,129,.45); font-size: 13px; font-weight: 500; color: ' + GT + '; white-space: nowrap">'
           '<span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981; box-shadow: 0 0 0 4px rgba(16,185,129,.15)"></span>One agent</span></div>')
    old = '<div style="margin-top: 48px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">'
    assert old in html
    html = html.replace(old, hub + '<div style="margin-top: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">', 1)
    i = [0]

    def stagger(m):
        k = i[0]; i[0] += 1
        d = (k % 3) * 5 + (k // 3) * 8
        return m.group(0)[:-1] + '; ' + rng(4 + d, 30 + d) + '"'
    html = re.sub(r'<div class="vg-lift vg-rv" style="[^"]*"', stagger, html)
    return html


# ---------------------------------------------------------------- MOMENTS IT HANDLES (pinned; replaces the memory section)
MOMENTS = [
    ('phone', L.I_PHONE, 'New caller', 'Phone call · 8:10 AM',
     [('How much is a first visit?', False), ('It’s ₹800. Saturday 10 AM is free, shall I hold it and send the details on WhatsApp?', True)],
     'Answered from your price list'),
    ('mem', L.I_MEM, 'Returning caller', 'Phone call · 2:15 PM',
     [('Hi Rohan, good to hear from you again. Still thinking about the weekend sessions?', True), ('Yes! Is Saturday morning open?', False)],
     'Remembered him after six months'),
    ('hand', L.I_HAND, 'Upset customer', 'WhatsApp · 4:30 PM',
     [('This is the second time my booking was wrong.', False), ('I’m really sorry. I’m getting the owner for you right now.', True)],
     'Handed to you with a summary'),
    ('globe', L.I_GLOBE, 'Another language', 'Phone call · 6:30 PM',
     [('Hindi mein baat kar sakte hain?', False), ('Bilkul! Bataiye, main kaise madad karoon?', True)],
     'Switched to Hindi'),
    ('clock', L.I_CLOCK, 'After hours', 'Instagram · 11:42 PM',
     [('Are you open tomorrow?', False), ('Yes, from 9 AM. Want me to save you a spot?', True)],
     'Replied at 11:42 PM and added a follow-up'),
]


def memory():
    """Moments it handles: five short scenarios that slide across while the section holds in place.
    The card in the middle brightens, its messages appear one by one, then its outcome."""
    def t(i):
        return 4 + i * 21

    def c(a, b):
        return crng(max(0, a), max(1, b))

    def bubble(text, me, a, b):
        if me:
            st = 'align-self: flex-start; max-width: 88%; background: #16182A; color: #FFFFFF; padding: 10px 14px; border-radius: 16px 16px 16px 4px'
        else:
            st = 'align-self: flex-end; max-width: 80%; background: #F1F1F4; color: #1F1F1F; padding: 10px 14px; border-radius: 16px 16px 4px 16px'
        return '<span class="vg-mobub" style="%s; %s">%s</span>' % (st, c(a, b), text)

    cards = []
    for i, (k, icon, label, meta, msgs, outcome) in enumerate(MOMENTS):
        ti = t(i)
        bubbles = bubble(msgs[0][0], msgs[0][1], ti - 9, ti - 5) + bubble(msgs[1][0], msgs[1][1], ti - 5, ti - 1)
        cards.append(
            ('<div class="vg-mocard" style="display: flex; flex-direction: column; gap: 18px; padding: 26px; border-radius: 24px; background: #FFFFFF; border: 1px solid #ECECEF; box-sizing: border-box; %s">'
             '<span style="display: flex; align-items: center; justify-content: space-between; gap: 12px"><span style="display: inline-flex; align-items: center; gap: 10px"><span style="width: 36px; height: 36px; border-radius: 11px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center; color: #16182A">%s</span>'
             '<b style="%s; font-weight: 500; font-size: 19px; letter-spacing: -0.02em">%s</b></span><span style="font-size: 12px; color: #8A8A8A; white-space: nowrap">%s</span></span>'
             '<span style="display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; line-height: 1.45; min-height: 150px">%s</span>'
             '<span class="vg-moout" style="display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; height: 30px; padding: 0 12px; border-radius: 999px; border: 1px solid rgba(16,185,129,.45); color: %s; font-size: 13px; font-weight: 500; %s">%s%s</span></div>')
            % (c(ti - 12, ti), ic(icon, 17), TIGHT, label, meta, bubbles, GT, c(ti - 1, ti + 3), ic(L.I_CHECK, 14, 'currentColor', 2.4), outcome))
    labels = ''.join('<span class="vg-molabel" style="padding: 8px 0; border-bottom: 2px solid #E6E6EA; font-size: 14px; color: #141414; white-space: nowrap; %s">%s</span>' % (c(t(i) - 11, t(i) + 10), m[2]) for i, m in enumerate(MOMENTS))
    bar = '<div aria-hidden="true" style="height: 2px; border-radius: 2px; background: #E6E6EA; overflow: hidden"><span class="vg-mofill" style="display: block; height: 100%%; background: %s; transform-origin: left; %s"></span></div>' % (AUR, crng(4, 92))
    head = ('<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div>%s</div>') % (
        eyebrow('Moments it handles'), h2('Every kind of call.', 'Handled the way you would.', size=48),
        lead('New callers, regulars, unhappy customers, other languages and late-night messages. Here is what Vegham does with each.', mw=420))
    return ('<section class="vg-pinwrap vg-pin-mom" style="background: #F7F7F8; view-timeline-name: --vg-mom"><div class="vg-sticky">'
            '<div class="vg-pinpad" style="width: 100%%; max-width: 1200px; margin: 0 auto; padding: 104px 32px; box-sizing: border-box">%s'
            '<div class="vg-molabels" style="margin-top: 36px; display: flex; gap: 28px; overflow: hidden">%s</div>%s'
            '<div class="vg-moview" style="margin-top: 28px"><div class="vg-motrack" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; %s">%s</div></div>'
            '<div style="margin-top: 14px; text-align: right">%s</div></div></div></section>') % (head, labels, bar, crng(4, 92), ''.join(cards), sample())


# ---------------------------------------------------------------- WHAT IT DOES
_bento = L.bento


def bento():
    html = _bento()
    # cards arrive in a wave, by row and column
    pos = [(0, 0), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1)]
    i = [0]

    def stagger(m):
        r, c = pos[i[0]]; i[0] += 1
        d = r * 6 + c * 5
        return m.group(0)[:-1] + '; ' + rng(4 + d, 30 + d) + '"'
    html = re.sub(r'<div class="vg-lift vg-rv" style="[^"]*"', stagger, html)
    # bars grow from the bottom, one after another
    k = [0]

    def bar(m):
        j = k[0]; k[0] += 1
        return '<span class="vg-growbar" style="flex: 1; %s; border-radius: 6px 6px 2px 2px; background: %s; transform-origin: bottom; %s"></span>' % (m.group(1), m.group(2), rng(10 + j * 2, 34 + j * 2))
    html, n = re.subn(r'<span style="flex: 1; (height: \d+%); border-radius: 6px 6px 2px 2px; background: ([^"]+)"></span>', bar, html)
    assert n == 12, n
    # numbers count up
    for v in ('412', '0', '23'):
        old = '; font-size: 34px; letter-spacing: -0.03em; line-height: 1.1">%s</span>' % v
        assert old in html, v
        html = html.replace(old, '; font-size: 34px; letter-spacing: -0.03em; line-height: 1.1"><span class="vg-num" role="img" aria-label="%s" style="--to: %s"></span></span>' % (v, v), 1)
    # language chips pop in
    c = [0]

    def pop(m):
        j = c[0]; c[0] += 1
        return '<span class="vg-pop" style="display: inline-flex; align-items: center; height: 32px; padding: 0 13px; border-radius: 999px; %s; %s">' % (m.group(1), rng(14 + j * 2, 30 + j * 2))
    html = re.sub(r'<span style="display: inline-flex; align-items: center; height: 32px; padding: 0 13px; border-radius: 999px; ([^"]+)">', pop, html)
    # one person: the line draws across to Rohan
    old = '<span aria-hidden="true" style="flex: 1; height: 1px; background: linear-gradient(90deg, #E2E2E6, #10B981)"></span>'
    assert old in html
    html = html.replace(old, '<span aria-hidden="true" class="vg-drawx" style="flex: 1; height: 1px; background: linear-gradient(90deg, #E2E2E6, #10B981); transform-origin: left; %s"></span>' % rng(20, 45), 1)
    # long context: rows slide in
    r = [0]

    def row(m):
        j = r[0]; r[0] += 1
        return '<span class="vg-slide" style="display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: 12px; %s; %s">' % (m.group(1), rng(16 + j * 6, 36 + j * 6))
    html = re.sub(r'<span style="display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: 12px; ([^"]+)">', row, html)
    return html


# ---------------------------------------------------------------- ANYWHERE
_global = L.global_


def global_():
    html = _global()
    old = '<span aria-hidden="true" style="width: 76px; height: 76px;'
    assert old in html
    return html.replace(old, '<span aria-hidden="true" class="vg-pop" style="%s; width: 76px; height: 76px;' % rng(30, 55), 1)


# ---------------------------------------------------------------- HOW IT WORKS (pinned)
def how():
    steps = [('01', 'Tell it about your business', 'Paste your website or type a few lines. Vegham reads it and learns what you offer.'),
             ('02', 'Pick a voice', 'Choose how it sounds and which languages it speaks. Change it any time.'),
             ('03', 'Make a test call', 'Call it yourself and hear exactly what your customers will hear.'),
             ('04', 'Connect and go live', 'Add your phone number, WhatsApp or the link. It starts answering straight away.')]
    cards = ''.join(('<div class="vg-hstep" style="padding: 28px; border-radius: 24px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); %s">'
                     '<span style="font-size: 13px; color: #3DD68C; font-variant-numeric: tabular-nums">%s</span><b style="display: block; margin-top: 40px; %s; font-weight: 400; font-size: 24px; line-height: 1.15; letter-spacing: -0.03em">%s</b>'
                     '<span style="display: block; margin-top: 10px; font-size: 15px; color: #B4B8CC">%s</span></div>') % (crng(max(0, i * 24 - 6), i * 24 + 6), n, TIGHT, t, d) for i, (n, t, d) in enumerate(steps))
    bar = ('<div class="vg-hbar" aria-hidden="true" style="margin-top: 40px; height: 2px; border-radius: 2px; background: rgba(255,255,255,.12); overflow: hidden">'
           '<span class="vg-hfill" style="display: block; height: 100%%; background: %s; transform-origin: left; %s"></span></div>') % (AUR, crng(4, 90))
    return ('<section class="vg-pinwrap vg-pin-how" style="padding: 0 16px; view-timeline-name: --vg-how"><div class="vg-sticky">'
            '<div style="position: relative; overflow: hidden; width: 100%%; max-width: 1408px; margin: 0 auto; border-radius: 32px; background: #12141F; color: #FFFFFF">%s'
            '<div class="vg-pinpad" style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px; box-sizing: border-box">'
            '<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div><a href="Signup.dc.html" style="%s">Start free</a></div>%s'
            '<div class="vg-hview" style="margin-top: 28px"><div class="vg-g4 vg-htrack" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; %s">%s</div></div>'
            '</div></div></div></section>') % (aurora(.7), eyebrow('How it works', True), h2('Live in minutes,', 'not weeks.', True), BTN_W, bar, crng(6, 90), cards)


# ---------------------------------------------------------------- CONTROL: icons draw themselves
_control = L.control


def control():
    html = _control()
    html = re.sub(r'(<svg aria-hidden="true")', r'\1 class="vg-ico"', html)
    html = re.sub(r'<(path|circle|rect)(?![^>]*pathLength)', r'<\1 pathLength="1"', html)
    return html


# ---------------------------------------------------------------- PRICING: Growth lands last
_pricing = L.pricing


def pricing():
    html = _pricing()
    order = [0, 12, 6]  # Starter, Growth, Pro
    i = [0]

    def land(m):
        d = order[i[0]]; i[0] += 1
        return m.group(0)[:-1] + '; ' + rng(4 + d, 30 + d) + '"'
    return re.sub(r'<div class="vg-rv" style="padding: 28px; border-radius: 24px;[^"]*"', land, html)


# ---------------------------------------------------------------- CTA: the aurora brightens
_cta = L.cta


def cta():
    html = _cta()
    old = '<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; border-radius: inherit; opacity: 1">'
    assert old in html
    return html.replace(old, '<div aria-hidden="true" class="vg-brighten" style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; border-radius: inherit; opacity: 1">', 1)


EXTRA = '''
@keyframes vg-dash{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes vg-hubdot{from{opacity:0;transform:translateX(-50%) scale(.8)}to{opacity:1;transform:translateX(-50%)}}
@keyframes vg-growy{from{transform:scaleY(0)}to{transform:none}}
@keyframes vg-growx{from{transform:scaleX(0)}to{transform:none}}
@keyframes vg-popin{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:none}}
@keyframes vg-slidein{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}
@keyframes vg-bright{from{opacity:.25}to{opacity:1}}
@keyframes vg-rise{from{opacity:0;transform:translateY(30%)}to{opacity:1;transform:none}}
@keyframes vg-mstep{from{opacity:.22}to{opacity:1}}
@keyframes vg-mbubble{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes vg-mword{from{opacity:.14}to{opacity:1}}
@keyframes vg-mgreen{from{color:#FFFFFF;background-size:0% 2px}to{color:#3DD68C;background-size:100% 2px}}
@keyframes vg-mchip{from{opacity:0;transform:translateY(12px) scale(.94)}to{opacity:1;transform:none}}
@keyframes vg-mhl{from{background-size:0% 2px;color:#D6D8E6}to{background-size:100% 2px;color:#FFFFFF}}
@keyframes vg-molabel{0%,100%{color:#8A8A8A;border-bottom-color:#E6E6EA}25%,75%{color:#141414;border-bottom-color:#10B981}}
@keyframes vg-hslide{from{transform:none}to{transform:translateX(calc(-100% + min(1136px, 100vw - 96px)))}}
@keyframes vg-hfocus{from{opacity:.4;transform:scale(.97)}to{opacity:1;transform:none}}
.vg-ico *{stroke-dasharray:1;stroke-dashoffset:0}
.vg-num,.vg-mdays{counter-reset:vgn var(--to)}
.vg-mdays::after{content:counter(vgn)}
.vg-num::after{content:counter(vgn)}
@supports (animation-timeline: view()){
@media (prefers-reduced-motion: no-preference){
  .vg-hubline{stroke-dasharray:1;animation:vg-dash linear both;animation-timeline:view();animation-range:entry 30% cover 45%}
  .vg-hubdot{animation:vg-hubdot linear both;animation-timeline:view();animation-range:entry 20% cover 35%}
  .vg-growbar{animation:vg-growy linear both;animation-timeline:view()}
  .vg-drawx{animation:vg-growx linear both;animation-timeline:view()}
  .vg-pop{animation:vg-popin linear both;animation-timeline:view()}
  .vg-slide{animation:vg-slidein linear both;animation-timeline:view()}
  .vg-ico *{animation:vg-dash linear both;animation-timeline:view();animation-range:entry 40% cover 50%}
  .vg-num{counter-reset:vgn var(--vg-n);animation:vg-count linear both;animation-timeline:view();animation-range:entry 30% cover 50%}
  .vg-brighten{animation:vg-bright linear both;animation-timeline:view();animation-range:entry 10% cover 50%}
  .vg-aurtext.vg-rise{animation:vg-rise linear both,vg-aurtext 16s ease-in-out infinite alternate;animation-timeline:view(),auto;animation-range:entry 0% cover 35%,normal}
}
@media (prefers-reduced-motion: no-preference) and (min-width: 761px) and (min-height: 680px){
  .vg-pinwrap{position:relative}
  .vg-pin-how{height:280vh}
  .vg-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;padding-top:40px;box-sizing:border-box}
  .vg-pinpad{padding-top:64px!important;padding-bottom:64px!important}
  .vg-pin-mom{height:320vh}
  .vg-pin-mom .vg-moview{overflow:hidden;padding:6px 0;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 3%,#000 97%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 3%,#000 97%,transparent 100%)}
  .vg-pin-mom .vg-motrack{display:flex!important;width:max-content;animation:vg-hslide linear both;animation-timeline:--vg-mom}
  .vg-pin-mom .vg-mocard{flex:none;width:400px;animation:vg-hfocus linear both;animation-timeline:--vg-mom}
  .vg-pin-mom .vg-mobub{animation:vg-mbubble linear both;animation-timeline:--vg-mom}
  .vg-pin-mom .vg-moout{animation:vg-popin linear both;animation-timeline:--vg-mom}
  .vg-pin-mom .vg-molabel{animation:vg-molabel linear both;animation-timeline:--vg-mom}
  .vg-pin-mom .vg-mofill{animation:vg-growx linear both;animation-timeline:--vg-mom}
  .vg-pin-how .vg-hview{overflow:visible}
  .vg-pin-how .vg-htrack{display:flex!important;width:max-content;animation:vg-hslide linear both;animation-timeline:--vg-how}
  .vg-pin-how .vg-hstep{flex:none;width:440px;box-sizing:border-box;animation:vg-hfocus linear both;animation-timeline:--vg-how}
  .vg-pin-how .vg-hfill{animation:vg-growx linear both;animation-timeline:--vg-how}
}
}
'''

L.RESPONSIVE += EXTRA
L.channels, L.memory, L.bento, L.global_, L.how, L.control, L.pricing, L.cta = channels, memory, bento, global_, how, control, pricing, cta

_footer = L.footer


def footer(f):
    f = _footer(f)
    assert 'class="vg-aurtext"' in f
    return f.replace('class="vg-aurtext"', 'class="vg-aurtext vg-rise"', 1)


L.footer = footer


def build(src):
    out = L.build(src)
    old = 'height: 2px; background: #16182A; transform: scaleX(0)'
    assert old in out
    return out.replace(old, 'height: 3px; background: %s; transform: scaleX(0)' % AUR, 1)


if __name__ == '__main__':
    out = build(os.path.join(D, 'landing_v2_src.html'))
    open(os.path.join(L.P, 'LandingV2.dc.html'), 'w').write(out)
    print(len(out))
