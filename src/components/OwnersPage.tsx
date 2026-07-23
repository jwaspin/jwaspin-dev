import { ArrowLeft, ArrowRight, Building2, ExternalLink } from 'lucide-react'
import type { ProductOwner, Tool } from '../data/types'
import { ToolCard } from './ToolCard'

export function OwnersPage({
  owners,
  tools,
  selectedOwner,
  onSelect,
  onBack,
}: {
  owners: ProductOwner[]
  tools: Tool[]
  selectedOwner: ProductOwner | null
  onSelect: (ownerId: string) => void
  onBack: () => void
}) {
  if (selectedOwner) {
    const ownerToolIds = new Set(selectedOwner.toolIds)
    const ownerTools = tools.filter((tool) => ownerToolIds.has(tool.id))

    return (
      <section>
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="h-4.5 w-4.5" aria-hidden="true" />
          All organizations
        </button>
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Organization</p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                {selectedOwner.name}
              </h1>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
                {selectedOwner.description}
              </p>
            </div>
          </div>
          <a
            href={selectedOwner.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
          >
            Organization website
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <div className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          {ownerTools.length} product{ownerTools.length === 1 ? '' : 's'}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ownerTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Explore by organization</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Organizations
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          See tools together by the company, foundation, or open-source group that maintains them.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {owners.map((owner) => (
          <button
            key={owner.id}
            onClick={() => onSelect(owner.id)}
            className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2 font-medium text-slate-900 dark:text-slate-100">
                {owner.name}
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600" />
              </span>
              <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                {owner.description}
              </span>
              <span className="mt-2 block text-xs font-medium text-slate-400 dark:text-slate-500">
                {owner.toolIds.length} products
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
