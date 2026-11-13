import re, os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import comps
P = os.path.join(D, '..', 'vegam-ui', 'project')
NAV_CSS = '@supports (animation-timeline: view()){.vg-navline{animation:vg-navon linear both;animation-timeline:var(--tl);animation-range:cover 0% cover 100%}}\n'

def add_css(s):
    if 'vg-linein' in s.split('</style>')[0]: return s
    return s.replace('</style>', comps.SCROLL_CSS + NAV_CSS + '</style>', 1)

def balanced(x):
    return x.count('<span') == x.count('</span>')

def mask_h2(s):
    def fix(m):
        attrs, inner = m.group(1), m.group(2)
        if 'vg-line' in inner or '<br>' not in inner: return m.group(0)
        parts = inner.split('<br>')
        if not all(balanced(p) for p in parts): return m.group(0)
        attrs = attrs.replace(' class="vg-rv"', '')
        return f'<h2{attrs}>{comps.masked_heading(inner)}</h2>'
    return re.sub(r'<h2([^>]*)>(.*?)</h2>', fix, s, flags=re.S)

def sticky_header(s, nav_tl=None):
    a = s.index('<header'); b = s.index('</header>') + len('</header>')
    h = s[a:b]
    h = re.sub(r'<header style="[^"]*">', '<header style="position: sticky; top: 0; z-index: 40; padding: 0 16px">', h, count=1)
    h = h.replace('<div style="max-width: 1200px; margin: 0 auto; padding: 18px 32px;', '<div class="vg-hdr-in" style="max-width: 1200px; margin: 0 auto; padding: 18px 32px; border: 1px solid transparent; box-sizing: border-box;', 1)
    if nav_tl:
        for label, tl in nav_tl.items():
            old = f'<a href="#" style="text-decoration: none">{label}</a>'
            if old in h:
                h = h.replace(old, f'<a href="#" style="position: relative; text-decoration: none">{label}<span aria-hidden="true" class="vg-navline" style="position: absolute; left: 0; right: 0; bottom: -6px; height: 1.5px; background: #16182A; opacity: 0; --tl: {tl}"></span></a>', 1)
    return s[:a] + h + s[b:], h, (a, b)

# ---------------- landing ----------------
p = os.path.join(P, 'LandingV2.dc.html'); s = open(p).read()
if 'vg-hdr-in' not in s:
    _, h, (a, b) = sticky_header(s, {'Product': '--vg-sec-product', 'How it works': '--vg-sec-how', 'Pricing': '--vg-sec-pricing'})
    s = s[:a] + s[b:]  # remove original from hero
    bar_end = s.index('</div>', s.index('class="vg-bar"')) + len('</div>')
    s = s[:bar_end] + '\n  ' + h + s[bar_end:]
    root = '<div style="font-family: Inter, system-ui, sans-serif; color: #1F1F1F; background: #FFFFFF; font-size: 16px; line-height: 1.6">'
    assert root in s
    s = s.replace(root, root[:-2] + '; timeline-scope: --vg-sec-product, --vg-sec-how, --vg-sec-pricing">', 1)
# sticky story replaces numbered cards section
a = s.find('  <!-- What it does: numbered expanding cards -->')
if a != -1:
    b = s.index('</section>', a) + len('</section>')
    story = f'''  <!-- Sticky product story -->
  <section style="view-timeline-name: --vg-sec-product">
    <div style="max-width: 1200px; margin: 0 auto; padding: 112px 32px 72px">
      <div style="text-align: center">
        <span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B">What Vegham does</span>
        <h2 style="margin: 14px 0 0; font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 48px; line-height: 1.08; letter-spacing: -0.04em">A front desk<br><span style="color: #8A8A8A">that never sleeps.</span></h2>
      </div>
      <div style="margin-top: 24px">{comps.sticky_story()}</div>
    </div>
  </section>'''
    s = s[:a] + story + s[b:]
