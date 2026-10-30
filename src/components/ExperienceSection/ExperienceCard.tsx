'use client'

import { motion } from 'motion/react'

import { ECChildVariants } from '@/lib/utils/MotionVariants'
import { type ExperienceItemInter } from '@/types/types'

import { CardSpotlight } from '../ui/card-spotlight'

export function ExperienceCard({ item }: { item: ExperienceItemInter }) {
    return (
        <CardSpotlight
            className='flex w-full flex-col gap-5'
            canvasWrapperClassName='bg-neutral-100 dark:bg-neutral-800'
            initial={{ opacity: 0, x: '100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <header className='z-[1]'>
                <h1 className='text-sm font-bold lg:text-base'>{item.title}</h1>
                <p className='text-xs text-neutral-400 lg:text-sm dark:text-neutral-500'>{item.timeline}</p>
            </header>

            <p className='z-[1] text-sm lg:text-base'>{item.description}</p>

            <motion.ul
                className='z-[1] flex flex-wrap gap-2'
                initial='hidden'
                whileInView='visible'
                transition={{ staggerChildren: 0.06, delayChildren: 0.6 }}
            >
                {item.technologies.map((tech) => (
                    <motion.li
                        key={tech}
                        className='rounded-lg bg-gumGreen px-2 py-0.5 text-xs font-bold text-white dark:bg-gumGreen/80'
                        variants={ECChildVariants}
                    >
                        {tech}
                    </motion.li>
                ))}
            </motion.ul>
        </CardSpotlight>
    )
}
