"""Your agent v4: see and hear your agent while you change it. Agent (split with live preview), Languages, Memory, Knowledge, Test call,
plus a 4-step first-time setup. Neutral palette, aurora green only for live/highlight."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app22, app21, app20, app2
from app20 import I, IC, WA, PH, chip, sel, bd, ob, pb, cav, BELL, SEP, tg, build, link, F, SMP, MEMI, NEUTRAL, COLOR_SWAPS

for k, v in {'upload': '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"></path>', 'link2': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>',
             'type': '<path d="M4 7V5h16v2M9 19h6M12 5v14"></path>', 'mic': '<rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>',
             'globe': '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>', 'copy': '<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></path>',
             'arrowr': '<path d="M5 12h14M13 6l6 6-6 6"></path>', 'x': '<path d="M6 6l12 12M18 6L6 18"></path>'}.items():
    IC.setdefault(k, v)

app2.NAVMAP.update({'Agent': F('Agent'), 'Languages': F('AgentLanguages'), 'Memory': F('AgentMemory'), 'Knowledge': F('AgentKnowledge'), 'Test call': F('AgentTest')})
IC.setdefault('lang', '<path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8"></path><path d="M13 21l4-9 4 9M14.5 18h5"></path>')


def NAV(nv, grp):
    return (nv('home', 'Home') + nv('conv', 'Conversations', badge='2') + nv('person', 'People') + nv('loop', 'Follow-ups', tag='23') + nv('chart', 'Insights')
            + grp('Your agent') + nv('headset', 'Agent') + nv('lang', 'Languages') + nv('memory', 'Memory') + nv('book', 'Knowledge') + nv('flask', 'Test call'))


app21.NAV = NAV
G = '#10B981'
CSS = app22.CSS + '''
@keyframes eq{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
.eq span{transform-origin:center;animation:eq 1.1s ease-in-out infinite}
.eq span:nth-child(2){animation-delay:.15s}.eq span:nth-child(3){animation-delay:.3s}.eq span:nth-child(4){animation-delay:.45s}.eq span:nth-child(5){animation-delay:.6s}.eq span:nth-child(6){animation-delay:.75s}.eq span:nth-child(7){animation-delay:.9s}
@keyframes ring{0%{box-shadow:0 0 0 0 rgba(16,185,129,.35)}100%{box-shadow:0 0 0 22px rgba(16,185,129,0)}}
.orbl{animation:ring 2s ease-out infinite}
@media (prefers-reduced-motion: reduce){.eq span,.orbl{animation:none}}
.sec{font-size:12.5px;color:var(--mut);margin:22px 0 10px;display:flex;align-items:center;justify-content:space-between}
.pick{border:1px solid var(--line);border-radius:16px;padding:14px;background:var(--card);display:flex;flex-direction:column;gap:10px;position:relative}
.pick.on{border-color:var(--text);box-shadow:0 0 0 1px var(--text)}
.tick{position:absolute;top:12px;right:12px;width:20px;height:20px;border-radius:50%;background:var(--ink);color:var(--inkfg);display:inline-flex;align-items:center;justify-content:center}
.playb{width:34px;height:34px;border-radius:50%;background:var(--soft2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.playb.on{background:#10B981;color:#FFF}
.src{display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 8px;border-radius:999px;font-size:11px;color:var(--mut);box-shadow:inset 0 0 0 1px var(--line);white-space:nowrap}
.src svg{color:#10B981}
.stepbar{height:3px;background:var(--soft)}
'''


def orb(s=96, live=True, dark=True):
    hs = (22, 40, 62, 36, 54, 30, 18)
    bars = ''.join(f'<span style="width: {max(3, s * .045):.0f}px; height: {h * s / 100:.0f}px; border-radius: 3px; background: {G}"></span>' for h in hs)
    return f'<span class="{"orbl" if live else ""}" style="width: {s}px; height: {s}px; border-radius: 50%; background: {"var(--ink)" if dark else "var(--soft2)"}; display: inline-flex; align-items: center; justify-content: center; flex: none"><span class="{"eq" if live else ""}" style="display: inline-flex; align-items: center; gap: {max(2, s * .035):.0f}px">{bars}</span></span>'


def wave(n=26, w=2, h=18, played=0, col='var(--mut2)'):
    return '<span style="display: inline-flex; align-items: center; gap: 2px; height: ' + str(h) + 'px">' + ''.join(f'<span style="width: {w}px; height: {4 + (i * 37 % 13) * (h - 4) / 13:.0f}px; border-radius: 2px; background: {G if i < played else col}"></span>' for i in range(n)) + '</span>'


def hd(title, sub, right=''):
    return f'<div class="hd" style="padding-left: 28px; height: 68px"><span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">{title}</b><span style="font-size: 12.5px; color: var(--mut)">{sub}</span></span>{right}{SEP}{BELL}</div>'


def shell(title, sub, body, right=''):
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd(title, sub, right)}<div style="flex: 1; display: flex; min-height: 0">{body}</div>{SMP}</div>'


seg = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
TICK = f'<span class="tick">{I("check", 12, 2.6)}</span>'


# ================================================================ AGENT (split: settings | live preview)
def agent():
    health = ''.join(f'<span style="display: inline-flex; align-items: center; gap: 8px; font-size: 13px; {"" if i == 0 else "color: var(--mut)"}">{d}{t}</span>' + ('<span style="width: 1px; height: 14px; background: var(--line)"></span>' if i < 3 else '')
                     for i, (d, t) in enumerate([(f'<span style="width: 8px; height: 8px; border-radius: 50%; background: {G}"></span>', '<b style="font-weight: 600">Answering</b>'), ('', '18 calls today'), ('', '96% of callers understood'), ('', 'Tested 2 days ago · <span style="color: var(--text); font-weight: 500">Test again</span>')]))
    voices = [('Warm', 'Female · calm', True, True), ('Easy', 'Male · relaxed', False, False), ('Bright', 'Female · upbeat', False, False), ('Steady', 'Male · formal', False, False)]
    vh = ''.join(f'<div class="pick{" on" if on else ""}">{TICK if on else ""}<span style="display: flex; align-items: center; gap: 10px"><span class="playb{" on" if pl else ""}">{I("pause" if pl else "play", 13)}</span>{wave(12, 2, 16, 7 if pl else 0)}</span><span><b style="display: block; font-weight: 600; font-size: 14px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span></div>' for n, d, on, pl in voices)
    pers = [('Warm and chatty', '“Hi there! Lovely to hear from you. How can I help today?”', True), ('Calm and professional', '“Good evening, Nila &amp; Co. How may I help you?”', False), ('Quick and to the point', '“Nila &amp; Co, hi. What do you need?”', False)]
    ph = ''.join(f'<div class="pick{" on" if on else ""}" style="gap: 6px">{TICK if on else ""}<b style="font-weight: 600; font-size: 14px">{t}</b><span style="font-size: 12.5px; color: var(--mut); line-height: 1.5">{q}</span></div>' for t, q, on in pers)
    greet = f'''<div style="display: flex; flex-direction: column; gap: 8px"><div style="display: flex; align-items: center; gap: 12px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 14px"><span class="playb">{I("play", 13)}</span><span style="flex: 1; font-size: 14px">Namaste, Nila &amp; Co. How can I help?</span><span style="font-size: 12px; color: var(--mut)">New callers</span></div>
      <div style="display: flex; align-items: center; gap: 12px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 14px"><span class="playb">{I("play", 13)}</span><span style="flex: 1; font-size: 14px">Hi <span class="memtxt">Rohan</span>, good to hear from you again!</span><span style="font-size: 12px; color: var(--mut)">People it knows</span></div></div>'''
    langs = ''.join(f'<span class="chip2{" on" if on else ""}">{n}</span>' for n, on in [('English', True), ('Hindi', True), ('Kannada', False), ('Tamil', False), ('+ 4 more', False)])
    left = f'''<div style="flex: 1; min-width: 0; overflow: hidden; padding: 18px 32px">
      <div style="display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-radius: 14px; border: 1px solid var(--line)">{health}</div>
      <div class="sec"><span>Voice</span><span style="color: var(--text); font-weight: 500">All 9 voices →</span></div><div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px">{vh}</div>
      <div class="sec"><span>Personality</span></div><div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px">{ph}</div>
      <div class="sec"><span>Greeting</span><span style="color: var(--text); font-weight: 500">Edit</span></div>{greet}
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px"><div><div class="sec"><span>Languages</span><span style="color: var(--text); font-weight: 500">Change →</span></div><div style="display: flex; flex-wrap: wrap; gap: 6px">{langs}</div></div>
        <div><div class="sec"><span>Picks up</span></div>{seg(["Every call", "When I miss it", "After hours"], 1)}</div></div></div>'''
    lines = [('Caller', 'Hi, are you open on Sunday?'), ('Vegham', 'Hi there! Lovely to hear from you. We’re closed on Sundays, but Saturday 10 to 6 is open. Shall I find you a time?')]
    lh = ''.join(f'<div style="align-self: {"flex-end" if w == "Caller" else "flex-start"}; max-width: 88%; padding: 9px 12px; border-radius: 14px; font-size: 13px; line-height: 1.5; {"background: var(--soft2)" if w == "Caller" else "background: var(--bg); box-shadow: inset 0 0 0 1px var(--line)"}">{t}</div>' for w, t in lines)
    right = f'''<div style="width: 400px; flex: none; border-left: 1px solid var(--line); background: var(--side); display: flex; flex-direction: column; align-items: center; padding: 26px 28px; gap: 16px">
      <span style="align-self: stretch; display: flex; justify-content: space-between; font-size: 12.5px; color: var(--mut)"><span>Live preview</span><span>Uses your changes</span></span>
      <div style="padding: 18px 0 6px">{orb(132)}</div>
      <b style="font-size: 17px; font-weight: 600">This is how you’ll sound</b><span style="font-size: 13px; color: var(--mut); margin-top: -10px">Warm voice · warm and chatty · English</span>
      <div style="align-self: stretch; display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; background: var(--card); border: 1px solid var(--line)"><span class="playb on">{I("pause", 13)}</span>{wave(34, 3, 22, 14)}<span style="font-size: 12px; color: var(--mut)">0:02</span></div>
      <div style="align-self: stretch; display: flex; flex-direction: column; gap: 8px; margin-top: 4px">{lh}</div>
      <div style="margin-top: auto; align-self: stretch; display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{pb("Talk in browser", "mic")}{ob("Call my phone", "phone")}</div></div>'''
    return shell('Agent', 'Change how your receptionist sounds. Hear it on the right.', left + right, ob('Discard') + pb('Save'))


# ================================================================ LANGUAGES
def languages():
    demo = [('Vegham', 'Hello, Nila &amp; Co. How can I help?', ''), ('Caller', 'Sorry… Hindi mein baat kar sakte hain?', ''), ('Vegham', 'Bilkul! Bataiye, main aapki kaise madad kar sakti hoon?', 'Switched to Hindi'), ('Caller', 'Saturday ko slot hai?', ''), ('Vegham', 'Haan, Saturday 11 baje khali hai. Book kar doon?', '')]
    dh = ''.join(f'<div style="display: flex; gap: 12px; align-items: flex-start"><span style="width: 56px; flex: none; font-size: 12px; color: {"var(--text)" if w == "Vegham" else "var(--mut)"}; font-weight: {600 if w == "Vegham" else 400}; padding-top: 2px">{w}</span><span style="flex: 1; font-size: 14px; line-height: 1.5">{t}{f" <span class=src>{I(chr(108)+chr(97)+chr(110)+chr(103), 11)}{tag}</span>" if tag else ""}</span></div>' for w, t, tag in demo)
    hero = f'''<div class="rc" style="padding: 22px 24px; display: flex; flex-direction: column; gap: 14px"><div style="display: flex; align-items: center; gap: 14px">{orb(48)}<span style="flex: 1"><b style="display: block; font-size: 16px; font-weight: 600">It talks the way your caller talks</b><span style="font-size: 13px; color: var(--mut)">Hear a caller switch from English to Hindi mid-call</span></span>{pb("Hear it", "play")}</div>
      <div style="display: flex; flex-direction: column; gap: 10px; padding-top: 14px; border-top: 1px solid var(--line)">{dh}</div></div>'''
    L = [('English', 'Main', True), ('Hindi', 'Mixed Hindi-English too', True), ('Kannada', '', False), ('Tamil', '', False), ('Telugu', '', False), ('Marathi', '', False), ('Bengali', '', False), ('Malayalam', '', False)]
    lg = ''.join(f'<div class="pick{" on" if on else ""}" style="padding: 12px 14px; gap: 2px">{TICK if on else ""}<b style="font-weight: 600; font-size: 14px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d if d else "Tap to add"}</span></div>' for n, d, on in L)
    rules = '<div class="list">' + ''.join(f'<div class="li" style="align-items: flex-start"><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span>{tg()}</div>' for t, d in [('Answer in the caller’s language', 'From their first few words'), ('Switch when asked', '“Can you speak English?” · “Tamil-la pesalama?”'), ('Offer another language if they seem lost', 'After a repeat or a long pause'), ('Remember each person’s language', 'Starts in it next time')]) + '</div>'
    tryit = f'''<div class="rc" style="padding: 18px 20px; display: flex; flex-direction: column; gap: 12px"><b style="font-size: 14px; font-weight: 600">Try it</b><span style="font-size: 12.5px; color: var(--mut); margin-top: -8px">Say or type anything, in any language</span>
      <div style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px; border: 1px solid var(--line)"><span style="flex: 1; font-size: 14px">Nimma hattira parking ide-ya?</span><span class="playb">{I("mic", 14)}</span></div>
      <div style="padding: 12px 14px; border-radius: 12px; background: var(--soft2); font-size: 14px; line-height: 1.5"><span class="src" style="margin-bottom: 6px">{I("lang", 11)}Kannada · not turned on</span><br>Vegham would reply in English: “Sorry, I don’t speak Kannada yet. Yes, there’s free parking behind the building.”<div style="margin-top: 10px">{ob("Turn on Kannada")}</div></div></div>'''
    body = f'''<div style="flex: 1; overflow: hidden; padding: 24px 32px; display: grid; grid-template-columns: 1.25fr 1fr; gap: 20px; align-content: start">
      <div style="display: flex; flex-direction: column; gap: 18px">{hero}<div><div class="sec" style="margin-top: 0"><span>When to switch</span></div>{rules}</div></div>
      <div style="display: flex; flex-direction: column; gap: 18px"><div><div class="sec" style="margin-top: 0"><span>Speaks</span><span>2 of 8</span></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{lg}</div><span style="display: block; margin-top: 8px; font-size: 12px; color: var(--mut2)">Fewer languages means it understands callers better.</span></div>{tryit}</div></div>'''
    return shell('Languages', 'What your receptionist speaks, and when it switches', body, ob('Discard') + pb('Save'))


# ================================================================ MEMORY
def memory():
    facts = ['Rohan Mehra', 'Hindi and English', 'Group of 5', 'Prefers WhatsApp', 'Calls in the evening', 'Weekend group sessions']
    fh = ''.join(f'<span class="chip2" style="height: 32px">{f}</span>' for f in facts)
    tl = [('14 May', 'Asked about weekend group sessions for 3. “I’ll think about it.”'), ('14 May', 'Got timings and prices on WhatsApp'), ('Today', 'Came back. Group is now 5. Booked Saturday 10 AM.')]
    tlh = ''.join(f'<div style="display: flex; gap: 14px; position: relative; padding-bottom: 14px"><span style="width: 10px; height: 10px; border-radius: 50%; margin-top: 5px; flex: none; background: {G if i == 2 else "var(--line)"}"></span><span><span style="font-size: 12px; color: var(--mut)">{d}</span><br><span style="font-size: 14px">{t}</span></span></div>' for i, (d, t) in enumerate(tl))
    card = f'''<div class="rc" style="padding: 26px 28px; display: flex; flex-direction: column; gap: 20px">
      <div style="display: flex; align-items: center; gap: 16px">{cav("R", 56)}<span style="flex: 1"><span style="font-size: 12.5px; color: var(--mut)">How Vegham remembers a caller · example</span><b style="display: block; font-size: 22px; font-weight: 600">Rohan Mehra</b><span style="font-size: 13px; color: var(--mut)">4 conversations · since May</span></span>{ob("Open in People")}</div>
      <div><span style="display: block; font-size: 12.5px; color: var(--mut); margin-bottom: 8px">What it knows</span><div style="display: flex; flex-wrap: wrap; gap: 8px">{fh}</div></div>
      <div><span style="display: block; font-size: 12.5px; color: var(--mut); margin-bottom: 10px">The story so far</span>{tlh}</div>
      <div style="padding: 16px 18px; border-radius: 14px; background: var(--ink); color: var(--inkfg); display: flex; align-items: center; gap: 14px"><span class="playb on">{I("play", 13)}</span><span style="flex: 1"><span style="font-size: 12px; opacity: .7">Next time Rohan calls, Vegham says</span><br><span style="font-size: 15px">“Hi Rohan! All set for Saturday at 10 with your group of 5?”</span></span></div></div>'''
    opts = '<div class="list">' + ''.join(f'<div class="li" style="align-items: flex-start"><span class="radio{" on" if on else ""}" style="margin-top: 2px"></span><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div>' for t, d, on in [('Naturally', 'Picks up where you left off, like Rohan above', True), ('Quietly', 'Uses it to help faster, never mentions the past', False), ('Off', 'Everyone is a new caller', False)]) + '</div>'
    stat = f'<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">' + ''.join(f'<div class="rc" style="padding: 14px 16px"><div class="hero" style="font-size: 26px">{v}</div><span style="font-size: 12px; color: var(--mut)">{l}</span></div>' for v, l in [('1,284', 'people it knows'), ('412', 'recognised this month')]) + '</div>'
    side = f'''<div style="display: flex; flex-direction: column; gap: 4px">{stat}<div class="sec"><span>When someone calls back</span></div>{opts}
      <div class="sec"><span>Keep memory for</span></div>{seg(["6 months", "12 months", "2 years"], 1)}
      <div class="sec"><span>Privacy</span></div><div class="list"><div class="li"><span class="k" style="flex: 1; width: auto">Personal details (family, health, money)</span>{tg(False)}</div><div class="li"><span class="k" style="flex: 1; width: auto">Ask before using details older than 3 months</span>{tg()}</div></div></div>'''
    body = f'<div style="flex: 1; overflow: hidden; padding: 24px 32px; display: grid; grid-template-columns: 1.35fr 1fr; gap: 24px; align-content: start">{card}{side}</div>'
    return shell('Memory', 'Your receptionist remembers every caller, like a good front desk', body, tg())


# ================================================================ KNOWLEDGE
def knowledge():
    r, pct = 34, 92
    circ = 2 * 3.14159 * r
    ringsvg = f'<svg width="96" height="96" viewBox="0 0 96 96" role="img" aria-label="92 percent answerable"><circle cx="48" cy="48" r="{r}" fill="none" stroke="var(--soft)" stroke-width="10"></circle><circle cx="48" cy="48" r="{r}" fill="none" stroke="{G}" stroke-width="10" stroke-linecap="round" stroke-dasharray="{circ * pct / 100:.1f} {circ:.1f}" transform="rotate(-90 48 48)"></circle><text x="48" y="54" text-anchor="middle" font-size="20" font-family="Inter Tight, sans-serif" fill="var(--text)">{pct}%</text></svg>'
    top = f'''<div class="rc" style="padding: 22px 24px; display: flex; align-items: center; gap: 22px">{ringsvg}<span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">Vegham can answer 92% of what callers ask</b><span style="font-size: 13.5px; color: var(--mut)">Based on 486 calls and chats this month. 3 questions keep coming up that it doesn’t know.</span></span>{pb("Fill the gaps (3)")}</div>'''
    asks = [('Prices', 212, True), ('Free times', 188, True), ('Parking', 96, True), ('Rescheduling', 74, True), ('Group sessions', 51, True), ('Payment options', 38, True), ('Parking for vans', 6, False), ('Lift', 4, False), ('Student discount', 3, False)]
    ah = ''.join(f'<span class="chip2" style="height: 36px; padding: 0 14px; {"" if ok else "border-style: dashed"}"><span style="color: {G if ok else "var(--mut2)"}">{I("check" if ok else "plus", 13, 2.4)}</span>{t}<span style="color: var(--mut2)">{n}</span></span>' for t, n, ok in asks)
    teach = ''.join(f'<div class="pick" style="flex-direction: row; align-items: center; gap: 14px"><span style="width: 42px; height: 42px; border-radius: 12px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 19)}</span><span><b style="display: block; font-weight: 600; font-size: 14px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div>' for ic, t, d in [('link2', 'Paste a link', 'Website, menu, Google listing'), ('upload', 'Upload a file', 'Price list, PDF, or a photo of it'), ('type', 'Type an answer', 'One question at a time')])
    qa = [('Is there parking?', 'Free parking behind the building, enter from 7th Cross.', 'Website'), ('Do you take walk-ins?', 'Yes till 6 PM if a slot is free.', 'You'), ('Group sessions?', 'Saturdays 9 AM – 2 PM, up to 8 people, ₹350 each.', 'Price list'), ('Open on Sundays?', 'No, closed on Sundays.', 'Google listing')]
    qh = ''.join(f'<div class="li" style="align-items: flex-start"><span style="flex: 1"><b style="display: block; font-weight: 500">{q}</b><span style="font-size: 13px; color: var(--mut)">{a}</span></span><span class="src">{s}</span></div>' for q, a, s in qa)
    body = f'''<div style="flex: 1; overflow: hidden; padding: 24px 32px"><div class="cw" style="max-width: 920px; display: flex; flex-direction: column; gap: 6px">{top}
      <div class="sec"><span>What callers ask most · this month</span></div><div style="display: flex; flex-wrap: wrap; gap: 8px">{ah}</div>
      <div class="sec"><span>Teach it something</span></div><div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px">{teach}</div>
      <div class="sec"><span>What it knows · 26 answers</span><span class="fld" style="height: 32px; width: 240px; gap: 8px; color: var(--mut2)">{I("search", 14)}Search</span></div><div class="list">{qh}</div></div></div>'''
    return shell('Knowledge', 'What your receptionist knows about your business', body)


# ================================================================ TEST CALL
def test_call():
    turns = [('Vegham', 'Hi Rohan, good to hear from you again! All set for Saturday at 10 with your group of 5?', [('memory', 'from memory')]),
             ('You', 'Haan… Hindi mein baat karein? Aur parking hai wahan?', []),
             ('Vegham', 'Bilkul Rohan ji. Haan, building ke peeche free parking hai, 7th Cross se entry.', [('lang', 'switched to Hindi'), ('book', 'from Knowledge')]),
             ('You', 'Perfect, thank you!', [])]
    th = ''.join(f'''<div style="align-self: {"flex-start" if w == "Vegham" else "flex-end"}; max-width: 76%; display: flex; flex-direction: column; align-items: {"flex-start" if w == "Vegham" else "flex-end"}; gap: 5px"><span style="font-size: 11.5px; color: var(--mut)">{w}</span>
        <div style="padding: 10px 14px; border-radius: 16px; font-size: 14.5px; line-height: 1.5; {"background: var(--bg); box-shadow: inset 0 0 0 1px var(--line)" if w == "Vegham" else "background: var(--soft2)"}">{t}</div>{"<span style='display: flex; gap: 6px'>" + "".join(f"<span class=src>{I(ic, 11)}{lab}</span>" for ic, lab in tags) + "</span>" if tags else ""}</div>''' for w, t, tags in turns)
    center = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; padding: 22px 40px; gap: 14px">
      <div style="display: flex; align-items: center; gap: 10px"><span style="font-size: 13px; color: var(--mut)">Call as</span>{seg(["A new caller", "Rohan (returning)", "An unhappy customer"], 1)}</div>
      {orb(104)}<span style="display: inline-flex; align-items: center; gap: 8px; font-size: 13px"><span style="width: 8px; height: 8px; border-radius: 50%; background: {G}"></span>Call ended · 0:48</span>
      <div style="width: 100%; max-width: 620px; flex: 1; display: flex; flex-direction: column; justify-content: flex-end; gap: 12px">{th}</div>
      <div style="display: flex; gap: 8px">{pb("Call again", "mic")}{ob("Call my phone", "phone")}</div></div>'''
    checks = [('Greeted Rohan by name', True), ('Remembered his Saturday booking', True), ('Switched to Hindi when asked', True), ('Answered parking from Knowledge', True), ('Said goodbye and confirmed the booking', False)]
    ch = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 11px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex: none; {"background: " + G + "; color: #FFF" if ok else "box-shadow: inset 0 0 0 1.5px var(--mut2); color: var(--mut)"}">{I("check" if ok else "x", 12, 2.6)}</span><span style="font-size: 14px; {"" if ok else "color: var(--mut)"}">{t}</span></div>' for i, (t, ok) in enumerate(checks))
    score = f'''<div style="width: 360px; flex: none; border-left: 1px solid var(--line); padding: 24px; display: flex; flex-direction: column; gap: 14px">
      <span style="font-size: 12.5px; color: var(--mut)">How it went</span><div style="display: flex; align-items: baseline; gap: 8px"><span class="hero" style="font-size: 40px">4 of 5</span><span style="font-size: 13px; color: var(--mut)">things done well</span></div>
      <div>{ch}</div>
      <div style="padding: 14px 16px; border-radius: 14px; background: var(--soft2); font-size: 13px; line-height: 1.5"><b style="font-weight: 600">Suggestion</b><br>End calls by repeating the booking: “See you Saturday at 10, Rohan.”</div>
      <div style="margin-top: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 8px">{ob("Apply suggestion")}{pb("Looks good")}</div></div>'''
    return shell('Test call', 'Talk to your receptionist before your customers do', center + score)


# ================================================================ SETUP FLOW (no sidebar)
def setup_frame(step, title, sub, body, cta, back=True):
    bar = f'<div class="stepbar"><span style="display: block; width: {step * 25}%; height: 100%; background: {G}"></span></div>'
    top = f'''<div style="height: 64px; flex: none; display: flex; align-items: center; padding: 0 32px; border-bottom: 1px solid var(--line)"><span style="font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: 22px; letter-spacing: -0.045em; background: linear-gradient(90deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777); -webkit-background-clip: text; background-clip: text; color: transparent">vegham</span><span style="flex: 1"></span><span style="font-size: 13px; color: var(--mut)">Step {step}/4</span><span style="width: 1px; height: 18px; background: var(--line); margin: 0 14px"></span><span style="font-size: 13px; color: var(--mut)">Save and finish later</span></div>'''
    foot = f'<div style="height: 76px; flex: none; display: flex; align-items: center; padding: 0 32px; border-top: 1px solid var(--line)">{ob("Back") if back else ""}<span style="flex: 1"></span>{cta}</div>'
    return f'''<div style="position: absolute; inset: 0; z-index: 50; background: var(--bg); display: flex; flex-direction: column">{top}{bar}
      <div style="flex: 1; overflow: hidden; display: flex; justify-content: center; padding: 48px 32px"><div style="width: 100%; max-width: 820px; display: flex; flex-direction: column; gap: 24px">
        <div><h1 class="hero" style="margin: 0; font-size: 38px; font-weight: 400; line-height: 1.12">{title}</h1><p style="margin: 10px 0 0; font-size: 16px; color: var(--mut)">{sub}</p></div>{body}</div></div>{foot}</div>'''


def setup1():
    found = [('Business name', 'Nila &amp; Co'), ('Address', '12, 100 Feet Rd, Indiranagar'), ('Hours', 'Mon–Fri 9–8 · Sat 10–6 · Sun closed'), ('Services and prices', '12 found · Consultation ₹800, Group session ₹350…'), ('Common questions', 'Parking, walk-ins, payment')]
    fh = ''.join(f'<div class="li"><span style="color: {G}">{I("check", 15, 2.6)}</span><span class="k">{k}</span><span class="v" style="color: var(--text)">{v}</span><span style="font-size: 12.5px; color: var(--mut)">Edit</span></div>' for k, v in found)
    body = f'''<div style="display: flex; gap: 8px"><span class="fld" style="flex: 1; height: 54px; border-radius: 14px; font-size: 16px; gap: 10px">{I("globe", 18)}nilaandco.in</span>{pb("Read my website")}</div>
      <div><div class="sec" style="margin-top: 0"><span>What Vegham learned · 14 pages read</span><span style="color: {G}; font-weight: 500">Done</span></div><div class="list">{fh}</div></div>
      <span style="font-size: 13px; color: var(--mut)">No website? <span style="color: var(--text); font-weight: 500">Describe your business instead</span> or <span style="color: var(--text); font-weight: 500">upload a price list</span>.</span>'''
    return setup_frame(1, 'Let’s teach Vegham about your business', 'Paste your website. Vegham reads it and learns your hours, prices and common questions.', body, pb('Looks right, continue', 'arrowr'), back=False)


def setup2():
    voices = [('Warm', 'Female · calm, friendly', True, True), ('Easy', 'Male · relaxed', False, False), ('Bright', 'Female · upbeat', False, False), ('Steady', 'Male · clear, formal', False, False)]
    vh = ''.join(f'<div class="pick{" on" if on else ""}" style="flex-direction: row; align-items: center; gap: 16px; padding: 18px">{TICK if on else ""}<span class="playb{" on" if pl else ""}" style="width: 44px; height: 44px">{I("pause" if pl else "play", 16)}</span><span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 16px">{n}</b><span style="font-size: 13px; color: var(--mut)">{d}</span><div style="margin-top: 8px">{wave(30, 3, 18, 12 if pl else 0)}</div></span></div>' for n, d, on, pl in voices)
    langs = ''.join(f'<span class="chip2{" on" if on else ""}" style="height: 38px; padding: 0 16px">{n}</span>' for n, on in [('English', True), ('Hindi', True), ('Kannada', False), ('Tamil', False), ('Telugu', False), ('Marathi', False)])
    body = f'''<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">{vh}</div>
      <div><div class="sec" style="margin-top: 0"><span>Languages your customers speak</span></div><div style="display: flex; flex-wrap: wrap; gap: 8px">{langs}</div><span style="display: block; margin-top: 10px; font-size: 13px; color: var(--mut)">It switches automatically when a caller speaks another language, or asks to.</span></div>'''
    return setup_frame(2, 'Pick a voice', 'Press play to hear each one say your greeting.', body, pb('Continue', 'arrowr'))


def setup3():
    tries = [('Ask a price', '“How much is a consultation?”', True), ('Switch language', '“Hindi mein baat karein?”', True), ('Book a visit', '“Can I come Saturday at 11?”', False)]
    th = ''.join(f'<div class="li"><span style="width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex: none; {"background: " + G + "; color: #FFF" if ok else "box-shadow: inset 0 0 0 1.5px var(--mut2)"}">{I("check", 12, 2.6) if ok else ""}</span><span class="k">{t}</span><span class="v">{d}</span></div>' for t, d, ok in tries)
    body = f'''<div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 28px; align-items: center">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 28px; border-radius: 22px; background: var(--side); border: 1px solid var(--line)">{orb(150)}<b style="font-size: 17px; font-weight: 600">You’re talking to Vegham</b><span style="font-size: 13px; color: var(--mut); margin-top: -10px">0:31 · in your browser</span>{ob("End call")}</div>
      <div style="display: flex; flex-direction: column; gap: 12px"><span style="font-size: 13px; color: var(--mut)">Try these</span><div class="list">{th}</div><span style="font-size: 13px; color: var(--mut)">Or call <b style="color: var(--text); font-weight: 600">080 4719 2200</b> from your phone. Call twice and it will remember you.</span></div></div>'''
    return setup_frame(3, 'Talk to your receptionist', 'Make one test call before customers do. Most people are surprised.', body, pb('Sounds good, continue', 'arrowr'))


def setup4():
    opts = [('When I miss a call', 'Recommended. Rings you first, Vegham picks up after 4 rings.', '*61*08047192200*11*20#', True), ('Every call', 'Vegham answers straight away.', '*21*08047192200#', False), ('Only when I’m closed', 'Outside your opening hours.', 'Set in the app', False)]
    oh = ''.join(f'<div class="pick{" on" if on else ""}" style="flex-direction: row; align-items: flex-start; gap: 14px; padding: 16px 18px"><span class="radio{" on" if on else ""}" style="margin-top: 2px"></span><span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 15px">{t}</b><span style="font-size: 13px; color: var(--mut)">{d}</span></span>{f"<span class=chip2 style=\"font-family: ui-monospace, Menlo, monospace\">{code} {I(chr(99)+chr(111)+chr(112)+chr(121), 13)}</span>" if on else ""}</div>' for t, d, code, on in opts)
    wa = f'<div class="li" style="border: 1px solid var(--line); border-radius: 16px">{WA(22)}<span style="flex: 1"><b style="display: block; font-weight: 600">Also answer WhatsApp</b><span style="font-size: 13px; color: var(--mut)">Same receptionist, same memory. Takes 2 minutes.</span></span>{ob("Connect")}</div>'
    body = f'''<div><div class="sec" style="margin-top: 0"><span>When should Vegham pick up?</span></div><div style="display: flex; flex-direction: column; gap: 8px">{oh}</div><span style="display: block; margin-top: 10px; font-size: 13px; color: var(--mut)">Dial the code from your business phone once. You can change this any time.</span></div>{wa}'''
    return setup_frame(4, 'Go live', 'Send calls to Vegham and you’re done.', body, pb('Go live'))


def with_setup(fn):
    def f():
        return f'<div style="position: relative; height: 100%">{app20.home()}{fn()}</div>'
    return f


AG = [('Agent', 'Your agent', agent, 'Agent'), ('AgentLanguages', 'Your agent · languages', languages, 'Languages'), ('AgentMemory', 'Your agent · memory', memory, 'Memory'),
      ('AgentKnowledge', 'Your agent · knowledge', knowledge, 'Knowledge'), ('AgentTest', 'Your agent · test call', test_call, 'Test call'),
      ('Setup1', 'Setup 1/4 · your business', with_setup(setup1), 'Home'), ('Setup2', 'Setup 2/4 · voice', with_setup(setup2), 'Home'),
      ('Setup3', 'Setup 3/4 · test call', with_setup(setup3), 'Home'), ('Setup4', 'Setup 4/4 · go live', with_setup(setup4), 'Home')]
LINKS = {'Agent': [('Change →', 'AgentLanguages'), ('Test again', 'AgentTest')], 'AgentMemory': [('>Open in People<', 'Person')],
         'Setup1': [('Looks right, continue', 'Setup2')], 'Setup2': [('>Continue', 'Setup3'), ('>Back<', 'Setup1')], 'Setup3': [('Sounds good, continue', 'Setup4'), ('>Back<', 'Setup2')],
         'Setup4': [('>Go live<', 'Welcome'), ('>Back<', 'Setup3')]}

if __name__ == '__main__':
    P = app2.P
    others = [b for b in app21.BOARDS if not b[0].startswith('Agent')]
    for f, t, act, fn, ov in others:
        app21.page(f, 'Vegham · ' + t, act, fn(), collapsed=f in ('Conversations', 'ConversationChat'), ov=ov)
    for f, t, fn, act in AG:
        build(F(f), 'Vegham · ' + t, active=act, main=fn(), notop=True, extra_css=CSS, navfn=NAV, menuhtml=app21.menu_html(), settingshtml=app21.settings_html(), nobiz=True)
    for f in [b[0] for b in others] + [a[0] for a in AG]:
        fp = os.path.join(P, F(f)); html = open(fp).read()
        if f.startswith('Setup'):
            html = re.sub(r'<aside class="side".*?</aside>', '', html, count=1, flags=re.S)
        for needle, tgt in (LINKS.get(f, []) if f in LINKS or f.startswith(('Agent', 'Setup')) else app21.LINKS.get(f, [])):
            html = link(html, needle, F(tgt))
        for a, b in [('.atab span', '.atab>*'), ('.seg label', '.seg>*')]:
            html = html.replace(a, b)
        html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}' + NEUTRAL + '</style>', 1)
        if not f.startswith('Setup'):
            for a, b in COLOR_SWAPS:
                html = html.replace(a, b)
        else:
            for a, b in COLOR_SWAPS:
                if a not in ('#3B6CF6', '#7C3AED'):
                    html = html.replace(a, b)
        open(fp, 'w').write(html)
    print('agent v4 ok')
