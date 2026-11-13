import re, json, os
D = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(D, '..', 'vegam-ui', 'project')
top = open(f'{D}/top.html').read()
FUN_CSS = '''@keyframes vg-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.vg-in{animation:vg-up .6s cubic-bezier(.2,.7,.2,1) both}
@keyframes vg-dot{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-4px);opacity:1}}
.vg-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#8A8FB8;animation:vg-dot 1.2s infinite}
@keyframes vg-wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
.vg-wave{transform-origin:center;animation:vg-wave 1.1s ease-in-out infinite}
@keyframes vg-pulse{0%{box-shadow:0 0 0 0 rgba(31,157,107,.45)}100%{box-shadow:0 0 0 10px rgba(31,157,107,0)}}
.vg-pulse{animation:vg-pulse 1.8s infinite}
@keyframes vg-draw{from{stroke-dashoffset:400}to{stroke-dashoffset:0}}
.vg-draw{stroke-dasharray:400;animation:vg-draw 1.2s .3s cubic-bezier(.6,.1,.2,1) both}
@keyframes vg-scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
.vg-ticker{animation:vg-scroll 18s linear infinite}
@keyframes vg-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.vg-float{animation:vg-float 5s ease-in-out infinite}
.vg-lift{transition:transform .2s ease, box-shadow .2s ease}
.vg-lift:hover{transform:translateY(-3px);box-shadow:0 18px 40px -24px rgba(22,24,42,.35)}
@media (prefers-reduced-motion: reduce){.vg-in,.vg-dot,.vg-wave,.vg-pulse,.vg-draw,.vg-ticker,.vg-float{animation:none!important;opacity:1;stroke-dasharray:none}.vg-lift{transition:none}}
'''
import sys; sys.path.insert(0, D)
import comps
top = top.replace('</style>', FUN_CSS + comps.CSS + '</style>', 1)
PASTEL = ['#F6F6F8'] * 6
INK_ON = ['#16182A'] * 6
def squiggle(word, color='#FF7A1A'):
    return word
    return f'<span style="position: relative; white-space: nowrap">{word}<svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" style="position: absolute; left: -2%; bottom: -0.12em; width: 104%; height: 0.28em; overflow: visible"><path class="vg-draw" d="M3 14 C 60 4, 120 4, 170 11 S 260 18, 297 6" fill="none" stroke="{color}" stroke-width="5" stroke-linecap="round"></path></svg></span>'
def typing():
    return '<span style="align-self: flex-start; display: inline-flex; gap: 4px; padding: 11px 14px; border-radius: 14px 14px 14px 4px; background: #FFFFFF; border: 1px solid #ECECF2"><span class="vg-dot"></span><span class="vg-dot" style="animation-delay: .15s"></span><span class="vg-dot" style="animation-delay: .3s"></span></span>'

header = open(f'{D}/header.html').read()
footer = open(f'{D}/footer.html').read()
end = open(f'{D}/end.html').read()

HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.04em"
EYEBROW = 'font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B'
BTN_DARK = 'display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-size: 16px; font-weight: 500'
BTN_LIGHT = 'display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E6E6E6; color: #1F1F1F; text-decoration: none; font-size: 16px; font-weight: 500'
BTN_QUIET = 'display: inline-flex; align-items: center; height: 46px; padding: 0 22px; border-radius: 999px; background: #EDEDEF; color: #1F1F1F; text-decoration: none; font-weight: 500'
WRAP = 'max-width: 1200px; margin: 0 auto'
CHECK = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
DASH = '<span aria-label="Not included" style="color: #C4C4C8">—</span>'

brands_src = open('/home/user/vegam/frontend/src/content/brands.ts').read()
def logo(k, size=22):
    m = re.search(r'\n\s+' + k + r':\s*\{\s*title:\s*"([^"]*)",\s*hex:\s*"([^"]*)",\s*path:\s*"([^"]*)"', brands_src)
    return f'<svg aria-hidden="true" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{m.group(2)}"><path d="{m.group(3)}"></path></svg>', m.group(1)

def nav(active):
    h = header
    for name in ['Product', 'How it works', 'Pricing', 'Company']:
        if name == active:
            h = h.replace(f'<a href="#" style="text-decoration: none">{name}</a>', f'<a href="#" aria-current="page" style="text-decoration: none; color: #141414; font-weight: 500; border-bottom: 1.5px solid #141414; padding-bottom: 4px">{name}</a>')
    return h

def page(name, title, body, height, active=None, with_chrome=True):
    t = top.replace('<title>Vegham landing page, v2</title>', f'<title>{title}</title>')
    t = re.sub(r'<title>[^<]*</title>', f'<title>{title}</title>', t)
    chrome_top = nav(active) if with_chrome else ''
    chrome_bot = footer if with_chrome else ''
    e = end.replace('"height":6200', f'"height":{height}')
    open(f'{OUT}/{name}', 'w').write(t + '\n' + chrome_top + '\n' + body + '\n' + chrome_bot + '\n' + e)

def page_hero(eyebrow, h1a, h1b, sub, buttons=True):
    b = f'''<div style="margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="#" style="{BTN_DARK}">Start your free pilot</a><a href="#" style="{BTN_LIGHT}">Book a demo</a></div>''' if buttons else ''
    return f'''
  <section style="border-bottom: 1px solid #EFEFEF">
    <div style="{WRAP}; padding: 88px 32px 80px; text-align: center">
      <span style="display: inline-block; padding: 10px 28px; border-top: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; font-size: 15px; color: #3D3D3D">{eyebrow}</span>
      <h1 style="margin: 28px auto 0; max-width: 960px; {HF}; font-size: 68px; line-height: 1.04; letter-spacing: -0.045em; color: #141414">{h1a}<br><span style="color: #8A8A8A">{h1b}</span></h1>
      <p style="margin: 24px auto 0; max-width: 640px; font-size: 19px; line-height: 1.65; color: #3D3D3D">{sub}</p>
      {b}
    </div>
  </section>'''

def cta(title='Give your front desk<br>a night off.', sub='Start a free 30-day pilot and watch your first booking come in.'):
    return f'''
  <section style="padding: 0 32px 112px">
    <div style="max-width: 1136px; margin: 0 auto; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 88px 40px; text-align: center">
      <h2 style="margin: 0; {HF}; font-size: 52px; line-height: 1.05; letter-spacing: -0.045em">{title}</h2>
      <p style="margin: 16px 0 0; font-size: 18px; color: #C3C6DA">{sub}</p>
      <div style="margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500">Start your free pilot</a>
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); color: #FFFFFF; text-decoration: none; font-weight: 500">Book a demo</a>
      </div>
    </div>
  </section>'''

