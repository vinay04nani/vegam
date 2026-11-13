"""Inbox redesign: full-height workspace, priority-grouped list, wide thread, smart composer, details on demand."""
import os, sys
D = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, D)
import app3
from app3 import I, IC, WA, IG, MS, GLOBE, PH, GO, CH, build, av, bd, ob, pb, chlogo, CSS as BASE
IC.update({
    'panelr': '<rect x="3" y="4" width="18" height="16" rx="3"></rect><path d="M15 4v16"></path>',
    'snooze': '<circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2M5 3L2 6M19 3l3 3"></path>',
    'compose': '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"></path>',
    'slash': '<rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M14 7l-4 10"></path>',
    'checkc': '<circle cx="12" cy="12" r="9"></circle><path d="M8 12l3 3 5-6"></path>',
    'handoff': '<path d="M7 11V6a2 2 0 0 1 4 0v5M11 10V4a2 2 0 0 1 4 0v6M15 10V6a2 2 0 0 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.5L3 14a2 2 0 0 1 3.4-2L7 13"></path>',
})
CSS = BASE + '''
.det{width:0;overflow:hidden;transition:width .28s cubic-bezier(.2,.7,.2,1);border-left:1px solid transparent}
.app:has(#det:checked) .det{width:280px;border-left-color:var(--line)}
.app:has(#det:checked) label[for=det]{background:var(--soft);color:var(--text)}
.cmp-note{display:none}
.app:has(#cm-note:checked) .cmp-note{display:block}.app:has(#cm-note:checked) .cmp-reply{display:none}
.app:has(#cm-note:checked) .cmpbox{background:rgba(245,190,60,.10);border-color:rgba(245,190,60,.45)}
.app:has(#cm-reply:checked) label[for=cm-reply],.app:has(#cm-note:checked) label[for=cm-note]{color:var(--text);border-color:var(--text)}
.ctab{display:inline-flex;align-items:center;height:36px;padding:0 2px;margin-right:16px;font-size:13px;color:var(--mut);border-bottom:2px solid transparent}
.row{position:relative}
.grp{display:block;padding:14px 18px 6px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mut2)}
'''
HUES = {'A': ('#FDE7D7', '#B4500A'), 'R': ('#E3EEFF', '#2F5BD9'), 'M': ('#EADFFD', '#6B3FD6'), 'K': ('#DDF5EA', '#13805A'), 'S': ('#FDE2EC', '#C02666'), 'P': ('#FFF1C9', '#8A6100'), 'N': ('#DFF3F7', '#0B7A8C'), 'V': ('#ECECF0', '#55565F'), '+': ('#ECECF0', '#55565F')}
def cav(t, s=36):
    bg, fg = HUES.get(t, ('#ECECF0', '#55565F'))
    return f'<span class="av" style="width: {s}px; height: {s}px; font-size: {round(s * .4)}px; background: {bg}; color: {fg}">{t}</span>'
def avch(t, k, s=36):
    return f'<span style="position: relative; flex: none">{cav(t, s)}<span style="position: absolute; right: -4px; bottom: -4px">{chlogo(k, 10)}</span></span>'

CONVS = [('needs', 'A', 'Arjun Mehta', 'ig', 'Price for a group of 8 on Saturday?', '9m', 'arjun'),
         ('needs', 'P', 'P. Iyer', 'ph', 'Asked for a call back about a refund', '25m', None),
         ('today', 'R', 'Riya Sharma', 'wa', 'Vegham: Booked ✓ See you tomorrow at 6:30 PM', '6:04 PM', 'riya'),
         ('today', '+', '+91 98•• ••21', 'ph', 'Call · booked Sat 4:00 PM', '6:12 PM', None),
         ('today', 'M', 'Meera Iyer', 'wa', 'You: Moved to Saturday 11 AM ✓', '5:40 PM', None),
         ('today', 'K', 'Kabir Rao', 'web', 'Vegham: Yes, free parking behind the building', '1:22 PM', None),
         ('earlier', 'S', 'Sunita Das', 'ms', 'Thank you! See you soon', 'Yesterday', None),
         ('earlier', 'N', 'Neha Kapoor', 'wa', 'Paid ₹1,200 ✓', 'Yesterday', None),
         ('earlier', 'V', 'Vikram Singh', 'go', 'Vegham: Walk-ins are welcome till 6 PM', 'Tue', None)]

