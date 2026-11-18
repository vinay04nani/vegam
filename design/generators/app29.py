"""One layout for every app page: no top bars anywhere.
- The sidebar holds the global things: wordmark and bell (app28), then a Search field that opens the search palette
- The search palette is rewritten for this product (people, conversations, ask Vegham, go to)
- Conversation pages lose their list header bar; the list gets its own small search field above the filters
- Page actions keep one consistent spot at the top right of the content (from app28)

  python3 app29.py <folder with the App*.dc.html boards>
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from app28 import block, svg, ICONS

SEARCH = '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>'
SPARK = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>'

SIDE_SEARCH = ('<label for="ov-pal" class="nv hide-col" style="border: 1px solid var(--line); background: var(--bg); height: 38px; margin: 2px 0 2px; cursor: pointer">'
               + svg(SEARCH) + '<span class="lbl">Search</span><span class="lbl" style="margin-left: auto; font-size: 11.5px; color: var(--mut2); border: 1px solid var(--line); border-radius: 6px; padding: 0 6px; line-height: 18px">⌘K</span></label>')

LIST_SEARCH = ('<div style="padding: 14px 16px 0"><label for="ov-pal" class="fld" style="height: 36px; gap: 8px; color: var(--mut2); cursor: pointer">'
               + svg(SEARCH) + 'Search conversations</label></div>')


def item(icon_html, text, sub='', href=None, hint=''):
    inner = '<span style="color: var(--mut); display: inline-flex">%s</span>%s%s<span class="kb" style="margin-left: auto; font-size: 11.5px; color: var(--mut2)">%s</span>' % (
        icon_html, text, ' <span style="color: var(--mut); font-size: 12.5px">%s</span>' % sub if sub else '', hint)
    if href:
        return '<a href="%s" class="mi" style="height: 40px">%s</a>' % (href, inner)
    return '<div class="mi" style="height: 40px">%s</div>' % inner


def avatar(letter):
    return '<span style="width: 22px; height: 22px; border-radius: 50%%; background: var(--soft); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: var(--text)">%s</span>' % letter


def group(title):
    return '<span style="display: block; padding: 10px 12px 4px; font-size: 11.5px; color: var(--mut2)">%s</span>' % title


PALETTE = ('<div class="ov ov-pal" style="position: absolute; inset: 0; z-index: 40; justify-content: center; align-items: flex-start; padding-top: 110px">'
           '<label for="ov-none" aria-label="Close search" style="position: absolute; inset: 0; background: var(--scrim)"></label>'
           '<div class="popin" role="dialog" aria-label="Search" style="position: relative; width: 640px; border-radius: 18px; background: var(--pop); box-shadow: var(--shadow); overflow: hidden">'
           '<div style="display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--line)"><span style="color: var(--mut); display: inline-flex">' + svg(SEARCH) + '</span>'
           '<span style="flex: 1; font-size: 16px">rohan<span style="display: inline-block; width: 1.5px; height: 18px; background: var(--text); vertical-align: middle; margin-left: 1px"></span></span>'
           '<label for="ov-none" class="kb" style="padding: 2px 8px; border: 1px solid var(--line); border-radius: 6px; font-size: 12px; color: var(--mut); cursor: pointer">esc</label></div>'
           '<div style="padding: 6px 8px 10px">'
           + group('Ask Vegham') + item(svg(SPARK), 'When did Rohan last call, and what did he want?', hint='↵').replace('class="mi" style="height: 40px"', 'class="mi" style="height: 40px; background: var(--soft2)"')
           + group('People') + item(avatar('R'), 'Rohan Mehta', '· +91 98•• ••21 · 4 conversations', 'AppPerson.dc.html') + item(avatar('R'), 'Rohan Iyer', '· Instagram · new this week', 'AppPeople.dc.html')
           + group('Conversations') + item(svg(ICONS['Conversations']), 'Rohan Mehta · call, today 6:12 PM', '· booked Saturday 10 AM for 5', 'AppConversations.dc.html')
           + group('Go to') + item(svg(ICONS['Follow-ups']), 'Follow-ups', href='AppFollowups.dc.html') + item(svg(ICONS['Memory']), 'Memory', href='AppAgentMemory.dc.html') + item(svg(ICONS['Insights']), 'Insights', href='AppInsights.dc.html')
           + '</div><div style="display: flex; gap: 16px; padding: 10px 18px; border-top: 1px solid var(--line); font-size: 12px; color: var(--mut2)"><span>↑↓ to move</span><span>↵ to open</span><span>Tab to ask Vegham</span></div></div></div>')


def fix(path, name):
    s = open(path).read()
    # search palette
    i = s.find('<div class="ov ov-pal"')
    if i >= 0:
        s = s[:i] + PALETTE + s[block(s, i):]
    # sidebar search field, right under the wordmark and bell
    if '<aside' in s and 'for="ov-pal" class="nv' not in s:
        a = s.index('<aside')
        head = s.index('<div', s.index('>', a))
        end = block(s, head)
        s = s[:end] + SIDE_SEARCH + s[end:]
    # conversation list: no header bar, a search field above the filters
    if name in ('Conversations', 'ConversationChat'):
        h = s.find('<div class="hd" style="padding: 0 12px 0 20px"><h1>Conversations</h1>')
        if h >= 0:
            s = s[:h] + LIST_SEARCH + s[block(s, h):]
            s = s.replace('<div style="display: flex; gap: 6px; padding: 12px 16px 6px"><span class="chip2 on">All</span>',
                          '<div style="display: flex; gap: 6px; padding: 10px 16px 6px"><span class="chip2 on">All</span>', 1)
    open(path, 'w').write(s)


if __name__ == '__main__':
    folder = sys.argv[1]
    names = ['Agent', 'AgentKnowledge', 'AgentLanguages', 'AgentMemory', 'AgentTest', 'Channels', 'ConversationChat', 'Conversations', 'Followups', 'Home',
             'Insights', 'Menu', 'People', 'Person', 'Settings', 'Setup1', 'Setup2', 'Setup3', 'Setup4', 'Welcome']
    for n in names:
        fix(os.path.join(folder, 'App%s.dc.html' % n), n)
    print('one layout applied to', len(names), 'boards')
