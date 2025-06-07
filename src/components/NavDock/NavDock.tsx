import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBraces,
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconCode,
  IconExchange,
  IconHome,
  IconNewSection,
  IconPhone,
  IconTerminal2,
} from "@tabler/icons-react";

export function NavDock() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "My Skills",
      icon: <IconBraces className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "My Experiences",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#experiences",
    },
    {
      title: "Contact Me",
      icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    // {
    //   title: "Twitter",
    //   icon: (
    //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <FloatingDock
      desktopClassName="fixed bottom-6 right-1/2 translate-x-1/2 z-[10]"
      // mobileClassName="translate-y-20" // only for demo, remove for production
      items={links}
    />
  );
}
