"use client"

import { Root } from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-gray-300 dark:bg-gray-700 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-3/4 data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}
