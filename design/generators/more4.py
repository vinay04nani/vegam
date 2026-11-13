import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, landscape, comps, marks
from kit3 import P, HF, EY, WRAP, CHECK, AURTXT, line2
rd = lambda f: open(os.path.join(P, f)).read()
def wr(f, s): open(os.path.join(P, f), 'w').write(s)

# ================= TERMS (from the Legal layout) =================
L = rd('Legal.dc.html')
L = L.replace(re.search(r'<title>[^<]*</title>', L).group(0), '<title>Terms and conditions · Vegham</title>', 1)
L = L.replace('color: #141414">Privacy policy</h1>', 'color: #141414">Terms and conditions</h1>', 1)
L = L.replace('<span role="tab" aria-selected="true" style="padding: 7px 16px; border-radius: 999px; background: #16182A; color: #FFFFFF">Privacy</span><span role="tab" style="padding: 7px 16px; color: #5C5C5C">Terms</span>',
              '<span role="tab" style="padding: 7px 16px; color: #5C5C5C">Privacy</span><span role="tab" aria-selected="true" style="padding: 7px 16px; border-radius: 999px; background: #16182A; color: #FFFFFF">Terms</span>', 1)
secs = ['Accepting these terms', 'The service', 'Your account', 'Free pilot, plans and billing', 'Fair use', 'Your data and your customers', 'WhatsApp, Meta and phone rules', 'AI answers and your responsibility', 'Cancelling and ending', 'Liability', 'Governing law', 'Contact us']
toc = ''.join(f'<a href="#" style="display: block; padding: 8px 12px; border-radius: 12px; font-size: 14.5px; color: {"#16182A" if i == 0 else "#5C5C5C"}; {"background: #F1F1F4; font-weight: 500;" if i == 0 else ""} text-decoration: none">{t}</a>' for i, t in enumerate(secs))
blocks = ''.join(f'<section style="padding: 28px 0; border-top: 1px solid #EFEFEF"><h2 style="margin: 0; {HF}; font-size: 28px; letter-spacing: -0.02em">{i+1}. {t}</h2><p style="margin: 12px 0 0; color: #8A8A8A; font-size: 16px; line-height: 1.75">[Terms text for “{t}” to be provided by your lawyer.]</p></section>' for i, t in enumerate(secs))
na = L.index('<nav aria-label="On this page"'); nb = L.index('</nav>', na)
L = L[:na] + L[na:L.index('>', na) + 1] + f'<span style="{EY}; display: block; margin: 0 12px 10px">On this page</span>' + toc + L[nb:]
summ_a = L.index('<b style="font-weight: 600">In short:</b>'); summ_b = L.index('</div>', summ_a)
L = L[:summ_a] + '<b style="font-weight: 600">In short:</b> use Vegham fairly, keep your customers’ trust, and you can cancel any time on monthly plans. Your data stays yours. [Summary to be confirmed by your lawyer.]' + L[summ_b:]
ba = L.index('<section style="padding: 28px 0; border-top: 1px solid #EFEFEF">'); bb = L.index('</article>', ba)
L = L[:ba] + blocks + '\n      ' + L[bb:]
L = re.sub(r'"height":\d+\}', '"height":3450}', L, count=1)
wr('Terms.dc.html', L)

# ================= CAREERS (coming soon, sky strip) =================
def strip_hero(uid, seed, inner):
    return f'''  <section style="position: relative; overflow: hidden; background-color: #03050E">
    <div aria-hidden="true" style="position: absolute; inset: 0">{landscape.landscape(uid, seed=seed, lake=False, ground=False)}<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.1) 45%, rgba(3,5,14,.35) 100%)"></div></div>
    <div style="position: relative; {WRAP}; padding: 160px 32px 96px; text-align: center">{inner}</div>
  </section>
'''
notify = '''<form class="vg-hero" style="animation-delay: .42s; margin: 30px auto 0; max-width: 480px; display: flex; gap: 8px; padding: 6px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px)"><label for="cr-em" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Email address</label><input id="cr-em" type="email" placeholder="you@email.com" style="flex: 1; min-width: 0; height: 44px; padding: 0 16px; border: 0; border-radius: 999px; background: transparent; font: inherit; font-size: 15px; color: #FFFFFF; outline: none" /><button type="submit" style="flex: none; height: 44px; padding: 0 20px; border: 0; border-radius: 999px; background: #FFFFFF; color: #12141F; font: inherit; font-weight: 500; cursor: pointer">Notify me</button></form>
      <p class="vg-hero" style="animation-delay: .5s; margin: 12px 0 0; font-size: 13px; color: #A9AECB">One email when roles open. Nothing else.</p>'''
