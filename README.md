# jwaspin.dev

[![CI](https://github.com/jwaspin/jwaspin-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/jwaspin/jwaspin-dev/actions/workflows/ci.yml)
[![Deploy](https://github.com/jwaspin/jwaspin-dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jwaspin/jwaspin-dev/actions/workflows/deploy.yml)
[![Latest release](https://img.shields.io/github/v/release/jwaspin/jwaspin-dev?display_name=tag)](https://github.com/jwaspin/jwaspin-dev/releases/latest)
[![Live site](https://img.shields.io/badge/live-jwaspin.dev-6366f1)](https://jwaspin.dev/)

A curated, searchable map of the developer-tool ecosystem. Browse programming
languages, frameworks, infrastructure, databases, design tools, libraries,
standards, and other resources without maintaining another folder of bookmarks.

**Browse the live directory at [jwaspin.dev](https://jwaspin.dev/).**

## What is included

- **Tools** grouped into focused categories such as frontend, backend, databases,
  API tooling, DevOps, testing, monitoring, networking, and design.
- **Categories** organized under broader areas of the development lifecycle.
- **Organizations** that bring together products maintained by the same company,
  foundation, or open-source group.
- **Libraries** organized by language and framework ecosystem, including links
  between framework-specific libraries and the broader ecosystems that apply.
- Client-side fuzzy search across names, descriptions, tags, categories, and
  organizations.
- Curated, A–Z, and Z–A sorting options.
- Responsive light and dark interfaces.

The site is intentionally static: there is no backend, account system,
analytics pipeline, or user-data store. Directory content is reviewed and kept
in version-controlled TypeScript data files.

## Tech stack

- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fuse.js](https://www.fusejs.io/) for client-side search
- [Lucide](https://lucide.dev/) for interface icons
- [pnpm](https://pnpm.io/) for package management
- GitHub Actions and GitHub Pages for CI and deployment

Tool and library logos are resolved through Google's public favicon service,
with deterministic monogram fallbacks when a favicon is unavailable.

## Run locally

### Prerequisites

- Node.js 24
- pnpm 11.15.1

```bash
git clone https://github.com/jwaspin/jwaspin-dev.git
cd jwaspin-dev
pnpm install --frozen-lockfile
pnpm dev
```

The development server is available at <http://localhost:5173/>.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm lint` | Run oxlint |
| `pnpm build` | Type-check and create the production bundle |
| `pnpm preview` | Preview the production bundle locally |

## Contributing

Corrections and additions are welcome. A useful contribution may add a missing
resource, correct outdated documentation, improve classification, or refine the
interface.

1. Fork the repository and create a branch.
2. Make the smallest focused change that addresses the issue.
3. Run `pnpm lint` and `pnpm build`.
4. Open a pull request explaining what changed and why.

When adding directory content:

- Link to the official project or documentation whenever possible.
- Use a stable, unique lowercase ID.
- Keep descriptions concise and factual.
- Add useful discovery tags rather than repeating the name.
- Put a resource in every view where users would reasonably expect to find it;
  categories, organizations, and library ecosystems are overlapping discovery
  paths rather than mutually exclusive classifications.

### Add or update a tool

Tool entries live in [`src/data/tools/`](src/data/tools/), with one file per
category. Entries implement the `Tool` interface from
[`src/data/types.ts`](src/data/types.ts). New categories must also be registered
in [`src/data/categories.ts`](src/data/categories.ts) and aggregated from
[`src/data/index.ts`](src/data/index.ts).

### Add an organization relationship

Organization definitions live in [`src/data/owners.ts`](src/data/owners.ts).
Each organization references existing tool IDs, allowing products to remain in
their functional categories while also appearing together by maintainer.

### Add a library

Library ecosystems and their entries live in
[`src/data/libraries.ts`](src/data/libraries.ts). Every ecosystem points to an
existing top-level language or framework through `toolId`. Framework ecosystems
can declare broader related ecosystems whose general libraries also apply.

## Project structure

```text
.
├── .github/workflows/     CI, Pages deployment, and GitHub releases
├── public/                Static public assets
├── src/
│   ├── components/        UI components and directory views
│   ├── data/
│   │   ├── categories.ts  Category and parent-group definitions
│   │   ├── libraries.ts   Library ecosystems and entries
│   │   ├── owners.ts      Organization-to-tool relationships
│   │   ├── tools/         Tool entries grouped by category
│   │   ├── index.ts       Aggregated data exports
│   │   └── types.ts       Shared data types
│   ├── hooks/             Theme and search hooks
│   ├── lib/               Shared utilities
│   └── main.tsx           Application entry point
├── package.json
└── vite.config.ts
```

## Releases and deployment

- Pull requests are linted and built by
  [`ci.yml`](.github/workflows/ci.yml).
- Pushes to `main` are built and deployed to the `jwaspin.dev` GitHub Pages
  custom domain by [`deploy.yml`](.github/workflows/deploy.yml).
- The version in [`package.json`](package.json) is displayed in the application
  header. When that version changes on `main`,
  [`release.yml`](.github/workflows/release.yml) creates the corresponding
  `v<version>` Git tag and GitHub release.
