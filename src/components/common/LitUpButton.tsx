'use client'

import { AnimatePresence, motion } from "motion/react";

interface LitUpBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function LitUpButton({ children, className, disabled = false, ...props }: LitUpBtnProps) {
  return (
    <button 
      className="max-w-fit p-[3px] relative font-medium"
      disabled={disabled}
      { ...props }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500 rounded-lg animate-gradient-wave" />
      <div className="px-6 py-2 bg-lightBg dark:bg-darkBg rounded-[6px] relative group transition duration-200 text-black hover:text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent">
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
    </button>
  );
}