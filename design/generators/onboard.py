import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps, dawn, landscape
from kit3 import HF, EY, AURTXT, FIELD, LABEL, P
src = open(os.path.join(D, 'marks.py')).read(); ns = {'__file__': os.path.join(D, 'marks.py'), '__name__': 'm'}
exec(src.split("opts = [")[0].replace("from kit3 import HEAD, END, P, HF, AURTXT", "from kit3 import HEAD, END, P, HF, AURTXT"), ns)
mark = ns['mark']
CSS = '''
@keyframes vgo-rise{from{opacity:0;transform:translateY(28px) scale(.98)}to{opacity:1;transform:none}}
@keyframes vgo-star{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.55)}50%{box-shadow:0 0 0 8px rgba(255,255,255,0)}}
@keyframes vgo-sunup{from{transform:translateY(60px)}to{transform:none}}
@keyframes vgo-rays{to{transform:rotate(360deg)}}
@keyframes vgo-scan{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
@keyframes vgo-type{from{width:0}to{width:100%}}
.vgo-card{animation:vgo-rise .8s cubic-bezier(.2,.7,.2,1) both}
.vgo-now{animation:vgo-star 2.4s ease-in-out infinite}
.vgo-sun{transform-box:fill-box;transform-origin:center;animation:vgo-sunup 3.5s cubic-bezier(.2,.7,.2,1) both}
.vgo-rays{animation:vgo-rays 60s linear infinite}
.vgo-scan{animation:vgo-scan 1.6s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.vgo-card,.vgo-now,.vgo-sun,.vgo-rays,.vgo-scan{animation:none!important}}
'''
HEAD = kit3.HEAD.replace('</style>', CSS + '</style>', 1)
STEPS = ['Business', 'Teach', 'Assistant', 'Channels', 'Test drive', 'Go live']
TICK = lambda c='#1F9D6B', s=16: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
WM = lambda size=24: f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT}">vegham</span>'
def topbar(step):
    stars = ''
    for i, n in enumerate(STEPS):
        done, now = i < step, i == step
        dot = f'<span class="{"vgo-now" if now else ""}" style="width: {14 if now else 10}px; height: {14 if now else 10}px; border-radius: 50%; {"background: #FFFFFF" if done or now else "border: 1.5px solid rgba(255,255,255,.45)"}; display: inline-flex; align-items: center; justify-content: center">{TICK("#12141F", 8) if done else ""}</span>'
        line = '' if i == len(STEPS) - 1 else f'<span style="width: 44px; height: 1.5px; background: {"rgba(255,255,255,.85)" if done else "rgba(255,255,255,.22)"}"></span>'
        stars += f'<span style="display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 11.5px; color: {"#FFFFFF" if now else "rgba(255,255,255,.6)"}; width: 64px">{dot}<span>{n}</span></span>{line.replace("<span", "<span aria-hidden=\'true\'", 1) if line else ""}'
    return f'''<header style="position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 36px">
      <span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', 'ob' + str(step), 30)}{WM(22)}</span>
      <nav aria-label="Setup progress" style="display: flex; align-items: flex-start; gap: 0">{stars}</nav>
      <a href="#" style="display: inline-flex; align-items: center; height: 38px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.06); color: #FFFFFF; text-decoration: none; font-size: 14px">Save and finish later</a>
    </header>'''
CARD = 'background: rgba(255,255,255,.97); border-radius: 28px; box-shadow: 0 40px 90px -40px rgba(0,0,0,.6); color: #1F1F1F'
def form_card(step, title, sub, body, cont='Continue', back=True, skip=None):
    return f'''<div class="vgo-card" style="flex: 0 1 540px; {CARD}; padding: 36px 36px 28px">
        <span style="font-size: 13px; color: #6B6B6B">Step {step} of 6</span>
        <h1 style="margin: 8px 0 0; {HF}; font-size: 38px; line-height: 1.1; letter-spacing: -0.035em">{title}</h1>
        <p style="margin: 8px 0 0; color: #5C5C5C; font-size: 15.5px">{sub}</p>
        <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 18px">{body}</div>
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #F0F0F3; display: flex; align-items: center; gap: 12px">
          {'<a href="#" style="color: #5C5C5C; text-decoration: none; font-size: 14.5px">← Back</a>' if back else ''}
          <span style="flex: 1"></span>
          {f'<a href="#" style="color: #5C5C5C; font-size: 14.5px">{skip}</a>' if skip else ''}
          <button type="button" style="height: 48px; padding: 0 26px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 15.5px; font-weight: 500; cursor: pointer">{cont} →</button>
        </div>
      </div>'''
