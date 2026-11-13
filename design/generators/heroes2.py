import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import comps, landscape
P = os.path.join(D, '..', 'vegam-ui', 'project')
L = open(os.path.join(P, 'LandingV2.dc.html')).read()
root_open = re.search(r'<div style="font-family: Inter, system-ui, sans-serif;[^"]*">', L)
head = L[:root_open.start()].replace('</style>', landscape.CSS + '</style>', 1)
head = re.sub(r'<title>[^<]*</title>', '<title>__T__</title>', head)
header = re.search(r'<header.*?</header>', L, re.S).group(0)
header = re.sub(r'<span aria-hidden="true" class="vg-navline"[^>]*></span>', '', header).replace('position: relative; text-decoration: none', 'text-decoration: none')
end = '''</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1440,"height":__H__}}'>
class Component extends DCLogic {
  renderVals() {
    return {};
  }
}
</script>
</body>
</html>'''
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.045em"
CHECK = lambda c: f'<svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
def ticks(c, col):
    return f'<div class="vg-hero" style="animation-delay: .54s; margin-top: 22px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px; font-size: 14px; color: {col}">' + ''.join(f'<span style="display: inline-flex; align-items: center; gap: 6px">{CHECK(c)}{t}</span>' for t in ['Free 30-day pilot', 'Set up in a day', 'Keep your WhatsApp number']) + '</div>'

def inbox_mock(dark=False):
    wa, ig = comps.logo('whatsapp', 16), comps.logo('instagram', 16)
    ph = comps.PHONE.format(s=15, c='#5C5C5C')
    item = lambda ic, n, m, t, on=False: f'<div style="padding: 14px 16px; border-bottom: 1px solid #F0F0F3; {"background: #F6F7FB;" if on else ""}"><span style="display: flex; justify-content: space-between; align-items: center"><span style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px">{ic}{n}</span><span style="font-size: 12px; color: #8A8A8A">{t}</span></span><span style="display: block; margin-top: 3px; font-size: 13.5px; color: #5C5C5C">{m}</span></div>'
    bub = lambda t, me: (f'<span style="align-self: flex-end; max-width: 70%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px">{t}</span>' if me else f'<span style="align-self: flex-start; max-width: 70%; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">{t}</span>')
    nav = ''.join(f'<span style="padding: 7px 10px; border-radius: 12px; {"background: #F1F1F4; color: #16182A; font-weight: 500" if n == "Inbox" else ""}">{n}</span>' for n in ['Home', 'Inbox', 'Calendar', 'Calls', 'Contacts', 'AI agents'])
    return f'''<div style="display: flex; text-align: left; color: #1F1F1F; font-size: 14px; line-height: 1.45; height: 100%">
          <div style="width: 200px; flex: none; background: #FAFAFB; border-right: 1px solid #EDEDF0; padding: 18px 12px; display: flex; flex-direction: column; gap: 4px; color: #5C5C5C">
            <span style="padding: 0 10px 14px; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 20px; letter-spacing: -0.045em; color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text">vegham</span>{nav}
          </div>
          <div style="width: 300px; flex: none; border-right: 1px solid #EDEDF0">
            <div style="padding: 14px 16px; border-bottom: 1px solid #F0F0F3; font-weight: 600">Inbox <span style="font-weight: 400; color: #8A8A8A">· all answered</span></div>
            {item(wa, 'Riya', 'Booked ✓ tomorrow 6:30 PM', 'now', True)}{item(ph, '+91 98•• ••21', 'Called · booked Sat 4 PM', '2m')}{item(ig, 'Arjun', 'Price for a group of 8?', '9m')}{item(wa, 'Meera', 'Moved to Thu 11 AM', '1h')}
          </div>
          <div style="flex: 1; min-width: 0; padding: 20px 24px; display: flex; flex-direction: column; gap: 10px; background: #FFFFFF">
            <span style="display: flex; justify-content: space-between; font-size: 13px; color: #8A8A8A; padding-bottom: 10px; border-bottom: 1px solid #F0F0F3"><span><b style="font-weight: 600; color: #1F1F1F">Riya</b> · WhatsApp</span><span>AI is handling this chat</span></span>
            {bub('Hi! Anything free tomorrow evening?', 1)}{bub('Hi Riya! 6:30 PM is free. Shall I book it?', 0)}{bub('Yes please', 1)}{bub('Booked ✓ I’ll remind you in the morning.', 0)}
            <span style="align-self: center; margin-top: 6px; padding: 6px 14px; border-radius: 999px; border: 1px solid #E6E6EA; font-size: 13px; font-weight: 500">✓ Added to your calendar · Fri 6:30 PM</span>
          </div>
        </div>'''

