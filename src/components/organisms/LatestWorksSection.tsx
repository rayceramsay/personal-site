import Link from "next/link";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Button } from "@/components/atoms/Button";
import { WorkThumbnail } from "@/components/molecules/WorkThumbnail";
import { WORK_ITEMS } from "@/data/works";

export function LatestWorksSection() {
  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading as="h2" size="lg" id="works-heading">
          Latest Works
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORK_ITEMS.map((work) => (
          <WorkThumbnail key={work.id} work={work} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <Button variant="ghost" size="md" asChild>
          <Link href="#portfolio">Check our More</Link>
        </Button>
        <Button variant="outline" size="md" asChild>
          <Link href="#portfolio">View More</Link>
        </Button>
      </div>
    </section>
  );
}
