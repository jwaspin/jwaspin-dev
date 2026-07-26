import { useMemo, useState } from 'react'
import { categories, categoryGroups, libraries, libraryCountByEcosystem, libraryEcosystems, productOwners, references, referenceSourceTypes, tools, toolCountByCategory } from './data'
import type { ReferenceSourceType } from './data'
import { useTheme } from './hooks/useTheme'
import { useToolSearch } from './hooks/useToolSearch'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { CategorySection } from './components/CategorySection'
import { ToolCard } from './components/ToolCard'
import { EmptyState } from './components/EmptyState'
import { Footer } from './components/Footer'
import { CategoriesPage } from './components/CategoriesPage'
import type { SortOrder } from './components/CategoryNav'
import { OwnersPage } from './components/OwnersPage'
import { OwnerNav } from './components/OwnerNav'
import { SearchBar } from './components/SearchBar'
import { ArrowLeft } from 'lucide-react'
import { LibraryNav } from './components/LibraryNav'
import { LibrariesPage } from './components/LibrariesPage'
import { LibraryCard } from './components/LibraryCard'
import { useLibrarySearch } from './hooks/useLibrarySearch'
import { ReferencesPage } from './components/ReferencesPage'
import { ReferenceNav } from './components/ReferenceNav'

function compareByName(a: { name: string }, b: { name: string }, order: SortOrder) {
  const comparison = a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  return order === 'az' ? comparison : -comparison
}

