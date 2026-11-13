import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
P = os.path.join(D, '..', 'vegam-ui', 'project')
rd = lambda f: open(os.path.join(P, f)).read()
def wr(f, s): open(os.path.join(P, f), 'w').write(s)
AURTXT = "color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text"

def fix_footer(s):
    if '<footer' not in s: return s
    a = s.index('<footer'); b = s.index('</footer>') + 9
    f = s[a:b]
    f = re.sub(r'<li><a[^>]*>(Guides|What’s new|System status|Partners|Press|Data protection \(DPDP\)|Cookie policy|Acceptable use)</a></li>', '', f)
    f = re.sub(r'<a href="#" class="vg-status".*?All systems normal</a>', '', f, flags=re.S)
    help_li = re.search(r'<li><a([^>]*)>Help centre</a></li>', f)
    if help_li and '>Security and privacy</a>' not in f:
        f = f.replace(help_li.group(0), help_li.group(0) + f'<li><a{help_li.group(1)}>Security and privacy</a></li>', 1)
    return s[:a] + f + s[b:]

MENU_CSS = '''
.vg-mbtn{display:none}
.vg-mpanel{display:none}
:root:has(#vg-menu:checked) .vg-mpanel{display:flex}
:root:has(#vg-menu:checked){overflow:hidden}
@media (max-width: 760px){.vg-mbtn{display:inline-flex!important}}
'''
def menu_panel():
    links = ''.join(f'<a href="#" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,.1); color: #FFFFFF; text-decoration: none; font-family: \'Inter Tight\', sans-serif; font-size: 28px; letter-spacing: -0.03em">{t}<span aria-hidden="true" style="font-size: 18px; color: #8C90A8">→</span></a>' for t in ['Product', 'How it works', 'Pricing', 'Company', 'Help centre'])
    return f'''<input type="checkbox" id="vg-menu" aria-label="Open menu" style="position: absolute; opacity: 0; pointer-events: none" />
  <div class="vg-mpanel" role="dialog" aria-label="Menu" style="position: fixed; inset: 0; z-index: 60; flex-direction: column; padding: 18px 20px 28px; background: #0B0D18; color: #FFFFFF; overflow-y: auto">
    <div style="display: flex; justify-content: space-between; align-items: center"><span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 24px; letter-spacing: -0.045em; {AURTXT}">vegham</span><label for="vg-menu" aria-label="Close menu" style="width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,.18); display: inline-flex; align-items: center; justify-content: center; cursor: pointer"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></label></div>
    <nav aria-label="Mobile" style="margin-top: 28px">{links}</nav>
    <div style="margin-top: auto; padding-top: 28px; display: flex; flex-direction: column; gap: 10px"><a href="#" style="display: flex; align-items: center; justify-content: center; height: 52px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500">Start your free pilot</a><a href="#" style="display: flex; align-items: center; justify-content: center; height: 52px; border-radius: 999px; border: 1px solid rgba(255,255,255,.22); color: #FFFFFF; text-decoration: none; font-weight: 500">Log in</a></div>
  </div>'''
def add_menu(s):
    if 'id="vg-menu"' in s or '<header' not in s: return s
    dark = 'margin-bottom: -78px' in s[s.index('<header'):s.index('</header>')]
    col = '#FFFFFF' if dark else '#16182A'
    bd = 'rgba(255,255,255,.22)' if dark else '#E2E2E6'
    btn = f'<label for="vg-menu" class="vg-mbtn" aria-label="Open menu" style="width: 40px; height: 40px; border-radius: 12px; border: 1px solid {bd}; align-items: center; justify-content: center; cursor: pointer; flex: none"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="{col}" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></label>'
    he = s.index('</header>')
    # put button as the last item inside the header's inner row
    inner_end = s.rindex('</div>', 0, he)
    s = s[:inner_end] + btn + s[inner_end:]
    he = s.index('</header>') + len('</header>')
    s = s[:he] + '\n  ' + menu_panel() + s[he:]
    if '.vg-mpanel{display:none}' not in s.split('</style>')[0]:
        s = s.replace('</style>', MENU_CSS + '</style>', 1)
    return s

PAGES = ['LandingV2', 'Product', 'HowItWorks', 'Pricing', 'Company', 'Careers', 'BookDemo', 'Security', 'Help', 'Legal', 'Terms', 'NotFound']
if __name__ == '__main__':
    for f in PAGES:
        s = rd(f + '.dc.html'); s = add_menu(fix_footer(s)); wr(f + '.dc.html', s); print(f)
