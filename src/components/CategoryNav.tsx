import { Shapes } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Category } from '../data/types'
import { SortToggle } from './SortToggle'

export type SortOrder = 'az' | 'za'

interface CategoryNavProps {
  categories: Category[]
  counts: Map<string, number>
  selected: string | null
  onSelect: (id: string | null) => void
  showingCategories: boolean
  onShowCategories: () => void
  sortOrder: SortOrder
  onSortChange: (order: SortOrder) => void
  variant: 'sidebar' | 'chips'
}

export function CategoryNav({
  categories,
  counts,
  selected,
  onSelect,
  showingCategories,
  onShowCategories,
  sortOrder,
  onSortChange,
  variant,
}: CategoryNavProps) {
  if (variant === 'chips') {
    return (
      <div className="flex items-center gap-2">
        <div className="scrollbar-thin flex flex-1 gap-2 overflow-x-auto pb-1">
          <NavChip
            label="Categories"
            count={categories.length}
            active={showingCategories}
            onClick={onShowCategories}
          />
          {categories.map((c) => (
            <NavChip
              key={c.id}
              label={c.name}
              count={counts.get(c.id) ?? 0}
              active={!showingCategories && selected === c.id}
              onClick={() => onSelect(c.id)}
            />
          ))}
        </div>
        <SortToggle value={sortOrder} onChange={onSortChange} />
      </div>
    )
  }

  return (
    <div className="fixed top-22 bottom-14 flex w-72 shrink-0 flex-col">
      <nav className="scrollbar-thin flex-1 space-y-0.5 overflow-y-auto pr-2">
        <NavRow
          icon={Shapes}
          label="Categories"
          count={categories.length}
          active={showingCategories}
          onClick={onShowCategories}
          sortToggle={<SortToggle value={sortOrder} onChange={onSortChange} className="h-6 w-6" />}
        />
        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />
        {categories.map((c) => (
          <NavRow
            key={c.id}
            icon={c.icon}
            label={c.name}
            count={counts.get(c.id) ?? 0}
            active={!showingCategories && selected === c.id}
            onClick={() => onSelect(c.id)}
          />
        ))}
      </nav>
    </div>
  )
}

function NavRow({
  icon: Icon,
  label,
  count,
  active,
  onClick,
  sortToggle,
}: {
  icon: Category['icon']
  label: string
  count: number
  active: boolean
  onClick: () => void
  sortToggle?: ReactNode
}) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1 text-left text-sm transition ${
          active
            ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
        }`}
      >
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="flex-1 truncate">{label}</span>
        <span className={`text-xs tabular-nums text-slate-400 dark:text-slate-600 ${sortToggle ? 'invisible' : ''}`}>{count}</span>
      </button>
      {sortToggle && (
        <div className="absolute top-1/2 right-1 -translate-y-1/2">
          {sortToggle}
        </div>
      )}
    </div>
  )
}

function NavChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition ${
        active
          ? 'border-indigo-300 bg-indigo-50 font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300'
          : 'border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900'
      }`}
    >
      {label}
      <span className="text-xs tabular-nums opacity-60">{count}</span>
    </button>
  )
}
