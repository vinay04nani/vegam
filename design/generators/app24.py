"""Agent v5 tweaks: Memory without an example person, Languages without the orb, soft selection states (no dark borders), no pulsing ring."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app23
from app23 import I, cav, tg, seg, shell, G

app23.CSS += '''
.lt .pick{padding:9px 12px!important}
.pick.on{border-color:var(--line)!important;box-shadow:none!important;background:var(--soft2)}
.vrow.on{border-color:var(--line)!important;background:var(--soft2)}
.tick{background:#10B981!important;color:#FFF!important}
.radio.on{border-color:#10B981!important}
.orbl{animation:none!important;box-shadow:none!important}
'''


def memory():
    stat = lambda v, l: f'<div style="padding: 18px 20px; border-radius: 16px; background: var(--soft2)"><div class="hero" style="font-size: 30px">{v}</div><span style="font-size: 12.5px; color: var(--mut)">{l}</span></div>'
    stats = '<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px">' + stat('1,284', 'people it knows') + stat('412', 'recognised when they called back this month') + stat('23', 'unfinished conversations it will bring up') + '</div>'
    kinds = [('Names', 1284), ('Language they prefer', 1102), ('Preferences (times, staff, channel)', 640), ('What they asked about', 512), ('How they felt last time', 288), ('Unfinished conversations', 23)]
    kh = ''.join(f'<div style="display: grid; grid-template-columns: 1fr 140px 52px; gap: 14px; align-items: center; padding: 10px 0; {"border-top: 1px solid var(--line)" if i else ""}"><span style="font-size: 14px">{n}</span><span style="height: 6px; border-radius: 3px; background: var(--soft)"><span style="display: block; width: {v / 1284 * 100:.0f}%; height: 100%; border-radius: 3px; background: {G}"></span></span><span style="text-align: right; font-size: 13px; color: var(--mut)">{v:,}</span></div>' for i, (n, v) in enumerate(kinds))
    feed = [('Sunita Das', 'Prefers early morning slots', '12 min ago'), ('Ananya Rao', 'Wants to bring a friend next time', '1 h ago'), ('Kabir Rao', 'Asked about parking for a van', '2 h ago'), ('Neha Kapoor', 'Prefers to talk in Tamil', 'Yesterday'), ('Divya Menon', 'Needs the ground-floor room', 'Yesterday')]
    fh = ''.join(f'<div style="display: flex; align-items: center; gap: 12px; padding: 11px 0; {"border-top: 1px solid var(--line)" if i else ""}">{cav(n[0], 30)}<span style="flex: 1; min-width: 0"><b style="font-weight: 500; font-size: 13.5px">{n}</b><span style="display: block; font-size: 13px; color: var(--mut)">{t}</span></span><span style="font-size: 12px; color: var(--mut2); white-space: nowrap">{w}</span></div>' for i, (n, t, w) in enumerate(feed))
    left = (f'<div style="display: flex; flex-direction: column; gap: 22px">{stats}'
            f'<div class="rc" style="padding: 18px 22px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 15px; font-weight: 600">What it remembers</b><span style="font-size: 12.5px; color: var(--mut)">across everyone</span></div><div style="margin-top: 8px">{kh}</div></div>'
            f'<div class="rc" style="padding: 18px 22px"><div style="display: flex; justify-content: space-between; align-items: baseline"><b style="font-size: 15px; font-weight: 600">Recently learned</b><span style="font-size: 12.5px; font-weight: 500">All people →</span></div><div style="margin-top: 6px">{fh}</div></div></div>')
    opts = '<div class="list">' + ''.join(f'<div class="li" style="align-items: flex-start"><span class="radio{" on" if on else ""}" style="margin-top: 2px"></span><span style="flex: 1"><b style="display: block; font-weight: 500">{t}</b><span style="font-size: 12.5px; color: var(--mut)">{d}</span></span></div>' for t, d, on in [('Naturally', 'Picks up where you left off', True), ('Quietly', 'Uses it to help faster, never mentions the past', False), ('Off', 'Everyone is a new caller', False)]) + '</div>'
    priv = ''.join(f'<div class="li"><span class="k" style="flex: 1; width: auto">{t}</span>{tg(o)}</div>' for t, o in [('Personal details (family, health, money)', False), ('Ask before using details older than 3 months', True), ('Forget someone when they ask', True)])
    side = (f'<div style="display: flex; flex-direction: column; gap: 4px"><div class="sec" style="margin-top: 0"><span>When someone calls back</span></div>{opts}'
            f'<div class="sec"><span>Keep memory for</span></div>{seg(["6 months", "12 months", "2 years"], 1)}'
            f'<div class="sec"><span>Privacy</span></div><div class="list">{priv}</div></div>')
    body = f'<div style="flex: 1; overflow: hidden; padding: 24px 32px; display: grid; grid-template-columns: 1.35fr 1fr; gap: 28px; align-content: start">{left}{side}</div>'
    return shell('Memory', 'Your receptionist remembers every caller, like a good front desk', body, tg())


_lang = app23.languages


def languages():
    html = _lang()
    return html.replace('<div style="display: flex; align-items: center; gap: 14px">' + app23.orb(48), '<div style="display: flex; align-items: center; gap: 14px">', 1)


app23.AG = [(f, t, memory if f == 'AgentMemory' else languages if f == 'AgentLanguages' else fn, a) for f, t, fn, a in app23.AG]
app23.LINKS['AgentMemory'] = [('All people →', 'People')]

if __name__ == '__main__':
    exec(open(os.path.join(D, 'app23.py')).read().split("if __name__ == '__main__':")[1].replace('\n    ', '\n'), app23.__dict__)
