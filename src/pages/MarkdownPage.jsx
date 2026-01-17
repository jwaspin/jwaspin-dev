import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

const markdownContent = `
# Markdown Demo

This is a demonstration of **react-markdown** with **remark-gfm** support.

## Features

- GitHub Flavored Markdown
- Syntax highlighting
- Tables
- Task lists

## Example Table

| Feature | Status |
|---------|--------|
| React Router | ✅ Configured |
| Tailwind CSS | ✅ Configured |
| ESLint | ✅ Configured |
| Prettier | ✅ Configured |

## Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Task List

- [x] Set up Vite + React
- [x] Configure React Router
- [x] Configure Tailwind CSS
- [x] Configure ESLint
- [x] Configure Prettier
- [x] Add Markdown rendering

## Links

Check out the [React documentation](https://react.dev) for more information.

> **Note:** This markdown is rendered using react-markdown with remark-gfm plugin for GitHub Flavored Markdown support.
`

export default function MarkdownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Home
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
