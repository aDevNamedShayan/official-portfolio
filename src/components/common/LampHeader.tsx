'use client'

import { LampContainer } from "../ui/lamp";
import { motion } from "motion/react";

export function LampHeader({ children }: { children: string; }) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [.32, .72, 0, .95],
        }}
        className="bg-gradient-to-br from-neutral-800 dark:from-slate-50 to-neutral-300 dark:to-slate-500 py-4 bg-clip-text text-center text-4xl md:text-6xl font-medium tracking-tight text-transparent"
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}