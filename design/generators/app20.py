"""Vegham, focused: an AI receptionist for calls and WhatsApp that remembers every customer.
Five places: Home, Conversations, People, Your agent, Settings. Sample data."""
import os, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app2, app12, app9
from app9 import I, IC, WA, IG, GLOBE, PH, build, chip, sel, bd, ob, pb, cav, avch, BELL, SEP, inr
from app11 import tg, row, card
from link import link

for k, v in {
    'brain': '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4.5A2.5 2.5 0 0 0 9 4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"></path>',
    'conv': '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path><path d="M8 11h8M8 14h5"></path>',
    'person': '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    'loop': '<path d="M17 2l4 4-4 4"></path><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"></path><path d="M21 13v2a3 3 0 0 1-3 3H3"></path>',
    'play': '<path d="M8 5v14l11-7z"></path>', 'pause': '<path d="M8 5v14M16 5v14"></path>',
    'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>',
    'trash': '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3"></path>',
    'edit': '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"></path>',
    'plus': '<path d="M12 5v14M5 12h14"></path>', 'check': '<path d="M5 12l5 5L20 7"></path>',
    'gear': '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>',
    'headset': '<path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><rect x="3" y="14" width="4" height="6" rx="1.5"></rect><rect x="17" y="14" width="4" height="6" rx="1.5"></rect><path d="M19 20a3 3 0 0 1-3 2h-3"></path>',
    'missed': '<path d="M3 7l6 6 4-4 8 8"></path><path d="M15 17h6v-6"></path>',
    'moon': '<path d="M20 15A8 8 0 1 1 9 4a6.5 6.5 0 0 0 11 11z"></path>',
    'shield': '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>',
    'book': '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path><path d="M19 19v2H6"></path>',
    'flask': '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3"></path><path d="M7 15h10"></path>',
    'arrowr': '<path d="M5 12h14M13 6l6 6-6 6"></path>', 'chevr': '<path d="M9 6l6 6-6 6"></path>',
    'sparkline': '', 'clock': '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
}.items():
    IC.setdefault(k, v)

IC.setdefault('globe', '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>')
IC.setdefault('tag', '<path d="M3 12V4h8l10 10-8 8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>')
import app4
for _k in list(app4.HUES): app4.HUES[_k] = ('var(--soft)', 'var(--text)')
G = '#10B981'
NEUTRAL = '''
.app{--good:#10B981;--goodbg:transparent;--warn:#10B981;--warnbg:var(--soft2);--acc:#10B981;--s1:#10B981}
.app:has(#th-dark:checked){--good:#34D399;--goodbg:transparent;--warn:#34D399;--warnbg:var(--soft2);--acc:#34D399;--s1:#34D399}
.bd{background:transparent!important;box-shadow:inset 0 0 0 1px var(--line);color:var(--mut)!important}
.bd.good{color:var(--good)!important;box-shadow:inset 0 0 0 1px rgba(16,185,129,.45)}
.bd.bad,.bd.warn{color:var(--text)!important;font-weight:600}
.mem{background:transparent!important;color:var(--text)!important;box-shadow:inset 0 0 0 1px var(--line)}
.mem svg{color:#10B981}
.memtxt{background:transparent!important;box-shadow:inset 0 -2px 0 #10B981;border-radius:0;padding:0}
'''
COLOR_SWAPS = [
    ('background: #E5484D; box-shadow: 0 0 0 2px var(--bg)', 'background: #10B981; box-shadow: 0 0 0 2px var(--bg)'),
    ('linear-gradient(135deg, rgba(124,58,237,.07), rgba(59,108,246,.05))', 'var(--card)'),
    ('linear-gradient(90deg, #10B981, #3B6CF6, #7C3AED)', '#10B981'), ('linear-gradient(135deg, #10B981, #3B6CF6 55%, #7C3AED)', '#10B981'),
    ('rgba(124,58,237,.10)', 'transparent'), ('#7C3AED', '#10B981'),
    ('background: rgba(59,108,246,.08)', 'background: var(--bg); box-shadow: inset 0 0 0 1px var(--line)'),
    ('background: rgba(59,108,246,.10)', 'background: var(--bg); box-shadow: inset 0 0 0 1px var(--line)'),
    ('background: #E5484D; color: #FFF', 'background: var(--ink); color: var(--inkfg)'),
    ('color: #E5484D; border-color: rgba(229,72,77,.35)', 'color: var(--text)'), ('#E5484D', 'var(--text)'), ('#3B6CF6', '#10B981'),
]
F = lambda n: f'App{n}.dc.html'
app2.NAVMAP.clear()
app2.NAVMAP.update({'Home': F('Home'), 'Conversations': F('Conversations'), 'People': F('People'), 'Your agent': F('Agent'), 'Settings': F('Settings')})
NAV = lambda nv, grp: (nv('home', 'Home') + nv('conv', 'Conversations', badge='2') + nv('person', 'People') + nv('headset', 'Your agent') + nv('gear', 'Settings'))

CSS = app12.CSS + '''
.mem{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;font-size:12px;font-weight:500;background:rgba(124,58,237,.10);color:#7C3AED;white-space:nowrap}
.app:has(#th-dark:checked) .mem{background:rgba(167,139,250,.16);color:#C4B5FD}
.memtxt{background:rgba(124,58,237,.10);border-radius:4px;padding:0 3px}
.app:has(#th-dark:checked) .memtxt{background:rgba(167,139,250,.18)}
.fact{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-top:1px solid var(--line)}
.fact:first-child{border-top:0}
.tlx{display:flex;gap:14px;padding:12px 0;position:relative}
.tlx::before{content:"";position:absolute;left:15px;top:44px;bottom:-4px;width:1px;background:var(--line)}
.tlx:last-child::before{display:none}
.hero{font-family:'Inter Tight',sans-serif;letter-spacing:-0.03em}
'''
SMP = '<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span>'
IC['memory'] = '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l3 2"></path>'
MEMI = lambda s=13: I('memory', s)


def head(title, sub='', right=''):
    return f'<div class="hd" style="padding-left: 28px"><h1>{title}</h1><span style="font-size: 14px; color: var(--mut2)">{sub}</span><span style="flex: 1"></span>{right}{SEP}{BELL}</div>'


def page(fname, title, active, html, collapsed=False):
    build(F(fname), title, active=active, main=html, notop=True, extra_css=CSS, navfn=NAV, collapsed=collapsed)


