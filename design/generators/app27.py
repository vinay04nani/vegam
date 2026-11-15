"""App · Channels page, and a Channels item in every app board's sidebar.
Works on the board files directly (no dependency on the older generators):
  python3 app27.py <folder with the App*.dc.html boards>
"""
import glob, json, os, re, sys
D = os.path.dirname(os.path.abspath(__file__))
BR = json.load(open(os.path.join(D, 'brand_svgs.json')))
G = '#10B981'

TELEGRAM = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#29A9EB"></circle><path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF"></path></svg>'


def ic(d, s=18, w=1.7, c='currentColor'):
    return f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round">{d}</svg>'


def big(svg, s=20):
    return re.sub(r'width="\d+" height="\d+"', f'width="{s}" height="{s}"', svg, count=1)


I_PHONE = '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>'
I_LINK = '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>'
I_PLUG = '<path d="M9 3v4M15 3v4"></path><path d="M7 7h10v4a5 5 0 0 1-10 0z"></path><path d="M12 16v5"></path>'
I_COPY = '<rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15V6a2 2 0 0 1 2-2h9"></path>'
I_CODE = '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4"></path>'
I_DOWN = '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"></path>'

LOGO = {'phone': ic(I_PHONE, 19, 1.8, '#16182A'), 'wa': big(BR['WhatsApp']), 'ig': big(BR['Instagram']), 'ms': big(BR['Messenger']), 'tg': TELEGRAM, 'link': ic(I_LINK, 19, 1.8, '#16182A')}
NAV_ITEM = f'<a href="AppChannels.dc.html" class="nv"  title="Channels">{ic(I_PLUG)}<span class="lbl">Channels</span></a>'


def tile(k):
    return f'<span style="width: 40px; height: 40px; flex: none; border-radius: 12px; background: #FFFFFF; border: 1px solid var(--line); display: inline-flex; align-items: center; justify-content: center">{LOGO[k]}</span>'


def cap(t):
    voice = t == 'Voice'
    return f'<span class="chip2" style="height: 24px; padding: 0 9px; font-size: 12px; {"border-color: rgba(16,185,129,.45); color: " + G + "; font-weight: 500" if voice else "color: var(--mut)"}">{t}</span>'


def row(k, name, detail, caps, right):
    return (f'<div class="li">{tile(k)}<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500">{name}</b><span style="font-size: 12.5px; color: var(--mut)">{detail}</span></span>'
            f'<span style="display: inline-flex; gap: 6px">{"".join(cap(c) for c in caps)}</span>{right}</div>')


def live(t='Connected'):
    return f'<span style="display: inline-flex; align-items: center; gap: 7px; width: 110px; font-size: 13px; font-weight: 500"><span style="width: 8px; height: 8px; border-radius: 50%; background: {G}"></span>{t}</span><span class="obtn" style="height: 32px">Manage</span>'


def connect():
    return '<span style="width: 110px; font-size: 13px; color: var(--mut)">Not connected</span><span class="pbtn" style="height: 32px">Connect</span>'


