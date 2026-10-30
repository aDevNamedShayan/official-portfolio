import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import SLogo from '@/../public/Images/LetterS.svg'

export function CardSymbol({ icon, iconClassName }: { icon: StaticImport; iconClassName?: string }) {
    return (
        <>
            <Image src={SLogo} alt='S Logo' className='pointer-events-none w-4 invert lg:w-6 dark:invert-0' />
            <Image
                src={icon}
                alt='Tech Logo'
                className={cn('pointer-events-none w-4 rounded-xs lg:w-6', iconClassName)}
                quality={25}
            />
        </>
    )
}
