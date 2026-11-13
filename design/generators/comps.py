"""Interactive, animated components for the Vegham site designs. Pure HTML + CSS (no JS)."""
import re

brands_src = open('/home/user/vegam/frontend/src/content/brands.ts').read()
def logo(k, size=22, color=None):
    m = re.search(r'\n\s+' + k + r':\s*\{\s*title:\s*"([^"]*)",\s*hex:\s*"([^"]*)",\s*path:\s*"([^"]*)"', brands_src)
    return f'<svg aria-hidden="true" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{color or m.group(2)}"><path d="{m.group(3)}"></path></svg>'

PHONE = '<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>'
GLOBE = '<svg aria-hidden="true" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="{c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path></svg>'

CSS = r'''

@keyframes vg-aur1{0%{transform:translate3d(-8%,0,0) rotate(-6deg) scaleY(1)}50%{transform:translate3d(6%,5%,0) rotate(3deg) scaleY(1.25)}100%{transform:translate3d(-8%,0,0) rotate(-6deg) scaleY(1)}}
@keyframes vg-aur2{0%{transform:translate3d(6%,4%,0) rotate(5deg)}50%{transform:translate3d(-6%,-2%,0) rotate(-4deg)}100%{transform:translate3d(6%,4%,0) rotate(5deg)}}
@keyframes vg-curtain{0%{background-position:0 0}100%{background-position:280px 0}}
.vg-aur1{animation:vg-aur1 22s ease-in-out infinite}
.vg-aur2{animation:vg-aur2 28s ease-in-out infinite}
.vg-curtain{animation:vg-curtain 40s linear infinite}
@media (prefers-reduced-motion: reduce){.vg-aur1,.vg-aur2,.vg-curtain{animation:none!important}}
@property --vg-a{syntax:'<angle>';initial-value:0deg;inherits:false}
@property --vg-n{syntax:'<integer>';initial-value:0;inherits:false}
@keyframes vg-spin{to{transform:rotate(360deg)}}
@keyframes vg-spin-r{to{transform:rotate(-360deg)}}
@keyframes vg-border{to{--vg-a:360deg}}
@keyframes vg-count{from{--vg-n:0}to{--vg-n:var(--to)}}
@keyframes vg-pop{0%{opacity:0;transform:translateY(8px) scale(.96)}12%,80%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-8px)}}
@keyframes vg-ring{0%{transform:scale(.6);opacity:.55}100%{transform:scale(1.9);opacity:0}}
@keyframes vg-flow{0%{offset-distance:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{offset-distance:100%;opacity:0}}
@keyframes vg-left{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes vg-right{from{transform:translateX(-50%)}to{transform:translateX(0)}}
@keyframes vg-type{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes vg-drift{from{transform:translateX(-12%)}to{transform:translateX(112%)}}
@keyframes vg-twinkle{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes vg-blink{0%,40%{opacity:1}50%,60%{opacity:.15}70%,100%{opacity:1}}
@keyframes vg-sunpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
@keyframes vg-reveal{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
@keyframes vg-fill{from{transform:scaleY(0)}to{transform:scaleY(1)}}
.vg-count{counter-reset:vgn var(--vg-n);animation:vg-count 2.4s cubic-bezier(.2,.7,.2,1) .4s forwards}
.vg-count::after{content:counter(vgn)}
.vg-orbit{animation:vg-spin 48s linear infinite}
.vg-upright{animation:vg-spin-r 48s linear infinite}
.vg-ringfx{animation:vg-ring 2.6s ease-out infinite}
.vg-popfx{opacity:0;animation:vg-pop 6s ease-in-out infinite}
.vg-flowdot{offset-rotate:0deg;animation:vg-flow 3.2s ease-in-out infinite}
.vg-rowL{animation:vg-left 60s linear infinite}
.vg-rowR{animation:vg-right 60s linear infinite}
.vg-rowL:hover,.vg-rowR:hover{animation-play-state:paused}
.vg-border{background:conic-gradient(from var(--vg-a),#16182A 0deg,#C9CAD3 90deg,#16182A 180deg,#C9CAD3 270deg,#16182A 360deg);animation:vg-border 8s linear infinite}
.vg-typefx{animation:vg-type 1.1s steps(28) both}
.vg-cloud{animation:vg-drift linear infinite}
.vg-tw{animation:vg-twinkle 2.4s ease-in-out infinite}
.vg-bl{animation:vg-blink 7s steps(1) infinite}
.vg-sun{transform-box:fill-box;transform-origin:center;animation:vg-sunpulse 4s ease-in-out infinite}
.vg-tabs-in{position:absolute;opacity:0;pointer-events:none}
.vg-panel{display:none}
#vg-t1:checked~.vg-panels .vg-p1,#vg-t2:checked~.vg-panels .vg-p2,#vg-t3:checked~.vg-panels .vg-p3,#vg-t4:checked~.vg-panels .vg-p4{display:flex}
#vg-t1:checked~.vg-tabbar label[for=vg-t1],#vg-t2:checked~.vg-tabbar label[for=vg-t2],#vg-t3:checked~.vg-tabbar label[for=vg-t3],#vg-t4:checked~.vg-tabbar label[for=vg-t4]{background:#FFFFFF;color:#141414;box-shadow:0 1px 2px rgba(0,0,0,.08),0 0 0 1px #E6E6EA}
.vg-tabbar label{cursor:pointer;transition:background .2s,color .2s}
.vg-tabs-in:focus-visible~.vg-tabbar{outline:2px solid #7C8CFF;outline-offset:4px;border-radius:999px}
.vg-before{display:flex}.vg-after{display:none}
.vg-knob{background:#E5484D}
.vg-tabbar label{color:#5C5C5C}
.vg-billing label{color:#5C5C5C}
#vg-ba:checked~.vg-ba .vg-before{display:none}
#vg-ba:checked~.vg-ba .vg-after{display:flex}
#vg-ba:checked~.vg-switch .vg-knob{transform:translateX(28px);background:#1F9D6B}
#vg-ba:checked~.vg-switch .vg-l1{color:#8A8A8A}
#vg-ba:not(:checked)~.vg-switch .vg-l2{color:#8A8A8A}
.vg-knob{transition:transform .3s cubic-bezier(.3,1.4,.5,1),background .3s}
.vg-y{display:none}
#vg-yr:checked~* .vg-m{display:none}
#vg-yr:checked~* .vg-y{display:inline}
#vg-mo:checked~.vg-billing label[for=vg-mo],#vg-yr:checked~.vg-billing label[for=vg-yr]{background:#16182A;color:#FFFFFF}
.vg-billing label{cursor:pointer;transition:background .2s,color .2s}
@keyframes vg-reveal2{from{opacity:0;transform:translateY(56px);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
@keyframes vg-word{from{color:#D4D4D8}to{color:#141414}}
@keyframes vg-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes vg-zoom{from{transform:scale(.9);border-radius:48px}to{transform:scale(1);border-radius:0}}
@keyframes vg-zoomc{from{transform:scale(.92)}to{transform:scale(1)}}
@keyframes vg-par{from{transform:translateY(40px)}to{transform:translateY(-40px)}}
@keyframes vg-hero{from{opacity:0;transform:translateY(24px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
.vg-hero{animation:vg-hero 1s cubic-bezier(.2,.7,.2,1) both}
@supports (animation-timeline: view()){
  .vg-rv{animation:vg-reveal2 linear both;animation-timeline:view();animation-range:entry 0% cover 30%}
  .vg-wd{animation:vg-word linear both;animation-timeline:view()}
  .vg-bar{animation:vg-grow linear both;animation-timeline:scroll(root)}
  .vg-zoom{animation:vg-zoom linear both;animation-timeline:view();animation-range:entry 0% cover 35%}
  .vg-zoomc{animation:vg-zoomc linear both;animation-timeline:view();animation-range:entry 0% cover 40%}
  .vg-par{animation:vg-par linear both;animation-timeline:view()}
  .vg-progress{transform-origin:top;animation:vg-fill linear both;animation-timeline:view();animation-range:entry 20% exit 60%}
}
@media (prefers-reduced-motion: reduce){
  .vg-count{animation:none;--vg-n:var(--to)}
  .vg-orbit,.vg-upright,.vg-ringfx,.vg-flowdot,.vg-rowL,.vg-rowR,.vg-border,.vg-cloud,.vg-tw,.vg-bl,.vg-sun,.vg-rv,.vg-progress,.vg-typefx,.vg-hero,.vg-wd,.vg-bar,.vg-zoom,.vg-zoomc,.vg-par{animation:none!important}
  .vg-popfx{animation:none;opacity:1}
}
'''

