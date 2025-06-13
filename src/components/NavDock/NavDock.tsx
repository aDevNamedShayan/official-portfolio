import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBraces,
  IconBriefcase,
  IconHome,
  IconPhone,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export function NavDock() {
  const t = useTranslations('Nav')
  const links = [
    {
      title: t('home'),
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: t('skill'),
      icon: <IconBraces className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: t('exp'),
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#experiences",
    },
    {
      title: t('contact'),
      icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ];
  return (
    <FloatingDock
      desktopClassName="hidden lg:flex lg:fixed bottom-3 right-1/2 translate-x-1/2 z-[10]"
      mobileClassName="block lg:hidden fixed bottom-6 right-6 z-[10]" // only for demo, remove for production
      items={links}
    />
  );
}
