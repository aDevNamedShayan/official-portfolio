import { Variants } from "motion/react"

export const FadeWithBlur: Variants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0)' },
  exit: { opacity: 0, filter: 'blur(10px)' },
}

//Hero Section Child Variants
export const HSChildVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', x: '-100%' },
  visible: { opacity: 1, filter: 'blur(0)', x: 0, transition: { duration: .5, ease: [.32, .72, 0, .95]  } },
}

//Experience Card Child Variants
export const ECChildVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};