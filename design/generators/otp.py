import os, re, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
from kit3 import AURTXT, HF, FIELD, P
import landscape
L = open(os.path.join(P, 'Login.dc.html')).read()
def block_end(s, start):
    depth = 0
    for m in re.finditer(r'<(/?)div\b[^>]*?>', s[start:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return start + m.end()
RS = '<div style="flex: 1 1 560px; min-width: 0; display: flex; align-items: center; justify-content: center; padding: 48px 24px'
a = L.index(RS); b = block_end(L, a)
WM = f'<span style="display: inline-block; font-family: \'Inter Tight\', sans-serif; font-weight: 600; font-size: 34px; line-height: 1.1; letter-spacing: -0.045em; {AURTXT}">vegham</span>'
def boxes(vals, state):
    border = {'ok': '#E2E2E6', 'err': '#D92D20', 'load': '#E2E2E6'}[state]
    out = ''
    for i, v in enumerate(vals):
        active = (state == 'ok' and i == len([x for x in vals if x]))
        b_ = '#16182A' if active else (border if v or state != 'ok' else '#E2E2E6')
        sh = 'box-shadow: 0 0 0 4px rgba(59,108,246,.14);' if active else ('box-shadow: 0 0 0 3px rgba(217,45,32,.10);' if state == 'err' else '')
        out += f'<input aria-label="Digit {i+1}" inputmode="numeric" maxlength="1" value="{v}" style="width: 52px; height: 60px; box-sizing: border-box; text-align: center; border: 1.5px solid {b_}; border-radius: 12px; font: inherit; font-family: \'Inter Tight\', sans-serif; font-size: 26px; color: #141414; {sh}" />'
    return f'<div style="display: flex; gap: 8px; justify-content: center">{out}</div>'
def right(state='ok'):
    vals = {'ok': ['4', '8', '1', '', '', ''], 'err': ['4', '8', '1', '9', '0', '2'], 'load': ['4', '8', '1', '9', '0', '7']}[state]
    msg = {'ok': '<p style="margin: 16px 0 0; font-size: 14px; color: #6B6B6B">Didn’t get it? <span style="color: #8A8A8A">Resend in 0:24</span></p>',
           'err': '<p role="alert" style="margin: 14px 0 0; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px; color: #B42318"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v5M12 16h.01"></path></svg>That code isn’t right. Check it and try again. 2 tries left.</p><p style="margin: 10px 0 0; font-size: 14px; color: #6B6B6B">Didn’t get it? <a href="#" style="color: #16182A; font-weight: 500">Resend code</a></p>',
           'load': '<p style="margin: 16px 0 0; font-size: 14px; color: #6B6B6B">Checking your code…</p>'}[state]
    btn_bg = '#16182A' if state != 'load' else '#3A3D52'
    spinner = '<span aria-hidden="true" class="vg3-spin" style="display: inline-block; width: 16px; height: 16px; border-radius: 50%; border: 2px solid rgba(255,255,255,.35); border-top-color: #FFFFFF"></span>' if state == 'load' else ''
    label = 'Verifying' if state == 'load' else 'Verify and continue'
    return f'''<div style="flex: 1 1 560px; min-width: 0; display: flex; align-items: center; justify-content: center; padding: 48px 24px">
      <div style="width: 100%; max-width: 380px; text-align: center">
        {WM}
        <h1 style="margin: 22px 0 0; {HF}; font-size: 30px; color: #141414">Enter your code</h1>
        <p style="margin: 10px 0 0; font-size: 15px; color: #6B6B6B">We sent a 6-digit code on WhatsApp to <b style="font-weight: 600; color: #1F1F1F">+91 98765 43210</b></p>
        <div style="margin-top: 28px">{boxes(vals, state)}</div>
        {msg}
        <button type="button"{" disabled" if state == "load" else ""} style="margin-top: 22px; width: 100%; height: 50px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: 0; border-radius: 999px; background: {btn_bg}; color: #FFFFFF; font: inherit; font-size: 15.5px; font-weight: 500; cursor: pointer">{spinner}{label}</button>
        <p style="margin: 24px 0 0; font-size: 14.5px; color: #5C5C5C"><a href="#" style="color: #16182A">← Use a different number</a></p>
        <p style="margin: 28px 0 0; display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: #8A8A8A"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Codes expire after 10 minutes and work only once.</p>
      </div>
    </div>'''
otp = L[:a] + right('ok') + L[b:]
otp = otp.replace(re.search(r'<title>[^<]*</title>', otp).group(0), '<title>Enter your code · Vegham</title>')
open(os.path.join(P, 'Otp.dc.html'), 'w').write(otp)

# ---- states board: three compact cards side by side ----
head = L[:L.index('<div style="font-family: Inter')]
root = re.search(r'<div style="font-family: Inter[^"]*">', L).group(0)
def mini(state, title):
    r = right(state).replace('flex: 1 1 560px; min-width: 0; display: flex; align-items: center; justify-content: center; padding: 48px 24px', 'display: flex; justify-content: center; padding: 36px 24px')
    return f'<div style="flex: 1 1 400px; background: #FFFFFF; border: 1px solid #ECECF0; border-radius: 28px; overflow: hidden"><div style="padding: 14px 20px; border-bottom: 1px solid #F0F0F3; font-size: 13px; color: #6B6B6B">{title}</div>{r}</div>'
states = head.replace(re.search(r'<title>[^<]*</title>', head).group(0), '<title>Log in states · Vegham</title>') + root + f'''
  <div style="padding: 48px; background: #F5F5F7; min-height: 900px; box-sizing: border-box">
    <h1 style="margin: 0 0 6px; {HF}; font-size: 34px">Log in: code screen states</h1>
    <p style="margin: 0 0 28px; color: #6B6B6B">Typing, wrong code and checking. The same states apply to Sign up.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 20px">{mini("ok", "1 · Typing the code")}{mini("err", "2 · Wrong code")}{mini("load", "3 · Checking")}</div>
  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{{"$preview":{{"width":1440,"height":900}}}}'>
class Component extends DCLogic {{
  renderVals() {{
    return {{}};
  }}
}}
</script>
</body>
</html>'''
open(os.path.join(P, 'AuthStates.dc.html'), 'w').write(states)
print('otp ok')
