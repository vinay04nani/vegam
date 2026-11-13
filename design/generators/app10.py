"""Inbox and Calendar, second pass (patterns from Intercom, Front, respond.io, Fresha, Square, Cal.com)."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app4, app5
from app5 import I, IC, WA, IG, GLOBE, PH, GO, CH, build, bd, ob, pb, chlogo, cav, avch, STAFF
from app4 import thread
import app9

IC.setdefault('filter', '<path d="M4 5h16l-6 8v5l-4 2v-7z"></path>')
IC.setdefault('eye', '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>')
IC.setdefault('sparkle0', '')

CSS = app5.CSS + app9.XCSS + '''
.sla{display:inline-flex;align-items:center;gap:4px;height:20px;padding:0 7px;border-radius:999px;font-size:11px;font-weight:600;white-space:nowrap;flex:none}
.sla.w{background:var(--warnbg);color:var(--warn)}.sla.r{background:rgba(229,72,77,.12);color:#E5484D}
.vg{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--mut2)}
.vg i{width:6px;height:6px;border-radius:50%;background:var(--good);display:inline-block}
.app:has(#det:checked) .det{width:320px}
.lg2{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--mut)}
.lg2 i{width:10px;height:10px;border-radius:3px;display:inline-block}
'''
chip = app9.chip

# ================================================================ INBOX
CONVS = [('needs', 'A', 'Arjun Mehta', 'ig', 'Price for a group of 8 on Saturday?', '9m', 'arjun', ('w', '6m left'), 'Vinay'),
         ('needs', 'P', 'P. Iyer', 'ph', 'Asked for a call back about a refund', '25m', None, ('r', 'Overdue 10m'), 'Priya'),
         ('ai', 'R', 'Riya Sharma', 'wa', 'Vegham: Booked ✓ See you tomorrow at 6:30 PM', '6:04 PM', 'riya', None, ''),
         ('ai', '+', '+91 98•• ••21', 'ph', 'Call · booked Sat 4:00 PM', '6:12 PM', None, None, ''),
         ('ai', 'K', 'Kabir Rao', 'web', 'Vegham: Yes, free parking behind the building', '1:22 PM', None, None, ''),
         ('ai', 'D', 'Dev Kumar', 'ms', 'Vegham: I’ve asked the team to call you at 5 PM', '12:40 PM', None, None, ''),
         ('mine', 'M', 'Meera Iyer', 'wa', 'You: Moved to Saturday 11 AM ✓', '5:40 PM', None, None, 'Vinay'),
         ('earlier', 'S', 'Sunita Das', 'ms', 'Thank you! See you soon', 'Yesterday', None, None, ''),
         ('earlier', 'N', 'Neha Kapoor', 'wa', 'Paid ₹1,200 ✓', 'Yesterday', None, None, '')]
LBL = {'needs': 'Needs you · 2', 'ai': 'Vegham is handling · 9', 'mine': 'With you', 'earlier': 'Done today'}


def conv_list(sel):
    out, last = '', None
    for g, ini, n, ch, prev, t, key, sla, who in CONVS:
        if g != last:
            out += f'<span class="grp">{LBL[g]}</span>'; last = g
        on = key == sel
        acc = f'<span style="position: absolute; left: 0; top: 14px; bottom: 14px; width: 3px; border-radius: 0 3px 3px 0; background: {"#E5484D" if sla and sla[0] == "r" else "var(--warn)"}"></span>' if sla else ''
        w = prev.split(':')[0] if prev.split(':')[0] in ('Vegham', 'You') else ''
        pv = prev[len(w) + 1:].strip() if w else prev
        pvh = f'<span style="color: var(--mut2)">{w}:</span> {pv}' if w else pv
        right = f'<span class="sla {sla[0]}">{I("clock", 11, 2.2)}{sla[1]}</span>' if sla else f'<span style="font-size: 11.5px; color: var(--mut2); flex: none">{t}</span>'
        meta = (f'<span style="display: flex; align-items: center; gap: 8px; margin-top: 6px">{cav(who[0], 16)}<span style="font-size: 11.5px; color: var(--mut)">{who} · waiting {t}</span></span>' if sla else
                f'<span class="vg" style="margin-top: 5px"><i></i>Vegham</span>' if g == 'ai' else '')
        out += f'''<div class="row" style="display: flex; gap: 12px; padding: 11px 14px 11px 18px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if on else ""}">{acc}{avch(ini, ch, 34)}
          <span style="flex: 1; min-width: 0; display: flex; flex-direction: column"><span style="display: flex; justify-content: space-between; align-items: center; gap: 8px"><b style="font-weight: {600 if sla else 500}; font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b>{right}</span>
          <span style="display: block; margin-top: 2px; font-size: 12.5px; color: {"var(--text)" if sla else "var(--mut)"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{pvh}</span>{meta}</span></div>'''
    chans = ''.join(f'<span class="ibtn" style="width: 28px; height: 28px; {"background: var(--soft)" if i == 0 else ""}" title="{t}">{f}</span>' for i, (t, f) in enumerate([('All channels', I('grid', 15) if 'grid' in IC else I('inbox', 15)), ('WhatsApp', WA(15)), ('Instagram', IG(15)), ('Phone', PH(15)), ('Website', GLOBE(15))]))
    return f'''<div style="width: 340px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="height: 60px; flex: none; display: flex; align-items: center; gap: 4px; padding: 0 12px 0 20px"><h1 style="margin: 0; flex: 1; font-size: 18px; font-weight: 600">Inbox</h1><label for="ov-pal" class="ibtn" aria-label="Search">{I('search', 17)}</label><span class="ibtn" aria-label="Filter">{I('filter', 17)}</span><span class="ibtn" aria-label="New message">{I('compose', 17)}</span></div>
      <div style="display: flex; gap: 6px; padding: 0 16px 10px; overflow: hidden">{chip("All", True, "14")}{chip("Needs you", False, "2")}{chip("Mine", False, "3")}</div>
      <div style="display: flex; align-items: center; gap: 2px; padding: 0 14px 8px; border-bottom: 1px solid var(--line)">{chans}<span style="flex: 1"></span><span style="font-size: 12px; color: var(--mut); display: inline-flex; align-items: center; gap: 4px">Newest{I("chev", 12)}</span></div>
      <div style="flex: 1; overflow: hidden; padding-top: 2px">{out}</div></div>'''


def details(case):
    kv = lambda k, v: f'<div class="kv2"><span>{k}</span><span style="text-align: right">{v}</span></div>'
    sec = lambda t, inner, right='': f'<div class="ps"><div style="display: flex; justify-content: space-between"><span class="pt">{t}</span>{right}</div>{inner}</div>'
    acts = lambda xs: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">' + ''.join(ob(t, ic) for t, ic in xs) + '</div>'
    if case == 'arjun':
        top = f'<div style="padding: 18px 20px"><div style="display: flex; align-items: center; gap: 12px">{avch("A", "ig", 44)}<span><b style="display: block; font-weight: 600; font-size: 15px">Arjun Mehta</b><span style="font-size: 12.5px; color: var(--mut)">New lead · first message today</span></span></div>{acts([("Send quote", "doc"), ("Book", "cal")])}</div>'
        body = (sec('LEAD', f'<div class="card" style="padding: 12px 14px; border-radius: 12px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 13.5px">Group session · 8 people</b>{bd("Hot", "bad")}</div><span style="display: block; margin-top: 4px; font-size: 12.5px; color: var(--mut)">₹9,600 · wants Saturday · stage New</span></div>', '<span style="font-size: 12px; font-weight: 500">Open in Leads →</span>')
                + sec('CONTACT', kv('Instagram', '@arjun.mehta') + kv('Phone', '<span style="color: var(--mut)">Not shared yet</span>') + kv('Language', 'English') + kv('Offers', 'Not opted in'))
                + sec('TAGS', '<div style="display: flex; flex-wrap: wrap; gap: 6px">' + chip('Group') + chip('Price-sensitive') + chip('+ Add') + '</div>')
                + sec('TEAM NOTES', '<span style="font-size: 13px; color: var(--mut)">No notes yet. Use the Note tab to write one.</span>'))
    else:
        top = f'<div style="padding: 18px 20px"><div style="display: flex; align-items: center; gap: 12px">{avch("R", "wa", 44)}<span><b style="display: block; font-weight: 600; font-size: 15px">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">Customer since Mar 2026 · 6 visits</span></span></div>{acts([("Book", "cal"), ("Payment link", "wallet")])}</div>'
        visits = ''.join(f'<div style="display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px"><span>{d} <span style="color: var(--mut2)">· {s}</span></span><span style="color: var(--mut)">{p}</span></div>' for d, s, p in [('24 Oct', 'Standard', '₹1,200'), ('10 Oct', 'Standard', '₹1,200'), ('19 Sep', 'Follow-up', '₹500')])
        body = (sec('NEXT VISIT', f'<div class="card" style="padding: 12px 14px; border-radius: 12px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 13.5px">Fri 7 Nov · 6:30 PM</b>{bd("Paid", "good")}</div><span style="display: block; margin-top: 4px; font-size: 12.5px; color: var(--mut)">Standard · 60 min · with Vinay · booked by Vegham</span></div>')
                + sec('RECENT VISITS', visits, '<span style="font-size: 12px; color: var(--mut)">₹7,400 spent</span>')
                + sec('CONTACT', kv('Phone', '+91 98765 11223') + kv('Offers', '<span style="color: var(--good)">Opted in · 12 Mar</span>') + kv('Language', 'English, Hindi'))
                + sec('TEAM NOTES', '<div style="padding: 10px 12px; border-radius: 10px; background: rgba(245,190,60,.12); font-size: 13px">Prefers evenings. Likes reminders the morning of. <span style="color: var(--mut)">· Priya</span></div>'))
    return f'<div class="det" style="flex: none; height: 100%"><div style="width: 320px; height: 100%; overflow: hidden">{top}{body}</div></div>'


def inbox(case):
    th = thread(case)
    # someone else is looking at this conversation (collision)
    eye = f'<span style="display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px 0 4px; border-radius: 999px; background: var(--soft2); font-size: 12px; color: var(--mut)">{cav("P", 20)}Priya is viewing</span>'
    th = th.replace('<span class="chip" title="Assigned to Vinay"', eye + '<span class="chip" title="Assigned to Vinay"', 1)
    if case == 'arjun':
        old = th[th.index('<div style="display: flex; align-items: center; gap: 12px; margin: 0 24px; padding: 12px 16px; border-radius: 14px; background: var(--warnbg)'):]
        old = old[:old.index('Let Vegham continue</span></div>') + len('Let Vegham continue</span></div>')]
        new = f'''<div style="margin: 0 24px; padding: 14px 16px; border-radius: 14px; background: var(--warnbg); font-size: 13.5px">
          <div style="display: flex; align-items: center; gap: 10px"><span style="color: var(--warn)">{I('handoff', 18)}</span><b style="font-weight: 600; flex: 1">Vegham handed this to you · group pricing</b><span class="sla w">{I("clock", 11, 2.2)}Reply within 6 min</span><span style="font-size: 13px; font-weight: 500; white-space: nowrap; margin-left: 6px">Hand back to Vegham</span></div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px; font-size: 12.5px"><span><span style="color: var(--mut)">Wants</span><br>Group session, 8 people, Saturday</span><span><span style="color: var(--mut)">Asked</span><br>Total price and a group discount</span><span><span style="color: var(--mut)">Told</span><br>“A person will reply in a few minutes”</span></div></div>'''
        th = th.replace(old, new, 1)
        th = th.replace('<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--good)"></span>',
                        f'<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut); margin-right: 12px">{cav("P", 16)}Priya is typing…</span><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--good)"></span>', 1)
    return f'<div style="display: flex; height: 100%">{conv_list(case)}{th}{details(case)}</div>'


def inbox_page(fname, title, case):
    extra = '<input class="vh" type="checkbox" id="det" checked aria-label="Customer details" /><input class="vh" type="radio" name="cm" id="cm-reply" checked aria-label="Reply" /><input class="vh" type="radio" name="cm" id="cm-note" aria-label="Note" />'
    build(fname, title, active='Inbox', main=extra + inbox(case), notop=True, extra_css=CSS, collapsed=True)


# ================================================================ CALENDAR
STATUS = [('Booked', '#8A8F98', 'rgba(138,143,152,.14)'), ('Confirmed', '#3B6CF6', 'rgba(59,108,246,.12)'), ('Here', '#E08A00', 'rgba(224,138,0,.13)'),
          ('In progress', '#0E9F6E', 'rgba(16,185,129,.13)'), ('Done', '#B5B7BD', 'rgba(181,183,189,.12)'), ('No-show', '#E5484D', 'rgba(229,72,77,.11)')]
SC = {n: (f, b) for n, f, b in STATUS}


def day_page():
    staff = [('Vinay', 'V', '#3B6CF6', '8 of 10 h'), ('Priya', 'P', '#0E9F6E', '6 of 8 h'), ('Rahul', 'R', '#7C3AED', '5 of 9 h')]
    H = 70; start = 9; hours = list(range(start, 21))
    ev = {0: [(9, 1, 'A. Khan', 'First visit', 'Done', False, '₹800'), (10, 1, 'Ishaan R', 'Standard', 'No-show', True, '₹1,200'), (11.5, 1, 'S. Das', 'Standard', 'Done', False, '₹1,200'),
              (13, 1, 'Riya Sharma', 'Standard', 'In progress', True, '₹1,200'), (14.5, 0.5, 'Neha K', 'Follow-up', 'Here', False, '₹500'), (16, 1, 'Arjun Mehta', 'Group quote visit', 'Confirmed', True, ''), (18.5, 1, 'Pooja N', 'Assessment', 'Booked', True, '₹1,200')],
          1: [(9.5, 1, 'Meera Iyer', 'Follow-up', 'Done', False, '₹500'), (11, 1, 'Kabir Rao', 'Standard', 'Done', True, '₹1,200'), (13, 1, 'Sunita Das', 'Standard', 'Here', False, '₹1,200'),
              (14.5, 1, 'M. Rao', 'Follow-up', 'Booked', False, '₹500'), (17, 1, 'Kavya Nair', 'First visit', 'Confirmed', True, '₹800')],
          2: [(10, 1.5, 'Group (6)', 'Group session', 'Done', True, '₹2,100'), (15, 1, 'Vikram S', 'Assessment', 'Confirmed', True, '₹1,200'), (18, 1.5, 'Group (8)', 'Group session', 'Confirmed', True, '₹2,800')]}
    cols = ''
    for si, (n, a, c, util) in enumerate(staff):
        blocks = ''
        for st, dur, who, what, status, ai, price in ev[si]:
            fg, bg = SC[status]
            top = (st - start) * H + 2; h = dur * H - 4
            tm = f'{int(st) if st < 13 else int(st) - 12}:{"30" if st % 1 else "00"}'
            strike = 'text-decoration: line-through;' if status == 'No-show' else ''
            fade = 'opacity: .6;' if status == 'Done' else ''
            blocks += f'''<div style="position: absolute; left: 6px; right: 6px; top: {top}px; height: {h}px; border-radius: 10px; background: {bg}; border-left: 3px solid {fg}; padding: 6px 10px; overflow: hidden; font-size: 12px; line-height: 1.35; {fade}">
              <div style="display: flex; justify-content: space-between; gap: 6px"><b style="font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; {strike}">{who}</b><span style="font-size: 11px; color: {fg}; font-weight: 600; white-space: nowrap">{status}</span></div>
              {f'<span style="display: block; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{tm} · {what}{" · " + price if price else ""}</span>' if h > 40 else ''}
              {f'<span style="display: inline-flex; align-items: center; gap: 4px; margin-top: 2px; font-size: 10.5px; color: var(--mut)"><span style="width: 5px; height: 5px; border-radius: 50%; background: var(--good)"></span>Booked by Vegham</span>' if ai and h > 60 else ''}</div>'''
        gap = f'<div style="position: absolute; left: 6px; right: 6px; top: {(15.5 - start) * H + 2}px; height: {H - 4}px; border-radius: 10px; border: 1.5px dashed var(--line); display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 12px; color: var(--mut)">{I("plus", 13)}Open · offer to waitlist</div>' if si == 1 else ''
        brk = f'<div style="position: absolute; left: 0; right: 0; top: {(12.5 - start) * H}px; height: {H / 2}px; background: repeating-linear-gradient(135deg, var(--soft2) 0 6px, transparent 6px 12px); font-size: 11px; color: var(--mut2); padding: 4px 10px">Lunch</div>'
        cols += f'<div style="position: relative; border-left: 1px solid var(--line); background-image: repeating-linear-gradient(180deg, transparent 0 {H - 1}px, var(--line) {H - 1}px {H}px)">{brk}{gap}{blocks}</div>'
    now = f'<div style="position: absolute; left: 60px; right: 0; top: {(15.2 - start) * H + 6}px; height: 2px; background: #E5484D; z-index: 3"><span style="position: absolute; left: -5px; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: #E5484D"></span></div>'
    sh = ''.join(f'<div style="height: 56px; display: flex; align-items: center; gap: 10px; padding: 0 14px; border-left: 1px solid var(--line)"><span style="width: 30px; height: 30px; border-radius: 50%; background: {c}; color: #FFF; font-size: 12.5px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center">{a}</span><span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 13.5px">{n}</b><span style="font-size: 11.5px; color: var(--mut)">Booked {util}</span></span></div>' for n, a, c, util in staff)
    times = ''.join(f'<div style="height: {H}px; font-size: 11px; color: var(--mut2); text-align: right; padding-right: 10px; transform: translateY(-7px)">{h if h <= 12 else h - 12} {"AM" if h < 12 else "PM"}</div>' for h in hours)
    legend = '<div style="display: flex; gap: 14px; padding: 10px 24px; border-bottom: 1px solid var(--line); align-items: center"><span style="font-size: 12px; color: var(--mut)">Colour by</span><span class="seg"><label>Team</label><label style="background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)">Status</label><label>Service</label></span><span style="width: 8px"></span>' + ''.join(f'<span class="lg2"><i style="background: {f}"></i>{n}</span>' for n, f, _ in STATUS) + '</div>'
    header = f'''<div class="hd" style="padding-left: 24px"><h1 style="white-space: nowrap">Thu 6 Nov</h1><span style="width: 6px"></span>
        <span class="obtn" style="height: 32px">Today</span><span class="ibtn">{I('chevl', 17)}</span><span class="ibtn">{I('chevr', 17)}</span><span style="flex: 1"></span>
        <span class="chip2">Indiranagar{I("chev", 12)}</span><span class="seg"><label style="background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)">Day</label><label>Week</label><label>Month</label><label>List</label></span>{pb("New booking", "plus")}{app9.SEP}{app9.BELL}</div>'''
    grid = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{header}{legend}
      <div style="display: grid; grid-template-columns: 60px repeat(3, 1fr); border-bottom: 1px solid var(--line)"><div></div>{sh}</div>
      <div style="flex: 1; overflow: hidden; display: grid; grid-template-columns: 60px repeat(3, 1fr); padding-top: 6px; position: relative"><div>{times}</div>{cols}{now}</div></div>'''
    # right rail: today
    up = [('N', 'Neha Kapoor', '2:30 PM · Follow-up · Vinay', 'Here', 'Start'), ('A', 'Arjun Mehta', '4:00 PM · Group quote · Vinay', 'Confirmed', 'Check in')]
    uph = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 10px 0; border-top: 1px solid var(--line)">{cav(i, 30)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span><span class="obtn" style="height: 30px; font-size: 12.5px; padding: 0 10px">{b}</span></div>' for i, n, d, s, b in up)
    ap = [('Dev Kumar', 'Team group · 20 people · Sat 10 AM', 'Larger than your group limit (8)'), ('Pooja N', 'Home visit · Sun 11 AM', 'You’re closed on Sundays')]
    aph = ''.join(f'<div style="padding: 12px; border-radius: 12px; border: 1px solid var(--line); margin-top: 8px"><b style="display: block; font-weight: 500; font-size: 13px">{n}</b><span style="display: block; font-size: 12px; color: var(--mut)">{d}</span><span style="display: block; margin-top: 4px; font-size: 12px; color: var(--warn)">{r}</span><div style="display: flex; gap: 6px; margin-top: 8px">{pb("Approve")}{ob("Suggest time")}</div></div>' for n, d, r in ap)
    stat = lambda v, l: f'<div style="padding: 10px 12px; border-radius: 12px; background: var(--soft2)"><div class="num" style="font-size: 20px">{v}</div><span style="font-size: 11.5px; color: var(--mut)">{l}</span></div>'
    rail = f'''<div class="pn" style="width: 320px">
      <div style="padding: 16px 20px"><b style="font-size: 15px; font-weight: 600">Today</b><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px">{stat("15", "bookings · 9 by Vegham")}{stat("₹17,400", "expected")}{stat("6", "done · 2 here")}{stat("1", "no-show")}</div></div>
      <div class="ps"><div style="display: flex; justify-content: space-between"><span class="pt">NEEDS YOUR OK</span>{bd("2", "warn")}</div><span style="font-size: 12px; color: var(--mut)">Vegham held these slots and told the customer you’ll confirm.</span>{aph}</div>
      <div class="ps"><span class="pt">UP NEXT</span>{uph}</div>
      <div class="ps"><span class="pt">WAITLIST · 3</span><span style="font-size: 12.5px; color: var(--mut)">Priya is free at 3:30 PM. <b style="color: var(--text); font-weight: 500">Kavya Nair</b> wanted an evening this week.</span><div style="margin-top: 8px">{ob("Offer 3:30 PM to Kavya", "send2")}</div></div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{grid}{rail}<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span></div>'


def week_page():
    html = app5.cal_page(True)
    # left rail: approvals tray above the waitlist
    tray = f'''<div><div style="display: flex; justify-content: space-between; align-items: center"><span class="grp" style="padding: 0">Needs your OK</span>{bd('2', 'warn')}</div>
        <div style="margin-top: 6px; display: flex; flex-direction: column; gap: 6px">{"".join(f'<div style="padding: 9px 10px; border-radius: 10px; background: var(--warnbg); font-size: 12.5px"><b style="display: block; font-weight: 500">{n}</b><span style="color: var(--mut)">{d}</span></div>' for n, d in [("Dev Kumar · 20 people", "Sat 10 AM · over group limit"), ("Pooja N · home visit", "Sun 11 AM · you’re closed")])}</div></div>'''
    key = '<div><div style="display: flex; justify-content: space-between; align-items: center"><span class="grp" style="padding: 0">Waitlist</span>'
    assert key in html
    html = html.replace(key, tray + key, 1)
    # day headers: how full each day is
    for d, n, p in [('Mon', 3, 62), ('Tue', 4, 48), ('Wed', 5, 71), ('Thu', 6, 84), ('Fri', 7, 66), ('Sat', 8, 92), ('Sun', 9, 0)]:
        k = f'<span style="margin-top: 2px; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; {"background: #E5484D; color: #FFF; font-weight: 600" if n == 6 else ""}">{n}</span></div>'
        assert k in html, n
        bar = f'<span style="margin-top: 4px; width: 46px; height: 3px; border-radius: 2px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 2px; background: {"var(--warn)" if p >= 90 else "var(--good)"}"></span></span><span style="font-size: 10.5px; color: var(--mut2); margin-top: 2px">{"Closed" if n == 9 else f"{p}% full"}</span></div>'
        html = html.replace(k, k[:-6] + bar, 1)
    html = html.replace('height: 54px; display: flex; flex-direction: column; align-items: center; justify-content: center;', 'height: 76px; display: flex; flex-direction: column; align-items: center; justify-content: center;')
    # popover: status steps
    k = "{bd('Paid · UPI', 'good')}{bd('Reminder 9 AM')}"
    steps = ''.join(f'<span style="flex: 1; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: {"var(--text)" if i <= 1 else "var(--mut2)"}"><span style="height: 4px; border-radius: 2px; background: {"#3B6CF6" if i <= 1 else "var(--soft)"}"></span>{s}</span>' for i, s in enumerate(['Booked', 'Confirmed', 'Here', 'Done']))
    html = html.replace('<span style="display: flex; gap: 8px; align-items: center"><span class="bd good">Paid · UPI</span><span class="bd mut">Reminder 9 AM</span></span>',
                        f'<span style="display: flex; gap: 8px; align-items: center"><span class="bd good">Paid · UPI</span><span class="bd mut">Confirmed on WhatsApp</span></span><span style="display: flex; gap: 6px; margin-top: 4px">{steps}</span>', 1)
    return html


if __name__ == '__main__':
    inbox_page('AppV2InboxHandover.dc.html', 'App · Inbox · handed to you', 'arjun')
    inbox_page('AppV2InboxAI.dc.html', 'App · Inbox · handled by Vegham', 'riya')
    build('AppV2Calendar.dc.html', 'App · Calendar · week', active='Calendar', main=week_page(), notop=True, extra_css=CSS)
    build('AppV2CalendarDay.dc.html', 'App · Calendar · day by team', active='Calendar', main=day_page(), notop=True, extra_css=CSS, collapsed=True)
    print('ib+cal ok')