def count(n, extra=''):
    return f'<span class="vg-count" style="--to: {n}; font-variant-numeric: tabular-nums; {extra}" aria-label="{n}"></span>'

# ---------- 1. Channel hub (orbit) ----------
def orbit(size=460):
    items = [
        (logo('whatsapp', 26), 0), (PHONE.format(s=24, c='#16182A'), 60), (logo('instagram', 26), 120),
        (logo('messenger', 26), 180), (GLOBE.format(s=24, c='#16182A'), 240), (logo('meta', 26), 300),
    ]
    r = size * 0.38
    nodes = ''
    for svg, a in items:
        nodes += f'''<div style="position: absolute; left: 50%; top: 50%; width: 0; height: 0; transform: rotate({a}deg) translateX({r:.0f}px) rotate(-{a}deg)">
            <div class="vg-upright" style="position: absolute; left: -32px; top: -32px; width: 64px; height: 64px">
              <span style="display: flex; width: 64px; height: 64px; border-radius: 20px; background: #FFFFFF; border: 1px solid #ECECF0; box-shadow: 0 10px 24px -14px rgba(22,24,42,.35); align-items: center; justify-content: center">{svg}</span>
            </div>
          </div>'''
    pops = [('New booking · Fri 6:30 PM', '-150px', '-118px', '0s'), ('Call answered · 1:12', '30px', '-150px', '1.5s'),
            ('Missed call → WhatsApp', '40px', '120px', '3s'), ('Lead replied on Instagram', '-200px', '96px', '4.5s')]
    pop_html = ''.join(f'<span class="vg-popfx" style="position: absolute; left: calc(50% + {x}); top: calc(50% + {y}); animation-delay: {d}; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px 7px 10px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E8E8EC; color: #1F1F1F; font-size: 13px; font-weight: 500; box-shadow: 0 10px 24px -14px rgba(22,24,42,.35)"><span style="width: 7px; height: 7px; border-radius: 50%; background: #1F9D6B"></span>{t}</span>' for t, x, y, d in pops)
    return f'''<div role="img" aria-label="WhatsApp, phone, Instagram, Messenger, website and Meta ads all flowing into Vegham" style="position: relative; width: {size}px; max-width: 100%; aspect-ratio: 1; margin: 0 auto">
        <div style="position: absolute; inset: 12%; border-radius: 50%; border: 1px dashed #D9D9E3"></div>
        <div style="position: absolute; inset: 30%; border-radius: 50%; border: 1px solid #EEEEF3; background: #FFFFFF"></div>
        <div class="vg-orbit" style="position: absolute; inset: 0">{nodes}</div>
        <span class="vg-ringfx" style="position: absolute; left: 50%; top: 50%; width: 96px; height: 96px; margin: -48px 0 0 -48px; border-radius: 50%; background: rgba(22,24,42,.12)"></span>
        <span class="vg-ringfx" style="position: absolute; left: 50%; top: 50%; width: 96px; height: 96px; margin: -48px 0 0 -48px; border-radius: 50%; background: rgba(22,24,42,.1); animation-delay: 1.3s"></span>
        <span style="position: absolute; left: 50%; top: 50%; width: 96px; height: 96px; margin: -48px 0 0 -48px; border-radius: 28px; background: #16182A; display: flex; align-items: center; justify-content: center; box-shadow: 0 20px 40px -16px rgba(22,24,42,.6)"><span style="font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 22px; letter-spacing: -0.045em; color: #FFFFFF">vegham</span></span>
        {pop_html}
      </div>'''