def body():
    stat = lambda v, l: f'<span style="min-width: 76px"><span class="hero" style="display: block; font-size: 24px; line-height: 1.15">{v}</span><span style="font-size: 12px; color: var(--mut)">{l}</span></span>'
    top = (f'<div class="rc" style="padding: 20px 22px; display: flex; align-items: center; gap: 24px"><span style="flex: 1"><b style="display: block; font-size: 17px; font-weight: 600">Vegham answers on 3 channels</b>'
           f'<span style="font-size: 13px; color: var(--mut)">The same agent, with the same memory, on every one.</span></span>{stat("486", "calls")}{stat("742", "WhatsApp chats")}{stat("38", "from your link")}</div>')
    on = ('<div class="list">'
          + row('phone', 'Phone number', '080 4719 2200 · picks up when you miss a call', ['Voice'], live()).replace('border-top: 1px solid var(--line)', '', 1)
          + row('wa', 'WhatsApp', '+91 98450 33221 · same number as your calls', ['Chat', 'Voice notes'], live())
          + row('link', 'Your link', 'vegham.ai/talk/nila-and-co · works in any browser', ['Voice', 'Chat'], live('Ready'))
          + '</div>')
    off = ('<div class="list">'
           + row('ig', 'Instagram', 'Answer direct messages on your business profile', ['Chat'], connect())
           + row('ms', 'Messenger', 'Answer messages sent to your Facebook page', ['Chat'], connect())
           + row('tg', 'Telegram', 'A Telegram assistant your customers can message', ['Chat', 'Voice notes'], connect())
           + '</div>')
    left = (f'<div style="display: flex; flex-direction: column; gap: 4px">{top}<div class="sec"><span>Connected</span><span>This month</span></div>{on}'
            f'<div class="sec"><span>Add a channel</span><span>Takes about 2 minutes each</span></div>{off}</div>').replace('<div class="list"><div class="li">', '<div class="list"><div class="li" style="border-top: 0">')
    qr = ('<span aria-hidden="true" style="width: 84px; height: 84px; flex: none; border-radius: 12px; border: 1px solid var(--line); background-color: #FFFFFF; background-image: linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%), linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%); '
          'background-size: 12px 12px; background-position: 6px 6px, 12px 12px; background-origin: content-box; background-clip: content-box; padding: 8px; box-sizing: border-box"></span>')
    link = (f'<div class="rc" style="padding: 16px 20px"><b style="font-size: 14px; font-weight: 600">Your link</b><span style="display: block; font-size: 12.5px; color: var(--mut); margin: 2px 0 12px">Anyone can talk or type to your agent, in any country. No app, no phone number.</span>'
            f'<span class="fld" style="gap: 8px"><span style="color: var(--mut2)">{ic(I_LINK, 15)}</span><span style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">vegham.ai/talk/nila-and-co</span><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 500">{ic(I_COPY, 14)}Copy</span></span>'
            f'<div style="display: flex; align-items: center; gap: 16px; margin-top: 14px">{qr}<span style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start"><span class="obtn" style="height: 32px">{ic(I_CODE, 15)}Add to your website</span><span class="obtn" style="height: 32px">{ic(I_DOWN, 15)}Download QR code</span></span></div></div>')
    sw = lambda t, d, on=True: f'<div style="display: flex; align-items: center; gap: 14px; padding: 12px 0; border-top: 1px solid var(--line)"><span style="flex: 1"><b style="display: block; font-weight: 500; font-size: 13.5px">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span><span class="sw{" on" if on else ""}"></span></div>'
    one = (f'<div class="rc" style="padding: 16px 20px 6px"><b style="font-size: 14px; font-weight: 600">One person, every channel</b><span style="display: block; font-size: 12.5px; color: var(--mut); margin: 2px 0 10px">So a caller who also messages you is remembered as the same customer.</span>'
           + sw('Join calls and WhatsApp from the same number', 'Happens on its own. 312 people matched so far.')
           + sw('Ask for a phone number in chats', 'On Instagram, Messenger and Telegram, so those chats join the right person.') + '</div>')
    pick = ('<div class="rc" style="padding: 16px 20px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 14px; font-weight: 600">When Vegham picks up</b><span style="font-size: 12.5px; font-weight: 500">Change →</span></div>'
            '<span style="display: block; font-size: 13.5px; margin-top: 8px">When you miss a call, after 4 rings</span><span style="display: block; font-size: 12.5px; color: var(--mut)">Messages are answered straight away, day and night.</span></div>')
    right = f'<div style="display: flex; flex-direction: column; gap: 14px">{link}{one}{pick}</div>'
    return f'<div style="flex: 1; overflow: hidden; padding: 24px 32px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; align-content: start">{left}{right}</div>'


def build(folder):
    t = open(os.path.join(folder, 'AppAgentKnowledge.dc.html')).read()
    m, e = t.index('<main'), t.index('</main>')
    main = t[m:e]
    b0 = main.index('<div style="flex: 1; display: flex; min-height: 0">')
    b1 = main.rindex('<span class="smp"')
    main = main[:b0] + '<div style="flex: 1; display: flex; min-height: 0">' + body() + '</div>' + main[b1:]
    main = main.replace('>Knowledge</b>', '>Channels</b>', 1).replace('What your receptionist knows about your business', 'Where your agent answers', 1)
    main = main.replace('>Change →<', '><a href="AppAgent.dc.html">Change →</a><', 1)
    html = t[:m] + main + t[e:]
    html = html.replace('<a href="AppAgentKnowledge.dc.html" class="nv on" aria-current="page" title="Knowledge">', '<a href="AppAgentKnowledge.dc.html" class="nv"  title="Knowledge">', 1)
    html = re.sub(r'<title>.*?</title>', '<title>Vegham · Your agent · channels</title>', html, count=1)
    open(os.path.join(folder, 'AppChannels.dc.html'), 'w').write(html)
    n = 0
    for fp in sorted(glob.glob(os.path.join(folder, 'App*.dc.html'))):
        s = open(fp).read()
        if 'title="Channels"' in s:
            s = re.sub(r'<a href="AppChannels\.dc\.html" class="nv[^>]*>.*?</a>', '', s, count=1, flags=re.S)
        key = '<a href="AppAgentTest.dc.html" class="nv'
        if key not in s:
            continue
        item = NAV_ITEM.replace('class="nv" ', 'class="nv on" aria-current="page"') if fp.endswith('AppChannels.dc.html') else NAV_ITEM
        s = s.replace(key, item + key, 1)
        open(fp, 'w').write(s)
        n += 1
    print('channels board built; sidebar updated in', n, 'boards')


if __name__ == '__main__':
    build(sys.argv[1])
