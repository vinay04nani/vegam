"""Leads, Reviews and Campaigns, redesigned. Sample data."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app8
from app8 import I, IC, WA, IG, GLOBE, PH, GO, build, CSS, RCSS, inr, legend, spark
from app4 import cav, avch
from app3 import bd, ob, pb, chlogo
from app6 import BELL, SEP, STAR

IC.setdefault('filter', '<path d="M4 5h16l-6 8v5l-4 2v-7z"></path>')
IC.setdefault('columns', '<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M9 4v16M15 4v16"></path>')
IC.setdefault('list', '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>')
IC.setdefault('flag', '<path d="M5 21V4h11l-2 4 2 4H5"></path>')
IC.setdefault('reply', '<path d="M10 9V5l-7 7 7 7v-4c5 0 8 1.5 11 5-1-6-4-11-11-11z"></path>')
IC.setdefault('lock', '<rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path>')
IC.setdefault('users2', '<circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"></path>')

XCSS = '''
.lc{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 13px;display:flex;flex-direction:column;gap:8px}
.lc.pick{box-shadow:0 0 0 2px var(--text);border-color:transparent}
.kc{flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;padding:10px;border-radius:16px;background:var(--soft2)}
.kh{display:flex;align-items:center;gap:8px;padding:2px 4px 4px;font-size:13px}
.dot{width:8px;height:8px;border-radius:50%;flex:none;display:inline-block}
.chip2{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 11px;border-radius:999px;border:1px solid var(--line);font-size:12.5px;color:var(--text);background:var(--bg);white-space:nowrap}
.chip2.on{background:var(--ink);color:var(--inkfg);border-color:transparent}
.hd{height:60px;flex:none;display:flex;align-items:center;gap:8px;padding:0 16px 0 24px;border-bottom:1px solid var(--line)}
.hd h1{margin:0;font-size:18px;font-weight:600}
.st{display:flex;border-bottom:1px solid var(--line)}
.st>div{flex:1;padding:14px 20px;border-left:1px solid var(--line);min-width:0}
.st>div:first-child{border-left:0;padding-left:24px}
.st .l{font-size:12px;color:var(--mut)}
.st .v{font-family:'Inter Tight',sans-serif;font-size:22px;letter-spacing:-0.02em}
.pn{width:372px;flex:none;border-left:1px solid var(--line);display:flex;flex-direction:column;overflow:hidden;background:var(--bg)}
.ps{padding:16px 20px;border-top:1px solid var(--line)}
.pt{display:block;font-size:11.5px;color:var(--mut2);margin-bottom:8px;letter-spacing:.02em}
.kv2{display:flex;justify-content:space-between;gap:10px;padding:5px 0;font-size:13px}
.kv2 span:first-child{color:var(--mut)}
.tl{display:flex;gap:10px;font-size:12.5px;padding-bottom:12px;position:relative}
.tl::before{content:"";position:absolute;left:4px;top:12px;bottom:0;width:1px;background:var(--line)}
.tl:last-child::before{display:none}
.tbl2{width:100%;border-collapse:collapse;font-size:13px}
.tbl2 th{text-align:left;font-weight:500;font-size:12px;color:var(--mut);padding:10px 12px;border-bottom:1px solid var(--line);white-space:nowrap;background:var(--bg)}
.tbl2 td{padding:12px;border-bottom:1px solid var(--line);white-space:nowrap}
.tbl2 th.r,.tbl2 td.r{text-align:right}
.tbl2 tr.pick td{background:var(--soft2)}
.step{display:flex;align-items:center;gap:10px;font-size:13.5px;color:var(--mut)}
.step b{width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;background:var(--soft);color:var(--mut)}
.step.on{color:var(--text);font-weight:500}.step.on b{background:var(--ink);color:var(--inkfg)}
.step.done b{background:var(--goodbg);color:var(--good)}
.cond{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;font-size:13px;background:var(--bg)}
.cond .sel{height:30px;font-size:12.5px}
'''
ALL = CSS + RCSS + XCSS
sel = lambda t: f'<span class="sel" style="height: 32px; font-size: 13px">{t}{I("chev", 14)}</span>'
chip = lambda t, on=False, n='': f'<span class="chip2{" on" if on else ""}">{t}{f" <span style=\"opacity: .6\">{n}</span>" if n else ""}</span>'
ibtn = lambda ic, t: f'<span class="ibtn" title="{t}">{I(ic, 17)}</span>'
SRCH = f'<label for="ov-pal" class="ibtn" aria-label="Search">{I("search", 17)}</label>'
seg = lambda opts, on=0: '<span class="seg">' + ''.join(f'<label style="{"background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)" if i == on else ""}">{o}</label>' for i, o in enumerate(opts)) + '</span>'
SMP = '<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span>'


def head(title, sub, right):
    return f'<div class="hd"><h1>{title}</h1><span style="font-size: 14px; color: var(--mut2)">{sub}</span><span style="flex: 1"></span>{right}{SEP}{BELL}</div>'


def strip(items):
    return '<div class="st">' + ''.join(f'<div><span class="l">{l}</span><div style="display: flex; align-items: baseline; gap: 8px; margin-top: 2px"><span class="v">{v}</span><span style="font-size: 12px; color: {c}">{d}</span></div></div>' for l, v, d, c in items) + '</div>'


# ================================================================ LEADS
STAGES = [('New', '#3987e5'), ('Talking', '#6250d6'), ('Quote sent', '#eda100'), ('Booking', '#1baf7a'), ('Won', 'var(--good)')]
LEADS = [  # stage, initial, name, channel, interest, value, next step, due, temp, waiting
    ('New', 'A', 'Arjun Mehta', 'ig', 'Group session · 8 people', 9600, 'Reply with group price', 'Waiting 9 min', 'Hot', True),
    ('New', 'K', 'Kabir Rao', 'go', 'First visit', 800, 'Vegham asked for a time', 'Today', 'Warm', False),
    ('New', 'V', 'Vikram Singh', 'web', 'Assessment', 1200, 'Vegham replied', 'Today', 'Warm', False),
    ('Talking', 'P', 'Pooja N', 'wa', 'Monthly package', 6000, 'Follow up', 'Tomorrow', 'Warm', False),
    ('Talking', 'D', 'Dev Kumar', 'ms', 'Team group · 20 people', 24000, 'Wants a call', 'Today 5 PM', 'Hot', True),
    ('Talking', 'M', 'Meera Iyer', 'wa', 'Home visit', 2000, 'Asked about Sunday', 'Tomorrow', 'Cold', False),
    ('Quote sent', 'T', 'Team Lumen', 'wa', '10 sessions · Q-104', 18000, 'Viewed quote twice', 'Nudge Thu', 'Hot', False),
    ('Quote sent', 'S', 'Sana A', 'ig', 'Gift voucher', 2400, 'Payment link open', 'Expires Fri', 'Warm', False),
    ('Booking', 'K', 'Kavya Nair', 'wa', 'Group session', 3600, 'Booked Sat 9 AM', 'Deposit due', 'Warm', False),
    ('Won', 'R', 'Rahul V', 'wa', 'Monthly package', 6000, 'Paid ₹6,000', '2 Nov', '', False),
    ('Won', 'N', 'Neha Kapoor', 'go', 'Assessment', 1200, 'Paid ₹1,200', '1 Nov', '', False)]
TEMP = {'Hot': 'bad', 'Warm': 'warn', 'Cold': 'mut'}


def lead_card(l, selected=False):
    st, a, n, ch, it, v, nx, due, tp, wait = l
    tag = bd(tp, TEMP[tp]) if tp else ''
    nxt = f'<span style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: {"var(--warn)" if wait else "var(--mut)"}">{I("clock", 13)}{nx} · {due}</span>'
    return f'''<div class="lc{" pick" if selected else ""}"><div style="display: flex; gap: 10px; align-items: center">{avch(a, ch, 30)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b><span style="display: block; font-size: 12px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{it}</span></span></div>
      <div style="display: flex; align-items: center; justify-content: space-between"><b style="font-weight: 600; font-size: 14px">{inr(v)}</b>{tag}</div>{nxt}</div>'''


def leads_board():
    cols = ''
    for s, c in STAGES:
        items = [l for l in LEADS if l[0] == s]
        tot = sum(l[5] for l in items)
        cards = ''.join(lead_card(l, l[2] == 'Arjun Mehta') for l in items)
        cols += f'<div class="kc"><div class="kh"><span class="dot" style="background: {c}"></span><b style="font-weight: 600">{s}</b><span style="color: var(--mut2)">{len(items)}</span><span style="margin-left: auto; color: var(--mut); font-size: 12.5px">{inr(tot)}</span></div>{cards}<span style="display: flex; align-items: center; gap: 6px; padding: 6px 4px; font-size: 12.5px; color: var(--mut)">{I("plus", 14)}Add lead</span></div>'
    filters = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All open", True, "11")}{chip("Needs a reply", False, "2")}{chip("Hot", False, "3")}{chip("Mine", False, "6")}<span style="width: 1px; height: 20px; background: var(--line); margin: 0 4px"></span>{sel("Source")}{sel("Owner")}{sel("Value")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">Lost this month: 4 · <span style="text-decoration: underline">view</span></span></div>'
    right = seg([I('columns', 15) + ' Board', I('list', 15) + ' List']) + SRCH + pb('New lead', 'plus')
    st = strip([('Open pipeline', '₹67,600', '11 leads', 'var(--mut)'), ('Won this month', '₹41,200', '↑ 22%', 'var(--good)'), ('Win rate', '38%', '↑ 4 pts', 'var(--good)'),
                ('First reply', '6 sec', 'by Vegham', 'var(--mut)'), ('Waiting on you', '2', 'oldest 9 min', 'var(--warn)')])
    main = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head("Leads", "11 open", right)}{st}{filters}
      <div style="flex: 1; overflow: hidden; padding: 16px 24px; display: flex; gap: 10px; align-items: flex-start">{cols}</div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


def lead_panel():
    steps = ''.join(f'<span style="flex: 1; height: 4px; border-radius: 2px; background: {"var(--ink)" if i == 0 else "var(--soft)"}"></span>' for i in range(5))
    tl = [('Vegham replied with the group price', '₹1,200 per person, and offered Saturday 10 AM or 4 PM', '9 min ago', 'var(--s1)'),
          ('Arjun asked about a group of 8', '“We’re 8 friends. What would the price be for all of us? Any discount?”', '9 min ago', 'var(--mut2)'),
          ('Lead created from Instagram', 'Replied to your Diwali post', '11 min ago', 'var(--mut2)')]
    tlh = ''.join(f'<div class="tl"><span class="dot" style="background: {c}; margin-top: 4px"></span><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="color: var(--mut)">{d}</span></span><span style="color: var(--mut2); white-space: nowrap">{w}</span></div>' for t, d, w, c in tl)
    return f'''<div class="pn">
      <div style="padding: 16px 20px 14px"><div style="display: flex; gap: 12px; align-items: center">{avch("A", "ig", 42)}<span style="flex: 1"><b style="display: block; font-size: 16px; font-weight: 600">Arjun Mehta</b><span style="font-size: 12.5px; color: var(--mut)">Instagram · @arjun.m · first contact today</span></span><span class="ibtn" style="width: 28px; height: 28px">{I("x2", 15)}</span></div>
        <div style="display: flex; gap: 4px; margin-top: 14px">{steps}</div><div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 11.5px; color: var(--mut2)"><span style="color: var(--text); font-weight: 500">New</span><span>Talking</span><span>Quote</span><span>Booking</span><span>Won</span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">{pb("Send quote", "doc")}{ob("Open chat", "msg")}{ob("Book a visit", "cal")}{ob("Call", "phone")}</div></div>
      <div class="ps"><span class="pt">VEGHAM’S NOTES</span><div style="padding: 12px 14px; border-radius: 12px; background: var(--soft2); font-size: 13px; line-height: 1.55">Wants a <b style="font-weight: 600">group session for 8</b> on a Saturday. Price-sensitive: asked twice about a discount. Likely to book this week if offered a group rate. <span style="color: var(--mut)">Suggested: offer 10% off for 8+ people.</span></div></div>
      <div class="ps"><span class="pt">DETAILS</span><div class="kv2"><span>Value</span><span>₹9,600 · 8 × ₹1,200</span></div><div class="kv2"><span>Wants</span><span>Saturday, any time</span></div><div class="kv2"><span>Owner</span><span>Vinay</span></div><div class="kv2"><span>Source</span><span>Instagram · Diwali post</span></div><div class="kv2"><span>Phone</span><span style="color: var(--mut)">Not shared yet</span></div></div>
      <div class="ps"><div style="display: flex; justify-content: space-between"><span class="pt">NEXT STEP</span><span style="font-size: 12px; color: var(--warn)">Due now</span></div><div style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px"><span style="width: 16px; height: 16px; border-radius: 5px; border: 1.5px solid var(--mut2); flex: none"></span>Reply with the group discount<span style="margin-left: auto; color: var(--mut)">Vinay</span></div></div>
      <div class="ps" style="flex: 1"><span class="pt">ACTIVITY</span>{tlh}</div></div>'''


def leads_list():
    rows = ''
    sc = dict(STAGES)
    for l in LEADS:
        st, a, n, ch, it, v, nx, due, tp, wait = l
        rows += f'''<tr class="{"pick" if n == "Arjun Mehta" else ""}"><td><span style="display: flex; align-items: center; gap: 10px">{avch(a, ch, 28)}<span><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{it}</span></span></span></td>
          <td><span style="display: inline-flex; align-items: center; gap: 6px"><span class="dot" style="background: {sc[st]}"></span>{st}</span></td><td class="r"><b style="font-weight: 500">{inr(v)}</b></td>
          <td>{bd(tp, TEMP[tp]) if tp else '<span style="color: var(--mut2)">—</span>'}</td><td style="color: {"var(--warn)" if wait else "var(--mut)"}">{nx} · {due}</td></tr>'''
    table = f'<table class="tbl2"><tr><th>Lead</th><th>Stage</th><th class="r">Value</th><th>Interest</th><th>Next step</th></tr>{rows}</table>'
    filters = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All open", True, "11")}{chip("Needs a reply", False, "2")}{chip("Hot", False, "3")}{chip("Mine", False, "6")}<span style="flex: 1"></span>{sel("Sort: next step")}</div>'
    right = seg([I('columns', 15) + ' Board', I('list', 15) + ' List'], 1) + SRCH + pb('New lead', 'plus')
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head("Leads", "11 open", right)}{filters}<div style="flex: 1; overflow: hidden">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{lead_panel()}</div>'


# ================================================================ REVIEWS
REVS = [('needs', 'S', 'Shalini P', 'go', 2, 'Had to wait 20 minutes past my slot.', '3 days ago', 'Indiranagar'),
        ('needs', 'A', 'Ananya Rao', 'go', 5, 'Booked on WhatsApp late at night and got a slot the next morning. So easy.', '2 hours ago', 'Koramangala'),
        ('private', 'M', 'Mohan K', 'wa', 3, 'Session was good but the room was cold.', 'Yesterday', 'Indiranagar'),
        ('done', 'K', 'Karthik M', 'go', 4, 'Good service. Parking was a bit hard to find.', 'Yesterday', 'Indiranagar'),
        ('done', 'D', 'Divya Menon', 'go', 5, 'Friendly team, always on time. Love the reminders.', '3 days ago', 'Koramangala'),
        ('done', 'R', 'Rahul Verma', 'fb', 5, 'Easy to book, great group session.', '1 week ago', 'Indiranagar')]


def reviews():
    FB = lambda s: f'<svg width="{s}" height="{s}" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1877F2"></circle><path d="M13.5 19v-6h2l.3-2.4h-2.3V9.1c0-.7.2-1.1 1.2-1.1h1.2V5.9a16 16 0 0 0-1.8-.1c-1.8 0-3 1.1-3 3.1v1.7H9V13h2v6z" fill="#fff"></path></svg>'
    src = {'go': GO, 'wa': WA, 'fb': FB}
    grp = {'needs': 'Needs a reply', 'private': 'Private feedback', 'done': 'Replied'}
    lst, last = '', None
    for g, a, n, s, r, t, w, loc in REVS:
        if g != last:
            lst += f'<span style="display: block; padding: 14px 20px 6px; font-size: 11.5px; color: var(--mut2)">{grp[g]}{" · only you can see these" if g == "private" else ""}</span>'; last = g
        on = n == 'Shalini P'
        lst += f'''<div style="position: relative; margin: 1px 8px; padding: 12px 12px; border-radius: 12px; {"background: var(--soft)" if on else ""}"><div style="display: flex; gap: 10px">{cav(a, 32)}<span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; gap: 8px"><b style="font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 11.5px; color: var(--mut2)">{w}</span></span>
          <span style="display: flex; align-items: center; gap: 6px; margin-top: 1px">{STAR(r, 12)}{src[s](12)}<span style="font-size: 11.5px; color: var(--mut2)">{loc}</span></span><span style="display: block; margin-top: 4px; font-size: 12.5px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{t}</span></span></div></div>'''
    left = f'''<div style="width: 330px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div class="hd" style="padding: 0 12px 0 20px"><h1>Reviews</h1><span style="flex: 1"></span>{SRCH}<span class="ibtn">{I("filter", 17)}</span></div>
      <div style="display: flex; gap: 6px; padding: 12px 16px 4px; flex-wrap: wrap">{chip("All", True, "212")}{chip("Needs a reply", False, "2")}{chip("1–3 ★", False, "9")}{chip("Private", False, "4")}</div>{lst}</div>'''
    tones = ''.join(chip(t, i == 0) for i, t in enumerate(['Apologetic', 'Brief', 'Offer a call']))
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div class="hd"><span style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0">{cav("S", 34)}<span><b style="display: block; font-weight: 600; font-size: 14.5px">Shalini P</b><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut); white-space: nowrap">{GO(12)} Google · 3 days ago</span></span></span>{ob("Call her", "phone")}{ob("Mark done", "check")}{SEP}{BELL}</div>
      <div style="flex: 1; overflow: hidden; padding: 24px 32px; display: flex; flex-direction: column; gap: 16px">
        <div>{STAR(2, 18)}<p style="margin: 8px 0 0; font-size: 20px; line-height: 1.45; letter-spacing: -0.01em">“Had to wait 20 minutes past my slot. The session itself was fine, but I had to rush back to work.”</p>
          <div style="display: flex; gap: 8px; margin-top: 14px">{chip(I("cal", 13) + " Visit · Mon 3 Nov, 11:30 AM · Priya")}{chip(I("users", 13) + " Customer since 2024 · 4 visits")}{chip("Topic: wait time")}</div></div>
        <div style="padding: 12px 14px; border-radius: 12px; background: var(--warnbg); color: var(--warn); font-size: 13px">Vegham doesn’t post replies to 1–3 star reviews on its own. That morning the 10:00 visit ran 25 minutes over.</div>
        <div class="rc" style="padding: 16px 18px">
          <div style="display: flex; align-items: center; justify-content: space-between"><b style="font-size: 13px; font-weight: 600">Suggested reply</b><span style="display: flex; gap: 6px">{tones}</span></div>
          <p style="margin: 12px 0 0; font-size: 14px; line-height: 1.6">Hi Shalini, we’re sorry you had to wait. That isn’t the experience we want for you. The visit before yours ran late, and we’re adding a buffer between bookings so it doesn’t happen again. We’d love to make it up to you: your next session is on us.</p>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line)"><span style="font-size: 12px; color: var(--mut); white-space: nowrap">Posts publicly on Google</span><span style="flex: 1"></span>{ob("Edit")}<span class="ibtn" title="Also message her on WhatsApp">{I("msg", 17)}</span>{pb("Post reply", "reply")}</div></div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--mut)">{I("lock", 14)}Earlier: private feedback from Shalini after her August visit · 4 ★ · “All good”</div></div></div>'''
    dist = [(5, 82), (4, 12), (3, 4), (2, 1), (1, 1)]
    dh = ''.join(f'<div style="display: grid; grid-template-columns: 24px 1fr 32px; gap: 8px; align-items: center; font-size: 12px; padding: 2px 0"><span style="color: var(--mut)">{s}★</span><span style="height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span><span style="text-align: right; color: var(--mut)">{p}%</span></div>' for s, p in dist)
    topics = [('Easy booking', 41, True), ('Friendly team', 33, True), ('On time', 18, True), ('Wait time', 6, False), ('Parking', 5, False)]
    th = ''.join(f'<span class="chip2" style="height: 28px"><span class="dot" style="background: {"var(--good)" if p else "#d03b3b"}"></span>{t} <span style="color: var(--mut2)">{c}</span></span>' for t, c, p in topics)
    fun = [('Asked', 64), ('Opened', 48), ('Left a review', 22)]
    fh = ''.join(f'<div style="display: grid; grid-template-columns: 96px 1fr 30px; gap: 8px; align-items: center; font-size: 12.5px; padding: 3px 0"><span style="color: var(--mut)">{n}</span><span style="height: 8px; border-radius: 4px; background: var(--soft2)"><span style="display: block; width: {v / 64 * 100:.0f}%; height: 100%; border-radius: 4px; background: var(--s1)"></span></span><span style="text-align: right">{v}</span></div>' for n, v in fun)
    right = f'''<div class="pn" style="width: 340px">
      <div style="padding: 18px 20px"><span style="display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--mut)">{GO(13)} Google rating · all locations<span style="margin-left: auto">Replied to 98%</span></span>
        <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: 4px"><span><span class="num" style="font-size: 40px; line-height: 1">4.8</span> {STAR(5, 14)}<span style="display: block; margin-top: 4px; font-size: 12px; color: var(--mut)">212 reviews · +18 this month</span></span>{spark([4.6, 4.6, 4.65, 4.7, 4.7, 4.72, 4.75, 4.78, 4.8], "var(--s1)", 80, 30)}</div>
        <div style="margin-top: 12px">{dh}</div></div>
      <div class="ps"><span class="pt">BY LOCATION</span><div class="kv2"><span>Indiranagar</span><span>4.9 · 148 reviews</span></div><div class="kv2"><span>Koramangala</span><span>4.7 · 64 reviews</span></div></div>
      <div class="ps"><span class="pt">WHAT PEOPLE MENTION</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{th}</div></div>
      <div class="ps"><div style="display: flex; justify-content: space-between"><span class="pt">ASKING FOR REVIEWS · THIS MONTH</span><span style="font-size: 12px; color: var(--mut)">34%</span></div>{fh}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; font-size: 13px"><span>Ask 2 hours after a visit</span><span class="sw on"></span></div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 13px"><span>Alert me about 1–3★ ratings</span><span class="sw on"></span></div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 13px"><span>Reply to 4★ and 5★ on its own</span><span class="sw on"></span></div>
        <span style="display: block; margin-top: 10px; font-size: 12px; color: var(--mut); line-height: 1.5">Everyone gets the Google link, whatever they rate. Google doesn’t allow asking only happy customers.</span></div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{left}{center}{right}{SMP}</div>'


# ================================================================ CAMPAIGNS
CAMPS = [('Diwali offer · 15% off packages', 'Sent', 'good', 'Sent 1 Nov', 842, 96, 71, 17, 38, 45600, 1180),
         ('We miss you · lapsed 60 days', 'Automation', 'acc', 'Every Monday', 126, 97, 68, 21, 9, 10800, 176),
         ('Group sessions are back', 'Scheduled', 'warn', 'Sat 15 Nov, 10 AM', 410, None, None, None, None, None, 574),
         ('Monsoon check-in', 'Sent', 'good', 'Sent 12 Aug', 640, 95, 66, 12, 21, 25200, 960),
         ('New year packages', 'Draft', 'mut', 'Not scheduled', 0, None, None, None, None, None, None)]


def campaigns():
    pct = lambda v: '<span style="color: var(--mut2)">—</span>' if v is None else f'{v}%'
    rows = ''
    for n, s, k, w, a, dl, rd, rp, b, rev, fee in CAMPS:
        rows += f'''<tr class="{"pick" if n.startswith("Diwali") else ""}"><td><span style="display: flex; align-items: center; gap: 10px"><span style="width: 32px; height: 32px; border-radius: 10px; background: #FFFFFF; box-shadow: 0 0 0 1px var(--line); display: inline-flex; align-items: center; justify-content: center; flex: none">{WA(16)}</span><span><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{w}</span></span></span></td>
          <td>{bd(s, k)}</td><td class="r">{a if a else '<span style="color: var(--mut2)">—</span>'}</td><td class="r">{pct(rd)}</td><td class="r">{pct(rp)}</td><td class="r">{b if b is not None else '<span style="color: var(--mut2)">—</span>'}</td>
          <td class="r"><b style="font-weight: 500">{inr(rev) if rev else '<span style="color: var(--mut2); font-weight: 400">—</span>'}</b></td><td class="r" style="color: var(--mut)">{f"{rev // fee}×" if rev else ("est. ₹" + str(fee)) if fee else "—"}</td></tr>'''
    table = f'<table class="tbl2"><tr><th>Campaign</th><th>Status</th><th class="r">Sent to</th><th class="r">Read</th><th class="r">Replied</th><th class="r">Booked</th><th class="r">Revenue</th><th class="r">Return</th></tr>{rows}</table>'
    tabs = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All", True, "5")}{chip("Sent", False, "2")}{chip("Scheduled", False, "1")}{chip("Automations", False, "1")}{chip("Drafts", False, "1")}<span style="flex: 1"></span>{sel("Last 90 days")}</div>'
    ideas = [('58 customers haven’t booked in 60 days', 'A win-back offer usually brings back 1 in 8.', 'Create win-back'),
             ('Saturday 4 PM has 6 empty slots', 'Message people who booked Saturdays before.', 'Fill the slots'),
             ('22 people left a 5★ review this month', 'Ask them to refer a friend for ₹200 off.', 'Start referrals')]
    ih = ''.join(f'<div style="padding: 12px 14px; border-radius: 14px; background: var(--soft2); font-size: 13px; line-height: 1.5"><b style="display: block; font-weight: 600">{a}</b><span style="color: var(--mut)">{b}</span><span style="display: block; margin-top: 6px; font-weight: 500">{c} →</span></div>' for a, b, c in ideas)
    fun = [('Sent', 842, 100), ('Delivered', 808, 96), ('Read', 598, 71), ('Replied', 146, 17), ('Clicked', 92, 11), ('Booked', 38, 4.5)]
    fh = ''.join(f'<div style="display: grid; grid-template-columns: 72px 1fr 64px; gap: 10px; align-items: center; font-size: 12.5px; padding: 4px 0"><span style="color: var(--mut)">{n}</span><span style="height: 18px; border-radius: 5px; background: var(--soft2)"><span style="display: block; width: {max(p, 1.5)}%; height: 100%; border-radius: 5px; background: var(--s1)"></span></span><span style="text-align: right"><b style="font-weight: 500">{v}</b> <span style="color: var(--mut2)">{p:g}%</span></span></div>' for n, v, p in fun)
    panel = f'''<div class="pn" style="width: 380px">
      <div style="padding: 16px 20px"><div style="display: flex; align-items: center; justify-content: space-between"><b style="font-size: 15px; font-weight: 600">Diwali offer · 15% off packages</b><span class="ibtn" style="width: 28px; height: 28px">{I("x2", 15)}</span></div><span style="font-size: 12.5px; color: var(--mut)">Sent 1 Nov, 10:00 AM · Regulars and lapsed · marketing template</span>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 14px">{"".join(f'<div style="padding: 10px 12px; border-radius: 12px; background: var(--soft2)"><div class="num" style="font-size: 20px">{v}</div><span style="font-size: 11.5px; color: var(--mut)">{l}</span></div>' for v, l in [("₹45,600", "revenue"), ("38", "bookings"), ("38×", "return on fees")])}</div></div>
      <div class="ps"><span class="pt">HOW IT WENT</span>{fh}<span style="display: block; margin-top: 8px; font-size: 12px; color: var(--mut)">6 people opted out (0.7%). Replies went to the Inbox; Vegham booked 31 of the 38 visits.</span></div>
      <div class="ps"><span class="pt">COST</span><div class="kv2"><span>Meta fees</span><span>₹1,180 · ₹1.40 per message</span></div><div class="kv2"><span>Vegham</span><span>Included in Growth</span></div></div>
      <div class="ps"><span class="pt">FOLLOW UP WITH</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{chip("Read, didn’t reply", False, "452")}{chip("Didn’t read", False, "210")}{chip("Clicked, didn’t book", False, "54")}</div>
        <span style="display: block; margin-top: 10px; font-size: 12px; color: var(--mut)">34 not delivered · 22 hit Meta’s per-person limit for marketing messages</span></div>
      <div class="ps" style="display: flex; gap: 8px">{ob("Duplicate", "copy")}{ob("Export CSV", "download")}</div></div>'''
    right = SRCH + ob('Audiences', 'users2') + pb('New campaign', 'plus')
    st = strip([('Revenue · 90 days', '₹81,600', '', 'var(--good)'), ('Bookings', '68', '↑ 31%', 'var(--good)'), ('Read rate', '70%', '', 'var(--mut)'),
                ('Meta fees', '₹2,316', '35×', 'var(--good)'), ('Opt-outs', '0.6%', '', 'var(--mut)')])
    main = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head("Campaigns", "WhatsApp", right)}{st}{tabs}
      <div style="overflow: hidden">{table}</div>
      <div style="padding: 20px 24px"><b style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 10px">Ideas from Vegham</b><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px">{ih}</div></div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{main}{panel}{SMP}</div>'


def campaign_builder():
    steps = ''.join(f'<span class="step {k}"><b>{"✓" if k == "done" else i + 1}</b>{t}</span>' + ('' if i == 3 else '<span style="flex: 1; height: 1px; background: var(--line); min-width: 24px"></span>') for i, (t, k) in enumerate([('Audience', 'done'), ('Message', 'on'), ('When', ''), ('Review', '')]))
    conds = [('Last visit', 'more than', '60 days ago'), ('Opted in to offers', 'is', 'Yes'), ('Location', 'is', 'Any')]
    ch = ''.join(f'<div class="cond"><span style="color: var(--mut); width: 34px">{"Where" if i == 0 else "and"}</span>{sel(a)}{sel(b)}{sel(c)}<span style="flex: 1"></span><span class="ibtn" style="width: 26px; height: 26px">{I("x2", 14)}</span></div>' for i, (a, b, c) in enumerate(conds))
    tpls = [('winback_offer', 'Marketing', 'Approved', True), ('slot_open', 'Marketing', 'Approved', False), ('referral_200', 'Marketing', 'In review', False)]
    th = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 12px; border: 1px solid {"var(--text)" if on else "var(--line)"}"><span style="width: 16px; height: 16px; border-radius: 50%; border: {"5px solid var(--text)" if on else "1.5px solid var(--mut2)"}; flex: none"></span><span class="mono" style="flex: 1; font-family: ui-monospace, Menlo, monospace; font-size: 12.5px">{n}</span><span style="font-size: 12px; color: var(--mut)">{c}</span>{bd(s, "good" if s == "Approved" else "warn")}</div>' for n, c, s, on in tpls)
    vars_ = ''.join(f'<div style="display: grid; grid-template-columns: 52px 1fr; gap: 10px; align-items: center; font-size: 13px"><span class="mono" style="font-family: ui-monospace, Menlo, monospace; color: var(--mut)">{{{{{k}}}}}</span><span class="fld" style="height: 34px">{v}</span></div>' for k, v in [('1', 'First name'), ('2', '20% off your next visit'), ('3', 'Valid until 30 Nov')])
    phone = f'''<div style="width: 300px; border-radius: 36px; border: 8px solid #16182A; background: #EFE7DD; overflow: hidden; box-shadow: var(--shadow)">
      <div style="background: #075E54; color: #FFFFFF; padding: 12px 14px; display: flex; align-items: center; gap: 10px; font-size: 13px"><span style="width: 28px; height: 28px; border-radius: 50%; background: #16182A; display: inline-flex; align-items: center; justify-content: center; font-weight: 600">N</span><b style="font-weight: 600">Nila &amp; Co</b></div>
      <div style="padding: 14px 12px 22px"><div style="background: #FFFFFF; color: #16182A; border-radius: 10px; padding: 10px 12px; font-size: 13px; line-height: 1.5; box-shadow: 0 1px 1px rgba(0,0,0,.08)">Hi Riya, it’s been a while! We’d love to see you again. Here’s <b>20% off your next visit</b>. Valid until 30 Nov.</div>
        <div style="display: grid; gap: 4px; margin-top: 4px">{"".join(f'<span style="background: #FFFFFF; border-radius: 10px; padding: 9px; text-align: center; color: #0B7FB4; font-size: 13px; font-weight: 500">{b}</span>' for b in ["Book now", "Stop promotions"])}</div></div></div>'''
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 24px 32px; display: flex; flex-direction: column; gap: 18px">
      <div class="rc"><div style="display: flex; justify-content: space-between; align-items: center"><span><b class="rt2">1 · Audience</b><span class="rs">Saved as “Lapsed 60 days”</span></span><span style="font-size: 13px"><b style="font-weight: 600">58 people</b> <span style="color: var(--mut)">· 3 not opted in, left out</span></span></div>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 14px">{ch}<span style="font-size: 13px; font-weight: 500; padding: 4px 2px">+ Add condition</span></div></div>
      <div class="rc"><b class="rt2">2 · Message</b><span class="rs">WhatsApp needs an approved template for messages to people who haven’t written in 24 hours</span>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 14px"><div style="display: flex; flex-direction: column; gap: 8px">{th}<span style="font-size: 13px; font-weight: 500; padding: 4px 2px">+ New template</span></div><div style="display: flex; flex-direction: column; gap: 10px">{vars_}<span style="display: flex; align-items: center; justify-content: space-between; font-size: 13px; margin-top: 4px">Vegham handles the replies<span class="sw on"></span></span></div></div></div>
      <div class="rc" style="display: flex; align-items: center; gap: 12px; opacity: .7"><span style="flex: 1"><b class="rt2">3 · When</b><span class="rs">Suggested: Saturday 10 AM, when your messages are read most</span></span>{ob("Send a test to me", "send2")}</div>
      <div style="display: flex; align-items: center; gap: 10px">{ob("Back")}<span style="flex: 1"></span><span style="font-size: 13px; color: var(--mut)">Est. Meta fees <b style="color: var(--text); font-weight: 500">₹81</b> · 58 × ₹1.40</span>{pb("Next: when to send")}</div></div>'''
    rightc = f'''<div style="width: 380px; flex: none; border-left: 1px solid var(--line); background: var(--soft2); display: flex; flex-direction: column; align-items: center; padding: 24px 20px; gap: 14px">
      <span style="align-self: stretch; font-size: 12px; color: var(--mut)">Preview · for Riya Sharma</span>{phone}
      <span style="font-size: 12px; color: var(--mut); text-align: center">Marketing template · approved by Meta on 4 Nov</span></div>'''
    hd = f'<div class="hd"><span class="ibtn">{I("x2", 17)}</span><h1 style="font-size: 16px">New campaign · Win-back</h1><span style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 0 30px">{steps}</span>{ob("Save draft")}</div>'
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd}<div style="flex: 1; display: flex; min-height: 0">{left}{rightc}</div>{SMP}</div>'


if __name__ == '__main__':
    build('AppV2Leads.dc.html', 'App · Leads · board', active='Leads', main=leads_board(), notop=True, extra_css=ALL)
    build('AppV2LeadsList.dc.html', 'App · Leads · list and lead', active='Leads', main=leads_list(), notop=True, extra_css=ALL)
    build('AppV2Reviews.dc.html', 'App · Reviews', active='Reviews', main=reviews(), notop=True, extra_css=ALL)
    build('AppV2Campaigns.dc.html', 'App · Campaigns', active='Campaigns', main=campaigns(), notop=True, extra_css=ALL)
    build('AppV2CampaignNew.dc.html', 'App · New campaign', active='Campaigns', main=campaign_builder(), notop=True, extra_css=ALL)
    print('lrc ok')
