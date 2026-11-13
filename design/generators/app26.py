"""Insights v2: full analytics for the focused product (calls, WhatsApp, memory). Tall board. Neutral palette; ink + aurora green only."""
import os, sys, math
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app25, app23, app21, app20, app9, app2
from app23 import I, IC, cav, tg, seg, G, ob, pb, chip, bd, build, link, F, SMP, MEMI, NEUTRAL, COLOR_SWAPS, CSS, NAV, wave

H = 2560
INK = 'var(--ink)'
CSS2 = CSS + '''
.kc{padding:16px 18px;border-radius:16px;border:1px solid var(--line);background:var(--card)}
.kc .l{font-size:12.5px;color:var(--mut)}
.kc .v{font-family:'Inter Tight',sans-serif;font-size:28px;letter-spacing:-0.02em;margin-top:2px}
.ch{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:18px 20px;min-width:0}
.ch h3{margin:0;font-size:14.5px;font-weight:600}
.ch .s{display:block;font-size:12.5px;color:var(--mut);margin-top:2px}
.lgd{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--mut)}
.lgd i{width:10px;height:10px;border-radius:3px;display:inline-block}
.sh2{display:flex;align-items:baseline;gap:10px;margin:18px 0 0}
.sh2 b{font-size:16px;font-weight:600}.sh2 span{font-size:12.5px;color:var(--mut)}
.bar{height:8px;border-radius:4px;background:var(--soft)}
.bar span{display:block;height:100%;border-radius:4px}
'''


def spark(pts, w=80, h=26, col=G):
    mx, mn = max(pts), min(pts)
    p = ' '.join(f'{"M" if i == 0 else "L"}{i * w / (len(pts) - 1):.1f} {h - 2 - (v - mn) / (mx - mn or 1) * (h - 4):.1f}' for i, v in enumerate(pts))
    return f'<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" aria-hidden="true"><path d="{p}" fill="none" stroke="{col}" stroke-width="1.8" stroke-linecap="round"></path></svg>'


def chart(title, sub, inner, right=''):
    return f'<div class="ch"><div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 14px"><span><h3>{title}</h3>{f"<span class=s>{sub}</span>" if sub else ""}</span>{right}</div>{inner}</div>'


def legend(items):
    return '<span style="display: flex; gap: 14px">' + ''.join(f'<span class="lgd"><i style="background: {c}"></i>{t}</span>' for t, c in items) + '</span>'


def hbars(rows, mx=None, col=INK, w_label=180, fmt=lambda v: f'{v}%'):
    mx = mx or max(v for _, v in rows)
    return ''.join(f'<div style="display: grid; grid-template-columns: {w_label}px 1fr 52px; gap: 12px; align-items: center; padding: 6px 0; font-size: 13.5px"><span>{n}</span><span class="bar"><span style="width: {v / mx * 100:.0f}%; background: {col}"></span></span><span style="text-align: right; color: var(--mut)">{fmt(v)}</span></div>' for n, v in rows)


