import os, sys, re
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from kit3 import HEAD, END, P, HF, AURTXT
import comps, marks
I = lambda d, s=18, c='currentColor', w=1.8: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round">{d}</svg>'
IC = {
 'home': '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"></path>',
 'inbox': '<path d="M4 4h16v12h-5l-1 3h-4l-1-3H4z"></path>',
 'cal': '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>',
 'phone': '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>',
 'users': '<circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"></path>',
 'spark': '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"></path>',
 'card': '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 10h18"></path>',
 'chart': '<path d="M4 20V5M4 20h16M8 16l4-4 3 3 5-6"></path>',
 'mega': '<path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8"></path>',
 'gear': '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.5 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.5l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 3.6V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.4 1.9"></path>',
 'search': '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path>',
 'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"></path>',
 'plus': '<path d="M12 5v14M5 12h14"></path>',
 'chev': '<path d="M6 9l6 6 6-6"></path>',
 'send': '<path d="M4 12l16-8-6 16-2-7z"></path>',
 'pause': '<rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect>',
}
NAV = [('home', 'Home'), ('inbox', 'Inbox', '3'), ('cal', 'Calendar'), ('phone', 'Calls'), ('users', 'Contacts'), ('card', 'Payments'), ('mega', 'Campaigns'), ('chart', 'Reports'), ('spark', 'AI agents'), ('gear', 'Settings')]
def shell(active, title, sub, main, actions=''):
    nav = ''
    for n in NAV:
        k, lab = n[0], n[1]; badge = n[2] if len(n) > 2 else ''
        on = lab == active
        nav += f'<a href="#" style="display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 12px; text-decoration: none; font-size: 14px; {"background: #FFFFFF; color: #141414; font-weight: 500; box-shadow: 0 1px 2px rgba(22,24,42,.06), 0 0 0 1px #ECECF0" if on else "color: #5C5C5C"}">{I(IC[k], 17)}<span style="flex: 1">{lab}</span>{f"<span style=\'min-width: 20px; padding: 1px 7px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 11.5px; text-align: center\'>{badge}</span>" if badge else ""}</a>'
    side = f'''<aside style="width: 240px; flex: none; box-sizing: border-box; background: #F7F7F8; border-right: 1px solid #ECECF0; padding: 18px 12px; display: flex; flex-direction: column; gap: 14px">
        <div style="display: flex; align-items: center; gap: 10px; padding: 0 8px">{marks.mark('ribbon', 'app' + re.sub(r'\W', '', active), 28)}<span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 21px; letter-spacing: -0.045em; {AURTXT}">vegham</span></div>
        <button type="button" style="display: flex; align-items: center; gap: 10px; padding: 9px 10px; border: 1px solid #E6E6EA; border-radius: 12px; background: #FFFFFF; font: inherit; text-align: left; cursor: pointer"><span style="width: 28px; height: 28px; border-radius: 8px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600">N</span><span style="flex: 1; line-height: 1.25"><span style="display: block; font-size: 13.5px; font-weight: 500">Nila &amp; Co</span><span style="display: block; font-size: 12px; color: #8A8A8A">All locations</span></span>{I(IC['chev'], 14, '#8A8A8A')}</button>
        <nav aria-label="App" style="display: flex; flex-direction: column; gap: 2px">{nav}</nav>
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px">
          <div class="vg-aur-host" style="position: relative; overflow: hidden; border-radius: 16px; background: #12141F; color: #FFFFFF; padding: 14px">{comps.aurora(1.2).replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)}<span style="display: flex; align-items: center; gap: 8px; font-size: 13px"><span class="vg-pulse" style="width: 8px; height: 8px; border-radius: 50%; background: #3DD68C"></span>AI is on</span><span style="display: block; margin-top: 4px; font-size: 12.5px; color: #C3C6DA">5 agents working · 2 chats live</span></div>
          <div style="display: flex; align-items: center; gap: 10px; padding: 6px 8px"><span style="width: 30px; height: 30px; border-radius: 50%; background: #E6E6EA; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600">VK</span><span style="line-height: 1.25"><span style="display: block; font-size: 13.5px; font-weight: 500">Vinay</span><span style="display: block; font-size: 12px; color: #8A8A8A">Owner</span></span></div>
        </div>
      </aside>'''
    top = f'''<div style="display: flex; align-items: center; gap: 16px; padding: 18px 28px; border-bottom: 1px solid #F0F0F3">
          <div style="flex: 1"><span style="display: block; font-size: 13px; color: #8A8A8A">{sub}</span><h1 style="margin: 2px 0 0; {HF}; font-size: 28px; letter-spacing: -0.03em">{title}</h1></div>
          <button type="button" style="display: flex; align-items: center; gap: 10px; width: 260px; height: 40px; padding: 0 12px; border: 1px solid #E6E6EA; border-radius: 12px; background: #FFFFFF; font: inherit; font-size: 14px; color: #8A8A8A; cursor: pointer">{I(IC['search'], 16)}<span style="flex: 1; text-align: left">Search or ask</span><kbd style="font: inherit; font-size: 12px; padding: 1px 6px; border: 1px solid #E6E6EA; border-radius: 6px">⌘K</kbd></button>
          <button type="button" aria-label="Notifications" style="position: relative; width: 40px; height: 40px; border: 1px solid #E6E6EA; border-radius: 12px; background: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; cursor: pointer">{I(IC['bell'], 17, '#3D3D3D')}<span style="position: absolute; top: 9px; right: 10px; width: 7px; height: 7px; border-radius: 50%; background: #DB2777"></span></button>
          {actions}
        </div>'''
    return f'''<div style="display: flex; height: 960px; background: #FFFFFF; font-size: 14px; line-height: 1.45; color: #1F1F1F">
      {side}
      <main style="flex: 1; min-width: 0; display: flex; flex-direction: column">{top}<div style="flex: 1; min-height: 0; overflow: hidden">{main}</div></main>
    </div>'''
