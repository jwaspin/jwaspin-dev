import type { Library } from '../data/types'
import { ToolIcon } from './ToolIcon'
import { GithubMark } from './GithubMark'

export function LibraryCard({ library }: { library: Library }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/40">
      <a
        href={library.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={library.name}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      />

      <div className="flex min-w-0 items-center gap-3">
        <ToolIcon name={library.name} url={library.url} />
        <h3 className="truncate font-medium leading-tight text-slate-900 dark:text-slate-100" title={library.name}>{library.name}</h3>
      </div>
      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">{library.description}</p>
      <div className={`mt-auto flex flex-wrap gap-1.5 pt-1 ${library.githubUrl ? 'pr-9' : ''}`}>
        {library.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      {library.githubUrl && (
        <a
          href={library.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${library.name} on GitHub`}
          title="View on GitHub"
          className="absolute right-3 bottom-3 z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm transition hover:bg-violet-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-violet-400"
        >
          <GithubMark className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}
