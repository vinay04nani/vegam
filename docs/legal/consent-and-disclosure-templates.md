# Consent and Disclosure Templates

> Draft for lawyer review. These are the standard texts Vegam uses (and offers businesses) so that every message and call is lawful. Each business can adapt the wording to its own voice, but must keep the meaning. Translate into each supported language and have translations checked.

Placeholders: `{business_name}`, `{privacy_link}`, `{customer_name}`.

## 1. Website form opt-in

Shown next to the submit button on any lead or enquiry form. The checkbox must **not** be pre-ticked. Store the form payload, timestamp, page URL and the exact text shown as a `consent_event`.

> ☐ I agree that {business_name} may contact me on WhatsApp, SMS or phone about my enquiry. I can reply STOP at any time. See the {privacy_link}.

Optional, separate checkbox for marketing:

> ☐ Send me offers and updates from {business_name}.

## 2. Website chat widget notice

Shown at the top of a new conversation:

> Hi! You're chatting with {business_name}'s AI assistant. A team member can join any time; just ask. Chats are stored to help us serve you. {privacy_link}

## 3. First WhatsApp reply to a new enquiry

> Hi {customer_name}, thanks for contacting {business_name}! I'm the AI assistant and can help with questions and bookings. Type "staff" any time to talk to a person, or STOP to stop messages.

## 4. Missed call follow-up (template)

> Hi, this is {business_name}. Sorry we missed your call! Reply here to book or ask a question, or reply CALL and we'll ring you back. Reply STOP to opt out.

## 5. Opt-out confirmation

Sent once after STOP, UNSUBSCRIBE or an equivalent request in any supported language. Then send nothing further except what the law allows.

> You won't receive any more messages from {business_name}. If you change your mind, just message us again.

Opt-out keywords to recognise (extend per language): STOP, UNSUBSCRIBE, CANCEL, END, QUIT, "don't message me", and equivalents in Telugu, Hindi and every other supported language. The AI also detects opt-out intent in free text.

## 6. AI voice call opening (inbound)

Said at the start of every AI-answered call, before anything else:

> Hello, thank you for calling {business_name}. I'm the AI assistant. This call may be recorded to help us serve you. Is that okay?

- If the caller says **yes**: record and continue. Store a `call_recording_consent` event.
- If the caller says **no**, or does not clearly agree: do not record. Continue without recording, or offer a transfer to staff.
- Staying on the line is **not** consent.

## 7. AI voice call opening (outbound, to a lead who enquired)

Only when `canContact()` allows it (recorded enquiry within the permitted window, or explicit consent; permitted number series; permitted hours).

> Hello, is this {customer_name}? This is the AI assistant calling from {business_name} about the enquiry you made on {date}. This call may be recorded; is that okay? … If you'd rather not get calls from us, just say so and we won't call again.

If the person asks not to be called, record an opt-out immediately and end the call politely.

## 8. Handoff holding message

> Let me get a team member to help you with that. They'll reply shortly.

## 9. Owner and staff opt-in for reports and alerts

Collected when inviting a User:

> ☐ Send me Vegam's daily report and important alerts on WhatsApp at this number.

## 10. Evidence to store

For every consent or opt-out, store: contact, channel, type, exact text shown or said, source (form, message ID, call ID), timestamp (UTC), and IP or phone number where available. Keep the evidence for at least as long as the contact's data is kept, and longer where the law requires.
