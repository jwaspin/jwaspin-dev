import { BookOpen, Building2, Landmark, Shapes, Sparkles, SunMedium, Moon } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import { GithubMark } from './GithubMark'
import packageMetadata from '../../package.json'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
  activeView: 'tools' | 'categories' | 'organizations' | 'libraries' | 'references'
  onShowLanding: () => void
  onShowCategories: () => void
  onShowOrganizations: () => void
  onShowLibraries: () => void
  onShowReferences: () => void
}

export function Header({
  theme,
  onToggleTheme,
  activeView,
  onShowLanding,
  onShowCategories,
  onShowOrganizations,
  onShowLibraries,
  onShowReferences,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-[86rem] items-center gap-4 px-4 sm:px-6">
        <button onClick={onShowLanding} className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-sm">
            <Sparkles className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="hidden font-semibold tracking-tight text-slate-900 sm:block dark:text-slate-100">
            jwaspin<span className="text-indigo-500">.dev</span>
          </span>
        </button>

        <nav className="ml-2 hidden flex-1 items-center gap-1 sm:flex" aria-label="Primary navigation">
          <HeaderNavItem icon={Shapes} label="Categories" active={activeView === 'categories'} onClick={onShowCategories} />
          <HeaderNavItem icon={Building2} label="Organizations" active={activeView === 'organizations'} onClick={onShowOrganizations} />
          <HeaderNavItem icon={BookOpen} label="Libraries" active={activeView === 'libraries'} onClick={onShowLibraries} />
          <HeaderNavItem icon={Landmark} label="References" active={activeView === 'references'} onClick={onShowReferences} />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <span
            className="inline-flex h-7 items-center rounded-md bg-slate-100 px-2 font-mono text-xs font-medium text-slate-500 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-800"
            title={`jwaspin.dev version ${packageMetadata.version}`}
            aria-label={`Version ${packageMetadata.version}`}
          >
            v{packageMetadata.version}
          </span>
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

function HeaderNavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: typeof Shapes
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100'
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  )
}
