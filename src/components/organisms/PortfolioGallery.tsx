import { SectionLabel } from "@/components/atoms/SectionLabel";
import { PortfolioCard } from "@/components/molecules/PortfolioCard";
import { PORTFOLIO_CARDS } from "@/data/portfolio";

export function PortfolioGallery() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-gallery-heading"
      className="py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <SectionLabel>Portfolio</SectionLabel>
      </div>
      <div
        className="flex gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 px-6 max-w-6xl mx-auto pb-2"
        aria-labelledby="portfolio-gallery-heading"
      >
        <h2 id="portfolio-gallery-heading" className="sr-only">
          Portfolio Gallery
        </h2>
        {PORTFOLIO_CARDS.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
