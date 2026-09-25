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

## Deploy

Static page plus one serverless function. Deploy this folder to Vercel with no build step.
