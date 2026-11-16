"""How it works page with scroll effects (no blur, like the other pages):
- the hero text drifts up and fades on scroll
- inside each step's picture, the rows, tiles, chips and options arrive one by one as it scrolls in
Also centres the welcome card on the log in, sign up and code pages.
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import product4 as P4  # noqa: F401  (land3/land4 patches, scroll CSS, unblur)
import land3 as L
import site3 as S

FRAME = '<div style="border-radius: 28px; background: #F7F7F8; border: 1px solid #ECECEF; padding: 14px">'
SLIDE = ['display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top', 'display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top',
         'display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 16px', 'display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top']
POP = ['display: flex; align-items: center; gap: 10px; height: 46px', 'display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 16px',
       'display: inline-flex; align-items: center; height: 30px; padding: 0 12px; border-radius: 999px']
ITEM = re.compile(r'<span style="(%s)' % '|'.join(re.escape(p) for p in SLIDE + POP))


def animate(chunk):
    k = [0]

    def item(m):
        j = k[0]; k[0] += 1
        cls = 'vg-pop' if m.group(1) in POP else 'vg-slide'
        return '<span class="%s" style="animation-range: entry %d%% cover %d%%; %s' % (cls, 16 + j * 4, 36 + j * 4, m.group(1))
    return ITEM.sub(item, chunk)


def howitworks():
    html = S.howitworks()
    hero_open = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    assert hero_open in html
    html = html.replace(hero_open, hero_open + '<div class="vg-heroout">', 1).replace('</div></section>', '</div></div></section>', 1)
    parts = html.split(FRAME)
    return parts[0] + ''.join(FRAME + animate(p) for p in parts[1:])


def centre_auth():
    old = 'display: flex; align-items: flex-end; justify-content: center; padding: 40px 32px; box-sizing: border-box'
    for name in ('Login', 'Signup', 'Otp'):
        p = os.path.join(L.P, name + '.dc.html')
        s = open(p).read()
        if old in s:
            s = s.replace(old, old.replace('align-items: flex-end', 'align-items: center'), 1)
            open(p, 'w').write(s)


if __name__ == '__main__':
    S.build('HowItWorks', 'How Vegham works', howitworks(), 6100)
    P4.unblur(os.path.join(L.P, 'HowItWorks.dc.html'))
    centre_auth()
    print('how it works ok')
