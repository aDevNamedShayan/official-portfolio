/* eslint @typescript-eslint/no-explicit-any: 0 */

'use client'

import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'

import { cn } from '@/lib/utils'
import { type InputProps } from '@/types/types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, is = 'input', ...props }, ref) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    function textareaAutoResize(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          #05df72,
          transparent 80%
        )
      `
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className='group/input rounded-lg p-[2px] transition duration-300'
        >
            {is === 'input' ? (
                <input
                    type={type}
                    className={cn(
                        `dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-base text-black shadow-input transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            ) : (
                <textarea
                    className={cn(
                        `dark:placeholder-text-neutral-600 flex w-full resize-none rounded-md border-none bg-gray-50 px-3 py-2 text-base text-black shadow-input transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
                        className
                    )}
                    onChange={textareaAutoResize}
                    onFocus={textareaAutoResize}
                    {...props}
                />
            )}
        </motion.div>
    )
})
Input.displayName = 'Input'

export { Input }