def section_head(eyebrow, a, b, sub=None, center=False):
    al = 'text-align: center; ' if center else ''
    mx = 'margin-left: auto; margin-right: auto; ' if center else ''
    s = f'<p style="margin: 16px 0 0; {mx}max-width: 600px; font-size: 18px; color: #5C5C5C">{sub}</p>' if sub else ''
    return f'''<div style="{al}">
        <span style="{EYEBROW}">{eyebrow}</span>
        <h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">{a}<br><span style="color: #8A8A8A">{b}</span></h2>
        {s}
      </div>'''

def card(inner, extra=''):
    return f'<div style="background: #FFFFFF; border: 1px solid #ECECF0; border-radius: 16px; padding: 16px 18px; font-size: 14px; {extra}">{inner}</div>'

_bc = [0]
def bubble(text, me=False):
    _bc[0] += 1
    d = f'animation-delay: {(_bc[0] % 4) * 0.35:.2f}s; '
    if me:
        return f'<span class="vg-in" style="{d}align-self: flex-end; max-width: 78%; background: #FFFFFF; border: 1px solid #ECECF2; padding: 8px 12px; border-radius: 14px 14px 4px 14px">{text}</span>'
    return f'<span class="vg-in" style="{d}align-self: flex-start; max-width: 82%; background: #EEF0FF; padding: 8px 12px; border-radius: 14px 14px 14px 4px">{text}</span>'

def pill(text, bg='#F1F1F3', fg='#3D3D3D'):
    return f'<span style="padding: 3px 10px; border-radius: 999px; background: {bg}; color: {fg}; font-size: 12.5px">{text}</span>'

def mock(inner, bg='#F7F7F8'):
    return f'''<div style="flex: 1 1 480px; min-width: 0; min-height: 380px; border-radius: 28px; background: {bg}; border: 0; padding: 32px; display: flex; flex-direction: column; justify-content: center; gap: 10px; font-size: 14px; line-height: 1.5">{inner}<span style="align-self: flex-end; margin-top: 6px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #A3A3A3">Sample</span></div>'''

def feature_row(num, title, body, points, mock_html, flip=False):
    k = (int(num) - 1) % 6
    mock_html = mock_html.replace('background: #F7F7F8; border: 0;', f'background: {PASTEL[k]}; border: 0;', 1)
    pts = ''.join(f'<li style="display: flex; gap: 10px; align-items: flex-start"><span style="margin-top: 4px">{CHECK}</span>{p}</li>' for p in points)
    text = f'''<div style="flex: 1 1 420px; min-width: 0">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: {PASTEL[k]}; color: {INK_ON[k]}; font-size: 14px; font-weight: 600">{num}</span>
          <h3 style="margin: 16px 0 0; {HF}; font-size: 36px; line-height: 1.1">{title}</h3>
          <p style="margin: 14px 0 0; max-width: 460px; font-size: 17px; color: #5C5C5C">{body}</p>
          <ul style="margin: 22px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 15.5px; color: #3D3D3D">{pts}</ul>
        </div>'''
    parts = [mock_html, text] if flip else [text, mock_html]
    return f'''
      <div class="vg-rv" style="display: flex; flex-wrap: wrap; align-items: center; gap: 48px 72px; padding: 72px 0; border-top: 1px solid #EFEFEF">
        {parts[0]}
        {parts[1]}
      </div>'''

