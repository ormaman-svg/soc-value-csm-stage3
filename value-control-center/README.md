# Value Control Center

Customer success workspace and SOC Value Scorecard, in the same Google style as the interview deck. Synthetic sample data only; no CRM, telemetry or customer systems are connected.

## Views

- **Portfolio**: NRR, GRR, ARR, health, renewal ARR at risk, adoption, time to first value, NPS. Segment and period filters recalculate every figure.
- **Customers**: 12 accounts with search, segment and health filters, and sorting.
- **Customer agents**: per-account briefing, meeting prep for 7 meeting types, context notes, and an account-scoped assistant.
- **Playbooks**: renewal rescue, expansion readiness, adoption accelerator, and an action queue.
- **Value scorecard**: Stage 3 · SOC and General CS scenarios, three layers with gates and owners, created ≠ valued ≠ verified funnel with live inputs, day-30 decision engine, readouts by altitude, walkthrough mode, Markdown brief export.
- **Method & evidence**: metric definitions, no-baseline methods, attribution limits, AI governance.

Press **P** for present mode. Notes and the action queue are stored in the browser.

## Success AI

`api/chat.js` streams answers from OpenAI when the Vercel project has `OPENAI_API_KEY` set (optional `OPENAI_MODEL`). Without it, the page answers from its own sample data so the demo never breaks.

**Live voice.** The mic button in the Success AI panel starts a spoken conversation using the OpenAI Realtime API over WebRTC. `api/realtime.js` mints a two-minute client key, so `OPENAI_API_KEY` never reaches the browser. The session gets the same grounded portfolio and scorecard data as the text chat, and both sides of the call are transcribed into the panel. Typing while a call is live sends the text into the call. Optional: `OPENAI_REALTIME_MODEL` (default `gpt-realtime`) and `OPENAI_REALTIME_VOICE` (default `marin`). Voice is hidden when the page runs inside Claude, because it needs the Vercel function.

## Deploy

Static page plus two serverless functions. Deploy this folder to Vercel with no build step.
