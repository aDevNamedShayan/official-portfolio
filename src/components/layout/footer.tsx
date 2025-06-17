import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="relative h-18 lg:h-12 flex justify-center items-center lg:block">
      <span className="lg:absolute lg:right-20">
        {t('text')}
      </span>
    </footer>
  );
}