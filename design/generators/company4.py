"""Company page: remove the "How we handle your data" and "Press kit" section."""
import os
P = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'vegam-ui', 'project', 'Company.dc.html')
s = open(P).read()
if 'How we handle your data' in s:
    i = s.index('How we handle your data')
    a, b = s.rfind('<section', 0, i), s.index('</section>', i) + len('</section>')
    assert 'Press kit' in s[a:b] and s[a:b].count('<section') == 1
    s = s[:a] + s[b:]
    open(P, 'w').write(s)
print('removed' if 'Press kit' not in s else 'still there')
