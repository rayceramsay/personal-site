import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";
import { HERO_STATS } from "@/data/navigation";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[85vh]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-8">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.value} stat={stat} size="sm" />
            ))}
          </div>

          <SectionHeading
            as="h1"
            size="display"
            id="hero-heading"
            className="font-black"
          >
            Hello
          </SectionHeading>

          <p className="text-base text-foreground-muted italic">
            — hi it&apos;s D&apos;Nova a design veteran!
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-sm w-fit mt-4"
          >
            Scroll down
            <ChevronDown size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="relative order-first md:order-last">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface">
            <Image
              src="https://picsum.photos/seed/portrait/480/600"
              alt="D'Nova — design veteran portrait"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
