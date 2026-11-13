import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import comps, marks
from kit3 import HF, EY, WRAP, CHECK, AURTXT, FIELD, LABEL, line2
P = os.path.join(D, '..', 'vegam-ui', 'project')
T = open(os.path.join(P, 'Help.dc.html')).read()
body_start = T.index('</div>', T.index('class="vg-mpanel"'))  # rough; find end of menu panel properly
def block_end(s, start):
    depth = 0
    for m in re.finditer(r'<(/?)div\b[^>]*?>', s[start:]):
        depth += -1 if m.group(1) else 1
        if depth == 0: return start + m.end()
mp = T.index('<div class="vg-mpanel"'); mp_end = block_end(T, mp)
f_start = T.index('<footer')
PRE, POST = T[:mp_end], T[f_start:]
def page(name, title, body, h):
    s = PRE + '\n' + body + '\n  ' + POST
    s = s.replace(re.search(r'<title>[^<]*</title>', s).group(0), f'<title>{title}</title>', 1)
    s = re.sub(r'"height":\d+\}', f'"height":{h}}}', s, count=1)
    open(os.path.join(P, name), 'w').write(s)
def top(eyebrow, a, b, sub):
    return f'''  <section style="background: linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%); border-bottom: 1px solid #EFEFEF">
    <div style="position: relative; {WRAP}; padding: 88px 32px 72px; text-align: center">
      <span class="vg-hero" style="animation-delay: .05s; display: inline-block; padding: 10px 28px; border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6; font-size: 15px; color: #3D3D3D">{eyebrow}</span>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 26px auto 0; max-width: 900px; {HF}; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">{a}<br><span style="color: #8A8A8A">{b}</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 20px auto 0; max-width: 600px; font-size: 18.5px; color: #3D3D3D">{sub}</p>
    </div>
  </section>
'''
# ================= CONTACT =================
ways = [(comps.logo('whatsapp', 22), 'WhatsApp', 'Fastest. Usually within the hour, 9 AM–9 PM IST.', '[WhatsApp number]'),
        ('<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>', 'Email', 'For anything detailed. We reply within one working day.', '[support email]'),
        ('<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path></svg>', 'Book a demo', 'See Vegham live in 30 minutes, in your language.', 'Pick a time →')]
wc = ''.join(f'<div class="vg-lift" style="flex: 1 1 280px; display: flex; flex-direction: column; gap: 8px; padding: 26px; border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF"><span style="display: inline-flex; width: 44px; height: 44px; border-radius: 12px; background: #F5F5F7; align-items: center; justify-content: center">{ic}</span><b style="margin-top: 6px; font-size: 18px; font-weight: 500">{t}</b><span style="color: #6B6B6B; font-size: 15px">{d}</span><span style="margin-top: 4px; font-weight: 500; color: #16182A">{v}</span></div>' for ic, t, d, v in ways)
topics = ['Sales and pricing', 'Help with my account', 'Partnerships', 'Press', 'Something else']
form = f'''<form style="display: flex; flex-direction: column; gap: 16px">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px"><div><label for="ct-n" style="{LABEL}">Your name</label><input id="ct-n" type="text" style="{FIELD}" /></div><div><label for="ct-c" style="{LABEL}">Email or WhatsApp number</label><input id="ct-c" type="text" style="{FIELD}" /></div></div>
        <div><label for="ct-t" style="{LABEL}">Topic</label><select id="ct-t" style="{FIELD}">{''.join(f'<option>{t}</option>' for t in topics)}</select></div>
        <div><label for="ct-m" style="{LABEL}">Message</label><textarea id="ct-m" rows="5" style="{FIELD}; height: auto; padding: 12px 16px; resize: vertical"></textarea></div>
        <button type="submit" style="align-self: flex-start; height: 50px; padding: 0 26px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-weight: 500; cursor: pointer">Send message</button>
      </form>'''
contact = top('Contact', 'Talk to a person.', 'We’re quick to reply.', 'Questions about Vegham, your account or working together. Pick whatever is easiest.') + f'''
  <section>
    <div style="{WRAP}; padding: 72px 32px 0; display: flex; flex-wrap: wrap; gap: 14px">{wc}</div>
  </section>
  <section>
    <div style="{WRAP}; padding: 72px 32px 112px; display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: flex-start">
      <div style="flex: 1.3 1 520px; padding: 36px; border: 1px solid #ECECF0; border-radius: 28px"><h2 style="margin: 0 0 22px; {HF}; font-size: 30px; letter-spacing: -0.03em">Send us a message</h2>{form}</div>
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 14px">
        <div style="padding: 28px; border-radius: 28px; background: #F5F5F7"><span style="{EY}">Office</span><b style="display: block; margin-top: 10px; font-size: 17px; font-weight: 500">[Company legal name]</b><span style="display: block; margin-top: 4px; color: #6B6B6B">[Registered address]</span></div>
        <div style="padding: 28px; border-radius: 28px; border: 1px solid #ECECF0"><span style="{EY}">Already a customer?</span><span style="display: block; margin-top: 10px; color: #3D3D3D">The fastest help is inside the app: <b style="font-weight: 600">Help → Chat with us</b>.</span><a href="#" style="display: inline-block; margin-top: 10px; color: #16182A">Visit the help centre →</a></div>
      </div>
    </div>
  </section>
'''
page('Contact.dc.html', 'Contact · Vegham', contact, 2000)

