import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Users, BookOpen, ChevronRight, Clock, Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteData, timeline, experiences, galleryImages } from '../data/siteData'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useAnimations'
import FallbackImage from '../components/FallbackImage'
import { cn } from '../lib/utils'

const features = [
  {
    title: 'Interactive Drumming',
    icon: Music,
    description:
      'Each guest is handed a djembe drum and guided by our talented drummers through infectious African rhythms. Feel the beat pulse through you as the entire Boma roars in unison — a truly communal experience that connects strangers through the universal language of rhythm.',
    image: galleryImages.find((img) => img.id === 13)?.src,
  },
  {
    title: 'Cultural Dance',
    icon: Users,
    description:
      'Our troupe of energetic dancers brings centuries of tradition to life with vibrant costumes, hypnotic footwork and joyful performances. From the powerful Indlamu warrior dance to the graceful Umgidi celebration, every movement tells a story of heritage and pride.',
    image: galleryImages.find((img) => img.id === 2)?.src,
  },
  {
    title: 'Storytelling & Traditions',
    icon: BookOpen,
    description:
      'Gathered around the flickering campfire, our storytellers weave ancient tales of the Shona and Ndebele people. Learn about local customs, try a mopane worm tasting challenge, get your face painted in traditional motifs and discover the rich cultural tapestry of Zimbabwe.',
    image: galleryImages.find((img) => img.id === 7)?.src,
  },
]

const whatToExpect = [
  {
    step: 1,
    title: 'Traditional Welcome',
    description: 'Be greeted by dancers in full cultural attire as you enter The Boma enclosure, immersing you instantly in the African atmosphere.',
  },
  {
    step: 2,
    title: 'Dress the Part',
    description: 'Receive your own chitenge wrap — a colourful African fabric — to wear throughout the evening, making you part of the spectacle.',
  },
  {
    step: 3,
    title: 'Face Painting',
    description: 'Add a touch of Boma flair with traditional face paint designs inspired by tribal art and wildlife patterns.',
  },
  {
    step: 4,
    title: 'Take Your Seat',
    description: 'Settle in at your table as the performances begin around you, building energy throughout the four-course dinner.',
  },
  {
    step: 5,
    title: 'Join the Drum Circle',
    description: 'The crescendo of the evening — grab your djembe and drum alongside our performers in an unforgettable communal rhythm session.',
  },
]

export default function Entertainment() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0)
  const { ref: featuresRef, isInView: featuresInView } = useScrollReveal()
  const { ref: expectRef, isInView: expectInView } = useScrollReveal()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <VideoHero
        badge="The Boma"
        title="Entertainment"
        subtitle="An explosion of rhythm, colour and tradition that will leave your heart racing and your spirit soaring."
        poster="https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png"
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="left"
        overlay="from-boma-charcoal/90 via-boma-charcoal/60 to-boma-charcoal/30"
        showScroll={false}
      />

      {/* Features */}
      <section className="py-24 bg-boma-off-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto section-padding">
          <SectionHeading
            title="The Performances"
            subtitle="Three pillars of African culture come together for one extraordinary evening"
          />

          <div className="space-y-32 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isReversed = index % 2 !== 0
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
                    isReversed && 'lg:grid-flow-dense'
                  )}
                >
                  <div className={cn(isReversed && 'lg:col-start-2')}>
                    <Icon size={24} className="text-boma-rust mb-6" />
                    <h3 className="text-3xl md:text-4xl text-boma-charcoal mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-boma-charcoal/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                  <div className={cn('relative', isReversed && 'lg:col-start-1')}>
                    <div className="relative rounded-sm overflow-hidden aspect-[4/3] group">
                      <FallbackImage
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/40 to-transparent" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-boma-rust/20 rounded-sm -z-10" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-boma-rust/20 rounded-sm -z-10" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-boma-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(181,84,62,0.15),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <SectionHeading
            title="The Evening Timeline"
            subtitle="Every moment is carefully choreographed for maximum impact"
            light
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            {/* Timeline nav */}
            <div className="space-y-2">
              {timeline.map((item, index) => (
                <motion.button
                  key={item.time}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveTimelineIndex(index)}
                  className={cn(
                    'w-full text-left px-5 py-4 transition-all duration-300 flex items-center gap-4',
                    activeTimelineIndex === index
                      ? 'border-l-2 border-boma-rust pl-4'
                      : 'border-l-2 border-transparent hover:border-white/20 pl-4'
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors',
                      activeTimelineIndex === index
                        ? 'bg-boma-rust text-white'
                        : 'bg-white/10 text-white/75'
                    )}
                  >
                    {item.time.replace(' PM', '')}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        'text-sm font-semibold transition-colors',
                        activeTimelineIndex === index ? 'text-boma-rust' : 'text-white/85'
                      )}
                    >
                      {item.event}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Timeline detail */}
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimelineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-gold rounded-sm p-10 md:p-14"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Clock size={20} className="text-boma-rust" />
                    <span className="text-boma-rust text-sm font-semibold uppercase tracking-wider">
                      {timeline[activeTimelineIndex].time}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl text-white mb-4">
                    {timeline[activeTimelineIndex].event}
                  </h3>
                  <p className="text-white/85 text-lg leading-relaxed">
                    {timeline[activeTimelineIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-boma-off-white" ref={expectRef}>
        <div className="max-w-7xl mx-auto section-padding">
          <SectionHeading
            title="What to Expect"
            subtitle="From the moment you arrive, you are part of something extraordinary"
          />

          <div className="mt-16 max-w-3xl mx-auto">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -40 }}
                animate={expectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex gap-6 md:gap-10 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-boma-rust flex items-center justify-center text-boma-charcoal font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  {index < whatToExpect.length - 1 && (
                    <div className="w-px flex-1 bg-boma-rust/20 my-2" />
                  )}
                </div>
                <div className={cn('pb-12', index === whatToExpect.length - 1 && 'pb-0')}>
                  <h4 className="text-xl text-boma-charcoal mb-2">
                    {item.title}
                  </h4>
                  <p className="text-boma-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-boma-charcoal via-boma-charcoal to-boma-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={galleryImages.find((img) => img.id === 9)?.src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-boma-charcoal/80" />
        </div>
        <div className="max-w-4xl mx-auto section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="text-boma-rust mx-auto mb-6" size={32} />
            <h2 className="section-heading text-white mb-6">
              Ready for an Unforgettable Night?
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10">
              Secure your place at The Boma – Dinner & Drum Show and experience the magic of Africa through food, rhythm and tradition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={siteData.bookingUrl} className="btn-primary">
                Book Your Experience
                <ArrowRight size={16} />
              </a>
              <Link to="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
