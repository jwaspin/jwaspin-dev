import type { LucideIcon } from 'lucide-react'

export type Pricing = 'free' | 'freemium' | 'paid'

export interface Category {
  id: string
  name: string
  description: string
  icon: LucideIcon
  groupId: CategoryGroupId
}

export type CategoryGroupId =
  | 'application-development'
  | 'data-intelligence'
  | 'platform-operations'
  | 'workflow-design'

export interface CategoryGroup {
  id: CategoryGroupId
  name: string
  description: string
}

export interface ProductOwner {
  id: string
  name: string
  description: string
  url: string
  toolIds: string[]
}

export interface LibraryEcosystem {
  id: string
  name: string
  description: string
  /** Existing top-level tool or language this ecosystem extends. */
  toolId: string
  /** Broader ecosystems whose general-purpose libraries also apply here. */
  relatedEcosystemIds?: string[]
}

export interface Library {
  id: string
  name: string
  description: string
  url: string
  ecosystemId: string
  tags?: string[]
}

export interface Tool {
  /** Unique slug, used as React key and for deep-linking. */
  id: string
  name: string
  description: string
  url: string
  categoryId: string
  tags?: string[]
  pricing?: Pricing
  /** Surface in the "Popular" rail on the home view. */
  featured?: boolean
}
