import re, os
D = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(D, '..', 'vegam-ui', 'project')
SI = os.path.join(D, '..', 'si', 'package', 'icons')
def si(name, size=18, color='#5C5C5C'):
    d = re.search(r'd="([^"]+)"', open(os.path.join(SI, name + '.svg')).read()).group(1)
    return f'<svg aria-hidden="true" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{color}"><path d="{d}"></path></svg>'
HF = "font-family: 'Inter Tight', sans-serif"
cols = [
    ('Product', ['Chat receptionist', 'Voice receptionist', 'Bookings and reminders', 'Follow-ups and reviews', 'Team inbox', 'Morning report']),
    ('Channels', ['WhatsApp', 'Phone calls', 'Instagram', 'Messenger', 'Website chat', 'Ad lead forms']),
    ('Resources', ['How it works', 'Pricing', 'Help centre', 'Guides', 'System status', 'What’s new']),
    ('Company', ['About', 'Careers', 'Contact', 'Partners', 'Press']),
    ('Legal', ['Privacy policy', 'Terms of service', 'Data protection (DPDP)', 'Cookie policy', 'Acceptable use']),
]
col_html = ''.join(
    f'<div style="flex: 1 1 140px; min-width: 130px"><h3 style="margin: 0 0 16px; font-size: 13px; font-weight: 500; color: #141414">{t}</h3><ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 11px">'
    + ''.join(f'<li><a href="#" class="vg-flink" style="font-size: 14px; color: #6B6B6B; text-decoration: none">{l}</a></li>' for l in links) + '</ul></div>'
    for t, links in cols)
socials = [('linkedin', 'LinkedIn'), ('x', 'X'), ('instagram', 'Instagram'), ('youtube', 'YouTube'), ('whatsapp', 'WhatsApp')]
soc_html = ''.join(f'<a href="#" aria-label="Vegham on {n}" class="vg-soc" style="display: inline-flex; width: 36px; height: 36px; border-radius: 10px; border: 1px solid #E8E8EC; align-items: center; justify-content: center">{si(k, 16)}</a>' for k, n in socials)
FOOTER = f'''<footer style="border-top: 1px solid #EDEDF0; background: #FFFFFF; overflow: hidden">
    <div style="max-width: 1200px; margin: 0 auto; padding: 72px 32px 0">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 40px 64px; padding-bottom: 56px; border-bottom: 1px solid #EDEDF0">
        <div style="flex: 1 1 320px; max-width: 380px">
          <span style="{HF}; font-weight: 600; font-size: 26px; letter-spacing: -0.045em; color: #16182A">vegham</span>
          <p style="margin: 14px 0 0; font-size: 15px; line-height: 1.6; color: #5C5C5C">The AI front desk that answers, books and follows up for any business, on every channel, day and night.</p>
          <a href="#" class="vg-status" style="margin-top: 20px; display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border: 1px solid #E8E8EC; border-radius: 999px; font-size: 13px; color: #3D3D3D; text-decoration: none"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>All systems normal</a>
        </div>
        <div style="flex: 1 1 380px; max-width: 460px">
          <h3 style="margin: 0; font-size: 15px; font-weight: 500; color: #141414">Tips for running a busier front desk</h3>
          <p style="margin: 6px 0 0; font-size: 14px; color: #6B6B6B">One short email a month. No spam, unsubscribe anytime.</p>
          <form style="margin: 16px 0 0; display: flex; gap: 8px">
            <label for="ft-em" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Email address</label>
            <input id="ft-em" type="email" placeholder="you@business.com" style="flex: 1; min-width: 0; height: 44px; padding: 0 16px; border: 1px solid #E2E2E6; border-radius: 999px; font: inherit; font-size: 14.5px" />
            <button type="submit" style="flex: none; height: 44px; padding: 0 20px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 14.5px; font-weight: 500; cursor: pointer">Subscribe</button>
          </form>
        </div>
      </div>
      <nav aria-label="Footer" style="display: flex; flex-wrap: wrap; gap: 40px 32px; padding: 56px 0">{col_html}</nav>
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; padding: 24px 0; border-top: 1px solid #EDEDF0; font-size: 13.5px; color: #6B6B6B">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 20px">
          <span>© 2026 [Company legal name]. All rights reserved.</span>
          <span style="display: inline-flex; align-items: center; gap: 6px">Made in India 🇮🇳 for businesses everywhere</span>
        </div>
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
          <span style="display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px; border: 1px solid #E8E8EC; border-radius: 10px; color: #3D3D3D"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path></svg>English (India) · ₹ INR<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg></span>
          <span style="display: inline-flex; gap: 8px">{soc_html}</span>
        </div>
      </div>
    </div>
    <div aria-hidden="true" style="max-width: 1240px; margin: 0 auto; padding: 0 20px; {HF}; font-weight: 600; font-size: clamp(120px, 21vw, 300px); line-height: .78; letter-spacing: -0.07em; text-align: center; color: transparent; background: linear-gradient(180deg, #E9E9EE 0%, #FFFFFF 92%); -webkit-background-clip: text; background-clip: text; user-select: none">vegham</div>
  </footer>'''
CSS = '.vg-flink{transition:color .15s}.vg-flink:hover{color:#141414}.vg-soc{transition:background .15s,border-color .15s}.vg-soc:hover{background:#F5F5F7;border-color:#D4D4DA}\n'
for f in ['LandingV2', 'Product', 'HowItWorks', 'Pricing', 'Company']:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    a = s.index('<footer'); b = s.index('</footer>') + len('</footer>')
    s = s[:a] + FOOTER + s[b:]
    if '.vg-flink' not in s.split('</style>')[0]:
        s = s.replace('</style>', CSS + '</style>', 1)
    open(p, 'w').write(s)
    print(f, 'ok')
