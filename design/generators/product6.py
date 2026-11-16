"""Product page v6: no app screenshots. Drawn illustrations instead, in a different visual language from the landing page.

- Hero: big statement and a row of capability chips that jump to each chapter
- One call, start to finish: a pinned line diagram; a dot travels along seven steps of a call and lights each one
- Chapters with a sticky index; each has its own drawn illustration that builds as it scrolls into view
- How it compares: voicemail, a phone menu, a simple chatbot and Vegham
- Closing banner
"""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import product4 as P4  # noqa: F401  (land3/land4 patches and the product memory section)
import product5 as P5  # noqa: F401  (tour index CSS)
import land3 as L
import site3 as S
from land3 import ic, eyebrow, h2, lead, tile, TIGHT, G, GT

INK = '#16182A'
CK = lambda s=15: ic(L.I_CHECK, s, 'currentColor', 2.3)


def st(i, base=12, step=5):
    return 'animation-range: entry %d%% cover %d%%' % (base + i * step, base + 22 + i * step)


def slide(i, style, inner, tag='div'):
    return '<%s class="vg-slide" style="%s; %s">%s</%s>' % (tag, style, st(i), inner, tag)


def pop(i, style, inner, tag='span'):
    return '<%s class="vg-pop" style="%s; %s">%s</%s>' % (tag, style, st(i), inner, tag)


def stage(inner, pad='28px'):
    return ('<div class="vg-zoomc" style="margin-top: 32px; border-radius: 24px; background: linear-gradient(180deg, #F7F7F8 0%%, #F0F1F3 100%%); padding: %s; overflow: hidden">%s'
            '<div style="margin-top: 14px; text-align: right">%s</div></div>') % (pad, inner, L.sample())


CARD = 'background: #FFFFFF; border: 1px solid #E8E8EC; border-radius: 16px'


# ---------------------------------------------------------------- illustrations
def ill_voice():
    voices = [('Warm', 'Calm, friendly', True), ('Easy', 'Relaxed', False), ('Bright', 'Upbeat', False), ('Steady', 'Clear, formal', False)]
    tiles = ''.join(pop(i, 'display: flex; flex-direction: column; gap: 10px; padding: 16px; %s; %s' % (CARD, 'box-shadow: 0 0 0 2px rgba(16,185,129,.55)' if on else ''),
                        '<span style="display: flex; justify-content: space-between; align-items: center"><span style="width: 34px; height: 34px; border-radius: 50%%; background: %s; color: %s; display: inline-flex; align-items: center; justify-content: center">%s</span>%s</span>'
                        '<span><b style="display: block; font-weight: 600; font-size: 14.5px">%s</b><span style="font-size: 12.5px; color: #8A8A8A">%s</span></span>%s'
                        % (G if on else '#F1F1F4', '#FFFFFF' if on else INK, ic(L.I_PLAY, 13), '<span style="color: %s">%s</span>' % (G, CK()) if on else '', n, d, L.wave(16, G if on else '#C9C9D1', 18, on)), 'div')
                    for i, (n, d, on) in enumerate(voices))
    greet = slide(4, 'margin-top: 14px; display: flex; align-items: center; gap: 12px; padding: 14px 16px; %s' % CARD,
                  '<span style="font-size: 12px; color: #8A8A8A; width: 64px">Greeting</span><span style="flex: 1; font-size: 14.5px">“Namaste, Nila &amp; Co. How can I help?”</span><span style="font-size: 12px; color: %s; font-weight: 500">Heard in your voice</span>' % GT)
    return stage('<div class="vg-g4" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px">%s</div>%s' % (tiles, greet))


