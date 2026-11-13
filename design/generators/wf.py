"""Low-fidelity wireframes: website, auth, onboarding + flow map. Grey boxes, real headings, blue annotations."""
import os, re, sys, json
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3
P = kit3.P

INK, MUT, LINE, FILL, FILL2, ANN = '#2E2E33', '#8C8C94', '#D6D6DC', '#F1F1F4', '#E4E4E9', '#3B6CF6'
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.03em"
CSS = '''<style>
body{margin:0}
.wf{font-family:Inter,system-ui,sans-serif;color:#2E2E33;background:#FFFFFF;font-size:14px;line-height:1.45}
.wf *{box-sizing:border-box}
.wf-sec{position:relative;border-bottom:1px dashed #D6D6DC}
.wf-tag{position:absolute;left:16px;top:14px;display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;background:rgba(59,108,246,.1);color:#3B6CF6;font-size:11.5px;font-weight:500;z-index:3}
.wf-note{display:inline-flex;align-self:flex-start;width:fit-content;align-items:center;gap:6px;padding:3px 9px;border-radius:8px;background:rgba(59,108,246,.1);color:#3B6CF6;font-size:11.5px;font-weight:500}
</style>'''
HEAD = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>__T__</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Inter+Tight:wght@400;500&amp;display=swap" rel="stylesheet">
{CSS}
</helmet>
'''
END = kit3.END

# ---------------------------------------------------------------- primitives
bar = lambda w='100%', h=10, c=FILL2: f'<span style="display: block; width: {w}; height: {h}px; border-radius: {h // 2}px; background: {c}"></span>'
def lines(n=3, last='60%', h=9, gap=8, c=FILL2):
    return f'<div style="display: flex; flex-direction: column; gap: {gap}px">' + ''.join(bar(last if i == n - 1 else '100%', h, c) for i in range(n)) + '</div>'
def H(t, size=40, center=False, c=INK, mw=None):
    return f'<h2 style="margin: 0; {HF}; font-size: {size}px; line-height: 1.1; color: {c}; {"text-align: center; margin-left: auto; margin-right: auto;" if center else ""} {f"max-width: {mw}px;" if mw else ""}">{t}</h2>'
def eyebrow(t, center=False):
    return f'<span style="display: block; {"text-align: center;" if center else ""} font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase; color: {MUT}; margin-bottom: 12px">{t}</span>'
def btn(t, primary=True, w=None, h=44):
    st = f'background: {INK}; color: #FFFFFF' if primary else f'border: 1.5px solid {INK}; color: {INK}; background: #FFFFFF'
    return f'<span style="display: inline-flex; align-items: center; justify-content: center; height: {h}px; padding: 0 22px; border-radius: 999px; {st}; font-size: 14px; font-weight: 500; {f"width: {w};" if w else ""}">{t}</span>'
def img(label, h=240, w='100%', dark=False, r=16):
    bg = '#3A3A42' if dark else FILL
    stroke = 'rgba(255,255,255,.18)' if dark else LINE
    lc = '#FFFFFF' if dark else MUT
    return f'''<div style="position: relative; width: {w}; height: {h}px; border-radius: {r}px; background: {bg}; overflow: hidden; border: 1px solid {stroke}">
      <svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style="position: absolute; inset: 0"><line x1="0" y1="0" x2="100" y2="100" stroke="{stroke}" stroke-width=".4" vector-effect="non-scaling-stroke"></line><line x1="100" y1="0" x2="0" y2="100" stroke="{stroke}" stroke-width=".4" vector-effect="non-scaling-stroke"></line></svg>
      <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 5px 12px; border-radius: 999px; background: {"rgba(0,0,0,.35)" if dark else "#FFFFFF"}; border: 1px solid {stroke}; color: {lc}; font-size: 12px; white-space: nowrap">{label}</span></div>'''
def box(inner, pad=20, r=16, bg='#FFFFFF', border=LINE, extra=''):
    return f'<div style="padding: {pad}px; border-radius: {r}px; background: {bg}; border: 1px solid {border}; {extra}">{inner}</div>'
def grid(items, cols=3, gap=16):
    return f'<div style="display: grid; grid-template-columns: repeat({cols}, 1fr); gap: {gap}px">' + ''.join(items) + '</div>'
def card(title, n=2, icon=True, extra=''):
    ic = f'<span style="display: block; width: 36px; height: 36px; border-radius: 10px; background: {FILL2}; margin-bottom: 14px"></span>' if icon else ''
    return box(f'{ic}<b style="display: block; font-weight: 600; font-size: 15px; margin-bottom: 10px">{title}</b>{lines(n)}{extra}')
def field(label, w='100%', h=44, val=''):
    return f'<div style="width: {w}"><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">{label}</span><span style="display: flex; align-items: center; height: {h}px; padding: 0 14px; border-radius: 10px; border: 1.5px solid {LINE}; background: #FFFFFF; color: {MUT}; font-size: 13px">{val}</span></div>'
def chips(opts, on=0):
    return '<div style="display: flex; flex-wrap: wrap; gap: 6px">' + ''.join(f'<span style="padding: 6px 12px; border-radius: 999px; font-size: 12.5px; {"background: " + INK + "; color: #FFFFFF" if i == on else "border: 1.5px solid " + LINE}">{o}</span>' for i, o in enumerate(opts)) + '</div>'
def note(t):
    return f'<span class="wf-note">✎ {t}</span>'
def acc(items):
    return '<div>' + ''.join(f'<div style="display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-top: 1px solid {LINE}; font-size: 15px"><span>{q}</span><span style="color: {MUT}">+</span></div>' for q in items) + f'<div style="border-top: 1px solid {LINE}"></div></div>'
def sec(tag, inner, pad='72px 96px', bg='#FFFFFF', h=None):
    return f'<section class="wf-sec" style="padding: {pad}; background: {bg}; {f"min-height: {h}px;" if h else ""}"><span class="wf-tag">{tag}</span>{inner}</section>'
def two(a, b, ratio='1fr 1fr', gap=56, align='center'):
    return f'<div style="display: grid; grid-template-columns: {ratio}; gap: {gap}px; align-items: {align}"><div style="min-width: 0">{a}</div><div style="min-width: 0">{b}</div></div>'
def logo_box(w=90):
    return f'<span style="display: inline-flex; align-items: center; gap: 8px"><b style="{HF}; font-size: 20px; font-weight: 500">vegham</b></span>'

NAVS = ['Product', 'How it works', 'Pricing', 'Company', 'Help']
def nav(active=None, kind='Sticky header · turns into a pill on scroll'):
    links = ''.join(f'<span style="font-size: 13.5px; {"font-weight: 600; text-decoration: underline" if n == active else "color: #55555C"}">{n}</span>' for n in NAVS)
    return sec(f'Header · {kind}', f'<div style="display: flex; align-items: center; gap: 28px">{logo_box()}<span style="flex: 1; display: flex; justify-content: center; gap: 28px">{links}</span><span style="font-size: 13.5px">Log in</span>{btn("Start free pilot", h=38)}</div>', pad='34px 40px 18px')
