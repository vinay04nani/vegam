import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from kit3 import *
import landscape, comps

# ======================= BOOK A DEMO =======================
slots = ['Today · 4:00 PM', 'Today · 6:30 PM', 'Tomorrow · 11:00 AM', 'Tomorrow · 3:00 PM', 'Mon · 10:30 AM', 'Mon · 5:00 PM']
slot_html = ''.join(f'<input type="radio" name="vg-slot" id="vg-slot{i}"{" checked" if i == 2 else ""} style="position: absolute; opacity: 0" /><label for="vg-slot{i}" class="vg-qpill" style="padding: 10px 14px; border-radius: 12px; border: 1px solid #E2E2E6; background: #FFFFFF; font-size: 14px; text-align: center; cursor: pointer">{s_}</label>' for i, s_ in enumerate(slots))
helps = ['Replying to every message', 'Answering calls', 'Bookings and reminders', 'Follow-ups and reviews', 'More than one location', 'Something else']
help_html = ''.join(f'<label style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; border: 1px solid #E2E2E6; border-radius: 12px; font-size: 14.5px; cursor: pointer"><input type="checkbox" style="width: 17px; height: 17px; margin: 0; accent-color: #16182A" />{h}</label>' for h in helps)
form = f'''<form style="display: flex; flex-direction: column; gap: 18px">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px"><div><label for="bd-n" style="{LABEL}">Your name</label><input id="bd-n" type="text" placeholder="Vinay Kumar" style="{FIELD}" /></div><div><label for="bd-b" style="{LABEL}">Business name</label><input id="bd-b" type="text" placeholder="Nila &amp; Co" style="{FIELD}" /></div></div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px"><div><label for="bd-p" style="{LABEL}">Mobile (WhatsApp)</label><div style="display: flex; gap: 8px"><span style="flex: none; display: inline-flex; align-items: center; height: 48px; padding: 0 12px; border: 1px solid #E2E2E6; border-radius: 12px; font-size: 15px">+91</span><input id="bd-p" type="tel" placeholder="98765 43210" style="{FIELD}" /></div></div><div><label for="bd-e" style="{LABEL}">Work email <span style="color: #8A8A8A; font-weight: 400">(optional)</span></label><input id="bd-e" type="email" placeholder="you@business.com" style="{FIELD}" /></div></div>
          <fieldset style="margin: 0; padding: 0; border: 0"><legend style="{LABEL}; padding: 0">What would you like help with?</legend><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{help_html}</div></fieldset>
          <fieldset style="margin: 0; padding: 0; border: 0"><legend style="{LABEL}; padding: 0">Pick a time <span style="color: #8A8A8A; font-weight: 400">(30 minutes, IST)</span></legend><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px">{slot_html}</div></fieldset>
          <div><label for="bd-l" style="{LABEL}">Language for the call</label><select id="bd-l" style="{FIELD}"><option>English</option><option>हिन्दी</option><option>తెలుగు</option><option>தமிழ்</option></select></div>
          <button type="submit" style="{BTN_D}; margin-top: 4px">Book my demo</button>
          <p style="margin: 0; font-size: 13px; color: #8A8A8A; text-align: center">We’ll confirm on WhatsApp. No spam, ever.</p>
        </form>'''