def ill_languages():
    hellos = [('Hello', 'English'), ('नमस्ते', 'Hindi'), ('வணக்கம்', 'Tamil'), ('నమస్కారం', 'Telugu'), ('Hola', 'Spanish'), ('مرحبا', 'Arabic'), ('Bonjour', 'French'), ('Olá', 'Portuguese')]
    grid = ''.join(pop(i, 'display: flex; flex-direction: column; gap: 2px; padding: 14px 16px; %s; %s' % (CARD, 'box-shadow: 0 0 0 2px rgba(16,185,129,.55)' if i == 1 else ''),
                       '<span style="%s; font-size: 22px; letter-spacing: -0.02em">%s</span><span style="font-size: 12px; color: #8A8A8A">%s</span>' % (TIGHT, h, l), 'div') for i, (h, l) in enumerate(hellos))
    talk = slide(8, 'margin-top: 14px; padding: 14px 16px; %s; display: flex; flex-direction: column; gap: 8px; font-size: 14px' % CARD,
                 '<span style="align-self: flex-end; background: #F1F1F4; padding: 8px 12px; border-radius: 14px 14px 4px 14px">Hindi mein baat karein?</span>'
                 '<span style="align-self: flex-start; background: %s; color: #FFFFFF; padding: 8px 12px; border-radius: 14px 14px 14px 4px">Bilkul! Bataiye, kaise madad karoon?</span>'
                 '<span style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: %s">%sSwitched to Hindi, and saved for next time</span>' % (INK, GT, ic(L.I_GLOBE, 13)))
    return stage('<div class="vg-g4" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px">%s</div>%s' % (grid, talk))


def ill_people():
    fields = [('Language', 'Hindi and English'), ('Prefers', 'Saturday mornings, details on WhatsApp'), ('Group size', '5 people · was 3 in May'), ('Open loop', 'Closed today · booked Sat 10 AM')]
    rows = ''.join(slide(i + 1, 'display: flex; gap: 14px; padding: 11px 0; border-top: 1px solid #F0F0F3; font-size: 14px',
                         '<span style="width: 96px; flex: none; color: #8A8A8A; font-size: 12.5px">%s</span><span style="flex: 1">%s</span>' % (k, v)) for i, (k, v) in enumerate(fields))
    left = ('<div style="flex: 1 1 300px; min-width: 0; padding: 18px 20px; %s"><span style="display: flex; align-items: center; gap: 12px; padding-bottom: 12px">'
            '<span style="width: 42px; height: 42px; border-radius: 50%%; background: #F1F1F4; display: inline-flex; align-items: center; justify-content: center; %s; font-size: 17px">R</span>'
            '<span><b style="display: block; font-weight: 600">Rohan Mehta</b><span style="font-size: 12.5px; color: #8A8A8A">Known since May · 4 conversations</span></span></span>%s</div>') % (CARD, TIGHT, rows)
    hist = [('phone', 'Today · call 0:41', 'Booked Saturday 10 AM for 5'), ('wa', 'Today · WhatsApp', 'Sent the details and location'), ('wa', '14 May · WhatsApp', 'Sent timings and prices'), ('phone', '14 May · call 1:52', 'Asked about weekend sessions')]
    items = ''.join(slide(i + 3, 'display: flex; align-items: center; gap: 12px; padding: 10px 0', '%s<span style="min-width: 0"><b style="display: block; font-weight: 500; font-size: 13.5px">%s</b><span style="font-size: 12.5px; color: #6B6B6B">%s</span></span>' % (tile(k, 34), w, t)) for i, (k, w, t) in enumerate(hist))
    right = '<div style="flex: 1 1 260px; min-width: 0; padding: 14px 18px; %s"><span style="font-size: 12.5px; color: #8A8A8A">Every conversation, any channel</span>%s</div>' % (CARD, items)
    return stage('<div style="display: flex; flex-wrap: wrap; gap: 12px">%s%s</div>' % (left, right))


