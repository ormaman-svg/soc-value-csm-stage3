# SOC Value — unified site (deck + demo)

Or Maman · Google Cloud Security · Principal CSM Stage 3

## Local
```bash
cd /workspace/soc-value-site
npx --yes serve -p 4175
```
- http://localhost:4175/ — hub
- /deck/ — 18-slide deck
- /demo/ — interactive scorecard

## Vercel (Hobby / free)
```bash
cd /workspace/soc-value-site
npx --yes vercel login
npx --yes vercel --yes
# or anonymous temporary:
npx --yes vercel deploy --yes --temporary
```

## GitHub Pages
Repo: `ormaman-svg/soc-value-csm-stage3`  
Settings → Pages → Deploy from branch `main` → folder `/` (root)

Expected:
- https://ormaman-svg.github.io/soc-value-csm-stage3/
- .../deck/
- .../demo/
