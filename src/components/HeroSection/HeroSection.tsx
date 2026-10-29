import { cn } from '@/lib/utils'

import { FloatingShayan } from './floatingShayan'
import { Introduction } from './introduction'
import { Silk } from '../ui/Backgrounds/silk'

export function HeroSection() {
    return (
        <section
            id='home'
            className={cn(
                'relative flex h-[110svh] min-h-[42rem] flex-col-reverse items-center justify-around gap-0 py-8 lg:flex-row',
                'bg-gradient-to-b from-transparent from-90% to-lightBg to-100% dark:to-darkBg'
            )}
        >
            <Silk color='#00ffa6' noiseIntensity={0} />
            <Introduction />
            <FloatingShayan />
        </section>
    )
}