def live_pill():
    return '<span style="display: inline-flex; align-items: center; gap: 8px; height: 30px; padding: 0 12px; border-radius: 999px; background: var(--goodbg); color: var(--good); font-size: 12.5px; font-weight: 500"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--good)"></span>Answering calls and WhatsApp</span>'


# ================================================================ HOME
def home():
    stat = lambda v, l, s, c='var(--mut)': f'<div class="rc" style="padding: 16px 18px"><span style="font-size: 12.5px; color: var(--mut)">{l}</span><div class="hero" style="font-size: 30px; margin-top: 2px">{v}</div><span style="font-size: 12px; color: {c}">{s}</span></div>'
    stats = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px">' + stat('18', 'Calls answered', 'average 1:48') + stat('6', 'Missed calls saved', 'you were busy or closed', 'var(--good)') + stat('41', 'WhatsApp replies', 'average 4 sec') + stat('7', 'Bookings and requests', '₹8,400 if all come in') + '</div>'
    needs = [('P', 'P. Iyer', 'ph', 'Wants a call back about a refund', 'Vegham promised a call today', 'Call back', 'r'),
             ('M', 'Meera Iyer', 'wa', 'Asked for a price that isn’t in your list', 'Handed to you 12 min ago', 'Reply', 'w'),
             ('K', 'Kabir Rao', 'wa', 'Asked if you have parking for vans', 'Vegham didn’t know · teach it once', 'Answer', '')]
    nh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; {"border-top: 1px solid var(--line)" if i else ""}">{avch(a, ch, 36)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 14px">{n} <span style="font-weight: 400; color: var(--mut)">· {t}</span></b><span style="font-size: 12.5px; color: {"#E5484D" if k == "r" else "var(--warn)" if k == "w" else "var(--mut)"}">{d}</span></span>{ob(b)}</div>' for i, (a, n, ch, t, d, b, k) in enumerate(needs))
    mem = f'''<div class="rc" style="background: linear-gradient(135deg, rgba(124,58,237,.07), rgba(59,108,246,.05)); display: flex; flex-direction: column; gap: 12px">
      <span class="mem" style="align-self: flex-start">{MEMI()}Remembered today</span>
      <p style="margin: 0; font-size: 15.5px; line-height: 1.55"><b style="font-weight: 600">Rohan Mehra</b> called after <b style="font-weight: 600">6 months</b>. Vegham remembered he’d asked about weekend group sessions in May, picked up from there, and booked him for Saturday.</p>
      <div style="padding: 12px 14px; border-radius: 12px; background: var(--card); font-size: 13.5px; line-height: 1.5; border: 1px solid var(--line)"><span style="font-size: 12px; color: var(--mut)">Vegham said</span><br>“Hi Rohan, good to hear from you again! Last time, back in May, you were asking about our weekend group sessions. Still thinking about those?”</div>
      <span style="font-size: 13px; font-weight: 500">Listen to the call →</span>
      <div style="margin-top: 6px; padding-top: 14px; border-top: 1px solid var(--line)"><span style="font-size: 12px; color: var(--mut)">Also recognised today · 11 people</span>
        {"".join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; font-size: 13px">{cav(a, 26)}<b style="font-weight: 500">{n}</b><span style="color: var(--mut)">· {t}</span></div>' for a, n, t in [("S", "Sunita Das", "knew she likes early slots"), ("D", "Divya Menon", "booked the ground-floor room again"), ("N", "Neha Kapoor", "replied in Tamil, as she prefers")])}</div></div>'''
    recent = [('R', 'Rohan Mehra', 'ph', 'Booked Sat 10 AM group session', '6:12 PM', 'Returning · 6 mo'), ('S', 'Sunita Das', 'wa', 'Moved her visit to Friday', '5:40 PM', 'Regular'),
              ('+', '+91 70•• ••88', 'ph', 'Missed while busy · texted back in 6 sec', '3:10 PM', ''), ('A', 'Ananya Rao', 'wa', 'Asked about prices · sent the list', '1:22 PM', 'New')]
    rh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 11px 0; {"border-top: 1px solid var(--line)" if i else ""}">{avch(a, ch, 32)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span>{f"<span class=mem>{MEMI(12)}{tag}</span>" if "Returning" in tag else (bd(tag) if tag else "")}<span style="font-size: 12px; color: var(--mut2); width: 56px; text-align: right">{t}</span></div>' for i, (a, n, ch, d, t, tag) in enumerate(recent))
    body = f'''<div style="flex: 1; overflow: hidden; padding: 28px 32px; display: flex; flex-direction: column; gap: 18px">
      <div style="display: flex; align-items: flex-end; justify-content: space-between"><div><span style="font-size: 13px; color: var(--mut)">Saturday, 8 November</span><h1 class="hero" style="margin: 2px 0 0; font-size: 34px; font-weight: 400">Good evening, Vinay</h1></div>{live_pill()}</div>
      {stats}
      <div style="display: grid; grid-template-columns: 1.15fr 1fr; gap: 16px">
        <div style="display: flex; flex-direction: column; gap: 16px">{card("Needs you", "Vegham handled everything else", nh, bd("3", "warn"))}{card("Recent", "", rh, '<span style="font-size: 12.5px; font-weight: 500">All conversations →</span>')}</div>
        {mem}</div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{head("Home", "", ob("Test a call", "phone"))}{body}{SMP}</div>'


def welcome():
    steps = [('Your number is ready', '080 4719 2200 · Vegham answers here', True, ''), ('Forward your calls', 'On your phone, dial *21*08047192200# or forward only when busy: *67*…#', False, 'Show me how'),
             ('Connect WhatsApp', 'Scan once with your business number. Takes 2 minutes.', False, 'Connect'), ('Teach it 5 common questions', 'Prices, timings, location… we filled 3 from your website', False, 'Review'),
             ('Call and hear it', 'Call 080 4719 2200 from your phone. Then call again: it will remember you.', False, 'Call now')]
    sh = ''.join(f'''<div style="display: flex; align-items: center; gap: 16px; padding: 16px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="width: 30px; height: 30px; border-radius: 50%; flex: none; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; {"background: var(--goodbg); color: var(--good)" if done else "background: var(--soft); color: var(--mut)"}">{I("check", 15, 2.4) if done else i + 1}</span>
      <span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14.5px; {"color: var(--mut)" if done else ""}">{t}</b><span style="font-size: 13px; color: var(--mut)">{d}</span></span>{(pb(b) if i == 1 else ob(b)) if b else ""}</div>''' for i, (t, d, done, b) in enumerate(steps))
    body = f'''<div style="flex: 1; overflow: hidden; padding: 40px 32px; display: flex; justify-content: center"><div style="width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: 22px">
      <div><span class="mem">{MEMI()}Your agent is live</span><h1 class="hero" style="margin: 14px 0 6px; font-size: 40px; font-weight: 400; line-height: 1.1">Welcome, Vinay. Let’s get your first call answered.</h1><p style="margin: 0; font-size: 15.5px; color: var(--mut); line-height: 1.55">Four steps left. Most people finish in under 10 minutes.</p></div>
      <div class="rc" style="padding: 6px 24px"><div style="display: flex; align-items: center; gap: 12px; padding: 16px 0 6px"><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: 20%; height: 100%; border-radius: 3px; background: var(--good)"></span></span><span style="font-size: 12.5px; color: var(--mut)">1 of 5</span></div>{sh}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">
        <div class="rc" style="display: flex; gap: 14px; align-items: center"><span style="width: 44px; height: 44px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 16)}</span><span><b style="display: block; font-weight: 500">Hear your greeting</b><span style="font-size: 12.5px; color: var(--mut)">“Namaste, Nila &amp; Co. How can I help?” · Warm voice</span></span></div>
        <div class="rc" style="display: flex; gap: 14px; align-items: center"><span style="width: 44px; height: 44px; border-radius: 12px; background: rgba(124,58,237,.10); color: #7C3AED; display: inline-flex; align-items: center; justify-content: center; flex: none">{MEMI(20)}</span><span><b style="display: block; font-weight: 500">Memory is on</b><span style="font-size: 12.5px; color: var(--mut)">Vegham remembers each caller for 12 months. Change in Settings.</span></span></div></div></div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{head("Home", "", live_pill())}{body}{SMP}</div>'


# ================================================================ CONVERSATIONS
CONVS = [('needs', 'M', 'Meera Iyer', 'wa', 'Asked for a price not in your list', '12m', 'Regular · 2 yrs'),
         ('needs', 'P', 'P. Iyer', 'ph', 'Wants a call back about a refund', '25m', ''),
         ('today', 'R', 'Rohan Mehra', 'ph', 'Booked Sat 10 AM group session', '6:12 PM', 'Returning · 6 mo'),
         ('today', 'S', 'Sunita Das', 'wa', 'Moved her visit to Friday', '5:40 PM', 'Regular'),
         ('today', '+', '+91 70•• ••88', 'ph', 'Missed · texted back in 6 sec', '3:10 PM', ''),
         ('today', 'A', 'Ananya Rao', 'wa', 'Asked about prices · sent the list', '1:22 PM', 'New'),
         ('today', 'K', 'Kabir Rao', 'wa', 'Parking for vans? · couldn’t answer', '12:05 PM', ''),
         ('earlier', 'D', 'Divya Menon', 'ph', 'Confirmed tomorrow’s visit', 'Yesterday', 'Regular')]


def conv_list(sel_name):
    out, last = '', None
    lab = {'needs': 'Needs you · 2', 'today': 'Today', 'earlier': 'Earlier'}
    for g, a, n, ch, d, t, tag in CONVS:
        if g != last: out += f'<span class="grp">{lab[g]}</span>'; last = g
        on = n == sel_name
        acc = '<span style="position: absolute; left: 0; top: 14px; bottom: 14px; width: 3px; border-radius: 0 3px 3px 0; background: var(--warn)"></span>' if g == 'needs' else ''
        tg_ = f'<span class="mem" style="height: 20px; font-size: 11px; padding: 0 7px; margin-top: 6px">{MEMI(11)}{tag}</span>' if tag.startswith(('Returning', 'Regular')) else ''
        out += f'''<div class="row" style="display: flex; gap: 12px; padding: 11px 14px 11px 18px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if on else ""}">{acc}{avch(a, ch, 34)}
          <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-start"><span style="display: flex; justify-content: space-between; width: 100%; gap: 8px"><b style="font-weight: {600 if g == "needs" else 500}; font-size: 13.5px">{n}</b><span style="font-size: 11.5px; color: {"var(--warn)" if g == "needs" else "var(--mut2)"}">{t}</span></span>
          <span style="display: block; width: 100%; margin-top: 2px; font-size: 12.5px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{d}</span>{tg_}</span></div>'''
    return f'''<div style="width: 330px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div class="hd" style="padding: 0 12px 0 20px"><h1>Conversations</h1><span style="flex: 1"></span><label for="ov-pal" class="ibtn">{I("search", 17)}</label></div>
      <div style="display: flex; gap: 6px; padding: 12px 16px 6px">{chip("All", True)}{chip("Calls")}{chip("WhatsApp")}{chip("Needs you", False, "2")}</div>
      <div style="flex: 1; overflow: hidden">{out}</div></div>'''


