"""Calendar and Calls redesign, same quality bar as the new Inbox."""
import os, sys, math, calendar as pycal
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app4
from app4 import I, IC, WA, IG, GLOBE, PH, GO, CH, build, bd, ob, pb, chlogo, cav, avch, CSS as BASE
IC.update({
    'in': '<path d="M17 7L7 17M7 9v8h8"></path>',
    'out2': '<path d="M7 17L17 7M9 7h8v8"></path>',
    'missed': '<path d="M3 7l6 6 4-4 8 8"></path><path d="M15 17h6v-6"></path>',
    'vm': '<circle cx="6" cy="12" r="3.5"></circle><circle cx="18" cy="12" r="3.5"></circle><path d="M6 15.5h12"></path>',
    'msg': '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>',
    'userplus': '<circle cx="9" cy="8" r="4"></circle><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"></path>',
    'x2': '<path d="M6 6l12 12M18 6L6 18"></path>',
    'checkin': '<path d="M9 11l3 3 8-8"></path><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"></path>',
})
CSS = BASE + '''
.evp{display:none}.app:has(#evp:checked) .evp{display:block}
.app:has(#evp:checked) .ev-sel{box-shadow:0 0 0 2px var(--text)}
.mm{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:12px}
.mm span{height:28px;line-height:28px;border-radius:8px;color:var(--text)}
'''
STAFF = {'Vinay': ('#3B6CF6', 'rgba(59,108,246,.11)'), 'Priya': ('#0E9F6E', 'rgba(16,185,129,.12)'), 'Rahul': ('#7C3AED', 'rgba(124,58,237,.11)')}