def home_mock():
    nav = ''.join(f'<span style="padding: 7px 10px; border-radius: 12px; {"background: #F1F1F4; color: #16182A; font-weight: 500" if n == "Home" else ""}">{n}</span>' for n in ['Home', 'Inbox', 'Calendar', 'Calls', 'Contacts', 'Payments', 'Reports', 'AI agents', 'Settings'])
    stat = lambda n, l: f'<div style="flex: 1 1 140px; padding: 16px 18px; border: 1px solid #ECECF0; border-radius: 20px"><span style="display: block; font-size: 12.5px; color: #8A8A8A">{l}</span><span style="display: block; margin-top: 4px; font-family: \'Inter Tight\', sans-serif; font-size: 30px; letter-spacing: -0.03em">{n}</span></div>'
    row = lambda t, n, s, hl=False: f'<span style="display: flex; gap: 12px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span style="width: 46px; color: {"#16182A" if hl else "#8A8A8A"}; font-weight: {600 if hl else 400}">{t}</span><span style="flex: 1">{n}</span><span style="font-size: 12.5px; color: #5C5C5C">{s}</span></span>'
    need = lambda t, b, primary=False: f'<span style="display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span>{t}</span><span style="padding: 4px 12px; border-radius: 999px; font-size: 12.5px; {"background: #16182A; color: #FFFFFF" if primary else "border: 1px solid #E2E2E6"}">{b}</span></span>'
    return f'''<div style="display: flex; text-align: left; color: #1F1F1F; font-size: 14px; line-height: 1.45; height: 100%">
          <div style="width: 220px; flex: none; background: #FAFAFB; border-right: 1px solid #EDEDF0; padding: 20px 12px; display: flex; flex-direction: column; gap: 3px; color: #5C5C5C">
            <span style="padding: 0 10px 14px; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 22px; letter-spacing: -0.045em; color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text">vegham</span>{nav}
          </div>
          <div style="flex: 1; min-width: 0; padding: 28px 32px; display: flex; flex-direction: column; gap: 18px">
            <div style="display: flex; justify-content: space-between; align-items: flex-end"><span><span style="display: block; font-size: 13px; color: #8A8A8A">Friday, 6 November</span><span style="display: block; font-family: 'Inter Tight', sans-serif; font-size: 30px; letter-spacing: -0.03em">Good morning, Vinay</span></span><span style="padding: 9px 16px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 13.5px">New booking</span></div>
            <div class="vg-aur-host" style="position: relative; overflow: hidden; border-radius: 20px; background: #12141F; color: #FFFFFF; padding: 20px 24px; display: flex; flex-wrap: wrap; align-items: center; gap: 16px 28px">{comps.aurora(1.1).replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)}
              <span style="flex: 1 1 260px; font-size: 15px">While you were asleep, your front desk answered all 14 customers and booked 6 visits.</span>
              <span style="padding: 8px 16px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 13.5px; font-weight: 500">Morning report</span>
            </div>
            <div style="display: flex; gap: 12px">{stat(14, 'Replied')}{stat(6, 'Booked')}{stat(2, 'Calls saved')}{stat('6 sec', 'First reply')}</div>
            <div style="display: flex; gap: 16px">
              <div style="flex: 1; border: 1px solid #ECECF0; border-radius: 20px; padding: 16px 18px"><b style="font-weight: 600">Needs you · 2</b>{need('Arjun asked for a group price', 'Reply', True)}{need('Call back P. Iyer', 'Call')}</div>
              <div style="flex: 1; border: 1px solid #ECECF0; border-radius: 20px; padding: 16px 18px"><b style="font-weight: 600">Today · 6 bookings</b>{row('11:30', 'A. Khan', 'Next', True)}{row('13:00', 'S. Das', 'Confirmed')}{row('18:30', 'Riya', 'New · WhatsApp')}</div>
            </div>
          </div>
        </div>'''

