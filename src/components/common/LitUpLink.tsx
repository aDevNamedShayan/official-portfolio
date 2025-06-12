'use client'

import { HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LitUpBtnProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export function LitUpLink({ children, wrapperClassName, ...props }: LitUpBtnProps) {
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
        {children}
      </div>
    </motion.a>
  );
}