BTN = lambda t, icon='plus': f'<button type="button" style="display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 16px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 14px; font-weight: 500; cursor: pointer">{I(IC[icon], 16)}{t}</button>'
OBTN = lambda t: f'<button type="button" style="height: 34px; padding: 0 14px; border: 1px solid #E2E2E6; border-radius: 999px; background: #FFFFFF; font: inherit; font-size: 13px; cursor: pointer">{t}</button>'
DBTN = lambda t: f'<button type="button" style="height: 34px; padding: 0 14px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 13px; cursor: pointer">{t}</button>'
CARD = 'border: 1px solid #ECECF0; border-radius: 20px; background: #FFFFFF'
def save(name, title, html):
    h = HEAD.replace(re.search(r'<title>[^<]*</title>', HEAD).group(0), f'<title>{title}</title>')
    h = re.sub(r'<div style="font-family: Inter, system-ui, sans-serif;[^"]*">$', '<div style="font-family: Inter, system-ui, sans-serif; color: #1F1F1F; background: #FFFFFF">', h)
    open(os.path.join(P, name), 'w').write(h + html + END.replace('__H__', '960'))
aur = lambda k=1.1: comps.aurora(k).replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)
wa, ig, ms = comps.logo('whatsapp', 16), comps.logo('instagram', 16), comps.logo('messenger', 16)
ph = I(IC['phone'], 15, '#5C5C5C'); web = comps.GLOBE.format(s=15, c='#5C5C5C')

