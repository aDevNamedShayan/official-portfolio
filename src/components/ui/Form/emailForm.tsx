'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import emailjs from '@emailjs/browser'
import {
    IconAlertTriangle,
    IconBrandGithub,
    IconBrandLinkedin,
    IconCopy,
    IconCopyCheck,
    IconLoader2,
    IconMail,
    IconPhone,
    IconSend2
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { toast } from 'sonner'
import { z } from 'zod'

import { LitUpButton } from '@/components/common/LitUpButton'
import { cn } from '@/lib/utils'
import { EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK, PHONE_NUMBER } from '@/lib/utils/Constants'
import { FadeWithBlur } from '@/lib/utils/MotionVariants'

import { Input } from './input'
import { Label } from './label'
import { BackgroundGradient } from '../background-gradient'

const links = [
    {
        id: 1,
        icon: <IconPhone className='shrink-0 text-gumGreen' />,
        link: PHONE_NUMBER
    },
    {
        id: 2,
        icon: <IconMail className='shrink-0 text-gumGreen' />,
        link: EMAIL_ADDRESS
    },
    {
        id: 3,
        icon: <IconBrandGithub className='shrink-0 text-gumGreen' />,
        link: GITHUB_LINK
    },
    {
        id: 4,
        icon: <IconBrandLinkedin className='shrink-0 text-gumGreen' />,
        link: LINKEDIN_LINK
    }
]

export function EmailForm({ setEmailSent }: { setEmailSent: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState<z.typeToFlattenedError<
        { email: string[] | null; message: string[] | null },
        string
    > | null>(null)
    const t = useTranslations('ContactSection')

    const emailParamsSchema = z.object({
        email: z
            .string()
            .nonempty({ message: t('noEmailErr') })
            .email(t('invEmailErr')),
        message: z
            .string()
            .nonempty({ message: t('noMsgErr') })
            .min(10, t('shortMsgErr'))
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        if (!serviceID || !templateID || !userID) return

        try {
            const form = e.target as HTMLFormElement

            const emailParams = {
                email: form.email.value,
                message: form.message.value
            }

            const validatedParams = emailParamsSchema.parse(emailParams)

            setError(null)
            setPending(true)
            const res = await emailjs.send(serviceID, templateID, validatedParams, userID)

            if (res.status === 200) {
                setPending(false)
                setEmailSent(true)
            }

            // await new Promise((resolve, reject) => setTimeout(() => {
            //   reject();
            //   // resolve();
            //   // setPending(false)
            //   // setEmailSent(true)
            // }, 1000))
        } catch (error) {
            setPending(false)

            if (error instanceof z.ZodError) {
                const flatError = error.flatten()
                setError(flatError)
            } else {
                toast.error(t('sendMsgErr'))
            }
        }
    }

    return (
        <motion.aside
            initial='initial'
            animate='animate'
            exit='exit'
            variants={FadeWithBlur}
            className='w-3/4 max-w-md lg:absolute lg:right-1/4 lg:translate-x-1/2'
        >
            <BackgroundGradient className='bg-lightBg p-4 md:p-8 dark:bg-darkBg'>
                <h2 className='text-3xl font-bold text-neutral-800 dark:text-neutral-200'>{t('touch')}</h2>

                <form className='mt-4 lg:mt-8' onSubmit={handleSubmit}>
                    <LabelInputContainer className='mb-4'>
                        <Label
                            htmlFor='email'
                            className={cn({ 'text-rose-500 dark:text-rose-600': error?.fieldErrors?.email })}
                        >
                            {t('email')}
                        </Label>

                        <Input
                            id='email'
                            name='email'
                            placeholder='example@gmail.com'
                            type='email'
                            className={cn({ 'bg-rose-100 dark:bg-pink-950': error?.fieldErrors?.email })}
                        />

                        <AnimatePresence>
                            {error?.fieldErrors?.email ? (
                                <motion.span
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{
                                        ease: [0.32, 0.72, 0, 0.95],
                                        duration: 0.5
                                    }}
                                    className='flex w-fit items-center gap-8 rounded-md bg-rose-100 px-4 py-1 text-wrap text-rose-500 dark:bg-pink-950 dark:text-rose-600'
                                >
                                    <IconAlertTriangle className='shrink-0' />
                                    <ol className='list-decimal'>
                                        {error.fieldErrors.email.map((err, index) => (
                                            <li key={index}>{err}</li>
                                        ))}
                                    </ol>
                                </motion.span>
                            ) : null}
                        </AnimatePresence>
                    </LabelInputContainer>

                    <LabelInputContainer className='mb-4'>
                        <Label
                            htmlFor='password'
                            className={cn({ 'text-rose-500 dark:text-rose-600': error?.fieldErrors?.message })}
                        >
                            {t('message')}
                        </Label>

                        <Input
                            id='message'
                            name='message'
                            placeholder={t('messagePH')}
                            is='textarea'
                            className={cn({ 'bg-rose-100 dark:bg-pink-950': error?.fieldErrors?.message })}
                        />

                        <AnimatePresence>
                            {error?.fieldErrors?.message ? (
                                <motion.span
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{
                                        ease: [0.32, 0.72, 0, 0.95],
                                        duration: 0.5
                                    }}
                                    className='flex w-fit items-center gap-8 rounded-md bg-rose-100 px-4 py-1 text-rose-500 dark:bg-pink-950 dark:text-rose-600'
                                >
                                    <IconAlertTriangle className='shrink-0' />
                                    <ol className='list-decimal'>
                                        {error.fieldErrors.message.map((err, index) => (
                                            <li key={index}>{err}</li>
                                        ))}
                                    </ol>
                                </motion.span>
                            ) : null}
                        </AnimatePresence>
                    </LabelInputContainer>

                    <LitUpButton
                        className='flex items-center justify-center gap-2'
                        wrapperClassName='max-w-full w-full'
                        type='submit'
                        disabled={pending}
                    >
                        {pending ? (
                            <>
                                <IconLoader2 className='shrink-0 animate-spin' />
                                {t('sendingMsg')}
                            </>
                        ) : (
                            <>
                                <IconSend2 className='shrink-0' />
                                {t('sendMsg')}
                            </>
                        )}
                    </LitUpButton>
                </form>

                <div className='my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent' />

                <nav className='flex w-full flex-col gap-2'>
                    {links.map((link) => (
                        <CopyLink key={link.id} id={link.id} icon={link.icon} link={link.link} />
                    ))}
                </nav>
            </BackgroundGradient>
        </motion.aside>
    )
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}

const CopyLink = ({ id, icon, link }: { id: number; icon: React.ReactNode; link: string }) => {
    const [copied, setCopied] = useState<number | null>(null)

    const handleCopy = async (text: string) => {
        await navigator.clipboard.writeText(text)

        setCopied(id)
        setTimeout(() => setCopied(null), 2000)
    }
    return (
        <div className='flex items-center justify-between gap-3 overflow-hidden'>
            <span className='flex min-w-0 items-center gap-2 text-sm font-medium lg:text-base'>
                {icon}
                <span className='truncate [direction:ltr]'>{link}</span>
            </span>
            <LitUpButton fullyRounded type='button' onClick={() => handleCopy(link)} disabled={Boolean(copied)}>
                {copied ? <IconCopyCheck className='shrink-0' /> : <IconCopy className='shrink-0' />}
            </LitUpButton>
        </div>
    )
}
