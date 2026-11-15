"""Bring the remaining website boards in line with the voice agent + memory + channels product."""
import os, re
D = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(D, '..', 'vegam-ui', 'project')
PER = {
    'Company': [('We’re building the front desk', 'We’re building the voice agent'),
                ('an AI front desk that answers in seconds, books the visit and follows up, in the language the customer speaks.', 'an AI voice agent that answers in seconds, remembers every customer and follows up, in the language the customer speaks.'),
                ('✦', '·'), ('Start a free 30-day pilot, or talk to us first.', 'Start free for 30 days, or talk to us first.')],
    'Security': [('to run your front desk.', 'to run your agent.'), ('>Bookings<', '>Memory<'), ('Date, time, service, staff', 'Preferences, language and unfinished conversations'),
                 ('To fill your calendar and send reminders', 'So it can pick up where you left off'), ('Give your front desk', 'Never miss a customer'), ('a night off.', 'again.'),
                 ('Start a free 30-day pilot and watch your first booking come in.', 'Set up your agent in minutes and make your first test call today.')],
    'Help': [('>Bookings<', '>Memory<'), ('Calendar, reminders, booking page', 'What it remembers, and your controls'), ('Plans, invoices, GST', 'Plans, invoices, taxes'), ('Download an invoice with GST', 'Download an invoice')],
    'HelpArticle': [('Set up Vegham in a day', 'Set up Vegham in minutes'), ('Open Channels in Vegham', 'Open Settings in Vegham'), ('Settings → Channels', 'Settings → Phone and WhatsApp'),
                    ('[Screenshot: the Channels page with WhatsApp highlighted]', '[Screenshot: Settings with WhatsApp highlighted]')],
    'Legal': [('to run your front desk', 'to run your agent')],
    'Careers': [('We’re building the front desk every business deserves.', 'We’re building the voice agent every business deserves.')],
    'BookDemo': [('>Bookings and reminders<', '>Remembering customers<'), ('>Follow-ups and reviews<', '>Follow-ups<'), ('take a call and book a visit.', 'take a call and remember the caller.'), ('set up in a day', 'set up in minutes'), ('Start free pilot →', 'Start free →')],
    'NotFound': [('Your front desk, though, is still answering.', 'Your agent, though, is still answering.')],
    'Signup': [('Live by tomorrow.', 'Live in minutes.')],
}
LOGIN = [('Your front desk kept working.', 'Your agent kept answering.'), ('Chat receptionist', 'Voice agent'), ('Replies on WhatsApp, Instagram and your website', 'Answers every call in a natural voice'),
         ('Voice receptionist', 'Long memory'), ('Answers calls, books and transfers', 'Remembers every person for months'), ('Bookings and reminders', 'Every channel'),
         ('Fills your calendar, reminds the day before', 'WhatsApp, Instagram, Telegram and a link'), ('Morning report', 'Insights'), ('What came in overnight, at 8 AM', 'What happened, and who needs you')]
ALL = [('Start your free pilot', 'Start free')]
land = open(os.path.join(P, 'LandingV2.dc.html')).read()
foot = land[land.index('<footer style="border-top: 1px solid #EDEDF0'):land.index('</footer>') + 9]
for b in ['Contact', 'Company', 'Security', 'Help', 'HelpArticle', 'Legal', 'Terms', 'Careers', 'BookDemo', 'NotFound', 'Login', 'Otp', 'Signup', 'AuthStates', 'SiteStates']:
    p = os.path.join(P, b + '.dc.html'); s = open(p).read()
    for a, c in PER.get(b, []) + (LOGIN if b in ('Login', 'Otp', 'AuthStates') else []) + ALL:
        if b in PER and (a, c) in PER[b]:
            assert a in s, (b, a)
        s = s.replace(a, c)
    if '<footer style="border-top: 1px solid #EDEDF0' in s and b != 'SiteStates':
        i = s.index('<footer style="border-top: 1px solid #EDEDF0'); j = s.index('</footer>', i) + 9
        s = s[:i] + foot + s[j:]
    left = re.findall(r'[^<>]*(?:front desk|receptionist|Asha|free pilot)[^<>]*', s)
    open(p, 'w').write(s); print(b, left[:4])