# ============ HOME ============
stat = lambda n, l, d: f'<div style="flex: 1 1 150px; padding: 16px 18px; {CARD}"><span style="display: block; font-size: 12.5px; color: #8A8A8A">{l}</span><span style="display: block; margin-top: 4px; font-family: \'Inter Tight\', sans-serif; font-size: 30px; letter-spacing: -0.03em">{n}</span><span style="font-size: 12px; color: #1F9D6B">{d}</span></div>'
need = lambda ic, t, s, b, prim=False: f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid #F0F0F3"><span style="width: 32px; height: 32px; border-radius: 10px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{ic}</span><span style="flex: 1"><span style="display: block; font-weight: 500">{t}</span><span style="font-size: 12.5px; color: #8A8A8A">{s}</span></span>{DBTN(b) if prim else OBTN(b)}</div>'
tl = lambda t, n, s, st, hl=False: f'<div style="display: flex; gap: 14px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span style="width: 48px; font-variant-numeric: tabular-nums; {"color: #16182A; font-weight: 600" if hl else "color: #8A8A8A"}">{t}</span><span style="flex: 1"><span style="display: block; font-weight: 500">{n}</span><span style="font-size: 12.5px; color: #8A8A8A">{s}</span></span><span style="font-size: 12.5px; {"padding: 2px 10px; border-radius: 999px; background: #16182A; color: #FFFFFF" if hl else "color: #5C5C5C"}">{st}</span></div>'
agents = [('Chat receptionist', '23 chats today'), ('Voice receptionist', '9 calls today'), ('Follow-up', '4 nudges sent'), ('Report writer', 'Next at 8:00 AM'), ('Owner’s assistant', 'Ready on WhatsApp')]
ag = ''.join(f'<div style="flex: 1 1 160px; padding: 14px; {CARD}"><span style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #1F9D6B"><span style="width: 6px; height: 6px; border-radius: 50%; background: #1F9D6B"></span>Live</span><span style="display: block; margin-top: 6px; font-weight: 500">{n}</span><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></div>' for n, d in agents)
home_main = f'''<div style="padding: 24px 28px; display: flex; flex-direction: column; gap: 18px">
      <div class="vg-aur-host" style="position: relative; overflow: hidden; border-radius: 20px; background: #12141F; color: #FFFFFF; padding: 22px 26px; display: flex; flex-wrap: wrap; align-items: center; gap: 16px 32px">{aur()}
        <span style="flex: 1 1 360px"><span style="display: block; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #A5ABDB">While you were asleep</span><span style="display: block; margin-top: 6px; font-size: 17px">Your front desk answered all 14 customers, booked 6 visits and called back 2 missed calls.</span></span>
        <span style="display: flex; gap: 28px">{''.join(f'<span><span style="display: block; font-family: Inter Tight, sans-serif; font-size: 30px; letter-spacing: -0.03em">{n}</span><span style="font-size: 12px; color: #A5ABDB">{l}</span></span>' for n, l in [('14', 'replied'), ('6', 'booked'), ('6 sec', 'first reply')])}</span>
        <button type="button" style="height: 38px; padding: 0 16px; border: 0; border-radius: 999px; background: #FFFFFF; color: #12141F; font: inherit; font-weight: 500; cursor: pointer">Morning report</button>
      </div>
      <div style="display: flex; gap: 12px">{stat('₹42,500', 'Booked this week', '↑ 18% vs last week')}{stat('31', 'Customers answered', '100% within 1 min')}{stat('4', 'Missed calls saved', 'all called back')}{stat('3', 'New reviews', '★ 4.8 average')}</div>
      <div style="display: flex; gap: 16px; align-items: flex-start">
        <div style="flex: 1.1; padding: 18px 20px; {CARD}"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 15px">Needs you · 3</b><a href="#" style="font-size: 13px; color: #5C5C5C">See all</a></div>
          {need(ig, 'Arjun asked for a group price', 'Instagram · 9 min ago · AI paused', 'Reply', True)}{need(ph, 'Call back P. Iyer', 'Asked for a person · 25 min ago', 'Call')}{need(wa, 'Meera wants a refund', 'WhatsApp · sent to you by AI', 'Open')}
        </div>
        <div style="flex: 1; padding: 18px 20px; {CARD}"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 15px">Today · 6 bookings</b><a href="#" style="font-size: 13px; color: #5C5C5C">Calendar</a></div>
          {tl('11:30', 'A. Khan', 'First visit · with Priya', 'Next', True)}{tl('13:00', 'S. Das', 'Follow-up · with Ravi', 'Confirmed')}{tl('16:30', 'M. Rao', 'Reminder sent', 'Unconfirmed')}{tl('18:30', 'Riya', 'Booked by AI at 11:42 PM', 'Confirmed')}
        </div>
      </div>
      <div><b style="display: block; margin-bottom: 10px; font-weight: 600; font-size: 15px">AI agents</b><div style="display: flex; gap: 12px">{ag}</div></div>
      <span style="font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
    </div>'''
save('AppHome.dc.html', 'App · Home', shell('Home', 'Good morning, Vinay', 'Friday, 6 November', home_main, BTN('New booking')))

