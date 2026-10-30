'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { Root } from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

const Label = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
    ({ className, ...props }, ref) => (
        <Root
            ref={ref}
            className={cn(
                'text-sm leading-none font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white',
                className
            )}
            {...props}
        />
    )
)
Label.displayName = Root.displayName

export { Label }