# ---------- 2. Interactive channel demo (tabs) ----------
def _b(text, me, delay):
    if me:
        return f'<span class="vg-in" style="animation-delay: {delay}s; align-self: flex-end; max-width: 76%; background: #FFFFFF; border: 1px solid #ECECF2; padding: 9px 13px; border-radius: 16px 16px 4px 16px">{text}</span>'
    return f'<span class="vg-in" style="animation-delay: {delay}s; align-self: flex-start; max-width: 80%; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">{text}</span>'
def _chat(lines, done):
    out, d = '', 0.2
    for me, t in lines:
        out += _b(t, me, round(d, 2)); d += 0.9
    out += f'<span class="vg-in" style="animation-delay: {d:.2f}s; align-self: center; margin-top: 6px; display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E6E6EA; color: #1F1F1F; font-size: 13px; font-weight: 500">{done}</span>'
    return out
def demo():
    wa = _chat([(1, 'Hi! Anything free tomorrow evening?'), (0, 'Hi Riya 👋 6:30 PM is free. Shall I book it?'), (1, 'Yes please'), (0, 'Booked ✓ I’ll remind you tomorrow morning.')], '✓ Booking added to your calendar')
    ig = _chat([(1, 'How much for a group of 8?'), (0, 'For 8 people it’s ₹1,200 each. Saturdays fill fast. Want me to hold a slot?'), (1, 'Sat 4 PM?'), (0, 'Held ✓ I’ve sent you a link to confirm.')], '✓ Lead marked Hot · sent to your team')
    web = _chat([(1, 'Do you have parking?'), (0, 'Yes, free parking right outside. Anything else?'), (1, 'Can I move my booking to next week?'), (0, 'Done ✓ Moved to Thu 11 AM, same time.')], '✓ Booking moved · confirmation sent')
    bars = ''.join(f'<span class="vg-wave" style="width: 4px; height: {h}px; border-radius: 2px; background: #FFFFFF; opacity: {0.9 if i % 3 else 0.55}; animation-delay: {(i % 9) * 0.1:.1f}s"></span>' for i, h in enumerate([10, 22, 34, 18, 28, 12, 38, 20, 30, 14, 26, 36, 16, 24, 10, 32, 20, 12, 28, 18, 34, 14, 22, 30]))
    cap = [('Caller', 'Hi, are you open on Saturday?', .3), ('Vegham', 'Yes, 10 AM to 4 PM. Would you like to book?', 1.6), ('Caller', 'Yes, around 4.', 3.0), ('Vegham', 'Saturday 4 PM is free. Booked. I’ll WhatsApp you the details.', 4.2)]
    caps = ''.join(f'<span class="vg-in" style="animation-delay: {d}s; display: block"><b style="font-weight: 600; color: {"#A5ABDB" if w == "Caller" else "#FFFFFF"}">{w}</b> <span class="vg-typefx" style="display: inline-block; animation-delay: {d + .1:.1f}s; color: #D6D8E8">{t}</span></span>' for w, t, d in cap)
    call = f'''<div style="width: 100%; max-width: 520px; background: #16182A; color: #FFFFFF; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 20px">
            <span style="display: flex; justify-content: space-between; align-items: center; font-size: 14px"><span style="display: inline-flex; align-items: center; gap: 8px"><span class="vg-pulse" style="width: 9px; height: 9px; border-radius: 50%; background: #3DD68C"></span>AI answering · +91 98•• ••21</span><span style="color: #A5ABDB; font-variant-numeric: tabular-nums">01:12</span></span>
            <span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; gap: 4px; height: 44px">{bars}</span>
            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14.5px; line-height: 1.5">{caps}</div>
            <span class="vg-in" style="animation-delay: 5.6s; align-self: flex-start; padding: 6px 14px; border-radius: 999px; background: #FFFFFF; color: #16182A; font-size: 13px; font-weight: 600">✓ Booked Sat 4:00 PM</span>
          </div>'''
    def panel(cls, inner, head):
        return f'<div class="vg-panel {cls}" style="flex-direction: column; align-items: center; gap: 14px; width: 100%"><span style="font-size: 13px; color: #6B6B6B">{head}</span><div style="width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 10px; font-size: 15px; line-height: 1.45">{inner}</div></div>'
    tabs = [('vg-t1', logo('whatsapp', 18), 'WhatsApp'), ('vg-t2', PHONE.format(s=17, c='currentColor'), 'Phone call'), ('vg-t3', logo('instagram', 18), 'Instagram'), ('vg-t4', GLOBE.format(s=17, c='currentColor'), 'Website')]
    radios = ''.join(f'<input class="vg-tabs-in" type="radio" name="vg-demo" id="{i}"{" checked" if n == 0 else ""} />' for n, (i, _, _) in enumerate(tabs))
    labels = ''.join(f'<label for="{i}" style="display: inline-flex; align-items: center; gap: 8px; height: 42px; padding: 0 18px; border-radius: 999px; font-size: 15px">{ic}{t}</label>' for i, ic, t in tabs)
    return f'''<div style="border-radius: 32px; background: #FFFFFF; border: 1px solid #ECECF0; padding: 28px; display: flex; flex-direction: column; align-items: center; gap: 28px">
        {radios}
        <div class="vg-tabbar" role="tablist" aria-label="Try a channel" style="display: inline-flex; flex-wrap: wrap; justify-content: center; gap: 4px; padding: 5px; border-radius: 999px; background: #F3F3F5">{labels}</div>
        <div class="vg-panels" style="width: 100%; min-height: 420px; display: flex; justify-content: center">
          {panel('vg-p1', wa, 'Riya · WhatsApp · 11:42 PM')}
          <div class="vg-panel vg-p2" style="flex-direction: column; align-items: center; width: 100%">{call}</div>
          {panel('vg-p3', ig, 'Arjun · Instagram DM')}
          {panel('vg-p4', web, 'Website chat')}
        </div>
        <span style="font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Tap a channel · sample conversations</span>
      </div>'''

