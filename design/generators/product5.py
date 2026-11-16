"""Product page v5: a tour of the real app, so it no longer repeats the landing page.

The landing page tells the story with illustrations. The product page shows the product:
- Hero: the app's Home screen in a browser frame
- Long memory: how a note gets written (from product4)
- The tour: a sticky index on the left, and one real app screen per capability on the right;
  the index item for the screen in view lights up
- Channels as a table: chat, voice and how you connect each one
- A closing banner with its own wording
"""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import product4 as P4  # noqa: F401  (sets up land3/land4 patches and the product memory section)
import land3 as L
import site3 as S
from land3 import ic, eyebrow, h2, lead, tile, TIGHT, G, GT, BTN_W, BTN_G, BTN_D, BTN_L

TOUR = [
    ('voice', 'voice', 'Voice', 'Pick how it sounds', 'Choose a voice, hear it say your own greeting, and set how it opens a call. It answers in under a second and can be interrupted.', ['Four voices to choose from', 'Your greeting for new and returning callers', 'Changes go live straight away']),
    ('languages', 'languages', 'Languages', 'Choose the languages it speaks', 'Pick the languages your customers use. It answers in the one they start in, switches when they do, and remembers each person’s language.', ['Answers in the caller’s language', 'Switches mid-call when asked', 'See what languages callers spoke']),
    ('person', 'people', 'People', 'One page for every person', 'Everything Vegham knows about someone, in one place: what it remembers, where things stand and every conversation, across calls and chats.', ['Edit or remove any memory', 'See every call and chat together', 'Forget a person in one click']),
    ('channels', 'channels', 'Channels', 'Connect where customers are', 'Your phone number, WhatsApp, Instagram, Messenger, Telegram and a link for your website. Same agent, same memory, on all of them.', ['Connect each one in about two minutes', 'Share a link or QR code that works anywhere', 'Calls and WhatsApp join up by number']),
    ('handover', 'hand-over', 'Hand-over', 'Step in when it matters', 'When a conversation needs a person, Vegham hands it to you with a summary and a suggested reply, and pauses while you write.', ['You set the moments it must hand over', 'A summary and transcript every time', 'Reply, or let Vegham continue']),
    ('followups', 'follow-ups', 'Follow-ups', 'Nobody falls through the cracks', 'Everyone who said “I’ll think about it” is on one list, with the message Vegham will send and when.', ['Edit, skip or send now', 'Only people who agreed to hear from you', 'Unhappy customers always come to you']),
    ('knowledge', 'knowledge', 'Knowledge', 'Teach it once', 'Paste your website, upload a price list or type an answer. See what it can answer, and fill the gaps from real questions callers asked.', ['Learns from your site, files and notes', 'Rules it always follows, and never breaks', 'Shows what it could not answer']),
    ('insights', 'insights', 'Insights', 'See what happened', 'Calls and chats answered, missed calls saved, when people reach you, why they called and which calls are worth a listen.', ['Daily trends and busiest hours', 'Hand-over reasons and memory at work', 'Calls worth a listen']),
]


def shot(name, alt):
    return ('<div class="vg-shot" style="border-radius: 18px; background: #FFFFFF; border: 1px solid #E6E6EA; box-shadow: 0 30px 70px -40px rgba(22,24,42,.45); overflow: hidden">'
            '<div aria-hidden="true" style="display: flex; align-items: center; gap: 6px; height: 34px; padding: 0 14px; border-bottom: 1px solid #EFEFF2; background: #FAFAFB">'
            '<span style="width: 9px; height: 9px; border-radius: 50%%; background: #E2E2E6"></span><span style="width: 9px; height: 9px; border-radius: 50%%; background: #E2E2E6"></span><span style="width: 9px; height: 9px; border-radius: 50%%; background: #E2E2E6"></span>'
            '<span style="margin-left: 12px; font-size: 11.5px; color: #8A8A8A">app.vegham.ai</span></div>'
            '<img src="shots/%s.webp" alt="%s" width="1728" height="1080" loading="lazy" style="display: block; width: 100%%; height: auto"></div>') % (name, alt)


