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
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <div className={cn(
          'inline-flex items-center gap-3 mb-4',
          center && 'justify-center'
        )}>
          <span className={cn('w-8 h-px', light ? 'bg-boma-rust/40' : 'bg-boma-rust')} />
          <span className={cn(
            'text-xs uppercase tracking-[0.3em] font-medium',
            light ? 'text-boma-rust/70' : 'text-boma-rust-dark'
          )}>
            The Boma
          </span>
          <span className={cn('w-8 h-px', light ? 'bg-boma-rust/40' : 'bg-boma-rust')} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={cn(
          'section-heading',
          light ? 'text-white' : 'text-boma-charcoal'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            'section-subheading mt-4',
            center && 'mx-auto',
            light ? 'text-white/80' : ''
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
