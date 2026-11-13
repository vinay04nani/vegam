"""Contacts, Leads and Reviews redesign (same bar as Inbox/Calendar/Calls)."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app5
from app5 import I, IC, WA, IG, GLOBE, PH, GO, CH, build, bd, ob, pb, chlogo, cav, avch, CSS
IC.update({'star2': '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"></path>',
           'arrowr': '<path d="M5 12h14M13 6l6 6-6 6"></path>', 'doc': '<path d="M6 3h9l4 4v14H6z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path>'})
STAR = lambda n, s=13: f'<span style="color: #F5A524; letter-spacing: 1px; font-size: {s}px">{"★" * n}<span style="color: var(--line)">{"★" * (5 - n)}</span></span>'
BELL = f'<label for="ov-notif" class="ibtn" aria-label="Notifications" style="position: relative">{I("bell", 17)}<span style="position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: #E5484D; box-shadow: 0 0 0 2px var(--bg)"></span></label>'
SEP = '<span style="width: 1px; height: 22px; background: var(--line); margin: 0 4px"></span>'
def phead(title, count, right):
    return f'<div style="height: 60px; flex: none; display: flex; align-items: center; gap: 8px; padding: 0 16px 0 24px; border-bottom: 1px solid var(--line)"><h1 style="margin: 0; font-size: 18px; font-weight: 600">{title}</h1><span style="font-size: 14px; color: var(--mut2)">{count}</span><span style="flex: 1"></span>{right}{SEP}<label for="ov-pal" class="ibtn" aria-label="Search">{I("search", 17)}</label>{BELL}</div>'
def tabs(items, on=0):
    return '<div style="display: flex; gap: 20px; padding: 0 24px; border-bottom: 1px solid var(--line); font-size: 13px">' + ''.join(f'<span style="height: 40px; display: inline-flex; align-items: center; gap: 6px; {"border-bottom: 2px solid var(--text); font-weight: 500; color: var(--text)" if i == on else "color: var(--mut)"}">{t}{f" <span style=\'color: var(--mut2); font-weight: 400\'>{n}</span>" if n else ""}</span>' for i, (t, n) in enumerate(items)) + '</div>'
kv = lambda k, v: f'<div style="display: flex; justify-content: space-between; gap: 10px; padding: 7px 0; font-size: 13px"><span style="color: var(--mut)">{k}</span><span style="text-align: right">{v}</span></div>'
sec = lambda t, inner: f'<div style="padding: 16px 20px; border-top: 1px solid var(--line)"><span class="grp" style="padding: 0 0 8px">{t}</span>{inner}</div>'
smp = '<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span>'
DETCSS = '.app:has(#det:checked) .det{width:340px}'

# ======================================================== CONTACTS
def contacts():
    people = [('Riya Sharma', 'R', '+91 98765 11223', ['wa'], ['Regular', 'Evenings'], '2 weeks ago', 6, '₹7,400', True, True),
              ('Arjun Mehta', 'A', '+91 99012 44556', ['ig'], ['New'], 'Never', 0, '—', True, False),
              ('Meera Iyer', 'M', '+91 98450 33221', ['wa', 'ph'], ['Regular'], '9 days ago', 9, '₹10,800', True, False),
              ('Kabir Rao', 'K', '+91 97400 12121', ['web'], ['New'], 'Never', 0, '—', False, False),
              ('Sunita Das', 'S', '+91 99860 77889', ['ms', 'wa'], ['VIP'], '3 days ago', 14, '₹19,200', True, False),
              ('P. Iyer', 'P', '+91 98•• ••21', ['ph'], ['Call back'], '3 months ago', 2, '₹1,500', False, False),
              ('Neha Kapoor', 'N', '+91 90080 55443', ['wa'], ['Regular'], '5 days ago', 5, '₹6,000', True, False),
              ('Vikram Singh', 'V', '+91 98860 90909', ['go'], ['New'], 'Never', 0, '—', False, False),
              ('Kavya Nair', 'K', '+91 99000 31313', ['wa', 'ig'], ['Group'], '3 weeks ago', 3, '₹3,600', True, False),
              ('Rahul Verma', 'R', '+91 98111 22333', ['wa'], ['Lapsed'], '5 months ago', 4, '₹4,800', True, False),
              ('Ananya Rao', 'A', '+91 97311 45678', ['ig'], ['Regular'], '1 week ago', 7, '₹8,400', True, False),
              ('M. Rao', 'M', '+91 98•• ••44', ['ph', 'wa'], ['Follow-up'], 'Today', 6, '₹6,900', True, False),
              ('Divya Menon', 'D', '+91 99450 11002', ['wa'], ['Regular'], '2 weeks ago', 8, '₹9,600', True, False)]
    cols = 'grid-template-columns: 28px 1.8fr .8fr 1.5fr 1.1fr .5fr .8fr'
    tagk = lambda t: 'acc' if t == 'VIP' else 'warn' if t in ('Lapsed', 'Call back') else 'mut'
    cb = '<span style="width: 15px; height: 15px; border-radius: 4px; border: 1.5px solid var(--line); display: inline-block"></span>'
    hdr = f'<div class="tb h" style="{cols}; padding: 0 24px">{cb}<span>Name</span><span>Channels</span><span>Tags</span><span>Last visit</span><span style="text-align: right">Visits</span><span style="text-align: right">Spent</span></div>'
    body = ''
    for n, ini, p, ch, tags, lv, v, spd, opt, sel in people:
        body += f'''<div class="tb" style="{cols}; padding: 0 24px; height: 50px; {"background: var(--soft)" if sel else ""}">{cb}<span style="display: flex; align-items: center; gap: 10px; min-width: 0">{cav(ini, 28)}<b style="font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b>{"" if opt else "<span title=\'Not opted in to messages\' style=\'width: 6px; height: 6px; border-radius: 50%; background: var(--mut2); flex: none\'></span>"}</span><span style="display: flex; gap: 4px">{"".join(chlogo(c, 10) for c in ch)}</span><span style="display: flex; gap: 4px">{"".join(bd(t, tagk(t)) for t in tags)}</span><span style="white-space: nowrap; color: {"var(--text)" if lv == "Today" else "var(--mut)"}">{lv}</span><span style="text-align: right; font-variant-numeric: tabular-nums">{v}</span><span style="text-align: right; font-variant-numeric: tabular-nums; font-weight: 500">{spd}</span></div>'''
    bar = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px"><span class="fld" style="flex: 1; max-width: 300px; gap: 8px; color: var(--mut2); white-space: nowrap">{I("search", 15)}Search name, phone or tag</span><span class="chip" style="height: 36px">{I("tag", 14)}Tag{I("chev", 13)}</span><span class="chip" style="height: 36px">Channel{I("chev", 13)}</span><span class="chip" style="height: 36px; border-style: dashed; color: var(--mut)">{I("plus", 13)}Filter</span></div>'
    tl = [('cal', 'Booked Standard · Fri 7 Nov, 6:30 PM', 'Today · by Vegham'), ('wallet', 'Paid ₹1,200 by UPI', 'Today'), ('msg', 'WhatsApp conversation · 6 messages', 'Today'), ('star2', 'Left a 5★ Google review', '14 Sep'), ('cal', 'Follow-up visit · paid ₹300', '28 Sep')]
    tlh = ''.join(f'<div style="display: flex; gap: 12px; padding: 8px 0"><span style="width: 28px; height: 28px; border-radius: 9px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; color: var(--mut); flex: none">{I(ic, 14)}</span><span style="flex: 1; font-size: 13px"><span style="display: block">{t}</span><span style="font-size: 11.5px; color: var(--mut2)">{w}</span></span></div>' for ic, t, w in tl)
    det = f'''<div class="det" style="flex: none; height: 100%"><div style="width: 340px; height: 100%; overflow: hidden">
      <div style="padding: 20px 20px 16px"><div style="display: flex; align-items: flex-start; gap: 12px">{cav('R', 48)}<span style="flex: 1"><b style="display: block; font-size: 16px; font-weight: 600">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">Customer since Mar 2026 · Indiranagar</span></span><label for="det" class="ibtn" style="width: 28px; height: 28px">{I('x2', 15)}</label></div>
        <div style="display: flex; gap: 6px; margin-top: 12px">{bd('Regular', 'mut')}{bd('Evenings', 'mut')}<span class="bd mut" style="border: 1px dashed var(--line); background: none">+ Tag</span></div>
        <div style="display: flex; gap: 8px; margin-top: 14px">{ob('Message', 'msg')}{ob('Book', 'cal')}<span class="ibtn">{I('more', 17)}</span></div></div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 0 20px 16px">{"".join(f'<div style="padding: 10px; border-radius: 12px; background: var(--soft2)"><b style="display: block; font-size: 16px; font-weight: 600">{v}</b><span style="font-size: 11.5px; color: var(--mut)">{l}</span></div>' for v, l in [("6", "visits"), ("₹7,400", "spent"), ("0", "no-shows")])}</div>
      {sec('Contact', kv('Phone', '+91 98765 11223') + kv('Email', 'riya.s@gmail.com') + kv('Messages', f'<span style="color: var(--good)">Opted in · 12 Mar</span>') + kv('Language', 'English, हिन्दी'))}
      {sec('Activity', tlh)}</div></div>'''
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead("Contacts", "1,284", ob("Import", "upload") + ob("Export", "download") + pb("New contact", "plus"))}{tabs([("All", "1,284"), ("Regulars", "312"), ("New this month", "86"), ("Lapsed 60+ days", "41"), ("Not opted in", "203")])}{bar}<div style="border-top: 1px solid var(--line)">{hdr}{body}</div></div>'
    return '<input class="vh" type="checkbox" id="det" checked aria-label="Contact details" />' + f'<div style="display: flex; height: 100%; position: relative">{main}{det}{smp}</div>'

# ======================================================== LEADS
def leads():
    stages = [('New', '#3B6CF6', '₹12,100', [('Arjun Mehta', 'A', 'ig', 'Group session · 8 people', '₹9,600', 'Reply now', True, True), ('Kabir Rao', 'K', 'web', 'First visit', '₹500', 'Asked about parking', False, False), ('Vikram Singh', 'V', 'go', 'Walk-in question', '₹2,000', 'Vegham replied', False, False)]),
              ('Talking', '#7C3AED', '₹30,000', [('Pooja N', 'P', 'wa', 'Monthly package', '₹6,000', 'Follow up tomorrow', False, False), ('Dev Kumar', 'D', 'ms', 'Corporate group · 20', '₹24,000', 'Wants a call', True, False)]),
              ('Quote sent', '#F59E0B', '₹20,400', [('Team Lumen', 'T', 'wa', '10 sessions · Q-104', '₹18,000', 'Viewed quote 2×', False, False), ('Sana A', 'S', 'ig', 'Gift voucher', '₹2,400', 'Payment link open', False, False)]),
              ('Won', '#0E9F6E', '₹9,600', [('Kavya Nair', 'K', 'wa', 'Group session', '₹3,600', 'Booked Sat 9 AM', False, False), ('Rahul V', 'R', 'wa', 'Monthly package', '₹6,000', 'Paid', False, False)])]
    cols = ''
    for name, col, total, cards in stages:
        cc = ''
        for who, ini, ch, what, val, nxt, hot, sel in cards:
            cc += f'''<div class="card" style="padding: 12px 14px; border-radius: 14px; display: flex; flex-direction: column; gap: 8px; {"box-shadow: 0 0 0 2px var(--text)" if sel else ""}">
              <div style="display: flex; align-items: center; gap: 10px">{avch(ini, ch, 30)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{who}</b><span style="font-size: 12px; color: var(--mut)">{what}</span></span></div>
              <div style="display: flex; justify-content: space-between; align-items: center"><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: {"var(--warn)" if hot else "var(--mut)"}">{I("arrowr", 12)}{nxt}</span><b style="font-weight: 600; font-size: 13px">{val}</b></div></div>'''
        cols += f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px"><div style="display: flex; align-items: center; gap: 8px; padding: 0 2px"><span style="width: 8px; height: 8px; border-radius: 50%; background: {col}"></span><b style="font-size: 13.5px; font-weight: 600">{name}</b><span style="font-size: 12.5px; color: var(--mut2)">{len(cards)}</span><span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">{total}</span></div>{cc}<span style="font-size: 12.5px; color: var(--mut2); padding: 6px 4px">{I("plus", 12)} Add lead</span></div>'''
    steps = ['New', 'Talking', 'Quote sent', 'Won']
    prog = ''.join(f'<span style="flex: 1; height: 4px; border-radius: 2px; background: {"var(--ink)" if i == 0 else "var(--soft)"}"></span>' for i in range(4))
    det = f'''<div class="det" style="flex: none; height: 100%"><div style="width: 340px; height: 100%; overflow: hidden">
      <div style="padding: 20px"><div style="display: flex; align-items: flex-start; gap: 12px">{avch('A', 'ig', 44)}<span style="flex: 1"><b style="display: block; font-size: 16px; font-weight: 600">Arjun Mehta</b><span style="font-size: 12.5px; color: var(--mut)">From Instagram · 9 min ago</span></span><label for="det" class="ibtn" style="width: 28px; height: 28px">{I('x2', 15)}</label></div>
        <div style="margin-top: 16px"><div style="display: flex; gap: 4px">{prog}</div><div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 11.5px; color: var(--mut)">{"".join(f"<span>{s}</span>" for s in steps)}</div></div>
        <div style="margin-top: 16px; padding: 14px; border-radius: 14px; background: var(--soft2)"><span style="font-size: 12px; color: var(--mut)">Interested in</span><b style="display: block; margin-top: 2px; font-weight: 600">Group session · 8 people · Saturday</b><span style="display: block; margin-top: 2px; font-size: 13px">Est. value <b style="font-weight: 600">₹9,600</b></span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">{pb('Send quote', 'doc')}{ob('Open chat', 'msg')}{ob('Book visit', 'cal')}{ob('Mark lost')}</div></div>
      {sec('Last message', '<div style="padding: 10px 12px; border-radius: 12px; background: var(--soft2); font-size: 13px">“We’re 8 friends. What would the price be for all of us? Any discount?”</div><span style="display: block; margin-top: 6px; font-size: 12px; color: var(--warn)">Waiting for your reply · 9 min</span>')}
      {sec('Details', kv('Owner', 'Vinay') + kv('Source', 'Instagram DM') + kv('Phone', 'Not shared yet'))}</div></div>'''
    bar = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px"><span class="fld" style="width: 260px; gap: 8px; color: var(--mut2)">{I("search", 15)}Search leads</span><span class="chip" style="height: 36px">Source{I("chev", 13)}</span><span class="chip" style="height: 36px">Owner{I("chev", 13)}</span><span style="flex: 1"></span><span style="font-size: 13px; color: var(--mut)">Open pipeline <b style="color: var(--text); font-weight: 600">₹62,500</b> · won this month <b style="color: var(--text); font-weight: 600">₹41,200</b></span></div>'
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead("Leads", "11 open", "<span class=\'seg\'><label style=\'background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)\'>Board</label><label>List</label></span>" + pb("New lead", "plus"))}{bar}<div style="flex: 1; display: flex; gap: 14px; padding: 4px 24px 24px; align-items: flex-start; overflow: hidden">{cols}</div></div>'
    return '<input class="vh" type="checkbox" id="det" checked aria-label="Lead details" />' + f'<div style="display: flex; height: 100%; position: relative">{main}{det}{smp}</div>'

# ======================================================== REVIEWS
REV = [('needs', 'S', 'Shalini P', 2, 'Had to wait 20 minutes past my slot.', '3 days ago', 'shalini'),
       ('needs', 'A', 'Ananya Rao', 5, 'Booked on WhatsApp late at night and got a reply instantly. The visit itself was lovely too!', '2 hours ago', None),
       ('done', 'K', 'Karthik M', 4, 'Good service. Parking was a bit hard to find on a Saturday.', 'Yesterday', None),
       ('done', 'D', 'Divya Menon', 5, 'Friendly team, always on time. Love the reminders.', '3 days ago', None),
       ('done', 'R', 'Rahul Verma', 5, 'Easy to book, great group session.', '1 week ago', None),
       ('done', 'N', 'Neha Kapoor', 4, 'Good experience overall.', '2 weeks ago', None)]
def reviews():
    lst = ''; last = None
    for g, ini, n, st, txt, t, key in REV:
        if g != last: lst += f'<span class="grp">{"Needs a reply · 2" if g == "needs" else "Replied"}</span>'; last = g
        sel = key == 'shalini'
        accent = '<span style="position: absolute; left: 0; top: 14px; bottom: 14px; width: 3px; border-radius: 0 3px 3px 0; background: var(--warn)"></span>' if g == 'needs' and st <= 3 else ''
        lst += f'''<div class="row" style="display: flex; gap: 12px; padding: 12px 16px 12px 18px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if sel else ""}">{accent}{cav(ini, 34)}<span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; gap: 8px"><b style="font-weight: {600 if g == "needs" else 500}; font-size: 13.5px">{n}</b><span style="font-size: 11.5px; color: var(--mut2)">{t}</span></span>{STAR(st, 12)}<span style="display: block; font-size: 12.5px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{txt}</span></span></div>'''
    left = f'''<div style="width: 320px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="height: 60px; flex: none; display: flex; align-items: center; gap: 4px; padding: 0 12px 0 20px"><h1 style="margin: 0; flex: 1; font-size: 18px; font-weight: 600">Reviews</h1><label for="ov-pal" class="ibtn">{I('search', 17)}</label><span class="ibtn">{I('filter', 17)}</span></div>
      <div style="display: flex; gap: 18px; padding: 0 20px; border-bottom: 1px solid var(--line); font-size: 13px"><span style="height: 36px; display: inline-flex; align-items: center; gap: 6px; border-bottom: 2px solid var(--text); font-weight: 500">All <span style="color: var(--mut2); font-weight: 400">212</span></span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">1–3★</span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">5★</span></div>
      <div style="flex: 1; overflow: hidden">{lst}</div></div>'''
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div style="height: 60px; flex: none; display: flex; align-items: center; gap: 10px; padding: 0 16px 0 24px; border-bottom: 1px solid var(--line)"><span style="flex: 1; display: flex; align-items: center; gap: 12px">{cav('S', 32)}<span><b style="display: block; font-weight: 600; font-size: 14.5px">Shalini P</b><span style="font-size: 12px; color: var(--mut)">{GO(11)} Google · 3 days ago</span></span></span><span class="obtn" style="height: 32px">{I('phone', 15)}Call her</span><span class="obtn" style="height: 32px">{I('checkc', 15)}Done</span>{SEP}{BELL}</div>
      <div style="flex: 1; overflow: hidden; padding: 28px"><div style="max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px">
        <div>{STAR(2, 20)}<p style="margin: 10px 0 0; font-size: 18px; line-height: 1.55; font-family: 'Inter Tight', sans-serif; letter-spacing: -0.01em">“Had to wait 20 minutes past my slot.”</p>
          <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap"><span class="chip" style="height: 30px; font-size: 12.5px">{I('cal', 13)}Visit · Mon 3 Nov, 11:30 AM · with Priya</span><span class="chip" style="height: 30px; font-size: 12.5px">{I('users', 13)}Customer · 4 visits</span></div></div>
        <div style="padding: 12px 16px; border-radius: 14px; background: var(--warnbg); font-size: 13.5px">Low rating · Vegham hasn’t replied on its own. Calls ran late that morning: the 10:00 visit took 25 minutes longer.</div>
        <div style="padding: 14px 16px; border-radius: 14px; border: 1px dashed var(--line)"><div style="display: flex; gap: 8px; font-size: 12px; color: var(--mut)"><b style="font-weight: 600; color: var(--text)">Suggested reply</b>· apologetic, offers to make it right<span style="flex: 1"></span>1 of 3</div>
          <p style="margin: 6px 0 0; font-size: 14.5px; line-height: 1.55">Hi Shalini, we’re sorry you had to wait. That isn’t the experience we want for you. Our earlier appointment ran late; we’re changing how we space bookings so it doesn’t happen again. We’d love to make it up to you on your next visit. Could we give you a call?</p></div>
        <div class="card" style="border-radius: 18px; padding: 10px 14px"><div style="height: 56px; font-size: 14.5px; color: var(--mut2); padding-top: 4px">Write a public reply…</div>
          <div style="display: flex; align-items: center; gap: 8px"><span style="font-size: 12px; color: var(--mut)">Posts publicly on Google as Nila &amp; Co</span><span style="flex: 1"></span>{ob('Insert suggestion')}<span class="pbtn">Post reply</span></div></div></div></div></div>'''
    dist = [(5, 82), (4, 12), (3, 4), (2, 1), (1, 1)]
    dd = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; font-size: 12px"><span style="width: 18px; color: var(--mut)">{s}★</span><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: var(--ink)"></span></span><span style="width: 30px; text-align: right; color: var(--mut)">{p}%</span></div>' for s, p in dist)
    right = f'''<div style="width: 300px; flex: none; border-left: 1px solid var(--line); height: 100%; overflow: hidden">
      <div style="padding: 20px"><span style="font-size: 12px; color: var(--mut)">{GO(11)} Google rating</span><div style="display: flex; align-items: baseline; gap: 10px; margin-top: 4px"><span style="font-family: 'Inter Tight', sans-serif; font-size: 44px; letter-spacing: -0.03em">4.8</span>{STAR(5, 16)}</div><span style="font-size: 12.5px; color: var(--mut)">212 reviews · +18 this month</span><div style="margin-top: 14px; display: flex; flex-direction: column; gap: 6px">{dd}</div></div>
      {sec('Asking for reviews', kv('Requests sent', '64 this month') + kv('Became reviews', '22 · 34%') + '<div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; font-size: 13px"><span>Ask 2 hours after a visit</span><span class="sw on"></span></div><div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; font-size: 13px"><span>Only ask happy customers</span><span class="sw on"></span></div>')}
      {sec('Auto-reply', '<div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px"><span>Vegham replies to 4★ and 5★</span><span class="sw on"></span></div><span style="display: block; margin-top: 6px; font-size: 12px; color: var(--mut)">Lower ratings always come to you.</span>')}</div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{left}{center}{right}{smp}</div>'

if __name__ == '__main__':
    build('AppV2Contacts.dc.html', 'App · Contacts', active='Contacts', main=contacts(), notop=True, extra_css=CSS + DETCSS)
    build('AppV2Leads.dc.html', 'App · Leads', active='Leads', main=leads(), notop=True, extra_css=CSS + DETCSS)
    build('AppV2Reviews.dc.html', 'App · Reviews', active='Reviews', main=reviews(), notop=True, extra_css=CSS)
    print('c/l/r ok')
