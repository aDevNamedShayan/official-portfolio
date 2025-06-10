'use client'

import { IconCheck } from "@tabler/icons-react";
import { LitUpButton } from "@/components/common/LitUpButton";
import { motion } from "motion/react";
import { FadeWithBlur } from "@/lib/utils/MotionVariants";
import { BackgroundLines } from "@/components/ui/background-lines";

export function SuccessPage({ setEmailSent }: { setEmailSent: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <motion.aside 
      initial='initial'
      animate='animate'
      exit='exit'
      variants={FadeWithBlur}
      className="w-1/2 max-w-md p-4 md:p-8 absolute right-1/4 translate-x-1/2"
    >
      <BackgroundLines className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-medium flex justify-center gap-3">Message Sent <IconCheck className="shrink-0 size-12 text-green-400" /></h1>
        <p className='text-center'>I&apos;ll get back to you within a couple days, sit tight</p>
        <LitUpButton wrapperClassName="mt-4" onClick={() => setEmailSent(false)}>Return to the form</LitUpButton>
      </BackgroundLines>
    </motion.aside>
  );
}