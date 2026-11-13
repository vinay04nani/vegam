"""AI agents v2: no inner sidebar. An agents list page, then one page per agent with tabs."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app11
from app11 import I, IC, WA, IG, GLOBE, PH, build, chip, sel, bd, ob, pb, cav, BELL, SEP, MS, tg, row, card, CSS as BASE
import app9

# capture the tab bodies designed in app11 without its inner sidebar
_cap = {}
app11.page = lambda active, title, sub, body, overlay='', ok=False: (body, overlay)
CHAT_SETUP, _ = app11.chat()
VOICE_SETUP, _ = app11.voice()
KNOW, _ = app11.knowledge()
RULES, _ = app11.rules()
TESTS, _ = app11.testlab()
IMPROVE, _ = app11.improve()
_, MODAL = app11.publish()

def strip_tabs(html):
    i = html.find('<div class="tabs3">')
    if i < 0: return html
    j = html.find('</div>', i) + 6
    return html[:i] + html[j:]

CHAT_SETUP, VOICE_SETUP = strip_tabs(CHAT_SETUP), strip_tabs(VOICE_SETUP)
KNOW = KNOW.replace('Everything Vegham reads. Shared by all agents.', 'Everything this agent reads. Sources are shared with your other agents.')
TESTS = (TESTS.replace('<th>Agent</th>', '').replace('<td style="color: var(--mut)">Chat</td>', '').replace('<td style="color: var(--mut)">Voice</td>', '')
         .replace('Asks for parking in Hindi', 'Asks for parking in Hindi').replace('Caller asks for the owner', 'Asks to speak to the owner').replace('Transfers to Vinay', 'Hands over to Vinay'))
TESTS = TESTS.replace('11 of 12 pass', '7 of 8 pass')
MODAL = MODAL.replace('12 of 12 tests pass', '8 of 8 tests pass')
RULES = RULES.replace('Applies to every agent. “Ask me first” holds the slot and asks you in the app.', '“Ask me first” holds the slot and asks you in the app.')

CSS = BASE + '''
.atab{display:flex;gap:24px;padding:0 28px;border-bottom:1px solid var(--line);font-size:13.5px}
.atab span{height:44px;display:inline-flex;align-items:center;gap:6px;color:var(--mut);white-space:nowrap}
.atab span.on{border-bottom:2px solid var(--text);color:var(--text);font-weight:500}
.atab em{font-style:normal;font-size:11.5px}
.acard{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:16px;position:relative}
.acard:hover{box-shadow:0 0 0 1px var(--text)}
'''
SMP = app11.SMP
TABS = [('Overview', ''), ('Setup', ''), ('Knowledge', '<em style="color: var(--warn)">3 gaps</em>'), ('Permissions', ''), ('Test', '<em style="color: #E5484D">1 failing</em>'), ('Conversations', '<em style="color: var(--mut2)">13</em>'), ('History', '')]
AG = {'chat': ('msg', 'Chat receptionist', 'WhatsApp, Instagram, Messenger, website · always on'),
      'voice': ('phone', 'Voice receptionist', '080 4719 2200 · English and Hindi')}


def agent_page(key, tab, body, overlay='', ok=False):
    ic, name, sub = AG[key]
    tabsl = TABS if key == 'chat' else [('Overview', ''), ('Setup', ''), ('Knowledge', '<em style="color: var(--warn)">3 gaps</em>'), ('Permissions', ''), ('Test', ''), ('Calls', '<em style="color: var(--mut2)">7</em>'), ('History', '')]
    status = ('<span style="color: var(--good)">8 of 8 tests pass</span>' if ok else '<span style="color: #E5484D">7 of 8 tests pass</span>') if key == 'chat' else '<span style="color: var(--good)">6 of 6 tests pass</span>'
    tabs = '<div class="atab">' + ''.join(f'<span class="{"on" if t == tab else ""}">{t}{n}</span>' for t, n in tabsl) + '</div>'
    head = f'''<div style="padding: 14px 28px 0"><div style="display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--mut)"><span>AI agents</span>{I("chevr", 13)}<span style="color: var(--text)">{name}</span></div>
      <div style="display: flex; align-items: center; gap: 14px; padding: 12px 0 14px">
        <span style="width: 44px; height: 44px; border-radius: 14px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 21)}</span>
        <span style="flex: 1; min-width: 0"><span style="display: flex; align-items: center; gap: 10px"><b style="font-size: 20px; font-weight: 600; letter-spacing: -0.01em">{name}</b>{bd("On", "good")}</span><span style="font-size: 12.5px; color: var(--mut)">{sub}</span></span>
        <span style="display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--warn)"></span>3 unpublished changes · {status}</span>
        {ob("Discard")}{pb("Review and publish")}<span class="ibtn" title="More">{I("dots", 17) if "dots" in IC else "⋯"}</span>{SEP}{BELL}</div></div>'''
    return f'<div style="display: flex; flex-direction: column; height: 100%; position: relative">{head}{tabs}<div style="flex: 1; min-height: 0; display: flex; flex-direction: column">{body}</div>{overlay}{SMP}</div>'


# ================================================================ AGENTS LIST
def agents_list():
    def acard(ic, n, desc, state, stats, foot, flags='', soon=False):
        sts = ''.join(f'<span><span class="num" style="display: block; font-size: 22px">{v}</span><span style="font-size: 12px; color: var(--mut)">{l}</span></span>' for v, l in stats)
        return f'''<div class="acard" style="{"opacity: .8" if soon else ""}">
          <div style="display: flex; align-items: flex-start; gap: 14px"><span style="width: 48px; height: 48px; border-radius: 15px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{I(ic, 22)}</span>
            <span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 16px">{n}</b><span style="font-size: 13px; color: var(--mut)">{desc}</span></span>{state}</div>
          {f'<div style="display: flex; gap: 32px">{sts}</div>' if stats else ''}
          {f'<div style="display: flex; flex-wrap: wrap; gap: 6px">{flags}</div>' if flags else ''}
          <div style="display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid var(--line); font-size: 12.5px; color: var(--mut)">{foot}</div></div>'''
    flag = lambda t, c: f'<span style="display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 10px; border-radius: 999px; background: var(--soft2); font-size: 12px"><span style="width: 6px; height: 6px; border-radius: 50%; background: {c}"></span>{t}</span>'
    openb = '<span style="margin-left: auto; color: var(--text); font-weight: 500">Open →</span>'
    cards = (acard('msg', 'Chat receptionist', 'Answers messages, books visits and sends payment links', tg(), [('23', 'chats today'), ('9', 'bookings'), ('4 sec', 'first reply'), ('86%', 'without you')],
                   f'{WA(15)}{IG(15)}{MS(15)}{GLOBE(15)}<span>4 channels · always on</span>{openb}', flag('1 test failing', '#E5484D') + flag('3 unanswered questions', 'var(--warn)') + flag('3 unpublished changes', 'var(--warn)'))
             + acard('phone', 'Voice receptionist', 'Answers your phone line, books visits and takes messages', tg(), [('7', 'calls today'), ('3', 'bookings'), ('1', 'transferred'), ('78%', 'without you')],
                     f'{PH(14)}<span>080 4719 2200 · English, Hindi · voice Warm 1</span>{openb}', flag('2 transfers not answered', 'var(--mut2)'))
             + acard('person', 'Owner’s assistant', 'Sends your morning report and answers your questions on WhatsApp', tg(), [('8:00 AM', 'daily report'), ('12', 'questions this week')],
                     f'{WA(14)}<span>To Vinay on WhatsApp</span>{openb}')
             + acard('outcall', 'Outbound caller', 'Calls new leads back and confirms tomorrow’s bookings', bd('Coming soon · Pro', 'acc'), [],
                     '<span>We’ll let you know when it’s ready to try.</span><span style="margin-left: auto">' + ob('Notify me') + '</span>', soon=True))
    st = app9.strip([('Handled without you', '83%', '↑ 4 pts', 'var(--good)'), ('Bookings by Vegham', '214', '69% of all', 'var(--mut)'), ('Revenue', '₹2,56,800', '↑ 12%', 'var(--good)'),
                     ('Customer rating', '4.7', '311 ratings', 'var(--mut)'), ('First reply', '4 sec', 'your team: 18 min', 'var(--mut)')])
    head = f'''<div class="hd" style="padding-left: 28px"><h1>AI agents</h1><span style="font-size: 14px; color: var(--mut2)">Last 30 days</span><span style="flex: 1"></span>{SEP}{BELL}</div>'''
    note = f'<div style="display: flex; align-items: center; gap: 12px; padding: 14px 18px; border-radius: 16px; border: 1px dashed var(--line); font-size: 13px; color: var(--mut)">{I("refresh", 16)}<span style="flex: 1">Reminders, follow-ups and review requests aren’t agents. They are <b style="color: var(--text); font-weight: 500">Automations</b>, in Business settings.</span><span style="color: var(--text); font-weight: 500">Open Automations →</span></div>'
    main = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{head}{st}
      <div style="flex: 1; overflow: hidden; padding: 24px 28px; display: flex; flex-direction: column; gap: 16px"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">{cards}</div>{note}</div></div>'''
    return f'<div style="display: flex; height: 100%; position: relative">{main}{SMP}</div>'


# ================================================================ AGENT OVERVIEW TAB
def chat_overview():
    st = app9.strip([('Conversations', '742', '↑ 11%', 'var(--good)'), ('Handled without you', '86%', '↑ 3 pts', 'var(--good)'), ('Bookings', '168', '23% of chats', 'var(--mut)'),
                     ('Revenue', '₹2,01,600', '↑ 14%', 'var(--good)'), ('Rating', '4.8', '214 ratings', 'var(--mut)')])
    att = [('#E5484D', 'A test fails after your change', 'Group of 8 asked for a discount: offered 15%, your rule says 10%.', 'Open test'),
           ('var(--warn)', '3 questions it couldn’t answer', 'Student discounts, female staff, kids under 10.', 'Answer'),
           ('var(--warn)', 'Website last read 32 days ago', 'Your prices page changed since then.', 'Read again')]
    ah = ''.join(f'<div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="width: 8px; height: 8px; border-radius: 50%; background: {c}; margin-top: 6px; flex: none"></span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span><span style="font-size: 12.5px; font-weight: 500; white-space: nowrap">{a} →</span></div>' for i, (c, t, d, a) in enumerate(att))
    reasons = [('Complaint', 14), ('Refund', 8), ('Asked for a person', 6), ('Not sure of the answer', 6), ('Over a limit', 4)]
    rh = ''.join(f'<div style="display: grid; grid-template-columns: 150px 1fr 26px; gap: 10px; align-items: center; font-size: 12.5px; padding: 4px 0"><span style="color: var(--mut)">{n}</span><span style="height: 8px; border-radius: 4px; background: var(--soft2)"><span style="display: block; width: {v / 14 * 100:.0f}%; height: 100%; border-radius: 4px; background: var(--s1)"></span></span><span style="text-align: right">{v}</span></div>' for n, v in reasons)
    ch = [(WA(15), 'WhatsApp', 431, 102), (IG(15), 'Instagram', 168, 34), (MS(15), 'Messenger', 61, 12), (GLOBE(15), 'Website chat', 82, 20)]
    chh = '<table class="tbl2"><tr><th>Channel</th><th class="r">Chats</th><th class="r">Bookings</th></tr>' + ''.join(f'<tr><td><span style="display: inline-flex; align-items: center; gap: 8px">{f}{n}</span></td><td class="r">{c}</td><td class="r">{b}</td></tr>' for f, n, c, b in ch) + '</table>'
    recent = [('R', 'Riya Sharma', 'wa', 'Booked Fri 6:30 PM · paid', '6:04 PM', 'good'), ('A', 'Arjun Mehta', 'ig', 'Handed to Vinay · group price', '5:53 PM', 'warn'), ('K', 'Kabir Rao', 'web', 'Answered parking question', '1:22 PM', 'mut'), ('D', 'Dev Kumar', 'ms', 'Asked team to call at 5 PM', '12:40 PM', 'mut')]
    rc = ''.join(f'<div style="display: flex; align-items: center; gap: 10px; padding: 10px 0; {"border-top: 1px solid var(--line)" if i else ""}">{app9.avch(a, k, 30)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 13px">{n}</b><span style="font-size: 12px; color: var(--mut)">{d}</span></span><span style="font-size: 11.5px; color: var(--mut2)">{t}</span></div>' for i, (a, n, k, d, t, s) in enumerate(recent))
    body = f'''{st}<div style="flex: 1; overflow: hidden; padding: 20px 28px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; align-content: start">
      {card("Needs attention", "", ah, bd("3", "warn"))}{card("Why it handed over", "38 conversations", rh)}{card("Recent conversations", "", rc, '<span style="font-size: 12.5px; font-weight: 500">All →</span>')}
      {card("By channel", "Last 30 days", chh)}{card("Settings at a glance", "", row("Tone", "", "Warm, short", False) + row("Discounts", "", "Up to 10%") + row("Hands over on", "", "Complaints, refunds") + row("Says it’s AI", "", "Yes"))}
      {card("Last published", "", row("Today, 11:40 AM", "By Vinay · added parking answer", ob("History"), False) + row("3 changes in draft", "Discount rule, new answer, greeting", pb("Review")))}</div>'''
    return agent_page('chat', 'Overview', body)


if __name__ == '__main__':
    IC.setdefault('dots', '<circle cx="5" cy="12" r="1.2"></circle><circle cx="12" cy="12" r="1.2"></circle><circle cx="19" cy="12" r="1.2"></circle>')
    IC.setdefault('chevr', '<path d="M9 6l6 6-6 6"></path>')
    B = lambda f, t, html: build(f, t, active='AI agents', main=html, notop=True, extra_css=CSS)
    B('AppV2Agents.dc.html', 'App · AI agents', agents_list())
    B('AppV2AgentChat.dc.html', 'App · AI agents · Chat receptionist · overview', chat_overview())
    B('AppV2AgentSetup.dc.html', 'App · AI agents · Chat receptionist · setup', agent_page('chat', 'Setup', CHAT_SETUP))
    B('AppV2AgentKnowledge.dc.html', 'App · AI agents · Chat receptionist · knowledge', agent_page('chat', 'Knowledge', KNOW))
    B('AppV2AgentRules.dc.html', 'App · AI agents · Chat receptionist · permissions', agent_page('chat', 'Permissions', RULES))
    B('AppV2AgentTests.dc.html', 'App · AI agents · Chat receptionist · test', agent_page('chat', 'Test', TESTS))
    B('AppV2AgentImprove.dc.html', 'App · AI agents · Chat receptionist · conversations', agent_page('chat', 'Conversations', IMPROVE))
    B('AppV2AgentPublish.dc.html', 'App · AI agents · publish', agent_page('chat', 'Setup', CHAT_SETUP, MODAL, True))
    B('AppV2AgentVoice.dc.html', 'App · AI agents · Voice receptionist · setup', agent_page('voice', 'Setup', VOICE_SETUP))
    print('agents v2 ok')
