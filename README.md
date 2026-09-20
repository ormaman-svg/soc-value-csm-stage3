# SOC Value — Deck + Demo (Or Maman)

**Measuring Real Business Value for SOC Teams** · Google Cloud Security · Principal CSM Stage 3

## Live (temporary Vercel — claim to keep)
- Hub: https://temporary-snappy-olive-ixplfkb.vercel.app/
- Deck: https://temporary-snappy-olive-ixplfkb.vercel.app/deck/
- Demo: https://temporary-snappy-olive-ixplfkb.vercel.app/demo/
- **Claim:** https://vercel.com/claim-deployment?code=7511d4c4-e147-49bd-a4df-56b884bec3e5

Anonymous temp deploys expire ~60 minutes unless claimed onto a Vercel Hobby account (free).

## Local source of truth
Full single-file deliverables on the agent box:
- `/workspace/soc-value-deck/` — 18-slide deck + `slides.pdf` + speaker notes
- `/workspace/soc-value-demo/` — interactive scorecard
- `/workspace/soc-value-site/` — unified hub for deploy

```bash
cd /workspace/soc-value-site && npx --yes serve -p 4175
```

## Framework
Why → What → Who → 30-day pilot. AI only as a value lever (slide 11), not the thesis.

## GitHub Pages
Enable: Settings → Pages → Branch `main` → `/` (root). Full HTML still needs to be pushed from `/workspace/soc-value-site/` (hub + notes are already in this repo).
