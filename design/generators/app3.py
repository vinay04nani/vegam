"""App v2 pages in the shared shell: Inbox, Calendar, Calls, Contacts, Leads, Reviews, Payments,
Campaigns, Reports, AI agents, Channels and apps, Business settings. Sample data throughout."""
import os, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app2, comps
from app2 import I, IC, WA, IG, build, HF

IC.update({
    'filter': '<path d="M4 5h16M7 12h10M10 19h4"></path>',
    'more': '<circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
    'chevl': '<path d="M15 6l-6 6 6 6"></path>',
    'play': '<path d="M7 5l12 7-12 7z"></path>',
    'upload': '<path d="M12 16V4M6 9l6-6 6 6M4 20h16"></path>',
    'note': '<path d="M5 4h14v12l-5 4H5z"></path><path d="M14 20v-4h5"></path>',
    'link': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>',
    'clock': '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    'tag': '<path d="M3 12V4h8l10 10-8 8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>',
    'reply': '<path d="M10 7L4 12l6 5M4 12h11a5 5 0 0 1 5 5v1"></path>',
    'pause': '<rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect>',
    'calendar2': '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>',
})
MS = lambda s=14: comps.logo('messenger', s)
GO = lambda s=14: comps.logo('google', s)
GLOBE = lambda s=14: comps.GLOBE.format(s=s, c='currentColor')
PH = lambda s=14: I('phone', s)
CH = {'wa': WA, 'ig': IG, 'ms': MS, 'web': GLOBE, 'ph': PH, 'go': GO}

CSS = '''
.tb{display:grid;align-items:center;gap:14px;padding:0 20px;height:52px;border-bottom:1px solid var(--line);font-size:13.5px}
.tb.h{height:40px;font-size:12px;color:var(--mut);background:var(--soft2);border-bottom:1px solid var(--line)}
.tb:hover:not(.h){background:var(--soft2)}
.bd{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 9px;border-radius:999px;font-size:11.5px;font-weight:500;white-space:nowrap}
.bd.good{background:var(--goodbg);color:var(--good)}.bd.warn{background:var(--warnbg);color:var(--warn)}
.bd.mut{background:var(--soft);color:var(--mut)}.bd.acc{background:rgba(59,108,246,.12);color:var(--acc)}.bd.bad{background:rgba(229,72,77,.12);color:#E5484D}
.av{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:var(--soft);color:var(--text);font-weight:600;flex:none}
.tabs{display:flex;gap:4px;padding:0 20px;border-bottom:1px solid var(--line)}
.tabs span{display:inline-flex;align-items:center;gap:6px;height:42px;padding:0 10px;font-size:13.5px;color:var(--mut);border-bottom:2px solid transparent;margin-bottom:-1px}
.tabs span.on{color:var(--text);border-color:var(--text);font-weight:500}
.cnt{font-size:11.5px;color:var(--mut2)}
.fld{display:flex;align-items:center;height:38px;padding:0 12px;border-radius:10px;border:1px solid var(--line);font-size:13.5px;color:var(--text);background:var(--bg)}
.lab{display:block;font-size:12.5px;font-weight:500;color:var(--text);margin-bottom:6px}
.smp{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--mut2)}
.sw{width:34px;height:20px;border-radius:999px;background:var(--soft);position:relative;flex:none;display:inline-block}
.sw::after{content:"";position:absolute;left:2px;top:2px;width:16px;height:16px;border-radius:50%;background:#FFF;box-shadow:0 1px 2px rgba(0,0,0,.25)}
.sw.on{background:var(--good)}.sw.on::after{left:16px}
'''
av = lambda t, s=32, extra='': f'<span class="av" style="width: {s}px; height: {s}px; font-size: {round(s * .38)}px; {extra}">{t}</span>'
bd = lambda t, k='mut': f'<span class="bd {k}">{t}</span>'
pb = lambda t, ic=None: f'<span class="pbtn">{I(ic, 15, 2) if ic else ""}{t}</span>'
ob = lambda t, ic=None: f'<span class="obtn">{I(ic, 15) if ic else ""}{t}</span>'
search = lambda ph, w='260px': f'<span class="fld" style="width: {w}; gap: 8px; color: var(--mut2)">{I("search", 15)}{ph}</span>'
seg = lambda opts, on=0: '<span class="seg">' + ''.join(f'<label style="{"background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)" if i == on else ""}">{o}</label>' for i, o in enumerate(opts)) + '</span>'
def chlogo(k, s=14):
    return f'<span style="width: {s + 8}px; height: {s + 8}px; border-radius: 50%; background: var(--bg); box-shadow: 0 0 0 1px var(--line); display: inline-flex; align-items: center; justify-content: center; color: var(--mut); flex: none">{CH[k](s)}</span>'
def avc(t, k, s=36):
    return f'<span style="position: relative; flex: none">{av(t, s)}<span style="position: absolute; right: -3px; bottom: -3px">{chlogo(k, 10)}</span></span>'
smp = '<span class="smp">Sample data</span>'