# ---------- 3. Questions wall (two-way marquee) ----------
QS = ['Are you open on Sunday?', 'Kal shaam ka slot hai?', 'How much for 2 people?', 'Do you take UPI?', 'Is there parking?', 'Can I bring my kid?',
      'Can I reschedule?', 'Price list please 🙏', 'What time do you close?', 'Do you do home visits?', 'Group discount?', 'Where exactly are you?',
      'Any slot after 7 PM?', 'Can I pay later?', 'Is Saturday free?', 'Need it urgently today']
def questions_wall():
    def row(qs, cls, tint):
        chip = lambda q, i: f'<span style="flex: none; display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px 12px 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #ECECF0; font-size: 16px; white-space: nowrap"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path></svg>{q}</span>'
        group = lambda h: f'<div{" aria-hidden=\"true\"" if h else ""} style="display: flex; gap: 12px; padding-right: 12px">' + ''.join(chip(q, i) for i, q in enumerate(qs)) + '</div>'
        return f'<div style="overflow: hidden"><div class="{cls}" style="display: flex; width: max-content">{group(False)}{group(True)}</div></div>'
    tints = ['#E9F7EF', '#FFF1E6', '#EFEEFF', '#E7F3FB', '#FFF7DA', '#FCEBF1']
    return f'''<div style="display: flex; flex-direction: column; gap: 12px; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)">
        {row(QS[:8], 'vg-rowL', tints)}
        {row(QS[8:], 'vg-rowR', tints[::-1])}
      </div>'''