# ============ INBOX ============
conv = [(wa, 'Riya', 'Booked ✓ tomorrow 6:30 PM', 'now', 'AI', True), (ig, 'Arjun', 'Price for a group of 8?', '9m', 'Needs you', False), (ph, '+91 98•• ••21', 'Call · booked Sat 4 PM', '24m', 'AI', False), (wa, 'Meera', 'Can I get a refund?', '1h', 'Needs you', False), (ms, 'Kiran', 'Thanks! See you then', '2h', 'Closed', False), (web, 'Website visitor', 'Do you have parking?', '3h', 'AI', False)]
lst = ''.join(f'<a href="#" style="display: block; padding: 14px 16px; border-bottom: 1px solid #F0F0F3; text-decoration: none; color: inherit; {"background: #F5F5F7;" if on else ""}"><span style="display: flex; justify-content: space-between; align-items: center"><span style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600">{ic}{n}</span><span style="font-size: 12px; color: #8A8A8A">{t}</span></span><span style="display: flex; justify-content: space-between; gap: 8px; margin-top: 4px"><span style="font-size: 13.5px; color: #5C5C5C; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{m}</span><span style="flex: none; font-size: 11.5px; padding: 1px 8px; border-radius: 999px; {"background: #16182A; color: #FFFFFF" if tag == "Needs you" else "border: 1px solid #E2E2E6; color: #5C5C5C"}">{tag}</span></span></a>' for ic, n, m, t, tag, on in conv)
tabs = ''.join(f'<span style="padding: 6px 10px; border-radius: 999px; font-size: 12.5px; white-space: nowrap; {"background: #16182A; color: #FFFFFF" if i == 0 else "color: #5C5C5C"}">{t}</span>' for i, t in enumerate(['All', 'Needs you · 2', 'AI handling', 'Closed']))
bub = lambda t, me, meta='': (f'<div style="align-self: flex-end; max-width: 66%"><div style="background: #F3F3F5; padding: 10px 14px; border-radius: 16px 16px 4px 16px">{t}</div><span style="display: block; margin-top: 4px; text-align: right; font-size: 11.5px; color: #8A8A8A">{meta}</span></div>' if me else f'<div style="align-self: flex-start; max-width: 66%"><div style="background: #16182A; color: #FFFFFF; padding: 10px 14px; border-radius: 16px 16px 16px 4px">{t}</div><span style="display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; font-size: 11.5px; color: #8A8A8A">{I(IC["spark"], 12, "#8A8A8A")}{meta}</span></div>')
inbox_main = f'''<div style="display: flex; height: 100%">
      <div style="width: 340px; flex: none; border-right: 1px solid #F0F0F3; display: flex; flex-direction: column">
        <div style="padding: 14px 16px; display: flex; gap: 4px; border-bottom: 1px solid #F0F0F3">{tabs}</div>
        {lst}
      </div>
      <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
        <div style="display: flex; align-items: center; gap: 12px; padding: 14px 22px; border-bottom: 1px solid #F0F0F3"><span style="width: 36px; height: 36px; border-radius: 50%; background: #E6E6EA; display: inline-flex; align-items: center; justify-content: center; font-weight: 600">R</span><span style="flex: 1"><span style="display: block; font-weight: 600">Riya</span><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: #8A8A8A">{wa}WhatsApp · +91 98•• ••45</span></span><span style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 12.5px"><span class="vg-pulse" style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>AI is handling this chat</span><button type="button" style="display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 14px; border: 0; border-radius: 999px; background: #16182A; color: #FFFFFF; font: inherit; font-size: 13px; cursor: pointer">{I(IC['pause'], 14)}Take over</button></div>
        <div style="flex: 1; padding: 22px; display: flex; flex-direction: column; gap: 12px; background: #FCFCFD; font-size: 14.5px">
          <span style="align-self: center; font-size: 12px; color: #8A8A8A">Yesterday · 11:42 PM</span>
          {bub('Hi! Anything free tomorrow evening?', 1, '11:42 PM')}{bub('Hi Riya! 6:30 PM is free tomorrow. Shall I book it for you?', 0, 'Vegham AI · 4 sec')}{bub('Yes please 🙏', 1, '11:43 PM')}{bub('Booked ✓ Tomorrow, 6:30 PM with Priya. I’ll remind you in the morning.', 0, 'Vegham AI · booking added')}
          <div style="align-self: center; padding: 8px 14px; border-radius: 12px; border: 1px dashed #D4D4DA; font-size: 13px; color: #5C5C5C">Note · Only your team sees this: <b style="font-weight: 600">Regular customer, prefers Priya.</b> — Ravi</div>
        </div>
        <div style="padding: 14px 22px; border-top: 1px solid #F0F0F3">
          <div style="display: flex; align-items: center; gap: 10px; padding: 8px 8px 8px 16px; border: 1px solid #E2E2E6; border-radius: 16px"><span style="flex: 1; color: #8A8A8A">Type a message, or “/” for saved replies</span><span style="font-size: 12px; color: #8A8A8A">AI paused while you type</span><button type="button" aria-label="Send" style="width: 36px; height: 36px; border: 0; border-radius: 12px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">{I(IC['send'], 16)}</button></div>
        </div>
      </div>
      <aside style="width: 280px; flex: none; border-left: 1px solid #F0F0F3; padding: 20px; display: flex; flex-direction: column; gap: 18px; font-size: 13.5px">
        <div><span style="display: block; font-size: 12px; color: #8A8A8A">Contact</span><b style="display: block; margin-top: 4px; font-size: 16px; font-weight: 600">Riya Sharma</b><span style="color: #5C5C5C">Customer since March · 7 visits</span></div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px">{''.join(f'<span style="padding: 2px 10px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 12px">{t}</span>' for t in ['Regular', 'Evenings', 'Prefers Priya'])}</div>
        <div style="padding: 14px; {CARD}"><span style="display: block; font-size: 12px; color: #8A8A8A">Next booking</span><b style="display: block; margin-top: 2px; font-weight: 600">Tomorrow · 6:30 PM</b><span style="color: #5C5C5C">with Priya · reminder at 9 AM</span></div>
        <div><span style="display: block; font-size: 12px; color: #8A8A8A">Consent</span><span style="display: block; margin-top: 4px">✓ Opted in on WhatsApp · 12 Mar</span></div>
        <span style="margin-top: auto; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
      </aside>
    </div>'''
