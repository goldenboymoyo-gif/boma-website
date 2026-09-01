import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useAnimations'
import { cn } from '../lib/utils'

export default function SectionHeading({ title, subtitle, center = true, light = false, className }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <div ref={ref} className={cn(center && 'text-center', 'mb-12 md:mb-16', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-4"
      >
        <div className={cn(
          'inline-flex items-center gap-3 mb-4',
          center && 'justify-center'
        )}>
          <span className={cn('w-8 h-px', light ? 'bg-white/40' : 'bg-taupe')} />
          <span className={cn('kicker', light && '!text-white/70')}>
            The Boma
          </span>
          <span className={cn('w-8 h-px', light ? 'bg-white/40' : 'bg-taupe')} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          'section-heading',
          light ? 'text-white' : 'text-ink-strong'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className={cn(
            'section-subheading mt-4 font-serif text-lg md:text-xl italic',
            center && 'mx-auto',
            light ? 'text-white/80' : 'text-ink'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}