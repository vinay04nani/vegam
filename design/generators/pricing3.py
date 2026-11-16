"""Pricing page with scroll effects (no blur), like the other pages:
- hero text drifts up and fades on scroll
- the three plans land in a wave, Growth last; their check lines slide in one by one
- the comparison table fills in row by row; its ticks pop in
- the billing icons draw themselves
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import product4 as P4  # noqa: F401  (land3/land4 patches, scroll CSS, unblur)
import land3 as L
import site3 as S


def rng(a, b):
    return 'animation-range: entry %d%% cover %d%%' % (a, b)


def pricing():
    html = S.pricing()
    hero_open = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    assert hero_open in html
    html = html.replace(hero_open, hero_open + '<div class="vg-heroout">', 1).replace('</div></section>', '</div></div></section>', 1)

    # plans: Starter, Growth, Pro land at 0, +12, +6; check lines inside slide in one after another
    order, k = [0, 12, 6], [0]

    def plan(m):
        d = order[k[0]]; k[0] += 1
        return m.group(0)[:-1] + '; ' + rng(4 + d, 30 + d) + '"'
    html = re.sub(r'<div class="vg-rv" style="padding: 32px; border-radius: 24px;[^"]*"', plan, html)
    assert k[0] == 3, k[0]
    c = [0]

    def line(m):
        j = c[0] % 5; c[0] += 1
        return '<span class="vg-slide" style="%s; display: flex; gap: 10px; font-size: 14.5px;' % rng(16 + j * 4, 36 + j * 4)
    html = re.sub(r'<span style="display: flex; gap: 10px; font-size: 14\.5px;', line, html)

    # comparison table: rows reveal one by one, ticks pop
    html = re.sub(r'<tr><td style="padding: 14px 16px 14px 0;', '<tr class="vg-rv"><td style="padding: 14px 16px 14px 0;', html)
    html = re.sub(r'<tr><td colspan="4"', '<tr class="vg-rv"><td colspan="4"', html)
    html = re.sub(r'(<td style="padding: 14px 16px; text-align: center[^"]*">)<span style="color: (#10B981)">',
                  r'\1<span class="vg-pop" style="display: inline-flex; color: \2; animation-range: entry 30% cover 50%">', html)

    # billing icons draw themselves
    sec = html.index('How billing works')
    a, b = html.rfind('<section', 0, sec), html.index('</section>', sec)
    part = re.sub(r'(<svg aria-hidden="true")', r'\1 class="vg-ico"', html[a:b])
    part = re.sub(r'<(path|circle|rect)(?![^>]*pathLength)', r'<\1 pathLength="1"', part)
    return html[:a] + part + html[b:]


if __name__ == '__main__':
    S.build('Pricing', 'Vegham pricing', pricing(), 5600)
    P4.unblur(os.path.join(L.P, 'Pricing.dc.html'))
    print('pricing ok')
