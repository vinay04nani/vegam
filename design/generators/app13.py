"""Calls and Contacts, second pass (Aircall, Quo, Retell call logs; Attio, HubSpot, Intercom contacts). Sample data."""
import os, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app12, app9
from app9 import I, IC, WA, IG, GLOBE, PH, GO, build, chip, sel, bd, ob, pb, cav, avch, BELL, SEP, STAR
from app3 import MS
from app11 import tg, row, card

for k, v in {
    'in': '<path d="M17 7L7 17M7 9v8h8"></path>', 'out2': '<path d="M7 17L17 7M9 7h8v8"></path>',
    'missed': '<path d="M3 7l6 6 4-4 8 8"></path><path d="M15 17h6v-6"></path>',
    'vm': '<circle cx="6" cy="12" r="3.5"></circle><circle cx="18" cy="12" r="3.5"></circle><path d="M6 15.5h12"></path>',
    'ban': '<circle cx="12" cy="12" r="9"></circle><path d="M5.6 5.6l12.8 12.8"></path>',
    'merge': '<path d="M6 3v6a6 6 0 0 0 6 6h6M6 21v-6M15 12l3 3-3 3"></path>',
    'tagi': '<path d="M3 12V4h8l10 10-8 8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>',
    'cake': '<path d="M4 21h16v-8H4zM4 16c2 1 4 1 6 0s4-1 6 0 3 1 4 0M12 13V9M12 6v.01"></path>',
}.items():
    IC.setdefault(k, v)
CSS = app12.CSS + '''
.oc{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;font-size:12px;font-weight:500;white-space:nowrap}
.cap{display:grid;grid-template-columns:120px 1fr;gap:8px;padding:8px 0;border-top:1px solid var(--line);font-size:13px}
.cap span:first-child{color:var(--mut)}
.bulk{display:flex;align-items:center;gap:8px;padding:10px 24px;background:var(--ink);color:var(--inkfg);font-size:13px}
.bulk .obtn{background:transparent;color:var(--inkfg);border-color:rgba(255,255,255,.25);height:30px;font-size:12.5px}
.tlx{display:flex;gap:14px;padding:12px 0;position:relative}
.tlx::before{content:"";position:absolute;left:15px;top:44px;bottom:-4px;width:1px;background:var(--line)}
.tlx:last-child::before{display:none}
'''
SMP = app11 = None
from app11 import SMP
OUT = {'Booked': ('good', 'var(--good)'), 'Answered': ('mut', 'var(--mut)'), 'Transferred': ('acc', 'var(--acc)'), 'Call back': ('warn', 'var(--warn)'),
       'Voicemail': ('mut', 'var(--mut)'), 'Spam blocked': ('mut', 'var(--mut2)'), 'Rescheduled': ('mut', 'var(--mut)'), 'Missed · texted': ('warn', 'var(--warn)')}
DIR = {'in': ('in', 'var(--mut)'), 'out': ('out2', 'var(--acc)'), 'missed': ('missed', '#E5484D'), 'vm': ('vm', 'var(--mut)')}

# ================================================================ CALLS LOG
CALLS = [('P', 'P. Iyer', 'in', 'Vegham → Vinay', 'Call back', 'Refund question · transfer not answered', '0:41', '4:55 PM', 'neg'),
         ('+', '+91 70•• ••88', 'missed', 'Missed', 'Missed · texted', 'Rang while busy · WhatsApp sent in 6 sec', '—', '3:10 PM', ''),
         ('+', '+91 98•• ••21', 'in', 'Vegham', 'Booked', 'Saturday hours · booked Sat 4:00 PM', '1:12', '6:12 PM', 'pos'),
         ('M', 'Meera Iyer', 'in', 'Vegham', 'Rescheduled', 'Moved her visit to Saturday 11 AM', '0:58', '5:40 PM', 'pos'),
         ('K', 'Kabir Rao', 'in', 'Vegham', 'Answered', 'Price of a first visit · price list sent', '0:37', '1:22 PM', 'neu'),
         ('V', 'Vinay → Arjun M', 'out', 'Vinay', 'Answered', 'Outgoing · group quote', '3:20', '12:05 PM', 'pos'),
         ('+', 'Unknown', 'vm', 'Vegham', 'Voicemail', 'After hours · asked for directions', '0:22', '11:05 AM', 'neu'),
         ('+', '+91 80•• ••00', 'in', 'Vegham', 'Spam blocked', 'Loan offer · ended in 8 sec', '0:08', '10:40 AM', ''),
         ('S', 'Sunita Das', 'in', 'Vegham → Priya', 'Transferred', 'Asked for Priya by name · connected', '2:46', '10:02 AM', 'pos'),
         ('D', 'Dev Kumar', 'in', 'Vegham', 'Booked', 'Team group of 20 · held Sat 10 AM for approval', '3:05', '9:31 AM', 'pos'),
         ('N', 'Neha Kapoor', 'in', 'Vegham', 'Booked', 'Follow-up visit · Thu 2:30 PM', '1:01', 'Yesterday', 'pos')]


