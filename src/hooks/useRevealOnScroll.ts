'use client'

import { useEffect, useRef, useState } from 'react'

export function useRevealOnScroll() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