# ------------------------------------------------------------------ PRODUCT
wa, _ = logo('whatsapp', 18); ig, _ = logo('instagram', 18)
product_rows = ''.join([
    feature_row('01', 'Chat receptionist', 'Replies on WhatsApp, Instagram, Messenger and your website in seconds, using only what you’ve taught it.',
        ['Prices, timings, services and directions', 'Understands English, Hindi and mixed messages', 'Sends the chat to you when it isn’t sure'],
        mock(f'''<div style="display: flex; align-items: center; gap: 8px; color: #6B6B6B; font-size: 13px">{wa} WhatsApp · Riya</div>
          {bubble("Hi! Anything free tomorrow evening?", True)}{bubble("Hi Riya! 6:30 PM is free. Shall I book it?")}{bubble("Yes please", True)}{bubble("Booked ✓ I’ll send a reminder in the morning.")}{typing()}''')),
    feature_row('02', 'Voice receptionist', 'Answers your phone line with a natural voice, books visits and transfers to your team when a caller asks for a person.',
        ['Picks up every call, even at 11 PM', 'Missed calls get a WhatsApp within seconds', 'Every call recorded and summarised'],
        mock(f'''{card('<span style="display: flex; justify-content: space-between"><b style="font-weight: 600">Incoming call · +91 98•• ••21</b><span style="color: #1F9D6B">Live · 01:12</span></span>' + '<span aria-hidden="true" style="margin-top: 14px; display: flex; align-items: center; gap: 3px; height: 34px">' + ''.join(f'<span class="vg-wave" style="width: 4px; height: {h}px; background: {"#7C8CFF" if i < 12 else "#C9CCF5"}; border-radius: 2px; animation-delay: {(i % 7) * 0.12:.2f}s"></span>' for i, h in enumerate([8,18,28,14,22,10,30,16,24,12,20,26,10,18,8,14,22,12,6,16])) + '</span><span style="margin-top: 12px; display: block; color: #5C5C5C">“Saturday 4 PM works. Shall I book it for you?”</span>')}
          {card('<span style="font-size: 12px; color: #8A8A8A">Call summary</span><span style="display: block; margin-top: 4px">Asked about Saturday hours. Booked Sat 4:00 PM. Sent confirmation on WhatsApp.</span>')}'''), flip=True),
    feature_row('03', 'Bookings and reminders', 'Customers book in chat, on a call or with your booking link. Vegham checks your calendar, confirms, and reminds them the day before.',
        ['Booking page you can share anywhere', 'Reminders with Confirm / Reschedule', 'Works with Google Calendar and Calendly'],
        mock(f'''{card('<b style="font-weight: 600">Today · 6 bookings</b>' + ''.join(f'<span style="display: flex; gap: 12px; padding: 9px 0; border-top: 1px solid #F0F0F3; margin-top: {8 if i==0 else 0}px"><span style="width: 44px; color: {"#16182A" if i==0 else "#8A8A8A"}; font-weight: {600 if i==0 else 400}">{t}</span><span style="flex: 1">{n}</span>{s}</span>' for i,(t,n,s) in enumerate([("11:30","A. Khan",pill("Confirmed","#E3F1D8","#385418")),("13:00","S. Das",pill("Confirmed","#E3F1D8","#385418")),("16:30","M. Rao",pill("Reminder sent","#FFF0E3","#9A4100"))])))}''')),
    feature_row('04', 'Follow-ups and reviews', 'Gentle nudges to people who went quiet, rebooking reminders, and review requests after a good visit.',
        ['Stops the moment someone replies or says STOP', 'Asks happy customers for a Google review', 'Win-back messages to opted-in customers'],
        mock(f'''{card('<span style="font-size: 12px; color: #8A8A8A">Follow-up · day 2</span><span style="display: block; margin-top: 4px">Hi Arjun, just checking: would you still like the group booking for 8? Happy to hold Saturday.</span>')}
          {card('<span style="display: flex; justify-content: space-between; align-items: center"><span>Review request sent to S. Das</span>' + pill('★ 5 left','#FFF6D6','#7A5A00') + '</span>')}'''), flip=True),
    feature_row('05', 'One team inbox', 'Every chat and call from every channel in one place. Step into any conversation and the AI steps back.',
        ['Assign chats to teammates', 'Internal notes only your team sees', 'Saved replies with a / shortcut'],
        mock(f'''{card(''.join(f'<span style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: {"0" if i==0 else "1px solid #F0F0F3"}"><span style="display: flex; align-items: center; gap: 10px">{ic}<span><b style="font-weight: 600">{n}</b><span style="display: block; color: #6B6B6B; font-size: 13px">{m}</span></span></span>{s}</span>' for i,(ic,n,m,s) in enumerate([(wa,"Riya","Booked ✓ tomorrow 6:30 PM",pill("AI")),(ig,"Arjun","Price for a group of 8?",pill("Needs you","#FFF0E3","#9A4100")),(logo('messenger',18)[0],"Meera","Thanks! See you then",pill("AI"))])))}''')),
    feature_row('06', 'Morning report and your assistant', 'At 8 AM you get a WhatsApp with what came in, what was booked and what needs you. Ask your assistant anything during the day.',
        ['“Bookings today?” “Block Friday afternoon”', 'Weekly “what Vegham won you” summary', 'Reports by location for multi-branch teams'],
        mock(f'''<div style="background: #16182A; color: #FFFFFF; border-radius: 16px; padding: 18px 20px"><span style="font-size: 12px; color: #A5ABDB">Good morning · while you were asleep</span><div style="margin-top: 10px; display: flex; gap: 28px"><span><span style="display: block; font-family: 'Inter Tight', sans-serif; font-size: 28px">14</span><span style="font-size: 12px; color: #A5ABDB">replied</span></span><span><span style="display: block; font-family: 'Inter Tight', sans-serif; font-size: 28px">6</span><span style="font-size: 12px; color: #A5ABDB">booked</span></span><span><span style="display: block; font-family: 'Inter Tight', sans-serif; font-size: 28px">2</span><span style="font-size: 12px; color: #A5ABDB">calls saved</span></span></div></div>
          {bubble("Bookings today?", True)}{bubble("6 today. First is A. Khan at 11:30. One is unconfirmed: M. Rao at 4:30 PM.")}'''), flip=True),
])
integrations = [('googlecalendar','Google Calendar'),('googlesheets','Google Sheets'),('stripe','Stripe'),('shopify','Shopify'),('zoho','Zoho'),('googlemaps','Google Business'),('meta','Meta'),('whatsapp','WhatsApp Business')]
def integ_tile(k, label):
    try:
        ic, _ = logo(k, 26)
    except Exception:
        ic = f'<span style="font-weight: 600">{label[0]}</span>'
    return f'<div class="vg-lift" style="flex: 1 1 220px; display: flex; align-items: center; gap: 14px; padding: 18px 20px; border: 1px solid #ECECF0; border-radius: 16px; background: #FFFFFF"><span style="width: 44px; height: 44px; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{ic}</span><span style="font-size: 15.5px">{label}</span></div>'
def tile(bg, fg, inner, basis='300px', extra=''):
    return f'<div class="vg-lift" style="flex: 1 1 {basis}; min-height: 230px; box-sizing: border-box; border-radius: 26px; background: {bg}; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; gap: 18px; color: {fg}; {extra}">{inner}</div>'
TT = lambda t, b: f'<span><span style="display: block; font-size: 19px; font-weight: 500; color: #1F1F1F">{t}</span><span style="display: block; margin-top: 4px; font-size: 14.5px; color: #5C5C5C">{b}</span></span>'
BENTO = f'''<div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 14px">
        {tile(PASTEL[2], INK_ON[2], '<div style="display: flex; flex-wrap: wrap; gap: 8px 18px; font-family: Inter Tight, sans-serif; font-size: 40px; letter-spacing: -0.03em; line-height: 1.15"><span>Hello</span><span style="opacity: .75">नमस्ते</span><span style="opacity: .6">హలో</span><span style="opacity: .5">வணக்கம்</span><span style="opacity: .4">Hola</span></div>' + TT('Speaks their language', 'English, Hindi, mixed Hinglish and more, in the same chat.'), '560px')}
        {tile(PASTEL[4], INK_ON[4], '<span style="font-family: Inter Tight, sans-serif; font-size: 72px; line-height: 1; letter-spacing: -0.05em">2:14<span style="font-size: 28px"> AM</span></span>' + TT('Awake when you’re not', 'Late-night enquiries get the same answer as daytime ones.'))}
        {tile(PASTEL[0], INK_ON[0], '<span style="display: inline-flex; align-items: center; gap: 10px; font-size: 15px; color: #1E6B47"><span class="vg-pulse" style="width: 10px; height: 10px; border-radius: 50%; background: #1F9D6B"></span>Replying now</span><span style="font-family: Inter Tight, sans-serif; font-size: 64px; line-height: 1; letter-spacing: -0.05em; color: #14432D">Seconds,<br>not hours.</span>' + TT('Fast first reply', 'People book with whoever answers first.'))}
        {tile(PASTEL[5], INK_ON[5], '<div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px"><span style="align-self: flex-end; background: #FFFFFF; padding: 7px 12px; border-radius: 12px 12px 4px 12px; font-weight: 600">STOP</span><span style="align-self: flex-start; background: #FFFFFF; padding: 7px 12px; border-radius: 12px 12px 12px 4px; color: #3D3D3D">Done. You won’t get messages from us again.</span></div>' + TT('Polite by default', 'Opt-in only. STOP always works, instantly.'))}
        {tile(PASTEL[3], INK_ON[3], '<div style="background: #FFFFFF; border-radius: 14px; padding: 12px 14px; font-size: 14px"><span style="display: flex; align-items: center; gap: 8px; color: #1D5F86; font-weight: 500"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>AI paused for this chat</span><span style="display: inline-flex; gap: 4px; margin-top: 10px; align-items: center; color: #8A8A8A">Vinay is typing <span class="vg-dot"></span><span class="vg-dot" style="animation-delay: .15s"></span><span class="vg-dot" style="animation-delay: .3s"></span></span></div>' + TT('You can always step in', 'Start typing and the AI steps back.'))}
        {tile(PASTEL[1], INK_ON[1], '<div style="display: flex; flex-direction: column; gap: 14px; font-size: 13.5px; color: #3D3D3D">' + ''.join(f'<span><span style="display: flex; justify-content: space-between"><span>{a}</span><span>{b}</span></span><span style="display: block; margin-top: 6px; height: 6px; border-radius: 3px; background: #FFFFFF; position: relative"><span style="position: absolute; left: {p}%; top: -5px; width: 16px; height: 16px; border-radius: 50%; background: #9A4A0B; border: 3px solid #FFFFFF; box-sizing: border-box; transform: translateX(-50%)"></span></span></span>' for a,b,p in [("Friendly","Formal",30),("Short","Detailed",55)]) + '</div>' + TT('Sounds like you', 'Pick a name, tone and voice for your assistant.'))}
      </div>'''