def preview(inner, label='Live preview', delay=.25):
    return f'''<div class="vgo-card" style="animation-delay: {delay}s; flex: 0 1 440px; display: flex; flex-direction: column; gap: 10px">
        <span style="display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; padding: 5px 12px; border-radius: 999px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); color: #FFFFFF; font-size: 12.5px"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #3DD68C"></span>{label}</span>
        {inner}
      </div>'''
def screen(name, title, stage, inner, h=900, seed=23):
    body = f'''<div style="position: relative; overflow: hidden; min-height: {h}px; background: #03050E; color: #FFFFFF">
    <div aria-hidden="true" style="position: absolute; inset: 0">{dawn.scene("ob" + str(stage) + name[:4].lower(), seed, stage)}<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.35) 0%, rgba(3,5,14,0) 40%, rgba(3,5,14,.35) 100%)"></div></div>
    {inner}
  </div>'''
    h_ = HEAD.replace(re.search(r'<title>[^<]*</title>', HEAD).group(0), f'<title>{title}</title>')
    open(os.path.join(P, name), 'w').write(h_ + body + kit3.END.replace('__H__', str(h)))
def stage_row(step, left, right):
    return topbar(step) + f'''
    <main style="position: relative; z-index: 1; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 40px 56px; padding: 28px 36px 56px; min-height: 760px; box-sizing: border-box">{left}{right}</main>'''
chip = lambda t, on=False: f'<span style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 999px; font-size: 14px; {"background: #16182A; color: #FFFFFF" if on else "border: 1px solid #E2E2E6; color: #1F1F1F; background: #FFFFFF"}">{TICK("#FFFFFF", 13) if on else ""}{t}</span>'
seg = lambda opts, on: f'<div role="radiogroup" style="display: inline-flex; padding: 4px; border-radius: 999px; background: #F3F3F5">' + ''.join(f'<span role="radio" aria-checked="{"true" if o == on else "false"}" style="padding: 8px 18px; border-radius: 999px; font-size: 14px; {"background: #FFFFFF; box-shadow: 0 1px 2px rgba(0,0,0,.1); font-weight: 500" if o == on else "color: #5C5C5C"}">{o}</span>' for o in opts) + '</div>'
field = lambda lab, val, ph='', fid='f': f'<div><label for="{fid}" style="{LABEL}">{lab}</label><input id="{fid}" value="{val}" placeholder="{ph}" style="{FIELD}" /></div>'

# ---------------- 0 · WELCOME ----------------
pills = ''.join(f'<span style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); font-size: 13.5px; color: #DDE0EE"><span style="font-size: 12px; color: #9EA3BD">{i+1}</span>{n}</span>' for i, n in enumerate(STEPS))
welcome = f'''<header style="position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center; padding: 22px 36px"><span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', 'obw', 30)}{WM(22)}</span><span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); font-size: 13px"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #3DD68C"></span>Your free 30-day pilot has started</span></header>
    <main style="position: relative; z-index: 1; min-height: 780px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 32px 80px">
      <span class="vgo-card" style="display: inline-flex; filter: drop-shadow(0 0 40px rgba(45,212,191,.45))">{mark('ribbon', 'obwbig', 96)}</span>
      <h1 class="vgo-card" style="animation-delay: .2s; margin: 30px 0 0; {HF}; font-size: 72px; line-height: 1.04; letter-spacing: -0.045em">Welcome, Vinay.<br><span style="color: #A9AECB">Let’s build your front desk.</span></h1>
      <p class="vgo-card" style="animation-delay: .4s; margin: 22px 0 0; max-width: 560px; font-size: 19px; color: #C9CCDD">Six short steps, about 5 minutes. By the end, your AI will be answering customers. You can change anything later.</p>
      <button class="vgo-card" type="button" style="animation-delay: .6s; margin-top: 34px; height: 56px; padding: 0 32px; border: 0; border-radius: 999px; background: #FFFFFF; color: #12141F; font: inherit; font-size: 16.5px; font-weight: 500; cursor: pointer; box-shadow: 0 20px 50px -20px rgba(94,234,212,.5)">Let’s begin →</button>
      <div class="vgo-card" style="animation-delay: .8s; margin-top: 40px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px">{pills}</div>
    </main>'''
