export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-slate-50/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto max-w-[86rem] px-4 py-3 text-sm text-slate-500 sm:px-6 dark:text-slate-500">
        <p>
          A curated, hand-maintained library of developer tools. Missing something? Open a PR on{' '}
          <a
            href="https://github.com/jwaspin/jwaspin-dev"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-indigo-500 hover:text-indigo-400"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
