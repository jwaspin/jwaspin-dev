import type { SortOrder } from './CategoryNav'

function SortBarsAsc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="8" height="4" rx="1" fill="currentColor" />
      <rect x="3" y="10" width="13" height="4" rx="1" fill="currentColor" />
      <rect x="3" y="16" width="18" height="4" rx="1" fill="currentColor" />
    </svg>
  )
}

function SortBarsDesc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="4" rx="1" fill="currentColor" />
      <rect x="3" y="10" width="13" height="4" rx="1" fill="currentColor" />
      <rect x="3" y="16" width="8" height="4" rx="1" fill="currentColor" />
    </svg>
  )
}

export function SortToggle({ value, onChange, className = 'h-8 w-8' }: { value: SortOrder; onChange: (order: SortOrder) => void; className?: string }) {
  const isAscending = value === 'az'

  return (
    <button
      onClick={() => onChange(isAscending ? 'za' : 'az')}
      aria-label={isAscending ? 'Sorted A to Z (ascending). Click to sort Z to A (descending).' : 'Sorted Z to A (descending). Click to sort A to Z (ascending).'}
      title={isAscending ? 'Ascending (A–Z)' : 'Descending (Z–A)'}
      className={`flex shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-indigo-400 ${className}`}
    >
      {isAscending ? <SortBarsAsc className="h-4 w-4" /> : <SortBarsDesc className="h-4 w-4" />}
    </button>
  )
}