screen('Ob0Welcome.dc.html', 'Onboarding · Welcome', 0, welcome)

# ---------------- 1 · BUSINESS ----------------
hours = ''.join(chip(t, i == 0) for i, t in enumerate(['Mon–Sat · 10 AM–8 PM', 'Every day · 9 AM–9 PM', 'Custom']))
b1 = f'''{field('Business name', 'Nila &amp; Co', fid='ob-n')}
        <div><label for="ob-d" style="{LABEL}">What do you offer? <span style="color: #8A8A8A; font-weight: 400">In your own words</span></label><textarea id="ob-d" rows="2" style="{FIELD}; height: auto; padding: 12px 16px; resize: none">Consultations, follow-up visits and group sessions</textarea></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px"><div><label style="{LABEL}">Country</label><span style="{FIELD}; display: flex; align-items: center; justify-content: space-between"><span>🇮🇳 India · ₹</span><span style="color: #8A8A8A">▾</span></span></div><div><span style="{LABEL}">Locations</span>{seg(['One', 'Two or more'], 'One')}</div></div>
        <div><span style="{LABEL}">Opening hours</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{hours}</div></div>'''
bcard = f'''<div style="{CARD}; padding: 26px; display: flex; flex-direction: column; gap: 16px">
          <div style="display: flex; align-items: center; gap: 14px"><span style="width: 56px; height: 56px; border-radius: 18px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: 'Inter Tight', sans-serif; font-size: 26px">N</span><span><b style="display: block; font-size: 20px; font-weight: 600">Nila &amp; Co</b><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #1F9D6B"><span style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>Open now · until 8 PM</span></span></div>
          <p style="margin: 0; color: #3D3D3D; font-size: 15px">Consultations, follow-up visits and group sessions</p>
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; font-size: 11.5px; color: #6B6B6B">{''.join(f'<span style="padding: 8px 0; border-radius: 10px; {"background: #16182A; color: #FFFFFF" if d == "Fri" else "background: #F5F5F7"}">{d}<br><b style="font-weight: 500">{"10–8" if d != "Sun" else "Closed"}</b></span>' for d in ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])}</div>
          <span style="font-size: 12.5px; color: #8A8A8A">This is how Vegham will describe your business to customers.</span>
        </div>'''
screen('Ob1Business.dc.html', 'Onboarding · Your business', 1, stage_row(0, form_card(1, 'Tell us about your business', 'Just the basics. Vegham uses this to answer customers correctly.', b1, back=False), preview(bcard)))

# ---------------- 2 · TEACH ----------------
pages_ = [('Home', 1), ('Services', 1), ('Prices', 1), ('About us', 1), ('FAQ', 1), ('Contact', 0)]
scan = ''.join(f'<span class="vg-in" style="animation-delay: {i * .35:.2f}s; display: flex; align-items: center; gap: 10px; padding: 9px 0; border-top: 1px solid #F0F0F3; font-size: 14.5px">{TICK() if d else "<span class=\'vg3-spin\' style=\'width: 14px; height: 14px; border-radius: 50%; border: 2px solid #E2E2E6; border-top-color: #16182A\'></span>"}<span style="flex: 1">{n}</span><span style="font-size: 12.5px; color: #8A8A8A">{"Read" if d else "Reading…"}</span></span>' for i, (n, d) in enumerate(pages_))
b2 = f'''<div><label for="ob-w" style="{LABEL}">Your website or Google Business link</label><div style="display: flex; gap: 8px"><input id="ob-w" value="nilaandco.in" style="{FIELD}" /><button type="button" style="flex: none; height: 48px; padding: 0 18px; border: 0; border-radius: 12px; background: #16182A; color: #FFFFFF; font: inherit; font-weight: 500">Read it</button></div></div>
        <div style="padding: 16px 18px; border-radius: 20px; background: #F7F7F8"><div style="display: flex; justify-content: space-between; font-size: 13.5px"><b style="font-weight: 600">Reading 24 pages</b><span style="color: #6B6B6B">83%</span></div><div style="position: relative; margin: 10px 0 6px; height: 6px; border-radius: 3px; background: #E6E6EA; overflow: hidden"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 83%; border-radius: 3px; background: #16182A"></span><span class="vgo-scan" style="position: absolute; top: 0; bottom: 0; width: 40%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent)"></span></div>{scan}</div>
        <span style="font-size: 14px; color: #5C5C5C">No website? <a href="#" style="color: #16182A">Add services by hand</a></span>'''
