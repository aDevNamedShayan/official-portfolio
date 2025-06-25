import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconArrowSharpTurnRight } from "@tabler/icons-react";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { cn } from "@/lib/utils";
import { GridBackground } from "@/components/ui/Backgrounds/grid-background";
import { caveat, harmattan } from "@/styles/fonts";
import { useLocaleDetector } from "@/hooks/useLocaleDetector";
import { CardSymbol } from "./CardSymbol";
import { DraggableCards } from "./DraggableCards";

export function DraggyCards() {
  const t = useTranslations('SkillsSection')
  const isEn = useLocaleDetector()

  return (
    <DraggableCardContainer 
      className={cn(
        "relative flex h-[110vh] min-h-160 w-full items-center justify-center",
        { 
          [caveat.className] : isEn,
          [harmattan.className] : !isEn
        }
      )}
    >
      <GridBackground />
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 pointer-events-none select-none">
        {t('hiddenText')}
      </p>
      <p className="absolute top-[5%] right-[10%] w-fit text-lg font-bold text-neutral-300 md:text-3xl dark:text-neutral-800 flex items-center gap-4 pointer-events-none select-none [direction:ltr]">
        {t('drag')}
        <IconArrowSharpTurnRight className="shrink-0 rotate-90 origin-left size-8" />
      </p>
      {DraggableCards.map((card) => (
        <DraggableCardBody key={card.id} className={card.className}>
          <aside className="w-fit h-1/5 flex flex-col justify-center items-center gap-2">
            <CardSymbol icon={card.icon} iconClassName={card.iconClassName} />
          </aside>
          
          <main className="w-full h-1/2 flex items-center">
            <Image 
              src={card.logo} 
              alt="Tech Logo" 
              className={cn(
                'pointer-events-none size-full rounded-xl', 
                card.logoClassName,
              )}
            />
          </main>
          
          <aside className="w-fit h-1/5 self-end flex flex-col justify-center items-center gap-2 rotate-180">
            <CardSymbol icon={card.icon} iconClassName={card.iconClassName} />
          </aside>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
