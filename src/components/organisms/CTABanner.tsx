import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export function CTABanner() {
  return (
    <section aria-label="Free consultation promotional offer" className="px-6 py-4">
      <div className="max-w-6xl mx-auto rounded-2xl bg-surface-dark px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-lg text-center md:text-left">
          <p className="text-xs font-medium text-background/60 uppercase tracking-widest">
            Book Your Free Consultation Now!
          </p>
          <p className="text-2xl md:text-3xl font-bold text-background leading-snug">
            Exclusive Winter Deal Days Get a Free Consultation!
          </p>
        </div>
        <Button variant="pill" size="lg" asChild>
          <Link href="#contact">Let&apos;s Call</Link>
        </Button>
      </div>
    </section>
  );
}