save('AppInbox.dc.html', 'App · Inbox', shell('Inbox', 'Inbox', 'All channels · 2 need you', inbox_main, BTN('New message')))

# ============ CALENDAR ============
days = ['Mon 2', 'Tue 3', 'Wed 4', 'Thu 5', 'Fri 6', 'Sat 7', 'Sun 8']
hours = list(range(9, 20))
HH = 66
evs = [(0, 10, 1, 'S. Das', 'Follow-up', 'c'), (0, 14, 1.5, 'K. Menon', 'First visit', 'c'), (1, 11, 1, 'A. Rao', 'Consultation', 'c'), (1, 16.5, 1, 'Riya', 'Booked by AI', 'ai'),
       (2, 9.5, 1, 'P. Iyer', 'First visit', 'c'), (2, 12, 2, 'Group of 8', 'Held · Arjun', 'u'), (3, 10, 1, 'M. Rao', 'Follow-up', 'c'), (3, 15, 1, 'N. Shah', 'Booked by AI', 'ai'),
       (4, 11.5, 1, 'A. Khan', 'First visit · Now', 'now'), (4, 13, 1, 'S. Das', 'Follow-up', 'c'), (4, 16.5, 1, 'M. Rao', 'Unconfirmed', 'u'), (4, 18.5, 1, 'Riya', 'Booked by AI', 'ai'),
       (5, 10, 1.5, 'T. Paul', 'Consultation', 'c'), (5, 16, 1, '+91 98•• ••21', 'Booked on a call', 'ai')]
sty = {'c': 'background: #F3F3F5; border-left: 3px solid #16182A; color: #1F1F1F', 'ai': 'background: #16182A; color: #FFFFFF', 'u': 'background: #FFFFFF; border: 1.5px dashed #9A9AA5; color: #3D3D3D', 'now': 'background: #16182A; color: #FFFFFF; box-shadow: 0 0 0 3px rgba(61,214,140,.45)'}
cols = ''
for di, d in enumerate(days):
    ev = ''.join(f'<div style="position: absolute; left: 4px; right: 4px; top: {(st - 9) * HH + 2}px; height: {du * HH - 4}px; box-sizing: border-box; padding: 6px 8px; border-radius: 10px; font-size: 12px; line-height: 1.3; overflow: hidden; {sty[k]}"><b style="display: block; font-weight: 600">{n}</b><span style="opacity: .8">{s}</span></div>' for d2, st, du, n, s, k in evs if d2 == di)
    cols += f'<div style="flex: 1; position: relative; border-left: 1px solid #F0F0F3; {"background: #FAFAFC;" if di == 4 else ""}">{ev}</div>'
