import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from kit3 import P, HF, EY, WRAP, CHECK, line2
import marks
def rd(f): return open(os.path.join(P, f)).read()
def wr(f, s): open(os.path.join(P, f), 'w').write(s)
def bump(s, by):
    m = re.search(r'"height":(\d+)\}', s); return s[:m.start()] + f'"height":{int(m.group(1)) + by}}}' + s[m.end():]

# ---------- LANDING: audio-player button + pricing teaser ----------
L = rd('LandingV2.dc.html')
old = '<a href="#" style="display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); color: #FFFFFF; text-decoration: none; font-weight: 500">Hear a sample call</a>'
bars = ''.join(f'<span class="vg-wave" style="width: 3px; height: {h}px; border-radius: 2px; background: #FFFFFF; opacity: .75; animation-delay: {(i % 7) * .12:.2f}s"></span>' for i, h in enumerate([8, 14, 20, 12, 18, 9, 16, 22, 11, 15, 7, 13]))
new = f'<a href="#" aria-label="Play a 42-second sample call" style="display: inline-flex; align-items: center; gap: 12px; height: 52px; padding: 0 20px 0 6px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); color: #FFFFFF; text-decoration: none; font-weight: 500"><span style="width: 40px; height: 40px; border-radius: 50%; background: #FFFFFF; display: inline-flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="#12141F"><path d="M7 4v16l13-8z"></path></svg></span>Hear a sample call<span aria-hidden="true" style="display: inline-flex; align-items: center; gap: 2px; height: 22px">{bars}</span><span style="font-size: 13px; color: #C9CCDD; font-variant-numeric: tabular-nums">0:42</span></a>'
if old in L: L = L.replace(old, new, 1)
pa = L.index('  <!-- Pricing -->'); pb = L.index('  <!-- FAQ two column (Razorpay) -->')
plans = [('Starter', '₹2,999', 'Answer every message fast', False), ('Growth', '₹7,999', 'Adds AI calls, Instagram and follow-ups', True), ('Pro', 'from ₹19,999', 'Multi-location, AI lead calls, payments', False)]
pc = ''.join(f'<a href="#" class="vg-lift" style="flex: 1 1 280px; display: flex; flex-direction: column; gap: 6px; padding: 28px; border-radius: 20px; text-decoration: none; {"background: #16182A; color: #FFFFFF" if hl else "background: #FFFFFF; color: #1F1F1F; border: 1px solid #E8E8EB"}"><span style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 17px; font-weight: 500">{n}</span>{"<span style=\'font-size: 12px; padding: 3px 10px; border-radius: 999px; background: rgba(255,255,255,.14)\'>Recommended</span>" if hl else ""}</span><span style="font-family: \'Inter Tight\', sans-serif; font-size: 40px; letter-spacing: -0.03em">{p}<span style="font-family: Inter, sans-serif; font-size: 14px; opacity: .65"> / month</span></span><span style="font-size: 14.5px; opacity: .75">{d}</span></a>' for n, p, d, hl in plans)
teaser = f'''  <!-- Pricing teaser -->
  <section style="background: #F7F7F8; view-timeline-name: --vg-sec-pricing">
    <div style="max-width: 1200px; margin: 0 auto; padding: 144px 32px">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px">
        <div><span style="{EY}">Pricing</span><h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">{line2('Simple pricing.', 'Start with a free pilot.')}</h2></div>
        <a href="#" style="display: inline-flex; align-items: center; height: 46px; padding: 0 22px; border-radius: 999px; border: 1px solid #D4D4DA; color: #1F1F1F; text-decoration: none; font-weight: 500">Compare all plans →</a>
      </div>
      <div style="margin-top: 44px; display: flex; flex-wrap: wrap; gap: 14px">{pc}</div>
      <p style="margin: 18px 0 0; font-size: 14px; color: #6B6B6B">30 days free on any plan · Prices exclude 18% GST · WhatsApp fees at cost</p>
    </div>
  </section>

'''
L = L[:pa] + teaser + L[pb:]
wr('LandingV2.dc.html', L)

