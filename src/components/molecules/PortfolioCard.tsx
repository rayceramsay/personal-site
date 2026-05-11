import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioCard as PortfolioCardType } from "@/types/portfolio";

interface PortfolioCardProps {
  card: PortfolioCardType;
  className?: string;
}

export function PortfolioCard({ card, className }: PortfolioCardProps) {
  return (
    <article className={cn("group relative flex-shrink-0 w-72 md:w-auto md:flex-1", className)}>
      <Link
        href={card.href}
        aria-label={`View project: ${card.title}`}
        className="block rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        <div className="relative aspect-video overflow-hidden bg-surface">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 288px, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
        <div className="pt-3 pb-1">
          <p className="text-xs text-foreground-muted mb-1">{card.category}</p>
          <h3 className="text-sm font-semibold text-foreground leading-snug">
            {card.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