def ill_channels():
    rows = [('phone', 'Phone number', 'Voice', True), ('wa', 'WhatsApp', 'Chat · voice notes', True), ('link', 'Your link', 'Voice · chat', True), ('ig', 'Instagram', 'Chat', False), ('ms', 'Messenger', 'Chat', False), ('tg', 'Telegram', 'Chat · voice notes', False)]
    sw = lambda on: '<span style="width: 38px; height: 22px; flex: none; border-radius: 999px; background: %s; position: relative"><span style="position: absolute; top: 3px; %s: 3px; width: 16px; height: 16px; border-radius: 50%%; background: #FFFFFF; box-shadow: 0 1px 2px rgba(0,0,0,.2)"></span></span>' % (G if on else '#D9D9DE', 'right' if on else 'left')
    items = ''.join(slide(i, 'display: flex; align-items: center; gap: 14px; padding: 12px 16px; %s' % CARD,
                          '%s<span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 500; font-size: 14.5px">%s</b><span style="font-size: 12.5px; color: #8A8A8A">%s</span></span><span style="font-size: 12.5px; color: %s; width: 92px; text-align: right">%s</span>%s'
                          % (tile(k, 38), n, caps, GT if on else '#8A8A8A', 'Connected' if on else 'Connect', sw(on))) for i, (k, n, caps, on) in enumerate(rows))
    return stage('<div class="vg-g3" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">%s</div>' % items)


def ill_handover():
    rules = [('Caller asks for a person', True), ('A complaint or a refund', True), ('A price not in your list', True), ('It does not understand twice', False)]
    sw = lambda on: '<span style="width: 34px; height: 20px; flex: none; border-radius: 999px; background: %s; position: relative"><span style="position: absolute; top: 3px; %s: 3px; width: 14px; height: 14px; border-radius: 50%%; background: #FFFFFF"></span></span>' % (G if on else '#D9D9DE', 'right' if on else 'left')
    rl = ''.join(slide(i, 'display: flex; align-items: center; gap: 12px; padding: 11px 0; border-top: 1px solid #F0F0F3; font-size: 14px', '<span style="flex: 1">%s</span>%s' % (t, sw(on))) for i, (t, on) in enumerate(rules))
    left = '<div style="flex: 1 1 280px; min-width: 0; padding: 16px 18px; %s"><b style="font-weight: 600; font-size: 14.5px">Hand over when</b><div style="margin-top: 6px">%s</div></div>' % (CARD, rl)
    alert = pop(5, 'flex: 1 1 280px; min-width: 0; align-self: center; display: block; padding: 18px; border-radius: 18px; background: %s; color: #FFFFFF' % INK,
                '<span style="display: flex; justify-content: space-between; font-size: 12.5px; color: #A9AECB"><span>Needs you · WhatsApp</span><span>just now</span></span>'
                '<b style="display: block; margin-top: 8px; font-weight: 500; font-size: 16px">Meera wants a price for 2 people</b>'
                '<span style="display: block; margin-top: 6px; font-size: 13.5px; color: #C3C6DA">Not in your list. Vegham told her someone will reply in a few minutes.</span>'
                '<span style="display: flex; gap: 8px; margin-top: 14px"><span style="display: inline-flex; align-items: center; height: 32px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; color: %s; font-size: 13px; font-weight: 500">Reply</span>'
                '<span style="display: inline-flex; align-items: center; height: 32px; padding: 0 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.3); font-size: 13px">Let Vegham continue</span></span>' % INK, 'div')
    return stage('<div style="display: flex; flex-wrap: wrap; gap: 14px">%s%s</div>' % (left, alert))


def ill_followups():
    cols = [('Due today', '4', [('Ananya Rao', 'Decide on prices by Monday'), ('P. Iyer', 'Promised a call back')]),
            ('This week', '9', [('Vikram Singh', 'Evening slots now open'), ('Kavya Nair', 'Group of 8, maybe November')]),
            ('Done', '41', [('Sunita Das', 'Came back and booked'), ('Divya Menon', 'Replied, not now')])]
    out, k = [], 0
    for c, n, cards in cols:
        cs = ''
        for who, what in cards:
            cs += slide(k, 'padding: 12px 14px; %s; font-size: 13.5px' % CARD, '<b style="display: block; font-weight: 500">%s</b><span style="color: #6B6B6B">%s</span>' % (who, what)); k += 1
        out.append('<div style="display: flex; flex-direction: column; gap: 8px"><span style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 500">%s<span style="color: #8A8A8A; font-weight: 400">%s</span></span>%s</div>' % (c, n, cs))
    return stage('<div class="vg-g3" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px">%s</div>' % ''.join(out))


