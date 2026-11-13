"""Remove pastel fills / colour glows from the site designs and add professional scroll effects to the landing page."""
import re, os, sys
D = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(D, '..', 'vegam-ui', 'project')
sys.path.insert(0, D)
import comps

BG = ['#E9F7EF', '#FFF1E6', '#EFEEFF', '#E7F3FB', '#FFF7DA', '#FCEBF1', '#EEF0FF', '#E3F1D8', '#FFF0E3', '#FCE8F0', '#FFF6D6',
      '#E7F8EE', '#E5F2F4', '#F4F5FF', '#FAFAFF', '#FDECEC', '#FFF3EA', '#F7F7FB', '#F6F7FF']
FG = ['#1E6B47', '#9A4A0B', '#3B3A9E', '#1D5F86', '#7A5A00', '#9A1F55', '#2A2F91', '#385418', '#9A4100', '#2B2200', '#3D3420', '#B42318']
GLOW = re.compile(r'<div aria-hidden="true" style="position: absolute;[^"]*radial-gradient\(closest-side, rgba\((?:255,122,26|124,140,255)[^"]*"></div>\s*')

def neutralise(s):
    s = GLOW.sub('', s)
    for c in BG: s = s.replace(c, '#F5F5F7')
    for c in FG: s = s.replace(c, '#3D3D3D')
    s = s.replace('linear-gradient(160deg, #EEF0FF 0%, #FFF3EA 100%)', '#F5F5F7')
    s = s.replace('linear-gradient(180deg, #F4F5FF 0%, #FFFFFF 70%)', '#FFFFFF')
    s = s.replace('background: linear-gradient(180deg, #12141F 0%, #1E2240 100%)', 'background: #12141F')
    s = s.replace('color: #FF9A3D', 'color: #8C90A8')  # saffron step numbers on dark
    s = s.replace('box-shadow: 0 -30px 80px -30px rgba(124,140,255,0.25)', 'box-shadow: 0 -30px 80px -30px rgba(0,0,0,0.35)')
    s = s.replace('box-shadow: 0 24px 60px -30px rgba(42,47,145,0.35)', 'box-shadow: 0 24px 60px -30px rgba(22,24,42,0.35)')
    s = s.replace('border: 1px solid #C9CCF5', 'border: 1px solid #16182A')
    # Speed marquee stars: grey
    s = re.sub(r'<span style="color: #(?:FF7A1A|7C8CFF|3DD68C|F472B6|F2C14E)">✦</span>', '<span style="color: #C4C4CC">✦</span>', s)
    return s

def landing(s):
    # 1. remove Without/With section
    a = s.find('  <!-- Without / With -->')
    if a != -1:
        b = s.index('  <!-- Dark section', a)
        s = s[:a] + s[b:]
    # 2. hero entrance (on load)
    hero = [('<a href="#" style="display: inline-flex; align-items: center; gap: 10px; padding: 5px 14px 5px 5px;', 0.05),
            ("<h1 style=\"margin: 30px auto 0;", 0.15),
            ('<p style="margin: 26px auto 0; max-width: 620px;', 0.3),
            ('<div style="margin-top: 34px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">', 0.42),
            ('<div style="margin-top: 22px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px;', 0.54)]
    for tag, d in hero:
        if tag in s and 'vg-hero' not in s[s.index(tag) - 40:s.index(tag) + len(tag) + 40]:
            t2 = tag.replace(' style="', f' class="vg-hero" style="animation-delay: {d}s; ', 1)
            s = s.replace(tag, t2, 1)
    # 3. scroll progress bar
    root = '<div style="font-family: Inter, system-ui, sans-serif; color: #1F1F1F; background: #FFFFFF; font-size: 16px; line-height: 1.6">'
    if 'vg-bar' not in s.split('</style>', 1)[1]:
        s = s.replace(root, root + '\n  <div aria-hidden="true" class="vg-bar" style="position: fixed; left: 0; top: 0; z-index: 50; width: 100%; height: 2px; background: #16182A; transform: scaleX(0); transform-origin: left"></div>', 1)
    # 4. manifesto word reveal after channels strip
    if 'vg-wd' not in s.split('</style>', 1)[1]:
        text = 'Every message answered. Every call picked up. Every customer followed up. Your front desk, finally never off duty.'
        words = text.split(' ')
        n = len(words)
        spans = ' '.join(f'<span class="vg-wd" style="color: #141414; animation-range: cover {10 + i * 40 / n:.1f}% cover {14 + i * 40 / n:.1f}%">{w}</span>' for i, w in enumerate(words))
        manifesto = f'''  <!-- Manifesto: words fill in as you scroll -->
  <section>
    <div style="max-width: 1040px; margin: 0 auto; padding: 140px 32px">
      <p style="margin: 0; font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 56px; line-height: 1.15; letter-spacing: -0.035em">{spans}</p>
    </div>
  </section>

'''
        s = s.replace('  <!-- What it does: numbered expanding cards -->', manifesto + '  <!-- What it does: numbered expanding cards -->', 1)
    # 5. reveal headings and blocks
    body_start = s.index('</style>')
    head, body = s[:body_start], s[body_start:]
    body = re.sub(r'<h2 style="', '<h2 class="vg-rv" style="', body)
    for tag in ['<div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 8px; min-height: 480px">',
                '<div style="margin-top: 64px; display: flex; flex-wrap: wrap; gap: 0 40px">',
                '<div style="margin-top: 52px; display: flex; flex-wrap: wrap; gap: 16px">',
                '<div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 16px">',
                '<div style="flex: 1 1 440px; min-width: 0; display: flex; align-items: center; justify-content: center">',
                '<div style="flex: 2 1 560px">',
                '<div style="padding: 0 0 112px">']:
        if tag in body:
            body = body.replace(tag, tag.replace('<div style="', '<div class="vg-rv" style="', 1), 1)
    body = body.replace('<section style="background: #12141F; color: #FFFFFF; position: relative; overflow: hidden">', '<section class="vg-zoom" style="background: #12141F; color: #FFFFFF; position: relative; overflow: hidden">', 1)
    body = re.sub(r'(<section style="padding: 0 32px 112px">\s*<div )style="', r'\1class="vg-zoomc" style="', body, count=1)
    s = head + body
    # 6. fresh CSS library
    prod = open(os.path.join(P, 'Product.dc.html')).read()
    s = re.sub(r'<style>.*?</style>', lambda m: re.search(r'<style>.*?</style>', prod, re.S).group(0), s, count=1, flags=re.S)
    # 7. neutral orbit / questions wall: regenerate
    oa = s.find('<div role="img" aria-label="WhatsApp, phone')
    if oa != -1:
        ob = s.index('</div></div>', s.index('Lead replied on Instagram', oa)) + len('</div>')
        s = s[:oa] + comps.orbit(430) + s[ob:]
    qa = s.find('<div style="display: flex; flex-direction: column; gap: 12px; -webkit-mask-image')
    if qa != -1:
        qb = s.index('</div>\n      </div>', qa) + len('</div>\n      </div>')
        s = s[:qa] + comps.questions_wall() + s[qb:]
    return s

for f in ['Product', 'HowItWorks', 'Pricing', 'Company', 'Login', 'Signup', 'LandingV2']:
    p = os.path.join(P, f + '.dc.html')
    s = open(p).read()
    if f == 'LandingV2':
        s = landing(s)
    s = neutralise(s)
    open(p, 'w').write(s)
print('done')
