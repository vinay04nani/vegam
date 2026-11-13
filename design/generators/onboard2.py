import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import onboard as ob
import kit3, comps, dawn
from kit3 import HF, EY, AURTXT, P
# ---- app shell from app.py (without re-writing the app boards) ----
src = open(os.path.join(D, 'app.py')).read()
ns = {'__file__': os.path.join(D, 'app.py'), '__name__': 'appshell'}
exec(src.split('# ============ HOME ============')[0], ns)
shell, CARD, I, IC, BTN, OBTN, DBTN, aur = ns['shell'], ns['CARD'], ns['I'], ns['IC'], ns['BTN'], ns['OBTN'], ns['DBTN'], ns['aur']
TICK = ob.TICK
items = [('Connect WhatsApp', 'Done', True), ('Teach Vegham your services', '12 services', True), ('Forward your phone line', '2 minutes', False), ('Approve reminder messages', 'Meta reviews them', False), ('Invite your team', 'So they can step in', False), ('Import existing customers', 'CSV or Google Contacts', False)]
ck = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid #F0F0F3"><span style="width: 24px; height: 24px; flex: none; border-radius: 50%; {"background: #16182A" if done else "border: 1.5px solid #D4D4DA"}; display: inline-flex; align-items: center; justify-content: center">{TICK("#FFFFFF", 12) if done else ""}</span><span style="flex: 1"><span style="display: block; font-weight: 500; {"color: #8A8A8A; text-decoration: line-through" if done else ""}">{t}</span><span style="font-size: 12.5px; color: #8A8A8A">{d}</span></span>{"" if done else OBTN("Start")}</div>' for t, d, done in items)
empty = lambda icon, t, d, btn: f'<div style="flex: 1; padding: 22px; {CARD}; display: flex; flex-direction: column; align-items: flex-start; gap: 8px"><span style="width: 40px; height: 40px; border-radius: 12px; background: #F5F5F7; display: inline-flex; align-items: center; justify-content: center">{I(IC[icon], 18, "#16182A")}</span><b style="font-weight: 600; font-size: 15px">{t}</b><span style="font-size: 13.5px; color: #6B6B6B">{d}</span>{btn}</div>'
main = f'''<div style="padding: 24px 28px; display: flex; flex-direction: column; gap: 18px">
      <div class="vg-aur-host" style="position: relative; overflow: hidden; border-radius: 20px; background: #12141F; color: #FFFFFF; padding: 24px 28px; display: flex; flex-wrap: wrap; align-items: center; gap: 16px 28px">{aur()}
        <span style="flex: 1 1 420px"><span style="display: block; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #A5ABDB">Day 1 · you’re live</span><span style="display: block; margin-top: 6px; font-size: 18px">Vegham is answering customers on WhatsApp. Your first morning report arrives tomorrow at 8 AM.</span></span>
        <button type="button" style="height: 38px; padding: 0 16px; border: 0; border-radius: 999px; background: #FFFFFF; color: #12141F; font: inherit; font-weight: 500">Share booking link</button>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start">
        <div style="flex: 1.1; padding: 20px 22px; {CARD}">
          <div style="display: flex; justify-content: space-between; align-items: center"><b style="font-weight: 600; font-size: 16px">Your first day</b><span style="font-size: 13px; color: #6B6B6B">2 of 6 done</span></div>
          <div style="margin: 12px 0 4px; height: 6px; border-radius: 3px; background: #EDEDF0"><span style="display: block; width: 33%; height: 100%; border-radius: 3px; background: #16182A"></span></div>
          {ck}
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 16px">
          {empty('inbox', 'No conversations yet', 'When customers message you, Vegham replies here in seconds. Share your link to get the first one.', OBTN('Copy booking link'))}
          {empty('cal', 'Your calendar is ready', 'Bookings Vegham makes appear here, with reminders sent the day before.', OBTN('Add a booking yourself'))}
          {empty('spark', 'Vegham is live', '12 services and 6 answers learned. Teach it more any time.', OBTN('Open AI agents'))}
        </div>
      </div>
      <span style="font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
    </div>'''
h = kit3.HEAD.replace(re.search(r'<title>[^<]*</title>', kit3.HEAD).group(0), '<title>App · First day</title>')
h = re.sub(r'<div style="font-family: Inter, system-ui, sans-serif;[^"]*">$', '<div style="font-family: Inter, system-ui, sans-serif; color: #1F1F1F; background: #FFFFFF">', h)
open(os.path.join(P, 'AppFirstDay.dc.html'), 'w').write(h + shell('Home', 'Welcome to Vegham, Vinay', 'Friday, 6 November · Day 1 of your pilot', main, BTN('New booking')) + kit3.END.replace('__H__', '960'))