expect = [('A quick look at your business', 'How customers reach you today and where enquiries slip through.'), ('A live demo on your channels', 'Watch Vegham answer a WhatsApp, take a call and book a visit.'), ('A clear next step', 'If it fits, we set up your free 30-day pilot. If not, no follow-up pressure.')]
exp = ''.join(f'<li style="display: flex; gap: 16px; padding: 18px 0; border-top: 1px solid #EFEFEF"><span style="flex: none; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; font-size: 13px">{i+1}</span><span><span style="display: block; font-size: 17px; font-weight: 500">{t}</span><span style="display: block; margin-top: 2px; font-size: 15px; color: #6B6B6B">{d}</span></span></li>' for i, (t, d) in enumerate(expect))
demo_body = hero('demo', 51, 'Book a demo', 'See Vegham answer', 'your customers.', 'A 30-minute call with our team, on Google Meet or the phone, in your language.') + f'''
  <section style="position: relative; margin-top: -72px">
    <div style="position: relative; {WRAP}; padding: 0 32px 112px; display: flex; flex-wrap: wrap; gap: 32px 56px; align-items: flex-start">
      <div style="flex: 1.3 1 520px; background: #FFFFFF; border: 1px solid #ECECF0; border-radius: 28px; padding: 36px; box-shadow: 0 40px 80px -40px rgba(22,24,42,.35)">
        <h2 style="margin: 0 0 24px; {HF}; font-size: 30px; letter-spacing: -0.03em">Tell us a little about you</h2>
        {form}
      </div>
      <div style="flex: 1 1 360px; padding-top: 112px">
        <span style="{EY}">On the call</span>
        <ul style="margin: 16px 0 0; padding: 0; list-style: none">{exp}</ul>
        <div style="margin-top: 28px; padding: 22px; border-radius: 20px; background: #F5F5F7; font-size: 15px; color: #3D3D3D">
          <b style="font-weight: 600; color: #1F1F1F">Rather just try it?</b><br>Start your free pilot and set up in a day. <a href="#" style="color: #16182A">Start free pilot →</a>
        </div>
        <div style="margin-top: 14px; padding: 22px; border-radius: 20px; border: 1px solid #ECECF0; font-size: 15px; color: #3D3D3D; display: flex; gap: 12px; align-items: center">{comps.logo('whatsapp', 22)}<span>Prefer WhatsApp? Message us at <b style="font-weight: 600">[WhatsApp number]</b></span></div>
      </div>
    </div>
  </section>
'''
page('BookDemo.dc.html', 'Book a demo · Vegham', demo_body, 1900)

# ======================= SECURITY & PRIVACY =======================
principles = [
    ('Encrypted', 'Conversations and customer details are encrypted in transit and at rest.'),
    ('Separated per business', 'Each business’s data is kept apart. Your team sees only yours.'),
    ('Never sold', 'We never sell your data or use it to train general AI models.'),
    ('Yours to take or delete', 'Export your contacts and conversations at any time, or delete them.'),
    ('Opt-in only', 'Marketing messages go only to customers who agreed. STOP always works, instantly.'),
    ('Honest about AI', 'Vegham says it’s an AI assistant when asked and at the start of every call.'),
]
ico = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg>'
pr = ''.join(f'<div class="vg-lift" style="flex: 1 1 300px; padding: 28px; border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF"><span style="display: inline-flex; width: 40px; height: 40px; border-radius: 12px; background: #F5F5F7; align-items: center; justify-content: center">{ico}</span><h3 style="margin: 16px 0 6px; {HF}; font-size: 22px; letter-spacing: -0.02em">{t}</h3><p style="margin: 0; color: #6B6B6B; font-size: 15px">{d}</p></div>' for t, d in principles)
rows = [('Your business details', 'Name, address, hours, services and prices', 'So the AI answers correctly'),
        ('Customer conversations', 'Messages, call recordings and summaries', 'So your team can see and step in'),
        ('Customer contact details', 'Name, phone number, consent record', 'To reply, remind and respect opt-outs'),
        ('Bookings', 'Date, time, service, staff', 'To fill your calendar and send reminders'),
        ('Your team', 'Names, emails, roles', 'To control who can see what')]
