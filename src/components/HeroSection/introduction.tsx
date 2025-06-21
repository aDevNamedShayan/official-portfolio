'use client'

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { LitUpButton } from "../common/LitUpButton";
import { LitUpLink } from "../common/LitUpLink";
import { HSChildVariants } from "@/lib/utils/MotionVariants";

export function Introduction() {
  const t = useTranslations('HeroSection')

  return (
    <motion.div 
      initial='hidden'
      animate='visible'
      transition={{ staggerChildren: .6, delayChildren: 2}}
      className="max-w-[35rem] flex flex-col justify-center items-center lg:items-start gap-4 -mt-[10vh]"
    >
      <motion.span variants={HSChildVariants} className="text-black dark:text-white font-medium text-lg sm:text-xl lg:text-2xl">{t('name')}</motion.span>
      <motion.h1 variants={HSChildVariants} className="font-bold text-3xl sm:text-4xl lg:text-5xl text-nowrap">{t('role')}</motion.h1>
      <motion.span variants={HSChildVariants} className='text-center lg:text-start'>{t('introduction')}</motion.span>
      <div className="flex items-center gap-8">
        <LitUpButton variants={HSChildVariants} className="flex items-center justify-center gap-2">
          {t('download')}
          <IconDownload className='shrink-0'/>
        </LitUpButton>
        <LitUpLink href='https://github.com/aDevNamedShayan' target="_blank" variants={HSChildVariants}>
          <IconBrandGithub className='shrink-0'/>
        </LitUpLink>
        <LitUpLink href='https://linkedin.com/in/adevnamedshayan' target="_blank" variants={HSChildVariants}>
          <IconBrandLinkedin className='shrink-0'/>
        </LitUpLink>
      </div>
    </motion.div>
  );
}