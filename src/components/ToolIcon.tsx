import { useState } from 'react'
import { faviconUrl, monogramColor } from '../lib/favicon'

export function ToolIcon({ name, url, size = 36 }: { name: string; url: string; size?: number }) {
  const [errored, setErrored] = useState(false)
  const src = faviconUrl(url)
  const dimensions = { width: size, height: size }

  if (errored || !src) {
    return (
      <div
        style={dimensions}
        className={`flex shrink-0 items-center justify-center rounded-lg font-semibold text-white ${monogramColor(name)}`}
        aria-hidden="true"
      >
        <span style={{ fontSize: size * 0.42 }} className="leading-none">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      onError={() => setErrored(true)}
      style={dimensions}
      className="shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200 dark:ring-slate-800"
    />
  )
}
