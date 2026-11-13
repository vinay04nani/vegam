import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import landscape
P = os.path.join(D, '..', 'vegam-ui', 'project')
AURTXT = "color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text"
PILL_OLD = '@keyframes vg-pill{to{max-width:900px;margin-top:12px;padding:8px 10px 8px 24px;background:rgba(255,255,255,.78);border-color:#E4E4EA;box-shadow:0 12px 32px -16px rgba(22,24,42,.25);border-radius:999px;'
PILL_NEW = '@keyframes vg-pill{to{max-width:900px;margin-top:12px;padding:8px 10px 8px 24px;background:rgba(10,12,22,.78);border-color:rgba(255,255,255,.12);box-shadow:0 16px 40px -18px rgba(3,5,14,.6);border-radius:999px;'
AUR_HOST = '.vg-aur-host>:not(.vg-aur-layer){position:relative}\n'

MOBILE = '''
@media (max-width: 760px){
  header nav{display:none!important}
  .vg-hdr-in{padding:12px 16px!important;gap:12px!important}
  .vg-hdr-in a[style*="height: 40px"]{height:36px!important;padding:0 14px!important;font-size:14px!important;white-space:nowrap}
  .vg-hdr-in a[style*="height: 40px"]+a[style*="height: 40px"]{display:none!important}
  h1{font-size:42px!important;line-height:1.08!important}
  h2[style*="font-size: 48px"],h2[style*="font-size: 52px"],h2[style*="font-size: 44px"]{font-size:32px!important}
  h3[style*="font-size: 40px"],h3[style*="font-size: 36px"]{font-size:28px!important}
  [style*="padding: 144px 32px"]{padding-top:88px!important;padding-bottom:88px!important}
  [style*="padding: 112px 32px"],[style*="padding: 104px 32px"]{padding-top:72px!important;padding-bottom:72px!important}
  [style*="max-width: 1200px; margin: 0 auto"]{padding-left:20px!important;padding-right:20px!important}
  [style*="padding: 0 32px 112px"]{padding:0 16px 72px!important}
  [style*="padding: 88px 40px"],[style*="padding: 96px 40px"]{padding:56px 22px!important}
  p[style*="font-size: 19px"],p[style*="font-size: 18px"]{font-size:16.5px!important}
  .vg-story-r{display:none!important}
  .vg-step{min-height:0!important;padding:28px 0!important;border-top:1px solid #EFEFEF;opacity:1!important;animation:none!important}
  .vg-stackc,ol li>div{padding:28px 22px!important;min-height:0!important}
  [style*="width: 200px; flex: none; background: #FAFAFB"],[style*="width: 220px; flex: none; background: #FAFAFB"],[style*="width: 300px; flex: none; border-right"]{display:none!important}
  [style*="height: 560px; border-radius: 20px; overflow: hidden"]{height:auto!important}
  [style*="padding: 28px 32px; display: flex; flex-direction: column; gap: 18px"]{padding:18px!important}
  [style*="padding: 44px 48px"]{padding:28px 22px!important}
  footer nav>div{flex:1 1 40%!important}
  footer form{flex-wrap:wrap}
  [style*="min-height: 680px; border-radius: 28px"]{min-height:300px!important;padding:20px!important}
  [style*="min-height: 680px; border-radius: 28px"]>div[style*="max-width: 460px"]{display:none!important}
  [style*="max-width: 1100px; height: 360px"]{height:300px!important}
  section[style*="min-height: 1080px"],section[style*="min-height: 1000px"]{min-height:860px!important}
}
'''

def dark_header(s):
    hs = s.index('<header'); he = s.index('</header>')
    h = s[hs:he]
    h = h.replace('<header style="position: sticky; top: 0; z-index: 40; padding: 0 16px">', '<header style="position: sticky; top: 0; z-index: 40; padding: 0 16px; margin-bottom: -78px">', 1)
    h = h.replace('font-size: 15px; color: #2B2B2B', 'font-size: 15px; color: #D4D7E6')
    h = h.replace('border-bottom: 1.5px solid #141414', 'border-bottom: 1.5px solid #FFFFFF').replace('color: #141414; font-weight: 500; border-bottom', 'color: #FFFFFF; font-weight: 500; border-bottom')
    h = h.replace('background: #16182A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 500">Log in', 'background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in')
    h = h.replace('background: rgba(255,255,255,0.85); border: 1px solid #ECECEC; color: #1F1F1F', 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.2); color: #FFFFFF')
    return s[:hs] + h + s[he:]