def ill_knowledge():
    ring = ('<svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="48" fill="none" stroke="#E6E6EA" stroke-width="10"></circle>'
            '<circle class="vg-ring" cx="60" cy="60" r="48" fill="none" stroke="%s" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="0.92 1" transform="rotate(-90 60 60)" style="%s"></circle></svg>') % (G, st(0, 14))
    left = ('<div style="flex: 0 0 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 20px; %s"><span style="position: relative; display: inline-flex">%s'
            '<span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; %s; font-size: 28px; letter-spacing: -0.03em"><span class="vg-num" role="img" aria-label="92" style="--to: 92"></span>%%</span></span>'
            '<span style="font-size: 13px; color: #6B6B6B; text-align: center">of what callers ask, it can answer</span></div>') % (CARD, ring, TIGHT)
    srcs = [('Your website', '24 pages read'), ('Price list.pdf', 'uploaded 4 Nov'), ('Opening hours', 'updated today')]
    sl = ''.join(slide(i + 1, 'display: flex; align-items: center; gap: 10px; padding: 9px 0; border-top: 1px solid #F0F0F3; font-size: 13.5px', '<span style="color: %s">%s</span><span style="flex: 1">%s</span><span style="color: #8A8A8A">%s</span>' % (G, CK(14), a, b)) for i, (a, b) in enumerate(srcs))
    gaps = ''.join(pop(i + 4, 'display: inline-flex; align-items: center; height: 30px; padding: 0 12px; border-radius: 999px; border: 1px dashed #C9C9D1; font-size: 13px; color: #3D3D3D', '+ %s' % g) for i, g in enumerate(['Parking for vans', 'Lift access', 'Student discount']))
    right = ('<div style="flex: 1 1 300px; min-width: 0; padding: 14px 18px; %s"><span style="font-size: 12.5px; color: #8A8A8A">Where it learns from</span>%s'
             '<span style="display: block; margin-top: 14px; font-size: 12.5px; color: #8A8A8A">Asked, but it could not answer</span><div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px">%s</div></div>') % (CARD, sl, gaps)
    return stage('<div style="display: flex; flex-wrap: wrap; gap: 12px">%s%s</div>' % (left, right))


def ill_insights():
    kpis = [('486', 'calls answered', ''), ('112', 'missed calls saved', ''), ('86', 'handled without you', ' vg-pct')]
    kh = ''.join(pop(i, 'display: block; padding: 14px 16px; %s' % CARD,
                     '<span style="display: block; %s; font-size: 30px; letter-spacing: -0.03em; line-height: 1.1"><span class="vg-num%s" role="img" aria-label="%s" style="--to: %s"></span></span><span style="font-size: 12.5px; color: #6B6B6B">%s</span>' % (TIGHT, pct, v, v, l), 'div') for i, (v, l, pct) in enumerate(kpis))
    vals = [32, 44, 38, 52, 47, 60, 72, 58, 66, 80, 94, 70, 62, 76]
    bars = ''.join('<span class="vg-growbar" style="flex: 1; height: %d%%; border-radius: 5px 5px 2px 2px; background: %s; transform-origin: bottom; animation-range: entry %d%% cover %d%%"></span>' % (v, G if i == 10 else '#DCDDE3', 10 + i * 2, 34 + i * 2) for i, v in enumerate(vals))
    chart = ('<div style="margin-top: 12px; padding: 16px 18px; %s"><span style="display: flex; justify-content: space-between; font-size: 12.5px; color: #8A8A8A"><span>Calls and chats per day</span><span>Busiest: Saturday, 10 AM</span></span>'
             '<div style="display: flex; align-items: flex-end; gap: 6px; height: 120px; margin-top: 14px">%s</div></div>') % (CARD, bars)
    return stage('<div class="vg-g3" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">%s</div>%s' % (kh, chart))


