import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn("border-t border-border", className)}
      {...props}
    />
  );
}