def mem_panel(knew, learned, foot=''):
    kn = ''.join(f'<div style="display: flex; gap: 10px; padding: 7px 0; font-size: 13px; line-height: 1.45"><span style="color: #7C3AED; flex: none; margin-top: 2px">{I("check", 13, 2.2)}</span><span>{t}{f" <span style=\"color: var(--mut2)\">· {w}</span>" if w else ""}</span></div>' for t, w in knew)
    le = ''.join(f'<div style="display: flex; gap: 10px; padding: 7px 0; font-size: 13px; line-height: 1.45"><span style="color: var(--good); flex: none; margin-top: 2px">{I("plus", 13, 2.2)}</span><span>{t}</span></div>' for t in learned)
    return f'''<div class="pn" style="width: 340px">
      <div style="padding: 18px 20px 6px"><span class="mem">{MEMI()}Memory</span></div>
      <div class="ps" style="border-top: 0"><span class="pt">WHAT VEGHAM KNEW BEFORE ANSWERING</span>{kn}</div>
      <div class="ps"><span class="pt">WHAT IT LEARNED THIS TIME</span>{le}</div>{foot}</div>'''


def conversation_call():
    bars = ''.join(f'<span style="width: 3px; height: {5 + int(20 * abs(math.sin(i * 1.3) * math.cos(i * .37)))}px; border-radius: 2px; background: {"var(--ink)" if i < 24 else "var(--line)"}"></span>' for i in range(80))
    def turn(t, txt, us=False):
        lab = '<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 16px; height: 16px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700">V</span>Vegham</span>' if us else 'Rohan'
        return f'<div style="display: flex; gap: 14px; padding: 6px 0"><span style="width: 34px; flex: none; font-size: 12px; color: var(--mut2); padding-top: 20px">{t}</span><div style="flex: 1"><span style="font-size: 12px; color: var(--mut)">{lab}</span><div style="margin-top: 4px; padding: 9px 13px; border-radius: 14px; font-size: 14px; line-height: 1.55; background: {"rgba(59,108,246,.08)" if us else "var(--soft2)"}">{txt}</div></div></div>'
    tr = (turn('0:01', '<span class="memtxt">Hi Rohan, good to hear from you again!</span> <span class="memtxt">Last time, back in May, you were asking about our weekend group sessions.</span> Still thinking about those?', True)
          + turn('0:07', 'Haan, actually yes. Now we are 5 people. Is Saturday morning possible?')
          + turn('0:12', 'Yes, Saturday 10 AM has room for 5. It’s ₹350 per person, so ₹1,750. <span class="memtxt">Should I send the details on WhatsApp like last time?</span>', True)
          + turn('0:21', 'Yes please. Book it.')
          + turn('0:24', 'Done. Saturday 10 AM for 5, under Rohan. Details are on WhatsApp now. See you then!', True))
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div class="hd"><span style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0">{avch("R", "ph", 36)}<span><b style="display: block; font-weight: 600; font-size: 15px">Rohan Mehra <span class="mem" style="margin-left: 6px">{MEMI(12)}Returning · last talked 6 months ago</span></b><span style="font-size: 12px; color: var(--mut)">Call · today 6:12 PM · 0:41 · answered by Vegham · Hindi and English</span></span></span>{ob("Call back", "phone")}<span class="ibtn" title="Message on WhatsApp">{I("msg", 17)}</span>{SEP}{BELL}</div>
      <div style="flex: 1; overflow: hidden; padding: 22px 32px; display: flex; flex-direction: column; gap: 16px">
        <div class="rc"><div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 12px; color: var(--mut)">Summary</span>{bd("Booked", "good")}</div><p style="margin: 8px 0 0; font-size: 15.5px; line-height: 1.6">Rohan came back about the weekend group sessions he asked about in May. Group is now 5 people. Vegham booked <b style="font-weight: 600">Saturday 10 AM for 5 (₹1,750)</b> and sent details on WhatsApp.</p></div>
        <div class="rc" style="padding: 12px 16px; display: flex; align-items: center; gap: 14px"><span style="width: 38px; height: 38px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 14)}</span><span style="flex: 1; min-width: 0; overflow: hidden; display: flex; align-items: center; gap: 2px; height: 30px">{bars}</span><span style="font-size: 12.5px; color: var(--mut)">0:12 / 0:41</span></div>
        <div><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 14px; font-weight: 600">Transcript</b><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut)"><span class="memtxt">highlighted</span> = from memory</span></div>{tr}</div></div></div>'''
    knew = [('Name: Rohan Mehra', ''), ('Speaks Hindi and English', ''), ('Asked about weekend group sessions · “will think about it”', '14 May'), ('Prefers details on WhatsApp', '14 May'), ('Group of 3 then', '14 May')]
    learned = ['Group is now 5 people (was 3)', 'Booked Sat 15 Nov, 10 AM group session', 'Open loop closed: group sessions']
    foot = f'<div class="ps" style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px">{ob("Open Rohan’s memory")}{ob("Fix a memory", "edit")}</div>'
    return f'<div style="display: flex; height: 100%; position: relative">{conv_list("Rohan Mehra")}{center}{mem_panel(knew, learned, foot)}{SMP}</div>'


def conversation_chat():
    def msg_them(t, tm):
        return f'<div style="display: flex; gap: 10px; align-items: flex-end; max-width: 76%">{cav("M", 28)}<div><div style="background: var(--soft2); padding: 10px 14px; border-radius: 18px 18px 18px 6px; font-size: 14.5px; line-height: 1.5">{t}</div><div style="margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{tm}</div></div></div>'
    def msg_us(t, tm, who='Vegham'):
        return f'<div style="align-self: flex-end; max-width: 72%; display: flex; flex-direction: column; align-items: flex-end"><div style="margin-bottom: 4px; font-size: 11.5px; color: var(--mut)">{who}</div><div style="background: rgba(59,108,246,.10); padding: 10px 14px; border-radius: 18px 18px 6px 18px; font-size: 14.5px; line-height: 1.5">{t}</div><div style="margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{tm} · Read</div></div>'
    msgs = (msg_them('Hi! Can I come Friday evening instead of Saturday this week?', '5:51 PM')
            + msg_us('Hi Meera! <span class="memtxt">Sure, Friday 6 PM with Priya like usual?</span>', '5:51 PM')
            + msg_them('Yes. Also my sister wants to join. How much for two of us, 4 sessions each?', '5:53 PM')
            + msg_us('Let me check that price with the team. Someone will reply in a few minutes.', '5:53 PM'))
    hand = f'''<div style="margin: 14px 28px 0; padding: 12px 16px; border-radius: 14px; background: var(--warnbg); font-size: 13.5px; display: flex; align-items: center; gap: 12px"><span style="flex: 1"><b style="font-weight: 600">Handed to you</b> · a price for 2 people × 4 sessions isn’t in your list. Vegham told Meera someone will reply.</span><span style="font-weight: 500; white-space: nowrap">Let Vegham continue</span></div>'''
    sugg = f'''<div style="margin: 0 28px 10px; padding: 12px 14px; border-radius: 14px; border: 1px dashed var(--line)"><span style="font-size: 12px; color: var(--mut)"><b style="color: var(--text); font-weight: 600">Suggested reply</b> · from your prices and Meera’s history</span><p style="margin: 6px 0 10px; font-size: 14px; line-height: 1.5">For two people, 4 sessions each, it’s ₹8,000. As you’ve been coming for 2 years, we can do ₹7,200. Shall I book Friday 6 PM for both?</p><div style="display: flex; gap: 8px">{pb("Send")}{ob("Edit")}<span style="flex: 1"></span><span style="font-size: 12px; color: var(--mut); align-self: center">Teach Vegham this price</span></div></div>'''
    comp = f'<div style="margin: 0 28px 18px; border: 1px solid var(--line); border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px; color: var(--mut2); font-size: 14px"><span style="flex: 1">Reply to Meera… Vegham pauses while you write</span><span style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px; color: var(--mut)">{WA(13)}WhatsApp · 23 h left to reply free</span>{pb("Send")}</div>'
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div class="hd"><span style="display: flex; align-items: center; gap: 12px; flex: 1">{avch("M", "wa", 36)}<span><b style="display: block; font-weight: 600; font-size: 15px">Meera Iyer <span class="mem" style="margin-left: 6px">{MEMI(12)}Regular · 2 years</span></b><span style="font-size: 12px; color: var(--mut)">WhatsApp · +91 98450 33221</span></span></span>{ob("Done", "check")}{SEP}{BELL}</div>
      {hand}<div style="flex: 1; overflow: hidden; padding: 18px 28px; display: flex; flex-direction: column; justify-content: flex-end; gap: 14px">{msgs}</div>{sugg}{comp}</div>'''
    knew = [('Comes every Saturday 11 AM, with Priya', ''), ('Has a 10-visit pack · 4 left', ''), ('Prefers WhatsApp, never calls', ''), ('Customer since Nov 2024 · 38 visits', '')]
    learned = ['Wants Friday 6 PM this week only', 'Her sister may join (new person)', 'Asked for a 2-person price']
    return f'<div style="display: flex; height: 100%; position: relative">{conv_list("Meera Iyer")}{center}{mem_panel(knew, learned)}{SMP}</div>'