# ======================================================== CALENDAR
def cal_page(popover=True):
    # left panel
    weeks = pycal.Calendar(firstweekday=0).monthdayscalendar(2026, 11)
    mm = ''.join(f'<span style="color: var(--mut2); font-size: 11px">{d}</span>' for d in 'MTWTFSS')
    for w in weeks:
        for d in w:
            if d == 0: mm += '<span></span>'; continue
            st = 'background: var(--ink); color: var(--inkfg); font-weight: 600' if d == 6 else 'background: var(--soft2)' if 3 <= d <= 9 else ''
            mm += f'<span style="{st}">{d}</span>'
    team = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 7px 4px; font-size: 13.5px"><span style="width: 16px; height: 16px; border-radius: 5px; background: {c}; display: inline-flex; align-items: center; justify-content: center; color: #FFF">{I("check", 11, 3)}</span><span style="flex: 1">{n}</span><span style="font-size: 12px; color: var(--mut2)">{k}</span></div>' for n, (c, _), k in zip(STAFF, STAFF.values(), ['9', '7', '6']))
    wl = ''.join(f'<div style="display: flex; gap: 10px; align-items: center; padding: 9px 0; border-top: 1px solid var(--line); font-size: 13px">{cav(i, 26)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{w}</span></span></div>' for i, n, w in [('K', 'Kavya Nair', 'Any evening this week'), ('M', 'Meera Iyer', 'Sat morning'), ('S', 'Sana A', 'Fri after 5 PM')])
    left = f'''<div style="width: 264px; flex: none; border-right: 1px solid var(--line); padding: 16px 18px; display: flex; flex-direction: column; gap: 18px; overflow: hidden">
      <span class="pbtn" style="height: 40px; justify-content: center">{I('plus', 15, 2)}New booking</span>
      <div><div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px"><b style="font-size: 14px; font-weight: 600">November 2026</b><span style="display: flex"><span class="ibtn" style="width: 28px; height: 28px">{I('chevl', 15)}</span><span class="ibtn" style="width: 28px; height: 28px">{I('chevr', 15)}</span></span></div><div class="mm">{mm}</div></div>
      <div><span class="grp" style="padding: 0 0 4px">Team</span>{team}</div>
      <div><span class="grp" style="padding: 0 0 4px">Location</span><span class="chip" style="width: 100%; justify-content: space-between">Indiranagar{I('chev', 13)}</span></div>
      <div><div style="display: flex; justify-content: space-between; align-items: center"><span class="grp" style="padding: 0">Waitlist</span>{bd('3', 'acc')}</div><div style="margin-top: 6px">{wl}</div><span style="display: block; margin-top: 4px; font-size: 12px; color: var(--mut)">Vegham offers freed-up slots to them first.</span></div></div>'''
    # grid
    days = [('Mon', 3), ('Tue', 4), ('Wed', 5), ('Thu', 6), ('Fri', 7), ('Sat', 8), ('Sun', 9)]
    H = 62; start = 9; hours = list(range(start, 21))
    ev = {0: [(10, 1, 'A. Khan', 'First visit', 'Vinay', 'paid', True), (13, 1, 'S. Das', 'Standard', 'Priya', 'paid', False), (17, 1.5, 'Group (6)', 'Group session', 'Rahul', 'paid', True)],
          1: [(11, 1, 'Meera Iyer', 'Follow-up', 'Vinay', '', False), (15, 1, 'Kabir Rao', 'Standard', 'Priya', 'paid', True)],
          2: [(10, 1, 'P. Iyer', 'First visit', 'Priya', '', True), (12, 1, 'Neha Kapoor', 'Standard', 'Vinay', 'paid', False), (16.5, 0.5, 'Vikram S', 'Follow-up', 'Rahul', '', True)],
          3: [(10, 1, 'A. Khan', 'First visit', 'Vinay', 'done', False), (11.5, 1, 'S. Das', 'Standard', 'Priya', 'in', False), (13, 1, 'Riya', 'Standard', 'Vinay', 'paid', True), (16.5, 0.5, 'M. Rao', 'Follow-up', 'Priya', 'unconf', False), (18.5, 1.5, 'Group (6)', 'Group session', 'Rahul', 'paid', True)],
          4: [(10, 1, 'Sunita Das', 'Standard', 'Priya', 'paid', False), (14, 1, 'Arjun Mehta', 'Group quote visit', 'Vinay', '', True), (18.5, 1, 'Riya Sharma', 'Standard', 'Vinay', 'paid', True, 'sel')],
          5: [(9, 1.5, 'Group (8)', 'Group session', 'Rahul', 'paid', True), (11, 1, 'Kavya Nair', 'First visit', 'Priya', '', True), (16, 1, '+91 98•• ••21', 'Standard', 'Vinay', '', True)],
          6: []}
    marks = {'paid': f'<span title="Paid" style="color: var(--good)">{I("check", 12, 2.6)}</span>', 'done': '<span style="font-size: 10.5px; color: var(--mut)">Done</span>', 'in': '<span style="font-size: 10.5px; color: var(--good); font-weight: 600">Here</span>', 'unconf': '<span title="Not confirmed" style="font-size: 10.5px; color: var(--warn); font-weight: 600">?</span>', '': ''}
    cols = ''
    for di, (d, n) in enumerate(days):
        blocks = ''
        for e in ev[di]:
            st, dur, who, what, staff, mk, ai = e[:7]; sel = len(e) > 7
            fg, bg = STAFF[staff]
            top = (st - start) * H + 2; h = dur * H - 4
            tm = f'{int(st) if st < 13 else int(st) - 12}:{"30" if st % 1 else "00"}'
            faded = 'opacity: .55;' if mk == 'done' else ''
            inner = f'<div style="display: flex; justify-content: space-between; gap: 4px"><b style="font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{who}</b>{marks[mk]}</div>' + (f'<span style="display: block; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{tm} · {what}</span>' if h > 34 else '') + (f'<span style="display: inline-flex; align-items: center; gap: 4px; margin-top: 3px; font-size: 10.5px; color: {fg}"><span style="width: 5px; height: 5px; border-radius: 50%; background: {fg}"></span>by Vegham</span>' if ai and h > 70 else '')
            lab = 'label for="evp"' if sel else 'div'
            blocks += f'<{lab} class="{"ev-sel" if sel else ""}" style="position: absolute; left: 4px; right: 4px; top: {top}px; height: {h}px; border-radius: 10px; background: {bg}; border-left: 3px solid {fg}; padding: 5px 8px; overflow: hidden; font-size: 12px; line-height: 1.35; display: block; cursor: pointer; {faded}">{inner}</{"label" if sel else "div"}>'
        now = f'<div style="position: absolute; left: 0; right: 0; top: {(17.2 - start) * H}px; height: 2px; background: #E5484D; z-index: 2"><span style="position: absolute; left: -5px; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: #E5484D"></span></div>' if di == 3 else ''
        closed = '<div style="position: absolute; inset: 0; background: repeating-linear-gradient(135deg, var(--soft2) 0 6px, transparent 6px 14px); display: flex; justify-content: center; padding-top: 18px; font-size: 12px; color: var(--mut)">Closed</div>' if di == 6 else ''
        early = f'<div style="position: absolute; left: 0; right: 0; top: 0; height: {H}px; background: var(--soft2); opacity: .7"></div>' if di not in (5, 6) else ''
        cols += f'<div style="position: relative; border-left: 1px solid var(--line); background-image: repeating-linear-gradient(180deg, transparent 0 {H - 1}px, var(--line) {H - 1}px {H}px)">{early}{closed}{blocks}{now}</div>'
    head = ''.join(f'<div style="height: 54px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-left: 1px solid var(--line)"><span style="font-size: 11.5px; color: {"var(--text); font-weight: 600" if n == 6 else "var(--mut)"}">{d}</span><span style="margin-top: 2px; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; {"background: #E5484D; color: #FFF; font-weight: 600" if n == 6 else ""}">{n}</span></div>' for d, n in days)
    times = ''.join(f'<div style="height: {H}px; font-size: 11px; color: var(--mut2); text-align: right; padding-right: 10px; transform: translateY(-7px)">{h if h <= 12 else h - 12} {"AM" if h < 12 else "PM"}</div>' for h in hours)
    allday = f'<div style="display: grid; grid-template-columns: 60px repeat(7, 1fr); border-bottom: 1px solid var(--line); min-height: 30px; align-items: center"><span style="font-size: 11px; color: var(--mut2); text-align: right; padding-right: 10px">All day</span><span></span><span></span><span></span><span></span><span style="margin: 4px; padding: 3px 8px; border-radius: 6px; background: var(--soft); font-size: 11.5px; color: var(--mut)">Priya on leave (PM)</span><span></span><span></span></div>'
    header = f'''<div style="height: 60px; flex: none; display: flex; align-items: center; gap: 8px; padding: 0 16px 0 24px; border-bottom: 1px solid var(--line)">
        <h1 style="margin: 0; font-size: 18px; font-weight: 600">3 – 9 November</h1><span style="font-size: 18px; color: var(--mut2); margin-right: 8px">2026</span>
        <span class="obtn" style="height: 32px">Today</span><span class="ibtn">{I('chevl', 17)}</span><span class="ibtn">{I('chevr', 17)}</span>
        <span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut); margin-right: 8px">22 bookings · 14 by Vegham</span>
        <span class="seg"><label>Day</label><label style="background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)">Week</label><label>Month</label></span>
        <span style="width: 1px; height: 22px; background: var(--line); margin: 0 4px"></span>
        <label for="ov-pal" class="ibtn" aria-label="Search">{I('search', 17)}</label><label for="ov-notif" class="ibtn" aria-label="Notifications" style="position: relative">{I('bell', 17)}<span style="position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: #E5484D; box-shadow: 0 0 0 2px var(--bg)"></span></label></div>'''
    sel_top = 60 + 54 + 31 + (18.5 - start) * H + 6
    pop = f'''<div class="evp popin" style="position: absolute; left: 734px; top: {sel_top - 330}px; width: 320px; z-index: 5; border-radius: 18px; background: var(--pop); box-shadow: var(--shadow); padding: 18px">
      <div style="display: flex; align-items: flex-start; gap: 12px">{cav('R', 40)}<span style="flex: 1"><b style="display: block; font-size: 15px; font-weight: 600">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">{WA(11)} Booked by Vegham on WhatsApp</span></span><label for="evp" class="ibtn" style="width: 28px; height: 28px" aria-label="Close">{I('x2', 15)}</label></div>
      <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px">
        <span style="display: flex; gap: 10px; align-items: center"><span style="color: var(--mut)">{I('cal', 15)}</span>Fri 7 Nov · 6:30 – 7:30 PM</span>
        <span style="display: flex; gap: 10px; align-items: center"><span style="color: var(--mut)">{I('tag', 15)}</span>Standard appointment · ₹1,200</span>
        <span style="display: flex; gap: 10px; align-items: center"><span style="width: 15px; height: 15px; border-radius: 50%; background: {STAFF['Vinay'][0]}"></span>With Vinay · Indiranagar</span>
        <span style="display: flex; gap: 8px; align-items: center">{bd('Paid · UPI', 'good')}{bd('Reminder 9 AM')}</span></div>
      <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{ob('Message', 'msg')}{ob('Reschedule', 'clock')}{ob('Check in', 'checkin')}<span class="obtn" style="color: #E5484D">{I('x2', 15)}Cancel</span></div></div>'''
    grid = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{header}
      <div style="display: grid; grid-template-columns: 60px repeat(7, 1fr); border-bottom: 1px solid var(--line)"><div></div>{head}</div>{allday}
      <div style="flex: 1; overflow: hidden; display: grid; grid-template-columns: 60px repeat(7, 1fr); padding-top: 6px"><div>{times}</div>{cols}</div></div>'''
    extra = f'<input class="vh" type="checkbox" id="evp"{" checked" if popover else ""} aria-label="Booking details" />'
    return extra + f'<div style="display: flex; height: 100%; position: relative">{left}{grid}{pop}<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span></div>'

# ======================================================== CALLS
CALLS = [('needs', 'P', 'P. Iyer', 'in', 'Asked for the owner · transferred, no answer', '4:55 PM', '0:41', 'Call back', 'warn'),
         ('needs', '+', '+91 70•• ••88', 'missed', 'Missed while busy · WhatsApp sent in 6 sec', '3:10 PM', '—', 'No reply yet', 'warn'),
         ('today', '+', '+91 98•• ••21', 'in', 'Saturday hours · booked Sat 4:00 PM', '6:12 PM', '1:12', 'Booked', 'good', 'sel'),
         ('today', 'M', 'Meera Iyer', 'in', 'Moved her visit to Saturday 11 AM', '5:40 PM', '0:58', 'Rescheduled', 'mut'),
         ('today', 'K', 'Kabir Rao', 'in', 'Price of a first visit · price list sent', '1:22 PM', '0:37', 'Answered', 'mut'),
         ('today', 'V', 'Vinay → Arjun M', 'out', 'Outgoing · group quote', '12:05 PM', '3:20', 'Quote sent', 'mut'),
         ('today', '+', 'Unknown', 'vm', 'Voicemail · asked for directions', '11:05 AM', '0:22', 'Voicemail', 'mut'),
         ('earlier', 'S', 'Sunita Das', 'in', 'Booked Standard · Fri 10 AM', 'Yesterday', '1:31', 'Booked', 'good')]
def call_list():
    out = ''; last = None
    lab = {'needs': 'Needs you · 2', 'today': 'Today', 'earlier': 'Earlier'}
    dcol = {'in': 'var(--mut)', 'out': 'var(--acc)', 'missed': '#E5484D', 'vm': 'var(--mut)'}
    dic = {'in': 'in', 'out': 'out2', 'missed': 'missed', 'vm': 'vm'}
    for c in CALLS:
        g, ini, n, d, s, t, dur, oc, ok = c[:9]; sel = len(c) > 9
        if g != last: out += f'<span class="grp">{lab[g]}</span>'; last = g
        accent = '<span style="position: absolute; left: 0; top: 14px; bottom: 14px; width: 3px; border-radius: 0 3px 3px 0; background: var(--warn)"></span>' if g == 'needs' else ''
        out += f'''<div class="row" style="display: flex; gap: 12px; padding: 12px 16px 12px 18px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if sel else ""}">{accent}{cav(ini, 36)}
          <span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; gap: 8px"><b style="font-weight: {600 if g == "needs" else 500}; font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b><span style="font-size: 11.5px; color: var(--mut2); flex: none">{t}</span></span>
          <span style="display: block; margin-top: 2px; font-size: 12.5px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{s}</span>
          <span style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 11.5px"><span style="display: inline-flex; color: {dcol[d]}">{I(dic[d], 13, 2)}</span><span style="color: {"var(--good)" if ok == "good" else "var(--warn)" if ok == "warn" else "var(--mut)"}; font-weight: 500">{oc}</span><span style="color: var(--mut2)">· {dur}</span></span></span></div>'''
    return f'''<div style="width: 340px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="height: 60px; flex: none; display: flex; align-items: center; gap: 4px; padding: 0 12px 0 20px"><h1 style="margin: 0; flex: 1; font-size: 18px; font-weight: 600">Calls</h1><label for="ov-pal" class="ibtn">{I('search', 17)}</label><span class="ibtn">{I('filter', 17)}</span><span class="ibtn" title="Call someone">{I('phone', 17)}</span></div>
      <div style="display: flex; gap: 18px; padding: 0 20px; border-bottom: 1px solid var(--line); font-size: 13px"><span style="height: 36px; display: inline-flex; align-items: center; gap: 6px; border-bottom: 2px solid var(--text); font-weight: 500">All <span style="color: var(--mut2); font-weight: 400">8</span></span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">Booked</span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">Missed</span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">Voicemail</span></div>
      <div style="display: flex; gap: 8px; padding: 12px 16px 4px">{"".join(f'<div style="flex: 1; padding: 8px 10px; border-radius: 12px; background: var(--soft2)"><span style="display: block; font-size: 11px; color: var(--mut)">{l}</span><b style="font-weight: 600; font-size: 16px">{v}</b></div>' for l, v in [("Answered", "7 of 8"), ("Booked", "2"), ("Avg length", "1:04")])}</div>
      <div style="flex: 1; overflow: hidden">{out}</div></div>'''

