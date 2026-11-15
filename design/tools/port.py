"""Port the design boards in design/canvas/project into the Next.js app in frontend/src.

Run from the repo root:  python3 design/tools/port.py
It rewrites the generated files (marked "Ported from design board") and src/styles/design.css.
Hand-written files (layouts, NavLink, ShellEffects, lib) are left alone.
"""
import os
import re
import sys
from html.parser import HTMLParser

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from html2tsx import convert, fonts  # noqa: E402

ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
BOARDS = os.path.join(ROOT, 'design', 'canvas', 'project')
SRC = os.path.join(ROOT, 'frontend', 'src')

ROUTES = {
    'LandingV2': '/', 'Product': '/product/', 'HowItWorks': '/how-it-works/', 'Pricing': '/pricing/', 'Company': '/company/',
    'Security': '/security/', 'Help': '/help/', 'HelpArticle': '/help/connect-whatsapp/', 'Legal': '/privacy/', 'Terms': '/terms/',
    'Careers': '/careers/', 'BookDemo': '/book-demo/', 'Contact': '/contact/',
    'Login': '/login/', 'Otp': '/login/code/', 'Signup': '/signup/',
    'AppSetup1': '/setup/', 'AppSetup2': '/setup/voice/', 'AppSetup3': '/setup/test-call/', 'AppSetup4': '/setup/go-live/',
    'AppHome': '/app/', 'AppWelcome': '/app/welcome/', 'AppMenu': '/app/', 'AppSettings': '/app/',
    'AppConversations': '/app/conversations/', 'AppConversationChat': '/app/conversations/chat/',
    'AppPeople': '/app/people/', 'AppPerson': '/app/people/rohan-mehra/', 'AppFollowups': '/app/follow-ups/',
    'AppInsights': '/app/insights/', 'AppAgent': '/app/agent/', 'AppAgentLanguages': '/app/agent/languages/',
    'AppAgentMemory': '/app/agent/memory/', 'AppChannels': '/app/agent/channels/', 'AppAgentKnowledge': '/app/agent/knowledge/', 'AppAgentTest': '/app/agent/test-call/',
}
LINKS = {k + '.dc.html': v for k, v in ROUTES.items()}

# Links the boards leave as "#", by the text that follows the opening tag.
TEXT_LINKS = {
    'Product': '/product/', 'How it works': '/how-it-works/', 'Pricing': '/pricing/', 'Company': '/company/', 'Help centre': '/help/',
    'Log in': '/login/', 'Sign in': '/login/', 'Book a demo': '/book-demo/', 'Start free': '/signup/', 'Start free →': '/signup/',
    'Create one': '/signup/', 'Voice agent': '/product/#voice', 'Long memory': '/product/#memory', 'Languages': '/product/#languages',
    'Follow-ups': '/product/#follow-ups', 'Hand-over': '/product/#hand-over', 'Insights': '/product/#insights',
    'Phone calls': '/product/#channels', 'WhatsApp': '/product/#channels', 'Instagram': '/product/#channels',
    'Messenger': '/product/#channels', 'Telegram': '/product/#channels', 'Link and website': '/product/#channels',
    'Security and privacy': '/security/', 'About': '/company/', 'Careers': '/careers/', 'Contact': '/contact/', 'Contact us': '/contact/',
    'Talk to us': '/contact/', 'See open roles': '/careers/', 'Read our security and privacy promises →': '/security/',
    'Pick a time': '/book-demo/', 'Pick a time →': '/book-demo/', 'Book a setup call': '/book-demo/', 'Privacy policy': '/privacy/', 'Terms of service': '/terms/',
    'privacy policy': '/privacy/', 'terms of service': '/terms/', 'Privacy': '/privacy/', 'Terms': '/terms/',
    '← Help centre': '/help/', 'How to connect your WhatsApp Business number': '/help/connect-whatsapp/',
    'Back to home': '/', 'Go to homepage': '/', 'Back to homepage': '/',
}

# The boards already carry the current wording; add (old, new) pairs here only for one-off fixes.
SWAPS = []

SCROLL = ('flex: 1; overflow: hidden', 'flex: 1; min-height: 0; overflow: hidden', 'flex: 1; min-width: 0; overflow: hidden')
CAST_KEYS = ('timelineScope', 'viewTimelineName', 'viewTimeline', 'animationTimeline', 'animationRange', 'offsetDistance', 'offsetPath', 'fieldSizing')


