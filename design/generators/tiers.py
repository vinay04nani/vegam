import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import importlib, landscape
P = os.path.join(D, '..', 'vegam-ui', 'project')
rd = lambda f: open(os.path.join(P, f)).read()
def wr(f, s): open(os.path.join(P, f), 'w').write(s)
SVG_RE = re.compile(r'<svg aria-hidden="true" viewBox="0 0 1600 1000".*?</svg>', re.S)
PERF = '''
section[style*="background-color: #03050E"]{content-visibility:auto;contain-intrinsic-size:auto 640px}
@media (max-width: 760px){.vga-s1,.vga-s2,.vga-s3,.vga-rays,.vga-tw,.vga-rip,.vg-aur1,.vg-aur2,.vg-curtain{animation:none!important}}
'''
def perf(s):
    return s if 'contain-intrinsic-size:auto 700px' in s else s.replace('</style>', PERF + '</style>', 1)

# ---------- Level 2: short sky-only strip ----------
for f, uid, seed in [('Product.dc.html', 'product', 31), ('HowItWorks.dc.html', 'howitworks', 37), ('Company.dc.html', 'company', 43)]:
    s = rd(f)
    s = SVG_RE.sub(lambda m: landscape.landscape(uid, seed=seed, lake=False, ground=False), s, count=1)
    s = s.replace('rgba(3,5,14,.15) 45%, rgba(3,5,14,.55) 100%)', 'rgba(3,5,14,.1) 45%, rgba(3,5,14,.35) 100%)', 1)
    s = re.sub(r'(<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: )(\d+)px 32px (\d+)px', lambda m: f'{m.group(1)}{int(m.group(2)) - 24}px 32px {max(56, int(m.group(3)) - 24)}px', s, count=1)
    wr(f, perf(s)); print(f, 'level 2')

# ---------- Level 3: clean white top ----------
PILL_DARK = 'background:rgba(10,12,22,.78);border-color:rgba(255,255,255,.12);box-shadow:0 16px 40px -18px rgba(3,5,14,.6);'
PILL_LIGHT = 'background:rgba(255,255,255,.82);border-color:#E4E4EA;box-shadow:0 12px 32px -16px rgba(22,24,42,.25);'
def light_header(s):
    hs = s.index('<header'); he = s.index('</header>')
    h = s[hs:he]
    h = h.replace('; margin-bottom: -78px">', '">', 1)
    h = h.replace('font-size: 15px; color: #D4D7E6', 'font-size: 15px; color: #2B2B2B')
    h = h.replace('border-bottom: 1.5px solid #FFFFFF', 'border-bottom: 1.5px solid #141414').replace('color: #FFFFFF; font-weight: 500; border-bottom', 'color: #141414; font-weight: 500; border-bottom')
    h = h.replace('background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in', 'background: #16182A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 500">Log in')
    h = h.replace('background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.2); color: #FFFFFF', 'background: #FFFFFF; border: 1px solid #E6E6EA; color: #1F1F1F')
    s = s[:hs] + h + s[he:]
    return s.replace(PILL_DARK, PILL_LIGHT)

# Pricing: remove the aurora band and restore dark text
s = rd('Pricing.dc.html')
s = light_header(s)
a = s.index('<div aria-hidden="true" style="position: absolute; left: 0; right: 0; top: 0; height: 660px">')
depth, i = 0, a
for m in re.finditer(r'<(/?)div\b[^>]*?>', s[a:]):
    depth += -1 if m.group(1) else 1
    if depth == 0:
        b = a + m.end(); break
s = s[:a] + s[b:]
hs = s.index('</header>'); cut = s.index('<div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 16px; text-align: left; align-items: stretch">')
seg = s[hs:cut]
for x, y in [('color: #FFFFFF">Simple pricing.', 'color: #141414">Simple pricing.'), ('color: #A9AECB', 'color: #8A8A8A'), ('color: #DDE0EE', 'color: #3D3D3D'),
             ('border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18)', 'border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6')]:
    seg = seg.replace(x, y)
seg = re.sub(r'padding: (\d+)px 32px 104px; text-align: center', lambda m: f'padding: {int(m.group(1)) - 80}px 32px 104px; text-align: center', seg, count=1)
s = s[:hs] + seg + s[cut:]
wr('Pricing.dc.html', perf(s)); print('Pricing level 3')

# BookDemo / Security / Help / Legal: rebuild with a light top
import kit3
kit3.HEADER = light_header('<header' + kit3.HEADER.split('<header', 1)[1] + '</header>').rsplit('</header>', 1)[0] + '</header>' if False else kit3.HEADER
HL = kit3.HEADER
for a_, b_ in [('font-size: 15px; color: #D4D7E6', 'font-size: 15px; color: #2B2B2B'), ('; margin-bottom: -78px">', '">'),
               ('background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in', 'background: #16182A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 500">Log in'),
               ('background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.2); color: #FFFFFF', 'background: #FFFFFF; border: 1px solid #E6E6EA; color: #1F1F1F')]:
    HL = HL.replace(a_, b_)
