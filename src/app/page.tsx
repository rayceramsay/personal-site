import { SiteHeader } from '@/components/organisms/SiteHeader'
import { HeroSection } from '@/components/organisms/HeroSection'
import { AboutSection } from '@/components/organisms/AboutSection'
import { ExperienceSection } from '@/components/organisms/ExperienceSection'
import { ProjectsSection } from '@/components/organisms/ProjectsSection'
import { SkillsSection } from '@/components/organisms/SkillsSection'
import { ContactSection } from '@/components/organisms/ContactSection'
import { SiteFooter } from '@/components/organisms/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id='main-content' className='flex-1'>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