tbl = ''.join(f'<tr style="border-top: 1px solid #EFEFEF"><th scope="row" style="text-align: left; padding: 16px; font-weight: 500">{a}</th><td style="padding: 16px; color: #5C5C5C">{b}</td><td style="padding: 16px; color: #5C5C5C">{c}</td></tr>' for a, b, c in rows)
controls = ['Who on your team can see conversations (roles)', 'How long conversations are kept', 'Call-recording notice wording', 'AI disclosure wording', 'Opt-out list and consent log', 'Download or delete all data']
ctl = ''.join(f'<li style="display: flex; gap: 10px; align-items: center; padding: 14px 0; border-top: 1px solid #2A2D40; color: #DDE0EE">{CHECK.replace("#1F9D6B", "#5EEAD4")}{c}</li>' for c in controls)
sec_body = hero('sec', 57, 'Security and privacy', 'Your customers trust you.', 'We protect that trust.', 'How Vegham handles your business’s and your customers’ data, in plain language.') + f'''
  <section>
    <div style="{WRAP}; padding: 112px 32px">
      {head_note('Our principles', 'Six promises,', 'kept by design.')}
      <div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 14px">{pr}</div>
    </div>
  </section>
  <section style="background: #F7F7F8">
    <div style="{WRAP}; padding: 112px 32px">
      {head_note('What we collect and why', 'Only what’s needed', 'to run your front desk.')}
      <div class="vg-cmp" style="margin-top: 40px; overflow-x: auto; background: #FFFFFF; border: 1px solid #ECECF0; border-radius: 20px">
        <table style="width: 100%; min-width: 640px; border-collapse: collapse; font-size: 15px"><thead><tr><th scope="col" style="text-align: left; padding: 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">Data</th><th scope="col" style="text-align: left; padding: 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">What it includes</th><th scope="col" style="text-align: left; padding: 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">Why</th></tr></thead><tbody>{tbl}</tbody></table>
      </div>
    </div>
  </section>
  <section style="padding: 112px 32px 0">
    <div class="vg-aur-host" style="position: relative; overflow: hidden; max-width: 1136px; margin: 0 auto; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 64px 56px; display: flex; flex-wrap: wrap; gap: 32px 64px">{comps.aurora().replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)}
      <div style="flex: 1 1 340px"><span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #8C90A8">Your controls</span><h2 style="margin: 14px 0 0; {HF}; font-size: 42px; line-height: 1.1">You decide.<br><span style="color: #8C90A8">Always.</span></h2><p style="margin: 14px 0 0; color: #A3A7BD">Every setting below is in your Vegham account, under Settings → Privacy.</p></div>
      <ul style="flex: 1 1 420px; margin: 0; padding: 0; list-style: none">{ctl}</ul>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 112px 32px; display: flex; flex-wrap: wrap; gap: 16px">
      <div style="flex: 1 1 340px; padding: 32px; border: 1px solid #ECECF0; border-radius: 28px"><span style="{EY}">Questions about data</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 28px">Talk to us</h3><p style="margin: 0; color: #6B6B6B">[privacy email]</p></div>
      <div style="flex: 1 1 340px; padding: 32px; border: 1px solid #ECECF0; border-radius: 28px"><span style="{EY}">Found a security issue?</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 28px">Report it responsibly</h3><p style="margin: 0; color: #6B6B6B">[security email]. We reply within [X] working days.</p></div>
      <div style="flex: 1 1 340px; padding: 32px; border: 1px solid #ECECF0; border-radius: 28px"><span style="{EY}">The fine print</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 28px">Policies</h3><p style="margin: 0; color: #6B6B6B"><a href="#" style="color: #16182A">Privacy policy</a> · <a href="#" style="color: #16182A">Terms</a> · <a href="#" style="color: #16182A">Data protection (DPDP)</a></p></div>
    </div>
  </section>
''' + cta()
page('Security.dc.html', 'Security and privacy · Vegham', sec_body, 3800)