# ======================================================== INBOX
def inbox():
    convs = [('R', 'Riya Sharma', 'wa', 'Booked ✓ See you tomorrow at 6:30 PM', 'now', 'AI', False, True),
             ('A', 'Arjun Mehta', 'ig', 'Price for a group of 8?', '9m', 'Needs you', True, False),
             ('+', '+91 98•• ••21', 'ph', 'Call · asked about Saturday hours', '25m', 'AI', False, False),
             ('M', 'Meera Iyer', 'wa', 'Can I move my visit to Saturday?', '1h', 'You', False, False),
             ('K', 'Kabir Rao', 'web', 'Is there parking near you?', '2h', 'AI', False, False),
             ('S', 'Sunita Das', 'ms', 'Thank you! See you soon', '3h', 'Closed', False, False),
             ('P', 'P. Iyer', 'ph', 'Asked for a call back', '4h', 'Needs you', True, False),
             ('N', 'Neha Kapoor', 'wa', 'Payment done ✓ ₹1,200', 'Yest', 'AI', False, False),
             ('V', 'Vikram S', 'go', 'Do you take walk-ins?', 'Yest', 'AI', False, False)]
    rows = ''
    for i, (ini, n, ch, prev, t, st, unread, sel) in enumerate(convs):
        stb = bd('Needs you', 'warn') if st == 'Needs you' else bd('AI', 'acc') if st == 'AI' else bd('You', 'mut') if st == 'You' else ''
        rows += f'''<div style="display: flex; gap: 12px; padding: 12px 14px; border-radius: 12px; margin: 2px 8px; {"background: var(--soft)" if sel else ""}">{avc(ini, ch)}
          <span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; gap: 8px"><b style="font-weight: {600 if unread else 500}; font-size: 13.5px">{n}</b><span class="cnt">{t}</span></span>
          <span style="display: flex; justify-content: space-between; gap: 8px; align-items: center; margin-top: 2px"><span style="font-size: 12.5px; color: {"var(--text)" if unread else "var(--mut)"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{prev}</span>{stb}</span></span></div>'''
    left = f'''<div style="width: 340px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="padding: 14px 16px 10px">{search("Search conversations", "100%")}</div>
      <div style="display: flex; gap: 6px; padding: 0 16px 10px; flex-wrap: wrap"><span class="chip" style="height: 30px; font-size: 12.5px; background: var(--ink); color: var(--inkfg); border-color: var(--ink)">All</span><span class="chip" style="height: 30px; font-size: 12.5px">Needs you <b style="font-weight: 600">2</b></span><span class="chip" style="height: 30px; font-size: 12.5px">AI handling</span><span class="chip" style="height: 30px; font-size: 12.5px">Mine</span></div>
      <div style="flex: 1; overflow: hidden">{rows}</div></div>'''
    me = lambda t, tm, ai=True: f'<div style="align-self: flex-end; max-width: 64%"><div style="background: var(--ink); color: var(--inkfg); padding: 10px 14px; border-radius: 18px 18px 4px 18px; font-size: 14px">{t}</div><div style="text-align: right; margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{"Sent by Vegham · " if ai else ""}{tm}</div></div>'
    them = lambda t, tm: f'<div style="align-self: flex-start; max-width: 64%"><div style="background: var(--soft2); padding: 10px 14px; border-radius: 18px 18px 18px 4px; font-size: 14px">{t}</div><div style="margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{tm}</div></div>'
    event = lambda t: f'<div style="align-self: center; display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line); font-size: 12px; color: var(--mut)">{t}</div>'
    thread = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div style="height: 64px; flex: none; display: flex; align-items: center; gap: 12px; padding: 0 20px; border-bottom: 1px solid var(--line)">{avc('R', 'wa', 36)}<span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 14.5px">Riya Sharma</b><span style="font-size: 12px; color: var(--mut)">WhatsApp · +91 98765 11223</span></span>
        <span class="chip" style="height: 32px; font-size: 12.5px"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--good)"></span>AI replying</span>{ob('Take over', 'pause')}<span class="ibtn">{I('more', 17)}</span></div>
      <div style="flex: 1; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 12px">
        {event('Today')}{them('Hi! Anything free tomorrow evening?', '6:02 PM')}{me('Hi Riya! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', '6:02 PM')}
        {them('Yes please 🙏', '6:04 PM')}{event(I('cal', 13) + ' Booked · Standard · Fri 7 Nov, 6:30 PM')}
        {me('Booked ✓ See you tomorrow at 6:30 PM. I’ll send a reminder in the morning.', '6:04 PM')}
        <div style="align-self: stretch; padding: 10px 14px; border-radius: 12px; background: rgba(245,190,60,.14); border: 1px solid rgba(245,190,60,.35); font-size: 13px"><b style="font-weight: 600">Internal note · Vinay</b> · Regular customer, prefers evenings. Only your team sees this.</div></div>
      <div style="padding: 12px 20px 16px; border-top: 1px solid var(--line)">
        <div style="display: flex; gap: 6px; margin-bottom: 10px">{''.join(f'<span class="chip" style="height: 28px; font-size: 12px">{t}</span>' for t in ['/prices', '/directions', '/payment link', '/reschedule'])}</div>
        <div class="card" style="border-radius: 16px; padding: 10px 12px 8px 14px"><div style="height: 40px; font-size: 14px; color: var(--mut2)">Reply as yourself… Vegham pauses while you type</div>
          <div style="display: flex; align-items: center; gap: 4px"><span class="ibtn">{I('clip', 16)}</span><span class="ibtn">{I('note', 16)}</span><span class="ibtn">{I('wallet', 16)}</span><span style="flex: 1"></span><span style="font-size: 12px; color: var(--mut2); margin-right: 8px">Enter to send</span><span style="width: 32px; height: 32px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center">{I('send', 16, 2)}</span></div></div></div></div>'''
    kv = lambda k, v: f'<div style="display: flex; justify-content: space-between; gap: 10px; padding: 8px 0; font-size: 13px"><span style="color: var(--mut)">{k}</span><span style="text-align: right">{v}</span></div>'
    right = f'''<div style="width: 300px; flex: none; border-left: 1px solid var(--line); padding: 20px; display: flex; flex-direction: column; gap: 16px; overflow: hidden">
      <div style="text-align: center">{av('R', 56)}<b style="display: block; margin-top: 10px; font-size: 15px; font-weight: 600">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">Customer since Mar 2026</span>
        <div style="margin-top: 10px; display: flex; gap: 6px; justify-content: center">{bd('Regular', 'acc')}{bd('Evenings')}{bd('Opted in', 'good')}</div></div>
      <div class="card" style="padding: 14px; border-radius: 14px"><span style="font-size: 12px; color: var(--mut)">Next visit</span><b style="display: block; margin-top: 4px; font-weight: 600">Fri 7 Nov · 6:30 PM</b><span style="font-size: 12.5px; color: var(--mut)">Standard · 60 min · ₹1,200</span>
        <div style="margin-top: 10px; display: flex; gap: 6px">{ob('Reschedule')}{ob('Cancel')}</div></div>
      <div>{kv('Phone', '+91 98765 11223')}{kv('Visits', '6')}{kv('Spent', '₹7,400')}{kv('Last visit', '12 Oct')}{kv('Location', 'Indiranagar')}</div>
      <div><span style="font-size: 12px; color: var(--mut)">Recent</span>{''.join(f'<div style="display: flex; gap: 10px; padding: 8px 0; font-size: 12.5px; border-top: 1px solid var(--line)"><span style="color: var(--mut)">{a}</span><span>{b}</span></div>' for a, b in [('12 Oct', 'Standard · paid ₹1,200'), ('28 Sep', 'Follow-up · paid ₹300'), ('14 Sep', 'Left a 5★ review')])}</div></div>'''
    return f'<div style="display: flex; height: 100%">{left}{thread}{right}</div>'

# ======================================================== CALENDAR
def calendar():
    days = [('Mon', 3), ('Tue', 4), ('Wed', 5), ('Thu', 6), ('Fri', 7), ('Sat', 8), ('Sun', 9)]
    hours = list(range(9, 21))
    H = 62
    cols = ''
    ev = {0: [(10, 1, 'A. Khan', 'First visit', 0), (13, 1, 'S. Das', 'Standard', 1), (17, 1.5, 'Group (6)', 'Group session', 2)],
          1: [(11, 1, 'Meera Iyer', 'Follow-up', 0), (15, 1, 'Kabir Rao', 'Standard', 1)],
          2: [(9.5, 1, 'P. Iyer', 'First visit', 0), (12, 1, 'Neha K', 'Standard', 1), (16.5, 0.5, 'Vikram S', 'Follow-up', 3)],
          3: [(10, 1, 'A. Khan', 'Done', 3), (11.5, 1, 'S. Das', 'Checked in', 1), (13, 1, 'Riya', 'Standard', 1), (16.5, 0.5, 'M. Rao', 'Follow-up', 3), (18.5, 1.5, 'Group (6)', 'Group session', 2)],
          4: [(10, 1, 'Sunita D', 'Standard', 1), (14, 1, 'Arjun M', 'Quote visit', 0), (18.5, 1, 'Riya Sharma', 'Standard', 1)],
          5: [(9, 1.5, 'Group (8)', 'Group session', 2), (11, 1, 'Kavya', 'First visit', 0), (12.5, 1, 'Rahul', 'Standard', 1)],
          6: []}
    tones = [('rgba(59,108,246,.12)', '#3B6CF6'), ('rgba(16,185,129,.13)', '#0E9F6E'), ('rgba(124,58,237,.12)', '#7C3AED'), ('var(--soft)', 'var(--mut)')]
    for di, (d, n) in enumerate(days):
        blocks = ''
        for st, dur, who, what, tone in ev[di]:
            bg, fg = tones[tone]
            top = (st - 9) * H + 2; h = dur * H - 4
            byai = '' if di % 2 else f'<span style="font-size: 10.5px; color: {fg}; opacity: .9">by Vegham</span>'
            blocks += f'<div style="position: absolute; left: 4px; right: 4px; top: {top}px; height: {h}px; border-radius: 10px; background: {bg}; border-left: 3px solid {fg}; padding: 6px 8px; overflow: hidden; font-size: 12px; line-height: 1.3"><b style="display: block; font-weight: 600; color: var(--text)">{who}</b><span style="color: var(--mut)">{int(st)}:{"30" if st % 1 else "00"} · {what}</span><br>{byai if h > 50 else ""}</div>'
        now = f'<div style="position: absolute; left: 0; right: 0; top: {(17.2 - 9) * H}px; height: 2px; background: #E5484D"><span style="position: absolute; left: -5px; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: #E5484D"></span></div>' if di == 3 else ''
        closed = '<div style="position: absolute; inset: 0; background: repeating-linear-gradient(135deg, var(--soft2) 0 8px, transparent 8px 16px); display: flex; align-items: flex-start; justify-content: center; padding-top: 16px; font-size: 12px; color: var(--mut)">Closed</div>' if di == 6 else ''
        cols += f'<div style="position: relative; border-left: 1px solid var(--line); background-image: repeating-linear-gradient(180deg, transparent 0 {H - 1}px, var(--line) {H - 1}px {H}px)">{closed}{blocks}{now}</div>'
    head = ''.join(f'<div style="padding: 10px 0; text-align: center; border-left: 1px solid var(--line)"><span style="font-size: 12px; color: var(--mut)">{d}</span><span style="display: block; margin-top: 2px; font-size: 18px; {"width: 32px; height: 32px; line-height: 32px; margin: 2px auto 0; border-radius: 50%; background: var(--ink); color: var(--inkfg)" if n == 6 else ""}">{n}</span></div>' for d, n in days)
    times = ''.join(f'<div style="height: {H}px; font-size: 11.5px; color: var(--mut2); text-align: right; padding-right: 10px; transform: translateY(-7px)">{h if h <= 12 else h - 12} {"AM" if h < 12 else "PM"}</div>' for h in hours)
    toolbar = f'''<div style="display: flex; align-items: center; gap: 10px; padding: 12px 20px; border-bottom: 1px solid var(--line)">{ob('Today')}<span class="ibtn">{I('chevl', 16)}</span><span class="ibtn">{I('chevr', 16)}</span><b style="font-size: 15px; font-weight: 600; margin-left: 4px">3 – 9 November 2026</b><span style="flex: 1"></span>
        <span class="chip" style="height: 34px">All staff{I('chev', 13)}</span><span class="chip" style="height: 34px">Indiranagar{I('chev', 13)}</span>{seg(['Day', 'Week', 'Month'], 1)}</div>'''
    grid = f'''<div style="display: grid; grid-template-columns: 64px repeat(7, 1fr); border-bottom: 1px solid var(--line)"><div></div>{head}</div>
      <div style="display: grid; grid-template-columns: 64px repeat(7, 1fr); height: {len(hours) * H}px; padding-top: 6px"><div>{times}</div>{cols}</div>'''
    legend = f'<div style="position: absolute; right: 20px; bottom: 14px; display: flex; gap: 14px; align-items: center; font-size: 12px; color: var(--mut)">{"".join(f"<span style=\'display: inline-flex; align-items: center; gap: 6px\'><span style=\'width: 10px; height: 10px; border-radius: 3px; background: {c}\'></span>{t}</span>" for c, t in [("#3B6CF6", "First visit"), ("#0E9F6E", "Standard"), ("#7C3AED", "Group"), ("#A0A0A8", "Follow-up / done")])}{smp}</div>'
    return f'<div style="height: 100%; overflow: hidden; position: relative">{toolbar}{grid}{legend}</div>'

# ======================================================== CALLS
def calls():
    rows = [('6:12 PM', '+91 98•• ••21', 'Asked about Saturday hours · booked 4 PM', ('Booked', 'good'), '1:12', True),
            ('5:40 PM', 'Meera Iyer', 'Rescheduled to Saturday 11 AM', ('Answered', 'acc'), '0:58', False),
            ('4:55 PM', 'P. Iyer', 'Wanted to speak to the owner', ('Transferred', 'warn'), '0:41', False),
            ('3:10 PM', '+91 70•• ••88', 'Missed while on another call · WhatsApp sent in 6 sec', ('Missed → WhatsApp', 'mut'), '—', False),
            ('1:22 PM', 'Kabir Rao', 'Price of a first visit · sent price list', ('Answered', 'acc'), '0:37', False),
            ('11:05 AM', 'Unknown', 'Voicemail · asked for directions', ('Voicemail', 'mut'), '0:22', False),
            ('9:48 AM', 'Sunita Das', 'Booked Standard · Fri 10 AM', ('Booked', 'good'), '1:31', False)]
    lst = ''.join(f'<div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 16px; margin: 2px 8px; border-radius: 12px; {"background: var(--soft)" if sel else ""}"><span style="width: 34px; height: 34px; border-radius: 10px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; color: var(--mut); flex: none">{I("phone", 16)}</span><span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between"><b style="font-weight: 500; font-size: 13.5px">{who}</b><span class="cnt">{t}</span></span><span style="display: block; font-size: 12.5px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{s}</span><span style="display: flex; gap: 8px; align-items: center; margin-top: 6px">{bd(*b)}<span class="cnt">{dur}</span></span></span></div>' for t, who, s, b, dur, sel in rows)
    left = f'''<div style="width: 380px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="display: flex; gap: 8px; padding: 14px 16px">{stat_mini('Today', '7')}{stat_mini('Booked', '2')}{stat_mini('Missed', '0')}</div>
      <div style="padding: 0 16px 10px">{search("Search calls", "100%")}</div><div style="flex: 1; overflow: hidden">{lst}</div></div>'''
    bars = ''.join(f'<span style="width: 3px; height: {6 + int(20 * abs(math.sin(i * 1.7) * math.cos(i * .45)))}px; border-radius: 2px; background: {"var(--ink)" if i < 34 else "var(--line)"}"></span>' for i in range(90))
    line = lambda who, t, txt: f'<div style="display: flex; gap: 12px; padding: 10px 0"><span style="width: 64px; flex: none; font-size: 12px; color: var(--mut2)">{t}</span><span><b style="font-weight: 600; font-size: 13px">{who}</b><span style="display: block; font-size: 14px; margin-top: 2px">{txt}</span></span></div>'
    detail = f'''<div style="flex: 1; min-width: 0; padding: 24px 32px; overflow: hidden; display: flex; flex-direction: column; gap: 18px">
      <div style="display: flex; align-items: center; gap: 14px">{av('+', 44)}<span style="flex: 1"><b style="display: block; font-size: 17px; font-weight: 600">+91 98•• ••21</b><span style="font-size: 13px; color: var(--mut)">Today 6:12 PM · 1 min 12 sec · answered by Vegham · Hindi and English</span></span>{bd('Booked', 'good')}{ob('Call back', 'phone')}{ob('Add contact', 'plus')}</div>
      <div class="card" style="padding: 16px 18px"><span style="font-size: 12px; color: var(--mut)">Summary</span><p style="margin: 6px 0 0; font-size: 14.5px; line-height: 1.55">Caller asked whether you are open on Saturday and the price of a Standard appointment. Vegham confirmed Saturday 9 AM – 2 PM, quoted ₹1,200 and booked <b style="font-weight: 600">Sat 8 Nov, 4:00 PM</b>. Confirmation sent on WhatsApp.</p></div>
      <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px"><span style="width: 38px; height: 38px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center">{I('play', 15, 2)}</span><span style="flex: 1; display: flex; align-items: center; gap: 2px; height: 30px">{bars}</span><span style="font-size: 12.5px; color: var(--mut); font-variant-numeric: tabular-nums">0:27 / 1:12</span><span class="chip" style="height: 28px; font-size: 12px">1×</span></div>
      <div><span style="font-size: 12px; color: var(--mut)">Transcript</span>
        {line('Caller', '0:02', 'Hello, are you open this Saturday?')}{line('Vegham', '0:05', 'Hello! Yes, we’re open Saturday from 9 AM to 2 PM. Would you like to book a visit?')}{line('Caller', '0:14', 'Haan, Standard appointment kitne ka hai?')}{line('Vegham', '0:18', 'Standard appointment ₹1,200 ka hai, 60 minute. Shaam 4 baje free hai, book kar doon?')}</div>
      <span style="font-size: 12px; color: var(--mut)">Recorded with the caller told at the start · kept 90 days · {smp}</span></div>'''
    return f'<div style="display: flex; height: 100%">{left}{detail}</div>'
def stat_mini(l, v):
    return f'<div class="card" style="flex: 1; padding: 10px 12px; border-radius: 12px"><span style="font-size: 11.5px; color: var(--mut)">{l}</span><b style="display: block; {HF}; font-weight: 400; font-size: 22px">{v}</b></div>'

# ======================================================== CONTACTS
def contacts():
    people = [('Riya Sharma', '+91 98765 11223', ['wa'], ['Regular', 'Evenings'], '12 Oct', 6, '₹7,400', True),
              ('Arjun Mehta', '+91 99012 44556', ['ig'], ['New', 'Group'], '—', 0, '₹0', True),
              ('Meera Iyer', '+91 98450 33221', ['wa', 'ph'], ['Regular'], '28 Oct', 9, '₹10,800', True),
              ('Kabir Rao', '+91 97400 12121', ['web'], ['New'], '—', 0, '₹0', False),
              ('Sunita Das', '+91 99860 77889', ['ms', 'wa'], ['VIP'], '3 Nov', 14, '₹19,200', True),
              ('P. Iyer', '+91 98•• ••21', ['ph'], ['Call back'], '2 Aug', 2, '₹1,500', False),
              ('Neha Kapoor', '+91 90080 55443', ['wa'], ['Regular'], '1 Nov', 5, '₹6,000', True),
              ('Vikram Singh', '+91 98860 90909', ['go'], ['New'], '—', 0, '₹0', False),
              ('Kavya Nair', '+91 99000 31313', ['wa', 'ig'], ['Group'], '18 Oct', 3, '₹3,600', True),
              ('Rahul Verma', '+91 98111 22333', ['wa'], ['Lapsed'], '2 Jun', 4, '₹4,800', True),
              ('Ananya Rao', '+91 97311 45678', ['ig'], ['Regular'], '30 Oct', 7, '₹8,400', True),
              ('M. Rao', '+91 98•• ••44', ['ph', 'wa'], ['Follow-up'], '6 Nov', 6, '₹6,900', True)]
    cols = 'grid-template-columns: 36px 1.6fr 1.2fr .9fr 1.4fr .8fr .5fr .7fr .7fr'
    hdr = f'<div class="tb h" style="{cols}"><span><span style="width: 16px; height: 16px; border-radius: 4px; border: 1.5px solid var(--line); display: inline-block"></span></span><span>Name</span><span>Phone</span><span>Channels</span><span>Tags</span><span>Last visit</span><span>Visits</span><span>Spent</span><span>Messages</span></div>'
    body = ''.join(f'<div class="tb" style="{cols}"><span><span style="width: 16px; height: 16px; border-radius: 4px; border: 1.5px solid var(--line); display: inline-block"></span></span><span style="display: flex; align-items: center; gap: 10px">{av(n[0], 28)}<b style="font-weight: 500">{n}</b></span><span style="color: var(--mut); font-variant-numeric: tabular-nums">{p}</span><span style="display: flex; gap: 4px">{"".join(chlogo(c, 11) for c in ch)}</span><span style="display: flex; gap: 4px; flex-wrap: wrap">{"".join(bd(t, "acc" if t == "VIP" else "warn" if t in ("Lapsed", "Call back") else "mut") for t in tags)}</span><span style="color: var(--mut)">{lv}</span><span>{v}</span><span>{s}</span><span>{bd("Opted in", "good") if opt else bd("Not yet")}</span></div>' for n, p, ch, tags, lv, v, s, opt in people)
    bar = f'''<div style="display: flex; align-items: center; gap: 8px; padding: 14px 20px">{search("Search name, phone or tag", "320px")}<span class="chip" style="height: 38px">{I('tag', 14)}Tags{I('chev', 13)}</span><span class="chip" style="height: 38px">Channel{I('chev', 13)}</span><span class="chip" style="height: 38px">Opted in{I('chev', 13)}</span><span style="flex: 1"></span><span style="font-size: 13px; color: var(--mut)">1,284 contacts · {smp}</span></div>'''
    return f'<div style="height: 100%; overflow: hidden">{bar}<div style="border-top: 1px solid var(--line)">{hdr}{body}</div></div>'

# ======================================================== LEADS
def leads():
    stages = [('New', '5', [('Arjun Mehta', 'ig', 'Group session for 8', '₹9,600', '9 min'), ('Kabir Rao', 'web', 'First visit', '₹500', '2 h'), ('Vikram S', 'go', 'Walk-in question', '—', 'Yest')]),
              ('Talking', '4', [('Pooja N', 'wa', 'Monthly package', '₹6,000', '1 d'), ('Dev K', 'ms', 'Corporate group', '₹24,000', '2 d')]),
              ('Quote sent', '3', [('Team Lumen', 'wa', '10 sessions · quote #Q-104', '₹18,000', '3 d'), ('Sana A', 'ig', 'Gift voucher', '₹2,400', '4 d')]),
              ('Won', '6', [('Kavya Nair', 'wa', 'Booked group session', '₹3,600', 'Today'), ('Rahul V', 'wa', 'Package · paid', '₹6,000', 'Yest')]),
              ('Lost', '2', [('Imran H', 'ph', 'Chose another place', '₹1,200', '5 d')])]
    cols = ''
    for name, n, cards in stages:
        cc = ''.join(f'''<div class="card" style="padding: 12px 14px; border-radius: 14px; display: flex; flex-direction: column; gap: 8px"><div style="display: flex; align-items: center; gap: 8px">{chlogo(ch, 11)}<b style="font-weight: 600; font-size: 13.5px; flex: 1">{who}</b><span class="cnt">{t}</span></div><span style="font-size: 12.5px; color: var(--mut)">{what}</span><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 500; font-size: 13px">{val}</b>{av("V", 20, "background: linear-gradient(135deg,#10B981,#3B6CF6); color: #FFF")}</div></div>''' for who, ch, what, val, t in cards)
        cols += f'<div style="flex: 1; min-width: 0; background: var(--soft2); border-radius: 16px; padding: 12px; display: flex; flex-direction: column; gap: 10px"><div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 4px"><b style="font-size: 13.5px; font-weight: 600">{name}</b><span class="cnt">{n}</span></div>{cc}<span style="font-size: 12.5px; color: var(--mut); padding: 4px">+ Add lead</span></div>'
    top = f'<div style="display: flex; align-items: center; gap: 10px; padding: 14px 20px">{search("Search leads", "280px")}<span class="chip" style="height: 38px">Source{I("chev", 13)}</span><span class="chip" style="height: 38px">Owner{I("chev", 13)}</span><span style="flex: 1"></span><span style="font-size: 13px; color: var(--mut)">Open value <b style="color: var(--text); font-weight: 600">₹60,000</b> · {smp}</span></div>'
    return f'<div style="height: 100%; display: flex; flex-direction: column">{top}<div style="flex: 1; display: flex; gap: 12px; padding: 0 20px 20px; align-items: flex-start">{cols}</div></div>'

# ======================================================== REVIEWS
def reviews():
    dist = [(5, 82), (4, 12), (3, 4), (2, 1), (1, 1)]
    dd = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; font-size: 12.5px"><span style="width: 18px; color: var(--mut)">{s}★</span><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: var(--ink)"></span></span><span style="width: 32px; text-align: right; color: var(--mut)">{p}%</span></div>' for s, p in dist)
    summary = f'''<div style="width: 320px; flex: none; display: flex; flex-direction: column; gap: 14px">
      <div class="card" style="padding: 20px"><span style="font-size: 12.5px; color: var(--mut)">Google rating · Indiranagar</span><div style="display: flex; align-items: baseline; gap: 10px; margin-top: 4px"><span style="{HF}; font-size: 48px">4.8</span><span style="color: #F5A524; font-size: 18px; letter-spacing: 2px">★★★★★</span></div><span style="font-size: 12.5px; color: var(--mut)">212 reviews · +18 this month</span><div style="margin-top: 14px; display: flex; flex-direction: column; gap: 6px">{dd}</div></div>
      <div class="card" style="padding: 18px"><b style="font-weight: 600; font-size: 14px">Review requests</b><div style="display: flex; gap: 8px; margin-top: 10px">{stat_mini('Sent', '64')}{stat_mini('Left a review', '22')}</div><div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 13px"><span>Ask 2 hours after a visit</span><span class="sw on"></span></div></div></div>'''
    rv = [('Ananya R', 5, '2 hours ago', 'Booked on WhatsApp late at night and got a reply instantly. The visit itself was lovely too!', 'Thank you, Ananya! So glad the late-night booking was easy. See you next time 😊', 'Draft'),
          ('Karthik M', 4, 'Yesterday', 'Good service. Parking was a bit hard to find on a Saturday.', 'Thanks, Karthik! There’s free parking behind the building; we’ll add it to our directions.', 'Replied'),
          ('Shalini P', 2, '3 days ago', 'Had to wait 20 minutes past my slot.', 'Sorry about the wait, Shalini. That’s not the experience we want. Could we call you to make it right?', 'Needs you')]
    cards = ''.join(f'''<div class="card" style="padding: 18px 20px"><div style="display: flex; align-items: center; gap: 10px">{av(n[0], 34)}<span style="flex: 1"><b style="font-weight: 600; font-size: 14px">{n}</b><span style="display: block; font-size: 12px; color: var(--mut)">{GO(11)} Google · {t}</span></span><span style="color: #F5A524; letter-spacing: 1px">{"★" * s}<span style="color: var(--line)">{"★" * (5 - s)}</span></span></div>
        <p style="margin: 10px 0 0; font-size: 14px; line-height: 1.55">{txt}</p>
        <div style="margin-top: 12px; padding: 12px 14px; border-radius: 12px; background: var(--soft2); font-size: 13.5px"><div style="display: flex; justify-content: space-between; margin-bottom: 4px"><span style="font-size: 12px; color: var(--mut)">{"Your reply" if st == "Replied" else "Suggested reply"}</span>{bd(st, "good" if st == "Replied" else "warn" if st == "Needs you" else "mut")}</div>{rep}</div>
        {"" if st == "Replied" else f'<div style="display: flex; gap: 8px; margin-top: 12px">{pb("Post reply")}{ob("Edit")}</div>'}</div>''' for n, s, t, txt, rep, st in rv)
    return f'<div style="height: 100%; overflow: hidden; display: flex; gap: 20px; padding: 20px 24px">{summary}<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 14px"><div style="display: flex; gap: 6px">{seg(["All", "Needs reply 2", "5★", "Low ratings"], 0)}<span style="flex: 1"></span>{smp}</div>{cards}</div></div>'

# ======================================================== PAYMENTS
def payments():
    tiles = ''.join(f'<div class="card" style="flex: 1; padding: 16px 18px"><span style="font-size: 12.5px; color: var(--mut)">{l}</span><div style="{HF}; font-size: 28px; margin-top: 4px">{v}</div><span style="font-size: 12px; color: var(--mut)">{s}</span></div>' for l, v, s in [('Collected this month', '₹1,84,200', '146 payments'), ('Waiting to be paid', '₹12,600', '9 links open'), ('Refunded', '₹1,500', '2 refunds'), ('Next payout', '₹38,400', 'Mon 10 Nov · to HDFC ••4521')])
    cols = 'grid-template-columns: 1.4fr 1.6fr .9fr .9fr .9fr .9fr 40px'
    rows = [('Riya Sharma', 'Standard · Fri 6:30 PM', '₹1,200', 'UPI', ('Paid', 'good'), 'Today 6:05 PM'), ('Team Lumen', 'Quote Q-104 · 50% deposit', '₹9,000', 'Card', ('Waiting', 'warn'), 'Today 2:10 PM'),
            ('Neha Kapoor', 'Standard', '₹1,200', 'UPI', ('Paid', 'good'), 'Yesterday'), ('Meera Iyer', 'Cancelled visit', '₹500', 'UPI', ('Refunded', 'mut'), 'Yesterday'),
            ('Kavya Nair', 'Group session × 3', '₹3,600', 'Card', ('Paid', 'good'), '5 Nov'), ('Sana A', 'Gift voucher', '₹2,400', 'UPI', ('Waiting', 'warn'), '5 Nov'),
            ('Rahul Verma', 'Monthly package', '₹6,000', 'Card', ('Paid', 'good'), '4 Nov'), ('Sunita Das', 'Standard', '₹1,200', 'Cash', ('Paid', 'good'), '3 Nov'),
            ('Arjun Mehta', 'Group deposit', '₹2,000', 'UPI', ('Expired', 'bad'), '1 Nov')]
    hdr = f'<div class="tb h" style="{cols}"><span>Customer</span><span>For</span><span>Amount</span><span>Method</span><span>Status</span><span>Date</span><span></span></div>'
    body = ''.join(f'<div class="tb" style="{cols}"><span style="display: flex; align-items: center; gap: 10px">{av(c[0], 26)}<b style="font-weight: 500">{c}</b></span><span style="color: var(--mut)">{f}</span><b style="font-weight: 500">{a}</b><span style="color: var(--mut)">{m}</span><span>{bd(*s)}</span><span style="color: var(--mut)">{d}</span><span class="ibtn" style="width: 28px; height: 28px">{I("more", 15)}</span></div>' for c, f, a, m, s, d in rows)
    return f'''<div style="height: 100%; overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; gap: 12px">{tiles}</div>
      <div style="display: flex; align-items: center; gap: 8px">{seg(["All", "Paid", "Waiting", "Refunds"], 0)}{search("Search payments", "260px")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">Payments by Stripe · GST invoices sent automatically · {smp}</span></div>
      <div class="card" style="overflow: hidden; border-radius: 16px">{hdr}{body}</div></div>'''

# ======================================================== CAMPAIGNS
def campaigns():
    cs = [('Diwali offer · 15% off packages', 'Sent 1 Nov', ('Sent', 'good'), '842', ('96%', '71%', '38 bookings'), '₹1,180'),
          ('We miss you · lapsed 60 days', 'Every Monday', ('Running', 'acc'), '126', ('98%', '64%', '11 bookings'), '₹180'),
          ('Group sessions are back', 'Sat 15 Nov, 10 AM', ('Scheduled', 'warn'), '410', ('—', '—', '—'), 'Est. ₹580'),
          ('New year packages', 'Draft', ('Draft', 'mut'), '—', ('—', '—', '—'), '—')]
    cards = ''.join(f'''<div class="card" style="padding: 16px 18px; display: grid; grid-template-columns: 1.8fr .7fr repeat(3, .7fr) .7fr; align-items: center; gap: 12px; {"outline: 2px solid var(--text); outline-offset: -1px" if i == 0 else ""}"><span><b style="display: block; font-weight: 600; font-size: 14px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{WA(11)} WhatsApp · {w}</span></span><span>{bd(*s)}</span>{"".join(f"<span><span style=\'display: block; font-size: 11.5px; color: var(--mut)\'>{l}</span><b style=\'font-weight: 500\'>{v}</b></span>" for l, v in zip(["Delivered", "Read", "Result"], m))}<span><span style="display: block; font-size: 11.5px; color: var(--mut)">Meta fees</span><b style="font-weight: 500">{fee}</b></span></div>''' for i, (n, w, s, aud, m, fee) in enumerate(cs))
    phone = f'''<div style="width: 300px; flex: none"><div style="border-radius: 34px; background: #0B0C12; padding: 9px"><div style="border-radius: 26px; background: #EFE7DD; overflow: hidden; height: 520px; display: flex; flex-direction: column">
      <div style="background: #FFFFFF; padding: 14px 12px; display: flex; gap: 8px; align-items: center; font-size: 13px; color: #1F1F1F"><span style="width: 28px; height: 28px; border-radius: 50%; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600">N</span><b style="font-weight: 600">Nila &amp; Co</b></div>
      <div style="padding: 14px 10px"><div style="background: #FFFFFF; border-radius: 10px; overflow: hidden; color: #1F1F1F; font-size: 13px; line-height: 1.45"><div style="height: 120px; background: linear-gradient(135deg, #F59E0B, #DB2777 60%, #7C3AED); display: flex; align-items: flex-end; padding: 12px; color: #FFFFFF; font-family: 'Inter Tight', sans-serif; font-size: 22px">Diwali · 15% off</div><div style="padding: 10px 12px">Hi Riya! Celebrate with 15% off any package until 10 Nov. Reply <b>YES</b> and we’ll book your next visit 🪔<span style="display: block; margin-top: 6px; font-size: 11px; color: #8A8A8A">Reply STOP to opt out</span></div><div style="border-top: 1px solid #EEE; padding: 9px; text-align: center; color: #0A84FF">Book now</div></div></div></div></div>
      <div style="margin-top: 10px; text-align: center; font-size: 12px; color: var(--mut)">Marketing template · approved by Meta</div></div>'''
    return f'''<div style="height: 100%; overflow: hidden; padding: 20px 24px; display: flex; gap: 22px"><div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px">
      <div style="display: flex; gap: 12px">{"".join(f'<div class="card" style="flex: 1; padding: 14px 16px"><span style="font-size: 12px; color: var(--mut)">{l}</span><div style="{HF}; font-size: 26px; margin-top: 2px">{v}</div></div>' for l, v in [("Bookings from campaigns", "49"), ("Revenue", "₹58,800"), ("Fees paid to Meta", "₹1,360"), ("Opted in", "1,102")])}</div>
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px">{seg(["All", "Running", "Scheduled", "Drafts"], 0)}<span style="flex: 1"></span>{smp}</div>{cards}
      <div style="padding: 14px 16px; border-radius: 14px; background: var(--soft2); font-size: 13px; color: var(--mut)">Only customers who opted in receive campaigns. Meta charges a small fee per marketing message; Vegham shows it before you send.</div></div>{phone}</div>'''

# ======================================================== REPORTS
def reports():
    k = [('Conversations', '1,284', '+12%'), ('Bookings', '312', '+9%'), ('Revenue', '₹3,74,400', '+14%'), ('Answered in 10 sec', '96%', '+3 pts'), ('Missed calls saved', '41', ''), ('Handled by AI', '83%', '')]
    tiles = ''.join(f'<div class="card" style="padding: 14px 16px"><span style="font-size: 12px; color: var(--mut)">{l}</span><div style="display: flex; align-items: baseline; gap: 8px; margin-top: 2px"><span style="{HF}; font-size: 26px">{v}</span><span style="font-size: 12px; color: var(--good)">{d}</span></div></div>' for l, v, d in k)
    pts = [30, 34, 28, 40, 46, 38, 52, 49, 55, 61, 58, 64, 70, 66, 72, 78, 74, 80, 77, 85, 90, 84, 88, 95, 92, 98, 96, 104, 101, 110]
    W, Hh = 640, 180
    path = ' '.join(f'{"M" if i == 0 else "L"}{i * W / (len(pts) - 1):.1f} {Hh - p * 1.5:.1f}' for i, p in enumerate(pts))
    line = f'<svg viewBox="0 0 {W} {Hh}" width="100%" height="{Hh}" aria-label="Bookings per day, last 30 days (sample)"><defs><linearGradient id="rg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#3B6CF6" stop-opacity=".22"></stop><stop offset="1" stop-color="#3B6CF6" stop-opacity="0"></stop></linearGradient></defs>{"".join(f"<line x1=\'0\' x2=\'{W}\' y1=\'{y}\' y2=\'{y}\' stroke=\'var(--line)\'></line>" for y in (45, 90, 135))}<path d="{path} L{W} {Hh} L0 {Hh} Z" fill="url(#rg)"></path><path d="{path}" fill="none" stroke="#3B6CF6" stroke-width="2.2"></path></svg>'
    ch = [('WhatsApp', 58, WA), ('Phone', 21, PH), ('Instagram', 11, IG), ('Website', 7, GLOBE), ('Google', 3, GO)]
    chb = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; font-size: 13px"><span style="width: 110px; display: flex; gap: 8px; align-items: center; color: var(--mut)">{f(13)}{n}</span><span style="flex: 1; height: 8px; border-radius: 4px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 4px; background: var(--ink)"></span></span><span style="width: 36px; text-align: right">{p}%</span></div>' for n, p, f in ch)
    svc = [('Standard appointment', 148, '₹1,77,600'), ('Group session', 61, '₹73,200'), ('First visit', 54, '₹27,000'), ('Monthly package', 19, '₹1,14,000'), ('Follow-up', 30, '₹9,000')]
    st = ''.join(f'<div style="display: grid; grid-template-columns: 1.6fr .6fr .8fr; padding: 10px 0; border-top: 1px solid var(--line); font-size: 13px"><span>{n}</span><span style="color: var(--mut)">{b}</span><b style="font-weight: 500; text-align: right">{r}</b></div>' for n, b, r in svc)
    return f'''<div style="height: 100%; overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; align-items: center; gap: 8px">{seg(["7 days", "30 days", "90 days", "Custom"], 1)}<span class="chip" style="height: 34px">All locations{I("chev", 13)}</span><span style="flex: 1"></span>{smp}</div>
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px">{tiles}</div>
      <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px">
        <div class="card" style="padding: 18px 20px"><div style="display: flex; justify-content: space-between"><b style="font-weight: 600; font-size: 14.5px">Bookings per day</b><span style="font-size: 12.5px; color: var(--mut)">Last 30 days</span></div><div style="margin-top: 12px">{line}</div></div>
        <div class="card" style="padding: 18px 20px; display: flex; flex-direction: column; gap: 12px"><b style="font-weight: 600; font-size: 14.5px">Where customers came from</b>{chb}</div></div>
      <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px">
        <div class="card" style="padding: 18px 20px"><b style="font-weight: 600; font-size: 14.5px">Top services</b><div style="display: grid; grid-template-columns: 1.6fr .6fr .8fr; margin-top: 10px; font-size: 12px; color: var(--mut)"><span>Service</span><span>Bookings</span><span style="text-align: right">Revenue</span></div>{st}</div>
        <div class="card" style="padding: 18px 20px"><b style="font-weight: 600; font-size: 14.5px">Who handled conversations</b><div style="display: flex; align-items: center; gap: 22px; margin-top: 14px"><svg width="120" height="120" viewBox="0 0 42 42" aria-label="83 percent handled by AI"><circle cx="21" cy="21" r="15.9" fill="none" stroke="var(--soft)" stroke-width="5"></circle><circle cx="21" cy="21" r="15.9" fill="none" stroke="var(--ink)" stroke-width="5" stroke-dasharray="83 17" stroke-dashoffset="25"></circle></svg><div style="font-size: 13px; display: flex; flex-direction: column; gap: 8px"><span><b style="font-weight: 600">83%</b> Vegham alone</span><span><b style="font-weight: 600">14%</b> Handed to your team</span><span><b style="font-weight: 600">3%</b> Your team only</span></div></div></div></div></div>'''

# ======================================================== AI AGENTS
def agents():
    ags = [('chat', 'Chat receptionist', 'WhatsApp, Instagram, Messenger, website', [('23', 'chats today'), ('4 sec', 'avg reply'), ('2', 'handed over')], True),
           ('phone', 'Voice receptionist', 'Answers your phone line in 4 languages', [('7', 'calls today'), ('0', 'missed'), ('1', 'transferred')], True),
           ('reply', 'Follow-up', 'Reminders, no-shows and rebooking', [('18', 'reminders'), ('3', 'rebooked'), ('92%', 'show-up')], True),
           ('star', 'Review requests', 'Asks happy customers for a Google review', [('64', 'sent'), ('22', 'reviews'), ('4.8', 'rating')], True),
           ('chart', 'Morning report', 'A WhatsApp summary every day at 8 AM', [('8:00', 'next report'), ('31', 'sent'), ('100%', 'delivered')], True),
           ('phone', 'Outbound caller', 'Calls leads and lapsed customers for you', [('—', 'calls'), ('—', 'booked'), ('Pro', 'plan')], False)]
    cards = ''.join(f'''<div class="card" style="padding: 18px; display: flex; flex-direction: column; gap: 12px; {"" if on else "opacity: .75"}"><div style="display: flex; align-items: center; gap: 12px"><span style="width: 38px; height: 38px; border-radius: 12px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; color: var(--text)">{I(ic, 18)}</span><span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 14.5px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span><span class="sw{" on" if on else ""}"></span></div>
        <div style="display: flex; gap: 8px">{"".join(f'<span style="flex: 1; padding: 10px; border-radius: 12px; background: var(--soft2)"><b style="display: block; font-weight: 500; font-size: 15px">{v}</b><span style="font-size: 11.5px; color: var(--mut)">{l}</span></span>' for v, l in st)}</div>
        <div style="display: flex; gap: 8px">{ob("Configure")}{ob("Test")}</div></div>''' for ic, n, d, st, on in ags)
    unans = [('Do you have a female staff member?', 'Asked 3 times this week'), ('Is the group session okay for kids?', 'Asked twice'), ('Do you give student discounts?', 'Asked once'), ('Can I pay in two parts?', 'Asked once')]
    ua = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line)"><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{q}</b><span style="font-size: 12px; color: var(--mut)">{s}</span></span>{ob("Answer")}</div>' for q, s in unans)
    side = f'''<div style="width: 360px; flex: none; display: flex; flex-direction: column; gap: 14px">
      <div class="card" style="padding: 18px"><b style="font-weight: 600; font-size: 14.5px">What Vegham knows</b><div style="display: flex; gap: 8px; margin-top: 12px">{stat_mini('Services', '12')}{stat_mini('Prices', '8')}{stat_mini('Answers', '26')}</div><div style="margin-top: 12px; font-size: 12.5px; color: var(--mut)">Last read nilaandco.in · 2 days ago</div><div style="display: flex; gap: 8px; margin-top: 12px">{ob("Open knowledge")}{ob("Re-read website")}</div></div>
      <div class="card" style="padding: 18px 18px 6px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 14.5px">Questions it couldn’t answer</b>{bd('4', 'warn')}</div><span style="display: block; margin-top: 4px; font-size: 12.5px; color: var(--mut)">Answer once and Vegham uses it on every channel.</span><div style="margin-top: 8px">{ua}</div></div></div>'''
    return f'<div style="height: 100%; overflow: hidden; padding: 20px 24px; display: flex; gap: 20px"><div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px"><div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 14px; background: var(--soft2); font-size: 13px"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--good)"></span><span style="flex: 1">Tone <b style="font-weight: 600">Warm</b> · English, हिन्दी · hands over to Vinay and Priya on WhatsApp</span><span style="font-weight: 500">Edit</span></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">{cards}</div><span style="align-self: flex-start">{smp}</span></div>{side}</div>'