function App() {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [view, setView] = useState<'tools' | 'categories' | 'owners' | 'owner' | 'libraries' | 'references'>('tools')
  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null)
  const [selectedEcosystem, setSelectedEcosystem] = useState<string | null>(null)
  const [selectedSourceType, setSelectedSourceType] = useState<ReferenceSourceType | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>(() => {
    const saved = localStorage.getItem('tool-sort-order')
    return saved === 'za' ? 'za' : 'az'
  })

  const searchResults = useToolSearch(tools, categories, productOwners, query)
  const librarySearchResults = useLibrarySearch(libraries, libraryEcosystems, query)

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => compareByName(a, b, sortOrder)),
    [sortOrder],
  )

  const visibleCategories = useMemo(() => {
    const visible = selectedCategory
      ? sortedCategories.filter((category) => category.id === selectedCategory)
      : sortedCategories
    return visible
  }, [selectedCategory, sortedCategories])

  const sortedOwners = useMemo(
    () => [...productOwners].sort((a, b) => compareByName(a, b, sortOrder)),
    [sortOrder],
  )

  const sortedEcosystems = useMemo(
    () => [...libraryEcosystems].sort((a, b) => compareByName(a, b, sortOrder)),
    [sortOrder],
  )

  const selectedOwner = productOwners.find((owner) => owner.id === selectedOwnerId) ?? null

  const sortTools = (items: typeof tools) => [...items].sort((a, b) => compareByName(a, b, sortOrder))

  const sortLibraries = (items: typeof libraries) => [...items].sort((a, b) => compareByName(a, b, sortOrder))

  const sortReferences = (items: typeof references) =>
    [...items].sort((a, b) => (sortOrder === 'az' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))

  const selectCategory = (id: string | null) => {
    setSelectedCategory(id)
    setView('tools')
    setSelectedOwnerId(null)
    setSelectedEcosystem(null)
    setQuery('')
  }

  const showTools = () => selectCategory(null)

  const showOwners = () => {
    setView('owners')
    setSelectedCategory(null)
    setSelectedOwnerId(null)
    setQuery('')
    setSelectedEcosystem(null)
  }

  const selectOwner = (ownerId: string) => {
    setSelectedOwnerId(ownerId)
    setSelectedCategory(null)
    setView('owner')
    setQuery('')
  }

  const showCategories = () => {
    setView('categories')
    setSelectedCategory(null)
    setSelectedOwnerId(null)
    setQuery('')
    setSelectedEcosystem(null)
  }

  const showLibraries = () => {
    setView('libraries')
    setSelectedCategory(null)
    setSelectedOwnerId(null)
    setSelectedEcosystem(null)
    setQuery('')
  }

  const showReferences = () => {
    setView('references')
    setSelectedCategory(null)
    setSelectedOwnerId(null)
    setSelectedEcosystem(null)
    setSelectedSourceType(null)
    setQuery('')
  }

  const selectSourceType = (id: ReferenceSourceType | null) => {
    setView('references')
    setSelectedSourceType(id)
    setQuery('')
  }

  const selectEcosystem = (id: string | null) => {
    setView('libraries')
    setSelectedEcosystem(id)
    setQuery('')
  }

  const changeSortOrder = (order: SortOrder) => {
    setSortOrder(order)
    localStorage.setItem('tool-sort-order', order)
  }

  const isSearching = searchResults !== null
  const isLibraryView = view === 'libraries'
  const isOwnersView = view === 'owners' || view === 'owner'
  const isReferencesView = view === 'references'

  return (
    <div className="flex min-h-screen flex-col pb-20 sm:pb-14">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeView={
          view === 'categories'
            ? 'categories'
            : isOwnersView
              ? 'organizations'
              : isLibraryView
                ? 'libraries'
                : isReferencesView
                  ? 'references'
                  : 'tools'
        }
        onShowTools={showTools}
        onShowCategories={showCategories}
        onShowOrganizations={showOwners}
        onShowLibraries={showLibraries}
        onShowReferences={showReferences}
      />

      <div className="mx-auto flex w-full max-w-[86rem] flex-1 gap-8 px-4 py-6 sm:px-6">
        <div className="hidden w-72 shrink-0 lg:block">
          {isLibraryView ? (
            <LibraryNav
              variant="sidebar"
              ecosystems={sortedEcosystems}
              counts={libraryCountByEcosystem}
              totalCount={libraries.length}
              selected={selectedEcosystem}
              onSelect={selectEcosystem}
              sortOrder={sortOrder}
              onSortChange={changeSortOrder}
            />
          ) : isReferencesView ? (
            <ReferenceNav
              variant="sidebar"
              sourceTypes={referenceSourceTypes}
              references={references}
              totalCount={references.length}
              selected={selectedSourceType}
              onSelect={selectSourceType}
              sortOrder={sortOrder}
              onSortChange={changeSortOrder}
            />
          ) : isOwnersView ? (
            <OwnerNav
              variant="sidebar"
              owners={sortedOwners}
              totalCount={productOwners.length}
              selected={selectedOwnerId}
              onSelect={(id) => (id ? selectOwner(id) : showOwners())}
              sortOrder={sortOrder}
              onSortChange={changeSortOrder}
            />
          ) : (
            <CategoryNav
              variant="sidebar"
              categories={sortedCategories}
              counts={toolCountByCategory}
              selected={selectedCategory}
              onSelect={selectCategory}
              showingCategories={view === 'categories'}
              onShowCategories={showCategories}
              sortOrder={sortOrder}
              onSortChange={changeSortOrder}
            />
          )}
        </div>

        <main className="min-w-0 flex-1 space-y-6">
          <div className="sticky top-16 z-20 -mx-1 bg-slate-50/95 px-1 py-2 backdrop-blur-sm dark:bg-slate-950/95">
            <SearchBar
              query={query}
              placeholder={isLibraryView ? 'Search libraries, packages, and ecosystems…' : 'Search tools, categories, organizations…'}
              onQueryChange={(value) => {
                setQuery(value)
                if (value && !isLibraryView) {
                  setView('tools')
                  setSelectedOwnerId(null)
                }
              }}
            />
          </div>

          <div className="lg:hidden">
            {isLibraryView ? (
              <LibraryNav
                variant="chips"
                ecosystems={sortedEcosystems}
                counts={libraryCountByEcosystem}
                totalCount={libraries.length}
                selected={selectedEcosystem}
                onSelect={selectEcosystem}
                sortOrder={sortOrder}
                onSortChange={changeSortOrder}
              />
            ) : isReferencesView ? (
              <ReferenceNav
                variant="chips"
                sourceTypes={referenceSourceTypes}
                references={references}
                totalCount={references.length}
                selected={selectedSourceType}
                onSelect={selectSourceType}
                sortOrder={sortOrder}
                onSortChange={changeSortOrder}
              />
            ) : isOwnersView ? (
              <OwnerNav
                variant="chips"
                owners={sortedOwners}
                totalCount={productOwners.length}
                selected={selectedOwnerId}
                onSelect={(id) => (id ? selectOwner(id) : showOwners())}
                sortOrder={sortOrder}
                onSortChange={changeSortOrder}
              />
            ) : (
              <CategoryNav
                variant="chips"
                categories={sortedCategories}
                counts={toolCountByCategory}
                selected={selectedCategory}
                onSelect={selectCategory}
                showingCategories={view === 'categories'}
                onShowCategories={showCategories}
                sortOrder={sortOrder}
                onSortChange={changeSortOrder}
              />
            )}
          </div>

          {!isSearching && selectedCategory && view === 'tools' && (
            <button
              onClick={showTools}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
            >
              <ArrowLeft className="h-4.5 w-4.5" aria-hidden="true" />
              All tools
            </button>
          )}

          <div className="space-y-10">
          {isLibraryView ? (
            librarySearchResults ? (
              librarySearchResults.length > 0 ? (
                <section><h2 className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">{librarySearchResults.length} result{librarySearchResults.length === 1 ? '' : 's'}</h2><div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{sortLibraries(librarySearchResults).map((library) => <LibraryCard key={library.id} library={library} />)}</div></section>
              ) : <EmptyState query={query} noun="libraries" browseLabel="ecosystem" />
            ) : <LibrariesPage ecosystems={sortedEcosystems} libraries={sortLibraries(libraries)} selected={selectedEcosystem} onSelect={selectEcosystem} />
          ) : isSearching ? (
            searchResults.length > 0 ? (
              <section>
                <h2 className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {searchResults.length} result{searchResults.length === 1 ? '' : 's'}
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {sortTools(searchResults).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            ) : (
              <EmptyState query={query} />
            )
          ) : view === 'categories' ? (
            <CategoriesPage
              categories={sortedCategories}
              groups={categoryGroups}
              counts={toolCountByCategory}
              onSelect={selectCategory}
            />
          ) : isOwnersView ? (
            <OwnersPage
              owners={sortedOwners}
              tools={sortTools(tools)}
              selectedOwner={selectedOwner}
              onSelect={selectOwner}
              onBack={showOwners}
            />
          ) : isReferencesView ? (
            <ReferencesPage
              sourceTypes={referenceSourceTypes}
              references={sortReferences(references)}
              selected={selectedSourceType}
              onSelect={selectSourceType}
            />
          ) : (
            visibleCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                tools={sortTools(tools.filter((tool) => tool.categoryId === category.id))}
              />
            ))
          )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
