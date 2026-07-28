import { BookOpen } from 'lucide-react'
import type { LibraryEcosystem } from '../data/types'
import { ToolIcon } from './ToolIcon'
import { SortToggle } from './SortToggle'
import type { SortOrder } from './CategoryNav'
import type { ReactNode } from 'react'

export function LibraryNav({
  ecosystems,
  counts,
  iconUrls,
  totalCount,
  selected,
  onSelect,
  sortOrder,
  onSortChange,
  variant,
}: {
  ecosystems: LibraryEcosystem[]
  counts: Map<string, number>
  iconUrls: Map<string, string>
  totalCount: number
  selected: string | null
  onSelect: (id: string | null) => void
  sortOrder: SortOrder
  onSortChange: (order: SortOrder) => void
  variant: 'sidebar' | 'chips'
}) {
  if (variant === 'chips') {
    return (
      <div className="flex items-center gap-2">
        <div className="scrollbar-thin flex flex-1 gap-2 overflow-x-auto pb-1">
          <Chip label="Libraries" count={totalCount} active={selected === null} onClick={() => onSelect(null)} />
          {ecosystems.map((ecosystem) => (
            <Chip key={ecosystem.id} label={ecosystem.name} count={counts.get(ecosystem.id) ?? 0} active={selected === ecosystem.id} onClick={() => onSelect(ecosystem.id)} />
          ))}
        </div>
        <SortToggle value={sortOrder} onChange={onSortChange} />
      </div>
    )
  }

  return (
    <div className="fixed top-22 bottom-14 flex w-72 shrink-0 flex-col">
      <nav className="scrollbar-thin flex-1 space-y-0.5 overflow-y-auto pr-2" aria-label="Library ecosystems">
        <Row
          icon={<BookOpen className="h-4 w-4 shrink-0" />}
          label="Libraries"
          count={totalCount}
          active={selected === null}
          onClick={() => onSelect(null)}
          sortToggle={<SortToggle value={sortOrder} onChange={onSortChange} className="h-6 w-6" />}
        />
        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />
        {ecosystems.map((ecosystem) => (
          <Row
            key={ecosystem.id}
            icon={<ToolIcon name={ecosystem.name} url={iconUrls.get(ecosystem.id) ?? ''} size={20} />}
            label={ecosystem.name}
            count={counts.get(ecosystem.id) ?? 0}
            active={selected === ecosystem.id}
            onClick={() => onSelect(ecosystem.id)}
          />
        ))}
      </nav>
    </div>
  )
}

function Row({
  icon,
  label,
  count,
  active,
  onClick,
  sortToggle,
}: {
  icon: ReactNode
  label: string
  count: number
  active: boolean
  onClick: () => void
  sortToggle?: ReactNode
}) {
  return (
    <div className="relative">
      <button onClick={onClick} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1 text-left text-sm transition ${active ? 'bg-violet-50 font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'}`}>
        {icon}
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

function Chip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition ${active ? 'border-violet-300 bg-violet-50 font-medium text-violet-700 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-300' : 'border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900'}`}>{label}<span className="text-xs tabular-nums opacity-60">{count}</span></button>
}
