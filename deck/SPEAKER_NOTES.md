# Speaker Notes — Measuring Real Business Value for SOC Teams
**Or Maman · Google Cloud Security · Principal CSM Stage 3**  
Framework: Why → What → Who → Pilot · 18 slides · ~12–15 min + demo + Q&A

**Controls:** `←` / `→` or `Space` advance · `N` toggle notes · `#1`–`#18` deep links · Print → PDF

---

## 1. Title — office-hours frame
Office-hours frame: educate the panel the way a Principal CSM educates a customer. Not a product pitch. Hook them as peers who care about measurement discipline. Mention: 12–15 min narrative + demo walk + Q&A. Smile, slow down on the hook.

## 2. Hook — green dashboards / empty boardroom
60-second hook. Paint the contrast: ops wall is green, board asks “are we safer / was the spend worth it?” and the room goes quiet. Thesis line: **activity ≠ impact**. Pause after the thesis. Do not jump to product yet.

## 3. Agenda — Why→What→Who→Pilot
Roadmap the session in under 20 seconds. Tell them there is a live scorecard demo later — measurable deltas, not an AI tour.

## 4. WHY — Busy ≠ valuable
Budget renewals, trust with the business, and automation mandates all require proof of impact — not proof of busyness. Principal CSM implication: customers who cannot articulate value stall expansion and automation.

## 5. WHY — Vanity trap
Name vanity metrics out loud: tickets closed, raw alert volume, global MTTD averaged across noise. They feel productive and destroy credibility upstairs. Transition: so what IS real value?

## 6. WHY — Define real value (3 outcome classes)
Three outcome classes: (A) risk reduced, (B) speed that matters, (C) capacity reclaimed. Plant these — they map 1:1 to the three layers next.

## 7. WHAT — Three-layer scorecard
Outcomes on top (board), speed in the middle (CISO/SOC), efficiency at the base (SOC lead + capacity). AI appears ONLY inside Layer 3 later — not as thesis.

## 8. WHAT — Layer 1 outcomes (board-survivable)
Material incident rate, exposure window, disruption hours avoided, % of critical detections with a named risk owner. Rule: if the CFO cannot repeat it in one sentence, rewrite it.

## 9. WHAT — Layer 2 critical-path speed
Global averages hide the story. Pick one path (e.g. identity → priv-esc → exfil on finance apps). Instrument detect / contain / recover on that path only. Report deltas.

## 10. WHAT — Layer 3 efficiency / capacity ← AI lever starts
% actionable, analyst hours on noise, monthly FP cost. Tools (incl. AI assist) matter only insofar as these move. Capacity reclaimed → reinvest in hunting, coverage, drills.

## 11. WHAT — AI as a value multiplier (not a vanity KPI)
**ONE dedicated AI slide.** Thesis is NOT “AI in the SOC.” Levers: noise hours ↓, critical-path speed ↑, capacity proved. Chronicle / SecOps / SIEM / AI assist = **inputs**, not the score.

## 12. WHAT — Anti-metrics to kill
Kill: raw volume, tickets/analyst as goal, global MTTD, “AI detections” as headline KPI, tool uptime as outcome. Replace with actionable %, named-risk outcomes, critical-path speed, capacity reinvested, disruption avoided.

## 13. WHAT — Weekly / monthly / quarterly cadence
Weekly SOC lead · Monthly CISO · Quarterly board/CFO. Same scorecard, different altitude. CSM translates.

## 14. WHO — Stakeholder map
Board/CFO, CISO, SOC lead, business owners — what each asks and needs. CSM = translator across altitudes, not metric owner.

## 15. WHO — RACI for scorecard
Walk the table quickly. CSM typically C on design, I on ops numbers — unless embedded in a value workshop.

## 16. Synthesis — Why/What/Who triangle
Bring it together. Breath before the ask. “Measurement discipline beats dashboard theater.”

## 17. Close — 30-day pilot ask
**THE ASK:** one critical path · 1 outcome + 1 speed + 1 efficiency · 30 days. Baseline → intervene → readout. Kill one vanity metric in the same window. Point to live demo.

## 18. Backup — Q&A / value formula
Leave formula visible. AI questions → slide 11 levers. Chronicle/SecOps → inputs that make Layers 1–3 measurable. Stay curious, precise, short.

---

## Demo cue (after slide 17)
Open `soc-value-demo/`. Walk: noisy SIEM → show FP hours & path contain → toggle “tuned SecOps” + “AI triage assist” → call out measurable deltas (FP hours, critical-path contain, capacity reinvested). ≤2 minutes. Not an AI feature tour.