def footer():
    cols = [('Product', ['Product', 'How it works', 'Pricing', 'Book a demo']), ('Company', ['About', 'Careers', 'Contact']), ('Resources', ['Help centre', 'Security']), ('Legal', ['Privacy', 'Terms'])]
    c = ''.join(f'<div><b style="display: block; font-size: 13px; margin-bottom: 12px">{t}</b>' + ''.join(f'<span style="display: block; font-size: 13px; color: {MUT}; margin-bottom: 8px">{i}</span>' for i in items) + '</div>' for t, items in cols)
    return sec('Footer · same on every page', f'''<div style="display: grid; grid-template-columns: 1.6fr repeat(4, 1fr); gap: 32px"><div>{logo_box()}<div style="margin-top: 14px; max-width: 280px">{lines(2, "70%")}</div><div style="margin-top: 16px; display: flex; gap: 8px">{''.join('<span style="width: 30px; height: 30px; border-radius: 50%; background: ' + FILL2 + '"></span>' for _ in range(4))}</div></div>{c}</div>
      <div style="margin-top: 36px; padding-top: 18px; border-top: 1px solid {LINE}; display: flex; justify-content: space-between; font-size: 12.5px; color: {MUT}"><span>© 2026 Vegham</span><span>Made in India · ₹ / $</span></div>''', pad='56px 96px 40px', bg='#F7F7F9')
def cta(t='Give your front desk a night off.', b1='Start free pilot', b2='Book a demo'):
    return sec('Closing call to action · dark panel with aurora', box(f'<div style="text-align: center; padding: 30px 0">{H(t, 40, True, "#FFFFFF")}<div style="margin: 14px auto 0; max-width: 420px">{lines(1, "100%", c="rgba(255,255,255,.25)")}</div><div style="margin-top: 22px; display: flex; gap: 10px; justify-content: center">{btn(b1, False)}{btn(b2, False)}</div></div>', 40, 28, '#3A3A42', '#3A3A42'), pad='56px 96px')
def hero(level, title, sub=2, buttons=('Start free pilot', 'Book a demo'), extra='', h=520):
    dark = level in (1, 2)
    tc = '#FFFFFF' if dark else INK
    lc = 'rgba(255,255,255,.3)' if dark else FILL2
    bt = ''.join(btn(b, i == 0 and not dark) if not dark else btn(b, False) for i, b in enumerate(buttons))
    lab = {1: 'Aurora landscape · level 1 (full)', 2: 'Aurora sky strip · level 2', 3: 'Plain white · level 3'}[level]
    inner = f'''<div style="position: relative; z-index: 2; text-align: center; max-width: 820px; margin: 0 auto">{H(title, 56, True, tc)}<div style="margin: 18px auto 0; max-width: 520px">{lines(sub, "70%", c=lc)}</div><div style="margin-top: 26px; display: flex; gap: 10px; justify-content: center">{bt}</div>{extra}</div>'''
    if dark:
        return f'''<section class="wf-sec" style="position: relative; padding: 110px 96px 90px; background: #3A3A42; min-height: {h}px; overflow: hidden"><span class="wf-tag">Hero · {lab}</span>
          <svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style="position: absolute; inset: 0"><line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line><line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line></svg>{inner}</section>'''
    return sec(f'Hero · {lab}', inner, pad='90px 96px 70px')
def darknav(active=None):
    # header sits over a dark hero
    return nav(active, 'Sticky · light text over the aurora, dark pill on scroll')

def page(name, title, sections):
    body = f'<div class="wf">' + ''.join(sections) + '</div>'
    open(os.path.join(P, name), 'w').write(HEAD.replace('__T__', title) + body + END)

# ================================================================ WEBSITE
plans = lambda: grid([box(f'<b style="display: block; font-size: 16px; font-weight: 600">{n}</b><span style="display: block; margin: 10px 0; {HF}; font-size: 30px">{p}</span>{lines(4, "70%")}<div style="margin-top: 18px">{btn("Start free pilot", i == 1, "100%")}</div>', 22, 20, '#FFFFFF', INK if i == 1 else LINE) for i, (n, p) in enumerate([('Starter', '₹ —'), ('Growth', '₹ —'), ('Pro', '₹ —')])], 3)
page('WfLanding.dc.html', 'Wireframe · Landing', [
    darknav(),
    hero(1, 'Every customer answered.<br>Every booking made.', extra=f'<div style="margin-top: 22px; display: flex; justify-content: center; gap: 8px">{"".join(chr(32) + bar("90px", 8, "rgba(255,255,255,.25)") for _ in range(3))}</div>', h=640),
    sec('Channel marquee · real brand icons, scrolling', f'<div style="display: flex; gap: 16px; justify-content: center">{"".join(box(bar("70px", 9), 14, 12) for _ in range(8))}</div>', pad='40px 96px'),
    sec('Product showcase · screenshot grows as you scroll', f'{eyebrow("Product", True)}{H("Your whole front desk. On one calm screen.", 40, True)}<div style="margin-top: 32px">{img("Dashboard screenshot (sample data)", 420)}</div>'),
    sec('Features · sticky scroll story (text left, screen right)', two(f'{H("A front desk that never sleeps.", 40)}<div style="margin-top: 22px; display: flex; flex-direction: column; gap: 10px">{"".join(box(f"<b style=\"font-weight: 600\">{t}</b><div style=\"margin-top: 8px\">{lines(1)}</div>", 14, 12, "#FFFFFF", INK if i == 0 else LINE) for i, t in enumerate(["Replies in seconds", "Answers every call", "Books and reminds", "Follows up", "Reports each morning"]))}</div>', img('Screen changes per feature', 460), '1fr 1.2fr')),
    sec('How it works · 3 steps with mini mock-ups', f'{H("Live in a day, not weeks.", 40, True)}<div style="margin-top: 32px">{grid([card(t, 2, True, "<div style=\"margin-top: 14px\">" + img("Mini mock-up", 120) + "</div>") for t in ["1 · Connect your channels", "2 · Teach it your business", "3 · Wake up to bookings"]])}</div>'),
    sec('Trust · you stay in charge', f'{H("You stay in charge.", 36, True)}<div style="margin-top: 28px">{grid([card(t) for t in ["Answers only from your information", "Take over any conversation", "Respectful by design"]])}</div>'),
    sec('Pricing teaser · links to Pricing', f'{H("Simple pricing. Start with a free pilot.", 36, True)}<div style="margin-top: 28px">{plans()}</div><div style="margin-top: 16px; text-align: center; font-size: 13.5px; text-decoration: underline">Compare all plans →</div>'),
    sec('FAQ · accordion', two(H('Frequently asked questions', 36), acc(['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']), '1fr 1.6fr', align='start')),
    cta(), footer()])