# ================================================================ PEOPLE
PEOPLE = [('R', 'Rohan Mehra', 'ph', 'Group of 5 now · prefers WhatsApp for details', 'Today', 'Booked Sat', 'good', '4'),
          ('M', 'Meera Iyer', 'wa', 'Every Saturday with Priya · 10-visit pack', '12 min ago', 'Waiting on you', 'warn', '41'),
          ('S', 'Sunita Das', 'wa', 'Likes early slots · pays by UPI', '5:40 PM', 'Regular', 'mut', '18'),
          ('A', 'Ananya Rao', 'wa', 'First contact · asked about prices', '1:22 PM', 'Thinking it over', 'acc', '1'),
          ('P', 'P. Iyer', 'ph', 'Unhappy last visit · wants refund', '25 min ago', 'Call back today', 'bad', '3'),
          ('D', 'Divya Menon', 'ph', 'Brings her mother · needs ground floor', 'Yesterday', 'Regular', 'mut', '12'),
          ('V', 'Vikram Singh', 'ph', 'Asked for evening slots in August', '3 months ago', 'Didn’t book', 'acc', '1'),
          ('K', 'Kavya Nair', 'wa', 'Group organiser · 8 friends', '3 weeks ago', 'Regular', 'mut', '6'),
          ('N', 'Neha Kapoor', 'wa', 'Speaks Tamil and English', '5 days ago', 'Regular', 'mut', '9')]


