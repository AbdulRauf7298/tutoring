# Tutoring Website

Static Next.js site for Physics & Mathematics tutoring. This repo is configured for static export and GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

The build generates a fully static site in `out/` (via `output: "export"` and the Pages-friendly base path configuration in `next.config.ts`).

## Deploy to GitHub Pages

1. Push to the `main` branch or trigger the workflow manually.
2. The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the static site, and uploads `out/` as the Pages artifact.
3. The site is published to GitHub Pages at `https://<username>.github.io/<repository>/`. The base path is set automatically from the repository name when running in GitHub Actions.
