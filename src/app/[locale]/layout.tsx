import { notFound } from "next/navigation";
import { use } from "react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Providers } from "@/providers/Providers";
import { Footer } from "@/components/layout/footer";
import { routing } from "@/i18n/routing";

import { iranYekan, rubik } from "@/styles/fonts";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{locale: string}>; }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('title')
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = use(params);
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering (SSG)
  setRequestLocale(locale);

  const isEn = locale === 'en'
  const determineDirection = isEn ? 'ltr' : 'rtl';

  return (
    <html 
      lang={locale}
      className="overflow-x-hidden"
      dir={determineDirection}
      suppressHydrationWarning
    >
      <body
        className={`${ isEn ? rubik.className : iranYekan.className } antialiased bg-lightBg dark:bg-darkBg overflow-x-hidden`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