# ======================= HELP CENTRE =======================
search = f'''<form class="vg-hero" role="search" style="animation-delay: .4s; margin: 32px auto 0; max-width: 620px; display: flex; align-items: center; gap: 10px; padding: 8px 8px 8px 20px; border-radius: 999px; background: rgba(255,255,255,.95); box-shadow: 0 20px 50px -20px rgba(0,0,0,.6)"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg><label for="hc-q" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Search help</label><input id="hc-q" type="search" placeholder="Search: connect WhatsApp, change hours, invoices…" style="flex: 1; min-width: 0; height: 44px; border: 0; background: transparent; font: inherit; font-size: 15.5px; outline: none" /><button type="submit" style="height: 44px; padding: 0 20px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-weight: 500; cursor: pointer">Search</button></form>'''
cats = [('Getting started', 'Set up, test and go live', 12), ('WhatsApp', 'Connect your number, templates, fees', 9), ('Calls', 'Phone line, forwarding, voice', 8), ('Bookings', 'Calendar, reminders, booking page', 10), ('Billing', 'Plans, invoices, GST', 7), ('Account and security', 'Team, roles, privacy', 6)]
cat = ''.join(f'<a href="#" class="vg-lift" style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 6px; padding: 26px; border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF; text-decoration: none; color: #1F1F1F"><span style="{HF}; font-size: 22px; letter-spacing: -0.02em">{t}</span><span style="color: #6B6B6B; font-size: 15px">{d}</span><span style="margin-top: 8px; font-size: 13px; color: #8A8A8A">{n} articles →</span></a>' for t, d, n in cats)
pop = ['How to connect your WhatsApp Business number', 'Forward missed calls to Vegham', 'Teach Vegham your services and prices', 'Change your opening hours or add a holiday', 'Step into a chat the AI is handling', 'Download an invoice with GST']
popl = ''.join(f'<a href="#" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 4px; border-top: 1px solid #EFEFEF; color: #1F1F1F; text-decoration: none; font-size: 16px">{t}<span aria-hidden="true" style="color: #8A8A8A">→</span></a>' for t in pop)
help_body = hero('help', 61, 'Help centre', 'How can we help?', 'Answers in minutes.', 'Guides for every part of Vegham, written for busy owners.', search) + f'''
  <section>
    <div style="{WRAP}; padding: 104px 32px 0">
      {head_note('Browse by topic', 'Find your', 'answer.')}
      <div style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px">{cat}</div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px; display: flex; flex-wrap: wrap; gap: 40px 64px">
      <div style="flex: 1 1 300px"><h2 style="margin: 0; {HF}; font-size: 40px; line-height: 1.1">{line2('Popular', 'right now')}</h2></div>
      <div style="flex: 2 1 560px">{popl}</div>
    </div>
  </section>
  <section style="padding: 0 32px 112px">
    <div style="max-width: 1136px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 14px">
      <div style="flex: 1 1 300px; padding: 30px; border-radius: 28px; background: #F5F5F7"><span style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 500">{comps.logo('whatsapp', 22)}WhatsApp us</span><p style="margin: 8px 0 0; color: #6B6B6B">Fastest way to reach the team. [WhatsApp number]</p></div>
      <div style="flex: 1 1 300px; padding: 30px; border-radius: 28px; background: #F5F5F7"><span style="font-size: 18px; font-weight: 500">Email</span><p style="margin: 8px 0 0; color: #6B6B6B">[support email] · We reply within one working day.</p></div>
      <div style="flex: 1 1 300px; padding: 30px; border-radius: 28px; background: #16182A; color: #FFFFFF"><span style="font-size: 18px; font-weight: 500">Book a setup call</span><p style="margin: 8px 0 14px; color: #C3C6DA">We’ll set it up with you, screen to screen.</p><a href="#" style="display: inline-flex; height: 42px; align-items: center; padding: 0 18px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500">Pick a time</a></div>
    </div>
  </section>
'''
page('Help.dc.html', 'Help centre · Vegham', help_body, 2700)

