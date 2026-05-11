import Link from "next/link";
import { Bird } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="bg-surface-dark text-background"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="D'Nova — home"
          className="flex items-center gap-2 text-background hover:text-background/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark rounded-sm"
        >
          <Bird size={22} aria-hidden="true" />
          <span className="text-sm font-semibold tracking-tight">D&apos;Nova</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-background/70 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:hello@dnova.com"
          className="text-sm font-medium text-background hover:text-background/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark rounded-sm"
        >
          hello@dnova.com
        </a>
      </div>
    </footer>
  );
}
