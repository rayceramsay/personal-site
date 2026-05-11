import { SiteHeader } from '@/components/organisms/SiteHeader'
import { HeroSection } from '@/components/organisms/HeroSection'
import { AboutSection } from '@/components/organisms/AboutSection'
import { PortfolioGallery } from '@/components/organisms/PortfolioGallery'
import { ExperienceSection } from '@/components/organisms/ExperienceSection'
import { CTABanner } from '@/components/organisms/CTABanner'
import { LatestWorksSection } from '@/components/organisms/LatestWorksSection'
import { BlogSection } from '@/components/organisms/BlogSection'
import { FinalCTASection } from '@/components/organisms/FinalCTASection'
import { SiteFooter } from '@/components/organisms/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id='main-content' className='flex-1'>
        <HeroSection />
        <AboutSection />
        <PortfolioGallery />
        <ExperienceSection />
        <CTABanner />
        <LatestWorksSection />
        <BlogSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  )
}
