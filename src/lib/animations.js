export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const slideInFromLeft = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const slideInFromRight = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const parallax = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 1.2, ease: 'linear' },
}

export const blurReveal = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const textReveal = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
}

export const heroTextReveal = {
  initial: { y: 120, opacity: 0, skewY: 5 },
  animate: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const imageReveal = {
  initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
}

export const whileHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const whileTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

export const transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
}

/* Lingers-inspired slow, cinematic reveal (~1.4-2s, gentle deceleration) */
export const cinematicReveal = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] },
}

export const cinematicFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 2, ease: [0.19, 1, 0.22, 1] },
}