def conv_list(sel):
    out = ''
    labels = {'needs': 'Needs you · 2', 'today': 'Today', 'earlier': 'Earlier'}
    last = None
    for g, ini, n, ch, prev, t, key in CONVS:
        if g != last:
            out += f'<span class="grp">{labels[g]}</span>'; last = g
        on = key == sel
        accent = '<span style="position: absolute; left: 0; top: 14px; bottom: 14px; width: 3px; border-radius: 0 3px 3px 0; background: var(--warn)"></span>' if g == 'needs' else ''
        who = prev.split(':')[0] if prev.split(':')[0] in ('Vegham', 'You') else ''
        pv = prev[len(who) + 1:].strip() if who else prev
        pvh = f'<span style="color: var(--mut2)">{who}:</span> {pv}' if who else pv
        out += f'''<div class="row" style="display: flex; gap: 12px; padding: 12px 16px 12px 18px; margin: 1px 8px; border-radius: 12px; {"background: var(--soft)" if on else ""}">{accent}{avch(ini, ch)}
          <span style="flex: 1; min-width: 0"><span style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px"><b style="font-weight: {600 if g == "needs" else 500}; font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{n}</b><span style="font-size: 11.5px; color: {"var(--warn)" if g == "needs" else "var(--mut2)"}; flex: none">{t}</span></span>
          <span style="display: block; margin-top: 2px; font-size: 12.5px; color: {"var(--text)" if g == "needs" else "var(--mut)"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{pvh}</span></span></div>'''
    return f'''<div style="width: 320px; flex: none; border-right: 1px solid var(--line); display: flex; flex-direction: column">
      <div style="height: 60px; flex: none; display: flex; align-items: center; gap: 4px; padding: 0 12px 0 20px"><h1 style="margin: 0; flex: 1; font-size: 18px; font-weight: 600">Inbox</h1><label for="ov-pal" class="ibtn" aria-label="Search">{I('search', 17)}</label><span class="ibtn" aria-label="Filter">{I('filter', 17)}</span><span class="ibtn" aria-label="New message">{I('compose', 17)}</span></div>
      <div style="display: flex; gap: 18px; padding: 0 20px; border-bottom: 1px solid var(--line); font-size: 13px"><span style="height: 36px; display: inline-flex; align-items: center; gap: 6px; border-bottom: 2px solid var(--text); font-weight: 500">Open <span style="color: var(--mut2); font-weight: 400">14</span></span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">Mine</span><span style="height: 36px; display: inline-flex; align-items: center; color: var(--mut)">Done</span><span style="flex: 1"></span><span style="height: 36px; display: inline-flex; align-items: center; gap: 4px; color: var(--mut); white-space: nowrap">All channels{I("chev", 13)}</span></div>
      <div style="flex: 1; overflow: hidden; padding-top: 2px">{out}</div></div>'''

def msg_them(ini, txt, t, first=True):
    return f'''<div style="display: flex; gap: 10px; align-items: flex-end; max-width: 78%">{cav(ini, 28) if first else '<span style="width: 28px; flex: none"></span>'}<div><div style="background: var(--soft2); padding: 10px 14px; border-radius: 18px 18px 18px 6px; font-size: 14.5px; line-height: 1.5">{txt}</div><div style="margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{t}</div></div></div>'''
