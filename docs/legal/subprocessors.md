# Vegam Sub-processor List

> Draft for lawyer review. Update this list to match the providers actually in use before sharing it with customers.

**Last updated:** [date]

Vegam uses the following third parties to provide the Service. Each may process Customer Personal Data on Vegam's behalf under written data protection terms. Customers are notified at least [30] days before a new sub-processor is added.

| Sub-processor | Purpose | Data processed | Location | Status |
|---|---|---|---|---|
| Supabase | Database, authentication, file storage | All Service data | [India (Mumbai region)] | Planned |
| [Worker / voice host, e.g. Fly.io, Railway or AWS] | Background jobs, voice gateway | All Service data in transit | [India region] | Planned |
| Anthropic | AI model for replies, summaries and setup | Message content, knowledge base content, transcripts | [United States / per provider's region options] | Planned |
| Meta Platforms (WhatsApp Business Platform, Instagram, Messenger) | Sending and receiving messages | Phone numbers, social IDs, message content | Global | Planned |
| [Exotel / Plivo / other regional telephony provider] | Phone numbers, call routing, missed-call events, recordings | Phone numbers, call metadata, recordings | [India / per region] | Planned (week 3+) |
| [Sarvam / Bolna / other voice AI provider] | Speech-to-text, text-to-speech, voice agent | Call audio, transcripts | [India / per region] | Planned (week 6+) |
| [Resend / AWS SES] | Transactional email (reports, alerts) | User email addresses, report content | [Region] | Planned |
| Sentry | Error monitoring | Technical logs (personal data minimised) | [Region] | Planned |
| [Razorpay / Stripe] | Subscription billing; payment links (later) | Billing contact, payment status | [India / per region] | Planned |

Vegam's own personal data handling (for Users and website visitors) is described in the [Privacy Policy](privacy-policy.md).
