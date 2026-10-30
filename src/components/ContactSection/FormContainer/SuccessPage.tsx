'use client'

import { useTranslations } from 'next-intl'
import { IconCheck } from '@tabler/icons-react'
import { motion } from 'motion/react'

import { LitUpButton } from '@/components/common/LitUpButton'
import { BackgroundLines } from '@/components/ui/background-lines'
import { FadeWithBlur } from '@/lib/utils/MotionVariants'

export function SuccessPage({ setEmailSent }: { setEmailSent: React.Dispatch<React.SetStateAction<boolean>> }) {
    const t = useTranslations('ContactSection')

    return (
        <motion.aside
            initial='initial'
            animate='animate'
            exit='exit'
            variants={FadeWithBlur}
            className='w-4/4 max-w-md p-4 md:p-8 lg:absolute lg:right-1/4 lg:translate-x-1/2'
        >
            <BackgroundLines className='flex flex-col items-center justify-center gap-2'>
                <h1 className='flex justify-center gap-3 text-4xl font-medium'>
                    {t('succTitle')} <IconCheck className='size-12 shrink-0 text-green-400' />
                </h1>
                <p className='text-center'>{t('succDesc')}</p>
                <LitUpButton wrapperClassName='mt-4' onClick={() => setEmailSent(false)}>
                    {t('succReturnBtn')}
                </LitUpButton>
            </BackgroundLines>
        </motion.aside>
    )
}
