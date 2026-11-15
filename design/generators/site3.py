"""Product, How it works and Pricing pages for the voice agent + memory + channels product.
Page chrome (head, light header) comes from the Contact board; the footer from the landing page."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import land3 as L
from land3 import ic, tile, chip, wave, sample, aurora, eyebrow, h2, lead, CARD, BTN_W, BTN_G, BTN_D, BTN_L, TIGHT, G, GT, INK

P = L.P


def page_hero(tag, a, b, p, extra=''):
    return (f'<section style="background: linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%); border-bottom: 1px solid #EFEFEF"><div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
            f'<span class="vg-hero" style="animation-delay: .05s; display: inline-block; padding: 10px 28px; border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6; font-size: 15px; color: #3D3D3D">{tag}</span>'
            f'<h1 class="vg-hero" style="animation-delay: .15s; margin: 26px auto 0; max-width: 940px; {TIGHT}; font-weight: 400; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">{a}<br><span style="color: #8A8A8A">{b}</span></h1>'
            f'<p class="vg-hero" style="animation-delay: .3s; margin: 20px auto 0; max-width: 620px; font-size: 18.5px; color: #3D3D3D">{p}</p>{extra}</div></section>')


def hero_btns():
    return f'<div class="vg-hero" style="animation-delay: .42s; margin-top: 30px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="Signup.dc.html" style="{BTN_D}">Start free</a><a href="BookDemo.dc.html" style="{BTN_L}">Book a demo</a></div>'


def bullets(items):
    return '<div style="margin-top: 28px; display: flex; flex-direction: column; gap: 14px">' + ''.join(f'<span style="display: flex; gap: 12px; font-size: 16px; color: #3D3D3D"><span style="flex: none; margin-top: 3px; color: {G}">{ic(L.I_CHECK, 17, "currentColor", 2.2)}</span>{t}</span>' for t in items) + '</div>'


def row(tag, a, b, text, items, visual, flip=False, bg='#FFFFFF', anchor=''):
    txt = f'<div style="flex: 1 1 420px; min-width: 0; max-width: 520px">{eyebrow(tag)}{h2(a, b, size=44)}{lead(text, mw=480)}{bullets(items)}</div>'
    vis = f'<div style="flex: 1 1 480px; min-width: 0">{visual}</div>'
    idattr = f' id="{anchor}"' if anchor else ''
    return f'<section{idattr} style="background: {bg}"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 104px 32px; display: flex; flex-wrap: wrap{"-reverse" if flip else ""}; flex-direction: {"row-reverse" if flip else "row"}; align-items: center; justify-content: space-between; gap: 48px 72px">{txt}{vis}</div></section>'


def frame(inner, pad='24px'):
    return f'<div style="border-radius: 28px; background: #F7F7F8; border: 1px solid #ECECEF; padding: 14px"><div style="border-radius: 20px; background: #FFFFFF; border: 1px solid #ECECEF; padding: {pad}; font-size: 14px; line-height: 1.45">{inner}</div><div style="padding: 12px 6px 2px; text-align: right">{sample()}</div></div>'


def who(name, sub, right=''):
    return f'<span style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid #F0F0F3"><span style="display: inline-flex; align-items: center; gap: 10px"><span style="width: 34px; height: 34px; border-radius: 50%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px">{name[0]}</span><span><b style="font-weight: 600">{name}</b><span style="display: block; font-size: 12.5px; color: #8A8A8A">{sub}</span></span></span>{right}</span>'


def talk(lines):
    return '<span style="display: flex; flex-direction: column; gap: 10px; padding: 16px 0">' + ''.join(L.bub(t, me) for t, me in lines) + '</span>'


def note(t):
    return f'<span style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: {GT}">{ic(L.I_GLOBE, 13)}{t}</span>'


# ---------- visuals ----------
def v_voice():
    dot = '<span style="width: 6px; height: 6px; border-radius: 50%; background: #10B981"></span>'
    return frame(who('Ananya Rao', 'Phone call · 0:24', chip(dot + 'Live', True))
                 + talk([('Hi, thanks for calling Nila & Co. How can I help?', True), ('Hi, are you open this Sunday? And do I need to book?', False), ('We are closed on Sundays, but Saturday 10 to 6 is open. Walk-ins are fine till 5. Want me to hold a time?', True)])
                 + f'<span style="display: flex; align-items: center; gap: 12px; padding-top: 14px; border-top: 1px solid #F0F0F3; font-size: 12.5px; color: #8A8A8A">{wave(26, G, 24)}<span>Answered in under a second</span></span>')


def v_lang():
    langs = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'Español', 'العربية', 'Français', 'Português']
    chips = ''.join(f'<span style="display: inline-flex; align-items: center; height: 30px; padding: 0 12px; border-radius: 999px; background: #F5F5F7; font-size: 13.5px">{l}</span>' for l in langs)
    return frame(who('Caller', 'Phone call · started in English')
                 + '<span style="display: flex; flex-direction: column; gap: 10px; padding: 16px 0">' + L.bub('Saturday 10 AM is free. Shall I book it?', True) + L.bub('Hindi mein baat karein?') + L.bub('Bilkul! Saturday 10 baje khaali hai. Book kar doon?', True) + note('Switched to Hindi') + '</span>'
                 + f'<span style="display: flex; flex-wrap: wrap; gap: 6px; padding-top: 14px; border-top: 1px solid #F0F0F3">{chips}</span>')


def v_hand():
    rules = ''.join(f'<span style="display: flex; align-items: center; gap: 10px; padding: 10px 0; border-top: 1px solid #F0F0F3"><span style="color: {G}">{ic(L.I_CHECK, 15, "currentColor", 2.2)}</span>{t}</span>' for t in ['Caller asks for a person', 'A complaint or a refund', 'A price that is not in your list'])
    return frame('<span style="display: block; padding: 16px 18px; border-radius: 16px; background: #F7F7F8"><span style="display: flex; justify-content: space-between; gap: 10px"><b style="font-weight: 600">Needs you</b><span style="color: #8A8A8A">2 min ago</span></span><span style="display: block; margin-top: 6px; color: #5C5C5C">Kabir wants a custom price for a group of 12. Vegham told him someone will call back today. Summary and transcript attached.</span>'
                 f'<span style="display: inline-flex; margin-top: 14px; gap: 8px"><span style="display: inline-flex; align-items: center; height: 34px; padding: 0 16px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-weight: 500">Take over</span><span style="display: inline-flex; align-items: center; height: 34px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF">Call back</span></span></span>'
                 f'<span style="display: block; margin-top: 18px; font-size: 12.5px; color: #8A8A8A">Hands over when</span><span style="display: flex; flex-direction: column; margin-top: 8px">{rules}</span>')


def v_follow():
    def item(n, why, when, msg):
        return (f'<span style="display: block; padding: 16px 0; border-top: 1px solid #F0F0F3"><span style="display: flex; justify-content: space-between; align-items: center; gap: 10px"><span style="display: inline-flex; align-items: center; gap: 10px"><span style="width: 30px; height: 30px; border-radius: 50%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 12px">{n[0]}</span><span><b style="font-weight: 600">{n}</b><span style="display: block; font-size: 12.5px; color: #8A8A8A">{why}</span></span></span>{chip(when, when == "Due today")}</span>'
                f'<span style="display: block; margin-top: 10px; padding: 10px 14px; border-radius: 12px; background: #F7F7F8; color: #3D3D3D">{msg}</span></span>')
    return frame('<span style="display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 12px"><b style="font-weight: 600; font-size: 15px">Follow-ups</b><span style="font-size: 12.5px; color: #8A8A8A">23 open</span></span>'
                 + item('Ananya Rao', 'Said she would decide by Monday', 'Due today', '“Hi Ananya! I shared the prices on Saturday. Would you like me to book a first visit this week?”')
                 + item('Vikram Singh', 'Asked for evening slots in August', 'This week', '“Hi Vikram, we now have evening slots till 8 PM on weekdays. Want me to hold one for you?”'))


def v_know():
    src = ''.join(f'<span style="display: flex; align-items: center; gap: 10px; padding: 11px 14px; border-radius: 12px; background: #F7F7F8"><span style="color: {G}">{ic(L.I_CHECK, 15, "currentColor", 2.2)}</span><span style="flex: 1">{a}</span><span style="color: #8A8A8A">{b}</span></span>' for a, b in [('Your website', '24 pages read'), ('Price list.pdf', 'Uploaded 4 Nov'), ('Opening hours', 'Updated today')])
    rule = lambda k, t: f'<span style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid #F0F0F3"><b style="width: 52px; font-weight: 600; font-size: 12.5px; color: {GT if k == "Always" else "#141414"}">{k}</b>{t}</span>'
    return frame(f'<span style="display: block; font-size: 12.5px; color: #8A8A8A; padding-bottom: 10px">Where it learns from</span><span style="display: flex; flex-direction: column; gap: 8px">{src}</span>'
                 f'<span style="display: block; margin-top: 20px; font-size: 12.5px; color: #8A8A8A">Always and never</span><span style="display: flex; flex-direction: column; margin-top: 6px">{rule("Always", "Say prices include tax")}{rule("Always", "Offer the next free slot if one is full")}{rule("Never", "Promise a discount over 10%")}</span>')


def v_ins():
    bars = [38, 52, 44, 66, 58, 80, 72, 90, 64, 84, 96, 76]
    b = ''.join(f'<span style="flex: 1; height: {v}%; border-radius: 6px 6px 2px 2px; background: {G if i == 10 else "#E9E9EE"}"></span>' for i, v in enumerate(bars))
    st = ''.join(f'<span><span style="display: block; {TIGHT}; font-size: 32px; letter-spacing: -0.03em; line-height: 1.1">{v}</span><span style="font-size: 13px; color: #6B6B6B">{l}</span></span>' for v, l in [('486', 'calls answered'), ('412', 'callers recognised'), ('86%', 'handled without you')])
    return frame(f'<span style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-weight: 600; font-size: 15px">This month</b><span style="font-size: 12.5px; color: #8A8A8A">Calls and chats per day</span></span><span style="display: flex; align-items: flex-end; gap: 8px; height: 130px; margin-top: 18px">{b}</span><span style="display: flex; flex-wrap: wrap; gap: 20px 36px; margin-top: 22px; padding-top: 18px; border-top: 1px solid #F0F0F3">{st}</span>')


# ---------- PRODUCT ----------
def product():
    return (page_hero('Product', 'One agent that answers,', 'understands and remembers.', 'Vegham picks up your calls and replies to your messages in a natural voice, in your customers’ language, and keeps a memory of every person it talks to.', hero_btns())
            + row('Voice', 'Sounds like a person,', 'not a phone menu.', 'A natural voice that listens, pauses and lets people interrupt. It answers from what you taught it and never puts anyone on hold.', ['Picks up every call, day and night', 'Answers in under a second', 'Handles interruptions and changes of mind'], v_voice(), anchor='voice')
            + row('Languages', 'Speaks their language.', 'Switches when they do.', 'Vegham answers in the language the customer starts in. If they switch half-way, or ask it to, it follows.', ['Choose the languages your customers speak', 'Mixed languages in one sentence are fine', 'Remembers each person’s language for next time'], v_lang(), True, '#F7F7F8', 'languages')
            + '<div style="padding: 112px 0 0; background: #FFFFFF"></div>' + L.memory().replace('<section', '<section id="memory"', 1)
            + L.channels().replace('<section', '<section id="channels"', 1)
            + row('Hand-over', 'Knows when to', 'bring you in.', 'When a conversation needs a person, Vegham says so, takes a message and passes it to you with a short summary. You set the rules.', ['You choose the moments it must hand over', 'Summary and transcript attached every time', 'Take over a chat or call back in one click'], v_hand(), False, '#F7F7F8', 'hand-over')
            + row('Follow-ups', 'Remembers what', 'it promised.', '“I’ll think about it” is not the end of a conversation. Vegham keeps track of who to get back to and when, and writes the message for you.', ['Follows up once, in a friendly way', 'Only people who agreed to hear from you', 'Unhappy customers always come to you'], v_follow(), True, anchor='follow-ups')
            + row('Knowledge', 'Knows your business.', 'Says only what is true.', 'Paste your website or upload a price list. Vegham learns from it, shows you what it knows, and asks you about anything it could not answer.', ['Learns from your website, files and notes', 'Rules it always follows, and things it never says', 'Shows the questions it could not answer'], v_know(), False, '#F7F7F8', 'knowledge')
            + row('Insights', 'See what happened', 'while you were busy.', 'Every call and chat is summarised. See how many it answered, who it recognised, what people asked and where it needed you.', ['Calls, chats and missed calls saved', 'What people ask most', 'Calls worth a listen'], v_ins(), True, anchor='insights')
            + L.cta())


# ---------- HOW IT WORKS ----------
def s_site():
    rows = ''.join(f'<span style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid #F0F0F3"><span style="color: {G}">{ic(L.I_CHECK, 15, "currentColor", 2.2)}</span><span style="width: 150px; color: #6B6B6B">{k}</span><span style="flex: 1; min-width: 0">{v}</span></span>' for k, v in [('Business name', 'Nila & Co'), ('Hours', 'Mon–Fri 9–8 · Sat 10–6'), ('Services and prices', '12 found'), ('Common questions', 'Parking, walk-ins, payment')])
    return frame(f'<span style="display: flex; align-items: center; gap: 10px; height: 46px; padding: 0 16px; border-radius: 14px; border: 1px solid #E2E2E6; color: #3D3D3D"><span style="color: #8A8A8A">{ic(L.I_GLOBE, 16)}</span>nilaandco.in<span style="margin-left: auto; font-size: 12.5px; color: {GT}; font-weight: 500">14 pages read</span></span><span style="display: flex; flex-direction: column; margin-top: 14px">{rows}</span>')


def s_voice():
    def v(n, d, on=False):
        return (f'<span style="display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 16px; border: 1px solid #ECECEF; background: {"#F7F7F8" if on else "#FFFFFF"}"><span style="width: 36px; height: 36px; flex: none; border-radius: 50%; background: {G if on else "#F1F1F4"}; color: {"#FFFFFF" if on else INK}; display: inline-flex; align-items: center; justify-content: center">{ic(L.I_PLAY, 14)}</span>'
                f'<span style="min-width: 0"><b style="display: block; font-weight: 600">{n}</b><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></span></span>')
    grid = '<span style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">' + v('Warm', 'Calm, friendly', True) + v('Easy', 'Relaxed') + v('Bright', 'Upbeat') + v('Steady', 'Clear, formal') + '</span>'
    langs = ''.join(f'<span style="display: inline-flex; align-items: center; height: 30px; padding: 0 12px; border-radius: 999px; background: {INK if on else "#F5F5F7"}; color: {"#FFFFFF" if on else "#2B2B2B"}; font-size: 13.5px">{l}</span>' for l, on in [('English', 1), ('हिन्दी', 1), ('ಕನ್ನಡ', 0), ('தமிழ்', 0), ('తెలుగు', 0)])
    return frame(grid + f'<span style="display: block; margin-top: 18px; font-size: 12.5px; color: #8A8A8A">Languages your customers speak</span><span style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px">{langs}</span>')


def s_test():
    orb = f'<span style="width: 96px; height: 96px; border-radius: 50%; background: #16182A; display: inline-flex; align-items: center; justify-content: center">{wave(9, G, 34)}</span>'
    chk = lambda t, q, on=True: f'<span style="display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top: 1px solid #F0F0F3"><span style="width: 20px; height: 20px; flex: none; border-radius: 50%; background: {G if on else "#FFFFFF"}; border: 1px solid {G if on else "#D5D5DB"}; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center">{ic(L.I_CHECK, 12, "currentColor", 2.6) if on else ""}</span><b style="width: 120px; font-weight: 500">{t}</b><span style="color: #6B6B6B">{q}</span></span>'
    return frame(f'<span style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 12px 0 20px">{orb}<b style="{TIGHT}; font-weight: 500; font-size: 20px; letter-spacing: -0.02em">You’re talking to Vegham</b><span style="font-size: 13px; color: #8A8A8A">0:31 · in your browser</span></span>'
                 + chk('Ask a price', '“How much is a first visit?”') + chk('Switch language', '“Hindi mein baat karein?”') + chk('Book a time', '“Can I come Saturday at 11?”', False))


def s_live():
    opt = lambda t, d, on=False: f'<span style="display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 16px; border: 1px solid #ECECEF; background: {"#F7F7F8" if on else "#FFFFFF"}"><span style="width: 16px; height: 16px; flex: none; margin-top: 2px; border-radius: 50%; border: {"5px solid " + G if on else "1px solid #C9C9D1"}; box-sizing: border-box"></span><span><b style="display: block; font-weight: 600">{t}</b><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></span></span>'
    ch = lambda k, n, s, on: f'<span style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid #F0F0F3">{tile(k, 36)}<span style="flex: 1">{n}</span><span style="font-size: 12.5px; color: {GT if on else "#6B6B6B"}; font-weight: {500 if on else 400}">{s}</span></span>'
    return frame('<span style="display: flex; flex-direction: column; gap: 8px">' + opt('When I miss a call', 'Rings you first. Vegham picks up after 4 rings.', True) + opt('Every call', 'Vegham answers straight away.') + opt('Only when I’m closed', 'Outside your opening hours.') + '</span>'
                 + '<span style="display: flex; flex-direction: column; margin-top: 16px">' + ch('phone', 'Phone number', 'Connected', 1) + ch('wa', 'WhatsApp', 'Connected', 1) + ch('link', 'Your link', 'Ready to share', 1) + ch('ig', 'Instagram', 'Connect', 0) + '</span>')


def step(n, a, b, text, items, vis, flip, bg):
    return row(f'Step {n} of 4', a, b, text, items, vis, flip, bg)


def howitworks():
    after = [(L.I_MIC, 'It answers', 'Every call and message gets a reply in seconds, in the customer’s language.'), (L.I_MEM, 'It remembers', 'Each conversation adds to what it knows about that person, for next time.'), (L.I_CHART, 'You see everything', 'Summaries, hand-overs and follow-ups are waiting for you in one place.')]
    cards = ''.join(f'<div style="padding: 28px; border-radius: 24px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)"><span style="color: #3DD68C">{ic(i, 22)}</span><b style="display: block; margin-top: 28px; {TIGHT}; font-weight: 400; font-size: 24px; letter-spacing: -0.03em">{t}</b><span style="display: block; margin-top: 10px; font-size: 15px; color: #B4B8CC">{d}</span></div>' for i, t, d in after)
    live = (f'<section style="padding: 0 16px 112px; background: #FFFFFF"><div style="position: relative; overflow: hidden; max-width: 1408px; margin: 0 auto; border-radius: 32px; background: #12141F; color: #FFFFFF">{aurora(.7)}<div class="vg-pad" style="position: relative; max-width: 1200px; margin: 0 auto; padding: 104px 32px; box-sizing: border-box">'
            f'{eyebrow("Once you are live", True)}{h2("From then on,", "it runs itself.", True)}<div class="vg-g3" style="margin-top: 56px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">{cards}</div></div></div></section>')
    qs = [('How long does set-up take?', 'Most people finish in about ten minutes. Connecting WhatsApp or a phone number can take a little longer, depending on your provider.', True),
          ('Do I need a new phone number?', 'No. You can forward calls from the number customers already know, or share the link and use no number at all.', False),
          ('Can I change things after going live?', 'Yes. The voice, languages, what it knows and when it hands over can all be changed at any time.', False)]
    return (page_hero('How it works', 'Live in minutes,', 'not weeks.', 'Four short steps: teach it your business, pick a voice, make a test call and connect your channels.', hero_btns())
            + step(1, 'Tell it about', 'your business.', 'Paste your website or type a few lines. Vegham reads it and learns your hours, prices and the questions people ask.', ['No website? Describe your business instead', 'Review everything it learned before it goes live', 'Fix anything in one click'], s_site(), False, '#FFFFFF')
            + step(2, 'Pick a voice', 'and languages.', 'Press play to hear each voice say your own greeting, then choose the languages your customers speak.', ['Four voices to choose from', 'Switches language when a caller does', 'Change it whenever you like'], s_voice(), True, '#F7F7F8')
            + step(3, 'Make a', 'test call.', 'Talk to it yourself before any customer does. Ask a price, switch language, try to book. Call twice and it will remember you.', ['Test in your browser or from your phone', 'See what it got right', 'Teach it anything it missed'], s_test(), False, '#FFFFFF')
            + step(4, 'Connect and', 'go live.', 'Choose when Vegham should pick up, then connect the channels you use. You can start with one and add more later.', ['Forward your existing number', 'Add WhatsApp, Instagram, Messenger or Telegram', 'Share one link for voice and chat anywhere'], s_live(), True, '#F7F7F8')
            + '<div style="padding: 112px 0 0; background: #FFFFFF"></div>' + live + faq_block(qs) + L.cta())


def faq_block(qs, title=('Good to', 'know')):
    items = ''.join(f'<details{" open" if o else ""} style="border-top: 1px solid #E8E8EC; padding: 22px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 20px; cursor: pointer; list-style: none; {TIGHT}; font-size: 20px; letter-spacing: -0.02em">{q}<span aria-hidden="true" style="flex: none; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #E2E2E6; display: inline-flex; align-items: center; justify-content: center; color: #5C5C5C">+</span></summary><p style="margin: 12px 0 0; max-width: 620px; font-size: 16px; color: #5C5C5C">{a}</p></details>' for q, a, o in qs)
    return f'<section style="background: #FFFFFF"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 0 32px 112px; display: flex; flex-wrap: wrap; gap: 40px 72px"><div style="flex: 1 1 300px">{h2(title[0], title[1], size=44)}<p style="margin: 20px 0 0; font-size: 15.5px; color: #5C5C5C">Something else? <a href="Contact.dc.html" style="color: #141414">Talk to us</a>.</p></div><div style="flex: 2 1 560px; min-width: 0; border-bottom: 1px solid #E8E8EC">{items}</div></div></section>'


# ---------- PRICING ----------
def plan(n, p, d, pts, dark=False, cta_text='Start free'):
    fg, mut, bd = ('#FFFFFF', '#C3C6DA', 'transparent') if dark else ('#141414', '#5C5C5C', '#ECECEF')
    li = ''.join(f'<span style="display: flex; gap: 10px; font-size: 14.5px; color: {mut}"><span style="flex: none; margin-top: 2px; color: {"#3DD68C" if dark else G}">{ic(L.I_CHECK, 15, "currentColor", 2.2)}</span>{t}</span>' for t in pts)
    badge = '<span style="padding: 3px 10px; border-radius: 999px; background: rgba(255,255,255,.12); font-size: 12px">Most chosen</span>' if dark else ''
    btn = f'<a href="{"BookDemo.dc.html" if cta_text != "Start free" else "Signup.dc.html"}" style="margin-top: 24px; display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 999px; background: {"#FFFFFF" if dark else "#16182A"}; color: {"#12141F" if dark else "#FFFFFF"}; text-decoration: none; font-weight: 500">{cta_text}</a>'
    return (f'<div style="padding: 32px; border-radius: 24px; background: {"#16182A" if dark else "#FFFFFF"}; border: 1px solid {bd}; color: {fg}; text-align: left"><span style="display: flex; justify-content: space-between; align-items: center; font-size: 17px; font-weight: 500">{n}{badge}</span>'
            f'<span style="display: block; margin-top: 20px; {TIGHT}; font-size: 46px; letter-spacing: -0.04em; line-height: 1.1">{p}<span style="font-family: Inter, sans-serif; font-size: 14px; letter-spacing: 0; color: {mut}"> / month</span></span><span style="display: block; margin-top: 8px; font-size: 15px; color: {mut}">{d}</span>{btn}'
            f'<span style="display: flex; flex-direction: column; gap: 11px; margin-top: 24px; padding-top: 24px; border-top: 1px solid {"rgba(255,255,255,.12)" if dark else "#F0F0F3"}">{li}</span></div>')


def table():
    Y = f'<span style="color: {G}">{ic(L.I_CHECK, 17, "currentColor", 2.2)}</span>'
    N = '<span style="color: #C9C9D1">–</span>'
    groups = [
        ('Channels', [('WhatsApp', Y, Y, Y), ('Instagram and Messenger', Y, Y, Y), ('Telegram', Y, Y, Y), ('Link and website chat', Y, Y, Y)]),
        ('Voice', [('Phone calls', N, Y, Y), ('Voice on your link', N, Y, Y), ('Voice notes on WhatsApp and Telegram', Y, Y, Y), ('Choice of voices', N, Y, Y)]),
        ('Memory and languages', [('Remembers every person', Y, Y, Y), ('One person across channels', Y, Y, Y), ('Keep memory for', '6 months', '12 months', 'Up to 2 years'), ('Languages', '2', 'All', 'All')]),
        ('Working with you', [('Hand-over with summary', Y, Y, Y), ('Follow-ups', N, Y, Y), ('Insights', 'Basics', 'Full', 'Full'), ('Team seats', '1', '3', '10 or more'), ('Phone numbers', N, '1', '3 or more'), ('Support', 'Email', 'Email and chat', 'Priority')]),
    ]
    cell = lambda v, head=False: f'<td style="padding: 14px 16px; text-align: center; font-size: 14.5px; color: #3D3D3D; border-top: 1px solid #F0F0F3">{v}</td>'
    out = f'<tr><th style="padding: 0 16px 18px 0; text-align: left; font-weight: 400; font-size: 14px; color: #6B6B6B">Compare plans</th>' + ''.join(f'<th style="padding: 0 16px 18px; width: 18%; {TIGHT}; font-weight: 500; font-size: 18px; letter-spacing: -0.02em">{n}</th>' for n in ['Starter', 'Growth', 'Pro']) + '</tr>'
    for g, rows in groups:
        out += f'<tr><td colspan="4" style="padding: 28px 0 10px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6B6B">{g}</td></tr>'
        for r in rows:
            out += f'<tr><td style="padding: 14px 16px 14px 0; font-size: 15px; border-top: 1px solid #F0F0F3">{r[0]}</td>{cell(r[1])}{cell(r[2])}{cell(r[3])}</tr>'
    return f'<section style="background: #FFFFFF"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 104px 32px">{eyebrow("Compare")}{h2("Everything,", "side by side.", size=44)}<div style="margin-top: 48px; overflow-x: auto"><table style="width: 100%; min-width: 640px; border-collapse: collapse">{out}</table></div></div></section>'


def pricing():
    cards = (plan('Starter', '₹2,999', 'Chat on your channels, with memory', ['WhatsApp, Instagram, Messenger and Telegram', 'A link for your website', 'Remembers every person', 'Hand-over to your team', '1 team seat'])
             + plan('Growth', '₹7,999', 'Adds the voice agent on calls', ['Everything in Starter', 'Phone calls and voice on the link', 'Choice of voices, all languages', 'Follow-ups and full insights', '3 team seats'], True)
             + plan('Pro', 'from ₹19,999', 'For larger teams and more numbers', ['Everything in Growth', 'More phone numbers', '10 or more team seats', 'Memory kept up to 2 years', 'Priority support'], cta_text='Talk to us'))
    plans = f'<section style="background: #FFFFFF"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 72px 32px 40px"><div class="vg-g3" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: start">{cards}</div><p style="margin: 22px 0 0; text-align: center; font-size: 14px; color: #6B6B6B">30 days free on any plan · Prices exclude taxes · Cancel any time</p></div></section>'
    notes = [(L.I_CLOCK, 'Free for 30 days', 'Try any plan in full. No charge until the 30 days are over, and you can cancel before then.'),
             (L.I_PHONE, 'Call and WhatsApp charges at cost', 'Phone minutes and WhatsApp’s own message fees are passed on with no mark-up, and shown separately on your bill.'),
             (L.I_SHIELD, 'Pay by card', 'Payments are handled by Stripe. We never see or store your card number.')]
    cols = ''.join(f'<div style="padding: 32px 0 0; border-top: 1px solid #E2E2E6"><span style="color: {G}">{ic(i, 22)}</span><b style="display: block; margin-top: 18px; {TIGHT}; font-weight: 500; font-size: 22px; letter-spacing: -0.025em">{t}</b><span style="display: block; margin-top: 8px; font-size: 15.5px; color: #5C5C5C">{d}</span></div>' for i, t, d in notes)
    fine = f'<section style="background: #F7F7F8"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 104px 32px">{eyebrow("How billing works")}{h2("No surprises", "on your bill.", size=44)}<div class="vg-g3" style="margin-top: 56px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px">{cols}</div></div></section>'
    qs = [('What happens after the 30 free days?', 'You choose a plan and add a card. If you do nothing, your agent pauses and nothing is charged.', True),
          ('Can I change plan later?', 'Yes, at any time. Moving up takes effect straight away; moving down takes effect from your next bill.', False),
          ('What are the extra charges?', 'Only what the phone company and WhatsApp charge for calls and messages. We pass those on at cost and show them separately.', False),
          ('Is memory included in every plan?', 'Yes. Remembering people is the heart of Vegham, so it is in every plan. Plans differ in how long memory is kept.', False)]
    return (page_hero('Pricing', 'Simple pricing.', 'Start free.', 'Every plan includes long memory. Pick the channels and voice you need now, and change plan whenever you like.')
            + plans + table() + fine + '<div style="padding: 112px 0 0; background: #FFFFFF"></div>' + faq_block(qs, ('Pricing', 'questions')) + L.cta())


def build(name, title, body, height):
    c = open(os.path.join(P, 'Contact.dc.html')).read()
    land = open(os.path.join(P, 'LandingV2.dc.html')).read()
    hs = c.index('<section style="background: linear-gradient(180deg, #F7F7F8')
    fe = c.index('</footer>') + len('</footer>')
    foot = land[land.index('<footer style="border-top: 1px solid #EDEDF0'):land.index('</footer>') + len('</footer>')]
    head = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', c[:hs], count=1)
    if '.vg-g3' not in head:
        head = head.replace('</style>', L.RESPONSIVE + '</style>', 1)
    body = re.sub(r'<div style="([^"]*grid-template-columns: repeat\((3|4), minmax\(0, 1fr\)\)[^"]*)"', r'<div class="vg-g\2" style="\1"', body)
    tail = re.sub(r'"height":\d+', f'"height":{height}', c[fe:])
    open(os.path.join(P, name + '.dc.html'), 'w').write(head + body + '\n  ' + foot + tail)


if __name__ == '__main__':
    build('Product', 'Vegham product', product(), 8600)
    build('HowItWorks', 'How Vegham works', howitworks(), 6200)
    build('Pricing', 'Vegham pricing', pricing(), 5200)
    print('ok')
