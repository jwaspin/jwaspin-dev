# jwaspin-dev

A modern React application built with Vite, featuring React Router, Tailwind CSS, and comprehensive tooling.

## Features

- **Vite + React 19**: Lightning-fast development with Hot Module Replacement (HMR)
- **React Router DOM**: Client-side routing for seamless navigation
- **Tailwind CSS v4**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Markdown Support**: react-markdown with remark-gfm for GitHub Flavored Markdown
- **ESLint**: Comprehensive linting with plugins for React, accessibility, and imports
- **Prettier**: Consistent code formatting integrated with ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:

```bash
npm run build
```

### Lint

Run ESLint:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

### Format

Format code with Prettier:

```bash
npm run format
```

## Project Structure

```
jwaspin-dev/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Home page component
│   │   └── MarkdownPage.jsx  # Markdown demo page
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles with Tailwind directives
├── public/                   # Static assets
├── eslint.config.js          # ESLint configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .prettierrc               # Prettier configuration
└── vite.config.js            # Vite configuration
```

## Technology Stack

### Core
- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.12.0

### Styling
- Tailwind CSS 4.1.18
- PostCSS 8.5.6
- Autoprefixer 10.4.23

### Markdown
- react-markdown 10.1.0
- remark-gfm 4.0.1

### Code Quality
- ESLint 9.39.1
  - eslint-plugin-react 7.37.5
  - eslint-plugin-react-hooks 7.0.1
  - eslint-plugin-react-refresh 0.4.24
  - eslint-plugin-jsx-a11y 6.10.2
  - eslint-plugin-import 2.32.0
  - eslint-plugin-simple-import-sort 12.1.1
- Prettier 3.8.0
- eslint-config-prettier 10.1.8

## License

This project is private.

