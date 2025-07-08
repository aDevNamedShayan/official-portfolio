import { IconDeviceLaptop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeConfig() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('Nav')
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const themeValues = {
    system: {
      icon: <IconDeviceLaptop className="size-full text-neutral-500 dark:text-neutral-300" />,
      title: t('sysTheme'),
      next: 'dark'
    },
    dark: {
      icon: <IconMoon className="size-full text-neutral-500 dark:text-neutral-300" />,
      title: t('darkTheme'),
      next: 'light'
    },
    light: {
      icon: <IconSun className="size-full text-neutral-500 dark:text-neutral-300" />,
      title: t('lightTheme'),
      next: 'system'
    }
  }
  
  const currentConfig = themeValues[theme as keyof typeof themeValues];

  const handleThemeChange = () => {
    setTheme(currentConfig.next)
  }

  return {
    mounted,
    handleThemeChange,
    themeConfig: currentConfig
  };
}