def people():
    rows = ''.join(f'''<tr><td><span style="display: flex; align-items: center; gap: 10px">{avch(a, ch, 32)}<b style="font-weight: 500">{n}</b></span></td><td style="color: var(--mut); max-width: 340px; overflow: hidden; text-overflow: ellipsis"><span style="color: #7C3AED; margin-right: 6px">{MEMI(12)}</span>{m}</td>
        <td>{bd(st, k)}</td><td class="r" style="color: var(--mut)">{c}</td><td style="color: var(--mut)">{t}</td></tr>''' for a, n, ch, m, t, st, k, c in PEOPLE)
    table = f'<table class="tbl2"><tr><th>Person</th><th>Vegham remembers</th><th>Where things stand</th><th class="r">Conversations</th><th>Last talked</th></tr>{rows}</table>'
    strip = app9.strip([('People Vegham knows', '1,284', '+86 this month', 'var(--good)'), ('Came back', '412', 'and were recognised', 'var(--mut)'), ('Open loops', '23', 'people who said “I’ll think about it”', 'var(--warn)'), ('Memory kept for', '12 months', 'change in Settings', 'var(--mut)')])
    filt = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("Everyone", True, "1,284")}{chip("Open loops", False, "23")}{chip("Regulars", False, "312")}{chip("New this month", False, "86")}{chip("Haven’t talked in 60+ days", False, "58")}<span style="flex: 1"></span>{ob("Export", "download")}</div>'
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head("People", "Everyone Vegham has talked to", f"<label for=\"ov-pal\" class=\"ibtn\">{I(chr(115)+chr(101)+chr(97)+chr(114)+chr(99)+chr(104), 17)}</label>")}{strip}{filt}<div style="flex: 1; overflow: hidden">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


