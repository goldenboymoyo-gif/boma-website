import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FallbackImage from './FallbackImage'
import { cn } from '../lib/utils'

/**
 * Full-bleed image break with an oversized pull-quote overlay.
 * Modelled on the "Quotes" / "Eyecatcher" module pattern used across
 * lingers.it — a slow, cinematic breather between content sections.
 */
export default function QuoteBreak({ image, quote, attribution, height = 'h-[70vh]', minHeight = 'min-h-[440px]' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className={cn('relative w-full overflow-hidden flex items-center justify-center', height, minHeight)}>
      <motion.div
        initial={{ scale: 1.15 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 2.4, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0"
      >
        <FallbackImage src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-boma-charcoal/55" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="block w-14 h-px bg-white/50 mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="quote-break-text text-2xl sm:text-3xl md:text-4xl leading-snug"
        >
          &ldquo;{quote}&rdquo;
        </motion.p>
        {attribution && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-xs font-sans uppercase tracking-[0.3em] text-white/70"
          >
            {attribution}
          </motion.p>
        )}
      </div>
    </section>
  )
}