product = page_hero('Product', 'One AI front desk.', 'Every conversation ' + squiggle('handled.'), 'Six things Vegham does for your business, every hour of every day, so your team can focus on the customer in front of them.') + f'''
  <section>
    <div style="{WRAP}; padding: 88px 32px 32px">
      {section_head('See it in action', 'Pick a channel.', 'Watch Vegham handle it.', center=True)}
      <div style="margin-top: 40px">{comps.demo()}</div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 40px 32px 72px">{product_rows}
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 0 32px 104px">
      {section_head('The little things', 'Small touches', 'your customers will notice.')}
      {BENTO}
    </div>
  </section>
  <section style="background: #F7F7F8">
    <div style="{WRAP}; padding: 104px 32px">
      {section_head('Integrations', 'Works with the tools', 'you already use.', 'Keep your calendar, sheets and payments. Vegham fits around them.')}
      <div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 12px">{''.join(integ_tile(k,l) for k,l in integrations)}</div>
    </div>
  </section>
  <div style="height: 112px"></div>''' + cta()
page('Product.dc.html', 'Vegham product', product, 7600, 'Product')

# ------------------------------------------------------------------ HOW IT WORKS
steps = [
    ('01', 'Day 1', 'Connect your channels', 'Link your WhatsApp number, phone line, Instagram and website in guided steps. Keep the numbers customers already know.',
     ['WhatsApp Business number', 'Phone line or call forwarding', 'Instagram professional account (optional)']),
    ('02', 'Day 1', 'Teach it your business', 'Add your services, prices, hours and FAQs, or paste your website and let Vegham read it. Choose its name and tone.',
     ['Services and prices', 'Opening hours and holidays', 'Answers to common questions']),
    ('03', 'Day 1', 'Test it before going live', 'Chat with your assistant and call it yourself. Fix any answer in one click; it learns immediately.',
     ['Practice chat and test call', 'Edit any answer', 'Set when it hands over to you']),
    ('04', 'Day 2 onwards', 'Go live and wake up to bookings', 'Vegham answers every customer. Each morning a WhatsApp report shows what came in and what needs you.',
     ['Morning report at 8 AM', 'Weekly results summary', 'Change anything, any time']),
]
def step_html(n, when, t, body, need, last):
    items = ''.join(f'<li style="display: flex; gap: 8px; align-items: flex-start"><span style="margin-top: 3px">{CHECK}</span>{x}</li>' for x in need)
    line = '' if last else '<span aria-hidden="true" style="position: absolute; left: 23px; top: 56px; bottom: -8px; width: 2px; background: #EDEDF0"><span class="vg-progress" style="position: absolute; inset: 0; background: #16182A"></span></span>'
    return f'''<div class="vg-rv" style="position: relative; display: flex; gap: 28px; padding-bottom: 56px">
        {line}
        <span style="flex: none; position: relative; width: 48px; height: 48px; border-radius: 50%; background: {PASTEL[int(n)-1]}; display: inline-flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 600; color: {INK_ON[int(n)-1]}">{n}</span>
        <div style="flex: 1; display: flex; flex-wrap: wrap; gap: 24px 48px">
          <div style="flex: 1 1 380px">
            {pill(when, '#FFFFFF', '#3D3D3D').replace('background: #FFFFFF;', 'background: #FFFFFF; border: 1px solid #E6E6E6;')}
            <h3 style="margin: 12px 0 0; {HF}; font-size: 32px; line-height: 1.12">{t}</h3>
            <p style="margin: 10px 0 0; font-size: 17px; color: #5C5C5C">{body}</p>
          </div>
          <div class="vg-lift" style="flex: 1 1 320px; background: {PASTEL[int(n)-1]}; border-radius: 22px; padding: 24px 26px">
            <span style="{EYEBROW}">You’ll need</span>
            <ul style="margin: 14px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 15px; color: #3D3D3D">{items}</ul>
          </div>
        </div>
      </div>'''
how = page_hero('How it works', 'Live in a ' + squiggle('day.'), 'Not weeks.', 'No new phone, no new habits. We set you up, you test it, and your front desk is answering customers by tomorrow.') + f'''
  <section>
    <div style="{WRAP}; padding: 104px 32px 48px">
      {''.join(step_html(*s, last=(i == len(steps) - 1)) for i, s in enumerate(steps))}
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 0 32px 104px; display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: center">
      <div style="flex: 1 1 380px">{section_head('Every morning', 'Wake up to this.', 'Not a pile of messages.', 'At 8 AM a WhatsApp tells you what came in overnight, what was booked and the one thing that needs you.')}</div>
      <div class="vg-rv" style="flex: 1 1 440px">{comps.report_card()}</div>
    </div>
  </section>
  <section style="position: relative; overflow: hidden; background: #12141F; color: #FFFFFF">
    {comps.aurora()}
    <div style="position: relative; {WRAP}; padding: 104px 32px">
      <span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8C90A8">The 30-day pilot</span>
      <h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">See the difference<br><span style="color: #8C90A8">before you pay.</span></h2>
      <div style="margin-top: 56px; display: flex; flex-wrap: wrap; gap: 0 40px">
        <div style="flex: 1 1 280px; padding: 28px 0; border-top: 1px solid #2A2D40"><span style="font-size: 13px; color: #A5ABDB">Week 1</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 24px">Set up and measure</h3><p style="margin: 0; color: #A3A7BD">We set you up and record today’s baseline: replies, missed calls and bookings.</p></div>
        <div style="flex: 1 1 280px; padding: 28px 0; border-top: 1px solid #2A2D40"><span style="font-size: 13px; color: #A5ABDB">Weeks 2–4</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 24px">Vegham runs your front desk</h3><p style="margin: 0; color: #A3A7BD">You see every result in your morning report.</p></div>
        <div style="flex: 1 1 280px; padding: 28px 0; border-top: 1px solid #2A2D40"><span style="font-size: 13px; color: #A5ABDB">Day 30</span><h3 style="margin: 10px 0 6px; {HF}; font-size: 24px">You decide</h3><p style="margin: 0; color: #A3A7BD">Choose a plan, or stop. Nothing is charged without your say.</p></div>
      </div>
    </div>
  </section>
  <div style="height: 112px"></div>''' + cta('Ready when you are.', 'Most businesses are answering customers with Vegham the next day.')
