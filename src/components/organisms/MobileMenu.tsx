"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useNavMenu } from "@/hooks/useNavMenu";
import { Button } from "@/components/atoms/Button";
import type { NavLink } from "@/types/portfolio";

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const { isOpen, toggle, close } = useNavMenu();

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border shadow-card-hover flex flex-col gap-6 p-8 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close navigation menu"
          className="self-end flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          <X size={18} aria-hidden="true" />
        </button>
        <nav>
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="text-base font-medium text-foreground hover:text-foreground-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <Button variant="pill" size="md" asChild>
            <Link href="#contact">Book A Call</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
