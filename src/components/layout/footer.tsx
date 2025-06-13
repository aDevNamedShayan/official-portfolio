import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="relative h-18 flex justify-center items-center">
      <span className="lg:absolute lg:right-20">
        {t('text')}
      </span>
    </footer>
  );
}