page('WfProduct.dc.html', 'Wireframe · Product', [
    nav('Product', 'White pill (level 3 page)'),
    hero(3, 'One AI front desk.<br>Every conversation handled.', h=460),
    sec('Live demo · pick a channel tab, watch the reply', f'{H("Pick a channel. Watch Vegham handle it.", 36, True)}<div style="margin: 22px 0; display: flex; justify-content: center">{chips(["WhatsApp", "Phone call", "Instagram", "Website chat"])}</div>{two(img("Conversation plays out", 300), lines(5, "50%"), "1.3fr 1fr")}'),
    sec('Feature rows · 6 rows, image side alternates', ''.join(f'<div style="margin-bottom: 40px">{two(f"{eyebrow(n)}{H(t, 30)}<div style=\"margin-top: 14px\">{lines(3)}</div><div style=\"margin-top: 14px\">{lines(3, '40%', 8, 10, LINE)}</div>", img("Feature mock-up", 260), "1fr 1.2fr") if i % 2 == 0 else two(img("Feature mock-up", 260), f"{eyebrow(n)}{H(t, 30)}<div style=\"margin-top: 14px\">{lines(3)}</div>", "1.2fr 1fr")}</div>' for i, (n, t) in enumerate([('01', 'Chat receptionist'), ('02', 'Voice receptionist'), ('03', 'Bookings and reminders')])) + note('…then 04 Follow-ups and reviews · 05 One team inbox · 06 Morning report')),
    sec('Small touches · grid', f'{H("Small touches your customers will notice.", 34, True)}<div style="margin-top: 26px">{grid([card("Detail " + str(i + 1), 1) for i in range(6)])}</div>'),
    sec('AI agents · list of agents', two(f'{H("Your agents. Your rules.", 34)}<div style="margin-top: 14px">{lines(3)}</div>', ''.join(box(f'<div style="display: flex; justify-content: space-between"><b style="font-weight: 600">{t}</b><span style="width: 34px; height: 20px; border-radius: 999px; background: {INK}"></span></div>', 14, 12) + '<div style="height: 8px"></div>' for t in ['Chat receptionist', 'Voice receptionist', 'Follow-up', 'Report writer']))),
    sec('Integrations · brand logo grid', f'{H("Works with the tools you already use.", 34, True)}<div style="margin-top: 26px">{grid([box(bar("60%", 9), 18, 12) for _ in range(12)], 6, 12)}</div>'),
    cta(), footer()])

page('WfHowItWorks.dc.html', 'Wireframe · How it works', [
    nav('How it works', 'White pill (level 3 page)'),
    hero(3, 'Live in a day. Not weeks.', h=440),
    sec('Timeline · Day 1 to Day 30 (scroll fills the line)', f'{H("Day 1 to Day 30, step by step.", 36)}<div style="margin-top: 30px; border-left: 2px solid {LINE}; padding-left: 28px; display: flex; flex-direction: column; gap: 22px">{"".join(f"<div style=\"position: relative\"><span style=\"position: absolute; left: -38px; top: 2px; width: 18px; height: 18px; border-radius: 50%; background: #FFFFFF; border: 2px solid {INK}\"></span>{eyebrow(d)}<b style=\"display: block; font-size: 17px; font-weight: 600; margin-bottom: 8px\">{t}</b>{lines(1, '50%')}</div>" for d, t in [("Day 1", "Connect and teach"), ("Day 1", "Test it yourself"), ("Day 2", "Your front desk answers"), ("Day 7", "We measure where you started"), ("Days 8–29", "Vegham runs your front desk"), ("Day 30", "Choose a plan, or stop")])}</div>'),
    sec('Morning report example', two(f'{H("Wake up to this. Not a pile of messages.", 34)}<div style="margin-top: 14px">{lines(3)}</div>', img('WhatsApp morning report (sample)', 320))),
    sec('Checklist · tick-off with counter', two(f'{H("Six things to have ready.", 34)}<div style="margin-top: 14px">{note("Counter: 0 of 6 ready")}</div>', ''.join(f'<div style="display: flex; gap: 12px; align-items: center; padding: 12px 0; border-top: 1px solid {LINE}"><span style="width: 20px; height: 20px; border-radius: 6px; border: 1.5px solid {INK}"></span>{bar("60%")}</div>' for _ in range(6)), align='start')),
    sec('FAQ · accordion', two(H('Setup questions', 34), acc(['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6']), '1fr 1.6fr', align='start')),
    cta('Ready when you are.'), footer()])

page('WfPricing.dc.html', 'Wireframe · Pricing', [
    nav('Pricing', 'White pill (level 3 page)'),
    sec('Hero + plans · currency and billing toggles', f'{H("Simple pricing. Start with a free pilot.", 48, True)}<div style="margin: 20px 0 28px; display: flex; justify-content: center; gap: 16px">{chips(["₹ INR", "$ USD"])}{chips(["Monthly", "Yearly · save"])}</div>{box(lines(1, "60%"), 14, 12, FILL, FILL)}<div style="height: 16px"></div>{plans()}'),
    sec('Calculator · what is one missed customer worth?', two(f'{H("What is one missed customer worth?", 34)}<div style="margin-top: 20px; display: flex; flex-direction: column; gap: 14px">{field("Missed messages a week")}{field("Average booking value")}{chips(["Low", "Typical", "High"], 1)}</div>', box(f'{eyebrow("You could win back")}<span style="{HF}; font-size: 44px">₹ —</span><div style="margin-top: 12px">{lines(2)}</div>', 28, 20, FILL, FILL))),
    sec('Plan helper · two questions → suggested plan', f'{H("Not sure which plan? Two quick questions.", 32, True)}<div style="margin: 22px auto 0; max-width: 720px">{two(chips(["One location", "Two or more"]), chips(["Chat only", "Chat + calls"]), "1fr 1fr", 20)}<div style="margin-top: 16px">{box(lines(1, "50%"), 16, 12, FILL, FILL)}</div></div>'),
    sec('Comparison table', f'{H("Everything in each plan, side by side.", 32, True)}<div style="margin-top: 22px; border: 1px solid {LINE}; border-radius: 14px; overflow: hidden">{"".join(f"<div style=\"display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 12px; padding: 13px 18px; border-top: 1px solid {LINE}; {'background: ' + FILL if r == 0 else ''}\">{bar('60%')}{bar('40%')}{bar('40%')}{bar('40%')}</div>" for r in range(8))}</div>'),
    sec('FAQ · accordion', two(H('Pricing questions', 34), acc(['Question 1', 'Question 2', 'Question 3', 'Question 4']), '1fr 1.6fr', align='start')),
    cta(), footer()])

page('WfCompany.dc.html', 'Wireframe · Company', [
    darknav('Company'),
    hero(2, 'We’re building the front desk<br>every business deserves.', buttons=(), extra=f'<div style="margin-top: 16px">{note("वेग · the meaning of the name")}</div>', h=460),
    sec('Our story', two(H('Why we started', 34), lines(6, '70%'), '1fr 1.4fr', align='start')),
    sec('Values · 4 cards', f'{H("Four things we won’t compromise on.", 34, True)}<div style="margin-top: 26px">{grid([card(t) for t in ["Every customer deserves an answer", "Built in India, for everyone", "Owners stay in charge", "Respect by default"]], 4)}</div>'),
    sec('Get in touch · 3 cards', grid([card(t, 1) for t in ['Questions, partnerships, press', 'Build Vegham with us → Careers', 'Company details · [legal name]']])),
    cta('Let’s answer every customer together.'), footer()])

