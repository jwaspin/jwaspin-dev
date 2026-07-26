import type { Reference, ReferenceSourceTypeInfo } from './types'

export const referenceSourceTypes: ReferenceSourceTypeInfo[] = [
  {
    id: 'official',
    name: 'Official',
    description: "Maintained directly by the project or organization behind the methodology.",
  },
  {
    id: 'essay',
    name: 'Essay',
    description: "One author's original write-up that became the de facto reference.",
  },
  {
    id: 'publisher',
    name: 'Publisher',
    description: 'Guides and analysis from an established technical publisher.',
  },
]

export const references: Reference[] = [
  {
    id: 'twelve-factor-app',
    title: 'The Twelve-Factor App',
    description: 'Methodology for building software-as-a-service apps that are portable and resilient.',
    author: 'Adam Wiggins / Heroku',
    url: 'https://12factor.net/',
    sourceType: 'official',
    githubUrl: 'https://github.com/heroku/12factor',
  },
  {
    id: 'git-flow',
    title: 'A Successful Git Branching Model',
    description: 'The original git-flow post that popularized a dedicated develop/feature/release branch model.',
    author: 'Vincent Driessen',
    url: 'https://nvie.com/posts/a-successful-git-branching-model/',
    sourceType: 'essay',
  },
  {
    id: 'branching-patterns',
    title: 'Patterns for Managing Source Code Branches',
    description: 'A broader survey of branching strategies and the trade-offs between them.',
    author: 'Martin Fowler',
    url: 'https://martinfowler.com/articles/branching-patterns.html',
    sourceType: 'publisher',
  },
  {
    id: 'ssh-keygen-guide',
    title: 'How to Use ssh-keygen to Generate a New SSH Key',
    description: 'Practical guide to generating and managing SSH key pairs.',
    author: 'SSH Communications Security',
    url: 'https://www.ssh.com/academy/ssh/keygen',
    sourceType: 'publisher',
  },
]
