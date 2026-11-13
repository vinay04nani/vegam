import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import comps, polish, landscape
P = os.path.join(D, '..', 'vegam-ui', 'project')
CSS = '''
@keyframes vg3-spin{to{transform:rotate(360deg)}}
@keyframes vg3-ring{from{transform:rotateX(74deg) rotateZ(0deg)}to{transform:rotateX(74deg) rotateZ(360deg)}}
@keyframes vg3-ring2{from{transform:rotateX(68deg) rotateY(14deg) rotateZ(360deg)}to{transform:rotateX(68deg) rotateY(14deg) rotateZ(0deg)}}
@keyframes vg3-ribbon{0%,100%{transform:perspective(900px) rotateX(62deg) rotateZ(-10deg) translate3d(-4%,0,0)}50%{transform:perspective(900px) rotateX(58deg) rotateZ(8deg) translate3d(4%,-24px,0)}}
@keyframes vg3-ribbon2{0%,100%{transform:perspective(900px) rotateX(64deg) rotateZ(12deg) translate3d(3%,0,0)}50%{transform:perspective(900px) rotateX(60deg) rotateZ(-6deg) translate3d(-5%,18px,0)}}
@keyframes vg3-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes vg3-breathe{0%,100%{box-shadow:0 0 80px rgba(45,212,191,.35),0 0 180px rgba(124,58,237,.28),inset -24px -34px 70px rgba(5,6,14,.65)}50%{box-shadow:0 0 110px rgba(45,212,191,.5),0 0 220px rgba(124,58,237,.38),inset -24px -34px 70px rgba(5,6,14,.65)}}
.vg3-spin{animation:vg3-spin 14s linear infinite}
.vg3-ring{animation:vg3-ring 22s linear infinite}
.vg3-ring2{animation:vg3-ring2 30s linear infinite}
.vg3-rib{animation:vg3-ribbon 14s ease-in-out infinite}
.vg3-rib2{animation:vg3-ribbon2 18s ease-in-out infinite}
.vg3-float{animation:vg3-float 7s ease-in-out infinite}
.vg3-orb{animation:vg3-breathe 6s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.vg3-spin,.vg3-ring,.vg3-ring2,.vg3-rib,.vg3-rib2,.vg3-float,.vg3-orb{animation:none!important}}
'''
AUR = 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,.9) 18%, rgba(14,165,164,.9) 36%, rgba(59,108,246,.9) 58%, rgba(124,58,237,.9) 78%, transparent 100%)'
def scene():
    ring = lambda size, cls, op, dot, delay: f'''<div class="{cls}" style="position: absolute; left: 50%; top: 50%; width: {size}px; height: {size}px; margin: -{size // 2}px 0 0 -{size // 2}px; border-radius: 50%; border: 1px solid rgba(255,255,255,{op}); transform: rotateX(74deg); animation-delay: {delay}s"><span style="position: absolute; left: 50%; top: -4px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: {dot}; box-shadow: 0 0 14px {dot}, 0 0 28px {dot}"></span></div>'''
    stars = ', '.join(f'radial-gradient(1px 1px at {x}% {y}%, rgba(255,255,255,{a}), transparent)' for x, y, a in [(8,12,.8),(18,30,.5),(27,8,.7),(35,22,.4),(46,6,.6),(58,18,.8),(66,9,.5),(74,26,.7),(84,14,.6),(92,32,.5),(12,48,.4),(88,52,.4),(6,70,.3),(94,74,.3)])
    return f'''<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden; border-radius: inherit; background: radial-gradient(120% 80% at 50% 0%, #161A33 0%, #0B0D18 55%, #07080F 100%)">
          <div style="position: absolute; inset: 0; background-image: {stars}"></div>
          <div class="vg3-rib" style="position: absolute; left: -20%; right: -20%; top: 24%; height: 150px; background: {AUR}; filter: blur(34px); opacity: .5"></div>
          <div class="vg3-rib2" style="position: absolute; left: -25%; right: -15%; top: 34%; height: 110px; background: {AUR}; filter: blur(42px); opacity: .4"></div>
          <div class="vg3-float" style="position: absolute; left: 50%; top: 28%; width: 560px; height: 560px; margin: -280px 0 0 -280px">
            {ring(560, 'vg3-ring2', .10, '#7C3AED', -9)}
            {ring(450, 'vg3-ring', .16, '#2DD4BF', -4)}
            {ring(350, 'vg3-ring2', .14, '#3B6CF6', -15)}
            <div class="vg3-orb" style="position: absolute; left: 50%; top: 50%; width: 210px; height: 210px; margin: -105px 0 0 -105px; border-radius: 50%; background: radial-gradient(circle at 34% 28%, rgba(255,255,255,.95) 0 5%, rgba(190,255,236,.75) 12%, rgba(45,212,191,.6) 30%, rgba(59,108,246,.6) 54%, rgba(124,58,237,.65) 74%, rgba(10,11,22,.95) 100%)">
              <div class="vg3-spin" style="position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,.28) 40deg, transparent 90deg, rgba(61,214,140,.35) 170deg, transparent 230deg, rgba(219,39,119,.25) 300deg, transparent 360deg); filter: blur(6px); opacity: .9"></div>
              <div style="position: absolute; inset: 8%; border-radius: 50%; background: radial-gradient(circle at 70% 78%, rgba(255,255,255,.18), transparent 45%)"></div>
            </div>
          </div>
          <div style="position: absolute; left: 0; right: 0; bottom: 0; height: 55%; background: linear-gradient(180deg, rgba(7,8,15,0) 0%, rgba(7,8,15,.85) 60%)"></div>
        </div>'''
