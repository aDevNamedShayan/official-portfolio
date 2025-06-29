'use client'

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LitUpBtnProps } from "@/types/types";

export function LitUpButton({ children, className, wrapperClassName, disabled = false, fullyRounded = false, ...props }: LitUpBtnProps) {
  return (
    <motion.button 
      className={cn(
        "max-w-fit p-[3px] relative font-medium cursor-pointer",
        wrapperClassName
      )}
      disabled={disabled}
      { ...props }
    >
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500 rounded-lg animate-gradient-wave",
          { "rounded-full" : fullyRounded }
        )}
      />
      <div 
        className={cn(
          "px-6 py-2 bg-lightBg dark:bg-darkBg rounded-md relative group transition duration-200 text-black hover:text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent",
          { 'rounded-full p-1.5' : fullyRounded }
        )}
      >
        <AnimatePresence mode="wait">
          <motion.span 
            key={disabled ? "key1" : "key2"}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut'}}
          >
            {children}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.button>
  );
}