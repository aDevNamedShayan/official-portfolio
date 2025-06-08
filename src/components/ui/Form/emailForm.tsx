"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import {
  IconAlertTriangle,
  IconLoader2,
  IconSend2,
} from "@tabler/icons-react";
import emailjs from '@emailjs/browser';
import { LitUpButton } from "@/components/common/LitUpButton";
import { AnimatePresence, motion } from "motion/react";
import { FadeWithBlur } from "@/lib/utils/MotionVariants";

export function EmailForm({ setEmailSent }: { setEmailSent: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<z.typeToFlattenedError<{email: string[] | null; message: string[] | null}, string> | null>(null)

  const emailParamsSchema = z.object({
    email: z.string().nonempty({ message: 'Please enter your email address! ' }).email('Invalid email format. please check and try again!'),
    message: z.string().nonempty({ message: 'Please enter your message! ' }).min(10, 'Message must be at least 10 characters long!')
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if(!serviceID || !templateID || !userID) return

    try {
      const emailParams = {
        email: e.target.email.value,
        message: e.target.message.value,
      }

      const validatedParams = emailParamsSchema.parse(emailParams)

      console.log('validatedParams', validatedParams)
      setError(null)
      setPending(true)
      const res = await emailjs.send(serviceID, templateID, validatedParams, userID)

      if(res.status === 200) {
        setPending(false)
        setEmailSent(true)
      }

      // await new Promise(resolve => setTimeout(() => {
      //   resolve();
      //   setPending(false)
      //   setEmailSent(true)
      // }, 2000))

      // console.log('yey')

    } catch (error) {
      setPending(false)

      if(error instanceof z.ZodError) {
        const flatError = error.flatten()
        setError(flatError)
        console.log('We got error', flatError )
      }
    }
  };

  return (
    <motion.aside 
      initial='initial'
      animate='animate'
      exit='exit'
      variants={FadeWithBlur}
      className="w-1/2 mx-auto max-w-md p-4 md:p-8"
    >
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Get in touch
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label 
            htmlFor="email"
            className={cn({"text-rose-500 dark:text-rose-600" : error?.fieldErrors?.email})}
          >
            Your email
          </Label>

          <Input 
            id="email" 
            name='email' 
            placeholder="example@gmail.com" 
            type="email"
            className={cn({"bg-rose-100 dark:bg-pink-950" : error?.fieldErrors?.email})}
          />

          <AnimatePresence>
            {error?.fieldErrors?.email ?
              <motion.span 
                initial={{ opacity: 0, y: -10}}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -10}}
                transition={{ 
                  ease: [.32, .72, 0, .95] 
                }}
                className="w-fit px-4 py-1 rounded-md flex items-center gap-4 text-rose-500 dark:text-rose-600 bg-rose-100 dark:bg-pink-950"
              >
                <IconAlertTriangle className="shrink-0" />
                {error.fieldErrors.email}
              </motion.span>
            : null}
          </AnimatePresence>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label 
            htmlFor="password"
            className={cn({"text-rose-500 dark:text-rose-600" : error?.fieldErrors?.message})}
          >
            Message
          </Label>

          <Input 
            id="message" 
            name='message' 
            placeholder="Hello Shayan" 
            is="textarea" 
            className={cn({"bg-rose-100 dark:bg-pink-950" : error?.fieldErrors?.message})}
          />

          <AnimatePresence>
            {error?.fieldErrors?.message ?
              <motion.span 
                initial={{ opacity: 0, y: -10}}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -10}}
                transition={{ 
                  ease: [.32, .72, 0, .95] 
                }}
                className="w-fit px-4 py-1 rounded-md flex items-center gap-4 text-rose-500 dark:text-rose-600 bg-rose-100 dark:bg-pink-950"
              >
                <IconAlertTriangle className="shrink-0" />
                {error.fieldErrors.message}
              </motion.span>
            : null}
          </AnimatePresence>
        </LabelInputContainer>

        <LitUpButton
          className="w-36 flex items-center justify-center gap-2"
          type="submit"
          disabled={pending}
        >
          {pending ?
            <>
              <IconLoader2 className='animate-spin' />
              Sending
            </>
            :
            <>
              <IconSend2 />
              Send message
            </>
          }
        </LitUpButton>
      </form>
    </motion.aside>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};