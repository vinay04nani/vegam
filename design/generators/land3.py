"""Landing v3: voice agent + long memory + every channel. Reuses the head, header, aurora hero and footer of LandingV2."""
import os, json, re
D = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(D, '..', 'vegam-ui', 'project')
SRC = open(os.path.join(D, 'landing_v2_src.html')).read() if os.path.exists(os.path.join(D, 'landing_v2_src.html')) else None
BR = json.load(open(os.path.join(D, 'brand_svgs.json')))

G = '#10B981'
GT = '#0B8F63'
INK = '#16182A'
TIGHT = "font-family: 'Inter Tight', sans-serif"
AUR = 'linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)'


def ic(d, s=18, c='currentColor', w=1.8):
    return '<svg aria-hidden="true" width="%d" height="%d" viewBox="0 0 24 24" fill="none" stroke="%s" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round">%s</svg>' % (s, s, c, w, d)


I_PHONE = '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>'
I_LINK = '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>'
I_CHECK = '<path d="M5 12.5l4.5 4.5L19 7.5"></path>'
I_MEM = '<path d="M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z"></path><path d="M9.5 21h5"></path>'
I_CLOCK = '<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path>'
I_USER = '<circle cx="12" cy="8.5" r="3.5"></circle><path d="M5 20a7 7 0 0 1 14 0"></path>'
I_HAND = '<path d="M4 12h11"></path><path d="M11 7l5 5-5 5"></path><path d="M20 5v14"></path>'
I_BOOK = '<path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"></path><path d="M5 17a3 3 0 0 1 3-3h10"></path>'
I_CHART = '<path d="M5 19V10"></path><path d="M12 19V5"></path><path d="M19 19v-6"></path>'
I_GLOBE = '<circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17"></path><path d="M12 3.5c2.5 2.3 3.7 5.2 3.7 8.5s-1.2 6.2-3.7 8.5c-2.5-2.3-3.7-5.2-3.7-8.5S9.5 5.8 12 3.5z"></path>'
I_SHIELD = '<path d="M12 3.5l7 2.5v5.5c0 4.3-2.9 7.4-7 9-4.1-1.6-7-4.7-7-9V6z"></path><path d="M9 12l2.2 2.2L15.2 10"></path>'
I_MIC = '<rect x="9" y="3.5" width="6" height="11" rx="3"></rect><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"></path><path d="M12 18v3"></path>'
I_CHAT = '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>'
I_PLAY = '<path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none"></path>'

TELEGRAM = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#29A9EB"></circle><path d="M5.4 11.7l11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.5-5c.2-.2 0-.3-.4-.1l-6.8 4.3-2.9-.9c-.6-.2-.6-.6 0-.9z" fill="#FFFFFF"></path></svg>'


def big(svg, s=22):
    return re.sub(r'width="\d+" height="\d+"', 'width="%d" height="%d"' % (s, s), svg, count=1)


LOGO = {
    'phone': ic(I_PHONE, 20, INK),
    'wa': big(BR['WhatsApp']),
    'ig': big(BR['Instagram']),
    'ms': big(BR['Messenger']),
    'tg': TELEGRAM,
    'link': ic(I_LINK, 20, INK),
}


def tile(k, s=44):
    return '<span style="width: %dpx; height: %dpx; flex: none; border-radius: 12px; background: #FFFFFF; border: 1px solid #ECECEF; display: inline-flex; align-items: center; justify-content: center">%s</span>' % (s, s, LOGO[k])


def eyebrow(t, dark=False):
    return '<span class="vg-rv" style="display: inline-block; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: %s">%s</span>' % ('#A9AECB' if dark else '#6B6B6B', t)


def h2(a, b, dark=False, size=52, align='left', mw=760):
    return '<h2 style="margin: 16px %s 0; max-width: %dpx; %s; font-weight: 400; font-size: %dpx; line-height: 1.06; letter-spacing: -0.045em; color: %s"><span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.1em; margin-bottom: -0.1em"><span class="vg-line-in" style="display: block">%s</span></span><span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.1em; margin-bottom: -0.1em"><span class="vg-line-in" style="display: block; color: %s">%s</span></span></h2>' % ('auto' if align == 'center' else '0', mw, TIGHT, size, '#FFFFFF' if dark else '#141414', a, '#8C90A8' if dark else '#8A8A8A', b)


def lead(t, dark=False, align='left', mw=560):
    return '<p class="vg-rv" style="margin: 20px %s 0; max-width: %dpx; font-size: 18px; color: %s">%s</p>' % ('auto' if align == 'center' else '0', mw, '#C3C6DA' if dark else '#5C5C5C', t)


def chip(t, on=False):
    if on:
        return '<span style="display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 10px; border-radius: 999px; border: 1px solid rgba(16,185,129,.45); color: %s; font-size: 12.5px; font-weight: 500; white-space: nowrap">%s</span>' % (GT, t)
    return '<span style="display: inline-flex; align-items: center; height: 26px; padding: 0 10px; border-radius: 999px; border: 1px solid #E6E6EA; color: #5C5C5C; font-size: 12.5px; white-space: nowrap">%s</span>' % t


