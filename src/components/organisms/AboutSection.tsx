import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

const ABOUT_BULLETS = [
  "With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.",
  "I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.",
];

const ABOUT_STAT = { value: "120%", label: "Average increase in client engagement in the first 6 months" };

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading as="h2" size="lg" id="about-heading">
            About Me
          </SectionHeading>
          <p className="text-sm text-foreground-muted leading-relaxed">
            I specialize in turning complex problems into elegant solutions. My
            approach blends strategic thinking to deliver designs that not only
            look great but work seamlessly. Ready to start your next project?
          </p>
          <StatCard stat={ABOUT_STAT} size="lg" className="mt-2" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface max-w-xs">
            <Image
              src="https://picsum.photos/seed/about/400/400"
              alt="D'Nova at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>

          <ul className="flex flex-col gap-4" aria-label="About highlights">
            {ABOUT_BULLETS.map((text, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2
                  size={18}
                  className="text-foreground mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
