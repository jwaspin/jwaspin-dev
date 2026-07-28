import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Reference, ReferenceSourceType, ReferenceSourceTypeInfo } from '../data/types'
import { ToolIcon } from './ToolIcon'
import { GithubMark } from './GithubMark'

export function ReferencesPage({
  sourceTypes,
  references,
  selected,
  onSelect,
}: {
  sourceTypes: ReferenceSourceTypeInfo[]
  references: Reference[]
  selected: ReferenceSourceType | null
  onSelect: (id: ReferenceSourceType | null) => void
}) {
  if (!selected) {
    return (
      <section>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Explore by reference</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">References</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Durable essays, methodologies, and guides worth reading straight from the source.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sourceTypes.map((sourceType) => {
            const count = references.filter((reference) => reference.sourceType === sourceType.id).length
            const Icon = sourceType.icon
            return (
              <button
                key={sourceType.id}
                onClick={() => onSelect(sourceType.id)}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2 font-medium text-slate-900 dark:text-slate-100">
                    {sourceType.name}
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600" />
                  </span>
                  <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">{sourceType.description}</span>
                  <span className="mt-2 block text-xs font-medium text-slate-400 dark:text-slate-500">{count} reference{count === 1 ? '' : 's'}</span>
                </span>
              </button>
            )
          })}
        </div>
      </section>
    )
  }

  const sourceType = sourceTypes.find((candidate) => candidate.id === selected)
  if (!sourceType) return null

  const items = references.filter((reference) => reference.sourceType === sourceType.id)
  const Icon = sourceType.icon

  return (
    <section>
      <button
        onClick={() => onSelect(null)}
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
      >
        <ArrowLeft className="h-4.5 w-4.5" aria-hidden="true" />
        References
      </button>
      <section>
        <div className="mb-4 flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {sourceType.name}
              <span className="ml-2 text-sm font-normal text-slate-400">{items.length}</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{sourceType.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((reference) => (
            <ReferenceCard key={reference.id} reference={reference} />
          ))}
        </div>
      </section>
    </section>
  )
}

function ReferenceCard({ reference }: { reference: Reference }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/40">
      <a
        href={reference.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={reference.title}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      />

      <div className="flex min-w-0 items-center gap-3">
        <ToolIcon name={reference.title} url={reference.url} />
        <div className="min-w-0">
          <h3 className="truncate font-medium leading-tight text-slate-900 dark:text-slate-100" title={reference.title}>{reference.title}</h3>
          <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400" title={reference.author}>{reference.author}</p>
        </div>
      </div>

      <p className={`text-sm leading-snug text-slate-600 dark:text-slate-400 ${reference.githubUrl ? 'pr-9' : ''}`}>{reference.description}</p>

      {reference.githubUrl && (
        <a
          href={reference.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${reference.title} on GitHub`}
          title="View on GitHub"
          className="absolute right-3 bottom-3 z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm transition hover:bg-indigo-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-indigo-400"
        >
          <GithubMark className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}
