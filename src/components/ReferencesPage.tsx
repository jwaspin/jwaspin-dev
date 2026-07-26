import { ArrowLeft, ArrowUpRight, Landmark } from 'lucide-react'
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
  const visible = selected ? sourceTypes.filter((sourceType) => sourceType.id === selected) : sourceTypes

  return (
    <section>
      {selected ? (
        <button
          onClick={() => onSelect(null)}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="h-4.5 w-4.5" aria-hidden="true" />
          All references
        </button>
      ) : (
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Explore by reference</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">References</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Durable essays, methodologies, and guides worth reading straight from the source.
          </p>
        </div>
      )}
      <div className="space-y-10">
        {visible.map((sourceType) => {
          const items = references.filter((reference) => reference.sourceType === sourceType.id)
          return (
            <section key={sourceType.id}>
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Landmark className="h-5 w-5" aria-hidden="true" />
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
          )
        })}
      </div>
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

      <div className="relative z-1 flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <ToolIcon name={reference.title} url={reference.url} />
          <div>
            <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100">{reference.title}</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{reference.author}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {reference.githubUrl && (
            <a
              href={reference.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${reference.title} on GitHub`}
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

      <p className="relative z-1 text-sm leading-snug text-slate-600 dark:text-slate-400">{reference.description}</p>
    </div>
  )
}
