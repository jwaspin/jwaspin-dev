# jwaspin.dev — Developer Tools Library

A curated, categorized directory of developer tools — languages, frameworks,
databases, API tooling, design/diagramming, AI/ML, DevOps, testing,
monitoring, editors, and more. Static site, no backend, no user data. All
content lives in version-controlled config files.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Fuse.js](https://www.fusejs.io/) for client-side fuzzy search
- [lucide-react](https://lucide.dev/) for icons
- Tool logos are fetched at runtime from Google's public favicon service,
  with a colored monogram fallback if a logo can't be resolved
  ([src/lib/favicon.ts](src/lib/favicon.ts))

No database, no API, no auth. Everything is a static bundle.

## Adding or editing tools

All content lives under [src/data/](src/data/):

- **Add a tool**: open `src/data/tools/<category>.ts` and append an object
  matching the `Tool` type in [src/data/types.ts](src/data/types.ts) — `id`
  (unique slug), `name`, `description`, `url`, `categoryId`, plus optional
  `tags`, `pricing` (`free` / `freemium` / `paid`), and `featured`.
- **Add a category**: add an entry to the `categories` array in
  [src/data/categories.ts](src/data/categories.ts) (pick a [lucide](https://lucide.dev/icons/)
  icon and a parent `groupId`), then create `src/data/tools/<id>.ts` exporting a `Tool[]`, and wire
  it into the aggregate list in [src/data/index.ts](src/data/index.ts).
- **Remove a tool**: delete its entry from the relevant category file.
- **Group tools by organization**: add or update an entry in
  [src/data/owners.ts](src/data/owners.ts). Organization pages use explicit tool IDs,
  so a product can keep its functional category while appearing with its company's,
  foundation's, or open-source group's other tools.
- **Add an ecosystem library**: add it to `libraries` in
  [src/data/libraries.ts](src/data/libraries.ts). Libraries belong to a
  `LibraryEcosystem`, and each ecosystem links back to an existing top-level
  tool or language through `toolId`.

There's a helper script to sanity-check the data (duplicate ids, tools
pointing at a category that doesn't exist, per-category counts):

```bash
npx tsx -e "
import { tools, categories, toolCountByCategory } from './src/data/index.ts';
console.log('Total tools:', tools.length);
const ids = tools.map(t => t.id);
console.log('Duplicate ids:', [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))]);
"
```

Changes only take effect after a rebuild + redeploy — there's no admin UI
and nothing is persisted at runtime (see Deployment below).

## Local development

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # type-check + production build to dist/
pnpm preview   # serve the production build locally
pnpm lint      # oxlint
```

## Deployment

Deploys to **GitHub Pages** via [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds and publishes `dist/` on every push to `main` (or manually via
the Actions tab → "Deploy to GitHub Pages" → "Run workflow"). A separate
[.github/workflows/ci.yml](.github/workflows/ci.yml) lints and builds every
pull request without deploying, so breakage surfaces before merge.

**One-time setup** (do this before the first deploy):

1. In this repo on GitHub: **Settings → Pages → Build and deployment →
   Source**, select **GitHub Actions**.
2. Push to `main` (or run the workflow manually) and the site will build and
   deploy automatically.

### Custom domain

If you're pointing a custom domain at this site, add it under **Settings →
Pages → Custom domain** and create the corresponding DNS record (an `A`
record to GitHub's Pages IPs, or a `CNAME` record, depending on whether it's
an apex or subdomain — see [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
No changes to this repo are needed — `vite.config.ts` already defaults to
serving from `/`, which is what a custom domain needs.

### No custom domain

If instead you're serving from `https://<user>.github.io/<repo>/`, the app
needs to know it isn't at the domain root. Set the `VITE_BASE_PATH` env var
for the build step in `.github/workflows/deploy.yml` (there's a commented
example already in the file):

```yaml
env:
  VITE_BASE_PATH: /jwaspin-dev/
```

## Project structure

```
src/
  data/
    types.ts             Tool, category, organization, and library types
    categories.ts        Category list (order = display order)
    libraries.ts         Ecosystem definitions and library catalog
    owners.ts            Organization-to-tool relationships
    tools/*.ts            One file per category, exports a Tool[]
    index.ts              Aggregates everything the app renders
  components/            Presentational React components
  hooks/                  useTheme (dark/light), useToolSearch (Fuse.js)
  lib/favicon.ts          Favicon URL + monogram-fallback color helpers
```
