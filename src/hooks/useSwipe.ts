'use client'

import { useRef } from 'react'
import type { TouchEvent } from 'react'

interface UseSwipeOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
}

interface UseSwipeReturn {
  onTouchStart: (e: TouchEvent) => void
  onTouchEnd: (e: TouchEvent) => void
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: UseSwipeOptions): UseSwipeReturn {
  const startX = useRef<number | null>(null)
  const startY = useRef<number | null>(null)

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    startX.current = touch.clientX
    startY.current = touch.clientY
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (startX.current === null || startY.current === null) return
    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - startX.current
    const deltaY = touch.clientY - startY.current
    startX.current = null
    startY.current = null

    if (Math.abs(deltaX) <= Math.abs(deltaY)) return
    if (Math.abs(deltaX) < threshold) return

    if (deltaX < 0) onSwipeLeft?.()
    else onSwipeRight?.()
  }

  return { onTouchStart, onTouchEnd }
}
