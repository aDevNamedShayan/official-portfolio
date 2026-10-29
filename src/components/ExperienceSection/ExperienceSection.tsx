import { useTranslations } from 'next-intl'

import { ExperienceCard } from './ExperienceCard'
import { LampHeader } from '../common/LampHeader'
import { TracingBeam } from '../ui/trancing-beam'

export function ExperienceSection() {
    const t = useTranslations('ExpSection')

    const ExperienceItems = [
        {
            title: t('tradingTitle'),
            timeline: t('tradingTimeline'),
            description: t('tradingDescription'),
            technologies: [
                'React.js',
                'TypeScript',
                'Tailwind CSS',
                'TanStack Query',
                'TanStack Table',
                'React Hook Form',
                'Zod',
                'Vite',
                'Jest',
                'React Testing Library'
            ]
        },
        {
            title: t('apancoTitle'),
            timeline: t('apancoTimeline'),
            description: t('apancoDescription'),
            technologies: [
                'React.js',
                'TypeScript',
                'Tailwind CSS',
                'TanStack Query',
                'Formik',
                'Yup',
                'Vite',
                'Zustand',
                'Jest',
                'React Testing Library'
            ]
        },
        {
            title: t('sepehrTitle'),
            timeline: t('sepehrTimeline'),
            description: t('sepehrDescription'),
            technologies: [
                'React.js',
                'Tailwind CSS',
                'TanStack Query',
                'React Strap',
                'React Hook Form',
                'Zod',
                'Vite',
                'Context API'
            ]
        }
    ]

    return (
        <section id='experiences' className='flex flex-col gap-10'>
            <LampHeader>{t('header')}</LampHeader>
            <TracingBeam wrapperClassName='flex flex-col gap-6'>
                {ExperienceItems.map((item, index) => (
                    <ExperienceCard key={index} item={item} />
                ))}
            </TracingBeam>
        </section>
    )
}
