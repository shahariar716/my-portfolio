# Portfolio Finalization Options

Use this checklist after you can view the demo locally or on Vercel.

## Option 1: Finalize Fast

Choose this if the current design and content are good enough to publish now.

1. Confirm the demo opens without layout issues.
2. Update the email in `data/portfolio.ts`.
3. Replace the placeholder profile image in `public/profile-placeholder.svg` or update `personal.profileImage` in `data/portfolio.ts`.
4. Push the latest branch to GitHub.
5. Redeploy on Vercel.

Recommended commands:

```bash
npm install
npm run build
git add .
git commit -m "Finalize portfolio content"
git push
```

## Option 2: Finalize With Real Personal Content

Choose this if you want the portfolio to feel complete before sharing.

Update these fields in `data/portfolio.ts`:

- `personal.name`, `personal.title`, `personal.tagline`, and `personal.availability`
- `about.intro` and `about.highlights`
- `skills`
- `experience`
- `projects`
- `research`
- `education`
- `contact.email`, `contact.linkedin`, and `contact.github`

After editing, run:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

## Option 3: Finalize For Production Branding

Choose this if you want a polished public launch.

1. Replace SVG placeholders with real screenshots or project mockups in `public/`.
2. Update `metadataBase` in `app/layout.tsx` to your final domain.
3. Add a custom domain in Vercel.
4. Add a real contact backend later using a Next.js server action, Formspree, Resend, or another email API.
5. Add analytics after deployment if needed.

## My Recommended Final Path

For this project, use this order:

1. **Option 2** first: update real content in `data/portfolio.ts`.
2. **Option 3** next: update images/domain.
3. Run the production checks.
4. Push to GitHub and redeploy on Vercel.

If the Vercel build fails, copy the final 20 lines of the build log after `npm run build` and debug from there.
