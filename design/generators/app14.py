"""Payments and Channels, second pass (Stripe, Razorpay dashboards; respond.io, Intercom channel setup). Sample data. Payments via Stripe only."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app13, app9
from app9 import I, IC, WA, IG, GLOBE, PH, GO, build, chip, sel, bd, ob, pb, cav, avch, BELL, SEP, inr
from app3 import MS
from app11 import tg, row, card, SMP

for k, v in {
    'link': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>',
    'bank': '<path d="M3 10l9-6 9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18"></path>',
    'undo': '<path d="M9 14L4 9l5-5"></path><path d="M4 9h11a5 5 0 0 1 0 10h-3"></path>',
    'receipt': '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"></path><path d="M9 8h6M9 12h6"></path>',
    'ext': '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"></path>',
    'warn': '<path d="M12 4l9 16H3z"></path><path d="M12 10v4M12 17v.5"></path>',
    'code': '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"></path>',
    'copy': '<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></path>',
}.items():
    IC.setdefault(k, v)
CSS = app13.CSS + '''
.ptab{display:flex;gap:24px;padding:0 24px;border-bottom:1px solid var(--line);font-size:13.5px}
.ptab span{height:44px;display:inline-flex;align-items:center;gap:6px;color:var(--mut)}
.ptab span.on{border-bottom:2px solid var(--text);color:var(--text);font-weight:500}
.ptab em{font-style:normal;font-size:11.5px;color:var(--mut2)}
.hc{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px 18px;display:flex;flex-direction:column;gap:12px}
.logo{width:40px;height:40px;border-radius:12px;background:#FFFFFF;box-shadow:0 0 0 1px var(--line);display:inline-flex;align-items:center;justify-content:center;flex:none;color:#16182A}
'''
STRIPE = lambda s=18: f'<span style="width: {s + 6}px; height: {s + 6}px; border-radius: 7px; background: #635BFF; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: {s - 4}px; font-family: \'Inter Tight\', sans-serif">S</span>'
ST = {'Paid': 'good', 'Waiting': 'warn', 'Refunded': 'mut', 'Part refunded': 'mut', 'Failed': 'bad', 'Expired': 'mut', 'Open': 'warn', 'Disputed': 'bad'}


def ptabs(on):
    items = [('Payments', '158'), ('Payment links', '12 open'), ('Refunds', '2'), ('Payouts', '')]
    return '<div class="ptab">' + ''.join(f'<span class="{"on" if t == on else ""}">{t}{f"<em>{n}</em>" if n else ""}</span>' for t, n in items) + '</div>'


def phead():
    return f'<div class="hd"><h1>Payments</h1><span style="font-size: 14px; color: var(--mut2); display: inline-flex; align-items: center; gap: 6px">{STRIPE(12)} Stripe · payouts to HDFC ••4421</span><span style="flex: 1"></span><label for="ov-pal" class="ibtn">{I("search", 17)}</label>{ob("Export", "download")}{pb("New payment link", "plus")}{SEP}{BELL}</div>'


def pstrip():
    return app9.strip([('Collected in Nov', '₹1,84,200', '', 'var(--mut)'), ('Waiting on links', '₹12,600', '', 'var(--warn)'), ('Refunded', '₹1,500', '', 'var(--mut)'),
                       ('Stripe fees', '₹4,330', '', 'var(--mut)'), ('Next payout · Mon', '₹38,400', '', 'var(--mut)')])


# ================================================================ PAYMENTS
PAY = [('R', 'Riya Sharma', 'Standard · Fri 7 Nov, 6:30 PM', 1200, 'UPI', 'Paid', 'Today, 6:07 PM', 'wa'),
       ('T', 'Team Lumen', 'Quote Q-104 · 50% deposit', 9000, 'Link', 'Waiting', 'Today, 2:10 PM', 'wa'),
       ('N', 'Neha Kapoor', 'Follow-up visit · Thu 2:30 PM', 500, 'UPI', 'Paid', 'Today, 11:12 AM', 'wa'),
       ('M', 'Meera Iyer', 'Cancelled visit · refund', -500, 'UPI', 'Refunded', 'Yesterday', 'wa'),
       ('K', 'Kavya Nair', 'Group session × 3', 3600, 'Card', 'Paid', '5 Nov', 'ig'),
       ('S', 'Sana A', 'Gift voucher', 2400, 'Link', 'Waiting', '5 Nov', 'ig'),
       ('R', 'Rahul Verma', '10-visit pack', 6000, 'Card', 'Paid', '4 Nov', 'wa'),
       ('S', 'Sunita Das', 'Standard', 1200, 'Cash', 'Paid', '3 Nov', 'ms'),
       ('A', 'Arjun Mehta', 'Group deposit', 2000, 'Card', 'Failed', '1 Nov', 'ig'),
       ('D', 'Divya Menon', 'Standard', 1200, 'UPI', 'Paid', '1 Nov', 'wa')]


def payments():
    rows = ''
    for a, n, f, amt, m, s, t, ch in PAY:
        rows += f'''<tr class="{"pick" if n == "Riya Sharma" else ""}"><td><span style="display: flex; align-items: center; gap: 10px">{avch(a, ch, 28)}<span><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{f}</span></span></span></td>
          <td class="r"><b style="font-weight: 500; {"color: var(--mut)" if amt < 0 else ""}">{"−" if amt < 0 else ""}{inr(abs(amt))}</b></td><td style="color: var(--mut)">{m}</td><td>{bd(s, ST[s])}</td><td style="color: var(--mut)">{t}</td></tr>'''
    table = f'<table class="tbl2"><tr><th>Customer and what for</th><th class="r">Amount</th><th>Method</th><th>Status</th><th>Date</th></tr>{rows}</table>'
    filt = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("All", True)}{chip("Paid")}{chip("Waiting", False, "9")}{chip("Failed", False, "1")}{chip("Refunded")}<span style="flex: 1"></span>{sel("All methods")}{sel("November")}</div>'
    tl = [('Payment link sent on WhatsApp', 'By Vegham, after booking', '6:05 PM', 'var(--mut2)'), ('Opened the link', '', '6:06 PM', 'var(--mut2)'), ('Paid ₹1,200 by UPI', 'riya@okhdfc', '6:07 PM', 'var(--good)'), ('Receipt sent', 'WhatsApp and email · GST invoice', '6:07 PM', 'var(--mut2)')]
    tlh = ''.join(f'<div class="tl"><span class="dot" style="background: {c}; margin-top: 4px"></span><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="color: var(--mut)">{d}</span></span><span style="color: var(--mut2)">{w}</span></div>' for t, d, w, c in tl)
    kv = lambda k, v: f'<div class="kv2"><span>{k}</span><span style="text-align: right">{v}</span></div>'
    panel = f'''<div class="pn" style="width: 360px">
      <div style="padding: 18px 20px"><div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 12.5px; color: var(--mut)">Payment · pi_3Q8…x7k</span><span class="ibtn" style="width: 28px; height: 28px">{I("x2", 15)}</span></div>
        <div style="display: flex; align-items: baseline; gap: 10px; margin-top: 4px"><span class="num" style="font-size: 32px">₹1,200</span>{bd("Paid", "good")}</div>
        <div style="display: flex; gap: 8px; margin-top: 14px">{ob("Refund", "undo")}{ob("Receipt", "receipt")}{ob("Stripe", "ext")}</div></div>
      <div class="ps"><span class="pt">FOR</span><div class="card" style="padding: 12px 14px; border-radius: 12px"><b style="font-weight: 600; font-size: 13.5px">Standard · Fri 7 Nov, 6:30 PM</b><span style="display: block; font-size: 12.5px; color: var(--mut)">With Vinay · Indiranagar · booked by Vegham</span></div>
        <div style="display: flex; gap: 14px; margin-top: 10px; font-size: 12.5px; font-weight: 500"><span>Open booking →</span><span>Open conversation →</span></div></div>
      <div class="ps"><span class="pt">MONEY</span>{kv("Amount", "₹1,200.00")}{kv("GST included (18%)", "₹183.05")}{kv("Stripe fee", "−₹24.00")}{kv("<b style='color: var(--text); font-weight: 600'>You get</b>", "<b style='font-weight: 600'>₹1,176.00</b>")}{kv("Payout", "Mon 10 Nov · HDFC ••4421")}</div>
      <div class="ps"><span class="pt">TIMELINE</span>{tlh}</div></div>'''
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead()}{pstrip()}{ptabs("Payments")}{filt}<div style="flex: 1; overflow: hidden">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{panel}{SMP}</div>'


def links():
    L = [('T', 'Team Lumen', 'Quote Q-104 · 50% deposit', 9000, 'Open', 'Viewed twice · reminder sent today', 'Expires Fri', 'wa'),
         ('S', 'Sana A', 'Gift voucher · ₹2,400', 2400, 'Open', 'Not opened yet', 'Expires Fri', 'ig'),
         ('K', 'Kabir Rao', 'First visit deposit', 500, 'Open', 'Opened · not paid', 'Expires tomorrow', 'web'),
         ('P', 'Pooja N', 'Monthly package', 6000, 'Open', 'Sent by you · 2 reminders', 'Expires 12 Nov', 'wa'),
         ('R', 'Riya Sharma', 'Standard', 1200, 'Paid', 'Paid in 2 min', 'Today', 'wa'),
         ('A', 'Arjun Mehta', 'Group deposit', 2000, 'Expired', 'Card declined, then expired', '1 Nov', 'ig')]
    rows = ''.join(f'''<tr><td><span style="display: flex; align-items: center; gap: 10px">{avch(a, ch, 28)}<span><b style="display: block; font-weight: 500">{n}</b><span style="font-size: 12px; color: var(--mut)">{f}</span></span></span></td><td class="r"><b style="font-weight: 500">{inr(amt)}</b></td><td>{bd(s, ST[s])}</td><td style="color: {"var(--warn)" if "Viewed" in d or "Opened" in d else "var(--mut)"}">{d}</td><td style="color: var(--mut)">{e}</td>
          <td class="r">{'<span class="ibtn" title="Send a reminder">' + I("send2", 16) + '</span>' if s == "Open" else '<span class="ibtn" title="Send again">' + I("refresh", 16) + '</span>' if s == "Expired" else ""}</td></tr>''' for a, n, f, amt, s, d, e, ch in L)
    table = f'<table class="tbl2"><tr><th>Customer and what for</th><th class="r">Amount</th><th>Status</th><th>Activity</th><th>Expires</th><th></th></tr>{rows}</table>'
    msg = lambda t, us: f'<div style="align-self: {"flex-end" if us else "flex-start"}; max-width: 86%; background: {"#D9FDD3" if us else "#FFFFFF"}; color: #16182A; padding: 8px 11px; border-radius: 10px; font-size: 13px; line-height: 1.45; box-shadow: 0 1px 1px rgba(0,0,0,.08)">{t}</div>'
    drawer = f'''<div class="pn" style="width: 380px">
      <div style="padding: 18px 20px; display: flex; justify-content: space-between; align-items: center"><b style="font-size: 16px; font-weight: 600">New payment link</b><span class="ibtn" style="width: 28px; height: 28px">{I("x2", 15)}</span></div>
      <div style="padding: 0 20px; display: flex; flex-direction: column; gap: 12px">
        <div><span class="lab">Customer</span><span class="fld" style="gap: 8px">{cav("P", 20)}Pooja N · +91 98•• ••10</span></div>
        <div><span class="lab">For</span><span class="fld">Monthly package (4 sessions)</span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px"><div><span class="lab">Amount</span><span class="fld">₹6,000</span></div><div><span class="lab">Expires</span><span class="fld">In 7 days</span></div></div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px">Remind if not paid<span class="sw on"></span></div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px">Allow UPI, cards and wallets<span class="sw on"></span></div>
        <div style="border-radius: 14px; background: #EFE7DD; padding: 12px; display: flex; flex-direction: column; gap: 6px">{msg("Hi Pooja, here’s the link for your Monthly package (₹6,000): pay.vegham.ai/nila/m4q. It’s valid for 7 days.", True)}</div>
        <div style="display: flex; gap: 8px">{pb("Send on WhatsApp", "send2")}{ob("Copy link", "copy")}</div></div></div>'''
    filt = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid var(--line)">{chip("Open", True, "12")}{chip("Paid")}{chip("Expired", False, "3")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">Vegham reminds people 24 h before a link expires</span></div>'
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead()}{pstrip()}{ptabs("Payment links")}{filt}<div style="flex: 1; overflow: hidden">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{drawer}{SMP}</div>'


def payouts():
    P = [('Mon 10 Nov', 38400, 902, 'On the way', 'warn', 31), ('Thu 6 Nov', 42150, 990, 'Paid', 'good', 34), ('Mon 3 Nov', 36800, 865, 'Paid', 'good', 29), ('Thu 30 Oct', 51200, 1203, 'Paid', 'good', 41), ('Mon 27 Oct', 29900, 703, 'Paid', 'good', 24)]
    rows = ''.join(f'<tr class="{"pick" if i == 0 else ""}"><td><b style="font-weight: 500">{d}</b></td><td class="r">{inr(g)}</td><td class="r" style="color: var(--mut)">−{inr(f)}</td><td class="r"><b style="font-weight: 500">{inr(g - f)}</b></td><td class="r" style="color: var(--mut)">{n}</td><td>{bd(s, k)}</td><td style="color: var(--mut)">HDFC ••4421</td></tr>' for i, (d, g, f, s, k, n) in enumerate(P))
    table = f'<table class="tbl2"><tr><th>Arrives</th><th class="r">Collected</th><th class="r">Stripe fees</th><th class="r">To your bank</th><th class="r">Payments</th><th>Status</th><th>Account</th></tr>{rows}</table>'
    top = f'''<div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 14px; padding: 20px 24px 8px">
      <div class="rc" style="display: flex; flex-direction: column; gap: 6px"><span style="font-size: 12.5px; color: var(--mut)">Next payout · Mon 10 Nov</span><span class="num" style="font-size: 32px">₹37,498</span><span style="font-size: 12.5px; color: var(--mut)">31 payments · ₹38,400 collected − ₹902 fees</span><div style="margin-top: 6px; height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: 70%; height: 100%; border-radius: 3px; background: var(--s1)"></span></div><span style="font-size: 12px; color: var(--mut)">Leaves Stripe Sat · arrives Mon</span></div>
      <div class="rc">{row("Bank account", "HDFC Bank ••4421 · verified", ob("Change"), False)}{row("Schedule", "Every Monday and Thursday", ob("Edit"))}</div>
      <div class="rc">{row("GST invoices", "Sent with every receipt · GSTIN 29ABCDE1234F1Z5", tg(), False)}{row("Monthly statement", "PDF for your accountant", ob("Download", "download"))}</div></div>'''
    main = f'<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead()}{ptabs("Payouts")}{top}<div style="padding: 8px 24px 0"><b style="font-size: 14px; font-weight: 600">Recent payouts</b></div><div style="flex: 1; overflow: hidden; padding: 8px 12px">{table}</div></div>'
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


# ================================================================ CHANNELS
def chhead(title, sub=''):
    return f'<div class="hd"><h1>{title}</h1><span style="font-size: 14px; color: var(--mut2)">{sub}</span><span style="flex: 1"></span><label for="ov-pal" class="ibtn">{I("search", 17)}</label>{pb("Add a channel or app", "plus")}{SEP}{BELL}</div>'


def channels():
    hc = lambda logo, n, sub, status, k, facts, action: f'''<div class="hc"><div style="display: flex; align-items: center; gap: 12px"><span class="logo">{logo}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 14.5px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{sub}</span></span>{bd(status, k)}</div>
      <div style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 12.5px; color: var(--mut)">{"".join(f"<span>{f}</span>" for f in facts)}</div>
      <div style="display: flex; align-items: center; gap: 8px; padding-top: 12px; border-top: 1px solid var(--line); font-size: 12.5px">{action}</div></div>'''
    manage = '<span style="margin-left: auto; font-weight: 500">Manage →</span>'
    conn = (hc(WA(22), 'WhatsApp', '+91 98765 43210 · Nila &amp; Co', 'Healthy', 'good', ['Quality: <b style="color: var(--good); font-weight: 500">High</b>', 'Limit: 1,000 people a day', '6 templates approved'], f'<span style="color: var(--mut)">742 conversations this month</span>{manage}')
            + hc(IG(22), 'Instagram', '@nilaandco', 'Healthy', 'good', ['DMs and story replies', 'Comments: off'], f'<span style="color: var(--mut)">168 conversations</span>{manage}')
            + hc(MS(22), 'Messenger', 'Nila &amp; Co Facebook Page', 'Reconnect', 'warn', ['Facebook asked you to log in again', 'Messages paused since 2 h'], f'<span style="color: var(--warn); font-weight: 500">Reconnect now</span>{manage}')
            + hc(GLOBE(22), 'Website chat', 'nilaandco.in', 'Live', 'good', ['Widget on 3 pages', 'Seen by 1,920 visitors'], f'<span style="color: var(--mut)">82 conversations</span>{manage}')
            + hc(PH(22), 'Phone line', '080 4719 2200 · Exotel', 'Healthy', 'good', ['KYC verified', 'Forwarding from +91 80 4123 5678'], f'<span style="color: var(--mut)">270 calls</span>{manage}')
            + hc(GO(22), 'Google Business Profile', 'Nila &amp; Co · Indiranagar', 'In review', 'acc', ['Google is checking your Book button', 'Usually 2–3 days'], f'<span style="color: var(--mut)">Requested 4 Nov</span>{manage}'))
    gcal = '<svg width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="3" fill="#4285F4"></rect><rect x="5" y="8" width="14" height="11" rx="1.5" fill="#FFF"></rect><text x="12" y="17" font-size="8" text-anchor="middle" fill="#4285F4" font-family="Arial" font-weight="700">31</text></svg>'
    apps = [('Calendars', [(gcal, 'Google Calendar', 'Two-way sync', True), (I('cal', 18), 'Outlook Calendar', 'Two-way sync', False)]),
            ('Payments', [(STRIPE(16), 'Stripe', 'UPI, cards, wallets', True)]),
            ('Business tools', [('<svg width="18" height="18" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" fill="#0F9D58"></rect><path d="M7 8h10M7 12h10M7 16h10M12 8v10" stroke="#FFF" stroke-width="1.5"></path></svg>', 'Google Sheets', 'Send bookings to a sheet', False),
                                ('<span style="width: 18px; height: 18px; border-radius: 4px; background: #FF4F00; color: #FFF; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center">Z</span>', 'Zapier', '6,000+ apps', False),
                                ('<span style="width: 18px; height: 18px; border-radius: 4px; background: #95BF47; color: #FFF; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center">S</span>', 'Shopify', 'Sell products in chat', False)])]
    ah = ''
    for g, items in apps:
        ah += f'<span style="display: block; font-size: 12px; color: var(--mut2); margin: 14px 0 8px">{g}</span><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px">'
        ah += ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; border: 1px solid var(--line)"><span class="logo" style="width: 36px; height: 36px; border-radius: 10px">{lg}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{bd("Connected", "good") if on else ob("Connect")}</div>' for lg, n, d, on in items)
        ah += '</div>'
    body = f'''<div style="flex: 1; overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 6px">
      <div style="display: flex; align-items: baseline; gap: 10px"><b style="font-size: 15px; font-weight: 600">Where customers reach you</b><span style="font-size: 12.5px; color: var(--mut)">6 channels · 1 needs attention</span></div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 8px">{conn}</div>
      <div style="display: flex; align-items: baseline; gap: 10px; margin-top: 18px"><b style="font-size: 15px; font-weight: 600">Apps</b><span style="font-size: 12.5px; color: var(--mut)">Calendars, payments and tools</span></div>{ah}</div>'''
    return f'<div style="display: flex; height: 100%; position: relative"><div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{chhead("Channels and apps")}{body}</div>{SMP}</div>'


def whatsapp():
    q = [62, 64, 70, 68, 72, 75, 74, 80, 82, 85, 84, 88]
    W, H = 300, 70
    pts = ' '.join(f'{"M" if i == 0 else "L"}{i * W / 11:.0f} {H - (v - 50) / 50 * H:.0f}' for i, v in enumerate(q))
    tiers = ''.join(f'<span style="flex: 1; display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: {"var(--text); font-weight: 500" if i == 1 else "var(--mut2)"}"><span style="height: 6px; border-radius: 3px; background: {"var(--s1)" if i <= 1 else "var(--soft)"}"></span>{t}</span>' for i, t in enumerate(['250', '1,000', '10,000', '100,000', 'Unlimited']))
    tpl = [('booking_confirmed', 'Utility', 'Approved', 'good'), ('reminder_24h', 'Utility', 'Approved', 'good'), ('diwali_offer', 'Marketing', 'In review', 'warn'), ('payment_link', 'Utility', 'Rejected', 'bad')]
    th = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 9px 0; {"border-top: 1px solid var(--line)" if i else ""}; font-size: 13px"><span style="flex: 1; font-family: ui-monospace, Menlo, monospace; font-size: 12.5px">{n}</span><span style="color: var(--mut); font-size: 12px">{c}</span>{bd(s, k)}</div>' for i, (n, c, s, k) in enumerate(tpl))
    profile = f'''<div style="border-radius: 18px; overflow: hidden; border: 1px solid var(--line)"><div style="background: #075E54; height: 54px"></div><div style="padding: 0 16px 16px; margin-top: -26px; text-align: center"><span style="width: 52px; height: 52px; border-radius: 50%; background: #16182A; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 20px; box-shadow: 0 0 0 3px var(--card)">N</span>
      <b style="display: block; margin-top: 6px; font-size: 15px; font-weight: 600">Nila &amp; Co <span style="color: var(--good)">{I("check", 13, 2.4)}</span></b><span style="font-size: 12.5px; color: var(--mut)">Business account · +91 98765 43210</span>
      <p style="margin: 10px 0 0; font-size: 12.5px; color: var(--mut); line-height: 1.5">Consultations and group sessions in Indiranagar. Book any time right here.</p></div></div>'''
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 20px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-content: start">
      {card("Health", "What Meta checks on your number", f'<div style="display: flex; align-items: baseline; gap: 10px"><span class="num" style="font-size: 26px">High</span><span style="font-size: 12.5px; color: var(--good)">Quality rating · last 7 days</span></div><svg viewBox="0 0 {W} {H}" width="100%" height="{H}" preserveAspectRatio="none" style="margin-top: 8px"><path d="{pts}" fill="none" stroke="var(--good)" stroke-width="2" vector-effect="non-scaling-stroke"></path></svg><span style="display: block; font-size: 12px; color: var(--mut)">Few blocks or reports from customers. Keep marketing messages relevant to stay here.</span>')}
      {card("Messaging limit", "New people you can message first, per day", f'<div style="display: flex; gap: 6px">{tiers}</div><span style="display: block; margin-top: 12px; font-size: 12.5px; color: var(--mut)">You used 312 of 1,000 today. Meta raises the limit as your quality stays high.</span>')}
      {card("Templates", "Needed for messages after 24 hours", th, '<span style="font-size: 12.5px; font-weight: 500">All templates →</span>')}
      {card("This month", "", row("Conversations", "Customer started 618 · you started 124", "742", False) + row("Meta fees", "Charged per message · passed on at cost", "₹1,360") + row("Replies within 24 hours", "Free to answer in this window", "96%"))}
      <div style="grid-column: span 2">{card("On this number", "", '<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 28px">' + row("Vegham answers", "Every new message, any time", tg(), False) + row("Conversation starters", "Book a visit · Prices · Location", ob("Edit"), False) + row("Offer opt-in", "Ask new customers if they want offers", tg()) + row("Shared with the Inbox", "Your team sees every chat", tg()) + '</div>')}</div></div>'''
    right = f'''<div class="pn" style="width: 360px; padding: 18px 20px; gap: 14px"><b style="font-size: 14px; font-weight: 600">Business profile</b><span style="font-size: 12.5px; color: var(--mut); margin-top: -8px">What customers see on WhatsApp</span>{profile}
      {row("Display name", "Approved by Meta · 2 Oct", ob("Edit"), False)}{row("Number", "Also works in the WhatsApp Business app", bd("Coexistence on", "acc"))}
      <div style="margin-top: auto; display: flex; gap: 8px">{ob("Reconnect", "refresh")}<span class="obtn" style="color: #E5484D">Disconnect</span></div></div>'''
    head = f'<div class="hd"><span style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--mut)">Channels and apps {I("chevr", 13)}</span><span class="logo" style="width: 30px; height: 30px; border-radius: 9px">{WA(17)}</span><h1>WhatsApp</h1>{bd("Healthy", "good")}<span style="flex: 1"></span>{ob("Open in Meta", "ext")}{SEP}{BELL}</div>'
    return f'<div style="display: flex; height: 100%; position: relative"><div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head}<div style="flex: 1; display: flex; min-height: 0">{left}{right}</div></div>{SMP}</div>'


def webchat():
    colors = ''.join(f'<span style="width: 28px; height: 28px; border-radius: 50%; background: {c}; {"box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--text)" if i == 0 else ""}"></span>' for i, c in enumerate(['#16182A', '#3B6CF6', '#0E9F6E', '#DB2777', '#E08A00']))
    seg = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    left = f'''<div style="width: 440px; flex: none; border-right: 1px solid var(--line); overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 14px">
      {card("Look", "", f'<span class="lab">Colour</span><div style="display: flex; gap: 10px">{colors}</div>' + row("Position", "", seg(["Bottom left", "Bottom right"], 1)) + row("Button", "", seg(["Icon", "Icon and text"], 1)))}
      {card("Messages", "", f'<span class="lab">Greeting</span><span class="fl" style="display: block; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; font-size: 13px; line-height: 1.5">Hi! Ask us anything or book a visit. We usually reply in seconds.</span>' + row("Quick buttons", "Book a visit · Prices · Directions", ob("Edit")) + row("Ask for phone number", "Before the first reply, so you can follow up", tg()))}
      {card("Install", "Paste before &lt;/body&gt; on every page", f'<div style="padding: 10px 12px; border-radius: 10px; background: var(--soft2); font-family: ui-monospace, Menlo, monospace; font-size: 11.5px; line-height: 1.6; color: var(--mut); word-break: break-all">&lt;script src="https://chat.vegham.ai/w.js" data-id="nila-7f3k" async&gt;&lt;/script&gt;</div><div style="display: flex; gap: 8px; margin-top: 10px">{ob("Copy code", "copy")}{ob("Email to my developer")}</div>' + row("Seen on", "nilaandco.in · /services · /contact", bd("Live", "good")))}</div>'''
    site = f'''<div style="flex: 1; min-width: 0; padding: 24px; background: var(--soft2); display: flex; flex-direction: column"><span style="font-size: 12.5px; color: var(--mut); margin-bottom: 10px">Preview on nilaandco.in</span>
      <div style="flex: 1; border-radius: 16px; background: #FFFFFF; box-shadow: var(--shadow); overflow: hidden; position: relative; color: #16182A">
        <div style="height: 34px; background: #F2F2F4; display: flex; align-items: center; gap: 6px; padding: 0 12px">{"".join(f'<span style="width: 10px; height: 10px; border-radius: 50%; background: {c}"></span>' for c in ["#FF5F57", "#FEBC2E", "#28C840"])}<span style="margin-left: 12px; font-size: 11.5px; color: #8A8A8A">nilaandco.in</span></div>
        <div style="padding: 36px 40px"><b style="font-size: 26px; font-weight: 600; letter-spacing: -0.02em">Nila &amp; Co</b><p style="margin: 8px 0 0; color: #6B6B6B; font-size: 14px; max-width: 340px">Consultations, follow-up visits and group sessions in Indiranagar.</p>
          <div style="display: flex; gap: 10px; margin-top: 22px">{"".join(f'<span style="width: 120px; height: 80px; border-radius: 12px; background: #F2F2F4"></span>' for _ in range(3))}</div></div>
        <div style="position: absolute; right: 20px; bottom: 76px; width: 300px; border-radius: 18px; background: #FFFFFF; box-shadow: 0 12px 40px rgba(0,0,0,.18); overflow: hidden">
          <div style="background: #16182A; color: #FFF; padding: 14px 16px; display: flex; align-items: center; gap: 10px"><span style="width: 30px; height: 30px; border-radius: 50%; background: #FFF; color: #16182A; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px">N</span><span><b style="display: block; font-size: 14px; font-weight: 600">Nila &amp; Co</b><span style="font-size: 11.5px; opacity: .7">Replies in seconds</span></span></div>
          <div style="padding: 14px; display: flex; flex-direction: column; gap: 8px; background: #FAFAFB"><div style="align-self: flex-start; max-width: 85%; background: #FFF; border: 1px solid #ECECF0; padding: 9px 12px; border-radius: 14px; font-size: 13px; line-height: 1.45">Hi! Ask us anything or book a visit. We usually reply in seconds.</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px">{"".join(f'<span style="padding: 6px 11px; border-radius: 999px; border: 1px solid #16182A; font-size: 12px">{t}</span>' for t in ["Book a visit", "Prices", "Directions"])}</div></div>
          <div style="padding: 10px 14px; border-top: 1px solid #ECECF0; font-size: 12.5px; color: #8A8A8A">Type a message…</div><div style="padding: 0 0 8px; text-align: center; font-size: 10.5px; color: #B0B0B5">AI assistant · powered by vegham</div></div>
        <span style="position: absolute; right: 20px; bottom: 20px; height: 44px; padding: 0 18px; border-radius: 999px; background: #16182A; color: #FFF; display: inline-flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 500">{I("msg", 16)}Chat with us</span></div></div>'''
    head = f'<div class="hd"><span style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--mut)">Channels and apps {I("chevr", 13)}</span><span class="logo" style="width: 30px; height: 30px; border-radius: 9px">{GLOBE(17)}</span><h1>Website chat</h1>{bd("Live", "good")}<span style="flex: 1"></span>{ob("Discard")}{pb("Save")}{SEP}{BELL}</div>'
    return f'<div style="display: flex; height: 100%; position: relative"><div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head}<div style="flex: 1; display: flex; min-height: 0">{left}{site}</div></div>{SMP}</div>'


if __name__ == '__main__':
    IC.setdefault('chevr', '<path d="M9 6l6 6-6 6"></path>')
    B = lambda f, t, a, html, col=False: build(f, t, active=a, main=html, notop=True, extra_css=CSS, collapsed=col)
    B('AppV2Payments.dc.html', 'App · Payments', 'Payments', payments())
    B('AppV2PaymentLinks.dc.html', 'App · Payments · links', 'Payments', links())
    B('AppV2Payouts.dc.html', 'App · Payments · payouts', 'Payments', payouts())
    B('AppV2Channels.dc.html', 'App · Channels and apps', 'Channels and apps', channels())
    B('AppV2ChannelWhatsApp.dc.html', 'App · Channels · WhatsApp', 'Channels and apps', whatsapp())
    B('AppV2ChannelWebchat.dc.html', 'App · Channels · website chat', 'Channels and apps', webchat())
    print('pay+ch ok')