def hero():
    h = S.page_hero('Product', 'Everything your agent does,', 'in one place.',
                    'A tour of the Vegham app: the voice it speaks in, the people it remembers, the channels it answers on and what it tells you afterwards.', S.hero_btns())
    hero_open = '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    h = h.replace(hero_open, hero_open + '<div class="vg-heroout">', 1).replace('</div></section>', '</div></div></section>', 1)
    frame = ('<section style="background: #FFFFFF"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 0 32px 104px">'
             '<div class="vg-mockin" style="margin-top: -24px">%s</div><div style="padding: 10px 4px 0; text-align: right">%s</div></div></section>') % (shot('home', 'The Vegham app Home screen with calls answered, people who need you and who was recognised today'), L.sample())
    return h + frame


def tour():
    names = ', '.join('--vg-t%d' % i for i in range(len(TOUR)))
    nav = ''.join(('<a href="#%s" class="vg-tnav" style="display: flex; align-items: center; gap: 12px; padding: 10px 0 10px 16px; border-left: 2px solid #E6E6EA; color: #141414; text-decoration: none; font-size: 15px; animation-timeline: --vg-t%d">'
                   '<span style="font-size: 12px; color: #8A8A8A; font-variant-numeric: tabular-nums">%02d</span>%s</a>') % (anchor, i, i + 1, label) for i, (_, anchor, label, *_r) in enumerate(TOUR))
    left = ('<div class="vg-tside" style="position: sticky; top: 120px; align-self: start">%s<nav aria-label="Product tour" style="margin-top: 24px; display: flex; flex-direction: column">%s</nav></div>') % (eyebrow('The tour'), nav)

    def panel(i, name, anchor, label, title, text, pts):
        li = ''.join('<span style="display: flex; gap: 10px; font-size: 15px; color: #3D3D3D"><span style="flex: none; margin-top: 3px; color: %s">%s</span>%s</span>' % (G, ic(L.I_CHECK, 16, 'currentColor', 2.2), t) for t in pts)
        return ('<div id="%s" class="vg-tpanel" style="view-timeline-name: --vg-t%d; padding: 56px 0; scroll-margin-top: 96px">'
                '<span class="vg-rv" style="display: inline-block; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: %s">%02d · %s</span>'
                '<h3 class="vg-rv" style="margin: 12px 0 0; %s; font-weight: 400; font-size: 36px; line-height: 1.1; letter-spacing: -0.035em">%s</h3>'
                '<p class="vg-rv" style="margin: 14px 0 0; max-width: 620px; font-size: 17px; color: #5C5C5C">%s</p>'
                '<div class="vg-rv" style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px 28px">%s</div>'
                '<div class="vg-zoomc" style="margin-top: 32px">%s</div></div>') % (anchor, i, GT, i + 1, label, TIGHT, title, text, li, shot(name, 'The %s screen in the Vegham app' % label.lower()))
    right = '<div style="min-width: 0">' + ''.join(panel(i, *t) for i, t in enumerate(TOUR)) + '<div style="padding-top: 8px; text-align: right">%s</div></div>' % L.sample()
    return ('<section style="background: #FFFFFF; timeline-scope: %s"><div class="vg-pad vg-tour" style="max-width: 1200px; margin: 0 auto; padding: 72px 32px 88px; display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 56px">%s%s</div></section>') % (names, left, right)