def recolor(t):
    for a, b in [('color: #141414', 'color: #FFFFFF'), ('color: #8A8A8A', 'color: #A9AECB'), ('color: #3D3D3D', 'color: #DDE0EE'),
                 ('border-top: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6', 'border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18)'),
                 ('border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6', 'border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18)'),
                 ('color: #6B6B6B', 'color: #9EA3BD'), ('color: #5C5C5C', 'color: #C9CCDD'), ('color: #1F1F1F">Vegham', 'color: #FFFFFF">Vegham'),
                 ('background: #16182A; color: #FFFFFF', 'background: #FFFFFF; color: #12141F'),
                 ('background: #FFFFFF; border: 1px solid #E6E6E6; color: #1F1F1F', 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.22); color: #FFFFFF'),
                 ('color: #16182A">वेग', AURTXT + '">वेग')]:
        t = t.replace(a, b)
    return t

def aurora_top(s, uid, seed, pricing=False):
    he = s.index('</header>')
    a = s.index('<section', he); a_end = s.index('>', a) + 1
    b = s.index('</section>', a)
    open_tag = s[a:a_end]
    new_open = open_tag.replace('style="', 'style="position: relative; overflow: hidden; background-color: #03050E; ' if not pricing else 'style="position: relative; overflow: hidden; ', 1).replace('border-bottom: 1px solid #EFEFEF', 'border-bottom: 0')
    band_h = 'height: 660px' if pricing else 'top: 0; bottom: 0'
    fade = 'linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.1) 40%, rgba(247,247,248,0) 70%, #F7F7F8 100%)' if pricing else 'linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.15) 45%, rgba(3,5,14,.55) 100%)'
    band = f'\n    <div aria-hidden="true" style="position: absolute; left: 0; right: 0; top: 0; {band_h}">{landscape.landscape(uid, seed=seed, lake=not pricing)}<div style="position: absolute; inset: 0; background: {fade}"></div></div>'
    body = s[a_end:b]
    if pricing:
        cut = body.index('<div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 16px; text-align: left; align-items: stretch">')
        body = recolor(body[:cut]) + body[cut:]
    else:
        body = recolor(body)
    body = re.sub(r'<div style="max-width: 1200px; margin: 0 auto; padding: (\d+)px 32px', lambda m: f'<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: {int(m.group(1)) + 80}px 32px', body, count=1)
    return s[:a] + new_open + band + body + s[b:]

def add_css(s, extra):
    head, rest = s.split('</style>', 1)
    for chunk in extra:
        key = chunk.strip().split('{')[0][:40]
        if key not in head:
            head += chunk
    return head + '</style>' + rest

seeds = {'Product': 31, 'HowItWorks': 37, 'Pricing': 41, 'Company': 43}
for f in ['Product', 'HowItWorks', 'Pricing', 'Company']:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    if 'margin-bottom: -78px' not in s:
        s = dark_header(s)
        s = s.replace(PILL_OLD, PILL_NEW)
        s = aurora_top(s, f.lower(), seeds[f], pricing=(f == 'Pricing'))
    s = add_css(s, [landscape.CSS, MOBILE])
    open(p, 'w').write(s); print(f)

# landing: story classes + mobile
p = os.path.join(P, 'LandingV2.dc.html'); s = open(p).read()
s = s.replace('<div style="display: flex; flex-wrap: wrap; gap: 0 72px; timeline-scope: --vg-s1, --vg-s2, --vg-s3, --vg-s4, --vg-s5">', '<div class="vg-story" style="display: flex; flex-wrap: wrap; gap: 0 72px; timeline-scope: --vg-s1, --vg-s2, --vg-s3, --vg-s4, --vg-s5">', 1)
s = s.replace('<div style="flex: 1 1 480px; min-width: 0">\n          <div style="position: sticky; top: 120px; margin: 40px 0">', '<div class="vg-story-r" style="flex: 1 1 480px; min-width: 0">\n          <div style="position: sticky; top: 120px; margin: 40px 0">', 1)
s = add_css(s, [MOBILE]); open(p, 'w').write(s); print('LandingV2', s.count('vg-story-r'))
for f in ['Login', 'Signup']:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read(); s = add_css(s, [MOBILE]); open(p, 'w').write(s); print(f)
