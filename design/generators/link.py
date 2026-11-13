"""Turn chosen elements in the generated app boards into links between boards (click-through prototype)."""
import os, re, sys
P = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'vegam-ui', 'project')
TAG = re.compile(r'<(/?)([a-zA-Z][a-zA-Z0-9-]*)([^>]*?)(/?)>')
VOID = {'input', 'br', 'img', 'meta', 'link', 'hr', 'path', 'circle', 'rect', 'line', 'source'}
LINKABLE = {'span', 'div', 'b', 'label', 'p'}


def link(html, needle, href, nth=0, up=0):
    start = html.index('<x-dc>')
    pos, found = start, -1
    for _ in range(nth + 1):
        found = html.index(needle, pos)
        pos = found + 1
    # find innermost enclosing element at `found`
    stack = []
    for m in TAG.finditer(html, start, found + 1):
        close, name, _, selfc = m.group(1), m.group(2).lower(), m.group(3), m.group(4)
        if name in VOID or selfc: continue
        if close:
            while stack and stack[-1][0] != name: stack.pop()
            if stack: stack.pop()
        else:
            stack.append((name, m.start()))
    # if needle itself starts with a tag, the element is that tag
    if needle.startswith('<'):
        m = TAG.match(html, found); stack.append((m.group(2).lower(), found))
    k = len(stack) - 1 - up
    while k >= 0 and stack[k][0] not in LINKABLE: k -= 1
    name, s0 = stack[k]
    # matching close
    depth, mclose = 0, None
    for m in TAG.finditer(html, s0):
        close, n2, selfc = m.group(1), m.group(2).lower(), m.group(4)
        if n2 != name or selfc: continue
        depth += -1 if close else 1
        if depth == 0: mclose = m; break
    open_m = TAG.match(html, s0)
    attrs = open_m.group(3)
    if 'for="' in attrs: attrs = re.sub(r'\sfor="[^"]*"', '', attrs)
    disp = 'display: block; ' if name in ('div', 'p') else ''
    if 'style="' in attrs:
        attrs = attrs.replace('style="', 'style="cursor: pointer; ' + disp, 1)
    else:
        attrs += ' style="cursor: pointer; ' + disp + '"'
    new_open = f'<a href="{href}"{attrs}>'
    return html[:s0] + new_open + html[open_m.end():mclose.start()] + '</a>' + html[mclose.end():]


F = lambda n: f'AppV2{n}.dc.html'
TABS_CHAT = [('>Overview<', 'AgentChat'), ('>Setup<', 'AgentSetup'), ('>Knowledge<em', 'AgentKnowledge'), ('>Permissions<', 'AgentRules'), ('>Test<em', 'AgentTests'), ('>Conversations<em', 'AgentImprove')]
PAYTABS = [('>Payments<em', 'Payments'), ('>Payment links<em', 'PaymentLinks'), ('>Payouts<', 'Payouts')]
L = {
    'Home': [('Arjun asked for a group price', 'InboxHandover'), ('Call back P. Iyer', 'Calls')],
    'InboxAI': [('>Arjun Mehta<', 'InboxHandover')],
    'InboxHandover': [('>Riya Sharma<', 'InboxAI'), ('Open in Leads →', 'LeadsList')],
    'Calendar': [('>Day<', 'CalendarDay')],
    'CalendarDay': [('>Week<', 'Calendar')],
    'Calls': [('>+91 98•• ••21<', 'CallDetail')],
    'CallDetail': [('>Calls<', 'Calls')],
    'Contacts': [('>Riya Sharma<', 'ContactProfile'), ('Review →', 'ContactMerge')],
    'ContactProfile': [('Contacts <svg', 'Contacts')],
    'ContactMerge': [('>Merge<', 'Contacts', 1), ('>Not the same person<', 'Contacts')],
    'Leads': [('List</label>', 'LeadsList'), ('>Arjun Mehta<', 'LeadsList')],
    'LeadsList': [('Board</label>', 'Leads')],
    'Campaigns': [('New campaign</span>', 'CampaignNew')],
    'CampaignNew': [('>Back<', 'Campaigns')],
    'Payments': [(a, b) for a, b in PAYTABS if b != 'Payments'],
    'PaymentLinks': [(a, b) for a, b in PAYTABS if b != 'PaymentLinks'],
    'Payouts': [(a, b) for a, b in PAYTABS if b != 'Payouts'],
    'Channels': [('Manage →', 'ChannelWhatsApp', 0), ('Manage →', 'ChannelWebchat', 3)],
    'ChannelWhatsApp': [('Channels and apps <svg', 'Channels')],
    'ChannelWebchat': [('Channels and apps <svg', 'Channels')],
    'Agents': [('Open →', 'AgentChat', 0), ('Open →', 'AgentVoice', 1)],
    'AgentPublish': [('>Publish<', 'AgentChat'), ('>Cancel<', 'AgentSetup')],
}
for page in ['AgentChat', 'AgentSetup', 'AgentKnowledge', 'AgentRules', 'AgentTests', 'AgentImprove']:
    L[page] = [(n, t) for n, t in TABS_CHAT if t != page] + [('<span>AI agents</span>', 'Agents'), ('Review and publish', 'AgentPublish')]
L['AgentChat'] += [('Open test →', 'AgentTests')]
L['AgentVoice'] = [('<span>AI agents</span>', 'Agents')]

if __name__ == '__main__':
    n = 0
    for page, items in L.items():
        fp = os.path.join(P, F(page))
        html = open(fp).read()
        for it in items:
            needle, tgt = it[0], it[1]; nth = it[2] if len(it) > 2 else 0
            if F(tgt) in html and needle in ('List</label>', 'Board</label>'):
                pass
            try:
                html = link(html, needle, F(tgt), nth)
                n += 1
            except Exception as e:
                print('FAIL', page, needle, e); sys.exit(1)
        for a, b in [('.atab span', '.atab>*'), ('.ptab span', '.ptab>*'), ('.seg label', '.seg>*'), ('.tabs3 span', '.tabs3>*')]:
            html = html.replace(a, b)
        html = html.replace('</style>', ':where(.app) a{color:inherit;text-decoration:none}</style>', 1)
        open(fp, 'w').write(html)
    print('links added:', n)
