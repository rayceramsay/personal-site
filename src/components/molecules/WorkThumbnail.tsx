import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/types/portfolio";

interface WorkThumbnailProps {
  work: WorkItem;
  className?: string;
}

export function WorkThumbnail({ work, className }: WorkThumbnailProps) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={work.href}
        aria-label={`View work: ${work.title}`}
        className="block rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        <div className="relative aspect-square overflow-hidden bg-surface">
          <Image
            src={work.imageUrl}
            alt={work.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">{work.title}</p>
      </Link>
    </article>
  );
}
