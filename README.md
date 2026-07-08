# Mohit Saini — Portfolio

A fast, fully responsive React portfolio built with Vite. Design theme: a
"backend blueprint" — the hero shows an animated client → server → database
request flow, and projects/skills/education are styled like API endpoints
and a git commit log, matching a full-stack/MERN developer profile.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a `dist/` folder — plain static files, ready to deploy anywhere.

## Deploy (free options)

**Vercel (recommended, easiest):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.
4. You get a live URL like `mohit-saini-portfolio.vercel.app` — put this link
   on your Upwork/Fiverr profile and resume.

**Netlify:** same flow — import repo, build command `npm run build`,
publish directory `dist`.

## Editing content

All resume content (projects, skills, education, contact info) lives in
`src/data.js` — edit that file and the whole site updates automatically.
Colors and fonts are CSS variables at the top of `src/index.css`.
