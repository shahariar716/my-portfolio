# Shahariar Ahmmed (Tanif) Portfolio

A modern personal portfolio for a **Software Engineer + UI/UX Designer** built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and ShadCN-style component primitives.

## Features

- Premium responsive one-page portfolio UI
- Dark/light mode with system preference and manual toggle
- Sticky navbar, active section state, mobile menu, and smooth scrolling
- Framer Motion page, section, hover, modal, and scroll-progress animations
- Cursor glow, glassmorphism cards, subtle grid background, floating gradient effects
- CMS-ready content in `data/portfolio.ts`
- Frontend-only contact form ready for a backend/API/server action
- Local SVG assets so the site can run without external image dependencies

## Project Structure

```txt
app/                 Next.js App Router pages, layout, and global CSS
components/          Portfolio page and reusable UI primitives
data/                CMS-ready portfolio content
lib/                 Shared utilities
public/              Local static image assets
```

## Run Locally

Use Node.js 20, then install and start the dev server:

```bash
nvm use
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Local Install Troubleshooting

If install fails on your computer, run these commands from the project root:

```bash
node -v
npm -v
rm -rf node_modules package-lock.json .next
npm cache verify
npm install
npm run build
```

If you do not have `nvm`, install Node.js 20 LTS from <https://nodejs.org/> and then run `npm install`.

## Fix Vercel Deployment

If Vercel fails after `Running npm run build`, use this checklist:

1. Pull this latest code and push it to GitHub again.
2. In Vercel, open **Project Settings → Build & Development Settings**.
3. Set **Framework Preset** to `Next.js`.
4. Set **Install Command** to `npm install`.
5. Set **Build Command** to `npm run build`.
6. Set **Output Directory** to the default value (leave it empty for Next.js).
7. Set **Node.js Version** to `20.x` if Vercel asks.
8. Redeploy from the latest GitHub commit.

This update also pins Next.js to a newer 14.2.x release, adds a `vercel.json` build configuration, locks the project to Node 20, and removes the Google font build-time fetch, which are common deployment blockers/warnings.

## Production Build

```bash
npm run build
npm run start
```

## Finalize The Portfolio

Once you can view the demo, follow `FINALIZE.md` for three clear launch paths:

- **Finalize Fast**: publish the current version quickly.
- **Finalize With Real Personal Content**: replace placeholder content and links.
- **Finalize For Production Branding**: update images, domain, contact backend, and launch polish.

## Edit Portfolio Content

Edit `data/portfolio.ts` to change:

- Name, title, tagline, and profile image
- About highlights
- Skills
- Experience timeline
- Projects and project modal details
- Research details
- Education
- Email, LinkedIn, and GitHub links

This keeps content separate from UI components and makes it easy to connect to Sanity, Strapi, Contentful, or a custom backend later.

## Add to GitHub

If this is a new repository:

```bash
git init
git add .
git commit -m "Build premium portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If the repository already exists locally and only needs a remote:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin HEAD
```

If `origin` already exists:

```bash
git remote -v
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin HEAD
```

## Deploy

Recommended: Vercel.

1. Push the project to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.