def person():
    facts = [('Name', 'Rohan Mehra', 'Said on a call · 14 May', False), ('Language', 'Hindi and English, switches mid-sentence', 'Every call', False),
             ('Group size', '5 people <span style="color: var(--mut2); text-decoration: line-through; margin-left: 6px">3</span>', 'Updated today · was 3 in May', True),
             ('Prefers', 'Details on WhatsApp, calls in the evening', '14 May', False), ('Interested in', 'Weekend group sessions', '14 May · booked today', False)]
    fh = ''.join(f'''<div class="fact"><span style="width: 110px; flex: none; font-size: 12.5px; color: var(--mut); padding-top: 1px">{k}</span><span style="flex: 1"><span style="font-size: 14px">{v}</span>{' ' + bd('Updated', 'good') if new else ''}<span style="display: block; font-size: 12px; color: var(--mut2); margin-top: 2px">{src}</span></span><span class="ibtn" style="width: 28px; height: 28px" title="Edit">{I("edit", 14)}</span></div>''' for k, v, src, new in facts)
    tl = [('ph', 'Today, 6:12 PM · call 0:41', 'Came back about group sessions. Group is now 5. Booked Sat 15 Nov, 10 AM.', 'Booked', 'good'),
          ('wa', 'Today, 6:13 PM · WhatsApp', 'Vegham sent booking details and the location pin.', '', ''),
          ('wa', '14 May · WhatsApp', 'Sent group session timings and prices as he asked.', '', ''),
          ('ph', '14 May · call 1:52', 'Asked about weekend group sessions for 3 friends. Said he’d think about it and call back.', 'Open loop', 'acc')]
    tlh = ''.join(f'<div class="tlx"><span style="width: 32px; height: 32px; border-radius: 50%; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none; position: relative; z-index: 1">{(PH if ch == "ph" else WA)(15)}</span><span style="flex: 1"><span style="display: flex; justify-content: space-between; gap: 10px"><b style="font-weight: 500; font-size: 13.5px">{t}</b>{bd(b, k) if b else ""}</span><span style="display: block; margin-top: 2px; font-size: 13px; color: var(--mut); line-height: 1.5">{d}</span></span></div>' for ch, t, d, b, k in tl)
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 22px 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-content: start">
      <div class="rc"><div class="rh"><span><b class="rt2">What Vegham remembers</b><span class="rs">Used to recognise Rohan and talk naturally</span></span>{ob("Add", "plus")}</div>{fh}</div>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div class="rc"><b class="rt2">Where things stand</b><div style="display: flex; gap: 12px; align-items: flex-start; margin-top: 12px; padding: 12px 14px; border-radius: 12px; background: var(--goodbg)"><span style="color: var(--good)">{I("check", 16, 2.4)}</span><span style="font-size: 13.5px; line-height: 1.5"><b style="font-weight: 600">Open loop closed today.</b> He was “thinking about” group sessions since May, and booked.</span></div>
          <div style="margin-top: 12px; font-size: 13px; color: var(--mut)">Next: <b style="color: var(--text); font-weight: 500">Sat 15 Nov, 10 AM · group of 5</b> · reminder Friday evening</div></div>
        <div class="rc"><b class="rt2">Conversations</b><span class="rs">4 over 6 months</span><div style="margin-top: 12px">{tlh}</div></div></div></div>'''
    greet = f'''<div style="padding: 12px 14px; border-radius: 12px; border: 1px solid var(--line); font-size: 13.5px; line-height: 1.55">“Hi Rohan! All set for Saturday at 10 with your group of 5?”</div>'''
    right = f'''<div class="pn" style="width: 330px">
      <div style="padding: 20px"><div style="display: flex; align-items: center; gap: 14px">{cav("R", 52)}<span><b style="display: block; font-size: 18px; font-weight: 600">Rohan Mehra</b><span style="font-size: 12.5px; color: var(--mut)">+91 98•• ••21 · since May</span></span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">{ob("Call", "phone")}{ob("WhatsApp", "msg")}</div></div>
      <div class="ps"><span class="pt">IF ROHAN CALLS TOMORROW, VEGHAM SAYS</span>{greet}</div>
      <div class="ps"><span class="pt">PRIVACY</span><div class="kv2"><span>Heard the notice</span><span>Yes · both calls</span></div><div class="kv2"><span>Kept until</span><span>Nov 2027</span></div><div class="kv2"><span>Offers on WhatsApp</span><span style="color: var(--good)">Opted in</span></div>
        <div style="margin-top: 12px"><span class="obtn" style="color: #E5484D; border-color: rgba(229,72,77,.35)">{I("trash", 15)}Forget Rohan</span></div></div></div>'''
    hd = f'<div class="hd" style="padding-left: 28px"><span style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--mut); flex: 1">People {I("chevr", 13)}<span style="color: var(--text); font-weight: 500">Rohan Mehra</span></span>{SEP}{BELL}</div>'
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd}<div style="flex: 1; display: flex; min-height: 0">{left}{right}</div>{SMP}</div>'


# ================================================================ YOUR AGENT
ATABS = [('Voice and calls', 'Agent'), ('Memory', 'AgentMemory'), ('Knowledge', 'AgentKnowledge'), ('Test', 'AgentTest')]


def agent_shell(tab, body, right=''):
    tabs = '<div class="atab">' + ''.join(f'<span class="{"on" if t == tab else ""}">{t}</span>' for t, _ in ATABS) + '</div>'
    hd = f'''<div style="padding: 18px 28px 0; display: flex; align-items: center; gap: 14px"><span style="width: 46px; height: 46px; border-radius: 14px; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center">{I("headset", 22)}</span>
      <span style="flex: 1"><b style="display: block; font-size: 20px; font-weight: 600">Your agent</b><span style="font-size: 12.5px; color: var(--mut)">Answers 080 4719 2200 and WhatsApp +91 98765 43210</span></span>{live_pill()}{ob("Discard")}{pb("Save changes")}{SEP}{BELL}</div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd}<div style="height: 14px"></div>{tabs}<div style="flex: 1; display: flex; min-height: 0">{body}</div>{SMP}</div>'


def agent():
    voices = [('Warm', 'Female · calm, friendly', True), ('Easy', 'Male · relaxed', False), ('Bright', 'Female · upbeat', False)]
    vh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; border: 1px solid {"var(--text)" if on else "var(--line)"}"><span style="width: 34px; height: 34px; border-radius: 50%; background: {"var(--ink)" if on else "var(--soft2)"}; color: {"var(--inkfg)" if on else "var(--text)"}; display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 14)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{bd("Selected", "good") if on else ""}</div>' for n, d, on in voices)
    langs = ''.join(chip(l, on) for l, on in [('English', True), ('Hindi', True), ('Kannada', False), ('Tamil', False), ('Telugu', False), ('Marathi', False)])
    perm = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    when = perm(['Every call', 'When I miss it', 'After hours only'], 1)
    can = [('Answer questions', 'From your Knowledge', True), ('Take bookings and requests', 'Sends them to you on WhatsApp', True), ('Transfer to you', 'If the caller asks for a person', True), ('Take a message', 'When no one picks up', True), ('Text back missed calls', 'On WhatsApp within seconds', True)]
    canh = ''.join(row(t, d, tg(o), i > 0) for i, (t, d, o) in enumerate(can))
    body = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 22px 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-content: start">
      {card("Voice", "Press play to hear each one", f'<div style="display: flex; flex-direction: column; gap: 8px">{vh}</div>')}
      {card("Greeting", "", f'<span class="lab">New callers</span><span class="fl" style="display: block; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; font-size: 13.5px">Namaste, Nila &amp; Co. How can I help?</span><span class="lab" style="margin-top: 12px">People Vegham knows <span class="mem" style="margin-left: 6px; height: 20px; font-size: 11px">{MEMI(11)}Memory</span></span><span class="fl" style="display: block; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; font-size: 13.5px">Hi <span class="memtxt">{{name}}</span>, good to hear from you again! <span style="color: var(--mut)">+ picks up where you left off</span></span><div style="margin-top: 12px"><span class="lab">Languages</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{langs}</div></div>')}
      {card("When it answers", "", when + row("Your number", "080 4719 2200 · forwarding from +91 80 4123 5678", ob("Change")) + row("Transfer to", "Vinay · +91 98450 11220", ob("Change")))}
      {card("What it can do", "", canh)}</div>'''
    return agent_shell('Voice and calls', body)


def agent_memory():
    perm = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    ex = [('Naturally', '“Hi Rohan! Last time you were asking about group sessions. Still interested?”'), ('Only if it helps', '“Hi Rohan! How can I help?” · uses memory quietly to book faster'), ('Never mention it', 'Recognises callers but never refers to past conversations')]
    exh = ''.join(f'<div style="display: flex; gap: 12px; padding: 12px 14px; border-radius: 14px; border: 1px solid {"var(--text)" if i == 0 else "var(--line)"}"><span style="width: 16px; height: 16px; border-radius: 50%; flex: none; margin-top: 2px; border: {"5px solid var(--text)" if i == 0 else "1.5px solid var(--mut2)"}"></span><span><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div>' for i, (t, d) in enumerate(ex))
    rem = [('Names, languages and preferences', True), ('What they asked about and didn’t book', True), ('Bookings and visits', True), ('How they felt (happy, unhappy)', True), ('Personal details they share (family, health, money)', False)]
    remh = ''.join(row(t, '', tg(o), i > 0) for i, (t, o) in enumerate(rem))
    body = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 22px 28px; display: grid; grid-template-columns: 1.1fr 1fr; gap: 16px; align-content: start">
      <div style="display: flex; flex-direction: column; gap: 16px">{card("Remember people", "Recognise callers and WhatsApp contacts by their number", row("Memory", "On for calls and WhatsApp", tg(), False))}
        {card("How it uses memory", "When someone Vegham knows calls back", f'<div style="display: flex; flex-direction: column; gap: 8px">{exh}</div>')}
        {card("Check before assuming", "", row("Confirm anything older than", "“Still a group of 3, or has that changed?”", perm(["1 month", "3 months", "6 months"], 1), False) + row("Shared phones", "If the voice or name doesn’t match, ask who’s calling first", tg()))}</div>
      <div style="display: flex; flex-direction: column; gap: 16px">{card("What it remembers", "", remh)}
        {card("Privacy", "India’s DPDP Act: people must know, and can ask you to forget", row("Tell callers at the start", "“This call may be recorded and remembered to help you next time.”", tg(), False) + row("Keep memory for", "Then it’s deleted", perm(["6 months", "12 months", "24 months"], 1)) + row("“Forget me” requests", "Handled automatically if a caller asks", tg()))}</div></div>'''
    return agent_shell('Memory', body)


