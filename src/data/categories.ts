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
  Layers3,
  Package,
  Network,
  Fingerprint,
} from 'lucide-react'
import type { Category, CategoryGroup } from './types'

export const categoryGroups: CategoryGroup[] = [
  {
    id: 'application-development',
    name: 'Application Development',
    description: 'Languages, frameworks, UI systems, APIs, and application architecture.',
  },
  {
    id: 'data-intelligence',
    name: 'Data & Intelligence',
    description: 'Data storage, state management, machine learning, and AI tooling.',
  },
  {
    id: 'platform-operations',
    name: 'Platform & Operations',
    description: 'Build systems, infrastructure, networking, testing, and observability.',
  },
  {
    id: 'workflow-design',
    name: 'Workflow & Design',
    description: 'Editors, collaboration, productivity, interface design, and visual assets.',
  },
]

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
    groupId: 'application-development',
  },
  {
    id: 'frontend',
    name: 'Frontend Frameworks',
    description: 'Frameworks and meta-frameworks for building web UIs.',
    icon: LayoutTemplate,
    groupId: 'application-development',
  },
  {
    id: 'backend',
    name: 'Backend Frameworks',
    description: 'Server-side frameworks across languages and ecosystems.',
    icon: Server,
    groupId: 'application-development',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack & Type-Safe Web',
    description: 'End-to-end web toolkits, routers, and type-safe client-server APIs.',
    icon: Layers3,
    groupId: 'application-development',
  },
  {
    id: 'mobile',
    name: 'Mobile & Cross-Platform',
    description: 'Native and cross-platform app development tools.',
    icon: Smartphone,
    groupId: 'application-development',
  },
  {
    id: 'css-ui',
    name: 'CSS & UI Libraries',
    description: 'Styling systems and pre-built component libraries.',
    icon: Palette,
    groupId: 'application-development',
  },
  {
    id: 'state-data',
    name: 'State & Data Fetching',
    description: 'Client state management and remote data synchronization.',
    icon: Boxes,
    groupId: 'data-intelligence',
  },
  {
    id: 'databases',
    name: 'Databases & ORMs',
    description: 'Datastores, query builders, and object-relational mappers.',
    icon: Database,
    groupId: 'data-intelligence',
  },
  {
    id: 'api-tools',
    name: 'API Tools',
    description: 'Building, testing, and documenting HTTP, GraphQL, and RPC APIs.',
    icon: Plug,
    groupId: 'application-development',
  },
  {
    id: 'auth',
    name: 'Auth & Identity',
    description: 'Login, identity, session management, and access-control tools.',
    icon: Fingerprint,
    groupId: 'application-development',
  },
  {
    id: 'networking-security',
    name: 'Networking & Security',
    description: 'Web servers, proxies, traffic analysis, and network security tools.',
    icon: Network,
    groupId: 'platform-operations',
  },
  {
    id: 'design',
    name: 'Design & Diagramming',
    description: 'Interface design, whiteboarding, and diagramming tools.',
    icon: PenTool,
    groupId: 'workflow-design',
  },
  {
    id: 'ai-ml',
    name: 'AI & ML Tools',
    description: 'Models, agent frameworks, coding assistants, and ML infrastructure.',
    icon: Sparkles,
    groupId: 'data-intelligence',
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud',
    description: 'Containers, IaC, CI/CD, and cloud platforms.',
    icon: Cloud,
    groupId: 'platform-operations',
  },
  {
    id: 'build-package',
    name: 'Build & Package Tools',
    description: 'Bundlers, build systems, monorepo tools, and JavaScript package managers.',
    icon: Package,
    groupId: 'platform-operations',
  },
  {
    id: 'version-control',
    name: 'Version Control & Collaboration',
    description: 'Source control hosting and code collaboration.',
    icon: GitBranch,
    groupId: 'workflow-design',
  },
  {
    id: 'testing-qa',
    name: 'Testing & QA',
    description: 'Unit, integration, end-to-end, and load testing tools.',
    icon: FlaskConical,
    groupId: 'platform-operations',
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Observability',
    description: 'Error tracking, logging, metrics, and uptime monitoring.',
    icon: Activity,
    groupId: 'platform-operations',
  },
  {
    id: 'editors',
    name: 'Editors, IDEs & Terminals',
    description: 'Code editors, integrated development environments, and terminal applications.',
    icon: TerminalSquare,
    groupId: 'workflow-design',
  },
  {
    id: 'productivity',
    name: 'Productivity & Dev Utilities',
    description: 'Everyday utilities: formatters, sandboxes, references, cheat sheets.',
    icon: Wrench,
    groupId: 'workflow-design',
  },
  {
    id: 'design-assets',
    name: 'Fonts, Icons & Color',
    description: 'Typefaces, icon sets, and color palette tools.',
    icon: Type,
    groupId: 'workflow-design',
  },
]

export const categoryById = new Map(categories.map((c) => [c.id, c]))
