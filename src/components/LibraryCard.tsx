import { ArrowUpRight } from 'lucide-react'
import type { Library } from '../data/types'
import { ToolIcon } from './ToolIcon'

export function LibraryCard({ library }: { library: Library }) {
  return (
    <a
      href={library.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/40"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <ToolIcon name={library.name} url={library.url} />
          <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100">{library.name}</h3>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-violet-500 dark:text-slate-700" aria-hidden="true" />
      </div>
      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">{library.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {library.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