def agent_knowledge():
    srcs = [('globe', 'Website', 'nilaandco.in · 14 pages · read 2 days ago', 'Live', 'good'), ('tag', 'Prices', '12 services · added during setup', 'Live', 'good'), ('clock', 'Hours and location', 'Mon–Sat 9–8 · Indiranagar', 'Live', 'good')]
    sh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="width: 34px; height: 34px; border-radius: 10px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 16)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{bd(s, k)}</div>' for i, (ic, n, d, s, k) in enumerate(srcs))
    faqs = [('Is there parking?', 'Free parking behind the building, enter from 7th Cross.', 41), ('Do you take walk-ins?', 'Yes till 6 PM if a slot is free. Calling ahead is best.', 33), ('Group sessions?', 'Saturdays 9 AM – 2 PM, up to 8 people, ₹350 each.', 19), ('Open on Sundays?', 'No, we’re closed on Sundays.', 9)]
    fh = ''.join(f'<div style="padding: 12px 0; border-top: 1px solid var(--line)"><div style="display: flex; justify-content: space-between"><b style="font-weight: 500; font-size: 13.5px">{q}</b><span style="font-size: 12px; color: var(--mut2)">used {u}×</span></div><span style="font-size: 13px; color: var(--mut)">{a}</span></div>' for q, a, u in faqs)
    gaps = [('Do you have parking for vans?', 'Kabir Rao · today'), ('Is there a lift?', '2 people this week'), ('Student discount?', '3 people this month')]
    gh = ''.join(f'<div style="padding: 12px; border-radius: 12px; border: 1px solid var(--line); margin-top: 8px"><b style="display: block; font-weight: 500; font-size: 13px">{q}</b><span style="font-size: 12px; color: var(--mut)">{w}</span><div class="fld" style="margin-top: 8px; height: 34px; color: var(--mut2)">Answer once…</div></div>' for q, w in gaps)
    body = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 22px 28px; display: flex; flex-direction: column; gap: 16px">{card("Where it learns from", "", sh, ob("Add", "plus"))}{card("Questions and answers", "26 answers", fh, pb("Add answer", "plus"))}</div>
      <div class="pn" style="width: 340px; padding: 20px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 14px; font-weight: 600">Questions it couldn’t answer</b>{bd("3", "warn")}</div><span style="font-size: 12.5px; color: var(--mut)">It told callers someone will get back. Answer once and it knows from then on.</span>{gh}</div>'''
    return agent_shell('Knowledge', body)


def agent_test():
    turns = [('Vegham', '<span class="memtxt">Hi Rohan, good to hear from you again!</span> <span class="memtxt">All set for Saturday at 10 with your group of 5?</span>'), ('You', 'Actually can we make it 6 people?'), ('Vegham', 'Yes, Saturday 10 AM has room. That’s 6 × ₹350 = ₹2,100. Shall I update it?'), ('You', 'Yes')]
    th = ''.join(f'<div style="align-self: {"flex-start" if w == "Vegham" else "flex-end"}; max-width: 78%"><span style="display: block; font-size: 11.5px; color: var(--mut); margin-bottom: 4px">{w}</span><div style="padding: 10px 14px; border-radius: 16px; font-size: 14px; line-height: 1.5; background: {"rgba(59,108,246,.08)" if w == "Vegham" else "var(--soft2)"}">{t}</div></div>' for w, t in turns)
    who = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; border: 1px solid {"var(--text)" if on else "var(--line)"}">{cav(a, 30)}<span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span></div>' for a, n, d, on in [('+', 'A new caller', 'No memory', False), ('R', 'Rohan Mehra', 'Returning · booked for Saturday', True), ('P', 'P. Iyer', 'Unhappy last time', False)])
    left = f'''<div style="width: 340px; flex: none; border-right: 1px solid var(--line); padding: 22px 24px; display: flex; flex-direction: column; gap: 10px"><b style="font-size: 14px; font-weight: 600">Pretend to be</b><span style="font-size: 12.5px; color: var(--mut); margin-top: -4px">Hear how Vegham talks to different people</span>{who}
      <div style="margin-top: 10px; padding: 14px; border-radius: 14px; background: var(--soft2); font-size: 12.5px; color: var(--mut); line-height: 1.5">Test calls use your unsaved changes and never change real memory.</div></div>'''
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; padding: 26px 28px; gap: 16px">
      <div style="display: flex; align-items: center; gap: 14px"><span style="width: 56px; height: 56px; border-radius: 50%; background: #E5484D; color: #FFF; display: inline-flex; align-items: center; justify-content: center">{I("phone", 22)}</span><span><b style="display: block; font-size: 16px; font-weight: 600">Test call · as Rohan</b><span style="font-size: 12.5px; color: var(--good)">● Live · 0:18</span></span></div>
      <div style="width: 100%; max-width: 560px; flex: 1; display: flex; flex-direction: column; gap: 12px; justify-content: flex-end">{th}</div>
      <div style="display: flex; gap: 8px">{ob("Type instead")}{ob("Call my phone", "phone")}<span class="obtn" style="color: #E5484D">End test</span></div></div>'''
    return agent_shell('Test', left + center + mem_panel([('Rohan Mehra · Hindi and English', ''), ('Booked Sat 10 AM, group of 5', ''), ('Prefers WhatsApp for details', '')], ['Group is now 6 (test only, not saved)']))


