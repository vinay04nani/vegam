"""AI agents section: overview, chat, voice, knowledge, rules and permissions, test lab, improve, publish. Sample data."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app9, app10
from app9 import I, IC, WA, IG, GLOBE, PH, GO, build, ALL, chip, sel, bd, ob, pb, cav, avch, BELL, SEP, STAR
from app3 import MS

for k, v in {
    'play': '<path d="M8 5v14l11-7z"></path>',
    'mic': '<rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>',
    'book': '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path><path d="M19 19v2H6"></path>',
    'shield': '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>',
    'flask': '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3"></path><path d="M7 15h10"></path>',
    'trend': '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"></path>',
    'history': '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><path d="M3 3v5h5M12 7v5l3 2"></path>',
    'thumbdown': '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H6a2 2 0 0 0-2 1.7l-1.4 9A2 2 0 0 0 4.6 15z"></path><path d="M17 2h3v11h-3"></path>',
    'outcall': '<path d="M15 3h6v6M21 3l-7 7"></path><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>',
    'person': '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    'refresh': '<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"></path>',
    'upload': '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"></path>',
    'doc': '<path d="M6 3h9l4 4v14H6z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path>',
}.items():
    IC.setdefault(k, v)

CSS = ALL + '''
.an{display:flex;align-items:center;gap:10px;height:34px;padding:0 10px;border-radius:9px;font-size:13.5px;color:var(--mut);white-space:nowrap}
.an.on{background:var(--soft);color:var(--text);font-weight:500}
.ag{display:block;padding:14px 10px 4px;font-size:11.5px;color:var(--mut2)}
.tabs3{display:flex;gap:22px;padding:0 28px;border-bottom:1px solid var(--line);font-size:13.5px}
.tabs3 span{height:42px;display:inline-flex;align-items:center;color:var(--mut)}
.tabs3 span.on{border-bottom:2px solid var(--text);color:var(--text);font-weight:500}
.perm{display:inline-flex;padding:3px;border-radius:9px;background:var(--soft2);gap:2px}
.perm span{height:28px;display:inline-flex;align-items:center;padding:0 11px;border-radius:7px;font-size:12.5px;color:var(--mut);white-space:nowrap}
.perm span.on{background:var(--pop);color:var(--text);box-shadow:0 1px 2px rgba(0,0,0,.12);font-weight:500}
.perm span.on.g{color:var(--good)}.perm span.on.w{color:var(--warn)}.perm span.on.r{color:#E5484D}
.fstep{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;border-radius:14px;border:1px solid var(--line);background:var(--bg);font-size:12.5px;text-align:center;min-width:0}
.pass{color:var(--good)}.fail{color:#E5484D}
.scrim2{position:absolute;inset:0;background:var(--scrim);z-index:30}
'''
SMP = '<span class="smp" style="position: absolute; right: 18px; bottom: 10px">Sample data</span>'
tg = lambda on=True: f'<span class="sw{" on" if on else ""}"></span>'


def subnav(active):
    item = lambda key, ic, t, extra='': f'<span class="an{" on" if key == active else ""}">{I(ic, 16)}{t}{extra}</span>'
    dot = lambda c: f'<span style="margin-left: auto; width: 7px; height: 7px; border-radius: 50%; background: {c}"></span>'
    return f'''<div style="width: 232px; flex: none; border-right: 1px solid var(--line); padding: 14px 10px; display: flex; flex-direction: column; background: var(--side)">
      <div style="padding: 6px 10px 10px"><b style="font-size: 17px; font-weight: 600">AI agents</b></div>
      {item('overview', 'grid', 'Overview')}
      <span class="ag">Agents</span>
      {item('chat', 'msg', 'Chat receptionist', dot('var(--good)'))}{item('voice', 'phone', 'Voice receptionist', dot('var(--good)'))}{item('owner', 'person', 'Owner’s assistant', dot('var(--good)'))}
      {item('out', 'outcall', 'Outbound caller', '<span style="margin-left: auto; font-size: 11px; color: var(--mut2)">Soon</span>')}
      <span class="ag">Shared by all agents</span>
      {item('know', 'book', 'Knowledge', '<span style="margin-left: auto; font-size: 11px; color: var(--warn)">3 gaps</span>')}{item('rules', 'shield', 'Rules and permissions')}
      <span class="ag">Quality</span>
      {item('test', 'flask', 'Test lab', '<span style="margin-left: auto; font-size: 11px; color: #E5484D">1 failing</span>')}{item('improve', 'trend', 'Improve')}{item('hist', 'history', 'History')}
      <div style="margin-top: auto; padding: 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--bg); font-size: 12px; color: var(--mut); line-height: 1.5">Reminders, follow-ups and review requests are <b style="color: var(--text); font-weight: 500">Automations</b>, in Business settings.</div></div>'''


def head(title, sub='', ok=False):
    return f'''<div class="hd" style="padding-left: 28px"><span style="flex: 1; min-width: 0"><b style="display: block; font-size: 17px; font-weight: 600">{title}</b>{f'<span style="font-size: 12.5px; color: var(--mut)">{sub}</span>' if sub else ''}</span>
      <span style="display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--mut); margin-right: 4px"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--warn)"></span>3 unpublished changes · {"<span style=\"color: var(--good)\">12 of 12 tests pass</span>" if ok else "<span style=\"color: #E5484D\">11 of 12 tests pass</span>"}</span>{ob("Discard")}{pb("Review and publish")}{SEP}{BELL}</div>'''


def page(active, title, sub, body, overlay='', ok=False):
    return f'<div style="display: flex; height: 100%; position: relative">{subnav(active)}<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head(title, sub, ok)}{body}</div>{overlay}{SMP}</div>'


def card(title, sub, inner, right='', style=''):
    return f'<div class="rc" style="{style}"><div class="rh" style="margin-bottom: 12px"><span><b class="rt2">{title}</b>{f"<span class=rs>{sub}</span>" if sub else ""}</span>{right}</div>{inner}</div>'


def row(t, d, right, top=True):
    return f'<div style="display: flex; align-items: center; gap: 16px; padding: 12px 0; {"border-top: 1px solid var(--line)" if top else ""}"><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span>{right}</div>'


# ================================================================ 1 OVERVIEW
def overview():
    st = app9.strip([('Handled without you', '83%', '↑ 4 pts', 'var(--good)'), ('Handed to you', '14%', 'mostly complaints', 'var(--mut)'), ('Bookings by Vegham', '214', '69% of all', 'var(--mut)'),
                     ('Revenue', '₹2,56,800', '↑ 12%', 'var(--good)'), ('Customer rating', '4.7', 'of 5 · 311 ratings', 'var(--mut)')])
    def acard(ic, n, status, desc, stats, extra, soon=False):
        sts = ''.join(f'<span><span class="num" style="display: block; font-size: 20px">{v}</span><span style="font-size: 11.5px; color: var(--mut)">{l}</span></span>' for v, l in stats)
        return f'''<div class="rc" style="display: flex; flex-direction: column; gap: 14px; {"opacity: .75" if soon else ""}">
          <div style="display: flex; align-items: flex-start; gap: 12px"><span style="width: 40px; height: 40px; border-radius: 12px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 19)}</span>
            <span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 15px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{desc}</span></span>{status}</div>
          {f'<div style="display: flex; gap: 28px">{sts}</div>' if stats else ''}{extra}</div>'''
    chans = f'<span style="display: flex; gap: 6px; align-items: center; font-size: 12px; color: var(--mut)">{WA(15)}{IG(15)}{MS(15)}{GLOBE(15)}<span style="margin-left: 4px">4 channels · always on</span><span style="flex: 1"></span><span style="color: var(--text); font-weight: 500">Open →</span></span>'
    cards = (acard('msg', 'Chat receptionist', tg(), 'Answers messages, books visits, sends payment links', [('23', 'chats today'), ('9', 'bookings'), ('4 sec', 'first reply')], chans)
             + acard('phone', 'Voice receptionist', tg(), 'Answers your phone line in English and Hindi', [('7', 'calls today'), ('3', 'bookings'), ('1', 'transferred')],
                     f'<span style="display: flex; gap: 6px; align-items: center; font-size: 12px; color: var(--mut)">{PH(14)}080 4719 2200 · voice “Asha”, warm<span style="flex: 1"></span><span style="color: var(--text); font-weight: 500">Open →</span></span>'.replace('“Asha”, warm', 'Warm 1')))
    cards += (acard('person', 'Owner’s assistant', tg(), 'Your morning report, and answers your questions on WhatsApp', [('8:00 AM', 'daily report'), ('12', 'questions this week')],
                    '<div style="padding: 10px 12px; border-radius: 12px; background: var(--soft2); font-size: 12.5px"><span style="color: var(--mut)">You asked:</span> “How many bookings on Saturday?” <span style="color: var(--mut)">→ 14, 2 slots left</span></div>')
              + acard('outcall', 'Outbound caller', bd('Soon · Pro', 'acc'), 'Calls leads back and confirms tomorrow’s bookings', [],
                      f'<div style="display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--mut)"><span style="flex: 1">We’ll let you know when it’s ready to try.</span>{ob("Notify me")}</div>', True))
    att = [('#E5484D', 'A test fails after your change', 'Group of 8 asked for a discount: Vegham offered 15%, your rule says 10%.', 'Open test'),
           ('var(--warn)', '3 questions Vegham couldn’t answer', 'Student discounts, female staff, kids under 10.', 'Answer them'),
           ('var(--warn)', 'Website last read 32 days ago', 'Your prices page changed since then.', 'Read again'),
           ('var(--mut2)', '2 calls transferred with no answer', 'Vegham took a message both times.', 'See calls')]
    ah = ''.join(f'<div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line)"><span style="width: 8px; height: 8px; border-radius: 50%; background: {c}; margin-top: 6px; flex: none"></span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span><span style="font-size: 12.5px; font-weight: 500; white-space: nowrap">{a} →</span></div>' for c, t, d, a in att)
    reasons = [('Complaint', 21), ('Refund', 12), ('Asked for a person', 9), ('Not sure of the answer', 9), ('Over a limit', 5)]
    rh = ''.join(f'<div style="display: grid; grid-template-columns: 150px 1fr 26px; gap: 10px; align-items: center; font-size: 12.5px; padding: 4px 0"><span style="color: var(--mut)">{n}</span><span style="height: 8px; border-radius: 4px; background: var(--soft2)"><span style="display: block; width: {v / 21 * 100:.0f}%; height: 100%; border-radius: 4px; background: var(--s1)"></span></span><span style="text-align: right">{v}</span></div>' for n, v in reasons)
    body = f'''{st}<div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; align-content: start">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-content: start">{cards}</div>
      <div style="display: flex; flex-direction: column; gap: 14px">{card("Needs attention", "", ah, bd("4", "warn"))}{card("Why Vegham handed over", "Last 30 days · 56 conversations", rh)}</div></div>'''
    return page('overview', 'Overview', 'Last 30 days · all locations', body)


# ================================================================ 2 CHAT RECEPTIONIST
def tabs(items, on):
    return '<div class="tabs3">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(items)) + '</div>'


def chat_body():
    steps = [('Understand', 'What service, for how many, when'), ('Offer times', 'Two free slots that fit'), ('Confirm', 'Repeat the details back'), ('Deposit', 'Payment link if the service needs one'), ('Remind', 'Hands over to Automations')]
    fl = ''.join(f'<div class="fstep"><b style="width: 24px; height: 24px; border-radius: 50%; background: var(--ink); color: var(--inkfg); font-size: 12px; display: inline-flex; align-items: center; justify-content: center">{i + 1}</b><b style="font-weight: 600">{t}</b><span style="color: var(--mut); font-size: 12px">{d}</span></div>' for i, (t, d) in enumerate(steps))
    ho = [('Customer asks for a person', True), ('Complaint or a 1–3★ feeling', True), ('Refund or payment problem', True), ('Vegham isn’t sure of the answer', True), ('Booking is over a limit you set', True)]
    hoh = ''.join(row(t, '', tg(o), i > 0) for i, (t, o) in enumerate(ho))
    chans = [(WA(18), 'WhatsApp', '+91 98765 43210', True), (IG(18), 'Instagram', '@nilaandco', True), (MS(18), 'Messenger', 'Nila & Co', True), (GLOBE(18), 'Website chat', 'nilaandco.in', True)]
    ch = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 10px 0; {"border-top: 1px solid var(--line)" if i else ""}">{f}<span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{tg(o)}</div>' for i, (f, n, d, o) in enumerate(chans))
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 14px">
      {card("Greeting", "The first message to a new customer", '<div class="fl" style="height: auto; padding: 12px 14px; line-height: 1.55; display: block; border: 1px solid var(--line); border-radius: 12px; font-size: 13.5px">Hi! 👋 This is Nila &amp; Co. I can check free times, book you in and answer questions. What can I help with?</div><div style="display: flex; gap: 8px; margin-top: 10px">' + chip("Edited · unpublished") + chip("Reply in the customer’s language", True) + '</div>')}
      {card("How it books", "Vegham follows these steps for every booking", f'<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px">{fl}</div>')}
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">{card("Hand over to your team when", "Vegham tells the customer a person will reply", hoh)}{card("Channels", "Where this agent answers", ch)}</div></div>'''
    msg = lambda t, us: f'<div style="align-self: {"flex-end" if us else "flex-start"}; max-width: 82%; background: {"#D9FDD3" if us else "#FFFFFF"}; color: #16182A; padding: 8px 11px; border-radius: 10px; font-size: 13px; line-height: 1.45; box-shadow: 0 1px 1px rgba(0,0,0,.08)">{t}</div>'
    prev = f'''<div style="width: 340px; flex: none; border-left: 1px solid var(--line); background: var(--soft2); display: flex; flex-direction: column">
      <div style="padding: 14px 18px; display: flex; align-items: center; justify-content: space-between"><b style="font-size: 13.5px; font-weight: 600">Try it</b><span style="font-size: 12px; color: var(--mut)">Uses your draft</span></div>
      <div style="flex: 1; margin: 0 14px; border-radius: 16px; background: #EFE7DD; padding: 14px 12px; display: flex; flex-direction: column; gap: 8px; overflow: hidden">
        {msg("Hi, do you have anything Saturday morning for 2 people?", False)}{msg("Hi! 👋 This is Nila &amp; Co. Yes: Saturday 10:00 AM or 11:30 AM are free for 2. Which works?", True)}{msg("11:30 please", False)}{msg("Done ✓ Saturday 11:30 AM for 2. A ₹500 deposit holds it: pay.vegham.ai/nila/x7k", True)}</div>
      <div style="margin: 12px 14px 16px; display: flex; gap: 8px"><span class="fld" style="flex: 1; color: var(--mut2)">Type as a customer…</span>{ob("Save as test", "flask")}</div></div>'''
    return tabs(['Setup', 'Channels', 'Permissions', 'Test', 'History'], 0) + f'<div style="flex: 1; display: flex; min-height: 0">{left}{prev}</div>'


def chat():
    return page('chat', 'Chat receptionist', 'On · WhatsApp, Instagram, Messenger, website', chat_body())


# ================================================================ 3 VOICE RECEPTIONIST
def voice():
    voices = [('Warm 1', 'Female · calm, friendly', True), ('Warm 2', 'Male · relaxed', False), ('Bright', 'Female · upbeat', False)]
    vh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; border: 1px solid {"var(--text)" if on else "var(--line)"}"><span style="width: 34px; height: 34px; border-radius: 50%; background: {"var(--ink)" if on else "var(--soft2)"}; color: {"var(--inkfg)" if on else "var(--text)"}; display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 14)}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{bd("Selected", "good") if on else ""}</div>' for n, d, on in voices)
    langs = [('English', True), ('Hindi', True), ('Kannada', False), ('Tamil', False), ('Telugu', False), ('Malayalam', False), ('Marathi', False), ('Bengali', False)]
    lh = ''.join(chip(l, on) for l, on in langs)
    flow = [('phone', 'Answers', 'Within 1 ring'), ('msg', 'Understands', 'What the caller needs'), ('cal', 'Books', 'Or moves a visit'), ('outcall', 'Transfers', 'To your number, if asked'), ('note', 'Takes a message', 'If no one picks up')]
    fh = ''.join(f'<div class="fstep">{I(ic, 18)}<b style="font-weight: 600">{t}</b><span style="color: var(--mut); font-size: 12px">{d}</span></div>' for ic, t, d in flow)
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 14px">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">
        {card("Voice", "Press play to hear each one", f'<div style="display: flex; flex-direction: column; gap: 8px">{vh}</div>')}
        {card("Languages", "Vegham answers in the caller’s language", f'<div style="display: flex; flex-wrap: wrap; gap: 6px">{lh}</div>' + row("Switch language mid-call", "If the caller changes language", tg()) + row("Opening line", "“Namaste, Nila &amp; Co. How can I help?”", ob("Edit")))}</div>
      {card("What happens on a call", "", f'<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px">{fh}</div>')}
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">
        {card("Transfers", "", row("Transfer to", "Vinay · +91 98450 11220", sel("Vinay"), False) + row("When no one answers", "After 20 seconds", sel("Take a message")) + row("Outside opening hours", "", sel("Book or take a message")))}
        {card("Recording and disclosure", "", row("Record calls", "Kept 90 days, then deleted", tg(), False) + row("Notice at the start", "“This call may be recorded. You’re speaking with Nila &amp; Co’s AI assistant.”", tg()))}</div></div>'''
    turns = [('Vegham', 'Namaste, Nila &amp; Co. How can I help?'), ('You', 'Is there a slot tomorrow evening?'), ('Vegham', 'Yes, 6:30 PM with Vinay is free. Shall I book it in your name?'), ('You', 'Yes please'), ('Vegham', 'Booked. I’ll send the details on WhatsApp.')]
    th = ''.join(f'<div style="font-size: 12.5px; line-height: 1.5"><b style="font-weight: 600; color: {"var(--s1)" if w == "Vegham" else "var(--text)"}">{w}</b> <span style="color: var(--mut2)">0:{i * 6:02d}</span><br>{t}</div>' for i, (w, t) in enumerate(turns))
    bars = ''.join(f'<span style="width: 3px; height: {6 + (i * 37 % 22)}px; border-radius: 2px; background: var(--mut2)"></span>' for i in range(46))
    right = f'''<div style="width: 340px; flex: none; border-left: 1px solid var(--line); padding: 18px; display: flex; flex-direction: column; gap: 14px; background: var(--soft2)">
      <b style="font-size: 13.5px; font-weight: 600">Test a call</b>
      <div class="rc" style="padding: 16px; text-align: center"><span style="width: 52px; height: 52px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center">{I("phone", 22)}</span><b style="display: block; margin-top: 10px; font-weight: 600">Call me now</b><span style="font-size: 12.5px; color: var(--mut)">Vegham calls +91 98450 11220 using your draft</span><div style="margin-top: 12px">{pb("Call me", "phone")}</div></div>
      <div class="rc" style="padding: 14px 16px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 13px; font-weight: 600">Last test · 0:31</b>{bd("Pass", "good")}</div><div style="display: flex; align-items: center; gap: 2px; height: 28px; margin: 10px 0">{bars}</div><div style="display: flex; flex-direction: column; gap: 8px">{th}</div></div></div>'''
    body = tabs(['Setup', 'Phone numbers', 'Permissions', 'Test', 'History'], 0) + f'<div style="flex: 1; display: flex; min-height: 0">{left}{right}</div>'
    return page('voice', 'Voice receptionist', 'On · 080 4719 2200 · English and Hindi', body)


# ================================================================ 4 KNOWLEDGE
def knowledge():
    srcs = [('tag', 'Services and prices', '12 services · synced from Business settings', 'Live', 'good', ''), ('globe', 'Website', 'nilaandco.in · 14 pages · read 32 days ago', 'Out of date', 'warn', 'Read again'),
            ('note', 'Questions and answers', '26 answers · 4 added this month', 'Live', 'good', ''), ('doc', 'Documents', 'Cancellation policy.pdf · Group terms.pdf', 'Live', 'good', ''), ('pin', 'Google Business Profile', 'Hours, address, photos', 'Live', 'good', '')]
    IC.setdefault('globe', '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>')
    sh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="width: 34px; height: 34px; border-radius: 10px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 16)}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{bd(s, k)}{ob(a, "refresh") if a else ""}</div>' for i, (ic, n, d, s, k, a) in enumerate(srcs))
    faqs = [('Is there parking?', 'Free parking behind the building. Enter from 7th Cross.', 41, 'All'), ('Do you take walk-ins?', 'Yes, till 6 PM if a slot is free. Booking ahead is best.', 33, 'All'),
            ('Group discount?', '10% off for groups of 8 or more.', 12, 'All'), ('Open on Sundays?', 'Koramangala is open 10 AM – 7 PM. Indiranagar is closed.', 9, 'Per location'), ('Can I bring my child?', 'Yes. Children under 12 come with an adult.', 4, 'All')]
    fh = ''.join(f'<tr><td><b style="font-weight: 500">{q}</b><span style="display: block; font-size: 12px; color: var(--mut); white-space: normal; max-width: 420px">{a}</span></td><td style="color: var(--mut)">{w}</td><td class="r">{u}×</td></tr>' for q, a, u, w in faqs)
    gaps = [('Do you give student discounts?', 3), ('Is there a female staff member?', 3), ('Okay for kids under 10?', 2)]
    gh = ''.join(f'<div style="padding: 12px; border-radius: 12px; border: 1px solid var(--line); margin-top: 8px"><b style="display: block; font-weight: 500; font-size: 13px">{q}</b><span style="font-size: 12px; color: var(--mut)">Asked {c} times · Vegham said it would check</span><div class="fld" style="margin-top: 8px; height: 34px; color: var(--mut2)">Write the answer once…</div></div>' for q, c in gaps)
    body = f'''<div style="flex: 1; display: flex; min-height: 0"><div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 14px">
        {card("Sources", "Everything Vegham reads. Shared by all agents.", sh, ob("Add source", "plus"))}
        {card("Questions and answers", "26 answers · most used first", f'<div style="display: flex; gap: 8px; margin-bottom: 10px"><span class="fld" style="flex: 1; color: var(--mut2)">{I("search", 15)}<span style="margin-left: 8px">Search answers</span></span>{sel("All locations")}</div><table class="tbl2"><tr><th>Question and answer</th><th>Applies to</th><th class="r">Used this month</th></tr>{fh}</table>', pb("Add answer", "plus"))}</div>
      <div style="width: 340px; flex: none; border-left: 1px solid var(--line); padding: 18px 20px; overflow: hidden"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 14px; font-weight: 600">Gaps</b>{bd("3", "warn")}</div><span style="font-size: 12.5px; color: var(--mut)">Questions customers asked that Vegham couldn’t answer. Answer once and every agent uses it.</span>{gh}</div></div>'''
    return page('know', 'Knowledge', 'What Vegham knows about your business', body)


# ================================================================ 5 RULES AND PERMISSIONS
def rules():
    P = lambda on, lim='': '<span class="perm">' + ''.join(f'<span class="{"on " + k if i == on else ""}">{t}</span>' for i, (t, k) in enumerate([('Do it', 'g'), ('Ask me first', 'w'), ('Never', 'r')])) + '</span>' + (f'<span style="margin-left: 10px; font-size: 12.5px; color: var(--mut)">{lim}</span>' if lim else '')
    acts = [('Book a visit', 'Within your hours and service rules', 0, ''), ('Move or cancel a booking', 'Up to 4 hours before', 0, ''), ('Send a payment link', 'For deposits and full payment', 0, ''),
            ('Give a discount', 'Changed from “Ask me first” · unpublished', 0, 'up to 10%'), ('Book a group over 8 people', '', 1, ''), ('Book outside opening hours', '', 1, ''), ('Add to the waitlist', '', 0, ''),
            ('Refund a payment', 'Only you or a manager can refund', 2, ''), ('Share a team member’s phone number', '', 2, '')]
    ah = ''.join(f'<div style="display: flex; align-items: center; gap: 16px; padding: 11px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b>{f"<span style=\"font-size: 12px; color: {"var(--warn)" if "unpublished" in d else "var(--mut)"}\">{d}</span>" if d else ""}</span>{P(o, l)}</div>' for i, (t, d, o, l) in enumerate(acts))
    tone = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    beh = row('Tone', '', tone(['Warm', 'Neutral', 'Formal'], 0), False) + row('Length', '', tone(['Short', 'Detailed'], 0)) + row('Emoji', '', tone(['Never', 'Sometimes', 'Often'], 1)) + row('Language', 'Replies in the customer’s language', tg())
    alw = ''.join(f'<div style="display: flex; gap: 8px; padding: 6px 0; font-size: 13px"><span style="color: {c}">{s}</span>{t}</div>' for c, s, t in [('var(--good)', '✓', 'Repeat the date, time and price before booking'), ('var(--good)', '✓', 'Mention free parking when someone asks for directions'), ('#E5484D', '✕', 'Promise results, or give medical, legal or money advice'), ('#E5484D', '✕', 'Talk about other businesses or prices')])
    body = f'''<div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1.35fr 1fr; gap: 16px; align-content: start">
      {card("What Vegham may do", "Applies to every agent. “Ask me first” holds the slot and asks you in the app.", ah)}
      <div style="display: flex; flex-direction: column; gap: 14px">{card("How it talks", "", beh)}{card("Always and never", "In your words", alw + '<span style="display: block; margin-top: 8px; font-size: 13px; font-weight: 500">+ Add a rule</span>')}
        {card("Telling customers it’s AI", "", row("Say it’s an AI assistant", "At the start, and whenever asked", tg(), False))}</div></div>'''
    return page('rules', 'Rules and permissions', 'Shared by all agents', body)


# ================================================================ 6 TEST LAB
def testlab():
    tests = [('Group of 8 asks for a discount', 'Chat', 'Offers 10%, not more', False, 'just now'), ('Books Saturday 11 AM for 2', 'Chat', 'Books, takes ₹500 deposit', True, 'just now'),
             ('Angry customer wants a refund', 'Chat', 'Apologises, hands to a person', True, 'just now'), ('Asks for parking in Hindi', 'Voice', 'Answers in Hindi', True, 'just now'),
             ('Wants Sunday at Indiranagar', 'Chat', 'Says closed, offers Koramangala', True, 'just now'), ('Caller asks for the owner', 'Voice', 'Transfers to Vinay', True, 'just now'),
             ('Asks about student discount', 'Chat', 'Says it will check', True, 'just now'), ('Reschedules from Friday to Saturday', 'Chat', 'Moves the booking', True, 'just now')]
    th = ''.join(f'<tr class="{"pick" if not ok else ""}"><td><span style="display: inline-flex; align-items: center; gap: 8px"><span class="{"pass" if ok else "fail"}" style="font-weight: 700">{"✓" if ok else "✕"}</span><b style="font-weight: 500">{n}</b></span></td><td style="color: var(--mut)">{a}</td><td style="color: var(--mut)">{e}</td><td>{bd("Pass", "good") if ok else bd("Fail", "bad")}</td></tr>' for n, a, e, ok, w in tests)
    msg = lambda w, t, c='': f'<div style="font-size: 13px; line-height: 1.5; padding: 8px 0; border-top: 1px solid var(--line)"><b style="font-weight: 600; {c}">{w}</b><br>{t}</div>'
    right = f'''<div style="width: 380px; flex: none; border-left: 1px solid var(--line); padding: 18px 20px; overflow: hidden; display: flex; flex-direction: column; gap: 12px">
      <div style="display: flex; justify-content: space-between; align-items: center"><b style="font-size: 14px; font-weight: 600">Group of 8 asks for a discount</b>{bd("Fail", "bad")}</div>
      <div style="padding: 12px 14px; border-radius: 12px; background: rgba(229,72,77,.08); font-size: 13px; line-height: 1.5"><b style="font-weight: 600">Expected:</b> offers 10% off at most.<br><b style="font-weight: 600">Got:</b> offered 15% off.<br><span style="color: var(--mut)">Likely cause: your new FAQ “Diwali offer: 15% off packages” applies to groups too.</span></div>
      <div>{msg("Customer", "We’re 8 people. Any discount for a group?")}{msg("Vegham (draft)", "Yes! For 8 people you get 15% off with our Diwali offer, so ₹8,160 in total.", "color: #E5484D")}</div>
      <div style="display: flex; gap: 8px; margin-top: auto">{pb("Fix the FAQ")}{ob("Expected is wrong")}</div></div>'''
    body = f'''<div style="flex: 1; display: flex; min-height: 0"><div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 14px">
        <div style="display: flex; align-items: center; gap: 10px"><span style="font-size: 13.5px"><b style="font-weight: 600">11 of 12 pass</b> <span style="color: var(--mut)">· ran on your draft 2 min ago</span></span><span style="flex: 1"></span>{ob("New test", "plus")}{pb("Run all", "play")}</div>
        <div class="rc" style="padding: 6px 4px 4px"><table class="tbl2"><tr><th>Scenario</th><th>Agent</th><th>Should</th><th>Result</th></tr>{th}</table></div>
        <span style="font-size: 12.5px; color: var(--mut)">Tests run on your draft before you publish. Turn any real conversation into a test with “Save as test”.</span></div>{right}</div>'''
    return page('test', 'Test lab', 'Saved conversations Vegham must get right', body)


# ================================================================ 7 IMPROVE
def improve():
    items = [('thumbdown', 'Riya Sharma · WhatsApp', 'You marked this reply as wrong', 'Yesterday', True), ('handoff', 'P. Iyer · call', 'Handed over · refund', 'Today', False),
             ('msg', 'Kavya Nair · Instagram', 'Couldn’t answer: student discount', 'Today', False), ('thumbdown', 'Dev Kumar · Messenger', 'You marked this reply as wrong', 'Tue', False), ('handoff', 'Meera Iyer · WhatsApp', 'Handed over · not sure', 'Mon', False)]
    IC.setdefault('handoff', '<path d="M7 11V6a2 2 0 0 1 4 0v5M11 10V4a2 2 0 0 1 4 0v6M15 10V6a2 2 0 0 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.5L3 14a2 2 0 0 1 3.4-2L7 13"></path>')
    lh = ''.join(f'<div style="display: flex; gap: 12px; padding: 12px 14px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if on else ""}"><span style="width: 30px; height: 30px; border-radius: 9px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 15)}</span><span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between"><b style="font-weight: 500; font-size: 13px">{n}</b><span style="font-size: 11.5px; color: var(--mut2)">{w}</span></span><span style="font-size: 12px; color: var(--mut)">{d}</span></span></div>' for ic, n, d, w, on in items)
    left = f'''<div style="width: 330px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column"><div style="display: flex; gap: 6px; padding: 14px 16px 8px; flex-wrap: wrap">{chip("All", True, "13")}{chip("Marked wrong", False, "4")}{chip("Handed over", False, "6")}{chip("Couldn’t answer", False, "3")}</div>{lh}</div>'''
    bub = lambda w, t, us, bad=False: f'<div style="align-self: {"flex-end" if us else "flex-start"}; max-width: 76%"><span style="display: block; font-size: 11.5px; color: var(--mut); margin-bottom: 4px; text-align: {"right" if us else "left"}">{w}</span><div style="padding: 10px 14px; border-radius: 16px; font-size: 14px; line-height: 1.5; background: {"rgba(59,108,246,.10)" if us else "var(--soft2)"}; {"box-shadow: 0 0 0 2px #E5484D" if bad else ""}">{t}</div></div>'
    center = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 28px; display: flex; flex-direction: column; gap: 12px">
      {bub("Riya", "Can I bring my mother along to the same slot?", False)}
      {bub("Vegham · AI", "Sorry, each slot is for one person only.", True, True)}
      <div style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #E5484D">{I("thumbdown", 14)}Marked wrong by Vinay · “We do allow a companion at no charge”</div>
      <div class="rc" style="margin-top: 8px"><b class="rt2">Suggested fix</b><span class="rs">Add this answer to Knowledge. Every agent will use it.</span>
        <div style="margin-top: 12px; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--line); font-size: 13.5px; line-height: 1.5"><b style="font-weight: 600">Can someone come with me?</b><br>Yes, one companion can join you at no extra charge.</div>
        <div style="display: flex; gap: 8px; margin-top: 12px">{pb("Add to Knowledge")}{ob("Edit")}{ob("Save as test", "flask")}<span style="flex: 1"></span>{ob("Ignore")}</div></div>
      <div class="rc" style="display: flex; gap: 14px; align-items: center"><span style="flex: 1"><b class="rt2">Same question, other customers</b><span class="rs">2 more people asked about bringing someone this month. Vegham gave the same wrong answer.</span></span>{ob("See both")}</div></div>'''
    body = f'<div style="flex: 1; display: flex; min-height: 0">{left}{center}</div>'
    return page('improve', 'Improve', 'Learn from real conversations', body)


# ================================================================ 8 PUBLISH (modal over the chat agent)
def publish():
    ch = [('Rules and permissions', 'Give a discount', 'Ask me first → Do it, up to 10%'), ('Knowledge', 'New answer', '“Can someone come with me?”'), ('Chat receptionist', 'Greeting', 'Added “I can check free times, book you in…”')]
    chh = ''.join(f'<div style="display: flex; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line)"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--warn); margin-top: 6px; flex: none"></span><span style="flex: 1"><span style="font-size: 12px; color: var(--mut)">{a}</span><b style="display: block; font-weight: 500; font-size: 13.5px">{b}</b><span style="font-size: 12.5px; color: var(--mut)">{c}</span></span><span style="font-size: 12.5px; color: var(--mut)">View</span></div>' for a, b, c in ch)
    modal = f'''<div class="scrim2"></div><div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 560px; z-index: 31; border-radius: 22px; background: var(--pop); box-shadow: var(--shadow); padding: 24px">
      <div style="display: flex; justify-content: space-between; align-items: flex-start"><span><b style="display: block; font-size: 18px; font-weight: 600">Publish 3 changes</b><span style="font-size: 13px; color: var(--mut)">Live on all channels in about a minute</span></span><span class="ibtn">{I("x2", 17)}</span></div>
      <div style="margin-top: 14px">{chh}</div>
      <div style="display: flex; align-items: center; gap: 12px; margin-top: 4px; padding: 12px 14px; border-radius: 12px; background: var(--goodbg); font-size: 13px"><span class="pass" style="font-weight: 700">✓</span><span style="flex: 1"><b style="font-weight: 600">12 of 12 tests pass</b> on this draft</span><span style="color: var(--mut)">Ran 1 min ago</span></div>
      <div class="fld" style="margin-top: 14px; height: 40px; color: var(--mut2)">Note for your team (optional): what changed and why</div>
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 18px"><span style="font-size: 12.5px; color: var(--mut)">You can roll back any time from History.</span><span style="flex: 1"></span>{ob("Cancel")}{pb("Publish")}</div></div>'''
    return page('chat', 'Chat receptionist', 'On · WhatsApp, Instagram, Messenger, website', chat_body(), modal, True)


if __name__ == '__main__':
    B = lambda f, t, fn: build(f, t, active='AI agents', main=fn(), notop=True, extra_css=CSS, collapsed=True)
    B('AppV2Agents.dc.html', 'App · AI agents · overview', overview)
    B('AppV2AgentChat.dc.html', 'App · AI agents · chat receptionist', chat)
    B('AppV2AgentVoice.dc.html', 'App · AI agents · voice receptionist', voice)
    B('AppV2AgentKnowledge.dc.html', 'App · AI agents · knowledge', knowledge)
    B('AppV2AgentRules.dc.html', 'App · AI agents · rules and permissions', rules)
    B('AppV2AgentTests.dc.html', 'App · AI agents · test lab', testlab)
    B('AppV2AgentImprove.dc.html', 'App · AI agents · improve', improve)
    B('AppV2AgentPublish.dc.html', 'App · AI agents · publish', publish)
    print('agents ok')