page('HowItWorks.dc.html', 'How Vegham works', how, 4500, 'How it works')

# ------------------------------------------------------------------ PRICING
ps = open('/home/user/vegam/frontend/src/content/pricing.ts').read()
groups = re.findall(r'title: "([^"]+)",\s*rows: \[(.*?)\n    \],', ps, re.S)
def cellv(v):
    v = v.strip()
    if v == 'true': return CHECK
    if v == 'false': return DASH
    return v.strip('"')
sets = {'all': ('true','true','true'), 'growthUp': ('false','true','true'), 'proOnly': ('false','false','true')}
rows_html = ''
for gt, body in groups:
    rows_html += f'<tr><th colspan="4" scope="colgroup" style="text-align: left; padding: 28px 16px 10px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B; font-weight: 500">{gt}</th></tr>'
    for m in re.finditer(r'\{ name: "([^"]+)", info: "([^"]+)", values: (\{[^}]*\}|\w+) \}', body):
        name, info, vals = m.groups()
        if vals in sets:
            s, g, p = sets[vals]
        else:
            d = dict(re.findall(r'(\w+): ("[^"]*"|true|false)', vals)); s, g, p = d['starter'], d['growth'], d['pro']
        rows_html += f'<tr style="border-top: 1px solid #EFEFEF"><th scope="row" style="text-align: left; padding: 14px 16px; font-weight: 400"><span style="display: block; font-size: 15px; color: #1F1F1F">{name}</span><span style="display: block; font-size: 13px; color: #8A8A8A">{info}</span></th><td style="padding: 14px 16px; text-align: center; font-size: 14.5px">{cellv(s)}</td><td style="padding: 14px 16px; text-align: center; font-size: 14.5px; background: #FAFAFF">{cellv(g)}</td><td style="padding: 14px 16px; text-align: center; font-size: 14.5px">{cellv(p)}</td></tr>'
def plan(name, desc, price, pre, feats, featured=False, cta_label='Start free pilot', yearly=None):
    lis = ''.join(f'<li style="display: flex; gap: 10px; align-items: flex-start"><span style="margin-top: 3px">{CHECK}</span>{f}</li>' for f in feats)
    border = '#C9CCF5' if featured else '#E8E8EB'
    shadow = 'box-shadow: 0 24px 60px -30px rgba(42,47,145,0.35);' if featured else ''
    tag = pill('Recommended', '#EEF0FF', '#2A2F91') if featured else ''
    btn = f'background: #16182A; color: #FFFFFF' if featured else 'background: #EDEDEF; color: #1F1F1F'
    pre_html = f'<span style="font-family: Inter, sans-serif; font-size: 15px; color: #8A8A8A">{pre} </span>' if pre else ''
    card = f'''<div style="flex: 1 1 300px; background: #FFFFFF; border: {'0' if featured else '1px solid ' + border}; border-radius: {'20px' if featured else '22px'}; padding: 32px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box">
          <span style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 18px; font-weight: 500">{name}</span>{tag}</span>
          <span style="margin-top: 6px; font-size: 14.5px; color: #6B6B6B">{desc}</span>
          <span style="margin-top: 28px; font-family: 'Inter Tight', sans-serif; font-size: 48px; letter-spacing: -0.03em">{pre_html}<span class="vg-m">{price}</span><span class="vg-y">{yearly or price}</span><span style="font-family: Inter, sans-serif; font-size: 15px; color: #8A8A8A"> / month</span></span><span style="margin-top: 4px; font-size: 13px; color: #8A8A8A"><span class="vg-m">Billed monthly</span><span class="vg-y">Billed yearly · 2 months free</span></span>
          <a href="#" style="margin-top: 24px; display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 999px; {btn}; text-decoration: none; font-weight: 500">{cta_label}</a>
          <ul style="margin: 24px 0 0; padding: 24px 0 0; border-top: 1px solid #F0F0F0; list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 15px; color: #3D3D3D">{lis}</ul>
        </div>'''
    if featured:
        return f'<div class="vg-border vg-lift" style="flex: 1 1 300px; padding: 2px; border-radius: 22px; {shadow}">{card}</div>'
    return card.replace('<div style="flex: 1 1 300px;', '<div class="vg-lift" style="flex: 1 1 300px;', 1)
faqs = re.findall(r'q: "([^"]+)",\s*a: "([^"]+)"', ps)[:5]
faq_html = ''.join(f'<details{" open" if i==0 else ""} style="border-bottom: 1px solid #EBEBEB; padding: 18px 0"><summary style="font-size: 17px; cursor: pointer">{q}</summary><p style="margin: 10px 0 0; color: #6B6B6B">{a}</p></details>' for i,(q,a) in enumerate(faqs))
toggle = '''<div class="vg-billing" style="margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">
        <div role="radiogroup" aria-label="Billing" style="display: inline-flex; padding: 4px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E8E8EB; font-size: 14px"><label for="vg-mo" style="padding: 7px 18px; border-radius: 999px">Monthly</label><label for="vg-yr" style="padding: 7px 18px; border-radius: 999px">Yearly <span style="margin-left: 4px; padding: 2px 8px; border-radius: 999px; background: #E9F7EF; color: #1E6B47; font-size: 12px">2 months free</span></label></div>
      </div>'''
