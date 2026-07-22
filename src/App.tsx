import { useMemo, useState } from 'react'
import { categories, tools, toolCountByCategory } from './data'
import { useTheme } from './hooks/useTheme'
import { useToolSearch } from './hooks/useToolSearch'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryNav } from './components/CategoryNav'
import { CategorySection } from './components/CategorySection'
import { ToolCard } from './components/ToolCard'
import { EmptyState } from './components/EmptyState'
import { Footer } from './components/Footer'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const searchResults = useToolSearch(tools, categories, query)

  const visibleCategories = useMemo(
    () => (selectedCategory ? categories.filter((c) => c.id === selectedCategory) : categories),
    [selectedCategory],
  )

  const isSearching = searchResults !== null

  return (
    <div className="flex min-h-screen flex-col">
      <Header query={query} onQueryChange={setQuery} theme={theme} onToggleTheme={toggleTheme} />

      {!isSearching && !selectedCategory && (
        <Hero toolCount={tools.length} categoryCount={categories.length} />
      )}

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-6 sm:px-6">
        <div className="hidden w-56 shrink-0 lg:block">
          <CategoryNav
            variant="sidebar"
            categories={categories}
            counts={toolCountByCategory}
            totalCount={tools.length}
            selected={selectedCategory}
            onSelect={(id) => {
              setSelectedCategory(id)
              setQuery('')
            }}
          />
        </div>

        <main className="min-w-0 flex-1 space-y-10">
          <div className="lg:hidden">
            <CategoryNav
              variant="chips"
              categories={categories}
              counts={toolCountByCategory}
              totalCount={tools.length}
              selected={selectedCategory}
              onSelect={(id) => {
                setSelectedCategory(id)
                setQuery('')
              }}
            />
          </div>

          {isSearching ? (
            searchResults.length > 0 ? (
              <section>
                <h2 className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {searchResults.length} result{searchResults.length === 1 ? '' : 's'}
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {searchResults.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            ) : (
              <EmptyState query={query} />
            )
          ) : (
            visibleCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                tools={tools.filter((t) => t.categoryId === category.id)}
              />
            ))
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
