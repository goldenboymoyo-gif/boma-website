import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '../lib/utils'

export default function VideoHero({
  video = 'https://vfsc-umbraco.live.fireworkx.net/media/q4ont1ql/the-boma-dinner-and-drum-show.mp4',
  poster,
  badge,
  title,
  titleAccent,
  subtitle,
  children,
  height = 'h-screen',
  minHeight = 'min-h-[600px]',
  align = 'center',
  overlay = 'from-boma-charcoal/80 via-boma-charcoal/50 to-boma-charcoal/85',
  showScroll = true,
  showVideo = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const contentAlign = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    bottom: 'text-left items-end pb-20',
  }

  return (
    <section ref={ref} className={cn('relative flex items-center overflow-hidden', height, minHeight)}>
      {/* Video Background */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            src={video}
            poster={poster}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : poster ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        ) : null}
        <div className={cn('absolute inset-0 bg-gradient-to-b', overlay)} />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className={cn(
        'relative z-10 flex flex-col section-padding w-full max-w-7xl mx-auto',
        contentAlign[align],
      )}>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={cn(
              'inline-flex items-center gap-3 mb-6',
              align === 'center' && 'mx-auto',
            )}>
              <span className="w-12 h-px bg-boma-rust/50" />
              <span className="text-xs uppercase tracking-[0.35em] text-boma-rust/90 font-medium">
                {badge}
              </span>
              <span className="w-12 h-px bg-boma-rust/50" />
            </div>
          </motion.div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.95]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
            {titleAccent && (
              <span className="text-boma-rust block mt-2">{titleAccent}</span>
            )}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={cn(
              'flex flex-col sm:flex-row gap-4',
              align === 'center' && 'justify-center',
            )}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
