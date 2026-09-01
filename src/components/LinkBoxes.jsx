import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FallbackImage from './FallbackImage'
import { cn } from '../lib/utils'

/**
 * Card grid module — the React equivalent of lingers.it's "LinkBoxes"
 * section: an image (or icon) with a slow zoom on hover, a heading and
 * a short line of copy. Reused across pages for a consistent rhythm.
 */
export default function LinkBoxes({ items, columns = 3, light = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const cols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <div ref={ref} className={cn('grid grid-cols-1 gap-8', cols)}>
      {items.map((item, i) => {
        const Icon = item.icon
        const content = (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
            className="group h-full"
          >
            {item.image && (
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <FallbackImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/50 via-transparent to-transparent" />
              </div>
            )}
            {Icon && !item.image && (
              <Icon className={cn('w-7 h-7 mb-5', light ? 'text-white/70' : 'text-boma-rust')} />
            )}
            <h3 className={cn('text-lg md:text-xl mb-2', light ? 'text-white' : 'text-ink-strong')} style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              {item.title}
            </h3>
            <p className={cn('text-sm leading-relaxed font-serif', light ? 'text-white/70' : 'text-ink/80')}>
              {item.description}
            </p>
            {item.linkLabel && (
              <span className={cn(
                'inline-flex items-center gap-1.5 mt-4 text-xs font-sans uppercase tracking-[0.16em] transition-colors',
                light ? 'text-white/70 group-hover:text-white' : 'text-boma-rust group-hover:text-boma-rust-dark'
              )}>
                {item.linkLabel}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            )}
          </motion.div>
        )

        return item.to ? (
          <Link key={item.title} to={item.to} className="block h-full">
            {content}
          </Link>
        ) : (
          <div key={item.title} className="h-full">
            {content}
          </div>
        )
      })}
    </div>
  )
}
