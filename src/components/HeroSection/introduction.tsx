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
      className="max-w-[35rem] flex flex-col justify-center items-center lg:items-start gap-4"
    >
      <motion.span variants={HSChildVariants} className="text-black dark:text-white font-medium text-2xl">{t('name')}</motion.span>
      <motion.h1 variants={HSChildVariants} className="font-bold text-5xl text-nowrap">{t('role')}</motion.h1>
      <motion.span variants={HSChildVariants} className='text-center lg:text-start'>{t('introduction')}</motion.span>
      <div className="flex items-center gap-8">
        <LitUpButton variants={HSChildVariants} className="flex items-center justify-center gap-2">
          {t('download')}
          <IconDownload className='shrink-0'/>
        </LitUpButton>
        <LitUpLink href='https://github.com/aDevNamedShayan' variants={HSChildVariants}>
          <IconBrandGithub className='shrink-0'/>
        </LitUpLink>
        <LitUpLink href='https://www.linkedin.com/in/shayan-noori-4b24ab347' variants={HSChildVariants}>
          <IconBrandLinkedin className='shrink-0'/>
        </LitUpLink>
        {/* <LitUpLink variants={childVariants} className="flex items-center justify-center gap-2">
          <IconDownload className='shrink-0'/>
        </LitUpLink> */}
      </div>
    </motion.div>
  );
}