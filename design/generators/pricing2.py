import os, re
D = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(D, '..', 'vegam-ui', 'project')
p = os.path.join(P, 'Pricing.dc.html'); s = open(p).read()
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.04em"
EY = 'font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B'

# ---------- 1. currency switch ----------
s = s.replace('<input type="radio" name="vg-bill" id="vg-yr" style="position: absolute; opacity: 0" />',
              '<input type="radio" name="vg-bill" id="vg-yr" style="position: absolute; opacity: 0" /><input type="radio" name="vg-cur" id="vg-inr" checked style="position: absolute; opacity: 0" /><input type="radio" name="vg-cur" id="vg-usd" style="position: absolute; opacity: 0" />', 1)
s = s.replace('color: #DDE0EE; font-size: 12px">2 months free</span></label></div>',
              'color: #1E6B47; font-size: 12px">2 months free</span></label></div>\n        <div role="radiogroup" aria-label="Currency" style="display: inline-flex; padding: 4px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E8E8EB; font-size: 14px"><label for="vg-inr" style="padding: 7px 16px; border-radius: 999px">₹ INR</label><label for="vg-usd" style="padding: 7px 16px; border-radius: 999px">$ USD</label></div>', 1)
for inr_m, inr_y, usd_m, usd_y in [('₹2,999', '₹2,499', '$49', '$41'), ('₹7,999', '₹6,666', '$149', '$124'), ('₹19,999', '₹16,666', '$399', '$333')]:
    old = f'<span class="vg-m">{inr_m}</span><span class="vg-y">{inr_y}</span>'
    assert old in s, old
    s = s.replace(old, f'<span class="vg-m vg-inr">{inr_m}</span><span class="vg-y vg-inr">{inr_y}</span><span class="vg-m vg-usd">{usd_m}</span><span class="vg-y vg-usd">{usd_y}</span>', 1)
for inr, usd in [('₹2,999', '$49'), ('₹7,999', '$149'), ('from ₹19,999', 'from $399')]:
    s = s.replace(f'font-weight: 400">{inr}</span></th>', f'font-weight: 400"><span class="vg-inr">{inr}</span><span class="vg-usd">{usd}</span></span></th>', 1)

# ---------- 2. notes under the cards ----------
notes = '''
      <div style="margin-top: 28px; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; font-size: 14px; color: #5C5C5C">
        <span class="vg-inr">Prices exclude 18% GST</span><span class="vg-usd">Prices in US dollars for customers outside India</span>
        <span>WhatsApp template fees passed on at cost</span>
        <span>Over your allowance? Nothing stops: extra conversations <span class="vg-inr">₹1.5</span><span class="vg-usd">$0.02</span>, extra voice minutes <span class="vg-inr">₹6</span><span class="vg-usd">$0.08</span></span>
      </div>'''
cards_start = s.index('<div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 16px; text-align: left; align-items: stretch">')
hero_end = s.index('  </section>', cards_start)
close = s.rindex('    </div>\n', cards_start, hero_end)  # end of the WRAP div
s = s[:close] + notes + '\n' + s[close:]

# ---------- 3. working Quick maths ----------
qa = s.index('  <section>\n    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 0">')
qb = s.index('  </section>', qa) + len('  </section>\n')
vals = [(500, '₹500'), (1000, '₹1,000'), (1500, '₹1,500'), (3000, '₹3,000')]
miss = [2, 5, 10, 20]
def inr(n):
    n = int(round(n / 500.0) * 500)
    s_ = str(n); last3 = s_[-3:]; rest = s_[:-3]
    parts = []
    while len(rest) > 2: parts.insert(0, rest[-2:]); rest = rest[:-2]
    if rest: parts.insert(0, rest)
    return '₹' + (','.join(parts) + ',' + last3 if parts else last3)
