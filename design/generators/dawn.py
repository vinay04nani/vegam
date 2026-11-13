"""Night -> sunrise variants of the aurora landscape (stage 0..6)."""
import re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import landscape
#         sky top, mid, low, horizon      aurora stars  mtn far top/bottom   mid       lake top/bot      glow (rgba)              sun
STAGES = [
    (('#03050E', '#081028', '#0E2140', '#0B1830'), .90, 1.0, ('#1B2C52', '#0D1730'), '#0A1328', ('#0B1A33', '#040812'), None, False),
    (('#040714', '#0A1532', '#13284D', '#12233F'), .85, .95, ('#1E3058', '#0F1A36'), '#0B152C', ('#0D1D38', '#050A16'), None, False),
    (('#050A1F', '#0E1E45', '#1E3A6E', '#2A4878'), .70, .80, ('#24396A', '#13224A'), '#0F1B38', ('#122648', '#07101F'), 'rgba(255,170,130,.10)', False),
    (('#0A1430', '#1B2F63', '#3E5A9A', '#6F7FB0'), .50, .60, ('#2E4478', '#1A2C58'), '#142445', ('#1A3258', '#0A1528'), 'rgba(255,175,130,.25)', False),
    (('#13204A', '#33508F', '#8C8FB8', '#E8A37A'), .32, .40, ('#3A4F82', '#22355F'), '#1A2B4E', ('#27406A', '#0F1D36'), 'rgba(255,170,110,.45)', False),
    (('#24396F', '#5B7BB8', '#C9A7B4', '#F4B98A'), .18, .20, ('#4A6092', '#2C416B'), '#223658', ('#3B5A86', '#18294A'), 'rgba(255,190,120,.6)', False),
    (('#3D63A8', '#8DB2E0', '#F2C9A8', '#FFD2A0'), .00, .00, ('#5C74A6', '#3A5280'), '#2C4268', ('#5C7FAE', '#24395E'), 'rgba(255,210,140,.75)', True),
]
def scene(uid, seed, stage):
    sky, aur, star, mf, mmid, lake, glow, sun = STAGES[stage]
    s = landscape.landscape(uid, seed=seed)
    s = s.replace('stop-color="#03050E"', f'stop-color="{sky[0]}"').replace('stop-color="#081028"', f'stop-color="{sky[1]}"').replace('stop-color="#0E2140"', f'stop-color="{sky[2]}"').replace('stop-color="#0B1830"', f'stop-color="{sky[3]}"', 1)
    s = s.replace('stop-color="#1B2C52"', f'stop-color="{mf[0]}"').replace('stop-color="#0D1730"', f'stop-color="{mf[1]}"')
    s = s.replace('fill="#0A1328"', f'fill="{mmid}"')
    s = s.replace('stop-color="#0B1A33"', f'stop-color="{lake[0]}"').replace('stop-color="#040812"', f'stop-color="{lake[1]}"')
    s = s.replace(f'<g mask="url(#vga-mask-{uid})" opacity=".9">', f'<g mask="url(#vga-mask-{uid})" opacity="{aur:.2f}">')
    s = s.replace(f'<g filter="url(#vga-blur2-{uid})" opacity=".45">', f'<g filter="url(#vga-blur2-{uid})" opacity="{aur * .5:.2f}">')
    s = s.replace('<g><circle', f'<g opacity="{star:.2f}"><circle', 1)
    if sun:
        s = s.replace('stop-color="#2DE3A0" stop-opacity=".22"', 'stop-color="#FFC98A" stop-opacity=".45"').replace('stop-color="#14B8A6" stop-opacity=".08"', 'stop-color="#FFB27A" stop-opacity=".15"')
    elif stage >= 4:
        s = s.replace('stop-color="#2DE3A0" stop-opacity=".22"', 'stop-color="#FFB98A" stop-opacity=".2"')
    if glow:
        defs = f'<radialGradient id="dg-{uid}" cx="50%" cy="100%" r="60%"><stop offset="0" stop-color="{glow}"></stop><stop offset="1" stop-color="rgba(255,190,140,0)"></stop></radialGradient>'
        s = s.replace('</defs>', defs + '</defs>', 1)
        hz = 700
        extra = f'<ellipse cx="{1100 if sun else 800}" cy="{hz}" rx="900" ry="{260 + stage * 30}" fill="url(#dg-{uid})"></ellipse>'
        if sun:
            extra += f'<g class="vgo-sun"><circle cx="1230" cy="{hz - 185}" r="130" fill="rgba(255,214,150,.35)" filter="url(#vga-blur2-{uid})"></circle><circle cx="1230" cy="{hz - 185}" r="64" fill="#FFE3B0"></circle><circle cx="1230" cy="{hz - 185}" r="54" fill="#FFF1D6"></circle></g>'
        first_mtn = s.index('<path d="M -40')
        s = s[:first_mtn] + extra + s[first_mtn:]
    return s
