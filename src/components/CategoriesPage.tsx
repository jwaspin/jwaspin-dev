import { ArrowRight } from 'lucide-react'
import type { Category, CategoryGroup } from '../data/types'

export function CategoriesPage({
  categories,
  groups,
  counts,
  onSelect,
}: {
  categories: Category[]
  groups: CategoryGroup[]
  counts: Map<string, number>
  onSelect: (id: string) => void
}) {
  return (
    <section>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Explore the landscape</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          All categories
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Browse the library by the part of the development lifecycle you are working in.
        </p>
      </div>

      <div className="space-y-10">
        {groups.map((group) => {
          const groupedCategories = categories.filter((category) => category.groupId === group.id)
          if (groupedCategories.length === 0) return null

          return (
            <section key={group.id}>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{group.name}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {groupedCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => onSelect(category.id)}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2 font-medium text-slate-900 dark:text-slate-100">
                          {category.name}
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600" />
                        </span>
                        <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                          {category.description}
                        </span>
                        <span className="mt-2 block text-xs font-medium text-slate-400 dark:text-slate-500">
                          {counts.get(category.id) ?? 0} tools
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
