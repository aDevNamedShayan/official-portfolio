'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface LitUpBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export function LitUpLink({ children, className, wrapperClassName, disabled = false, ...props }: LitUpBtnProps) {
  return (
    <motion.a
      className={cn(
        "max-w-fit p-[3px] relative font-medium aspect-square",
        wrapperClassName
      )}
      { ...props }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500 rounded-full animate-gradient-wave" />
      <div className="p-2 bg-lightBg dark:bg-darkBg rounded-full relative group transition duration-200 text-black hover:text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent">
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
    </motion.a>
  );
}