page('WfBookDemo.dc.html', 'Wireframe · Book a demo', [
    nav(None, 'White pill (level 3 page)'),
    sec('Form page · benefits left, form right', two(f'{H("See Vegham answer your customers.", 44)}<div style="margin-top: 20px; display: flex; flex-direction: column; gap: 12px">{"".join(f"<div style=\"display: flex; gap: 10px\"><span style=\"width: 18px; height: 18px; border-radius: 50%; background: {FILL2}\"></span>{bar('70%')}</div>" for _ in range(4))}</div>',
        box(f'<b style="display: block; font-size: 18px; font-weight: 600; margin-bottom: 16px">Tell us a little about you</b><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">{field("Your name")}{field("Business name")}{field("WhatsApp number", val="+91")}{field("Email")}</div><div style="margin-top: 14px"><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Team size</span>{chips(["Just me", "2–5", "6–20", "20+"])}</div><div style="margin-top: 14px"><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Best time</span>{chips(["Morning", "Afternoon", "Evening"])}</div><div style="margin-top: 20px">{btn("Book my demo", True, "100%")}</div><div style="margin-top: 10px; text-align: center; font-size: 12.5px; color: {MUT}">We’ll confirm on WhatsApp · or start your free pilot</div>', 26, 20), '1fr 1.1fr', align='start'), pad='72px 96px 96px'),
    footer()])

page('WfSecurity.dc.html', 'Wireframe · Security', [
    nav(None, 'White pill (level 3 page)'),
    sec('Hero · plain', f'{H("Your customers trust you.<br>We protect that trust.", 48, True)}<div style="margin: 16px auto 0; max-width: 520px">{lines(2, "70%")}</div>', pad='90px 96px 60px'),
    sec('Six promises · grid', grid([card(t) for t in ['Encrypted', 'Separated per business', 'Never sold', 'Yours to take or delete', 'Opt-in only', 'Honest about AI']])),
    sec('What we collect · table', f'{H("Only what’s needed to run your front desk.", 32)}<div style="margin-top: 20px; border: 1px solid {LINE}; border-radius: 14px; overflow: hidden">{"".join(f"<div style=\"display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 12px; padding: 13px 18px; border-top: 1px solid {LINE}\">{bar('60%')}{bar('80%')}{bar('40%')}</div>" for _ in range(5))}</div>'),
    sec('Your controls · 6 items', f'{H("You decide. Always.", 32)}<div style="margin-top: 20px">{grid([card("Control " + str(i + 1), 1) for i in range(6)])}</div>'),
    sec('Contact · 3 cards', grid([card(t, 1) for t in ['Talk to us', 'Report it responsibly', 'Policies']])),
    cta(), footer()])

page('WfHelp.dc.html', 'Wireframe · Help centre', [
    nav('Help', 'White pill (level 3 page)'),
    sec('Search hero', f'{H("How can we help?", 48, True)}<div style="margin: 22px auto 0; max-width: 620px">{field("", h=52, val="Search help articles…")}</div>', pad='90px 96px 60px'),
    sec('Categories · 6 tiles', f'{H("Find your answer.", 32)}<div style="margin-top: 20px">{grid([card(t, 1) for t in ["Getting started", "Channels", "Assistant and answers", "Bookings", "Billing", "Account and security"]])}</div>'),
    sec('Popular articles · list → Help article', ''.join(f'<div style="display: flex; justify-content: space-between; padding: 14px 0; border-top: 1px solid {LINE}">{bar("40%")}<span style="color: {MUT}">→</span></div>' for _ in range(5))),
    sec('Still stuck? · chat or WhatsApp us', box(two(f'{H("Still stuck?", 28)}<div style="margin-top: 10px">{lines(1)}</div>', f'<div style="display: flex; gap: 10px; justify-content: flex-end">{btn("Chat with us")}{btn("WhatsApp us", False)}</div>'), 28, 20, FILL, FILL)),
    footer()])

page('WfHelpArticle.dc.html', 'Wireframe · Help article', [
    nav('Help', 'White pill (level 3 page)'),
    sec('Article · steps left, contents right', f'<span style="font-size: 12.5px; color: {MUT}">Help › Channels › WhatsApp</span><div style="margin-top: 14px">{two(f"{H('How to connect your WhatsApp Business number', 40)}<div style=\"margin-top: 16px\">{box(lines(3), 18, 14, FILL, FILL)}</div>" + "".join(f"<div style=\"margin-top: 28px\"><b style=\"display: block; font-size: 18px; font-weight: 600; margin-bottom: 10px\">Step {i}</b>{lines(2)}<div style=\"margin-top: 14px\">{img('Screenshot', 160)}</div></div>" for i in (1, 2, 3)), box(f"<b style=\"display: block; font-size: 13px; margin-bottom: 10px\">On this page</b>{lines(5, '60%')}<div style=\"margin-top: 20px; padding-top: 16px; border-top: 1px solid {LINE}\"><b style=\"display: block; font-size: 13px; margin-bottom: 10px\">Was this helpful?</b><div style=\"display: flex; gap: 8px\">{btn('Yes', False, h=34)}{btn('No', False, h=34)}</div></div>", 20, 16) + "<div style=\"margin-top: 8px\">" + note("Sticky while scrolling") + "</div>", "2.2fr 1fr", align="start")}</div>'),
    footer()])

def legal(name, title, heading, n):
    secs = ''.join(f'<div style="margin-top: 26px"><b style="display: block; font-size: 18px; font-weight: 600; margin-bottom: 10px">{i}. Section</b>{lines(3)}</div>' for i in range(1, n + 1))
    page(name, title, [nav(None, 'White pill (level 3 page)'),
        sec('Document · contents left (sticky), text right', two(box(f'<b style="display: block; font-size: 13px; margin-bottom: 10px">Contents</b>{lines(n, "70%", 8, 10)}', 18, 14), f'{H(heading, 44)}<span style="display: block; margin-top: 8px; font-size: 13px; color: {MUT}">Last updated · [date] · draft for legal review</span><div style="margin-top: 20px">{box("<b style=\"display: block; margin-bottom: 8px\">In short</b>" + lines(4), 20, 14, FILL, FILL)}</div>{secs}', '1fr 2.6fr', align='start')),
        footer()])
legal('WfPrivacy.dc.html', 'Wireframe · Privacy policy', 'Privacy policy', 9)
legal('WfTerms.dc.html', 'Wireframe · Terms', 'Terms and conditions', 12)

page('WfCareers.dc.html', 'Wireframe · Careers', [
    nav('Company', 'White pill (no aurora on this page)'),
    sec('Coming soon · email signup', f'{H("We’re not hiring yet.<br>But we will be.", 48, True)}<div style="margin: 22px auto 0; max-width: 480px; display: flex; gap: 8px">{field("", val="Your email")}<span style="margin-top: 0; display: flex; align-items: flex-end">{btn("Tell me")}</span></div>', pad='90px 96px 60px'),
    sec('What working here will feel like · 4 cards', grid([card(t) for t in ['Small team, real ownership', 'Craft matters', 'Customers first', 'Built in India, for everyone']], 4)),
    sec('First teams we’ll hire', ''.join(f'<div style="display: flex; justify-content: space-between; padding: 14px 0; border-top: 1px solid {LINE}">{bar("30%")}{bar("12%")}</div>' for _ in range(4))),
    sec('Meet the product · link', f'<div style="text-align: center">{H("Until then, meet the product.", 30, True)}<div style="margin-top: 16px">{btn("See the product", False)}</div></div>'),
    footer()])

