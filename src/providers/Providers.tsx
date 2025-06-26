import { ThemeProvider } from "next-themes"
import { ReactLenis } from 'lenis/react'
import { NextIntlClientProvider } from "next-intl"
import { Toaster } from "@/components/ui/sonner"

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
      {children}
    </NextIntlClientProvider>
  </ThemeProvider>
  )
}