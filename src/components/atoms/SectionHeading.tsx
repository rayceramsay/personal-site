import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight text-foreground", {
  variants: {
    size: {
      display: "text-8xl md:text-9xl italic leading-none",
      lg: "text-3xl md:text-4xl leading-tight",
      md: "text-xl md:text-2xl leading-snug",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

type HeadingElement = "h1" | "h2" | "h3";

interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElement;
}

export function SectionHeading({
  as: Tag = "h2",
  size,
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(headingVariants({ size }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