# ---------- PRODUCT: unify bubbles, animate bento, agents section ----------
S = rd('Product.dc.html')
S = S.replace('background: #F5F5F7; padding: 8px 12px; border-radius: 14px 14px 14px 4px', 'background: #16182A; color: #FFFFFF; padding: 8px 12px; border-radius: 14px 14px 14px 4px')
langs = '<span>Hello</span><span style="opacity: .75">नमस्ते</span><span style="opacity: .6">హలో</span><span style="opacity: .5">வணக்கம்</span><span style="opacity: .4">Hola</span>'
if langs in S:
    S = S.replace(langs, ''.join(f'<span class="vg-tw" style="animation-duration: 5s; animation-delay: {i * .9:.1f}s">{w}</span>' for i, w in enumerate(['Hello', 'नमस्ते', 'హలో', 'வணக்கம்', 'Hola'])), 1)
S = S.replace('2:14<span', '2<span class="vg-tw" style="animation-duration: 1.4s">:</span>14<span', 1)
agent_sec = f'''  <section>
    <div style="{WRAP}; padding: 104px 32px 0; display: flex; flex-wrap: wrap; gap: 48px 72px; align-items: center">
      <div style="flex: 1 1 400px"><span style="{EY}">AI agents</span><h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">{line2('Your agents.', 'Your rules.')}</h2><p style="margin: 16px 0 0; max-width: 460px; font-size: 18px; color: #5C5C5C">Each agent has its own settings: what it says, how it sounds, and exactly when it hands over to your team.</p>
        <ul style="margin: 22px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 15.5px; color: #3D3D3D">{''.join(f'<li style="display: flex; gap: 10px; align-items: center">{CHECK}{t}</li>' for t in ['Name, tone and voice', 'Hand-over rules you control', 'Knowledge you approve, nothing else', 'Test before anything goes live'])}</ul></div>
      <div style="flex: 1 1 480px; padding: 28px; border-radius: 28px; border: 1px solid #ECECF0; background: #FFFFFF; box-shadow: 0 30px 60px -40px rgba(22,24,42,.35); display: flex; flex-direction: column; gap: 18px; font-size: 14.5px">
        <div style="display: flex; align-items: center; gap: 12px">{marks.mark('ribbon', 'prodag', 40)}<span style="flex: 1"><b style="display: block; font-weight: 600; font-size: 16px">Voice receptionist</b><span style="font-size: 13px; color: #8A8A8A">Answers your phone line</span></span><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #1F9D6B"><span style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>Live</span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px"><span style="padding: 12px 14px; border-radius: 12px; background: #F5F5F7"><span style="display: block; font-size: 12px; color: #8A8A8A">Name</span>Vegham</span><span style="padding: 12px 14px; border-radius: 12px; background: #F5F5F7"><span style="display: block; font-size: 12px; color: #8A8A8A">Languages</span>English, हिन्दी</span></div>
        <div>{''.join(f'<span style="display: block; margin-top: 12px"><span style="display: flex; justify-content: space-between; font-size: 13px; color: #5C5C5C"><span>{a}</span><span>{b}</span></span><span style="display: block; margin-top: 8px; height: 6px; border-radius: 3px; background: #EDEDF0; position: relative"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: {p}%; border-radius: 3px; background: #16182A"></span><span style="position: absolute; left: {p}%; top: -6px; width: 18px; height: 18px; margin-left: -9px; border-radius: 50%; background: #FFFFFF; border: 2px solid #16182A; box-sizing: border-box"></span></span></span>' for a, b, p in [('Warm', 'Formal', 35), ('Short', 'Detailed', 55)])}</div>
        <div style="padding-top: 14px; border-top: 1px solid #F0F0F3"><span style="display: block; font-size: 12px; color: #8A8A8A; margin-bottom: 8px">Hand over to a person when…</span>{''.join(f'<span style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0"><span>{t}</span><span role="switch" aria-checked="{"true" if on else "false"}" style="position: relative; width: 36px; height: 22px; border-radius: 999px; background: {"#16182A" if on else "#D4D4DA"}"><span style="position: absolute; top: 3px; {"right: 3px" if on else "left: 3px"}; width: 16px; height: 16px; border-radius: 50%; background: #FFFFFF"></span></span></span>' for t, on in [('The caller asks for a person', True), ('The caller sounds upset', True), ('It’s about a refund', True), ('After 8 PM', False)])}</div>
        <span style="font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample settings</span>
      </div>
    </div>
  </section>
'''
ia = S.index('<span style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B">Integrations</span>')
sa = S.rindex('  <section', 0, ia)
S = S[:sa] + agent_sec + S[sa:]
wr('Product.dc.html', bump(S, 700))