hrs = ''.join(f'<div style="height: {HH}px; font-size: 11.5px; color: #8A8A8A; text-align: right; padding-right: 8px; box-sizing: border-box; transform: translateY(-7px)">{h if h <= 12 else h - 12}{"am" if h < 12 else "pm"}</div>' for h in hours)
grid_lines = ''.join(f'<div style="position: absolute; left: 0; right: 0; top: {i * HH}px; border-top: 1px solid #F3F3F5"></div>' for i in range(len(hours)))
now_line = f'<div style="position: absolute; left: calc(4 / 7 * 100%); width: calc(100% / 7); top: {(11.25 - 9) * HH}px; border-top: 2px solid #DB2777"><span style="position: absolute; left: -5px; top: -6px; width: 10px; height: 10px; border-radius: 50%; background: #DB2777"></span></div>'
heads = ''.join(f'<div style="flex: 1; padding: 10px 8px; text-align: center; font-size: 13px; {"font-weight: 600; color: #141414" if i == 4 else "color: #5C5C5C"}">{d}</div>' for i, d in enumerate(days))
staff = ''.join(f'<span style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13px; {"background: #16182A; color: #FFFFFF; border-color: #16182A" if i == 0 else ""}">{t}</span>' for i, t in enumerate(['All staff', 'Priya', 'Ravi', 'Anita']))
cal_main = f'''<div style="display: flex; flex-direction: column; height: 100%">
      <div style="display: flex; align-items: center; gap: 10px; padding: 12px 28px; border-bottom: 1px solid #F0F0F3">{OBTN('Today')}<span style="font-size: 18px; color: #5C5C5C">‹ ›</span><b style="font-weight: 600; font-size: 15px">2 – 8 November</b><span style="flex: 1"></span>{staff}<span style="display: inline-flex; padding: 3px; border-radius: 999px; background: #F3F3F5; font-size: 13px"><span style="padding: 5px 12px">Day</span><span style="padding: 5px 12px; border-radius: 999px; background: #FFFFFF; box-shadow: 0 1px 2px rgba(0,0,0,.08)">Week</span><span style="padding: 5px 12px">Month</span></span></div>
      <div style="display: flex; padding-left: 56px; border-bottom: 1px solid #F0F0F3">{heads}</div>
      <div style="flex: 1; min-height: 0; display: flex; overflow: hidden">
        <div style="width: 56px; flex: none; padding-top: 0">{hrs}</div>
        <div style="flex: 1; position: relative; display: flex">{grid_lines}{cols}{now_line}</div>
      </div>
      <div style="display: flex; gap: 18px; padding: 10px 28px; border-top: 1px solid #F0F0F3; font-size: 12.5px; color: #5C5C5C"><span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 12px; height: 12px; border-radius: 4px; background: #16182A"></span>Booked by AI</span><span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 12px; height: 12px; border-radius: 4px; background: #F3F3F5; border-left: 3px solid #16182A"></span>Confirmed</span><span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 12px; height: 12px; border-radius: 4px; border: 1.5px dashed #9A9AA5"></span>Unconfirmed / held</span><span style="flex: 1"></span><span style="font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span></div>
    </div>'''
save('AppCalendar.dc.html', 'App · Calendar', shell('Calendar', 'Calendar', 'This week · 24 bookings · 9 by AI', cal_main, BTN('New booking')))

# ============ AI AGENTS ============
agents2 = [('Chat receptionist', 'WhatsApp, Instagram, Messenger, website', [('23', 'chats today'), ('4 sec', 'avg reply'), ('2', 'handed over')], True),
           ('Voice receptionist', 'Your phone line · English, Hindi', [('9', 'calls today'), ('1:12', 'avg call'), ('5', 'booked')], True),
           ('Outbound caller', 'Calls new leads within the legal window', [('3', 'calls today'), ('2', 'reached'), ('1', 'booked')], True),
           ('Follow-up', 'Nudges, reminders and review requests', [('4', 'sent today'), ('2', 'replied'), ('1', 'review')], True),
           ('Report writer', 'Morning report on WhatsApp at 8 AM', [('8:00', 'next report'), ('7', 'sent'), ('100%', 'delivered')], True),
           ('Owner’s assistant', 'Ask “Bookings today?” on WhatsApp', [('6', 'questions'), ('2', 'actions'), ('—', '')], False)]
