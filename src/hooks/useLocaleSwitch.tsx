import Image from "next/image";
import { useLocale } from "next-intl";
import { redirect } from "@/i18n/navigation";
import Iran from '@/../public/Images/Languages/fa.svg'
import USA from '@/../public/Images/Languages/en.svg'

export function useLocaleSwitch() {
  const locale = useLocale()

  const localeValues = {
    fa: {
      icon: <Image src={Iran} alt='Iran flag' className="rounded-full size-full opacity-75" />,
      title: 'تغییر به انگلیسی',
      next: 'en'
    },
    en: {
      icon: <Image src={USA} alt='USA flag' className="rounded-full size-full opacity-75" />,
      title: 'Switch to Persian',
      next: 'fa'
    },
  }

  const currentLocale = localeValues[locale as keyof typeof localeValues]

  const handleLocaleSwitch = () => {
    redirect({ href: '/', locale: currentLocale.next })
  }

  return {
    handleLocaleSwitch,
    localeConfig: currentLocale,
  };
}