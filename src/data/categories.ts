import {
  Code2,
  LayoutTemplate,
  Server,
  Smartphone,
  Palette,
  Boxes,
  Database,
  Plug,
  PenTool,
  Sparkles,
  Cloud,
  GitBranch,
  FlaskConical,
  Activity,
  TerminalSquare,
  Wrench,
  Type,
} from 'lucide-react'
import type { Category } from './types'

/**
 * Category order here drives display order throughout the app.
 * To add a category: append an entry with a unique `id`, then create a
 * matching file under src/data/tools/<id>.ts that exports a Tool[].
 */
export const categories: Category[] = [
  {
    id: 'languages',
    name: 'Languages & Runtimes',
    description: 'Official docs and references for programming languages and their runtimes.',
    icon: Code2,
  },
  {
    id: 'frontend',
    name: 'Frontend Frameworks',
    description: 'Frameworks and meta-frameworks for building web UIs.',
    icon: LayoutTemplate,
  },
  {
    id: 'backend',
    name: 'Backend Frameworks',
    description: 'Server-side frameworks across languages and ecosystems.',
    icon: Server,
  },
  {
    id: 'mobile',
    name: 'Mobile & Cross-Platform',
    description: 'Native and cross-platform app development tools.',
    icon: Smartphone,
  },
  {
    id: 'css-ui',
    name: 'CSS & UI Libraries',
    description: 'Styling systems and pre-built component libraries.',
    icon: Palette,
  },
  {
    id: 'state-data',
    name: 'State & Data Fetching',
    description: 'Client state management and remote data synchronization.',
    icon: Boxes,
  },
  {
    id: 'databases',
    name: 'Databases & ORMs',
    description: 'Datastores, query builders, and object-relational mappers.',
    icon: Database,
  },
  {
    id: 'api-tools',
    name: 'API Tools',
    description: 'Building, testing, and documenting HTTP, GraphQL, and RPC APIs.',
    icon: Plug,
  },
  {
    id: 'design',
    name: 'Design & Diagramming',
    description: 'Interface design, whiteboarding, and diagramming tools.',
    icon: PenTool,
  },
  {
    id: 'ai-ml',
    name: 'AI & ML Tools',
    description: 'Models, agent frameworks, coding assistants, and ML infrastructure.',
    icon: Sparkles,
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud',
    description: 'Containers, IaC, CI/CD, and cloud platforms.',
    icon: Cloud,
  },
  {
    id: 'version-control',
    name: 'Version Control & Collaboration',
    description: 'Source control hosting and code collaboration.',
    icon: GitBranch,
  },
  {
    id: 'testing-qa',
    name: 'Testing & QA',
    description: 'Unit, integration, end-to-end, and load testing tools.',
    icon: FlaskConical,
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Observability',
    description: 'Error tracking, logging, metrics, and uptime monitoring.',
    icon: Activity,
  },
  {
    id: 'editors',
    name: 'Editors & IDEs',
    description: 'Code editors and integrated development environments.',
    icon: TerminalSquare,
  },
  {
    id: 'productivity',
    name: 'Productivity & Dev Utilities',
    description: 'Everyday utilities: formatters, sandboxes, references, cheat sheets.',
    icon: Wrench,
  },
  {
    id: 'design-assets',
    name: 'Fonts, Icons & Color',
    description: 'Typefaces, icon sets, and color palette tools.',
    icon: Type,
  },
]

export const categoryById = new Map(categories.map((c) => [c.id, c]))
