import { motion } from 'framer-motion'
import { Leaf, AlertTriangle, Phone, ArrowRight, Info } from 'lucide-react'
import { menuItems, siteData } from '../data/siteData'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import QuoteBreak from '../components/QuoteBreak'
import { useScrollReveal } from '../hooks/useAnimations'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

const menuSections = [
  { key: 'starters', ...menuItems.starters },
  { key: 'salad', ...menuItems.salad },
  { key: 'soup', ...menuItems.soup },
  { key: 'mainCourse', ...menuItems.mainCourse },
  { key: 'desserts', ...menuItems.desserts },
  { key: 'beverages', ...menuItems.beverages },
]

const dietaryBadge = {
  v: { label: 'Vegetarian', icon: Leaf, color: 'bg-green-50 text-green-700 border-green-200' },
  n: { label: 'Contains Nuts', icon: AlertTriangle, color: 'bg-amber-50 text-amber-700 border-amber-200' },
}

function HeroBanner() {
  return (
    <VideoHero
      badge="Four-Course Dining"
      title="Our"
      titleAccent="Menu"
      subtitle="A four-course feast of local and international cuisine — from the Boma Braai and campfire to a decadent dessert buffet."
      poster="https://vfsc-umbraco.live.fireworkx.net/media/1i2nzih5/victoria-falls-safari-lodge-13.png"
      showVideo={false}
    >
      <a href="#menu" className="btn-primary">
        Explore the Menu
        <ArrowRight className="w-4 h-4" />
      </a>
    </VideoHero>
  )
}

function Introduction() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            title="A Feast for the Senses"
            subtitle="Every dish tells a story of African heritage and culinary artistry"
          />

          <p className="text-boma-charcoal/80 leading-relaxed text-base md:text-lg max-w-3xl mx-auto mt-8">
            Your evening begins with a shared starter platter, followed by a choice of soup by the campfire.
            The main course features a lavish barbeque buffet with game meats, traditional hunter's stews,
            and more — all before finishing with a decadent dessert bar. Every course is designed to take you
            on a journey through the flavours of Africa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 px-4 py-2">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700 font-medium">Vegetarian Options Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <AlertTriangle className="w-4 h-4 text-boma-rust-dark" />
              <span className="text-sm text-boma-rust-dark font-medium">Halal &amp; Kosher Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MenuCard({ section, index }) {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="relative h-full bg-[#F7F7F7] border border-taupe/50 p-8 md:p-10 transition-all duration-500 hover:border-taupe-dark/60 hover:shadow-[0_16px_40px_rgba(28,26,23,0.06)]"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-boma-rust/50" />
          <span className="text-xs tracking-[0.22em] uppercase text-taupe-dark font-semibold">{section.title}</span>
        </div>
        <p className="text-sm text-ink/75 italic font-serif" style={{ fontFamily: 'var(--font-accent)' }}>
          {section.description}
        </p>
        <div className="mt-5 h-px bg-gradient-to-r from-taupe/60 via-taupe/30 to-transparent" />
      </div>

      {section.items && section.items.length > 0 ? (
        <ul className="space-y-5">
          {section.items.map((item, i) => (
            <li key={i} className="group">
              <div className="flex items-end justify-between gap-4">
                <h4 className="text-base font-semibold text-ink-strong leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.name}
                </h4>
                {item.dietary && item.dietary.length > 0 && (
                  <div className="flex items-center gap-1 shrink-0 pb-1">
                    {item.dietary.map((d) => {
                      const badge = dietaryBadge[d]
                      if (!badge) return null
                      return (
                        <span
                          key={d}
                          className={cn('inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-bold', badge.color)}
                          title={badge.label}
                        >
                          {d}
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed mt-1 font-serif">{item.description}</p>
              {i < section.items.length - 1 && (
                <div className="mt-4 border-b border-dotted border-taupe/50" />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-4">
          <p className="text-sm text-ink/70 leading-relaxed font-serif">{section.description}</p>
          {section.dietary && section.dietary.length > 0 && (
            <div className="flex items-center gap-2 mt-3">
              {section.dietary.map((d) => {
                const badge = dietaryBadge[d]
                if (!badge) return null
                return (
                  <span
                    key={d}
                    className={cn('inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 font-medium', badge.color)}
                    title={badge.label}
                  >
                    {d}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

function MenuSections() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section id="menu" className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeading
          title="The Boma Menu"
          subtitle="Each course is a celebration of African flavour"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {menuSections.map((section, i) => (
            <MenuCard key={section.key} section={section} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3">
            <div className="flex items-center gap-4 text-sm text-boma-charcoal/60">
              <span className="flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-green-700">v</span>
                Vegetarian
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-amber-700">n</span>
                Contains Nuts
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function KosherNotice() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="section-padding py-16 md:py-20 bg-boma-charcoal">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-10 rounded-sm glass-gold"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-boma-rust/20 flex items-center justify-center">
              <Info className="w-6 h-6 text-boma-rust" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Kosher Dietary Requirements
              </h3>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                Guests requiring kosher meals are kindly requested to inform us at least 72 hours prior to their visit.
                Our kitchen team will happily prepare a special kosher meal to ensure you can enjoy the full Boma
                dining experience. Please contact us at{' '}
                <a href={`mailto:${siteData.email}`} className="text-boma-rust hover:text-boma-rust-light transition-colors underline underline-offset-2">
                  {siteData.email}
                </a>
                {' '}or call{' '}
                <a href={`tel:${siteData.phone}`} className="text-boma-rust hover:text-boma-rust-light transition-colors underline underline-offset-2">
                  {siteData.phone}
                </a>
                {' '}to make arrangements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BookingCTA() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="section-padding py-24 md:py-32 bg-boma-off-white">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-boma-rust/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-boma-rust-dark font-medium">Ready to Dine?</span>
            <span className="w-8 h-px bg-boma-rust/40" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-boma-charcoal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Book Your Evening
          </h2>

          <p className="text-lg text-boma-charcoal/80 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'var(--font-accent)' }}>
            Reservations are strongly recommended. Book The Boma when planning your Victoria Falls itinerary
            for an unforgettable evening of food, culture and entertainment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={siteData.bookingUrl} className="btn-primary">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`tel:${siteData.phone}`} className="btn-secondary">
              <Phone className="w-4 h-4" />
              {siteData.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Menu() {
  return (
    <main>
      <HeroBanner />
      <Introduction />
      <QuoteBreak
        image="https://vfsc-umbraco.live.fireworkx.net/media/zhvikcgu/the-boma-dinner-drum-show-8.png"
        quote="A feast that bombards the senses with the tastes, sights and sounds of Africa."
        attribution="The Boma"
      />
      <MenuSections />
      <KosherNotice />
      <BookingCTA />
    </main>
  )
}
