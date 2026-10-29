import { useTranslations } from 'next-intl'

import { FormContainer } from './FormContainer/FormContainer'
import { LampHeader } from '../common/LampHeader'
import { IdCard } from '../ui/IdCard/3d-card'

export function ContactSection() {
    const t = useTranslations('ContactSection')

    return (
        <section id='contact'>
            <LampHeader>{t('header')}</LampHeader>
            <main className='relative flex flex-col items-center justify-center lg:flex-row'>
                <IdCard />
                <FormContainer />
            </main>
        </section>
    )
}