hero_inner = f'''<span class="vg-hero" style="animation-delay: .05s; display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.06); font-size: 14px; color: #DDE0EE"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #3DD68C"></span>Careers · Coming soon</span>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 26px auto 0; max-width: 900px; {HF}; font-size: 72px; line-height: 1.04; letter-spacing: -0.045em; color: #FFFFFF">We’re not hiring yet.<br><span style="color: #A9AECB">But we will be.</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 22px auto 0; max-width: 600px; font-size: 19px; line-height: 1.65; color: #C9CCDD">We’re building the front desk every business deserves. Leave your email and you’ll be the first to know when we open roles.</p>
      {notify}'''
values = [('Small team, real ownership', 'Every person shapes the product, not just a ticket queue.'), ('Craft matters', 'We sweat the details customers feel: speed, tone, trust.'), ('Customers first', 'We talk to business owners every week, and build for them.'), ('Built in India, for everyone', 'Many languages, every channel, businesses everywhere.')]
vc = ''.join(f'<div class="vg-lift" style="flex: 1 1 250px; padding: 28px; border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF"><span style="display: inline-flex; width: 36px; height: 36px; border-radius: 12px; background: #F5F5F7; align-items: center; justify-content: center; font-size: 13px; font-weight: 600">0{i+1}</span><h3 style="margin: 14px 0 6px; {HF}; font-size: 22px; letter-spacing: -0.02em">{t}</h3><p style="margin: 0; color: #6B6B6B; font-size: 15px">{d}</p></div>' for i, (t, d) in enumerate(values))
teams = ['Engineering', 'Design', 'AI and voice', 'Customer success', 'Sales']
tm = ''.join(f'<span style="display: flex; justify-content: space-between; align-items: center; padding: 18px 4px; border-top: 1px solid #EFEFEF; font-size: 17px">{t}<span style="font-size: 13px; padding: 3px 10px; border-radius: 999px; border: 1px solid #E2E2E6; color: #6B6B6B">Opening soon</span></span>' for t in teams)
careers_body = strip_hero('careers', 79, hero_inner) + f'''
  <section>
    <div style="{WRAP}; padding: 112px 32px 0">
      {kit3.head_note('How we work', 'What working at Vegham', 'will feel like.')}
      <div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 14px">{vc}</div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 112px 32px; display: flex; flex-wrap: wrap; gap: 40px 64px">
      <div style="flex: 1 1 320px"><h2 style="margin: 0; {HF}; font-size: 40px; line-height: 1.1">{line2('Teams we’ll', 'hire for first')}</h2><p style="margin: 14px 0 0; color: #6B6B6B; max-width: 360px">Don’t see your role? Write to us anyway at [careers email]. We read everything.</p></div>
      <div style="flex: 2 1 560px">{tm}</div>
    </div>
  </section>
''' + kit3.cta('Until then, meet<br>the product.', 'See what we’re building, or try it free for 30 days.')
kit3.page('Careers.dc.html', 'Careers · Vegham', careers_body, 2600)
c = rd('Careers.dc.html')
PERF = '\nsection[style*="background-color: #03050E"]{content-visibility:auto;contain-intrinsic-size:auto 640px}\n@media (max-width: 760px){.vga-s1,.vga-s2,.vga-s3,.vga-rays,.vga-tw,.vga-rip,.vg-aur1,.vg-aur2,.vg-curtain{animation:none!important}}\n'
if 'contain-intrinsic-size' not in c: c = c.replace('</style>', PERF + '</style>', 1)
wr('Careers.dc.html', c)

