'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import Me from '@/assets/Shayan.jpg'
import { ShayanVariants } from '@/lib/utils/MotionVariants'

import { BackgroundGradient } from '../ui/background-gradient'

export function FloatingShayan() {
    return (
        <motion.div
            initial='initial'
            animate='animate'
            variants={ShayanVariants}
            className='-mt-[10vh] flex size-72 animate-float items-center transition duration-500 hover:scale-105 lg:size-96'
        >
            <BackgroundGradient containerClassName='size-full' fullyRounded>
                <Image
                    src={Me}
                    alt='Picture of Shayan Noori'
                    className='size-full rounded-full'
                    quality={100}
                    priority
                    placeholder='blur'
                />
            </BackgroundGradient>
        </motion.div>
    )
}
