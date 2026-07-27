import { SortAsc, SortDesc } from 'lucide-react'
import type { SortOrder } from './CategoryNav'

export function SortToggle({ value, onChange }: { value: SortOrder; onChange: (order: SortOrder) => void }) {
  const isAscending = value === 'az'

  return (
    <button
      onClick={() => onChange(isAscending ? 'za' : 'az')}
      aria-label={isAscending ? 'Sorted ascending. Click to sort descending.' : 'Sorted descending. Click to sort ascending.'}
      title={isAscending ? 'Sort descending' : 'Sort ascending'}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-indigo-400"
    >
      {isAscending ? <SortAsc className="h-4 w-4" aria-hidden="true" /> : <SortDesc className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
