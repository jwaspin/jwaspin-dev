export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 sm:px-6 dark:text-slate-500">
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
