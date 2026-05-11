import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/portfolio";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl overflow-hidden bg-background border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300",
        className
      )}
    >
      <Link
        href={post.href}
        aria-label={`Read article: ${post.title}`}
        className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-xl"
      >
        <div className="relative aspect-video overflow-hidden bg-surface flex-shrink-0">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 flex-1">
          <div className="flex items-center gap-2">
            <Badge variant="category">{post.category}</Badge>
            <span className="text-xs text-foreground-muted">
              {post.readTimeMinutes} min read
            </span>
          </div>
          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
            {post.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