found = [('First visit', '30 min', '₹500'), ('Standard appointment', '60 min', '₹1,200'), ('Follow-up', '20 min', '₹300'), ('Group session (8)', '90 min', '₹1,200 each')]
fr = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 11px 0; border-top: 1px solid #F0F0F3; font-size: 14.5px">{TICK()}<span style="flex: 1">{n}<span style="display: block; font-size: 12.5px; color: #8A8A8A">{m}</span></span><b style="font-weight: 600">{p}</b><span style="font-size: 12px; color: #6B6B6B">Edit</span></div>' for n, m, p in found)
cnt = lambda n, l: f'<span style="flex: 1; padding: 12px; border-radius: 16px; background: #F5F5F7; text-align: center"><span style="display: block; font-family: \'Inter Tight\', sans-serif; font-size: 30px; letter-spacing: -0.03em">{comps.count(n)}</span><span style="font-size: 12.5px; color: #6B6B6B">{l}</span></span>'
kcard = f'''<div style="{CARD}; padding: 24px">
          <b style="display: block; font-size: 17px; font-weight: 600">Here’s what Vegham learned</b>
          <div style="margin-top: 14px; display: flex; gap: 8px">{cnt(12, 'services')}{cnt(8, 'prices')}{cnt(6, 'answers')}</div>
          <div style="margin-top: 10px">{fr}</div>
          <div style="margin-top: 12px; padding: 12px 14px; border-radius: 14px; background: #F7F7F8; font-size: 13.5px; color: #3D3D3D">“Is there parking?” → <b style="font-weight: 500">Yes, free parking next to the entrance.</b></div>
        </div>'''
screen('Ob2Teach.dc.html', 'Onboarding · Teach Vegham', 2, stage_row(1, form_card(2, 'Teach Vegham your business', 'Paste a link and Vegham reads it for you. You check what it found.', b2, skip='Skip for now'), preview(kcard, 'Learning from your website')))

# ---------------- 3 · ASSISTANT ----------------
voices = [('Warm', True), ('Bright', False), ('Calm', False)]
vrow = ''.join(f'<div style="flex: 1; padding: 12px; border-radius: 16px; {"border: 1.5px solid #16182A" if on else "border: 1px solid #E2E2E6"}; display: flex; flex-direction: column; gap: 8px"><span style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500"><span style="width: 26px; height: 26px; border-radius: 50%; background: {"#16182A" if on else "#F1F1F4"}; display: inline-flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="{"#FFFFFF" if on else "#16182A"}"><path d="M7 4v16l13-8z"></path></svg></span>{n}</span><span aria-hidden="true" style="display: flex; align-items: center; gap: 2px; height: 18px">{"".join(f"<span class=\'{chr(118)}g-wave\' style=\'width: 3px; height: {h}px; border-radius: 2px; background: {chr(35)}16182A; opacity: {1 if on else .3}; animation-delay: {k * .1:.1f}s\'></span>" if on else f"<span style=\'width: 3px; height: {h}px; border-radius: 2px; background: #C9C9D1\'></span>" for k, h in enumerate([6, 12, 16, 9, 14, 7, 11, 15, 8, 12]))}</span></div>' for n, on in voices)
b3 = f'''<div><label for="ob-a" style="{LABEL}">Name your assistant</label><input id="ob-a" value="Vegham" style="{FIELD}" /><div style="margin-top: 8px; display: flex; gap: 6px; flex-wrap: wrap">{''.join(f'<span style="padding: 4px 12px; border-radius: 999px; background: #F3F3F5; font-size: 13px">{n}</span>' for n in ['Riya', 'Meera', 'Kabir', 'Sam'])}</div></div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap"><div><span style="{LABEL}">Tone</span>{seg(['Friendly', 'Formal'], 'Friendly')}</div><div style="flex: 1"><span style="{LABEL}">Languages</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{chip('English', True)}{chip('हिन्दी', True)}{chip('తెలుగు')}{chip('+ more')}</div></div></div>
        <div><span style="{LABEL}">Voice for calls</span><div style="display: flex; gap: 8px">{vrow}</div></div>'''
