# Vegam Data Processing Agreement

> Draft for lawyer review. Not legal advice.

**Version:** 0.1 (draft) · **Effective date:** [date]

This Data Processing Agreement ("DPA") forms part of the Terms of Service or other agreement ("Agreement") between:

**[Customer legal name]**, of **[address]** ("Customer"), and

**[Vegam legal entity]**, of **[registered address]** ("Vegam").

## 1. Definitions

- **Applicable Data Protection Law:** all laws that apply to the processing of Customer Personal Data, including India's Digital Personal Data Protection Act, 2023 and its Rules ("DPDP"), the EU General Data Protection Regulation and UK GDPR ("GDPR"), and US state privacy laws such as the California Consumer Privacy Act ("CCPA"), as applicable.
- **Customer Personal Data:** personal data of End Customers and Users that Vegam processes on behalf of Customer to provide the Service.
- **Data Fiduciary / Controller**, **Data Processor**, **Data Principal / Data Subject**, **Personal Data Breach**, and **processing** have the meanings in Applicable Data Protection Law.
- **Sub-processor:** a third party engaged by Vegam that processes Customer Personal Data.

## 2. Roles

2.1 Customer is the Data Fiduciary / Controller of Customer Personal Data. Vegam is the Data Processor (and, under the CCPA, a "service provider").

2.2 Customer is responsible for the lawfulness of the processing it instructs, including giving notices, obtaining and recording consent, honouring withdrawal of consent, and meeting Data Principal requests.

## 3. Details of processing

| Item | Details |
|---|---|
| Subject matter | Providing the Vegam AI front desk Service |
| Duration | Term of the Agreement plus the deletion period in section 10 |
| Nature and purpose | Receiving, storing, replying to and sending messages; answering, recording and transcribing calls; generating AI replies, summaries and lead scores; bookings, reminders, follow-ups and reports |
| Categories of Data Principals | Customer's End Customers (enquirers, leads, clients); Customer's Users (staff) |
| Categories of personal data | Name, phone number, email, social media and messaging IDs, language, message content, call audio, transcripts and summaries, booking details, answers to qualifying questions, consent and opt-out records, payment status (later) |
| Sensitive data | Not intended. Customer must not configure the Service to collect health, financial, biometric or similar sensitive data, or children's data, unless agreed in writing with additional safeguards |

## 4. Vegam's obligations

Vegam will:

4.1 process Customer Personal Data only on Customer's documented instructions (the Agreement, this DPA and Customer's configuration of the Service), unless required by law, in which case Vegam will inform Customer unless the law prohibits it;

4.2 not sell Customer Personal Data, not use it for its own purposes (including training general-purpose AI models), and not combine it with other data except as needed to provide the Service;

4.3 ensure that people authorised to process Customer Personal Data are bound by confidentiality;

4.4 implement reasonable security safeguards, including those in Annex 1;

4.5 assist Customer, taking into account the nature of processing, in responding to Data Principal requests (access, correction, erasure, consent withdrawal, grievances) and in meeting its security, breach notification and impact assessment obligations;

4.6 make available information reasonably necessary to demonstrate compliance with this DPA, and allow audits as set out in section 9;

4.7 inform Customer if, in its opinion, an instruction infringes Applicable Data Protection Law.

## 5. Sub-processors

5.1 Customer gives general authorisation for Vegam to engage the Sub-processors listed in the [Sub-processor List](subprocessors.md).

5.2 Vegam will notify Customer at least [30] days before adding or replacing a Sub-processor. Customer may object on reasonable data protection grounds; if the parties cannot resolve the objection, Customer may terminate the affected Service and receive a pro-rata refund of prepaid fees.

5.3 Vegam will impose data protection obligations on each Sub-processor that are no less protective than this DPA, and remains responsible for its Sub-processors.

## 6. Personal Data Breach

6.1 Vegam will notify Customer without undue delay, and in any case within [24] hours, after becoming aware of a Personal Data Breach affecting Customer Personal Data.

6.2 The notice will describe, as far as known: the nature and extent of the breach, the categories and approximate numbers of Data Principals and records affected, likely consequences, measures taken or proposed, and a contact point. Vegam will provide updates as information becomes available.

6.3 Vegam will cooperate with Customer so that Customer can meet its obligations to notify the Data Protection Board of India, other supervisory authorities, and affected Data Principals within the time limits required by law (including the DPDP Rules' requirement of a detailed report within 72 hours and the GDPR's 72-hour deadline).

6.4 Vegam will also meet its own legal reporting duties, such as reporting cyber security incidents to CERT-In within six hours where required.

## 7. International transfers

7.1 Vegam will store Customer Personal Data in the hosting region stated in the Order Form [default: India].

7.2 Vegam may transfer Customer Personal Data to Sub-processors in other countries only in compliance with Applicable Data Protection Law, including any country restrictions notified under DPDP, and, for EU/UK personal data, under Standard Contractual Clauses or another valid transfer mechanism, which are incorporated by reference where required.

## 8. Data Principal requests

If Vegam receives a request directly from a Data Principal about Customer Personal Data, it will forward it to Customer without undue delay and will not respond except on Customer's instructions or as required by law. The Service provides tools for Customer to export, correct and delete a contact's data.

## 9. Audits

On reasonable written request, no more than once a year (or after a Personal Data Breach), Vegam will provide written answers to security questionnaires and relevant documentation. Any on-site audit must be agreed in advance, at Customer's cost, during business hours, subject to confidentiality, and without access to other customers' data.

## 10. Return and deletion

On termination, Customer may export Customer Personal Data for [30] days. After that, Vegam will delete it, including from backups within [90] days, unless law requires retention, in which case Vegam will continue to protect it and process it only for that purpose. On request, Vegam will confirm deletion in writing.

## 11. Liability and precedence

Each party's liability under this DPA is subject to the limitations in the Agreement, except where the law does not allow it. If this DPA conflicts with the Agreement on data protection matters, this DPA prevails.

## Annex 1: Security measures

- Encryption in transit (TLS 1.2+) and at rest.
- Logical separation of each customer's data, enforced by row-level security on every table.
- Role-based access for Users (owner, manager, staff); least-privilege access for Vegam personnel, with multi-factor authentication.
- Secrets and channel credentials stored in a secret store, never in plaintext.
- Verification of webhook signatures from messaging and telephony providers.
- Audit log of staff and AI actions; security and access logs kept for at least one year.
- Daily backups with tested restores.
- Monitoring and alerting for failures, abuse and unusual activity.
- Opt-out and consent checks before every outbound message and call.
- Vulnerability management: dependency updates and security fixes applied promptly.
- Written incident response process (see Security and Incident Response Policy).

## Signatures

**Customer:** Name ________________ Title ________________ Signature ________________ Date ________

**Vegam:** Name ________________ Title ________________ Signature ________________ Date ________
