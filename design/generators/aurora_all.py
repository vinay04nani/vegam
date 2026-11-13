import re, sys, os
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import comps
P = os.path.join(D, '..', 'vegam-ui', 'project')
AUR_CSS = comps.CSS[:comps.CSS.index('@property')] + '.vg-aur-host>:not(.vg-aur-layer){position:relative}\n'
pat = re.compile(r'<div (class="[^"]*" )?style="([^"]*background: #(?:12141F|16182A)[^"]*)">')
for f in ['LandingV2', 'Product', 'HowItWorks', 'Pricing', 'Company']:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    out, last, n = [], 0, 0
    for m in pat.finditer(s):
        style = m.group(2)
        if 'border-radius' not in style or 'padding' not in style or 'vg-aur' in (m.group(1) or ''): continue
        if 'vg-aur1' in s[m.end():m.end() + 400]: continue  # already has aurora
        cls = (m.group(1) or 'class="" ')[7:-2]
        cls = (cls + ' vg-aur-host').strip()
        if 'position: relative' not in style: style = 'position: relative; ' + style
        if 'overflow: hidden' not in style: style = style + '; overflow: hidden'
        small = 'border-radius: 16px' in style or 'border-radius: 24px' in style
        aur = comps.aurora(0.8 if small else 1.0).replace('<div aria-hidden="true" style="position: absolute; inset: 0; overflow: hidden;', '<div aria-hidden="true" class="vg-aur-layer" style="position: absolute; inset: 0; overflow: hidden;', 1)
        out.append(s[last:m.start()] + f'<div class="{cls}" style="{style}">' + aur)
        last = m.end(); n += 1
    out.append(s[last:]); s = ''.join(out)
    if '.vg-aur-host>' not in s:
        s = s.replace('</style>', ('' if 'vg-aur1{' in s.split('</style>')[0] else AUR_CSS.replace('.vg-aur-host>:not(.vg-aur-layer){position:relative}\n', '')) + '.vg-aur-host>:not(.vg-aur-layer){position:relative}\n</style>', 1)
    open(p, 'w').write(s); print(f, n)
