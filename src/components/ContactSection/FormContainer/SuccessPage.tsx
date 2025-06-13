'use client'

import { IconCheck } from "@tabler/icons-react";
import { LitUpButton } from "@/components/common/LitUpButton";
import { motion } from "motion/react";
import { FadeWithBlur } from "@/lib/utils/MotionVariants";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useTranslations } from "next-intl";

export function SuccessPage({ setEmailSent }: { setEmailSent: React.Dispatch<React.SetStateAction<boolean>> }) {
  const t = useTranslations('ContactSection')

  return (
    <motion.aside 
      initial='initial'
      animate='animate'
      exit='exit'
      variants={FadeWithBlur}
      className="w-4/4 max-w-md p-4 md:p-8 lg:absolute lg:right-1/4 lg:translate-x-1/2"
    >
      <BackgroundLines className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-medium flex justify-center gap-3">{t('succTitle')} <IconCheck className="shrink-0 size-12 text-green-400" /></h1>
        <p className='text-center'>{t('succDesc')}</p>
        <LitUpButton wrapperClassName="mt-4" onClick={() => setEmailSent(false)}>{t('succReturnBtn')}</LitUpButton>
      </BackgroundLines>
    </motion.aside>
  );
}