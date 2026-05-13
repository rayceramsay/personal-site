'use client'

import { useIsMounted } from '@/hooks/useIsMounted'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useIsMounted()

  // Waiting for the component to be mounted is necessary because the theme is only
  // known on the client, so we want to render a placeholder on the server to avoid a
  // mismatch (which would cause the page to flash white on initial load).
  if (!mounted) return <div className='h-10 w-10' />

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='text-foreground hover:bg-surface focus-visible:ring-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
    >
      {isDark ? (
        <Sun size={18} aria-hidden='true' />
      ) : (
        <Moon size={18} aria-hidden='true' />
      )}
    </button>
  )
}
