import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IconArrowSharpTurnRight } from '@tabler/icons-react'

import { GridBackground } from '@/components/ui/Backgrounds/grid-background'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import { useLocaleDetector } from '@/hooks/useLocaleDetector'
import { cn } from '@/lib/utils'
import { caveat, harmattan } from '@/styles/fonts'

import { CardSymbol } from './CardSymbol'
import { DraggableCards } from './DraggableCards'

export function DraggyCards() {
    const t = useTranslations('SkillsSection')
    const isEn = useLocaleDetector()

    return (
        <DraggableCardContainer
            className={cn('relative flex h-[110vh] min-h-160 w-full items-center justify-center', {
                [caveat.className]: isEn,
                [harmattan.className]: !isEn
            })}
        >
            <GridBackground />
            <p className='pointer-events-none absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 select-none md:text-4xl dark:text-neutral-800'>
                {t('hiddenText')}
            </p>
            <p className='pointer-events-none absolute top-[5%] right-[10%] flex w-fit items-center gap-4 text-lg font-bold text-neutral-300 select-none [direction:ltr] md:text-3xl dark:text-neutral-800'>
                {t('drag')}
                <IconArrowSharpTurnRight className='size-8 shrink-0 origin-left rotate-90' />
            </p>
            {DraggableCards.map((card) => (
                <DraggableCardBody key={card.id} className={card.className}>
                    <aside className='flex h-1/5 w-fit flex-col items-center justify-center gap-2'>
                        <CardSymbol icon={card.icon} iconClassName={card.iconClassName} />
                    </aside>

                    <main className='flex h-1/2 w-full items-center'>
                        <Image
                            src={card.logo}
                            alt='Tech Logo'
                            className={cn('pointer-events-none size-full rounded-xl', card.logoClassName)}
                        />
                    </main>

                    <aside className='flex h-1/5 w-fit rotate-180 flex-col items-center justify-center gap-2 self-end'>
                        <CardSymbol icon={card.icon} iconClassName={card.iconClassName} />
                    </aside>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    )
}
