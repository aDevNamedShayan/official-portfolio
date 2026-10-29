'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'
import { type LitUpLinkProps } from '@/types/types'

export function LitUpLink({ children, className, wrapperClassName, fullyRounded = true, ...props }: LitUpLinkProps) {
    return (
        <motion.a
            className={cn(
                'relative aspect-square max-w-fit cursor-pointer p-[3px] font-medium',
                { 'aspect-auto': !fullyRounded },
                wrapperClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    'animate-gradient-wave absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500',
                    { 'rounded-lg': !fullyRounded }
                )}
            />
            <div
                className={cn(
                    'group relative rounded-full bg-lightBg p-2 text-black transition duration-200 hover:bg-transparent hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-transparent',
                    { 'rounded-md px-6 py-2': !fullyRounded },
                    className
                )}
            >
                {children}
            </div>
        </motion.a>
    )
}
