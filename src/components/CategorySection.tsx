import type { Category, Tool } from '../data/types'
import { ToolCard } from './ToolCard'

export function CategorySection({
  category,
  tools,
}: {
  category: Category
  tools: Tool[]
}) {
  const Icon = category.icon

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {category.name}
            <span className="ml-2 text-sm font-normal text-slate-400 dark:text-slate-500">
              {tools.length}
            </span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{category.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}
