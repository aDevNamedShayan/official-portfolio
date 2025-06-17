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
        className="bg-gradient-to-b from-lampGreen dark:from-lampGreen to-neutral-600 dark:to-neutral-300 py-4 bg-clip-text text-center text-4xl md:text-6xl font-medium tracking-tight text-transparent"
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}