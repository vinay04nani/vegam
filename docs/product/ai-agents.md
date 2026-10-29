# AI agents

Every AI agent in Vegam follows the same loop: **set up → test → go live → watch → improve**. The UI is built around it.

## The AI agents home (sidebar → AI agents)
- **Pause all AI**: an emergency stop. Customers get the away message; the team sees every chat and call.
- **Today**: handled, resolved without staff, booked by the AI, and what needs you.
- **Agents in three groups**, each card with its status, main number, any warning, an on/off switch and Open:
  - **Front desk**: Chat receptionist, Voice receptionist (Growth)
  - **Grow**: Outbound caller (Pro), Follow-up agent, Review agent (Growth), Payment collector (Pro), Win-back and rebooking (Pro)
  - **For you**: Report writer, Owner’s assistant
- **Knowledge**: questions nobody could answer (with answers suggested from how the team replied), services, prices and answers, and the other sources (website, files, policies).
- **Business rules**: tone, languages, how it says it’s an AI, topics to avoid, discount limit, quiet hours and handovers. Every agent follows these unless its own setup overrides them.
- **Activity**: everything every agent did.

## Each agent’s page
| Tab | What it’s for |
|---|---|
| Overview | Setup steps left, this week’s numbers, recent activity, what needs you, key settings, recent changes |
| Setup | Identity, what it can do, rules, and settings only that agent has (voice, transfers, call notes, sequences, reminders, permissions, per-location greetings) |
| Knowledge | Which sources it uses and its unanswered questions |
| Test | A playground, test call or message preview, a test set that runs against unsaved changes or the live version, and (chat) the 50 setup replies |
| Activity | Every conversation it handled; rate a reply or “teach it” a better answer, saved to knowledge |
| Performance | Numbers over 12 weeks, how its work ended, why it handed over, plan usage |

**Publishing**: setup edits stay as unsaved changes (customers keep the live version) until Publish. Every published change is in the change history with Undo. On/off switches and business rules apply straight away.

**Where things live**: phone numbers and forwarding are in Calls → Numbers & routing; how the AI answers is on the Voice receptionist. Review requests and payment reminders are set on their agents; the Reviews and Payments pages link there.

Settings are described as data in `frontend/src/content/agentSetup.ts`; agent cards, activity and tests are in `frontend/src/content/agents.ts`. All numbers are sample data until the backend exists.
