import { ThemeProvider } from "next-themes"
import { ReactLenis } from 'lenis/react'
import { NextIntlClientProvider } from "next-intl"
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Providers({ children }: { children: React.ReactNode}) {
  return (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
  >
    <NextIntlClientProvider>
      <ReactLenis root />
      <Toaster richColors />
      <SpeedInsights />
      {children}
    </NextIntlClientProvider>
  </ThemeProvider>
  )
}