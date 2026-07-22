import { SearchX } from 'lucide-react'

export function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-200 py-20 text-center dark:border-slate-800">
      <SearchX className="h-8 w-8 text-slate-300 dark:text-slate-700" aria-hidden="true" />
      <p className="text-slate-600 dark:text-slate-400">
        No tools match <span className="font-medium text-slate-900 dark:text-slate-100">"{query}"</span>
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-600">
        Try a different keyword, or browse by category instead.
      </p>
    </div>
  )
}
