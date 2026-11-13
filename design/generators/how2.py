import os, re
D = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(D, '..', 'vegam-ui', 'project')
p = os.path.join(P, 'HowItWorks.dc.html'); s = open(p).read()
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.04em"
EY = 'font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B'
CHECK = '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
def mh(a, b):
    return f'<span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block">{a}</span></span><span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block"><span style="color: #8A8A8A">{b}</span></span></span>'

# ---------- 1. Day 1 -> Day 30 timeline (replaces the 4 steps) ----------
miles = [
    ('Day 1', 'About 1 hour', 'Connect and teach', 'Link WhatsApp, your phone line and Instagram. Paste your website or add services, prices and hours.', ['Guided steps, or we do it with you on a call', 'Keep the numbers customers know']),
    ('Day 1', '15 minutes', 'Test it yourself', 'Chat with your assistant and call it. Fix any answer in one click; it learns straight away.', ['Practice chat and test call', 'Choose when it hands over to you']),
    ('Day 2', 'Goes live', 'Your front desk answers', 'Vegham starts replying to real customers, day and night. You get the first morning report the next day.', ['Every chat and call in one inbox', 'Step in any time']),
    ('Days 2–7', 'Baseline week', 'We measure where you started', 'Replies, missed calls and bookings, recorded so you can see the difference clearly.', ['No extra work for you']),
    ('Days 8–29', 'Pilot', 'Vegham runs your front desk', 'Bookings, reminders and follow-ups happen on their own. A weekly summary shows what it won you.', ['Morning report at 8 AM', 'Weekly results summary']),
    ('Day 30', 'Your call', 'Choose a plan, or stop', 'Look at the results and decide. Nothing is charged without your say.', ['Export your data any time']),
]
items = ''
for i, (day, chip, t, d, pts) in enumerate(miles):
    last = i == len(miles) - 1
    line = '' if last else '<span aria-hidden="true" style="position: absolute; left: 23px; top: 56px; bottom: -8px; width: 2px; background: #EDEDF0"><span class="vg-progress" style="position: absolute; inset: 0; background: #16182A"></span></span>'
    li = ''.join(f'<li style="display: flex; gap: 8px; align-items: center">{CHECK}{x}</li>' for x in pts)
    items += f'''<div class="vg-rv" style="position: relative; display: flex; gap: 28px; padding-bottom: 48px">
        {line}
        <span style="flex: none; position: relative; width: 48px; height: 48px; border-radius: 50%; background: {"#16182A" if i in (0, 5) else "#FFFFFF"}; border: 1px solid {"#16182A" if i in (0, 5) else "#E2E2E6"}; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; color: {"#FFFFFF" if i in (0, 5) else "#16182A"}">{i + 1}</span>
        <div style="flex: 1; display: flex; flex-wrap: wrap; gap: 12px 48px; padding-top: 6px">
          <div style="flex: 0 0 160px"><span style="display: block; font-family: 'Inter Tight', sans-serif; font-size: 22px; letter-spacing: -0.02em">{day}</span><span style="display: inline-block; margin-top: 6px; padding: 3px 10px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 12.5px; color: #3D3D3D">{chip}</span></div>
          <div style="flex: 1 1 420px"><h3 style="margin: 0; {HF}; font-size: 28px; line-height: 1.15">{t}</h3><p style="margin: 8px 0 0; max-width: 560px; font-size: 16.5px; color: #5C5C5C">{d}</p><ul style="margin: 14px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px 20px; font-size: 14.5px; color: #3D3D3D">{li}</ul></div>
        </div>
      </div>'''
timeline = f'''  <section>
    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 56px">
      <div style="max-width: 680px; margin-bottom: 56px">
        <span style="{EY}">From sign-up to results</span>
        <h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">{mh('Day 1 to Day 30,', 'step by step.')}</h2>
        <p style="margin: 16px 0 0; font-size: 18px; color: #5C5C5C">What happens, how long it takes, and what you need to do. Most of it, nothing.</p>
      </div>
      {items}
    </div>
  </section>
'''
a = s.index('  <section>\n    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 48px">')
b = s.index('  </section>', a) + len('  </section>\n')
s = s[:a] + timeline + s[b:]