def msg_us(txt, t, who='Vegham', status='Read'):
    tag = f'<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 16px; height: 16px; border-radius: 50%; background: var(--ink); color: var(--inkfg); display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700">{"V" if who == "Vegham" else "Vi"}</span>{who}{" · AI" if who == "Vegham" else ""}</span>'
    return f'''<div style="align-self: flex-end; max-width: 72%; display: flex; flex-direction: column; align-items: flex-end"><div style="margin-bottom: 4px; font-size: 11.5px; color: var(--mut)">{tag}</div><div style="background: rgba(59,108,246,.10); color: var(--text); padding: 10px 14px; border-radius: 18px 18px 6px 18px; font-size: 14.5px; line-height: 1.5">{txt}</div><div style="margin-top: 4px; font-size: 11.5px; color: var(--mut2)">{t} · {status} ✓✓</div></div>'''
def event(icon, txt, t):
    return f'<div style="display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--mut); padding: 2px 0"><span style="flex: 1; height: 1px; background: var(--line)"></span><span style="display: inline-flex; align-items: center; gap: 8px">{I(icon, 14)}{txt} · {t}</span><span style="flex: 1; height: 1px; background: var(--line)"></span></div>'

def thread(case):
    if case == 'arjun':
        name, ini, ch, sub = 'Arjun Mehta', 'A', 'ig', 'Instagram · @arjun.mehta'
        banner = f'''<div style="display: flex; align-items: center; gap: 12px; margin: 0 24px; padding: 12px 16px; border-radius: 14px; background: var(--warnbg); color: var(--text); font-size: 13.5px"><span style="color: var(--warn)">{I('handoff', 18)}</span><span style="flex: 1"><b style="font-weight: 600">Vegham handed this to you</b> · Arjun asked for a group price that isn’t in your price list. Vegham told him a person will reply shortly.</span><span style="font-size: 13px; font-weight: 500; white-space: nowrap">Let Vegham continue</span></div>'''
        msgs = f'''{event('clock', 'Today', '5:51 PM')}
          {msg_them('A', 'Hi! Do you do group sessions on Saturday?', '5:51 PM')}
          {msg_us('Hi Arjun! Yes, we run group sessions on Saturdays from 9 AM to 2 PM, for up to 8 people. How many would be joining?', '5:51 PM')}
          {msg_them('A', 'We’re 8 friends. What would the price be for all of us? Any discount for a group this size?', '5:53 PM')}
          {msg_us('Great! Let me check the best price for a group of 8 with the team. Someone will reply in a few minutes.', '5:53 PM')}
          {event('handoff', 'Handed to Vinay · group pricing', '5:53 PM')}'''
        sugg = f'''<div style="margin-bottom: 10px; padding: 12px 14px; border-radius: 14px; border: 1px dashed var(--line); background: var(--bg)"><div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--mut)"><b style="font-weight: 600; color: var(--text)">Suggested reply</b>· based on your price list and past group bookings<span style="flex: 1"></span><span>1 of 2</span></div>
          <p style="margin: 6px 0 10px; font-size: 14px; line-height: 1.5">For 8 people the group session is ₹1,200 each, so ₹9,600 in total. For groups of 8 we take 10% off, making it ₹8,640. Shall I hold Saturday 11 AM for you with a ₹2,000 deposit?</p>
          <div style="display: flex; gap: 8px">{pb('Send')}{ob('Insert and edit')}<span style="flex: 1"></span><span class="ibtn" style="width: 30px; height: 30px">{I('chevl', 15)}</span><span class="ibtn" style="width: 30px; height: 30px">{I('chevr', 15)}</span></div></div>'''
        window = ('Instagram reply window', '23 h 51 min left')
    else:
        name, ini, ch, sub = 'Riya Sharma', 'R', 'wa', 'WhatsApp · +91 98765 11223'
        banner = f'''<div style="display: flex; align-items: center; gap: 12px; margin: 0 24px; padding: 10px 16px; border-radius: 14px; background: var(--soft2); font-size: 13px; color: var(--mut)"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--good)"></span><span style="flex: 1">Vegham is handling this conversation. It will hand over if Riya asks for a person.</span><span style="font-weight: 500; color: var(--text)">Take over</span></div>'''
        msgs = f'''{event('clock', 'Today', '6:02 PM')}
          {msg_them('R', 'Hi! Anything free tomorrow evening?', '6:02 PM')}
          {msg_us('Hi Riya! 6:30 PM tomorrow is free for a Standard appointment (60 min, ₹1,200). Shall I book it?', '6:02 PM')}
          {msg_them('R', 'Yes please 🙏', '6:04 PM')}
          {event('cal', 'Booked Standard · Fri 7 Nov, 6:30 PM', '6:04 PM')}
          {msg_us('Booked ✓ See you tomorrow at 6:30 PM. I’ll send a reminder in the morning.', '6:04 PM')}
          {event('wallet', 'Payment link sent · ₹1,200', '6:05 PM')}
          {msg_them('R', 'Paid! Thank you 😊', '6:07 PM', True)}
          {event('checkc', 'Paid ₹1,200 by UPI', '6:07 PM')}'''
        sugg = ''
        window = ('WhatsApp reply window', '23 h 55 min left')
    header = f'''<div style="height: 60px; flex: none; display: flex; align-items: center; gap: 10px; padding: 0 16px 0 24px; border-bottom: 1px solid var(--line)">
        <span style="flex: 1; min-width: 0; display: flex; align-items: center; gap: 12px">{avch(ini, ch, 32)}<span style="min-width: 0"><b style="display: block; font-weight: 600; font-size: 14.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{name}</b><span style="display: block; font-size: 12px; color: var(--mut); white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{sub}</span></span></span>
        <span class="chip" title="Assigned to Vinay" style="height: 32px; font-size: 12.5px; padding: 0 8px 0 5px; gap: 4px">{cav('V', 22)}{I('chev', 13)}</span>
        <span class="ibtn" title="Snooze">{I('snooze', 17)}</span>
        <span class="obtn" style="height: 32px; padding: 0 12px">{I('checkc', 15)}Done</span>
        <label for="det" class="ibtn" title="Customer details" aria-label="Customer details">{I('panelr', 17)}</label>
        <span style="width: 1px; height: 22px; background: var(--line); margin: 0 2px"></span>
        <label for="ov-notif" class="ibtn" aria-label="Notifications" style="position: relative">{I('bell', 17)}<span style="position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: #E5484D; box-shadow: 0 0 0 2px var(--bg)"></span></label></div>'''
    composer = f'''<div style="padding: 0 24px 18px"><div style="max-width: 780px; margin: 0 auto">{sugg}
        <div class="card cmpbox" style="border-radius: 18px; padding: 0 14px 10px; transition: background .2s, border-color .2s">
          <div style="display: flex; border-bottom: 1px solid var(--line); margin-bottom: 8px"><label for="cm-reply" class="ctab">Reply</label><label for="cm-note" class="ctab">Note</label><span style="flex: 1"></span><span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mut)"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--good)"></span>{window[0]} · {window[1]}</span></div>
          <div class="cmp-reply" style="height: 48px; font-size: 14.5px; color: var(--mut2); padding-top: 4px">Reply to {name.split()[0]}… Vegham stays paused while you write</div>
          <div class="cmp-note" style="height: 48px; font-size: 14.5px; color: var(--mut2); padding-top: 4px">Write a note only your team sees. Type @ to mention someone</div>
          <div style="display: flex; align-items: center; gap: 2px"><span class="chip" style="height: 30px; font-size: 12.5px; padding: 0 10px; gap: 6px">{CH[ch](13)}via {"Instagram" if ch == "ig" else "WhatsApp"}{I('chev', 12)}</span><span style="width: 8px"></span>
            <span class="ibtn" title="Attach">{I('clip', 17)}</span><span class="ibtn" title="Saved replies">{I('slash', 17)}</span><span class="ibtn" title="Payment link">{I('wallet', 17)}</span><span class="ibtn" title="Offer a time">{I('cal', 17)}</span>
            <span style="flex: 1"></span><span style="font-size: 12px; color: var(--mut2); margin-right: 10px">⌘ Enter</span><span class="pbtn" style="height: 34px">Send{I('send', 14, 2)}</span></div></div></div></div>'''
    body = f'''<div style="flex: 1; min-width: 0; display: flex; flex-direction: column">{header}
      <div style="padding-top: 14px">{banner}</div>
      <div style="flex: 1; min-height: 0; overflow: hidden; padding: 18px 24px; display: flex; flex-direction: column; justify-content: flex-end"><div style="max-width: 780px; width: 100%; margin: 0 auto; display: flex; flex-direction: column; gap: 14px">{msgs}</div></div>
      {composer}</div>'''
    return body

