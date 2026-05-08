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

> The package registry was blocked in the provided environment during testing. On a normal machine, these commands are the expected run process.

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

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
