import { useTranslations } from 'next-intl'

import { DraggyCards } from './DraggyCards/DraggyCards'
import { LampHeader } from '../common/LampHeader'

export function SkillSection() {
    const t = useTranslations('SkillsSection')
    return (
        <section id='skills' className='flex flex-col gap-10'>
            <LampHeader>{t('header')}</LampHeader>
            <DraggyCards />
        </section>
    )
}
