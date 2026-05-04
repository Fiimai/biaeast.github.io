# Automated Deployment

Your site is now configured for automated deployment to GitHub Pages! Here are the available commands:

## Quick Deployment (Recommended)

```bash
npm run deploy
```

This will:

1. Build your Next.js app with static export
2. Deploy the `out` directory to GitHub Pages

## Available Scripts

- **`npm run deploy`** - Quick build and deploy (recommended for most updates)
- **`npm run deploy:quick`** - Same as above (alias)
- **`npm run deploy:full`** - Lint, build, and deploy (for thorough checks)
- **`npm run clean`** - Remove build artifacts (out and .next directories)
- **`npm run rebuild`** - Clean and rebuild from scratch

## Development Workflow

1. Make your code changes
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`

That's it! Your site will be automatically updated at https://fiimai.github.io/biaeast.github.io/

If you want the root domain https://fiimai.github.io instead, the repository must be the user site repo named fiimai.github.io.

---

# Deploy to GitHub Pages

1. Make sure your repository is pushed to GitHub.
2. Run the following command to build and deploy your site:

   ```bash
   npm run deploy
   ```

   This will build your Next.js app, export it as static files, and publish the `out` directory to the `gh-pages` branch using the `gh-pages` package.

3. In your GitHub repository settings, set GitHub Pages to serve from the `gh-pages` branch (root).

For more details, see [GitHub Pages documentation](https://pages.github.com/).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
