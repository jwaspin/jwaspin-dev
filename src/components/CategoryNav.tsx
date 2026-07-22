import { LayoutGrid } from 'lucide-react'
import type { Category } from '../data/types'

interface CategoryNavProps {
  categories: Category[]
  counts: Map<string, number>
  totalCount: number
  selected: string | null
  onSelect: (id: string | null) => void
  variant: 'sidebar' | 'chips'
}

export function CategoryNav({
  categories,
  counts,
  totalCount,
  selected,
  onSelect,
  variant,
}: CategoryNavProps) {
  if (variant === 'chips') {
    return (
      <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
        <NavChip
          label="All"
          count={totalCount}
          active={selected === null}
          onClick={() => onSelect(null)}
        />
        {categories.map((c) => (
          <NavChip
            key={c.id}
            label={c.name}
            count={counts.get(c.id) ?? 0}
            active={selected === c.id}
            onClick={() => onSelect(c.id)}
          />
        ))}
      </div>
    )
  }

  return (
    <nav className="scrollbar-thin sticky top-20 max-h-[calc(100svh-6rem)] shrink-0 space-y-0.5 overflow-y-auto pr-2">
      <NavRow
        icon={LayoutGrid}
        label="All Tools"
        count={totalCount}
        active={selected === null}
        onClick={() => onSelect(null)}
      />
      {categories.map((c) => (
        <NavRow
          key={c.id}
          icon={c.icon}
          label={c.name}
          count={counts.get(c.id) ?? 0}
          active={selected === c.id}
          onClick={() => onSelect(c.id)}
        />
      ))}
    </nav>
  )
}

function NavRow({
  icon: Icon,
  label,
  count,
  active,
  onClick,
}: {
  icon: Category['icon']
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition ${
        active
          ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="flex-1 truncate">{label}</span>
      <span className="text-xs tabular-nums text-slate-400 dark:text-slate-600">{count}</span>
    </button>
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
