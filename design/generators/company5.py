"""Company page: scroll reveals and parallax, matching the landing page."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import land3 as L
P = os.path.join(D, '..', 'vegam-ui', 'project', 'Company.dc.html')
s = open(P).read()
assert 'vg-heroout' not in s, 'already applied'
b = s.index('</helmet>')
head, body = s[:b], s[b:]
head = head.replace('</style>', L.RESPONSIVE + '</style>', 1)

def once(a, c, n=1):
    global body
    assert body.count(a) == n, (a[:50], body.count(a))
    body = body.replace(a, c)

# Hero: the text block drifts up and fades as the page scrolls.
hero_open = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
once(hero_open, hero_open + '<div class="vg-heroout">')
once('</div></div></section>', '</div></div></div></section>')
# Section labels, paragraphs and cards fade up as they arrive.
body = re.sub(r'<span style="(font-size: 12px; letter-spacing: 0\.14em; text-transform: uppercase;[^"]*)">', r'<span class="vg-rv" style="display: inline-block; \1">', body)
once('<p style="margin: 0">Most businesses', '<p class="vg-rv" style="margin: 0">Most businesses')
once('<p style="margin: 22px 0 0; color: #5C5C5C">Big companies', '<p class="vg-rv" style="margin: 22px 0 0; color: #5C5C5C">Big companies')
body = body.replace('class="vg-lift"', 'class="vg-lift vg-rv"')
body, n = re.subn(r'<div style="(flex: 1 1 \d+px; border: 1px solid #ECECF0; border-radius: 20px;[^"]*)">', r'<div class="vg-rv" style="\1">', body)
# Parallax: the "Why we exist" label column and the row of belief cards drift against the page.
once('<div style="flex: 1 1 320px">', '<div class="vg-par" style="flex: 1 1 320px">')
once('<div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 16px">', '<div class="vg-par" style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 16px">')
open(P, 'w').write(head + body)
print('company effects ok; cards:', n)
