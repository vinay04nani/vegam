import re, os
D = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(D, '..', 'vegam-ui', 'project')
SYS_CSS = '''
a[style*="border-radius: 999px"],button[style*="border-radius: 999px"],label[style*="border-radius: 999px"]{transition:transform .18s cubic-bezier(.2,.7,.2,1),box-shadow .2s ease,filter .2s ease}
a[style*="border-radius: 999px"]:hover,button[style*="border-radius: 999px"]:hover{transform:translateY(-1px);box-shadow:0 10px 24px -14px rgba(22,24,42,.45)}
a[style*="border-radius: 999px"]:active,button[style*="border-radius: 999px"]:active{transform:translateY(0) scale(.98);box-shadow:none}
a:focus-visible,button:focus-visible,input:focus-visible,label:focus-visible,summary:focus-visible{outline:2px solid #3B6CF6;outline-offset:3px;border-radius:12px}
input:focus{border-color:#16182A!important;outline:none;box-shadow:0 0 0 4px rgba(59,108,246,.12)}
summary{list-style:none}summary::-webkit-details-marker{display:none}
::selection{background:rgba(59,108,246,.18)}
'''
RAD = {**{f'{v}px': '12px' for v in (10, 11, 12, 13, 14, 15)}, **{f'{v}px': '20px' for v in (16, 17, 18, 20, 22)}, **{f'{v}px': '28px' for v in (24, 26, 28, 32)}}
def radii(s):
    def fix(m):
        v = m.group(1)
        return 'border-radius: ' + RAD.get(v, v)
    head, body = s.split('</style>', 1)
    body = re.sub(r'border-radius: (\d+px)(?=[;"])', fix, body)
    return head + '</style>' + body
def polish(s, landing=False):
    if 'summary::-webkit-details-marker' not in s.split('</style>')[0]:
        s = s.replace('</style>', SYS_CSS + '</style>', 1)
    s = radii(s)
    s = s.replace('font-size: 76px; line-height', 'font-size: 72px; line-height').replace('font-size: 68px; line-height', 'font-size: 72px; line-height')
    s = s.replace('font-size: 54px; line-height: 1.05', 'font-size: 52px; line-height: 1.05')
    if landing:
        for marker in ['  <!-- Manifesto: words fill in as you scroll -->', '  <!-- Questions wall -->']:
            a = s.find(marker)
            if a != -1:
                b = s.index('</section>', a) + len('</section>\n')
                s = s[:a] + s[b:]
        s = s.replace('padding: 112px 32px', 'padding: 144px 32px')
    return s
if __name__ == "__main__":
  for f in ["LandingV2", "Product", "HowItWorks", "Pricing", "Company"]:
    p = os.path.join(P, f + '.dc.html'); s = open(p).read()
    s = polish(s, f == 'LandingV2'); open(p, 'w').write(s); print(f)
