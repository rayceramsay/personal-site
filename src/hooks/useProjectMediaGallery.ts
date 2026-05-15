'use client'

import { useCallback, useEffect, useState } from 'react'

interface UseProjectMediaGalleryOptions {
  count: number
}

interface UseProjectMediaGalleryReturn {
  open: boolean
  activeIndex: number
  setOpen: (open: boolean) => void
  openAt: (index: number) => void
  close: () => void
  next: () => void
  prev: () => void
}

export function useProjectMediaGallery({
  count,
}: UseProjectMediaGalleryOptions): UseProjectMediaGalleryReturn {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openAt = useCallback((index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  const next = useCallback(() => {
    if (count <= 1) return
    setActiveIndex((i) => (i + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    if (count <= 1) return
    setActiveIndex((i) => (i - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, next, prev])

  return { open, activeIndex, setOpen, openAt, close, next, prev }
}
