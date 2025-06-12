export const FadeWithBlur = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0)' },
  exit: { opacity: 0, filter: 'blur(10px)' },
}

export const HSChildVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', x: '-100%' },
  visible: { opacity: 1, filter: 'blur(0)', x: 0, transition: { duration: .5, ease: [.32, .72, 0, .95]  } },
}