pricing = f'''
  <section style="background: #F7F7F8">
    <div style="{WRAP}; padding: 88px 32px 104px; text-align: center">
      <span style="display: inline-block; padding: 10px 28px; border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6; font-size: 15px; color: #3D3D3D">Pricing</span>
      <h1 style="margin: 28px auto 0; {HF}; font-size: 68px; line-height: 1.04; letter-spacing: -0.045em; color: #141414">Simple pricing.<br><span style="color: #8A8A8A">Start with a {squiggle('free pilot.')}</span></h1>
      <p style="margin: 22px auto 0; max-width: 560px; font-size: 19px; color: #3D3D3D">30 days free on any plan. WhatsApp fees passed on at cost, nothing hidden.</p>
      <input type="radio" name="vg-bill" id="vg-mo" checked style="position: absolute; opacity: 0" /><input type="radio" name="vg-bill" id="vg-yr" style="position: absolute; opacity: 0" />
      {toggle}
      <div style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 16px; text-align: left; align-items: stretch">
        {plan('Starter', 'For a single location losing customers to slow replies and missed calls', '₹2,999', '', ['AI replies on WhatsApp', 'Missed call → WhatsApp', 'Booking page and reminders', 'Morning report', '2 team seats'], yearly='₹2,499')}
        {plan('Growth', 'For a busy business with steady calls and social media enquiries', '₹7,999', '', ['Everything in Starter', 'AI answers calls · 300 min', 'Instagram, Messenger, website chat', 'Ad leads, follow-ups and reviews', '5 team seats'], featured=True, yearly='₹6,666')}
        {plan('Pro', 'For multi-location businesses and teams that sell actively', '₹19,999', 'From', ['Everything in Growth', 'AI calls new leads', 'Multi-branch and integrations', 'Payment links and deposits', 'Custom AI voice, priority support'], cta_label='Talk to us', yearly='₹16,666')}
      </div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px 0">
      <div style="border-radius: 32px; background: {PASTEL[4]}; padding: 48px; display: flex; flex-wrap: wrap; gap: 40px 64px; align-items: center">
        <div style="flex: 1 1 380px">
          <span style="{EYEBROW}; color: #7A5A00">Quick maths</span>
          <h2 style="margin: 12px 0 0; {HF}; font-size: 42px; line-height: 1.1; color: #2B2200">What is one missed<br>customer worth?</h2>
          <div style="margin-top: 28px; display: flex; flex-direction: column; gap: 22px; max-width: 420px; font-size: 15px; color: #3D3420">
            <div><span style="display: flex; justify-content: space-between"><span>Average booking value</span><b style="font-weight: 600">₹1,500</b></span><span style="display: block; margin-top: 10px; height: 6px; border-radius: 3px; background: #FFFFFF; position: relative"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 30%; border-radius: 3px; background: #2B2200"></span><span style="position: absolute; left: 30%; top: -6px; width: 18px; height: 18px; border-radius: 50%; background: #FFFFFF; border: 2px solid #2B2200; box-sizing: border-box; transform: translateX(-50%)"></span></span></div>
            <div><span style="display: flex; justify-content: space-between"><span>Missed enquiries per week</span><b style="font-weight: 600">5</b></span><span style="display: block; margin-top: 10px; height: 6px; border-radius: 3px; background: #FFFFFF; position: relative"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 25%; border-radius: 3px; background: #2B2200"></span><span style="position: absolute; left: 25%; top: -6px; width: 18px; height: 18px; border-radius: 50%; background: #FFFFFF; border: 2px solid #2B2200; box-sizing: border-box; transform: translateX(-50%)"></span></span></div>
          </div>
        </div>
        <div class="vg-float" style="flex: 1 1 320px; background: #FFFFFF; border-radius: 24px; padding: 32px">
          <span style="font-size: 14px; color: #6B6B6B">Walking out of your door each month</span>
          <span style="display: block; margin-top: 6px; font-family: 'Inter Tight', sans-serif; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">₹32,500</span>
          <span style="display: block; margin-top: 14px; padding-top: 14px; border-top: 1px solid #F0F0F0; font-size: 15px; color: #3D3D3D">Growth costs <b style="font-weight: 600">₹7,999</b> a month.</span>
          <span style="display: block; margin-top: 10px; font-size: 12px; color: #A3A3A3">Example only: drag the sliders to use your own numbers.</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px">
      {section_head('Compare plans', 'Everything in each plan,', 'side by side.')}
      <div style="margin-top: 40px; overflow-x: auto">
        <table style="width: 100%; min-width: 720px; border-collapse: collapse">
          <thead><tr style="position: sticky; top: 0; background: #FFFFFF"><th scope="col" style="text-align: left; padding: 16px; width: 46%"></th><th scope="col" style="padding: 16px; font-size: 16px; font-weight: 500">Starter<span style="display: block; font-size: 13px; color: #8A8A8A; font-weight: 400">₹2,999</span></th><th scope="col" style="padding: 16px; font-size: 16px; font-weight: 500; background: #FAFAFF; border-radius: 14px 14px 0 0">Growth<span style="display: block; font-size: 13px; color: #8A8A8A; font-weight: 400">₹7,999</span></th><th scope="col" style="padding: 16px; font-size: 16px; font-weight: 500">Pro<span style="display: block; font-size: 13px; color: #8A8A8A; font-weight: 400">from ₹19,999</span></th></tr></thead>
          <tbody>{rows_html}</tbody>
        </table>
      </div>
    </div>
  </section>
  <section style="background: #F7F7F8">
    <div style="{WRAP}; padding: 104px 32px; display: flex; flex-wrap: wrap; gap: 40px 64px">
      <h2 style="flex: 1 1 300px; margin: 0; {HF}; font-size: 48px; line-height: 1.08">Pricing<br><span style="color: #8A8A8A">questions</span></h2>
      <div style="flex: 2 1 560px">{faq_html}</div>
    </div>
  </section>
  <div style="height: 112px"></div>''' + cta()
page('Pricing.dc.html', 'Vegham pricing', pricing, 5800, 'Pricing')