pb = lambda t, me, d: (f'<span class="vg-in" style="animation-delay: {d}s; align-self: flex-end; max-width: 78%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px; font-size: 14.5px">{t}</span>' if me else f'<span class="vg-in" style="animation-delay: {d}s; align-self: flex-start; max-width: 84%; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px; font-size: 14.5px">{t}</span>')
acard = f'''<div style="{CARD}; padding: 22px; display: flex; flex-direction: column; gap: 10px">
          <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #F0F0F3">{mark('ribbon', 'oba', 40)}<span style="flex: 1"><b style="display: block; font-weight: 600">Vegham</b><span style="font-size: 12.5px; color: #8A8A8A">Nila &amp; Co’s assistant · Friendly · EN, हिन्दी</span></span></div>
          {pb('Hi, do you open on Sundays?', 1, .2)}{pb('Hi! Welcome to Nila &amp; Co 😊 We’re closed on Sundays, but Monday from 10 AM is free. Want me to book it?', 0, .8)}{pb('नमस्ते, कल शाम का समय है?', 1, 1.6)}{pb('नमस्ते! कल शाम 6:30 बजे खाली है। बुक कर दूँ?', 0, 2.3)}
        </div>'''
screen('Ob3Assistant.dc.html', 'Onboarding · Meet your assistant', 3, stage_row(2, form_card(3, 'Meet your assistant', 'Give it a name and a personality. Watch it change as you choose.', b3), preview(acard, 'How Vegham sounds')))

# ---------------- 4 · CHANNELS ----------------
def chrow(ic, t, d, state):
    st = {'on': f'<span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 13px; font-weight: 500">{TICK("#1E6B47", 13)}Connected</span>',
          'pending': '<span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; border: 1px dashed #B4B4BC; color: #3D3D3D; font-size: 13px"><span class="vg3-spin" style="width: 10px; height: 10px; border-radius: 50%; border: 2px solid #D4D4DA; border-top-color: #16182A"></span>Meta review</span>',
          'connect': '<span style="display: inline-flex; gap: 6px"><span style="padding: 7px 14px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 13px">Connect</span><span style="padding: 7px 12px; border-radius: 999px; color: #6B6B6B; font-size: 13px">Later</span></span>'}[state]
    return f'<div style="display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 20px; border: 1px solid {"#16182A" if state == "on" else "#ECECF0"}"><span style="width: 42px; height: 42px; flex: none; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{ic}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 15px">{t}</b><span style="font-size: 13px; color: #6B6B6B">{d}</span></span>{st}</div>'
