'use client'

import { useState } from 'react'
import { AnimatePresence } from 'motion/react'

import { EmailForm } from '@/components/ui/Form/emailForm'

import { SuccessPage } from './SuccessPage'

export function FormContainer() {
    const [emailSent, setEmailSent] = useState(false)

    return (
        <AnimatePresence mode='wait'>
            {emailSent ? (
                <SuccessPage key='sent' setEmailSent={setEmailSent} />
            ) : (
                <EmailForm key='sending' setEmailSent={setEmailSent} />
            )}
        </AnimatePresence>
    )
}