# ------------------------------------------------------------------ COMPANY
values = [
    ('Every customer deserves an answer', 'A message left unanswered is a person left waiting. We build so nobody has to wait.'),
    ('Built in India, for everyone', 'Made for how people really talk: in many languages, on WhatsApp, on the phone.'),
    ('Owners stay in charge', 'The AI handles the routine. You decide what it says and when it hands over.'),
    ('Respect by default', 'Opt-in only, STOP always works, and your customers’ data stays yours.'),
]
company = f'''
  <section style="border-bottom: 1px solid #EFEFEF">
    <div style="{WRAP}; padding: 104px 32px 96px; display: flex; flex-wrap: wrap; gap: 40px 72px; align-items: flex-end">
      <div style="flex: 2 1 560px">
        <span style="{EYEBROW}">Company</span>
        <h1 style="margin: 18px 0 0; {HF}; font-size: 68px; line-height: 1.04; letter-spacing: -0.045em; color: #141414">We’re building the front desk<br><span style="color: #8A8A8A">every business {squiggle('deserves.')}</span></h1>
      </div>
      <div style="flex: 1 1 320px">
        <span style="font-family: 'Inter Tight', sans-serif; font-size: 56px; line-height: 1; letter-spacing: -0.03em; color: #16182A">वेग</span>
        <p style="margin: 12px 0 0; font-size: 16px; color: #5C5C5C"><b style="font-weight: 600; color: #1F1F1F">Vegham</b> comes from the Sanskrit word for speed. It’s our promise: every customer answered in seconds.</p>
      </div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px; display: flex; flex-wrap: wrap; gap: 40px 72px">
      <div style="flex: 1 1 320px"><span style="{EYEBROW}">Why we exist</span></div>
      <div style="flex: 2 1 560px; font-size: 21px; line-height: 1.6; color: #2B2B2B">
        <p style="margin: 0">Most businesses don’t lose customers because of their service. They lose them in the first few minutes: a WhatsApp that sits unread, a call nobody could pick up, a follow-up nobody had time to send.</p>
        <p style="margin: 22px 0 0; color: #5C5C5C">Big companies solve this with call centres and large teams. Vegham gives every business the same: an AI front desk that answers in seconds, books the visit and follows up, in the language the customer speaks.</p>
      </div>
    </div>
  </section>
  <section style="border-top: 1px solid #EFEFEF; border-bottom: 1px solid #EFEFEF; padding: 28px 0; overflow: hidden">
    <div class="vg-rowL" style="display: flex; width: max-content; font-family: 'Inter Tight', sans-serif; font-size: 88px; line-height: 1; letter-spacing: -0.04em; color: #16182A; white-space: nowrap">
      {''.join(f'<span{" aria-hidden=\"true\"" if h else ""} style="display: flex; gap: 48px; padding-right: 48px">' + ''.join(f'<span>{w}</span><span style="color: {c}">✦</span>' for w, c in [('वेग', '#FF7A1A'), ('speed', '#7C8CFF'), ('వేగం', '#3DD68C'), ('வேகம்', '#F472B6'), ('ವೇಗ', '#F2C14E'), ('বেগ', '#7C8CFF')]) + '</span>' for h in (0, 1))}
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px">
      {section_head('What we believe', 'Four things', 'we won’t compromise on.')}
      <div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 16px">
        {''.join(f'<div class="vg-lift" style="flex: 1 1 260px; background: {PASTEL[i]}; border-radius: 24px; padding: 28px; min-height: 220px"><span style="display: inline-flex; width: 36px; height: 36px; border-radius: 10px; background: #FFFFFF; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: {INK_ON[i]}">0{i+1}</span><h3 style="margin: 14px 0 8px; {HF}; font-size: 24px; line-height: 1.2">{t}</h3><p style="margin: 0; color: #6B6B6B">{b}</p></div>' for i,(t,b) in enumerate(values))}
      </div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px; display: flex; flex-wrap: wrap; gap: 16px">
      <div style="flex: 1 1 360px; border: 1px solid #ECECF0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 10px">
        <span style="{EYEBROW}">Talk to us</span>
        <h3 style="margin: 4px 0 0; {HF}; font-size: 30px">Questions, partnerships, press</h3>
        <p style="margin: 0; color: #6B6B6B">We reply within one working day.</p>
        <span style="margin-top: 10px; font-size: 17px">[contact email]</span>
        <a href="#" style="margin-top: 14px; align-self: flex-start; {BTN_QUIET}">Contact us</a>
      </div>
      <div style="flex: 1 1 360px; border: 1px solid #ECECF0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 10px">
        <span style="{EYEBROW}">Careers</span>
        <h3 style="margin: 4px 0 0; {HF}; font-size: 30px">Build Vegham with us</h3>
        <p style="margin: 0; color: #6B6B6B">We’re a small team that cares about craft, speed and the businesses we serve.</p>
        <a href="#" style="margin-top: 14px; align-self: flex-start; {BTN_QUIET}">See open roles</a>
      </div>
      <div style="flex: 1 1 360px; border: 1px solid #ECECF0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 10px">
        <span style="{EYEBROW}">Registered office</span>
        <h3 style="margin: 4px 0 0; {HF}; font-size: 30px">[Company legal name]</h3>
        <p style="margin: 0; color: #6B6B6B">[Registered address]</p>
      </div>
    </div>
  </section>''' + cta('Let’s answer every<br>customer together.', 'Start a free 30-day pilot, or talk to us first.')
page('Company.dc.html', 'About Vegham', company, 4000, 'Company')

# ------------------------------------------------------------------ AUTH
gl, _ = logo('google', 18)
FIELD = 'display: block; width: 100%; box-sizing: border-box; height: 48px; padding: 0 16px; border: 1px solid #E2E2E6; border-radius: 12px; background: #FFFFFF; font: inherit; font-size: 15.5px; color: #1F1F1F'
LABEL = 'display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #2B2B2B'
def auth_shell(form, side, title):
    body = f'''
  <div style="display: flex; flex-wrap: wrap; min-height: 960px">
    <div style="flex: 1 1 560px; min-width: 0; display: flex; flex-direction: column; padding: 28px 48px">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 24px; letter-spacing: -0.045em; color: #16182A">vegham</span>
        <a href="#" style="font-size: 14.5px; color: #5C5C5C; text-decoration: none">← Back to site</a>
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 48px 0">
        <div style="width: 100%; max-width: 400px">{form}</div>
      </div>
      <p style="margin: 0; text-align: center; font-size: 13px; color: #8A8A8A">By continuing you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
    </div>
    <div style="flex: 1 1 560px; min-width: 0; padding: 16px">
      <div style="height: 100%; min-height: 600px; box-sizing: border-box; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 56px; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; overflow: hidden">{side}</div>
    </div>
  </div>'''
    return body