def wave(n=28, c=G, h=34, anim=True):
    hs = [8, 14, 22, 12, 28, 18, 10, 24, 32, 16, 9, 20, 27, 13, 30, 19, 11, 25, 15, 8, 21, 29, 12, 17, 26, 10, 22, 14, 31, 18, 9, 23, 13, 27, 16, 11]
    return '<span aria-hidden="true" style="display: inline-flex; align-items: center; gap: 3px; height: %dpx">%s</span>' % (h, ''.join('<span class="%s" style="width: 3px; height: %dpx; border-radius: 2px; background: %s; animation-delay: %.2fs"></span>' % ('vg-wave' if anim else '', hs[i % len(hs)] * h // 34, c, (i % 7) * 0.12) for i in range(n)))


def sample(dark=False):
    return '<span style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: %s">Sample data</span>' % ('#8C90A8' if dark else '#A3A3A3')


def aurora(op=1):
    return ('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; border-radius: inherit; opacity: %s">'
            '<div class="vg-aur1" style="position: absolute; left: -15%%; top: -45%%; width: 130%%; height: 95%%; filter: blur(60px); opacity: .9; background: radial-gradient(ellipse 30%% 42%% at 22%% 55%%, rgba(61,214,140,0.61), transparent 70%%), radial-gradient(ellipse 26%% 38%% at 48%% 45%%, rgba(45,212,191,0.50), transparent 70%%), radial-gradient(ellipse 28%% 46%% at 76%% 52%%, rgba(124,92,255,0.55), transparent 70%%)"></div>'
            '<div class="vg-aur2" style="position: absolute; left: -10%%; top: -30%%; width: 120%%; height: 80%%; filter: blur(70px); opacity: .8; background: radial-gradient(ellipse 22%% 36%% at 36%% 50%%, rgba(79,124,255,0.44), transparent 70%%), radial-gradient(ellipse 24%% 40%% at 66%% 40%%, rgba(61,214,140,0.39), transparent 70%%), radial-gradient(ellipse 18%% 30%% at 90%% 60%%, rgba(236,72,153,0.24), transparent 70%%)"></div>'
            '<div class="vg-curtain" style="position: absolute; left: 0; right: 0; top: 0; height: 65%%; opacity: .35; background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px); -webkit-mask-image: linear-gradient(180deg, transparent 0%%, #000 25%%, #000 45%%, transparent 100%%); mask-image: linear-gradient(180deg, transparent 0%%, #000 25%%, #000 45%%, transparent 100%%)"></div>'
            '<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(18,20,31,0) 30%%, rgba(18,20,31,.9) 100%%)"></div></div>') % op


BTN_W = 'display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500'
BTN_G = 'display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); color: #FFFFFF; text-decoration: none; font-weight: 500'
BTN_D = 'display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500'
BTN_L = 'display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid #E2E2E6; color: #1F1F1F; text-decoration: none; font-weight: 500'
CARD = 'background: #FFFFFF; border: 1px solid #ECECEF; border-radius: 24px'


# ---------- HERO ----------
def bub(t, me=False):
    if me:
        return '<span style="align-self: flex-start; max-width: 78%%; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">%s</span>' % t
    return '<span style="align-self: flex-end; max-width: 72%%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px">%s</span>' % t


def mem_row(icon, t, s):
    return '<span style="display: flex; gap: 10px; padding: 10px 0; border-top: 1px solid #F0F0F3"><span style="flex: none; margin-top: 1px; color: %s">%s</span><span style="min-width: 0"><span style="display: block; font-size: 13.5px; color: #1F1F1F">%s</span><span style="display: block; font-size: 12px; color: #8A8A8A">%s</span></span></span>' % (G, ic(icon, 15), t, s)


def hero_mock():
    nav = ''.join('<span style="padding: 7px 10px; border-radius: 12px; %s">%s</span>' % ('background: #F1F1F4; color: #16182A; font-weight: 500' if on else '', n) for n, on in [('Home', 0), ('Conversations', 1), ('People', 0), ('Follow-ups', 0), ('Insights', 0), ('Your agent', 0)])
    side = '<div class="vg-mock-side" style="width: 190px; flex: none; background: #FAFAFB; border-right: 1px solid #EDEDF0; padding: 18px 12px; display: flex; flex-direction: column; gap: 4px; color: #5C5C5C"><span style="padding: 0 10px 14px; %s; font-weight: 600; font-size: 20px; letter-spacing: -0.045em; color: transparent; background: %s; -webkit-background-clip: text; background-clip: text">vegham</span>%s</div>' % (TIGHT, AUR, nav)
    head = '<span style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #F0F0F3"><span style="display: inline-flex; align-items: center; gap: 10px"><span style="width: 32px; height: 32px; border-radius: 50%%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px">R</span><span><b style="font-weight: 600">Rohan Mehta</b><span style="display: block; font-size: 12px; color: #8A8A8A">Phone call · 0:38</span></span></span>%s</span>' % chip('<span style="width: 6px; height: 6px; border-radius: 50%; background: #10B981"></span>Returning caller', True)
    talk = (bub('Hi Rohan, good to hear from you again. Still looking at weekend sessions?', True)
            + bub('Yes! You remembered. Is Saturday morning open?')
            + bub('Saturday 10 AM is free. Shall I hold it and send the details on WhatsApp, like last time?', True))
    foot = '<span style="margin-top: auto; display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #F0F0F3; font-size: 12.5px; color: #8A8A8A">%s<span>Vegham is on the call</span></span>' % wave(22, G, 22)
    mid = '<div style="flex: 1; min-width: 0; padding: 18px 22px; display: flex; flex-direction: column; gap: 10px; background: #FFFFFF">%s%s%s</div>' % (head, talk, foot)
    mem = ('<div class="vg-mock-mem" style="width: 300px; flex: none; border-left: 1px solid #EDEDF0; padding: 18px 20px; background: #FCFCFD"><span style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px"><b style="font-weight: 600; font-size: 13.5px">What Vegham remembers</b><span style="font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: #A3A3A3">Sample</span></span>'
           + mem_row(I_CLOCK, 'First called in May', '6 months ago · phone')
           + mem_row(I_USER, 'Prefers Saturday mornings', 'Said so twice')
           + mem_row(I_GLOBE, 'Speaks Hindi and English', 'Switches between both')
           + mem_row(I_CHAT, 'Likes details on WhatsApp', 'Same number as his calls')
           + mem_row(I_MEM, 'Asked about weekend sessions', 'Left unfinished in July')
           + '</div>')
    return '<div class="vg-mock" style="display: flex; text-align: left; color: #1F1F1F; font-size: 14px; line-height: 1.45; height: 100%%">%s%s%s</div>' % (side, mid, mem)


def hero():
    tick = lambda t: '<span style="display: inline-flex; align-items: center; gap: 6px">%s%s</span>' % (ic(I_CHECK, 15, '#3DD68C', 2.2), t)
    play = '<a href="#" aria-label="Play a 42-second sample call" style="display: inline-flex; align-items: center; gap: 12px; height: 52px; padding: 0 20px 0 6px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); color: #FFFFFF; text-decoration: none; font-weight: 500"><span style="width: 40px; height: 40px; border-radius: 50%%; background: #FFFFFF; color: #12141F; display: inline-flex; align-items: center; justify-content: center">%s</span>Hear a sample call%s<span style="font-size: 13px; color: #C9CCDD; font-variant-numeric: tabular-nums">0:42</span></a>' % (ic(I_PLAY, 16), wave(12, '#FFFFFF', 22))
    return (
        '<div style="position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 166px 32px 0; text-align: center"><div class="vg-heroout">'
        '<a href="#" class="vg-hero" style="animation-delay: .05s; display: inline-flex; align-items: center; gap: 10px; padding: 5px 14px 5px 5px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; background: rgba(255,255,255,.06); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); text-decoration: none; font-size: 14px; color: #DDE0EE"><span style="padding: 3px 10px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-size: 12px; font-weight: 500">New</span>An AI voice agent with a long memory →</a>'
        '<h1 class="vg-hero" style="animation-delay: .15s; margin: 28px auto 0; max-width: 1000px; %s; font-weight: 400; letter-spacing: -0.045em; font-size: 76px; line-height: 1.04; color: #FFFFFF; text-shadow: 0 2px 30px rgba(3,5,14,.5)">Never miss a customer.<br><span style="color: #A9AECB">Never forget one either.</span></h1>'
        '<p class="vg-hero" style="animation-delay: .3s; margin: 24px auto 0; max-width: 640px; font-size: 19px; color: #C9CCDD">Vegham is an AI voice agent that answers your calls and messages, speaks your customers’ language, and remembers every person it talks to, even months later.</p>'
        '<div class="vg-hero" style="animation-delay: .42s; margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="Signup.dc.html" style="%s">Start free</a>%s</div>'
        '<div class="vg-hero" style="animation-delay: .54s; margin-top: 22px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px; font-size: 14px; color: #A9AECB">%s%s%s</div>'
        '</div><div class="vg-mockin"><div class="vg-hero vg-mockframe" style="animation-delay: .7s; position: relative; margin: 64px auto 0; max-width: 1100px; height: 372px; border-radius: 20px 20px 0 0; overflow: hidden; background: #FFFFFF; border: 1px solid rgba(255,255,255,.2); border-bottom: 0; box-shadow: 0 -30px 90px -30px rgba(45,227,160,.35), 0 -10px 40px -20px rgba(0,0,0,.6)">%s</div></div>'
        '</div>') % (TIGHT, BTN_W, play, tick('Calls and chat, day and night'), tick('Remembers people for months'), tick('Live in minutes'), hero_mock())


# ---------- CHANNELS ----------
def channels():
    items = [
        ('phone', 'Phone calls', 'Picks up on your business number, in a natural voice.', ['Voice']),
        ('wa', 'WhatsApp', 'Replies to messages and voice notes on your WhatsApp number.', ['Chat', 'Voice notes']),
        ('ig', 'Instagram', 'Answers direct messages on your business profile.', ['Chat']),
        ('ms', 'Messenger', 'Answers messages sent to your Facebook page.', ['Chat']),
        ('tg', 'Telegram', 'A Telegram assistant your customers can message any time.', ['Chat', 'Voice notes']),
        ('link', 'A link or your website', 'One link to talk or type from any browser. No app, no phone number.', ['Voice', 'Chat']),
    ]
    cards = ''.join('<div class="vg-lift vg-rv" style="%s; padding: 24px; display: flex; flex-direction: column; gap: 14px"><span style="display: flex; align-items: center; justify-content: space-between; gap: 12px">%s<span style="display: inline-flex; gap: 6px">%s</span></span><span><b style="display: block; %s; font-weight: 500; font-size: 20px; letter-spacing: -0.02em">%s</b><span style="display: block; margin-top: 4px; font-size: 14.5px; color: #5C5C5C">%s</span></span></div>' % (CARD, tile(k), ''.join(chip(c, c == 'Voice') for c in cs), TIGHT, n, d) for k, n, d, cs in items)
    return ('<section style="background: #FFFFFF"><div style="max-width: 1200px; margin: 0 auto; padding: 104px 32px 112px"><div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div>%s</div>'
            '<div style="margin-top: 48px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">%s</div>'
            '<p style="margin: 20px 0 0; font-size: 14px; color: #6B6B6B">Connect one channel or all of them. It is the same agent with the same memory everywhere.</p></div></section>') % (
        eyebrow('One agent, every channel'), h2('Wherever customers reach you,', 'Vegham answers.'), lead('Calls, chats and a simple link. Customers pick the way they like to talk, and Vegham is already there.', mw=420), cards)


# ---------- MEMORY ----------
def memory():
    def moment(when, where, logo, text, last=False):
        dot = '<span style="position: relative; z-index: 1; width: 36px; height: 36px; flex: none; border-radius: 50%%; background: %s; border: 1px solid %s; display: inline-flex; align-items: center; justify-content: center; color: #FFFFFF">%s</span>' % ('#10B981' if last else '#1B1E2D', '#10B981' if last else 'rgba(255,255,255,.14)', logo)
        return '<div style="display: flex; gap: 18px">%s<div style="flex: 1; min-width: 0; padding-bottom: %s"><span style="display: flex; align-items: baseline; gap: 10px"><b style="font-weight: 500; font-size: 15px; color: #FFFFFF">%s</b><span style="font-size: 13px; color: #8C90A8">%s</span></span><span style="display: block; margin-top: 6px; font-size: 14.5px; line-height: 1.5; color: %s">%s</span></div></div>' % (dot, '0' if last else '30px', when, where, '#FFFFFF' if last else '#B4B8CC', text)
    tl = ('<div style="position: relative"><span aria-hidden="true" style="position: absolute; left: 17.5px; top: 18px; bottom: 60px; width: 1px; background: linear-gradient(180deg, rgba(255,255,255,.16), #10B981)"></span>'
          + moment('May', 'First phone call', ic(I_PHONE, 16), 'Rohan asks about weekend sessions and says Saturday mornings suit him best.')
          + moment('July', 'WhatsApp message', ic(I_CHAT, 16), 'He asks for the details again, in Hindi. The conversation is left unfinished.')
          + moment('November', 'Calls again, today', ic(I_PHONE, 16), '<span style="display: block; padding: 14px 16px; border-radius: 16px 16px 16px 4px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12)">“Hi Rohan, good to hear from you again. Still looking at Saturday mornings? I can send the details on WhatsApp, like last time.”</span>', True)
          + '</div>')
    pt = lambda t, d: '<div style="display: flex; gap: 14px"><span style="flex: none; margin-top: 3px; color: #3DD68C">%s</span><span><b style="display: block; font-weight: 500; color: #FFFFFF">%s</b><span style="font-size: 15px; color: #B4B8CC">%s</span></span></div>' % (ic(I_CHECK, 18, 'currentColor', 2.2), t, d)
    left = ('<div style="flex: 1 1 440px; min-width: 0">%s%s%s<div style="margin-top: 36px; display: flex; flex-direction: column; gap: 20px; max-width: 480px">%s%s%s</div></div>') % (
        eyebrow('Long memory', True), h2('It remembers every person.', 'Even six months later.', True),
        lead('Most assistants start from zero on every call. Vegham keeps the thread: who someone is, what they asked, and where you left off.', True, mw=500),
        pt('Who they are', 'Name, language and how they like to be contacted.'),
        pt('What they wanted', 'Questions, preferences and anything left unfinished.'),
        pt('One person, not five', 'A call and a WhatsApp from the same number are the same customer.'))
    right = '<div class="vg-par" style="flex: 1 1 460px; min-width: 0"><div style="position: relative; padding: 32px; border-radius: 24px; background: rgba(18,20,31,.72); border: 1px solid rgba(255,255,255,.12); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)">%s<div style="margin-top: 22px; text-align: right">%s</div></div></div>' % (tl, sample(True))
    return ('<section style="padding: 0 16px"><div class="vg-zoomc" style="position: relative; overflow: hidden; max-width: 1408px; margin: 0 auto; border-radius: 32px; background: #12141F; color: #FFFFFF">%s'
            '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 112px 32px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; gap: 56px 72px">%s%s</div></div></section>') % (aurora(.85), left, right)


# ---------- WHAT IT DOES (bento) ----------
def bento():
    def card(span, icon, t, d, vis='', minh=300):
        return '<div class="vg-lift vg-rv" style="grid-column: span %d; %s; padding: 28px; min-height: %dpx; box-sizing: border-box; display: flex; flex-direction: column; gap: 20px; overflow: hidden"><span><span style="display: inline-flex; width: 40px; height: 40px; border-radius: 12px; background: #F5F5F7; align-items: center; justify-content: center; color: #16182A">%s</span><b style="display: block; margin-top: 18px; %s; font-weight: 500; font-size: 22px; letter-spacing: -0.025em">%s</b><span style="display: block; margin-top: 6px; max-width: 460px; font-size: 15px; color: #5C5C5C">%s</span></span>%s</div>' % (span, CARD, minh, ic(icon, 19), TIGHT, t, d, vis)

    v_voice = ('<div style="margin-top: auto; padding: 18px 20px; border-radius: 16px; background: #F7F7F8; display: flex; flex-wrap: wrap; align-items: center; gap: 16px 22px"><span style="display: inline-flex; align-items: center; gap: 10px; font-size: 13px; color: #5C5C5C"><span style="width: 8px; height: 8px; border-radius: 50%; background: #B9B9C2"></span>Caller</span>'
               + wave(20, '#B9B9C2', 26, False) + '<span style="display: inline-flex; align-items: center; gap: 10px; font-size: 13px; color: ' + GT + '; font-weight: 500"><span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981"></span>Vegham</span>' + wave(26, G, 26)
               + '<span style="display: inline-flex; flex-wrap: wrap; gap: 6px; margin-left: auto">' + chip('Answers in under a second') + chip('Can be interrupted') + '</span></div>')
    langs = ['English', 'हिन्दी', 'தமிழ்', 'Español', 'العربية', 'Français', 'Português', 'Deutsch', 'తెలుగు', 'Bahasa']
    v_lang = '<div style="margin-top: auto; display: flex; flex-wrap: wrap; gap: 8px">%s%s</div>' % (''.join('<span style="display: inline-flex; align-items: center; height: 32px; padding: 0 13px; border-radius: 999px; background: #F5F5F7; font-size: 14px; color: #2B2B2B">%s</span>' % l for l in langs), '<span style="display: inline-flex; align-items: center; height: 32px; padding: 0 13px; border-radius: 999px; border: 1px dashed #D5D5DB; font-size: 14px; color: #6B6B6B">and more</span>')
    v_one = ('<div style="margin-top: auto; display: flex; align-items: center; gap: 10px">' + tile('phone', 40) + tile('wa', 40) + tile('ig', 40)
             + '<span aria-hidden="true" style="flex: 1; height: 1px; background: linear-gradient(90deg, #E2E2E6, #10B981)"></span>'
             + '<span style="display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px 0 6px; border-radius: 999px; border: 1px solid rgba(16,185,129,.45); font-size: 14px; font-weight: 500"><span style="width: 28px; height: 28px; border-radius: 50%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; font-size: 12px">R</span>Rohan</span></div>')
    v_ctx = ('<div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px">'
             + '<span style="display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: 12px; background: #F7F7F8"><span>Asked for a quote</span><span style="color: #8A8A8A">12 weeks ago</span></span>'
             + '<span style="display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: 12px; background: #F7F7F8"><span>Wanted to bring a friend</span><span style="color: #8A8A8A">5 weeks ago</span></span>'
             + '<span style="display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(16,185,129,.45)"><span>Brings both up on today’s call</span><span style="color: ' + GT + '; font-weight: 500">Now</span></span></div>')
    v_hand = ('<div style="margin-top: auto; padding: 14px 16px; border-radius: 16px; background: #F7F7F8; font-size: 13.5px"><span style="display: flex; justify-content: space-between; gap: 10px"><b style="font-weight: 600">Needs you</b><span style="color: #8A8A8A">2 min ago</span></span><span style="display: block; margin-top: 6px; color: #5C5C5C">Kabir wants a custom price for a group of 12. Summary and transcript attached.</span><span style="display: inline-flex; margin-top: 12px; gap: 8px"><span style="display: inline-flex; align-items: center; height: 30px; padding: 0 14px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-weight: 500">Take over</span><span style="display: inline-flex; align-items: center; height: 30px; padding: 0 14px; border-radius: 999px; border: 1px solid #E2E2E6">Call back</span></span></div>')
    v_know = ('<div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px">'
              + ''.join('<span style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 12px; background: #F7F7F8"><span style="color: ' + G + '">' + ic(I_CHECK, 15, 'currentColor', 2.2) + '</span><span style="flex: 1">%s</span><span style="color: #8A8A8A">%s</span></span>' % (a, b) for a, b in [('Your website', '24 pages read'), ('Prices and opening hours', 'Updated today'), ('Things it must never say', '6 rules')]) + '</div>')
    bars = [38, 52, 44, 66, 58, 80, 72, 90, 64, 84, 96, 76]
    v_ins = ('<div style="margin-top: auto; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 28px"><div style="flex: 1 1 260px; display: flex; align-items: flex-end; gap: 8px; height: 110px">'
             + ''.join('<span style="flex: 1; height: %d%%; border-radius: 6px 6px 2px 2px; background: %s"></span>' % (b, G if i == 10 else '#E9E9EE') for i, b in enumerate(bars))
             + '</div><div style="display: flex; gap: 28px">' + ''.join('<span><span style="display: block; %s; font-size: 34px; letter-spacing: -0.03em; line-height: 1.1">%s</span><span style="font-size: 13px; color: #6B6B6B">%s</span></span>' % (TIGHT, v, l) for v, l in [('412', 'callers recognised'), ('0', 'calls missed'), ('23', 'follow-ups due')]) + '</div></div>'
             '<div style="text-align: right">' + sample() + '</div>')
    grid = (card(2, I_MIC, 'Sounds like a person, not a menu', 'A natural voice that listens, pauses and lets people interrupt. No “press 1 for sales”.', v_voice)
            + card(1, I_GLOBE, 'Speaks their language', 'Answers in the language the customer starts in, and switches if they do.', v_lang)
            + card(1, I_USER, 'One person across channels', 'Calls and chats from the same person land in one profile.', v_one, 320)
            + card(1, I_CLOCK, 'Long context', 'Picks up unfinished conversations instead of starting over.', v_ctx, 320)
            + card(1, I_HAND, 'Hands over to you', 'When it is not sure, it brings in a person with a short summary.', v_hand, 320)
            + card(1, I_BOOK, 'Knows your business', 'Learns from your website and notes, and only answers from what you taught it.', v_know)
            + card(2, I_CHART, 'Shows you what happened', 'Every call and chat summarised, with follow-ups it promised and people it recognised.', v_ins))
    return ('<section style="view-timeline-name: --vg-sec-product; background: linear-gradient(180deg, #FFFFFF 0%%, #F7F7F8 100%%)"><div style="max-width: 1200px; margin: 0 auto; padding: 120px 32px 112px"><div style="text-align: center">%s%s%s</div><div style="margin-top: 56px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">%s</div></div></section>') % (
        eyebrow('What Vegham does'), h2('A voice agent that listens,', 'understands and remembers.', align='center', mw=820), lead('Everything a good receptionist does on a call or in a chat, at any hour, for every customer at once.', align='center', mw=600), grid)


# ---------- GLOBAL / LINK ----------
def global_():
    pt = lambda icon, t, d: '<div style="display: flex; gap: 16px"><span style="width: 40px; height: 40px; flex: none; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center; color: #16182A">%s</span><span><b style="display: block; font-weight: 500">%s</b><span style="font-size: 15px; color: #5C5C5C">%s</span></span></div>' % (ic(icon, 19), t, d)
    left = '<div style="flex: 1 1 440px; min-width: 0">%s%s%s<div style="margin-top: 36px; display: flex; flex-direction: column; gap: 22px; max-width: 480px">%s%s%s</div></div>' % (
        eyebrow('Works anywhere'), h2('Wherever your', 'customers are.'), lead('Your customers do not need an app, and you do not need a call centre. Share one link and anyone, in any country, can talk to your agent.', mw=500),
        pt(I_LINK, 'One link to talk or type', 'Put it on your site, your profile or a QR code. It opens in any browser.'),
        pt(I_PHONE, 'Your own number', 'Keep the number customers already know and let Vegham pick up.'),
        pt(I_CLOCK, 'Every time zone', 'It answers at 3 AM the same way it answers at 3 PM.'))
    qr = '<span aria-hidden="true" style="width: 76px; height: 76px; flex: none; border-radius: 12px; border: 1px solid #ECECEF; background-color: #FFFFFF; background-image: linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%), linear-gradient(45deg, #16182A 25%, transparent 25%, transparent 75%, #16182A 75%); background-size: 12px 12px; background-position: 6px 6px, 12px 12px; background-origin: content-box; background-clip: content-box; padding: 8px; box-sizing: border-box"></span>'
    card = ('<div class="vg-par" style="flex: 1 1 460px; min-width: 0; display: flex; justify-content: center"><div style="width: 100%; max-width: 460px; border-radius: 28px; background: #F7F7F8; border: 1px solid #ECECEF; padding: 14px">'
            '<div style="display: flex; align-items: center; gap: 10px; height: 40px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #ECECEF; font-size: 13.5px; color: #5C5C5C"><span style="color: #8A8A8A">' + ic(I_LINK, 15) + '</span>vegham.ai/talk/your-business</div>'
            '<div style="margin-top: 12px; border-radius: 20px; background: #FFFFFF; border: 1px solid #ECECEF; padding: 36px 28px 28px; text-align: center">'
            '<span style="display: inline-flex; width: 64px; height: 64px; border-radius: 50%; background: #16182A; color: #FFFFFF; align-items: center; justify-content: center; ' + TIGHT + '; font-size: 24px">N</span>'
            '<b style="display: block; margin-top: 16px; ' + TIGHT + '; font-weight: 500; font-size: 24px; letter-spacing: -0.03em">Nila &amp; Co</b><span style="font-size: 14.5px; color: #6B6B6B">Ask anything. We answer right away.</span>'
            '<div style="margin: 22px auto 0; display: flex; justify-content: center">' + wave(30, G, 34) + '</div>'
            '<div style="margin-top: 24px; display: flex; gap: 10px"><span style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 48px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-weight: 500">' + ic(I_MIC, 17) + 'Talk</span><span style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 48px; border-radius: 999px; border: 1px solid #E2E2E6; font-weight: 500">' + ic(I_CHAT, 17) + 'Type</span></div>'
            '<div style="margin-top: 22px; padding-top: 20px; border-top: 1px solid #F0F0F3; display: flex; align-items: center; gap: 16px; text-align: left">' + qr + '<span style="font-size: 13.5px; color: #5C5C5C">Scan to talk.<br>Works on any phone, in any country.</span></div></div>'
            '<div style="padding: 12px 6px 2px; text-align: right">' + sample() + '</div></div></div>')
    return '<section style="background: #FFFFFF"><div style="max-width: 1200px; margin: 0 auto; padding: 120px 32px; display: flex; flex-wrap: wrap; align-items: center; gap: 56px 72px">%s%s</div></section>' % (left, card)


# ---------- HOW IT WORKS ----------
def how():
    steps = [('01', 'Tell it about your business', 'Paste your website or type a few lines. Vegham reads it and learns what you offer.'),
             ('02', 'Pick a voice', 'Choose how it sounds and which languages it speaks. Change it any time.'),
             ('03', 'Make a test call', 'Call it yourself and hear exactly what your customers will hear.'),
             ('04', 'Connect and go live', 'Add your phone number, WhatsApp or the link. It starts answering straight away.')]
    cards = ''.join('<div class="vg-rv" style="padding: 28px; border-radius: 24px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)"><span style="font-size: 13px; color: #3DD68C; font-variant-numeric: tabular-nums">%s</span><b style="display: block; margin-top: 40px; %s; font-weight: 400; font-size: 24px; line-height: 1.15; letter-spacing: -0.03em">%s</b><span style="display: block; margin-top: 10px; font-size: 15px; color: #B4B8CC">%s</span></div>' % (n, TIGHT, t, d) for n, t, d in steps)
    return ('<section style="padding: 0 16px; view-timeline-name: --vg-sec-how"><div class="vg-zoomc" style="position: relative; overflow: hidden; max-width: 1408px; margin: 0 auto; border-radius: 32px; background: #12141F; color: #FFFFFF">%s<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px; box-sizing: border-box">'
            '<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div><a href="Signup.dc.html" style="%s">Start free</a></div>'
            '<div style="margin-top: 56px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px">%s</div></div></div></section>') % (aurora(.7), eyebrow('How it works', True), h2('Live in minutes,', 'not weeks.', True), BTN_W, cards)


# ---------- CONTROL ----------
def control():
    items = [(I_MEM, 'You decide what it keeps', 'Choose how long memory lasts, switch off personal details, and delete a person the moment they ask.'),
             (I_SHIELD, 'It only says what you taught it', 'Answers come from your own information. When it does not know, it says so and passes the conversation to you.'),
             (I_HAND, 'Step in whenever you want', 'Read or listen to any conversation, take over a chat, or set the moments it should always hand over.')]
    cols = ''.join('<div class="vg-rv" style="padding: 32px 0 0; border-top: 1px solid #E2E2E6"><span style="color: %s">%s</span><b style="display: block; margin-top: 18px; %s; font-weight: 500; font-size: 22px; letter-spacing: -0.025em">%s</b><span style="display: block; margin-top: 8px; font-size: 15.5px; color: #5C5C5C">%s</span></div>' % (G, ic(i, 22), TIGHT, t, d) for i, t, d in items)
    return '<section style="background: #FFFFFF"><div style="max-width: 1200px; margin: 0 auto; padding: 120px 32px 112px">%s%s<div style="margin-top: 56px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px">%s</div></div></section>' % (eyebrow('You stay in charge'), h2('It works for you.', 'You set the rules.'), cols)


# ---------- PRICING ----------
def pricing():
    def plan(n, p, d, pts, dark=False):
        fg, mut, bd = ('#FFFFFF', '#C3C6DA', 'transparent') if dark else ('#141414', '#5C5C5C', '#ECECEF')
        li = ''.join('<span style="display: flex; gap: 10px; font-size: 14.5px; color: %s"><span style="flex: none; margin-top: 2px; color: %s">%s</span>%s</span>' % (mut, '#3DD68C' if dark else G, ic(I_CHECK, 15, 'currentColor', 2.2), t) for t in pts)
        badge = '<span style="padding: 3px 10px; border-radius: 999px; background: rgba(255,255,255,.12); font-size: 12px">Most chosen</span>' if dark else ''
        return '<div class="vg-rv" style="padding: 28px; border-radius: 24px; background: %s; border: 1px solid %s; color: %s"><span style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: 500">%s%s</span><span style="display: block; margin-top: 18px; %s; font-size: 40px; letter-spacing: -0.04em; line-height: 1.1">%s<span style="font-family: Inter, sans-serif; font-size: 14px; letter-spacing: 0; color: %s"> / month</span></span><span style="display: block; margin-top: 8px; font-size: 14.5px; color: %s">%s</span><span style="display: flex; flex-direction: column; gap: 10px; margin-top: 22px; padding-top: 22px; border-top: 1px solid %s">%s</span></div>' % ('#16182A' if dark else '#FFFFFF', bd, fg, n, badge, TIGHT, p, mut, mut, d, 'rgba(255,255,255,.12)' if dark else '#F0F0F3', li)
    cards = (plan('Starter', '₹2,999', 'Chat on your channels, with memory', ['WhatsApp, Instagram and the link', 'Remembers every person', 'Hand-over to your team'])
             + plan('Growth', '₹7,999', 'Adds the voice agent on calls', ['Everything in Starter', 'Phone calls and voice on the link', 'Follow-ups and insights'], True)
             + plan('Pro', 'from ₹19,999', 'For larger teams and more numbers', ['Everything in Growth', 'More numbers and team seats', 'Priority support']))
    return ('<section style="background: #F7F7F8; view-timeline-name: --vg-sec-pricing"><div style="max-width: 1200px; margin: 0 auto; padding: 112px 32px"><div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div><a href="Pricing.dc.html" style="%s; height: 44px; background: #FFFFFF">Compare all plans →</a></div>'
            '<div style="margin-top: 48px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">%s</div><p style="margin: 20px 0 0; font-size: 14px; color: #6B6B6B">30 days free on any plan · Prices exclude taxes · WhatsApp and call charges at cost</p></div></section>') % (eyebrow('Pricing'), h2('Simple pricing.', 'Start free.'), BTN_L, cards)


# ---------- FAQ ----------
def faq():
    qs = [('How does Vegham remember people?', 'After each call or chat it saves a short note about the person: their name, language, what they asked and anything left unfinished. The next time they get in touch, it reads those notes before it answers.', True),
          ('Which channels can I connect?', 'Phone calls, WhatsApp, Instagram, Messenger, Telegram and a link you can share or place on your website. Voice works on phone calls and the link. Instagram, Messenger and Telegram are chat.', False),
          ('Does it work in my country?', 'The link and the chat channels work anywhere. Phone numbers depend on the country, so tell us where you are and we will confirm before you start.', False),
          ('What happens when it does not know the answer?', 'It says so, takes a message and hands the conversation to you with a summary. It does not make things up.', False),
          ('Can a customer ask to be forgotten?', 'Yes. You can delete one person’s memory in a click, and you choose how long memory is kept for everyone.', False),
          ('Will customers know they are talking to an AI?', 'Yes. Vegham introduces itself as your assistant and never pretends to be a person.', False)]
    items = ''.join('<details%s class="vg-rv" style="border-top: 1px solid #E8E8EC; padding: 22px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 20px; cursor: pointer; list-style: none; %s; font-size: 20px; letter-spacing: -0.02em">%s<span aria-hidden="true" style="flex: none; width: 32px; height: 32px; border-radius: 50%%; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; color: #5C5C5C">+</span></summary><p style="margin: 12px 0 0; max-width: 620px; font-size: 16px; color: #5C5C5C">%s</p></details>' % (' open' if o else '', TIGHT, q, a) for q, a, o in qs)
    return '<section style="background: #FFFFFF"><div style="max-width: 1200px; margin: 0 auto; padding: 112px 32px; display: flex; flex-wrap: wrap; gap: 40px 72px"><div style="flex: 1 1 300px">%s<p style="margin: 20px 0 0; font-size: 15.5px; color: #5C5C5C">Something else? <a href="Contact.dc.html" style="color: #141414">Talk to us</a>.</p></div><div style="flex: 2 1 560px; min-width: 0; border-bottom: 1px solid #E8E8EC">%s</div></div></section>' % (h2('Frequently asked', 'questions', size=44), items)


# ---------- CTA ----------
def cta():
    return ('<section style="padding: 0 32px 112px; background: #FFFFFF"><div class="vg-zoomc" style="position: relative; overflow: hidden; max-width: 1136px; margin: 0 auto; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 96px 40px; text-align: center">%s'
            '<h2 style="position: relative; margin: 0; %s; font-weight: 400; font-size: 52px; line-height: 1.05; letter-spacing: -0.045em">Never miss a customer<br>again.</h2><p style="position: relative; margin: 16px 0 0; font-size: 18px; color: #C3C6DA">Set up your agent in minutes and make your first test call today.</p>'
            '<div style="position: relative; margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="Signup.dc.html" style="%s">Start free</a><a href="BookDemo.dc.html" style="%s">Book a demo</a></div></div></section>') % (aurora(1), TIGHT, BTN_W, BTN_G)


FOOT_SWAPS = [
    ('The AI front desk that answers, books and follows up for any business, on every channel, day and night.', 'The AI voice agent that answers your calls and messages, and remembers every person it talks to.'),
    ('Tips for running a busier front desk', 'Notes on never missing a customer'),
    ('>Chat receptionist<', '>Voice agent<'), ('>Voice receptionist<', '>Long memory<'), ('>Bookings and reminders<', '>Languages<'),
    ('>Follow-ups and reviews<', '>Follow-ups<'), ('>Team inbox<', '>Hand-over<'), ('>Morning report<', '>Insights<'),
    ('>WhatsApp<', '>Phone calls<', 1), ('>Phone calls</a></li><li><a href="#" class="vg-flink" style="font-size: 14px; color: #6B6B6B; text-decoration: none">Phone calls<', '>Phone calls</a></li><li><a href="#" class="vg-flink" style="font-size: 14px; color: #6B6B6B; text-decoration: none">WhatsApp<'),
    ('>Website chat<', '>Telegram<'), ('>Ad lead forms<', '>Link and website<'),
    ('English (India) · ₹ INR', 'English · ₹ INR'),
]


def footer(f):
    for sw in FOOT_SWAPS:
        a, b = sw[0], sw[1]
        assert a in f, a
        f = f.replace(a, b, sw[2]) if len(sw) > 2 else f.replace(a, b)
    return f


RESPONSIVE = '''
@keyframes vg-heroout{to{transform:translateY(-70px);opacity:.15}}
@keyframes vg-mockin{from{transform:translateY(46px) scale(.955)}to{transform:none}}
@keyframes vg-sky{to{transform:translateY(140px) scale(1.06)}}
@supports (animation-timeline: view()){
  .vg-heroout{animation:vg-heroout linear both;animation-timeline:scroll(root);animation-range:120px 760px}
  .vg-mockin{transform-origin:50% 100%;animation:vg-mockin linear both;animation-timeline:scroll(root);animation-range:0px 420px}
  .vg-sky{animation:vg-sky linear both;animation-timeline:scroll(root);animation-range:0px 1100px}
}
@media (prefers-reduced-motion: reduce){.vg-heroout,.vg-mockin,.vg-sky,.vg-rv,.vg-par,.vg-zoomc,.vg-line-in{animation:none!important}}
@media (max-width: 1000px){.vg-g3,.vg-g4{grid-template-columns:repeat(2,minmax(0,1fr))!important}.vg-mock-side{display:none!important}}
@media (max-width: 760px){.vg-pad{padding:72px 20px!important}.vg-mockframe{height:auto!important}.vg-mock{flex-direction:column;height:auto!important}.vg-mock-mem{width:auto!important;border-left:0!important;border-top:1px solid #EDEDF0}}
@media (max-width: 640px){.vg-g3,.vg-g4{grid-template-columns:minmax(0,1fr)!important}.vg-g3>*,.vg-g4>*{grid-column:auto!important;min-height:0!important}}
'''


def build(src):
    s = open(src).read()
    hs = s.index('<section style="position: relative; overflow: hidden; min-height: 1080px">')
    hc = s.index('<div style="position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 166px 32px 0; text-align: center">', hs)
    fs = s.index('<footer style="border-top: 1px solid #EDEDF0')
    fe = s.index('</footer>') + len('</footer>')
    head = s[:hc].replace('<title>Vegham landing page, v2</title>', '<title>Vegham landing page, v3</title>')
    for a, b in [('>Product<span', '>Product<span'), ('href="#" style="display: inline-flex; align-items: center; height: 40px; padding: 0 20px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in', 'href="Login.dc.html" style="display: inline-flex; align-items: center; height: 40px; padding: 0 20px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-size: 15px; font-weight: 500">Log in'),
                 ('Start your free pilot', 'Start free')]:
        head = head.replace(a, b)
    body = hero() + '</section>' + channels() + memory() + bento() + global_() + how() + control() + pricing() + faq() + cta()
    body = re.sub(r'<div style="([^"]*grid-template-columns: repeat\((3|4), minmax\(0, 1fr\)\)[^"]*)"', r'<div class="vg-g\2" style="\1"', body)
    body = re.sub(r'<div style="((?:position: relative; )?max-width: 1200px; margin: 0 auto; padding: 1\d\dpx 32px[^"]*)"', r'<div class="vg-pad" style="\1"', body)
    head = head.replace('</style>', RESPONSIVE + '</style>', 1)
    sky = head.index('<svg', head.index('min-height: 1080px'))
    head = head[:sky] + '<svg class="vg-sky"' + head[sky + 4:]
    tail = s[fe:]
    tail = re.sub(r'"height":\d+', '"height":9650', tail)
    return head + body + '\n  ' + footer(s[fs:fe]) + tail


if __name__ == '__main__':
    src = os.path.join(D, 'landing_v2_src.html')
    out = build(src)
    open(os.path.join(P, 'LandingV2.dc.html'), 'w').write(out)
    print(len(out))
