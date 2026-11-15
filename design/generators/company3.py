"""Company page: light header and a light hero, in line with Product and How it works."""
import os, re
D = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(D, '..', 'vegam-ui', 'project')
AUR = 'linear-gradient(100deg, #10B981 0%, #0EA5A4 25%, #3B6CF6 55%, #7C3AED 80%, #DB2777 100%)'
s = open(os.path.join(P, 'Company.dc.html')).read()
c = open(os.path.join(P, 'Contact.dc.html')).read()

# 1. Light header: body chunk from Contact (wrapper start to its hero section).
sb, cb = s.index('</helmet>'), c.index('</helmet>')
s_hero = s.index('<section', sb)
s_hero_end = s.index('</section>', s_hero) + len('</section>')
c_hero = c.index('<section', cb)
hero = (
    '<section style="background: linear-gradient(180deg, #F7F7F8 0%, #FFFFFF 100%); border-bottom: 1px solid #EFEFEF">'
    '<div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 88px 32px 72px; text-align: center">'
    '<span class="vg-hero" style="animation-delay: .05s; display: inline-block; padding: 10px 28px; border-top: 1px solid #E2E2E6; border-bottom: 1px solid #E2E2E6; font-size: 15px; color: #3D3D3D">Company</span>'
    '<h1 class="vg-hero" style="animation-delay: .15s; margin: 26px auto 0; max-width: 940px; font-family: \'Inter Tight\', sans-serif; font-weight: 400; font-size: 64px; line-height: 1.05; letter-spacing: -0.045em; color: #141414">We’re building the voice agent<br><span style="color: #8A8A8A">every business deserves.</span></h1>'
    '<p class="vg-hero" style="animation-delay: .3s; margin: 20px auto 0; max-width: 620px; font-size: 18.5px; color: #3D3D3D">One that picks up every call and message, speaks the customer’s language, and remembers each person it talks to.</p>'
    '<div class="vg-hero" style="animation-delay: .42s; margin: 40px auto 0; max-width: 640px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 14px 28px; padding: 22px 32px; border-radius: 24px; background: #FFFFFF; border: 1px solid #ECECEF; text-align: left">'
    '<span style="flex: none; font-family: \'Inter Tight\', sans-serif; font-size: 52px; line-height: 1.1; letter-spacing: -0.03em; color: transparent; background: ' + AUR + '; -webkit-background-clip: text; background-clip: text">वेग</span>'
    '<p style="flex: 1 1 320px; margin: 0; font-size: 16px; color: #5C5C5C"><b style="font-weight: 600; color: #141414">Vegham</b> comes from <i>vegam</i>, the Sanskrit word for speed. It’s our promise: every customer answered in seconds.</p>'
    '</div></div></section>')
body = c[cb:c_hero] + hero + s[s_hero_end:]
head = s[:sb]
# 2. The scrolled header pill: light version, as on the other light pages.
dark = re.search(r'@keyframes vg-pill\{to\{[^}]*rgba\(10,12,22[^}]*\}\}', head)
light = re.search(r'@keyframes vg-pill\{to\{[^}]*rgba\(255,255,255,\.82\)[^}]*\}\}', c[:cb])
assert light
if dark:
    head = head.replace(dark.group(0), light.group(0))
open(os.path.join(P, 'Company.dc.html'), 'w').write(head + body)
print('company ok', bool(dark))