def calls_log():
    st = app9.strip([('Calls', '270', 'last 30 days', 'var(--mut)'), ('Answered by Vegham', '85%', '229 calls', 'var(--good)'), ('Booked on a call', '62', '23%', 'var(--good)'),
                     ('Rang while busy', '41', 'all texted back', 'var(--mut)'), ('Average call', '2:14', '', 'var(--mut)')])
    sent = {'pos': ('var(--good)', 'Positive'), 'neu': ('var(--mut2)', 'Neutral'), 'neg': ('#E5484D', 'Unhappy'), '': ('transparent', '')}
    rows = ''
    for a, n, d, by, oc, s, dur, t, se in CALLS:
        ic, col = DIR[d]; k, c = OUT[oc]
        ai = 'Vegham' in by
        byh = f'<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 18px; height: 18px; border-radius: 50%; background: {"var(--ink)" if ai else "#3B6CF6"}; color: #FFF; font-size: 9.5px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center">{"V" if ai else by[0]}</span>{by}</span>' if by != 'Missed' else '<span style="color: var(--mut2)">No one</span>'
        rows += f'''<tr class="{"pick" if n.startswith("+91 98") else ""}"><td><span style="display: flex; align-items: center; gap: 10px"><span style="color: {col}">{I(ic, 15, 2)}</span>{cav(a, 28)}<span style="min-width: 0"><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut); display: block; max-width: 300px; overflow: hidden; text-overflow: ellipsis">{s}</span></span></span></td>
          <td>{byh}</td><td><span class="bd {k}">{oc}</span></td><td><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: {sent[se][0]}"></span>{sent[se][1]}</span></td><td class="r" style="color: var(--mut)">{dur}</td><td class="r" style="color: var(--mut)">{t}</td></tr>'''
    table = f'<table class="tbl2"><tr><th>Caller</th><th>Handled by</th><th>Outcome</th><th>Mood</th><th class="r">Length</th><th class="r">Time</th></tr>{rows}</table>'
    filt = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All", True, "270")}{chip("Needs a call back", False, "2")}{chip("Booked", False, "62")}{chip("Transferred", False, "34")}{chip("Voicemail", False, "15")}{chip("Spam", False, "41")}<span style="flex: 1"></span>{sel("All lines")}{sel("Last 30 days")}</div>'
    head = f'<div class="hd"><h1>Calls</h1><span style="font-size: 14px; color: var(--mut2)">080 4719 2200</span><span style="flex: 1"></span>{app9.seg(["List", "Split view"])}<label for="ov-pal" class="ibtn">{I("search", 17)}</label>{pb("Call someone", "phone")}{SEP}{BELL}</div>'
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head}{st}{filt}<div style="flex: 1; overflow: hidden">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


