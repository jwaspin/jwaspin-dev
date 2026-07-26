import { Building2 } from 'lucide-react'
import type { ProductOwner } from '../data/types'
import type { SortOrder } from './CategoryNav'
import { ToolIcon } from './ToolIcon'
import type { ReactNode } from 'react'

export function OwnerNav({
  owners,
  totalCount,
  selected,
  onSelect,
  sortOrder,
  onSortChange,
  variant,
}: {
  owners: ProductOwner[]
  totalCount: number
  selected: string | null
  onSelect: (id: string | null) => void
  sortOrder: SortOrder
  onSortChange: (order: SortOrder) => void
  variant: 'sidebar' | 'chips'
}) {
  if (variant === 'chips') {
    return (
      <div className="space-y-3">
        <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
          <Chip label="All organizations" count={totalCount} active={selected === null} onClick={() => onSelect(null)} />
          {owners.map((owner) => (
            <Chip key={owner.id} label={owner.name} count={owner.toolIds.length} active={selected === owner.id} onClick={() => onSelect(owner.id)} />
          ))}
        </div>
        <Sort value={sortOrder} onChange={onSortChange} />
      </div>
    )
  }

  return (
    <div className="fixed top-22 bottom-14 flex w-72 shrink-0 flex-col">
      <div className="mb-3 pr-2 shrink-0"><Sort value={sortOrder} onChange={onSortChange} /></div>
      <nav className="scrollbar-thin flex-1 space-y-0.5 overflow-y-auto pr-2" aria-label="Organizations">
        <Row icon={<Building2 className="h-4 w-4 shrink-0" />} label="All Organizations" count={totalCount} active={selected === null} onClick={() => onSelect(null)} />
        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />
        {owners.map((owner) => (
          <Row
            key={owner.id}
            icon={<ToolIcon name={owner.name} url={owner.url} size={20} />}
            label={owner.name}
            count={owner.toolIds.length}
            active={selected === owner.id}
            onClick={() => onSelect(owner.id)}
          />
        ))}
      </nav>
    </div>
  )
}

function Sort({ value, onChange }: { value: SortOrder; onChange: (order: SortOrder) => void }) {
  return (
    <label className="flex w-full items-center gap-2">
      <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">Sort</span>
      <select value={value} onChange={(event) => onChange(event.target.value as SortOrder)} className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <option value="az">Alphabetical (A–Z)</option><option value="za">Alphabetical (Z–A)</option>
      </select>
    </label>
  )
}

function Row({ icon, label, count, active, onClick }: { icon: ReactNode; label: string; count: number; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1 text-left text-sm transition ${active ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'}`}>{icon}<span className="flex-1 truncate">{label}</span><span className="text-xs tabular-nums text-slate-400 dark:text-slate-600">{count}</span></button>
}

function Chip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition ${active ? 'border-indigo-300 bg-indigo-50 font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300' : 'border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900'}`}>{label}<span className="text-xs tabular-nums opacity-60">{count}</span></button>
}
