"""App v2: shell (sidebar, account menu, settings modal, search, notifications) + Home.
Pure-CSS prototype: one overlay radio group, theme radios, collapse checkbox, settings tab radios."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps
from kit3 import AURTXT, P

HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.03em"
def I(name, s=18, w=1.7):
    return f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round">{IC[name]}</svg>'
IC = {
    'home': '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"></path>',
    'inbox': '<path d="M4 4h16v12h-5l-1 3h-4l-1-3H4z"></path>',
    'cal': '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>',
    'phone': '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>',
    'users': '<circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"></path>',
    'lead': '<path d="M3 5h18l-7 8v6l-4-2v-4z"></path>',
    'spark': '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"></path>',
    'wallet': '<rect x="3" y="6" width="18" height="14" rx="2"></rect><path d="M3 10h18M16 15h2"></path>',
    'chart': '<path d="M4 20V5M4 20h16M8 16l4-4 3 3 5-6"></path>',
    'mega': '<path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8"></path>',
    'star': '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"></path>',
    'headset': '<path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><rect x="3" y="14" width="4" height="6" rx="1.5"></rect><rect x="17" y="14" width="4" height="6" rx="1.5"></rect><path d="M20 20a3 3 0 0 1-3 2h-3"></path>',
    'chat': '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>',
    'plug': '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"></path>',
    'gear': '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path>',
    'search': '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"></path>',
    'plus': '<path d="M12 5v14M5 12h14"></path>',
    'chev': '<path d="M6 9l6 6 6-6"></path>',
    'chevr': '<path d="M9 6l6 6-6 6"></path>',
    'updown': '<path d="M8 9l4-4 4 4M8 15l4 4 4-4"></path>',
    'send': '<path d="M12 19V5M5 12l7-7 7 7"></path>',
    'panel': '<rect x="3" y="4" width="18" height="16" rx="3"></rect><path d="M9 4v16"></path>',
    'help': '<circle cx="12" cy="12" r="9"></circle><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"></path>',
    'out': '<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l-5-5 5-5M5 12h11"></path>',
    'sun': '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>',
    'moon': '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path>',
    'monitor': '<rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4"></path>',
    'key': '<circle cx="8" cy="15" r="4"></circle><path d="M11 12l9-9M17 6l3 3"></path>',
    'globe': '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>',
    'user': '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    'shield': '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>',
    'receipt': '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"></path><path d="M9 8h6M9 12h6"></path>',
    'building': '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3"></path>',
    'kbd': '<rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"></path>',
    'gift': '<path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-2-3-6-3-6 0M12 7c2-3 6-3 6 0"></path>',
    'x': '<path d="M6 6l12 12M18 6L6 18"></path>',
    'check': '<path d="M5 12l5 5L20 7"></path>',
    'clip': '<path d="M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"></path>',
    'mic': '<rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>',
    'arrowur': '<path d="M7 17L17 7M8 7h9v9"></path>',
    'dot3': '<circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle>',
    'trend': '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"></path>',
    'pin': '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle>',
    'lock': '<rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
    'download': '<path d="M12 4v12M6 11l6 6 6-6M4 20h16"></path>',
}
WA = lambda s=14: comps.logo('whatsapp', s)
IG = lambda s=14: comps.logo('instagram', s)

THEMES = {
    'light': dict(bg='#FFFFFF', side='#F9F9FA', soft='#EFEFF2', soft2='#F4F4F6', line='#ECECF0', text='#16171D', mut='#6E6F78', mut2='#9A9BA3', ink='#16182A', inkfg='#FFFFFF', card='#FFFFFF', pop='#FFFFFF', shadow='0 24px 60px -24px rgba(22,24,42,.28), 0 0 0 1px rgba(22,24,42,.06)', scrim='rgba(18,20,31,.28)', good='#1F9D6B', goodbg='#E8F6EF', warn='#B4500A', warnbg='#FFF1E5', acc='#3B6CF6'),
    'dark': dict(bg='#0E0F12', side='#141519', soft='#22232A', soft2='#1A1B20', line='#26272E', text='#ECECF1', mut='#9B9CA6', mut2='#6E6F78', ink='#ECECF1', inkfg='#0E0F12', card='#16171C', pop='#1B1C21', shadow='0 24px 60px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.07)', scrim='rgba(0,0,0,.5)', good='#3DD68C', goodbg='rgba(61,214,140,.12)', warn='#F5A35C', warnbg='rgba(245,163,92,.12)', acc='#7C9CFF'),
}
def vars_(t):
    return ';'.join(f'--{k}:{v}' for k, v in THEMES[t].items())

NAVMAP = {'Home': 'AppV2Home.dc.html', 'Inbox': 'AppV2InboxAI.dc.html', 'Calendar': 'AppV2Calendar.dc.html', 'Calls': 'AppV2Calls.dc.html', 'Contacts': 'AppV2Contacts.dc.html', 'Leads': 'AppV2Leads.dc.html', 'Reviews': 'AppV2Reviews.dc.html', 'Payments': 'AppV2Payments.dc.html', 'Campaigns': 'AppV2Campaigns.dc.html', 'Reports': 'AppV2Reports.dc.html', 'AI agents': 'AppV2Agents.dc.html', 'Channels and apps': 'AppV2Channels.dc.html'}
OVS = ['none', 'menu', 'set', 'pal', 'notif', 'biz']
TABS = ['general', 'profile', 'notifs', 'security', 'billing', 'data']
TAB_L = {'general': ('gear', 'General'), 'profile': ('user', 'Profile'), 'notifs': ('bell', 'Notifications'), 'security': ('lock', 'Security'), 'billing': ('receipt', 'Plan and billing'), 'data': ('shield', 'Data and privacy')}

def build(name, title, ov='none', tab='general', theme='light', collapsed=False, active='Home', main=None, ptitle=None, pactions='', extra_css='', overlay='', notop=False, bz='profile', h=960, navfn=None, menuhtml=None, settingshtml=None, nobiz=False):
    import biz
    css = f'''
.app{{{vars_('light')};background:var(--bg);color:var(--text);transition:background .25s,color .25s}}
.app:has(#th-dark:checked){{{vars_('dark')}}}
.app *{{box-sizing:border-box}}
.app .vh{{position:absolute;opacity:0;pointer-events:none;width:1px;height:1px}}
.app label{{cursor:pointer}}
.app button{{font:inherit;color:inherit}}
.side{{width:264px;transition:width .28s cubic-bezier(.2,.7,.2,1);background:var(--side);border-right:1px solid var(--line)}}
.app:has(#a-col:checked) .side{{width:68px}}
.app:has(#a-col:checked) .side .lbl{{opacity:0;width:0;overflow:hidden;pointer-events:none}}
.app:has(#a-col:checked) .side .hide-col{{display:none}}
.lbl{{transition:opacity .18s}}
.nv{{display:flex;align-items:center;gap:11px;height:34px;padding:0 10px;border-radius:10px;color:var(--mut);font-size:14px;text-decoration:none;white-space:nowrap}}
.nv:hover{{background:var(--soft2);color:var(--text)}}
.nv.on{{background:var(--soft);color:var(--text);font-weight:500}}
.nv svg{{flex:none}}
.ibtn{{width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;color:var(--mut);flex:none}}
.ibtn:hover{{background:var(--soft2);color:var(--text)}}
.ov{{display:none}}
{''.join(f'.app:has(#ov-{o}:checked) .ov-{o}{{display:flex}}' for o in OVS if o != 'none')}
.mi{{display:flex;align-items:center;gap:11px;height:38px;padding:0 10px;border-radius:9px;font-size:14px;color:var(--text);text-decoration:none}}
.mi:hover{{background:var(--soft2)}}
.mi svg{{color:var(--mut)}}
.kb{{margin-left:auto;font-size:12px;color:var(--mut2)}}
.seg{{display:inline-flex;padding:3px;border-radius:9px;background:var(--soft2);gap:2px}}
.seg label{{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:7px;font-size:12.5px;color:var(--mut)}}
.app:has(#th-light:checked) label.t-light,.app:has(#th-dark:checked) label.t-dark{{background:var(--pop);color:var(--text);box-shadow:0 1px 2px rgba(0,0,0,.12)}}
.app:has(#th-light:checked) .tcard.t-light,.app:has(#th-dark:checked) .tcard.t-dark{{outline:2px solid var(--acc);outline-offset:2px}}
.stab{{display:flex;align-items:center;gap:10px;height:36px;padding:0 10px;border-radius:9px;font-size:14px;color:var(--mut)}}
.stab:hover{{background:var(--soft2);color:var(--text)}}
.sp{{display:none}}
{''.join(f'.app:has(#st-{t}:checked) label[for=st-{t}]{{background:var(--soft);color:var(--text);font-weight:500}}.app:has(#st-{t}:checked) .sp-{t}{{display:block}}' for t in TABS)}
.row{{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--line)}}
.row:last-child{{border-bottom:0}}
.rt{{font-size:14px;color:var(--text)}}
.rd{{font-size:12.5px;color:var(--mut);margin-top:2px}}
.sel{{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px;border-radius:9px;border:1px solid var(--line);font-size:13.5px;color:var(--text);white-space:nowrap}}
.tg{{width:38px;height:22px;border-radius:999px;background:var(--soft);position:relative;flex:none}}
.tg::after{{content:"";position:absolute;left:3px;top:3px;width:16px;height:16px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 2px rgba(0,0,0,.25)}}
.tg.on{{background:var(--good)}}.tg.on::after{{left:19px}}
.pbtn{{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:999px;background:var(--ink);color:var(--inkfg);font-size:13.5px;font-weight:500;white-space:nowrap}}
.obtn{{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:999px;border:1px solid var(--line);color:var(--text);font-size:13.5px;white-space:nowrap}}
.card{{background:var(--card);border:1px solid var(--line);border-radius:18px}}
.chip{{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:999px;border:1px solid var(--line);font-size:13.5px;color:var(--text);background:var(--bg)}}
.chip:hover{{background:var(--soft2)}}
@keyframes popin{{from{{opacity:0;transform:translateY(6px) scale(.98)}}to{{opacity:1;transform:none}}}}
.popin{{animation:popin .18s cubic-bezier(.2,.7,.2,1) both}}
@keyframes pulse{{0%{{box-shadow:0 0 0 0 rgba(31,157,107,.45)}}100%{{box-shadow:0 0 0 8px rgba(31,157,107,0)}}}}
.live{{animation:pulse 1.8s infinite}}
@media (prefers-reduced-motion: reduce){{.popin,.live{{animation:none}}.side,.lbl{{transition:none}}}}
'''
    css += biz.CSS + '.app:has(#ov-biz:checked) .nv-biz{background:var(--soft);color:var(--text);font-weight:500}'
    head = kit3.HEAD.replace('</style>', css + extra_css + '</style>', 1)
    head = head.replace(re.search(r'<title>[^<]*</title>', head).group(0), f'<title>{title}</title>')

    inputs = ''.join(f'<input class="vh" type="radio" name="ov" id="ov-{o}"{" checked" if o == ov else ""} aria-label="{o}" />' for o in OVS)
    inputs += ''.join(f'<input class="vh" type="radio" name="th" id="th-{t}"{" checked" if t == theme else ""} aria-label="{t} theme" />' for t in ('light', 'dark'))
    inputs += f'<input class="vh" type="checkbox" id="a-col"{" checked" if collapsed else ""} aria-label="Collapse sidebar" />'
    inputs += ''.join(f'<input class="vh" type="radio" name="st" id="st-{t}"{" checked" if t == tab else ""} aria-label="{t}" />' for t in TABS)
    inputs += biz.inputs(bz)

    # ---------------- sidebar
    def nv(icon, label, on=False, badge='', tag=''):
        b = f'<span class="lbl" style="margin-left: auto; min-width: 20px; height: 20px; padding: 0 6px; border-radius: 999px; background: var(--ink); color: var(--inkfg); font-size: 11.5px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center">{badge}</span>' if badge else ''
        t = f'<span class="lbl" style="margin-left: auto; font-size: 11px; color: var(--mut2)">{tag}</span>' if tag else ''
        on = on or label == active
        href = NAVMAP.get(label, '#')
        return f'<a href="{href}" class="nv{" on" if on else ""}" {"aria-current=\"page\"" if on else ""} title="{label}">{I(icon)}<span class="lbl">{label}</span>{b}{t}</a>'
    grp = lambda t: f'<span class="lbl hide-col" style="display: block; padding: 12px 10px 4px; font-size: 11.5px; font-weight: 500; color: var(--mut2)">{t}</span>'
    recents = [(WA(13), 'Riya · booked 6:30 PM', 'now'), (IG(13), 'Arjun · group price?', '9m'), (I('phone', 13), '+91 98•• ••21 · call', '25m'), (WA(13), 'Meera · reschedule', '1h')]
    rec = ''.join(f'<a href="#" class="nv" style="height: 32px; font-size: 13px">{ic}<span class="lbl" style="overflow: hidden; text-overflow: ellipsis">{t}</span><span class="lbl" style="margin-left: auto; font-size: 11px; color: var(--mut2)">{tm}</span></a>' for ic, t, tm in recents)
    DEFNAV = f'''        {nv('home', 'Home')}{nv('inbox', 'Inbox', badge='3')}{nv('cal', 'Calendar')}{nv('phone', 'Calls')}
        {grp('Customers')}{nv('users', 'Contacts')}{nv('lead', 'Leads')}{nv('star', 'Reviews')}
        {grp('Grow')}{nv('wallet', 'Payments')}{nv('mega', 'Campaigns')}{nv('chart', 'Reports')}
        {grp('Set up')}{nv('headset', 'AI agents')}{nv('plug', 'Channels and apps')}<label for="ov-biz" class="nv nv-biz" title="Business settings">{I('building')}<span class="lbl">Business settings</span></label>
'''
    side = f'''<aside class="side" aria-label="App" style="flex: none; height: 100%; display: flex; flex-direction: column; padding: 12px 10px; gap: 6px; overflow: hidden">
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 4px 4px 6px 8px; min-height: 40px">
        <span class="lbl" style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 22px; letter-spacing: -0.045em; {AURTXT}">vegham</span>
        <label for="a-col" class="ibtn" title="Collapse sidebar" aria-label="Collapse sidebar">{I('panel')}</label></div>
      <button type="button" class="nv hide-col" style="border: 1px solid var(--line); background: var(--bg); height: 44px; margin-bottom: 4px; width: 100%; text-align: left; cursor: pointer">
        <span style="width: 24px; height: 24px; border-radius: 7px; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex: none">N</span>
        <span class="lbl" style="display: flex; flex-direction: column; line-height: 1.2; color: var(--text)"><b style="font-weight: 500; font-size: 13.5px">Nila &amp; Co</b><span style="font-size: 11.5px; color: var(--mut)">Indiranagar · 2 locations</span></span>
        <span class="lbl" style="margin-left: auto; color: var(--mut2)">{I('updown', 15)}</span></button>
      <nav aria-label="Main" style="display: flex; flex-direction: column; gap: 1px; margin-top: 6px">
        {navfn(nv, grp) if navfn else DEFNAV}
      </nav>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px">
        <div class="hide-col lbl" style="padding: 12px; border-radius: 14px; border: 1px solid var(--line); background: var(--bg); font-size: 12.5px">
          <div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 500; font-size: 13px">Growth · free pilot</b><span style="color: var(--mut)">23 days left</span></div>
          <div style="margin-top: 8px; height: 4px; border-radius: 2px; background: var(--soft)"><span style="display: block; width: 23%; height: 100%; border-radius: 2px; background: linear-gradient(90deg, #10B981, #3B6CF6, #7C3AED)"></span></div>
          <a href="#" style="display: inline-block; margin-top: 8px; color: var(--text); font-weight: 500">Choose a plan →</a></div>
        <label for="ov-menu" class="nv" style="height: 48px; padding: 0 8px; color: var(--text)" title="Account">
          <span style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #10B981, #3B6CF6 55%, #7C3AED); color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; flex: none">V</span>
          <span class="lbl" style="display: flex; flex-direction: column; line-height: 1.25"><b style="font-weight: 500; font-size: 13.5px">Vinay</b><span style="font-size: 11.5px; color: var(--mut)">Owner · Nila &amp; Co</span></span>
          <span class="lbl" style="margin-left: auto; color: var(--mut2)">{I('updown', 15)}</span></label>
      </div></aside>'''

    # ---------------- top bar (minimal)
    tl = f'<h1 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: -0.01em">{ptitle}</h1>' if ptitle else ''
    top = f'''<div style="height: 60px; flex: none; display: flex; align-items: center; gap: 8px; padding: 0 20px 0 28px; {"border-bottom: 1px solid var(--line)" if ptitle else ""}">
        {tl}<span style="flex: 1"></span>{pactions}{'<span style="width: 1px; height: 22px; background: var(--line); margin: 0 6px"></span>' if pactions else ''}
        <label for="ov-pal" class="ibtn" aria-label="Search">{I('search', 17)}</label>
        <label for="ov-notif" class="ibtn" aria-label="Notifications" style="position: relative">{I('bell', 17)}<span style="position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: #E5484D; box-shadow: 0 0 0 2px var(--bg)"></span></label>
        <a href="#" class="ibtn" aria-label="Help">{I('help', 17)}</a></div>'''

    # ---------------- home
    sugg = ''.join(f'<span class="chip">{I(ic, 15)}{t}</span>' for ic, t in [('users', 'Who needs me today?'), ('cal', 'Bookings this week'), ('wallet', 'Send a payment link'), ('mega', 'Draft a festive offer')])
    composer = f'''<div class="card" style="padding: 14px 14px 10px 18px; border-radius: 24px; box-shadow: 0 10px 30px -18px rgba(22,24,42,.25)">
        <div style="min-height: 52px; font-size: 16px; color: var(--mut2); padding-top: 6px">Ask anything about your business, or tell Vegham what to do…</div>
        <div style="display: flex; align-items: center; gap: 6px">
          <span class="ibtn" aria-hidden="true">{I('clip', 17)}</span>
          <span style="flex: 1"></span>
          <span class="ibtn" aria-hidden="true">{I('mic', 17)}</span>
          <span style="width: 34px; height: 34px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center">{I('send', 17, 2)}</span></div></div>'''
    def stat(lbl, val, delta, good=True):
        return f'<div class="card" style="flex: 1; padding: 16px 18px"><span style="font-size: 12.5px; color: var(--mut)">{lbl}</span><div style="display: flex; align-items: baseline; gap: 8px; margin-top: 4px"><span style="{HF}; font-size: 30px; letter-spacing: -0.03em">{val}</span><span style="font-size: 12px; color: {"var(--good)" if good else "var(--mut)"}">{delta}</span></div></div>'
    stats = f'<div style="display: flex; gap: 12px">{stat("Conversations", "23", "↑ 18% vs last Thu")}{stat("Bookings", "9", "↑ 3")}{stat("Calls answered", "7", "0 missed")}{stat("Collected", "₹14,200", "via payment links")}</div>'
    def need(icon, t, s, act, prim=False):
        return f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line)"><span style="width: 32px; height: 32px; border-radius: 10px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none">{icon}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 14px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{s}</span></span><span class="{"pbtn" if prim else "obtn"}" style="height: 30px; font-size: 12.5px">{act}</span></div>'
    needs = f'''<div class="card" style="padding: 18px 20px 8px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 15px">Needs you</b><span style="font-size: 12.5px; color: var(--mut)">3 of 3</span></div>
        <div style="margin-top: 10px">{need(IG(16), 'Arjun asked for a group price', 'Instagram · 9 min ago · AI paused', 'Reply', True)}{need(I('phone', 16), 'Call back P. Iyer', 'Asked for a person · 25 min ago', 'Call')}{need(WA(16), 'Approve refund for Meera', '₹500 · cancelled 2 hours before', 'Review')}</div></div>'''
    sched = [('10:00', 'A. Khan', 'First visit', 'Done', 'var(--mut)'), ('11:30', 'S. Das', 'Standard', 'Checked in', 'var(--good)'), ('13:00', 'Riya', 'Standard · booked by Vegham', 'Confirmed', 'var(--good)'), ('16:30', 'M. Rao', 'Follow-up', 'Unconfirmed', 'var(--warn)'), ('18:30', 'Group (6)', 'Group session', 'Confirmed', 'var(--good)')]
    srows = ''.join(f'<div style="display: flex; gap: 12px; padding: 10px 0; border-top: 1px solid var(--line); font-size: 13.5px"><span style="width: 44px; color: {"var(--text); font-weight: 600" if i == 1 else "var(--mut)"}; font-variant-numeric: tabular-nums">{t}</span><span style="flex: 1"><b style="font-weight: 500">{n}</b><span style="display: block; font-size: 12px; color: var(--mut)">{s}</span></span><span style="font-size: 12.5px; color: {c}">{st}</span></div>' for i, (t, n, s, st, c) in enumerate(sched))
    today = f'<div class="card" style="padding: 18px 20px 8px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 15px">Today</b><a href="#" style="font-size: 12.5px; color: var(--mut); text-decoration: none">Open calendar →</a></div><div style="margin-top: 10px">{srows}</div></div>'
    feed = [(WA(14), 'Riya booked Standard at 6:30 PM tomorrow', 'just now'), (I('phone', 14), 'Answered a call about Saturday hours', '2 min'), (IG(14), 'Replied to Arjun, then handed over to you', '9 min'), (I('wallet', 14), 'Payment link paid · ₹1,200', '31 min')]
    frows = ''.join(f'<div style="display: flex; gap: 10px; align-items: center; padding: 9px 0; font-size: 13px; border-top: 1px solid var(--line)"><span style="width: 26px; height: 26px; border-radius: 8px; background: var(--soft2); display: inline-flex; align-items: center; justify-content: center; flex: none; color: var(--mut)">{ic}</span><span style="flex: 1">{t}</span><span style="font-size: 11.5px; color: var(--mut2)">{tm}</span></div>' for ic, t, tm in feed)
    live = f'<div class="card" style="padding: 18px 20px 8px"><div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 15px">What Vegham did</b><a href="#" style="font-size: 12.5px; color: var(--mut); text-decoration: none">Activity →</a></div><div style="margin-top: 10px">{frows}</div></div>'
    home = f'''<main style="flex: 1; min-width: 0; height: 100%; display: flex; flex-direction: column; background: var(--bg)">{top}
      <div style="flex: 1; overflow-y: auto; padding: 20px 40px 40px"><div style="max-width: 920px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px">
        <div style="text-align: center; padding: 10px 0 6px"><span style="font-size: 13px; color: var(--mut)">Thursday, 6 November</span>
          <h1 style="margin: 6px 0 0; {HF}; font-size: 40px; letter-spacing: -0.035em; font-weight: 400">Good evening, Vinay</h1>
          <p style="margin: 6px 0 0; font-size: 15px; color: var(--mut)">Vegham handled 23 conversations today. 3 things need you.</p></div>
        {composer}
        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center">{sugg}</div>
        <div style="margin-top: 8px">{stats}</div>
        <div style="display: grid; grid-template-columns: 1.15fr 1fr; gap: 16px">{needs}{today}</div>
        <div style="display: grid; grid-template-columns: 1.15fr 1fr; gap: 16px">{live}
          <div class="card" style="padding: 18px 20px; display: flex; flex-direction: column; gap: 10px"><b style="font-weight: 600; font-size: 15px">This week</b>
            <svg viewBox="0 0 300 90" width="100%" height="90" aria-label="Bookings this week chart (sample)"><defs><linearGradient id="hg-{name[:5]}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#3B6CF6" stop-opacity=".28"></stop><stop offset="1" stop-color="#3B6CF6" stop-opacity="0"></stop></linearGradient></defs><path d="M0 70 L50 58 L100 62 L150 40 L200 46 L250 24 L300 30 L300 90 L0 90 Z" fill="url(#hg-{name[:5]})"></path><path d="M0 70 L50 58 L100 62 L150 40 L200 46 L250 24 L300 30" fill="none" stroke="#3B6CF6" stroke-width="2"></path></svg>
            <span style="font-size: 12.5px; color: var(--mut)">41 bookings · ₹62,400 · 96% answered within 10 seconds</span></div></div>
        <span style="align-self: center; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--mut2)">Sample data</span>
      </div></div></main>'''

    # ---------------- account menu (popover, bottom-left)
    menu = f'''<div class="ov ov-menu" style="position: absolute; inset: 0; z-index: 30">
      <label for="ov-none" aria-label="Close menu" style="position: absolute; inset: 0"></label>
      <div class="popin" role="menu" style="position: absolute; left: 12px; bottom: 66px; width: 300px; padding: 8px; border-radius: 16px; background: var(--pop); box-shadow: var(--shadow)">
        <div style="padding: 10px 10px 8px; font-size: 13px; color: var(--mut)">vinay@nilaandco.in</div>
        <div style="padding: 0 4px 6px">
          <div class="mi" style="height: 44px"><span style="width: 26px; height: 26px; border-radius: 7px; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600">N</span><span style="display: flex; flex-direction: column; line-height: 1.2"><b style="font-weight: 500">Nila &amp; Co</b><span style="font-size: 11.5px; color: var(--mut)">Owner · Growth pilot</span></span><span style="margin-left: auto; color: var(--good)">{I('check', 16, 2)}</span></div>
          <div class="mi">{I('plus', 16)}Add another business</div></div>
        <div style="height: 1px; background: var(--line); margin: 4px 6px"></div>
        <label for="ov-set" class="mi">{I('gear', 17)}Settings<span class="kb">⌘ ,</span></label>
        <label for="ov-biz" class="mi">{I('building', 17)}Business settings</label>
        <a href="#" class="mi">{I('receipt', 17)}Plan and billing</a>
        <div class="mi" style="cursor: default">{I('sun', 17)}Theme<span style="margin-left: auto" class="seg"><label for="th-light" class="t-light">{I('sun', 13)}</label><label for="th-dark" class="t-dark">{I('moon', 13)}</label></span></div>
        <a href="#" class="mi">{I('globe', 17)}Language<span class="kb">English</span></a>
        <div style="height: 1px; background: var(--line); margin: 4px 6px"></div>
        <a href="#" class="mi">{I('help', 17)}Help and support</a>
        <a href="#" class="mi">{I('kbd', 17)}Keyboard shortcuts<span class="kb">?</span></a>
        <a href="#" class="mi">{I('gift', 17)}What’s new<span class="kb" style="padding: 1px 7px; border-radius: 999px; background: var(--soft); color: var(--text)">2</span></a>
        <div style="height: 1px; background: var(--line); margin: 4px 6px"></div>
        <a href="#" class="mi">{I('out', 17)}Log out</a>
      </div></div>'''

    # ---------------- settings modal
    stabs = ''.join(f'<label for="st-{t}" class="stab">{I(TAB_L[t][0], 17)}{TAB_L[t][1]}</label>' for t in TABS)
    themecard = lambda t, lab, bgc, sc, tc: f'''<label for="th-{t}" class="tcard t-{t}" style="flex: 1; border-radius: 14px; border: 1px solid var(--line); padding: 8px; display: flex; flex-direction: column; gap: 8px">
        <span style="height: 70px; border-radius: 9px; background: {bgc}; display: flex; overflow: hidden; border: 1px solid rgba(128,128,140,.2)"><span style="width: 30%; background: {sc}"></span><span style="flex: 1; padding: 10px; display: flex; flex-direction: column; gap: 6px"><span style="height: 6px; width: 60%; border-radius: 3px; background: {tc}"></span><span style="height: 6px; width: 85%; border-radius: 3px; background: {tc}; opacity: .5"></span><span style="margin-top: auto; height: 14px; border-radius: 6px; border: 1px solid {tc}; opacity: .4"></span></span></span>
        <span style="font-size: 13px; padding: 0 2px">{lab}</span></label>'''
    general = f'''<div class="sp sp-general"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">General</h2>
        <div class="row" style="display: block"><div class="rt">Appearance</div><div style="margin-top: 12px; display: flex; gap: 12px">{themecard('light', 'Light', '#FFFFFF', '#F3F3F5', '#C9C9D1')}{themecard('dark', 'Dark', '#0E0F12', '#17181C', '#4A4B55')}<span class="tcard" style="flex: 1; border-radius: 14px; border: 1px solid var(--line); padding: 8px; display: flex; flex-direction: column; gap: 8px"><span style="height: 70px; border-radius: 9px; background: linear-gradient(90deg, #FFFFFF 50%, #0E0F12 50%); border: 1px solid rgba(128,128,140,.2)"></span><span style="font-size: 13px; padding: 0 2px">Match device</span></span></div></div>
        <div class="row"><div><div class="rt">Language</div><div class="rd">For menus and buttons. Customers are answered in their own language.</div></div><span class="sel">English{I('chev', 14)}</span></div>
        <div class="row"><div><div class="rt">Time zone</div><div class="rd">Used for your calendar and reports</div></div><span class="sel">India · IST (UTC+5:30){I('chev', 14)}</span></div>
        <div class="row"><div><div class="rt">Week starts on</div></div><span class="sel">Monday{I('chev', 14)}</span></div>
        <div class="row"><div><div class="rt">Sounds</div><div class="rd">A soft chime when a customer needs you</div></div><span class="tg on"></span></div>
        <div class="row"><div><div class="rt">Compact sidebar</div><div class="rd">Show icons only. Press ⌘ B to switch.</div></div><span class="tg"></span></div></div>'''
    profile = f'''<div class="sp sp-profile"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">Profile</h2>
        <div class="row"><div style="display: flex; align-items: center; gap: 14px"><span style="width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #10B981, #3B6CF6 55%, #7C3AED); color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 600">V</span><div><div class="rt">Vinay</div><div class="rd">Owner of Nila &amp; Co</div></div></div><span class="obtn">Change photo</span></div>
        <div class="row"><div><div class="rt">Full name</div></div><span class="sel">Vinay Tenneti</span></div>
        <div class="row"><div><div class="rt">Email</div><div class="rd">For receipts and sign-in codes</div></div><span class="sel">vinay@nilaandco.in</span></div>
        <div class="row"><div><div class="rt">WhatsApp number</div><div class="rd">Handovers and your morning report go here</div></div><span class="sel">{WA(14)}+91 98765 43210</span></div>
        <div class="row"><div><div class="rt">Sign-in methods</div><div class="rd">Google · one-time code by WhatsApp</div></div><span class="obtn">Manage</span></div></div>'''
    nr = lambda t, d, v: f'<div class="row"><div><div class="rt">{t}</div><div class="rd">{d}</div></div><span class="sel">{v}{I("chev", 14)}</span></div>'
    ch = lambda t, on, ic: f'<span class="chip" style="height: 36px; {"border-color: var(--text); font-weight: 500" if on else "color: var(--mut)"}">{ic}{t}{I("check", 14, 2) if on else ""}</span>'
    notifs = f'''<div class="sp sp-notifs"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">Notifications</h2>
        <div class="row" style="display: block"><div class="rt">Where to reach you</div><div class="rd">Choose once. Each alert below uses these.</div><div style="margin-top: 12px; display: flex; gap: 8px">{ch('In the app', True, I('bell', 15))}{ch('WhatsApp', True, WA(15))}{ch('Email', False, I('receipt', 15))}</div></div>
        {nr('A customer needs a person', 'When the AI hands over or pauses', 'WhatsApp and app')}{nr('Missed or failed call', 'When a call could not be answered', 'WhatsApp and app')}{nr('New booking', 'Made online or by Vegham', 'App only')}{nr('Payment received', 'Payment links and deposits', 'App only')}{nr('Daily summary', 'What came in and what is booked', 'WhatsApp · 8 AM')}
        <div class="row"><div><div class="rt">Quiet hours</div><div class="rd">Only urgent alerts come through</div></div><span class="sel">10 PM – 7 AM{I("chev", 14)}</span></div></div>'''
    security = f'''<div class="sp sp-security"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">Security</h2>
        <div class="row"><div><div class="rt">Two-step sign-in</div><div class="rd">Ask for a code from an authenticator app too</div></div><span class="obtn">Turn on</span></div>
        <div class="row" style="display: block"><div class="rt">Signed-in devices</div>
          {''.join(f'<div style="display: flex; align-items: center; gap: 12px; margin-top: 12px; font-size: 13.5px"><span class="ibtn" style="background: var(--soft2)">{I(ic, 16)}</span><span style="flex: 1"><b style="font-weight: 500">{d}</b><span style="display: block; font-size: 12px; color: var(--mut)">{w}</span></span>{x}</div>' for ic, d, w, x in [('monitor', 'Chrome on Mac', 'Bengaluru · this device', '<span style="font-size: 12px; color: var(--good)">Active now</span>'), ('phone', 'Vegham app on iPhone', 'Bengaluru · 2 hours ago', '<span class="obtn" style="height: 28px; font-size: 12px">Sign out</span>')])}</div>
        <div class="row"><div><div class="rt">Sign out everywhere</div><div class="rd">Every device, including this one</div></div><span class="obtn">Sign out all</span></div></div>'''
    billing = f'''<div class="sp sp-billing"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">Plan and billing</h2>
        <div style="margin-top: 10px; padding: 18px; border-radius: 16px; background: #12141F; color: #FFFFFF; position: relative; overflow: hidden">{comps.aurora(1.0)}<div style="position: relative; display: flex; align-items: center; justify-content: space-between; gap: 16px"><div><span style="font-size: 12px; color: #A9AECB">Current plan</span><div style="{HF}; font-size: 26px; margin-top: 2px">Growth · free pilot</div><span style="font-size: 12.5px; color: #C9CCDD">23 days left · no card needed until it ends</span></div><span class="pbtn" style="background: #FFFFFF; color: #12141F">Choose a plan</span></div></div>
        {''.join(f'<div class="row"><div style="flex: 1"><div class="rt">{t}</div><div style="margin-top: 8px; height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: {p}%; height: 100%; border-radius: 3px; background: var(--ink)"></span></div></div><span style="font-size: 13px; color: var(--mut); width: 130px; text-align: right">{u}</span></div>' for t, p, u in [('AI conversations', 31, '310 of 1,000'), ('Voice minutes', 18, '54 of 300'), ('Team seats', 40, '2 of 5')])}
        <div class="row"><div><div class="rt">Payment method</div><div class="rd">Added when you choose a plan · UPI AutoPay or card</div></div><span class="obtn">Add</span></div>
        <div class="row"><div><div class="rt">Invoices</div><div class="rd">GST invoices for every payment</div></div><span class="obtn">View all</span></div></div>'''
    data = f'''<div class="sp sp-data"><h2 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">Data and privacy</h2>
        <div class="row"><div><div class="rt">Improve Vegham with my business’s conversations</div><div class="rd">Off by default. Your customers’ messages are never sold.</div></div><span class="tg"></span></div>
        <div class="row"><div><div class="rt">Call recordings</div><div class="rd">Kept for 90 days, then deleted</div></div><span class="sel">90 days{I('chev', 14)}</span></div>
        <div class="row"><div><div class="rt">Export all data</div><div class="rd">Contacts, conversations and bookings as a ZIP file</div></div><span class="obtn">{I('download', 15)}Export</span></div>
        <div class="row"><div><div class="rt" style="color: #E5484D">Delete account</div><div class="rd">Permanently delete Nila &amp; Co and all its data</div></div><span class="obtn" style="color: #E5484D; border-color: rgba(229,72,77,.35)">Delete</span></div></div>'''
    settings = f'''<div class="ov ov-set" style="position: absolute; inset: 0; z-index: 40; align-items: center; justify-content: center">
      <label for="ov-none" aria-label="Close settings" style="position: absolute; inset: 0; background: var(--scrim)"></label>
      <div class="popin" role="dialog" aria-modal="true" aria-label="Settings" style="position: relative; width: 880px; height: 640px; border-radius: 22px; background: var(--pop); box-shadow: var(--shadow); display: flex; overflow: hidden">
        <div style="width: 230px; flex: none; padding: 14px 10px; border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 2px">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 2px 4px 12px 10px"><b style="font-size: 15px; font-weight: 600">Settings</b><label for="ov-none" class="ibtn" aria-label="Close">{I('x', 17)}</label></div>
          {stabs}
          <div style="margin-top: auto; padding: 10px; border-radius: 12px; background: var(--soft2); font-size: 12.5px; color: var(--mut)">Services, hours, team and channels live in <label for="ov-biz" style="color: var(--text); font-weight: 500">Business settings →</label></div></div>
        <div style="flex: 1; padding: 24px 30px; overflow: hidden">{general}{profile}{notifs}{security}{billing}{data}</div></div></div>'''

    # ---------------- command palette
    pg = lambda t: f'<span style="display: block; padding: 10px 12px 4px; font-size: 11.5px; color: var(--mut2)">{t}</span>'
    pi = lambda ic, t, k='', on=False: f'<div class="mi" style="height: 40px; {"background: var(--soft2)" if on else ""}"><span style="color: var(--mut)">{ic}</span>{t}<span class="kb">{k}</span></div>'
    palette = f'''<div class="ov ov-pal" style="position: absolute; inset: 0; z-index: 40; justify-content: center; align-items: flex-start; padding-top: 110px">
      <label for="ov-none" aria-label="Close search" style="position: absolute; inset: 0; background: var(--scrim)"></label>
      <div class="popin" role="dialog" aria-label="Search" style="position: relative; width: 640px; border-radius: 18px; background: var(--pop); box-shadow: var(--shadow); overflow: hidden">
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--line)"><span style="color: var(--mut)">{I('search', 19)}</span><span style="flex: 1; font-size: 16px">rao<span style="display: inline-block; width: 1.5px; height: 18px; background: var(--text); vertical-align: middle; margin-left: 1px"></span></span><span class="kb" style="padding: 2px 8px; border: 1px solid var(--line); border-radius: 6px">esc</span></div>
        <div style="padding: 6px 8px 10px">
          {pg('Ask Vegham')}{pi(I('chat', 17), 'When is M. Rao’s next visit?', '↵', True)}
          {pg('Customers')}{pi('<span style="width: 22px; height: 22px; border-radius: 50%; background: var(--soft); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: var(--text)">M</span>', 'M. Rao <span style="color: var(--mut); font-size: 12.5px">· +91 98•• ••44 · 6 visits</span>')}{pi('<span style="width: 22px; height: 22px; border-radius: 50%; background: var(--soft); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: var(--text)">S</span>', 'Sunita Rao <span style="color: var(--mut); font-size: 12.5px">· Instagram · new</span>')}
          {pg('Actions')}{pi(I('plus', 17), 'New booking', 'B')}{pi(I('wallet', 17), 'Send a payment link', 'P')}{pi(I('users', 17), 'Invite a teammate')}
          {pg('Go to')}{pi(I('cal', 17), 'Calendar', 'G C')}{pi(I('chart', 17), 'Reports', 'G R')}</div>
        <div style="display: flex; gap: 16px; padding: 10px 18px; border-top: 1px solid var(--line); font-size: 12px; color: var(--mut)"><span>↑↓ to move</span><span>↵ to open</span><span>Tab to ask Vegham</span></div></div></div>'''

    # ---------------- notifications panel
    nt = [('Needs you', [(IG(16), 'Arjun is waiting for a person', 'Group price for 8 · 9 min ago', True), (I('phone', 16), 'P. Iyer asked for a call back', '25 min ago', True)]),
          ('Bookings', [(WA(16), 'Riya booked Standard · tomorrow 6:30 PM', 'Booked by Vegham · just now', False), (WA(16), 'Meera moved her visit to Saturday', '1 hour ago', False)]),
          ('System', [(I('check', 16), 'Instagram is connected', 'Meta approved your account · today', False), (I('receipt', 16), 'Your pilot ends in 23 days', 'Choose a plan any time', False)])]
    nb = ''
    for g, items in nt:
        nb += f'<span style="display: block; padding: 14px 18px 6px; font-size: 11.5px; color: var(--mut2)">{g}</span>'
        for ic, t, s, unread in items:
            nb += f'<div style="display: flex; gap: 12px; padding: 10px 18px; {"background: var(--soft2)" if unread else ""}"><span style="width: 32px; height: 32px; border-radius: 10px; background: var(--bg); border: 1px solid var(--line); display: inline-flex; align-items: center; justify-content: center; flex: none; color: var(--mut)">{ic}</span><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12px; color: var(--mut)">{s}</span></span>{"<span style=\'width: 8px; height: 8px; margin-top: 6px; border-radius: 50%; background: var(--acc)\'></span>" if unread else ""}</div>'
    notif = f'''<div class="ov ov-notif" style="position: absolute; inset: 0; z-index: 30">
      <label for="ov-none" aria-label="Close notifications" style="position: absolute; inset: 0"></label>
      <div class="popin" role="dialog" aria-label="Notifications" style="position: absolute; right: 16px; top: 54px; width: 400px; border-radius: 18px; background: var(--pop); box-shadow: var(--shadow); overflow: hidden; padding-bottom: 8px">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 18px 6px"><b style="font-size: 15px; font-weight: 600">Notifications</b><span style="font-size: 12.5px; color: var(--mut)">Mark all read</span></div>{nb}</div></div>'''

    if menuhtml is not None: menu = menuhtml
    if settingshtml is not None: settings = settingshtml
    body = f'''<div class="app" style="position: relative; height: {h}px; display: flex; overflow: hidden; font-family: Inter, system-ui, sans-serif; font-size: 14px; line-height: 1.45">
      {inputs}{side}{home if main is None else f'<main style="flex: 1; min-width: 0; height: 100%; display: flex; flex-direction: column; background: var(--bg)">{"" if notop else top}<div style="flex: 1; min-height: 0; overflow: hidden; position: relative">{main}</div></main>'}{overlay}{menu}{settings}{'' if nobiz else biz.modal()}{palette}{notif}</div>'''
    open(os.path.join(P, name), 'w').write(head + body + kit3.END.replace('__H__', str(h)))

if __name__ == '__main__':
    build('AppV2Home.dc.html', 'App · Home (prototype)')
    build('AppV2Dark.dc.html', 'App · Home · dark', theme='dark')
    build('AppV2Menu.dc.html', 'App · Account menu', ov='menu')
    build('AppV2Settings.dc.html', 'App · Settings', ov='set')
    build('AppV2Billing.dc.html', 'App · Settings · plan', ov='set', tab='billing')
    build('AppV2Search.dc.html', 'App · Search', ov='pal')
    build('AppV2Notif.dc.html', 'App · Notifications', ov='notif')
    build('AppV2Collapsed.dc.html', 'App · Collapsed sidebar', collapsed=True, theme='dark')
    print('ok')
