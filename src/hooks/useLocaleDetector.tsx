import { useLocale } from "next-intl";

export function useLocaleDetector() {
  const locale = useLocale()
  const isEn = locale === 'en'

  return isEn;
}