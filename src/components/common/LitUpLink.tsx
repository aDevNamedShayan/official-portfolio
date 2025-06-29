'use client'

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LitUpLinkProps } from "@/types/types";

export function LitUpLink({ children, className, wrapperClassName, fullyRounded = true, ...props }: LitUpLinkProps) {
  return (
    <motion.a
      className={cn(
        "max-w-fit p-[3px] relative font-medium cursor-pointer aspect-square",
        { 'aspect-auto' : !fullyRounded },
        wrapperClassName
      )}
      { ...props }
    >
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500 rounded-full animate-gradient-wave",
          { 'rounded-lg' : !fullyRounded }
        )}
      />
      <div 
        className={cn(
          "p-2 bg-lightBg dark:bg-darkBg rounded-full relative group transition duration-200 text-black hover:text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent",
          { 'px-6 py-2 rounded-md' : !fullyRounded },
          className
        )}
      >
        {children}
      </div>
    </motion.a>
  );
}