pill = lambda name, i, label, checked: f'<input type="radio" name="{name}" id="{name}{i}"{" checked" if checked else ""} style="position: absolute; opacity: 0" /><label for="{name}{i}" class="vg-qpill" style="padding: 8px 16px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; font-size: 14.5px; cursor: pointer">{label}</label>'
vrow = ''.join(pill('vg-qv', i, l, i == 2) for i, (_, l) in enumerate(vals))
mrow = ''.join(pill('vg-qm', i, str(m), i == 1) for i, m in enumerate(miss))
results, css = '', ''
for i, (v, _) in enumerate(vals):
    for j, m in enumerate(miss):
        lost = v * m * 4.33
        times = lost / 7999
        cmp = f'That’s about {times:.0f}× what Growth costs.' if times >= 1.5 else ('About the cost of Growth: one saved booking a week covers it.' if times >= 0.7 else 'Even Starter (₹2,999) pays for itself with a few saved bookings.')
        results += f'<span class="vg-qr vg-qr-{i}-{j}" style="display: none"><span style="display: block; font-family: \'Inter Tight\', sans-serif; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">{inr(lost)}</span><span style="display: block; margin-top: 14px; padding-top: 14px; border-top: 1px solid #F0F0F0; font-size: 15px; color: #3D3D3D">{cmp}</span></span>'
        css += f':root:has(#vg-qv{i}:checked):has(#vg-qm{j}:checked) .vg-qr-{i}-{j}{{display:block!important}}\n'
quick = f'''  <section>
    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 0">
      <div style="border-radius: 28px; background: #F6F6F8; padding: 48px; display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: center">
        <div style="flex: 1 1 420px">
          <span style="{EY}">Quick maths</span>
          <h2 style="margin: 12px 0 0; {HF}; font-size: 42px; line-height: 1.1">What is one missed<br>customer worth?</h2>
          <div style="margin-top: 28px; display: flex; flex-direction: column; gap: 22px">
            <div role="radiogroup" aria-label="Average booking value"><span style="display: block; margin-bottom: 10px; font-size: 15px; color: #3D3D3D">Average booking value</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{vrow}</div></div>
            <div role="radiogroup" aria-label="Missed enquiries per week"><span style="display: block; margin-bottom: 10px; font-size: 15px; color: #3D3D3D">Enquiries you miss in a week</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{mrow}</div></div>
          </div>
        </div>
        <div class="vg-float" style="flex: 1 1 320px; background: #FFFFFF; border-radius: 28px; padding: 32px">
          <span style="font-size: 14px; color: #6B6B6B">Walking out of your door each month</span>
          <div style="margin-top: 6px">{results}</div>
          <span style="display: block; margin-top: 12px; font-size: 12px; color: #8A8A8A">Estimate: booking value × missed enquiries × 4.3 weeks. Your numbers will differ.</span>
        </div>
      </div>
    </div>
  </section>

'''
# ---------- 4. plan helper ----------
q = lambda name, i, label, checked=False: f'<input type="radio" name="{name}" id="{name}{i}"{" checked" if checked else ""} style="position: absolute; opacity: 0" /><label for="{name}{i}" class="vg-qpill" style="display: block; padding: 14px 18px; border-radius: 20px; border: 1px solid #E2E2E6; background: #FFFFFF; font-size: 15px; cursor: pointer">{label}</label>'
res = lambda cls, plan, why, btn='Start free pilot': f'<div class="vg-ph {cls}" style="display: none; flex-direction: column; gap: 10px"><span style="font-size: 13px; color: #6B6B6B">We’d suggest</span><span style="font-family: \'Inter Tight\', sans-serif; font-size: 44px; letter-spacing: -0.04em; line-height: 1">{plan}</span><span style="font-size: 15px; color: #3D3D3D">{why}</span><a href="#" style="margin-top: 10px; align-self: flex-start; display: inline-flex; align-items: center; height: 46px; padding: 0 22px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500">{btn}</a></div>'
helper = f'''  <section>
    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 0">
      <div style="display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: flex-start">
        <div style="flex: 1 1 420px">
          <span style="{EY}">Plan helper</span>
          <h2 style="margin: 12px 0 0; {HF}; font-size: 42px; line-height: 1.1">Not sure which plan?<br><span style="color: #8A8A8A">Two quick questions.</span></h2>
          <fieldset style="margin: 28px 0 0; padding: 0; border: 0"><legend style="padding: 0; margin-bottom: 10px; font-size: 15px; color: #3D3D3D">How many locations do you run?</legend><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{q('vg-pl', 1, 'One', True)}{q('vg-pl', 2, 'Two or more')}</div></fieldset>
          <fieldset style="margin: 22px 0 0; padding: 0; border: 0"><legend style="padding: 0; margin-bottom: 10px; font-size: 15px; color: #3D3D3D">What matters most right now?</legend><div style="display: grid; gap: 8px">{q('vg-pg', 1, 'Reply to everyone fast')}{q('vg-pg', 2, 'Answer every call', True)}{q('vg-pg', 3, 'Bring customers back and get paid')}</div></fieldset>
        </div>
        <div style="flex: 1 1 360px; border-radius: 28px; border: 1px solid #E8E8EC; padding: 36px; min-height: 260px; box-sizing: border-box">
          {res('ph-starter', 'Starter', 'AI replies on WhatsApp, missed-call messages and reminders: everything you need to answer fast.')}
          {res('ph-growth', 'Growth', 'Adds an AI voice receptionist that answers your calls, plus Instagram, website chat and follow-ups.')}
          {res('ph-pro', 'Pro', 'For several locations, or when you want AI calls to new leads, payment links and win-back campaigns.', 'Talk to us')}
        </div>
      </div>
    </div>
  </section>

'''
css += ':root:has(#vg-pl2:checked) .ph-pro{display:flex!important}\n'
css += ':root:has(#vg-pl1:checked):has(#vg-pg1:checked) .ph-starter{display:flex!important}\n'
css += ':root:has(#vg-pl1:checked):has(#vg-pg2:checked) .ph-growth{display:flex!important}\n'
css += ':root:has(#vg-pl1:checked):has(#vg-pg3:checked) .ph-pro{display:flex!important}\n'
s = s[:qa] + quick + helper + s[qb:]

