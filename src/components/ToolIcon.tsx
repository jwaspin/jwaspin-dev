import { useState } from 'react'
import { faviconUrl, monogramColor } from '../lib/favicon'

export function ToolIcon({ name, url }: { name: string; url: string }) {
  const [errored, setErrored] = useState(false)
  const src = faviconUrl(url)

  if (errored || !src) {
    return (
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${monogramColor(name)}`}
        aria-hidden="true"
      >
        {name.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-9 w-9 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200 dark:ring-slate-800"
    />
  )
}
