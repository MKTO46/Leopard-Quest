# Deployment status

Source is ready for a static HTTPS host at either the domain root or a GitHub Pages repository subpath. No server, accounts, analytics, remote fonts, or personal-data uploads are used. Test records live only in the isolated test browser and are not included in this source package.

Deployment was blocked on October 19, 2026:

- Connected GitHub identity: MKTO46.
- The repository lookup for MKTO46/Leopard-Quest returned GitHub API 404 Not Found. This can mean absent or inaccessible.
- The available GitHub connector exposes no create-repository or configure-Pages operation.
- Git CLI returned `Could not resolve host: github.com`; no GitHub CLI was installed.
- Browser-control initialization failed twice with `trusted Node process exited unexpectedly`.

No remote repository was created or source pushed. No live URL was verified. The included workflow will deploy main through GitHub Actions once a repository exists and Pages is configured to use Actions.

## Verification limitations

Automated Chrome tests ran against local files because localhost navigation returned ERR_NETWORK_ACCESS_DENIED. Real HTTPS service-worker installation, cache updates, offline reload, and Android/iOS installation still need an accessible host. Worker caching logic was tested separately in a mocked runtime, which does not establish actual browser offline functionality.

Recap is an in-app nudge after 10 PM, not a background notification. Timers pause on page exit and resume manually after reload; phones can suspend browser execution. Backups contain personal data and should be kept private. Browser storage can be cleared by the OS or user; export regularly. Different browsers and origins have separate local data.