# stacking cards in dark section
g = s.find('<div class="vg-rv" style="margin-top: 64px; display: flex; flex-wrap: wrap; gap: 0 40px">')
if g != -1:
    ge = s.index('\n      </div>', g) + len('\n      </div>')
    W = lambda k: comps.logo(k, 22)
    tile = lambda ic, t: f'<span style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 14px; background: #FFFFFF; color: #16182A; font-size: 14px; font-weight: 500">{ic}{t}<span style="margin-left: auto; width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span></span>'
    v1 = '<div style="width: 100%; max-width: 420px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px">' + tile(W('whatsapp'), 'WhatsApp') + tile(comps.PHONE.format(s=20, c='#16182A'), 'Phone line') + tile(W('instagram'), 'Instagram') + tile(W('messenger'), 'Messenger') + tile(comps.GLOBE.format(s=20, c='#16182A'), 'Website') + tile(W('meta'), 'Meta ads') + '</div>'
    v2 = '''<div style="width: 100%; max-width: 420px; border-radius: 18px; background: #FFFFFF; color: #16182A; padding: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 14px">
              <span style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #E6E6EA; border-radius: 12px; color: #5C5C5C"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"></path><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"></path></svg>nilaandco.in<span style="margin-left: auto; font-size: 12.5px; color: #16182A; font-weight: 500">Read 24 pages ✓</span></span>
              <span style="display: flex; justify-content: space-between; padding: 8px 2px; border-bottom: 1px solid #F0F0F3"><span>First visit</span><b style="font-weight: 600">₹1,500</b></span>
              <span style="display: flex; justify-content: space-between; padding: 8px 2px; border-bottom: 1px solid #F0F0F3"><span>Group of 8</span><b style="font-weight: 600">₹1,200 each</b></span>
              <span style="display: flex; justify-content: space-between; padding: 8px 2px"><span>Open</span><b style="font-weight: 600">Mon–Sat · 10 AM–8 PM</b></span>
            </div>'''
    v3 = '<div style="width: 100%; max-width: 420px; border-radius: 18px; background: #FFFFFF; color: #16182A; padding: 22px; display: flex; flex-direction: column; gap: 14px"><span style="display: flex; justify-content: space-between; font-size: 13px; color: #8A8A8A"><span>Morning report · 8:00 AM</span><span>Sample</span></span><div style="display: flex; gap: 28px">' + ''.join(f'<span><span style="display: block; font-family: \'Inter Tight\', sans-serif; font-size: 38px; line-height: 1; letter-spacing: -0.04em">{n}</span><span style="display: block; margin-top: 6px; font-size: 13px; color: #6B6B6B">{l}</span></span>' for n, l in [(14, 'replied'), (6, 'booked'), (2, 'calls saved')]) + '</div></div>'
    cards = comps.stack_cards([
        ('01', 'Connect your channels', 'WhatsApp, phone, Instagram and your website, in a few guided steps. Keep the numbers customers already know.', v1),
        ('02', 'Teach it your business', 'Paste your website or add services, prices and hours. Test it yourself before it goes live.', v2),
        ('03', 'Wake up to bookings', 'Vegham answers every customer. Each morning a WhatsApp shows what came in and what needs you.', v3),
    ])
    s = s[:g] + cards + s[ge:]
s = s.replace('<section class="vg-zoom" style="background: #12141F; color: #FFFFFF; position: relative; overflow: hidden">', '<section class="vg-zoom" style="background: #12141F; color: #FFFFFF; position: relative; overflow: clip; view-timeline-name: --vg-sec-how">', 1)
s = s.replace('  <!-- Pricing -->\n  <section style="background: #F7F7F8">', '  <!-- Pricing -->\n  <section style="background: #F7F7F8; view-timeline-name: --vg-sec-pricing">', 1)
s = add_css(mask_h2(s))
open(p, 'w').write(s)

# ---------------- other pages: sticky pill header + masked headings ----------------
for f in ['Product', 'HowItWorks', 'Pricing', 'Company']:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    if 'vg-hdr-in' not in s:
        s, _, _ = sticky_header(s)
    s = add_css(mask_h2(s))
    open(p, 'w').write(s)
print('done')