# ======================================================== CHANNELS & APPS
def channels():
    L = comps.logo
    groups = [('Messaging', [(WA(22), 'WhatsApp', '+91 98765 43210 · quality High', ('Connected', 'good')), (IG(22), 'Instagram', '@nilaandco', ('Connected', 'good')), (MS(22), 'Messenger', 'Facebook page messages', ('Connect', None)), (GLOBE(22), 'Website chat', 'nilaandco.in', ('Connected', 'good'))]),
              ('Calls', [(PH(22), 'Phone line', '080 4719 2200 · forwards when busy', ('Connected', 'good')), (L('googlemaps', 22), 'Google Business', 'Chat and Book on Google', ('Pending review', 'warn'))]),
              ('Calendars and payments', [(L('googlecalendar', 22), 'Google Calendar', 'Two-way sync', ('Connected', 'good')), (L('calendly', 22), 'Calendly', 'Bring existing bookings', ('Connect', None)), (L('stripe', 22), 'Stripe', 'Payment links and deposits', ('Connected', 'good'))]),
              ('Business tools', [(L('googlesheets', 22), 'Google Sheets', 'Export leads and bookings', ('Connect', None)), (L('zapier', 22), 'Zapier', '6,000+ apps', ('Connect', None)), (L('shopify', 22), 'Shopify', 'Orders and customers', ('Connect', None))])]
    out = ''
    for g, items in groups:
        cc = ''.join(f'''<div class="card" style="padding: 16px; display: flex; flex-direction: column; gap: 12px"><div style="display: flex; align-items: center; gap: 12px"><span style="width: 42px; height: 42px; border-radius: 12px; background: #FFFFFF; box-shadow: 0 0 0 1px var(--line); display: inline-flex; align-items: center; justify-content: center; color: #16182A">{lg}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 14px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div><div style="display: flex; justify-content: space-between; align-items: center">{bd(s[0], s[1]) if s[1] else '<span></span>'}{ob("Manage") if s[1] else pb("Connect")}</div></div>''' for lg, n, d, s in items)
        out += f'<div><b style="display: block; font-weight: 600; font-size: 14px; margin-bottom: 10px">{g}</b><div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px">{cc}</div></div>'
    return f'<div style="height: 100%; overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 20px"><div style="display: flex; align-items: center; gap: 8px">{search("Search channels and apps", "300px")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">7 connected · 1 waiting for Meta</span></div>{out}</div>'

