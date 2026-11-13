import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import kit3, comps
from kit3 import HF, P
TICK = lambda c='#1F9D6B', s=16: f'<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
DOT = lambda c: f'<span style="width: 8px; height: 8px; border-radius: 50%; background: {c}; flex: none"></span>'
BP = 'display: inline-flex; align-items: center; height: 40px; padding: 0 18px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-size: 14px; font-weight: 500'
BO = 'display: inline-flex; align-items: center; height: 40px; padding: 0 16px; border-radius: 999px; border: 1px solid #E2E2E6; background: #FFFFFF; color: #1F1F1F; font-size: 14px'
def st(tag, tagc, title, body, actions, where):
    return f'''<div style="display: flex; flex-direction: column; gap: 10px; padding: 22px; border-radius: 24px; background: #FFFFFF; border: 1px solid #ECECF0; box-shadow: 0 20px 40px -30px rgba(22,24,42,.25)">
      <span style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #8A8A8A"><span style="display: inline-flex; align-items: center; gap: 6px; color: {tagc}; font-weight: 500">{DOT(tagc)}{tag}</span>{where}</span>
      <b style="{HF}; font-size: 22px; font-weight: 400; line-height: 1.2; letter-spacing: -0.02em">{title}</b>
      <div style="font-size: 14px; color: #5C5C5C; line-height: 1.5">{body}</div>
      <div style="margin-top: auto; padding-top: 8px; display: flex; flex-wrap: wrap; gap: 8px">{actions}</div></div>'''
A, W, E, I = '#3B6CF6', '#B7791F', '#C2410C', '#1F9D6B'
cards = [
 st('Coming back', A, 'Welcome back, Vinay.', 'You stopped at <b style="font-weight: 600; color: #1F1F1F">Step 4/6 · Channels</b>. Everything before it is saved, and your card is just as you left it.', f'<span style="{BP}">Carry on →</span><span style="{BO}">Start over</span>', 'Any step'),
 st('Saving', I, 'Finish later?', 'Your progress is saved. We’ll send a link to <b style="font-weight: 600; color: #1F1F1F">vinay@…</b> and on WhatsApp so you can pick up on any device.', f'<span style="{BP}">Save and exit</span><span style="{BO}">Keep going</span>', 'Save and finish later'),
 st('Couldn’t read', W, 'We couldn’t read nilaandco.in', 'The site may be down, blocked or behind a login. Try another way; it takes a minute.', f'<span style="{BO}">Try another link</span><span style="{BO}">Upload price list</span><span style="{BO}">Type it in</span>', 'Step 2/6'),
 st('Check needed', W, '2 prices need a look', 'Your site lists <b style="font-weight: 600; color: #1F1F1F">Group session</b> at ₹1,200 on one page and ₹1,500 on another. Pick the right one so Vegham never guesses.', f'<span style="{BP}">Fix 2 items</span><span style="{BO}">Later</span>', 'Step 2/6'),
 st('Code not arriving', A, 'Didn’t get the code?', 'Meta sent a 6-digit code to <b style="font-weight: 600; color: #1F1F1F">+91 98765 43210</b>. It can take a minute. You can ask for a call instead in <b style="font-weight: 600; color: #1F1F1F">0:42</b>.', f'<span style="{BO}">Call me instead</span><span style="{BO}">Change number</span>', 'Connect WhatsApp'),
 st('Number in use', E, 'This number is with another provider', 'It’s already connected to a different WhatsApp service. Ask them to release it (it usually takes a day), or use a new number now.', f'<span style="{BP}">Use a new number</span><span style="{BO}">How to release it</span>', 'Connect WhatsApp'),
 st('Name review', W, 'Meta asked to change your display name', '“Nila &amp; Co Best Care” wasn’t approved. Names should match your business. Vegham keeps replying under your number meanwhile.', f'<span style="{BP}">Use “Nila &amp; Co”</span><span style="{BO}">Edit name</span>', 'After going live'),
 st('No WhatsApp yet', A, 'Go live without WhatsApp?', 'Vegham will answer on <b style="font-weight: 600; color: #1F1F1F">Website chat</b> now. Connect WhatsApp any time from Channels; we’ll remind you tomorrow.', f'<span style="{BP}">Go live with website</span><span style="{BO}">Connect WhatsApp</span>', 'Step 6/6'),
]
body = f'''<div style="padding: 52px 56px; background: #F5F5F7; box-sizing: border-box; font-family: Inter, system-ui, sans-serif; color: #1F1F1F">
  <h1 style="margin: 0; {HF}; font-size: 40px">Onboarding · when things go differently</h1>
  <p style="margin: 8px 0 28px; color: #6B6B6B; font-size: 16px">Each message says what happened, why, and the easiest next step. Nobody gets stuck or loses their progress.</p>
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px">{''.join(cards)}</div>
  <div style="margin-top: 22px; display: flex; gap: 18px; font-size: 13px; color: #6B6B6B">{''.join(f'<span style="display: inline-flex; align-items: center; gap: 6px">{DOT(c)}{t}</span>' for c, t in [(A, 'Information'), (I, 'Saved / done'), (W, 'Needs a look'), (E, 'Can’t continue this way')])}</div>
</div>'''
head = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>Onboarding states</title>')
open(os.path.join(P, 'ObStates.dc.html'), 'w').write(head + body + kit3.END.replace('__H__', '910'))
print('states ok')
