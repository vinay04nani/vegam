"""App shell clean-up, applied to the app boards in place:
1. The vegham wordmark inside the app is plain aurora green (no gradient)
2. No sidebar collapse button (or collapsing); the notifications bell moves into its place
3. No page title bar at the top of each page; a page's own actions stay, in a slim row with no title
4. Clearer sidebar icons (Lucide-style line icons)

  python3 app28.py <folder with the App*.dc.html boards>
"""
import glob, os, re, sys

G = '#10B981'


def svg(body):
    return ('<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" '
            'stroke-linecap="round" stroke-linejoin="round">%s</svg>') % body


ICONS = {
    'Home': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
    'Conversations': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    'People': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    'Follow-ups': '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path>',
    'Insights': '<path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>',
    'Agent': '<path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path>',
    'Languages': '<path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path>',
    'Memory': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path>',
    'Knowledge': '<path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>',
    'Channels': '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51 6.83 3.98"></path><path d="m15.41 6.51-6.82 3.98"></path>',
    'Test call': '<path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>',
}

SEP = '<span style="width: 1px; height: 22px; background: var(--line); margin: 0 4px"></span>'


def block(html, start, tag='div'):
    """End index of the element that opens at `start`."""
    depth = 0
    for m in re.compile(r'<(/?)%s\b' % tag).finditer(html, start):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return html.index('>', m.end()) + 1
    raise ValueError('unclosed')


def children(html):
    """Top-level elements inside one element's html (start, end) pairs, ignoring text."""
    inner_start = html.index('>') + 1
    inner_end = html.rindex('<')
    out, i = [], inner_start
    while True:
        m = re.compile(r'<([a-z]+)\b').search(html, i)
        if not m or m.start() >= inner_end:
            return out
        tag = m.group(1)
        if tag in ('input', 'br', 'img'):
            end = html.index('>', m.start()) + 1
        else:
            end = block(html, m.start(), tag)
        out.append(html[m.start():end])
        i = end


def fix(path, name):
    s = open(path).read()
    # 1. green wordmark (sidebar and the set-up header)
    s = re.sub(r'(<span\b[^>]*style="[^"]*?)color: transparent; background: linear-gradient\([^"]*?\); -webkit-background-clip: text; background-clip: text("[^>]*>vegham</span>)',
               lambda m: m.group(1) + 'color: %s' % G + m.group(2), s)
    s = re.sub(r'(<span\b[^>]*style="[^"]*?)background: linear-gradient\([^"]*?\); -webkit-background-clip: text; background-clip: text; color: transparent("[^>]*>vegham</span>)',
               lambda m: m.group(1) + 'color: %s' % G + m.group(2), s)
    # 3. page title bar -> remove; keep its actions; remember the bell
    bell = ''
    if '<main' in s:
        m0 = s.index('<main')
        hd = re.compile(r'<div class="hd" style="padding-left: 28px[^"]*"').search(s, m0)
        if hd and hd.start() < s.index('</main>'):
            end = block(s, hd.start())
            bar = s[hd.start():end]
            kids = children(bar)
            title, rest = kids[0], kids[1:]
            actions = []
            for k in rest:
                if k == SEP:
                    continue
                if 'for="ov-notif"' in k:
                    bell = k
                    continue
                if 'Answering calls and WhatsApp' in k:
                    continue
                actions.append(k)
            if name == 'Person':
                repl = '<div style="padding: 18px 28px 0; font-size: 13px"><a href="AppPeople.dc.html" style="color: var(--mut)">← People</a></div>'
            elif actions:
                repl = '<div style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; padding: 16px 28px 0">%s</div>' % ''.join(actions)
            else:
                repl = ''
            s = s[:hd.start()] + repl + s[end:]
    # The notifications panel opens beside the sidebar, next to its bell
    s = s.replace('aria-label="Notifications" style="position: absolute; right: 16px; top: 54px; width: 400px',
                  'aria-label="Notifications" style="position: absolute; left: 272px; top: 12px; width: 400px')
    # Only one bell: drop any left in a page's own headers
    if '<main' in s:
        m0, m1 = s.index('<main'), s.index('</main>')
        main = s[m0:m1]
        lab = re.compile(r'(%s)?<label for="ov-notif"[^>]*>' % re.escape(SEP)).search(main)
        if lab:
            end = block(main, main.index('<label', lab.start()), 'label')
            bell = bell or main[main.index('<label', lab.start()):end]
            main = main[:lab.start()] + main[end:]
            s = s[:m0] + main + s[m1:]
    # 2. no collapse button; the bell takes its place in the sidebar header
    s = re.sub(r'<input class="vh" type="checkbox" id="a-col"[^>]*/?>', '', s)
    lab = re.compile(r'<label for="a-col"[^>]*>').search(s)
    if lab:
        end = block(s, lab.start(), 'label')
        s = s[:lab.start()] + bell + s[end:]
    # Conversation pages now have the full sidebar: a slimmer list, and a header that can grow to two lines
    if name in ('Conversations', 'ConversationChat'):
        s = s.replace('width: 330px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column',
                      'width: 296px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column', 1)
        s = s.replace('<div class="hd"><span style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0">',
                      '<div class="hd" style="height: auto; min-height: 64px; padding-top: 10px; padding-bottom: 10px"><span style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0">', 1)
    # 4. sidebar icons
    for title, body in ICONS.items():
        s = re.sub(r'(<a href="[^"]*" class="nv[^"]*"[^>]*title="%s">)<svg\b.*?</svg>' % re.escape(title), lambda m: m.group(1) + svg(body), s, flags=re.S)
    open(path, 'w').write(s)


if __name__ == '__main__':
    folder = sys.argv[1]
    names = [os.path.basename(p)[3:-8] for p in glob.glob(os.path.join(folder, 'App*.dc.html'))]
    keep = ['Agent', 'AgentKnowledge', 'AgentLanguages', 'AgentMemory', 'AgentTest', 'Channels', 'ConversationChat', 'Conversations', 'Followups', 'Home',
            'Insights', 'Menu', 'People', 'Person', 'Settings', 'Setup1', 'Setup2', 'Setup3', 'Setup4', 'Welcome']
    for n in keep:
        fix(os.path.join(folder, 'App%s.dc.html' % n), n)
    print('app shell cleaned:', len(keep), 'boards')
