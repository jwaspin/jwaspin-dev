import { ArrowRight, BookOpen, Building2, ScrollText, Shapes } from 'lucide-react'

interface LandingDestination {
  icon: typeof Shapes
  title: string
  description: string
  meta: string
  onClick: () => void
}

export function LandingPage({
  categoryCount,
  toolCount,
  ownerCount,
  libraryCount,
  referenceCount,
  onShowCategories,
  onShowOrganizations,
  onShowLibraries,
  onShowReferences,
}: {
  categoryCount: number
  toolCount: number
  ownerCount: number
  libraryCount: number
  referenceCount: number
  onShowCategories: () => void
  onShowOrganizations: () => void
  onShowLibraries: () => void
  onShowReferences: () => void
}) {
  const destinations: LandingDestination[] = [
    {
      icon: Shapes,
      title: 'Categories',
      description: 'Browse every tool, grouped by the part of the stack it belongs to.',
      meta: `${toolCount} tools · ${categoryCount} categories`,
      onClick: onShowCategories,
    },
    {
      icon: Building2,
      title: 'Organizations',
      description: 'See tools grouped by the company, foundation, or open-source group behind them.',
      meta: `${ownerCount} organizations`,
      onClick: onShowOrganizations,
    },
    {
      icon: BookOpen,
      title: 'Libraries',
      description: 'Reusable packages organized by the language and framework ecosystems they extend.',
      meta: `${libraryCount} libraries`,
      onClick: onShowLibraries,
    },
    {
      icon: ScrollText,
      title: 'References',
      description: 'Durable essays, methodologies, and guides worth reading straight from the source.',
      meta: `${referenceCount} references`,
      onClick: onShowReferences,
    },
  ]

  return (
    <section>
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Welcome</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          jwaspin<span className="text-indigo-500">.dev</span>
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          A curated map of the developer tool landscape. Pick a place to start.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {destinations.map((destination) => (
          <button
            key={destination.title}
            onClick={destination.onClick}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
          >
            <div className="flex w-full items-start justify-between">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <destination.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500 dark:text-slate-700" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{destination.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{destination.description}</p>
              <p className="mt-3 text-xs font-medium text-slate-400 dark:text-slate-500">{destination.meta}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
