'use client'

import { useTranslations } from 'next-intl'
import { IconBrandGithub, IconBrandLinkedin, IconDownload } from '@tabler/icons-react'
import { motion } from 'motion/react'

import { GITHUB_ADDRESS, LINKEDIN_ADDRESS, RESUME_DL_NAME, RESUME_PATH } from '@/lib/utils/Constants'
import { HSChildVariants } from '@/lib/utils/MotionVariants'

import { LitUpLink } from '../common/LitUpLink'

export function Introduction() {
    const t = useTranslations('HeroSection')

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            transition={{ staggerChildren: 0.6, delayChildren: 2 }}
            className='-mt-[10vh] flex max-w-[35rem] flex-col items-center justify-center gap-4 lg:items-start'
        >
            <motion.span
                variants={HSChildVariants}
                className='text-lg font-medium text-black sm:text-xl lg:text-2xl dark:text-white'
            >
                {t('name')}
            </motion.span>
            <motion.h1 variants={HSChildVariants} className='text-3xl font-bold text-nowrap sm:text-4xl lg:text-5xl'>
                {t('role')}
            </motion.h1>
            <motion.span variants={HSChildVariants} className='px-4 text-center sm:px-0 lg:text-start'>
                {t('introduction')}
            </motion.span>
            <div className='flex items-center gap-8'>
                <LitUpLink
                    href={RESUME_PATH}
                    download={RESUME_DL_NAME}
                    variants={HSChildVariants}
                    className='flex items-center justify-center gap-2'
                    fullyRounded={false}
                >
                    {t('download')}
                    <IconDownload className='shrink-0' />
                </LitUpLink>
                <LitUpLink href={GITHUB_ADDRESS} target='_blank' variants={HSChildVariants}>
                    <IconBrandGithub className='shrink-0' />
                </LitUpLink>
                <LitUpLink href={LINKEDIN_ADDRESS} target='_blank' variants={HSChildVariants}>
                    <IconBrandLinkedin className='shrink-0' />
                </LitUpLink>
            </div>
        </motion.div>
    )
}
