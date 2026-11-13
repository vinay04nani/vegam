"""Onboarding (direction A): phones board and motion board."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps, landscape
from kit3 import HF, AURTXT, FIELD, LABEL, P
src = open(os.path.join(D, 'marks.py')).read(); ns = {'__file__': os.path.join(D, 'marks.py'), '__name__': 'm'}
exec(src.split("opts = [")[0], ns)
mark = ns['mark']
TICK = lambda c='#1F9D6B', s=16: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
WM = lambda size=18, extra='': f'<span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: {size}px; letter-spacing: -0.045em; {AURTXT}{extra}">vegham</span>'
HEAD = kit3.HEAD.replace('</style>', landscape.CSS + '''
@keyframes obm-shimmer{0%{background-position:-160px 0}100%{background-position:160px 0}}
.obm-skel{background:linear-gradient(90deg,#EFEFF2 0,#F7F7F9 50%,#EFEFF2 100%);background-size:320px 100%;animation:obm-shimmer 1.6s linear infinite}
@media (prefers-reduced-motion: reduce){.obm-skel{animation:none}}
</style>''', 1)
def save(name, title, body, h):
    hd = HEAD.replace(re.search(r'<title>[^<]*</title>', HEAD).group(0), f'<title>{title}</title>')
    open(os.path.join(P, name), 'w').write(hd + body + kit3.END.replace('__H__', str(h)))

# ------------------------------------------------------------------ phones
def topbar(step, dark=False):
    ink = '#FFFFFF' if dark else '#16182A'
    mut = 'rgba(255,255,255,.7)' if dark else '#6B6B6B'
    lab = ('Live' if step == 6 and dark else f'Step {step}/6') if step else 'Welcome'
    fill = f'{step / 6 * 100:.2f}%'
    return f'''<div style="position: relative; z-index: 2; padding: 14px 18px 0">
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; color: {mut}"><span style="display: flex; align-items: center; gap: 7px">{mark('ribbon', 'mb' + str(step), 22)}{WM(16)}</span><span>{lab}</span></div>
        <div style="margin-top: 12px; height: 2px; border-radius: 2px; background: {"rgba(255,255,255,.2)" if dark else "#E6E6EA"}"><span style="display: block; width: {fill}; height: 100%; border-radius: 2px; background: linear-gradient(90deg, #10B981, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777)"></span></div></div>'''
def btn(t, back=True, light=False):
    b = '<span style="display: inline-flex; align-items: center; height: 48px; padding: 0 12px; color: #6B6B6B; font-size: 14.5px">← Back</span>' if back else ''
    bg = 'background: #FFFFFF; color: #12141F' if light else 'background: #16182A; color: #FFFFFF'
    return f'<div style="position: relative; z-index: 2; margin-top: auto; padding: 12px 16px 20px; display: flex; align-items: center; gap: 6px">{b}<span style="flex: 1; display: flex; align-items: center; justify-content: center; height: 50px; border-radius: 999px; {bg}; font-size: 15.5px; font-weight: 500">{t} →</span></div>'
H = lambda t, size=28, c='#16182A': f'<h2 style="margin: 0; {HF}; font-size: {size}px; line-height: 1.08; letter-spacing: -0.035em; color: {c}">{t}</h2>'
CARDM = 'border-radius: 22px; background: #FFFFFF; box-shadow: 0 24px 50px -30px rgba(22,24,42,.4), 0 0 0 1px rgba(22,24,42,.05)'
status = '<span style="display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; color: #1F9D6B; white-space: nowrap"><span style="width: 6px; height: 6px; border-radius: 50%; background: #1F9D6B"></span>Open · until 8 PM</span>'
head_row = lambda c='#16182A', mut='#6B6B6B': f'<div style="display: flex; align-items: center; gap: 10px"><span style="width: 38px; height: 38px; flex: none; border-radius: 12px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: \'Inter Tight\', sans-serif; font-size: 18px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.12)">N</span><span style="flex: 1"><b style="display: block; font-size: 15px; font-weight: 600; color: {c}">Nila &amp; Co</b>{status}</span>'
def peek(inner, note):
    return f'''<div style="position: relative; z-index: 2; margin: 14px 16px 0"><div style="{CARDM}; padding: 14px">{inner}</div><span style="display: flex; justify-content: center; margin-top: 6px; font-size: 11px; color: #8A8A8A">{note}</span></div>'''

# 0 · welcome: ghost card large
m0 = topbar(0) + f'''<div style="position: relative; z-index: 2; margin: 22px 16px 0"><div style="{CARDM}; padding: 16px; display: flex; flex-direction: column; gap: 10px">
      <div style="display: flex; align-items: center; gap: 10px"><span class="obm-skel" style="width: 38px; height: 38px; border-radius: 12px"></span><span style="flex: 1; display: flex; flex-direction: column; gap: 6px"><span class="obm-skel" style="height: 11px; width: 60%; border-radius: 6px"></span><span class="obm-skel" style="height: 8px; width: 40%; border-radius: 4px"></span></span></div>
      <span class="obm-skel" style="height: 8px; width: 90%; border-radius: 4px"></span><span style="font-size: 11.5px; color: #8A8A8A">Your front desk card. It fills in as you answer.</span></div></div>
    <div style="position: relative; z-index: 2; padding: 26px 20px 0"><span style="display: block; font-size: 12px; color: #6B6B6B; margin-bottom: 8px">Welcome, Vinay</span>{H("Let’s build your<br>front desk.", 32)}<p style="margin: 10px 0 0; font-size: 14px; color: #5C5C5C">Six short steps, about 7 minutes. Everything is saved as you go.</p></div>
    {btn('Let’s begin', back=False)}'''

# 1 · business: card peek on top, form below
hours = ''.join(f'<span style="padding: 7px 11px; border-radius: 999px; font-size: 12.5px; {"background: #16182A; color: #FFFFFF" if i == 0 else "border: 1px solid #E2E2E6; background: #FFFFFF"}">{t}</span>' for i, t in enumerate(['Mon–Sat 10–8', 'Every day 9–9', 'Custom']))
F = FIELD.replace('height: 48px', 'height: 44px').replace('font-size: 15px', 'font-size: 14px')
L = LABEL.replace('font-size: 14px', 'font-size: 12.5px').replace('margin-bottom: 8px', 'margin-bottom: 6px')
m1 = topbar(1) + peek(head_row() + '</div>', 'Live preview · tap to open') + f'''
    <div style="position: relative; z-index: 2; padding: 18px 18px 0; display: flex; flex-direction: column; gap: 12px">{H("Tell us about<br>your business.", 26)}
      <div><span style="{L}">Business name</span><span style="{F}; display: flex; align-items: center">Nila &amp; Co</span></div>
      <div><span style="{L}">What do you offer?</span><span style="{F}; display: flex; align-items: center">Consultations and group sessions</span></div>
      <div><span style="{L}">Opening hours</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{hours}</div></div></div>
    {btn('Continue')}'''

# 3 · assistant: card peek grows with greeting
tones = ''.join(f'<span style="padding: 7px 14px; border-radius: 999px; font-size: 13px; {"background: #16182A; color: #FFFFFF" if i == 0 else "border: 1px solid #E2E2E6; background: #FFFFFF"}">{t}</span>' for i, t in enumerate(['Warm', 'Crisp', 'Formal']))
m3 = topbar(3) + peek(head_row() + '<span style="font-size: 11px; color: #8A8A8A">12 services</span></div>' + f'''<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #F0F0F3; display: flex; align-items: center; gap: 8px">{mark('ribbon', 'mba', 24)}<b style="font-size: 13px; font-weight: 600">Vegham</b><span style="font-size: 11.5px; color: #8A8A8A">Warm · English, हिन्दी</span></div>
      <div style="margin-top: 8px; padding: 8px 11px; border-radius: 14px 14px 14px 4px; background: #16182A; color: #FFFFFF; font-size: 12.5px">Hi! Welcome to Nila &amp; Co 😊 How can I help you today?</div>''', 'The newest part of your card is shown') + f'''
    <div style="position: relative; z-index: 2; padding: 18px 18px 0; display: flex; flex-direction: column; gap: 12px">{H("Meet your<br>assistant.", 26)}
      <div><span style="{L}">Name</span><span style="{F}; display: flex; align-items: center">Vegham</span></div>
      <div><span style="{L}">Tone</span><div style="display: flex; gap: 6px">{tones}</div></div></div>
    {btn('Continue')}'''

# 5 · test drive: the card flips into a full-height chat
bub = lambda t, me: f'<span style="align-self: {"flex-end" if me else "flex-start"}; max-width: 82%; padding: 8px 11px; font-size: 12.5px; border-radius: {"14px 14px 4px 14px" if me else "14px 14px 14px 4px"}; {"background: #F3F3F5" if me else "background: #16182A; color: #FFFFFF"}">{t}</span>'
m5 = topbar(5) + f'''<div style="position: relative; z-index: 2; padding: 14px 18px 0">{H("Take Vegham for<br>a test drive.", 24)}</div>
    <div style="position: relative; z-index: 2; margin: 12px 16px 0; {CARDM}; padding: 14px; display: flex; flex-direction: column; gap: 8px; min-height: 360px; box-sizing: border-box">
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid #F0F0F3"><span style="display: flex; align-items: center; gap: 8px">{mark('ribbon', 'mbt', 22)}<b style="font-size: 13px; font-weight: 600">Test chat</b></span><span style="font-size: 10.5px; color: #8A8A8A">Only you see this</span></div>
      {bub('Anything free tomorrow evening?', 1)}{bub('Yes! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', 0)}<span style="font-size: 11px; color: #6B6B6B">✎ Fix · From your price list</span>{bub('Can I bring a friend?', 1)}{bub('Of course! Group sessions are ₹1,200 each for up to 8 people.', 0)}
      <span style="margin-top: auto; display: flex; gap: 6px"><span style="flex: 1; height: 36px; border-radius: 999px; background: #F5F5F7; display: flex; align-items: center; padding: 0 12px; font-size: 12.5px; color: #8A8A8A">Ask anything…</span><span style="width: 36px; height: 36px; border-radius: 50%; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">↑</span></span></div>
    {btn('Go live')}'''

# 6 · go live: aurora landscape, dark card
badge = lambda ic: f'<span style="width: 26px; height: 26px; border-radius: 8px; background: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">{ic}</span>'
m6 = f'''<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden"><div style="position: absolute; left: -620px; top: 0; width: 1600px; height: 100%">{landscape.landscape('mbsky', seed=7, height=1000)}</div><div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.1), rgba(3,5,14,.55))"></div></div>''' + topbar(6, dark=True) + f'''
    <div style="position: relative; z-index: 2; padding: 22px 20px 0">{H("Your front desk<br>is open.", 32, '#FFFFFF')}<p style="margin: 8px 0 0; font-size: 13.5px; color: rgba(255,255,255,.8)">Vegham is answering on WhatsApp and your website.</p></div>
    <div style="position: relative; z-index: 2; margin: 18px 16px 0; border-radius: 22px; overflow: hidden; background: #12141F; color: #FFFFFF; padding: 16px; transform: rotate(-2deg); box-shadow: 0 30px 60px -30px rgba(0,0,0,.7)">{comps.aurora(1.5)}
      <div style="position: relative">{head_row('#FFFFFF')}<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 9px; border-radius: 999px; background: rgba(61,214,140,.16); color: #5EEAD4; font-size: 10.5px; font-weight: 600; letter-spacing: .06em"><span style="width: 6px; height: 6px; border-radius: 50%; background: #3DD68C"></span>LIVE</span></div>
      <div style="margin-top: 10px; padding: 8px 11px; border-radius: 14px 14px 14px 4px; background: rgba(255,255,255,.1); font-size: 12.5px">Hi! Welcome to Nila &amp; Co 😊 How can I help you today?</div>
      <div style="margin-top: 10px; display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: #A9AECB"><span>vegham.ai/nila</span><span style="display: flex; gap: 5px">{badge(comps.logo('whatsapp', 15))}{badge(comps.GLOBE.format(s=14, c='#16182A'))}</span></div></div></div>
    <div style="position: relative; z-index: 2; margin-top: auto; padding: 0 16px 20px; display: flex; flex-direction: column; gap: 8px"><span style="display: flex; align-items: center; justify-content: center; height: 46px; border-radius: 999px; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.1); color: #FFFFFF; font-size: 14.5px">Share booking link</span><span style="display: flex; align-items: center; justify-content: center; height: 50px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 15.5px; font-weight: 500">Go to my dashboard →</span></div>'''

# WhatsApp connect: bottom sheet over step 4
wst = [('Log in with Facebook', 'Links your Meta Business account'), ('Choose your number', 'Keep your current number or add a new one'), ('Verify with a code', 'Meta sends 6 digits by SMS or call'), ('Check your display name', '“Nila &amp; Co” · reviewed within a day')]
wrows = ''.join(f'<div style="display: flex; gap: 10px; padding: 8px 0; border-top: 1px solid #F0F0F3"><span style="width: 20px; height: 20px; flex: none; border-radius: 50%; background: #F3F3F5; display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600">{i}</span><span><b style="display: block; font-weight: 500; font-size: 13px">{t}</b><span style="font-size: 11.5px; color: #6B6B6B">{d}</span></span></div>' for i, (t, d) in enumerate(wst, 1))
mwa = topbar(4) + f"""<div style="position: relative; z-index: 2; padding: 18px 18px 0">{H("Where should<br>Vegham answer?", 26)}</div>
    <div style="position: absolute; inset: 0; z-index: 3; background: rgba(18,20,31,.42)"></div>
    <div style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 4; border-radius: 26px 26px 0 0; background: #FFFFFF; padding: 10px 18px 20px">
      <span style="display: block; width: 40px; height: 4px; border-radius: 2px; background: #DADAE0; margin: 0 auto 12px"></span>
      <div style="display: flex; align-items: center; gap: 10px"><span style="width: 36px; height: 36px; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{comps.logo('whatsapp', 20)}</span><span><b style="display: block; font-size: 16px; font-weight: 600">Connect WhatsApp</b><span style="font-size: 12px; color: #6B6B6B">Meta’s official sign-up · about 3 min</span></span></div>
      <div style="margin-top: 10px">{wrows}</div>
      <span style="margin-top: 12px; display: flex; align-items: center; justify-content: center; gap: 8px; height: 48px; border-radius: 999px; background: #1877F2; color: #FFFFFF; font-size: 14.5px; font-weight: 500">{comps.logo('facebook', 16, '#FFFFFF')}Continue with Facebook</span>
      <span style="display: block; margin-top: 8px; text-align: center; font-size: 13px; color: #6B6B6B">Cancel</span></div>"""

# Review (step 6)
rvr = lambda t, d: f'<div style="display: flex; align-items: center; gap: 10px; padding: 9px 0; border-top: 1px solid #ECECF0"><span style="width: 20px; height: 20px; flex: none; border-radius: 50%; background: #1F9D6B; display: inline-flex; align-items: center; justify-content: center">{TICK("#FFFFFF", 11)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 11.5px; color: #6B6B6B">{d}</span></span><span style="font-size: 12px; text-decoration: underline">Edit</span></div>'
mrv = topbar(6) + peek(head_row() + '<span style="font-size: 11px; color: #8A8A8A">Ready</span></div>', 'Your card, ready to go live') + f"""
    <div style="position: relative; z-index: 2; padding: 16px 18px 0">{H("Ready to go live?", 26)}
      <div style="margin-top: 8px">{rvr('Nila &amp; Co', 'Mon–Sat 10–8 · Indiranagar')}{rvr('What Vegham knows', '12 services · 8 prices · 6 answers')}{rvr('Vegham', 'Warm · English, हिन्दी')}{rvr('Answering on', 'WhatsApp · Website chat')}</div>
      <div style="margin-top: 8px; padding: 10px 12px; border-radius: 14px; background: #FFFFFF; border: 1px solid #ECECF0; font-size: 12px; color: #5C5C5C">Alerts and the 8 AM report go to <b style="font-weight: 600; color: #1F1F1F">+91 98765 43210</b> on WhatsApp</div></div>
    {btn('Go live')}"""

def phone(inner, label, dark=False):
    return f'''<div style="flex: none; display: flex; flex-direction: column; align-items: center; gap: 12px"><div style="width: 312px; height: 676px; border-radius: 44px; background: #0B0C12; padding: 9px; box-sizing: border-box; box-shadow: 0 30px 60px -30px rgba(0,0,0,.45)"><div style="position: relative; width: 100%; height: 100%; border-radius: 35px; overflow: hidden; background: {"#03050E" if dark else "#F5F5F7"}; display: flex; flex-direction: column; font-size: 14px; color: #1F1F1F">{inner}</div></div><span style="font-size: 13.5px; color: #3D3D3D">{label}</span></div>'''
notes = [('One screen, card on top', 'The living card stays pinned at the top as a compact “peek”. It shows the part that just changed, so you always see your answer land.'),
         ('Questions in the middle', 'Questions slide sideways between steps, the same as on desktop. Fields are large enough to tap.'),
         ('Button at the bottom', 'Continue sits within thumb reach. Back is beside it, never hidden.'),
         ('Tap the card to open it', 'Tapping the peek opens the full card as a sheet, so people can see everything Vegham knows so far.')]
nrow = ''.join(f'<div style="padding: 16px 18px; border-radius: 20px; background: #FFFFFF; border: 1px solid #ECECF0"><b style="display: block; font-weight: 600; font-size: 15px">{t}</b><span style="display: block; margin-top: 4px; font-size: 14px; color: #5C5C5C; line-height: 1.5">{d}</span></div>' for t, d in notes)
mob = f'''<div style="padding: 52px 40px; background: #F5F5F7; box-sizing: border-box; font-family: Inter, system-ui, sans-serif; color: #1F1F1F">
  <h1 style="margin: 0; {HF}; font-size: 40px">Onboarding on phones</h1><p style="margin: 8px 0 26px; color: #6B6B6B; font-size: 16px">The same living card and calm background. The aurora appears only when you go live.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 22px; justify-content: space-between">{phone(m0, 'Welcome')}{phone(m1, 'Step 1/6 · Your business')}{phone(m3, 'Step 3/6 · Your assistant')}{phone(m5, 'Step 5/6 · Test drive (card turned over)')}</div>
  <div style="margin-top: 34px; display: flex; flex-wrap: wrap; gap: 22px; align-items: flex-start">{phone(mwa, 'Step 4/6 · Connect WhatsApp')}{phone(mrv, 'Step 6/6 · Review')}{phone(m6, 'You’re live', dark=True)}<div style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 12px">{nrow}</div></div>
  <span style="display: block; margin-top: 22px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
</div>'''
save('ObMobile.dc.html', 'Onboarding · phones', mob, 1720)

# ------------------------------------------------------------------ motion
names = ['Welcome', '1/6 Business', '2/6 Teach', '3/6 Assistant', '4/6 Channels', 'WhatsApp sheet', '5/6 Test drive', '6/6 Review', 'Live']
strip = ''.join(f'<figure style="margin: 0; flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px"><img src="./ob-frame-{i}.jpg" alt="Onboarding screen: {n}" style="display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 12px; border: 1px solid #ECECF0" /><figcaption style="font-size: 12px; color: #6B6B6B">{n}</figcaption></figure>' for i, n in enumerate(names))
rows = [('Between steps', 'The question slides out 56 px to the left and fades; the next slides in from the right. The card and the buttons never move.', '0.46 s out · 0.5 s in, 0.1 s later', 'Simple fade, no sliding'),
        ('The card fills in', 'A new part of the card opens downwards and fades in. Nothing above it jumps.', '0.6 s height · 0.45 s fade', 'Appears at once'),
        ('Your answers land', 'Choosing opening hours or a tone changes the card straight away.', 'Instant', 'Instant'),
        ('Reading the website', 'The progress bar fills and pages tick off one by one. When it finishes, the services slide into the card.', 'Bar 1.6 s · pages 0.22 s apart · card at 1.5 s', 'Finished state only'),
        ('Channels', 'Each channel you switch on pops onto the card as a small logo.', '0.45 s pop', 'Appears at once'),
        ('Test drive', 'The card turns over into a private test chat. Messages arrive like a real conversation.', 'Flip 0.9 s · messages 0.7 s apart', 'Chat shown, no flip'),
        ('Connect WhatsApp', 'Meta’s sign-up opens as a sheet over the step; the page behind dims. When connected, the sheet closes and WhatsApp pops onto the card.', 'Sheet 0.4 s up · pop 0.45 s', 'Sheet appears at once'),
        ('Review', 'The card turns back to the front, complete. Each Edit slides back to that step; Continue returns here.', 'Flip 0.9 s · slide 0.5 s', 'No flip, no slide'),
        ('Progress line', 'The aurora line under the top bar fills a little more with each step.', '0.7 s', 'Jumps to its new length'),
        ('You’re live', 'The background fades into the aurora night sky. The card turns dark with an aurora inside, lifts and tilts slightly, shows LIVE, and a light passes across it once.', 'Sky 1.6 s · card 0.9 s · shine at 1.2 s', 'Final scene, no movement'),
        ('Phones', 'Same moments. The card stays pinned at the top as a peek; it opens as a sheet when tapped.', 'Same timings', 'Same as above')]
tbl = ''.join(f'<tr style="border-top: 1px solid #EFEFEF"><th scope="row" style="text-align: left; padding: 14px 16px; font-weight: 500; vertical-align: top; white-space: nowrap">{a}</th><td style="padding: 14px 16px; color: #3D3D3D; vertical-align: top">{b}</td><td style="padding: 14px 16px; color: #5C5C5C; vertical-align: top">{c}</td><td style="padding: 14px 16px; color: #5C5C5C; vertical-align: top">{d}</td></tr>' for a, b, c, d in rows)
TH = 'text-align: left; padding: 12px 16px; font-size: 13px; color: #6B6B6B; font-weight: 500'
rules = ''.join(f'<span style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: #F5F5F7; font-size: 13.5px">{TICK("#16182A", 13)}{t}</span>' for t in ['One easing curve: (0.2, 0.7, 0.2, 1)', 'One moving hero: the card', 'Aurora only at Go live', 'No busy loops behind the questions', 'A still version for “reduce motion”'])
sb = f'''<div style="padding: 52px 56px; background: #FFFFFF; box-sizing: border-box; font-family: Inter, system-ui, sans-serif; color: #1F1F1F">
  <h1 style="margin: 0; {HF}; font-size: 40px">Onboarding motion</h1><p style="margin: 8px 0 18px; color: #6B6B6B; font-size: 16px">One screen, one card that grows. Motion only explains what changed.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px">{rules}</div>
  <div style="display: flex; gap: 10px">{strip}</div>
  <div style="margin-top: 26px; border: 1px solid #ECECF0; border-radius: 20px; overflow: hidden"><table style="width: 100%; border-collapse: collapse; font-size: 14.5px; line-height: 1.5"><thead><tr style="background: #F7F7F8"><th scope="col" style="{TH}">Moment</th><th scope="col" style="{TH}">What moves</th><th scope="col" style="{TH}">Timing</th><th scope="col" style="{TH}">With “reduce motion” on</th></tr></thead><tbody>{tbl}</tbody></table></div>
</div>'''
save('ObMotion.dc.html', 'Onboarding motion', sb, 1180)
print('ok')
