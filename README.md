# Portfolio

Next.js portfolio site built with the App Router, TypeScript, Tailwind CSS v4, and fonts optimized through `next/font`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

- `src/app/page.tsx`: homepage content, project cards, and portfolio sections
- `src/app/layout.tsx`: global metadata and app shell
- `src/app/globals.css`: theme tokens, layout styling, and reusable UI classes

## Customize

1. Replace the placeholder project entries in `src/app/page.tsx`
2. Update your name, hero copy, and contact links in `src/app/page.tsx`
3. Change site metadata in `src/app/layout.tsx`

## Vercel

This app is ready for Vercel's default Next.js deployment flow.

### Deploy from the dashboard

1. Push this repo to GitHub
2. Import the repository in Vercel
3. Keep the default Next.js framework detection
4. Deploy

### Deploy from the CLI

```bash
npx vercel
```

For a production deployment:

```bash
npx vercel --prod
```