# ---------- 2. Interactive checklist inside the dark aurora section ----------
checks = [
    ('Your business WhatsApp number', 'Your current one often works. We check during setup.'),
    ('Access to your Facebook business page', 'We connect WhatsApp through Meta in about 10 minutes.'),
    ('Your phone line, or call forwarding', 'So the AI can answer calls (Growth and Pro).'),
    ('Services and prices', 'Or just your website link: Vegham reads it for you.'),
    ('Opening hours and holidays', 'So it never books you when you’re closed.'),
    ('Who should be alerted', 'The person who gets chats the AI hands over.'),
]
ck = ''.join(f'''<label style="display: flex; gap: 14px; align-items: flex-start; padding: 16px 18px; border-radius: 20px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); cursor: pointer"><input type="checkbox" class="vg-ckbox" style="flex: none; margin: 3px 0 0; width: 18px; height: 18px; accent-color: #5EEAD4" /><span><span style="display: block; font-size: 16px; color: #FFFFFF">{t}</span><span style="display: block; margin-top: 2px; font-size: 14px; color: #9EA3BD">{d}</span></span></label>''' for t, d in checks)
dark_inner = f'''<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px">
      <div class="vg-ck" style="display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: flex-start; counter-reset: vgdone">
        <div style="flex: 1 1 360px">
          <span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8C90A8">Before you start</span>
          <h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08"><span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block">Six things to have</span></span><span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block"><span style="color: #8C90A8">ready.</span></span></span></h2>
          <p style="margin: 16px 0 0; max-width: 420px; font-size: 17px; color: #A3A7BD">Tick them off as you go. Don’t have one yet? We help with each during setup.</p>
          <div style="margin-top: 28px; display: flex; flex-direction: column; gap: 10px">
            <span class="vg-ckcount" style="font-family: 'Inter Tight', sans-serif; font-size: 40px; letter-spacing: -0.03em; color: #FFFFFF"></span>
            <span class="vg-ckready" style="display: none; align-items: center; gap: 8px; align-self: flex-start; padding: 8px 14px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 14px; font-weight: 500">✓ You’re ready to go live</span>
            <a href="#" style="align-self: flex-start; margin-top: 8px; display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); color: #FFFFFF; text-decoration: none; font-size: 14.5px"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="7" rx="1"></rect></svg>Print this checklist</a>
          </div>
        </div>
        <div style="flex: 1 1 480px; display: flex; flex-direction: column; gap: 10px">{ck}</div>
      </div>
    </div>'''
da = s.index('<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px">\n      <span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8C90A8">The 30-day pilot</span>')
db = s.index('  </section>', da)
s = s[:da] + dark_inner + '\n' + s[db:]

# ---------- 3. Setup FAQ (before the closing panel) ----------
src = open('/home/user/vegam/frontend/src/content/pricing.ts').read()
fq = dict(re.findall(r'q: "([^"]+)",\s*a: "([^"]+)"', src))
faq = [('How long does setup take?', 'About an hour of your time on Day 1. Connecting WhatsApp needs Meta’s approval, which is often quick but can take up to a few days.'),
       ('Do I need technical skills?', 'No. Every step is guided, and we can do it with you on a call.'),
       ('Do I need a new WhatsApp number?', fq.get('Do I need a new WhatsApp number?', '')),
       ('Will customers know they’re talking to an AI?', fq.get("Will customers know they're talking to an AI?", '')),
       ('Does Vegham make up answers?', fq.get('Does Vegham make up answers?', '')),
       ('What happens after the 30 days?', 'You choose a plan, or stop. Nothing is charged without your say, and you can export your data.')]
faq_html = ''.join(f'<details{" open" if i == 0 else ""} style="border-bottom: 1px solid #EBEBEB; padding: 18px 0"><summary style="font-size: 17px; cursor: pointer">{q}</summary><p style="margin: 10px 0 0; color: #6B6B6B">{a}</p></details>' for i, (q, a) in enumerate(faq) if a)
faq_sec = f'''  <section>
    <div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 0; display: flex; flex-wrap: wrap; gap: 40px 64px">
      <h2 style="flex: 1 1 300px; margin: 0; {HF}; font-size: 48px; line-height: 1.08">{mh('Setup', 'questions')}</h2>
      <div style="flex: 2 1 560px">{faq_html}</div>
    </div>
  </section>
'''
c = s.index('  <div style="height: 112px"></div>\n  <section style="padding: 0 32px 112px">')
s = s[:c] + faq_sec + s[c:]
CSS = '''
.vg-ckbox:checked{counter-increment:vgdone}
.vg-ckcount::after{content:counter(vgdone) " of 6 ready"}
.vg-ck:not(:has(.vg-ckbox:not(:checked))) .vg-ckready{display:inline-flex!important}
label:has(.vg-ckbox:checked){background:rgba(94,234,212,.08)!important;border-color:rgba(94,234,212,.35)!important}
'''
s = s.replace('</style>', CSS + '</style>', 1)
m = re.search(r'"height":(\d+)\}', s); s = s[:m.start()] + f'"height":{int(m.group(1)) + 900}}}' + s[m.end():]
open(p, 'w').write(s); print('how ok')