# ---------- 4. Without / With switch ----------
def before_after():
    before_rows = [('Riya', 'Anything free tomorrow evening?', 'Seen 3h ago'), ('+91 98•• ••21', 'Missed call', 'No reply'), ('Arjun', 'Price for a group of 8?', 'Unread · 1d'), ('Meera', 'Can I move my booking?', 'Unread · 2d')]
    after_rows = [('Riya', 'Booked ✓ Fri 6:30 PM', 'AI · 4 sec'), ('+91 98•• ••21', 'Called back on WhatsApp · booked Sat', 'AI · 6 sec'), ('Arjun', 'Held Sat 4 PM · sent to your team', 'Hot lead'), ('Meera', 'Moved to Thu 11 AM', 'AI · 3 sec')]
    def rows(rs, bad):
        out = ''
        for n, m, s in rs:
            badge = f'<span style="flex: none; padding: 3px 10px; border-radius: 999px; font-size: 12px; background: {"#FDECEC" if bad else "#E9F7EF"}; color: {"#B42318" if bad else "#1E6B47"}">{s}</span>'
            out += f'<div style="display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #FFFFFF; border-radius: 14px; border: 1px solid #ECECF0"><span style="width: 36px; height: 36px; flex: none; border-radius: 50%; background: {"#F1F1F3" if bad else "#16182A"}; color: {"#8A8A8A" if bad else "#FFFFFF"}; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600">{n[0] if n[0] != "+" else "☎"}</span><span style="flex: 1; min-width: 0"><b style="display: block; font-weight: 600; font-size: 14.5px">{n}</b><span style="display: block; font-size: 13.5px; color: {"#8A8A8A" if bad else "#3D3D3D"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{m}</span></span>{badge}</div>'
        return out
    return f'''<div style="position: relative">
        <input type="checkbox" id="vg-ba" style="position: absolute; opacity: 0" />
        <label for="vg-ba" class="vg-switch" style="display: inline-flex; align-items: center; gap: 14px; cursor: pointer; font-size: 17px; font-weight: 500; user-select: none">
          <span class="vg-l1">Without Vegham</span>
          <span style="position: relative; width: 60px; height: 32px; border-radius: 999px; background: #16182A"><span class="vg-knob" style="position: absolute; left: 4px; top: 4px; width: 24px; height: 24px; border-radius: 50%"></span></span>
          <span class="vg-l2">With Vegham</span>
        </label>
        <div class="vg-ba" style="margin-top: 24px">
          <div class="vg-before" style="flex-direction: column; gap: 10px; padding: 24px; border-radius: 28px; background: #FDF3F3">
            <span style="display: flex; justify-content: space-between; font-size: 14px; color: #B42318"><b style="font-weight: 600">Monday morning</b><span>4 customers waiting</span></span>
            {rows(before_rows, True)}
          </div>
          <div class="vg-after vg-in" style="flex-direction: column; gap: 10px; padding: 24px; border-radius: 28px; background: #EEF8F2">
            <span style="display: flex; justify-content: space-between; font-size: 14px; color: #1E6B47"><b style="font-weight: 600">Monday morning</b><span>Everyone answered ✓</span></span>
            {rows(after_rows, False)}
          </div>
        </div>
      </div>'''

# ---------- 5. Morning report with counting numbers ----------
def report_card():
    stat = lambda n, l: f'<span><span style="display: block; font-family: \'Inter Tight\', sans-serif; font-size: 44px; line-height: 1; letter-spacing: -0.04em">{count(n)}</span><span style="display: block; margin-top: 6px; font-size: 13px; color: #A5ABDB">{l}</span></span>'
    return f'''<div style="background: #16182A; color: #FFFFFF; border-radius: 28px; padding: 32px; display: flex; flex-direction: column; gap: 24px">
        <span style="display: flex; justify-content: space-between; font-size: 13.5px; color: #A5ABDB"><span>Morning report · 8:00 AM</span><span>Sample</span></span>
        <div style="display: flex; flex-wrap: wrap; gap: 32px">{stat(14, 'customers replied')}{stat(6, 'visits booked')}{stat(2, 'missed calls saved')}</div>
        <span style="height: 1px; background: #2A2D40"></span>
        <span style="font-size: 15px; color: #D6D8E8">1 chat needs you: <b style="font-weight: 600; color: #FFFFFF">Arjun asked for a group price.</b></span>
      </div>'''


