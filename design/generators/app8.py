"""Reports v3: a full analytics overview. One tall board, sample data, consistent totals.
Totals (last 30 days): 1,284 conversations · 312 bookings · ₹3,74,400 revenue · ₹1,200 average booking."""
import os, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app7
from app7 import I, IC, WA, IG, GLOBE, PH, GO, build, ob, pb, CSS, phead, smp, spark

H = 4180
# Chart palette: validated reference categorical slots (light / dark), single-hue blue ramp for magnitude.
RCSS = '''
.app{--s1:#2a78d6;--s2:#eb6834;--s3:#1baf7a;--s4:#eda100;--grid:#e1e0d9;--axis:#c3c2b7;--up:#006300;
  --q1:#cde2fb;--q2:#9ec5f4;--q3:#6da7ec;--q4:#3987e5;--q5:#256abf;--q6:#184f95}
.app:has(#th-dark:checked){--s1:#3987e5;--s2:#d95926;--s3:#199e70;--s4:#c98500;--grid:#2c2c2a;--axis:#383835;--up:#0ca30c}
.rc{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:18px 20px;min-width:0;position:relative}
.rt2{display:block;font-weight:600;font-size:14.5px}
.rs{display:block;font-size:12.5px;color:var(--mut);margin-top:2px}
.rh{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px}
.sh{display:flex;align-items:baseline;gap:10px;margin:14px 0 2px}
.sh h2{margin:0;font-size:16px;font-weight:600;letter-spacing:-0.01em}
.sh span{font-size:12.5px;color:var(--mut)}
.num{font-family:'Inter Tight',sans-serif;letter-spacing:-0.02em}
.lg{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--mut)}
.lg i{width:10px;height:10px;border-radius:3px;display:inline-block}
.tbl{width:100%;border-collapse:collapse;font-size:13px}
.tbl th{text-align:left;font-weight:500;font-size:12px;color:var(--mut);padding:0 10px 10px;border-bottom:1px solid var(--line);white-space:nowrap}
.tbl th.r,.tbl td.r{text-align:right}
.tbl td{padding:11px 10px;border-bottom:1px solid var(--line);white-space:nowrap}
.tbl tr:last-child td{border-bottom:0}
.hv{position:relative}
.hv .tt{display:none;position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);z-index:5;padding:8px 10px;border-radius:10px;background:var(--pop);box-shadow:var(--shadow);font-size:12px;white-space:nowrap;color:var(--text);pointer-events:none}
.hv:hover .tt{display:block}
.col{position:relative;height:100%;display:flex;align-items:flex-end;justify-content:center}
.col:hover{background:var(--soft2);border-radius:6px}
.xcol{position:relative;height:100%}
.xcol .xl{display:none;position:absolute;left:50%;top:0;bottom:0;width:1px;background:var(--axis)}
.xcol:hover .xl{display:block}
.xcol .tt{bottom:auto;top:-6px;transform:translate(-50%,-100%)}
.xcol:hover .tt{display:block}
.ins{display:flex;gap:12px;align-items:flex-start;padding:14px 16px;border-radius:14px;background:var(--soft2)}
.ins b{font-weight:600}
'''
HF = "font-family: 'Inter Tight', sans-serif; letter-spacing: -0.02em"
inr = lambda n: '₹' + (f'{n:,.0f}' if n < 100000 else f'{n // 100000},{(n % 100000) // 1000:02d},{n % 1000:03d}')


def card(title, sub, inner, right='', style=''):
    return f'<div class="rc" style="{style}"><div class="rh"><span><b class="rt2">{title}</b>{f"<span class=rs>{sub}</span>" if sub else ""}</span>{right}</div>{inner}</div>'


def legend(items):
    return '<span style="display: flex; gap: 14px; flex-wrap: wrap">' + ''.join(f'<span class="lg"><i style="background: {c}"></i>{t}</span>' for t, c in items) + '</span>'


def sechead(t, s):
    return f'<div class="sh"><h2>{t}</h2><span>{s}</span></div>'


def delta(t, good=True):
    arrow = '↑' if t.startswith('+') else '↓'
    return f'<span style="font-size: 12px; color: {"var(--up)" if good else "#d03b3b"}">{arrow} {t.lstrip("+-")}</span>'