CHAPTERS = [
    ('voice', 'Voice', 'A voice that sounds like a person', 'Pick from four voices and hear each one say your own greeting. It answers in under a second, pauses naturally and lets people interrupt.', ill_voice),
    ('languages', 'Languages', 'Speaks the way your customers do', 'It answers in the language the caller starts in, switches the moment they ask, and remembers each person’s language for next time.', ill_languages),
    ('people', 'People', 'Everyone it has talked to, in one place', 'What it remembers about each person, where things stand, and every call and chat, whatever the channel.', ill_people),
    ('channels', 'Channels', 'Switch on the channels you use', 'Phone, WhatsApp and a link for your website to start with; Instagram, Messenger and Telegram when you want them. Each takes about two minutes.', ill_channels),
    ('hand-over', 'Hand-over', 'Knows when you should take over', 'You choose the moments it must hand over. It tells the customer what is happening, then passes you a summary and a suggested reply.', ill_handover),
    ('follow-ups', 'Follow-ups', 'Gets back to people, so you don’t have to', 'Everyone who said “I’ll think about it” goes on a list, with the message it will send and when. You can edit, skip or send now.', ill_followups),
    ('knowledge', 'Knowledge', 'Only says what is true about your business', 'It learns from your website, files and notes, shows how much it can answer, and lists the questions it could not, so you can fill the gaps.', ill_knowledge),
    ('insights', 'Insights', 'See what happened while you were busy', 'Calls and chats answered, missed calls saved, your busiest hours and how often it needed you.', ill_insights),
]



# ---------------------------------------------------------------- ONE CALL, START TO FINISH (pinned)
FLOW = [
    ('Rings', 'A customer calls your number.', '+91 98•• ••21 is calling'),
    ('Picks up', 'In under a second, in a natural voice.', '“Hi, thanks for calling Nila &amp; Co.”'),
    ('Knows who it is', 'Recognises the number and recalls the person.', 'Rohan Mehta · last called 6 months ago'),
    ('Answers', 'From your prices, hours and notes.', '“Saturday 10 AM is free. Shall I hold it?”'),
    ('Hands over if needed', 'Brings you in when a person should decide.', 'Not needed this time'),
    ('Writes a summary', 'What was asked, said and agreed.', 'Booked Sat 10 AM for 5 · details sent on WhatsApp'),
    ('Plans the follow-up', 'Anything it promised goes on your list.', 'Reminder on Friday evening'),
]


def flow():
    n = len(FLOW)
    pos = lambda i: 6 + i * 84 // (n - 1)
    crng = lambda a, b: 'animation-range: contain %d%% contain %d%%' % (max(0, a), b)
    cols = ''.join(('<div class="vg-fstep" style="position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; %s">'
                    '<span class="vg-fnode" style="position: relative; z-index: 1; width: 28px; height: 28px; border-radius: 50%%; background: %s; border: 2px solid %s; box-sizing: border-box; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; %s">%s</span>'
                    '<b style="margin-top: 6px; %s; font-weight: 500; font-size: 18px; line-height: 1.2; letter-spacing: -0.02em">%s</b>'
                    '<span style="font-size: 14px; color: #5C5C5C; line-height: 1.45">%s</span>'
                    '<span style="font-size: 13px; color: %s; line-height: 1.45; padding: 8px 10px; border-radius: 10px; background: #F7F7F8">%s</span></div>')
                   % (crng(pos(i) - 4, pos(i) + 2), G, G, crng(pos(i) - 3, pos(i) + 1), CK(13), TIGHT, t, d, GT, ex) for i, (t, d, ex) in enumerate(FLOW))
    line = ('<div aria-hidden="true" class="vg-fline" style="position: absolute; top: 13px; left: 14px; width: calc((100%% - %dpx) * %d / %d + %dpx); height: 2px; background: #E6E6EA">'
            '<span class="vg-ffill" style="position: absolute; inset: 0; background: %s; transform-origin: left; %s"></span>'
            '<span class="vg-fdot" style="position: absolute; top: -6px; left: 100%%; width: 14px; height: 14px; margin-left: -7px; border-radius: 50%%; background: %s; box-shadow: 0 0 0 6px rgba(16,185,129,.18); %s"></span></div>') % (
        16 * (n - 1), n - 1, n, 16 * (n - 1), G, crng(6, 90), G, crng(6, 90))
    grid = '<div class="vg-fgrid" style="position: relative; margin-top: 56px; display: grid; grid-template-columns: repeat(%d, minmax(0, 1fr)); gap: 16px">%s%s</div>' % (n, line, cols)
    head = ('<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px"><div>%s%s</div>%s</div>') % (
        eyebrow('One call, start to finish'), h2('What happens in the minute', 'after your phone rings.', size=48),
        lead('Every call goes through the same seven steps, whether it is a new customer or someone you have known for years.', mw=420))
    return ('<section id="one-call" class="vg-pinwrap vg-pin-flow" style="background: #FFFFFF; view-timeline-name: --vg-flow"><div class="vg-sticky">'
            '<div class="vg-pinpad" style="width: 100%%; max-width: 1200px; margin: 0 auto; padding: 96px 32px; box-sizing: border-box">%s%s'
            '<div style="margin-top: 18px; text-align: right">%s</div></div></div></section>') % (head, grid, L.sample())