def insights():
    # summary + suggestions
    sug = [('After-hours calls are 31% of all calls', 'Vegham answered all 151. Keep “after hours” on.', 'See hours'), ('3 questions keep coming up', 'Parking for vans, a lift, student discount.', 'Answer them'), ('24 callers tried Kannada', 'Turn it on so they get answers in Kannada.', 'Turn on')]
    sh = ''.join(f'<div style="padding: 14px 16px; border-radius: 14px; background: var(--soft2); font-size: 13px; line-height: 1.5"><b style="display: block; font-weight: 600">{a}</b><span style="color: var(--mut)">{b}</span><span style="display: block; margin-top: 6px; font-weight: 500">{c} →</span></div>' for a, b, c in sug)
    summary = f'''<div class="ch" style="display: grid; grid-template-columns: 1fr 1.7fr; gap: 24px; align-items: start"><div><span style="font-size: 12.5px; color: var(--mut)">This month in one line</span><p style="margin: 8px 0 0; font-size: 17px; line-height: 1.5">Vegham answered <b style="font-weight: 600">486 calls</b> and <b style="font-weight: 600">742 chats</b>, saved <b style="font-weight: 600">112 missed calls</b> and handled <b style="font-weight: 600">86%</b> without you.</p></div>
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px">{sh}</div></div>'''
    k = [('Calls answered', '486', '↑ 12%', [30, 34, 33, 38, 41, 40, 45, 48]), ('Missed calls saved', '112', '↑ 18%', [8, 9, 11, 10, 12, 14, 13, 16]), ('WhatsApp chats', '742', '↑ 9%', [60, 64, 62, 70, 72, 75, 78, 80]),
         ('Handled without you', '86%', '↑ 3 pts', [80, 81, 82, 83, 83, 84, 85, 86]), ('Bookings and requests', '214', '↑ 14%', [18, 20, 21, 24, 25, 27, 28, 30]), ('Est. revenue from them', '₹2,56,800', '↑ 11%', [20, 22, 24, 23, 27, 28, 30, 32])]
    kh = '<div style="display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 10px">' + ''.join(f'<div class="kc"><span class="l">{l}</span><div class="v">{v}</div><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 4px"><span style="font-size: 12px; color: {G}">{d}</span>{spark(p, 64, 22)}</div></div>' for l, v, d, p in k) + '</div>'

    # calls vs chats per day (one axis: count)
    calls = [12, 14, 13, 18, 22, 25, 9, 13, 15, 14, 19, 21, 27, 10, 14, 16, 15, 20, 23, 28, 11, 15, 17, 16, 21, 24, 29, 12, 16, 18]
    chats = [20, 22, 21, 26, 28, 33, 17, 21, 24, 23, 27, 30, 35, 19, 22, 25, 24, 29, 31, 36, 20, 23, 26, 25, 30, 32, 38, 21, 24, 27]
    W, Hh, top = 760, 200, 40
    y = lambda v: Hh - v / top * Hh
    mk = lambda a: ' '.join(f'{"M" if i == 0 else "L"}{i * W / (len(a) - 1):.1f} {y(v):.1f}' for i, v in enumerate(a))
    grid = ''.join(f'<line x1="0" x2="{W}" y1="{y(t):.1f}" y2="{y(t):.1f}" stroke="var(--line)"></line><text x="-8" y="{y(t) + 4:.1f}" text-anchor="end" font-size="11" fill="var(--mut2)">{t}</text>' for t in (0, 10, 20, 30, 40))
    line = f'<svg viewBox="-30 -6 {W + 36} {Hh + 26}" width="100%" height="{Hh + 26}" role="img" aria-label="Calls and chats per day">{grid}<path d="{mk(chats)}" fill="none" stroke="{G}" stroke-width="2"></path><path d="{mk(calls)}" fill="none" stroke="var(--text)" stroke-width="2"></path>' + ''.join(f'<text x="{i * W / 29:.0f}" y="{Hh + 18}" text-anchor="middle" font-size="11" fill="var(--mut2)">{d}</text>' for i, d in [(0, "9 Oct"), (7, "16 Oct"), (14, "23 Oct"), (21, "30 Oct"), (28, "6 Nov")]) + '</svg>'
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; hrs = list(range(8, 23, 2))
    def heat(d, h):
        base = {'Sat': 1.0, 'Fri': .85, 'Sun': .5}.get(d, .62)
        return min(1, base * (math.exp(-((h - 18) ** 2) / 10) + .6 * math.exp(-((h - 11) ** 2) / 6)) + (.35 if d == 'Sat' and h < 14 else 0))
    hm = '<div style="display: grid; grid-template-columns: 34px repeat(8, 1fr); gap: 3px; font-size: 11px; color: var(--mut2)"><span></span>' + ''.join(f'<span style="text-align: center">{h if h <= 12 else h - 12}{"a" if h < 12 else "p"}</span>' for h in hrs)
    for d in days:
        hm += f'<span style="line-height: 24px">{d}</span>' + ''.join(f'<span title="{d} {h}:00 · {round(heat(d, h) * 40)} calls" style="height: 24px; border-radius: 4px; background: {G if heat(d, h) > .92 else "var(--text)"}; opacity: {(.06 + .7 * heat(d, h)) if heat(d, h) <= .92 else 1:.2f}"></span>' for h in hrs)
    hm += f'</div><div style="display: flex; justify-content: space-between; margin-top: 12px; font-size: 12px; color: var(--mut)"><span>Darker = more calls</span><span><span style="color: {G}">■</span> busiest: Sat 10 AM, weekdays 6 PM</span></div>'
    row1 = f'''<div style="display: grid; grid-template-columns: 1.55fr 1fr; gap: 14px">{chart("Calls and chats per day", "Last 30 days", line, legend([("Calls", "var(--text)"), ("WhatsApp chats", G)]))}{chart("When people reach you", "Day and hour", hm)}</div>'''

    # funnel + missed-call recovery
    fn = [('Calls and chats', 1228), ('Understood', 1179), ('Answered by Vegham', 1056), ('Booked or requested', 214), ('Showed up', 188)]
    fh = '<div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; align-items: end">' + ''.join(f'<div><div style="font-family: Inter Tight, sans-serif; font-size: 22px">{v:,}</div><span style="display: block; font-size: 12.5px">{n}</span><span style="font-size: 12px; color: var(--mut)">{"Start" if i == 0 else f"{v / fn[i - 1][1] * 100:.0f}% of previous"}</span><div style="margin-top: 10px; height: 110px; display: flex; align-items: flex-end; background: var(--soft2); border-radius: 8px"><span title="{v:,}" style="display: block; width: 100%; height: {v / 1228 * 100:.1f}%; border-radius: 6px; background: {G if i >= 3 else "var(--text)"}"></span></div></div>' for i, (n, v) in enumerate(fn)) + '</div>'
    rec = [('Rang while you were busy', 112), ('Texted back on WhatsApp', 112), ('Replied', 71), ('Booked', 38)]
    rh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="flex: 1; font-size: 13.5px">{n}</span><span class="bar" style="width: 150px"><span style="width: {v / 112 * 100:.0f}%; background: {G if i == 3 else "var(--text)"}"></span></span><b style="width: 40px; text-align: right; font-weight: 500">{v}</b></div>' for i, (n, v) in enumerate(rec))
    row2 = f'''<div class="sh2"><b>From call to booking</b><span>Where people drop off</span></div><div style="display: grid; grid-template-columns: 1.55fr 1fr; gap: 14px; margin-top: 10px">{chart("Conversation to visit", "17% of conversations became a booking or request", fh)}{chart("Missed calls recovered", "₹45,600 from calls you couldn’t take", rh)}</div>'''

    # speed and hand-overs
    lens = [('Under 30 sec', 18), ('30 sec – 1 min', 34), ('1 – 2 min', 29), ('2 – 5 min', 15), ('Over 5 min', 4)]
    lh = '<div style="display: flex; gap: 10px; align-items: flex-end; height: 140px">' + ''.join(f'<span style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px; height: 100%"><span style="font-size: 12px">{v}%</span><span title="{n}: {v}%" style="width: 70%; height: {v / 34 * 100:.0f}px; border-radius: 4px 4px 0 0; background: var(--text)"></span></span>' for n, v in lens) + '</div><div style="display: flex; gap: 10px; margin-top: 6px; border-top: 1px solid var(--line); padding-top: 6px">' + ''.join(f'<span style="flex: 1; text-align: center; font-size: 11px; color: var(--mut)">{n}</span>' for n, _ in lens) + '</div>'
    speed = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">' + ''.join(f'<div style="padding: 14px; border-radius: 14px; background: var(--soft2)"><div style="font-family: Inter Tight, sans-serif; font-size: 24px">{v}</div><span style="font-size: 12px; color: var(--mut)">{l}</span></div>' for v, l in [('1 ring', 'to pick up'), ('2.1 sec', 'first reply on WhatsApp'), ('1:48', 'average call'), ('0', 'calls left unanswered')]) + '</div>'
    ho = [('Complaint or refund', 14), ('Price not in your list', 9), ('Asked for a person', 6), ('Didn’t understand twice', 5)]
    hoh = hbars(ho, 14, 'var(--text)', 170, lambda v: str(v)) + f'<div style="display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--line); font-size: 13px"><span style="color: var(--mut)">Hand-over rate</span><span>14% <span style="color: {G}">↓ 3 pts</span></span></div>'
    row3 = f'''<div class="sh2"><b>Speed and hand-overs</b><span>How fast it answers, and when it needs you</span></div><div style="display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 14px; margin-top: 10px">{chart("Speed", "", speed)}{chart("How long calls last", "", lh)}{chart("Why it handed over", "34 conversations", hoh)}</div>'''

    # memory
    mstat = '<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px">' + ''.join(f'<div class="kc"><span class="l">{l}</span><div class="v">{v}</div><span style="font-size: 12px; color: var(--mut)">{s}</span></div>' for l, v, s in [('Returning callers', '38%', '412 recognised'), ('Booked faster', '52 sec', 'vs 1:48 for new callers'), ('Picked up an old conversation', '61', 'calls continued'), ('Follow-ups that came back', '34%', '14 of 41 booked')]) + '</div>'
    ret = [62, 60, 64, 66, 65, 68, 70, 72]; new = [38, 40, 36, 34, 35, 32, 30, 28]
    wk = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
    sb = '<div style="display: flex; gap: 12px; align-items: flex-end; height: 150px">' + ''.join(f'<span title="{w}: returning {r}%, new {n}%" style="flex: 1; display: flex; flex-direction: column; gap: 2px; height: 100%; justify-content: flex-end"><span style="height: {n}%; background: var(--text); border-radius: 4px 4px 0 0; opacity: .85"></span><span style="height: {r}%; background: {G}"></span></span>' for r, n, w in zip(ret, new, wk)) + '</div><div style="display: flex; gap: 12px; margin-top: 6px">' + ''.join(f'<span style="flex: 1; text-align: center; font-size: 11px; color: var(--mut)">{w}</span>' for w in wk) + '</div>'
    row4 = f'''<div class="sh2"><b>Memory at work</b><span>What remembering people is worth</span></div><div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 14px; margin-top: 10px"><div style="display: flex; flex-direction: column; gap: 14px">{mstat}{chart("Returning vs new callers", "Share of calls each week", sb, legend([("Returning", G), ("New", "var(--text)")]))}</div>
      {chart("What memory helped with", "", hbars([("Skipped asking their name", 412), ("Started in their language", 288), ("Suggested their usual time", 176), ("Brought up an open question", 61), ("Avoided a past problem", 19)], 412, G, 220, lambda v: str(v)))}</div>'''

    # languages, topics, mood, review
    langs = hbars([('English', 62), ('Hindi', 31), ('Kannada · off', 5), ('Tamil · off', 2)], 62, 'var(--text)', 120)
    topics = hbars([('Prices', 31), ('Booking or moving a visit', 27), ('Timings and location', 18), ('Follow-up on a past chat', 12), ('Complaint or refund', 6), ('Other', 6)], 31, 'var(--text)', 190)
    mood = [('Happy', 71, G), ('Neutral', 24, 'var(--mut2)'), ('Unhappy', 5, 'var(--text)')]
    mb = '<div style="display: flex; gap: 2px; height: 16px">' + ''.join(f'<span title="{n} {v}%" style="width: {v}%; background: {c}; border-radius: {"4px 0 0 4px" if i == 0 else "0 4px 4px 0" if i == 2 else "0"}"></span>' for i, (n, v, c) in enumerate(mood)) + '</div><div style="display: flex; gap: 16px; margin-top: 10px">' + ''.join(f'<span class="lgd"><i style="background: {c}"></i>{n} {v}%</span>' for n, v, c in mood) + '</div>'
    review = [('P', 'P. Iyer', 'Unhappy · refund', '0:41'), ('+', '+91 80•• ••14', 'Hung up after 2 tries', '0:22'), ('K', 'Kabir Rao', 'Couldn’t answer: van parking', '0:37')]
    rv = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 9px 0; {"border-top: 1px solid var(--line)" if i else ""}">{cav(a, 28)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span><span style="font-size: 12px; color: var(--mut2)">{t}</span><span class="playb" style="width: 28px; height: 28px">{I("play", 11)}</span></div>' for i, (a, n, d, t) in enumerate(review))
    row5 = f'''<div class="sh2"><b>Callers</b><span>What they ask, the language they use, how they felt</span></div><div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 14px; margin-top: 10px">{chart("Why people called", "", topics)}{chart("Languages", "Share of calls", langs)}
      <div style="display: flex; flex-direction: column; gap: 14px">{chart("How callers felt", "From tone and words", mb)}{chart("Calls worth a listen", "", rv)}</div></div>'''

    body = f'''<div style="flex: 1; overflow: hidden; padding: 22px 28px 40px; display: flex; flex-direction: column; gap: 14px">{summary}{kh}{row1}{row2}{row3}{row4}{row5}</div>'''
    right = seg(['7 days', '30 days', '90 days'], 1) + ob('Compare') + ob('Export', 'download') if 'download' in IC else seg(['7 days', '30 days', '90 days'], 1)
    hd = f'<div class="hd" style="padding-left: 28px; height: 68px"><span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">Insights</b><span style="font-size: 12.5px; color: var(--mut)">9 Oct – 7 Nov · calls and WhatsApp</span></span>{right}</div>'
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd}{body}<span class="smp" style="position: absolute; right: 24px; top: 80px">Sample data</span></div>'


if __name__ == '__main__':
    IC.setdefault('download', '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"></path>')
    build(F('Insights'), 'Vegham · Insights', active='Insights', main=insights(), notop=True, extra_css=CSS2, navfn=NAV, menuhtml=app21.menu_html(), settingshtml=app21.settings_html(), nobiz=True, h=H)
    fp = os.path.join(app2.P, F('Insights')); html = open(fp).read()
    html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}' + NEUTRAL + '</style>', 1)
    for a, b in COLOR_SWAPS:
        html = html.replace(a, b)
    open(fp, 'w').write(html)
    print('insights ok')