page('WfContact.dc.html', 'Wireframe · Contact', [
    nav('Company', 'White pill (level 3 page)'),
    sec('Hero · plain', f'{H("Talk to a person. We’re quick to reply.", 48, True)}', pad='90px 96px 40px'),
    sec('Ways to reach us · 3 cards', grid([card(t, 1, True, f'<div style="margin-top: 14px">{btn("Open", False, h=34)}</div>') for t in ['WhatsApp', 'Email', 'Book a demo']])),
    sec('Message form + office', two(box(f'<b style="display: block; font-size: 18px; font-weight: 600; margin-bottom: 16px">Send us a message</b><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">{field("Name")}{field("Email")}</div><div style="margin-top: 12px">{field("Message", h=110)}</div><div style="margin-top: 16px">{btn("Send message")}</div>', 26, 20), f'<b style="display: block; margin-bottom: 10px">Office</b>{lines(3, "50%")}<div style="margin-top: 20px">{img("Map", 180)}</div>', '1.4fr 1fr', align='start')),
    footer()])

page('WfNotFound.dc.html', 'Wireframe · 404', [
    darknav(),
    hero(1, 'Lost under the northern lights.', buttons=('Back to home', 'Visit Help'), h=640)])

# ================================================================ AUTH
def auth(name, title, left_title, left_inner, right):
    body = f'''<div class="wf" style="display: grid; grid-template-columns: 1fr 1fr; height: 960px">
      <div style="padding: 16px"><div style="position: relative; height: 100%; border-radius: 28px; background: #3A3A42; overflow: hidden; display: flex; align-items: flex-end; justify-content: center; padding: 40px">
        <svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style="position: absolute; inset: 0"><line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line><line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line></svg>
        <span class="wf-tag">Aurora landscape · level 1</span>
        <div style="position: relative; width: 100%; max-width: 460px; padding: 26px; border-radius: 22px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.25); color: #FFFFFF"><span class="wf-note" style="background: rgba(255,255,255,.18); color: #FFFFFF; margin-bottom: 12px">Glass card</span><div style="{HF}; font-size: 28px; margin-top: 8px">{left_title}</div><div style="margin-top: 14px">{left_inner}</div></div></div></div>
      <div style="position: relative; display: flex; flex-direction: column; padding: 34px 64px"><span class="wf-tag" style="left: 24px; top: 14px">Form side</span>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 18px">{logo_box()}<span style="font-size: 13px; color: {MUT}">← Back to site</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 440px; width: 100%; margin: 0 auto">{right}</div>
        <div style="display: flex; justify-content: center; gap: 18px; font-size: 12px; color: {MUT}"><span>Privacy</span><span>Terms</span><span>Help</span></div></div></div>'''
    open(os.path.join(P, name), 'w').write(HEAD.replace('__T__', title) + body + END)
glass_stats = lines(3, '60%', c='rgba(255,255,255,.3)')
divider = f'<div style="display: flex; align-items: center; gap: 12px; margin: 16px 0; font-size: 12px; color: {MUT}"><span style="flex: 1; height: 1px; background: {LINE}"></span>or<span style="flex: 1; height: 1px; background: {LINE}"></span></div>'
gbtn = btn('Continue with Google', False, '100%', 48)
auth('WfLogin.dc.html', 'Wireframe · Log in', 'Your front desk kept working.', glass_stats + f'<div style="margin-top: 12px"><span class="wf-note" style="background: rgba(255,255,255,.18); color: #FFFFFF">Sample overnight stats</span></div>',
     f'{H("Log into your account", 36)}<div style="margin-top: 8px">{lines(1, "70%")}</div><div style="margin-top: 26px">{gbtn}</div>{divider}{field("Phone number or email", 48 and "100%", 48, "+91")}<div style="margin-top: 16px">{btn("Send me a code", True, "100%", 48)}</div><div style="margin-top: 18px; text-align: center; font-size: 13.5px">New to Vegham? <u>Start free pilot</u></div><div style="margin-top: 16px">{note("No passwords · one-time code by SMS/WhatsApp or email")}</div>')
auth('WfSignup.dc.html', 'Wireframe · Sign up', 'Live by tomorrow. Free for 30 days.', ''.join(f'<div style="display: flex; gap: 10px; margin-top: 10px"><span style="width: 16px; height: 16px; border-radius: 50%; background: rgba(255,255,255,.3)"></span>{bar("70%", 9, "rgba(255,255,255,.3)")}</div>' for _ in range(4)),
     f'{H("Create your account", 36)}<div style="margin-top: 8px">{lines(1, "70%")}</div><div style="margin-top: 22px">{gbtn}</div>{divider}<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">{field("Your name")}{field("Business name")}</div><div style="margin-top: 12px">{field("WhatsApp number", val="+91")}</div><div style="margin-top: 12px">{field("Email")}</div><div style="margin-top: 14px; display: flex; gap: 10px; font-size: 12.5px; color: {MUT}"><span style="width: 18px; height: 18px; flex: none; border-radius: 5px; border: 1.5px solid {INK}"></span>I agree to the Terms and Privacy policy, and to setup updates on WhatsApp</div><div style="margin-top: 16px">{btn("Create account", True, "100%", 48)}</div><div style="margin-top: 16px; text-align: center; font-size: 13.5px">Already have an account? <u>Log in</u></div>')
boxes6 = '<div style="display: flex; gap: 10px">' + ''.join(f'<span style="flex: 1; height: 58px; border-radius: 12px; border: 1.5px solid {INK if i == 0 else LINE}"></span>' for i in range(6)) + '</div>'
auth('WfOtp.dc.html', 'Wireframe · Code screen', 'Your front desk kept working.', glass_stats,
     f'<span style="font-size: 13px">← Change number</span><div style="margin-top: 16px">{H("Enter your code", 36)}</div><div style="margin-top: 8px; font-size: 14px; color: {MUT}">Sent to +91 98••• ••210 on WhatsApp</div><div style="margin-top: 26px">{boxes6}</div><div style="margin-top: 14px; display: flex; justify-content: space-between; font-size: 13px; color: {MUT}"><span>Resend in 0:30</span><span>Get it by SMS instead</span></div><div style="margin-top: 20px">{btn("Verify", True, "100%", 48)}</div><div style="margin-top: 18px; display: flex; flex-direction: column; gap: 6px">{note("States: wrong code · expired · too many tries (wait 10 min)")}{note("New user → Onboarding · returning → App or ‘Welcome back’")}</div>')