google_btn = f'<a href="#" style="display: flex; align-items: center; justify-content: center; gap: 10px; height: 50px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; color: #1F1F1F; text-decoration: none; font-weight: 500">{gl}Continue with Google</a>'
divider = '<div style="margin: 24px 0; display: flex; align-items: center; gap: 14px; font-size: 13px; color: #8A8A8A"><span style="flex: 1; height: 1px; background: #ECECEF"></span>or<span style="flex: 1; height: 1px; background: #ECECEF"></span></div>'
seg = '<div role="tablist" aria-label="Sign in with" style="display: flex; padding: 4px; border-radius: 999px; background: #F3F3F5; font-size: 14px; margin-bottom: 18px"><span role="tab" aria-selected="true" style="flex: 1; text-align: center; padding: 7px 0; border-radius: 999px; background: #FFFFFF; box-shadow: 0 1px 2px rgba(0,0,0,0.08); font-weight: 500">Phone</span><span role="tab" style="flex: 1; text-align: center; padding: 7px 0; color: #5C5C5C">Email</span></div>'
phone_field = f'<label for="ph" style="{LABEL}">Mobile number</label><div style="display: flex; gap: 8px"><span style="flex: none; display: inline-flex; align-items: center; gap: 6px; height: 48px; padding: 0 14px; border: 1px solid #E2E2E6; border-radius: 12px; font-size: 15.5px">🇮🇳 +91 <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg></span><input id="ph" type="tel" placeholder="98765 43210" style="{FIELD}"></div>'
def tk(dot, t, s):
    return f'<div style="background: #1B1E2E; border: 1px solid #2A2D40; border-radius: 16px; padding: 14px 18px; font-size: 14.5px; display: flex; align-items: center; gap: 12px"><span style="width: 8px; height: 8px; border-radius: 50%; background: {dot}"></span><span style="flex: 1">{t}</span><span style="font-size: 12.5px; color: #8C90A8">{s}</span></div>'
TICK = ''.join(tk(*x) for x in [('#3DD68C','Riya booked Fri, 6:30 PM','WhatsApp'),('#7C8CFF','Answered a call about Saturday','Phone'),('#FFB27A','Missed call → WhatsApp sent','6 sec'),('#F472B6','Arjun asked for a group price','Instagram'),('#3DD68C','Reminder confirmed by S. Das','WhatsApp'),('#7C8CFF','New ad lead contacted','Meta')])
side_login = f'''<span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8C90A8">While you were away</span>
        <div>
          <h2 style="margin: 0; {HF}; font-weight: 300; font-size: 44px; line-height: 1.1; letter-spacing: -0.04em">Your front desk<br><span style="color: #8C90A8">kept working.</span></h2>
          <div style="margin-top: 36px; max-width: 440px; height: 300px; overflow: hidden; -webkit-mask-image: linear-gradient(180deg, transparent, #000 15%, #000 85%, transparent); mask-image: linear-gradient(180deg, transparent, #000 15%, #000 85%, transparent)"><div class="vg-ticker" style="display: flex; flex-direction: column; gap: 10px">{TICK}{TICK}</div></div>
        </div>
        <span style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #5C6080">Sample data</span>'''
login_form = f'''
          <h1 style="margin: 0; {HF}; font-size: 40px; line-height: 1.1">Welcome back</h1>
          <p style="margin: 10px 0 32px; color: #6B6B6B">Log in to see what your front desk did today.</p>
          {google_btn}
          {divider}
          {seg}
          {phone_field}
          <a href="#" style="margin-top: 18px; display: flex; align-items: center; justify-content: center; height: 50px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500">Send code on WhatsApp</a>
          <p style="margin: 14px 0 0; font-size: 13.5px; color: #8A8A8A; text-align: center">We’ll send a 6-digit code to this number.</p>
          <p style="margin: 32px 0 0; text-align: center; font-size: 15px; color: #5C5C5C">New to Vegham? <a href="#" style="color: #16182A; font-weight: 500">Start your free pilot</a></p>'''
page('Login.dc.html', 'Log in to Vegham', auth_shell(login_form, side_login, 'Log in'), 960, with_chrome=False)

steps_side = [('Create your account', 'Takes a minute', True), ('Connect WhatsApp and your phone', 'Guided, about 10 minutes', False), ('Teach it your business', 'Paste your website or add services', False), ('Test and go live', 'Your first customer, answered', False)]
side_signup = f'''<span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8C90A8">Your free 30-day pilot</span>
        <div>
          <h2 style="margin: 0; {HF}; font-weight: 300; font-size: 44px; line-height: 1.1; letter-spacing: -0.04em">Live by tomorrow.<br><span style="color: #8C90A8">Free for 30 days.</span></h2>
          <ol style="margin: 36px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 0; max-width: 420px">
            {''.join(f'<li style="display: flex; gap: 16px; padding: 16px 0; border-top: 1px solid #2A2D40"><span style="flex: none; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; {"background: #FFFFFF; color: #12141F" if on else "border: 1px solid #3A3E55; color: #A5ABDB"}" class="{"vg-pulse" if on else ""}">{i+1}</span><span><span style="display: block; font-size: 16px">{t}</span><span style="font-size: 13.5px; color: #8C90A8">{s}</span></span></li>' for i,(t,s,on) in enumerate(steps_side))}
          </ol>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 13px">{pill('No card needed','#1B1E2E','#C3C6DA')}{pill('Keep your WhatsApp number','#1B1E2E','#C3C6DA')}{pill('Cancel anytime','#1B1E2E','#C3C6DA')}</div>'''
signup_form = f'''
          <h1 style="margin: 0; {HF}; font-size: 40px; line-height: 1.1">Start your free pilot</h1>
          <p style="margin: 10px 0 32px; color: #6B6B6B">30 days free. Set up in a day.</p>
          {google_btn}
          {divider}
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div><label for="nm" style="{LABEL}">Your name</label><input id="nm" type="text" placeholder="Vinay Kumar" style="{FIELD}"></div>
            <div><label for="bz" style="{LABEL}">Business name</label><input id="bz" type="text" placeholder="Nila &amp; Co" style="{FIELD}"></div>
            <div>{phone_field}</div>
            <div><label for="em" style="{LABEL}">Work email <span style="color: #8A8A8A; font-weight: 400">(optional)</span></label><input id="em" type="email" placeholder="you@business.com" style="{FIELD}"></div>
          </div>
          <a href="#" style="margin-top: 22px; display: flex; align-items: center; justify-content: center; height: 50px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500">Create account</a>
          <p style="margin: 14px 0 0; font-size: 13.5px; color: #8A8A8A; text-align: center">We’ll verify your number with a code on WhatsApp.</p>
          <p style="margin: 28px 0 0; text-align: center; font-size: 15px; color: #5C5C5C">Already have an account? <a href="#" style="color: #16182A; font-weight: 500">Log in</a></p>'''
page('Signup.dc.html', 'Sign up for Vegham', auth_shell(signup_form, side_signup, 'Sign up'), 1060, with_chrome=False)
print('built')
