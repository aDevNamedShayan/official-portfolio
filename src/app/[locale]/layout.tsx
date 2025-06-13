import { notFound } from "next/navigation";
import { use } from "react";
import { hasLocale } from "next-intl";
import { Providers } from "@/providers/Providers";
import { Footer } from "@/components/layout/footer";
import { routing } from "@/i18n/routing";

import { iranYekan, rubik } from "@/styles/fonts";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{locale: string}>; }) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn? "Shayan Noori | Front-end Developer" : "شایان نوری | توسعه\u200cدهنده فرانت\u200cاند"
  }
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
        className={`${isEn ? rubik.className : iranYekan.className } antialiased bg-lightBg dark:bg-darkBg overflow-x-hidden`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
