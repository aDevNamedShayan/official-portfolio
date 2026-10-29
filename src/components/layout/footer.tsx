import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations('Footer')

    return (
        <footer className='relative flex h-18 items-center justify-center lg:block lg:h-12'>
            <span className='lg:absolute lg:right-20'>{t('text')}</span>
        </footer>
    )
}
