'use client'
import React from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                'relative z-0 flex min-h-96 w-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent',
                className
            )}
        >
            <div className='relative isolate z-0 flex h-full w-full flex-1 items-center justify-center'>
                {/* Base Reflection */}
                <div className='absolute inset-auto top-[50%] z-1 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-teal-600 opacity-50 blur-3xl'></div>

                {/* Lamp Reflection */}
                <motion.div
                    initial={{ width: '8rem' }}
                    whileInView={{ width: '16rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut'
                    }}
                    className='absolute inset-auto top-4/10 h-36 w-64 -translate-y-1/2 rounded-full bg-lampGreen blur-2xl'
                ></motion.div>

                {/* The Lamp */}
                <motion.div
                    initial={{ width: '15rem' }}
                    whileInView={{ width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut'
                    }}
                    className='absolute inset-auto top-4/10 z-1 h-0.5 w-[30rem] -translate-y-1/2 rounded-full bg-lampGreen'
                ></motion.div>

                {/* Upper section's Lamp Reflection dimmer */}
                <div className='absolute inset-auto top-0 h-4/10 w-[30rem] rounded-t-full bg-lightBg dark:bg-darkBg'></div>
            </div>

            <div className='absolute inset-auto top-[50%]'>{children}</div>
        </div>
    )
}
