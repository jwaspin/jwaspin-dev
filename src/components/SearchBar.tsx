import { Search, X } from 'lucide-react'

export function SearchBar({
  query,
  onQueryChange,
  placeholder = 'Search tools, categories, organizations…',
}: {
  query: string
  onQueryChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <div className="relative w-full">
      <Search
        className="pointer-events-none absolute top-1/2 left-3.5 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search tools"
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-11 pl-11 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-3 focus:ring-indigo-500/15 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
      />
      {query && (
        <button
          onClick={() => onQueryChange('')}
          aria-label="Clear search"
          className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
