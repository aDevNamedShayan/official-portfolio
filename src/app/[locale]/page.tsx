import { use } from 'react'
import dynamic from 'next/dynamic'
import { setRequestLocale } from 'next-intl/server'

import { HeroSection } from '@/components/HeroSection/HeroSection'
import { NavDock } from '@/components/NavDock/NavDock'

const SkillSection = dynamic(() => import('@/components/SkillSection/SkillSection').then((mod) => mod.SkillSection))
const ExperienceSection = dynamic(() =>
    import('@/components/ExperienceSection/ExperienceSection').then((mod) => mod.ExperienceSection)
)
const ContactSection = dynamic(() =>
    import('@/components/ContactSection/ContactSection').then((mod) => mod.ContactSection)
)

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params)

    // Enable static rendering (SSG)
    setRequestLocale(locale)

    return (
        <main className='flex flex-col gap-10'>
            <NavDock />
            <HeroSection />
            <SkillSection />
            <ExperienceSection />
            <ContactSection />
        </main>
    )
}
