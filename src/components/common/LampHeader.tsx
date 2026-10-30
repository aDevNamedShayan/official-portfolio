'use client'

import { motion } from 'motion/react'

import { LampContainer } from '../ui/lamp'

export function LampHeader({ children }: { children: string }) {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 0.95]
                }}
                className='bg-gradient-to-b from-lampGreen to-neutral-600 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl dark:from-lampGreen dark:to-neutral-300'
            >
                {children}
            </motion.h1>
        </LampContainer>
    )
}
