import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps, landscape
from kit3 import HF, EY, AURTXT, FIELD, LABEL, P
TICK = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
phone = lambda inner, label: f'<div style="flex: none; display: flex; flex-direction: column; align-items: center; gap: 10px"><div style="width: 330px; height: 680px; border-radius: 44px; background: #0B0C12; padding: 10px; box-sizing: border-box; box-shadow: 0 30px 60px -30px rgba(0,0,0,.45)"><div style="position: relative; width: 100%; height: 100%; border-radius: 34px; overflow: hidden; background: #FFFFFF">{inner}</div></div><span style="font-size: 13px; color: #6B6B6B">{label}</span></div>'
menu = f'''<div style="position: absolute; inset: 0; background: #0B0D18; color: #FFFFFF; padding: 22px 20px; display: flex; flex-direction: column">
  <div style="display: flex; justify-content: space-between; align-items: center"><span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 22px; letter-spacing: -0.045em; {AURTXT}">vegham</span><span style="width: 40px; height: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,.18); display: inline-flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></span></div>
  <div style="margin-top: 24px">{''.join(f'<div style="display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,.1); font-family: Inter Tight, sans-serif; font-size: 24px; letter-spacing: -0.03em">{t}<span style="font-size: 15px; color: #8C90A8">→</span></div>' for t in ['Product', 'How it works', 'Pricing', 'Company', 'Help centre'])}</div>
  <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px"><span style="display: flex; align-items: center; justify-content: center; height: 46px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-weight: 500; font-size: 14.5px">Start your free pilot</span><span style="display: flex; align-items: center; justify-content: center; height: 46px; border-radius: 999px; border: 1px solid rgba(255,255,255,.22); font-weight: 500; font-size: 14.5px">Log in</span></div>
</div>'''
cookie = f'''<div style="position: absolute; inset: 0; background: #03050E">{landscape.landscape('st', seed=23)}</div>
<div style="position: absolute; left: 0; right: 0; top: 0; padding: 18px 18px; display: flex; justify-content: space-between; align-items: center"><span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 20px; letter-spacing: -0.045em; {AURTXT}">vegham</span><span style="display: inline-flex; gap: 6px"><span style="height: 32px; padding: 0 12px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 12.5px; display: inline-flex; align-items: center">Log in</span><span style="width: 32px; height: 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,.22)"></span></span></div>
<div style="position: absolute; left: 22px; right: 22px; top: 130px; color: #FFFFFF; font-family: 'Inter Tight', sans-serif; font-size: 34px; line-height: 1.08; letter-spacing: -0.04em">Every customer answered.<br><span style="color: #A9AECB">Every booking made.</span></div>
<div role="dialog" aria-label="Cookies" style="position: absolute; left: 10px; right: 10px; bottom: 10px; padding: 18px; border-radius: 24px; background: #FFFFFF; box-shadow: 0 -10px 40px -10px rgba(0,0,0,.4)">
  <b style="display: block; font-weight: 600; font-size: 15px">Cookies, only if you’re okay with it</b>
  <p style="margin: 6px 0 0; font-size: 13px; color: #5C5C5C; line-height: 1.5">We use essential cookies to run the site. With your OK, we also measure visits to improve it. <a href="#" style="color: #16182A">Cookie policy</a></p>
  <div style="margin-top: 12px; display: flex; gap: 8px"><span style="flex: 1; display: inline-flex; align-items: center; justify-content: center; height: 40px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 13.5px">Accept</span><span style="flex: 1; display: inline-flex; align-items: center; justify-content: center; height: 40px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13.5px">Only essential</span></div>
  <span style="display: block; margin-top: 8px; text-align: center; font-size: 12.5px; color: #6B6B6B">Choose settings</span>
</div>'''
card = lambda title, inner: f'<div style="flex: 1 1 320px; border: 1px solid #ECECF0; border-radius: 28px; background: #FFFFFF; overflow: hidden"><div style="padding: 12px 18px; border-bottom: 1px solid #F0F0F3; font-size: 13px; color: #6B6B6B">{title}</div><div style="padding: 26px">{inner}</div></div>'
ok = lambda t, d, extra='': f'<div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px"><span style="width: 52px; height: 52px; border-radius: 50%; background: #EAF7F0; display: inline-flex; align-items: center; justify-content: center">{TICK}</span><b style="font-weight: 600; font-size: 19px">{t}</b><span style="color: #5C5C5C; font-size: 14.5px">{d}</span>{extra}</div>'
err_field = f'''<div><label style="{LABEL}">Mobile (WhatsApp)</label><div style="display: flex; gap: 8px"><span style="flex: none; display: inline-flex; align-items: center; height: 48px; padding: 0 12px; border: 1px solid #E2E2E6; border-radius: 12px">+91</span><input value="98765 432" aria-invalid="true" style="{FIELD}; border-color: #D92D20; box-shadow: 0 0 0 3px rgba(217,45,32,.1)" /></div><span role="alert" style="display: block; margin-top: 6px; font-size: 13px; color: #B42318">Enter a 10-digit mobile number.</span></div>
  <div style="margin-top: 16px; padding: 12px 14px; border-radius: 12px; background: #FDF2F2; color: #B42318; font-size: 13.5px">Couldn’t send. Check your connection and try again; nothing was lost.</div>'''
cards = ''.join([
    card('Book a demo · booked', ok('You’re booked: Tomorrow, 11:00 AM', 'We’ve sent the details on WhatsApp to +91 98765 43210. Add it to your calendar so you don’t miss it.', '<span style="margin-top: 6px; display: inline-flex; height: 40px; padding: 0 16px; align-items: center; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 14px">Add to calendar</span>')),
    card('Any form · error', err_field),
    card('Newsletter · subscribed', ok('You’re on the list', 'One short email a month. Unsubscribe any time.')),
    card('Careers · notify me', ok('We’ll let you know', 'You’ll get one email when roles open.')),
    card('Contact · sent', ok('Message sent', 'We reply within one working day, usually much sooner.')),
])
body = f'''<div style="padding: 56px 56px 64px; background: #F5F5F7; box-sizing: border-box">
    <h1 style="margin: 0; {HF}; font-size: 40px">Website states</h1>
    <p style="margin: 8px 0 32px; color: #6B6B6B; font-size: 16px">The mobile menu, the cookie banner and what every form shows after you press send.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start">
      {phone(menu, 'Mobile menu (☰ in the header)')}{phone(cookie, 'Cookie banner, first visit')}
      <div style="flex: 1 1 520px; display: flex; flex-wrap: wrap; gap: 16px">{cards}</div>
    </div>
  </div>'''
h = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Website states · Vegham</title>')
open(os.path.join(P, 'SiteStates.dc.html'), 'w').write(h + body + kit3.END.replace('__H__', '1100'))
print('states ok')
