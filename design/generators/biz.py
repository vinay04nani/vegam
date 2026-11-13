"""Business settings as a pop-up (modal) over the app. Pure CSS: radio group `bz` picks the section."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app2
from app2 import I, IC, WA

for k, v in {
    'pin': '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle>',
    'tag': '<path d="M3 12V4h8l10 10-8 8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>',
    'clock': '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    'note': '<path d="M5 4h14v16H5z"></path><path d="M9 9h6M9 13h6M9 17h3"></path>',
    'msg': '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>',
    'refresh': '<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"></path>',
    'code': '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"></path>',
    'upload': '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"></path>',
    'link': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>',
    'dots': '<circle cx="5" cy="12" r="1.2"></circle><circle cx="12" cy="12" r="1.2"></circle><circle cx="19" cy="12" r="1.2"></circle>',
    'copy': '<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></path>',
}.items():
    IC.setdefault(k, v)

NAV = [('Business', [('profile', 'building', 'Business profile'), ('locations', 'pin', 'Locations'), ('services', 'tag', 'Services and prices'),
                     ('hours', 'clock', 'Hours and booking'), ('team', 'users', 'Team and roles')]),
       ('Conversations', [('replies', 'note', 'Saved replies'), ('templates', 'msg', 'Message templates'), ('autos', 'refresh', 'Automations')]),
       ('Money and data', [('payments', 'wallet', 'Payments'), ('privacy', 'shield', 'Privacy and consent'), ('api', 'code', 'API and webhooks')])]
TABS = [t for _, items in NAV for t, _, _ in items]

CSS = ''.join(f'.app:has(#bz-{t}:checked) label[for=bz-{t}]{{background:var(--soft);color:var(--text);font-weight:500}}.app:has(#bz-{t}:checked) .bzp-{t}{{display:flex}}' for t in TABS) + '''
.bzp{display:none;flex-direction:column;height:100%}
.bz .tg{display:inline-block;vertical-align:middle}
.bz .fl{display:flex;align-items:center;height:38px;padding:0 12px;border-radius:10px;border:1px solid var(--line);font-size:13.5px;color:var(--text);background:var(--bg)}
.bz .lb{display:block;font-size:12.5px;font-weight:500;color:var(--text);margin-bottom:6px}
.bz .gp{display:grid;grid-template-columns:190px 1fr;gap:28px;padding:20px 0;border-top:1px solid var(--line)}
.bz .gp:first-child{border-top:0;padding-top:4px}
.bz .gt{display:block;font-weight:600;font-size:13.5px}
.bz .gd{display:block;margin-top:4px;font-size:12.5px;color:var(--mut);line-height:1.5}
.bz .tb{width:100%;border-collapse:collapse;font-size:13.5px}
.bz .tb th{text-align:left;font-weight:500;font-size:12px;color:var(--mut);padding:0 12px 10px;border-bottom:1px solid var(--line);white-space:nowrap}
.bz .tb td{padding:12px;border-bottom:1px solid var(--line);white-space:nowrap}
.bz .tb tr:last-child td{border-bottom:0}
.bz .bdg{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 9px;border-radius:999px;font-size:12px;background:var(--soft2);color:var(--mut)}
.bz .bdg.g{background:var(--goodbg);color:var(--good)}.bz .bdg.w{background:var(--warnbg);color:var(--warn)}
.bz .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px}
'''


def inputs(bz):
    return ''.join(f'<input class="vh" type="radio" name="bz" id="bz-{t}"{" checked" if t == bz else ""} aria-label="{t}" />' for t in TABS)


fld = lambda l, v, hint='': f'<div><span class="lb">{l}{f" <span style=\"font-weight: 400; color: var(--mut)\">· {hint}</span>" if hint else ""}</span><span class="fl">{v}</span></div>'
grid2 = lambda *xs: f'<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">{"".join(xs)}</div>'
gp = lambda t, d, inner: f'<div class="gp"><div><b class="gt">{t}</b><span class="gd">{d}</span></div><div style="display: flex; flex-direction: column; gap: 14px; min-width: 0">{inner}</div></div>'
row = lambda t, d, right: f'<div class="row" style="padding: 14px 0"><div><div class="rt">{t}</div><div class="rd">{d}</div></div>{right}</div>'
tg = lambda on=True: f'<span class="tg{" on" if on else ""}"></span>'
sel = lambda t: f'<span class="sel">{t}{I("chev", 14)}</span>'
ob = lambda t, ic='': f'<span class="obtn">{I(ic, 15) if ic else ""}{t}</span>'
pb = lambda t, ic='': f'<span class="pbtn">{I(ic, 15) if ic else ""}{t}</span>'
bdg = lambda t, k='': f'<span class="bdg {k}">{t}</span>'
more = f'<span class="ibtn" style="width: 28px; height: 28px" title="More">{I("dots", 16)}</span>'


def pane(t, title, sub, body, actions=None):
    act = actions if actions is not None else f'<span style="font-size: 12.5px; color: var(--mut)">Unsaved changes</span>{ob("Discard")}{pb("Save")}'
    return f'''<div class="bzp bzp-{t}">
      <div style="display: flex; align-items: center; gap: 10px; padding: 18px 64px 16px 30px; border-bottom: 1px solid var(--line); flex: none">
        <span style="flex: 1; min-width: 0"><b style="display: block; font-size: 16px; font-weight: 600; letter-spacing: -0.01em">{title}</b><span style="font-size: 12.5px; color: var(--mut)">{sub}</span></span>{act}</div>
      <div style="flex: 1; min-height: 0; overflow: hidden; padding: 20px 30px">{body}</div></div>'''


def panes():
    p = []
    logo = '<span style="width: 52px; height: 52px; border-radius: 15px; background: #16182A; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-family: \'Inter Tight\', sans-serif; font-size: 22px; flex: none">N</span>'
    p.append(pane('profile', 'Business profile', 'Shown on WhatsApp, Google and your booking page',
        gp('Identity', 'Your name and logo as customers see them.', f'<div style="display: flex; align-items: center; gap: 14px">{logo}{ob("Change logo", "upload")}<span style="font-size: 12px; color: var(--mut)">Square, 400 × 400 px or more</span></div>' + grid2(fld('Business name', 'Nila &amp; Co'), fld('Legal name', 'Nila and Company LLP')))
        + gp('Contact', 'How customers and Vegham reach you.', grid2(fld('Phone', '+91 80 4123 5678'), fld('Email', 'hello@nilaandco.in'), fld('Website', 'nilaandco.in'), fld('GSTIN', '29ABCDE1234F1Z5', 'for invoices')))
        + gp('About', 'Vegham uses this in replies. Keep it short and factual.', '<span class="fl" style="height: 64px; align-items: flex-start; padding-top: 10px; line-height: 1.5">Consultations, follow-up visits and group sessions in Indiranagar since 2019. Free parking behind the building.</span>')
        + gp('Region', 'Used for prices, dates and reports.', grid2(fld('Country and currency', '🇮🇳 India · ₹ INR'), fld('Time zone', 'IST · UTC+5:30')))))

    locs = [('Indiranagar', 'Main', '12, 100 Feet Rd, HAL 2nd Stage, Bengaluru 560038', 'Mon–Sat · 9 AM – 8 PM', '+91 80 4123 5678', '3 people'),
            ('Koramangala', '', '48, 5th Block, 80 Feet Rd, Bengaluru 560095', 'Tue–Sun · 10 AM – 7 PM', '+91 80 4123 9900', '2 people')]
    lc = ''.join(f'''<div class="card" style="padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start">
        <span style="width: 38px; height: 38px; border-radius: 11px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I('pin', 18)}</span>
        <span style="flex: 1; min-width: 0"><b style="font-weight: 600; font-size: 14px">{n}</b> {bdg(m) if m else ''}<span style="display: block; margin-top: 3px; font-size: 13px; color: var(--mut)">{a}</span>
        <span style="display: flex; gap: 18px; margin-top: 10px; font-size: 12.5px; color: var(--mut)"><span style="display: inline-flex; align-items: center; gap: 6px">{I('clock', 14)}{h}</span><span style="display: inline-flex; align-items: center; gap: 6px">{I('phone', 14)}{ph}</span><span style="display: inline-flex; align-items: center; gap: 6px">{I('users', 14)}{ppl}</span></span></span>{ob('Edit')}{more}</div>''' for n, m, a, h, ph, ppl in locs)
    p.append(pane('locations', 'Locations', 'Each location has its own hours, team and booking link',
        f'<div style="display: flex; flex-direction: column; gap: 12px">{lc}<div style="padding: 14px 18px; border: 1px dashed var(--line); border-radius: 18px; display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--mut)">{I("plus", 16)}Add a location<span style="margin-left: auto; font-size: 12px">Growth plan: up to 3</span></div></div>',
        actions=pb('Add location', 'plus')))

    sv = [('Consultation', '30 min', '₹800', 'Vinay, Priya', True), ('Follow-up visit', '20 min', '₹500', 'Everyone', True), ('Group session', '60 min', '₹350 per person', 'Rahul · up to 8', True),
          ('Assessment', '45 min', '₹1,200', 'Vinay', True), ('Home visit', '60 min', 'From ₹2,000', 'Priya', False)]
    rows = ''.join(f'<tr><td><b style="font-weight: 500">{n}</b></td><td style="color: var(--mut)">{d}</td><td>{pr}</td><td style="color: var(--mut)">{w}</td><td>{tg(on)}</td><td style="width: 28px">{more}</td></tr>' for n, d, pr, w, on in sv)
    p.append(pane('services', 'Services and prices', 'Vegham quotes these exactly and only books what is listed here',
        f'<div style="display: flex; gap: 8px; margin-bottom: 14px">{sel("All locations")}{sel("All categories")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut); align-self: center">Prices include GST</span></div><div class="card" style="padding: 14px 6px 4px"><table class="tb"><tr><th>Service</th><th>Length</th><th>Price</th><th>Who</th><th>Online booking</th><th></th></tr>{rows}</table></div>',
        actions=ob('Packages and vouchers') + pb('Add service', 'plus')))

    days = [('Monday', True, '9:00 AM', '8:00 PM'), ('Tuesday', True, '9:00 AM', '8:00 PM'), ('Wednesday', True, '9:00 AM', '8:00 PM'), ('Thursday', True, '9:00 AM', '8:00 PM'),
            ('Friday', True, '9:00 AM', '8:00 PM'), ('Saturday', True, '10:00 AM', '6:00 PM'), ('Sunday', False, '', '')]
    dh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; height: 40px">{tg(on)}<span style="width: 92px; font-size: 13.5px">{d}</span>' + (f'<span class="fl" style="height: 32px; width: 104px">{a}</span><span style="color: var(--mut2)">–</span><span class="fl" style="height: 32px; width: 104px">{b}</span><span style="font-size: 12.5px; color: var(--mut)">+ break</span>' if on else '<span style="font-size: 13px; color: var(--mut)">Closed · Vegham still replies and takes bookings for later</span>') + '</div>' for d, on, a, b in days)
    p.append(pane('hours', 'Hours and booking', 'Indiranagar · when you are open and how far ahead people can book',
        gp('Opening hours', 'Vegham never books outside these.', f'<div>{dh}</div><span style="font-size: 13px; font-weight: 500">Holidays and closures (2) →</span>')
        + gp('Booking rules', 'Applied to every online booking.', grid2(fld('Earliest booking', '2 hours ahead'), fld('Latest booking', '30 days ahead'), fld('Gap between bookings', '10 minutes'), fld('Free cancellation', 'Up to 4 hours before')))))

    tm = [('V', 'Vinay', 'vinay@nilaandco.in', 'Owner', 'Both', '#3B6CF6', ''), ('P', 'Priya Nair', 'priya@nilaandco.in', 'Manager', 'Indiranagar', '#0E9F6E', ''),
          ('R', 'Rahul Menon', '+91 98450 22110', 'Staff', 'Koramangala', '#7C3AED', ''), ('A', 'Anita Rao', 'anita@nilaandco.in', 'Staff', 'Indiranagar', '#8A8A8A', 'Invite sent')]
    tr = ''.join(f'<tr><td><span style="display: flex; align-items: center; gap: 10px"><span style="width: 30px; height: 30px; border-radius: 50%; background: {c}; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 12.5px; font-weight: 600">{a}</span><span><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{e}</span></span></span></td><td>{sel(r) if r != "Owner" else "Owner"}</td><td style="color: var(--mut)">{loc}</td><td>{bdg(st, "w") if st else bdg("Active", "g")}</td><td style="width: 28px">{more}</td></tr>' for a, n, e, r, loc, c, st in tm)
    roles = ''.join(f'<div style="padding: 12px 14px; border-radius: 14px; background: var(--soft2)"><b style="display: block; font-weight: 600; font-size: 13px">{r}</b><span style="font-size: 12.5px; color: var(--mut); line-height: 1.5">{d}</span></div>' for r, d in [('Owner', 'Everything, including billing and deleting the business'), ('Manager', 'Inbox, calendar, contacts, campaigns and settings. No billing.'), ('Staff', 'Their own calendar and the chats assigned to them')])
    p.append(pane('team', 'Team and roles', '4 of 5 seats used on Growth',
        f'<div class="card" style="padding: 14px 6px 4px"><table class="tb"><tr><th>Person</th><th>Role</th><th>Location</th><th>Status</th><th></th></tr>{tr}</table></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px">{roles}</div>',
        actions=pb('Invite people', 'plus')))

    rp = [('/parking', 'Parking', 'Free parking is behind the building. Enter from 7th Cross.', 'Used 41 times'), ('/price', 'Prices', 'A consultation is ₹800 for 30 minutes. Follow-ups are ₹500.', 'Used 28 times'),
          ('/location', 'How to reach us', '12, 100 Feet Rd, Indiranagar. Here is the map: maps.app/nila', 'Used 19 times'), ('/late', 'Running late', 'No problem. We can hold your slot for 10 minutes.', 'Used 7 times')]
    rph = ''.join(f'<div style="display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-top: 1px solid var(--line)"><span class="mono" style="width: 86px; flex: none; padding-top: 1px">{k}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="display: block; font-size: 13px; color: var(--mut); margin-top: 2px">{b}</span></span><span style="font-size: 12px; color: var(--mut2); white-space: nowrap">{u}</span>{more}</div>' for k, t, b, u in rp)
    p.append(pane('replies', 'Saved replies', 'Type “/” in any chat to use one. Vegham uses them too.',
        f'<div style="display: flex; gap: 8px; margin-bottom: 6px"><span class="fl" style="flex: 1; color: var(--mut)">{I("search", 15)}<span style="margin-left: 8px">Search replies</span></span>{sel("Shared with team")}</div>{rph}',
        actions=pb('New reply', 'plus')))

    tp = [('booking_confirmed', 'Utility', 'Hi {{1}}, you are booked for {{2}} on {{3}}. Reply 1 to change.', 'Approved', 'g'), ('reminder_24h', 'Utility', 'Reminder: {{1}} tomorrow at {{2}}. See you soon.', 'Approved', 'g'),
          ('review_request', 'Utility', 'Thanks for visiting, {{1}}. Could you rate us? {{2}}', 'Approved', 'g'), ('diwali_offer', 'Marketing', 'Happy Diwali, {{1}}! 15% off any service until {{2}}.', 'In review', 'w'),
          ('payment_link', 'Utility', 'Here is your payment link for {{1}}: {{2}}', 'Rejected', '')]
    tph = ''.join(f'<tr><td class="mono">{n}</td><td style="color: var(--mut)">{c}</td><td style="max-width: 330px; overflow: hidden; text-overflow: ellipsis; color: var(--mut)">{b}</td><td>{bdg(s, k) if k else "<span class=bdg style=\'background: rgba(229,72,77,.1); color: #E5484D\'>Rejected</span>"}</td></tr>' for n, c, b, s, k in tp)
    p.append(pane('templates', 'Message templates', 'WhatsApp needs Meta’s approval for messages sent after 24 hours',
        f'<div class="card" style="padding: 14px 6px 4px"><table class="tb" style="table-layout: fixed"><colgroup><col style="width: 170px"><col style="width: 92px"><col><col style="width: 110px"></colgroup><tr><th>Name</th><th>Category</th><th>Message</th><th>Meta status</th></tr>{tph}</table></div><div style="margin-top: 14px; padding: 12px 14px; border-radius: 14px; background: var(--soft2); font-size: 12.5px; color: var(--mut); display: flex; gap: 10px; align-items: center">{WA(16)}<span><b style="color: var(--text); font-weight: 500">payment_link</b> was rejected: links must use your verified domain. Edit and resubmit; approval usually takes a few minutes.</span></div>',
        actions=pb('New template', 'plus')))

    au = [('Booking confirmation', 'Sent the moment a booking is made', True, 'Instant'), ('Reminder', 'Before each booking', True, '24 h and 2 h before'), ('Follow-up after a visit', 'Checks in and offers the next booking', True, '3 days after'),
          ('Review request', 'Only to customers who rated the visit 4 or 5', True, '2 hours after'), ('Missed booking', 'Offers a new time to people who did not come', True, '30 min after'),
          ('Waitlist offer', 'Offers freed-up slots to the waitlist, first come first served', True, 'Instant'), ('Win-back', 'Customers who have not booked in a while', False, 'After 60 days')]
    p.append(pane('autos', 'Automations', 'Messages Vegham sends on its own. Each uses an approved template.',
        ''.join(row(t, d, f'<span style="display: flex; align-items: center; gap: 14px">{sel(w)}{tg(on)}</span>') for t, d, on, w in au), actions=''))

    stripe = '<span style="width: 38px; height: 38px; border-radius: 11px; background: #635BFF; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px; font-family: \'Inter Tight\', sans-serif; flex: none">S</span>'
    p.append(pane('payments', 'Payments', 'How customers pay you. Money goes straight to your account.',
        f'<div class="card" style="padding: 16px 18px; display: flex; align-items: center; gap: 14px">{stripe}<span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 14px">Stripe</b><span style="font-size: 12.5px; color: var(--good)">Connected · payouts to HDFC ••4421, every 2 days</span></span>{ob("Open Stripe")}{more}</div>'
        + '<div style="margin-top: 8px">' + row('Ask for a deposit', 'Customers pay part of the price to confirm a booking', f'<span style="display: flex; align-items: center; gap: 14px">{sel("25%")}{tg(True)}</span>')
        + row('Payment links in chat', 'Vegham can send a link when someone asks to pay', tg(True)) + row('Pay at the visit', 'Allow bookings without paying online', tg(True))
        + row('GST invoices', 'Email an invoice with GSTIN after each payment', tg(True)) + row('Refunds', 'Who can refund a payment', sel('Owner and managers')) + '</div>'))

    p.append(pane('privacy', 'Privacy and consent', 'How you meet India’s DPDP Act and WhatsApp’s rules',
        row('Marketing consent', '1,284 customers opted in · 37 opted out with STOP', ob('View log'))
        + row('Tell customers they are talking to an AI', '“You’re chatting with Nila &amp; Co’s assistant. Reply HUMAN for a person.”', tg(True))
        + row('Call recording notice', 'Played at the start of every call Vegham answers', tg(True))
        + row('Keep conversations for', 'Older messages are deleted automatically', sel('2 years'))
        + row('Keep call recordings for', 'Recordings are deleted after this', sel('90 days'))
        + row('Data requests', 'A customer asked to see or delete their data · 0 open', ob('Open requests'))))

    p.append(pane('api', 'API and webhooks', 'Connect your own systems. Keys give full access, so keep them secret.',
        gp('API keys', 'Use one key per system.', f'<div class="card" style="padding: 4px 16px">{row("Website booking form", "<span class=mono>vg_live_••••••••3f9a</span> · created 12 Sep · used today", ob("Revoke"))}{row("Spreadsheet sync", "<span class=mono>vg_live_••••••••a11c</span> · created 2 Oct · used 3 days ago", ob("Revoke"))}</div><span>{ob("Create key", "plus")}</span>')
        + gp('Webhooks', 'We POST to your URL when these happen.', f'<div class="card" style="padding: 14px 16px; display: flex; flex-direction: column; gap: 10px"><span style="display: flex; align-items: center; gap: 10px"><span class="mono" style="flex: 1">https://nilaandco.in/hooks/vegham</span>{bdg("Healthy", "g")}</span><span style="display: flex; gap: 6px; flex-wrap: wrap">{"".join(bdg(e) for e in ["booking.created", "booking.cancelled", "payment.succeeded", "contact.opted_out"])}</span><span style="display: flex; gap: 8px">{ob("Send test")}{ob("Edit")}</span></div>'), actions=ob('API docs', 'link')))
    return ''.join(p)


def modal():
    nav = ''
    for g, items in NAV:
        nav += f'<span style="display: block; padding: 14px 10px 4px; font-size: 11.5px; color: var(--mut2)">{g}</span>'
        nav += ''.join(f'<label for="bz-{t}" class="stab" style="height: 34px; font-size: 13.5px">{I(ic, 16)}{lab}</label>' for t, ic, lab in items)
    return f'''<div class="ov ov-biz bz" style="position: absolute; inset: 0; z-index: 40; align-items: center; justify-content: center">
      <label for="ov-none" aria-label="Close business settings" style="position: absolute; inset: 0; background: var(--scrim)"></label>
      <div class="popin" role="dialog" aria-modal="true" aria-label="Business settings" style="position: relative; width: 1120px; height: 780px; max-width: calc(100% - 48px); max-height: calc(100% - 48px); border-radius: 22px; background: var(--pop); box-shadow: var(--shadow); display: flex; overflow: hidden">
        <div style="width: 248px; flex: none; padding: 14px 10px; border-right: 1px solid var(--line); display: flex; flex-direction: column; background: var(--side)">
          <div style="display: flex; align-items: center; gap: 10px; padding: 4px 6px 4px 8px">
            <span style="width: 30px; height: 30px; border-radius: 9px; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; flex: none">N</span>
            <span style="display: flex; flex-direction: column; line-height: 1.2; min-width: 0"><b style="font-size: 14px; font-weight: 600">Business settings</b><span style="font-size: 11.5px; color: var(--mut)">Nila &amp; Co · 2 locations</span></span></div>
          {nav}
          <span style="margin-top: auto; padding: 10px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--mut2)">Sample data</span></div>
        <div style="flex: 1; min-width: 0; position: relative">
          <label for="ov-none" class="ibtn" aria-label="Close" style="position: absolute; top: 16px; right: 16px; z-index: 2">{I('x', 17)}</label>
          {panes()}</div></div></div>'''
