import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react'
import VideoHero from '../../components/VideoHero'
import SectionHeading from '../../components/SectionHeading'
import { useScrollReveal } from '../../hooks/useAnimations'
import FallbackImage from '../../components/FallbackImage'
import { cn } from '../../lib/utils'
import { vfscData } from '../../data/vfscData'

function HeroBanner() {
  const data = vfscData.accommodation

  return (
    <VideoHero
      badge="Victoria Falls Safari Collection"
      title={data.title}
      subtitle="Four distinctive properties, each offering a unique way to experience the magic of Victoria Falls."
      poster={data.heroImage}
      height="h-[70vh]"
      minHeight="min-h-[500px]"
      align="center"
      showVideo={false}
    />
  )
}

function AccommodationCard({ option, index }) {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group bg-white border border-boma-rust/10 hover:border-boma-rust/30 transition-all duration-500 hover:shadow-xl hover:shadow-boma-rust/5"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <FallbackImage
          src={option.thumbnail}
          alt={option.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/60 to-transparent" />
        <h3
          className="absolute bottom-4 left-5 text-2xl font-bold text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {option.name}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-boma-charcoal/70 text-sm leading-relaxed mb-5">{option.description}</p>

        <div className="space-y-2 mb-6">
          {option.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-boma-rust mt-1.5 flex-shrink-0" />
              <span className="text-boma-charcoal/75 text-xs leading-relaxed">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/accommodation/${option.slug}`}
            className="btn-secondary text-xs flex-1 justify-center"
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={option.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs flex-1 justify-center"
          >
            Book Now
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function AccommodationList() {
  const { ref, isInView } = useScrollReveal()
  const data = vfscData.accommodation

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-boma-off-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Properties"
          subtitle="Choose from four exceptional properties on the Victoria Falls Safari Lodge estate"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {data.options.map((option, i) => (
            <AccommodationCard key={option.slug} option={option} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, isInView } = useScrollReveal()

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-boma-charcoal">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about staying with us"
          light
        />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm text-white/90 font-medium pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-boma-rust flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/70 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-white/75 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Accommodation() {
  const data = vfscData.accommodation

  return (
    <main>
      <HeroBanner />
      <AccommodationList />
      <FaqAccordion faqs={data.faqs} />
    </main>
  )
}