# ======================= LEGAL (layout) =======================
secs = ['Who we are', 'What we collect', 'How we use it', 'Who we share it with', 'How long we keep it', 'Your rights', 'Children', 'Changes to this policy', 'Contact us']
toc = ''.join(f'<a href="#" style="display: block; padding: 8px 12px; border-radius: 12px; font-size: 14.5px; color: {"#16182A" if i == 0 else "#5C5C5C"}; {"background: #F1F1F4; font-weight: 500;" if i == 0 else ""} text-decoration: none">{t}</a>' for i, t in enumerate(secs))
blocks = ''.join(f'<section style="padding: 28px 0; border-top: 1px solid #EFEFEF"><h2 style="margin: 0; {HF}; font-size: 28px; letter-spacing: -0.02em">{i+1}. {t}</h2><p style="margin: 12px 0 0; color: #8A8A8A; font-size: 16px; line-height: 1.75">[Policy text for “{t}” to be provided by your lawyer.]</p></section>' for i, t in enumerate(secs))
legal_body = f'''  <section style="position: relative; overflow: hidden; background-color: #03050E; min-height: 380px">
    <div aria-hidden="true" style="position: absolute; inset: 0">{landscape.landscape('legal', seed=67, lake=False)}<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.6), rgba(3,5,14,.75))"></div></div>
    <div style="position: relative; {WRAP}; padding: 160px 32px 64px">
      <span style="font-size: 13px; color: #A9AECB">Legal · Last updated [date]</span>
      <h1 style="margin: 12px 0 0; {HF}; font-size: 64px; line-height: 1.05; color: #FFFFFF">Privacy policy</h1>
      <div role="tablist" aria-label="Policies" style="margin-top: 24px; display: inline-flex; flex-wrap: wrap; gap: 4px; padding: 4px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); font-size: 14px"><span role="tab" aria-selected="true" style="padding: 7px 16px; border-radius: 999px; background: #FFFFFF; color: #12141F">Privacy</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Terms</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Data protection (DPDP)</span><span role="tab" style="padding: 7px 16px; color: #DDE0EE">Cookies</span></div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 64px 32px 112px; display: flex; flex-wrap: wrap; gap: 32px 64px; align-items: flex-start">
      <nav aria-label="On this page" style="flex: 0 1 260px; position: sticky; top: 96px"><span style="{EY}; display: block; margin: 0 12px 10px">On this page</span>{toc}</nav>
      <article style="flex: 1 1 560px; max-width: 760px">
        <div style="padding: 18px 20px; border-radius: 20px; background: #F5F5F7; font-size: 15px; color: #3D3D3D"><b style="font-weight: 600">In short:</b> we collect only what’s needed to run your front desk, never sell it, and you can export or delete it any time. [Summary to be confirmed by your lawyer.]</div>
        {blocks}
      </article>
    </div>
  </section>
'''
page('Legal.dc.html', 'Privacy policy · Vegham', legal_body, 2400)

# ======================= 404 =======================
nf_body = f'''  <section style="position: relative; overflow: hidden; background-color: #03050E; min-height: 900px; display: flex; align-items: center">
    <div aria-hidden="true" style="position: absolute; inset: 0">{landscape.landscape('nf', seed=71)}<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.35) 0%, rgba(3,5,14,.1) 50%, rgba(3,5,14,.7) 100%)"></div></div>
    <div style="position: relative; {WRAP}; width: 100%; padding: 120px 32px; text-align: center">
      <span class="vg-hero" style="animation-delay: .05s; display: block; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 200px; line-height: .9; letter-spacing: -0.06em; {AURTXT}">404</span>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 18px 0 0; {HF}; font-size: 48px; line-height: 1.1; color: #FFFFFF">Lost under the northern lights.</h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 16px auto 0; max-width: 520px; font-size: 18px; color: #C9CCDD">This page doesn’t exist, or it moved. Your front desk, though, is still answering.</p>
      <div class="vg-hero" style="animation-delay: .42s; margin-top: 30px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="#" style="{BTN_W}">Back to home</a><a href="#" style="{BTN_G}">Visit the help centre</a></div>
    </div>
  </section>
'''
page('NotFound.dc.html', 'Page not found · Vegham', nf_body, 900, footer=False)
print('pages3 ok')