b4 = ''.join([chrow(comps.logo('whatsapp', 22), 'WhatsApp', '+91 98765 43210 · Nila &amp; Co', 'on'), chrow(comps.PHONE.format(s=20, c='#16182A'), 'Phone and missed calls', 'Forward calls to Vegham in 2 minutes', 'connect'), chrow(comps.logo('instagram', 22), 'Instagram', '@nilaandco · connected, waiting for Meta', 'pending'), chrow(comps.GLOBE.format(s=20, c='#16182A'), 'Website chat', 'Paste one line of code, or we email it to your developer', 'connect')]) + '<div style="padding: 12px 14px; border-radius: 14px; background: #F7F7F8; font-size: 13.5px; color: #3D3D3D">Waiting for an approval? Keep going. Vegham starts on the channels that are ready and tells you when the rest go live.</div>'
nodes = [(comps.logo('whatsapp', 22), 20, 22, True), (comps.PHONE.format(s=20, c='#FFFFFF'), 80, 18, False), (comps.logo('instagram', 22), 14, 78, False), (comps.GLOBE.format(s=20, c='#FFFFFF'), 84, 80, False)]
hub = ''.join(f'<span style="position: absolute; left: {x}%; top: {y}%; transform: translate(-50%, -50%); width: 58px; height: 58px; border-radius: 18px; display: inline-flex; align-items: center; justify-content: center; {"background: #FFFFFF; box-shadow: 0 0 0 4px rgba(61,214,140,.35)" if on else "background: rgba(255,255,255,.1); border: 1px dashed rgba(255,255,255,.4)"}">{ic}</span>' for ic, x, y, on in nodes)
lines = ''.join(f'<line x1="50" y1="50" x2="{x}" y2="{y}" stroke="{"#5EEAD4" if on else "rgba(255,255,255,.3)"}" stroke-width="{.6 if on else .35}" stroke-dasharray="{"0" if on else "1.5 1.5"}"></line>' for _, x, y, on in nodes)
hcard = f'''<div style="position: relative; height: 380px; border-radius: 28px; background: rgba(10,12,22,.55); border: 1px solid rgba(255,255,255,.14); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)">
          <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; inset: 0; width: 100%; height: 100%">{lines}</svg>
          {hub}
          <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: inline-flex; filter: drop-shadow(0 0 24px rgba(94,234,212,.5))">{mark('ribbon', 'obhub', 78)}</span>
          <span style="position: absolute; left: 0; right: 0; bottom: 16px; text-align: center; font-size: 13px; color: #C9CCDD">1 live · 1 waiting · 2 to connect</span>
        </div>'''
screen('Ob4Channels.dc.html', 'Onboarding · Connect channels', 4, stage_row(3, form_card(4, 'Connect your channels', 'Start with WhatsApp. Add the rest now or later.', b4, skip='Do this later'), preview(hcard, 'Your channels')))

# ---------------- 5 · TEST DRIVE ----------------
sugg = ''.join(f'<span style="padding: 8px 14px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 14px; background: #FFFFFF">{t}</span>' for t in ['Anything free tomorrow?', 'How much is a first visit?', 'Do you have parking?', 'Can I bring a friend?'])
b5 = f'''<div><span style="{LABEL}">Try a question</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{sugg}</div></div>
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 20px; background: #16182A; color: #FFFFFF"><span style="width: 42px; height: 42px; border-radius: 50%; background: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">{comps.PHONE.format(s=18, c='#16182A')}</span><span style="flex: 1"><b style="display: block; font-weight: 500">Or call Vegham now</b><span style="font-size: 13px; color: #C3C6DA">[Test number] · hear her answer in your language</span></span></div>
        <div style="display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: #3D3D3D">{TICK()}<span>Spotted a wrong answer? Tap <b style="font-weight: 600">Fix</b> on it. Vegham learns immediately, for every channel.</span></div>'''
tb = lambda t, me, d, extra='': (f'<span class="vg-in" style="animation-delay: {d}s; align-self: flex-end; max-width: 78%; background: #F3F3F5; padding: 10px 14px; border-radius: 16px 16px 4px 16px">{t}</span>' if me else f'<div class="vg-in" style="animation-delay: {d}s; align-self: flex-start; max-width: 86%"><span style="display: block; background: #16182A; color: #FFFFFF; padding: 10px 14px; border-radius: 16px 16px 16px 4px">{t}</span>{extra}</div>')
fix = '<span style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 12.5px; color: #6B6B6B"><span style="padding: 2px 10px; border-radius: 999px; border: 1px solid #E2E2E6">✎ Fix</span>Answered from your price list</span>'
fixed = '<div style="margin-top: 8px; padding: 12px; border-radius: 14px; border: 1.5px solid #16182A; background: #FFFFFF; font-size: 13.5px"><span style="display: block; font-size: 12px; color: #6B6B6B">Fixed answer · saved</span>Yes! Friends are welcome. Group sessions for up to 8 are ₹1,200 each.</div>'
tcard = f'''<div style="{CARD}; padding: 22px; display: flex; flex-direction: column; gap: 10px; font-size: 14.5px">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid #F0F0F3"><span style="display: flex; align-items: center; gap: 10px">{mark('ribbon', 'obt', 32)}<b style="font-weight: 600">Test chat</b></span><span style="font-size: 12px; color: #8A8A8A">Only you can see this</span></div>
          {tb('Anything free tomorrow evening?', 1, .2)}{tb('Yes! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', 0, .9, fix)}{tb('Can I bring a friend?', 1, 1.7)}{tb('Of course, you can bring a friend along.', 0, 2.3, fixed)}
          <span class="vg-in" style="animation-delay: 3s; align-self: center; margin-top: 4px; padding: 6px 14px; border-radius: 999px; background: #EAF7F0; color: #1E6B47; font-size: 13px">{TICK("#1E6B47", 12)} Test booking added (not real)</span>
        </div>'''
