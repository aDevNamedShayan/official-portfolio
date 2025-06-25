import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

import SLogo from '@/../public/Images/LetterS.svg'

export function CardSymbol({ icon, iconClassName }: { icon: StaticImport; iconClassName?: string; }) {
  return (
    <>
      <Image 
        src={SLogo} 
        alt="S Logo" 
        className="w-4 lg:w-6 pointer-events-none invert dark:invert-0"
      />
      <Image 
        src={icon} 
        alt="Tech Logo" 
        className={cn(
          "w-4 lg:w-6 pointer-events-none rounded-xs",
          iconClassName
        )}
        quality={25}
      />
    </>
  );
}