# ================================================================ ONBOARDING
CARD_SECS = ['Logo · name · open now', 'Address · phone · locations', 'Hours strip (7 days)', 'What Vegham knows (services, prices)', 'Vegham · tone · voice · greeting', 'Answering on · channel icons', 'Booking link · since']
SHOWN = {0: [], 1: [0, 1, 2, 6], 2: [0, 1, 2, 3, 6], 3: [0, 1, 2, 3, 4, 6], 4: [0, 1, 2, 3, 4, 5, 6], 6: [0, 1, 2, 3, 4, 5, 6], 7: [0, 1, 2, 3, 4, 5, 6]}
NEW = {1: [0, 1, 2], 2: [3], 3: [4], 4: [5]}
def living_card(step):
    if step == 0:
        inner = f'<div style="display: flex; gap: 12px; align-items: center"><span style="width: 48px; height: 48px; border-radius: 14px; background: {FILL2}"></span><div style="flex: 1">{lines(2, "50%")}</div></div><div style="margin-top: 14px">{lines(2)}</div><div style="margin-top: 12px; font-size: 12px; color: {MUT}">Empty card · fills in as you answer</div>'
        return box(inner, 22, 24, '#FFFFFF', LINE, 'border-style: dashed')
    if step == 5:
        bub = lambda me: f'<span style="align-self: {"flex-end" if me else "flex-start"}; width: {"55%" if me else "75%"}; height: {30 if me else 46}px; border-radius: 12px; background: {FILL2 if me else "#6B6B73"}"></span>'
        return box(f'<b style="display: block; font-size: 13px; margin-bottom: 10px">Back of the card · private test chat</b><div style="display: flex; flex-direction: column; gap: 8px">{bub(1)}{bub(0)}{note("✎ Fix on any answer")}{bub(1)}{bub(0)}</div><div style="margin-top: 14px; height: 38px; border-radius: 999px; border: 1.5px solid {LINE}"></div>', 20, 24, '#FFFFFF', INK)
    dark = step == 7
    rows = ''
    for i, t in enumerate(CARD_SECS):
        if i not in SHOWN[step]:
            continue
        isnew = i in NEW.get(step, [])
        rows += f'<div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; margin-top: 6px; border-radius: 10px; background: {"rgba(255,255,255,.08)" if dark else FILL}; {"outline: 2px solid " + ANN if isnew else ""}"><span style="font-size: 12.5px; color: {"#FFFFFF" if dark else INK}">{t}</span>{"<span class=\'wf-note\' style=\'padding: 1px 7px\'>new</span>" if isnew else ""}</div>'
    live = '<span class="wf-note" style="background: rgba(61,214,140,.2); color: #FFFFFF; margin-bottom: 6px">LIVE badge · aurora inside · tilts and shines</span>' if dark else ''
    return box(live + rows, 18, 24, '#3A3A42' if dark else '#FFFFFF', '#3A3A42' if dark else INK)
def ob_screen(name, title, step, eyebrow_t, h1, left, nav_btns, overlay='', dark=False):
    bg = '#3A3A42' if dark else '#F5F5F7'
    tc = '#FFFFFF' if dark else INK
    fill = f'{min(step, 6) / 6 * 100:.1f}%'
    sky = ''
    if dark:
        sky = '<svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style="position: absolute; inset: 0"><line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line><line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,.08)" stroke-width=".3" vector-effect="non-scaling-stroke"></line></svg><span class="wf-tag" style="left: auto; right: 16px; top: 84px">Background fades into the aurora landscape</span>'
    body = f'''<div class="wf" style="position: relative; height: 900px; background: {bg}; overflow: hidden">{sky}
      <div style="position: absolute; left: 40px; right: 40px; top: 0; height: 72px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid {"rgba(255,255,255,.2)" if dark else LINE}">
        <span style="{"filter: invert(1);" if dark else ""}">{logo_box()}</span>{"" if dark else btn("Save and finish later", False, h=34)}
        <span style="position: absolute; left: 0; bottom: -2px; height: 2px; width: {fill}; background: {ANN}"></span></div>
      <span class="wf-tag" style="top: 80px; left: 40px">Top bar · logo · save for later · progress line ({fill})</span>
      <div style="position: absolute; left: 96px; top: 136px; width: 560px">
        <span class="wf-tag" style="position: relative; left: 0; top: 0; margin-bottom: 10px">Questions · slide sideways between steps</span>
        <span style="display: block; margin-top: 8px; font-size: 12.5px; color: {MUT if not dark else "#C9CCDD"}">{eyebrow_t}</span>
        <div style="margin-top: 8px">{H(h1, 38, False, tc)}</div><div style="margin-top: 10px">{lines(1, "70%", c=FILL2 if not dark else "rgba(255,255,255,.3)")}</div>
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 12px">{left}</div></div>
      <div style="position: absolute; left: 96px; top: 790px; display: flex; gap: 10px; align-items: center">{nav_btns}</div>
      <span class="wf-tag" style="top: 760px; left: 96px">Back · Continue · always in the same place</span>
      <div style="position: absolute; left: 820px; top: 150px; width: 420px">
        <span class="wf-tag" style="position: relative; left: 0; top: 0; display: inline-flex; margin-bottom: 10px">The living card · one object that grows</span>{living_card(step)}</div>
      {overlay}</div>'''
    open(os.path.join(P, name), 'w').write(HEAD.replace('__T__', title) + body + END)
NB = lambda c='Continue', back=True, later=False: (btn('← Back', False, h=44) if back else '') + btn(c + ' →', True, h=44) + (f'<span style="font-size: 13px; text-decoration: underline">Do this later</span>' if later else '')
road = ''.join(f'<div style="display: flex; gap: 12px; align-items: center; padding: 9px 0; border-top: 1px solid {LINE}"><span style="width: 22px; height: 22px; border-radius: 50%; border: 1.5px solid {LINE}"></span><span style="flex: 1; font-size: 13.5px">{t}</span>{bar("40px", 8)}</div>' for t in ['Your business', 'Teach Vegham', 'Your assistant', 'Channels', 'Test drive', 'Review and go live'])
ob_screen('WfOb0.dc.html', 'Wireframe · Onboarding welcome', 0, 'Welcome, Vinay · free 30-day pilot started', 'Let’s build your front desk.', road, NB('Let’s begin', back=False))
ob_screen('WfOb1.dc.html', 'Wireframe · Onboarding 1', 1, 'Step 1/6 · about a minute', 'Tell us about your business.',
          f'<div style="display: grid; grid-template-columns: 44px 1.3fr 1fr; gap: 10px; align-items: end"><span style="width: 44px; height: 44px; border-radius: 10px; border: 1.5px dashed {LINE}"></span>{field("Business name")}{field("Country · time zone")}</div>{field("What do you offer?")}<div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 10px">{field("Address")}{field("Business phone")}</div><div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Opening hours</span>{chips(["Mon–Sat 10–8", "Every day 9–9", "Custom → day editor"])}</div><div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Locations</span>{chips(["Just this one", "Two or more → list + add"])}</div>{note("Every answer updates the card instantly")}', NB())
