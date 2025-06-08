export const FadeWithBlur = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0)' },
  exit: { opacity: 0, filter: 'blur(10px)' },
}

export const FadeOp = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}