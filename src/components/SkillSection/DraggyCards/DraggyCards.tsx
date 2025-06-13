import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconArrowSharpTurnRight } from "@tabler/icons-react";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { cn } from "@/lib/utils";
import { GridBackground } from "@/components/ui/Backgrounds/grid-background";
import { caveat, harmattan } from "@/styles/fonts";

import NextIcon from '@/assets/NextJs/Icon.svg'
import NextLogo from '@/assets/NextJs/Logo.svg'
import JavaScriptIcon from '@/assets/JavaScript/Icon.svg'
import TypeScriptIcon from '@/assets/TypeScript/Icon.svg'
import ReactIcon from '@/assets/React/Icon.svg'
import ReactLogo from '@/assets/React/Logo.svg'
import TailwindIcon from '@/assets/Tailwind/Icon.svg'
import TailwindLogo from '@/assets/Tailwind/Logo.svg'
import ReactHookFormIcon from '@/assets/ReactHookForm/Icon.svg'
import ReactHookFormLogo from '@/assets/ReactHookForm/Logo.svg'
import TanstackQueryIcon from '@/assets/Tanstack Query/Icon.png'
import TanstackQueryLogo from '@/assets/Tanstack Query/Logo.png'
import ZodIcon from '@/assets/Zod/Icon.svg'
import ZodLogo from '@/assets/Zod/Logo.svg'
import GitIcon from '@/assets/Git/Icon.svg'
import GitLogo from '@/assets/Git/Logo.svg'
import { useLocaleDetector } from "@/hooks/useLocaleDetector";
import { CardSymbol } from "./CardSymbol";

const items = [
  {
    id: '1',
    logo: GitLogo,
    icon: GitIcon,
    className: "absolute top-[40%] -translate-y-1/2 left-[49%] -translate-x-1/2 rotate-[-4deg]",
  },
  {
    id: '2',
    logo: ZodLogo,
    icon: ZodIcon,
    className: "absolute top-[39%] -translate-y-1/2 right-[33%] translate-x-1/2 rotate-[-8deg]",
  },
  {
    id: '3',
    logo: ReactHookFormLogo,
    icon: ReactHookFormIcon,
    className: "absolute top-[35%] -translate-y-1/2 left-[33%] -translate-x-1/2 rotate-[4deg]",
  },
  {
    id: '4',
    logo: TanstackQueryLogo,
    icon: TanstackQueryIcon,
    logoClassName: 'object-contain',
    className: "absolute top-[60%] -translate-y-1/2 left-[60%] -translate-x-1/2 rotate-[-7deg]",
  },
  {
    id: '5',
    logo: TailwindLogo,
    icon: TailwindIcon,
    className: "absolute top-[60%] -translate-y-1/2 left-[43%] -translate-x-1/2 rotate-[5deg]",
  },
  {
    id: '6',
    logo: TypeScriptIcon,
    icon: TypeScriptIcon,
    className: "absolute top-[48%] -translate-y-1/2 left-[65%] -translate-x-1/2 rotate-[10deg]",
  },
  {
    id: '7',
    logo: JavaScriptIcon,
    icon: JavaScriptIcon,
    className: "absolute top-[53%] -translate-y-1/2 left-[30%] -translate-x-1/2 rotate-[2deg]",
  },
  {
    id: '8',
    logo: ReactLogo,
    icon: ReactIcon,
    className: "absolute top-[40%] -translate-y-1/2 left-[30%] -translate-x-1/2 rotate-[-5deg]",
  },
  {
    id: '9',
    logo: NextLogo,
    icon: NextIcon,
    logoClassName: 'dark:invert',
    iconClassName: 'invert dark:invert-0',
    className: "absolute top-[49%] -translate-y-1/2 left-[48%] -translate-x-1/2 rotate-[8deg]",
    // className: "absolute top-40 left-[39%] rotate-[8deg]",
  },
];

export function DraggyCards() {
  const t = useTranslations('SkillsSection')
  const isEn = useLocaleDetector()

  return (
    <DraggableCardContainer className="relative flex h-[110vh] min-h-160 w-full items-center justify-center">
      <GridBackground />
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 pointer-events-none">
        {t('hiddenText')}
      </p>
      <p 
        className={cn(
          "absolute top-[5%] right-[10%] w-fit text-lg font-bold text-neutral-300 md:text-3xl dark:text-neutral-800 flex items-center gap-4 pointer-events-none [direction:ltr]",
          { 
            [caveat.className] : isEn,
            [harmattan.className] : !isEn
          }
        )}
      >
        {t('drag')}
        <IconArrowSharpTurnRight className="shrink-0 rotate-90 origin-left size-8" />
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          <aside className="w-fit h-1/5 flex flex-col justify-center items-center gap-2">
            <CardSymbol icon={item.icon} iconClassName={item.iconClassName} />
          </aside>

          <main className="w-full h-1/2 flex items-center">
            <Image 
              src={item.logo} 
              alt="Tech Logo" 
              className={cn(
                'pointer-events-none size-full rounded-xl', 
                item.logoClassName,
              )}
            />
          </main>

          <aside className="w-fit h-1/5 self-end flex flex-col justify-center items-center gap-2 rotate-180">
            <CardSymbol icon={item.icon} iconClassName={item.iconClassName} />
          </aside>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