ob_screen('WfOb2.dc.html', 'Wireframe · Onboarding 2', 2, 'Step 2/6 · about a minute', 'Teach Vegham your business.',
          f'{chips(["Website link", "Upload price list", "Type it in"])}<div style="display: flex; gap: 8px"><div style="flex: 1">{field("", val="nilaandco.in")}</div><span style="display: flex; align-items: flex-end">{btn("Read it")}</span></div>{box(f"{bar('50%')}<div style=\"margin: 10px 0; height: 4px; background: {INK}; border-radius: 2px\"></div><b style=\"display: block; font-size: 12.5px; margin-bottom: 6px\">Check what Vegham found</b>" + "".join(f"<div style=\"display: flex; justify-content: space-between; padding: 7px 0; border-top: 1px solid {LINE}\">{bar('50%', 8)}<span style=\"font-size: 11.5px; color: {MUT}\">Edit · Remove</span></div>" for _ in range(4)), 14, 14)}{note("Services slide into the card after reading")}', NB('Looks right', later=True))
ob_screen('WfOb3.dc.html', 'Wireframe · Onboarding 3', 3, 'Step 3/6 · about a minute', 'Meet your assistant.',
          f'<div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 10px; align-items: end">{field("Name")}<div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Tone</span>{chips(["Warm", "Crisp", "Formal"])}</div></div><div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Languages</span>{chips(["English", "हिन्दी", "తెలుగు", "+ more"])}</div><div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Voice for calls · ▶ sample</span>{chips(["Warm", "Bright", "Calm"])}</div><div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Hand over when… · who gets handovers</span>{chips(["Asks for a person", "Complaint", "Not sure", "+ Invite teammate"], -1)}</div>{note("AI disclosure line, always on")}', NB())
chrow = lambda t, act: f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 12px; border: 1.5px solid {INK if act == "Connect" else LINE}; background: #FFFFFF"><span style="width: 32px; height: 32px; border-radius: 9px; background: {FILL2}"></span><span style="flex: 1"><b style="display: block; font-size: 13.5px; font-weight: 500">{t}</b>{bar("60%", 7)}</span>{btn(act, True, h=32) if act == "Connect" else "<span style=\"width: 38px; height: 22px; border-radius: 999px; border: 1.5px solid " + LINE + "\"></span>"}</div>'
ch_left = chrow('WhatsApp · most important', 'Connect') + ''.join(chrow(t, 'toggle') for t in ['Website chat', 'Instagram', 'Phone calls (forwarding code)', 'Google Business'])
ob_screen('WfOb4.dc.html', 'Wireframe · Onboarding 4', 4, 'Step 4/6 · about 3 minutes', 'Where should Vegham answer?', ch_left, NB(later=True))
sheet = f'''<div style="position: absolute; inset: 0; background: rgba(46,46,51,.45); display: flex; align-items: center; justify-content: center"><div style="width: 560px; border-radius: 24px; background: #FFFFFF; padding: 26px; position: relative">
  <span class="wf-tag" style="left: auto; right: 16px; top: -30px">Meta Embedded Signup · modal (bottom sheet on phones)</span>
  <div style="display: flex; gap: 12px; align-items: center"><span style="width: 40px; height: 40px; border-radius: 12px; background: {FILL2}"></span><div style="flex: 1"><b style="display: block; font-size: 18px; font-weight: 600">Connect WhatsApp</b>{bar("50%", 8)}</div><span style="width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid {LINE}"></span></div>
  {"".join(f"<div style=\"display: flex; gap: 12px; padding: 12px 0; border-top: 1px solid {LINE}; margin-top: {14 if i == 1 else 0}px\"><span style=\"width: 22px; height: 22px; border-radius: 50%; background: {FILL2}; font-size: 11px; display: inline-flex; align-items: center; justify-content: center\">{i}</span><div style=\"flex: 1\"><b style=\"display: block; font-size: 13.5px; font-weight: 500; margin-bottom: 6px\">{t}</b>{bar('80%', 7)}</div></div>" for i, t in enumerate(["Log in with Facebook", "Choose your number (keep current or new)", "Verify with a code", "Display name review"], 1))}
  {box(lines(2, "70%", 7), 12, 12, FILL, FILL)}<div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px">Cancel</span>{btn("Continue with Facebook")}</div></div></div>'''
ob_screen('WfOb4wa.dc.html', 'Wireframe · Onboarding 4 · WhatsApp', 4, 'Step 4/6', 'Where should Vegham answer?', ch_left, NB(later=True), overlay=sheet)
ob_screen('WfOb5.dc.html', 'Wireframe · Onboarding 5', 5, 'Step 5/6 · a quick test', 'Take Vegham for a test drive.',
          f'<div><span style="display: block; font-size: 12.5px; font-weight: 500; margin-bottom: 6px">Try one</span>{chips(["Anything free tomorrow?", "Price of a first visit?", "Parking?", "Bring a friend?"], -1)}</div>{lines(1, "80%")}{box(two(img("QR", 80, "80px", r=8), lines(3, "60%"), "80px 1fr", 16), 14, 14)}{note("Card turns over into the chat · flips back on Continue")}', NB('Looks good'))
rvrow = lambda t: f'<div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid {LINE}"><span style="width: 20px; height: 20px; border-radius: 50%; background: #9BC8B4"></span><div style="flex: 1"><b style="display: block; font-size: 13.5px; font-weight: 500; margin-bottom: 4px">{t}</b>{bar("55%", 7)}</div><u style="font-size: 12.5px">Edit</u></div>'
ob_screen('WfOb6.dc.html', 'Wireframe · Onboarding 6', 6, 'Step 6/6 · last check', 'Ready to go live?',
          ''.join(rvrow(t) for t in ['Business · hours · locations', 'What Vegham knows', 'Vegham · tone · handovers', 'Answering on']) + box(f'<b style="display: block; font-size: 12.5px; margin-bottom: 8px">Where should Vegham reach you?</b>{field("", val="WhatsApp number")}<div style="margin-top: 8px">{chips(["7 AM", "8 AM", "9 AM"], 1)}</div>', 14, 14) + note('Edit jumps back to that step'), NB('Go live'))
ob_screen('WfOb7.dc.html', 'Wireframe · Onboarding live', 7, 'You’re live', 'Your front desk is open.',
          box(two(img("QR", 80, "80px", r=8), lines(3, "60%"), "80px 1fr", 16), 14, 14) + note('Share booking link'), btn('Go to my dashboard →', False, h=44), dark=True)

# ================================================================ FLOW MAP
NODES = {}
def node(k, x, y, label, sub='', w=150, kind='page'):
    NODES[k] = (x, y, w)
    st = {'page': f'background: #FFFFFF; border: 1.5px solid {INK}', 'auth': f'background: {FILL}; border: 1.5px solid {INK}', 'ob': f'background: #FFFFFF; border: 1.5px solid {ANN}', 'later': f'background: #FFFFFF; border: 1.5px dashed {MUT}; color: {MUT}', 'dec': f'background: #FFF8E6; border: 1.5px solid #C99A2E'}[kind]
    return f'<div style="position: absolute; left: {x}px; top: {y}px; width: {w}px; height: 52px; border-radius: 12px; {st}; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 8px"><b style="font-size: 13px; font-weight: 600; line-height: 1.2">{label}</b>{f"<span style=\'font-size: 11px; color: {MUT}\'>{sub}</span>" if sub else ""}</div>'