kit3.HEADER = HL
kit3.HEAD = kit3.HEAD.replace(PILL_DARK, PILL_LIGHT)
def light_hero(uid, seed, eyebrow, a, b, sub, extra='', min_h=0, center=True, lake=True):
    al = 'text-align: center' if center else ''
    return f'''  <section style="background: linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%); border-bottom: 1px solid #EFEFEF">
    <div style="position: relative; {kit3.WRAP}; padding: 88px 32px 80px; {al}">
      <span class="vg-hero" style="animation-delay: .05s; display: inline-block; padding: 10px 28px; border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6; font-size: 15px; color: #3D3D3D">{eyebrow}</span>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 26px {'auto' if center else '0'} 0; max-width: 960px; {kit3.HF}; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">{a}<br><span style="color: #8A8A8A">{b}</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 20px {'auto' if center else '0'} 0; max-width: 620px; font-size: 18.5px; line-height: 1.65; color: #3D3D3D">{sub}</p>
      {extra}
    </div>
  </section>
'''
kit3.hero = light_hero
src = open(os.path.join(D, 'pages3.py')).read()
src = src.replace('from kit3 import *', 'from kit3 import *\nimport kit3\nhero = kit3.hero\nHEADER = kit3.HEADER')
# Help search box: light shadow; Book demo: no overlap needed
src = src.replace('background: rgba(255,255,255,.95); box-shadow: 0 20px 50px -20px rgba(0,0,0,.6)', 'background: #FFFFFF; border: 1px solid #E2E2E6; box-shadow: 0 20px 40px -24px rgba(22,24,42,.25)')
src = src.replace('<section style="position: relative; margin-top: -72px">', '<section style="position: relative; margin-top: 48px">')
src = src.replace('<div style="flex: 1 1 360px; padding-top: 112px">', '<div style="flex: 1 1 360px; padding-top: 24px">')
# Legal: light top instead of aurora strip
lg_a = src.index("legal_body = f'''"); lg_b = src.index("      <span style=\"font-size: 13px; color: #A9AECB\">Legal · Last updated [date]</span>")
src = src[:lg_a] + "legal_body = f'''  <section style=\"background: linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%); border-bottom: 1px solid #EFEFEF\">\n    <div style=\"position: relative; {WRAP}; padding: 72px 32px 48px\">\n" + src[lg_b:]
src = src.replace('<span style="font-size: 13px; color: #A9AECB">Legal · Last updated [date]</span>', '<span style="font-size: 13px; color: #6B6B6B">Legal · Last updated [date]</span>')
src = src.replace('font-size: 64px; line-height: 1.05; color: #FFFFFF">Privacy policy', 'font-size: 56px; line-height: 1.05; color: #141414">Privacy policy')
src = src.replace('background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); font-size: 14px"><span role="tab" aria-selected="true" style="padding: 7px 16px; border-radius: 999px; background: #FFFFFF; color: #12141F">Privacy</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Terms</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Data protection (DPDP)</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Cookies</span>',
                  'background: #FFFFFF; border: 1px solid #E6E6EA; font-size: 14px"><span role="tab" aria-selected="true" style="padding: 7px 16px; border-radius: 999px; background: #16182A; color: #FFFFFF">Privacy</span><span role="tab" style="padding: 7px 16px; color: #5C5C5C">Terms</span><span role="tab" style="padding: 7px 16px; color: #5C5C5C">Data protection (DPDP)</span><span role="tab" style="padding: 7px 16px; color: #5C5C5C">Cookies</span>')
src = src.replace('<nav aria-label="On this page" style="flex: 0 1 260px; position: sticky; top: 96px">', '<nav aria-label="On this page" style="flex: 0 1 260px; position: sticky; top: 96px">', 1)
# skip 404 rebuild (stays full aurora): cut the 404 block out of this run
src = src[:src.index('# ======================= 404 =======================')] + "print('pages3 light ok')\n"
exec(compile(src, 'pages3_light', 'exec'), {'__file__': os.path.join(D, 'pages3.py'), '__name__': 'x'})
for f in ['BookDemo.dc.html', 'Security.dc.html', 'Help.dc.html', 'Legal.dc.html']:
    wr(f, perf(rd(f)))
# Level 1 pages: perf rules only
for f in ['LandingV2.dc.html', 'Login.dc.html', 'Signup.dc.html', 'Otp.dc.html', 'NotFound.dc.html']:
    wr(f, perf(rd(f)))
print('tiers done')