def glass_card(kind):
    TICK = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
    if kind == 'login':
        title = 'Your front desk kept working.'
        items = [('Chat receptionist', 'Replies on WhatsApp, Instagram and your website'), ('Voice receptionist', 'Answers calls, books and transfers'), ('Bookings and reminders', 'Fills your calendar, reminds the day before'), ('Morning report', 'What came in overnight, at 8 AM')]
    else:
        title = 'Live by tomorrow. Free for 30 days.'
        items = [('Create your account', 'Takes a minute'), ('Connect WhatsApp and your phone', 'Guided, about 10 minutes'), ('Teach it your business', 'Paste your website or add services'), ('Go live', 'Your first customer, answered')]
    rows = ''.join(f'<li style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 0; border-top: 1px solid rgba(255,255,255,.08)"><span style="margin-top: 2px">{TICK}</span><span><span style="display: block; font-size: 15px; color: #FFFFFF">{t}</span><span style="display: block; font-size: 13.5px; color: #9EA3BD">{d}</span></span></li>' for t, d in items)
    logos = ''.join(f'<span style="display: inline-flex; width: 36px; height: 36px; border-radius: 12px; background: rgba(255,255,255,.92); align-items: center; justify-content: center">{comps.logo(k, 18)}</span>' for k in ['whatsapp', 'instagram', 'messenger', 'google', 'meta', 'stripe'])
    return f'''<div style="position: relative; width: 100%; max-width: 460px; border-radius: 28px; padding: 30px 30px 26px; box-sizing: border-box; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); box-shadow: 0 30px 80px -30px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08); backdrop-filter: blur(18px) saturate(1.3); -webkit-backdrop-filter: blur(18px) saturate(1.3); color: #FFFFFF">
          <span style="font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #9EA3BD">{"Welcome back" if kind == "login" else "Your free pilot"}</span>
          <h2 style="margin: 10px 0 14px; font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 30px; line-height: 1.15; letter-spacing: -0.03em">{title}</h2>
          <ul style="margin: 0; padding: 0; list-style: none">{rows}</ul>
          <div style="margin-top: 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap"><span style="font-size: 13px; color: #9EA3BD">Works with</span><span style="display: flex; gap: 6px">{logos}</span></div>
        </div>'''
def left(kind):
    return f'''<div style="flex: 1 1 560px; min-width: 0; padding: 16px; box-sizing: border-box">
      <div style="position: relative; height: 100%; min-height: 680px; border-radius: 28px; overflow: hidden; display: flex; align-items: flex-end; justify-content: center; padding: 40px 32px; box-sizing: border-box">
        {landscape.landscape(kind, seed=7 if kind == 'login' else 19)}
        {glass_card(kind)}
      </div>
    </div>'''
for f, kind in [('Login', 'login'), ('Signup', 'signup')]:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    a = s.index('<div style="flex: 1 1 560px; min-width: 0; padding: 16px; box-sizing: border-box">')
    b = s.index('<div style="flex: 1 1 560px; min-width: 0; display: flex; align-items: center; justify-content: center; padding: 48px 24px')
    s = s[:a] + left(kind) + '\n    ' + s[b:]
    if 'vga-sway1' not in s.split('</style>')[0]:
        s = s.replace('</style>', landscape.CSS + '</style>', 1)
    s = polish.polish(s)
    # form buttons in pill style already; switch continue grey to ink
    open(p, 'w').write(s); print(f, len(s))