def call_detail():
    bars = ''.join(f'<span style="width: 3px; height: {5 + int(22 * abs(math.sin(i * 1.3) * math.cos(i * .37)))}px; border-radius: 2px; background: {"var(--ink)" if i < 30 else "var(--line)"}"></span>' for i in range(90))
    def turn(t, txt, us=False):
        lab = '<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 16px; height: 16px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700">V</span>Vegham · AI</span>' if us else 'Caller'
        return f'<div style="display: flex; gap: 14px; padding: 6px 0"><span style="width: 36px; flex: none; font-size: 12px; color: var(--mut2); padding-top: 20px">{t}</span><div style="flex: 1"><span style="font-size: 12px; color: var(--mut)">{lab}</span><div style="margin-top: 4px; padding: 9px 13px; border-radius: 14px; font-size: 14px; line-height: 1.5; background: {"rgba(59,108,246,.10)" if us else "var(--soft2)"}">{txt}</div></div></div>'
    tr = (turn('0:02', 'Hello, are you open this Saturday?') + turn('0:05', 'Hello! Yes, Saturday 9 AM to 2 PM. Would you like to book a visit?', True)
          + turn('0:14', 'Haan, Standard appointment kitne ka hai? Mera naam Rohan hai.') + turn('0:18', 'Rohan ji, Standard appointment ₹1,200 ka hai, 60 minute. Shaam 4 baje free hai, book kar doon?', True)
          + turn('0:44', 'Haan, kar do.'))
    caps = [('Name', 'Rohan <span style="color: var(--mut)">(said on the call)</span>'), ('Wanted', 'Standard appointment'), ('When', 'Saturday afternoon'), ('Booked', 'Sat 8 Nov, 4:00 PM · Vinay'), ('Language', 'Hindi, English'), ('Mood', '<span style="color: var(--good)">Positive</span>')]
    caph = ''.join(f'<div class="cap"><span>{k}</span><span>{v}</span></div>' for k, v in caps)
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
      <div class="hd"><span style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0">{cav("+", 34)}<span><b style="display: block; font-weight: 600; font-size: 15px">+91 98•• ••21 · Rohan</b><span style="font-size: 12px; color: var(--mut)">Incoming · today 6:12 PM · 1:12 · answered by Vegham</span></span></span>{ob("Call back", "phone")}<span class="ibtn" title="Message">{I("msg", 17)}</span>{ob("Save contact", "userplus")}{SEP}{BELL}</div>
      <div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1.4fr 1fr; gap: 18px; align-content: start">
        <div style="display: flex; flex-direction: column; gap: 14px">
          <div class="rc"><div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 12px; color: var(--mut)">Summary</span>{bd("Booked", "good")}</div><p style="margin: 8px 0 0; font-size: 15px; line-height: 1.6">Rohan asked about Saturday and the price of a Standard appointment. Vegham quoted <b style="font-weight: 600">₹1,200</b> and booked <b style="font-weight: 600">Sat 8 Nov, 4:00 PM</b> with Vinay. Confirmation sent on WhatsApp.</p></div>
          <div class="rc" style="padding: 12px 16px; display: flex; align-items: center; gap: 14px"><span style="width: 38px; height: 38px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 14)}</span><span style="flex: 1; min-width: 0; overflow: hidden; display: flex; align-items: center; gap: 2px; height: 30px">{bars}</span><span style="font-size: 12.5px; color: var(--mut)">0:23 / 1:12</span><span class="chip2" style="height: 26px">1×</span></div>
          <div><div style="display: flex; justify-content: space-between"><b style="font-size: 14px; font-weight: 600">Transcript</b><span style="font-size: 12.5px; color: var(--mut)">Show in English</span></div>{tr}</div></div>
        <div style="display: flex; flex-direction: column; gap: 14px">
          <div class="rc"><b class="rt2">What Vegham captured</b><span class="rs">Saved to the contact and the booking</span><div style="margin-top: 10px">{caph}</div></div>
          <div class="rc"><b class="rt2">Was this call handled well?</b><span class="rs">Your answer helps Vegham improve</span><div style="display: flex; gap: 8px; margin-top: 12px">{ob("Yes")}{ob("No, fix it")}{ob("Save as test", "flask")}</div></div>
          <div class="rc"><b class="rt2">Recording</b><div style="margin-top: 6px">{row("Kept for 90 days", "Caller heard the AI and recording notice", ob("Delete"), False)}</div></div></div></div></div>'''
    # compact list on the left
    lst = ''
    for a, n, d, by, oc, s, dur, t, se in CALLS[:8]:
        ic, col = DIR[d]; k, c = OUT[oc]
        on = n.startswith('+91 98')
        lst += f'<div style="display: flex; gap: 10px; padding: 10px 12px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if on else ""}">{cav(a, 32)}<span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between"><b style="font-weight: 500; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b><span style="font-size: 11px; color: var(--mut2)">{t}</span></span><span style="display: flex; align-items: center; gap: 6px; margin-top: 3px; font-size: 11.5px"><span style="color: {col}">{I(ic, 12, 2)}</span><span style="color: {c}; font-weight: 500">{oc}</span><span style="color: var(--mut2)">· {dur}</span></span></span></div>'
    left = f'<div style="width: 290px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column"><div class="hd" style="padding: 0 12px 0 20px"><h1>Calls</h1><span style="flex: 1"></span><span class="ibtn">{I("filter", 17)}</span></div><div style="display: flex; gap: 6px; padding: 10px 14px 6px">{chip("All", True)}{chip("Call back", False, "2")}{chip("Booked")}</div>{lst}</div>'
    return f'<div style="display: flex; height: 100%; position: relative">{left}{center}{SMP}</div>'


# ================================================================ CONTACTS LIST
PEOPLE = [('R', 'Riya Sharma', ['wa'], ['Regular', 'Evenings'], '2 weeks ago', 6, 7400, 'in', 'Instagram ad', True),
          ('A', 'Arjun Mehta', ['ig'], ['New'], '—', 0, 0, 'no', 'Instagram', False),
          ('M', 'Meera Iyer', ['wa', 'ph'], ['Regular'], '9 days ago', 9, 10800, 'in', 'Walk-in', True),
          ('K', 'Kabir Rao', ['web'], ['New'], '—', 0, 0, 'no', 'Website', False),
          ('S', 'Sunita Das', ['ms', 'wa'], ['VIP'], '3 days ago', 14, 19200, 'in', 'Referral', True),
          ('P', 'P. Iyer', ['ph'], ['Call back'], '3 months ago', 2, 1500, 'out', 'Google', False),
          ('N', 'Neha Kapoor', ['wa'], ['Regular'], '5 days ago', 5, 6000, 'in', 'Google', False),
          ('V', 'Vikram Singh', ['go'], ['New'], '—', 0, 0, 'no', 'Google', False),
          ('K', 'Kavya Nair', ['wa', 'ig'], ['Group'], '3 weeks ago', 3, 3600, 'in', 'Instagram', False),
          ('R', 'Rahul Verma', ['wa'], ['Lapsed'], '5 months ago', 4, 4800, 'in', 'Walk-in', False),
          ('D', 'Divya Menon', ['wa'], ['Regular'], '2 weeks ago', 8, 9600, 'in', 'Referral', False)]
CHF = {'wa': WA, 'ig': IG, 'ms': MS, 'web': GLOBE, 'ph': PH, 'go': GO}
CONS = {'in': ('good', 'Opted in'), 'out': ('bad', 'Opted out'), 'no': ('mut', 'Not asked')}


def contacts_list():
    rows = ''
    for a, n, ch, tags, last, v, spent, cons, src, picked in PEOPLE:
        k, ct = CONS[cons]
        rows += f'''<tr class="{"pick" if picked else ""}"><td style="width: 36px"><span style="width: 16px; height: 16px; border-radius: 5px; display: inline-flex; align-items: center; justify-content: center; {"background: var(--ink); color: var(--inkfg)" if picked else "border: 1.5px solid var(--mut2)"}">{I("check", 11, 3) if picked else ""}</span></td>
          <td><span style="display: flex; align-items: center; gap: 10px">{cav(a, 28)}<b style="font-weight: 500">{n}</b></span></td><td><span style="display: inline-flex; gap: 6px">{"".join(CHF[c](14) for c in ch)}</span></td>
          <td><span style="display: inline-flex; gap: 4px">{"".join(f'<span class="bd mut">{t}</span>' for t in tags)}</span></td><td>{bd(ct, k)}</td><td style="color: var(--mut)">{src}</td><td style="color: var(--mut)">{last}</td><td class="r">{v}</td><td class="r">{app9.inr(spent) if spent else '<span style="color: var(--mut2)">—</span>'}</td></tr>'''
    table = f'<table class="tbl2"><tr><th></th><th>Name</th><th>Channels</th><th>Tags</th><th>Messages</th><th>Source</th><th>Last visit</th><th class="r">Visits</th><th class="r">Spent</th></tr>{rows}</table>'
    views = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All", True, "1,284")}{chip("Regulars", False, "312")}{chip("New this month", False, "86")}{chip("Lapsed 60+ days", False, "58")}{chip("Not opted in", False, "203")}{chip("+ Save view")}<span style="flex: 1"></span>{sel("Columns")}</div>'
    dup = f'<div style="display: flex; align-items: center; gap: 12px; margin: 12px 24px 0; padding: 10px 14px; border-radius: 12px; background: var(--soft2); font-size: 13px">{I("merge", 16)}<span style="flex: 1"><b style="font-weight: 600">3 possible duplicates</b> <span style="color: var(--mut)">· same phone number on WhatsApp and calls</span></span><span style="font-weight: 500">Review →</span></div>'
    bulk = f'<div class="bulk"><b style="font-weight: 600">3 selected</b><span style="opacity: .6">·</span><span class="obtn">{I("tagi", 14)}Add tag</span><span class="obtn">{I("mega", 14) if "mega" in IC else ""}Add to campaign</span><span class="obtn">{I("merge", 14)}Merge</span><span class="obtn">{I("download", 14)}Export</span><span style="flex: 1"></span><span style="opacity: .7">Clear</span></div>'
    st = app9.strip([('Contacts', '1,284', '+86 this month', 'var(--good)'), ('Opted in to offers', '1,047', '82%', 'var(--mut)'), ('Came back', '72%', 'booked again', 'var(--mut)'), ('Average yearly spend', '₹8,900', '↑ 6%', 'var(--good)')])
    head = f'<div class="hd"><h1>Contacts</h1><span style="flex: 1"></span><label for="ov-pal" class="ibtn">{I("search", 17)}</label>{ob("Import", "upload")}{pb("New contact", "plus")}{SEP}{BELL}</div>'
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head}{st}{views}{dup}<div style="flex: 1; overflow: hidden; margin-top: 8px">{bulk}{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


# ================================================================ CONTACT PROFILE
def contact_profile():
    kv = lambda k, v: f'<div class="kv2"><span>{k}</span><span style="text-align: right">{v}</span></div>'
    left = f'''<div style="width: 330px; flex: none; border-right: 1px solid var(--line); overflow: hidden">
      <div style="padding: 22px 20px 16px"><div style="display: flex; align-items: center; gap: 14px">{cav("R", 56)}<span><b style="display: block; font-size: 18px; font-weight: 600">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">Customer since Mar 2026 · Indiranagar</span></span></div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px"><span class="bd mut">Regular</span><span class="bd mut">Evenings</span><span class="bd mut">+ Tag</span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 14px">{ob("Message", "msg")}{ob("Call", "phone")}{ob("Book", "cal")}</div></div>
      <div class="ps"><span class="pt">CONTACT</span>{kv("Phone", "+91 98765 11223")}{kv("WhatsApp", "Same number")}{kv("Email", "riya.s@gmail.com")}{kv("Language", "English, Hindi")}{kv("Birthday", "14 Dec")}</div>
      <div class="ps"><span class="pt">CONSENT</span>{kv("Offers", '<span style="color: var(--good)">Opted in</span>')}<span style="display: block; font-size: 12px; color: var(--mut); line-height: 1.5">Tapped “Yes, send me offers” on WhatsApp · 12 Mar 2026, 7:42 PM</span>{kv("Call recording", "Heard notice · 3 calls")}</div>
      <div class="ps"><span class="pt">DETAILS</span>{kv("Source", "Instagram ad")}{kv("Prefers", "Vinay · evenings")}{kv("Owner", "Vinay")}<span style="display: block; margin-top: 6px; font-size: 12.5px; font-weight: 500">+ Add field</span></div></div>'''
    ev = [('cal', 'var(--s1)', 'Booked Standard · Fri 7 Nov, 6:30 PM', 'Booked by Vegham on WhatsApp · with Vinay', 'Today 6:04 PM'),
          ('wallet', 'var(--good)', 'Paid ₹1,200 by UPI', 'Payment link · Stripe', 'Today 6:07 PM'),
          ('msg', 'var(--mut)', 'WhatsApp conversation · 6 messages', '“Hi! Anything free tomorrow evening?”', 'Today 6:02 PM'),
          ('note', '#E0A100', 'Note from Priya', 'Prefers evenings. Likes reminders the morning of.', '24 Oct'),
          ('cal', 'var(--mut)', 'Visit done · Standard', 'With Vinay · 60 min · rated 5★', '24 Oct'),
          ('phone', 'var(--mut)', 'Call · 0:48', 'Asked to move her visit · Vegham moved it to 24 Oct', '20 Oct'),
          ('star', '#F5A524', 'Left a 5★ Google review', '“Easy to book, always on time.”', '14 Sep')]
    IC.setdefault('star', '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"></path>')
    tl = ''.join(f'<div class="tlx"><span style="width: 32px; height: 32px; border-radius: 50%; background: var(--soft2); color: {c}; display: inline-flex; align-items: center; justify-content: center; flex: none; position: relative; z-index: 1">{I(ic, 15)}</span><span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; gap: 10px"><b style="font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12px; color: var(--mut2); white-space: nowrap">{w}</span></span><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div>' for ic, c, t, d, w in ev)
    center = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 18px 28px">
      <div style="display: flex; gap: 6px; margin-bottom: 8px">{chip("Everything", True)}{chip("Bookings", False, "7")}{chip("Messages", False, "12")}{chip("Calls", False, "3")}{chip("Payments", False, "6")}{chip("Notes", False, "2")}</div>
      <div class="fld" style="height: 44px; margin: 10px 0 6px; color: var(--mut2); border-radius: 12px">Write a note for your team… type @ to mention</div>{tl}</div>'''
    stat = lambda v, l: f'<div style="padding: 12px 14px; border-radius: 14px; background: var(--soft2)"><div class="num" style="font-size: 20px">{v}</div><span style="font-size: 12px; color: var(--mut)">{l}</span></div>'
    right = f'''<div style="width: 320px; flex: none; border-left: 1px solid var(--line); overflow: hidden">
      <div style="padding: 18px 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{stat("6", "visits")}{stat("₹7,400", "spent")}{stat("17 days", "between visits")}{stat("0", "no-shows")}</div>
      <div class="ps"><span class="pt">NEXT VISIT</span><div class="card" style="padding: 12px 14px; border-radius: 12px"><div style="display: flex; justify-content: space-between"><b style="font-weight: 600; font-size: 13.5px">Fri 7 Nov · 6:30 PM</b>{bd("Paid", "good")}</div><span style="font-size: 12.5px; color: var(--mut)">Standard · with Vinay · reminder 9 AM</span></div></div>
      <div class="ps"><span class="pt">PACKAGE</span><div style="display: flex; justify-content: space-between; font-size: 13px"><b style="font-weight: 500">10-visit pack</b><span style="color: var(--mut)">4 of 10 left</span></div><div style="margin-top: 8px; height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: 60%; height: 100%; border-radius: 3px; background: var(--s1)"></span></div><span style="display: block; margin-top: 6px; font-size: 12px; color: var(--mut)">Expires 30 Mar 2027</span></div>
      <div class="ps"><span class="pt">VEGHAM’S SUMMARY</span><span style="font-size: 13px; line-height: 1.55">Books every 2–3 weeks, always evenings with Vinay. Pays by UPI right away. Has never cancelled.</span></div>
      <div class="ps"><span class="pt">CAMPAIGNS</span><div class="kv2"><span>Diwali offer</span><span>Read · didn’t book</span></div><div class="kv2"><span>Monsoon check-in</span><span>Booked</span></div></div></div>'''
    head = f'''<div class="hd"><span style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--mut); flex: 1">Contacts {I("chevr", 13)}<span style="color: var(--text); font-weight: 500">Riya Sharma</span></span><span class="ibtn" title="Previous">{I("chevl", 17)}</span><span class="ibtn" title="Next">{I("chevr", 17)}</span><span class="ibtn" title="More">{I("dots", 17)}</span>{SEP}{BELL}</div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{head}<div style="flex: 1; display: flex; min-height: 0">{left}{center}{right}</div>{SMP}</div>'


def merge_modal():
    base = contacts_list()
    fields = [('Name', 'Meera Iyer', 'Meera I.', 0), ('Phone', '+91 98450 33221', '+91 98450 33221', 0), ('Email', '—', 'meera.iyer@outlook.com', 1), ('Channels', 'WhatsApp', 'Phone calls', 2),
              ('Tags', 'Regular', 'Follow-up', 2), ('Visits', '9', '1', 2), ('Consent', 'Opted in · 2 Feb', 'Not asked', 0)]
    radio = lambda on: f'<span style="width: 16px; height: 16px; border-radius: 50%; flex: none; border: {"5px solid var(--text)" if on else "1.5px solid var(--mut2)"}"></span>'
    fh = ''.join(f'<div style="display: grid; grid-template-columns: 90px 1fr 1fr; gap: 10px; align-items: center; padding: 10px 0; border-top: 1px solid var(--line); font-size: 13px"><span style="color: var(--mut)">{k}</span>' + (
        f'<span style="grid-column: span 2; display: flex; align-items: center; gap: 8px"><span style="color: var(--good)">{I("check", 14, 2.4)}</span>Both kept: {a if k == "Channels" else a + ", " + b if k == "Tags" else "10 visits"}{" + " + b if k == "Channels" else ""}</span>' if w == 2 else
        f'<span style="display: flex; align-items: center; gap: 8px">{radio(w == 0)}{a}</span><span style="display: flex; align-items: center; gap: 8px">{radio(w == 1)}{b}</span>') + '</div>' for k, a, b, w in fields)
    modal = f'''<div class="scrim2"></div><div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 620px; z-index: 31; border-radius: 22px; background: var(--pop); box-shadow: var(--shadow); padding: 24px">
      <div style="display: flex; justify-content: space-between"><span><b style="display: block; font-size: 18px; font-weight: 600">Merge 2 contacts</b><span style="font-size: 13px; color: var(--mut)">Same phone number. Pick what to keep; everything else is combined.</span></span><span class="ibtn">{I("x2", 17)}</span></div>
      <div style="display: grid; grid-template-columns: 90px 1fr 1fr; gap: 10px; margin-top: 16px; font-size: 12px; color: var(--mut)"><span></span><span style="display: flex; align-items: center; gap: 8px">{cav("M", 22)}From WhatsApp</span><span style="display: flex; align-items: center; gap: 8px">{cav("M", 22)}From a call</span></div>
      <div style="margin-top: 8px">{fh}</div>
      <div style="margin-top: 10px; padding: 10px 12px; border-radius: 12px; background: var(--soft2); font-size: 12.5px; color: var(--mut)">All conversations, calls, bookings and payments move to one timeline. You can undo this for 30 days.</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 18px"><span style="font-size: 12.5px; color: var(--mut)">1 of 3 duplicates</span><span style="display: flex; gap: 8px">{ob("Not the same person")}{pb("Merge")}</span></div></div>'''
    return base.replace(SMP, modal + SMP, 1)


if __name__ == '__main__':
    IC.setdefault('chevl', '<path d="M15 6l-6 6 6 6"></path>')
    build('AppV2Calls.dc.html', 'App · Calls · log', active='Calls', main=calls_log(), notop=True, extra_css=CSS)
    build('AppV2CallDetail.dc.html', 'App · Calls · one call', active='Calls', main=call_detail(), notop=True, extra_css=CSS, collapsed=True)
    build('AppV2Contacts.dc.html', 'App · Contacts', active='Contacts', main=contacts_list(), notop=True, extra_css=CSS)
    build('AppV2ContactProfile.dc.html', 'App · Contacts · profile', active='Contacts', main=contact_profile(), notop=True, extra_css=CSS, collapsed=True)
    build('AppV2ContactMerge.dc.html', 'App · Contacts · merge duplicates', active='Contacts', main=merge_modal(), notop=True, extra_css=CSS)
    print('calls+contacts ok')
