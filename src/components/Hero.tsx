export function Hero({ toolCount, categoryCount }: { toolCount: number; categoryCount: number }) {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(99,102,241,0.25), transparent 40%), radial-gradient(circle at 85% 0%, rgba(168,85,247,0.2), transparent 45%)',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[86rem] px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
          A curated map of the developer tool landscape
        </h1>
        <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400">
          Languages, frameworks, databases, AI, design, and infrastructure tools — organized so
          you can find the right one without another tab full of bookmarks.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <Stat value={toolCount} label="tools" />
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <Stat value={categoryCount} label="categories" />
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:ring-slate-800">
      <span className="font-semibold tabular-nums text-slate-900 dark:text-slate-100">{value}</span>
      {label}
    </span>
  )
}