# ================= BRAND BOARD (Aurora) =================
G = 'linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)'
sw = lambda bg, n, hx, dark=False: f'<span style="width: 104px; font-size: 12.5px"><span style="display: block; height: 60px; border-radius: 12px; background: {bg}; border: 1px solid #ECECF0"></span><span style="display: block; margin-top: 6px; font-weight: 500">{n}</span><span style="color: #8A8A8A">{hx}</span></span>'
pal = ''.join([sw('#FFFFFF', 'White', '#FFFFFF'), sw('#F5F5F7', 'Mist', '#F5F5F7'), sw('#ECECF0', 'Line', '#ECECF0'), sw('#6B6B6B', 'Grey text', '#6B6B6B'), sw('#1F1F1F', 'Text', '#1F1F1F'), sw('#16182A', 'Ink', '#16182A'), sw('#12141F', 'Night', '#12141F'), sw('#1F9D6B', 'Status green', '#1F9D6B')])
aur = ''.join(sw(c_, n, c_) for c_, n in [('#10B981', 'Aurora green'), ('#0EA5A4', 'Aurora teal'), ('#3B6CF6', 'Aurora blue'), ('#7C3AED', 'Aurora violet'), ('#DB2777', 'Aurora pink')])
scale = ''.join(f'<div style="display: flex; align-items: baseline; gap: 18px; padding: 10px 0; border-top: 1px solid #F0F0F3"><span style="width: 70px; flex: none; font-size: 12.5px; color: #8A8A8A">{px}px</span><span style="{HF}; font-size: {min(px, 56)}px; line-height: 1.1; {"" if px > 20 else "font-family: Inter, sans-serif; letter-spacing: 0"}">{t}</span></div>' for px, t in [(72, 'Page title'), (48, 'Section title'), (32, 'Card title'), (20, 'Lead text'), (16, 'Body text')])
btn = lambda st, t: f'<span style="display: inline-flex; align-items: center; height: 46px; padding: 0 22px; border-radius: 999px; font-weight: 500; font-size: 15px; {st}">{t}</span>'
mini = lambda kind, title, pages: f'''<div style="flex: 1 1 300px; border: 1px solid #ECECF0; border-radius: 20px; overflow: hidden; background: #FFFFFF">
          <div style="position: relative; height: 150px; overflow: hidden; background: {"#03050E" if kind != "white" else "linear-gradient(180deg, #F7F7F8, #FFFFFF)"}">{landscape.landscape("brand" + kind, seed=83, lake=(kind == "full"), ground=(kind == "full")) if kind != "white" else '<div style="position: absolute; left: 24px; top: 46px; width: 60%; height: 14px; border-radius: 7px; background: #E2E2E6"></div><div style="position: absolute; left: 24px; top: 72px; width: 40%; height: 14px; border-radius: 7px; background: #ECECF0"></div><div style="position: absolute; left: 24px; top: 104px; width: 88px; height: 26px; border-radius: 999px; background: #16182A"></div>'}</div>
          <div style="padding: 16px 18px"><b style="display: block; font-weight: 600">{title}</b><span style="font-size: 13.5px; color: #6B6B6B">{pages}</span></div>
        </div>'''