# ================================================================ SETTINGS
def settings():
    secs = [('Business', True), ('Phone and WhatsApp', False), ('Team', False), ('Notifications', False), ('Plan and usage', False), ('Privacy', False)]
    nav = ''.join(f'<span class="an{" on" if on else ""}" style="display: flex; height: 36px; align-items: center; padding: 0 12px; border-radius: 9px; font-size: 14px; {"background: var(--soft); color: var(--text); font-weight: 500" if on else "color: var(--mut)"}">{t}</span>' for t, on in secs)
    fld = lambda l, v: f'<div><span class="lab">{l}</span><span class="fld">{v}</span></div>'
    grid2 = lambda *x: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">' + ''.join(x) + '</div>'
    usage = lambda l, u, t, p: f'<div style="padding: 10px 0"><div style="display: flex; justify-content: space-between; font-size: 13px"><span>{l}</span><span style="color: var(--mut)">{u} of {t}</span></div><div style="margin-top: 8px; height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></div></div>'
    body = f'''<div style="width: 240px; flex: none; border-right: 1px solid var(--line); padding: 18px 12px; display: flex; flex-direction: column; gap: 2px">{nav}</div>
      <div style="flex: 1; min-width: 0; overflow: hidden; padding: 22px 32px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px; align-content: start">
        <div style="display: flex; flex-direction: column; gap: 16px">{card("Business", "What Vegham says about you", grid2(fld("Business name", "Nila &amp; Co"), fld("Phone people know", "+91 80 4123 5678"), fld("Address", "12, 100 Feet Rd, Indiranagar"), fld("Website", "nilaandco.in")))}
          {card("Opening hours", "Vegham still answers when you’re closed", "".join(f'<div style="display: flex; justify-content: space-between; padding: 7px 0; font-size: 13.5px; border-top: {"0" if i == 0 else "1px solid var(--line)"}"><span>{d}</span><span style="color: var(--mut)">{h}</span></div>' for i, (d, h) in enumerate([("Monday – Friday", "9:00 AM – 8:00 PM"), ("Saturday", "10:00 AM – 6:00 PM"), ("Sunday", "Closed")])))}
          {card("Phone and WhatsApp", "", row("Vegham number", "080 4719 2200 · forwarding from +91 80 4123 5678 when busy", bd("Working", "good"), False) + row("WhatsApp", "+91 98765 43210 · Nila &amp; Co", bd("Connected", "good")) + row("Team", "Vinay (owner) · Priya gets hand-overs", ob("Manage")))}</div>
        <div style="display: flex; flex-direction: column; gap: 16px">{card("Plan and usage", "Growth · free pilot · 23 days left", usage("Call minutes", "212", "500", 42) + usage("WhatsApp conversations", "742", "1,500", 49) + '<div style="margin-top: 8px">' + pb("Choose a plan") + '</div>')}
          {card("Where you get alerts", "", row("Hand-overs", "WhatsApp to Vinay", tg(), False) + row("Call-back requests", "WhatsApp and app", tg()) + row("Daily summary", "8 PM on WhatsApp", tg()))}</div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{head("Settings")}<div style="flex: 1; display: flex; min-height: 0">{body}</div>{SMP}</div>'


BOARDS = [('Welcome', 'Home · first login', 'Home', welcome), ('Home', 'Home', 'Home', home), ('Conversations', 'Conversations · a returning caller', 'Conversations', conversation_call),
          ('ConversationChat', 'Conversations · WhatsApp hand-over', 'Conversations', conversation_chat), ('People', 'People', 'People', people), ('Person', 'People · one person’s memory', 'People', person),
          ('Agent', 'Your agent · voice and calls', 'Your agent', agent), ('AgentMemory', 'Your agent · memory', 'Your agent', agent_memory), ('AgentKnowledge', 'Your agent · knowledge', 'Your agent', agent_knowledge),
          ('AgentTest', 'Your agent · test call', 'Your agent', agent_test), ('Settings', 'Settings', 'Settings', settings)]
LINKS = {'Home': [('Listen to the call →', 'Conversations'), ('>Rohan Mehra<', 'Conversations'), ('All conversations →', 'Conversations'), ('>Reply<', 'ConversationChat')],
         'Welcome': [],
         'Conversations': [('>Meera Iyer<', 'ConversationChat'), ('Open Rohan’s memory', 'Person')],
         'ConversationChat': [('>Rohan Mehra<', 'Conversations')],
         'People': [('>Rohan Mehra<', 'Person')],
         'Person': [('People <svg', 'People')]}
for n in ['Agent', 'AgentMemory', 'AgentKnowledge', 'AgentTest']:
    LINKS[n] = [(f'>{t}<', f) for t, f in ATABS if f != n]

if __name__ == '__main__':
    P = app2.P
    for f, t, act, fn in BOARDS:
        page(f, 'Vegham · ' + t, act, fn(), collapsed=f in ('Conversations', 'ConversationChat'))
        fp = os.path.join(P, F(f)); html = open(fp).read()
        for needle, tgt in LINKS.get(f, []):
            html = link(html, needle, F(tgt))
        for a, b in [('.atab span', '.atab>*'), ('.seg label', '.seg>*')]:
            html = html.replace(a, b)
        html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}' + NEUTRAL + '</style>', 1)
        for a, b in COLOR_SWAPS:
            html = html.replace(a, b)
        open(fp, 'w').write(html)
    print('new app ok')