# ---------- COMPANY: founder note, data, press kit ----------
C = rd('Company.dc.html')
swatch = ''.join(f'<span style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: #6B6B6B"><span style="width: 64px; height: 44px; border-radius: 12px; background: {c}; border: 1px solid #ECECF0"></span>{n}</span>' for c, n in [('#FFFFFF', 'White'), ('#F5F5F7', 'Mist'), ('#16182A', 'Ink'), ('linear-gradient(100deg, #10B981, #0EA5A4, #3B6CF6, #7C3AED, #DB2777)', 'Aurora')])
co = f'''  <section>
    <div style="{WRAP}; padding: 104px 32px 0; display: flex; flex-wrap: wrap; gap: 40px 72px; align-items: center">
      <div style="flex: 0 0 auto"><span role="img" aria-label="Founder photo placeholder" style="display: flex; width: 200px; height: 200px; border-radius: 50%; background: #F1F1F4; border: 1px dashed #C9C9D1; align-items: center; justify-content: center; font-size: 13px; color: #8A8A8A">[Photo]</span></div>
      <div style="flex: 1 1 520px"><span style="{EY}">A note from the founder</span>
        <p style="margin: 16px 0 0; {HF}; font-size: 30px; line-height: 1.35; letter-spacing: -0.02em; color: #1F1F1F">“[Your personal note: why you started Vegham, the moment you saw a business lose a customer to a missed call, and what you want every owner to feel.]”</p>
        <span style="display: block; margin-top: 18px; font-size: 15px; color: #5C5C5C">[Founder name], Founder</span></div>
    </div>
  </section>
  <section>
    <div style="{WRAP}; padding: 104px 32px 112px; display: flex; flex-wrap: wrap; gap: 16px">
      <a href="#" class="vg-lift" style="flex: 1 1 400px; display: flex; flex-direction: column; gap: 10px; padding: 32px; border-radius: 28px; background: #16182A; color: #FFFFFF; text-decoration: none"><span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #A5ABDB">How we handle your data</span><span style="{HF}; font-size: 30px; line-height: 1.15">Encrypted, never sold,<br>always yours.</span><span style="color: #C3C6DA">Read our security and privacy promises →</span></a>
      <div style="flex: 1 1 400px; display: flex; flex-direction: column; gap: 14px; padding: 32px; border-radius: 28px; border: 1px solid #ECECF0"><span style="{EY}">Press kit</span><span style="{HF}; font-size: 30px; line-height: 1.15">Logos and colours</span>
        <div style="display: flex; align-items: center; gap: 18px">{marks.mark('ribbon', 'press', 56)}<span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 34px; letter-spacing: -0.045em; color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text">vegham</span></div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px">{swatch}</div>
        <a href="#" style="align-self: flex-start; display: inline-flex; align-items: center; height: 42px; padding: 0 18px; border-radius: 999px; border: 1px solid #D4D4DA; color: #1F1F1F; text-decoration: none; font-size: 14.5px">Download press kit (ZIP)</a></div>
    </div>
  </section>
'''
ca = C.index('  <section style="padding: 0 32px 112px">')
C = C[:ca] + co + C[ca:]
wr('Company.dc.html', bump(C, 900))
print('polish2 ok')
