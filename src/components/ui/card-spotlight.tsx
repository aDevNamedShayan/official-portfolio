'use client'

import React, { type MouseEvent as ReactMouseEvent, useState } from 'react'
import { type HTMLMotionProps, motion, useMotionTemplate, useMotionValue } from 'motion/react'

import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import { cn } from '@/lib/utils'

export const CardSpotlight = ({
    children,
    radius = 350,
    className,
    canvasWrapperClassName,
    ...props
}: {
    radius?: number
    children: React.ReactNode
    canvasWrapperClassName?: string
} & HTMLMotionProps<'div'>) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    return (
        <motion.div
            className={cn(
                'group/spotlight relative rounded-2xl border border-neutral-300 p-4 md:p-6 dark:border-neutral-800',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <motion.div
                className={cn(
                    'pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100',
                    canvasWrapperClassName
                )}
                style={{
                    maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `
                }}
            >
                {isHovering && (
                    <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName='bg-transparent absolute inset-0 pointer-events-none'
                        colors={[
                            [3, 252, 111],
                            [3, 252, 231]
                        ]}
                        dotSize={3}
                        showGradient={false}
                    />
                )}
            </motion.div>
            {children}
        </motion.div>
    )
}