L.RESPONSIVE += """
@keyframes vg-fnode{from{background:#FFFFFF;border-color:#D5D5DB;color:transparent}to{background:#10B981;border-color:#10B981;color:#FFFFFF}}
@keyframes vg-fstep{from{opacity:.3}to{opacity:1}}
@keyframes vg-fdot{from{left:0%}to{left:100%}}
@supports (animation-timeline: view()){
@media (prefers-reduced-motion: no-preference) and (min-width: 1001px) and (min-height: 680px){
  .vg-pin-flow{height:230vh}
  .vg-pin-flow .vg-fstep{animation:vg-fstep linear both;animation-timeline:--vg-flow}
  .vg-pin-flow .vg-fnode{animation:vg-fnode linear both;animation-timeline:--vg-flow}
  .vg-pin-flow .vg-ffill{animation:vg-growx linear both;animation-timeline:--vg-flow}
  .vg-pin-flow .vg-fdot{animation:vg-fdot linear both;animation-timeline:--vg-flow}
}
}
@media (max-width: 1000px){.vg-fgrid{grid-template-columns:repeat(2,minmax(0,1fr))!important;row-gap:28px!important}.vg-fline{display:none}}
@media (max-width: 560px){.vg-fgrid{grid-template-columns:minmax(0,1fr)!important}}
"""


def hero():
    chips = ''.join('<a href="#%s" class="vg-hero" style="animation-delay: %.2fs; display: inline-flex; align-items: center; height: 38px; padding: 0 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E6E6EA; color: #141414; text-decoration: none; font-size: 14.5px">%s</a>'
                    % (a, .45 + i * .04, label) for i, (a, label, *_r) in enumerate(CHAPTERS))
    extra = S.hero_btns() + '<div style="margin: 40px auto 0; max-width: 820px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px">%s</div>' % chips
    h = S.page_hero('Product', 'Built to answer, remember', 'and follow through.',
                    'One AI agent for your calls and messages. Here is everything it does, and everything you can control.', extra)
    hero_open = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    return h.replace(hero_open, hero_open + '<div class="vg-heroout">', 1).replace('</div></section>', '</div></div></section>', 1)


