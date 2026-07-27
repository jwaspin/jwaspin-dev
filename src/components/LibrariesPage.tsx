import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import type { Library, LibraryEcosystem } from '../data/types'
import { LibraryCard } from './LibraryCard'
import { ToolIcon } from './ToolIcon'

export function LibrariesPage({ ecosystems, libraries, iconUrls, selected, onSelect }: { ecosystems: LibraryEcosystem[]; libraries: Library[]; iconUrls: Map<string, string>; selected: string | null; onSelect: (id: string | null) => void }) {
  const visible = selected ? ecosystems.filter((ecosystem) => ecosystem.id === selected) : ecosystems
  return (
    <section>
      {selected ? (
        <button onClick={() => onSelect(null)} className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:text-violet-400"><ArrowLeft className="h-4.5 w-4.5" />All libraries</button>
      ) : (
        <div className="mb-8 max-w-2xl"><p className="text-sm font-medium text-violet-600 dark:text-violet-400">Explore ecosystem resources</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Libraries</h1><p className="mt-2 text-slate-600 dark:text-slate-400">Libraries, standards, and reusable building blocks organized under the languages and frameworks they extend.</p></div>
      )}
      <div className="space-y-10">
        {visible.map((ecosystem) => {
          const items = libraries.filter((library) => library.ecosystemId === ecosystem.id)
          const related = ecosystem.relatedEcosystemIds?.map((id) => ecosystems.find((candidate) => candidate.id === id)).filter((item): item is LibraryEcosystem => item !== undefined) ?? []
          const ecosystemUrl = iconUrls.get(ecosystem.id)
          return (
            <section key={ecosystem.id}>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <ToolIcon name={ecosystem.name} url={ecosystemUrl ?? ''} size={36} />
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {ecosystem.name}
                      <span className="ml-2 text-sm font-normal text-slate-400">{items.length}</span>
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{ecosystem.description}</p>
                  </div>
                </div>
                {ecosystemUrl && (
                  <a
                    href={ecosystemUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:text-violet-400"
                  >
                    Visit {ecosystem.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
              {related.length > 0 && <div className="mb-4 rounded-xl border border-violet-200 bg-violet-50/70 px-4 py-3 text-sm text-violet-900 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200"><span>General {related.map((item) => item.name).join(' and ')} libraries also apply, but are not {ecosystem.name}-specific.</span>{related.map((item) => <button key={item.id} onClick={() => onSelect(item.id)} className="ml-2 inline-flex items-center gap-1 font-semibold text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-100">Browse {item.name}<ArrowRight className="h-3.5 w-3.5" /></button>)}</div>}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((library) => <LibraryCard key={library.id} library={library} />)}</div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