def call_detail():
    bars = ''.join(f'<span style="width: 3px; height: {5 + int(22 * abs(math.sin(i * 1.3) * math.cos(i * .37)))}px; border-radius: 2px; background: {"var(--ink)" if i < 30 else "var(--line)"}"></span>' for i in range(72))
    marks = ''.join(f'<span style="position: absolute; left: {p}%; top: -6px; width: 2px; height: 46px; background: var(--acc); opacity: .5"></span>' for p in (8, 34, 62))
    moments = ''.join(f'<span class="chip" style="height: 30px; font-size: 12.5px">{t}<span style="color: var(--mut2)">{tm}</span></span>' for t, tm in [('Asked about Saturday', '0:02'), ('Quoted ₹1,200', '0:18'), ('Booked Sat 4:00 PM', '0:44')])
    def turn(who, t, txt, us=False):
        lab = f'<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 16px; height: 16px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700">V</span>Vegham · AI</span>' if us else 'Caller'
        return f'<div style="display: flex; gap: 14px; padding: 8px 0"><span style="width: 42px; flex: none; font-size: 12px; color: var(--mut2); padding-top: 22px; font-variant-numeric: tabular-nums">{t}</span><div style="flex: 1"><span style="font-size: 12px; color: var(--mut)">{lab}</span><div style="margin-top: 4px; padding: 10px 14px; border-radius: 14px; font-size: 14.5px; line-height: 1.5; {"background: rgba(59,108,246,.10)" if us else "background: var(--soft2)"}">{txt}</div></div></div>'
    header = f'''<div style="height: 60px; flex: none; display: flex; align-items: center; gap: 10px; padding: 0 16px 0 24px; border-bottom: 1px solid var(--line)">
        <span style="flex: 1; min-width: 0; display: flex; align-items: center; gap: 12px">{cav('+', 32)}<span style="min-width: 0"><b style="display: block; font-weight: 600; font-size: 14.5px; white-space: nowrap">+91 98•• ••21</b><span style="display: block; font-size: 12px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">Incoming · 6:12 PM · 1:12 · Hindi, English</span></span></span>
        {ob('Call back', 'phone')}<span class="ibtn" title="Message on WhatsApp">{I('msg', 17)}</span><span class="ibtn" title="Add to contacts">{I('userplus', 17)}</span>
        <label for="det" class="ibtn" title="Caller details">{I('panelr', 17)}</label><span style="width: 1px; height: 22px; background: var(--line); margin: 0 2px"></span>
        <label for="ov-notif" class="ibtn" style="position: relative">{I('bell', 17)}<span style="position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: #E5484D; box-shadow: 0 0 0 2px var(--bg)"></span></label></div>'''
    body = f'''<div style="flex: 1; overflow: hidden; padding: 22px 28px"><div style="max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px">
        <div class="card" style="padding: 18px 20px"><div style="display: flex; align-items: center; justify-content: space-between"><span style="font-size: 12px; color: var(--mut)">Summary · answered by Vegham</span>{bd('Booked', 'good')}</div>
          <p style="margin: 8px 0 0; font-size: 15px; line-height: 1.6">Caller asked if you’re open on Saturday and the price of a Standard appointment. Vegham confirmed <b style="font-weight: 600">Saturday 9 AM – 2 PM</b>, quoted <b style="font-weight: 600">₹1,200</b> and booked <b style="font-weight: 600">Sat 8 Nov, 4:00 PM</b> with Vinay. Confirmation sent on WhatsApp.</p>
          <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap">{moments}</div></div>
        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 16px"><span style="width: 40px; height: 40px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; flex: none">{I('play', 15, 2)}</span>
          <span style="flex: 1; min-width: 0; overflow: hidden; position: relative; display: flex; align-items: center; gap: 2px; height: 34px">{bars}{marks}</span><span style="font-size: 12.5px; color: var(--mut); font-variant-numeric: tabular-nums">0:23 / 1:12</span><span class="chip" style="height: 28px; font-size: 12px">1×</span></div>
        <div><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 14px; font-weight: 600">Transcript</b><span style="font-size: 12.5px; color: var(--mut)">Show in English</span></div>
          {turn('Caller', '0:02', 'Hello, are you open this Saturday?')}{turn('V', '0:05', 'Hello! Yes, we’re open on Saturday from 9 AM to 2 PM. Would you like to book a visit?', True)}{turn('Caller', '0:14', 'Haan, Standard appointment kitne ka hai?')}{turn('V', '0:18', 'Standard appointment ₹1,200 ka hai, 60 minute ka. Shaam 4 baje free hai, book kar doon?', True)}</div></div></div>'''
    kv = lambda k, v: f'<div style="display: flex; justify-content: space-between; gap: 10px; padding: 7px 0; font-size: 13px"><span style="color: var(--mut)">{k}</span><span style="text-align: right">{v}</span></div>'
    sec = lambda t, inner: f'<div style="padding: 16px 20px; border-top: 1px solid var(--line)"><span class="grp" style="padding: 0 0 8px">{t}</span>{inner}</div>'
    det = f'''<div class="det" style="flex: none; height: 100%"><div style="width: 280px; height: 100%; overflow: hidden">
        <div style="padding: 20px; display: flex; align-items: center; gap: 12px">{cav('+', 44)}<span><b style="display: block; font-weight: 600; font-size: 15px">New caller</b><span style="font-size: 12.5px; color: var(--mut)">First call · not saved yet</span></span></div>
        {sec('Booking', '<div class="card" style="padding: 12px 14px; border-radius: 12px"><b style="font-weight: 600; font-size: 13.5px">Sat 8 Nov · 4:00 PM</b><span style="display: block; font-size: 12.5px; color: var(--mut)">Standard · with Vinay · unpaid</span></div>')}
        {sec('Call', kv('Line', 'Main · 080 4719 2200') + kv('Route', 'Vegham answered first') + kv('Language', 'Hindi, English') + kv('Recording', 'Kept 90 days'))}
        {sec('Consent', '<span style="font-size: 12.5px; color: var(--mut); line-height: 1.5">The caller heard “This call is answered by an AI assistant and recorded” at the start.</span>')}</div></div>'''
    return f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{header}{body}</div>{det}'

def calls_page(det_open=True):
    extra = f'<input class="vh" type="checkbox" id="det"{" checked" if det_open else ""} aria-label="Caller details" />'
    return extra + f'<div style="display: flex; height: 100%; position: relative">{call_list()}{call_detail()}<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span></div>'

if __name__ == '__main__':
    build('AppV2Calendar.dc.html', 'App · Calendar', active='Calendar', main=cal_page(True), notop=True, extra_css=CSS)
    build('AppV2Calls.dc.html', 'App · Calls', active='Calls', main=calls_page(True), notop=True, extra_css=CSS)
    print('cal+calls ok')
