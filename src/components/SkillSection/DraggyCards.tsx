import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { cn } from "@/lib/utils";

import SLogo from '@/assets/LetterS.svg'
import NextIcon from '@/assets/NextJs/Icon.svg'
import NextLogo from '@/assets/NextJs/Logo.svg'
import JavaScriptIcon from '@/assets/JavaScript/Icon.svg'
import TypeScriptIcon from '@/assets/TypeScript/Icon.svg'
import ReactIcon from '@/assets/React/Icon.svg'
import ReactLogo from '@/assets/React/Logo.svg'
import TailwindIcon from '@/assets/Tailwind/Icon.svg'
import TailwindLogo from '@/assets/Tailwind/Logo.svg'

export function DraggyCards() {
  const items = [
    {
      id: '1',
      logo: NextLogo,
      icon: NextIcon,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      id: '2',
      logo: NextLogo,
      icon: NextIcon,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      id: '3',
      logo: TailwindLogo,
      icon: TailwindIcon,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      id: '5',
      logo: TypeScriptIcon,
      icon: TypeScriptIcon,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      id: '6',
      logo: JavaScriptIcon,
      icon: JavaScriptIcon,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      id: '4',
      logo: ReactLogo,
      icon: ReactIcon,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      id: '7',
      logo: NextLogo,
      icon: NextIcon,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      logoClassName: 'dark:invert'
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          {/* <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
           */}
          <aside className="w-fit h-1/5 flex flex-col justify-center items-center gap-2">
            <Image 
              src={SLogo} 
              alt="S Logo" 
              width={24} 
              className="pointer-events-none invert dark:invert-0"
            />
            <Image 
              src={item.icon} 
              alt="Tech Logo" 
              width={24} 
              className="pointer-events-none invert dark:invert-0 rounded-xs" //may need change in light mode
            />
          </aside>
          <main className="w-full h-1/2 flex items-center">
            <Image 
              src={item.logo} 
              alt="Tech Logo" 
              className={cn(
                'pointer-events-none h-full rounded-xl', 
                item.logoClassName,
              )} //may need change in light mode
            />
          </main>
          <aside className="w-fit h-1/5 self-end flex flex-col justify-center items-center gap-2 rotate-180">
            <Image 
              src={SLogo} 
              alt="S Logo" 
              width={24} 
              className="pointer-events-none invert dark:invert-0"
            />
            <Image 
              src={item.icon} 
              alt="Tech Logo" 
              width={24} 
              className="pointer-events-none invert dark:invert-0 rounded-xs" //may need change in light mode
            />
          </aside>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