def read(board):
    return open(os.path.join(BOARDS, board + '.dc.html')).read()


def body_of(html):
    return html[html.index('</helmet>') + 9:html.index('</x-dc>')]


class Kids(HTMLParser):
    """Finds the direct children of the element at a given path of child indexes."""

    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.html = html
        self.lines = [0]
        for line in html.split('\n'):
            self.lines.append(self.lines[-1] + len(line) + 1)
        self.stack, self.nodes = [], []
        self.feed(html)

    def off(self):
        line, col = self.getpos()
        return self.lines[line - 1] + col

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'start': self.off(), 'end': None, 'kids': [], 'open_end': self.off() + len(self.get_starttag_text())}
        (self.stack[-1]['kids'] if self.stack else self.nodes).append(node)
        if tag in ('input', 'br', 'img', 'hr', 'meta', 'link'):
            node['end'] = node['open_end']
        else:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'start': self.off(), 'kids': [], 'open_end': self.off() + len(self.get_starttag_text())}
        node['end'] = node['open_end']
        (self.stack[-1]['kids'] if self.stack else self.nodes).append(node)

    def handle_endtag(self, tag):
        if not any(n['tag'] == tag for n in self.stack):
            return
        while self.stack:
            node = self.stack.pop()
            node['end'] = self.off() + len(tag) + 3
            if node['tag'] == tag:
                break

    def text(self, node):
        return self.html[node['start']:node['end']]

    def open_tag(self, node):
        return self.html[node['start']:node['open_end']]


def prep(html):
    for a, b in SWAPS:
        html = html.replace(a, b)
    for text, route in TEXT_LINKS.items():
        html = re.sub(r'(<a\b[^>]*?)href="#"([^>]*>)(\s*)(%s)(?=\s*<)' % re.escape(text), lambda m: '%shref="@%s"%s%s%s' % (m.group(1), route, m.group(2), m.group(3), m.group(4)), html)
    return html


def button_link(html, text, route, live=True):
    """Turn the board's submit button with this label into a link, so the click-through works without a backend."""
    def sub(m):
        style = re.search(r'style="([^"]*)"', m.group(1))
        st = style.group(1) if style else ''
        st = st.replace('background: #8F9099', 'background: #16182A')
        st += '; display: flex; align-items: center; justify-content: center; text-decoration: none; box-sizing: border-box'
        return '<a href="@%s" style="%s">%s%s</a>' % (route, st, m.group(2), text)
    out, n = re.subn(r'<button\b([^>]*)>((?:\s*<[^>]+>)*\s*)%s\s*</button>' % re.escape(text), sub, html)
    assert n, 'button not found: ' + text
    return out


# ---------- CSS ----------
def css_rules(css):
    rules, depth, cur = [], 0, ''
    for ch in css:
        cur += ch
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                rules.append(cur.strip())
                cur = ''
    return [r for r in rules if r]


def build_css(boards):
    seen, out, keys = set(), [], {}
    for b in boards:
        for block in re.findall(r'<style>(.*?)</style>', read(b), flags=re.S):
            for rule in css_rules(block):
                if rule not in seen:
                    seen.add(rule)
                    out.append(rule)
    css = '\n'.join(out)

    def key(m):
        pat = m.group(1)
        keys.setdefault(pat, 's%d' % (len(keys) + 1))
        return '[data-s~="%s"]' % keys[pat]
    css = re.sub(r'\[style\*="([^"]*)"\]', key, css)
    # Pages marked data-wide (the three-pane conversation views) start with the sidebar collapsed,
    # as on the boards; there the collapse button expands it instead.
    assert '.app:has(#a-col:checked)' in css
    css = css.replace('.app:has(#a-col:checked)', '.app:is(:not(:has(>main[data-wide])):has(#a-col:checked), :has(>main[data-wide]):not(:has(#a-col:checked)))')
    # The boards are fixed 1440 x 960 frames that clip. In the app, page bodies scroll instead.
    for pat in SCROLL:
        keys.setdefault(pat, 'scroll')
    css += '\n.app main [data-s~="scroll"]{overflow-y:auto!important;min-height:0}'
    css = fonts(css)
    return css, [(p, k) for p, k in keys.items()]


# ---------- TSX ----------
HEAD = '// Ported from design board %s by design/tools/port.py. Sample data is inline.\n'


