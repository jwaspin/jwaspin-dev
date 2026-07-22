import type { LucideIcon } from 'lucide-react'

export type Pricing = 'free' | 'freemium' | 'paid'

export interface Category {
  id: string
  name: string
  description: string
  icon: LucideIcon
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