def channels_table():
    Y = '<span style="color: %s">%s</span>' % (G, ic(L.I_CHECK, 17, 'currentColor', 2.2))
    N = '<span style="color: #C9C9D1">–</span>'
    rows = [('phone', 'Phone number', N, 'Yes', 'Forward your existing number, or get a new one'),
            ('wa', 'WhatsApp', Y, 'Voice notes', 'Log in with Facebook and pick your number'),
            ('ig', 'Instagram', Y, N, 'Log in with your business profile'),
            ('ms', 'Messenger', Y, N, 'Log in with your Facebook page'),
            ('tg', 'Telegram', Y, 'Voice notes', 'Create a Telegram assistant and paste its token'),
            ('link', 'Link or website', Y, 'Yes', 'Copy the link, print the QR code or add a button to your site')]
    th = lambda t, w='': '<th style="padding: 0 16px 16px 0; text-align: left; font-weight: 400; font-size: 13px; color: #6B6B6B; %s">%s</th>' % (w, t)
    td = lambda v, extra='': '<td style="padding: 14px 16px 14px 0; border-top: 1px solid #ECECEF; font-size: 15px; color: #2B2B2B; vertical-align: middle; %s">%s</td>' % (extra, v)
    body = ''.join('<tr class="vg-rv">%s%s%s%s</tr>' % (td('<span style="display: inline-flex; align-items: center; gap: 12px">%s<b style="font-weight: 500">%s</b></span>' % (tile(k, 38), n)), td(c), td(v), td(how, 'color: #5C5C5C')) for k, n, c, v, how in rows)
    table = '<table style="width: 100%%; min-width: 720px; border-collapse: collapse"><thead><tr>%s%s%s%s</tr></thead><tbody>%s</tbody></table>' % (th('Channel', 'width: 28%'), th('Chat', 'width: 12%'), th('Voice', 'width: 14%'), th('How you connect'), body)
    return ('<section id="every-channel" style="background: #F7F7F8"><div class="vg-pad" style="max-width: 1200px; margin: 0 auto; padding: 104px 32px">%s%s%s'
            '<div style="margin-top: 40px; overflow-x: auto">%s</div><p style="margin: 18px 0 0; font-size: 14px; color: #6B6B6B">Phone numbers depend on the country. The link and the chat channels work anywhere.</p></div></section>') % (
        eyebrow('Channels'), h2('Every channel,', 'at a glance.', size=44), lead('What each channel can do, and what you need to connect it.', mw=520), table)


def closing():
    return ('<section style="padding: 0 32px 112px; background: #FFFFFF"><div class="vg-zoomc" style="position: relative; overflow: hidden; max-width: 1136px; margin: 0 auto; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 96px 40px; text-align: center">%s'
            '<h2 style="position: relative; margin: 0; %s; font-weight: 400; font-size: 52px; line-height: 1.05; letter-spacing: -0.045em">Hear it for yourself.</h2>'
            '<p style="position: relative; margin: 16px 0 0; font-size: 18px; color: #C3C6DA">Set it up in minutes, then call it from your own phone.</p>'
            '<div style="position: relative; margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="Signup.dc.html" style="%s">Start free</a><a href="BookDemo.dc.html" style="%s">Book a demo</a></div></div></section>') % (L.aurora(1), TIGHT, BTN_W, BTN_G)


L.RESPONSIVE += """
@keyframes vg-tnavon{0%,100%{color:#8A8A8A;border-left-color:#E6E6EA}22%,78%{color:#141414;border-left-color:#10B981}}
@supports (animation-timeline: view()){
@media (prefers-reduced-motion: no-preference){
  .vg-tnav{animation-name:vg-tnavon;animation-duration:1ms;animation-timing-function:linear;animation-fill-mode:both;animation-range:cover 0% cover 100%}
}
}
@media (max-width: 900px){.vg-tour{grid-template-columns:minmax(0,1fr)!important}.vg-tside{display:none}}
"""


def product():
    return hero() + P4.product_memory().replace('<section', '<section id="memory"', 1) + tour() + channels_table() + closing()


if __name__ == '__main__':
    S.build('Product', 'Vegham product', product(), 9000)
    P4.unblur(os.path.join(L.P, 'Product.dc.html'))
    print('product v5 ok')
