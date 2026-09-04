import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, Phone, Mail, Download } from 'lucide-react'
import VideoHero from '../../components/VideoHero'
import FallbackImage from '../../components/FallbackImage'
import SectionHeading from '../../components/SectionHeading'
import { vfscData } from '../../data/vfscData'

export default function FunctionsAndEvents() {
  const data = vfscData.functionsAndEvents

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <VideoHero
        badge="Victoria Falls Safari Collection"
        title={data.title}
        subtitle="Create unforgettable moments at our versatile venues — from intimate celebrations to grand conferences."
        poster={data.heroImage}
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="center"
        showScroll={false}
      />

      {/* Venues */}
      <section className="section-padding py-20 md:py-28 bg-boma-off-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Venues" subtitle="Versatile spaces for every occasion" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {data.options.map((venue, i) => (
              <motion.div
                key={venue.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/functions-and-events/${venue.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <FallbackImage
                      src={venue.thumbnail}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{venue.name}</h3>
                      <span className="inline-flex items-center gap-2 text-boma-rust-light group-hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">
                        View Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
                <p className="text-boma-charcoal/70 text-sm leading-relaxed mb-3">{venue.description}</p>
                <div className="flex flex-wrap gap-2">
                  {venue.highlights.map((h) => (
                    <span key={h} className="text-xs text-boma-charcoal/50 bg-boma-charcoal/5 px-3 py-1 rounded-full">{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="section-padding py-20 md:py-28 bg-boma-charcoal">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about functions and events"
              light
            />
            <div className="mt-12 space-y-3">
              {data.faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA */}
      <section className="section-padding py-16 md:py-20 bg-boma-rust">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Planning an Event?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our dedicated events team will help you plan the perfect conference, wedding or celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+263832843201"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-boma-rust font-semibold text-sm uppercase tracking-wider hover:bg-boma-off-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +263 832 843 201
            </a>
            <a
              href="mailto:meetings@vfsl.co.zw"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm text-white/90 font-medium pr-4">{faq.q}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-boma-rust shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/70 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
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
    </div>
  )
}
