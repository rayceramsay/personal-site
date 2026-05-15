'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description
export const DialogClose = DialogPrimitive.Close

type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'bg-foreground/80 fixed inset-0 z-50 backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> {
  showCloseButton?: boolean
  closeLabel?: string
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  closeLabel = 'Close',
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          'fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
          'bg-background text-foreground shadow-card-hover rounded-2xl',
          'focus:outline-none',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            aria-label={closeLabel}
            className='text-foreground-muted hover:text-foreground hover:bg-surface focus-visible:ring-foreground absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            <X size={18} aria-hidden='true' />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}
