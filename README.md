# divyankshah.github.io

Personal portfolio site for Divyank Sameer Shah — built with React, TypeScript, and Vite, deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Content (bio, experience, projects, skills) lives in [`src/data/content.ts`](src/data/content.ts) — edit there to update the site.
