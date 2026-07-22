import { Search, Sparkles, SunMedium, Moon, X } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import { GithubMark } from './GithubMark'

interface HeaderProps {
  query: string
  onQueryChange: (value: string) => void
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ query, onQueryChange, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-sm">
            <Sparkles className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="hidden font-semibold tracking-tight text-slate-900 sm:block dark:text-slate-100">
            jwaspin<span className="text-indigo-500">.dev</span>
          </span>
        </a>

        <div className="relative flex-1 max-w-xl">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search tools, tags, categories…"
            aria-label="Search tools"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pr-9 pl-9 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
          />
          {query && (
            <button
              onClick={() => onQueryChange('')}
              aria-label="Clear search"
              className="absolute top-1/2 right-2.5 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href="https://github.com/jwaspin/jwaspin-dev"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View source on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            <GithubMark className="h-4.5 w-4.5" />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            {theme === 'dark' ? (
              <SunMedium className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
