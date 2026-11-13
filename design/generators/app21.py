"""App, round 2: richer sidebar (Follow-ups, Insights, agent parts), Settings as a pop-up from the profile menu."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app20, app2
from app20 import (I, IC, WA, PH, GLOBE, chip, sel, bd, ob, pb, cav, avch, BELL, SEP, tg, row, card, build, link, F, CSS, SMP, MEMI, live_pill, NEUTRAL, COLOR_SWAPS)
import app9

for k, v in {
    'loop': '<path d="M17 2l4 4-4 4"></path><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"></path><path d="M21 13v2a3 3 0 0 1-3 3H3"></path>',
    'chart': '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>',
    'book': '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path><path d="M19 19v2H6"></path>',
    'flask': '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3"></path><path d="M7 15h10"></path>',
    'help': '<circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17v.5"></path>',
    'logout': '<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5M15 12H3"></path>',
    'gift': '<rect x="3" y="8" width="18" height="4"></rect><path d="M12 8v13M5 12v9h14v-9M12 8c-2-4-6-4-6-1s6 1 6 1zm0 0c2-4 6-4 6-1s-6 1-6 1z"></path>',
    'wallet': '<rect x="3" y="6" width="18" height="14" rx="2"></rect><path d="M16 13h2M3 10h18"></path>',
    'user': '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    'users': '<circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"></path>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10 21h4"></path>',
    'building': '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3"></path>',
    'shield': '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>',
    'x': '<path d="M6 6l12 12M18 6L6 18"></path>', 'sun': '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>',
    'moon': '<path d="M20 15A8 8 0 1 1 9 4a6.5 6.5 0 0 0 11 11z"></path>',
}.items():
    IC.setdefault(k, v)

app2.NAVMAP.clear()
app2.NAVMAP.update({'Home': F('Home'), 'Conversations': F('Conversations'), 'People': F('People'), 'Follow-ups': F('Followups'), 'Insights': F('Insights'),
                    'Voice and calls': F('Agent'), 'Memory': F('AgentMemory'), 'Knowledge': F('AgentKnowledge'), 'Test call': F('AgentTest')})


def NAV(nv, grp):
    return (nv('home', 'Home') + nv('conv', 'Conversations', badge='2') + nv('person', 'People') + nv('loop', 'Follow-ups', tag='23') + nv('chart', 'Insights')
            + grp('Your agent') + nv('headset', 'Voice and calls') + nv('memory', 'Memory') + nv('book', 'Knowledge') + nv('flask', 'Test call'))


# ---------------------------------------------------------------- account menu (from the profile row)
def menu_html():
    mi = lambda ic, t, k='', tag='div', extra='': f'<{tag} {extra} class="mi">{I(ic, 17)}{t}<span class="kb">{k}</span></{tag.split()[0]}>'
    return f'''<div class="ov ov-menu" style="position: absolute; inset: 0; z-index: 30">
      <label for="ov-none" aria-label="Close menu" style="position: absolute; inset: 0"></label>
      <div class="popin" role="menu" style="position: absolute; left: 12px; bottom: 66px; width: 300px; padding: 8px; border-radius: 16px; background: var(--pop); box-shadow: var(--shadow)">
        <div style="display: flex; align-items: center; gap: 12px; padding: 10px 10px 12px"><span style="width: 36px; height: 36px; border-radius: 50%; background: #10B981; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 600">V</span><span style="line-height: 1.3"><b style="display: block; font-weight: 600; font-size: 14px">Vinay</b><span style="font-size: 12.5px; color: var(--mut)">vinay@nilaandco.in</span></span></div>
        <div style="height: 1px; background: var(--line); margin: 0 6px 4px"></div>
        <label for="ov-set" class="mi">{I('gear', 17)}Settings<span class="kb">⌘ ,</span></label>
        <label for="ov-set" class="mi">{I('wallet', 17)}Plan and usage<span class="kb">23 days left</span></label>
        <div class="mi" style="cursor: default">{I('sun', 17)}Theme<span style="margin-left: auto" class="seg"><label for="th-light" class="t-light">{I('sun', 13)}</label><label for="th-dark" class="t-dark">{I('moon', 13)}</label></span></div>
        <div style="height: 1px; background: var(--line); margin: 4px 6px"></div>
        <div class="mi">{I('help', 17)}Help and support</div>
        <div class="mi">{I('gift', 17)}What’s new<span class="kb">2</span></div>
        <div style="height: 1px; background: var(--line); margin: 4px 6px"></div>
        <div class="mi">{I('logout', 17)}Log out</div></div></div>'''


# ---------------------------------------------------------------- settings pop-up
STABS = [('business', 'building', 'Business'), ('phone', 'phone', 'Phone and WhatsApp'), ('team', 'users', 'Team'), ('notifs', 'bell', 'Notifications'),
         ('plan', 'wallet', 'Plan and usage'), ('privacy', 'shield', 'Privacy'), ('profile', 'user', 'Your profile')]


def settings_html(tab='business'):
    fld = lambda l, v: f'<div><span class="lab">{l}</span><span class="fld">{v}</span></div>'
    grid2 = lambda *x: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px">' + ''.join(x) + '</div>'
    usage = lambda l, u, t, p: f'<div style="padding: 10px 0"><div style="display: flex; justify-content: space-between; font-size: 13px"><span>{l}</span><span style="color: var(--mut)">{u} of {t}</span></div><div style="margin-top: 8px; height: 6px; border-radius: 3px; background: var(--soft2)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: #10B981"></span></div></div>'
    hours = ''.join(f'<div style="display: flex; justify-content: space-between; padding: 9px 0; font-size: 13.5px; border-top: 1px solid var(--line)"><span>{d}</span><span style="color: var(--mut)">{h}</span></div>' for d, h in [('Monday – Friday', '9:00 AM – 8:00 PM'), ('Saturday', '10:00 AM – 6:00 PM'), ('Sunday', 'Closed')])
    sec = lambda t: f'<b style="display: block; font-size: 13px; font-weight: 600; margin: 20px 0 8px">{t}</b>'
    team = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line)">{cav(a, 32)}<span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span>{x}</div>' for a, n, d, x in [('V', 'Vinay', 'Owner · vinay@nilaandco.in', bd('Owner')), ('P', 'Priya Nair', 'Gets hand-overs on WhatsApp', sel('Member')), ('R', 'Rahul Menon', 'Invite sent', ob('Resend'))])
    panes = {
        'business': ('Business', 'What Vegham says about you', grid2(fld('Business name', 'Nila &amp; Co'), fld('Phone people know', '+91 80 4123 5678'), fld('Address', '12, 100 Feet Rd, Indiranagar'), fld('Website', 'nilaandco.in')) + sec('Opening hours') + hours + '<span style="display: block; margin-top: 8px; font-size: 12.5px; color: var(--mut)">Vegham still answers when you’re closed.</span>'),
        'phone': ('Phone and WhatsApp', 'Where Vegham answers', row('Vegham number', '080 4719 2200', bd('Working', 'good'), False) + row('Forwarding', 'From +91 80 4123 5678 when you’re busy or don’t pick up', ob('Change')) + row('WhatsApp', '+91 98765 43210 · Nila &amp; Co', bd('Connected', 'good')) + row('Text back missed calls', 'On WhatsApp within seconds', tg())),
        'team': ('Team', 'People who can use Vegham and get hand-overs', team + f'<div style="margin-top: 12px">{ob("Invite someone", "plus")}</div>'),
        'notifs': ('Notifications', 'How Vegham reaches you', row('Hand-overs', 'When Vegham needs a person', sel('WhatsApp'), False) + row('Call-back requests', '', sel('WhatsApp and app')) + row('Daily summary', 'What Vegham did today', sel('8 PM on WhatsApp')) + row('Weekly insights', '', sel('Email, Monday'))),
        'plan': ('Plan and usage', 'Growth · free pilot · 23 days left', usage('Call minutes', '212', '500', 42) + usage('WhatsApp conversations', '742', '1,500', 49) + usage('People remembered', '1,284', 'unlimited', 12) + f'<div style="margin-top: 14px">{pb("Choose a plan")}</div>'),
        'privacy': ('Privacy', 'India’s DPDP Act: tell people, keep only what you need, forget on request', row('Notice at the start of calls', '“This call may be recorded and remembered to help you next time.”', tg(), False) + row('Keep memory for', 'Then it’s deleted', sel('12 months')) + row('“Forget me” requests', '2 this month · handled automatically', ob('View')) + row('Download all data', 'People, conversations and recordings as a ZIP', ob('Download'))),
        'profile': ('Your profile', '', grid2(fld('Name', 'Vinay'), fld('Email', 'vinay@nilaandco.in'), fld('Phone', '+91 98450 11220'), fld('Language', 'English')) + row('Two-step sign-in', 'Code on WhatsApp when you log in on a new device', tg())),
    }
    inputs = ''.join(f'<input class="vh" type="radio" name="s2" id="s2-{k}"{" checked" if k == tab else ""} aria-label="{t}" />' for k, _, t in STABS)
    css = '<style>' + ''.join(f'.app:has(#s2-{k}:checked) label[for=s2-{k}]{{background:var(--soft);color:var(--text);font-weight:500}}.app:has(#s2-{k}:checked) .s2p-{k}{{display:block}}' for k, _, _ in STABS) + '.s2p{display:none}</style>'
    nav = ''.join(f'<label for="s2-{k}" class="stab">{I(ic, 17)}{t}</label>' for k, ic, t in STABS)
    body = ''.join(f'<div class="s2p s2p-{k}"><b style="display: block; font-size: 18px; font-weight: 600">{t}</b><span style="display: block; font-size: 13px; color: var(--mut); margin: 2px 0 18px">{sub}</span>{inner}</div>' for k, (t, sub, inner) in panes.items())
    return f'''{inputs}{css}<div class="ov ov-set" style="position: absolute; inset: 0; z-index: 40; align-items: center; justify-content: center">
      <label for="ov-none" aria-label="Close settings" style="position: absolute; inset: 0; background: var(--scrim)"></label>
      <div class="popin" role="dialog" aria-modal="true" aria-label="Settings" style="position: relative; width: 920px; height: 640px; border-radius: 22px; background: var(--pop); box-shadow: var(--shadow); display: flex; overflow: hidden">
        <div style="width: 240px; flex: none; padding: 14px 10px; border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 2px">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 2px 4px 12px 10px"><b style="font-size: 15px; font-weight: 600">Settings</b><label for="ov-none" class="ibtn" aria-label="Close">{I('x', 17)}</label></div>{nav}</div>
        <div style="flex: 1; padding: 26px 32px; overflow: hidden">{body}</div></div></div>'''


def page(fname, title, active, html, collapsed=False, ov='none', tab='business'):
    build(F(fname), title, active=active, main=html, notop=True, extra_css=CSS, navfn=NAV, collapsed=collapsed, ov=ov, menuhtml=menu_html(), settingshtml=settings_html(tab), nobiz=True)


# ---------------------------------------------------------------- agent pages without tabs (each is a sidebar item)
AGSUB = {'Voice and calls': 'How Vegham sounds and when it picks up', 'Memory': 'How Vegham remembers people and talks about the past',
         'Knowledge': 'What Vegham knows about your business', 'Test': 'Call Vegham as anyone and hear how it talks'}


def agent_shell(tab, body, right=''):
    title = 'Test call' if tab == 'Test' else tab
    hd = f'''<div class="hd" style="padding-left: 28px; height: 68px"><span style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">{title}</b><span style="font-size: 12.5px; color: var(--mut)">{AGSUB[tab]}</span></span>{live_pill()}{ob("Discard")}{pb("Save changes")}{SEP}{BELL}</div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{hd}<div style="flex: 1; display: flex; min-height: 0">{body}</div>{SMP}</div>'


app20.agent_shell = agent_shell


# ---------------------------------------------------------------- FOLLOW-UPS
def followups():
    items = [('A', 'Ananya Rao', 'wa', 'Asked about prices on Saturday · said she’d decide by Monday', 'Due today', 'Hi Ananya! Just checking in on the prices I shared on Saturday. Would you like me to book a first visit this week?', 'Vegham sends today, 11 AM'),
             ('P', 'P. Iyer', 'ph', 'Unhappy last visit · Vegham promised a call back today', 'Due today', 'This one needs you. Vegham promised a person would call.', 'You call'),
             ('V', 'Vikram Singh', 'ph', 'Asked for evening slots in August · didn’t book', '3 months', 'Hi Vikram, we now have evening slots till 8 PM on weekdays. Want me to hold one for you?', 'Vegham sends Tue, 6 PM'),
             ('K', 'Kavya Nair', 'wa', 'Said her group of 8 might come back in November', 'This month', 'Hi Kavya! You mentioned your group might come back in November. Saturday mornings have room. Shall I check a date?', 'Vegham sends Wed, 10 AM')]
    cards = ''
    for a, n, ch, why, due, msg, who in items:
        you = who == 'You call'
        cards += f'''<div class="rc" style="display: flex; flex-direction: column; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px">{avch(a, ch, 36)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 14.5px">{n}</b><span style="font-size: 12.5px; color: var(--mut)"><span style="color: #10B981">{MEMI(12)}</span> {why}</span></span>{bd(due, "warn" if due == "Due today" else "")}</div>
          <div style="padding: 12px 14px; border-radius: 12px; background: var(--soft2); font-size: 13.5px; line-height: 1.55">{"<b style='font-weight: 600'>" + msg + "</b>" if you else "“" + msg + "”"}</div>
          <div style="display: flex; align-items: center; gap: 8px"><span style="font-size: 12.5px; color: var(--mut); flex: 1">{who}</span>{pb("Call now", "phone") if you else ob("Edit") + ob("Skip") + pb("Send now")}</div></div>'''
    st = app9.strip([('Open follow-ups', '23', 'people said “I’ll think about it”', 'var(--mut)'), ('Followed up this month', '41', 'by Vegham', 'var(--mut)'), ('Came back and booked', '14', '34% of follow-ups', 'var(--good)')])
    filt = f'<div style="display: flex; align-items: center; gap: 8px; padding: 12px 28px; border-bottom: 1px solid var(--line)">{chip("Due now", True, "4")}{chip("This week", False, "9")}{chip("Later", False, "10")}{chip("Done", False, "41")}</div>'
    rules = f'''<div class="pn" style="width: 330px; padding: 20px; gap: 4px"><b style="font-size: 14px; font-weight: 600">Automatic follow-ups</b><span style="font-size: 12.5px; color: var(--mut); margin-bottom: 8px">Vegham follows up on its own, once, in a friendly way</span>
      {row("Follow up on its own", "Only people who opted in to messages", tg(), False)}{row("When", "If they said they’d think about it", sel("After 2 days"))}{row("How many times", "", sel("Once"))}{row("Unhappy customers", "Always hand to you, never automatic", tg())}</div>'''
    main = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{app20.head("Follow-ups", "People Vegham should get back to")}{st}{filt}
      <div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-content: start">{cards}</div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{main}{rules}{SMP}</div>'


# ---------------------------------------------------------------- INSIGHTS
def insights():
    st = app9.strip([('Calls answered', '486', 'last 30 days', 'var(--mut)'), ('Missed calls saved', '112', 'busy or closed', 'var(--good)'), ('Handled without you', '86%', '↑ 3 pts', 'var(--good)'), ('Returning callers recognised', '412', '38% of calls', 'var(--mut)')])
    hrs = [(8, 4), (9, 18), (10, 31), (11, 36), (12, 22), (13, 15), (14, 19), (15, 24), (16, 28), (17, 39), (18, 46), (19, 41), (20, 27), (21, 14), (22, 6)]
    bars = ''.join(f'<span title="{h}:00 · {v} calls" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px; height: 100%"><span style="width: 70%; height: {v / 46 * 100:.0f}%; border-radius: 4px 4px 0 0; background: {"#10B981" if h >= 20 or h < 9 else "var(--ink)"}"></span><span style="font-size: 10.5px; color: var(--mut2)">{h if h <= 12 else h - 12}{"a" if h < 12 else "p"}</span></span>' for h, v in hrs)
    chart = f'<div style="display: flex; gap: 4px; height: 190px">{bars}</div><div style="display: flex; gap: 16px; margin-top: 10px; font-size: 12px; color: var(--mut)"><span style="display: inline-flex; align-items: center; gap: 6px"><i style="width: 10px; height: 10px; border-radius: 3px; background: var(--ink)"></i>Open hours</span><span style="display: inline-flex; align-items: center; gap: 6px"><i style="width: 10px; height: 10px; border-radius: 3px; background: #10B981"></i>After hours · Vegham only</span></div>'
    why = [('Prices', 31), ('Booking or moving a visit', 27), ('Timings and location', 18), ('Follow-up on a past chat', 12), ('Complaint or refund', 6), ('Other', 6)]
    wh = ''.join(f'<div style="display: grid; grid-template-columns: 190px 1fr 40px; gap: 10px; align-items: center; font-size: 13px; padding: 5px 0"><span>{n}</span><span style="height: 8px; border-radius: 4px; background: var(--soft2)"><span style="display: block; width: {v / 31 * 100:.0f}%; height: 100%; border-radius: 4px; background: var(--ink)"></span></span><span style="text-align: right; color: var(--mut)">{v}%</span></div>' for n, v in why)
    memc = f'''<div style="display: flex; align-items: baseline; gap: 10px"><span class="hero" style="font-size: 40px">38%</span><span style="font-size: 13px; color: var(--mut)">of calls were people Vegham already knew</span></div>
      <div style="margin-top: 14px; display: flex; flex-direction: column">{row("Booked faster", "Returning callers booked in 52 sec vs 1:48", "", False)}{row("Picked up an old conversation", "61 calls continued something from before", "")}{row("Checked an old memory", "“Still a group of 3?” · 23 times", "")}</div>'''
    hand = [('Complaint', 14), ('Price not in your list', 9), ('Asked for a person', 6), ('Didn’t know the answer', 5)]
    hh = ''.join(row(n, '', f'<span style="font-size: 13px; color: var(--mut)">{v}</span>', i > 0) for i, (n, v) in enumerate(hand))
    body = f'''{st}<div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; align-content: start">
      {card("When people call", "Calls per hour, last 30 days · 31% came after hours", chart)}{card("Memory at work", "", memc)}
      {card("Why people called", "", wh)}{card("Why Vegham handed over", "34 conversations", hh)}</div>'''
    right = app9.seg(['7 days', '30 days', '90 days'], 1)
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{app20.head("Insights", "Last 30 days", right)}{body}{SMP}</div>'


BOARDS = [('Welcome', 'Home · first login', 'Home', app20.welcome, 'none'), ('Home', 'Home', 'Home', app20.home, 'none'), ('Menu', 'Profile menu (click your name, bottom left)', 'Home', app20.home, 'menu'),
          ('Settings', 'Settings pop-up', 'Home', app20.home, 'set'),
          ('Conversations', 'Conversations · a returning caller', 'Conversations', app20.conversation_call, 'none'), ('ConversationChat', 'Conversations · WhatsApp hand-over', 'Conversations', app20.conversation_chat, 'none'),
          ('People', 'People', 'People', app20.people, 'none'), ('Person', 'People · one person’s memory', 'People', app20.person, 'none'),
          ('Followups', 'Follow-ups', 'Follow-ups', followups, 'none'), ('Insights', 'Insights', 'Insights', insights, 'none'),
          ('Agent', 'Your agent · voice and calls', 'Voice and calls', app20.agent, 'none'), ('AgentMemory', 'Your agent · memory', 'Memory', app20.agent_memory, 'none'),
          ('AgentKnowledge', 'Your agent · knowledge', 'Knowledge', app20.agent_knowledge, 'none'), ('AgentTest', 'Your agent · test call', 'Test call', app20.agent_test, 'none')]
LINKS = dict(app20.LINKS)
for n in ['Agent', 'AgentMemory', 'AgentKnowledge', 'AgentTest']:
    LINKS[n] = []
LINKS['Menu'] = LINKS['Home']; LINKS['Settings'] = LINKS['Home']
LINKS['Followups'] = []; LINKS['Insights'] = []

if __name__ == '__main__':
    P = app2.P
    for f, t, act, fn, ov in BOARDS:
        page(f, 'Vegham · ' + t, act, fn(), collapsed=f in ('Conversations', 'ConversationChat'), ov=ov)
        fp = os.path.join(P, F(f)); html = open(fp).read()
        for needle, tgt in LINKS.get(f, []):
            html = link(html, needle, F(tgt))
        for a, b in [('.atab span', '.atab>*'), ('.seg label', '.seg>*')]:
            html = html.replace(a, b)
        html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}' + NEUTRAL + '</style>', 1)
        for a, b in COLOR_SWAPS:
            html = html.replace(a, b)
        open(fp, 'w').write(html)
    print('app round 2 ok')
