"""Shared template pieces for new site pages, taken from the live Company page."""
import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import landscape, comps
P = os.path.join(D, '..', 'vegam-ui', 'project')
C = open(os.path.join(P, 'Company.dc.html')).read()
root = re.search(r'<div style="font-family: Inter, system-ui, sans-serif;[^"]*">', C)
HEAD = C[:root.end()]
HEADER = re.search(r'<header.*?</header>', C, re.S).group(0)
HEADER = HEADER.replace('<a href="#" aria-current="page" style="text-decoration: none; color: #FFFFFF; font-weight: 500; border-bottom: 1.5px solid #FFFFFF; padding-bottom: 4px">Company</a>', '<a href="#" style="text-decoration: none">Company</a>')
FOOTER = re.search(r'<footer.*?</footer>', C, re.S).group(0)
BAR = re.search(r'<div aria-hidden="true" class="vg-bar"[^>]*></div>', C)
BAR = BAR.group(0) if BAR else ''
END = '''
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1440,"height":__H__}}'>
class Component extends DCLogic {
  renderVals() {
    return {};
  }
}
</script>
</body>
</html>'''
HF = "font-family: 'Inter Tight', sans-serif; font-weight: 400; letter-spacing: -0.04em"
EY = 'font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B6B6B'
WRAP = 'max-width: 1200px; margin: 0 auto'
CHECK = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>'
AURTXT = "color: transparent; background: linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%); -webkit-background-clip: text; background-clip: text"
BTN_W = 'display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 999px; background: #FFFFFF; color: #12141F; text-decoration: none; font-weight: 500'
BTN_G = 'display: inline-flex; align-items: center; height: 52px; padding: 0 24px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.06); color: #FFFFFF; text-decoration: none; font-weight: 500'
BTN_D = 'display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 24px; border-radius: 999px; background: #16182A; color: #FFFFFF; text-decoration: none; font-weight: 500; border: 0; font: inherit; font-size: 15.5px; cursor: pointer'
FIELD = 'display: block; width: 100%; box-sizing: border-box; height: 48px; padding: 0 16px; border: 1px solid #E2E2E6; border-radius: 12px; background: #FFFFFF; font: inherit; font-size: 15px; color: #1F1F1F'
LABEL = 'display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #2B2B2B'

def line2(a, b, grey='#8A8A8A'):
    L = lambda x: f'<span class="vg-line" style="display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em"><span class="vg-line-in" style="display: block">{x}</span></span>'
    return L(a) + L(f'<span style="color: {grey}">{b}</span>')

def hero(uid, seed, eyebrow, a, b, sub, extra='', min_h=560, center=True, lake=True):
    al = 'text-align: center' if center else ''
    return f'''  <section style="position: relative; overflow: hidden; background-color: #03050E; min-height: {min_h}px">
    <div aria-hidden="true" style="position: absolute; inset: 0">{landscape.landscape(uid, seed=seed, lake=lake)}<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,5,14,.55) 0%, rgba(3,5,14,.15) 45%, rgba(3,5,14,.6) 100%)"></div></div>
    <div style="position: relative; {WRAP}; padding: 168px 32px 96px; {al}">
      <span class="vg-hero" style="animation-delay: .05s; display: inline-block; padding: 10px 28px; border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); font-size: 15px; color: #DDE0EE">{eyebrow}</span>
      <h1 class="vg-hero" style="animation-delay: .15s; margin: 28px {'auto' if center else '0'} 0; max-width: 960px; {HF}; font-size: 72px; line-height: 1.04; letter-spacing: -0.045em; color: #FFFFFF">{a}<br><span style="color: #A9AECB">{b}</span></h1>
      <p class="vg-hero" style="animation-delay: .3s; margin: 22px {'auto' if center else '0'} 0; max-width: 620px; font-size: 19px; line-height: 1.65; color: #C9CCDD">{sub}</p>
      {extra}
    </div>
  </section>
'''

def head_note(eyebrow, a, b, sub=None, center=False):
    al = 'text-align: center; ' if center else ''
    s_ = f'<p style="margin: 16px {"auto" if center else "0"} 0; max-width: 620px; font-size: 18px; color: #5C5C5C">{sub}</p>' if sub else ''
    return f'<div style="{al}"><span style="{EY}">{eyebrow}</span><h2 style="margin: 14px 0 0; {HF}; font-size: 48px; line-height: 1.08">{line2(a, b)}</h2>{s_}</div>'

def cta(t='Give your front desk<br>a night off.', sub='Start a free 30-day pilot and watch your first booking come in.'):
    return f'''  <section style="padding: 0 32px 112px">
    <div class="vg-aur-host" style="position: relative; overflow: hidden; max-width: 1136px; margin: 0 auto; border-radius: 28px; background: #12141F; color: #FFFFFF; padding: 88px 40px; text-align: center">{comps.aurora().replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)}
      <h2 style="margin: 0; {HF}; font-size: 52px; line-height: 1.05; letter-spacing: -0.045em">{t}</h2>
      <p style="margin: 16px 0 0; font-size: 18px; color: #C3C6DA">{sub}</p>
      <div style="margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px"><a href="#" style="{BTN_W}">Start your free pilot</a><a href="#" style="{BTN_G}">Book a demo</a></div>
    </div>
  </section>
'''

def page(name, title, body, height, footer=True):
    h = HEAD.replace(re.search(r'<title>[^<]*</title>', HEAD).group(0), f'<title>{title}</title>')
    out = h + '\n  ' + BAR + '\n  ' + HEADER + '\n' + body + ('\n  ' + FOOTER if footer else '') + END.replace('__H__', str(height))
    open(os.path.join(P, name), 'w').write(out)
    return out