def chapters():
    names = ', '.join('--vg-t%d' % i for i in range(len(CHAPTERS)))
    nav = ''.join(('<a href="#%s" class="vg-tnav" style="display: flex; align-items: center; gap: 12px; padding: 10px 0 10px 16px; border-left: 2px solid #E6E6EA; color: #141414; text-decoration: none; font-size: 15px; animation-timeline: --vg-t%d">'
                   '<span style="font-size: 12px; color: #8A8A8A; font-variant-numeric: tabular-nums">%02d</span>%s</a>') % (a, i, i + 1, label) for i, (a, label, *_r) in enumerate(CHAPTERS))
    left = '<div class="vg-tside" style="position: sticky; top: 120px; align-self: start">%s<nav aria-label="What it does" style="margin-top: 24px; display: flex; flex-direction: column">%s</nav></div>' % (eyebrow('What it does'), nav)
    panels = ''.join(('<div id="%s" class="vg-tpanel" style="view-timeline-name: --vg-t%d; padding: 56px 0; scroll-margin-top: 96px">'
                      '<span class="vg-rv" style="display: inline-block; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: %s">%02d · %s</span>'
                      '<h3 class="vg-rv" style="margin: 12px 0 0; %s; font-weight: 400; font-size: 36px; line-height: 1.1; letter-spacing: -0.035em">%s</h3>'
                      '<p class="vg-rv" style="margin: 14px 0 0; max-width: 640px; font-size: 17px; color: #5C5C5C">%s</p>%s</div>') % (a, i, GT, i + 1, label, TIGHT, title, text, fn())
                     for i, (a, label, title, text, fn) in enumerate(CHAPTERS))
    return ('<section style="background: #FFFFFF; timeline-scope: %s"><div class="vg-pad vg-tour" style="max-width: 1200px; margin: 0 auto; padding: 72px 32px 88px; display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 56px">%s<div style="min-width: 0">%s</div></div></section>') % (names, left, panels)


def compare():
    Y = '<span style="color: %s">%s</span>' % (G, CK(17))
    N = '<span style="color: #C9C9D1">–</span>'
    p = lambda t: '<span style="font-size: 13.5px; color: #6B6B6B">%s</span>' % t
    rows = [('Picks up every call', p('Takes a message'), p('Press 1, press 2'), p('Chat only'), Y),
            ('Talks like a person', N, N, p('Partly'), Y),
            ('Speaks the caller’s language', N, p('A few, by menu'), p('Partly'), Y),
            ('Remembers past conversations', N, N, N, Y),
            ('Calls and chats in one place', N, N, N, Y),
            ('Hands over with a summary', N, p('Transfers the call'), p('Sometimes'), Y),
            ('Follows up later', N, N, N, Y)]
    th = lambda t, hi=False: '<th style="padding: 0 12px 16px; text-align: center; font-weight: %s; font-size: %s; color: %s; width: 16%%">%s</th>' % ('600' if hi else '400', '15px' if hi else '13.5px', '#141414' if hi else '#6B6B6B', t)
    td = lambda v, hi=False: '<td style="padding: 14px 12px; text-align: center; border-top: 1px solid #ECECEF; %s">%s</td>' % ('background: rgba(16,185,129,.06)' if hi else '', v)
    body = ''.join('<tr class="vg-rv"><td style="padding: 14px 12px 14px 0; border-top: 1px solid #ECECEF; font-size: 15px">%s</td>%s%s%s%s</tr>' % (r[0], td(r[1]), td(r[2]), td(r[3]), td(r[4], True)) for r in rows)
    table = ('<table style="width: 100%%; min-width: 760px; border-collapse: collapse"><thead><tr><th style="padding: 0 12px 16px 0; text-align: left; font-weight: 400; font-size: 13.5px; color: #6B6B6B"></th>%s%s%s%s</tr></thead><tbody>%s</tbody></table>'
             % (th('Voicemail'), th('Phone menu'), th('Simple chatbot'), th('Vegham', True), body))
    return ('<section style="background: #F7F7F8"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 104px 32px">%s%s%s<div style="margin-top: 40px; overflow-x: auto">%s</div></div></section>') % (
        eyebrow('How it compares'), h2('More than an answering', 'machine.', size=44), lead('What you usually get when you cannot pick up, and what Vegham does instead.', mw=520), table)


L.RESPONSIVE += """
@keyframes vg-ringdraw{from{stroke-dashoffset:.92}to{stroke-dashoffset:0}}
@supports (animation-timeline: view()){
@media (prefers-reduced-motion: no-preference){
  .vg-ring{animation:vg-ringdraw linear both;animation-timeline:view()}
}
}
"""


def product():
    return (hero() + flow() + chapters() + compare() + P5.closing())


if __name__ == '__main__':
    S.build('Product', 'Vegham product', product(), 9800)
    P4.unblur(os.path.join(L.P, 'Product.dc.html'))
    print('product v6 ok')