screen('Ob5TestDrive.dc.html', 'Onboarding · Test drive', 5, stage_row(4, form_card(5, 'Take Vegham for a test drive', 'Ask what your customers ask. This is a private sandbox.', b5, cont='Looks good'), preview(tcard, 'Your assistant, live')))

# ---------------- 6 · GO LIVE ----------------
qr = ''.join(f'<span style="width: 10px; height: 10px; background: {"#16182A" if (i * 7 + i // 9 * 3) % 5 < 2 or i in (0,1,2,9,11,18,19,20,6,7,8,15,17,24,25,26,54,55,56,63,65,72,73,74) else "transparent"}"></span>' for i in range(81))
golive = topbar(6).replace('Save and finish later', 'Skip to dashboard') + f'''
    <main style="position: relative; z-index: 1; min-height: 760px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; padding: 56px 32px 64px">
      <h1 class="vgo-card" style="margin: 0; {HF}; font-size: 76px; line-height: 1.02; letter-spacing: -0.05em; color: #FFFFFF; text-shadow: 0 2px 40px rgba(255,170,110,.35)">Your front desk is open.</h1>
      <p class="vgo-card" style="animation-delay: .25s; margin: 18px 0 0; max-width: 620px; font-size: 19px; color: #F2F4FA">Vegham is now answering customers on WhatsApp, day and night. Your first morning report arrives tomorrow at 8 AM.</p>
      <div class="vgo-card" style="animation-delay: .45s; margin-top: 24px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px">{''.join(f'<span style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.35); font-size: 14px">{TICK("#FFFFFF", 13)}{t}</span>' for t in ['Vegham is live', 'WhatsApp connected', '12 services learned', 'Pilot: 30 days free'])}</div>
      <div class="vgo-card" style="animation-delay: .65s; margin-top: 36px; {CARD}; padding: 24px; display: flex; flex-wrap: wrap; align-items: center; gap: 24px; text-align: left; max-width: 680px">
        <span aria-label="QR code for your booking link" role="img" style="flex: none; display: grid; grid-template-columns: repeat(9, 10px); padding: 10px; border-radius: 14px; border: 1px solid #ECECF0">{qr}</span>
        <div style="flex: 1 1 300px"><b style="display: block; font-size: 18px; font-weight: 600">Share your booking link</b><span style="display: block; margin-top: 4px; color: #6B6B6B; font-size: 14.5px">Put it on Instagram, Google and your shop counter. Customers book in seconds.</span>
          <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap"><span style="flex: 1 1 200px; display: inline-flex; align-items: center; height: 44px; padding: 0 14px; border-radius: 12px; background: #F5F5F7; font-size: 14.5px">vegham.ai/nila</span><span style="display: inline-flex; align-items: center; height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 14px">Copy</span><span style="display: inline-flex; align-items: center; gap: 6px; height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 14px">{comps.logo('whatsapp', 16)}Share</span></div></div>
      </div>
      <button class="vgo-card" type="button" style="animation-delay: .85s; margin-top: 28px; height: 56px; padding: 0 32px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 16.5px; font-weight: 500; cursor: pointer; box-shadow: 0 20px 50px -20px rgba(22,24,42,.6)">Go to my dashboard →</button>
    </main>'''
screen('Ob6GoLive.dc.html', 'Onboarding · Go live', 6, golive, seed=23)
print('onboarding screens ok')