# ---------- 5. sticky comparison header ----------
s = s.replace('<div style="margin-top: 40px; overflow-x: auto">', '<div class="vg-cmp" style="margin-top: 40px; overflow-x: auto">', 1)
s = s.replace('<thead><tr style="position: sticky; top: 0; background: #FFFFFF">', '<thead><tr>', 1)

# ---------- 6. fuller FAQ from the real pricing content ----------
src = open('/home/user/vegam/frontend/src/content/pricing.ts').read()
faqs = re.findall(r'q: "([^"]+)",\s*a: "([^"]+)"', src)
pick = ['Which plan should I start with?', 'How does the 30-day pilot work?', 'What counts as an AI conversation?', 'How are voice minutes counted?', 'Who pays WhatsApp\'s fees?', 'Are taxes included?', 'What happens if I go over my allowance?', 'Can I switch plans later?', 'Can I cancel?']
fq = dict(faqs)
faq_html = ''.join(f'<details{" open" if i == 0 else ""} style="border-bottom: 1px solid #EBEBEB; padding: 18px 0"><summary style="font-size: 17px; cursor: pointer">{k}</summary><p style="margin: 10px 0 0; color: #6B6B6B">{fq[k]}</p></details>' for i, k in enumerate(pick) if k in fq)
fa = s.index('<div style="flex: 2 1 560px"><details'); fb = s.index('</details></div>', fa) + len('</details></div>')
s = s[:fa] + '<div style="flex: 2 1 560px">' + faq_html + '</div>' + s[fb:]

CSS = css + '''
:root:has(#vg-usd:checked) .vg-inr{display:none!important}
:root:has(#vg-inr:checked) .vg-usd{display:none!important}
:root:has(#vg-inr:checked) label[for=vg-inr],:root:has(#vg-usd:checked) label[for=vg-usd]{background:#16182A;color:#FFFFFF}
input:checked+label.vg-qpill{background:#16182A!important;color:#FFFFFF;border-color:#16182A!important}
.vg-qpill{transition:background .2s,color .2s,border-color .2s}
.vg-qpill:hover{border-color:#16182A!important}
input:focus-visible+label.vg-qpill{outline:2px solid #3B6CF6;outline-offset:3px}
@media (min-width: 761px){.vg-cmp{overflow:visible!important}.vg-cmp thead th{position:sticky;top:78px;z-index:2;background-color:#FFFFFF;box-shadow:0 1px 0 #EDEDF0}}
'''
s = s.replace('</style>', CSS + '</style>', 1)
m = re.search(r'"height":(\d+)\}', s); s = s[:m.start()] + f'"height":{int(m.group(1)) + 700}}}' + s[m.end():]
open(p, 'w').write(s); print('pricing ok')
