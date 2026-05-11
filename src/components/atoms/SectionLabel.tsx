import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium text-foreground-muted tracking-widest uppercase flex items-center gap-1.5",
        className
      )}
      {...props}
    >
      <span aria-hidden="true">•</span>
      {children}
    </p>
  );
}