def arrow(a, b, label='', dashed=False, side='h'):
    ax, ay, aw = NODES[a]; bx, by, bw = NODES[b]
    if side == 'h':
        x1, y1 = (ax + aw, ay + 26) if bx > ax else (ax, ay + 26)
        x2, y2 = (bx, by + 26) if bx > ax else (bx + bw, by + 26)
        mx = (x1 + x2) / 2
        d = f'M{x1},{y1} L{mx},{y1} L{mx},{y2} L{x2},{y2}'
        lx, ly = mx, min(y1, y2) + abs(y2 - y1) / 2
    else:
        x1, y1 = ax + aw / 2, (ay + 52 if by > ay else ay)
        x2, y2 = bx + bw / 2, (by if by > ay else by + 52)
        my = (y1 + y2) / 2
        d = f'M{x1},{y1} L{x1},{my} L{x2},{my} L{x2},{y2}'
        lx, ly = (x1 + x2) / 2, my
    lab = f'<text x="{lx + 4}" y="{ly - 5}" font-size="11" fill="{MUT}" font-family="Inter, sans-serif">{label}</text>' if label else ''
    return f'<path d="{d}" fill="none" stroke="{MUT}" stroke-width="1.4" {"stroke-dasharray=\'5 4\'" if dashed else ""} marker-end="url(#wfarr)"></path>{lab}'
nodes = ''
# lane 1: website
nodes += node('land', 60, 210, 'Landing', 'level 1 aurora', 150)
nav_pages = [('prod', 'Product'), ('how', 'How it works'), ('price', 'Pricing'), ('comp', 'Company'), ('help', 'Help centre')]
for i, (k, l) in enumerate(nav_pages):
    nodes += node(k, 330, 120 + i * 66, l, 'header nav', 150)
nodes += node('article', 560, 384, 'Help article', '', 140)
foot = [('sec', 'Security'), ('car', 'Careers'), ('cont', 'Contact'), ('priv', 'Privacy'), ('terms', 'Terms')]
for i, (k, l) in enumerate(foot):
    nodes += node(k, 560 + (i % 3) * 170, 120 + (i // 3) * 66, l, 'footer', 150)
nodes += node('demo', 900, 300, 'Book a demo', 'confirmed on WhatsApp', 210)
nodes += node('404', 1180, 120, '404', 'any wrong link', 150)
# lane 2: account
nodes += node('signup', 60, 560, 'Sign up', 'Start free pilot', 150, 'auth')
nodes += node('login', 60, 650, 'Log in', 'header link', 150, 'auth')
nodes += node('otp', 300, 605, 'Code screen', 'WhatsApp / SMS / email', 170, 'auth')
nodes += node('dec', 540, 605, 'Onboarding done?', '', 160, 'dec')
nodes += node('resume', 780, 560, 'Welcome back', 'resume at saved step', 170, 'ob')
nodes += node('app', 1180, 650, 'App · Home', 'designed later', 170, 'later')
# lane 3: onboarding
obs = [('o0', 'Welcome'), ('o1', '1 Business'), ('o2', '2 Teach'), ('o3', '3 Assistant'), ('o4', '4 Channels'), ('o5', '5 Test drive'), ('o6', '6 Review'), ('o7', 'Live')]
for i, (k, l) in enumerate(obs):
    nodes += node(k, 60 + i * 162, 860, l, '', 130, 'ob')
nodes += node('wa', 546, 960, 'WhatsApp sign-up', 'Meta modal', 160, 'ob')
nodes += node('first', 1180, 960, 'App · First day', 'checklist', 170, 'later')
paths = ''
paths += ''.join(arrow('land', k) for k, _ in nav_pages[:1])
for k, _ in nav_pages:
    paths += arrow('land', k)
paths += arrow('help', 'article')
paths += arrow('price', 'signup', 'Start pilot', side='v') if False else ''
paths += arrow('land', 'signup', 'Start free pilot', side='v')
paths += arrow('signup', 'otp') + arrow('login', 'otp') + arrow('otp', 'dec')
paths += arrow('dec', 'resume', 'no') + arrow('dec', 'app', 'yes')
paths += arrow('dec', 'o0', 'new account', side='v')
for i in range(len(obs) - 1):
    paths += arrow(obs[i][0], obs[i + 1][0])
paths += arrow('o4', 'wa', '', side='v')
paths += arrow('o7', 'first', 'Go to my dashboard', side='v')
paths += arrow('first', 'app', '', True, side='v')
paths += arrow('resume', 'o4', 'continue at the saved step', True, side='v')
legend = ''.join(f'<span style="display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px"><span style="width: 22px; height: 14px; border-radius: 4px; {s}"></span>{t}</span>' for s, t in [(f'border: 1.5px solid {INK}', 'Website page'), (f'background: {FILL}; border: 1.5px solid {INK}', 'Account'), (f'border: 1.5px solid {ANN}', 'Onboarding'), ('background: #FFF8E6; border: 1.5px solid #C99A2E', 'Decision'), (f'border: 1.5px dashed {MUT}', 'App (designed later)')])
lane = lambda y, h, t: f'<div style="position: absolute; left: 30px; right: 30px; top: {y}px; height: {h}px; border-radius: 20px; background: #FAFAFB; border: 1px solid #EEEEF1"></div><span style="position: absolute; right: 50px; top: {y + 14}px; font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase; color: {MUT}">{t}</span>'
flow = f'''<div class="wf" style="position: relative; height: 1180px; padding: 40px 56px">
  <h1 style="margin: 0; {HF}; font-size: 40px">User flow · website → account → onboarding</h1>
  <p style="margin: 8px 0 0; color: {MUT}; font-size: 15px">Every page a visitor can reach, and the one path into the product. Every website page also links to Sign up, Log in and Book a demo from the header.</p>
  <div style="margin-top: 14px; display: flex; gap: 22px">{legend}</div>
  <div style="position: absolute; left: 0; right: 0; top: 160px; height: 1020px">
    {lane(60, 400, 'Website')}{lane(480, 270, 'Account')}{lane(770, 280, 'Onboarding')}
    <svg width="1440" height="1020" style="position: absolute; left: 0; top: 0; overflow: visible"><defs><marker id="wfarr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{MUT}"></path></marker></defs>{paths}</svg>
    {nodes}
    <div style="position: absolute; left: 545px; top: 105px; width: 520px; height: 154px; border: 1.5px dashed {MUT}; border-radius: 16px"></div><span style="position: absolute; left: 560px; top: 268px; font-size: 11.5px; color: {MUT}">Footer links · on every page</span>
    <span style="position: absolute; left: 900px; top: 360px; width: 210px; font-size: 11.5px; color: {MUT}">Reached from the hero, Pricing, Contact and the header</span>
  </div></div>'''
open(os.path.join(P, 'WfFlow.dc.html'), 'w').write(HEAD.replace('__T__', 'Wireframe · User flow') + flow + END.replace('__H__', '1180'))
print('wireframes ok')
