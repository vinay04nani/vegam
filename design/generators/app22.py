"""Your agent, minimal: one agent page (voice, languages, greeting, answering) with side sheets; calmer Memory, Knowledge, Test call."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app21, app20, app2
from app20 import I, IC, WA, PH, chip, sel, bd, ob, pb, cav, BELL, SEP, tg, build, link, F, SMP, MEMI, live_pill, NEUTRAL, COLOR_SWAPS

IC.setdefault('chev', '<path d="M6 9l6 6 6-6"></path>')
IC.setdefault('chevr', '<path d="M9 6l6 6-6 6"></path>')
IC.setdefault('lang', '<path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-7 8"></path><path d="M13 21l4-9 4 9M14.5 18h5"></path>')
IC.setdefault('wave', '<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"></path>')
IC.setdefault('speed', '<path d="M12 13l4-4"></path><path d="M4 18a8 8 0 1 1 16 0"></path>')

app2.NAVMAP.clear()
app2.NAVMAP.update({'Home': F('Home'), 'Conversations': F('Conversations'), 'People': F('People'), 'Follow-ups': F('Followups'), 'Insights': F('Insights'),
                    'Agent': F('Agent'), 'Memory': F('AgentMemory'), 'Knowledge': F('AgentKnowledge'), 'Test call': F('AgentTest')})


def NAV(nv, grp):
    return (nv('home', 'Home') + nv('conv', 'Conversations', badge='2') + nv('person', 'People') + nv('loop', 'Follow-ups', tag='23') + nv('chart', 'Insights')
            + grp('Your agent') + nv('headset', 'Agent') + nv('memory', 'Memory') + nv('book', 'Knowledge') + nv('flask', 'Test call'))


app21.NAV = NAV
CSS = app20.CSS + '''
.cw{max-width:760px;margin:0 auto;width:100%}
.grp2{font-size:12.5px;color:var(--mut);margin:28px 0 8px;padding-left:4px}
.list{border:1px solid var(--line);border-radius:16px;background:var(--card);overflow:hidden}
.li{display:flex;align-items:center;gap:14px;padding:15px 18px;border-top:1px solid var(--line);font-size:14px}
.li:first-child{border-top:0}
.li .k{width:150px;flex:none;color:var(--text)}
.li .v{flex:1;min-width:0;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.li .c{color:var(--mut2);display:inline-flex}
.sheet{position:absolute;top:0;right:0;bottom:0;width:460px;background:var(--pop);box-shadow:var(--shadow);z-index:20;display:flex;flex-direction:column}
.scrim3{position:absolute;inset:0;background:var(--scrim);z-index:19}
.vrow{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:14px;border:1px solid var(--line)}
.vrow.on{border-color:var(--text)}
.radio{width:18px;height:18px;border-radius:50%;flex:none;border:1.5px solid var(--mut2)}
.radio.on{border:6px solid var(--text)}
'''


def hd(title, sub, right=''):
    return f'<div class="hd" style="padding-left: 28px; height: 68px"><span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">{title}</b><span style="font-size: 12.5px; color: var(--mut)">{sub}</span></span>{right}{SEP}{BELL}</div>'


def li(k, v, chev=True, right=''):
    return f'<div class="li"><span class="k">{k}</span><span class="v">{v}</span>{right}{"<span class=c>" + I("chevr", 16) + "</span>" if chev else ""}</div>'


def orb(s=96, live=True):
    bars = ''.join(f'<span style="width: {s * .045:.0f}px; height: {h * s / 100:.0f}px; border-radius: 3px; background: #10B981"></span>' for h in (18, 34, 52, 30, 44, 24, 14))
    return f'<span style="width: {s}px; height: {s}px; border-radius: 50%; background: var(--ink); display: inline-flex; align-items: center; justify-content: center; gap: {s * .035:.0f}px; flex: none">{bars}</span>'


# ================================================================ AGENT (overview)
def agent_body():
    hero = f'''<div style="display: flex; align-items: center; gap: 24px; padding: 8px 0 4px">{orb(92)}
      <div style="flex: 1"><span style="font-size: 12.5px; color: var(--mut)">Your receptionist</span><h1 class="hero" style="margin: 2px 0 6px; font-size: 32px; font-weight: 400">Nila &amp; Co</h1>
        <span style="display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: #10B981"></span>Live on 080 4719 2200 and WhatsApp</span></div>
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: stretch">{pb("Call to test", "phone")}{ob("Hear greeting", "play")}</div></div>'''
    sound = '<div class="list">' + li('Voice', 'Warm · female · Indian English and Hindi') + li('Languages', 'English and Hindi · switches when the caller does') + li('Pace', 'Natural') + '</div>'
    answer = '<div class="list">' + li('Greeting', '“Namaste, Nila &amp; Co. How can I help?”') + li('Picks up', 'When you miss a call · after 4 rings') + li('Transfers to', 'Vinay · +91 98450 11220') + li('Missed calls', 'Texts back on WhatsApp in seconds') + '</div>'
    can = '<div class="list">' + ''.join(f'<div class="li"><span class="k" style="width: auto; flex: 1">{t}</span>{tg(o)}</div>' for t, o in [('Answer questions from Knowledge', True), ('Take bookings and requests', True), ('Transfer to a person when asked', True), ('Take a message', True)]) + '</div>'
    return f'''<div style="flex: 1; overflow: hidden; padding: 28px 32px"><div class="cw">{hero}
      <div class="grp2">How it sounds</div>{sound}<div class="grp2">How it answers</div>{answer}<div class="grp2">What it can do</div>{can}</div></div>'''


def agent_page(sheet=''):
    right = live_pill() + ob('Discard') + pb('Save')
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd("Agent", "How your receptionist sounds and answers", right)}{agent_body()}{sheet}{SMP}</div>'


def sheet(title, sub, body, foot):
    return f'''<div class="scrim3"></div><div class="sheet"><div style="display: flex; align-items: flex-start; gap: 12px; padding: 22px 24px 14px"><span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">{title}</b><span style="font-size: 13px; color: var(--mut)">{sub}</span></span><span class="ibtn">{I("x", 17)}</span></div>
      <div style="flex: 1; overflow: hidden; padding: 6px 24px 20px; display: flex; flex-direction: column; gap: 14px">{body}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; padding: 16px 24px; border-top: 1px solid var(--line)">{foot}</div></div>'''


def voice_sheet():
    vs = [('Warm', 'Female · calm, friendly', 'Indian English, Hindi', True, True), ('Easy', 'Male · relaxed', 'Indian English, Hindi', False, False), ('Bright', 'Female · upbeat', 'Indian English, Hindi, Tamil', False, False),
          ('Steady', 'Male · clear, formal', 'Indian English, Kannada', False, False), ('Soft', 'Female · gentle, slower', 'Indian English, Hindi, Marathi', False, False)]
    def play(on, playing):
        if playing:
            return f'<span style="width: 38px; height: 38px; border-radius: 50%; background: #10B981; color: #FFF; display: inline-flex; align-items: center; justify-content: center; flex: none">{I("pause", 14)}</span>'
        return f'<span style="width: 38px; height: 38px; border-radius: 50%; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I("play", 14)}</span>'
    rows = ''.join(f'<div class="vrow{" on" if on else ""}">{play(on, pl)}<span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14px">{n}</b><span style="font-size: 12.5px; color: var(--mut)">{d} · {l}</span></span><span class="radio{" on" if on else ""}"></span></div>' for n, d, l, on, pl in vs)
    seg = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    body = f'''<div style="display: flex; gap: 8px; align-items: center">{chip("All", True)}{chip("Female")}{chip("Male")}<span style="flex: 1"></span><span style="font-size: 12.5px; color: var(--mut)">Hear in</span>{seg(["English", "Hindi"], 0)}</div>
      {rows}
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 8px"><span style="font-size: 14px">Pace</span>{seg(["Slower", "Natural", "Faster"], 1)}</div>
      <div style="padding: 12px 14px; border-radius: 12px; background: var(--soft2); font-size: 13px; color: var(--mut); line-height: 1.5">Playing: “Namaste, Nila &amp; Co. How can I help?” in the <b style="color: var(--text); font-weight: 500">Warm</b> voice.</div>'''
    return sheet('Voice', 'Pick how your receptionist sounds on calls', body, ob('Cancel') + pb('Use this voice'))


def lang_sheet():
    langs = [('English', True, 'Main'), ('Hindi', True, ''), ('Kannada', False, ''), ('Tamil', False, ''), ('Telugu', False, ''), ('Marathi', False, ''), ('Bengali', False, ''), ('Malayalam', False, '')]
    lh = ''.join(f'<span class="chip2{" on" if on else ""}">{I("check", 13, 2.4) if on else ""}{n}{" · main" if m else ""}</span>' for n, on, m in langs)
    sw = [('Reply in the caller’s language', 'Listens to the first few words and answers the same way', True),
          ('Switch when asked', '“Can you speak in English?” · “Hindi mein bataiye”', True),
          ('Offer help if the caller seems lost', '“Would it be easier in Hindi?” after a repeat or a long pause', True),
          ('Allow mixed Hindi and English', 'Talks the way people actually talk', True),
          ('Remember each person’s language', 'Next time, starts in the language they used', True)]
    swh = ''.join(f'<div style="display: flex; align-items: flex-start; gap: 14px; padding: 12px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 14px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span>{tg(o)}</div>' for i, (t, d, o) in enumerate(sw))
    ex = ''.join(f'<div style="font-size: 13px; line-height: 1.5; padding: 3px 0"><b style="font-weight: 600; {"color: #10B981" if w == "Vegham" else ""}">{w}</b> {t}</div>' for w, t in [('Vegham', 'Hello, Nila &amp; Co. How can I help?'), ('Caller', 'Sorry… Hindi mein baat kar sakte hain?'), ('Vegham', 'Bilkul! Bataiye, main aapki kaise madad kar sakti hoon?')])
    body = f'''<div><span style="display: block; font-size: 12.5px; color: var(--mut); margin-bottom: 8px">Speaks</span><div style="display: flex; flex-wrap: wrap; gap: 6px">{lh}</div><span style="display: block; margin-top: 8px; font-size: 12px; color: var(--mut2)">Fewer languages means better understanding. Pick the ones your customers use.</span></div>
      <div>{swh}</div><div style="padding: 12px 14px; border-radius: 12px; background: var(--soft2)">{ex}</div>'''
    return sheet('Languages', 'What it speaks, and when it switches', body, ob('Cancel') + pb('Save'))


# ================================================================ MEMORY (minimal)
def memory():
    opts = [('Naturally', '“Hi Rohan! Last time you were asking about group sessions. Still interested?”', True), ('Quietly', 'Uses what it knows to help faster, but doesn’t bring up the past', False), ('Off', 'Treats everyone as a new caller', False)]
    oh = ''.join(f'<div class="li" style="align-items: flex-start"><span class="radio{" on" if on else ""}" style="margin-top: 2px"></span><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="font-size: 13px; color: var(--mut)">{d}</span></span></div>' for t, d, on in opts)
    rem = '<div class="list">' + ''.join(f'<div class="li"><span class="k" style="width: auto; flex: 1">{t}</span>{tg(o)}</div>' for t, o in [('Names, languages and preferences', True), ('What they asked about and didn’t book', True), ('Bookings and visits', True), ('How they felt last time', True), ('Personal details (family, health, money)', False)]) + '</div>'
    care = '<div class="list">' + li('Check old details', 'Asks “still the case?” for anything older than 3 months') + li('Shared phones', 'Asks who’s calling if the voice or name doesn’t match') + li('Keep memory for', '12 months, then it’s deleted') + '</div>'
    body = f'''<div style="flex: 1; overflow: hidden; padding: 28px 32px"><div class="cw">
      <div style="display: flex; align-items: center; gap: 16px; padding: 18px 20px; border-radius: 16px; border: 1px solid var(--line); background: var(--card)"><span style="width: 44px; height: 44px; border-radius: 50%; background: var(--soft2); color: #10B981; display: inline-flex; align-items: center; justify-content: center">{MEMI(20)}</span><span style="flex: 1"><b style="display: block; font-size: 15px; font-weight: 600">Remember people</b><span style="font-size: 13px; color: var(--mut)">Knows 1,284 people by their phone number · <span style="color: var(--text); font-weight: 500">See them in People →</span></span></span>{tg()}</div>
      <div class="grp2">When someone calls back</div><div class="list">{oh}</div>
      <div class="grp2">What it remembers</div>{rem}
      <div class="grp2">Care and privacy</div>{care}</div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd("Memory", "How your receptionist remembers people", ob("Discard") + pb("Save"))}{body}{SMP}</div>'


# ================================================================ KNOWLEDGE (minimal)
def knowledge():
    src = ''.join(f'<span class="chip2">{I(ic, 14)}{t}<span style="color: var(--mut2)">{n}</span></span>' for ic, t, n in [('globe', 'Website', '14 pages'), ('tag', 'Prices', '12'), ('clock', 'Hours and location', ''), ('book', 'Answers', '26')])
    qa = [('Is there parking?', 'Free parking behind the building, enter from 7th Cross.', '41'), ('Do you take walk-ins?', 'Yes till 6 PM if a slot is free. Calling ahead is best.', '33'), ('Group sessions?', 'Saturdays 9 AM – 2 PM, up to 8 people, ₹350 each.', '19'),
          ('Open on Sundays?', 'No, we’re closed on Sundays.', '9'), ('How do I pay?', 'UPI, cards or cash at the visit.', '8'), ('Can I reschedule?', 'Yes, up to 4 hours before. Just call or message.', '7')]
    qh = ''.join(f'<div class="li" style="align-items: flex-start"><span style="flex: 1"><b style="display: block; font-weight: 500">{q}</b><span style="font-size: 13px; color: var(--mut)">{a}</span></span><span style="font-size: 12px; color: var(--mut2); white-space: nowrap">asked {u}×</span></div>' for q, a, u in qa)
    gap = f'''<div style="display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: 16px; border: 1px solid var(--line)"><span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981"></span><span style="flex: 1; font-size: 14px"><b style="font-weight: 600">3 questions it couldn’t answer</b> <span style="color: var(--mut)">· parking for vans, a lift, student discount</span></span>{pb("Answer them")}</div>'''
    body = f'''<div style="flex: 1; overflow: hidden; padding: 28px 32px"><div class="cw" style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; gap: 8px"><span class="fld" style="flex: 1; height: 44px; border-radius: 12px; color: var(--mut2); gap: 8px">{I("search", 16)}Search what it knows</span>{pb("Add answer", "plus")}</div>
      <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span style="font-size: 12.5px; color: var(--mut); margin-right: 4px">Learns from</span>{src}<span class="chip2">{I("plus", 13)}Add</span></div>
      {gap}<div class="list">{qh}</div></div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd("Knowledge", "What your receptionist knows about your business")}{body}{SMP}</div>'


# ================================================================ TEST CALL (minimal)
def test_call():
    seg = lambda opts, on: '<span class="perm">' + ''.join(f'<span class="{"on" if i == on else ""}">{t}</span>' for i, t in enumerate(opts)) + '</span>'
    turns = [('Vegham', 'Hi Rohan, good to hear from you again! All set for Saturday at 10 with your group of 5?', True), ('You', 'Haan… English thoda mushkil hai, Hindi mein?', False),
             ('Vegham', 'Bilkul Rohan ji. Saturday 10 baje, 5 log, sab confirm hai. Kuch badalna hai?', True), ('You', 'Nahi, bas confirm karna tha. Thank you!', False)]
    th = ''.join(f'<div style="align-self: {"flex-start" if us else "flex-end"}; max-width: 74%"><span style="display: block; font-size: 11.5px; color: var(--mut); margin-bottom: 4px; text-align: {"left" if us else "right"}">{w}</span><div style="padding: 10px 14px; border-radius: 16px; font-size: 14px; line-height: 1.5; {"background: var(--bg); box-shadow: inset 0 0 0 1px var(--line)" if us else "background: var(--soft2)"}">{t}</div></div>' for w, t, us in turns)
    note = f'<div style="display: flex; gap: 10px; align-items: center; justify-content: center; font-size: 12.5px; color: var(--mut)"><span style="color: #10B981">{I("lang", 15)}</span>Switched to Hindi when you asked · will start in Hindi next time</div>'
    body = f'''<div style="flex: 1; overflow: hidden; padding: 28px 32px"><div class="cw" style="max-width: 640px; height: 100%; display: flex; flex-direction: column; gap: 18px">
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap"><span style="font-size: 13px; color: var(--mut)">Call as</span>{seg(["A new caller", "Rohan (returning)", "An unhappy customer"], 1)}</div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 12px 0">{orb(84)}<b style="font-size: 16px; font-weight: 600">On a test call · 0:24</b><span style="font-size: 12.5px; color: var(--mut)">Uses your unsaved changes · never changes real memory</span></div>
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; gap: 12px">{th}</div>{note}
      <div style="display: flex; justify-content: center; gap: 8px">{ob("Type instead")}{ob("Call my phone", "phone")}<span class="pbtn">End call</span></div></div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd("Test call", "Talk to your receptionist before your customers do")}{body}{SMP}</div>'


AG = [('Agent', 'Your agent', agent_page, 'Agent'), ('AgentVoice', 'Your agent · choose a voice', lambda: agent_page(voice_sheet()), 'Agent'),
      ('AgentLanguages', 'Your agent · languages and switching', lambda: agent_page(lang_sheet()), 'Agent'),
      ('AgentMemory', 'Your agent · memory', memory, 'Memory'), ('AgentKnowledge', 'Your agent · knowledge', knowledge, 'Knowledge'), ('AgentTest', 'Your agent · test call', test_call, 'Test call')]
LINKS = {'Agent': [('>Voice<', 'AgentVoice'), ('>Languages<', 'AgentLanguages'), ('Call to test', 'AgentTest')],
         'AgentVoice': [('>Cancel<', 'Agent'), ('>Use this voice<', 'Agent')], 'AgentLanguages': [('>Cancel<', 'Agent'), ('Save</span></div></div>', 'Agent')],
         'AgentMemory': [('See them in People →', 'People')], 'AgentKnowledge': [], 'AgentTest': []}

if __name__ == '__main__':
    P = app2.P
    # every other app page gets the new sidebar too
    others = [b for b in app21.BOARDS if not b[0].startswith('Agent')]
    for f, t, act, fn, ov in others:
        app21.page(f, 'Vegham · ' + t, act, fn(), collapsed=f in ('Conversations', 'ConversationChat'), ov=ov)
    for f, t, fn, act in AG:
        build(F(f), 'Vegham · ' + t, active=act, main=fn(), notop=True, extra_css=CSS, navfn=NAV, menuhtml=app21.menu_html(), settingshtml=app21.settings_html(), nobiz=True)
    for f in [b[0] for b in others] + [a[0] for a in AG]:
        fp = os.path.join(P, F(f)); html = open(fp).read()
        for needle, tgt in (app21.LINKS.get(f, []) if not f.startswith('Agent') else LINKS.get(f, [])):
            html = link(html, needle, F(tgt))
        for a, b in [('.atab span', '.atab>*'), ('.seg label', '.seg>*')]:
            html = html.replace(a, b)
        html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}' + NEUTRAL + '</style>', 1)
        for a, b in COLOR_SWAPS:
            html = html.replace(a, b)
        open(fp, 'w').write(html)
    print('agent v3 ok')