tog = lambda on: f'<span role="switch" aria-checked="{"true" if on else "false"}" style="flex: none; position: relative; width: 40px; height: 24px; border-radius: 999px; background: {"#16182A" if on else "#D4D4DA"}"><span style="position: absolute; top: 3px; {"right: 3px" if on else "left: 3px"}; width: 18px; height: 18px; border-radius: 50%; background: #FFFFFF"></span></span>'
acard = ''.join(f'''<div style="flex: 1 1 300px; padding: 20px; {CARD}; display: flex; flex-direction: column; gap: 14px">
          <div style="display: flex; align-items: flex-start; gap: 12px"><span style="width: 40px; height: 40px; border-radius: 12px; background: {"#16182A" if on else "#F3F3F5"}; color: {"#FFFFFF" if on else "#5C5C5C"}; display: inline-flex; align-items: center; justify-content: center">{I(IC["spark"], 18)}</span><span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 15px">{n}</b><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></span>{tog(on)}</div>
          <div style="display: flex; gap: 18px">{''.join(f'<span><span style="display: block; font-family: Inter Tight, sans-serif; font-size: 22px; letter-spacing: -0.02em">{v}</span><span style="font-size: 12px; color: #8A8A8A">{l}</span></span>' for v, l in st)}</div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #F0F0F3"><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: {"#1F9D6B" if on else "#8A8A8A"}"><span style="width: 6px; height: 6px; border-radius: 50%; background: {"#1F9D6B" if on else "#B4B4BC"}"></span>{"Live" if on else "Off"}</span>{OBTN("Configure")}</div>
        </div>''' for n, d, st, on in agents2)
unans = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span style="flex: 1">“{q}”</span><span style="font-size: 12px; color: #8A8A8A">{c}× asked</span>{OBTN("Answer")}</div>' for q, c in [('Do you open on public holidays?', 3), ('Is there a student discount?', 2), ('Can I bring my pet?', 1)])
ag_main = f'''<div style="padding: 24px 28px; display: flex; gap: 18px; align-items: flex-start">
      <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 16px">
        <div class="vg-aur-host" style="position: relative; overflow: hidden; border-radius: 20px; background: #12141F; color: #FFFFFF; padding: 22px 26px; display: flex; align-items: center; gap: 24px">{aur()}<span style="flex: 1"><span style="display: block; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #A5ABDB">Your AI front desk</span><span style="display: block; margin-top: 6px; font-size: 18px">5 of 6 agents are live. They handled 41 conversations today and handed 3 to your team.</span></span><button type="button" style="height: 38px; padding: 0 16px; border: 0; border-radius: 999px; background: #FFFFFF; color: #12141F; font: inherit; font-weight: 500; cursor: pointer">Test your agents</button></div>
        <div style="display: flex; flex-wrap: wrap; gap: 14px">{acard}</div>
      </div>
      <div style="width: 320px; flex: none; display: flex; flex-direction: column; gap: 16px">
        <div style="padding: 18px 20px; {CARD}"><b style="display: block; font-weight: 600; font-size: 15px">Knowledge</b><span style="display: block; margin-top: 2px; font-size: 12.5px; color: #8A8A8A">What your agents know</span>
          <div style="margin-top: 14px; height: 8px; border-radius: 999px; background: #F0F0F3; overflow: hidden"><span style="display: block; width: 86%; height: 100%; background: #16182A"></span></div>
          <span style="display: block; margin-top: 8px; font-size: 13px; color: #3D3D3D">86% complete · 24 services, 31 FAQs, hours set</span>
          <a href="#" style="display: inline-block; margin-top: 10px; font-size: 13px; color: #16182A">Improve knowledge →</a></div>
        <div style="padding: 18px 20px; {CARD}"><b style="display: block; font-weight: 600; font-size: 15px">Unanswered questions · 3</b><span style="display: block; margin-top: 2px; font-size: 12.5px; color: #8A8A8A">Answer once, every agent learns</span>{unans}</div>
        <div style="padding: 18px 20px; {CARD}"><b style="display: block; font-weight: 600; font-size: 15px">Hand-over rules</b><span style="display: block; margin-top: 8px; font-size: 13px; color: #3D3D3D">Send to a person when a customer asks, is upset, or wants a refund.</span><a href="#" style="display: inline-block; margin-top: 10px; font-size: 13px; color: #16182A">Edit rules →</a></div>
        <span style="font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
      </div>
    </div>'''
save('AppAgents.dc.html', 'App · AI agents', shell('AI agents', 'AI agents', 'Your front desk team', ag_main, BTN('New agent')))
print('app ok')