# ---------- Night aurora (for selected dark panels) ----------
def aurora(strength=1.0):
    o = lambda a: f'{a * strength:.2f}'
    return f'''<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; border-radius: inherit">
        <div class="vg-aur1" style="position: absolute; left: -15%; top: -45%; width: 130%; height: 95%; filter: blur(60px); opacity: .9; background: radial-gradient(ellipse 30% 42% at 22% 55%, rgba(61,214,140,{o(.55)}), transparent 70%), radial-gradient(ellipse 26% 38% at 48% 45%, rgba(45,212,191,{o(.45)}), transparent 70%), radial-gradient(ellipse 28% 46% at 76% 52%, rgba(124,92,255,{o(.5)}), transparent 70%)"></div>
        <div class="vg-aur2" style="position: absolute; left: -10%; top: -30%; width: 120%; height: 80%; filter: blur(70px); opacity: .8; background: radial-gradient(ellipse 22% 36% at 36% 50%, rgba(79,124,255,{o(.4)}), transparent 70%), radial-gradient(ellipse 24% 40% at 66% 40%, rgba(61,214,140,{o(.35)}), transparent 70%), radial-gradient(ellipse 18% 30% at 90% 60%, rgba(236,72,153,{o(.22)}), transparent 70%)"></div>
        <div class="vg-curtain" style="position: absolute; left: 0; right: 0; top: 0; height: 65%; opacity: .35; background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 9px, rgba(255,255,255,.04) 9px 11px, transparent 11px 23px); -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%); mask-image: linear-gradient(180deg, transparent 0%, #000 25%, #000 45%, transparent 100%)"></div>
        <div style="position: absolute; inset: 0; opacity: .55; background-image: radial-gradient(1px 1px at 12% 18%, #FFFFFF, transparent), radial-gradient(1px 1px at 28% 8%, #FFFFFF, transparent), radial-gradient(1px 1px at 44% 26%, #FFFFFF, transparent), radial-gradient(1px 1px at 63% 12%, #FFFFFF, transparent), radial-gradient(1px 1px at 81% 22%, #FFFFFF, transparent), radial-gradient(1px 1px at 92% 6%, #FFFFFF, transparent), radial-gradient(1px 1px at 6% 40%, #FFFFFF, transparent), radial-gradient(1px 1px at 55% 4%, #FFFFFF, transparent)"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(18,20,31,0) 35%, rgba(18,20,31,.85) 100%)"></div>
      </div>'''


# ====================== Scroll storytelling components ======================
SCROLL_CSS = r'''
@keyframes vg-linein{from{transform:translateY(108%)}to{transform:none}}
@keyframes vg-focus{0%{opacity:.28}30%,70%{opacity:1}100%{opacity:.28}}
@keyframes vg-screen{0%{opacity:0;transform:translateY(24px) scale(.98)}10%,90%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-24px) scale(.98)}}
@keyframes vg-tick{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes vg-stackout{to{transform:scale(.9) translateY(-12px);filter:brightness(.55)}}
@keyframes vg-pill{to{max-width:900px;margin-top:12px;padding:8px 10px 8px 24px;background:rgba(255,255,255,.78);border-color:#E4E4EA;box-shadow:0 12px 32px -16px rgba(22,24,42,.25);border-radius:999px}}
@keyframes vg-navon{0%,100%{opacity:0;transform:scaleX(.3)}12%,88%{opacity:1;transform:none}}
@supports (animation-timeline: view()){
  .vg-line-in{animation:vg-linein linear both;animation-timeline:view();animation-range:entry 10% cover 28%}
  .vg-line+.vg-line .vg-line-in{animation-range:entry 22% cover 36%}
  .vg-step{animation:vg-focus linear both;animation-timeline:view();animation-range:cover 15% cover 85%}
  .vg-hdr-in{animation:vg-pill linear both;animation-timeline:scroll(root);animation-range:0px 260px}
  .vg-navline{animation:vg-navon linear both}
  .vg-screen{animation:vg-screen linear both;animation-timeline:var(--tl);animation-range:cover 29% cover 71%}
  .vg-tickfill{animation:vg-grow linear both;animation-timeline:var(--tl);animation-range:cover 20% cover 60%}
  .vg-stackc{animation:vg-stackout linear both;animation-timeline:--vg-stack;animation-range:exit-crossing var(--a) exit-crossing var(--b)}
}
.vg-hdr-in{backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px)}
@media (prefers-reduced-motion: reduce){.vg-line-in,.vg-step,.vg-screen,.vg-stackc,.vg-navline,.vg-tickfill{animation:none!important}}
'''

def masked_heading(inner):
    """Split a heading's inner HTML on <br> into masked lines."""
    lines = inner.split('<br>')
    return ''.join(f'<span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block">{l}</span></span>' for l in lines)