# ---- Mobile board ----
WM = ob.WM
def phone(stage, inner, label, uid):
    return f'<div style="flex: none; display: flex; flex-direction: column; align-items: center; gap: 10px"><div style="width: 340px; height: 720px; border-radius: 46px; background: #0B0C12; padding: 10px; box-sizing: border-box; box-shadow: 0 30px 60px -30px rgba(0,0,0,.5)"><div style="position: relative; width: 100%; height: 100%; border-radius: 36px; overflow: hidden; background: #03050E; color: #FFFFFF"><div aria-hidden="true" style="position: absolute; inset: 0">{dawn.scene(uid, 23, stage)}</div><div style="position: relative; height: 100%; display: flex; flex-direction: column">{inner}</div></div></div><span style="font-size: 13px; color: #6B6B6B">{label}</span></div>'
dots = lambda n: '<div style="display: flex; gap: 5px; justify-content: center; padding: 18px 0 0">' + ''.join(f'<span style="width: {18 if i == n else 6}px; height: 6px; border-radius: 3px; background: {"#FFFFFF" if i <= n else "rgba(255,255,255,.35)"}"></span>' for i in range(6)) + '</div>'
m0 = f'''{dots(-1)}<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 26px">{ob.mark('ribbon', 'mw', 70)}<h2 style="margin: 22px 0 0; {HF}; font-size: 36px; line-height: 1.08">Welcome, Vinay.<br><span style="color: #A9AECB">Let’s build your front desk.</span></h2><p style="margin: 12px 0 0; font-size: 14.5px; color: #C9CCDD">Six short steps · about 5 minutes</p></div><div style="padding: 0 18px 26px"><span style="display: flex; align-items: center; justify-content: center; height: 52px; border-radius: 999px; background: #FFFFFF; color: #12141F; font-weight: 500">Let’s begin →</span></div>'''
m2 = f'''{dots(1)}<div style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 16px 12px 0"><div style="background: #FFFFFF; color: #1F1F1F; border-radius: 26px 26px 0 0; padding: 22px 18px; display: flex; flex-direction: column; gap: 12px"><span style="font-size: 12px; color: #6B6B6B">Step 2 of 6</span><b style="{HF}; font-size: 26px; font-weight: 400; letter-spacing: -0.03em">Here’s what Vegham learned</b><div style="display: flex; gap: 6px">{''.join(f'<span style="flex: 1; padding: 10px 0; border-radius: 14px; background: #F5F5F7; text-align: center"><span style="display: block; font-family: Inter Tight, sans-serif; font-size: 24px">{n}</span><span style="font-size: 11.5px; color: #6B6B6B">{l}</span></span>' for n, l in [(12, 'services'), (8, 'prices'), (6, 'answers')])}</div>{''.join(f'<span style="display: flex; justify-content: space-between; padding: 9px 0; border-top: 1px solid #F0F0F3; font-size: 14px"><span>{n}</span><b style="font-weight: 600">{p}</b></span>' for n, p in [('First visit', '₹500'), ('Standard appointment', '₹1,200'), ('Follow-up', '₹300')])}<span style="display: flex; align-items: center; justify-content: center; height: 50px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-weight: 500">Continue →</span></div></div>'''
m6 = f'''{dots(5)}<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 34px 22px 0"><h2 style="margin: 0; {HF}; font-size: 40px; line-height: 1.04">Your front desk is open.</h2><p style="margin: 12px 0 0; font-size: 14.5px; color: #F2F4FA">Vegham is answering customers, day and night.</p></div><div style="padding: 0 14px 22px; display: flex; flex-direction: column; gap: 8px"><div style="background: #FFFFFF; color: #1F1F1F; border-radius: 22px; padding: 16px; display: flex; gap: 10px; align-items: center"><span style="flex: 1"><b style="display: block; font-weight: 600">vegham.ai/nila</b><span style="font-size: 12.5px; color: #6B6B6B">Your booking link</span></span><span style="padding: 8px 14px; border-radius: 999px; border: 1px solid #E2E2E6; font-size: 13px">Share</span></div><span style="display: flex; align-items: center; justify-content: center; height: 52px; border-radius: 999px; background: #16182A; color: #FFFFFF; font-weight: 500">Go to my dashboard →</span></div>'''
mob = f'''<div style="padding: 56px; background: #F5F5F7; box-sizing: border-box"><h1 style="margin: 0; {HF}; font-size: 40px">Onboarding on phones</h1><p style="margin: 8px 0 30px; color: #6B6B6B; font-size: 16px">Full-screen steps, the sky still changes, the main button sits at the bottom within thumb reach.</p><div style="display: flex; flex-wrap: wrap; gap: 36px">{phone(0, m0, 'Welcome', 'mob0')}{phone(2, m2, 'Teach · results', 'mob2')}{phone(6, m6, 'Go live', 'mob6')}</div></div>'''
h = ob.HEAD.replace(re.search(r'<title>[^<]*</title>', ob.HEAD).group(0), '<title>Onboarding · phones</title>')
open(os.path.join(P, 'ObMobile.dc.html'), 'w').write(h + mob + kit3.END.replace('__H__', '980'))