def details(case):
    kv = lambda k, v: f'<div style="display: flex; justify-content: space-between; gap: 10px; padding: 7px 0; font-size: 13px"><span style="color: var(--mut)">{k}</span><span style="text-align: right">{v}</span></div>'
    sec = lambda t, inner: f'<div style="padding: 16px 20px; border-top: 1px solid var(--line)"><span style="display: block; font-size: 11px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--mut2); margin-bottom: 8px">{t}</span>{inner}</div>'
    if case == 'arjun':
        top = f'<div style="padding: 20px; display: flex; align-items: center; gap: 12px">{cav("A", 44)}<span><b style="display: block; font-weight: 600; font-size: 15px">Arjun Mehta</b><span style="font-size: 12.5px; color: var(--mut)">New · first message today</span></span></div>'
        body = sec('Lead', f'<div class="card" style="padding: 12px 14px; border-radius: 12px"><div style="display: flex; justify-content: space-between"><b style="font-weight: 600; font-size: 13.5px">Group session · 8 people</b>{bd("New", "acc")}</div><span style="display: block; margin-top: 4px; font-size: 12.5px; color: var(--mut)">Est. ₹9,600 · Saturday</span></div>') + \
               sec('Contact', kv('Instagram', '@arjun.mehta') + kv('Phone', 'Not shared yet') + kv('Language', 'English') + kv('Messages', 'Opted in')) + \
               sec('Notes', '<span style="font-size: 13px; color: var(--mut)">No notes yet. Use the Note tab below.</span>')
    else:
        top = f'<div style="padding: 20px; display: flex; align-items: center; gap: 12px">{cav("R", 44)}<span><b style="display: block; font-weight: 600; font-size: 15px">Riya Sharma</b><span style="font-size: 12.5px; color: var(--mut)">Customer since Mar 2026</span></span></div>'
        body = sec('Next visit', f'<div class="card" style="padding: 12px 14px; border-radius: 12px"><b style="font-weight: 600; font-size: 13.5px">Fri 7 Nov · 6:30 PM</b><span style="display: block; font-size: 12.5px; color: var(--mut)">Standard · 60 min · paid ₹1,200</span></div>') + \
               sec('Contact', kv('Phone', '+91 98765 11223') + kv('Visits', '6') + kv('Spent', '₹7,400') + kv('Tags', 'Regular, Evenings')) + \
               sec('Notes', '<span style="font-size: 13px">Prefers evenings. Regular since March.</span>')
    return f'<div class="det" style="flex: none; height: 100%"><div style="width: 280px; height: 100%; overflow: hidden">{top}{body}</div></div>'

def inbox(case):
    return f'<div style="display: flex; height: 100%">{conv_list(case)}{thread(case)}{details(case)}</div>'

def page(fname, title, case, det_open, note=False):
    extra = f'<input class="vh" type="checkbox" id="det"{" checked" if det_open else ""} aria-label="Customer details" /><input class="vh" type="radio" name="cm" id="cm-reply"{"" if note else " checked"} aria-label="Reply" /><input class="vh" type="radio" name="cm" id="cm-note"{" checked" if note else ""} aria-label="Note" />'
    build(fname, title, active='Inbox', main=extra + inbox(case), notop=True, extra_css=CSS)

if __name__ == '__main__':
    page('AppV2Inbox.dc.html', 'App · Inbox', 'arjun', True)
    page('AppV2InboxAI.dc.html', 'App · Inbox · handled by Vegham', 'riya', False)
    print('inbox ok')