# ================= HELP ARTICLE =================
side = [('Getting started', ['Set up Vegham in a day', 'Test your assistant', 'Go live']), ('WhatsApp', ['How to connect your WhatsApp Business number', 'Keep using the WhatsApp Business app', 'Message templates and fees'])]
sb = ''.join(f'<span style="{EY}; display: block; margin: 18px 12px 8px">{g}</span>' + ''.join(f'<a href="#" style="display: block; padding: 8px 12px; border-radius: 12px; font-size: 14.5px; text-decoration: none; {"background: #F1F1F4; color: #16182A; font-weight: 500" if t.startswith("How to connect") else "color: #5C5C5C"}">{t}</a>' for t in items) for g, items in side)
step = lambda n, t, d, shot=None: f'''<div style="display: flex; gap: 18px; padding: 22px 0; border-top: 1px solid #EFEFEF"><span style="flex: none; width: 34px; height: 34px; border-radius: 50%; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600">{n}</span><div style="flex: 1"><h3 style="margin: 4px 0 6px; font-size: 19px; font-weight: 500">{t}</h3><p style="margin: 0; color: #3D3D3D; font-size: 16px; line-height: 1.7">{d}</p>{f'<div role="img" aria-label="{shot}" style="margin-top: 16px; height: 220px; border-radius: 20px; border: 1px dashed #C9C9D1; background: #F7F7F8; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #8A8A8A">[Screenshot: {shot}]</div>' if shot else ''}</div></div>'''
article = f'''  <section>
    <div style="{WRAP}; padding: 40px 32px 112px; display: flex; flex-wrap: wrap; gap: 32px 56px; align-items: flex-start">
      <nav aria-label="Help articles" style="flex: 0 1 260px; position: sticky; top: 96px"><a href="#" style="display: inline-block; margin: 0 12px 8px; color: #5C5C5C; text-decoration: none; font-size: 14px">← Help centre</a>{sb}</nav>
      <article style="flex: 1 1 560px; max-width: 760px">
        <span style="font-size: 13.5px; color: #6B6B6B"><a href="#" style="color: #6B6B6B">Help centre</a> / <a href="#" style="color: #6B6B6B">WhatsApp</a></span>
        <h1 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08; color: #141414">How to connect your WhatsApp Business number</h1>
        <span style="display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 14px; font-size: 14px; color: #6B6B6B"><span>5 min read</span><span>Updated [date]</span><span>Works on every plan</span></span>
        <div style="margin-top: 26px; padding: 18px 20px; border-radius: 20px; background: #F5F5F7; font-size: 15.5px; color: #3D3D3D"><b style="font-weight: 600">Before you start:</b> keep your phone with the WhatsApp number nearby, and access to the Facebook page for your business.</div>
        <div style="margin-top: 22px">
          {step(1, 'Open Channels in Vegham', 'Go to <b style="font-weight: 600">Settings → Channels</b> and choose <b style="font-weight: 600">WhatsApp</b>.', 'the Channels page with WhatsApp highlighted')}
          {step(2, 'Log in with Facebook', 'A Meta window opens. Log in with the account that manages your business page, then pick your business.')}
          {step(3, 'Add your number', 'Enter your WhatsApp Business number and confirm it with the code Meta sends you.', 'the Meta number confirmation step')}
          {step(4, 'Check it’s connected', 'Back in Vegham you’ll see <b style="font-weight: 600">WhatsApp · Connected</b>. Send a test message from another phone and watch it reply.')}
        </div>
        <div style="margin-top: 8px; padding: 18px 20px; border-radius: 20px; border: 1px solid #ECECF0; display: flex; gap: 12px; font-size: 15px; color: #3D3D3D"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16182A" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v5h1"></path></svg><span><b style="font-weight: 600">Good to know:</b> many numbers can keep using the WhatsApp Business app alongside Vegham. We check this during setup.</span></div>
        <div style="margin-top: 36px; padding: 22px 24px; border-radius: 20px; background: #F7F7F8; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px"><span style="font-size: 16px; font-weight: 500">Was this helpful?</span><span style="display: flex; gap: 8px"><button type="button" style="height: 40px; padding: 0 18px; border: 1px solid #E2E2E6; border-radius: 999px; background: #FFFFFF; font: inherit; cursor: pointer">Yes</button><button type="button" style="height: 40px; padding: 0 18px; border: 1px solid #E2E2E6; border-radius: 999px; background: #FFFFFF; font: inherit; cursor: pointer">No</button></span></div>
        <h2 style="margin: 40px 0 6px; {HF}; font-size: 26px; letter-spacing: -0.02em">Related</h2>
        {''.join(f'<a href="#" style="display: flex; justify-content: space-between; padding: 14px 4px; border-top: 1px solid #EFEFEF; color: #1F1F1F; text-decoration: none">{t}<span aria-hidden="true" style="color: #8A8A8A">→</span></a>' for t in ['Message templates and fees', 'Keep using the WhatsApp Business app', 'Test your assistant before going live'])}
        <div style="margin-top: 32px; padding: 24px; border-radius: 20px; background: #16182A; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px"><span><b style="display: block; font-weight: 500; font-size: 17px">Still stuck?</b><span style="color: #C3C6DA">We’ll connect it with you on a call.</span></span><a href="#" style="display: inline-flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500">Book a setup call</a></div>
      </article>
    </div>
  </section>
'''
page('HelpArticle.dc.html', 'Connect WhatsApp · Vegham Help', article, 2900)
print('contact + article ok')
