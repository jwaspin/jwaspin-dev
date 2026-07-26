import { ArrowUpRight } from 'lucide-react'
import type { Tool } from '../data/types'
import { ToolIcon } from './ToolIcon'
import { GithubMark } from './GithubMark'

const PRICING_LABEL: Record<NonNullable<Tool['pricing']>, string> = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
}

const PRICING_CLASS: Record<NonNullable<Tool['pricing']>, string> = {
  free: 'text-emerald-700 bg-emerald-50 ring-emerald-600/20 dark:text-emerald-300 dark:bg-emerald-500/10 dark:ring-emerald-400/20',
  freemium:
    'text-sky-700 bg-sky-50 ring-sky-600/20 dark:text-sky-300 dark:bg-sky-500/10 dark:ring-sky-400/20',
  paid: 'text-amber-700 bg-amber-50 ring-amber-600/20 dark:text-amber-300 dark:bg-amber-500/10 dark:ring-amber-400/20',
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/40">
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={tool.name}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      />

      <div className="relative z-1 flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <ToolIcon name={tool.name} url={tool.url} />
          <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100">
            {tool.name}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {tool.githubUrl && (
            <a
              href={tool.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${tool.name} on GitHub`}
              className="relative z-10 mt-0.5 text-slate-400 transition hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400"
            >
              <GithubMark className="h-4 w-4" />
            </a>
          )}
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-indigo-500 dark:text-slate-700"
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="relative z-1 text-sm leading-snug text-slate-600 dark:text-slate-400">{tool.description}</p>

      <div className="relative z-1 mt-auto flex flex-wrap items-center gap-1.5 pt-1">
        {tool.pricing && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${PRICING_CLASS[tool.pricing]}`}
          >
            {PRICING_LABEL[tool.pricing]}
          </span>
        )}
        {tool.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
