'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundGradient } from "../ui/background-gradient";

import Me from '@/assets/Shayan.jpg'

const shayanVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0)', transition: { delay: 1.4 } },
}

export function FloatingShayan() {
  return (
    <motion.div 
      initial='initial' 
      animate='animate' 
      variants={shayanVariants}
      className="size-72 lg:size-96 animate-float transition duration-500 hover:scale-105 flex items-center -mt-[10vh]"
    >
      <BackgroundGradient 
        containerClassName="size-full"
        fullyRounded
      >
        <Image
          src={Me}
          alt='Picture of Shayan Noori'
          className="rounded-full size-full"
          quality={100}
          priority
          placeholder="blur"
        />
      </BackgroundGradient>
    </motion.div>
  );
}