# ---- Option A: dark aurora hero ----
hdr_dark = header.replace('color: #2B2B2B', 'color: #C3C6DA').replace('background: rgba(255,255,255,0.85); border: 1px solid #ECECEC; color: #1F1F1F', 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18); color: #FFFFFF').replace('background: #16182A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 500">Log in', 'background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in')
hdr_dark = hdr_dark.replace('<header style="position: sticky; top: 0; z-index: 40; padding: 0 16px">', '<header style="position: relative; z-index: 2; padding: 0 16px">').replace(' class="vg-hdr-in"', '')
A = f'''<div style="font-family: Inter, system-ui, sans-serif; color: #FFFFFF; background: #03050E; font-size: 16px; line-height: 1.6">
  <section style="position: relative; overflow: hidden; min-height: 1000px">
    {landscape.landscape('hero', seed=23, height=1000)}
    <div aria-hidden="true" style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.15) 35%, rgba(3,5,14,0) 55%, rgba(3,5,14,.75) 100%)"></div>
    {hdr_dark}
    <div style="position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 88px 32px 0; text-align: center">
      <a href="#" class="vg-hero" style="animation-delay: .05s; display: inline-flex; align-items: center; gap: 10px; padding: 5px 14px 5px 5px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; background: rgba(255,255,255,.06); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); text-decoration: none; font-size: 14px; color: #DDE0EE"><span style="padding: 3px 10px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 12px; font-weight: 500">New</span>Your AI receptionist now answers phone calls →</a>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 28px auto 0; max-width: 1000px; {HF}; font-size: 76px; line-height: 1.04; color: #FFFFFF; text-shadow: 0 2px 30px rgba(3,5,14,.5)">Every customer answered.<br><span style="color: #A9AECB">Every booking made.</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 24px auto 0; max-width: 600px; font-size: 19px; color: #C9CCDD">Vegham replies on WhatsApp, answers your calls, books visits and follows up, in your customers’ language, day and night.</p>
      <div class="vg-hero" style="animation-delay: .42s; margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500">Start your free pilot</a>
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); color: #FFFFFF; text-decoration: none; font-weight: 500">Hear a sample call</a>
      </div>
      {ticks('#5EEAD4', '#A9AECB')}
      <div class="vg-hero" style="animation-delay: .7s; position: relative; margin: 64px auto 0; max-width: 1100px; height: 360px; border-radius: 20px 20px 0 0; overflow: hidden; background: #FFFFFF; border: 1px solid rgba(255,255,255,.2); border-bottom: 0; box-shadow: 0 -30px 90px -30px rgba(45,227,160,.35), 0 -10px 40px -20px rgba(0,0,0,.6)">{inbox_mock()}</div>
    </div>
  </section>
'''
open(os.path.join(P, 'HeroAurora.dc.html'), 'w').write(head.replace('__T__', 'Hero option A, dark aurora') + A + end.replace('__H__', '1000'))

# ---- Option B: light hero, large product shot ----
hdr_light = header.replace('<header style="position: sticky; top: 0; z-index: 40; padding: 0 16px">', '<header style="position: relative; z-index: 2; padding: 0 16px">').replace(' class="vg-hdr-in"', '')
B = f'''<div style="font-family: Inter, system-ui, sans-serif; color: #1F1F1F; background: #FFFFFF; font-size: 16px; line-height: 1.6">
  <section style="position: relative; overflow: hidden; min-height: 1180px; background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 55%, #F5F5F7 100%)">
    {hdr_light}
    <div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 80px 32px 0; text-align: center">
      <a href="#" class="vg-hero" style="animation-delay: .05s; display: inline-flex; align-items: center; gap: 10px; padding: 5px 14px 5px 5px; border: 1px solid #E8E8EB; border-radius: 999px; background: #FFFFFF; text-decoration: none; font-size: 14px; color: #3D3D3D"><span style="padding: 3px 10px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 12px; font-weight: 500">New</span>Your AI receptionist now answers phone calls →</a>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 28px auto 0; max-width: 1000px; {HF}; font-size: 76px; line-height: 1.04; color: #141414">Every customer answered.<br><span style="color: #8A8A8A">Every booking made.</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 24px auto 0; max-width: 600px; font-size: 19px; color: #3D3D3D">Vegham replies on WhatsApp, answers your calls, books visits and follows up, in your customers’ language, day and night.</p>
      <div class="vg-hero" style="animation-delay: .42s; margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500">Start your free pilot</a>
        <a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; color: #1F1F1F; text-decoration: none; font-weight: 500">Hear a sample call</a>
      </div>
      {ticks('#1F9D6B', '#6B6B6B')}
      <div class="vg-hero" style="animation-delay: .7s; position: relative; margin: 64px auto 0; max-width: 1160px; border-radius: 28px; padding: 10px; background: linear-gradient(180deg, #EDEDF2, #F7F7F9); border: 1px solid #E4E4EA; box-shadow: 0 50px 100px -40px rgba(22,24,42,.35), 0 20px 40px -24px rgba(22,24,42,.2)">
        <div style="display: flex; align-items: center; gap: 6px; padding: 4px 8px 10px"><span style="width: 10px; height: 10px; border-radius: 50%; background: #D9D9DF"></span><span style="width: 10px; height: 10px; border-radius: 50%; background: #D9D9DF"></span><span style="width: 10px; height: 10px; border-radius: 50%; background: #D9D9DF"></span><span style="margin: 0 auto; padding: 3px 60px; border-radius: 12px; background: #FFFFFF; border: 1px solid #E6E6EA; font-size: 12px; color: #8A8A8A">app.vegham.ai</span></div>
        <div style="height: 560px; border-radius: 20px; overflow: hidden; background: #FFFFFF; border: 1px solid #ECECF0">{home_mock()}</div>
      </div>
      <span style="display: block; margin-top: 12px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
    </div>
  </section>
'''
open(os.path.join(P, 'HeroProduct.dc.html'), 'w').write(head.replace('__T__', 'Hero option B, product shot') + B + end.replace('__H__', '1180'))
print('ok')
