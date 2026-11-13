"""Agent pages, round 6: a few useful additions per page without clutter.
Agent: hand-over rules, after-call actions. Languages: what callers used, pronunciation. Memory: search, things to confirm. Knowledge: sources freshness, always/never rules."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app24, app23
from app23 import I, IC, cav, tg, seg, shell, G, ob, pb, chip, sel, bd

IC.setdefault('refresh', '<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"></path>')
IC.setdefault('alert', '<circle cx="12" cy="12" r="9"></circle><path d="M12 8v5M12 16v.5"></path>')
IC.setdefault('speaker', '<path d="M4 9v6h4l5 4V5L8 9z"></path><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"></path>')

pill = lambda t, on=True: f'<span class="chip2" style="height: 32px">{"<span style=\"color: #10B981\">" + I("check", 13, 2.4) + "</span>" if on else ""}{t}</span>'
_agent, _lang, _mem = app23.agent, app24.languages, app24.memory


def agent():
    html = _agent()
    add = (f'<div class="sec"><span>Hand over to you when</span><span>Transfers to Vinay</span></div><div style="display: flex; flex-wrap: wrap; gap: 6px">'
           + pill('Caller asks for a person') + pill('Complaint or refund') + pill('It doesn’t understand twice') + pill('Price not in your list') + pill('+ Add', False) + '</div>'
           + '<div class="sec"><span>After each call</span></div><div style="display: flex; flex-wrap: wrap; gap: 6px">'
           + pill('Send the caller a WhatsApp summary') + pill('Send you a note if it needs you') + pill('Save to memory') + '</div>')
    a = 'After hours</span></span></div></div>'
    assert a in html
    return html.replace(a, a + add, 1)


def languages():
    html = _lang()
    used = [('English', 62, True), ('Hindi', 31, True), ('Kannada', 5, False), ('Tamil', 2, False)]
    uh = ''.join(f'<div style="display: grid; grid-template-columns: 80px 1fr 44px; gap: 12px; align-items: center; padding: 3px 0; font-size: 13px"><span>{n}</span><span style="height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: {G if on else "var(--mut2)"}"></span></span><span style="text-align: right; color: var(--mut)">{p}%</span></div>' for n, p, on in used)
    card = (f'<div class="rc" style="padding: 14px 20px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 14px; font-weight: 600">What callers spoke this month</b><span style="font-size: 12.5px; color: var(--mut)">486 calls</span></div><div style="margin-top: 10px">{uh}</div>'
            f'<div style="display: flex; align-items: center; gap: 10px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line); font-size: 12.5px"><span style="flex: 1; color: var(--mut)">24 callers tried Kannada. Vegham answered them in English.</span>{ob("Turn on Kannada")}</div></div>')
    words = [('Nila &amp; Co', 'NEE-la and co'), ('Priya', 'PREE-ya'), ('₹1,200', 'twelve hundred rupees')]
    wh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 9px 0; {"border-top: 1px solid var(--line)" if k else ""}"><b style="width: 110px; font-weight: 500; font-size: 13.5px">{w}</b><span style="flex: 1; font-size: 13px; color: var(--mut)">says “{s}”</span><span class="playb" style="width: 28px; height: 28px">{I("play", 11)}</span></div>' for k, (w, s) in enumerate(words))
    pron = f'<div class="rc" style="padding: 18px 20px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 14px; font-weight: 600">How it says your words</b><span style="font-size: 12.5px; font-weight: 500">+ Add word</span></div><span style="display: block; font-size: 12.5px; color: var(--mut); margin: 2px 0 6px">Names, prices and numbers, said the way you say them</span>{wh}</div>'
    a2 = '<div style="margin-top: 10px"><span class="obtn">Turn on Kannada</span></div></div></div>'
    assert a2 in html
    html = html.replace(a2, '</div></div>' + pron, 1)
    anchor = '\n      <div style="display: flex; flex-direction: column; gap: 18px"><div><div class="sec" style="margin-top: 0"><span>Speaks</span>'
    i = html.index(anchor)
    return html[:i - 6] + card + html[i - 6:]


def memory():
    html = _mem()
    checks = [('Kavya Nair', 'Group size: 8 or 10?', 'Heard two numbers on the last call'), ('+91 70•• ••88', 'Same person as Ananya Rao?', 'Same number, different name')]
    ch = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 10px 0; {"border-top: 1px solid var(--line)" if k else ""}">{cav(n[0], 26)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13px">{n} · {q}</b><span style="font-size: 12px; color: var(--mut)">{w}</span></span><span class="obtn" style="height: 30px; padding: 0 10px; font-size: 12.5px">Confirm</span><span class="obtn" style="height: 30px; padding: 0 10px; font-size: 12.5px">Fix</span></div>' for k, (n, q, w) in enumerate(checks))
    card = f'<div class="rc" style="padding: 16px 20px; margin-bottom: 8px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 14px; font-weight: 600">Not sure · please check</b><span style="font-size: 12.5px; color: var(--mut)">2</span></div>{ch}</div>'
    a = '<div class="sec" style="margin-top: 0"><span>When someone calls back</span></div>'
    assert a in html
    html = html.replace(a, card + a.replace('margin-top: 0', 'margin-top: 14px'), 1)
    search = f'<span class="fld" style="width: 220px; height: 36px; gap: 8px; color: var(--mut2); margin-right: 8px">{I("search", 15)}Search memory</span>'
    a2 = 'like a good front desk</span></span>'
    assert a2 in html
    return html.replace(a2, a2 + search, 1)


def knowledge():
    r, pct = 34, 92
    circ = 2 * 3.14159 * r
    ring = f'<svg width="88" height="88" viewBox="0 0 96 96" role="img" aria-label="92 percent answerable"><circle cx="48" cy="48" r="{r}" fill="none" stroke="var(--soft)" stroke-width="10"></circle><circle cx="48" cy="48" r="{r}" fill="none" stroke="{G}" stroke-width="10" stroke-linecap="round" stroke-dasharray="{circ * pct / 100:.1f} {circ:.1f}" transform="rotate(-90 48 48)"></circle><text x="48" y="54" text-anchor="middle" font-size="20" font-family="Inter Tight, sans-serif" fill="var(--text)">{pct}%</text></svg>'
    top = f'<div class="rc" style="padding: 20px 22px; display: flex; align-items: center; gap: 20px">{ring}<span style="flex: 1"><b style="display: block; font-size: 17px; font-weight: 600">Vegham can answer 92% of what callers ask</b><span style="font-size: 13px; color: var(--mut)">From 486 calls and chats this month.</span></span>{pb("Fill the gaps (3)")}</div>'
    asks = [('Prices', 212, True), ('Free times', 188, True), ('Parking', 96, True), ('Rescheduling', 74, True), ('Group sessions', 51, True), ('Parking for vans', 6, False), ('Lift', 4, False), ('Student discount', 3, False)]
    ah = ''.join(f'<span class="chip2" style="height: 34px; padding: 0 13px; {"" if ok else "border-style: dashed"}"><span style="color: {G if ok else "var(--mut2)"}">{I("check" if ok else "plus", 13, 2.4)}</span>{t}<span style="color: var(--mut2)">{n}</span></span>' for t, n, ok in asks)
    teach = ''.join(f'<div class="pick" style="flex-direction: row; align-items: center; gap: 12px; padding: 12px"><span style="width: 38px; height: 38px; border-radius: 11px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 17)}</span><span><b style="display: block; font-weight: 600; font-size: 13.5px">{t}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span></div>' for ic, t, d in [('link2', 'Paste a link', 'Website, Google listing'), ('upload', 'Upload a file', 'Price list, PDF, photo'), ('type', 'Type an answer', 'One at a time')])
    qa = [('Is there parking?', 'Free parking behind the building, enter from 7th Cross.', 'Website'), ('Do you take walk-ins?', 'Yes till 6 PM if a slot is free.', 'You'), ('Group sessions?', 'Saturdays 9 AM – 2 PM, up to 8 people, ₹350 each.', 'Price list')]
    qh = ''.join(f'<div class="li" style="align-items: flex-start"><span style="flex: 1"><b style="display: block; font-weight: 500">{q}</b><span style="font-size: 13px; color: var(--mut)">{a}</span></span><span class="src">{s}</span></div>' for q, a, s in qa)
    left = (f'<div style="display: flex; flex-direction: column; gap: 4px">{top}<div class="sec"><span>What callers ask most · this month</span></div><div style="display: flex; flex-wrap: wrap; gap: 8px">{ah}</div>'
            f'<div class="sec"><span>Teach it something</span></div><div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">{teach}</div>'
            f'<div class="sec"><span>What it knows · 26 answers</span><span class="fld" style="height: 30px; width: 200px; gap: 8px; color: var(--mut2)">{I("search", 14)}Search</span></div><div class="list">{qh}</div></div>')
    srcs = [('globe', 'nilaandco.in', 'Read 2 days ago · 14 pages', ''), ('book', 'Price list.pdf', 'Uploaded 4 Nov', ''), ('pin', 'Google listing', 'Hours changed yesterday', 'Read again')]
    IC.setdefault('pin', '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle>')
    sh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; {"border-top: 1px solid var(--line)" if k else ""}"><span style="color: var(--mut)">{I(ic, 16)}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: {"var(--text)" if act else "var(--mut)"}">{d}</span></span>{ob(act, "refresh") if act else ""}</div>' for k, (ic, n, d, act) in enumerate(srcs))
    sources = f'<div class="rc" style="padding: 16px 20px"><b style="font-size: 14px; font-weight: 600">Where it learns from</b>{sh}<div style="display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--line); font-size: 13px"><span>Re-read every week</span>{tg()}</div></div>'
    rules = [('Always', 'Say prices include GST'), ('Always', 'Offer the next free slot if one is full'), ('Never', 'Promise a discount over 10%'), ('Never', 'Give medical, legal or money advice'), ('Never', 'Share a team member’s phone number')]
    rh = ''.join(f'<div style="display: flex; gap: 10px; padding: 8px 0; font-size: 13.5px; {"border-top: 1px solid var(--line)" if k else ""}"><span style="width: 52px; flex: none; font-size: 12px; font-weight: 600; color: {G if a == "Always" else "var(--text)"}">{a}</span><span>{t}</span></div>' for k, (a, t) in enumerate(rules))
    guard = f'<div class="rc" style="padding: 16px 20px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 14px; font-weight: 600">Always and never</b><span style="font-size: 12.5px; font-weight: 500">+ Add rule</span></div><span style="display: block; font-size: 12.5px; color: var(--mut); margin: 2px 0 6px">Rules it follows on every call</span>{rh}</div>'
    right = f'<div style="display: flex; flex-direction: column; gap: 14px">{sources}{guard}</div>'
    body = f'<div style="flex: 1; overflow: hidden; padding: 24px 32px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; align-content: start">{left}{right}</div>'
    return shell('Knowledge', 'What your receptionist knows about your business', body)


repl = {'Agent': agent, 'AgentLanguages': languages, 'AgentMemory': memory, 'AgentKnowledge': knowledge}
app23.AG = [(f, t, repl.get(f, fn), a) for f, t, fn, a in app23.AG]

if __name__ == '__main__':
    exec(open(os.path.join(D, 'app23.py')).read().split("if __name__ == '__main__':")[1].replace('\n    ', '\n'), app23.__dict__)
