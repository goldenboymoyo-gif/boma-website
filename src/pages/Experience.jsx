import { motion } from 'framer-motion'
import { Utensils, Music, Palette, Users, Star, Phone, Clock, ArrowRight, Sparkles, MapPin } from 'lucide-react'
import { experiences, siteData } from '../data/siteData'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import QuoteBreak from '../components/QuoteBreak'
import { useScrollReveal, useParallax } from '../hooks/useAnimations'
import FallbackImage from '../components/FallbackImage'
import { cn } from '../lib/utils'

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
      showVideo={false}
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
  const { ref: sectionRef } = useScrollReveal(0.1)

  return (
    <section id="timeline" className="section-padding py-24 md:py-32 bg-white border-t border-taupe/40">
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Your Evening Unfolds"
          subtitle="From the moment you arrive to the final farewell, every moment is crafted for wonder"
        />

        <div className="relative mt-16">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-taupe/60" />

          <div className="space-y-16 lg:space-y-24">
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
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <div ref={ref} className="relative lg:grid lg:grid-cols-2 lg:gap-20">
      {/* Center node */}
      <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-9 h-9 rounded-full bg-boma-charcoal border-2 border-taupe flex items-center justify-center"
        >
          <span className="text-taupe text-xs font-semibold tracking-wider">{String(index + 1).padStart(2, '0')}</span>
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={cn(
          'pl-14 lg:pl-0',
          isLeft
            ? 'lg:text-right lg:pr-24 lg:col-start-1'
            : 'lg:pl-24 lg:col-start-2'
        )}
      >
        <div className={cn('bg-[#F7F7F7] border border-taupe/40 px-7 py-7', isLeft && 'lg:text-right')}>
          <div className={cn('inline-flex items-center gap-3 mb-3', isLeft && 'lg:flex-row-reverse')}>
            <span className="kicker">{item.time}</span>
            <span className="deko-line" />
          </div>
          <h3 className="text-2xl md:text-3xl text-ink-strong mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </h3>
          <p className="text-ink leading-relaxed text-base lg:text-lg">{item.description}</p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          'mt-6 lg:mt-0 pl-14 lg:pl-0',
          isLeft
            ? 'lg:col-start-2 lg:pr-24 lg:pl-6'
            : 'lg:col-start-1 lg:pl-24 lg:pr-6'
        )}
      >
        <FallbackImage
          src={item.image}
          alt={item.title}
          className="w-full h-56 lg:h-64 object-cover"
        />
      </motion.div>
    </div>
  )
}

function Highlights() {
  const { ref } = useScrollReveal(0.1)

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Awaits You"
          subtitle="An evening of culinary delights and cultural immersion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {highlightsData.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="group bg-white border border-taupe/40 h-full p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,26,23,0.08)]"
              >
                <div className="w-14 h-14 rounded-full bg-boma-off-white border border-taupe/40 flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-boma-charcoal">
                  <Icon className="w-6 h-6 text-taupe-dark transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl text-ink-strong mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed font-serif text-ink/80">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
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
          loading="lazy"
          decoding="async"
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
      <QuoteBreak
        image="https://vfsc-umbraco.live.fireworkx.net/media/sq1pars5/welcoming-guests-to-the-boma-dinner-drum-show.jpg"
        quote="An absolutely magical evening! The drumming show was incredible and the food was outstanding. A must-do when visiting Victoria Falls."
        attribution="Sarah M. — London, UK"
      />
      <Timeline />
      <Highlights />
      <CallToAction />
    </main>
  )
}
