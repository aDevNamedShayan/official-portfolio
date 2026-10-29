'use client'

import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'
import { type LitUpBtnProps } from '@/types/types'

export function LitUpButton({
    children,
    className,
    wrapperClassName,
    disabled = false,
    fullyRounded = false,
    ...props
}: LitUpBtnProps) {
    return (
        <motion.button
            className={cn('relative max-w-fit cursor-pointer p-[3px] font-medium', wrapperClassName)}
            disabled={disabled}
            {...props}
        >
            <div
                className={cn(
                    'animate-gradient-wave absolute inset-0 rounded-lg bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500',
                    { 'rounded-full': fullyRounded }
                )}
            />
            <div
                className={cn(
                    'group relative rounded-md bg-lightBg px-6 py-2 text-black transition duration-200 hover:bg-transparent hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-transparent',
                    { 'rounded-full p-1.5': fullyRounded }
                )}
            >
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={disabled ? 'key1' : 'key2'}
                        className={className}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {children}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.button>
    )
}
