import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
  const [useVideo, setUseVideo] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setUseVideo(window.innerWidth >= 768)
  }, [])

  const contentAlign = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    bottom: 'text-left items-end pb-20',
  }

  return (
    <section ref={ref} className={cn('relative flex items-center overflow-hidden', height, minHeight)}>
      {/* Video / Poster Background */}
      <div className="absolute inset-0">
        {showVideo && useVideo ? (
          <video
            src={video}
            poster={poster}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          />
        ) : poster ? (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover animate-ken-burns"
            loading="eager"
            decoding="async"
          />
        ) : null}

        {/* Show poster while video loads */}
        {showVideo && useVideo && !videoLoaded && poster && (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-[1]"
            loading="eager"
            decoding="async"
          />
        )}

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
              <span className="w-12 h-px bg-white/40" />
              <span className="kicker !text-white/80">
                {badge}
              </span>
              <span className="w-12 h-px bg-white/40" />
            </div>
          </motion.div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-6 tracking-tight leading-[0.95]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
            {titleAccent && (
              <span className="block mt-4">
                <span className="inline-block align-middle w-10 h-px bg-white/40 mr-4" />
                <span className="text-[#C89A3B]" style={{ fontFamily: 'var(--font-serif)' }}>{titleAccent}</span>
              </span>
            )}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className={cn(
              'flex flex-col sm:flex-row gap-4',
              align === 'center' && 'justify-center',
            )}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      {showScroll && isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70"
          aria-hidden
        >
          <ChevronDown className="w-6 h-6 scroll-cue" />
        </motion.div>
      )}
    </section>
  )
}
