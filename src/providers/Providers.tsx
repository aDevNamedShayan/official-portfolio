import { ThemeProvider } from "next-themes"
import { ReactLenis } from 'lenis/react'
import { NextIntlClientProvider } from "next-intl"

export function Providers({ children }: { children: React.ReactNode}) {
  return (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
  >
    <NextIntlClientProvider>
      <ReactLenis root />
      {children}
    </NextIntlClientProvider>
  </ThemeProvider>
  )
}