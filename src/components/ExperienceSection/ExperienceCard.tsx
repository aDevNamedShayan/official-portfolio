'use client'

import { CardSpotlight } from "../ui/card-spotlight";
import { motion } from "motion/react";
import { ECChildVariants } from "@/lib/utils/MotionVariants";
import { ExperienceItemInter } from "@/types/types";

export function ExperienceCard({ item }: { item: ExperienceItemInter }) {
  return (
    <CardSpotlight 
      className="w-full flex flex-col gap-5" 
      canvasWrapperClassName="bg-neutral-100 dark:bg-neutral-800"
      initial={{ opacity: 0, x: "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <header className="z-[1]">
        <h1 className="font-bold">
          {item.title}
        </h1>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm">{item.timeline}</p>
      </header>

      <p className="text-sm lg:text-base z-[1]">
        {item.description}
      </p>

      <motion.ul 
        className="flex flex-wrap gap-2 z-[1]" 
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: .06, delayChildren: .6 }}
      >
        {item.technologies.map((tech) => (
          <motion.li 
            key={tech}
            className='px-2 py-0.5 bg-lime-500 rounded-lg text-white text-sm font-bold'
            variants={ECChildVariants}
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </CardSpotlight>
  );
}