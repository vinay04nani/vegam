# Security and Incident Response Policy (internal)

> Internal policy. Draft for review. Confirm legal reporting deadlines with a lawyer before relying on them.

**Owner:** Vinay Kumar · **Version:** 0.1 (draft) · **Last reviewed:** [date]

## 1. Scope

All Vegam systems, code, data and people (founder, employees, contractors) that handle customer data.

## 2. Security baseline

- **Access:** least privilege; multi-factor authentication on GitHub, Supabase, cloud, Meta, telephony, email and payment accounts; access removed on the day someone leaves.
- **Data separation:** every table scoped by `org_id` with row-level security; service role used only by the worker, voice service and webhook handlers.
- **Secrets:** stored in environment variables or a secret store, never in code, the database (plaintext) or chat tools; rotated after any suspected exposure and when people leave.
- **Encryption:** TLS for all traffic; encryption at rest for the database, storage and backups.
- **Code:** reviews by a code owner on every change; dependencies kept up to date; no GPL/AGPL code without approval; secret scanning on the repository.
- **Logging:** structured logs and an audit log of staff and AI actions; security and access logs kept for at least one year (and at least 180 days in India, for CERT-In).
- **Backups:** daily, with a restore test at least [quarterly].
- **Data minimisation:** collect only what the Service needs; no children's data; no sensitive data by default.
- **Devices:** full-disk encryption, screen lock and up-to-date OS on any device used for Vegam work.

## 3. What counts as an incident

Any event that does or could compromise the confidentiality, integrity or availability of Vegam systems or data, including:
- unauthorised access to customer data, or one customer seeing another's data;
- leaked credentials or API keys;
- lost or stolen device with Vegam access;
- malware, ransomware or a compromised dependency;
- a messaging or telephony account suspended for abuse;
- AI sending another customer's data or confidential information.

## 4. Response steps

| Step | Action | Target time |
|---|---|---|
| 1. Detect and report | Anyone who notices a possible incident tells the incident lead immediately at [incident contact]. | Immediately |
| 2. Assess | Confirm what happened, which systems, customers and data are affected, and whether personal data is involved. Start an incident log with times. | Within 1 hour |
| 3. Contain | Revoke or rotate credentials, block access, pause affected features or channels, preserve evidence (logs, snapshots). | As fast as possible |
| 4. Notify regulators | **India, CERT-In:** report reportable cyber security incidents within **6 hours** of noticing them. **India, Data Protection Board:** for personal data breaches where Vegam is the data fiduciary, inform the Board without delay and give a detailed report within **72 hours**. **EU/UK:** supervisory authority within **72 hours** where Vegam is controller. [Lawyer to confirm.] | See left |
| 5. Notify customers | For breaches of Customer Personal Data, notify each affected customer within **24 hours** (DPA section 6) with what is known, then update. | 24 hours |
| 6. Notify individuals | Where Vegam is the data fiduciary, tell affected individuals without delay, in plain language: what happened, likely impact, what we are doing, what they can do, and a contact. Where Vegam is the processor, support the customer to do this. | Without delay |
| 7. Recover | Fix the root cause, restore from backups if needed, confirm systems are clean. | As needed |
| 8. Review | Write a short post-incident report within [7] days: timeline, cause, impact, fixes, follow-up actions. | 7 days |

## 5. Records

Keep the incident log, evidence, notifications sent and post-incident reports for at least [3] years.

## 6. Contacts

| Role | Name | Contact |
|---|---|---|
| Incident lead | Vinay Kumar | [phone / email] |
| Technical backup | [name] | [contact] |
| Legal adviser | [name] | [contact] |
| CERT-In | | incident@cert-in.org.in (confirm current reporting channel) |
