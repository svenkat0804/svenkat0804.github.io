# S. Venkatesh — Premium Senior iOS Developer Portfolio

A responsive, static portfolio website designed for GitHub Pages. Built with semantic HTML, custom CSS, and vanilla JavaScript; no build tools or paid services are required.

## Files

- `index.html` — all portfolio sections, metadata, navigation, project cards, and contact form.
- `styles.css` — visual system, responsive layout, animations, project mockups, and modal styles.
- `script.js` — mobile navigation, project filters, case-study dialogs, contact email fallback, and reveal animations.
- `assets/iOSDeveloper_Resume.pdf` — resume download used by the hero CTA.
- `assets/favicon.svg` — custom monogram favicon.

## Run locally

Open `index.html` in a browser. For a local web server, from this folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to the existing GitHub Pages repository

The existing site is hosted at `https://svenkat0804.github.io/` from the `main` branch. Preserve that repository and its current GitHub Pages settings.

1. Download and extract this package.
2. Review the site locally, including links, project descriptions, résumé download, mobile navigation, project filters, and contact form.
3. In the existing repository `svenkat0804/svenkat0804.github.io`, replace `index.html` and `styles.css`, add `script.js`, and add the `assets/` folder contents.
4. Keep the files at the repository root (do not place them in an extra nested folder).
5. Commit to `main`. GitHub Pages should deploy using the existing configuration.
6. Open `https://svenkat0804.github.io/` and hard-refresh if the old CSS remains cached.

You can also use Git from a local clone:

```bash
git clone https://github.com/svenkat0804/svenkat0804.github.io.git
cd svenkat0804.github.io
# Copy the contents of this package into this repository root, reviewing before overwrite.
git add index.html styles.css script.js assets README.md
git commit -m "Upgrade portfolio with premium responsive design"
git push origin main
```

## Contact form behavior

No backend or form service is configured. Submitting the form validates the fields and opens the visitor's default email application with the subject and message prefilled. The visitor must review and send the email. The page does not falsely claim that a message was sent.

## Accuracy and confidentiality

- The professional summary, experience, education, and project details are based on the supplied resume and current public portfolio content.
- Project UI panels are original conceptual illustrations, explicitly labeled as such. They are not represented as screenshots of real apps.
- Public App Store and repository links are not invented.
- Before publishing, verify that you are comfortable making the phone number and resume PDF publicly available.
- Review each client/project description against any confidentiality obligations before deployment.

## Accessibility and performance

- Semantic landmarks, keyboard-accessible navigation and dialog, visible focus states, labels, accessible form status, reduced-motion support, responsive layouts, and SEO/Open Graph metadata are included.
- The site uses no frontend framework or third-party JavaScript dependencies. Google Fonts are progressive enhancement with system-font fallbacks.
