import { Landmark } from 'lucide-react'
import type { Reference, ReferenceSourceType, ReferenceSourceTypeInfo } from '../data/types'
import type { SortOrder } from './CategoryNav'

export function ReferenceNav({
  sourceTypes,
  references,
  totalCount,
  selected,
  onSelect,
  sortOrder,
  onSortChange,
  variant,
}: {
  sourceTypes: ReferenceSourceTypeInfo[]
  references: Reference[]
  totalCount: number
  selected: ReferenceSourceType | null
  onSelect: (id: ReferenceSourceType | null) => void
  sortOrder: SortOrder
  onSortChange: (order: SortOrder) => void
  variant: 'sidebar' | 'chips'
}) {
  const countFor = (id: ReferenceSourceType) => references.filter((reference) => reference.sourceType === id).length

  if (variant === 'chips') {
    return (
      <div className="space-y-3">
        <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
          <Chip label="All references" count={totalCount} active={selected === null} onClick={() => onSelect(null)} />
          {sourceTypes.map((sourceType) => (
            <Chip key={sourceType.id} label={sourceType.name} count={countFor(sourceType.id)} active={selected === sourceType.id} onClick={() => onSelect(sourceType.id)} />
          ))}
        </div>
        <Sort value={sortOrder} onChange={onSortChange} />
      </div>
    )
  }

  return (
    <div className="fixed top-22 bottom-14 w-72 shrink-0">
      <div className="mb-3 pr-2"><Sort value={sortOrder} onChange={onSortChange} /></div>
      <nav className="space-y-0.5 pr-2" aria-label="Reference source types">
        <Row icon={Landmark} label="All References" count={totalCount} active={selected === null} onClick={() => onSelect(null)} />
        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />
        {sourceTypes.map((sourceType) => (
          <Row key={sourceType.id} icon={Landmark} label={sourceType.name} count={countFor(sourceType.id)} active={selected === sourceType.id} onClick={() => onSelect(sourceType.id)} />
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

function Row({ icon: Icon, label, count, active, onClick }: { icon: typeof Landmark; label: string; count: number; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1 text-left text-sm transition ${active ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'}`}><Icon className="h-4 w-4 shrink-0" /><span className="flex-1 truncate">{label}</span><span className="text-xs tabular-nums text-slate-400 dark:text-slate-600">{count}</span></button>
}

function Chip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition ${active ? 'border-indigo-300 bg-indigo-50 font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300' : 'border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900'}`}>{label}<span className="text-xs tabular-nums opacity-60">{count}</span></button>
}
