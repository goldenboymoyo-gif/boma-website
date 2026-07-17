import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Phone, Mail, Download, ChevronDown } from 'lucide-react'
import FallbackImage from '../../components/FallbackImage'
import SectionHeading from '../../components/SectionHeading'
import { useScrollReveal } from '../../hooks/useAnimations'
import { vfscData } from '../../data/vfscData'

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ActivityDetail() {
  const { slug } = useParams()
  const data = vfscData.activities
  const activity = data.activities.find((a) => toSlug(a.name) === slug)

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-boma-charcoal mb-4">Activity not found</h1>
          <Link to="/activities" className="text-boma-rust hover:text-boma-rust/80 text-sm">
            Back to Activities
          </Link>
        </div>
      </div>
    )
  }

  const related = data.activities
    .filter((a) => a.name !== activity.name && a.tags.some((t) => activity.tags.includes(t)))
    .slice(0, 3)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <FallbackImage
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-boma-charcoal/60 via-boma-charcoal/30 to-boma-charcoal/90" />
        </div>

        <div className="relative z-10 section-padding pb-16 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Activities
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {activity.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-boma-rust bg-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {activity.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-20 md:py-28 bg-boma-off-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-4">About this activity</h2>
              <p className="text-boma-charcoal/80 text-base leading-relaxed mb-8">{activity.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activity.tags.map((tag) => (
                  <span key={tag} className="text-xs text-boma-charcoal/50 bg-boma-charcoal/5 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {related.length > 0 && (
                <div className="mt-12 pt-12 border-t border-boma-charcoal/10">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-6">Related Activities</h2>
                  <div className="space-y-6">
                    {related.map((item) => (
                      <Link
                        key={item.name}
                        to={`/activities/${toSlug(item.name)}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-20 shrink-0 overflow-hidden rounded">
                          <FallbackImage
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-boma-charcoal group-hover:text-boma-rust transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <p className="text-xs text-boma-charcoal/50 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enquiry */}
              <div className="bg-white p-6 border border-boma-rust/10">
                <h3 className="text-sm uppercase tracking-wider text-boma-charcoal/60 mb-4">Enquire</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+263832843232"
                    className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors"
                  >
                    <Phone className="w-4 h-4 text-boma-rust" />
                    <span className="text-sm">+263 83 284 3232</span>
                  </a>
                  <a
                    href="mailto:bomareservations@vfsl.co.zw"
                    className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors"
                  >
                    <Mail className="w-4 h-4 text-boma-rust" />
                    <span className="text-sm">bomareservations@vfsl.co.zw</span>
                  </a>
                </div>
                <div className="mt-5">
                  <a href="/booking" className="btn-primary w-full text-xs justify-center">
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Downloads */}
              {data.downloads && data.downloads.length > 0 && (
                <div className="bg-white p-6 border border-boma-rust/10">
                  <h3 className="text-sm uppercase tracking-wider text-boma-charcoal/60 mb-4">Downloads</h3>
                  {data.downloads.map((dl, i) => (
                    <a
                      key={i}
                      href={dl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors group"
                    >
                      <Download className="w-4 h-4 text-boma-rust" />
                      <span className="text-sm group-hover:text-boma-rust transition-colors">{dl.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <FaqSection faqs={data.faqs} />
      )}
    </motion.div>
  )
}

function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref } = useScrollReveal()

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-boma-charcoal">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about activities in Victoria Falls"
          light
        />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <ChevronDown className="w-4 h-4 text-boma-rust flex-shrink-0 rotate-180" />
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
