'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundGradient } from "../ui/background-gradient";
import { ShayanVariants } from "@/lib/utils/MotionVariants";

import Me from '@/assets/Shayan.jpg'

export function FloatingShayan() {
  return (
    <motion.div 
      initial='initial' 
      animate='animate' 
      variants={ShayanVariants}
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