# ---- Motion storyboard ----
rows = [('Between steps', 'Card slides up 28 px and fades in; the previous card fades out and drifts up', '0.8 s · ease-out (0.2, 0.7, 0.2, 1)', 'Simple fade'),
        ('The sky', 'Each step moves the sky one stage: night → blue hour → dawn → sunrise; aurora fades as light grows', '4 s cross-fade, behind everything', 'Instant change'),
        ('Progress stars', 'Finished step fills white with a tick; the current star pulses softly', '0.4 s fill · 2.4 s pulse', 'No pulse'),
        ('Live preview', 'Updates as you type: business card fills in, chat rewrites in the new tone', '0.3 s fade per change', 'Instant'),
        ('Reading the website', 'Pages tick off one by one; a light sweep runs across the progress bar; counts climb', '0.35 s per page · 2.4 s count-up', 'Final numbers only'),
        ('Voice sample', 'Waveform moves while the sample plays', 'Plays only on tap', 'Static bars'),
        ('Test drive', 'Messages appear like a real chat with a short typing pause', '0.6–0.9 s between messages', 'All at once'),
        ('Connected channel', 'Channel tile lights up and its line to Vegham turns solid', '0.5 s', 'Instant'),
        ('Go live', 'Sky brightens to sunrise, the sun rises behind the mountains, then the headline and share card rise in', 'Sun 3.5 s · text from 0.2 s · card at 0.65 s', 'Sunrise shown, no movement')]
tbl = ''.join(f'<tr style="border-top: 1px solid #EFEFEF"><th scope="row" style="text-align: left; padding: 16px; font-weight: 500; vertical-align: top">{a}</th><td style="padding: 16px; color: #3D3D3D; vertical-align: top">{b}</td><td style="padding: 16px; color: #5C5C5C; vertical-align: top; white-space: nowrap">{c}</td><td style="padding: 16px; color: #5C5C5C; vertical-align: top">{d}</td></tr>' for a, b, c, d in rows)
strip = ''.join(f'<div style="flex: 1; display: flex; flex-direction: column; gap: 6px"><div style="position: relative; height: 90px; border-radius: 14px; overflow: hidden">{dawn.scene("sb" + str(i), 23, i)}</div><span style="font-size: 12px; color: #6B6B6B">{i}. {n}</span></div>' for i, n in enumerate(['Welcome', 'Business', 'Teach', 'Assistant', 'Channels', 'Test drive', 'Go live']))
sb = f'''<div style="padding: 56px; background: #FFFFFF; box-sizing: border-box"><h1 style="margin: 0; {HF}; font-size: 40px">Onboarding motion</h1><p style="margin: 8px 0 26px; color: #6B6B6B; font-size: 16px">One easing curve, calm timings, and a still version for anyone who turns on “reduce motion”.</p>
    <div style="display: flex; gap: 10px">{strip}</div>
    <div style="margin-top: 28px; border: 1px solid #ECECF0; border-radius: 20px; overflow: hidden"><table style="width: 100%; border-collapse: collapse; font-size: 14.5px"><thead><tr style="background: #F7F7F8"><th scope="col" style="text-align: left; padding: 14px 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">Moment</th><th scope="col" style="text-align: left; padding: 14px 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">What moves</th><th scope="col" style="text-align: left; padding: 14px 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">Timing</th><th scope="col" style="text-align: left; padding: 14px 16px; font-size: 13px; color: #6B6B6B; font-weight: 500">Reduce motion</th></tr></thead><tbody>{tbl}</tbody></table></div></div>'''
h = ob.HEAD.replace(re.search(r'<title>[^<]*</title>', ob.HEAD).group(0), '<title>Onboarding motion</title>')
open(os.path.join(P, 'ObMotion.dc.html'), 'w').write(h + sb + kit3.END.replace('__H__', '1150'))
print('onboard2 ok')