def component(name, board, jsx, conv, extra_imports='', client=False, props='', wrap=True):
    imports = []
    if conv.uses_link:
        imports.append('import Link from "next/link";')
    if conv.uses_css or any(k + ':' in jsx for k in CAST_KEYS):
        imports.append('import type { CSSProperties } from "react";')
    if extra_imports:
        imports.append(extra_imports)
    body = '    <>\n%s\n    </>' % jsx if wrap else jsx
    return '%s%s%s\n\nexport default function %s(%s) {\n  return (\n%s\n  );\n}\n' % (
        '"use client";\n\n' if client else '', HEAD % board, '\n'.join(imports), name, props, body)


def cast(jsx):
    """Newer CSS properties that the React style type does not know yet."""
    def fix(m):
        s = m.group(0)
        if ' as CSSProperties}' in s or not any(re.search(r'[{ ]%s: ' % k, s) for k in CAST_KEYS):
            return s
        return s[:-1] + ' as CSSProperties}'
    return re.sub(r'style=\{\{.*?\}\}(?= |>|/)', fix, jsx)


def write(rel, text):
    path = os.path.join(SRC, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w').write(text)


def to_jsx(html, keys, hooks=None):
    jsx, conv = convert(html, LINKS, keys, hooks)
    return cast(jsx), conv


def route_page(route, imp, name, title, extra=''):
    rel = 'app' + route + 'page.tsx' if route != '/' else 'app/page.tsx'
    write(rel, 'import type { Metadata } from "next";\nimport %s from "%s";\n\nexport const metadata: Metadata = { title: "%s" };\n\nexport default function Page() {\n  return <%s />;\n}\n' % (name, imp, title, name))


# ---------- SITE ----------
LANDING_SECTIONS = [('Hero', None), ('Channels', 'channels'), ('Memory', 'memory'), ('Features', 'product'), ('Anywhere', 'anywhere'),
                    ('HowItWorks', 'how'), ('Control', 'control'), ('Pricing', 'pricing'), ('Faq', 'faq'), ('Cta', 'start')]


def port_landing(keys):
    html = prep(body_of(read('LandingV2')))
    k = Kids(html)
    root = k.nodes[0]
    kids = root['kids']
    sections = [n for n in kids if n['tag'] == 'section']
    footer = [n for n in kids if n['tag'] == 'footer'][0]
    first = sections[0]
    head_html = html[kids[0]['start']:first['start']]
    jsx, conv = to_jsx(head_html, keys)
    write('components/site/SiteHeader.tsx', component('SiteHeader', 'LandingV2 (header and mobile menu)', jsx, conv))
    assert len(sections) == len(LANDING_SECTIONS), len(sections)
    names = []
    for node, (name, anchor) in zip(sections, LANDING_SECTIONS):
        sec = k.text(node)
        if anchor:
            sec = sec.replace('<section', '<section id="%s"' % anchor, 1)
        jsx, conv = to_jsx(sec, keys)
        write('components/site/landing/%s.tsx' % name, component(name, 'LandingV2 (%s)' % name, jsx, conv, wrap=False))
        names.append(name)
    foot = k.text(footer).replace('<footer', '<footer id="footer"', 1)
    jsx, conv = to_jsx(foot, keys)
    write('components/site/SiteFooter.tsx', component('SiteFooter', 'LandingV2 (footer)', jsx, conv, wrap=False))
    wrapper, c2 = to_jsx(k.open_tag(root) + '<x-slot></x-slot></div>', keys)
    inner = '\n'.join('      <%s />' % n for n in ['SiteHeader'] + names + ['SiteFooter'])
    wrapper = re.sub(r'\s*<x-slot>\s*</x-slot>', '\n' + inner, wrapper)
    imports = ['import type { CSSProperties } from "react";', 'import SiteHeader from "@/components/site/SiteHeader";', 'import SiteFooter from "@/components/site/SiteFooter";']
    imports += ['import %s from "@/components/site/landing/%s";' % (n, n) for n in names]
    write('app/page.tsx', HEAD % 'LandingV2' + '\n'.join(imports) + '\n\nexport default function LandingPage() {\n  return (\n' + wrapper + '\n  );\n}\n')
    return k.text(footer)


def dedupe(html, tag, piece):
    """Swap a shared block (header or footer) for a placeholder when it matches the shared one exactly."""
    if piece and piece in html:
        return html.replace(piece, '<x-%s></x-%s>' % (tag, tag), 1), True
    return html, False


def port_single(board, name, rel, route, title, keys, shared=None, edit=None):
    html = prep(body_of(read(board)))
    if edit:
        html = edit(html)
    extra = []
    shared = shared or {}
    html, used = dedupe(html, 'footer', shared.get('footer'))
    if used:
        extra.append('import SiteFooter from "@/components/site/SiteFooter";')
    html, used = dedupe(html, 'header', shared.get('header'))
    if used:
        extra.append('import InnerHeader from "@/components/site/InnerHeader";')
    jsx, conv = to_jsx(html, keys)
    jsx = re.sub(r'<x-footer>\s*</x-footer>', '<SiteFooter />', jsx)
    jsx = re.sub(r'<x-header>\s*</x-header>', '<InnerHeader />', jsx)
    write(rel, component(name, board, jsx, conv, '\n'.join(extra)))
    if route:
        route_page(route, '@/' + rel[:-4], name, title)


def inner_header(keys):
    """The light header and mobile menu shared by every page except the landing page."""
    html = prep(body_of(read('Contact')))
    k = Kids(html)
    kids = k.nodes[0]['kids']
    first = [n for n in kids if n['tag'] in ('section', 'main')][0]
    piece = html[kids[0]['start']:first['start']].rstrip()
    jsx, conv = to_jsx(piece, keys)
    write('components/site/InnerHeader.tsx', component('InnerHeader', 'Contact (header and mobile menu)', jsx, conv))
    return piece


INNER = [('Product', 'ProductPage', '/product/', 'Product'), ('HowItWorks', 'HowItWorksPage', '/how-it-works/', 'How it works'),
         ('Pricing', 'PricingPage', '/pricing/', 'Pricing'), ('Company', 'CompanyPage', '/company/', 'Company'),
         ('Security', 'SecurityPage', '/security/', 'Security and privacy'), ('Help', 'HelpPage', '/help/', 'Help centre'),
         ('HelpArticle', 'HelpArticlePage', '/help/connect-whatsapp/', 'How to connect your WhatsApp Business number'),
         ('Legal', 'PrivacyPage', '/privacy/', 'Privacy policy'), ('Terms', 'TermsPage', '/terms/', 'Terms and conditions'),
         ('Careers', 'CareersPage', '/careers/', 'Careers'), ('BookDemo', 'BookDemoPage', '/book-demo/', 'Book a demo'),
         ('Contact', 'ContactPage', '/contact/', 'Contact')]


# ---------- APP ----------
def nav_hook(name, attrs):
    if name == 'Link' and 'nv' in (attrs.get('class') or '').split():
        return 'NavLink'
    return None


def port_shell(keys):
    html = prep(body_of(read('AppHome')))
    k = Kids(html)
    app = k.nodes[0]['kids'][0]
    assert app['attrs'].get('class') == 'app'
    parts = []
    for n in app['kids']:
        cls = n['attrs'].get('class') or ''
        if n['tag'] == 'main':
            parts.append('<x-slot></x-slot>')
        elif 'ov-pal' in cls or n['tag'] == 'style':
            continue
        elif n['tag'] == 'input' and re.match(r'(bz|st)-', n['attrs'].get('id', '')):
            continue
        else:
            parts.append(k.text(n))
    open_tag = k.open_tag(app).replace('height: 960px', 'height: 100dvh; min-height: 720px')
    jsx, conv = to_jsx(open_tag + ''.join(parts) + '</div>', keys, {'a': nav_hook})
    jsx = re.sub(r'<x-slot>\s*</x-slot>', '{children}\n        <ShellEffects />', jsx)
    imports = 'import type { ReactNode } from "react";\nimport NavLink from "@/components/app/NavLink";\nimport ShellEffects from "@/components/app/ShellEffects";'
    write('components/app/AppShell.tsx', component('AppShell', 'AppHome (sidebar, profile menu, settings)', jsx, conv, imports, props='{ children }: { children: ReactNode }', wrap=False))


APP_PAGES = [
    ('AppHome', 'Home', '/app/', 'Home'), ('AppWelcome', 'Welcome', '/app/welcome/', 'Welcome'),
    ('AppConversations', 'Conversations', '/app/conversations/', 'Conversations'),
    ('AppConversationChat', 'ConversationChat', '/app/conversations/chat/', 'Conversations'),
    ('AppPeople', 'People', '/app/people/', 'People'), ('AppPerson', 'Person', '/app/people/rohan-mehra/', 'Rohan Mehra'),
    ('AppFollowups', 'Followups', '/app/follow-ups/', 'Follow-ups'), ('AppInsights', 'Insights', '/app/insights/', 'Insights'),
    ('AppAgent', 'Agent', '/app/agent/', 'Your agent'), ('AppAgentLanguages', 'AgentLanguages', '/app/agent/languages/', 'Languages'),
    ('AppAgentMemory', 'AgentMemory', '/app/agent/memory/', 'Memory'), ('AppAgentKnowledge', 'AgentKnowledge', '/app/agent/knowledge/', 'Knowledge'),
    ('AppChannels', 'Channels', '/app/agent/channels/', 'Channels'), ('AppAgentTest', 'AgentTest', '/app/agent/test-call/', 'Test call'),
]


def port_app_page(board, name, route, title, keys):
    html = prep(body_of(read(board)))
    k = Kids(html)
    app = k.nodes[0]['kids'][0]
    main = [n for n in app['kids'] if n['tag'] == 'main'][0]
    main_html = k.text(main)
    if re.search(r'id="a-col"[^>]*\bchecked', k.text(app)):
        main_html = main_html.replace('<main', '<main data-wide="true"', 1)
    jsx, conv = to_jsx(main_html, keys)
    rel = 'components/app/pages/%s.tsx' % name
    write(rel, component(name, board, jsx, conv, wrap=False))
    route_page(route, '@/' + rel[:-4], name, title + ' · Vegham')


SETUP = [('AppSetup1', 'SetupBusiness', '/setup/'), ('AppSetup2', 'SetupVoice', '/setup/voice/'),
         ('AppSetup3', 'SetupTestCall', '/setup/test-call/'), ('AppSetup4', 'SetupGoLive', '/setup/go-live/')]


def port_setup(board, name, route, keys):
    html = prep(body_of(read(board)))
    k = Kids(html)
    app = k.nodes[0]['kids'][0]
    found = []

    def walk(nodes):
        for n in nodes:
            if 'z-index: 50' in (n['attrs'].get('style') or ''):
                found.append(n)
            else:
                walk(n['kids'])
    walk(app['kids'])
    overlay = found[-1]
    open_tag = k.open_tag(app).replace('height: 960px', 'min-height: 100dvh')
    body = k.text(overlay).replace('position: absolute; inset: 0; z-index: 50;', 'position: relative; flex: 1; min-height: 100dvh;', 1)
    jsx, conv = to_jsx(open_tag + body + '</div>', keys)
    rel = 'components/setup/%s.tsx' % name
    write(rel, component(name, board, jsx, conv, wrap=False))
    route_page(route, '@/' + rel[:-4], name, 'Set up your agent · Vegham')


def main():
    boards = ['LandingV2', 'Login', 'Otp', 'Signup', 'NotFound'] + [b for b, *_ in INNER] + [b for b, *_ in APP_PAGES] + [b for b, *_ in SETUP]
    css, keys = build_css(boards)
    write('styles/design.css', '/* Generated from the design boards by design/tools/port.py. Edit overrides in app/globals.css. */\n' + css + '\n')
    shared = {'footer': port_landing(keys), 'header': inner_header(keys)}
    port_single('Login', 'LoginPage', 'components/site/LoginPage.tsx', '/login/', 'Log in · Vegham', keys, edit=lambda h: button_link(h, 'Continue', '/login/code/'))
    port_single('Otp', 'CodePage', 'components/site/CodePage.tsx', '/login/code/', 'Enter your code · Vegham', keys, edit=lambda h: button_link(h, 'Verify and continue', '/app/'))
    port_single('Signup', 'SignupPage', 'components/site/SignupPage.tsx', '/signup/', 'Create your account · Vegham', keys, edit=lambda h: button_link(h, 'Create account', '/setup/'))
    for b, n, r, t in INNER:
        port_single(b, n, 'components/site/%s.tsx' % n, r, t + ' · Vegham', keys, shared)
    port_single('NotFound', 'NotFoundPage', 'components/site/NotFoundPage.tsx', None, '', keys, shared)
    port_shell(keys)
    for b, n, r, t in APP_PAGES:
        port_app_page(b, n, r, t, keys)
    for b, n, r in SETUP:
        port_setup(b, n, r, keys)
    print('ported', len(boards), 'boards;', len(keys), 'style keys')


if __name__ == '__main__':
    main()