def _screen(i, inner):
    vis = '1' if i == 1 else '0'
    return f'<div class="vg-screen" style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 32px; gap: 10px; opacity: {vis}; --tl: --vg-s{i}">{inner}</div>'

def sticky_story():
    steps = [
        ('Replies in seconds', 'Answers prices, timings and questions on WhatsApp, Instagram and your website, only from what you’ve taught it.', ['English, Hindi and mixed messages', 'Sends the chat to you when unsure']),
        ('Answers every call', 'A natural voice picks up, books visits and transfers to your team when a caller asks for a person.', ['Missed calls get a WhatsApp in seconds', 'Every call summarised']),
        ('Books and reminds', 'Checks your calendar, confirms the visit and reminds the customer the day before.', ['Confirm / Reschedule replies', 'Works with Google Calendar and Calendly']),
        ('Follows up', 'Gentle nudges to people who went quiet, and review requests after a good visit.', ['Stops the moment they reply or say STOP', 'Win-back for opted-in customers']),
        ('Reports each morning', 'At 8 AM a WhatsApp tells you what came in, what was booked and what needs you.', ['Weekly results summary', 'By location for multi-branch teams']),
    ]
    TICK = '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
    left = ''
    for i, (t, d, pts) in enumerate(steps, 1):
        li = ''.join(f'<li style="display: flex; gap: 8px; align-items: center">{TICK}{p}</li>' for p in pts)
        left += f'''<div class="vg-step" style="min-height: 560px; display: flex; flex-direction: column; justify-content: center; view-timeline-name: --vg-s{i}">
            <span style="font-size: 13px; color: #8A8A8A; font-variant-numeric: tabular-nums">0{i} / 05</span>
            <h3 style="margin: 12px 0 0; font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 40px; line-height: 1.1; letter-spacing: -0.035em">{t}</h3>
            <p style="margin: 14px 0 0; max-width: 440px; font-size: 17.5px; color: #5C5C5C">{d}</p>
            <ul style="margin: 20px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #3D3D3D">{li}</ul>
          </div>'''
    B = lambda t, me: (f'<span style="align-self: flex-end; max-width: 78%; background: #F3F3F5; padding: 9px 13px; border-radius: 16px 16px 4px 16px">{t}</span>' if me else f'<span style="align-self: flex-start; max-width: 82%; background: #16182A; color: #FFFFFF; padding: 9px 13px; border-radius: 16px 16px 16px 4px">{t}</span>')
    hdr = lambda a, b: f'<span style="display: flex; justify-content: space-between; font-size: 13px; color: #8A8A8A; margin-bottom: 6px"><span>{a}</span><span>{b}</span></span>'
    chip = lambda t: f'<span style="align-self: center; margin-top: 8px; padding: 6px 14px; border-radius: 999px; border: 1px solid #E6E6EA; background: #FFFFFF; font-size: 13px; font-weight: 500">{t}</span>'
    bars = ''.join(f'<span class="vg-wave" style="width: 4px; height: {h}px; border-radius: 2px; background: #16182A; animation-delay: {(k % 9) * 0.1:.1f}s"></span>' for k, h in enumerate([10, 24, 36, 18, 30, 12, 40, 22, 32, 14, 28, 38, 16, 26, 10, 34, 20, 12, 30, 18]))
    rows = lambda rs: ''.join(f'<span style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid #F0F0F3"><span style="width: 48px; font-weight: {600 if hl else 400}; color: {"#16182A" if hl else "#8A8A8A"}">{tm}</span><span style="flex: 1">{n}</span><span style="font-size: 12.5px; color: {"#16182A" if hl else "#8A8A8A"}; {"padding: 2px 10px; border-radius: 999px; border: 1px solid #16182A;" if hl else ""}">{s}</span></span>' for tm, n, s, hl in rs)
    screens = [
        _screen(1, hdr('Riya · WhatsApp', '11:42 PM') + B('Anything free tomorrow evening?', 1) + B('Hi Riya! 6:30 PM is free. Shall I book it?', 0) + B('Yes please', 1) + B('Booked ✓ I’ll remind you in the morning.', 0) + chip('✓ Added to your calendar')),
        _screen(2, hdr('Incoming call · +91 98•• ••21', '01:12') + f'<span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; gap: 4px; height: 56px; margin: 8px 0 14px">{bars}</span>' + '<span style="font-size: 15px; line-height: 1.6; color: #3D3D3D"><b style="font-weight: 600; color: #8A8A8A">Caller</b> Are you open on Saturday?<br><b style="font-weight: 600; color: #16182A">Vegham</b> Yes, 10 AM to 4 PM. Shall I book you in?<br><b style="font-weight: 600; color: #8A8A8A">Caller</b> 4 PM please.</span>' + chip('✓ Booked Sat 4:00 PM · WhatsApp sent')),
        _screen(3, hdr('Today · Friday', '6 bookings') + '<span style="font-family: \'Inter Tight\', sans-serif; font-size: 26px; letter-spacing: -0.02em; margin-bottom: 6px">Your calendar</span>' + rows([('11:30', 'A. Khan', 'Confirmed', False), ('13:00', 'S. Das', 'Confirmed', False), ('18:30', 'Riya', 'New · via WhatsApp', True), ('19:15', 'M. Rao', 'Reminder sent', False)])),
        _screen(4, hdr('Follow-up · day 2', 'Instagram') + B('Hi Arjun, still keen on Saturday for 8 people? Happy to hold 4 PM for you.', 0) + B('Yes, hold it!', 1) + chip('✓ Held Sat 4 PM · marked Hot lead') + '<span style="margin-top: 16px; padding: 14px 16px; border: 1px solid #ECECF0; border-radius: 14px; font-size: 14px; display: flex; justify-content: space-between; align-items: center"><span>Review request sent to S. Das</span><span style="color: #8A8A8A">after visit</span></span>'),
        _screen(5, '<div style="background: #16182A; color: #FFFFFF; border-radius: 20px; padding: 26px; display: flex; flex-direction: column; gap: 18px"><span style="display: flex; justify-content: space-between; font-size: 13px; color: #A5ABDB"><span>Morning report · 8:00 AM</span><span>WhatsApp</span></span><div style="display: flex; gap: 32px">' + ''.join(f'<span><span style="display: block; font-family: \'Inter Tight\', sans-serif; font-size: 44px; line-height: 1; letter-spacing: -0.04em">{n}</span><span style="display: block; margin-top: 6px; font-size: 13px; color: #A5ABDB">{l}</span></span>' for n, l in [(14, 'replied'), (6, 'booked'), (2, 'calls saved')]) + '</div><span style="height: 1px; background: #2A2D40"></span><span style="font-size: 14.5px; color: #D6D8E8">1 chat needs you: <b style="font-weight: 600; color: #FFFFFF">Arjun’s group price.</b></span></div>'),
    ]
    ticks = ''.join(f'<span style="position: relative; flex: 1; height: 3px; border-radius: 2px; background: #E6E6EA; overflow: hidden"><span class="vg-tickfill" style="position: absolute; inset: 0; background: #16182A; transform-origin: left; transform: scaleX({1 if k == 1 else 0}); --tl: --vg-s{k}"></span></span>' for k in range(1, 6))
    return f'''<div style="display: flex; flex-wrap: wrap; gap: 0 72px; timeline-scope: --vg-s1, --vg-s2, --vg-s3, --vg-s4, --vg-s5">
        <div style="flex: 1 1 400px; min-width: 0">{left}</div>
        <div style="flex: 1 1 480px; min-width: 0">
          <div style="position: sticky; top: 120px; margin: 40px 0">
            <div style="display: flex; gap: 6px; margin-bottom: 14px">{ticks}</div>
            <div style="position: relative; height: 480px; border-radius: 28px; background: #FFFFFF; border: 1px solid #E8E8EC; box-shadow: 0 30px 60px -36px rgba(22,24,42,.35); overflow: hidden; font-size: 15px; line-height: 1.45">{''.join(screens)}</div>
            <span style="display: block; margin-top: 12px; text-align: right; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #A3A3A3">Sample data</span>
          </div>
        </div>
      </div>'''

