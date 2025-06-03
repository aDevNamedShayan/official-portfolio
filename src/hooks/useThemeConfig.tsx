import { IconDeviceLaptop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeConfig() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const themeValues = {
    system: {
      icon: <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      title: 'System Theme',
      next: 'dark'
    },
    dark: {
      icon: <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      title: 'Dark Theme',
      next: 'light'
    },
    light: {
      icon: <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      title: 'Light Theme',
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