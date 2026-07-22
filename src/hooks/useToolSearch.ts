import Fuse from 'fuse.js'
import { useMemo } from 'react'
import type { Category, Tool } from '../data/types'

const FUSE_OPTIONS: ConstructorParameters<typeof Fuse<Tool>>[1] = {
  keys: [
    { name: 'name', weight: 3 },
    { name: 'tags', weight: 2 },
    { name: 'description', weight: 1 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
}

export function useToolSearch(tools: Tool[], categories: Category[], query: string) {
  const fuse = useMemo(() => new Fuse(tools, FUSE_OPTIONS), [tools])

  return useMemo(() => {
    const trimmed = query.trim()
    if (!trimmed) return null

    const categoryNameMatch = categories
      .filter((c) => c.name.toLowerCase().includes(trimmed.toLowerCase()))
      .map((c) => c.id)

    const results = fuse.search(trimmed).map((r) => r.item)
    const byCategory = tools.filter((t) => categoryNameMatch.includes(t.categoryId))

    const merged = new Map<string, Tool>()
    for (const t of [...results, ...byCategory]) merged.set(t.id, t)
    return [...merged.values()]
  }, [fuse, query, tools, categories])
}
