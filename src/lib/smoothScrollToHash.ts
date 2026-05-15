export function smoothScrollToHash(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const id = href.startsWith('#') ? href.slice(1) : null
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  e.preventDefault()

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
  history.pushState(null, '', href)
}
