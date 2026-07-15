import { motion } from 'framer-motion'
import { Utensils, Music, Palette, Users, Star, Phone, Clock, ArrowRight, Sparkles, MapPin } from 'lucide-react'
import { experiences, siteData, timeline } from '../data/siteData'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal, useParallax } from '../hooks/useAnimations'
import FallbackImage from '../components/FallbackImage'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

const highlightsData = [
  { icon: Utensils, title: 'Four-Course Dinner', description: 'A feast of local and international cuisine from the Boma Braai and campfire' },
  { icon: Music, title: 'Interactive Drumming', description: 'Learn rhythms on a djembe drum with our world-renowned drumming troupe' },
  { icon: Palette, title: 'Cultural Arts', description: 'Traditional carvers, face painting and authentic African crafts on display' },
  { icon: Sparkles, title: 'Traditional Welcome', description: 'Dress in chitenge, hand washing ceremony and local brew tasting' },
  { icon: Users, title: 'Dance Performances', description: 'Energetic cultural dance shows that bring African traditions to life' },
  { icon: Star, title: 'Acapella Serenade', description: 'The evening concludes with soulful singers at your table' },
]

function HeroBanner() {
  return (
    <VideoHero
      badge="Zimbabwe's Premier Dining Experience"
      title="The Boma"
      titleAccent="Experience"
      subtitle="A legendary fusion of mouth-watering cuisine, energetic dance, interactive drumming and traditional storytelling — an evening that stays with you long after you leave."
      poster="https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png"
    >
      <a href={siteData.bookingUrl} className="btn-primary">
        Book Your Evening
        <ArrowRight className="w-4 h-4" />
      </a>
      <a href="#timeline" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-boma-charcoal hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5">
        View Timeline
      </a>
    </VideoHero>
  )
}

function Introduction() {
  const { ref, isInView } = useScrollReveal()
  const { ref: parallaxRef, offset } = useParallax(0.15)

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <SectionHeading
              title="An Unforgettable Evening"
              subtitle="Where African tradition meets world-class dining"
              center={false}
            />
            <p className="text-boma-charcoal/80 leading-relaxed mb-6 text-base md:text-lg">
              It's fair to say the Boma – Dinner & Drum Show, conveniently located on the estate, is a legendary dining and entertainment experience – over a million people can't be wrong.
            </p>
            <p className="text-boma-charcoal/70 leading-relaxed mb-6 text-base">
              The evening offers an unforgettable fusion of mouth-watering local cuisine, energetic dance performances and interactive drumming. It has over the years firmly established itself as a Victoria Falls "must-do" experience, providing a unique cultural experience that bombards the senses with the tastes, sights and sounds of Africa.
            </p>
            <p className="text-boma-charcoal/70 leading-relaxed mb-8 text-base">
              The four-course, buffet-style meal includes a delicious platter of nibbles, soup from the campfire, a braai (barbecue) buffet, followed by a selection of desserts. One of the Boma's trademark moments is when diners need to decide – do I head to the Mopane Worm station and try one of these apparently delicious tidbits? Decide yes and we'll reward your adventurousness with a certificate!
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-boma-rust" />
                <div>
                  <p className="text-sm font-semibold text-boma-charcoal">Hours</p>
                  <p className="text-sm text-boma-charcoal/75">{siteData.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-boma-rust" />
                <div>
                  <p className="text-sm font-semibold text-boma-charcoal">Capacity</p>
                  <p className="text-sm text-boma-charcoal/75">Up to 320 guests (dry season)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-boma-rust" />
                <div>
                  <p className="text-sm font-semibold text-boma-charcoal">Location</p>
                  <p className="text-sm text-boma-charcoal/75">{siteData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <FallbackImage
                src="https://vfsc-umbraco.live.fireworkx.net/media/ltgcv1ra/the-boma-dinner-drum-show-7.png"
                alt="The Boma cultural performance"
                className="w-full h-[400px] md:h-[550px] object-cover"
                style={{ transform: `translateY(${offset * 0.3}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const { ref: sectionRef, isInView: sectionInView } = useScrollReveal(0.1)

  return (
    <section id="timeline" className="section-padding py-24 md:py-32 bg-boma-charcoal relative overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Your Evening Unfolds"
          subtitle="From the moment you arrive to the final farewell, every moment is crafted for wonder"
          light
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-boma-rust/60 via-boma-rust/40 to-boma-rust/10 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <TimelineItem key={exp.id} item={exp} index={i} isLeft={isLeft} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index, isLeft }) {
  const { ref, isInView } = useScrollReveal(0.2)

  return (
    <div ref={ref} className={cn('relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pb-16')}>
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-12 rounded-full bg-boma-charcoal border-2 border-boma-rust flex items-center justify-center"
          >
            <span className="text-boma-rust text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
          </motion.div>
      </div>

      {isLeft ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:text-right lg:pr-16 mb-8 lg:mb-0"
          >
            <div className="bg-white py-6 px-5 inline-block lg:ml-auto">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-boma-rust/10 border border-boma-rust/20">
                <Clock className="w-3.5 h-3.5 text-boma-rust" />
                <span className="text-boma-rust text-sm font-semibold">{item.time}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-boma-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p className="text-boma-charcoal/60 leading-relaxed text-base">{item.description}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex justify-start pl-16"
          >
            <div className="w-full h-32 bg-boma-grey/10 flex items-center justify-center">
              <div className="text-boma-rust/20 text-sm tracking-widest uppercase">{item.time}</div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex justify-end pr-16"
          >
            <div className="w-full h-32 bg-boma-grey/10 flex items-center justify-center">
              <div className="text-boma-rust/20 text-sm tracking-widest uppercase">{item.time}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:pl-16 mb-8 lg:mb-0"
          >
            <div className="bg-white py-6 px-5">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-boma-rust/10 border border-boma-rust/20">
                <Clock className="w-3.5 h-3.5 text-boma-rust" />
                <span className="text-boma-rust text-sm font-semibold">{item.time}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-boma-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p className="text-boma-charcoal/60 leading-relaxed text-base">{item.description}</p>
            </div>
          </motion.div>
        </>
      )}

      <div className="lg:hidden flex justify-center mt-4">
        <div className="w-px h-6 bg-boma-rust/20" />
      </div>
    </div>
  )
}

function Highlights() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Awaits You"
          subtitle="An evening of culinary delights and cultural immersion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {highlightsData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white py-8 px-6 transition-all duration-500"
            >
              <item.icon className="w-7 h-7 text-boma-rust-dark mb-6" />
              <h3 className="text-xl font-bold text-boma-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p className="text-boma-charcoal/70 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-charcoal relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-boma-charcoal/80" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-boma-rust text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
            Book Now
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Reserve Your Place at{' '}
            <span className="text-boma-rust">The Boma</span>
          </h2>

          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'var(--font-accent)' }}>
            An evening you will treasure forever — book now and join us for dinner, drumming and an unforgettable African experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={siteData.bookingUrl} className="btn-primary">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteData.phone}`}
              className="btn-secondary"
            >
              <Phone className="w-4 h-4" />
              {siteData.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <main>
      <HeroBanner />
      <Introduction />
      <Timeline />
      <Highlights />
      <CallToAction />
    </main>
  )
}
