import { SectionLabel } from '@/components/atoms/SectionLabel'
import { PortfolioCard } from '@/components/molecules/PortfolioCard'
import { PORTFOLIO_CARDS } from '@/data/portfolio'

export function PortfolioGallery() {
  return (
    <section
      id='portfolio'
      aria-labelledby='portfolio-gallery-heading'
      className='py-12 md:py-16'
    >
      <div className='mx-auto mb-6 max-w-6xl px-6'>
        <SectionLabel>Portfolio</SectionLabel>
      </div>
      <div
        className='mx-auto flex max-w-6xl gap-4 overflow-x-auto px-6 pb-2 md:grid md:grid-cols-3 md:overflow-visible'
        aria-labelledby='portfolio-gallery-heading'
      >
        <h2 id='portfolio-gallery-heading' className='sr-only'>
          Portfolio Gallery
        </h2>
        {PORTFOLIO_CARDS.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
