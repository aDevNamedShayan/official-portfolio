import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ReactLenis } from 'lenis/react'

import { Toaster } from '@/components/ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <NextIntlClientProvider>
                <ReactLenis root />
                <Toaster richColors />
                <SpeedInsights />
                <Analytics />
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
    )
}