# ======================================================== BUSINESS SETTINGS
def business():
    nav = [('Business', [('building', 'Business profile', True), ('pin', 'Locations', False), ('tag', 'Services and prices', False), ('clock', 'Hours and bookings', False), ('link', 'Booking page', False), ('users', 'Team and roles', False)]),
           ('Conversations', [('inbox', 'Inbox rules', False), ('note', 'Saved replies', False), ('chat', 'Message templates', False), ('reply', 'Automations', False)]),
           ('Data', [('users', 'Contact fields', False), ('wallet', 'Payments', False), ('shield', 'Privacy and consent', False), ('key', 'API and webhooks', False), ('receipt', 'Activity log', False)])]
    sn = ''
    for g, items in nav:
        sn += f'<span style="display: block; padding: 14px 10px 6px; font-size: 11.5px; color: var(--mut2)">{g}</span>'
        sn += ''.join(f'<span class="stab" style="{"background: var(--soft); color: var(--text); font-weight: 500" if on else ""}">{I(ic, 16)}{t}</span>' for ic, t, on in items)
    fld = lambda l, v, w='1fr': f'<div><span class="lab">{l}</span><span class="fld">{v}</span></div>'
    form = f'''<div style="flex: 1; min-width: 0; padding: 24px 36px; overflow: hidden"><div style="max-width: 760px">
      <h2 style="margin: 0; font-size: 20px; font-weight: 600">Business profile</h2><p style="margin: 4px 0 0; font-size: 13.5px; color: var(--mut)">What customers see on WhatsApp, Google and your booking page. Vegham uses it to answer correctly.</p>
      <div style="display: flex; align-items: center; gap: 16px; margin-top: 22px; padding-bottom: 20px; border-bottom: 1px solid var(--line)"><span style="width: 64px; height: 64px; border-radius: 18px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: 'Inter Tight', sans-serif; font-size: 28px">N</span><span style="flex: 1"><b style="display: block; font-weight: 600">Logo</b><span style="font-size: 12.5px; color: var(--mut)">Square, at least 400 × 400 px</span></span>{ob("Upload", "upload")}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px">{fld('Business name', 'Nila &amp; Co')}{fld('Legal name', 'Nila and Company LLP')}{fld('Phone', '+91 80 4123 5678')}{fld('Email', 'hello@nilaandco.in')}{fld('Website', 'nilaandco.in')}{fld('GSTIN', '29ABCDE1234F1Z5')}</div>
      <div style="margin-top: 16px"><span class="lab">About your business <span style="font-weight: 400; color: var(--mut)">· used in replies</span></span><span class="fld" style="height: 76px; align-items: flex-start; padding-top: 10px">Consultations, follow-up visits and group sessions in Indiranagar since 2019. Free parking behind the building.</span></div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px">{fld('Country and currency', '🇮🇳 India · ₹ INR')}{fld('Time zone', 'IST · UTC+5:30')}</div>
      <div style="display: flex; gap: 10px; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--line)">{pb("Save changes")}{ob("Cancel")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut); align-self: center">Last changed by Vinay · 2 days ago</span></div></div></div>'''
    return f'<div style="display: flex; height: 100%"><div style="width: 250px; flex: none; border-right: 1px solid var(--line); padding: 10px; overflow: hidden">{search("Search settings", "100%")}{sn}</div>{form}</div>'