def reports():
    # ---------------- KPI tiles
    k = [('Revenue', '₹3,74,400', '+14%', True, [30, 32, 36, 34, 40, 42, 41, 46, 48, 52]),
         ('Bookings', '312', '+9%', True, [20, 22, 21, 25, 24, 28, 27, 30, 31, 33]),
         ('New customers', '86', '+18%', True, [5, 6, 6, 7, 8, 7, 9, 9, 10, 11]),
         ('Conversations', '1,284', '+12%', True, [40, 44, 41, 50, 55, 52, 60, 63, 61, 70]),
         ('Chat to booking', '24.3%', '+1.6 pts', True, [21, 22, 22, 23, 22, 23, 24, 24, 24, 24.3]),
         ('No-shows', '6.1%', '-1.8 pts', True, [8.2, 8, 7.6, 7.4, 7, 6.9, 6.6, 6.4, 6.2, 6.1])]
    tiles = ''.join(f'<div class="rc" style="padding: 14px 16px"><span style="font-size: 12px; color: var(--mut)">{l}</span><div class="num" style="font-size: 26px; margin-top: 2px">{v}</div><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 4px">{delta(d, g)}{spark(p, "var(--s1)", 70, 24)}</div></div>' for l, v, d, g, p in k)

    # ---------------- Vegham summary + insights
    insights = [('warn', 'Saturday 10 AM to 12 PM was full on all 4 Saturdays.', '17 people asked for it and took another time. One more slot could add about ₹20,000 a month.', 'Add a slot'),
                ('pin', 'No-shows at Koramangala are 8.3%,', 'nearly double Indiranagar (4.9%). The 2-hour reminder is off there.', 'Turn on reminder'),
                ('msg', '3 people asked about student discounts', 'and Vegham had no answer. Add one so it can reply next time.', 'Add answer')]
    IC.setdefault('warn', '<path d="M12 4l9 16H3z"></path><path d="M12 10v4M12 17v.5"></path>')
    ins = ''.join(f'<div class="ins"><span style="width: 30px; height: 30px; border-radius: 9px; background: var(--card); display: inline-flex; align-items: center; justify-content: center; flex: none; box-shadow: 0 0 0 1px var(--line)">{I(ic, 15)}</span><span style="flex: 1; font-size: 13px; line-height: 1.5"><b>{a}</b> {b}<span style="display: block; margin-top: 6px; font-weight: 500">{c} →</span></span></div>' for ic, a, b, c in insights)
    summary = f'''<div class="rc" style="display: grid; grid-template-columns: 1fr 1.9fr; gap: 24px; align-items: start">
      <div><span style="font-size: 12px; color: var(--mut)">Vegham’s summary · 9 Oct to 7 Nov</span>
        <p style="margin: 8px 0 0; font-size: 16px; line-height: 1.55">A strong month. <b style="font-weight: 600">312 bookings</b>, up 9%, and revenue up 14%. Vegham answered <b style="font-weight: 600">96%</b> of messages within 10 seconds and handled <b style="font-weight: 600">83%</b> of conversations without you.</p>
        <span style="display: inline-flex; gap: 8px; margin-top: 14px">{ob("Share on WhatsApp", "msg")}{ob("Schedule", "clock")}</span></div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px">{ins}</div></div>'''

    # ---------------- Revenue per day (bars, hover) + breakdowns
    rev = [9800, 11200, 10400, 12600, 13800, 18200, 8400, 10200, 11800, 11000, 13200, 14600, 19400, 8800, 10600, 12200, 11600, 13600, 15200, 20800, 9200,
           11000, 12800, 12000, 14200, 15800, 21600, 9600, 11400, 13000]
    rev[-1] += 374400 - sum(rev)
    mx = 24000
    dates = [(9 + i) if i < 23 else (i - 22) for i in range(30)]
    mon = ['Oct' if i < 23 else 'Nov' for i in range(30)]
    bars = ''.join(f'<span class="col hv"><span style="width: 62%; height: {v / mx * 100:.1f}%; background: var(--s1); border-radius: 4px 4px 0 0"></span><span class="tt"><b style="font-weight: 600">{inr(v)}</b> · {d} {m}<br><span style="color: var(--mut)">{round(v / 1200)} bookings</span></span></span>' for v, d, m in zip(rev, dates, mon))
    yax = ''.join(f'<span style="position: absolute; left: 0; right: 0; bottom: {t / mx * 100:.1f}%; border-top: 1px solid var(--grid)"><span style="position: absolute; left: -44px; top: -8px; width: 38px; text-align: right; font-size: 11px; color: var(--mut2)">{"0" if t == 0 else f"{t // 1000}k"}</span></span>' for t in (0, 8000, 16000, 24000))
    xl = ''.join(f'<span style="text-align: center; font-size: 11px; color: var(--mut2)">{f"{d} {m}" if i % 7 == 0 else ""}</span>' for i, (d, m) in enumerate(zip(dates, mon)))
    revchart = f'''<div style="padding-left: 44px"><div style="position: relative; height: 300px">{yax}<div style="position: absolute; inset: 0; display: grid; grid-template-columns: repeat(30, 1fr); gap: 2px">{bars}</div></div>
      <div style="display: grid; grid-template-columns: repeat(30, 1fr); gap: 2px; margin-top: 6px; white-space: nowrap">{xl}</div></div>'''
    svc = [('Packages and memberships', 19, 171650), ('Consultation', 148, 118400), ('Assessment', 30, 36000), ('Follow-up visit', 54, 27000), ('Group session', 61, 21350)]
    svch = ''.join(f'<div style="padding: 8px 0"><div style="display: flex; justify-content: space-between; font-size: 13px"><span>{n} <span style="color: var(--mut2)">· {b}</span></span><b style="font-weight: 500">{inr(r)}</b></div><div style="margin-top: 6px; height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {r / 171650 * 100:.0f}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></div></div>' for n, b, r in svc)
    pm = [('UPI', 62, 'var(--s1)'), ('Card', 29, 'var(--s2)'), ('Cash at visit', 9, 'var(--s3)')]
    pmbar = '<div style="display: flex; gap: 2px; height: 14px; margin-top: 4px">' + ''.join(f'<span class="hv" style="width: {p}%; background: {c}; border-radius: {"4px 0 0 4px" if i == 0 else "0 4px 4px 0" if i == 2 else "0"}"><span class="tt">{n} · {p}%</span></span>' for i, (n, p, c) in enumerate(pm)) + '</div>'
    pml = '<div style="display: flex; justify-content: space-between; margin-top: 10px">' + ''.join(f'<span class="lg"><i style="background: {c}"></i>{n} <b style="color: var(--text); font-weight: 500">{p}%</b></span>' for n, p, c in pm) + '</div>'
    money = f'''<div style="display: grid; grid-template-columns: 1.7fr 1fr; gap: 14px">
      {card("Revenue per day", "Paid bookings · ₹12,480 a day on average", revchart, legend([("Revenue", "var(--s1)")]) if False else '<span class="seg"><label style="background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)">Revenue</label><label>Bookings</label></span>')}
      <div style="display: flex; flex-direction: column; gap: 14px">
        {card("Revenue by service", "", svch)}
        {card("How customers paid", "Through Stripe, except cash", pmbar + pml)}</div></div>'''

    # ---------------- Funnel
    fn = [('Conversations', 1284), ('Asked about booking', 702), ('Offered a time', 516), ('Booked', 312), ('Came in', 293), ('Paid', 288)]
    fh = '<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; align-items: end">'
    for i, (n, v) in enumerate(fn):
        drop = '<span style="font-size: 12px; color: var(--mut)">Starting point</span>' if i == 0 else f'<span style="font-size: 12px; color: var(--mut)">{v / fn[i - 1][1] * 100:.0f}% of previous</span>'
        fh += f'''<div><div class="num" style="font-size: 22px">{v:,}</div><span style="display: block; font-size: 12.5px; color: var(--text)">{n}</span>{drop}
          <div class="hv" style="margin-top: 12px; height: 120px; display: flex; align-items: flex-end; background: var(--soft2); border-radius: 8px"><span style="display: block; width: 100%; height: {v / 1284 * 100:.1f}%; background: var(--s1); border-radius: 6px; opacity: 1"></span><span class="tt">{v / 1284 * 100:.1f}% of all conversations</span></div></div>'''
    fh += '</div>'
    funnel = card('From conversation to payment', 'Where people drop off. The biggest gap: 186 people were offered a time and did not book.', fh,
                  '<span style="font-size: 12.5px; color: var(--mut)">Overall <b style="color: var(--text); font-weight: 600">22.4%</b> conversations became paid visits</span>')

    # ---------------- Bookings per day line with crosshair hover + heatmap
    pts = [6, 8, 7, 9, 10, 15, 4, 8, 9, 8, 11, 12, 16, 5, 9, 10, 9, 11, 13, 17, 6, 9, 11, 10, 12, 13, 18, 7, 10, 11]
    prev = [max(3, round(p * .9 + 1.5 * math.sin(i))) for i, p in enumerate(pts)]
    W, Hh, top = 640, 190, 20
    y = lambda v: Hh - v / top * Hh
    mk = lambda arr: ' '.join(f'{"M" if i == 0 else "L"}{i * W / (len(arr) - 1):.1f} {y(v):.1f}' for i, v in enumerate(arr))
    grid = ''.join(f'<line x1="0" x2="{W}" y1="{y(t):.1f}" y2="{y(t):.1f}" stroke="var(--grid)"></line>' for t in (0, 5, 10, 15, 20))
    line = f'<svg viewBox="0 0 {W} {Hh}" width="100%" height="{Hh}" preserveAspectRatio="none" style="display: block; overflow: visible" aria-label="Bookings per day, this month against last month (sample)">{grid}<path d="{mk(prev)}" fill="none" stroke="var(--s2)" stroke-width="2" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"></path><path d="{mk(pts)}" fill="none" stroke="var(--s1)" stroke-width="2" vector-effect="non-scaling-stroke"></path></svg>'
    hover = '<div style="position: absolute; inset: 0; display: grid; grid-template-columns: repeat(30, 1fr)">' + ''.join(
        f'<span class="xcol hv"><span class="xl"></span><span style="position: absolute; left: 50%; top: {y(v) / Hh * 100:.1f}%; width: 8px; height: 8px; margin: -4px 0 0 -4px; border-radius: 50%; background: var(--s1); box-shadow: 0 0 0 2px var(--card); display: none" class="dot"></span><span class="tt"><b style="font-weight: 600">{d} {m}</b><br><span class="lg"><i style="background: var(--s1)"></i>This month {v}</span><br><span class="lg"><i style="background: var(--s2)"></i>Last month {pv}</span></span></span>'
        for v, pv, d, m in zip(pts, prev, dates, mon)) + '</div>'
    ylab = ''.join(f'<span style="position: absolute; left: -30px; top: {y(t) / Hh * 100:.1f}%; transform: translateY(-50%); width: 22px; text-align: right; font-size: 11px; color: var(--mut2)">{t}</span>' for t in (0, 10, 20))
    lchart = f'<div style="padding-left: 30px"><div style="position: relative">{line}{hover}{ylab}</div><div style="display: grid; grid-template-columns: repeat(30, 1fr); margin-top: 6px; white-space: nowrap">{xl}</div></div>'
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; hrs = list(range(8, 22, 2))
    ramp = ['var(--soft2)', 'var(--q1)', 'var(--q2)', 'var(--q3)', 'var(--q4)', 'var(--q5)', 'var(--q6)']
    def heat(d, h):
        base = {'Sat': 1.0, 'Fri': .85, 'Sun': .55}.get(d, .6)
        peak = math.exp(-((h - 19) ** 2) / 10) + .6 * math.exp(-((h - 11) ** 2) / 6)
        return min(1, base * peak + (.4 if d == 'Sat' and h < 14 else 0))
    hm = '<div style="display: grid; grid-template-columns: 34px repeat(7, 1fr); gap: 2px; font-size: 11px; color: var(--mut2)"><span></span>' + ''.join(f'<span style="text-align: center">{h if h <= 12 else h - 12}{"a" if h < 12 else "p"}</span>' for h in hrs)
    for d in days:
        hm += f'<span style="line-height: 24px">{d}</span>' + ''.join(f'<span class="hv" style="height: 24px; border-radius: 4px; background: {ramp[min(6, int(heat(d, h) * 6.99))]}"><span class="tt">{d} {h if h <= 12 else h - 12} {"AM" if h < 12 else "PM"} · {round(heat(d, h) * 64)} conversations</span></span>' for h in hrs)
    hm += '</div><div style="display: flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 11px; color: var(--mut2)">Fewer' + ''.join(f'<span style="width: 18px; height: 10px; border-radius: 3px; background: {c}"></span>' for c in ramp) + 'More</div>'
    demand = f'''<div style="display: grid; grid-template-columns: 1.55fr 1fr; gap: 14px">
      {card("Bookings per day", "This month against the same days last month", lchart, legend([("This month", "var(--s1)"), ("Last month", "var(--s2)")]))}
      {card("Busiest times", "Conversations by day and hour", hm)}</div>'''

    # ---------------- Vegham performance
    rt = [('Under 5 sec', 71), ('5 to 10 sec', 25), ('10 to 30 sec', 3), ('Over 30 sec', 1)]
    rth = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; align-items: end; height: 170px">' + ''.join(f'<span class="hv" style="display: flex; flex-direction: column; justify-content: flex-end; height: 100%; align-items: center; gap: 6px"><span style="font-size: 12px; font-weight: 500">{p}%</span><span style="width: 70%; height: {max(p, 2) * 1.8:.0f}px; background: var(--s1); border-radius: 4px 4px 0 0"></span><span class="tt">{p}% of first replies</span></span>' for t, p in rt) + '</div><div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 8px; border-top: 1px solid var(--axis); padding-top: 6px">' + ''.join(f'<span style="text-align: center; font-size: 11.5px; color: var(--mut)">{t}</span>' for t, _ in rt) + '</div>'
    who = [('Vegham alone', 83, 'var(--s1)'), ('Handed to your team', 14, 'var(--s2)'), ('Your team only', 3, 'var(--s3)')]
    whobar = '<div style="display: flex; gap: 2px; height: 14px">' + ''.join(f'<span class="hv" style="width: {p}%; background: {c}; border-radius: {"4px 0 0 4px" if i == 0 else "0 4px 4px 0" if i == 2 else "0"}"><span class="tt">{n} · {p}%</span></span>' for i, (n, p, c) in enumerate(who)) + '</div>'
    whol = '<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 14px">' + ''.join(f'<span style="display: flex; justify-content: space-between; font-size: 13px"><span class="lg" style="font-size: 13px; color: var(--text)"><i style="background: {c}"></i>{n}</span><b style="font-weight: 500">{p}%</b></span>' for n, p, c in who) + '</div><span style="display: block; margin-top: 12px; font-size: 12.5px; color: var(--mut)">Top reasons for handing over: complaint (21), refund (12), not sure of the answer (9)</span>'
    stat = lambda v, l, s: f'<div style="padding: 14px 16px; border-radius: 14px; background: var(--soft2)"><div class="num" style="font-size: 24px">{v}</div><span style="display: block; font-size: 12.5px">{l}</span><span style="font-size: 12px; color: var(--mut)">{s}</span></div>'
    perfstats = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">' + stat('4 sec', 'Median first reply', 'Your team: 18 min') + stat('64 hours', 'Time saved', 'About 3 min per conversation') + stat('38%', 'After opening hours', '488 conversations') + stat(inr(124800), 'Booked after hours', '104 bookings while closed') + '</div>'
    qs = [('Prices', 212), ('Free times', 188), ('Location and parking', 96), ('Reschedule', 74), ('Packages', 51)]
    qh = ''.join(f'<div style="display: grid; grid-template-columns: 1fr 120px 36px; align-items: center; gap: 10px; padding: 6px 0; font-size: 13px"><span>{n}</span><span style="height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {v / 212 * 100:.0f}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span><span style="text-align: right; color: var(--mut)">{v}</span></div>' for n, v in qs)
    unq = ''.join(f'<div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-top: 1px solid var(--line); font-size: 13px"><span>{n} <span style="color: var(--mut2)">· {c}×</span></span><span style="font-weight: 500; font-size: 12.5px">Answer</span></div>' for n, c in [('Student discounts?', 3), ('Female staff member?', 3), ('Okay for kids?', 2)])
    perf = f'''<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px">
      {card("How fast Vegham replied", "First reply to a new message", rth)}
      {card("Who handled conversations", "1,284 conversations", whobar + whol)}
      {card("What Vegham saved you", "", perfstats)}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">
      {card("What customers asked about", "Top topics this month", qh)}
      {card("Questions Vegham couldn’t answer", "Answer once and Vegham uses it from then on", unq, '<span style="font-size: 12.5px; color: var(--mut)">8 this month</span>')}</div>'''

    # ---------------- Customers
    newv = [18, 22, 21, 25]; ret = [52, 55, 57, 62]
    wk = ['9–15 Oct', '16–22 Oct', '23–29 Oct', '30 Oct–7 Nov']
    sb = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; height: 170px; align-items: end; border-bottom: 1px solid var(--axis)">' + ''.join(
        f'<span class="hv" style="display: flex; flex-direction: column; gap: 2px; align-items: center; height: 100%; justify-content: flex-end"><span style="font-size: 11.5px; color: var(--mut)">{n + r}</span><span style="width: 56%; height: {n * 1.5:.0f}px; background: var(--s2); border-radius: 4px 4px 0 0"></span><span style="width: 56%; height: {r * 1.5:.0f}px; background: var(--s1)"></span><span class="tt">{w}<br><span class="lg"><i style="background: var(--s1)"></i>Returning {r}</span><br><span class="lg"><i style="background: var(--s2)"></i>New {n}</span></span></span>'
        for n, r, w in zip(newv, ret, wk)) + '</div><div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 6px">' + ''.join(f'<span style="text-align: center; font-size: 11.5px; color: var(--mut)">{w}</span>' for w in wk) + '</div>'
    coh = [('Jun', 64, [100, 58, 46, 41, 38]), ('Jul', 71, [100, 61, 49, 44, None]), ('Aug', 69, [100, 63, 52, None, None]), ('Sep', 78, [100, 66, None, None, None]), ('Oct', 86, [100, None, None, None, None])]
    def qc(v):
        if v is None: return '<span></span>'
        c = ramp[min(6, max(1, int((v - 30) / 70 * 6) + 1))]
        fg = '#FFFFFF' if v >= 55 else 'var(--text)'
        return f'<span style="height: 30px; border-radius: 5px; background: {c}; color: {fg}; font-size: 12px; display: flex; align-items: center; justify-content: center">{v}%</span>'
    cg = '<div style="display: grid; grid-template-columns: 74px repeat(5, 1fr); gap: 3px; font-size: 12px"><span></span>' + ''.join(f'<span style="text-align: center; color: var(--mut2); font-size: 11px">{"First" if i == 0 else f"+{i} mo"}</span>' for i in range(5))
    for m, n, vals in coh:
        cg += f'<span style="display: flex; flex-direction: column; justify-content: center; line-height: 1.2"><span>{m}</span><span style="font-size: 11px; color: var(--mut2)">{n} people</span></span>' + ''.join(qc(v) for v in vals)
    cg += '</div>'
    rat = [(5, 52), (4, 9), (3, 2), (2, 1), (1, 0)]
    rh = ''.join(f'<div style="display: grid; grid-template-columns: 26px 1fr 24px; gap: 8px; align-items: center; font-size: 12.5px; padding: 3px 0"><span style="color: var(--mut)">{s} ★</span><span style="height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {c / 52 * 100:.0f}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span><span style="text-align: right; color: var(--mut)">{c}</span></div>' for s, c in rat)
    ratings = f'<div style="display: flex; gap: 20px; align-items: center"><div><div class="num" style="font-size: 40px; line-height: 1">4.8</div><span style="font-size: 12px; color: var(--mut)">64 reviews · +0.1</span></div><div style="flex: 1">{rh}</div></div>'
    topc = [('Team Lumen', '12 visits', 42000), ('Riya Sharma', '9 visits', 18400), ('Meera Iyer', '7 visits', 14200), ('Arjun Mehta', '6 visits', 12800), ('Kavya Nair', '5 visits', 11600)]
    tch = ''.join(f'<div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 1px solid var(--line); font-size: 13px"><span>{n} <span style="color: var(--mut2)">· {v}</span></span><b style="font-weight: 500">{inr(r)}</b></div>' for n, v, r in topc)
    cust = f'''<div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 14px">
      {card("New and returning", "Bookings per week · 72% came back", sb, legend([("Returning", "var(--s1)"), ("New", "var(--s2)")]))}
      {card("Who comes back", "Share of each month’s new customers who booked again", cg)}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px">
      {card("Ratings", "Google and after-visit surveys", ratings)}
      {card("Top customers", "By spend, last 12 months", tch)}
      {card("Customer base", "", '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">' + stat("1,284", "Opted in to messages", "37 opted out") + stat("₹8,900", "Average yearly spend", "+6%") + stat("41 days", "Average gap between visits", "-3 days") + stat("58", "Haven’t booked in 60 days", "Win-back is off") + "</div>")}</div>'''

    # ---------------- Channels table
    chs = [(WA(15), 'WhatsApp', 745, 196, 235200), (PH(15), 'Phone', 270, 62, 74400), (IG(15), 'Instagram', 141, 28, 33600), (GLOBE(15), 'Website chat', 90, 19, 22800), (GO(15), 'Google', 38, 7, 8400)]
    crow = ''.join(f'<tr><td><span style="display: inline-flex; align-items: center; gap: 10px">{ic}{n}</span></td><td class="r">{c:,}</td><td class="r">{b}</td><td><span style="display: flex; align-items: center; gap: 10px"><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft2); min-width: 80px"><span style="display: block; width: {b / c * 100 / 30 * 100:.0f}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span><span style="width: 40px; text-align: right">{b / c * 100:.0f}%</span></span></td><td class="r">{inr(r)}</td><td class="r" style="color: var(--mut)">{r / 374400 * 100:.0f}%</td></tr>' for ic, n, c, b, r in chs)
    chtable = f'<table class="tbl"><tr><th>Channel</th><th class="r">Conversations</th><th class="r">Bookings</th><th style="width: 220px">Became a booking</th><th class="r">Revenue</th><th class="r">Share</th></tr>{crow}</table>'
    locs = [('Indiranagar', 204, 248800, 81, '4.9%', 4.9), ('Koramangala', 108, 125600, 64, '8.3%', 4.7)]
    lrow = ''.join(f'<tr><td><b style="font-weight: 500">{n}</b></td><td class="r">{b}</td><td class="r">{inr(r)}</td><td><span style="display: flex; align-items: center; gap: 8px"><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft2); min-width: 60px"><span style="display: block; width: {u}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span>{u}%</span></td><td class="r" style="{"color: #d03b3b" if ns == "8.3%" else ""}">{ns}</td><td class="r">{rt_} ★</td></tr>' for n, b, r, u, ns, rt_ in locs)
    team = [('V', 'Vinay', '#3B6CF6', 128, 162000, 82, 4.9), ('P', 'Priya Nair', '#0E9F6E', 112, 131200, 74, 4.8), ('R', 'Rahul Menon', '#7C3AED', 72, 81200, 61, 4.7)]
    trow = ''.join(f'<tr><td><span style="display: inline-flex; align-items: center; gap: 8px"><span style="width: 24px; height: 24px; border-radius: 50%; background: {c}; color: #FFFFFF; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center">{a}</span>{n}</span></td><td class="r">{b}</td><td class="r">{inr(r)}</td><td><span style="display: flex; align-items: center; gap: 8px"><span style="flex: 1; height: 6px; border-radius: 3px; background: var(--soft2); min-width: 60px"><span style="display: block; width: {u}%; height: 100%; border-radius: 3px; background: var(--s1)"></span></span>{u}%</span></td><td class="r">{rt_} ★</td></tr>' for a, n, c, b, r, u, rt_ in team)
    where = f'''{card("Channels", "Where conversations started and what they were worth", chtable, ob("Compare periods"))}
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">
      {card("Locations", "Time booked out of open hours", f'<table class="tbl"><tr><th>Location</th><th class="r">Bookings</th><th class="r">Revenue</th><th>Booked</th><th class="r">No-shows</th><th class="r">Rating</th></tr>{lrow}</table>')}
      {card("Team", "Time booked out of working hours", f'<table class="tbl"><tr><th>Person</th><th class="r">Bookings</th><th class="r">Revenue</th><th>Booked</th><th class="r">Rating</th></tr>{trow}</table>')}</div>'''

    # ---------------- Calls + campaigns + scheduled
    co = [('Question answered', 118, 'var(--s1)'), ('Booked', 62, 'var(--s2)'), ('Sent to your team', 34, 'var(--s3)'), ('Spam blocked', 41, 'var(--s4)'), ('Voicemail', 15, 'var(--mut2)')]
    cobar = '<div style="display: flex; gap: 2px; height: 14px">' + ''.join(f'<span class="hv" style="width: {v / 270 * 100:.1f}%; background: {c}; border-radius: {"4px 0 0 4px" if i == 0 else "0 4px 4px 0" if i == 4 else "0"}"><span class="tt">{n} · {v}</span></span>' for i, (n, v, c) in enumerate(co)) + '</div>'
    col = '<div style="display: flex; flex-direction: column; gap: 7px; margin-top: 14px">' + ''.join(f'<span style="display: flex; justify-content: space-between; font-size: 13px"><span class="lg" style="font-size: 13px; color: var(--text)"><i style="background: {c}"></i>{n}</span><span style="color: var(--mut)">{v}</span></span>' for n, v, c in co) + '</div>'
    calls = '<div style="display: flex; gap: 22px; margin-bottom: 14px">' + ''.join(f'<span><span class="num" style="display: block; font-size: 22px">{v}</span><span style="font-size: 12px; color: var(--mut)">{l}</span></span>' for v, l in [('270', 'calls'), ('2:14', 'average length'), ('41', 'while you were busy')]) + '</div>' + cobar + col
    cmp = [('Diwali offer · 15% off packages', 842, 38, 45600, 1180), ('Monsoon check-in', 640, 21, 25200, 960)]
    cmh = ''.join(f'<div style="padding: 10px 0; border-top: 1px solid var(--line)"><div style="display: flex; justify-content: space-between; font-size: 13px"><b style="font-weight: 500">{n}</b><b style="font-weight: 500">{inr(r)}</b></div><span style="font-size: 12px; color: var(--mut)">{s} sent · {b} bookings · ₹{f:,} Meta fees · {r // f}× return</span></div>' for n, s, b, r, f in cmp)
    cmh = '<div style="display: flex; gap: 22px; margin-bottom: 8px">' + ''.join(f'<span><span class="num" style="display: block; font-size: 22px">{v}</span><span style="font-size: 12px; color: var(--mut)">{l}</span></span>' for v, l in [('₹70,800', 'from campaigns'), ('33×', 'return on fees')]) + '</div>' + cmh
    sch = [('Morning report', 'Every day, 8:00 AM · WhatsApp to Vinay', True), ('Weekly summary', 'Mondays · email to Vinay and Priya', True), ('Monthly report (PDF)', '1st of the month · email to your accountant', False)]
    schh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid var(--line)"><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span><span class="sw{" on" if on else ""}"></span></div>' for t, d, on in sch)
    exp = '<div style="display: flex; gap: 8px; margin-top: 12px">' + ob('CSV', 'download') + ob('PDF', 'download') + ob('Google Sheets') + '</div>'
    last = f'''<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px">
      {card("Calls", "Answered by Vegham’s voice receptionist", calls)}
      {card("Campaigns", "Bookings that came from a campaign message", cmh)}
      {card("Scheduled reports", "Sent automatically", schh + exp)}</div>'''

    tabs = ['Overview', 'Revenue', 'Bookings', 'Conversations', 'Customers', 'Calls', 'Campaigns', 'Team']
    tabh = '<div style="display: flex; gap: 22px; padding: 0 24px; border-bottom: 1px solid var(--line); font-size: 13.5px">' + ''.join(f'<span style="height: 42px; display: inline-flex; align-items: center; {"border-bottom: 2px solid var(--text); font-weight: 500; color: var(--text)" if i == 0 else "color: var(--mut)"}">{t}</span>' for i, t in enumerate(tabs)) + '</div>'
    right = ('<span class="seg"><label>7 days</label><label style="background: var(--pop); color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,.12)">30 days</label><label>90 days</label><label>Custom</label></span>'
             + ob('vs previous 30 days') + ob('All locations') + ob('Export', 'download'))
    main = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{phead("Reports", "9 Oct – 7 Nov", right)}{tabh}
      <div style="flex: 1; overflow: hidden; padding: 20px 24px 40px; display: flex; flex-direction: column; gap: 14px">
        {summary}
        <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px">{tiles}</div>
        {sechead("Money", "What came in and from where")}{money}
        {sechead("Bookings", "Demand and how people book")}{funnel}{demand}
        {sechead("Vegham", "How your AI front desk performed")}{perf}
        {sechead("Customers", "Who is coming and coming back")}{cust}
        {sechead("Channels, locations and team", "")}{where}
        {sechead("Calls, campaigns and sharing", "")}{last}
      </div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{main}<span class="smp" style="position: absolute; right: 24px; top: 74px">Sample data</span></div>'


if __name__ == '__main__':
    build('AppV2Reports.dc.html', 'App · Reports', active='Reports', main=reports(), notop=True, extra_css=CSS + RCSS, h=H)
    build('AppV2ReportsDark.dc.html', 'App · Reports · dark', active='Reports', main=reports(), notop=True, extra_css=CSS + RCSS, h=H, theme='dark')
    print('reports ok')
