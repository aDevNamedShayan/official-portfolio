'use client' //Temporary

import Image from "next/image";
import Me from '@/assets/Shayan.jpg'
import { LitUpButton } from "../common/LitUpButton";
import { Vortex } from "../ui/vortex";
import { motion } from "motion/react";
import { FadeWithBlur } from "@/lib/utils/MotionVariants";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { LitUpLink } from "../common/LitUpLink";

const childVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', x: '-100%' },
  visible: { opacity: 1, filter: 'blur(0)', x: 0, transition: { duration: .5, ease: [.32, .72, 0, .95]  } },
}

const shayanVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0)', transition: { delay: 1 } },
}

export function HeroSection() {
  return (
    <section id="home" className="px-30 h-screen flex justify-between items-center bg-transparent">
      <Vortex
        backgroundColor="transparent"
        rangeY={350}
        particleCount={300}
        baseHue={120}
        baseSpeed={.75}
        rangeSpeed={1.5}
        baseRadius={0}
        // rangeRadius={2}
        containerClassName="flex justify-between items-center"
        className="w-full flex justify-between items-center"
      >
        <motion.div 
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: .75, delayChildren: 2}}
          className="max-w-[35rem] flex flex-col justify-center item-center gap-4"
        >
          <motion.span variants={childVariants} className="text-black dark:text-white font-medium text-2xl">Shayan Noori</motion.span>
          <motion.h1 variants={childVariants} className="font-bold text-5xl text-nowrap">Front-end Developer</motion.h1>
          <motion.span variants={childVariants}>I am a front-end developer specializing in JavaScript, TypeScript, React.js and Next.js, and I bring fast, responsive, and search engine optimized websites to life.</motion.span>
          <div className="flex items-center gap-8">
            <LitUpButton variants={childVariants} className="flex items-center justify-center gap-2">
              Download CV
              <IconDownload className='shrink-0'/>
            </LitUpButton>
            <LitUpLink href='https://github.com/aDevNamedShayan' variants={childVariants} className="flex items-center justify-center gap-2">
              <IconBrandGithub className='shrink-0'/>
            </LitUpLink>
            <LitUpLink href='https://www.linkedin.com/in/shayan-noori-4b24ab347' variants={childVariants} className="flex items-center justify-center gap-2">
              <IconBrandLinkedin className='shrink-0'/>
            </LitUpLink>
            {/* <LitUpLink variants={childVariants} className="flex items-center justify-center gap-2">
              <IconDownload className='shrink-0'/>
            </LitUpLink> */}

          </div>
        </motion.div>
        <motion.div 
          initial='initial' 
          animate='animate' 
          variants={shayanVariants}
          className="size-96 animate-float transition duration-500 hover:scale-105"
        >
          <BackgroundGradient fullyRounded>
            <Image
              src={Me}
              alt='Picture of Shayan Noori'
              className="rounded-full size-full"
            />
          </BackgroundGradient>
        </motion.div>
      </Vortex>
    </section>
  );
}