dos = [('Aurora sits behind content, soft and blurred', True), ('One bold aurora moment per page', True), ('Ink for primary actions, outline for secondary', True), ('Pastel fills or coloured containers', False), ('Glow directly under small text', False), ('Emoji as icons; mixed icon styles', False)]
dd = ''.join(f'<li style="display: flex; gap: 10px; align-items: center; padding: 9px 0; border-top: 1px solid #F0F0F3; font-size: 14.5px">{CHECK if ok else "<span style=\'width: 16px; text-align: center; color: #B42318; font-weight: 600\'>✕</span>"}{t}</li>' for t, ok in dos)
brand = f'''<div style="padding: 56px 64px 72px; background: #FFFFFF; box-sizing: border-box">
    <div style="display: flex; align-items: center; gap: 16px">{marks.mark('ribbon', 'brandhero', 64)}<span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 52px; letter-spacing: -0.045em; {AURTXT}">vegham</span></div>
    <h1 style="margin: 18px 0 0; {HF}; font-size: 40px; letter-spacing: -0.035em">Aurora · the 70 / 20 / 10 rule</h1>
    <p style="margin: 8px 0 0; max-width: 820px; color: #5C5C5C; font-size: 17px">Calm white space carries most of every screen. Ink gives weight and trust. The aurora is the signature: the quiet light of a front desk that keeps working through the night.</p>
    <div aria-label="Colour proportion" style="margin-top: 32px; display: flex; height: 140px; border-radius: 20px; overflow: hidden; border: 1px solid #ECECF0">
      <div style="flex: 70; background: #F5F5F7; padding: 18px 22px; display: flex; flex-direction: column; justify-content: space-between"><span style="font-family: 'Inter Tight', sans-serif; font-size: 32px">70%</span><span style="font-size: 13px; color: #5C5C5C">White and mist · space, cards, text</span></div>
      <div style="flex: 20; background: #16182A; color: #FFFFFF; padding: 18px 22px; display: flex; flex-direction: column; justify-content: space-between"><span style="font-family: 'Inter Tight', sans-serif; font-size: 32px">20%</span><span style="font-size: 13px; color: #A5ABDB">Ink · actions, dark panels</span></div>
      <div style="flex: 10; background: {G}; color: #FFFFFF; padding: 18px 16px; display: flex; flex-direction: column; justify-content: space-between"><span style="font-family: 'Inter Tight', sans-serif; font-size: 32px">10%</span><span style="font-size: 13px">Aurora</span></div>
    </div>
    <div style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 40px 56px">
      <div style="flex: 1 1 560px"><h2 style="margin: 0 0 14px; {EY}">Palette</h2><div style="display: flex; flex-wrap: wrap; gap: 14px">{pal}</div><h2 style="margin: 24px 0 14px; {EY}">Aurora (gradients and glows only)</h2><div style="display: flex; flex-wrap: wrap; gap: 14px">{aur}</div></div>
      <div style="flex: 1 1 440px"><h2 style="margin: 0 0 6px; {EY}">Type</h2><p style="margin: 0 0 8px; font-size: 13.5px; color: #6B6B6B">Inter Tight 400 for headings (tight tracking, two-tone lines) · Inter for everything else</p>{scale}</div>
    </div>
    <div style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 24px 56px">
      <div style="flex: 1 1 440px"><h2 style="margin: 0 0 14px; {EY}">Buttons</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 10px">{btn("background: #16182A; color: #FFFFFF", "Primary")}{btn("border: 1px solid #E2E2E6; color: #1F1F1F", "Secondary")}{btn("background: #EDEDEF; color: #1F1F1F", "Quiet")}</div>
        <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 10px; padding: 16px; border-radius: 20px; background: #12141F">{btn("background: #FFFFFF; color: #12141F", "On dark")}{btn("border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.06); color: #FFFFFF", "Glass")}</div></div>
      <div style="flex: 1 1 440px"><h2 style="margin: 0 0 14px; {EY}">Shape and motion</h2>
        <div style="display: flex; gap: 14px; align-items: flex-end">{''.join(f'<span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #6B6B6B"><span style="width: 80px; height: 64px; border: 1.5px solid #16182A; border-radius: {r}px"></span>{r} px</span>' for r in (12, 20, 28))}<span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; color: #6B6B6B"><span style="width: 120px; height: 40px; border: 1.5px solid #16182A; border-radius: 999px"></span>Pill</span></div>
        <p style="margin: 14px 0 0; font-size: 14px; color: #3D3D3D">One easing curve · reveals 0.6–1 s · aurora drifts 15–30 s · still on phones and for reduced motion.</p></div>
    </div>
    <h2 style="margin: 44px 0 14px; {EY}">Where the aurora goes</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 14px">{mini("full", "1 · Full landscape", "Landing hero, log in, sign up, code screen, 404")}{mini("strip", "2 · Sky strip", "Product, How it works, Company, Careers")}{mini("white", "3 · Clean white", "Pricing, Book a demo, Help, Security, Legal")}</div>
    <p style="margin: 12px 0 0; font-size: 14px; color: #6B6B6B">On every page: aurora in the dark closing panel, the footer wordmark and the logo.</p>
    <div style="margin-top: 36px; display: flex; flex-wrap: wrap; gap: 24px 56px">
      <div style="flex: 1 1 440px"><h2 style="margin: 0 0 6px; {EY}">Do and don’t</h2><ul style="margin: 0; padding: 0; list-style: none">{dd}</ul></div>
      <div style="flex: 1 1 440px"><h2 style="margin: 0 0 14px; {EY}">Logo</h2><div style="display: flex; flex-wrap: wrap; gap: 14px"><span style="display: flex; align-items: center; gap: 12px; padding: 18px 22px; border: 1px solid #ECECF0; border-radius: 20px">{marks.mark('ribbon', 'brandw', 36, tile=None)}<span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 30px; letter-spacing: -0.045em; {AURTXT}">vegham</span></span><span style="display: flex; align-items: center; gap: 12px; padding: 18px 22px; border-radius: 20px; background: #07080F">{marks.mark('ribbon', 'brandd', 36)}<span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 30px; letter-spacing: -0.045em; {AURTXT}">vegham</span></span></div><p style="margin: 10px 0 0; font-size: 13.5px; color: #6B6B6B">Mark: aurora ribbon (option B). Keep clear space of one mark-height around the lockup.</p></div>
    </div>
  </div>'''
h = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Vegham brand system · Aurora</title>')
wr('BrandV2.dc.html', h + brand + kit3.END.replace('__H__', '2100'))
print('more4 ok')