def stack_cards(cards):
    """cards: list of (num, title, body, visual_html). Sticky stacking on dark."""
    n = len(cards)
    out = ''
    for i, (num, t, b, vis) in enumerate(cards):
        anim = '' if i == n - 1 else f'--a: {i / n * 100:.0f}%; --b: {(i + 1) / n * 100:.0f}%; '
        out += f'''<li style="list-style: none; position: sticky; top: {120 + i * 28}px; padding-bottom: 28px">
          <div class="{'' if i == n - 1 else 'vg-stackc'}" style="{anim}transform-origin: top center; min-height: 300px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; gap: 32px 56px; padding: 44px 48px; border-radius: 28px; background: #181B29; border: 1px solid #2A2D40; box-shadow: 0 -20px 40px -20px rgba(0,0,0,.5)">
            <div style="flex: 1 1 320px">
              <span style="font-size: 13px; color: #8C90A8">{num}</span>
              <h3 style="margin: 12px 0 8px; font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 32px; letter-spacing: -0.03em">{t}</h3>
              <p style="margin: 0; max-width: 420px; font-size: 16.5px; color: #A3A7BD">{b}</p>
            </div>
            <div style="flex: 1 1 320px; display: flex; justify-content: center">{vis}</div>
          </div>
        </li>'''
    return f'<ol style="margin: 64px 0 0; padding: 0; view-timeline-name: --vg-stack">{out}</ol>'
