This is a React portfolio site built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## GitHub Pages Deployment

This repository is configured to deploy only bundled static output to GitHub Pages.

- Developers push the React/Next.js source code to `main`.
- GitHub Actions runs on every `main` push.
- The workflow installs dependencies with `pnpm install --frozen-lockfile`.
- The workflow runs `pnpm build`, which executes `next build`.
- `next.config.ts` uses `output: "export"`, so the static site is generated in `out/`.
- Only the `out/` folder is uploaded with `actions/upload-pages-artifact`.
- GitHub Pages serves the bundled `index.html`, JavaScript, CSS, and public assets from that artifact.

Because this is a user site repository (`designer-su.github.io`), the site is served from the domain root. No Vite `base` setting is used because this project is not Vite-based.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**.