PAGES = [
    ('Inbox', 'AppV2Inbox', inbox, ob('Filters', 'filter') + pb('New message', 'plus')),
    ('Calendar', 'AppV2Calendar', calendar, ob('Waitlist · 3') + pb('New booking', 'plus')),
    ('Calls', 'AppV2Calls', calls, ob('Numbers and routing') + pb('Call', 'phone')),
    ('Contacts', 'AppV2Contacts', contacts, ob('Import', 'upload') + ob('Export', 'download') + pb('New contact', 'plus')),
    ('Leads', 'AppV2Leads', leads, ob('Board') + pb('New lead', 'plus')),
    ('Reviews', 'AppV2Reviews', reviews, ob('Share review link', 'link') + pb('Ask for reviews')),
    ('Payments', 'AppV2Payments', payments, ob('Payouts') + pb('New payment link', 'plus')),
    ('Campaigns', 'AppV2Campaigns', campaigns, ob('Templates') + pb('New campaign', 'plus')),
    ('Reports', 'AppV2Reports', reports, ob('Download', 'download') + ob('Schedule email')),
    ('AI agents', 'AppV2Agents', agents, ob('Test chat') + pb('Publish changes')),
    ('Channels and apps', 'AppV2Channels', channels, pb('Request an app')),
    ('Business settings', 'AppV2Business', business, ''),
]
if __name__ == '__main__':
    for label, fname, fn, acts in PAGES:
        build(fname + '.dc.html', f'App · {label}', active=label, main=fn(), ptitle=label, pactions=acts, extra_css=CSS)
    print('pages ok')
