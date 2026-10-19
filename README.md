# Leopard Quest — Galaxy V1
Offline-first, mobile-friendly static web app built from the approved Kitty Quest Galaxy Autopilot V3.2 look.

## Run
Upload all files in this folder to the root of a GitHub Pages repository. In repository Settings → Pages choose **Deploy from a branch**, **main**, **/(root)**. Open the resulting HTTPS URL in Safari and use Share → Add to Home Screen. The page can be used offline *after an initial successful visit on HTTPS* (service worker caching). Local data stays on that browser/device; use Progress → EXPORT DATA for backups and import to restore.

For local testing, in this folder run `python3 -m http.server 8000` and visit http://localhost:8000. Do not expect offline caching on `file://` URLs. The app uses no external assets or account login.

## Safety and scope
- Phase One is conservative. Self-reported medical clearance and symptom check gate loaded strength exercises; it does **not** substitute for medical evaluation. Current daily-life joint pain/instability needs evaluation.
- Per-exercise hard caps: curls 20 lb per arm, pressdowns 45 lb, lat pulldown and low row 85 lb; others capped at 85 lb maximum. Starter weights are merely placeholders, and do not establish safe exercise loads.
- No automatic weight increases or automatic run-level increases. Three stages × two sets, suggested 12 reps, certified quality check, no failure training.
- Run/walk intervals require self-reported clearance; comfortable walking is the default.
- Calendar glows for logged activity or Quiet Mode. No penalty for missing a day.
- Timers are foreground UI only; 10 PM recap is an *in-app prompt* if the page is open, not a scheduled push notification.
- No automatic carryover of old Kitty Quest data because its exercise names and progression logic are different. Original approved file is included separately for provenance, not loaded by the app.

## V1.1 fixes

Session persistence and recovery decisions between sets; validated import and stored data; original hard caps retained; timed five-minute warm-up and cooldown with six run/walk cycles; level pinned during movement; actual cross restored; PNG installation icons; reduced-motion support; phone layout checks; scoped cache cleanup and offline navigation fallback. No automatic cap or run-level increases.

Tests: npm install, npx playwright install chromium, npm test. The browser tests use local files; worker tests use mocks. Real browser offline behavior needs HTTPS verification. See TEST-RESULTS.md and DEPLOYMENT.md.

## Monochrome theme

Black-and-white galaxy with low-opacity SVG rosettes, charcoal frosted glass, silver highlights and white completion glows. Floating cross and app-icon cross are vector paths, independent of emoji fonts. Reduced-motion preference is respected. Cached assets use a new version for the theme update.
