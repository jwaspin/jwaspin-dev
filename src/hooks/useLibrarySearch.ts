import Fuse from 'fuse.js'
import { useMemo } from 'react'
import type { Library, LibraryEcosystem } from '../data/types'

export function useLibrarySearch(
  libraries: Library[],
  ecosystems: LibraryEcosystem[],
  query: string,
) {
  const fuse = useMemo(
    () =>
      new Fuse(libraries, {
        keys: [
          { name: 'name', weight: 3 },
          { name: 'tags', weight: 2 },
          { name: 'description', weight: 1 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [libraries],
  )

  return useMemo(() => {
    const trimmed = query.trim()
    if (!trimmed) return null
    const matchingEcosystems = ecosystems
      .filter((ecosystem) => ecosystem.name.toLowerCase().includes(trimmed.toLowerCase()))
      .map((ecosystem) => ecosystem.id)
    const matches = fuse.search(trimmed).map((result) => result.item)
    const byEcosystem = libraries.filter((library) => matchingEcosystems.includes(library.ecosystemId))
    return [...new Map([...matches, ...byEcosystem].map((library) => [library.id, library])).values()]
  }, [ecosystems, fuse, libraries, query])
}
